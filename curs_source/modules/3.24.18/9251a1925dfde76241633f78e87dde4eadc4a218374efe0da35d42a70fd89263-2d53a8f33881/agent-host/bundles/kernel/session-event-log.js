import { MaxStepsReachedError } from "../../../agent-client/dist/errors.js";
import { init_dist9 } from "../../../agent-client/dist/index.js";
import { init_proto_clone } from "./proto-clone.js";
import { RetainedWindowBuffer, init_retained_window_buffer } from "./retained-window-buffer.js";
import { RunningTurnReplay, init_running_turn_replay } from "./running-turn-replay.js";
import { SessionEventColumns, init_session_event_soa } from "./session-event-soa.js";
import { init_turn_error } from "./turn-error.js";
import { AgentHostTurnInterruptInitiator, AgentHostTurnOutcome, AgentHostTurnStopReason, init_agent_host_pb } from "../../../proto/dist/generated/agent/v1/agent_host_pb.js";
import { cloneConversationState, completionWakeupKey, normalizeMaxInMemoryEvents, reuseEqualBlobRefs, scanHistoryThroughTurnAos, throwClassicHistoryThroughTurnError, toTurnError, toTurnErrorMessage } from "../../../tree_chunk_napi_exports.js";
var AgentHostSessionEventCursorTooOldError, AgentHostSessionForkHistoryUnavailableError, NOOP_OVERFLOW_SINK, DEFAULT_SUBAGENT_SESSION_EVENT_LOG_MAX_IN_MEMORY_EVENTS, AgentHostSessionEventLog;
export { AgentHostSessionEventCursorTooOldError, AgentHostSessionEventLog, AgentHostSessionForkHistoryUnavailableError, DEFAULT_SUBAGENT_SESSION_EVENT_LOG_MAX_IN_MEMORY_EVENTS, NOOP_OVERFLOW_SINK };
var __wakaru_init_session_event_log_initialized = false;
export function init_session_event_log() {
if (__wakaru_init_session_event_log_initialized) return;
__wakaru_init_session_event_log_initialized = true;
"use strict";
init_dist9();
init_agent_host_pb();
init_proto_clone();
init_retained_window_buffer();
init_running_turn_replay();
init_session_event_soa();
init_turn_error();
AgentHostSessionEventCursorTooOldError = class extends Error {
    constructor(args){
        super(`Agent host session event cursor too old: requested lastEventId=${args.requestedLastEventId === void 0 ? "<start>" : args.requestedLastEventId.toString()}, firstRetainedEventId=${args.firstRetainedEventId.toString()}`);
        this.code = "SESSION_EVENT_CURSOR_TOO_OLD";
        this.name = "AgentHostSessionEventCursorTooOldError";
        this.requestedLastEventId = args.requestedLastEventId;
        this.firstRetainedEventId = args.firstRetainedEventId;
    }
};
AgentHostSessionForkHistoryUnavailableError = class extends Error {
    constructor(args){
        super(args.detail ?? `Agent host fork history unavailable for turn ${args.turnId}: required events were evicted (firstRetainedEventId=${args.firstRetainedEventId.toString()}) and no durable spill restored them`);
        this.code = "SESSION_FORK_HISTORY_UNAVAILABLE";
        this.name = "AgentHostSessionForkHistoryUnavailableError";
        this.turnId = args.turnId;
        this.firstRetainedEventId = args.firstRetainedEventId;
    }
};
NOOP_OVERFLOW_SINK = {
    onEvict: ()=>{}
};
DEFAULT_SUBAGENT_SESSION_EVENT_LOG_MAX_IN_MEMORY_EVENTS = 1e5;
AgentHostSessionEventLog = class {
    constructor(options2 = {}){
        this.events = new RetainedWindowBuffer();
        this.columns = new SessionEventColumns();
        this.runningTurn = new RunningTurnReplay();
        this.waiters = new Set();
        this.nextEventId = BigInt(1);
        this.firstRetainedEventId = BigInt(1);
        this.completionsAwaitingWakeupTurn = new Map();
        this.closed = false;
        this.maxInMemoryEvents = normalizeMaxInMemoryEvents(options2.maxInMemoryEvents);
        this.overflowSink = options2.overflowSink ?? NOOP_OVERFLOW_SINK;
    }
    getLastEventId() {
        return this.nextEventId - BigInt(1);
    }
    getFirstRetainedEventId() {
        return this.firstRetainedEventId;
    }
    getInMemoryEventCount() {
        return this.events.length;
    }
    getPhysicalBufferLength() {
        return this.events.physicalLength;
    }
    getPhysicalLiveEventCount() {
        return this.events.liveCount;
    }
    setOnAppend(onAppend) {
        this.onAppend = onAppend;
    }
    setPendingInteractionsSource(source) {
        this.pendingInteractions = source;
    }
    close() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        this.notifyWaiters();
    }
    appendInteractionUpdate(update) {
        this.append({
            eventId: this.nextEventId,
            event: {
                case: "interactionUpdate",
                value: update
            }
        });
    }
    appendConversationState(state) {
        const previous = this.lastConversationState;
        reuseEqualBlobRefs(state.rootPromptMessagesJson, previous?.rootPromptMessagesJson ?? []);
        reuseEqualBlobRefs(state.turns, previous?.turns ?? []);
        this.lastConversationState = state;
        this.append({
            eventId: this.nextEventId,
            event: {
                case: "conversationState",
                value: state
            }
        });
    }
    appendTurnInteractionsSuperseded(turnId, continuation) {
        switch(continuation.case){
            case "replayActionFromState":
                this.append({
                    eventId: this.nextEventId,
                    event: {
                        case: "turnInteractionsSuperseded",
                        value: {
                            turnId,
                            continuation: {
                                case: "replayActionFromState",
                                value: cloneConversationState(continuation.value)
                            }
                        }
                    }
                });
                return;
            case "resumeFromCheckpoint":
                this.append({
                    eventId: this.nextEventId,
                    event: {
                        case: "turnInteractionsSuperseded",
                        value: {
                            turnId,
                            continuation: {
                                case: "resumeFromCheckpoint",
                                value: cloneConversationState(continuation.value)
                            }
                        }
                    }
                });
                return;
            default:
                {
                    const _exhaustive = continuation;
                    void _exhaustive;
                    return;
                }
        }
    }
    appendTurnStarted(turnId) {
        this.append({
            eventId: this.nextEventId,
            event: {
                case: "turnStarted",
                value: {
                    turnId
                }
            }
        });
    }
    appendTurnAwaitingInput(turnId, requestId, interactionId, question) {
        const eventId = this.nextEventId;
        this.append({
            eventId,
            event: {
                case: "turnAwaitingInput",
                value: {
                    turnId,
                    requestId,
                    interactionId,
                    question
                }
            }
        });
        return eventId;
    }
    appendInteractionResolved(turnId, interactionId, resolution) {
        this.append({
            eventId: this.nextEventId,
            event: {
                case: "interactionResolved",
                value: {
                    turnId,
                    interactionId,
                    resolution
                }
            }
        });
    }
    appendTurnCompleted(turnId) {
        this.append({
            eventId: this.nextEventId,
            event: {
                case: "turnSettled",
                value: {
                    turnId,
                    outcome: AgentHostTurnOutcome.COMPLETED
                }
            }
        });
    }
    appendTurnSettledByError(turnId, error3) {
        if (error3 instanceof MaxStepsReachedError) {
            this.append({
                eventId: this.nextEventId,
                event: {
                    case: "turnSettled",
                    value: {
                        turnId,
                        outcome: AgentHostTurnOutcome.INTERRUPTED,
                        detail: error3.message,
                        interruptedBy: AgentHostTurnInterruptInitiator.HOST,
                        stopReason: AgentHostTurnStopReason.MAX_STEPS_REACHED
                    }
                }
            });
            return AgentHostTurnOutcome.INTERRUPTED;
        }
        this.append({
            eventId: this.nextEventId,
            event: {
                case: "turnSettled",
                value: {
                    turnId,
                    outcome: AgentHostTurnOutcome.FAILED,
                    detail: toTurnErrorMessage(error3),
                    error: toTurnError(error3)
                }
            }
        });
        return AgentHostTurnOutcome.FAILED;
    }
    appendTurnCancelled(turnId, reason, interruptedBy) {
        this.append({
            eventId: this.nextEventId,
            event: {
                case: "turnSettled",
                value: {
                    turnId,
                    outcome: AgentHostTurnOutcome.INTERRUPTED,
                    detail: reason,
                    interruptedBy
                }
            }
        });
    }
    appendSubagentStarted(args) {
        this.append({
            eventId: this.nextEventId,
            event: {
                case: "subagentStarted",
                value: {
                    turnId: args.turnId,
                    parentToolCallId: args.parentToolCallId,
                    childSessionId: args.childSessionId,
                    rootSessionId: args.rootSessionId
                }
            }
        });
    }
    appendBackgroundTaskCompleted(completion) {
        this.completionsAwaitingWakeupTurn.set(this.nextEventId, completionWakeupKey(completion));
        this.append({
            eventId: this.nextEventId,
            event: {
                case: "backgroundTaskCompleted",
                value: {
                    completion
                }
            }
        });
    }
    markBackgroundTaskCompletionsWoken(completions) {
        const wokenKeys = new Set(completions.map(completionWakeupKey));
        for (const [eventId, key] of this.completionsAwaitingWakeupTurn){
            if (wokenKeys.has(key)) {
                this.completionsAwaitingWakeupTurn.delete(eventId);
            }
        }
    }
    getSessionHistoryThroughTurn(turnId) {
        const fromMemory = this.columns.scanHistoryThroughTurn(turnId);
        if (fromMemory.status === "ok") {
            return cloneConversationState(fromMemory.history);
        }
        if (fromMemory.status === "in_progress") {
            throw new Error(`Agent host turn is still in progress: ${turnId}`);
        }
        if (this.firstRetainedEventId > BigInt(1)) {
            const spilled = this.overflowSink.readEvictedRange?.({
                fromEventId: BigInt(1),
                toEventIdExclusive: this.firstRetainedEventId
            });
            if (spilled !== void 0) {
                const merged = spilled.concat(this.events.toArray());
                const fromSpill = scanHistoryThroughTurnAos(merged, turnId);
                if (fromSpill.status === "ok") {
                    return cloneConversationState(fromSpill.history);
                }
                if (fromSpill.status === "in_progress") {
                    throw new Error(`Agent host turn is still in progress: ${turnId}`);
                }
                throwClassicHistoryThroughTurnError(turnId, fromSpill.status);
            }
            throw new AgentHostSessionForkHistoryUnavailableError({
                turnId,
                firstRetainedEventId: this.firstRetainedEventId,
                detail: fromMemory.status === "missing_history" ? `Missing fork history for agent host turn: ${turnId} (required conversationState was evicted; firstRetainedEventId=${this.firstRetainedEventId.toString()})` : void 0
            });
        }
        throwClassicHistoryThroughTurnError(turnId, fromMemory.status);
    }
    async *subscribe(ctx, lastEventId, options2) {
        const completionsOnly = options2?.backgroundTaskCompletionsOnly === true;
        if (completionsOnly) {
            yield* this.streamFrom(ctx, (lastEventId ?? BigInt(0)) + BigInt(1), lastEventId, true);
            return;
        }
        if (lastEventId !== void 0) {
            yield* this.subscribeFromCursor(ctx, lastEventId);
            return;
        }
        yield* this.subscribeFromLatestCheckpoint(ctx);
    }
    async *subscribeFromCursor(ctx, lastEventId) {
        this.assertCursorRetained(lastEventId);
        yield* this.streamFrom(ctx, lastEventId + BigInt(1), lastEventId, false);
    }
    async *subscribeFromLatestCheckpoint(ctx) {
        const latestCheckpoint = this.findLatestConversationStateEvent();
        if (latestCheckpoint === void 0) {
            yield* this.streamFrom(ctx, this.firstRetainedEventId, void 0, false);
            return;
        }
        const runningTurn = this.runningTurn.replay();
        yield latestCheckpoint;
        yield* runningTurn;
        yield* this.pendingAwaitingInputBefore(latestCheckpoint.eventId);
        yield* this.streamFrom(ctx, latestCheckpoint.eventId + BigInt(1), void 0, false);
    }
    *pendingAwaitingInputBefore(checkpointEventId) {
        for (const pending of this.pendingInteractions?.() ?? []){
            if (pending.eventId >= checkpointEventId) {
                continue;
            }
            yield {
                eventId: checkpointEventId,
                event: {
                    case: "turnAwaitingInput",
                    value: {
                        turnId: pending.turnId,
                        requestId: pending.requestId,
                        interactionId: pending.interactionId,
                        question: pending.question
                    }
                }
            };
        }
    }
    async *streamFrom(ctx, startEventId, requestedLastEventId, completionsOnly) {
        let nextEventId = startEventId;
        if (nextEventId > this.nextEventId) {
            nextEventId = this.firstRetainedEventId;
        }
        while(!ctx.signal.aborted){
            if (nextEventId < this.firstRetainedEventId) {
                if (completionsOnly) {
                    nextEventId = this.firstRetainedEventId;
                    continue;
                }
                throw new AgentHostSessionEventCursorTooOldError({
                    requestedLastEventId,
                    firstRetainedEventId: this.firstRetainedEventId
                });
            }
            const nextEvent = this.findEventById(nextEventId);
            if (nextEvent !== void 0) {
                nextEventId = nextEvent.eventId + BigInt(1);
                if (!completionsOnly || this.completionsAwaitingWakeupTurn.has(nextEvent.eventId)) {
                    yield nextEvent;
                }
                continue;
            }
            if (this.closed) {
                return;
            }
            await this.waitForEvent(ctx);
        }
    }
    findLatestConversationStateEvent() {
        const index = this.columns.findLatestConversationStateLogicalIndex();
        if (index < 0) {
            return void 0;
        }
        return this.events.at(index);
    }
    assertCursorRetained(lastEventId) {
        const requestedExclusiveStart = (lastEventId ?? BigInt(0)) + BigInt(1);
        if (requestedExclusiveStart < this.firstRetainedEventId) {
            throw new AgentHostSessionEventCursorTooOldError({
                requestedLastEventId: lastEventId,
                firstRetainedEventId: this.firstRetainedEventId
            });
        }
    }
    findEventById(eventId) {
        if (eventId < this.firstRetainedEventId || eventId >= this.nextEventId) {
            return void 0;
        }
        const offset = Number(eventId - this.firstRetainedEventId);
        const event = this.events.at(offset);
        if (event !== void 0 && event.eventId === eventId) {
            return event;
        }
        for (const candidate of this.events.values()){
            if (candidate.eventId === eventId) {
                return candidate;
            }
        }
        return void 0;
    }
    append(event) {
        this.nextEventId += BigInt(1);
        this.events.push(event);
        this.columns.append(event);
        this.runningTurn.note(event);
        this.enforceInMemoryCap();
        this.onAppend?.();
        this.notifyWaiters();
    }
    enforceInMemoryCap() {
        const max = this.maxInMemoryEvents;
        if (max === void 0) {
            return;
        }
        const evictedEvents = this.events.enforceCap(max);
        if (evictedEvents.length === 0) {
            return;
        }
        this.columns.evictOldest(evictedEvents.length);
        for (const event of evictedEvents){
            this.completionsAwaitingWakeupTurn.delete(event.eventId);
        }
        this.firstRetainedEventId = this.events.first()?.eventId ?? this.nextEventId;
        try {
            this.overflowSink.onEvict({
                evictedEvents,
                firstRetainedEventId: this.firstRetainedEventId
            });
        } finally{
            this.events.maybeCompact(max);
            this.columns.maybeCompact(max);
        }
    }
    notifyWaiters() {
        const waiters = Array.from(this.waiters);
        this.waiters.clear();
        for (const notify of waiters){
            notify();
        }
    }
    waitForEvent(ctx) {
        return new Promise((resolve36)=>{
            if (ctx.signal.aborted || this.closed) {
                resolve36();
                return;
            }
            const cleanup = ()=>{
                this.waiters.delete(onEvent);
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
            this.waiters.add(onEvent);
            ctx.signal.addEventListener("abort", onAbort, {
                once: true
            });
        });
    }
};

}
