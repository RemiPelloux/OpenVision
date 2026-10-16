require.d(exports, {
    NL: ()=>u,
    Tw: ()=>s,
    kk: ()=>c
});
var r = require(42761), o = require(47777);
const i = 4294967295, a = i, l = 1024;
function u(t, e, n) {
    if (null != e || (e = a), null != t || (t = i), null != n || (n = l), e < 1 || e > a) throw new r.T(`writeMaxBytes ${e} must be >= 1 and <= ${a}`, o.C.Internal);
    if (t < 1 || t > i) throw new r.T(`readMaxBytes ${t} must be >= 1 and <= ${i}`, o.C.Internal);
    return {
        readMaxBytes: t,
        writeMaxBytes: e,
        compressMinBytes: n
    };
}
function s(t, e) {
    if (e > t) throw new r.T(`message size ${e} is larger than configured writeMaxBytes ${t}`, o.C.ResourceExhausted);
}
function c(t, e, n = !1) {
    if (e > t) {
        let i = `message size is larger than configured readMaxBytes ${t}`;
        throw n && (i = `message size ${e} is larger than configured readMaxBytes ${t}`), new r.T(i, o.C.ResourceExhausted);
    }
}
