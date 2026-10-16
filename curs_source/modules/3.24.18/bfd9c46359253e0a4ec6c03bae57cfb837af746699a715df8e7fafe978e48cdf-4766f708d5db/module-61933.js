"use strict";
require.d(exports, {
    $8: ()=>A,
    A8: ()=>j,
    Ae: ()=>F,
    EJ: ()=>h,
    EN: ()=>J,
    EO: ()=>_,
    FI: ()=>m,
    Ju: ()=>v,
    Ko: ()=>I,
    OE: ()=>f,
    PZ: ()=>U,
    QT: ()=>R,
    RZ: ()=>y,
    SN: ()=>d,
    WA: ()=>u,
    XW: ()=>C,
    Y6: ()=>L,
    Z6: ()=>E,
    ZJ: ()=>T,
    _L: ()=>g,
    _N: ()=>x,
    __: ()=>n,
    _l: ()=>l,
    _u: ()=>V,
    b1: ()=>O,
    eX: ()=>H,
    f: ()=>P,
    hG: ()=>s,
    j6: ()=>W,
    jO: ()=>K,
    k9: ()=>p,
    sz: ()=>M,
    ur: ()=>B,
    v8: ()=>$,
    wd: ()=>b
});
const n = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, s = /^store-[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, o = /^store-[A-Za-z0-9_-]{24}$/, i = /^bc-(?:[0-9a-z][0-9a-z-]*-)?[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, a = /^(?:t([1-9][0-9]*)-)?u([1-9][0-9]*)$/, c = /^t([1-9][0-9]*)$/, l = "user", u = "team", d = "automation", p = "bot", m = "self", h = "cursor_agent_stores", f = "cursor_agent_stores_dev", g = "files", y = "skills", w = ".cursor";
function v(e) {
    return e.slice(0, w.length).toLowerCase() === w;
}
const _ = 104857600, b = "home";
function S(e, t) {
    if (!Number.isSafeInteger(e) || e <= 0) throw new Error(`${t} must be a positive safe integer`);
}
function k(e) {
    const t = Number(e);
    return Number.isSafeInteger(t) && t > 0 ? t : void 0;
}
function x(e) {
    S(e.userId, "userId");
    const t = e.teamId ?? void 0;
    return void 0 === t ? `u${e.userId}` : (S(t, "teamId"), `t${t}-u${e.userId}`);
}
function E(e) {
    const t = a.exec(e);
    if (null === t || void 0 === t[2]) return;
    const r = k(t[2]), n = void 0 === t[1] ? void 0 : k(t[1]);
    return void 0 === r || void 0 !== t[1] && void 0 === n ? void 0 : {
        userId: r,
        teamId: n
    };
}
function I(e) {
    return S(e, "teamId"), `t${e}`;
}
function T(e) {
    const t = c.exec(e);
    if (null === t || void 0 === t[1]) return;
    const r = k(t[1]);
    return void 0 === r ? void 0 : {
        teamId: r
    };
}
function C(e) {
    return void 0 !== E(e) || void 0 !== T(e);
}
const P = "/cursor/stores", A = "agent_store_sync_client_config", R = "agent_store_use_dedicated_service", M = "canvases", J = "source.canvas.tsx", O = `${P}/${l}/${M}`, B = [
    O,
    `${P}/${d}/${M}`
], D = "shareId", q = "storeId", N = new Set([
    "agent-stores",
    "shared-agent-stores"
]);
function F(e) {
    return n.test(e);
}
function U(e) {
    return i.test(e);
}
function L(e) {
    return s.test(e);
}
function $(e) {
    return U(e) || F(e);
}
function j(e) {
    return o.test(e);
}
function G(e) {
    const t = e.protocol.toLowerCase();
    return ("http:" === t || "https:" === t) && function(e) {
        const t = e.replace(/\/+$/, "").split("/").filter(Boolean);
        if (t.length < 2) return !1;
        let r = t.length;
        return !("shared" === t[r - 1] && (r -= 1, r < 2) || !N.has(t[r - 1] ?? "") || (r -= 1, r < 1 || !("dashboard" === t[r - 1] || r >= 2 && "t" === t[r - 2])));
    }(e.pathname);
}
function z(e) {
    const t = e.trim();
    if (0 === t.length) return;
    let r;
    try {
        r = new URL(t);
    } catch  {
        return;
    }
    return function(e) {
        if (!G(e)) return;
        const t = e.searchParams.get(D)?.trim();
        if (void 0 !== t && o.test(t)) return {
            kind: "share",
            shareId: t
        };
        const r = e.searchParams.get(q)?.trim();
        return void 0 !== r && ($(r) || L(r)) ? {
            kind: "peer",
            agentId: r
        } : void 0;
    }(r);
}
function W(e) {
    const t = e.shareId?.trim();
    if (void 0 !== t && t.length > 0) {
        if (!o.test(t)) return;
        return {
            kind: "share",
            shareId: t
        };
    }
    const r = e.storeId?.trim();
    if (void 0 !== r && r.length > 0) {
        if (!$(r) && !L(r)) return;
        return {
            kind: "peer",
            agentId: r
        };
    }
    const n = e.input?.trim();
    if (void 0 !== n && n.length > 0) return z(n);
}
const H = "CURSOR_AGENT_STORE_SHARED_PATHS", K = "CURSOR_AGENT_STORE_FILES_DIR", V = "parent";
