"use strict";
const { Readable: n } = require("./module-7075.js"), { inherits: s } = require("./module-7975.js"), i = require("./module-8938.js"), o = require("./module-8613.js"), a = require("./module-3047.js"), u = require("./module-0.js"), c = require("./module-3013.js"), l = /^boundary$/i, m = /^form-data$/i, d = /^charset$/i, f = /^filename$/i, p = /^name$/i;
function h(t, e) {
    let r, n;
    const s = this;
    let h;
    const _ = e.limits, y = e.isPartAFile || ((t, e, r)=>"application/octet-stream" === e || void 0 !== r), w = e.parsedConType || [], S = e.defCharset || "utf8", J = e.preservePath, B = {
        highWaterMark: e.fileHwm
    };
    for(r = 0, n = w.length; r < n; ++r)if (Array.isArray(w[r]) && l.test(w[r][0])) {
        h = w[r][1];
        break;
    }
    function E() {
        0 === D && U && !t._done && (U = !1, s.end());
    }
    if ("string" != typeof h) throw new Error("Multipart: Boundary not found");
    const I = c(_, "fieldSize", 1048576), C = c(_, "fileSize", 1 / 0), b = c(_, "files", 1 / 0), k = c(_, "fields", 1 / 0), v = c(_, "parts", 1 / 0), q = c(_, "headerPairs", 2e3), R = c(_, "headerSize", 81920);
    let P, T, x = 0, N = 0, D = 0, U = !1;
    this._needDrain = !1, this._pause = !1, this._cb = void 0, this._nparts = 0, this._boy = t;
    const Q = {
        boundary: h,
        maxHeaderPairs: q,
        maxHeaderSize: R,
        partHwm: B.highWaterMark,
        highWaterMark: e.highWaterMark
    };
    this.parser = new i(Q), this.parser.on("drain", function() {
        if (s._needDrain = !1, s._cb && !s._pause) {
            const t = s._cb;
            s._cb = void 0, t();
        }
    }).on("part", function e(i) {
        if (++s._nparts > v) return s.parser.removeListener("part", e), s.parser.on("part", g), t.hitPartsLimit = !0, t.emit("partsLimit"), g(i);
        if (T) {
            const t = T;
            t.emit("end"), t.removeAllListeners("end");
        }
        i.on("header", function(e) {
            let c, l, h, _, w, v, q, R, U = 0;
            if (e["content-type"] && (h = o(e["content-type"][0]), h[0])) {
                for(c = h[0].toLowerCase(), r = 0, n = h.length; r < n; ++r)if (d.test(h[r][0])) {
                    _ = h[r][1].toLowerCase();
                    break;
                }
            }
            if (void 0 === c && (c = "text/plain"), void 0 === _ && (_ = S), !e["content-disposition"]) return g(i);
            if (h = o(e["content-disposition"][0]), !m.test(h[0])) return g(i);
            for(r = 0, n = h.length; r < n; ++r)p.test(h[r][0]) ? l = h[r][1] : f.test(h[r][0]) && (v = h[r][1], J || (v = u(v)));
            if (w = e["content-transfer-encoding"] ? e["content-transfer-encoding"][0].toLowerCase() : "7bit", y(l, c, v)) {
                if (x === b) return t.hitFilesLimit || (t.hitFilesLimit = !0, t.emit("filesLimit")), g(i);
                if (++x, 0 === t.listenerCount("file")) return void s.parser._ignore();
                ++D;
                const e = new A(B);
                P = e, e.on("end", function() {
                    if (--D, s._pause = !1, E(), s._cb && !s._needDrain) {
                        const t = s._cb;
                        s._cb = void 0, t();
                    }
                }), e._read = function(t) {
                    if (s._pause && (s._pause = !1, s._cb && !s._needDrain)) {
                        const t = s._cb;
                        s._cb = void 0, t();
                    }
                }, t.emit("file", l, e, v, w, c), q = function(t) {
                    if ((U += t.length) > C) {
                        const r = C - U + t.length;
                        return r > 0 && e.push(t.slice(0, r)), e.truncated = !0, e.bytesRead = C, i.removeAllListeners("data"), void e.emit("limit");
                    }
                    e.push(t) || (s._pause = !0), e.bytesRead = U;
                }, R = function() {
                    P = void 0, e.push(null);
                };
            } else {
                if (N === k) return t.hitFieldsLimit || (t.hitFieldsLimit = !0, t.emit("fieldsLimit")), g(i);
                ++N, ++D;
                let e = "", r = !1;
                T = i, q = function(t) {
                    if ((U += t.length) > I) {
                        const n = I - (U - t.length);
                        e += t.toString("binary", 0, n), r = !0, i.removeAllListeners("data");
                    } else e += t.toString("binary");
                }, R = function() {
                    T = void 0, e.length && (e = a(e, "binary", _)), t.emit("field", l, e, !1, r, w, c), --D, E();
                };
            }
            i._readableState.sync = !1, i.on("data", q), i.on("end", R);
        }).on("error", function(t) {
            P && P.emit("error", t);
        });
    }).on("error", function(e) {
        t.emit("error", e);
    }).on("finish", function() {
        U = !0, E();
    });
}
function g(t) {
    t.resume();
}
function A(t) {
    n.call(this, t), this.bytesRead = 0, this.truncated = !1;
}
h.detect = /^multipart\/form-data/i, h.prototype.write = function(t, e) {
    const r = this.parser.write(t);
    r && !this._pause ? e() : (this._needDrain = !r, this._cb = e);
}, h.prototype.end = function() {
    const t = this;
    t.parser.writable ? t.parser.end() : t._boy._done || process.nextTick(function() {
        t._boy._done = !0, t._boy.emit("finish");
    });
}, s(A, n), A.prototype._read = function(t) {}, module.exports = h;
