"use strict";
var n = this && this.__asyncValues || function(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var A, t = e[Symbol.asyncIterator];
    return t ? t.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), A = {}, n("next"), n("throw"), n("return"), A[Symbol.asyncIterator] = function() {
        return this;
    }, A);
    function n(t) {
        A[t] = e[t] && function(A) {
            return new Promise(function(n, r) {
                (function(e, A, t, n) {
                    Promise.resolve(n).then(function(A) {
                        e({
                            value: A,
                            done: t
                        });
                    }, A);
                })(n, r, (A = e[t](A)).done, A.value);
            });
        };
    }
}, r = this && this.__await || function(e) {
    return this instanceof r ? (this.v = e, this) : new r(e);
}, o = this && this.__asyncGenerator || function(e, A, t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n, o = t.apply(e, A || []), s = [];
    return n = {}, a("next"), a("throw"), a("return", function(e) {
        return function(A) {
            return Promise.resolve(A).then(e, l);
        };
    }), n[Symbol.asyncIterator] = function() {
        return this;
    }, n;
    function a(e, A) {
        o[e] && (n[e] = function(A) {
            return new Promise(function(t, n) {
                s.push([
                    e,
                    A,
                    t,
                    n
                ]) > 1 || i(e, A);
            });
        }, A && (n[e] = A(n[e])));
    }
    function i(e, A) {
        try {
            (t = o[e](A)).value instanceof r ? Promise.resolve(t.value.v).then(c, l) : g(s[0][2], t);
        } catch (e) {
            g(s[0][3], e);
        }
        var t;
    }
    function c(e) {
        i("next", e);
    }
    function l(e) {
        i("throw", e);
    }
    function g(e, A) {
        e(A), s.shift(), s.length && i(s[0][0], s[0][1]);
    }
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoDelimited = void 0;
const s = require("./module-8831.js");
exports.protoDelimited = {
    enc (e, A) {
        const t = e.getType().runtime.bin.makeWriteOptions(A);
        return t.writerFactory().bytes(e.toBinary(t)).finish();
    },
    dec (e, A, t) {
        const n = e.runtime.bin.makeReadOptions(t);
        return e.fromBinary(n.readerFactory(A).bytes(), n);
    },
    decStream (e, t) {
        return o(this, arguments, function*() {
            var o, s, a, i;
            function c(e, A) {
                const t = new Uint8Array(e.byteLength + A.byteLength);
                return t.set(e), t.set(A, e.length), t;
            }
            let l = new Uint8Array(0);
            try {
                for(var g, E = !0, u = n(t); !(o = (g = yield r(u.next())).done); E = !0){
                    i = g.value, E = !1;
                    for(l = c(l, i);;){
                        const t = exports.protoDelimited.peekSize(l);
                        if (t.eof) break;
                        if (t.offset + t.size > l.byteLength) break;
                        yield yield r(exports.protoDelimited.dec(e, l)), l = l.subarray(t.offset + t.size);
                    }
                }
            } catch (e) {
                s = {
                    error: e
                };
            } finally{
                try {
                    E || o || !(a = u.return) || (yield r(a.call(u)));
                } finally{
                    if (s) throw s.error;
                }
            }
            if (l.byteLength > 0) throw new Error("incomplete data");
        });
    },
    peekSize (e) {
        const A = {
            eof: !0,
            size: null,
            offset: null
        };
        for(let t = 0; t < 10; t++){
            if (t > e.byteLength) return A;
            if (!(128 & e[t])) {
                const t = new s.BinaryReader(e);
                let n;
                try {
                    n = t.uint32();
                } catch (e) {
                    if (e instanceof RangeError) return A;
                    throw e;
                }
                return {
                    eof: !1,
                    size: n,
                    offset: t.pos
                };
            }
        }
        throw new Error("invalid varint");
    }
};
