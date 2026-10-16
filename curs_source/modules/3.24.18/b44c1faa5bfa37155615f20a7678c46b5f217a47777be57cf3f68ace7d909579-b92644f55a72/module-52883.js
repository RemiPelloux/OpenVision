"use strict";
require.d(exports, {
    AP: ()=>_,
    EL: ()=>y,
    He: ()=>w,
    VG: ()=>f,
    YF: ()=>S,
    ht: ()=>m,
    l$: ()=>g,
    rW: ()=>A,
    sN: ()=>u,
    sl: ()=>v
});
var n = require("./module-3411.js"), s = require("./module-37949.js"), o = require("./module-98875.js"), i = require("./module-60525.js"), a = require("./module-19209.js");
const c = (0, s.h)("agent-host:turn"), l = 8e3;
function u(e) {
    let t;
    for (const r of e.turns.values())if ("running" === r.state) {
        t = r.turnId;
        break;
    }
    return {
        runningTurnId: t,
        queuedTurnIds: e.queuedRunOrder.filter((t)=>{
            const r = e.turns.get(t);
            return "queued" === r?.state && !r.cancelled;
        })
    };
}
function d(e, t) {
    return e.cancelled || t.signal.aborted;
}
function p(e, t, r, n) {
    const s = e.turns.get(t);
    return void 0 !== s && "finished" !== s.state && !s.cancelled && (s.cancelled = !0, s.cancelledReason = r, s.cancelledBy = n?.initiatedBy, "running" === s.state && !0 !== n?.immediate ? (s.conversationActionManager.abort(r ?? "turn interrupted"), s.hardCancelTimer = setTimeout(()=>{
        "finished" !== s.state && s.cancelTurn(r);
    }, l)) : s.cancelTurn(r), e.interactionRegistry.cancelTurn(t, r), "queued" !== s.state || s.cancelEventEmitted || (s.cancelEventEmitted = !0, e.events.appendTurnCancelled(t, r, n?.initiatedBy), function(e, t) {
        E(e, t.turnId), I.delete(t), e.finishTurnLifecycle(t.turnId), t.state = "finished", t.conversationActionManager.dispose(), e.turns.delete(t.turnId), e.backgroundWorkRegistry.forgetWakeupTurnsForTurn(t.turnId), e.pendingTurns -= 1;
    }(e, s)), !0);
}
function m(e, t, r, n) {
    const s = e.turns.get(t);
    return void 0 === s || "running" !== s.state ? h(e, t, r, n) : p(e, t, r, n);
}
function h(e, t, r, n) {
    const s = e.hostedTaskTurnAborts.get(t);
    return void 0 !== s && (s(r, n), e.interactionRegistry.cancelTurn(t, r), !0);
}
function f(e, t, r, n) {
    const s = e.turns.get(t);
    return void 0 !== s && "queued" === s.state && p(e, t, r, n);
}
function g(e, t) {
    let r = 0;
    for (const n of [
        ...e.turns.keys()
    ])f(e, n, t, {
        initiatedBy: i.TQ.HOST
    }) && (r += 1);
    return r;
}
function y(e, t) {
    let r = 0;
    for (const n of [
        ...e.turns.keys()
    ])p(e, n, t, {
        immediate: !0,
        initiatedBy: i.TQ.HOST
    }) && (r += 1);
    for (const n of [
        ...e.hostedTaskTurnAborts.keys()
    ])h(e, n, t, {
        immediate: !0,
        initiatedBy: i.TQ.HOST
    }) && (r += 1);
    return r;
}
function w(e, t, r) {
    let n = 0;
    for (const s of [
        ...e.turns.keys()
    ])p(e, s, t, r) && (n += 1);
    for (const s of [
        ...e.hostedTaskTurnAborts.keys()
    ])h(e, s, t, r) && (n += 1);
    return n;
}
function v(e) {
    for (const t of e.hostedTaskTurnCompleters.values())t();
    e.hostedTaskTurnCompleters.clear();
}
function _(e, t) {
    const r = e.turns.get(t);
    void 0 === r || "queued" !== r.state || r.cancelled || b(e, t, !0);
}
function A(e) {
    const { ctx: t, request: r, session: s, turnId: o, modelDetails: i, runOptions: c, onSessionUpdated: l, insertAtHead: u } = e;
    s.pendingTurns += 1;
    const [d, p] = t.withDetached().withCancel(), m = d.withName(`agent_host.${r.sessionId}.${o}`), h = {
        turnId: o,
        cancelTurn: (e)=>{
            m.signal.aborted || p(e);
        },
        conversationActionManager: new n.h,
        cancelled: !1,
        cancelEventEmitted: !1,
        state: "queued",
        queuedAction: r.action
    };
    (0, a.aK)(h, c?.generationUUID ?? o, (e)=>{
        s.interactionListener.sendUpdate(t, e);
    }), s.turns.set(o, h), b(s, o, !0 === u), I.set(h, {
        ctx: t,
        request: r,
        session: s,
        turnId: o,
        modelDetails: i,
        runOptions: c,
        onSessionUpdated: l,
        namedTurnCtx: m,
        turnEntry: h
    }), l(s), S(s);
}
function S(e) {
    if (e.deleted || e.hostedTaskTurnCompleters.size > 0) return;
    const { runningTurnId: t, queuedTurnIds: r } = u(e), n = r[0];
    if (void 0 !== t || void 0 === n) return;
    const s = e.turns.get(n), l = void 0 === s ? void 0 : I.get(s);
    void 0 !== l && function(e) {
        const { ctx: t, request: r, session: n, turnId: s, modelDetails: l, runOptions: u, onSessionUpdated: p, namedTurnCtx: m, turnEntry: h } = e;
        I.delete(h);
        const f = async ()=>{
            await (0, a.pr)(h);
            const e = (0, a.K1)(h);
            if (!n.deleted && !0 !== n.disposing) for (const s of e.reverse()){
                const e = crypto.randomUUID();
                A({
                    ctx: t,
                    request: {
                        sessionId: r.sessionId,
                        action: s,
                        requestContextDecoration: r.requestContextDecoration
                    },
                    session: n,
                    turnId: e,
                    modelDetails: l,
                    runOptions: {
                        ...u,
                        generationUUID: e
                    },
                    onSessionUpdated: p,
                    insertAtHead: !0
                });
            }
        };
        E(n, s), h.state = "running", p(n);
        const g = n.turnChain.catch(()=>{}).then(async ()=>{
            if (h.cancelled || n.deleted) return void (h.cancelEventEmitted || (n.events.appendTurnCancelled(s, h.cancelledReason, h.cancelledBy), h.cancelEventEmitted = !0));
            let e = !1;
            try {
                if (await (0, o.uj)(m.withName("agent_host.turn"), async (t, o)=>{
                    o.setAttribute("agent_host.session_id", r.sessionId), o.setAttribute("agent_host.turn_id", s);
                    const i = n.beginBlobReadSummary(t);
                    try {
                        void 0 !== r.baseHistory && await n.rebase(i.ctx, r.baseHistory), n.events.appendTurnStarted(s), e = !0, "backgroundTaskCompletionAction" === r.action?.action.case && n.events.markBackgroundTaskCompletionsWoken(r.action.action.value.completions), n.interactionListener.setUpdateInterceptor((e)=>(0, a.sK)(h, e)), await n.run({
                            ctx: i.ctx,
                            action: r.action,
                            modelDetails: l,
                            turnId: s,
                            runOptions: u,
                            conversationActionManager: h.conversationActionManager,
                            requestContextDecoration: r.requestContextDecoration
                        });
                    } finally{
                        i.finish();
                    }
                }), await f(), d(h, m)) return void (h.cancelEventEmitted || (n.events.appendTurnCancelled(s, h.cancelledReason ?? (m.signal.aborted ? "cancelled" : void 0), h.cancelledBy), h.cancelEventEmitted = !0));
                n.events.appendTurnCompleted(s);
            } catch (t) {
                if (await f(), d(h, m)) return void (h.cancelEventEmitted || (n.events.appendTurnCancelled(s, h.cancelledReason ?? (t instanceof Error ? t.message : String(t)), h.cancelledBy), h.cancelEventEmitted = !0));
                e || n.events.appendTurnStarted(s);
                n.events.appendTurnSettledByError(s, t) === i.jz.FAILED && c.error(m, "Agent host turn failed", t, {
                    sessionId: r.sessionId,
                    turnId: s
                });
            }
        }).finally(()=>{
            n.finishTurnLifecycle(s), h.state = "finished", void 0 !== h.hardCancelTimer && clearTimeout(h.hardCancelTimer), h.conversationActionManager.dispose(), n.interactionListener.setUpdateInterceptor(void 0), n.turns.delete(s), n.backgroundWorkRegistry.forgetWakeupTurnsForTurn(s), n.pendingTurns -= 1, p(n), S(n);
        });
        n.turnChain = g, g.catch(()=>{});
    }(l);
}
function b(e, t, r) {
    const n = e.queuedRunOrder, s = n.indexOf(t);
    s >= 0 && n.splice(s, 1), r ? n.unshift(t) : n.push(t);
}
function E(e, t) {
    const r = e.queuedRunOrder.indexOf(t);
    r >= 0 && e.queuedRunOrder.splice(r, 1);
}
const I = new WeakMap;
