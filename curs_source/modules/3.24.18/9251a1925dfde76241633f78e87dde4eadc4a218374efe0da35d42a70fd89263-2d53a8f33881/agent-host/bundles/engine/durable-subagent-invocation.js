import { ConversationAction, ResumeAction, UserMessage, UserMessageAction, init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
var MAX_VERIFIED_DURABLE_REPLAY_CHILD_IDS, DurableSubagentInvocationCoordinator;
export { DurableSubagentInvocationCoordinator, MAX_VERIFIED_DURABLE_REPLAY_CHILD_IDS };
var __wakaru_init_durable_subagent_invocation_initialized = false;
export function init_durable_subagent_invocation() {
if (__wakaru_init_durable_subagent_invocation_initialized) return;
__wakaru_init_durable_subagent_invocation_initialized = true;
"use strict";
init_agent_pb();
MAX_VERIFIED_DURABLE_REPLAY_CHILD_IDS = 100;
DurableSubagentInvocationCoordinator = class {
    constructor(options2){
        this.options = options2;
        this.replayByToolCallId = new Map();
        this.executionByToolCallId = new Map();
        this.verifiedReplayChildIds = new Set();
        this.capturedRootSessionId = options2.rootSessionId;
    }
    clearReplayForExplicitContinuation(args) {
        if (args.resumeAgentId || args.forkAgentId) {
            this.replayByToolCallId.delete(args.toolCallId.trim());
        }
    }
    async findIndexedReplayChild(args, skipLookup) {
        const findExistingChildSessionId = this.options.findExistingChildSessionId;
        const parentToolCallId = args.toolCallId.trim();
        if (findExistingChildSessionId === void 0 || skipLookup || args.resumeAgentId || args.forkAgentId || !parentToolCallId) {
            return void 0;
        }
        const childSessionId = (await findExistingChildSessionId({
            parentToolCallId
        }))?.trim();
        return childSessionId !== void 0 && this.options.isValidChildSessionId(childSessionId) ? childSessionId : void 0;
    }
    rememberVerifiedReplayChild(childSessionId) {
        if (!this.verifiedReplayChildIds.has(childSessionId) && this.verifiedReplayChildIds.size >= MAX_VERIFIED_DURABLE_REPLAY_CHILD_IDS) {
            const oldest = this.verifiedReplayChildIds.values().next().value;
            if (oldest !== void 0) {
                this.verifiedReplayChildIds.delete(oldest);
            }
        }
        this.verifiedReplayChildIds.add(childSessionId);
    }
    takeVerifiedReplayChild(childSessionId) {
        return this.verifiedReplayChildIds.delete(childSessionId);
    }
    async claim({ args, proposedChildSessionId, indexedChildSessionId }) {
        const store = this.options.store;
        const parentToolCallId = args.toolCallId.trim();
        if (!this.options.enabled || store === void 0 || args.resumeAgentId || args.forkAgentId || !parentToolCallId) {
            return void 0;
        }
        const claim = await store.claim({
            parentSessionId: this.options.parentSessionId,
            rootSessionId: this.rootSessionId(),
            parentToolCallId,
            proposedChildSessionId: indexedChildSessionId ?? proposedChildSessionId
        });
        if (!this.options.isValidChildSessionId(claim.invocation.childSessionId)) {
            throw new Error(`Durable Task invocation has invalid child session id: ${claim.invocation.childSessionId}`);
        }
        let replayResumeAgentId;
        if (claim.kind === "existing") {
            replayResumeAgentId = claim.invocation.childSessionId;
        } else if (indexedChildSessionId !== void 0 && indexedChildSessionId === claim.invocation.childSessionId) {
            replayResumeAgentId = indexedChildSessionId;
        }
        if (replayResumeAgentId !== void 0) {
            this.replayByToolCallId.set(parentToolCallId, claim.invocation);
            return {
                replayResumeAgentId
            };
        }
        return {
            claimedChildSessionId: claim.invocation.childSessionId
        };
    }
    completedOutcome({ parentToolCallId, childSessionId }) {
        const replay = this.replayByToolCallId.get(parentToolCallId.trim());
        if (replay?.kind !== "completed" || replay.childSessionId !== childSessionId) {
            return void 0;
        }
        return replay.outcome;
    }
    runOnce(args, execute) {
        const parentToolCallId = args.toolCallId.trim();
        if (!this.options.enabled || this.options.store === void 0 || args.resumeAgentId || args.forkAgentId || !parentToolCallId) {
            return execute();
        }
        const existing = this.executionByToolCallId.get(parentToolCallId);
        if (existing !== void 0) {
            return existing;
        }
        const execution = execute();
        this.executionByToolCallId.set(parentToolCallId, execution);
        const cleanup = ()=>{
            if (this.executionByToolCallId.get(parentToolCallId) === execution) {
                this.executionByToolCallId.delete(parentToolCallId);
            }
        };
        void execution.then(cleanup, cleanup);
        return execution;
    }
    async shouldResumeCheckpoint(args, childSessionId, state) {
        const parentToolCallId = args.toolCallId.trim();
        const replay = this.replayByToolCallId.get(parentToolCallId);
        const shouldResume = replay?.kind === "checkpointed" || replay?.kind === "started" && state.toBinary().length > 0;
        if (!shouldResume) {
            return false;
        }
        this.replayByToolCallId.delete(parentToolCallId);
        if (replay?.kind === "started") {
            await this.markCheckpointed(args, childSessionId);
        }
        return true;
    }
    async createConversationAction(args, childSessionId, state, mode) {
        if (await this.shouldResumeCheckpoint(args, childSessionId, state)) {
            return new ConversationAction({
                action: {
                    case: "resumeAction",
                    value: new ResumeAction()
                }
            });
        }
        return new ConversationAction({
            action: {
                case: "userMessageAction",
                value: new UserMessageAction({
                    userMessage: new UserMessage({
                        text: args.prompt,
                        mode,
                        ...args.selectedContext === void 0 ? {} : {
                            selectedContext: args.selectedContext
                        }
                    })
                })
            }
        });
    }
    async markCheckpointed(args, childSessionId) {
        const key = this.key(args, childSessionId);
        if (key !== void 0) {
            await this.options.store?.markCheckpointed(key);
        }
    }
    async markCompleted(args, childSessionId, outcome) {
        if (outcome.status !== "completed" && outcome.status !== "background") {
            return;
        }
        const key = this.key(args, childSessionId);
        if (key !== void 0) {
            await this.options.store?.markCompleted({
                ...key,
                outcome
            });
        }
    }
    key(args, childSessionId) {
        if (this.options.store === void 0 || args.resumeAgentId || args.forkAgentId) {
            return void 0;
        }
        const parentToolCallId = args.toolCallId.trim();
        if (!parentToolCallId) {
            return void 0;
        }
        return {
            parentSessionId: this.options.parentSessionId,
            rootSessionId: this.rootSessionId(),
            parentToolCallId,
            childSessionId
        };
    }
    rootSessionId() {
        return this.options.getRootSessionId?.() ?? this.capturedRootSessionId;
    }
};

}
