"use strict";
require.d(exports, {
    $8: ()=>F,
    A8: ()=>ee,
    Ae: ()=>K,
    EJ: ()=>y,
    EN: ()=>Q,
    EO: ()=>b,
    EU: ()=>C,
    F6: ()=>W,
    FI: ()=>g,
    Jk: ()=>o,
    Ju: ()=>S,
    Ko: ()=>J,
    L4: ()=>k,
    OE: ()=>w,
    PL: ()=>u,
    PZ: ()=>Y,
    QT: ()=>U,
    RZ: ()=>_,
    Rf: ()=>M,
    Ri: ()=>z,
    S0: ()=>oe,
    SN: ()=>h,
    T3: ()=>G,
    TQ: ()=>a,
    Vj: ()=>te,
    WA: ()=>m,
    XF: ()=>l,
    XW: ()=>O,
    Y6: ()=>Z,
    Z6: ()=>P,
    ZJ: ()=>D,
    _L: ()=>v,
    _N: ()=>B,
    _R: ()=>q,
    __: ()=>n,
    _l: ()=>p,
    _u: ()=>ce,
    b1: ()=>j,
    eB: ()=>I,
    eX: ()=>ie,
    f: ()=>N,
    f7: ()=>re,
    hG: ()=>s,
    j6: ()=>ne,
    jO: ()=>ae,
    k9: ()=>f,
    p4: ()=>d,
    pV: ()=>c,
    pz: ()=>x,
    q8: ()=>L,
    sz: ()=>$,
    ur: ()=>H,
    v8: ()=>X,
    vB: ()=>i,
    wd: ()=>E,
    z_: ()=>A
});
const n = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, s = /^store-[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, o = "store-", i = /^store-[A-Za-z0-9_-]{24}$/, a = /^bc-(?:[0-9a-z][0-9a-z-]*-)?[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, c = /^(?:t([1-9][0-9]*)-)?u([1-9][0-9]*)$/, l = /^t([1-9][0-9]*)$/, u = "gb-", d = /^gb-[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, p = "user", m = "team", h = "automation", f = "bot", g = "self", y = "cursor_agent_stores", w = "cursor_agent_stores_dev", v = "files", _ = "skills", A = ".cursor";
function S(e) {
    return e.slice(0, A.length).toLowerCase() === A;
}
const b = 104857600, E = "home", I = "deployment", C = "user", k = "agent-serve";
function x(e) {
    return e === p || e === m || e === h || e === f || e === E || e === I;
}
function T(e, t) {
    if (!Number.isSafeInteger(e) || e <= 0) throw new Error(`${t} must be a positive safe integer`);
}
function R(e) {
    const t = Number(e);
    return Number.isSafeInteger(t) && t > 0 ? t : void 0;
}
function B(e) {
    T(e.userId, "userId");
    const t = e.teamId ?? void 0;
    return void 0 === t ? `u${e.userId}` : (T(t, "teamId"), `t${t}-u${e.userId}`);
}
function P(e) {
    const t = c.exec(e);
    if (null === t || void 0 === t[2]) return;
    const r = R(t[2]), n = void 0 === t[1] ? void 0 : R(t[1]);
    return void 0 === r || void 0 !== t[1] && void 0 === n ? void 0 : {
        userId: r,
        teamId: n
    };
}
function J(e) {
    return T(e, "teamId"), `t${e}`;
}
function M(e) {
    if (!n.test(e)) throw new Error("grokBotAgentId must be a UUID");
    return `${u}${e.toLowerCase()}`;
}
function q(e) {
    if (d.test(e)) return {
        grokBotAgentId: e.slice(u.length).toLowerCase()
    };
}
function D(e) {
    const t = l.exec(e);
    if (null === t || void 0 === t[1]) return;
    const r = R(t[1]);
    return void 0 === r ? void 0 : {
        teamId: r
    };
}
function O(e) {
    return void 0 !== P(e) || void 0 !== D(e);
}
const N = "/cursor/stores", F = "agent_store_sync_client_config", U = "agent_store_use_dedicated_service", L = "agent_store_fuse_use_dedicated_service", $ = "canvases", Q = "source.canvas.tsx", j = `${N}/${p}/${$}`, G = `${N}/${h}/${$}`, H = [
    j,
    G
], z = "shareId", W = "storeId", V = new Set([
    "agent-stores",
    "shared-agent-stores"
]);
function K(e) {
    return n.test(e);
}
function Y(e) {
    return a.test(e);
}
function Z(e) {
    return s.test(e);
}
function X(e) {
    return Y(e) || K(e);
}
function ee(e) {
    return i.test(e);
}
function te(e) {
    const t = e.protocol.toLowerCase();
    return ("http:" === t || "https:" === t) && function(e) {
        const t = e.replace(/\/+$/, "").split("/").filter(Boolean);
        if (t.length < 2) return !1;
        let r = t.length;
        return !("shared" === t[r - 1] && (r -= 1, r < 2) || !V.has(t[r - 1] ?? "") || (r -= 1, r < 1 || !("dashboard" === t[r - 1] || r >= 2 && "t" === t[r - 2])));
    }(e.pathname);
}
function re(e) {
    const t = e.trim();
    if (0 === t.length) return;
    let r;
    try {
        r = new URL(t);
    } catch  {
        return;
    }
    return function(e) {
        if (!te(e)) return;
        const t = e.searchParams.get(z)?.trim();
        if (void 0 !== t && i.test(t)) return {
            kind: "share",
            shareId: t
        };
        const r = e.searchParams.get(W)?.trim();
        return void 0 !== r && (X(r) || Z(r)) ? {
            kind: "peer",
            agentId: r
        } : void 0;
    }(r);
}
function ne(e) {
    const t = e.shareId?.trim();
    if (void 0 !== t && t.length > 0) {
        if (!i.test(t)) return;
        return {
            kind: "share",
            shareId: t
        };
    }
    const r = e.storeId?.trim();
    if (void 0 !== r && r.length > 0) {
        if (!X(r) && !Z(r)) return;
        return {
            kind: "peer",
            agentId: r
        };
    }
    const n = e.input?.trim();
    if (void 0 !== n && n.length > 0) return re(n);
}
const se = /@agentstore\((\/cursor\/stores\/[^()\s]+)\)/g;
function oe(e) {
    const t = new Set, r = [];
    for (const n of e.matchAll(se)){
        const e = n[1];
        if (void 0 === e) continue;
        const s = e.slice(`${N}/`.length).split("/")[0] ?? "";
        (X(s) || ee(s) || Z(s)) && (t.has(s) || (t.add(s), r.push(s)));
    }
    return r;
}
const ie = "CURSOR_AGENT_STORE_SHARED_PATHS", ae = "CURSOR_AGENT_STORE_FILES_DIR", ce = "parent";
