"use strict";
function n(e) {
    if (!(e instanceof Error)) return !1;
    const t = e, r = e.cause?.code;
    return "ECONNREFUSED" === t.code || "ECONNREFUSED" === r || e.message.includes("ECONNREFUSED");
}
function o(e) {
    const t = function(e) {
        if (!e || "object" != typeof e) return;
        const t = e.code;
        if ("number" == typeof t && t >= 100 && t <= 599) return t;
        if ("string" == typeof t && /^\d{3}$/.test(t) && Number(t) >= 100 && Number(t) <= 599) return Number(t);
        const r = e instanceof Error || "string" == typeof e.message ? e.message : void 0;
        if (!r) return;
        const n = r.match(/\bHTTP\s+(\d{3})\b/i);
        if (!n?.[1]) return;
        const o = Number.parseInt(n[1], 10);
        return Number.isNaN(o) ? void 0 : o;
    }(e);
    return void 0 !== t ? 400 === t || 404 === t || 405 === t : !!(e instanceof Error && e.message.toLowerCase().includes("sessionid must be provided")) || n(e);
}
require.d(exports, {
    P: ()=>o,
    X: ()=>n
});
