"use strict";
const { Readable: n } = require("./module-7075.js"), { inherits: r } = require("./module-7975.js"), o = require("./module-7710.js"), s = require("./module-1537.js"), a = require("./module-491.js"), i = require("./module-6388.js"), c = require("./module-5529.js"), l = /^boundary$/i, g = /^form-data$/i, E = /^charset$/i, u = /^filename$/i, d = /^name$/i;
function I(e, A) {
    let t, n;
    const r = this;
    let I;
    const m = A.limits, C = A.isPartAFile || ((e, A, t)=>"application/octet-stream" === A || void 0 !== t), B = A.parsedConType || [], p = A.defCharset || "utf8", f = A.preservePath, y = {
        highWaterMark: A.fileHwm
    };
    for(t = 0, n = B.length; t < n; ++t)if (Array.isArray(B[t]) && l.test(B[t][0])) {
        I = B[t][1];
        break;
    }
    function T() {
        0 === U && M && !e._done && (M = !1, r.end());
    }
    if ("string" != typeof I) throw new Error("Multipart: Boundary not found");
    const k = c(m, "fieldSize", 1048576), w = c(m, "fileSize", 1 / 0), N = c(m, "files", 1 / 0), D = c(m, "fields", 1 / 0), R = c(m, "parts", 1 / 0), S = c(m, "headerPairs", 2e3), b = c(m, "headerSize", 81920);
    let F, _, v = 0, L = 0, U = 0, M = !1;
    this._needDrain = !1, this._pause = !1, this._cb = void 0, this._nparts = 0, this._boy = e;
    const O = {
        boundary: I,
        maxHeaderPairs: S,
        maxHeaderSize: b,
        partHwm: y.highWaterMark,
        highWaterMark: A.highWaterMark
    };
    this.parser = new o(O), this.parser.on("drain", function() {
        if (r._needDrain = !1, r._cb && !r._pause) {
            const e = r._cb;
            r._cb = void 0, e();
        }
    }).on("part", function A(o) {
        if (++r._nparts > R) return r.parser.removeListener("part", A), r.parser.on("part", h), e.hitPartsLimit = !0, e.emit("partsLimit"), h(o);
        if (_) {
            const e = _;
            e.emit("end"), e.removeAllListeners("end");
        }
        o.on("header", function(A) {
            let c, l, I, m, B, R, S, b, M = 0;
            if (A["content-type"] && (I = s(A["content-type"][0]), I[0])) {
                for(c = I[0].toLowerCase(), t = 0, n = I.length; t < n; ++t)if (E.test(I[t][0])) {
                    m = I[t][1].toLowerCase();
                    break;
                }
            }
            if (void 0 === c && (c = "text/plain"), void 0 === m && (m = p), !A["content-disposition"]) return h(o);
            if (I = s(A["content-disposition"][0]), !g.test(I[0])) return h(o);
            for(t = 0, n = I.length; t < n; ++t)d.test(I[t][0]) ? l = I[t][1] : u.test(I[t][0]) && (R = I[t][1], f || (R = i(R)));
            if (B = A["content-transfer-encoding"] ? A["content-transfer-encoding"][0].toLowerCase() : "7bit", C(l, c, R)) {
                if (v === N) return e.hitFilesLimit || (e.hitFilesLimit = !0, e.emit("filesLimit")), h(o);
                if (++v, 0 === e.listenerCount("file")) return void r.parser._ignore();
                ++U;
                const A = new Q(y);
                F = A, A.on("end", function() {
                    if (--U, r._pause = !1, T(), r._cb && !r._needDrain) {
                        const e = r._cb;
                        r._cb = void 0, e();
                    }
                }), A._read = function(e) {
                    if (r._pause && (r._pause = !1, r._cb && !r._needDrain)) {
                        const e = r._cb;
                        r._cb = void 0, e();
                    }
                }, e.emit("file", l, A, R, B, c), S = function(e) {
                    if ((M += e.length) > w) {
                        const t = w - M + e.length;
                        return t > 0 && A.push(e.slice(0, t)), A.truncated = !0, A.bytesRead = w, o.removeAllListeners("data"), void A.emit("limit");
                    }
                    A.push(e) || (r._pause = !0), A.bytesRead = M;
                }, b = function() {
                    F = void 0, A.push(null);
                };
            } else {
                if (L === D) return e.hitFieldsLimit || (e.hitFieldsLimit = !0, e.emit("fieldsLimit")), h(o);
                ++L, ++U;
                let A = "", t = !1;
                _ = o, S = function(e) {
                    if ((M += e.length) > k) {
                        const n = k - (M - e.length);
                        A += e.toString("binary", 0, n), t = !0, o.removeAllListeners("data");
                    } else A += e.toString("binary");
                }, b = function() {
                    _ = void 0, A.length && (A = a(A, "binary", m)), e.emit("field", l, A, !1, t, B, c), --U, T();
                };
            }
            o._readableState.sync = !1, o.on("data", S), o.on("end", b);
        }).on("error", function(e) {
            F && F.emit("error", e);
        });
    }).on("error", function(A) {
        e.emit("error", A);
    }).on("finish", function() {
        M = !0, T();
    });
}
function h(e) {
    e.resume();
}
function Q(e) {
    n.call(this, e), this.bytesRead = 0, this.truncated = !1;
}
I.detect = /^multipart\/form-data/i, I.prototype.write = function(e, A) {
    const t = this.parser.write(e);
    t && !this._pause ? A() : (this._needDrain = !t, this._cb = A);
}, I.prototype.end = function() {
    const e = this;
    e.parser.writable ? e.parser.end() : e._boy._done || process.nextTick(function() {
        e._boy._done = !0, e._boy.emit("finish");
    });
}, r(Q, n), Q.prototype._read = function(e) {}, module.exports = I;
