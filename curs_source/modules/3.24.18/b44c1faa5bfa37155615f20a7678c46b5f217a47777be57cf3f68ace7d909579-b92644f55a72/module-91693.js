"use strict";
require.d(exports, {
    Kg: ()=>p,
    OC: ()=>h,
    Sd: ()=>c,
    Ym: ()=>a,
    fP: ()=>f,
    lw: ()=>m
});
var n = require("./module-60525.js"), s = require("./module-90417.js"), o = require("./module-52883.js"), i = require("./module-19209.js");
class a extends Error {
    constructor(){
        super("delivery and replaceQueuedTurnId are only valid on userMessageAction"), this.code = "SEND_NOW_REQUIRES_USER_MESSAGE", this.name = "AgentHostSendNowRequiresUserMessageError";
    }
}
function c(e) {
    return e.delivery === n.CD.NOW;
}
function l(e) {
    return "steer" === e?.() ? "steer" : "interrupt";
}
function u(e) {
    return "userMessageAction" === e?.action.case ? e.action.value.userMessage : void 0;
}
function d(e, t, r, n) {
    if (c(t) && "steer" === l(r)) {
        const r = u(n) ?? u(t.action);
        return (0, s.Gj)(r?.text ?? "", r?.messageId, (0, i.kr)(e) ?? "");
    }
    return n ?? t.action;
}
function p(e, t, r) {
    if ("steer" !== l(r)) return;
    const s = (0, i.xL)(e, d(e, t, r), "host");
    if ("steer" === s.kind) return {
        turnId: s.turnId,
        deliveredAs: n.CD.STEERED
    };
    if ("reject" === s.kind) throw new Error(`Agent host rejected context injection: ${s.reason}`);
}
function m(e) {
    return void 0 !== e.delivery || void 0 !== e.replaceQueuedTurnId && "" !== e.replaceQueuedTurnId;
}
function h(e) {
    const { session: t, request: r, turnId: s, host: a } = e, u = t.turns.get(s);
    if ("running" === u?.state && !u.cancelled) return {
        turnId: s,
        deliveredAs: n.CD.QUEUE
    };
    if ("queued" !== u?.state || u.cancelled) return {
        turnId: "",
        deliveredAs: n.CD.UNSPECIFIED
    };
    if (!c(r)) return {
        turnId: s,
        deliveredAs: n.CD.QUEUE
    };
    if ("steer" === l(a.getSendNowBehavior)) {
        const e = d(t, r, a.getSendNowBehavior, u.queuedAction), c = (0, i.xL)(t, e, "host");
        if ("steer" === c.kind) return (0, o.VG)(t, s, "replaced by follow-up", {
            initiatedBy: n.TQ.FOLLOW_UP
        }), a.emitSessionUpdated(t), {
            turnId: c.turnId,
            deliveredAs: n.CD.STEERED
        };
        if ("reject" === c.kind) throw new Error(`Agent host rejected context injection: ${c.reason}`);
    }
    const { runningTurnId: p } = (0, o.sN)(t);
    return void 0 !== p && (0, o.ht)(t, p, "send now", {
        initiatedBy: n.TQ.FOLLOW_UP
    }), (0, o.AP)(t, s), a.emitSessionUpdated(t), {
        turnId: s,
        deliveredAs: void 0 !== p ? n.CD.INTERRUPTED : n.CD.QUEUE
    };
}
async function f(e) {
    const { ctx: t, session: r, request: s, host: i } = e, { runningTurnId: a } = (0, o.sN)(r);
    void 0 !== a && ((0, o.ht)(r, a, "send now", {
        initiatedBy: n.TQ.FOLLOW_UP
    }), i.emitSessionUpdated(r));
    const c = await i.enqueueOrStartAction(t, {
        ...s,
        action: d(r, s, i.getSendNowBehavior)
    }, {
        insertAtHead: !0
    });
    return void 0 === a ? c : {
        turnId: c.turnId,
        deliveredAs: n.CD.INTERRUPTED
    };
}
