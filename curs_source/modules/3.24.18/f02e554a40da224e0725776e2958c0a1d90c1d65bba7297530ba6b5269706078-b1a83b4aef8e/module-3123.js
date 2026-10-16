"use strict";
const n = require("./module-8474.js").EventEmitter, s = require("./module-7975.js").inherits, i = require("./module-3013.js"), o = require("./module-8940.js"), a = Buffer.from("\r\n\r\n"), u = /\r\n/g, c = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/;
function l(t) {
    n.call(this), t = t || {};
    const e = this;
    this.nread = 0, this.maxed = !1, this.npairs = 0, this.maxHeaderPairs = i(t, "maxHeaderPairs", 2e3), this.maxHeaderSize = i(t, "maxHeaderSize", 81920), this.buffer = "", this.header = {}, this.finished = !1, this.ss = new o(a), this.ss.on("info", function(t, r, n, s) {
        r && !e.maxed && (e.nread + s - n >= e.maxHeaderSize ? (s = e.maxHeaderSize - e.nread + n, e.nread = e.maxHeaderSize, e.maxed = !0) : e.nread += s - n, e.buffer += r.toString("binary", n, s)), t && e._finish();
    });
}
s(l, n), l.prototype.push = function(t) {
    const e = this.ss.push(t);
    if (this.finished) return e;
}, l.prototype.reset = function() {
    this.finished = !1, this.buffer = "", this.header = {}, this.ss.reset();
}, l.prototype._finish = function() {
    this.buffer && this._parseHeader(), this.ss.matches = this.ss.maxMatches;
    const t = this.header;
    this.header = {}, this.buffer = "", this.finished = !0, this.nread = this.npairs = 0, this.maxed = !1, this.emit("header", t);
}, l.prototype._parseHeader = function() {
    if (this.npairs === this.maxHeaderPairs) return;
    const t = this.buffer.split(u), e = t.length;
    let r, n;
    for(var s = 0; s < e; ++s){
        if (0 === t[s].length) continue;
        if (("\t" === t[s][0] || " " === t[s][0]) && n) {
            this.header[n][this.header[n].length - 1] += t[s];
            continue;
        }
        const e = t[s].indexOf(":");
        if (-1 === e || 0 === e) return;
        if (r = c.exec(t[s]), n = r[1].toLowerCase(), this.header[n] = this.header[n] || [], this.header[n].push(r[2] || ""), ++this.npairs === this.maxHeaderPairs) break;
    }
}, module.exports = l;
