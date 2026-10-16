"use strict";
require.d(exports, {
    c3: ()=>m,
    sJ: ()=>f,
    vS: ()=>h,
    zv: ()=>u
});
var n = require("./module-38812.js"), s = require("./module-37949.js"), o = require("./module-60525.js"), i = require("./module-69584.js"), a = require("./module-11541.js"), c = require("./module-56126.js");
const l = (0, s.h)("agent-host:interactions"), u = "agent_host.interaction.key_reuse";
class d extends Error {
    constructor(e){
        super(e), this.code = "INTERACTION_RESPONSE_INVALID", this.name = "AgentHostInvalidInteractionResponseError";
    }
}
function p(e, t) {
    return "interactionQuery" === e.case && "interactionQuery" === t.case && i.Pd7.equals(new i.Pd7({
        query: e.value.query
    }), new i.Pd7({
        query: t.value.query
    }));
}
function m(e, t) {
    if ("mcpAuthRequestQuery" !== e.query.case || "mcpAuthRequestResponse" !== t.result.case || "approved" !== t.result.value.result.case) return;
    const r = e.query.value.args?.serverIdentifier.trim() ?? "";
    return r.length > 0 ? r : void 0;
}
class h {
    constructor(e, t){
        this.events = e, this.callbacks = t, this.pending = new Map, this.resolved = new Map, this.watchQueues = new Set, this.closed = !1, e.setPendingInteractionsSource(()=>this.pendingAwaitingInputs());
    }
    async query(e, t, r, n) {
        const s = await this.hold(e, t, {
            case: "interactionQuery",
            value: r
        }, {
            interactionId: n?.interactionId ?? `${t}:${r.id}`,
            requestId: n?.requestId ?? String(r.id)
        });
        if ("responded" !== s.case) throw new Error(`Agent query ${r.id} settled with a ${s.case} answer`);
        return s.value;
    }
    async askHostQuestion(e, t, r, n) {
        if (this.pending.has(n.interactionId) || this.resolved.has(n.interactionId)) throw new Error(`Host question key ${n.interactionId} is already in use`);
        const s = await this.hold(e, t, r, n);
        if ("responded" === s.case) throw new Error(`Host question ${n.interactionId} settled with an agent response`);
        return s;
    }
    respond(e, t) {
        return this.accept(e, {
            case: "responded",
            value: t
        });
    }
    respondToHostQuestion(e, t) {
        return this.accept(e, t);
    }
    async hold(e, t, r, n) {
        if (this.closed) throw new Error("Agent host interaction registry is closed");
        const s = n.interactionId, o = this.keyFor(s, r), { requestId: i } = n, a = {
            baseInteractionId: s,
            interactionId: o
        }, l = this.resolved.get(o);
        if (void 0 !== l) {
            if (this.reportKeyReuse(e, r, "replayed", a), "responded" === l.case) return (0, c.VB)(l.answer);
            throw l.error;
        }
        const u = this.pending.get(o);
        if (void 0 !== u) return this.reportKeyReuse(e, r, "joined", a), u.promise;
        o !== s && this.reportKeyReuse(e, r, "reassigned", a);
        const d = Promise.withResolvers(), p = this.events.appendTurnAwaitingInput(t, i, o, r);
        this.pending.set(o, {
            eventId: p,
            turnId: t,
            requestId: i,
            question: (0, c.VB)(r),
            promise: d.promise,
            resolve: d.resolve,
            reject: d.reject
        }), this.callbacks?.onAwaitingInputStarted?.(), this.emitState();
        const m = ()=>{
            this.rejectInteraction(o, "cancelled", g(e.signal.reason));
        };
        e.signal.aborted ? m() : e.signal.addEventListener("abort", m, {
            once: !0
        });
        try {
            return await d.promise;
        } finally{
            e.signal.removeEventListener("abort", m), this.callbacks?.onAwaitingInputEnded?.();
        }
    }
    accept(e, t) {
        const r = this.pending.get(e);
        if (void 0 === r) return this.resolved.has(e) ? o.Ht.ALREADY_RESOLVED : o.Ht.NOT_FOUND;
        const n = function(e, t) {
            switch(e.case){
                case "interactionQuery":
                    return "responded" !== t.case ? `A ${t.case} answer does not answer an agent query` : function(e, t) {
                        if (t.id !== e.id) return `Interaction response ID ${t.id} does not match query ID ${e.id}`;
                        const r = function(e) {
                            const t = e.query.case;
                            if (void 0 === t) return;
                            const r = i.Pd7.fields.list().find((e)=>e.localName === t);
                            return void 0 !== r ? i.Y5.fields.find(r.no)?.localName : void 0;
                        }(e);
                        if (t.result.case !== r) return `Interaction response ${t.result.case ?? "<empty>"} does not answer a ${e.query.case ?? "<unknown>"} query (expected ${r ?? "<empty>"})`;
                        if (!function(e) {
                            const t = e.result;
                            switch(t.case){
                                case "askQuestionInteractionResponse":
                                case "createPlanRequestResponse":
                                    return void 0 !== t.value.result?.result.case;
                                case "webSearchRequestResponse":
                                case "webFetchRequestResponse":
                                case "switchModeRequestResponse":
                                case "setupVmEnvironmentResult":
                                case "prManagementResult":
                                case "mcpAuthRequestResponse":
                                case "generateImageRequestResponse":
                                case "replaceEnvResult":
                                case "connectScmRequestResponse":
                                    return void 0 !== t.value.result.case;
                                case void 0:
                                    return !1;
                                default:
                                    return t;
                            }
                        }(t)) return `Interaction response ${t.result.case ?? "<empty>"} carries no answer`;
                        return;
                    }(e.value, t.value);
                case "execApproval":
                    {
                        if ("execApproval" !== t.case) return `A ${t.case} answer does not answer an exec approval`;
                        const r = new Set(e.value.offeredAllowlistEntries), n = t.value.allowlistEntries.filter((e)=>!r.has(e));
                        return n.length > 0 ? `Always allow names entries the approval did not offer: ${n.join(", ")}` : void 0;
                    }
                case "mcpElicitation":
                    return "mcpElicitation" !== t.case ? `A ${t.case} answer does not answer an MCP form` : t.value.action === o.M.UNSPECIFIED ? "MCP form answer carries no action" : void 0;
                default:
                    return e;
            }
        }(r.question, t);
        if (void 0 !== n) throw new d(n);
        const s = (0, c.VB)(t);
        return this.pending.delete(e), this.resolved.set(e, {
            question: r.question,
            case: "responded",
            answer: s
        }), this.events.appendInteractionResolved(r.turnId, e, s), this.emitState(), r.resolve(s), "interactionQuery" === r.question.case && "responded" === s.case && this.callbacks?.onInteractionResponded?.(r.question.value, s.value), o.Ht.ACCEPTED;
    }
    cancelTurn(e, t, r) {
        const n = g(t);
        for (const [t, s] of [
            ...this.pending
        ])s.turnId === e && (!0 === r?.settleRejectBubbled && y(s.requestId) ? this.settleRejectInteraction(t, n.message) : this.rejectInteraction(t, "cancelled", n));
    }
    settleRejectByRequestId(e) {
        const t = "string" == typeof e.reason && e.reason.length > 0 ? e.reason : "Subagent force-backgrounded; cancelling pending bubbled interaction";
        for (const [r, n] of [
            ...this.pending
        ])n.requestId === e.requestId && this.settleRejectInteraction(r, t);
    }
    async *watch(e) {
        const t = {
            events: new a.l,
            notify: void 0
        };
        this.watchQueues.add(t);
        try {
            if (this.closed) return;
            for(yield {
                event: {
                    case: "snapshot",
                    value: {
                        interactions: this.snapshot()
                    }
                }
            }; !e.signal.aborted && !this.closed;){
                const r = t.events.shift();
                void 0 === r ? await this.waitForEvent(e, t) : yield r;
            }
        } finally{
            this.watchQueues.delete(t), t.notify?.(), t.notify = void 0;
        }
    }
    close(e = "Agent host interaction registry closed") {
        if (this.closed) return [];
        this.closed = !0;
        const t = new Set;
        for (const [r, n] of this.pending)t.add(n.turnId), this.rejectInteraction(r, "cancelled", g(e));
        for (const e of this.watchQueues)e.notify?.(), e.notify = void 0;
        return [
            ...t
        ];
    }
    keyFor(e, t) {
        for(let r = 0;; r++){
            const n = 0 === r ? e : `${e}#${r}`, s = this.pending.get(n)?.question ?? this.resolved.get(n)?.question;
            if (void 0 === s || p(s, t)) return n;
        }
    }
    reportKeyReuse(e, t, r, n) {
        const s = function(e) {
            return "interactionQuery" === e.case ? e.value.query.case : e.case;
        }(t) ?? "unknown", o = {
            ...n,
            queryCase: s,
            outcome: r
        };
        "reassigned" === r ? l.warn(e, "Interaction key held by a different question; asking under a new key", o) : l.info(e, "Interaction key reused by the same question", o);
        try {
            this.callbacks?.onInteractionKeyReuse?.({
                outcome: r,
                queryCase: s
            });
        } catch (t) {
            l.warn(e, "Interaction key reuse report failed", {
                error: String(t)
            });
        }
    }
    collectPendingEntries() {
        return [
            ...this.pending
        ].map(([e, t])=>({
                interactionId: e,
                turnId: t.turnId,
                question: t.question
            }));
    }
    cloneSnapshotEntries(e) {
        return e.map((e)=>({
                interactionId: e.interactionId,
                turnId: e.turnId,
                question: (0, c.VB)(e.question)
            }));
    }
    snapshot() {
        return this.cloneSnapshotEntries(this.collectPendingEntries());
    }
    pendingAwaitingInputs() {
        return [
            ...this.pending
        ].map(([e, t])=>({
                eventId: t.eventId,
                turnId: t.turnId,
                requestId: t.requestId,
                interactionId: e,
                question: (0, c.VB)(t.question)
            }));
    }
    emitState() {
        if (this.closed || 0 === this.watchQueues.size) return;
        const e = this.collectPendingEntries();
        for (const t of this.watchQueues)t.events.push({
            event: {
                case: "state",
                value: {
                    interactions: this.cloneSnapshotEntries(e)
                }
            }
        }), t.notify?.(), t.notify = void 0;
    }
    settleRejectInteraction(e, t) {
        const r = this.pending.get(e);
        if (void 0 === r) return;
        const s = function(e, t) {
            if ("interactionQuery" !== e.case) return f(e, t);
            const r = (0, n.oF)(e.value, t);
            return void 0 === r ? void 0 : {
                case: "responded",
                value: r
            };
        }(r.question, t);
        void 0 === s ? this.rejectInteraction(e, "cancelled", new Error(t)) : this.accept(e, s);
    }
    rejectInteraction(e, t, r) {
        const n = this.pending.get(e);
        void 0 !== n && (this.pending.delete(e), this.resolved.set(e, {
            question: n.question,
            case: t,
            error: r
        }), "cancelled" === t ? this.events.appendInteractionResolved(n.turnId, e, {
            case: "cancelled",
            value: {
                reason: r.message
            }
        }) : this.events.appendInteractionResolved(n.turnId, e, {
            case: "failed",
            value: {
                error: r.message
            }
        }), this.emitState(), n.reject(r));
    }
    waitForEvent(e, t) {
        return new Promise((r)=>{
            if (e.signal.aborted || this.closed || t.events.length > 0) return void r();
            const n = ()=>{
                t.notify === s && (t.notify = void 0), e.signal.removeEventListener("abort", o);
            }, s = ()=>{
                n(), r();
            }, o = ()=>{
                n(), r();
            };
            t.notify = s, e.signal.addEventListener("abort", o, {
                once: !0
            });
        });
    }
}
function f(e, t) {
    switch(e.case){
        case "execApproval":
            return {
                case: "execApproval",
                value: new o.k2({
                    approved: !1,
                    reason: t
                })
            };
        case "mcpElicitation":
            return {
                case: "mcpElicitation",
                value: new o.vG({
                    action: o.M.CANCEL
                })
            };
        default:
            return e;
    }
}
function g(e) {
    return e instanceof Error ? e : new Error("string" == typeof e && e.length > 0 ? e : "Agent host interaction was cancelled");
}
function y(e) {
    return e.startsWith("subagent:");
}
