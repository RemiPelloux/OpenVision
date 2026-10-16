import { We } from "./index.js";
!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d32c0996-f391-59cf-80eb-6dedd0b89b05");
    } catch (e) {}
}();
var Ye = Object.getOwnPropertyNames, G = (a, p)=>function() {
        return p || (0, a[Ye(a)[0]])((p = {
            exports: {}
        }).exports, p), p.exports;
    };
export { G as __commonJS, We as require_react };
