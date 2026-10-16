"use strict";
require.d(exports, {
    F: ()=>i
});
var n = require("./module-768.js");
const o = [
    "0.0.0.0/0",
    "::/0"
];
function s(e) {
    const t = (e ?? []).filter((e)=>e.trim().length > 0), r = t.flatMap((e)=>{
        const t = (0, n.bi)(e);
        return void 0 === t ? [] : [
            t
        ];
    });
    return {
        hasInvalidEntries: r.length !== t.length,
        entries: r
    };
}
function i(e) {
    const t = !0 === e.enabled, r = s(e.mcpNetworkDenylist), i = "deny_all" === e.mcpNetworkMode || r.entries.includes("*") || r.hasInvalidEntries, a = t ? function(e) {
        if ("allow_all" === e.mcpNetworkMode) return [
            ...o
        ];
        const t = s(e.mcpNetworkAllowlist);
        if ("allowlist" === e.mcpNetworkMode) return t.entries.includes("*") ? [
            ...o
        ] : t.entries;
        if (!function(e) {
            return (e.mcpNetworkAllowlist ?? []).some((e)=>e.trim().length > 0);
        }(e)) return [
            ...o
        ];
        const r = (0, n.b6)(e);
        return r.includes("*") ? [
            ...o
        ] : r;
    }(e) : [], c = t ? i ? [
        "*"
    ] : r.entries : [];
    return JSON.stringify({
        enabled: t,
        mode: e.mcpNetworkMode,
        allow: i ? [] : a,
        deny: c
    });
}
