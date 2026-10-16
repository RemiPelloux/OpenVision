var r = this && this.__asyncValues || function(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t, n = e[Symbol.asyncIterator];
    return n ? n.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
        return this;
    }, t);
    function r(n) {
        t[n] = e[n] && function(t) {
            return new Promise(function(r, o) {
                (function(e, t, n, r) {
                    Promise.resolve(r).then(function(t) {
                        e({
                            value: t,
                            done: n
                        });
                    }, t);
                })(r, o, (t = e[n](t)).done, t.value);
            });
        };
    }
}, o = this && this.__await || function(e) {
    return this instanceof o ? (this.v = e, this) : new o(e);
}, a = this && this.__asyncGenerator || function(e, t, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r, a = n.apply(e, t || []), s = [];
    return r = {}, i("next"), i("throw"), i("return", function(e) {
        return function(t) {
            return Promise.resolve(t).then(e, c);
        };
    }), r[Symbol.asyncIterator] = function() {
        return this;
    }, r;
    function i(e, t) {
        a[e] && (r[e] = function(t) {
            return new Promise(function(n, r) {
                s.push([
                    e,
                    t,
                    n,
                    r
                ]) > 1 || l(e, t);
            });
        }, t && (r[e] = t(r[e])));
    }
    function l(e, t) {
        try {
            (n = a[e](t)).value instanceof o ? Promise.resolve(n.value.v).then(u, c) : m(s[0][2], n);
        } catch (e) {
            m(s[0][3], e);
        }
        var n;
    }
    function u(e) {
        l("next", e);
    }
    function c(e) {
        l("throw", e);
    }
    function m(e, t) {
        e(t), s.shift(), s.length && l(s[0][0], s[0][1]);
    }
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoDelimited = void 0;
const s = require("./module-831.js");
exports.protoDelimited = {
    enc (e, t) {
        const n = e.getType().runtime.bin.makeWriteOptions(t);
        return n.writerFactory().bytes(e.toBinary(n)).finish();
    },
    dec (e, t, n) {
        const r = e.runtime.bin.makeReadOptions(n);
        return e.fromBinary(r.readerFactory(t).bytes(), r);
    },
    decStream (e, n) {
        return a(this, arguments, function*() {
            var a, s, i, l;
            function u(e, t) {
                const n = new Uint8Array(e.byteLength + t.byteLength);
                return n.set(e), n.set(t, e.length), n;
            }
            let c = new Uint8Array(0);
            try {
                for(var m, p = !0, d = r(n); !(a = (m = yield o(d.next())).done); p = !0){
                    l = m.value, p = !1;
                    for(c = u(c, l);;){
                        const n = exports.protoDelimited.peekSize(c);
                        if (n.eof) break;
                        if (n.offset + n.size > c.byteLength) break;
                        yield yield o(exports.protoDelimited.dec(e, c)), c = c.subarray(n.offset + n.size);
                    }
                }
            } catch (e) {
                s = {
                    error: e
                };
            } finally{
                try {
                    p || a || !(i = d.return) || (yield o(i.call(d)));
                } finally{
                    if (s) throw s.error;
                }
            }
            if (c.byteLength > 0) throw new Error("incomplete data");
        });
    },
    peekSize (e) {
        const t = {
            eof: !0,
            size: null,
            offset: null
        };
        for(let n = 0; n < 10; n++){
            if (n > e.byteLength) return t;
            if (!(128 & e[n])) {
                const n = new s.BinaryReader(e);
                let r;
                try {
                    r = n.uint32();
                } catch (e) {
                    if (e instanceof RangeError) return t;
                    throw e;
                }
                return {
                    eof: !1,
                    size: r,
                    offset: n.pos
                };
            }
        }
        throw new Error("invalid varint");
    }
};
