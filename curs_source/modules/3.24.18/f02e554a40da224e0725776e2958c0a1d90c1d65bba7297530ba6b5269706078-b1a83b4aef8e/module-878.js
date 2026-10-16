"use strict";
require.d(exports, {
    B_: ()=>o,
    Ef: ()=>u,
    Qg: ()=>a,
    _I: ()=>c
});
var n = require("./module-328.js"), s = require("./module-8032.js"), i = require("./module-278.js");
function o(t) {
    var e;
    const r = Object.assign({}, t);
    return null !== (e = r.ignoreUnknownFields) && void 0 !== e || (r.ignoreUnknownFields = !0), r;
}
function a(t, e, r, n) {
    const s = c(l(t.I, e), n), i = c(m(t.I, r), n), o = c(l(t.O, e), n), a = c(m(t.O, r), n);
    return {
        getI: (t)=>t ? s : i,
        getO: (t)=>t ? o : a
    };
}
function u(t, e, r, n) {
    const s = e ? l(t.I, n) : m(t.I, r);
    return {
        parse: (e ? l(t.O, n) : m(t.O, r)).parse,
        serialize: s.serialize
    };
}
function c(t, e) {
    return {
        serialize (r) {
            const n = t.serialize(r);
            return (0, i.Tw)(e.writeMaxBytes, n.byteLength), n;
        },
        parse: (r)=>((0, i.kk)(e.readMaxBytes, r.byteLength, !0), t.parse(r))
    };
}
function l(t, e) {
    return {
        parse (r) {
            try {
                return t.fromBinary(r, e);
            } catch (t) {
                const e = t instanceof Error ? t.message : String(t);
                throw new n.T(`parse binary: ${e}`, s.C.Internal);
            }
        },
        serialize (t) {
            try {
                return t.toBinary(e);
            } catch (t) {
                const e = t instanceof Error ? t.message : String(t);
                throw new n.T(`serialize binary: ${e}`, s.C.Internal);
            }
        }
    };
}
function m(t, e) {
    var r, i;
    const a = null !== (r = null == e ? void 0 : e.textEncoder) && void 0 !== r ? r : new TextEncoder, u = null !== (i = null == e ? void 0 : e.textDecoder) && void 0 !== i ? i : new TextDecoder, c = o(e);
    return {
        parse (e) {
            try {
                const r = u.decode(e);
                return t.fromJsonString(r, c);
            } catch (t) {
                throw n.T.from(t, s.C.InvalidArgument);
            }
        },
        serialize (t) {
            try {
                const e = t.toJsonString(c);
                return a.encode(e);
            } catch (t) {
                throw n.T.from(t, s.C.Internal);
            }
        }
    };
}
