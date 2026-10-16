import { callingConversationStreamMetadataKey, init_calling_conversation_stream_metadata } from "./calling-conversation-stream-metadata.js";
import { init_minter } from "./llm-gateway-credential/minter.js";
import { init_hosted_child_lineage } from "../../engine/hosted-child-lineage.js";
import { init_dist36 } from "../../../../agent-store/sync/dist/index.js";
import { createLlmGatewayCredentialMinterFromEnv, notifyAgentStoreConversationTurn, withTurnRequestIdLineage } from "../../../../tree_chunk_napi_exports.js";
var AgentClientHostAdapter;
export { AgentClientHostAdapter };
var __wakaru_init_agent_client_host_adapter_initialized = false;
export function init_agent_client_host_adapter() {
if (__wakaru_init_agent_client_host_adapter_initialized) return;
__wakaru_init_agent_client_host_adapter_initialized = true;
"use strict";
init_dist36();
init_hosted_child_lineage();
init_calling_conversation_stream_metadata();
init_minter();
AgentClientHostAdapter = class {
    constructor(client, options2 = {}){
        this.client = client;
        this.mintLlmGatewayCredential = options2.llmGatewayCredential === "from-local-env" ? createLlmGatewayCredentialMinterFromEnv() : void 0;
    }
    async run(options2) {
        const mint = this.mintLlmGatewayCredential;
        const runOptions = mint === void 0 ? options2.runOptions : {
            ...options2.runOptions,
            mintLlmGatewayCredential: mint
        };
        const conversationId = options2.runOptions.conversationId;
        const ctx = withTurnRequestIdLineage(options2.ctx, {
            requestId: options2.runOptions.generationUUID,
            parentRequestId: options2.runOptions.parentRequestId,
            rootParentRequestId: options2.runOptions.rootParentRequestId
        }).with(callingConversationStreamMetadataKey, {
            conversationId,
            composerId: options2.runOptions.conversationGroupId ?? conversationId,
            requestId: options2.runOptions.generationUUID ?? "",
            modelName: options2.runOptions.requestedModel?.modelId ?? options2.modelDetails?.modelId ?? "",
            ...options2.runOptions.parentAgentToolCallId ? {
                parentToolCallId: options2.runOptions.parentAgentToolCallId
            } : {}
        });
        notifyAgentStoreConversationTurn(conversationId, "start");
        try {
            await this.client.run(ctx, options2.conversationState, options2.action, options2.modelDetails, options2.interactionListener, options2.resources, options2.blobStore, options2.conversationActionManager, options2.checkpointHandler, options2.mcpTools, runOptions);
        } finally{
            notifyAgentStoreConversationTurn(conversationId, "end");
        }
    }
    dispose() {}
};

}
