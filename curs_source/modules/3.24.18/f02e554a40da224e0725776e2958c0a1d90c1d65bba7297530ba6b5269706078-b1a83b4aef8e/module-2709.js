"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createFailureSimulatorInterceptor = function(t = {}) {
    const { failureCount: e = 2, errorCode: r = n.Code.Unavailable, errorMessage: s = "Simulated connection failure", methodFilter: i = [], delayMs: o } = t, a = new Map;
    return (t)=>async (u)=>{
            const c = u.method.name;
            if ("true" !== u.header.get("X-Cursor-RetryInterceptor-Enabled")) return t(u);
            if (i.length > 0 && !i.includes(c)) return t(u);
            const l = a.get(c) ?? 0;
            if (a.set(c, l + 1), l < e) throw void 0 !== o && o > 0 && await new Promise((t)=>setTimeout(t, o)), console.error(`=== FAILURE SIMULATOR: REQUEST IS BEING REJECTED ===\nMethod: ${c}\nAttempt: ${l + 1}/${e + 1}\nError Code: ${r}\nError Message: ${s}`), new n.ConnectError(`${s} (attempt ${l + 1}/${e + 1})`, r);
            return t(u);
        };
};
const n = require("./module-8394.js");
