"use strict";
const n = require("./module-8474.js").EventEmitter, r = require("./module-7975.js").inherits, o = require("./module-5529.js"), s = require("./module-9512.js"), a = Buffer.from("\r\n\r\n"), i = /\r\n/g, c = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/;
function l(e) {
    n.call(this), e = e || {};
    const A = this;
    this.nread = 0, this.maxed = !1, this.npairs = 0, this.maxHeaderPairs = o(e, "maxHeaderPairs", 2e3), this.maxHeaderSize = o(e, "maxHeaderSize", 81920), this.buffer = "", this.header = {}, this.finished = !1, this.ss = new s(a), this.ss.on("info", function(e, t, n, r) {
        t && !A.maxed && (A.nread + r - n >= A.maxHeaderSize ? (r = A.maxHeaderSize - A.nread + n, A.nread = A.maxHeaderSize, A.maxed = !0) : A.nread += r - n, A.buffer += t.toString("binary", n, r)), e && A._finish();
    });
}
r(l, n), l.prototype.push = function(e) {
    const A = this.ss.push(e);
    if (this.finished) return A;
}, l.prototype.reset = function() {
    this.finished = !1, this.buffer = "", this.header = {}, this.ss.reset();
}, l.prototype._finish = function() {
    this.buffer && this._parseHeader(), this.ss.matches = this.ss.maxMatches;
    const e = this.header;
    this.header = {}, this.buffer = "", this.finished = !0, this.nread = this.npairs = 0, this.maxed = !1, this.emit("header", e);
}, l.prototype._parseHeader = function() {
    if (this.npairs === this.maxHeaderPairs) return;
    const e = this.buffer.split(i), A = e.length;
    let t, n;
    for(var r = 0; r < A; ++r){
        if (0 === e[r].length) continue;
        if (("\t" === e[r][0] || " " === e[r][0]) && n) {
            this.header[n][this.header[n].length - 1] += e[r];
            continue;
        }
        const A = e[r].indexOf(":");
        if (-1 === A || 0 === A) return;
        if (t = c.exec(e[r]), n = t[1].toLowerCase(), this.header[n] = this.header[n] || [], this.header[n].push(t[2] || ""), ++this.npairs === this.maxHeaderPairs) break;
    }
}, module.exports = l;
