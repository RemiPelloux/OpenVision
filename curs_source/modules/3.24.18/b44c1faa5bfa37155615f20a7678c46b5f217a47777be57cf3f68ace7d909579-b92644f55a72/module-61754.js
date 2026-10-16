"use strict";
require.d(exports, {
    $M: ()=>o,
    $k: ()=>s,
    Bt: ()=>l,
    HB: ()=>v,
    Hv: ()=>A,
    J7: ()=>n,
    KQ: ()=>i,
    Vo: ()=>S,
    Vp: ()=>y,
    cN: ()=>b,
    eN: ()=>w,
    nZ: ()=>c,
    oZ: ()=>u,
    p: ()=>a,
    r$: ()=>d,
    sF: ()=>_
});
const n = [
    "dogfood",
    "candidate",
    "stable",
    "local",
    "other",
    "unknown"
], s = [
    "installed",
    "floor",
    "static"
], o = [
    "current",
    "no_current",
    "kill_switch",
    "disabled",
    "rejected",
    "not_installed",
    "not_claimed",
    "revert",
    "no_harness"
], i = "static", a = [
    "backend",
    "local-loop",
    "private-inference"
];
function c(e) {
    return a.find((t)=>t === e);
}
const l = [
    "connect",
    "managed-local"
];
function u(e) {
    return l.find((t)=>t === e);
}
const d = [
    "module_version",
    "module_channel",
    "serving"
], p = /^[0-9a-f]{64}$/, m = /^[0-9a-f]{40}$/, h = /^\d{8}-\d{6}$/, f = 12, g = /^[0-9a-f]{12}$/;
function y(e) {
    return void 0 === e ? "unknown" : n.find((t)=>t === e) ?? "other";
}
function w(e, t) {
    if (!E(e.generation, e.source)) return;
    const r = {
        version: I(e.generation),
        generation: e.generation,
        source: e.source,
        channel: y(t)
    };
    if ("static" === e.source) return r;
    const n = function(e) {
        if (void 0 === e || !/(?:Z|[+-]\d{2}:\d{2})$/.test(e)) return;
        const t = Date.parse(e);
        if (Number.isNaN(t)) return;
        return new Date(t).toISOString().slice(0, 19).replace(/[-:]/g, "").replace("T", "-");
    }(e.builtAt);
    return {
        ...r,
        ...void 0 !== e.commit && m.test(e.commit) ? {
            commit: e.commit
        } : {},
        ...void 0 === n ? {} : {
            built: n
        }
    };
}
function v(e) {
    if (!C(e) || !C(e.identity)) return;
    const { identity: t, cause: r, since: i } = e, { version: a, generation: c, source: l, channel: u, commit: d, built: p } = t;
    if ("string" != typeof c || !k(s, l) || !E(c, l) || "string" != typeof a || a !== I(c) || !k(n, u) || !k(o, r) || "number" != typeof i || !Number.isFinite(i) || i < 0) return;
    const f = "static" !== l;
    return (void 0 === d || f && "string" == typeof d && m.test(d)) && (void 0 === p || f && "string" == typeof p && h.test(p)) ? {
        identity: {
            version: a,
            generation: c,
            source: l,
            channel: u,
            ...void 0 === d ? {} : {
                commit: d
            },
            ...void 0 === p ? {} : {
                built: p
            }
        },
        cause: r,
        since: i
    } : void 0;
}
function _(e) {
    return "installed" === e.source ? "module" : "static";
}
function A(e) {
    return {
        module_version: e.version,
        module_channel: e.channel,
        serving: _(e)
    };
}
function S(e) {
    return {
        ...A(e),
        ...void 0 === e.commit ? {} : {
            module_commit: e.commit
        },
        ...void 0 === e.built ? {} : {
            module_built: e.built
        }
    };
}
function b(e, t) {
    switch(e){
        case "module_version":
            return "string" == typeof t && (t === i || g.test(t));
        case "module_channel":
            return k(n, t);
        case "serving":
            return "module" === t || "static" === t;
        default:
            return !1;
    }
}
function E(e, t) {
    return "static" === t ? e === i : p.test(e);
}
function I(e) {
    return e.slice(0, f);
}
function C(e) {
    return "object" == typeof e && null !== e && !Array.isArray(e);
}
function k(e, t) {
    return e.some((e)=>e === t);
}
