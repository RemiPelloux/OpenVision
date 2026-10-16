"use strict";
require.d(exports, {
    $6: ()=>le,
    $I: ()=>_,
    $d: ()=>V,
    A6: ()=>m,
    Ah: ()=>l,
    B2: ()=>y,
    DS: ()=>ne,
    Eo: ()=>X,
    F3: ()=>z,
    FN: ()=>re,
    HY: ()=>ce,
    Hv: ()=>b,
    Jm: ()=>u,
    Kw: ()=>M,
    OR: ()=>c,
    RE: ()=>g,
    RQ: ()=>H,
    S2: ()=>Y,
    SP: ()=>ee,
    UI: ()=>a,
    V5: ()=>v,
    _N: ()=>q,
    b9: ()=>U,
    bG: ()=>p,
    bx: ()=>ie,
    cr: ()=>E,
    dU: ()=>W,
    df: ()=>d,
    gH: ()=>f,
    gI: ()=>S,
    j7: ()=>A,
    jg: ()=>ae,
    jj: ()=>ue,
    kE: ()=>se,
    ku: ()=>i,
    nH: ()=>w,
    o8: ()=>oe,
    rP: ()=>I,
    uu: ()=>$,
    vB: ()=>O,
    vJ: ()=>L,
    xs: ()=>D,
    zo: ()=>Z
});
var n = require("./module-33002.js"), s = require("./module-98875.js"), o = require("./module-28117.js");
const i = (0, n.cF)(Symbol.for("@anysphere/agent/requestId"), void 0), a = (0, n.cF)(Symbol.for("@anysphere/agent/parentRequestId"), void 0), c = (0, n.cF)(Symbol.for("@anysphere/agent/rootParentRequestId"), void 0), l = (0, n.cF)(Symbol("parentAgentToolCallId"), void 0), u = ((0, n.cF)(Symbol("subagentType"), void 0), (0, n.cF)(Symbol("directMetaParentChildSubagent"), void 0)), d = (0, n.cF)(Symbol("requestModelName"), void 0), p = (0, n.cF)(Symbol("conversationGroupId"), void 0), m = (0, n.cF)(Symbol("conversationId"), void 0), h = (0, n.cF)(Symbol("secretScopeId"), void 0), f = (0, n.cF)(Symbol("bubbleRetryableTaskErrors"), void 0), g = (e)=>e.get(i), y = (e)=>e.get(a), w = (e)=>e.get(c), v = (e)=>e.get(l), _ = (e)=>!0 === e.get(u), A = (e, t, r)=>{
    const n = g(e), s = w(e) ?? n;
    return e.with(i, t).with(o.an, ()=>(0, o.qU)(t)).with(a, n).with(c, s).with(u, void 0).with(l, r).with(V, void 0);
}, S = (e)=>e.get(p) ?? e.get(m), b = (e)=>e.get(m), E = (e)=>e.get(h), I = (e)=>!0 === e.get(f), C = (0, n.cF)(Symbol("clientVersion"), void 0), k = /^v?\d+\.\d+\.\d+(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/, x = [
    "sdk-python-",
    "sdk-",
    "agentkit-"
], T = (0, n.cF)(Symbol("clientType"), void 0), R = (0, n.cF)(Symbol("clientRemoteType"), void 0), B = (0, n.cF)(Symbol("clientOs"), void 0), P = new Set([
    "darwin",
    "win32",
    "linux",
    "ios",
    "android"
]);
function J(e) {
    if (void 0 === e || "" === e.trim()) return "unknown";
    const t = e.trim().toLowerCase();
    return "windows" === t ? "win32" : P.has(t) ? t : "other";
}
function M(e) {
    const t = e.get(C)?.trim();
    let r = "unknown";
    if (void 0 !== t && "" !== t) {
        const e = t.toLowerCase(), n = x.find((t)=>e.startsWith(t)), s = void 0 === n ? t : t.slice(n.length);
        k.test(s) && (r = s.replace(/^v/, ""));
    }
    return {
        clientversion: r,
        clienttype: e.get(T) ?? "unknown"
    };
}
function q(e) {
    const t = e.get(C)?.trim().toLowerCase();
    return void 0 === t ? {
        sdkflavor: "none"
    } : t.startsWith("sdk-python-") ? {
        sdkflavor: "python"
    } : t.startsWith("sdk-") ? {
        sdkflavor: "ts"
    } : t.startsWith("agentkit-") ? {
        sdkflavor: "agentkit"
    } : {
        sdkflavor: "none"
    };
}
function D(e) {
    return {
        remoteType: e.get(R) ?? "unknown"
    };
}
function O(e) {
    return {
        os: J(e.get(B))
    };
}
const N = (0, n.cF)(Symbol("membershipType"), void 0), F = {
    MEMBERSHIPTYPE: "membershiptype"
};
function U(e) {
    const t = e.get(N) ?? "unknown";
    return {
        [F.MEMBERSHIPTYPE]: t
    };
}
const L = (0, n.cF)(Symbol("isAuto"), void 0), $ = (0, n.cF)(Symbol("isPremium"), void 0), Q = (0, n.cF)(Symbol("teamId"), void 0), j = (0, n.cF)(Symbol("isUserApiKey"), void 0), G = "user.is_dev", H = (0, n.cF)(Symbol("maxMode"), void 0), z = (0, n.cF)(Symbol("autoRoutingReason"), void 0), W = (0, n.cF)(Symbol("conversationInitMsRecorder"), void 0), V = (0, n.cF)(Symbol("firstStepSetupMsRecorder"), void 0), K = (0, n.cF)(Symbol("cloudAgentPreAgentTurnPrepMsRecorder"), void 0);
async function Y(e, t, r) {
    const n = performance.now();
    try {
        return await r();
    } finally{
        e.get(K)?.(t, performance.now() - n);
    }
}
const Z = (0, n.cF)(Symbol("cloudAgentTurnPrepGlueMsRecorder"), void 0), X = (0, n.cF)(Symbol("cloudAgentTurnPrepPrewarmRecorder"), void 0), ee = (0, n.cF)(Symbol("cloudAgentTurnPrepRootPromptRestoreRecorder"), void 0), te = 1;
function re(e) {
    return !0 === e.get(L);
}
function ne(e) {
    return !0 === e.get($);
}
function se(e) {
    const t = e.get(Q);
    return void 0 !== t && t === te;
}
function oe(e) {
    return !0 === e.get(j);
}
function ie(e) {
    return !0 === e.get(s.b6)[G];
}
function ae(e) {
    return void 0 !== e.get(a);
}
function ce(e) {
    const t = y(e);
    if (void 0 === t) return !0;
    const r = w(e);
    return void 0 === r || t === r;
}
function le(e) {
    return !0 === e.get(H);
}
function ue(e) {
    return e.get(z) ?? "unknown";
}
