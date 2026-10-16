"use strict";
var n = this && this.__asyncValues || function(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t, A = e[Symbol.asyncIterator];
    return A ? A.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
        return this;
    }, t);
    function n(A) {
        t[A] = e[A] && function(t) {
            return new Promise(function(n, r) {
                (function(e, t, A, n) {
                    Promise.resolve(n).then(function(t) {
                        e({
                            value: t,
                            done: A
                        });
                    }, t);
                })(n, r, (t = e[A](t)).done, t.value);
            });
        };
    }
}, r = this && this.__await || function(e) {
    return this instanceof r ? (this.v = e, this) : new r(e);
}, o = this && this.__asyncGenerator || function(e, t, A) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n, o = A.apply(e, t || []), s = [];
    return n = {}, i("next"), i("throw"), i("return", function(e) {
        return function(t) {
            return Promise.resolve(t).then(e, l);
        };
    }), n[Symbol.asyncIterator] = function() {
        return this;
    }, n;
    function i(e, t) {
        o[e] && (n[e] = function(t) {
            return new Promise(function(A, n) {
                s.push([
                    e,
                    t,
                    A,
                    n
                ]) > 1 || a(e, t);
            });
        }, t && (n[e] = t(n[e])));
    }
    function a(e, t) {
        try {
            (A = o[e](t)).value instanceof r ? Promise.resolve(A.value.v).then(c, l) : u(s[0][2], A);
        } catch (e) {
            u(s[0][3], e);
        }
        var A;
    }
    function c(e) {
        a("next", e);
    }
    function l(e) {
        a("throw", e);
    }
    function u(e, t) {
        e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
    }
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoDelimited = void 0;
const s = require("./module-8831.js");
exports.protoDelimited = {
    enc (e, t) {
        const A = e.getType().runtime.bin.makeWriteOptions(t);
        return A.writerFactory().bytes(e.toBinary(A)).finish();
    },
    dec (e, t, A) {
        const n = e.runtime.bin.makeReadOptions(A);
        return e.fromBinary(n.readerFactory(t).bytes(), n);
    },
    decStream (e, A) {
        return o(this, arguments, function*() {
            var o, s, i, a;
            function c(e, t) {
                const A = new Uint8Array(e.byteLength + t.byteLength);
                return A.set(e), A.set(t, e.length), A;
            }
            let l = new Uint8Array(0);
            try {
                for(var u, g = !0, E = n(A); !(o = (u = yield r(E.next())).done); g = !0){
                    a = u.value, g = !1;
                    for(l = c(l, a);;){
                        const A = exports.protoDelimited.peekSize(l);
                        if (A.eof) break;
                        if (A.offset + A.size > l.byteLength) break;
                        yield yield r(exports.protoDelimited.dec(e, l)), l = l.subarray(A.offset + A.size);
                    }
                }
            } catch (e) {
                s = {
                    error: e
                };
            } finally{
                try {
                    g || o || !(i = E.return) || (yield r(i.call(E)));
                } finally{
                    if (s) throw s.error;
                }
            }
            if (l.byteLength > 0) throw new Error("incomplete data");
        });
    },
    peekSize (e) {
        const t = {
            eof: !0,
            size: null,
            offset: null
        };
        for(let A = 0; A < 10; A++){
            if (A > e.byteLength) return t;
            if (!(128 & e[A])) {
                const A = new s.BinaryReader(e);
                let n;
                try {
                    n = A.uint32();
                } catch (e) {
                    if (e instanceof RangeError) return t;
                    throw e;
                }
                return {
                    eof: !1,
                    size: n,
                    offset: A.pos
                };
            }
        }
        throw new Error("invalid varint");
    }
};
