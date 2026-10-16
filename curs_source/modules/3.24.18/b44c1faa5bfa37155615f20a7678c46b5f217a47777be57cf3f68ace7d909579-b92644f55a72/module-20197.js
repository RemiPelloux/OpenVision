"use strict";
require.d(exports, {
    OY: ()=>m,
    cX: ()=>f,
    fs: ()=>u,
    ri: ()=>l,
    uX: ()=>h
});
var n = require("./module-61933.js");
const s = new Set([
    n.EJ,
    n.OE
]), o = n.f.replace(/^\/+/, ""), i = /#L?(\d+)(?:\s*-\s*L?(\d+))?$/i, a = /:(\d+)(?:\s*-\s*(\d+))?$/;
function c(e) {
    return e.trim().replace(/\\/g, "/");
}
function l(e) {
    const t = c(e);
    return t.includes(o) || t.includes(n.EJ) || t.includes(n.OE);
}
function u(e) {
    const t = i.exec(e);
    if (t) return {
        path: e.slice(0, t.index),
        lineSuffix: e.slice(t.index)
    };
    const r = a.exec(e);
    return r ? {
        path: e.slice(0, r.index),
        lineSuffix: e.slice(r.index)
    } : {
        path: e,
        lineSuffix: ""
    };
}
function d(e, t) {
    const r = `${n.f}/`;
    if (e !== n.f && !e.startsWith(r)) return;
    const s = e === n.f ? "" : e.slice(r.length), { mountKey: o, relativePath: i, trailingSeparator: a } = function(e) {
        const t = e.endsWith("/") && e.length > 0, r = e.replace(/^\/+|\/+$/g, "");
        if (0 === r.length) return {
            mountKey: "",
            relativePath: "",
            trailingSeparator: t
        };
        const n = r.indexOf("/");
        return n < 0 ? {
            mountKey: r,
            relativePath: "",
            trailingSeparator: t
        } : {
            mountKey: r.slice(0, n),
            relativePath: r.slice(n + 1),
            trailingSeparator: t
        };
    }(s);
    if (0 === o.length) return;
    const c = function(e) {
        return e === n.WA ? {
            kind: "team"
        } : e === n._l ? {
            kind: "user"
        } : e === n.FI ? {
            kind: "agent"
        } : (0, n.v8)(e) ? {
            kind: "agent",
            agentId: e
        } : void 0;
    }(o);
    return void 0 !== c ? {
        ...c,
        relativePath: i,
        trailingSeparator: a,
        lineSuffix: t
    } : void 0;
}
function p(e, t) {
    const r = e.split("/").filter((e)=>e.length > 0), o = r.findIndex((e)=>s.has(e));
    if (o < 0 || o + 2 >= r.length) return;
    const i = r[o + 1];
    if (void 0 === i || r[o + 2] !== n._L) return;
    const a = r.slice(o + 3), c = e.endsWith("/");
    if ("subagents" === a[0] && void 0 !== a[1]) return {
        kind: "agent",
        agentId: a[1],
        relativePath: a.slice(2).join("/"),
        storeRelativePath: a.join("/"),
        storeSourceId: i,
        trailingSeparator: c,
        lineSuffix: t
    };
    const l = function(e) {
        return void 0 !== (0, n.Z6)(e) ? {
            kind: "user"
        } : void 0 !== (0, n.ZJ)(e) ? {
            kind: "team"
        } : (0, n.v8)(e) ? {
            kind: "agent",
            agentId: e
        } : void 0;
    }(i);
    return void 0 !== l ? {
        ...l,
        relativePath: a.join("/"),
        trailingSeparator: c,
        lineSuffix: t
    } : void 0;
}
function m(e) {
    if (!l(e)) return;
    const t = c(e);
    if (!t) return;
    const { path: r, lineSuffix: n } = u(t);
    return r ? d(r, n) ?? p(r, n) : void 0;
}
function h(e, t) {
    const r = m(e);
    if (void 0 === r) return;
    const n = function(e, t) {
        switch(e.kind){
            case "team":
                return "Team Context";
            case "user":
                return "User Context";
            case "agent":
                {
                    const r = e.agentId ?? t?.selfAgentId, n = void 0 !== r ? t?.resolveAgentName?.(r)?.trim() : void 0;
                    return void 0 !== n && n.length > 0 ? n : t?.fallbackAgentLabel ?? "Agent";
                }
            default:
                return e.kind;
        }
    }(r, t);
    if (void 0 === n) return;
    const s = 0 === r.relativePath.length ? [] : r.relativePath.split("/").filter((e)=>e.length > 0);
    return {
        kind: r.kind,
        ...void 0 !== r.agentId ? {
            agentId: r.agentId
        } : {},
        rootLabel: n,
        relativeSegments: s,
        trailingSeparator: r.trailingSeparator,
        lineSuffix: r.lineSuffix
    };
}
function f(e, t) {
    const r = h(e, t);
    if (void 0 === r) return;
    const n = t?.pathDelimiter ?? "/", s = r.relativeSegments.join(n), o = 0 === s.length ? `${r.rootLabel}${n}` : r.trailingSeparator ? `${r.rootLabel}${n}${s}${n}` : `${r.rootLabel}${n}${s}`;
    return 0 === r.lineSuffix.length || 0 === s.length ? o : `${o}${r.lineSuffix}`;
}
