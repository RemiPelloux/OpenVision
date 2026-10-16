"use strict";
require.d(exports, {
    D8: ()=>g,
    FY: ()=>o,
    H1: ()=>d,
    Ir: ()=>b,
    J9: ()=>f,
    Jp: ()=>v,
    MS: ()=>a,
    SG: ()=>x,
    SN: ()=>S,
    Uv: ()=>R,
    VQ: ()=>_,
    Wd: ()=>m,
    XI: ()=>n,
    Zs: ()=>i,
    cR: ()=>c,
    g5: ()=>C,
    ku: ()=>T,
    lP: ()=>E,
    oB: ()=>u,
    ot: ()=>h,
    pj: ()=>p,
    r1: ()=>A,
    r2: ()=>l,
    tI: ()=>s,
    wE: ()=>y,
    z8: ()=>N,
    zX: ()=>w
});
const n = "X-Amz-Algorithm", s = "X-Amz-Credential", i = "X-Amz-Date", o = "X-Amz-SignedHeaders", a = "X-Amz-Expires", c = "X-Amz-Signature", l = "X-Amz-Security-Token", u = "X-Amz-Region-Set", d = "authorization", h = i.toLowerCase(), f = "date", p = [
    d,
    h,
    f
], g = c.toLowerCase(), m = "x-amz-content-sha256", y = l.toLowerCase(), w = "host", S = {
    authorization: !0,
    "cache-control": !0,
    connection: !0,
    expect: !0,
    from: !0,
    "keep-alive": !0,
    "max-forwards": !0,
    pragma: !0,
    referer: !0,
    te: !0,
    trailer: !0,
    "transfer-encoding": !0,
    upgrade: !0,
    "user-agent": !0,
    "x-amzn-trace-id": !0
}, b = /^proxy-/, E = /^sec-/, v = [
    /^proxy-/i,
    /^sec-/i
], x = "AWS4-HMAC-SHA256", T = "AWS4-ECDSA-P256-SHA256", A = "AWS4-HMAC-SHA256-PAYLOAD", N = "UNSIGNED-PAYLOAD", C = 50, _ = "aws4_request", R = 604800;
