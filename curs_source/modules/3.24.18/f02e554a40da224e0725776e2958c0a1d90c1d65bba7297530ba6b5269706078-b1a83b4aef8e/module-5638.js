"use strict";
var n = this && this.__asyncValues || function(t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e, r = t[Symbol.asyncIterator];
    return r ? r.call(t) : (t = "function" == typeof __values ? __values(t) : t[Symbol.iterator](), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
        return this;
    }, e);
    function n(r) {
        e[r] = t[r] && function(e) {
            return new Promise(function(n, s) {
                (function(t, e, r, n) {
                    Promise.resolve(n).then(function(e) {
                        t({
                            value: e,
                            done: r
                        });
                    }, e);
                })(n, s, (e = t[r](e)).done, e.value);
            });
        };
    }
}, s = this && this.__await || function(t) {
    return this instanceof s ? (this.v = t, this) : new s(t);
}, i = this && this.__asyncGenerator || function(t, e, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n, i = r.apply(t, e || []), o = [];
    return n = {}, a("next"), a("throw"), a("return", function(t) {
        return function(e) {
            return Promise.resolve(e).then(t, l);
        };
    }), n[Symbol.asyncIterator] = function() {
        return this;
    }, n;
    function a(t, e) {
        i[t] && (n[t] = function(e) {
            return new Promise(function(r, n) {
                o.push([
                    t,
                    e,
                    r,
                    n
                ]) > 1 || u(t, e);
            });
        }, e && (n[t] = e(n[t])));
    }
    function u(t, e) {
        try {
            (r = i[t](e)).value instanceof s ? Promise.resolve(r.value.v).then(c, l) : m(o[0][2], r);
        } catch (t) {
            m(o[0][3], t);
        }
        var r;
    }
    function c(t) {
        u("next", t);
    }
    function l(t) {
        u("throw", t);
    }
    function m(t, e) {
        t(e), o.shift(), o.length && u(o[0][0], o[0][1]);
    }
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoDelimited = void 0;
const o = require("./module-8831.js");
exports.protoDelimited = {
    enc (t, e) {
        const r = t.getType().runtime.bin.makeWriteOptions(e);
        return r.writerFactory().bytes(t.toBinary(r)).finish();
    },
    dec (t, e, r) {
        const n = t.runtime.bin.makeReadOptions(r);
        return t.fromBinary(n.readerFactory(e).bytes(), n);
    },
    decStream (t, r) {
        return i(this, arguments, function*() {
            var i, o, a, u;
            function c(t, e) {
                const r = new Uint8Array(t.byteLength + e.byteLength);
                return r.set(t), r.set(e, t.length), r;
            }
            let l = new Uint8Array(0);
            try {
                for(var m, d = !0, f = n(r); !(i = (m = yield s(f.next())).done); d = !0){
                    u = m.value, d = !1;
                    for(l = c(l, u);;){
                        const r = exports.protoDelimited.peekSize(l);
                        if (r.eof) break;
                        if (r.offset + r.size > l.byteLength) break;
                        yield yield s(exports.protoDelimited.dec(t, l)), l = l.subarray(r.offset + r.size);
                    }
                }
            } catch (t) {
                o = {
                    error: t
                };
            } finally{
                try {
                    d || i || !(a = f.return) || (yield s(a.call(f)));
                } finally{
                    if (o) throw o.error;
                }
            }
            if (l.byteLength > 0) throw new Error("incomplete data");
        });
    },
    peekSize (t) {
        const e = {
            eof: !0,
            size: null,
            offset: null
        };
        for(let r = 0; r < 10; r++){
            if (r > t.byteLength) return e;
            if (!(128 & t[r])) {
                const r = new o.BinaryReader(t);
                let n;
                try {
                    n = r.uint32();
                } catch (t) {
                    if (t instanceof RangeError) return e;
                    throw t;
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
