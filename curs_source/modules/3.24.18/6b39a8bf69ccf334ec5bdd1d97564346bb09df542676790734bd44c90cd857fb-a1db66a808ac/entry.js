import { tt } from "./index.js";
!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f0598189-2c17-538c-a19a-47bca2b8fec2");
    } catch (e) {}
}();
var F = Object.getOwnPropertyNames, d = (u, a)=>function() {
        return a || (0, u[F(u)[0]])((a = {
            exports: {}
        }).exports, a), a.exports;
    };
export { d as __commonJS, tt as require_react };
