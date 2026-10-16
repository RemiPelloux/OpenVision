"use strict";
require.d(exports, {
    $8: ()=>M,
    A8: ()=>Z,
    Ae: ()=>W,
    EJ: ()=>A,
    EO: ()=>B,
    EU: ()=>C,
    F6: ()=>V,
    FI: ()=>g,
    Jk: ()=>i,
    Ju: ()=>J,
    Ko: ()=>T,
    L4: ()=>b,
    OE: ()=>_,
    PL: ()=>l,
    PZ: ()=>Y,
    QT: ()=>O,
    RZ: ()=>w,
    Rf: ()=>x,
    Ri: ()=>K,
    S0: ()=>st,
    SN: ()=>p,
    T3: ()=>G,
    TQ: ()=>a,
    Vj: ()=>tt,
    WA: ()=>f,
    XF: ()=>c,
    XW: ()=>U,
    Y6: ()=>j,
    Z6: ()=>P,
    ZJ: ()=>D,
    _L: ()=>y,
    _N: ()=>R,
    _R: ()=>N,
    __: ()=>n,
    _l: ()=>d,
    _u: ()=>at,
    b1: ()=>$,
    eB: ()=>I,
    eX: ()=>it,
    f: ()=>Q,
    f7: ()=>et,
    hG: ()=>s,
    j6: ()=>rt,
    jO: ()=>ot,
    k9: ()=>h,
    p4: ()=>m,
    pV: ()=>u,
    pz: ()=>k,
    q8: ()=>F,
    sz: ()=>L,
    ur: ()=>H,
    v8: ()=>X,
    vB: ()=>o,
    wd: ()=>E,
    z_: ()=>S
});
const n = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, s = /^store-[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, i = "store-", o = /^store-[A-Za-z0-9_-]{24}$/, a = /^bc-(?:[0-9a-z][0-9a-z-]*-)?[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, u = /^(?:t([1-9][0-9]*)-)?u([1-9][0-9]*)$/, c = /^t([1-9][0-9]*)$/, l = "gb-", m = /^gb-[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, d = "user", f = "team", p = "automation", h = "bot", g = "self", A = "cursor_agent_stores", _ = "cursor_agent_stores_dev", y = "files", w = "skills", S = ".cursor";
function J(t) {
    return t.slice(0, S.length).toLowerCase() === S;
}
const B = 104857600, E = "home", I = "deployment", C = "user", b = "agent-serve";
function k(t) {
    return t === d || t === f || t === p || t === h || t === E || t === I;
}
function v(t, e) {
    if (!Number.isSafeInteger(t) || t <= 0) throw new Error(`${e} must be a positive safe integer`);
}
function q(t) {
    const e = Number(t);
    return Number.isSafeInteger(e) && e > 0 ? e : void 0;
}
function R(t) {
    v(t.userId, "userId");
    const e = t.teamId ?? void 0;
    return void 0 === e ? `u${t.userId}` : (v(e, "teamId"), `t${e}-u${t.userId}`);
}
function P(t) {
    const e = u.exec(t);
    if (null === e || void 0 === e[2]) return;
    const r = q(e[2]), n = void 0 === e[1] ? void 0 : q(e[1]);
    return void 0 === r || void 0 !== e[1] && void 0 === n ? void 0 : {
        userId: r,
        teamId: n
    };
}
function T(t) {
    return v(t, "teamId"), `t${t}`;
}
function x(t) {
    if (!n.test(t)) throw new Error("grokBotAgentId must be a UUID");
    return `${l}${t.toLowerCase()}`;
}
function N(t) {
    if (m.test(t)) return {
        grokBotAgentId: t.slice(l.length).toLowerCase()
    };
}
function D(t) {
    const e = c.exec(t);
    if (null === e || void 0 === e[1]) return;
    const r = q(e[1]);
    return void 0 === r ? void 0 : {
        teamId: r
    };
}
function U(t) {
    return void 0 !== P(t) || void 0 !== D(t);
}
const Q = "/cursor/stores", M = "agent_store_sync_client_config", O = "agent_store_use_dedicated_service", F = "agent_store_fuse_use_dedicated_service", L = "canvases", $ = `${Q}/${d}/${L}`, G = `${Q}/${p}/${L}`, H = [
    $,
    G
], K = "shareId", V = "storeId", z = new Set([
    "agent-stores",
    "shared-agent-stores"
]);
function W(t) {
    return n.test(t);
}
function Y(t) {
    return a.test(t);
}
function j(t) {
    return s.test(t);
}
function X(t) {
    return Y(t) || W(t);
}
function Z(t) {
    return o.test(t);
}
function tt(t) {
    const e = t.protocol.toLowerCase();
    return ("http:" === e || "https:" === e) && function(t) {
        const e = t.replace(/\/+$/, "").split("/").filter(Boolean);
        if (e.length < 2) return !1;
        let r = e.length;
        return !("shared" === e[r - 1] && (r -= 1, r < 2) || !z.has(e[r - 1] ?? "") || (r -= 1, r < 1 || !("dashboard" === e[r - 1] || r >= 2 && "t" === e[r - 2])));
    }(t.pathname);
}
function et(t) {
    const e = t.trim();
    if (0 === e.length) return;
    let r;
    try {
        r = new URL(e);
    } catch  {
        return;
    }
    return function(t) {
        if (!tt(t)) return;
        const e = t.searchParams.get(K)?.trim();
        if (void 0 !== e && o.test(e)) return {
            kind: "share",
            shareId: e
        };
        const r = t.searchParams.get(V)?.trim();
        return void 0 !== r && (X(r) || j(r)) ? {
            kind: "peer",
            agentId: r
        } : void 0;
    }(r);
}
function rt(t) {
    const e = t.shareId?.trim();
    if (void 0 !== e && e.length > 0) {
        if (!o.test(e)) return;
        return {
            kind: "share",
            shareId: e
        };
    }
    const r = t.storeId?.trim();
    if (void 0 !== r && r.length > 0) {
        if (!X(r) && !j(r)) return;
        return {
            kind: "peer",
            agentId: r
        };
    }
    const n = t.input?.trim();
    if (void 0 !== n && n.length > 0) return et(n);
}
const nt = /@agentstore\((\/cursor\/stores\/[^()\s]+)\)/g;
function st(t) {
    const e = new Set, r = [];
    for (const n of t.matchAll(nt)){
        const t = n[1];
        if (void 0 === t) continue;
        const s = t.slice(`${Q}/`.length).split("/")[0] ?? "";
        (X(s) || Z(s) || j(s)) && (e.has(s) || (e.add(s), r.push(s)));
    }
    return r;
}
const it = "CURSOR_AGENT_STORE_SHARED_PATHS", ot = "CURSOR_AGENT_STORE_FILES_DIR", at = "parent";
