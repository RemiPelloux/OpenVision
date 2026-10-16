import { init_dist7 } from "../../../agent-core/dist/index.js";
import { AsyncEventBuffer, init_async_event_fanout } from "./async-event-fanout.js";
import { init_proto_clone } from "./proto-clone.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../context/dist/index.js";
import { AgentHostInteractionResponseStatus, init_agent_host_pb } from "../../../proto/dist/generated/agent/v1/agent_host_pb.js";
import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
import { asksTheSameThing, cloneOneofArm, failClosedAnswer, isBubbledSubagentRequestId, questionKind, refuseAnswer, toInteractionError } from "../../../tree_chunk_napi_exports.js";
var logger120, INTERACTION_KEY_REUSE_METRIC, AgentHostInvalidInteractionResponseError, AgentHostInteractionRegistry;
export { AgentHostInteractionRegistry, AgentHostInvalidInteractionResponseError, INTERACTION_KEY_REUSE_METRIC, logger120 };
var __wakaru_init_interaction_registry_initialized = false;
export function init_interaction_registry() {
if (__wakaru_init_interaction_registry_initialized) return;
__wakaru_init_interaction_registry_initialized = true;
"use strict";
init_dist7();
init_dist();
init_agent_host_pb();
init_agent_pb();
init_async_event_fanout();
init_proto_clone();
logger120 = createLogger("agent-host:interactions");
INTERACTION_KEY_REUSE_METRIC = "agent_host.interaction.key_reuse";
AgentHostInvalidInteractionResponseError = class extends Error {
    constructor(message){
        super(message);
        this.code = "INTERACTION_RESPONSE_INVALID";
        this.name = "AgentHostInvalidInteractionResponseError";
    }
};
AgentHostInteractionRegistry = class {
    constructor(events, callbacks){
        this.events = events;
        this.callbacks = callbacks;
        this.pending = new Map();
        this.resolved = new Map();
        this.watchQueues = new Set();
        this.closed = false;
        events.setPendingInteractionsSource(()=>this.pendingAwaitingInputs());
    }
    async query(ctx, turnId, query, options2) {
        const answer = await this.hold(ctx, turnId, {
            case: "interactionQuery",
            value: query
        }, {
            interactionId: options2?.interactionId ?? `${turnId}:${query.id}`,
            requestId: options2?.requestId ?? String(query.id)
        });
        if (answer.case !== "responded") {
            throw new Error(`Agent query ${query.id} settled with a ${answer.case} answer`);
        }
        return answer.value;
    }
    async askHostQuestion(ctx, turnId, question, key) {
        if (this.pending.has(key.interactionId) || this.resolved.has(key.interactionId)) {
            throw new Error(`Host question key ${key.interactionId} is already in use`);
        }
        const answer = await this.hold(ctx, turnId, question, key);
        if (answer.case === "responded") {
            throw new Error(`Host question ${key.interactionId} settled with an agent response`);
        }
        return answer;
    }
    respond(interactionId, response) {
        return this.accept(interactionId, {
            case: "responded",
            value: response
        });
    }
    respondToHostQuestion(interactionId, answer) {
        return this.accept(interactionId, answer);
    }
    async hold(ctx, turnId, question, key) {
        if (this.closed) {
            throw new Error("Agent host interaction registry is closed");
        }
        const baseInteractionId = key.interactionId;
        const interactionId = this.keyFor(baseInteractionId, question);
        const { requestId } = key;
        const keys = {
            baseInteractionId,
            interactionId
        };
        const resolved = this.resolved.get(interactionId);
        if (resolved !== void 0) {
            this.reportKeyReuse(ctx, question, "replayed", keys);
            if (resolved.case === "responded") {
                return cloneOneofArm(resolved.answer);
            }
            throw resolved.error;
        }
        const existing = this.pending.get(interactionId);
        if (existing !== void 0) {
            this.reportKeyReuse(ctx, question, "joined", keys);
            return existing.promise;
        }
        if (interactionId !== baseInteractionId) {
            this.reportKeyReuse(ctx, question, "reassigned", keys);
        }
        const deferred = Promise.withResolvers();
        const eventId = this.events.appendTurnAwaitingInput(turnId, requestId, interactionId, question);
        this.pending.set(interactionId, {
            eventId,
            turnId,
            requestId,
            question: cloneOneofArm(question),
            promise: deferred.promise,
            resolve: deferred.resolve,
            reject: deferred.reject
        });
        this.callbacks?.onAwaitingInputStarted?.();
        this.emitState();
        const onAbort = ()=>{
            this.rejectInteraction(interactionId, "cancelled", toInteractionError(ctx.signal.reason));
        };
        if (ctx.signal.aborted) {
            onAbort();
        } else {
            ctx.signal.addEventListener("abort", onAbort, {
                once: true
            });
        }
        try {
            return await deferred.promise;
        } finally{
            ctx.signal.removeEventListener("abort", onAbort);
            this.callbacks?.onAwaitingInputEnded?.();
        }
    }
    accept(interactionId, answer) {
        const pending = this.pending.get(interactionId);
        if (pending === void 0) {
            return this.resolved.has(interactionId) ? AgentHostInteractionResponseStatus.ALREADY_RESOLVED : AgentHostInteractionResponseStatus.NOT_FOUND;
        }
        const refusal = refuseAnswer(pending.question, answer);
        if (refusal !== void 0) {
            throw new AgentHostInvalidInteractionResponseError(refusal);
        }
        const acceptedAnswer = cloneOneofArm(answer);
        this.pending.delete(interactionId);
        this.resolved.set(interactionId, {
            question: pending.question,
            case: "responded",
            answer: acceptedAnswer
        });
        this.events.appendInteractionResolved(pending.turnId, interactionId, acceptedAnswer);
        this.emitState();
        pending.resolve(acceptedAnswer);
        if (pending.question.case === "interactionQuery" && acceptedAnswer.case === "responded") {
            this.callbacks?.onInteractionResponded?.(pending.question.value, acceptedAnswer.value);
        }
        return AgentHostInteractionResponseStatus.ACCEPTED;
    }
    cancelTurn(turnId, reason, options2) {
        const reasonError = toInteractionError(reason);
        for (const [interactionId, pending] of [
            ...this.pending
        ]){
            if (pending.turnId !== turnId) {
                continue;
            }
            if (options2?.settleRejectBubbled === true && isBubbledSubagentRequestId(pending.requestId)) {
                this.settleRejectInteraction(interactionId, reasonError.message);
                continue;
            }
            this.rejectInteraction(interactionId, "cancelled", reasonError);
        }
    }
    settleRejectByRequestId(args) {
        const rejectReason = typeof args.reason === "string" && args.reason.length > 0 ? args.reason : "Subagent force-backgrounded; cancelling pending bubbled interaction";
        for (const [interactionId, pending] of [
            ...this.pending
        ]){
            if (pending.requestId !== args.requestId) {
                continue;
            }
            this.settleRejectInteraction(interactionId, rejectReason);
        }
    }
    async *watch(ctx) {
        const queue = {
            events: new AsyncEventBuffer(),
            notify: void 0
        };
        this.watchQueues.add(queue);
        try {
            if (this.closed) {
                return;
            }
            yield {
                event: {
                    case: "snapshot",
                    value: {
                        interactions: this.snapshot()
                    }
                }
            };
            while(!ctx.signal.aborted && !this.closed){
                const event = queue.events.shift();
                if (event !== void 0) {
                    yield event;
                    continue;
                }
                await this.waitForEvent(ctx, queue);
            }
        } finally{
            this.watchQueues.delete(queue);
            queue.notify?.();
            queue.notify = void 0;
        }
    }
    close(reason = "Agent host interaction registry closed") {
        if (this.closed) {
            return [];
        }
        this.closed = true;
        const turnIds = new Set();
        for (const [interactionId, pending] of this.pending){
            turnIds.add(pending.turnId);
            this.rejectInteraction(interactionId, "cancelled", toInteractionError(reason));
        }
        for (const queue of this.watchQueues){
            queue.notify?.();
            queue.notify = void 0;
        }
        return [
            ...turnIds
        ];
    }
    keyFor(base, question) {
        for(let n = 0;; n++){
            const key = n === 0 ? base : `${base}#${n}`;
            const holder = this.pending.get(key)?.question ?? this.resolved.get(key)?.question;
            if (holder === void 0 || asksTheSameThing(holder, question)) {
                return key;
            }
        }
    }
    reportKeyReuse(ctx, question, outcome, keys) {
        const queryCase = questionKind(question) ?? "unknown";
        const fields = {
            ...keys,
            queryCase,
            outcome
        };
        if (outcome === "reassigned") {
            logger120.warn(ctx, "Interaction key held by a different question; asking under a new key", fields);
        } else {
            logger120.info(ctx, "Interaction key reused by the same question", fields);
        }
        try {
            this.callbacks?.onInteractionKeyReuse?.({
                outcome,
                queryCase
            });
        } catch (error3) {
            logger120.warn(ctx, "Interaction key reuse report failed", {
                error: String(error3)
            });
        }
    }
    collectPendingEntries() {
        return [
            ...this.pending
        ].map(([interactionId, pending])=>({
                interactionId,
                turnId: pending.turnId,
                question: pending.question
            }));
    }
    cloneSnapshotEntries(entries) {
        return entries.map((entry)=>({
                interactionId: entry.interactionId,
                turnId: entry.turnId,
                question: cloneOneofArm(entry.question)
            }));
    }
    snapshot() {
        return this.cloneSnapshotEntries(this.collectPendingEntries());
    }
    pendingAwaitingInputs() {
        return [
            ...this.pending
        ].map(([interactionId, pending])=>({
                eventId: pending.eventId,
                turnId: pending.turnId,
                requestId: pending.requestId,
                interactionId,
                question: cloneOneofArm(pending.question)
            }));
    }
    emitState() {
        if (this.closed || this.watchQueues.size === 0) {
            return;
        }
        const base = this.collectPendingEntries();
        for (const queue of this.watchQueues){
            queue.events.push({
                event: {
                    case: "state",
                    value: {
                        interactions: this.cloneSnapshotEntries(base)
                    }
                }
            });
            queue.notify?.();
            queue.notify = void 0;
        }
    }
    settleRejectInteraction(interactionId, rejectReason) {
        const pending = this.pending.get(interactionId);
        if (pending === void 0) {
            return;
        }
        const answer = failClosedAnswer(pending.question, rejectReason);
        if (answer !== void 0) {
            this.accept(interactionId, answer);
            return;
        }
        this.rejectInteraction(interactionId, "cancelled", new Error(rejectReason));
    }
    rejectInteraction(interactionId, resolutionCase, error3) {
        const pending = this.pending.get(interactionId);
        if (pending === void 0) {
            return;
        }
        this.pending.delete(interactionId);
        this.resolved.set(interactionId, {
            question: pending.question,
            case: resolutionCase,
            error: error3
        });
        if (resolutionCase === "cancelled") {
            this.events.appendInteractionResolved(pending.turnId, interactionId, {
                case: "cancelled",
                value: {
                    reason: error3.message
                }
            });
        } else {
            this.events.appendInteractionResolved(pending.turnId, interactionId, {
                case: "failed",
                value: {
                    error: error3.message
                }
            });
        }
        this.emitState();
        pending.reject(error3);
    }
    waitForEvent(ctx, queue) {
        return new Promise((resolve36)=>{
            if (ctx.signal.aborted || this.closed || queue.events.length > 0) {
                resolve36();
                return;
            }
            const cleanup = ()=>{
                if (queue.notify === onEvent) {
                    queue.notify = void 0;
                }
                ctx.signal.removeEventListener("abort", onAbort);
            };
            const onEvent = ()=>{
                cleanup();
                resolve36();
            };
            const onAbort = ()=>{
                cleanup();
                resolve36();
            };
            queue.notify = onEvent;
            ctx.signal.addEventListener("abort", onAbort, {
                once: true
            });
        });
    }
};

}
