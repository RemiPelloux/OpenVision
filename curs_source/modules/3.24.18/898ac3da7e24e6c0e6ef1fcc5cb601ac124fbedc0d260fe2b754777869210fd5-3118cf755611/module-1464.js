"use strict";
const { Readable: t } = require("./module-7075.js"), { inherits: s } = require("./module-7975.js"), o = require("./module-7710.js"), r = require("./module-1537.js"), i = require("./module-491.js"), A = require("./module-6388.js"), l = require("./module-5529.js"), c = /^boundary$/i, m = /^form-data$/i, d = /^charset$/i, g = /^filename$/i, u = /^name$/i;
function E(e, n) {
    let a, t;
    const s = this;
    let E;
    const k = n.limits, I = n.isPartAFile || ((e, n, a)=>"application/octet-stream" === n || void 0 !== a), h = n.parsedConType || [], _ = n.defCharset || "utf8", C = n.preservePath, f = {
        highWaterMark: n.fileHwm
    };
    for(a = 0, t = h.length; a < t; ++a)if (Array.isArray(h[a]) && c.test(h[a][0])) {
        E = h[a][1];
        break;
    }
    function B() {
        0 === O && U && !e._done && (U = !1, s.end());
    }
    if ("string" != typeof E) throw new Error("Multipart: Boundary not found");
    const Q = l(k, "fieldSize", 1048576), y = l(k, "fileSize", 1 / 0), R = l(k, "files", 1 / 0), N = l(k, "fields", 1 / 0), v = l(k, "parts", 1 / 0), S = l(k, "headerPairs", 2e3), D = l(k, "headerSize", 81920);
    let w, b, M = 0, F = 0, O = 0, U = !1;
    this._needDrain = !1, this._pause = !1, this._cb = void 0, this._nparts = 0, this._boy = e;
    const L = {
        boundary: E,
        maxHeaderPairs: S,
        maxHeaderSize: D,
        partHwm: f.highWaterMark,
        highWaterMark: n.highWaterMark
    };
    this.parser = new o(L), this.parser.on("drain", function() {
        if (s._needDrain = !1, s._cb && !s._pause) {
            const e = s._cb;
            s._cb = void 0, e();
        }
    }).on("part", function n(o) {
        if (++s._nparts > v) return s.parser.removeListener("part", n), s.parser.on("part", p), e.hitPartsLimit = !0, e.emit("partsLimit"), p(o);
        if (b) {
            const e = b;
            e.emit("end"), e.removeAllListeners("end");
        }
        o.on("header", function(n) {
            let l, c, E, k, h, v, S, D, U = 0;
            if (n["content-type"] && (E = r(n["content-type"][0]), E[0])) {
                for(l = E[0].toLowerCase(), a = 0, t = E.length; a < t; ++a)if (d.test(E[a][0])) {
                    k = E[a][1].toLowerCase();
                    break;
                }
            }
            if (void 0 === l && (l = "text/plain"), void 0 === k && (k = _), !n["content-disposition"]) return p(o);
            if (E = r(n["content-disposition"][0]), !m.test(E[0])) return p(o);
            for(a = 0, t = E.length; a < t; ++a)u.test(E[a][0]) ? c = E[a][1] : g.test(E[a][0]) && (v = E[a][1], C || (v = A(v)));
            if (h = n["content-transfer-encoding"] ? n["content-transfer-encoding"][0].toLowerCase() : "7bit", I(c, l, v)) {
                if (M === R) return e.hitFilesLimit || (e.hitFilesLimit = !0, e.emit("filesLimit")), p(o);
                if (++M, 0 === e.listenerCount("file")) return void s.parser._ignore();
                ++O;
                const n = new T(f);
                w = n, n.on("end", function() {
                    if (--O, s._pause = !1, B(), s._cb && !s._needDrain) {
                        const e = s._cb;
                        s._cb = void 0, e();
                    }
                }), n._read = function(e) {
                    if (s._pause && (s._pause = !1, s._cb && !s._needDrain)) {
                        const e = s._cb;
                        s._cb = void 0, e();
                    }
                }, e.emit("file", c, n, v, h, l), S = function(e) {
                    if ((U += e.length) > y) {
                        const a = y - U + e.length;
                        return a > 0 && n.push(e.slice(0, a)), n.truncated = !0, n.bytesRead = y, o.removeAllListeners("data"), void n.emit("limit");
                    }
                    n.push(e) || (s._pause = !0), n.bytesRead = U;
                }, D = function() {
                    w = void 0, n.push(null);
                };
            } else {
                if (F === N) return e.hitFieldsLimit || (e.hitFieldsLimit = !0, e.emit("fieldsLimit")), p(o);
                ++F, ++O;
                let n = "", a = !1;
                b = o, S = function(e) {
                    if ((U += e.length) > Q) {
                        const t = Q - (U - e.length);
                        n += e.toString("binary", 0, t), a = !0, o.removeAllListeners("data");
                    } else n += e.toString("binary");
                }, D = function() {
                    b = void 0, n.length && (n = i(n, "binary", k)), e.emit("field", c, n, !1, a, h, l), --O, B();
                };
            }
            o._readableState.sync = !1, o.on("data", S), o.on("end", D);
        }).on("error", function(e) {
            w && w.emit("error", e);
        });
    }).on("error", function(n) {
        e.emit("error", n);
    }).on("finish", function() {
        U = !0, B();
    });
}
function p(e) {
    e.resume();
}
function T(e) {
    t.call(this, e), this.bytesRead = 0, this.truncated = !1;
}
E.detect = /^multipart\/form-data/i, E.prototype.write = function(e, n) {
    const a = this.parser.write(e);
    a && !this._pause ? n() : (this._needDrain = !a, this._cb = n);
}, E.prototype.end = function() {
    const e = this;
    e.parser.writable ? e.parser.end() : e._boy._done || process.nextTick(function() {
        e._boy._done = !0, e._boy.emit("finish");
    });
}, s(T, t), T.prototype._read = function(e) {}, module.exports = E;
