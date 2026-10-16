"use strict";
require.d(exports, {
    IR: ()=>l,
    Rj: ()=>o,
    Up: ()=>a,
    _g: ()=>s,
    vP: ()=>i,
    wz: ()=>c
});
var n = require("./module-61933.js");
const s = "canvas.json", o = "canvas.bundle.gz";
function i(e, t) {
    return `${e}/${t}/${n.EN}`;
}
function a(e) {
    return i(n.b1, e);
}
n.EN;
function c(e) {
    const t = e.trim().toLowerCase();
    return n.__.test(t) ? {
        ok: !0,
        value: t
    } : {
        ok: !1
    };
}
function l(e) {
    return e.length >= 2 && 31 === e[0] && 139 === e[1];
}
