"use strict";
var n = this && this.__asyncValues || function(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t, r = e[Symbol.asyncIterator];
    return r ? r.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
        return this;
    }, t);
    function n(r) {
        t[r] = e[r] && function(t) {
            return new Promise(function(n, o) {
                (function(e, t, r, n) {
                    Promise.resolve(n).then(function(t) {
                        e({
                            value: t,
                            done: r
                        });
                    }, t);
                })(n, o, (t = e[r](t)).done, t.value);
            });
        };
    }
}, o = this && this.__await || function(e) {
    return this instanceof o ? (this.v = e, this) : new o(e);
}, s = this && this.__asyncGenerator || function(e, t, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n, s = r.apply(e, t || []), i = [];
    return n = {}, a("next"), a("throw"), a("return", function(e) {
        return function(t) {
            return Promise.resolve(t).then(e, u);
        };
    }), n[Symbol.asyncIterator] = function() {
        return this;
    }, n;
    function a(e, t) {
        s[e] && (n[e] = function(t) {
            return new Promise(function(r, n) {
                i.push([
                    e,
                    t,
                    r,
                    n
                ]) > 1 || l(e, t);
            });
        }, t && (n[e] = t(n[e])));
    }
    function l(e, t) {
        try {
            (r = s[e](t)).value instanceof o ? Promise.resolve(r.value.v).then(c, u) : d(i[0][2], r);
        } catch (e) {
            d(i[0][3], e);
        }
        var r;
    }
    function c(e) {
        l("next", e);
    }
    function u(e) {
        l("throw", e);
    }
    function d(e, t) {
        e(t), i.shift(), i.length && l(i[0][0], i[0][1]);
    }
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoDelimited = void 0;
const i = require("./module-18831.js");
exports.protoDelimited = {
    enc (e, t) {
        const r = e.getType().runtime.bin.makeWriteOptions(t);
        return r.writerFactory().bytes(e.toBinary(r)).finish();
    },
    dec (e, t, r) {
        const n = e.runtime.bin.makeReadOptions(r);
        return e.fromBinary(n.readerFactory(t).bytes(), n);
    },
    decStream (e, r) {
        return s(this, arguments, function*() {
            var s, i, a, l;
            function c(e, t) {
                const r = new Uint8Array(e.byteLength + t.byteLength);
                return r.set(e), r.set(t, e.length), r;
            }
            let u = new Uint8Array(0);
            try {
                for(var d, p = !0, h = n(r); !(s = (d = yield o(h.next())).done); p = !0){
                    l = d.value, p = !1;
                    for(u = c(u, l);;){
                        const r = exports.protoDelimited.peekSize(u);
                        if (r.eof) break;
                        if (r.offset + r.size > u.byteLength) break;
                        yield yield o(exports.protoDelimited.dec(e, u)), u = u.subarray(r.offset + r.size);
                    }
                }
            } catch (e) {
                i = {
                    error: e
                };
            } finally{
                try {
                    p || s || !(a = h.return) || (yield o(a.call(h)));
                } finally{
                    if (i) throw i.error;
                }
            }
            if (u.byteLength > 0) throw new Error("incomplete data");
        });
    },
    peekSize (e) {
        const t = {
            eof: !0,
            size: null,
            offset: null
        };
        for(let r = 0; r < 10; r++){
            if (r > e.byteLength) return t;
            if (!(128 & e[r])) {
                const r = new i.BinaryReader(e);
                let n;
                try {
                    n = r.uint32();
                } catch (e) {
                    if (e instanceof RangeError) return t;
                    throw e;
                }
                return {
                    eof: !1,
                    size: n,
                    offset: r.pos
                };
            }
        }
        throw new Error("invalid varint");
    }
};
