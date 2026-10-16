"use strict";
require.d(exports, {
    NL: ()=>u,
    Tw: ()=>c,
    kk: ()=>l
});
var n = require("./module-328.js"), s = require("./module-8032.js");
const i = 4294967295, o = i, a = 1024;
function u(t, e, r) {
    if (null != e || (e = o), null != t || (t = i), null != r || (r = a), e < 1 || e > o) throw new n.T(`writeMaxBytes ${e} must be >= 1 and <= ${o}`, s.C.Internal);
    if (t < 1 || t > i) throw new n.T(`readMaxBytes ${t} must be >= 1 and <= ${i}`, s.C.Internal);
    return {
        readMaxBytes: t,
        writeMaxBytes: e,
        compressMinBytes: r
    };
}
function c(t, e) {
    if (e > t) throw new n.T(`message size ${e} is larger than configured writeMaxBytes ${t}`, s.C.ResourceExhausted);
}
function l(t, e, r = !1) {
    if (e > t) {
        let i = `message size is larger than configured readMaxBytes ${t}`;
        throw r && (i = `message size ${e} is larger than configured readMaxBytes ${t}`), new n.T(i, s.C.ResourceExhausted);
    }
}
