"use strict";
var t = this && this.__asyncValues || function(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var a, n = e[Symbol.asyncIterator];
    return n ? n.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), a = {}, t("next"), t("throw"), t("return"), a[Symbol.asyncIterator] = function() {
        return this;
    }, a);
    function t(n) {
        a[n] = e[n] && function(a) {
            return new Promise(function(t, s) {
                (function(e, a, n, t) {
                    Promise.resolve(t).then(function(a) {
                        e({
                            value: a,
                            done: n
                        });
                    }, a);
                })(t, s, (a = e[n](a)).done, a.value);
            });
        };
    }
}, s = this && this.__await || function(e) {
    return this instanceof s ? (this.v = e, this) : new s(e);
}, o = this && this.__asyncGenerator || function(e, a, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t, o = n.apply(e, a || []), r = [];
    return t = {}, i("next"), i("throw"), i("return", function(e) {
        return function(a) {
            return Promise.resolve(a).then(e, m);
        };
    }), t[Symbol.asyncIterator] = function() {
        return this;
    }, t;
    function i(e, a) {
        o[e] && (t[e] = function(a) {
            return new Promise(function(n, t) {
                r.push([
                    e,
                    a,
                    n,
                    t
                ]) > 1 || l(e, a);
            });
        }, a && (t[e] = a(t[e])));
    }
    function l(e, a) {
        try {
            (n = o[e](a)).value instanceof s ? Promise.resolve(n.value.v).then(d, m) : c(r[0][2], n);
        } catch (e) {
            c(r[0][3], e);
        }
        var n;
    }
    function d(e) {
        l("next", e);
    }
    function m(e) {
        l("throw", e);
    }
    function c(e, a) {
        e(a), r.shift(), r.length && l(r[0][0], r[0][1]);
    }
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoDelimited = void 0;
const r = require("./module-8831.js");
exports.protoDelimited = {
    enc (e, a) {
        const n = e.getType().runtime.bin.makeWriteOptions(a);
        return n.writerFactory().bytes(e.toBinary(n)).finish();
    },
    dec (e, a, n) {
        const t = e.runtime.bin.makeReadOptions(n);
        return e.fromBinary(t.readerFactory(a).bytes(), t);
    },
    decStream (e, n) {
        return o(this, arguments, function*() {
            var o, r, i, l;
            function d(e, a) {
                const n = new Uint8Array(e.byteLength + a.byteLength);
                return n.set(e), n.set(a, e.length), n;
            }
            let m = new Uint8Array(0);
            try {
                for(var c, p = !0, A = t(n); !(o = (c = yield s(A.next())).done); p = !0){
                    l = c.value, p = !1;
                    for(m = d(m, l);;){
                        const n = exports.protoDelimited.peekSize(m);
                        if (n.eof) break;
                        if (n.offset + n.size > m.byteLength) break;
                        yield yield s(exports.protoDelimited.dec(e, m)), m = m.subarray(n.offset + n.size);
                    }
                }
            } catch (e) {
                r = {
                    error: e
                };
            } finally{
                try {
                    p || o || !(i = A.return) || (yield s(i.call(A)));
                } finally{
                    if (r) throw r.error;
                }
            }
            if (m.byteLength > 0) throw new Error("incomplete data");
        });
    },
    peekSize (e) {
        const a = {
            eof: !0,
            size: null,
            offset: null
        };
        for(let n = 0; n < 10; n++){
            if (n > e.byteLength) return a;
            if (!(128 & e[n])) {
                const n = new r.BinaryReader(e);
                let t;
                try {
                    t = n.uint32();
                } catch (e) {
                    if (e instanceof RangeError) return a;
                    throw e;
                }
                return {
                    eof: !1,
                    size: t,
                    offset: n.pos
                };
            }
        }
        throw new Error("invalid varint");
    }
};
