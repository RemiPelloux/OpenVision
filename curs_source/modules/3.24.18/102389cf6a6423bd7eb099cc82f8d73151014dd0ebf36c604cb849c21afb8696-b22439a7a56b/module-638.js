var o = this && this.__asyncValues || function(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var a, n = e[Symbol.asyncIterator];
    return n ? n.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), a = {}, o("next"), o("throw"), o("return"), a[Symbol.asyncIterator] = function() {
        return this;
    }, a);
    function o(n) {
        a[n] = e[n] && function(a) {
            return new Promise(function(o, s) {
                (function(e, a, n, o) {
                    Promise.resolve(o).then(function(a) {
                        e({
                            value: a,
                            done: n
                        });
                    }, a);
                })(o, s, (a = e[n](a)).done, a.value);
            });
        };
    }
}, s = this && this.__await || function(e) {
    return this instanceof s ? (this.v = e, this) : new s(e);
}, t = this && this.__asyncGenerator || function(e, a, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var o, t = n.apply(e, a || []), r = [];
    return o = {}, i("next"), i("throw"), i("return", function(e) {
        return function(a) {
            return Promise.resolve(a).then(e, d);
        };
    }), o[Symbol.asyncIterator] = function() {
        return this;
    }, o;
    function i(e, a) {
        t[e] && (o[e] = function(a) {
            return new Promise(function(n, o) {
                r.push([
                    e,
                    a,
                    n,
                    o
                ]) > 1 || m(e, a);
            });
        }, a && (o[e] = a(o[e])));
    }
    function m(e, a) {
        try {
            (n = t[e](a)).value instanceof s ? Promise.resolve(n.value.v).then(l, d) : c(r[0][2], n);
        } catch (e) {
            c(r[0][3], e);
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
        e(a), r.shift(), r.length && m(r[0][0], r[0][1]);
    }
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoDelimited = void 0;
const r = require("./module-831.js");
exports.protoDelimited = {
    enc (e, a) {
        const n = e.getType().runtime.bin.makeWriteOptions(a);
        return n.writerFactory().bytes(e.toBinary(n)).finish();
    },
    dec (e, a, n) {
        const o = e.runtime.bin.makeReadOptions(n);
        return e.fromBinary(o.readerFactory(a).bytes(), o);
    },
    decStream (e, n) {
        return t(this, arguments, function*() {
            var t, r, i, m;
            function l(e, a) {
                const n = new Uint8Array(e.byteLength + a.byteLength);
                return n.set(e), n.set(a, e.length), n;
            }
            let d = new Uint8Array(0);
            try {
                for(var c, T = !0, _ = o(n); !(t = (c = yield s(_.next())).done); T = !0){
                    m = c.value, T = !1;
                    for(d = l(d, m);;){
                        const n = exports.protoDelimited.peekSize(d);
                        if (n.eof) break;
                        if (n.offset + n.size > d.byteLength) break;
                        yield yield s(exports.protoDelimited.dec(e, d)), d = d.subarray(n.offset + n.size);
                    }
                }
            } catch (e) {
                r = {
                    error: e
                };
            } finally{
                try {
                    T || t || !(i = _.return) || (yield s(i.call(_)));
                } finally{
                    if (r) throw r.error;
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
                const n = new r.BinaryReader(e);
                let o;
                try {
                    o = n.uint32();
                } catch (e) {
                    if (e instanceof RangeError) return a;
                    throw e;
                }
                return {
                    eof: !1,
                    size: o,
                    offset: n.pos
                };
            }
        }
        throw new Error("invalid varint");
    }
};
