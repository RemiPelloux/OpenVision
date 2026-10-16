"use strict";
var a = this && this.__asyncValues || function(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n, t = e[Symbol.asyncIterator];
    return t ? t.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), n = {}, a("next"), a("throw"), a("return"), n[Symbol.asyncIterator] = function() {
        return this;
    }, n);
    function a(t) {
        n[t] = e[t] && function(n) {
            return new Promise(function(a, s) {
                (function(e, n, t, a) {
                    Promise.resolve(a).then(function(n) {
                        e({
                            value: n,
                            done: t
                        });
                    }, n);
                })(a, s, (n = e[t](n)).done, n.value);
            });
        };
    }
}, s = this && this.__await || function(e) {
    return this instanceof s ? (this.v = e, this) : new s(e);
}, o = this && this.__asyncGenerator || function(e, n, t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var a, o = t.apply(e, n || []), r = [];
    return a = {}, i("next"), i("throw"), i("return", function(e) {
        return function(n) {
            return Promise.resolve(n).then(e, l);
        };
    }), a[Symbol.asyncIterator] = function() {
        return this;
    }, a;
    function i(e, n) {
        o[e] && (a[e] = function(n) {
            return new Promise(function(t, a) {
                r.push([
                    e,
                    n,
                    t,
                    a
                ]) > 1 || A(e, n);
            });
        }, n && (a[e] = n(a[e])));
    }
    function A(e, n) {
        try {
            (t = o[e](n)).value instanceof s ? Promise.resolve(t.value.v).then(c, l) : d(r[0][2], t);
        } catch (e) {
            d(r[0][3], e);
        }
        var t;
    }
    function c(e) {
        A("next", e);
    }
    function l(e) {
        A("throw", e);
    }
    function d(e, n) {
        e(n), r.shift(), r.length && A(r[0][0], r[0][1]);
    }
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoDelimited = void 0;
const r = require("./module-8831.js");
exports.protoDelimited = {
    enc (e, n) {
        const t = e.getType().runtime.bin.makeWriteOptions(n);
        return t.writerFactory().bytes(e.toBinary(t)).finish();
    },
    dec (e, n, t) {
        const a = e.runtime.bin.makeReadOptions(t);
        return e.fromBinary(a.readerFactory(n).bytes(), a);
    },
    decStream (e, t) {
        return o(this, arguments, function*() {
            var o, r, i, A;
            function c(e, n) {
                const t = new Uint8Array(e.byteLength + n.byteLength);
                return t.set(e), t.set(n, e.length), t;
            }
            let l = new Uint8Array(0);
            try {
                for(var d, m = !0, u = a(t); !(o = (d = yield s(u.next())).done); m = !0){
                    A = d.value, m = !1;
                    for(l = c(l, A);;){
                        const t = exports.protoDelimited.peekSize(l);
                        if (t.eof) break;
                        if (t.offset + t.size > l.byteLength) break;
                        yield yield s(exports.protoDelimited.dec(e, l)), l = l.subarray(t.offset + t.size);
                    }
                }
            } catch (e) {
                r = {
                    error: e
                };
            } finally{
                try {
                    m || o || !(i = u.return) || (yield s(i.call(u)));
                } finally{
                    if (r) throw r.error;
                }
            }
            if (l.byteLength > 0) throw new Error("incomplete data");
        });
    },
    peekSize (e) {
        const n = {
            eof: !0,
            size: null,
            offset: null
        };
        for(let t = 0; t < 10; t++){
            if (t > e.byteLength) return n;
            if (!(128 & e[t])) {
                const t = new r.BinaryReader(e);
                let a;
                try {
                    a = t.uint32();
                } catch (e) {
                    if (e instanceof RangeError) return n;
                    throw e;
                }
                return {
                    eof: !1,
                    size: a,
                    offset: t.pos
                };
            }
        }
        throw new Error("invalid varint");
    }
};
