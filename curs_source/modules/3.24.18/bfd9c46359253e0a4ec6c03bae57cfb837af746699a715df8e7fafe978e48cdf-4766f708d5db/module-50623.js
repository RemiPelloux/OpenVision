"use strict";
require.d(exports, {
    BJ: ()=>c,
    rh: ()=>i
});
var n = require("./module-80738.js");
require("./module-50768.js");
function s(e) {
    return e.trim().toLowerCase();
}
function o({ mode: e, tools: t }) {
    const r = (t ?? []).map(s).filter((e)=>e.length > 0);
    const n = void 0 === e ? void 0 : s(e);
    return "all" === n ? {
        mode: "all"
    } : "reads" === n ? {
        mode: "reads"
    } : r.length > 0 ? {
        mode: "custom",
        tools: r
    } : {
        mode: "all"
    };
}
function i(e, t) {
    switch(e.mode){
        case "all":
            return !0;
        case "custom":
            return function(e, t) {
                const r = s(e);
                return 0 !== r.length && t.some((e)=>s(e) === r);
            }(t.name, e.tools);
        case "reads":
            return (0, n.NY)(t.annotations);
        default:
            return e;
    }
}
function a(e, t) {
    switch(t.mode){
        case "all":
            return [
                `${e}:*`
            ];
        case "custom":
            return t.tools.map((t)=>`${e}:${t}`);
        case "reads":
            return [];
        default:
            return t;
    }
}
function c({ autoRunControls: e, allowedMcpServers: t }) {
    const r = !0 === e?.enabled ? e.mcpToolAllowlist ?? [] : [], n = function(e) {
        return (e ?? []).flatMap((e)=>{
            const t = void 0 === e.name ? "" : s(e.name);
            if (0 === t.length) return [];
            const r = o({
                mode: e.toolAllowlistMode,
                tools: e.toolAllowlist
            });
            return [
                {
                    name: t,
                    policy: r,
                    flattened: a(t, r)
                }
            ];
        });
    }(t);
    return {
        tools: (i = [
            ...n.flatMap((e)=>[
                    ...e.flattened
                ]),
            ...r
        ], [
            ...new Set(i)
        ]),
        policies: n.map((e)=>({
                name: e.name,
                policy: e.policy
            }))
    };
    var i;
}
