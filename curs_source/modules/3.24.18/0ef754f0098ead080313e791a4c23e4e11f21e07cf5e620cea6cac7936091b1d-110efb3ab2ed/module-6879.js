"use strict";
const t = require("./module-8474.js").EventEmitter, s = require("./module-7975.js").inherits, o = require("./module-5529.js"), r = require("./module-9512.js"), i = Buffer.from("\r\n\r\n"), l = /\r\n/g, d = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/;
function m(e) {
    t.call(this), e = e || {};
    const a = this;
    this.nread = 0, this.maxed = !1, this.npairs = 0, this.maxHeaderPairs = o(e, "maxHeaderPairs", 2e3), this.maxHeaderSize = o(e, "maxHeaderSize", 81920), this.buffer = "", this.header = {}, this.finished = !1, this.ss = new r(i), this.ss.on("info", function(e, n, t, s) {
        n && !a.maxed && (a.nread + s - t >= a.maxHeaderSize ? (s = a.maxHeaderSize - a.nread + t, a.nread = a.maxHeaderSize, a.maxed = !0) : a.nread += s - t, a.buffer += n.toString("binary", t, s)), e && a._finish();
    });
}
s(m, t), m.prototype.push = function(e) {
    const a = this.ss.push(e);
    if (this.finished) return a;
}, m.prototype.reset = function() {
    this.finished = !1, this.buffer = "", this.header = {}, this.ss.reset();
}, m.prototype._finish = function() {
    this.buffer && this._parseHeader(), this.ss.matches = this.ss.maxMatches;
    const e = this.header;
    this.header = {}, this.buffer = "", this.finished = !0, this.nread = this.npairs = 0, this.maxed = !1, this.emit("header", e);
}, m.prototype._parseHeader = function() {
    if (this.npairs === this.maxHeaderPairs) return;
    const e = this.buffer.split(l), a = e.length;
    let n, t;
    for(var s = 0; s < a; ++s){
        if (0 === e[s].length) continue;
        if (("\t" === e[s][0] || " " === e[s][0]) && t) {
            this.header[t][this.header[t].length - 1] += e[s];
            continue;
        }
        const a = e[s].indexOf(":");
        if (-1 === a || 0 === a) return;
        if (n = d.exec(e[s]), t = n[1].toLowerCase(), this.header[t] = this.header[t] || [], this.header[t].push(n[2] || ""), ++this.npairs === this.maxHeaderPairs) break;
    }
}, module.exports = m;
