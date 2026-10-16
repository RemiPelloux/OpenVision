"use strict";
var t = this && this.__asyncValues || function(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n, a = e[Symbol.asyncIterator];
    return a ? a.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), n = {}, t("next"), t("throw"), t("return"), n[Symbol.asyncIterator] = function() {
        return this;
    }, n);
    function t(a) {
        n[a] = e[a] && function(n) {
            return new Promise(function(t, s) {
                (function(e, n, a, t) {
                    Promise.resolve(t).then(function(n) {
                        e({
                            value: n,
                            done: a
                        });
                    }, n);
                })(t, s, (n = e[a](n)).done, n.value);
            });
        };
    }
}, s = this && this.__await || function(e) {
    return this instanceof s ? (this.v = e, this) : new s(e);
}, o = this && this.__asyncGenerator || function(e, n, a) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t, o = a.apply(e, n || []), r = [];
    return t = {}, i("next"), i("throw"), i("return", function(e) {
        return function(n) {
            return Promise.resolve(n).then(e, c);
        };
    }), t[Symbol.asyncIterator] = function() {
        return this;
    }, t;
    function i(e, n) {
        o[e] && (t[e] = function(n) {
            return new Promise(function(a, t) {
                r.push([
                    e,
                    n,
                    a,
                    t
                ]) > 1 || A(e, n);
            });
        }, n && (t[e] = n(t[e])));
    }
    function A(e, n) {
        try {
            (a = o[e](n)).value instanceof s ? Promise.resolve(a.value.v).then(l, c) : m(r[0][2], a);
        } catch (e) {
            m(r[0][3], e);
        }
        var a;
    }
    function l(e) {
        A("next", e);
    }
    function c(e) {
        A("throw", e);
    }
    function m(e, n) {
        e(n), r.shift(), r.length && A(r[0][0], r[0][1]);
    }
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoDelimited = void 0;
const r = require("./module-8831.js");
exports.protoDelimited = {
    enc (e, n) {
        const a = e.getType().runtime.bin.makeWriteOptions(n);
        return a.writerFactory().bytes(e.toBinary(a)).finish();
    },
    dec (e, n, a) {
        const t = e.runtime.bin.makeReadOptions(a);
        return e.fromBinary(t.readerFactory(n).bytes(), t);
    },
    decStream (e, a) {
        return o(this, arguments, function*() {
            var o, r, i, A;
            function l(e, n) {
                const a = new Uint8Array(e.byteLength + n.byteLength);
                return a.set(e), a.set(n, e.length), a;
            }
            let c = new Uint8Array(0);
            try {
                for(var m, d = !0, g = t(a); !(o = (m = yield s(g.next())).done); d = !0){
                    A = m.value, d = !1;
                    for(c = l(c, A);;){
                        const a = exports.protoDelimited.peekSize(c);
                        if (a.eof) break;
                        if (a.offset + a.size > c.byteLength) break;
                        yield yield s(exports.protoDelimited.dec(e, c)), c = c.subarray(a.offset + a.size);
                    }
                }
            } catch (e) {
                r = {
                    error: e
                };
            } finally{
                try {
                    d || o || !(i = g.return) || (yield s(i.call(g)));
                } finally{
                    if (r) throw r.error;
                }
            }
            if (c.byteLength > 0) throw new Error("incomplete data");
        });
    },
    peekSize (e) {
        const n = {
            eof: !0,
            size: null,
            offset: null
        };
        for(let a = 0; a < 10; a++){
            if (a > e.byteLength) return n;
            if (!(128 & e[a])) {
                const a = new r.BinaryReader(e);
                let t;
                try {
                    t = a.uint32();
                } catch (e) {
                    if (e instanceof RangeError) return n;
                    throw e;
                }
                return {
                    eof: !1,
                    size: t,
                    offset: a.pos
                };
            }
        }
        throw new Error("invalid varint");
    }
};
