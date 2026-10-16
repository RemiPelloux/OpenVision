"use strict";
require.d(exports, {
    I: ()=>a
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
        hasConfiguredEntries: t.length > 0,
        hasInvalidEntries: r.length !== t.length,
        entries: r
    };
}
function i(e) {
    const t = s(e.mcpNetworkAllowlist), r = s(e.mcpNetworkDenylist), n = e.mcpNetworkMode;
    if ("deny_all" === n || r.entries.includes("*") || r.hasInvalidEntries) return {
        version: 1,
        default: "deny"
    };
    if ("allow_all" === n) return {
        version: 1,
        default: "deny",
        allow: [
            ...o
        ],
        ...r.entries.length > 0 ? {
            deny: r.entries
        } : {}
    };
    if ("allowlist" === n || t.hasConfiguredEntries) {
        const e = function(e) {
            return e.entries.includes("*") ? [
                ...o
            ] : e.entries;
        }(t);
        return e.length > 0 ? {
            version: 1,
            default: "deny",
            allow: e,
            ...r.entries.length > 0 ? {
                deny: r.entries
            } : {}
        } : {
            version: 1,
            default: "deny"
        };
    }
    return {
        version: 1,
        default: "deny",
        allow: [
            ...o
        ],
        ...r.entries.length > 0 ? {
            deny: r.entries
        } : {}
    };
}
async function a(e, t) {
    const { resolveSandboxPolicyForWorkspace: n } = await Promise.resolve().then(require.bind(require, "./module-6702.js")), o = {
        type: "workspace_readwrite",
        sandboxWorkspaceRoot: t,
        networkPolicy: i(e),
        networkPolicyStrict: !0
    }, { policy: s } = await n(t, {
        perUser: o
    });
    return s;
}
