"use strict";
const { Readable: n } = require("./module-57075.js"), { inherits: s } = require("./module-57975.js"), o = require("./module-78938.js"), i = require("./module-48613.js"), a = require("./module-93047.js"), c = require("./module-80000.js"), l = require("./module-33013.js"), u = /^boundary$/i, d = /^form-data$/i, p = /^charset$/i, m = /^filename$/i, h = /^name$/i;
function f(e, t) {
    let r, n;
    const s = this;
    let f;
    const w = t.limits, v = t.isPartAFile || ((e, t, r)=>"application/octet-stream" === t || void 0 !== r), _ = t.parsedConType || [], A = t.defCharset || "utf8", S = t.preservePath, b = {
        highWaterMark: t.fileHwm
    };
    for(r = 0, n = _.length; r < n; ++r)if (Array.isArray(_[r]) && u.test(_[r][0])) {
        f = _[r][1];
        break;
    }
    function E() {
        0 === D && O && !e._done && (O = !1, s.end());
    }
    if ("string" != typeof f) throw new Error("Multipart: Boundary not found");
    const I = l(w, "fieldSize", 1048576), C = l(w, "fileSize", 1 / 0), k = l(w, "files", 1 / 0), x = l(w, "fields", 1 / 0), T = l(w, "parts", 1 / 0), R = l(w, "headerPairs", 2e3), B = l(w, "headerSize", 81920);
    let P, J, M = 0, q = 0, D = 0, O = !1;
    this._needDrain = !1, this._pause = !1, this._cb = void 0, this._nparts = 0, this._boy = e;
    const N = {
        boundary: f,
        maxHeaderPairs: R,
        maxHeaderSize: B,
        partHwm: b.highWaterMark,
        highWaterMark: t.highWaterMark
    };
    this.parser = new o(N), this.parser.on("drain", function() {
        if (s._needDrain = !1, s._cb && !s._pause) {
            const e = s._cb;
            s._cb = void 0, e();
        }
    }).on("part", function t(o) {
        if (++s._nparts > T) return s.parser.removeListener("part", t), s.parser.on("part", g), e.hitPartsLimit = !0, e.emit("partsLimit"), g(o);
        if (J) {
            const e = J;
            e.emit("end"), e.removeAllListeners("end");
        }
        o.on("header", function(t) {
            let l, u, f, w, _, T, R, B, O = 0;
            if (t["content-type"] && (f = i(t["content-type"][0]), f[0])) {
                for(l = f[0].toLowerCase(), r = 0, n = f.length; r < n; ++r)if (p.test(f[r][0])) {
                    w = f[r][1].toLowerCase();
                    break;
                }
            }
            if (void 0 === l && (l = "text/plain"), void 0 === w && (w = A), !t["content-disposition"]) return g(o);
            if (f = i(t["content-disposition"][0]), !d.test(f[0])) return g(o);
            for(r = 0, n = f.length; r < n; ++r)h.test(f[r][0]) ? u = f[r][1] : m.test(f[r][0]) && (T = f[r][1], S || (T = c(T)));
            if (_ = t["content-transfer-encoding"] ? t["content-transfer-encoding"][0].toLowerCase() : "7bit", v(u, l, T)) {
                if (M === k) return e.hitFilesLimit || (e.hitFilesLimit = !0, e.emit("filesLimit")), g(o);
                if (++M, 0 === e.listenerCount("file")) return void s.parser._ignore();
                ++D;
                const t = new y(b);
                P = t, t.on("end", function() {
                    if (--D, s._pause = !1, E(), s._cb && !s._needDrain) {
                        const e = s._cb;
                        s._cb = void 0, e();
                    }
                }), t._read = function(e) {
                    if (s._pause && (s._pause = !1, s._cb && !s._needDrain)) {
                        const e = s._cb;
                        s._cb = void 0, e();
                    }
                }, e.emit("file", u, t, T, _, l), R = function(e) {
                    if ((O += e.length) > C) {
                        const r = C - O + e.length;
                        return r > 0 && t.push(e.slice(0, r)), t.truncated = !0, t.bytesRead = C, o.removeAllListeners("data"), void t.emit("limit");
                    }
                    t.push(e) || (s._pause = !0), t.bytesRead = O;
                }, B = function() {
                    P = void 0, t.push(null);
                };
            } else {
                if (q === x) return e.hitFieldsLimit || (e.hitFieldsLimit = !0, e.emit("fieldsLimit")), g(o);
                ++q, ++D;
                let t = "", r = !1;
                J = o, R = function(e) {
                    if ((O += e.length) > I) {
                        const n = I - (O - e.length);
                        t += e.toString("binary", 0, n), r = !0, o.removeAllListeners("data");
                    } else t += e.toString("binary");
                }, B = function() {
                    J = void 0, t.length && (t = a(t, "binary", w)), e.emit("field", u, t, !1, r, _, l), --D, E();
                };
            }
            o._readableState.sync = !1, o.on("data", R), o.on("end", B);
        }).on("error", function(e) {
            P && P.emit("error", e);
        });
    }).on("error", function(t) {
        e.emit("error", t);
    }).on("finish", function() {
        O = !0, E();
    });
}
function g(e) {
    e.resume();
}
function y(e) {
    n.call(this, e), this.bytesRead = 0, this.truncated = !1;
}
f.detect = /^multipart\/form-data/i, f.prototype.write = function(e, t) {
    const r = this.parser.write(e);
    r && !this._pause ? t() : (this._needDrain = !r, this._cb = t);
}, f.prototype.end = function() {
    const e = this;
    e.parser.writable ? e.parser.end() : e._boy._done || process.nextTick(function() {
        e._boy._done = !0, e._boy.emit("finish");
    });
}, s(y, n), y.prototype._read = function(e) {}, module.exports = f;
