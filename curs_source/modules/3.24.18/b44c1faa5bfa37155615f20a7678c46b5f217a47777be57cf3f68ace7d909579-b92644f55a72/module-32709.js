"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createFailureSimulatorInterceptor = function(e = {}) {
    const { failureCount: t = 2, errorCode: r = n.Code.Unavailable, errorMessage: s = "Simulated connection failure", methodFilter: o = [], delayMs: i } = e, a = new Map;
    return (e)=>async (c)=>{
            const l = c.method.name;
            if ("true" !== c.header.get("X-Cursor-RetryInterceptor-Enabled")) return e(c);
            if (o.length > 0 && !o.includes(l)) return e(c);
            const u = a.get(l) ?? 0;
            if (a.set(l, u + 1), u < t) throw void 0 !== i && i > 0 && await new Promise((e)=>setTimeout(e, i)), console.error(`=== FAILURE SIMULATOR: REQUEST IS BEING REJECTED ===\nMethod: ${l}\nAttempt: ${u + 1}/${t + 1}\nError Code: ${r}\nError Message: ${s}`), new n.ConnectError(`${s} (attempt ${u + 1}/${t + 1})`, r);
            return e(c);
        };
};
const n = require("./module-97163.js");
