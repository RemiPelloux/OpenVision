"use strict";
require.d(exports, {
    AS: ()=>a,
    K9: ()=>l,
    ot: ()=>c,
    s: ()=>i,
    vn: ()=>s
});
var n = require("./module-76760.js");
function s(e) {
    return e.replace(/^([a-z]):\\/i, (e, t)=>`${t.toUpperCase()}:\\`);
}
const o = "win32" === process.platform;
process.platform;
function i(e) {
    return {
        dispose: e
    };
}
function a(e) {
    for (const t of e)t.dispose();
}
function c(e) {
    return e.replace(/^git version /, "");
}
function l(e, t) {
    return o && (e = e.toLowerCase(), t = t.toLowerCase()), e === t || (e.charAt(e.length - 1) !== n.sep && (e += n.sep), t.startsWith(e));
}
