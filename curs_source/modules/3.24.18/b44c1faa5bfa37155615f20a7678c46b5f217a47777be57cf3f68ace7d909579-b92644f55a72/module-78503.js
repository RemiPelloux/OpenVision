"use strict";
require.d(exports, {
    NL: ()=>c,
    Tw: ()=>l,
    kk: ()=>u
});
var n = require("./module-92801.js"), s = require("./module-84959.js");
const o = 4294967295, i = o, a = 1024;
function c(e, t, r) {
    if (null != t || (t = i), null != e || (e = o), null != r || (r = a), t < 1 || t > i) throw new n.T(`writeMaxBytes ${t} must be >= 1 and <= ${i}`, s.C.Internal);
    if (e < 1 || e > o) throw new n.T(`readMaxBytes ${e} must be >= 1 and <= ${o}`, s.C.Internal);
    return {
        readMaxBytes: e,
        writeMaxBytes: t,
        compressMinBytes: r
    };
}
function l(e, t) {
    if (t > e) throw new n.T(`message size ${t} is larger than configured writeMaxBytes ${e}`, s.C.ResourceExhausted);
}
function u(e, t, r = !1) {
    if (t > e) {
        let o = `message size is larger than configured readMaxBytes ${e}`;
        throw r && (o = `message size ${t} is larger than configured readMaxBytes ${e}`), new n.T(o, s.C.ResourceExhausted);
    }
}
