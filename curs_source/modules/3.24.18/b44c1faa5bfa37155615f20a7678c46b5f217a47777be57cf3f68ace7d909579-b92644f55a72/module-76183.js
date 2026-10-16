"use strict";
require.d(exports, {
    aJ: ()=>b,
    Cw: ()=>S
});
var n = require("./module-17392.js"), s = require("./module-60525.js"), o = require("./module-56126.js");
class i {
    constructor(){
        this.items = [], this.start = 0;
    }
    get length() {
        return this.items.length - this.start;
    }
    get physicalLength() {
        return this.items.length;
    }
    get liveCount() {
        let e = 0;
        for(let t = this.start; t < this.items.length; t++)void 0 !== this.items[t] && e++;
        return e;
    }
    push(e) {
        this.items.push(e);
    }
    at(e) {
        if (!(e < 0 || e >= this.length)) return this.items[this.start + e];
    }
    first() {
        return this.at(0);
    }
    last() {
        return this.at(this.length - 1);
    }
    toArray() {
        const e = this.length, t = new Array(e);
        for(let r = 0; r < e; r++){
            const e = this.items[this.start + r];
            if (void 0 === e) throw new Error("RetainedWindowBuffer retained window is sparse");
            t[r] = e;
        }
        return t;
    }
    *values() {
        for(let e = this.start; e < this.items.length; e++){
            const t = this.items[e];
            if (void 0 === t) throw new Error("RetainedWindowBuffer retained window is sparse");
            yield t;
        }
    }
    evictOldest(e) {
        if (e <= 0) return [];
        if (e > this.length) throw new Error(`RetainedWindowBuffer.evictOldest count ${e} exceeds length ${this.length}`);
        const t = this.start, r = new Array(e);
        for(let n = 0; n < e; n++){
            const e = this.items[t + n];
            if (void 0 === e) throw new Error("RetainedWindowBuffer evicted a sparse slot");
            r[n] = e, this.items[t + n] = void 0;
        }
        return this.start = t + e, r;
    }
    enforceCap(e) {
        const t = this.length - e;
        return t <= 0 ? [] : this.evictOldest(t);
    }
    maybeCompact(e) {
        e <= 0 || this.start < e || (this.items = this.items.slice(this.start), this.start = 0);
    }
}
class a {
    constructor(){
        this.atLatestCheckpoint = [];
    }
    note(e) {
        switch(e.event.case){
            case "turnStarted":
                return this.running = {
                    turnId: e.event.value.turnId,
                    started: e,
                    calls: new Map
                }, void (this.atLatestCheckpoint = []);
            case "turnSettled":
                return void (this.running?.turnId === e.event.value.turnId && (this.running = void 0, this.atLatestCheckpoint = []));
            case "turnInteractionsSuperseded":
                return void (this.running?.turnId === e.event.value.turnId && (this.running.calls.clear(), this.atLatestCheckpoint = this.atLatestCheckpoint.slice(0, 1)));
            case "conversationState":
                return void (this.atLatestCheckpoint = this.snapshot(e.eventId));
            case "subagentStarted":
                {
                    const t = this.running?.calls.get(e.event.value.parentToolCallId);
                    return void (void 0 !== t && (t.subagentStarted = e));
                }
            case "interactionUpdate":
                return void this.noteInteractionUpdate(e, e.event.value.message);
        }
    }
    replay() {
        return this.atLatestCheckpoint.filter((e)=>{
            if ("subagentStarted" !== e.event.case) return !0;
            const t = this.running?.calls.get(e.event.value.parentToolCallId);
            return void 0 === t?.completed;
        });
    }
    snapshot(e) {
        const t = this.running;
        if (void 0 === t) return [];
        [
            ...t.calls.values()
        ].every((e)=>void 0 !== e.completed) && t.calls.clear();
        const r = [
            t.started
        ];
        for (const e of t.calls.values())r.push(e.start), void 0 !== e.subagentStarted && r.push(e.subagentStarted), void 0 !== e.completed && r.push(e.completed);
        return r.map((t)=>({
                ...t,
                eventId: e
            }));
    }
    noteInteractionUpdate(e, t) {
        const r = this.running?.calls;
        if (void 0 !== r) switch(t.case){
            case "partialToolCall":
            case "toolCallStarted":
                {
                    const n = r.get(t.value.callId);
                    return void (void 0 === n ? r.set(t.value.callId, {
                        start: e
                    }) : n.start = e);
                }
            case "toolCallCompleted":
                {
                    const n = r.get(t.value.callId);
                    return void (void 0 !== n && (n.completed = e));
                }
        }
    }
}
const c = 0, l = 1, u = 2, d = 3, p = 4, m = 5;
function h(e) {
    switch(e.event.case){
        case "turnStarted":
        case "turnSettled":
        case "turnAwaitingInput":
        case "interactionResolved":
        case "subagentStarted":
        case "turnInteractionsSuperseded":
            return e.event.value.turnId;
        case "conversationState":
        case "interactionUpdate":
        case "backgroundTaskCompleted":
            return;
        default:
            e.event;
            return;
    }
}
function f(e) {
    if ("conversationState" === e.event.case) return e.event.value;
    if ("turnInteractionsSuperseded" === e.event.case) {
        const t = e.event.value.continuation;
        switch(t.case){
            case "replayActionFromState":
            case "resumeFromCheckpoint":
                return t.value;
            case void 0:
                return;
            default:
                return;
        }
    }
}
function g(e, t, r) {
    return t ? e ? void 0 === r ? {
        status: "missing_history"
    } : {
        status: "ok",
        history: r
    } : {
        status: "missing_start"
    } : e ? {
        status: "in_progress"
    } : {
        status: "not_found"
    };
}
class y {
    constructor(){
        this.start = 0, this.end = 0, this.tags = new Uint8Array(0), this.turnIds = [], this.histories = [];
    }
    get length() {
        return this.end - this.start;
    }
    append(e) {
        this.ensureTagCapacity(this.end + 1);
        const t = this.end;
        this.tags[t] = function(e) {
            switch(e.event.case){
                case "conversationState":
                    return l;
                case "turnInteractionsSuperseded":
                    return u;
                case "turnStarted":
                    return d;
                case "turnSettled":
                    return p;
                case "backgroundTaskCompleted":
                    return m;
                case "interactionUpdate":
                case "turnAwaitingInput":
                case "interactionResolved":
                case "subagentStarted":
                    return c;
                default:
                    return e.event, c;
            }
        }(e), t === this.turnIds.length ? (this.turnIds.push(h(e)), this.histories.push(f(e))) : (this.turnIds[t] = h(e), this.histories[t] = f(e)), this.end = t + 1;
    }
    evictOldest(e) {
        if (e <= 0) return;
        if (e > this.length) throw new Error(`SessionEventColumns.evictOldest count ${e} exceeds length ${this.length}`);
        const t = this.start;
        for(let r = 0; r < e; r++){
            const e = t + r;
            this.tags[e] = c, this.turnIds[e] = void 0, this.histories[e] = void 0;
        }
        this.start = t + e;
    }
    maybeCompact(e) {
        if (e <= 0 || this.start < e) return;
        const t = this.end - this.start;
        this.tags = this.tags.slice(this.start, this.end), this.turnIds.splice(0, this.start), this.histories.splice(0, this.start), this.start = 0, this.end = t;
    }
    scanHistoryThroughTurn(e) {
        return function(e, t, r, n, s, o) {
            let i, a = !1, c = !1;
            for(let m = n; m < s; m++){
                const n = e[m];
                if (n === l || n === u) {
                    const e = r[m];
                    void 0 !== e && (i = e);
                    continue;
                }
                if (n !== d || t[m] !== o) {
                    if (n === p && t[m] === o) {
                        c = !0;
                        break;
                    }
                } else a = !0;
            }
            return g(a, c, i);
        }(this.tags, this.turnIds, this.histories, this.start, this.end, e);
    }
    findLatestConversationStateLogicalIndex() {
        return function(e, t, r) {
            let n = -1;
            for(let s = t; s < r; s++)e[s] === l && (n = s - t);
            return n;
        }(this.tags, this.start, this.end);
    }
    ensureTagCapacity(e) {
        if (e <= this.tags.length) return;
        let t = 0 === this.tags.length ? 16 : this.tags.length;
        for(; t < e;)t *= 2;
        const r = new Uint8Array(t);
        r.set(this.tags), this.tags = r;
    }
}
var w = require("./module-98934.js");
class v extends Error {
    constructor(e){
        super(`Agent host session event cursor too old: requested lastEventId=${void 0 === e.requestedLastEventId ? "<start>" : e.requestedLastEventId.toString()}, firstRetainedEventId=${e.firstRetainedEventId.toString()}`), this.code = "SESSION_EVENT_CURSOR_TOO_OLD", this.name = "AgentHostSessionEventCursorTooOldError", this.requestedLastEventId = e.requestedLastEventId, this.firstRetainedEventId = e.firstRetainedEventId;
    }
}
class _ extends Error {
    constructor(e){
        super(e.detail ?? `Agent host fork history unavailable for turn ${e.turnId}: required events were evicted (firstRetainedEventId=${e.firstRetainedEventId.toString()}) and no durable spill restored them`), this.code = "SESSION_FORK_HISTORY_UNAVAILABLE", this.name = "AgentHostSessionForkHistoryUnavailableError", this.turnId = e.turnId, this.firstRetainedEventId = e.firstRetainedEventId;
    }
}
const A = {
    onEvict: ()=>{}
}, S = 1e5;
class b {
    constructor(e = {}){
        this.events = new i, this.columns = new y, this.runningTurn = new a, this.waiters = new Set, this.nextEventId = BigInt(1), this.firstRetainedEventId = BigInt(1), this.completionsAwaitingWakeupTurn = new Map, this.closed = !1, this.maxInMemoryEvents = function(e) {
            if (void 0 === e || !Number.isFinite(e)) return;
            const t = Math.floor(e);
            return t < 1 ? void 0 : t;
        }(e.maxInMemoryEvents), this.overflowSink = e.overflowSink ?? A;
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
    setOnAppend(e) {
        this.onAppend = e;
    }
    setPendingInteractionsSource(e) {
        this.pendingInteractions = e;
    }
    close() {
        this.closed || (this.closed = !0, this.notifyWaiters());
    }
    appendInteractionUpdate(e) {
        this.append({
            eventId: this.nextEventId,
            event: {
                case: "interactionUpdate",
                value: e
            }
        });
    }
    appendConversationState(e) {
        const t = this.lastConversationState;
        E(e.rootPromptMessagesJson, t?.rootPromptMessagesJson ?? []), E(e.turns, t?.turns ?? []), this.lastConversationState = e, this.append({
            eventId: this.nextEventId,
            event: {
                case: "conversationState",
                value: e
            }
        });
    }
    appendTurnInteractionsSuperseded(e, t) {
        switch(t.case){
            case "replayActionFromState":
                return void this.append({
                    eventId: this.nextEventId,
                    event: {
                        case: "turnInteractionsSuperseded",
                        value: {
                            turnId: e,
                            continuation: {
                                case: "replayActionFromState",
                                value: (0, o.ks)(t.value)
                            }
                        }
                    }
                });
            case "resumeFromCheckpoint":
                return void this.append({
                    eventId: this.nextEventId,
                    event: {
                        case: "turnInteractionsSuperseded",
                        value: {
                            turnId: e,
                            continuation: {
                                case: "resumeFromCheckpoint",
                                value: (0, o.ks)(t.value)
                            }
                        }
                    }
                });
            default:
                return;
        }
    }
    appendTurnStarted(e) {
        this.append({
            eventId: this.nextEventId,
            event: {
                case: "turnStarted",
                value: {
                    turnId: e
                }
            }
        });
    }
    appendTurnAwaitingInput(e, t, r, n) {
        const s = this.nextEventId;
        return this.append({
            eventId: s,
            event: {
                case: "turnAwaitingInput",
                value: {
                    turnId: e,
                    requestId: t,
                    interactionId: r,
                    question: n
                }
            }
        }), s;
    }
    appendInteractionResolved(e, t, r) {
        this.append({
            eventId: this.nextEventId,
            event: {
                case: "interactionResolved",
                value: {
                    turnId: e,
                    interactionId: t,
                    resolution: r
                }
            }
        });
    }
    appendTurnCompleted(e) {
        this.append({
            eventId: this.nextEventId,
            event: {
                case: "turnSettled",
                value: {
                    turnId: e,
                    outcome: s.jz.COMPLETED
                }
            }
        });
    }
    appendTurnSettledByError(e, t) {
        return t instanceof n.i6 ? (this.append({
            eventId: this.nextEventId,
            event: {
                case: "turnSettled",
                value: {
                    turnId: e,
                    outcome: s.jz.INTERRUPTED,
                    detail: t.message,
                    interruptedBy: s.TQ.HOST,
                    stopReason: s.Pi.MAX_STEPS_REACHED
                }
            }
        }), s.jz.INTERRUPTED) : (this.append({
            eventId: this.nextEventId,
            event: {
                case: "turnSettled",
                value: {
                    turnId: e,
                    outcome: s.jz.FAILED,
                    detail: (0, w.E)(t),
                    error: (0, w.V)(t)
                }
            }
        }), s.jz.FAILED);
    }
    appendTurnCancelled(e, t, r) {
        this.append({
            eventId: this.nextEventId,
            event: {
                case: "turnSettled",
                value: {
                    turnId: e,
                    outcome: s.jz.INTERRUPTED,
                    detail: t,
                    interruptedBy: r
                }
            }
        });
    }
    appendSubagentStarted(e) {
        this.append({
            eventId: this.nextEventId,
            event: {
                case: "subagentStarted",
                value: {
                    turnId: e.turnId,
                    parentToolCallId: e.parentToolCallId,
                    childSessionId: e.childSessionId,
                    rootSessionId: e.rootSessionId
                }
            }
        });
    }
    appendBackgroundTaskCompleted(e) {
        this.completionsAwaitingWakeupTurn.set(this.nextEventId, C(e)), this.append({
            eventId: this.nextEventId,
            event: {
                case: "backgroundTaskCompleted",
                value: {
                    completion: e
                }
            }
        });
    }
    markBackgroundTaskCompletionsWoken(e) {
        const t = new Set(e.map(C));
        for (const [e, r] of this.completionsAwaitingWakeupTurn)t.has(r) && this.completionsAwaitingWakeupTurn.delete(e);
    }
    getSessionHistoryThroughTurn(e) {
        const t = this.columns.scanHistoryThroughTurn(e);
        if ("ok" === t.status) return (0, o.ks)(t.history);
        if ("in_progress" === t.status) throw new Error(`Agent host turn is still in progress: ${e}`);
        if (this.firstRetainedEventId > BigInt(1)) {
            const r = this.overflowSink.readEvictedRange?.({
                fromEventId: BigInt(1),
                toEventIdExclusive: this.firstRetainedEventId
            });
            if (void 0 !== r) {
                const t = function(e, t) {
                    let r, n = !1, s = !1;
                    for (const o of e)if ("conversationState" !== o.event.case) {
                        if ("turnInteractionsSuperseded" === o.event.case) {
                            const e = o.event.value.continuation;
                            switch(e.case){
                                case "replayActionFromState":
                                case "resumeFromCheckpoint":
                                    r = e.value;
                            }
                            continue;
                        }
                        if ("turnStarted" !== o.event.case || o.event.value.turnId !== t) {
                            if ("turnSettled" === o.event.case && o.event.value.turnId === t) {
                                s = !0;
                                break;
                            }
                        } else n = !0;
                    } else r = o.event.value;
                    return g(n, s, r);
                }(r.concat(this.events.toArray()), e);
                if ("ok" === t.status) return (0, o.ks)(t.history);
                if ("in_progress" === t.status) throw new Error(`Agent host turn is still in progress: ${e}`);
                I(e, t.status);
            }
            throw new _({
                turnId: e,
                firstRetainedEventId: this.firstRetainedEventId,
                detail: "missing_history" === t.status ? `Missing fork history for agent host turn: ${e} (required conversationState was evicted; firstRetainedEventId=${this.firstRetainedEventId.toString()})` : void 0
            });
        }
        I(e, t.status);
    }
    async *subscribe(e, t, r) {
        !0 === r?.backgroundTaskCompletionsOnly ? yield* this.streamFrom(e, (t ?? BigInt(0)) + BigInt(1), t, !0) : void 0 === t ? yield* this.subscribeFromLatestCheckpoint(e) : yield* this.subscribeFromCursor(e, t);
    }
    async *subscribeFromCursor(e, t) {
        this.assertCursorRetained(t), yield* this.streamFrom(e, t + BigInt(1), t, !1);
    }
    async *subscribeFromLatestCheckpoint(e) {
        const t = this.findLatestConversationStateEvent();
        if (void 0 === t) return void (yield* this.streamFrom(e, this.firstRetainedEventId, void 0, !1));
        const r = this.runningTurn.replay();
        yield t, yield* r, yield* this.pendingAwaitingInputBefore(t.eventId), yield* this.streamFrom(e, t.eventId + BigInt(1), void 0, !1);
    }
    *pendingAwaitingInputBefore(e) {
        for (const t of this.pendingInteractions?.() ?? [])t.eventId >= e || (yield {
            eventId: e,
            event: {
                case: "turnAwaitingInput",
                value: {
                    turnId: t.turnId,
                    requestId: t.requestId,
                    interactionId: t.interactionId,
                    question: t.question
                }
            }
        });
    }
    async *streamFrom(e, t, r, n) {
        let s = t;
        for(s > this.nextEventId && (s = this.firstRetainedEventId); !e.signal.aborted;){
            if (s < this.firstRetainedEventId) {
                if (n) {
                    s = this.firstRetainedEventId;
                    continue;
                }
                throw new v({
                    requestedLastEventId: r,
                    firstRetainedEventId: this.firstRetainedEventId
                });
            }
            const t = this.findEventById(s);
            if (void 0 === t) {
                if (this.closed) return;
                await this.waitForEvent(e);
            } else s = t.eventId + BigInt(1), n && !this.completionsAwaitingWakeupTurn.has(t.eventId) || (yield t);
        }
    }
    findLatestConversationStateEvent() {
        const e = this.columns.findLatestConversationStateLogicalIndex();
        if (!(e < 0)) return this.events.at(e);
    }
    assertCursorRetained(e) {
        if ((e ?? BigInt(0)) + BigInt(1) < this.firstRetainedEventId) throw new v({
            requestedLastEventId: e,
            firstRetainedEventId: this.firstRetainedEventId
        });
    }
    findEventById(e) {
        if (e < this.firstRetainedEventId || e >= this.nextEventId) return;
        const t = Number(e - this.firstRetainedEventId), r = this.events.at(t);
        if (void 0 !== r && r.eventId === e) return r;
        for (const t of this.events.values())if (t.eventId === e) return t;
    }
    append(e) {
        this.nextEventId += BigInt(1), this.events.push(e), this.columns.append(e), this.runningTurn.note(e), this.enforceInMemoryCap(), this.onAppend?.(), this.notifyWaiters();
    }
    enforceInMemoryCap() {
        const e = this.maxInMemoryEvents;
        if (void 0 === e) return;
        const t = this.events.enforceCap(e);
        if (0 !== t.length) {
            this.columns.evictOldest(t.length);
            for (const e of t)this.completionsAwaitingWakeupTurn.delete(e.eventId);
            this.firstRetainedEventId = this.events.first()?.eventId ?? this.nextEventId;
            try {
                this.overflowSink.onEvict({
                    evictedEvents: t,
                    firstRetainedEventId: this.firstRetainedEventId
                });
            } finally{
                this.events.maybeCompact(e), this.columns.maybeCompact(e);
            }
        }
    }
    notifyWaiters() {
        const e = Array.from(this.waiters);
        this.waiters.clear();
        for (const t of e)t();
    }
    waitForEvent(e) {
        return new Promise((t)=>{
            if (e.signal.aborted || this.closed) return void t();
            const r = ()=>{
                this.waiters.delete(n), e.signal.removeEventListener("abort", s);
            }, n = ()=>{
                r(), t();
            }, s = ()=>{
                r(), t();
            };
            this.waiters.add(n), e.signal.addEventListener("abort", s, {
                once: !0
            });
        });
    }
}
function E(e, t) {
    for(let r = 0; r < e.length; r++){
        const n = e[r];
        r < t.length && (n === t[r] || 0 === Buffer.compare(n, t[r])) ? e[r] = t[r] : n.byteLength !== n.buffer.byteLength && (e[r] = new Uint8Array(n));
    }
}
function I(e, t) {
    if ("missing_history" === t) throw new Error(`Missing fork history for agent host turn: ${e}`);
    if ("missing_start" === t) throw new Error(`Agent host turn has no forkable history: ${e}`);
    throw new Error(`Agent host turn not found: ${e}`);
}
function C(e) {
    return `${e.taskId}\0${e.toolCallId}\0${e.reason}`;
}
