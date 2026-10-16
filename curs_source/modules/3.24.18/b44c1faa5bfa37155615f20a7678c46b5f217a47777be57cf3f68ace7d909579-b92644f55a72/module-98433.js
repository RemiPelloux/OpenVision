"use strict";
require.d(exports, {
    B_: ()=>i,
    Ef: ()=>c,
    Qg: ()=>a,
    _I: ()=>l
});
var n = require("./module-92801.js"), s = require("./module-84959.js"), o = require("./module-78503.js");
function i(e) {
    var t;
    const r = Object.assign({}, e);
    return null !== (t = r.ignoreUnknownFields) && void 0 !== t || (r.ignoreUnknownFields = !0), r;
}
function a(e, t, r, n) {
    const s = l(u(e.I, t), n), o = l(d(e.I, r), n), i = l(u(e.O, t), n), a = l(d(e.O, r), n);
    return {
        getI: (e)=>e ? s : o,
        getO: (e)=>e ? i : a
    };
}
function c(e, t, r, n) {
    const s = t ? u(e.I, n) : d(e.I, r);
    return {
        parse: (t ? u(e.O, n) : d(e.O, r)).parse,
        serialize: s.serialize
    };
}
function l(e, t) {
    return {
        serialize (r) {
            const n = e.serialize(r);
            return (0, o.Tw)(t.writeMaxBytes, n.byteLength), n;
        },
        parse: (r)=>((0, o.kk)(t.readMaxBytes, r.byteLength, !0), e.parse(r))
    };
}
function u(e, t) {
    return {
        parse (r) {
            try {
                return e.fromBinary(r, t);
            } catch (e) {
                const t = e instanceof Error ? e.message : String(e);
                throw new n.T(`parse binary: ${t}`, s.C.Internal);
            }
        },
        serialize (e) {
            try {
                return e.toBinary(t);
            } catch (e) {
                const t = e instanceof Error ? e.message : String(e);
                throw new n.T(`serialize binary: ${t}`, s.C.Internal);
            }
        }
    };
}
function d(e, t) {
    var r, o;
    const a = null !== (r = null == t ? void 0 : t.textEncoder) && void 0 !== r ? r : new TextEncoder, c = null !== (o = null == t ? void 0 : t.textDecoder) && void 0 !== o ? o : new TextDecoder, l = i(t);
    return {
        parse (t) {
            try {
                const r = c.decode(t);
                return e.fromJsonString(r, l);
            } catch (e) {
                throw n.T.from(e, s.C.InvalidArgument);
            }
        },
        serialize (e) {
            try {
                const t = e.toJsonString(l);
                return a.encode(t);
            } catch (e) {
                throw n.T.from(e, s.C.Internal);
            }
        }
    };
}
