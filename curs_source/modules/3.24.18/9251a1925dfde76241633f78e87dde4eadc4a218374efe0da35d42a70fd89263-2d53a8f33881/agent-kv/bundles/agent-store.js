import { init_blob_store } from "./blob-store.js";
import { ProtoSerde, init_serde } from "./serde.js";
import { init_subagent_states } from "./subagent-states.js";
import { deriveConversationStateFromStructure, generateBlobEncryptionKeyHex, getBlobId, resolveSubagentPersistedStates } from "../../dist_exports.js";
import { ConversationStateStructure, ConversationStep, ConversationSummary, ConversationTurnStructure, ShellCommand, ShellOutput, UserMessage, init_agent_pb } from "../../proto/dist/generated/agent/v1/agent_pb.js";
import { TodoItem, init_todo_tool_pb } from "../../proto/dist/generated/agent/v1/todo_tool_pb.js";
import { Disposable } from "../../utils/dist/disposable.js";
import { init_dist3 } from "../../utils/dist/index.js";
var AgentModes, ApprovalModeSettings, BLOB_ENCRYPTION_KEY_LENGTH_BYTES, BLOB_ENCRYPTION_KEY_HEX_PATTERN, getDefaultAgentMetadata, agentModeSet, approvalModeSettingSet, todoItemSerde, userMessageSerde, conversationStepSerde, conversationTurnStructureSerde, conversationSummarySerde, shellCommandSerde, shellOutputSerde, AgentStore;
export { AgentModes, AgentStore, ApprovalModeSettings, BLOB_ENCRYPTION_KEY_HEX_PATTERN, BLOB_ENCRYPTION_KEY_LENGTH_BYTES, agentModeSet, approvalModeSettingSet, conversationStepSerde, conversationSummarySerde, conversationTurnStructureSerde, getDefaultAgentMetadata, shellCommandSerde, shellOutputSerde, todoItemSerde, userMessageSerde };
var __wakaru_init_agent_store_initialized = false;
export function init_agent_store() {
if (__wakaru_init_agent_store_initialized) return;
__wakaru_init_agent_store_initialized = true;
"use strict";
init_agent_pb();
init_todo_tool_pb();
init_dist3();
init_blob_store();
init_serde();
init_subagent_states();
AgentModes = [
    "default",
    "plan",
    "debug",
    "search"
];
ApprovalModeSettings = [
    "allowlist",
    "unrestricted",
    "auto-review"
];
BLOB_ENCRYPTION_KEY_LENGTH_BYTES = 32;
BLOB_ENCRYPTION_KEY_HEX_PATTERN = /^[0-9a-f]+$/;
getDefaultAgentMetadata = (agentId)=>({
        agentId: agentId ?? crypto.randomUUID(),
        latestRootBlobId: new Uint8Array(),
        name: "New Agent",
        mode: "default",
        isRunEverything: false,
        approvalMode: void 0,
        createdAt: Date.now(),
        lastUsedModel: void 0,
        lastDebugServerPort: void 0,
        currentPlanUri: void 0,
        subagentInfo: void 0,
        blobEncryptionKey: generateBlobEncryptionKeyHex()
    });
agentModeSet = new Set(AgentModes);
approvalModeSettingSet = new Set(ApprovalModeSettings);
todoItemSerde = new ProtoSerde(TodoItem);
userMessageSerde = new ProtoSerde(UserMessage);
conversationStepSerde = new ProtoSerde(ConversationStep);
conversationTurnStructureSerde = new ProtoSerde(ConversationTurnStructure);
conversationSummarySerde = new ProtoSerde(ConversationSummary);
shellCommandSerde = new ProtoSerde(ShellCommand);
shellOutputSerde = new ProtoSerde(ShellOutput);
AgentStore = class {
    constructor(blobStore, metadataStore, options2 = {}){
        this.blobStore = blobStore;
        this.metadataStore = metadataStore;
        this.serde = new ProtoSerde(ConversationStateStructure);
        this.conversationStateStructure = new ConversationStateStructure();
        this.fixedRootBlobId = options2.fixedRootBlobId;
    }
    subscribeToMetadata(key, callback) {
        return this.metadataStore.subscribe(key, ()=>{
            callback(this.metadataStore.get(key));
        });
    }
    setMetadata(key, value) {
        this.metadataStore.set(key, value);
    }
    getMetadata(key) {
        return this.metadataStore.get(key);
    }
    getId() {
        return this.getMetadata("agentId");
    }
    getBlobStore() {
        return this.blobStore;
    }
    getConversationStateStructure() {
        return this.conversationStateStructure;
    }
    async getLastRequestIdFromConversation(ctx) {
        const turns = this.conversationStateStructure.turns;
        if (turns.length === 0) return null;
        for(let i = turns.length - 1; i >= 0; i--){
            const turnBlobId = turns[i];
            const turnBlob = await this.blobStore.getBlob(ctx, turnBlobId);
            if (!turnBlob) continue;
            const turnStructure = conversationTurnStructureSerde.deserialize(turnBlob);
            if (turnStructure.turn.case === "agentConversationTurn") {
                const requestId = turnStructure.turn.value.requestId;
                return requestId ?? null;
            }
        }
        return null;
    }
    async getFullConversation(ctx) {
        return this.deserializeConversationStateStructure(ctx, this.conversationStateStructure);
    }
    async deserializeConversationStateStructure(ctx, structure) {
        return deriveConversationStateFromStructure(ctx, structure, this.blobStore);
    }
    async getFullConversationWithSubagents(ctx) {
        const structureSnapshot = this.conversationStateStructure;
        const conversationState = await this.deserializeConversationStateStructure(ctx, structureSnapshot);
        const subagentStates = {};
        const persistedSubagentStates = await resolveSubagentPersistedStates(ctx, structureSnapshot, this.blobStore);
        for (const [agentId, persistedState] of Object.entries(persistedSubagentStates)){
            if (persistedState.conversationState) {
                const subagentConversation = await this.deserializeConversationStateStructure(ctx, persistedState.conversationState);
                subagentStates[agentId] = {
                    conversationState: subagentConversation,
                    createdTimestampMs: persistedState.createdTimestampMs,
                    lastUsedTimestampMs: persistedState.lastUsedTimestampMs,
                    subagentType: persistedState.subagentType
                };
            }
        }
        return {
            conversationState,
            subagentStates
        };
    }
    getLatestCheckpoint() {
        return this.getConversationStateStructure();
    }
    async handleCheckpoint(ctx, checkpoint) {
        const bytes = this.serde.serialize(checkpoint);
        const blobId = this.fixedRootBlobId ?? await getBlobId(bytes);
        await this.blobStore.setBlob(ctx, blobId, bytes);
        this.setMetadata("latestRootBlobId", blobId);
        this.conversationStateStructure = checkpoint;
    }
    async resetFromDb(ctx) {
        await this.tryResetFromDb(ctx);
    }
    async tryResetFromDb(ctx) {
        try {
            const rootBlobId = this.getMetadata("latestRootBlobId");
            if (!rootBlobId || rootBlobId.length === 0) {
                this.conversationStateStructure = new ConversationStateStructure();
                return false;
            }
            const bytes = await this.blobStore.getBlob(ctx, rootBlobId);
            if (!bytes) {
                this.conversationStateStructure = new ConversationStateStructure();
                return false;
            }
            const structure = this.serde.deserialize(bytes);
            this.conversationStateStructure = structure;
            return true;
        } catch (_e2) {
            this.conversationStateStructure = new ConversationStateStructure();
            return false;
        }
    }
    async dispose() {
        if (this.blobStore instanceof Disposable) {
            await this.blobStore.dispose();
        }
    }
};

}
