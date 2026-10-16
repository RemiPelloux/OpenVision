var s = this && this.__asyncValues || function(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var a, n = e[Symbol.asyncIterator];
    return n ? n.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), a = {}, s("next"), s("throw"), s("return"), a[Symbol.asyncIterator] = function() {
        return this;
    }, a);
    function s(n) {
        a[n] = e[n] && function(a) {
            return new Promise(function(s, o) {
                (function(e, a, n, s) {
                    Promise.resolve(s).then(function(a) {
                        e({
                            value: a,
                            done: n
                        });
                    }, a);
                })(s, o, (a = e[n](a)).done, a.value);
            });
        };
    }
}, o = this && this.__await || function(e) {
    return this instanceof o ? (this.v = e, this) : new o(e);
}, r = this && this.__asyncGenerator || function(e, a, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var s, r = n.apply(e, a || []), t = [];
    return s = {}, i("next"), i("throw"), i("return", function(e) {
        return function(a) {
            return Promise.resolve(a).then(e, d);
        };
    }), s[Symbol.asyncIterator] = function() {
        return this;
    }, s;
    function i(e, a) {
        r[e] && (s[e] = function(a) {
            return new Promise(function(n, s) {
                t.push([
                    e,
                    a,
                    n,
                    s
                ]) > 1 || m(e, a);
            });
        }, a && (s[e] = a(s[e])));
    }
    function m(e, a) {
        try {
            (n = r[e](a)).value instanceof o ? Promise.resolve(n.value.v).then(l, d) : c(t[0][2], n);
        } catch (e) {
            c(t[0][3], e);
        }
        var n;
    }
    function l(e) {
        m("next", e);
    }
    function d(e) {
        m("throw", e);
    }
    function c(e, a) {
        e(a), t.shift(), t.length && m(t[0][0], t[0][1]);
    }
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoDelimited = void 0;
const t = require("./module-8831.js");
exports.protoDelimited = {
    enc (e, a) {
        const n = e.getType().runtime.bin.makeWriteOptions(a);
        return n.writerFactory().bytes(e.toBinary(n)).finish();
    },
    dec (e, a, n) {
        const s = e.runtime.bin.makeReadOptions(n);
        return e.fromBinary(s.readerFactory(a).bytes(), s);
    },
    decStream (e, n) {
        return r(this, arguments, function*() {
            var r, t, i, m;
            function l(e, a) {
                const n = new Uint8Array(e.byteLength + a.byteLength);
                return n.set(e), n.set(a, e.length), n;
            }
            let d = new Uint8Array(0);
            try {
                for(var c, T = !0, p = s(n); !(r = (c = yield o(p.next())).done); T = !0){
                    m = c.value, T = !1;
                    for(d = l(d, m);;){
                        const n = exports.protoDelimited.peekSize(d);
                        if (n.eof) break;
                        if (n.offset + n.size > d.byteLength) break;
                        yield yield o(exports.protoDelimited.dec(e, d)), d = d.subarray(n.offset + n.size);
                    }
                }
            } catch (e) {
                t = {
                    error: e
                };
            } finally{
                try {
                    T || r || !(i = p.return) || (yield o(i.call(p)));
                } finally{
                    if (t) throw t.error;
                }
            }
            if (d.byteLength > 0) throw new Error("incomplete data");
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
                const n = new t.BinaryReader(e);
                let s;
                try {
                    s = n.uint32();
                } catch (e) {
                    if (e instanceof RangeError) return a;
                    throw e;
                }
                return {
                    eof: !1,
                    size: s,
                    offset: n.pos
                };
            }
        }
        throw new Error("invalid varint");
    }
};
