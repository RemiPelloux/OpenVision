import { AgentHostNoActiveParentTurnError, init_interaction_errors } from "./interaction-errors.js";
import { bubbledSubagentInteractionId, bubbledSubagentRequestId, surfacedSubagentInteractionId, surfacedSubagentRequestId } from "../../../tree_chunk_napi_exports.js";
var AgentHostInteractionListener;
export { AgentHostInteractionListener };
var __wakaru_init_interaction_listener2_initialized = false;
export function init_interaction_listener2() {
if (__wakaru_init_interaction_listener2_initialized) return;
__wakaru_init_interaction_listener2_initialized = true;
"use strict";
init_interaction_errors();
AgentHostInteractionListener = class {
    constructor(sessionId, events, registry2){
        this.sessionId = sessionId;
        this.events = events;
        this.registry = registry2;
        this.bubbledInteractionSeq = 0;
        this.hostInteractionSeq = 0;
        this.surfacedInteractionSeq = 0;
    }
    setActiveTurnId(turnId) {
        const previous = this.activeTurnId;
        this.activeTurnId = turnId;
        if (turnId === void 0 && previous !== void 0) {
            this.registry.cancelTurn(previous, new Error("Parent turn ended while interaction was still pending"), {
                settleRejectBubbled: true
            });
        }
    }
    cancelBubbledFromChild(correlation, reason) {
        this.registry.settleRejectByRequestId({
            requestId: bubbledSubagentRequestId(correlation),
            reason: reason ?? "Subagent force-backgrounded; cancelling pending bubbled interaction"
        });
    }
    getActiveTurnId() {
        return this.activeTurnId;
    }
    setUpdateInterceptor(intercept) {
        this.interceptUpdate = intercept;
    }
    async sendUpdate(_ctx, update) {
        if (this.interceptUpdate?.(update) === true) {
            return;
        }
        this.events.appendInteractionUpdate(update);
    }
    async query(ctx, query) {
        const turnId = this.activeTurnId;
        if (turnId === void 0) {
            throw new Error(`Agent host interaction query has no active turn: ${this.sessionId}`);
        }
        return this.registry.query(ctx, turnId, query);
    }
    async queryFromChild(ctx, query, correlation) {
        const { turnId, key } = this.bubbledKey(correlation, query.id);
        return this.registry.query(ctx, turnId, query, key);
    }
    async querySurfacedForSubagent(ctx, query, correlation) {
        const { turnId, key } = this.surfacedKey(correlation, query.id);
        return this.registry.query(ctx, turnId, query, key);
    }
    async askHostQuestion(ctx, question) {
        const turnId = this.activeTurnId;
        if (turnId === void 0) {
            throw new Error(`Agent host question has no active turn: ${this.sessionId}`);
        }
        const seq2 = ++this.hostInteractionSeq;
        return this.registry.askHostQuestion(ctx, turnId, question, {
            requestId: `host:${seq2}`,
            interactionId: `${turnId}:host:${seq2}`
        });
    }
    async askHostQuestionFromChild(ctx, question, correlation) {
        const { turnId, key } = this.bubbledKey(correlation, 0);
        return this.registry.askHostQuestion(ctx, turnId, question, key);
    }
    async askHostQuestionSurfacedForSubagent(ctx, question, correlation) {
        const { turnId, key } = this.surfacedKey(correlation, 0);
        return this.registry.askHostQuestion(ctx, turnId, question, key);
    }
    bubbledKey(correlation, queryId) {
        const turnId = this.activeTurnId;
        if (turnId === void 0) {
            throw new AgentHostNoActiveParentTurnError(this.sessionId);
        }
        const seq2 = ++this.bubbledInteractionSeq;
        return {
            turnId,
            key: {
                requestId: bubbledSubagentRequestId(correlation),
                interactionId: bubbledSubagentInteractionId({
                    turnId,
                    correlation,
                    queryId,
                    seq: seq2
                })
            }
        };
    }
    surfacedKey(correlation, queryId) {
        const turnId = this.activeTurnId;
        if (turnId === void 0) {
            throw new Error(`Agent host surfaced interaction has no active child turn: ${this.sessionId}`);
        }
        const seq2 = ++this.surfacedInteractionSeq;
        return {
            turnId,
            key: {
                requestId: surfacedSubagentRequestId(correlation),
                interactionId: surfacedSubagentInteractionId({
                    turnId,
                    correlation,
                    queryId,
                    seq: seq2
                })
            }
        };
    }
};

}
