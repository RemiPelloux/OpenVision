"use strict";
const { Readable: a } = require("./module-7075.js"), { inherits: s } = require("./module-7975.js"), o = require("./module-7710.js"), r = require("./module-1537.js"), i = require("./module-491.js"), A = require("./module-6388.js"), c = require("./module-5529.js"), l = /^boundary$/i, d = /^form-data$/i, m = /^charset$/i, u = /^filename$/i, g = /^name$/i;
function p(e, n) {
    let t, a;
    const s = this;
    let p;
    const T = n.limits, k = n.isPartAFile || ((e, n, t)=>"application/octet-stream" === n || void 0 !== t), f = n.parsedConType || [], _ = n.defCharset || "utf8", I = n.preservePath, C = {
        highWaterMark: n.fileHwm
    };
    for(t = 0, a = f.length; t < a; ++t)if (Array.isArray(f[t]) && l.test(f[t][0])) {
        p = f[t][1];
        break;
    }
    function y() {
        0 === O && U && !e._done && (U = !1, s.end());
    }
    if ("string" != typeof p) throw new Error("Multipart: Boundary not found");
    const B = c(T, "fieldSize", 1048576), Q = c(T, "fileSize", 1 / 0), v = c(T, "files", 1 / 0), R = c(T, "fields", 1 / 0), N = c(T, "parts", 1 / 0), S = c(T, "headerPairs", 2e3), w = c(T, "headerSize", 81920);
    let b, D, M = 0, F = 0, O = 0, U = !1;
    this._needDrain = !1, this._pause = !1, this._cb = void 0, this._nparts = 0, this._boy = e;
    const L = {
        boundary: p,
        maxHeaderPairs: S,
        maxHeaderSize: w,
        partHwm: C.highWaterMark,
        highWaterMark: n.highWaterMark
    };
    this.parser = new o(L), this.parser.on("drain", function() {
        if (s._needDrain = !1, s._cb && !s._pause) {
            const e = s._cb;
            s._cb = void 0, e();
        }
    }).on("part", function n(o) {
        if (++s._nparts > N) return s.parser.removeListener("part", n), s.parser.on("part", E), e.hitPartsLimit = !0, e.emit("partsLimit"), E(o);
        if (D) {
            const e = D;
            e.emit("end"), e.removeAllListeners("end");
        }
        o.on("header", function(n) {
            let c, l, p, T, f, N, S, w, U = 0;
            if (n["content-type"] && (p = r(n["content-type"][0]), p[0])) {
                for(c = p[0].toLowerCase(), t = 0, a = p.length; t < a; ++t)if (m.test(p[t][0])) {
                    T = p[t][1].toLowerCase();
                    break;
                }
            }
            if (void 0 === c && (c = "text/plain"), void 0 === T && (T = _), !n["content-disposition"]) return E(o);
            if (p = r(n["content-disposition"][0]), !d.test(p[0])) return E(o);
            for(t = 0, a = p.length; t < a; ++t)g.test(p[t][0]) ? l = p[t][1] : u.test(p[t][0]) && (N = p[t][1], I || (N = A(N)));
            if (f = n["content-transfer-encoding"] ? n["content-transfer-encoding"][0].toLowerCase() : "7bit", k(l, c, N)) {
                if (M === v) return e.hitFilesLimit || (e.hitFilesLimit = !0, e.emit("filesLimit")), E(o);
                if (++M, 0 === e.listenerCount("file")) return void s.parser._ignore();
                ++O;
                const n = new h(C);
                b = n, n.on("end", function() {
                    if (--O, s._pause = !1, y(), s._cb && !s._needDrain) {
                        const e = s._cb;
                        s._cb = void 0, e();
                    }
                }), n._read = function(e) {
                    if (s._pause && (s._pause = !1, s._cb && !s._needDrain)) {
                        const e = s._cb;
                        s._cb = void 0, e();
                    }
                }, e.emit("file", l, n, N, f, c), S = function(e) {
                    if ((U += e.length) > Q) {
                        const t = Q - U + e.length;
                        return t > 0 && n.push(e.slice(0, t)), n.truncated = !0, n.bytesRead = Q, o.removeAllListeners("data"), void n.emit("limit");
                    }
                    n.push(e) || (s._pause = !0), n.bytesRead = U;
                }, w = function() {
                    b = void 0, n.push(null);
                };
            } else {
                if (F === R) return e.hitFieldsLimit || (e.hitFieldsLimit = !0, e.emit("fieldsLimit")), E(o);
                ++F, ++O;
                let n = "", t = !1;
                D = o, S = function(e) {
                    if ((U += e.length) > B) {
                        const a = B - (U - e.length);
                        n += e.toString("binary", 0, a), t = !0, o.removeAllListeners("data");
                    } else n += e.toString("binary");
                }, w = function() {
                    D = void 0, n.length && (n = i(n, "binary", T)), e.emit("field", l, n, !1, t, f, c), --O, y();
                };
            }
            o._readableState.sync = !1, o.on("data", S), o.on("end", w);
        }).on("error", function(e) {
            b && b.emit("error", e);
        });
    }).on("error", function(n) {
        e.emit("error", n);
    }).on("finish", function() {
        U = !0, y();
    });
}
function E(e) {
    e.resume();
}
function h(e) {
    a.call(this, e), this.bytesRead = 0, this.truncated = !1;
}
p.detect = /^multipart\/form-data/i, p.prototype.write = function(e, n) {
    const t = this.parser.write(e);
    t && !this._pause ? n() : (this._needDrain = !t, this._cb = n);
}, p.prototype.end = function() {
    const e = this;
    e.parser.writable ? e.parser.end() : e._boy._done || process.nextTick(function() {
        e._boy._done = !0, e._boy.emit("finish");
    });
}, s(h, a), h.prototype._read = function(e) {}, module.exports = p;
