"use strict";
const { Readable: t } = require("./module-7075.js"), { inherits: s } = require("./module-7975.js"), o = require("./module-7710.js"), r = require("./module-1537.js"), i = require("./module-491.js"), l = require("./module-6388.js"), d = require("./module-5529.js"), m = /^boundary$/i, c = /^form-data$/i, p = /^charset$/i, A = /^filename$/i, u = /^name$/i;
function g(e, a) {
    let n, t;
    const s = this;
    let g;
    const k = a.limits, _ = a.isPartAFile || ((e, a, n)=>"application/octet-stream" === a || void 0 !== n), E = a.parsedConType || [], f = a.defCharset || "utf8", C = a.preservePath, I = {
        highWaterMark: a.fileHwm
    };
    for(n = 0, t = E.length; n < t; ++n)if (Array.isArray(E[n]) && m.test(E[n][0])) {
        g = E[n][1];
        break;
    }
    function v() {
        0 === U && F && !e._done && (F = !1, s.end());
    }
    if ("string" != typeof g) throw new Error("Multipart: Boundary not found");
    const y = d(k, "fieldSize", 1048576), S = d(k, "fileSize", 1 / 0), R = d(k, "files", 1 / 0), N = d(k, "fields", 1 / 0), B = d(k, "parts", 1 / 0), w = d(k, "headerPairs", 2e3), b = d(k, "headerSize", 81920);
    let Q, D, M = 0, O = 0, U = 0, F = !1;
    this._needDrain = !1, this._pause = !1, this._cb = void 0, this._nparts = 0, this._boy = e;
    const P = {
        boundary: g,
        maxHeaderPairs: w,
        maxHeaderSize: b,
        partHwm: I.highWaterMark,
        highWaterMark: a.highWaterMark
    };
    this.parser = new o(P), this.parser.on("drain", function() {
        if (s._needDrain = !1, s._cb && !s._pause) {
            const e = s._cb;
            s._cb = void 0, e();
        }
    }).on("part", function a(o) {
        if (++s._nparts > B) return s.parser.removeListener("part", a), s.parser.on("part", T), e.hitPartsLimit = !0, e.emit("partsLimit"), T(o);
        if (D) {
            const e = D;
            e.emit("end"), e.removeAllListeners("end");
        }
        o.on("header", function(a) {
            let d, m, g, k, E, B, w, b, F = 0;
            if (a["content-type"] && (g = r(a["content-type"][0]), g[0])) {
                for(d = g[0].toLowerCase(), n = 0, t = g.length; n < t; ++n)if (p.test(g[n][0])) {
                    k = g[n][1].toLowerCase();
                    break;
                }
            }
            if (void 0 === d && (d = "text/plain"), void 0 === k && (k = f), !a["content-disposition"]) return T(o);
            if (g = r(a["content-disposition"][0]), !c.test(g[0])) return T(o);
            for(n = 0, t = g.length; n < t; ++n)u.test(g[n][0]) ? m = g[n][1] : A.test(g[n][0]) && (B = g[n][1], C || (B = l(B)));
            if (E = a["content-transfer-encoding"] ? a["content-transfer-encoding"][0].toLowerCase() : "7bit", _(m, d, B)) {
                if (M === R) return e.hitFilesLimit || (e.hitFilesLimit = !0, e.emit("filesLimit")), T(o);
                if (++M, 0 === e.listenerCount("file")) return void s.parser._ignore();
                ++U;
                const a = new h(I);
                Q = a, a.on("end", function() {
                    if (--U, s._pause = !1, v(), s._cb && !s._needDrain) {
                        const e = s._cb;
                        s._cb = void 0, e();
                    }
                }), a._read = function(e) {
                    if (s._pause && (s._pause = !1, s._cb && !s._needDrain)) {
                        const e = s._cb;
                        s._cb = void 0, e();
                    }
                }, e.emit("file", m, a, B, E, d), w = function(e) {
                    if ((F += e.length) > S) {
                        const n = S - F + e.length;
                        return n > 0 && a.push(e.slice(0, n)), a.truncated = !0, a.bytesRead = S, o.removeAllListeners("data"), void a.emit("limit");
                    }
                    a.push(e) || (s._pause = !0), a.bytesRead = F;
                }, b = function() {
                    Q = void 0, a.push(null);
                };
            } else {
                if (O === N) return e.hitFieldsLimit || (e.hitFieldsLimit = !0, e.emit("fieldsLimit")), T(o);
                ++O, ++U;
                let a = "", n = !1;
                D = o, w = function(e) {
                    if ((F += e.length) > y) {
                        const t = y - (F - e.length);
                        a += e.toString("binary", 0, t), n = !0, o.removeAllListeners("data");
                    } else a += e.toString("binary");
                }, b = function() {
                    D = void 0, a.length && (a = i(a, "binary", k)), e.emit("field", m, a, !1, n, E, d), --U, v();
                };
            }
            o._readableState.sync = !1, o.on("data", w), o.on("end", b);
        }).on("error", function(e) {
            Q && Q.emit("error", e);
        });
    }).on("error", function(a) {
        e.emit("error", a);
    }).on("finish", function() {
        F = !0, v();
    });
}
function T(e) {
    e.resume();
}
function h(e) {
    t.call(this, e), this.bytesRead = 0, this.truncated = !1;
}
g.detect = /^multipart\/form-data/i, g.prototype.write = function(e, a) {
    const n = this.parser.write(e);
    n && !this._pause ? a() : (this._needDrain = !n, this._cb = a);
}, g.prototype.end = function() {
    const e = this;
    e.parser.writable ? e.parser.end() : e._boy._done || process.nextTick(function() {
        e._boy._done = !0, e._boy.emit("finish");
    });
}, s(h, t), h.prototype._read = function(e) {}, module.exports = g;
