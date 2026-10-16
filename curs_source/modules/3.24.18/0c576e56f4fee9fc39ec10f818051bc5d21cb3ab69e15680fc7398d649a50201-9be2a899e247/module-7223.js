"use strict";
require.d(exports, {
    VO: ()=>l,
    Zo: ()=>a,
    pt: ()=>i
});
var n = require("./module-496.js");
const o = 5, s = 5e3;
function i(e) {
    const t = (0, n.v)("fastRetryMaxAttempts", e) ?? o;
    return Math.max(1, Math.min(Math.trunc(t), 20));
}
function a(e) {
    const t = (0, n.v)("maxPeriodicCycles", e);
    if (void 0 !== t) return Math.max(0, Math.min(Math.trunc(t), 1e4));
}
function c(e, t) {
    return function(e) {
        const t = (0, n.v)("networkResumeReconnectDebounceMs", e) ?? s;
        return Math.max(0, Math.min(Math.trunc(t), 18e5));
    }(t);
}
function u(e, t) {
    switch(e){
        case "power_monitor_resume":
        case "unlock_screen":
            return function(e) {
                return (0, n.v)("networkResumeReconnectEnabled", e) ?? !1;
            }(t);
        default:
            return e;
    }
}
function l(e, t) {
    return {
        enabled: u(e, t),
        debounceMs: c(0, t)
    };
}
