"use strict";
require.d(exports, {
    D: ()=>i,
    b: ()=>s
});
var n = require(55909);
const s = void 0;
function i(e) {
    const t = (0, n.normalizeProvider)(e.userAgentAppId ?? s), { customUserAgent: r } = e;
    return Object.assign(e, {
        customUserAgent: "string" == typeof r ? [
            [
                r
            ]
        ] : r,
        userAgentAppId: async ()=>{
            const r = await t();
            if (!function(e) {
                return void 0 === e || "string" == typeof e && e.length <= 50;
            }(r)) {
                const t = "NoOpLogger" !== e.logger?.constructor?.name && e.logger ? e.logger : console;
                "string" != typeof r ? t?.warn("userAgentAppId must be a string or undefined.") : r.length > 50 && t?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
            }
            return r;
        }
    });
}
