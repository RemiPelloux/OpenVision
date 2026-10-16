"use strict";
const t = require("./module-8474.js").EventEmitter, s = require("./module-7975.js").inherits, o = require("./module-5529.js"), r = require("./module-9512.js"), i = Buffer.from("\r\n\r\n"), A = /\r\n/g, l = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/;
function c(e) {
    t.call(this), e = e || {};
    const n = this;
    this.nread = 0, this.maxed = !1, this.npairs = 0, this.maxHeaderPairs = o(e, "maxHeaderPairs", 2e3), this.maxHeaderSize = o(e, "maxHeaderSize", 81920), this.buffer = "", this.header = {}, this.finished = !1, this.ss = new r(i), this.ss.on("info", function(e, a, t, s) {
        a && !n.maxed && (n.nread + s - t >= n.maxHeaderSize ? (s = n.maxHeaderSize - n.nread + t, n.nread = n.maxHeaderSize, n.maxed = !0) : n.nread += s - t, n.buffer += a.toString("binary", t, s)), e && n._finish();
    });
}
s(c, t), c.prototype.push = function(e) {
    const n = this.ss.push(e);
    if (this.finished) return n;
}, c.prototype.reset = function() {
    this.finished = !1, this.buffer = "", this.header = {}, this.ss.reset();
}, c.prototype._finish = function() {
    this.buffer && this._parseHeader(), this.ss.matches = this.ss.maxMatches;
    const e = this.header;
    this.header = {}, this.buffer = "", this.finished = !0, this.nread = this.npairs = 0, this.maxed = !1, this.emit("header", e);
}, c.prototype._parseHeader = function() {
    if (this.npairs === this.maxHeaderPairs) return;
    const e = this.buffer.split(A), n = e.length;
    let a, t;
    for(var s = 0; s < n; ++s){
        if (0 === e[s].length) continue;
        if (("\t" === e[s][0] || " " === e[s][0]) && t) {
            this.header[t][this.header[t].length - 1] += e[s];
            continue;
        }
        const n = e[s].indexOf(":");
        if (-1 === n || 0 === n) return;
        if (a = l.exec(e[s]), t = a[1].toLowerCase(), this.header[t] = this.header[t] || [], this.header[t].push(a[2] || ""), ++this.npairs === this.maxHeaderPairs) break;
    }
}, module.exports = c;
