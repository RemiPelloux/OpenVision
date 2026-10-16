"use strict";
require.d(exports, {
    K1: ()=>l,
    aK: ()=>a,
    kr: ()=>m,
    n$: ()=>i,
    pr: ()=>d,
    sK: ()=>u,
    xL: ()=>p
});
var n = require("./module-2798.js"), s = require("./module-69584.js");
const o = new WeakMap;
function i(e) {
    return "injectContextAction" === e.action.case;
}
function a(e, t, r) {
    o.set(e, {
        expectedRunId: t,
        injectionLedger: new n.y(t),
        actionManagerAcceptedIds: new Set,
        hostOwnedSteers: new Map,
        hostDeliveredIds: new Set,
        sendInteractionUpdate: r,
        inFlightHandoff: Promise.resolve()
    }), function(e) {
        const t = e.conversationActionManager, r = t.run.bind(t);
        t.run = (t, n)=>r(t, {
                write: async (t)=>{
                    if (await n.write(t), "injectContextAction" !== t.action.case) return;
                    const r = t.action.value.injectionId;
                    "" !== r && c(e)?.actionManagerAcceptedIds.add(r);
                }
            });
    }(e);
}
function c(e) {
    return o.get(e);
}
function l(e) {
    const t = c(e);
    if (void 0 === t) return [];
    const r = [];
    for (const e of t.injectionLedger.retagQueuedUserInjectionsToNextTurn()){
        const n = t.hostOwnedSteers.get(e);
        void 0 === n ? t.actionManagerAcceptedIds.has(e) || t.sendInteractionUpdate(new s.Uq({
            message: {
                case: "contextInjectionState",
                value: {
                    injectionId: e,
                    state: {
                        state: {
                            case: "queuedForNextTurn",
                            value: {}
                        }
                    }
                }
            }
        })) : t.hostDeliveredIds.has(e) || r.push(n);
    }
    return t.hostOwnedSteers.clear(), t.injectionLedger.endRun(), r;
}
function u(e, t) {
    if ("contextInjectionState" !== t.message.case) return !1;
    const { injectionId: r, state: n } = t.message.value, s = c(e);
    return !(void 0 === s || !s.hostOwnedSteers.has(r)) && ("delivered" === n?.state.case ? (s.hostDeliveredIds.add(r), !1) : "queuedForNextTurn" === n?.state.case && (s.hostDeliveredIds.delete(r), !0));
}
async function d(e) {
    e.conversationActionManager.close(), await async function(e) {
        const t = c(e);
        void 0 !== t && await t.inFlightHandoff;
    }(e);
}
function p(e, t, r = "client") {
    if (!i(t)) return {
        kind: "enqueue",
        action: t
    };
    const n = function(e, t, r = "client") {
        if (!i(t)) return {
            kind: "enqueue",
            action: t
        };
        const n = t.action.value;
        if ("systemContext" === n.payload.case) return {
            kind: "rejected",
            reason: "producer_not_allowlisted"
        };
        if ("userContext" !== n.payload.case || void 0 === n.payload.value.userMessage) return {
            kind: "rejected",
            reason: "invalid_payload"
        };
        const o = function(e) {
            if (!i(e)) return;
            const t = e.action.value.payload;
            if ("userContext" !== t.case || void 0 === t.value.userMessage) return;
            return new s.QFf({
                triggeringAuthId: e.triggeringAuthId,
                triggeringUserInfo: e.triggeringUserInfo,
                action: {
                    case: "userMessageAction",
                    value: new s.Vtf({
                        userMessage: t.value.userMessage,
                        requestContext: t.value.requestContext
                    })
                }
            });
        }(t);
        if (void 0 === o) return {
            kind: "rejected",
            reason: "invalid_payload"
        };
        if ("" === n.injectionId) return {
            kind: "enqueue",
            action: o
        };
        if (e.awaitingInputCount > 0) return {
            kind: "enqueue",
            action: o
        };
        const a = function(e, t) {
            for (const r of e.turns.values())if ("running" === r.state && !r.cancelled && c(r)?.expectedRunId === t) return r;
            return;
        }(e, n.expectedRunId);
        if (void 0 === a) return {
            kind: "enqueue",
            action: o
        };
        const l = c(a);
        if (void 0 === l) return {
            kind: "enqueue",
            action: o
        };
        const u = l.injectionLedger.admit({
            injectionId: n.injectionId,
            expectedRunId: n.expectedRunId,
            source: "user",
            payload: t
        });
        if ("duplicate" === u.kind) return {
            kind: "duplicate",
            turnId: a.turnId
        };
        if ("rejected" === u.kind) return "run_mismatch" === u.reason || "empty_injection_id" === u.reason ? {
            kind: "enqueue",
            action: o
        } : {
            kind: "rejected",
            reason: u.reason
        };
        if ("queued_for_next_turn" === u.kind) return {
            kind: "enqueue",
            action: o
        };
        "host" === r && l.hostOwnedSteers.set(n.injectionId, o);
        return function(e, t) {
            const r = c(e);
            if (void 0 === r) return;
            const n = e.conversationActionManager.submitConversationAction(t).catch(()=>{});
            r.inFlightHandoff = Promise.all([
                r.inFlightHandoff,
                n
            ]).then(()=>{});
        }(a, t), {
            kind: "steered",
            turnId: a.turnId
        };
    }(e, t, r);
    return "steered" === n.kind || "duplicate" === n.kind ? {
        kind: "steer",
        turnId: n.turnId
    } : "rejected" === n.kind ? {
        kind: "reject",
        reason: n.reason
    } : n;
}
function m(e) {
    for (const t of e.turns.values())if ("running" === t.state && !t.cancelled) return c(t)?.expectedRunId ?? t.turnId;
}
