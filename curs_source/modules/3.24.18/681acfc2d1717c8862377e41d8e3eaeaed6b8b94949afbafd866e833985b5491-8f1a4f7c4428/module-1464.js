"use strict";
const { Readable: n } = require("./module-7075.js"), { inherits: r } = require("./module-7975.js"), o = require("./module-7710.js"), s = require("./module-1537.js"), i = require("./module-491.js"), a = require("./module-6388.js"), c = require("./module-5529.js"), l = /^boundary$/i, u = /^form-data$/i, g = /^charset$/i, E = /^filename$/i, h = /^name$/i;
function d(e, t) {
    let A, n;
    const r = this;
    let d;
    const Q = t.limits, f = t.isPartAFile || ((e, t, A)=>"application/octet-stream" === t || void 0 !== A), C = t.parsedConType || [], p = t.defCharset || "utf8", m = t.preservePath, y = {
        highWaterMark: t.fileHwm
    };
    for(A = 0, n = C.length; A < n; ++A)if (Array.isArray(C[A]) && l.test(C[A][0])) {
        d = C[A][1];
        break;
    }
    function w() {
        0 === L && _ && !e._done && (_ = !1, r.end());
    }
    if ("string" != typeof d) throw new Error("Multipart: Boundary not found");
    const k = c(Q, "fieldSize", 1048576), b = c(Q, "fileSize", 1 / 0), N = c(Q, "files", 1 / 0), T = c(Q, "fields", 1 / 0), D = c(Q, "parts", 1 / 0), S = c(Q, "headerPairs", 2e3), R = c(Q, "headerSize", 81920);
    let F, v, M = 0, U = 0, L = 0, _ = !1;
    this._needDrain = !1, this._pause = !1, this._cb = void 0, this._nparts = 0, this._boy = e;
    const J = {
        boundary: d,
        maxHeaderPairs: S,
        maxHeaderSize: R,
        partHwm: y.highWaterMark,
        highWaterMark: t.highWaterMark
    };
    this.parser = new o(J), this.parser.on("drain", function() {
        if (r._needDrain = !1, r._cb && !r._pause) {
            const e = r._cb;
            r._cb = void 0, e();
        }
    }).on("part", function t(o) {
        if (++r._nparts > D) return r.parser.removeListener("part", t), r.parser.on("part", I), e.hitPartsLimit = !0, e.emit("partsLimit"), I(o);
        if (v) {
            const e = v;
            e.emit("end"), e.removeAllListeners("end");
        }
        o.on("header", function(t) {
            let c, l, d, Q, C, D, S, R, _ = 0;
            if (t["content-type"] && (d = s(t["content-type"][0]), d[0])) {
                for(c = d[0].toLowerCase(), A = 0, n = d.length; A < n; ++A)if (g.test(d[A][0])) {
                    Q = d[A][1].toLowerCase();
                    break;
                }
            }
            if (void 0 === c && (c = "text/plain"), void 0 === Q && (Q = p), !t["content-disposition"]) return I(o);
            if (d = s(t["content-disposition"][0]), !u.test(d[0])) return I(o);
            for(A = 0, n = d.length; A < n; ++A)h.test(d[A][0]) ? l = d[A][1] : E.test(d[A][0]) && (D = d[A][1], m || (D = a(D)));
            if (C = t["content-transfer-encoding"] ? t["content-transfer-encoding"][0].toLowerCase() : "7bit", f(l, c, D)) {
                if (M === N) return e.hitFilesLimit || (e.hitFilesLimit = !0, e.emit("filesLimit")), I(o);
                if (++M, 0 === e.listenerCount("file")) return void r.parser._ignore();
                ++L;
                const t = new B(y);
                F = t, t.on("end", function() {
                    if (--L, r._pause = !1, w(), r._cb && !r._needDrain) {
                        const e = r._cb;
                        r._cb = void 0, e();
                    }
                }), t._read = function(e) {
                    if (r._pause && (r._pause = !1, r._cb && !r._needDrain)) {
                        const e = r._cb;
                        r._cb = void 0, e();
                    }
                }, e.emit("file", l, t, D, C, c), S = function(e) {
                    if ((_ += e.length) > b) {
                        const A = b - _ + e.length;
                        return A > 0 && t.push(e.slice(0, A)), t.truncated = !0, t.bytesRead = b, o.removeAllListeners("data"), void t.emit("limit");
                    }
                    t.push(e) || (r._pause = !0), t.bytesRead = _;
                }, R = function() {
                    F = void 0, t.push(null);
                };
            } else {
                if (U === T) return e.hitFieldsLimit || (e.hitFieldsLimit = !0, e.emit("fieldsLimit")), I(o);
                ++U, ++L;
                let t = "", A = !1;
                v = o, S = function(e) {
                    if ((_ += e.length) > k) {
                        const n = k - (_ - e.length);
                        t += e.toString("binary", 0, n), A = !0, o.removeAllListeners("data");
                    } else t += e.toString("binary");
                }, R = function() {
                    v = void 0, t.length && (t = i(t, "binary", Q)), e.emit("field", l, t, !1, A, C, c), --L, w();
                };
            }
            o._readableState.sync = !1, o.on("data", S), o.on("end", R);
        }).on("error", function(e) {
            F && F.emit("error", e);
        });
    }).on("error", function(t) {
        e.emit("error", t);
    }).on("finish", function() {
        _ = !0, w();
    });
}
function I(e) {
    e.resume();
}
function B(e) {
    n.call(this, e), this.bytesRead = 0, this.truncated = !1;
}
d.detect = /^multipart\/form-data/i, d.prototype.write = function(e, t) {
    const A = this.parser.write(e);
    A && !this._pause ? t() : (this._needDrain = !A, this._cb = t);
}, d.prototype.end = function() {
    const e = this;
    e.parser.writable ? e.parser.end() : e._boy._done || process.nextTick(function() {
        e._boy._done = !0, e._boy.emit("finish");
    });
}, r(B, n), B.prototype._read = function(e) {}, module.exports = d;
