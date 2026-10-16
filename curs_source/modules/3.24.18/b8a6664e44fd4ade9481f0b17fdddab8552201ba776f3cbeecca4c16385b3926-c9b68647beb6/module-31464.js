"use strict";
const { Readable: r } = require(57075), { inherits: s } = require(57975), o = require("./module-57710.js"), n = require("./module-21537.js"), i = require("./module-40491.js"), E = require("./module-26388.js"), Q = require("./module-5529.js"), g = /^boundary$/i, C = /^form-data$/i, B = /^charset$/i, a = /^filename$/i, I = /^name$/i;
function c(A, e) {
    let t, r;
    const s = this;
    let c;
    const u = e.limits, d = e.isPartAFile || ((A, e, t)=>"application/octet-stream" === e || void 0 !== t), f = e.parsedConType || [], y = e.defCharset || "utf8", D = e.preservePath, R = {
        highWaterMark: e.fileHwm
    };
    for(t = 0, r = f.length; t < r; ++t)if (Array.isArray(f[t]) && g.test(f[t][0])) {
        c = f[t][1];
        break;
    }
    function w() {
        0 === T && J && !A._done && (J = !1, s.end());
    }
    if ("string" != typeof c) throw new Error("Multipart: Boundary not found");
    const p = Q(u, "fieldSize", 1048576), k = Q(u, "fileSize", 1 / 0), F = Q(u, "files", 1 / 0), N = Q(u, "fields", 1 / 0), b = Q(u, "parts", 1 / 0), S = Q(u, "headerPairs", 2e3), m = Q(u, "headerSize", 81920);
    let U, L, M = 0, Y = 0, T = 0, J = !1;
    this._needDrain = !1, this._pause = !1, this._cb = void 0, this._nparts = 0, this._boy = A;
    const G = {
        boundary: c,
        maxHeaderPairs: S,
        maxHeaderSize: m,
        partHwm: R.highWaterMark,
        highWaterMark: e.highWaterMark
    };
    this.parser = new o(G), this.parser.on("drain", function() {
        if (s._needDrain = !1, s._cb && !s._pause) {
            const A = s._cb;
            s._cb = void 0, A();
        }
    }).on("part", function e(o) {
        if (++s._nparts > b) return s.parser.removeListener("part", e), s.parser.on("part", h), A.hitPartsLimit = !0, A.emit("partsLimit"), h(o);
        if (L) {
            const A = L;
            A.emit("end"), A.removeAllListeners("end");
        }
        o.on("header", function(e) {
            let Q, g, c, u, f, b, S, m, J = 0;
            if (e["content-type"] && (c = n(e["content-type"][0]), c[0])) {
                for(Q = c[0].toLowerCase(), t = 0, r = c.length; t < r; ++t)if (B.test(c[t][0])) {
                    u = c[t][1].toLowerCase();
                    break;
                }
            }
            if (void 0 === Q && (Q = "text/plain"), void 0 === u && (u = y), !e["content-disposition"]) return h(o);
            if (c = n(e["content-disposition"][0]), !C.test(c[0])) return h(o);
            for(t = 0, r = c.length; t < r; ++t)I.test(c[t][0]) ? g = c[t][1] : a.test(c[t][0]) && (b = c[t][1], D || (b = E(b)));
            if (f = e["content-transfer-encoding"] ? e["content-transfer-encoding"][0].toLowerCase() : "7bit", d(g, Q, b)) {
                if (M === F) return A.hitFilesLimit || (A.hitFilesLimit = !0, A.emit("filesLimit")), h(o);
                if (++M, 0 === A.listenerCount("file")) return void s.parser._ignore();
                ++T;
                const e = new l(R);
                U = e, e.on("end", function() {
                    if (--T, s._pause = !1, w(), s._cb && !s._needDrain) {
                        const A = s._cb;
                        s._cb = void 0, A();
                    }
                }), e._read = function(A) {
                    if (s._pause && (s._pause = !1, s._cb && !s._needDrain)) {
                        const A = s._cb;
                        s._cb = void 0, A();
                    }
                }, A.emit("file", g, e, b, f, Q), S = function(A) {
                    if ((J += A.length) > k) {
                        const t = k - J + A.length;
                        return t > 0 && e.push(A.slice(0, t)), e.truncated = !0, e.bytesRead = k, o.removeAllListeners("data"), void e.emit("limit");
                    }
                    e.push(A) || (s._pause = !0), e.bytesRead = J;
                }, m = function() {
                    U = void 0, e.push(null);
                };
            } else {
                if (Y === N) return A.hitFieldsLimit || (A.hitFieldsLimit = !0, A.emit("fieldsLimit")), h(o);
                ++Y, ++T;
                let e = "", t = !1;
                L = o, S = function(A) {
                    if ((J += A.length) > p) {
                        const r = p - (J - A.length);
                        e += A.toString("binary", 0, r), t = !0, o.removeAllListeners("data");
                    } else e += A.toString("binary");
                }, m = function() {
                    L = void 0, e.length && (e = i(e, "binary", u)), A.emit("field", g, e, !1, t, f, Q), --T, w();
                };
            }
            o._readableState.sync = !1, o.on("data", S), o.on("end", m);
        }).on("error", function(A) {
            U && U.emit("error", A);
        });
    }).on("error", function(e) {
        A.emit("error", e);
    }).on("finish", function() {
        J = !0, w();
    });
}
function h(A) {
    A.resume();
}
function l(A) {
    r.call(this, A), this.bytesRead = 0, this.truncated = !1;
}
c.detect = /^multipart\/form-data/i, c.prototype.write = function(A, e) {
    const t = this.parser.write(A);
    t && !this._pause ? e() : (this._needDrain = !t, this._cb = e);
}, c.prototype.end = function() {
    const A = this;
    A.parser.writable ? A.parser.end() : A._boy._done || process.nextTick(function() {
        A._boy._done = !0, A._boy.emit("finish");
    });
}, s(l, r), l.prototype._read = function(A) {}, module.exports = c;
