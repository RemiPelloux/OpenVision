"use strict";
require.d(exports, {
    DC: ()=>s.D,
    DS: ()=>l,
    P7: ()=>o.P7,
    ko: ()=>a,
    tY: ()=>i,
    yj: ()=>o.yj
});
var n = require("./module-9639.js"), s = require("./module-28780.js"), o = require("./module-66608.js");
function i(e) {
    switch(e.action.case){
        case "userMessageAction":
        case "subscriptionNotificationAction":
        case "resumeAction":
        case "executePlanAction":
        case "backgroundTaskCompletionAction":
        case "asyncAskQuestionCompletionAction":
            return void (e.action.value.requestContext = void 0);
        default:
            return;
    }
}
function a(e, t) {
    if (!(0, o.PJ)(t)) return;
    const r = (0, s.D)(e);
    void 0 !== r && (0, o.P7)(r, t);
}
function c(e, t, r) {
    return {
        async execute (n, s, i) {
            const a = await e.execute(n, s, i);
            return "success" === a.result.case && void 0 !== a.result.value.requestContext && ((0, o.P7)(a.result.value.requestContext, t), r?.(a.result.value.requestContext)), a;
        }
    };
}
function l(e, t, r) {
    if (!(0, o.PJ)(t) && void 0 === r) return e;
    const s = function(e) {
        for (const [t] of e.entries())if (t.symbol === n.MZM.symbol) {
            const t = e.get(n.MZM);
            return "function" == typeof t?.execute ? t : void 0;
        }
    }(e);
    return void 0 === s ? e : new n.dwX(e, [
        (0, n.VNS)(n.MZM, c(s, t, r))
    ]);
}
