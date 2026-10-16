"use strict";
const n = require("./module-8474.js").EventEmitter, r = require("./module-7975.js").inherits, o = require("./module-5529.js"), s = require("./module-9512.js"), i = Buffer.from("\r\n\r\n"), a = /\r\n/g, c = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/;
function l(e) {
    n.call(this), e = e || {};
    const t = this;
    this.nread = 0, this.maxed = !1, this.npairs = 0, this.maxHeaderPairs = o(e, "maxHeaderPairs", 2e3), this.maxHeaderSize = o(e, "maxHeaderSize", 81920), this.buffer = "", this.header = {}, this.finished = !1, this.ss = new s(i), this.ss.on("info", function(e, A, n, r) {
        A && !t.maxed && (t.nread + r - n >= t.maxHeaderSize ? (r = t.maxHeaderSize - t.nread + n, t.nread = t.maxHeaderSize, t.maxed = !0) : t.nread += r - n, t.buffer += A.toString("binary", n, r)), e && t._finish();
    });
}
r(l, n), l.prototype.push = function(e) {
    const t = this.ss.push(e);
    if (this.finished) return t;
}, l.prototype.reset = function() {
    this.finished = !1, this.buffer = "", this.header = {}, this.ss.reset();
}, l.prototype._finish = function() {
    this.buffer && this._parseHeader(), this.ss.matches = this.ss.maxMatches;
    const e = this.header;
    this.header = {}, this.buffer = "", this.finished = !0, this.nread = this.npairs = 0, this.maxed = !1, this.emit("header", e);
}, l.prototype._parseHeader = function() {
    if (this.npairs === this.maxHeaderPairs) return;
    const e = this.buffer.split(a), t = e.length;
    let A, n;
    for(var r = 0; r < t; ++r){
        if (0 === e[r].length) continue;
        if (("\t" === e[r][0] || " " === e[r][0]) && n) {
            this.header[n][this.header[n].length - 1] += e[r];
            continue;
        }
        const t = e[r].indexOf(":");
        if (-1 === t || 0 === t) return;
        if (A = c.exec(e[r]), n = A[1].toLowerCase(), this.header[n] = this.header[n] || [], this.header[n].push(A[2] || ""), ++this.npairs === this.maxHeaderPairs) break;
    }
}, module.exports = l;
