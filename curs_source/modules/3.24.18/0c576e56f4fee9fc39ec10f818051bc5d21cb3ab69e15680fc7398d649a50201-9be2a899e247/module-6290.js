"use strict";
require.d(exports, {
    B1j: ()=>o.B,
    RRj: ()=>S.RR,
    c8u: ()=>d.c,
    uOd: ()=>C.uO,
    NjG: ()=>S.Nj,
    XUi: ()=>I,
    E_S: ()=>k,
    Ico: ()=>u.I,
    O3I: ()=>a.O3,
    tBH: ()=>a.tB,
    UKO: ()=>c.U,
    yZp: ()=>_.yZ,
    nwZ: ()=>_.nw,
    eod: ()=>s.e,
    Fmf: ()=>l.F,
    jIB: ()=>i.jI,
    SAT: ()=>O.SA,
    FMv: ()=>b.FM,
    $yO: ()=>a.$y,
    VDJ: ()=>a.VD,
    VOp: ()=>g.VO,
    qhs: ()=>h.qh,
    ptw: ()=>g.pt,
    eZ7: ()=>f.eZ,
    Zo$: ()=>g.Zo,
    X5z: ()=>a.X5,
    vn5: ()=>m.v,
    dg: ()=>f.dg,
    $HQ: ()=>n.$H,
    zfx: ()=>P.zf,
    MBX: ()=>h.MB,
    Gpm: ()=>S.Gp,
    PKk: ()=>$.P,
    NOL: ()=>p.NO,
    Yl9: ()=>n.Yl,
    qYO: ()=>a.qY,
    gOx: ()=>P.gO,
    _NE: ()=>n._N,
    Q2T: ()=>O.Q2,
    Ezk: ()=>O.Ez,
    qFm: ()=>T,
    eaG: ()=>a.e,
    zBU: ()=>b.zB,
    iOk: ()=>v.iO,
    YMW: ()=>b.YM,
    dQS: ()=>b.dQ,
    KXj: ()=>w.KX,
    lV: ()=>m.l,
    mYE: ()=>b.mY,
    H$2: ()=>b.H$,
    J_m: ()=>h.J_,
    X1r: ()=>h.X1,
    koU: ()=>y,
    QDM: ()=>a.QD,
    q2e: ()=>a.q2,
    mtU: ()=>A.m,
    utF: ()=>A.u
});
var n = require("./module-768.js");
require("./module-623.js");
var o = require("./module-8881.js"), s = require("./module-8088.js");
var i = require("./module-4956.js"), a = (require("./module-4792.js"), require("./module-2557.js")), c = require("./module-3080.js"), u = require("./module-5553.js"), l = require("./module-8644.js"), d = require("./module-6078.js");
var p = require("./module-2573.js"), f = require("./module-6768.js"), h = (require("./module-3309.js"), require("./module-4152.js")), m = require("./module-496.js"), g = require("./module-7223.js");
require("./module-7030.js");
function y(e, t) {
    if ("needsUserAuth" === t.type) return !1;
    if ("expired" === t.type) switch(e.type){
        case "idle":
        case "transient_failure":
        case "dormant":
            return !0;
        case "failed":
        case "closed":
            return !1 !== e.automaticRetry;
        case "connecting":
        case "connected":
        case "degraded":
            return !1;
        default:
            return e;
    }
    switch(e.type){
        case "idle":
        case "transient_failure":
        case "dormant":
            return !0;
        case "failed":
        case "closed":
            return !1 !== e.automaticRetry;
        case "connecting":
        case "connected":
        case "degraded":
            return !1;
        default:
            return e;
    }
}
require("./module-9175.js");
var _ = require("./module-8691.js"), v = require("./module-9052.js"), w = require("./module-4420.js"), b = require("./module-2915.js"), S = require("./module-1521.js");
function k(e, t) {
    void 0 !== t && t.length > 0 && e.searchParams.set("scope", t.join(" "));
}
new Set([
    "invalid_refresh_token",
    "token_revoked",
    "token_expired"
]);
const E = /\$\{[^}]*\}/;
function x(e) {
    if (void 0 === e) return;
    const t = e.trim();
    return 0 !== t.length && E.test(t) ? t : void 0;
}
function T(e) {
    if (void 0 !== x(e)) return;
    const t = e?.trim();
    return t && t.length > 0 ? t : void 0;
}
var O = require("./module-5015.js"), P = require("./module-1219.js");
class I {
    constructor(){
        this.listeners = new Set, this.event = (e)=>(this.listeners.add(e), {
                dispose: ()=>{
                    this.listeners.delete(e);
                }
            });
    }
    fire(e) {
        for (const t of Array.from(this.listeners))t(e);
    }
    dispose() {
        this.listeners.clear();
    }
}
var C = require("./module-1195.js"), A = require("./module-2047.js"), $ = require("./module-8228.js");
