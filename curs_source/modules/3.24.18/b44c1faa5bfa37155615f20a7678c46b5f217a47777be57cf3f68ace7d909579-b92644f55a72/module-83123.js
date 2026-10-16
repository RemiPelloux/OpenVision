"use strict";
const n = require("./module-78474.js").EventEmitter, s = require("./module-57975.js").inherits, o = require("./module-33013.js"), i = require("./module-88940.js"), a = Buffer.from("\r\n\r\n"), c = /\r\n/g, l = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/;
function u(e) {
    n.call(this), e = e || {};
    const t = this;
    this.nread = 0, this.maxed = !1, this.npairs = 0, this.maxHeaderPairs = o(e, "maxHeaderPairs", 2e3), this.maxHeaderSize = o(e, "maxHeaderSize", 81920), this.buffer = "", this.header = {}, this.finished = !1, this.ss = new i(a), this.ss.on("info", function(e, r, n, s) {
        r && !t.maxed && (t.nread + s - n >= t.maxHeaderSize ? (s = t.maxHeaderSize - t.nread + n, t.nread = t.maxHeaderSize, t.maxed = !0) : t.nread += s - n, t.buffer += r.toString("binary", n, s)), e && t._finish();
    });
}
s(u, n), u.prototype.push = function(e) {
    const t = this.ss.push(e);
    if (this.finished) return t;
}, u.prototype.reset = function() {
    this.finished = !1, this.buffer = "", this.header = {}, this.ss.reset();
}, u.prototype._finish = function() {
    this.buffer && this._parseHeader(), this.ss.matches = this.ss.maxMatches;
    const e = this.header;
    this.header = {}, this.buffer = "", this.finished = !0, this.nread = this.npairs = 0, this.maxed = !1, this.emit("header", e);
}, u.prototype._parseHeader = function() {
    if (this.npairs === this.maxHeaderPairs) return;
    const e = this.buffer.split(c), t = e.length;
    let r, n;
    for(var s = 0; s < t; ++s){
        if (0 === e[s].length) continue;
        if (("\t" === e[s][0] || " " === e[s][0]) && n) {
            this.header[n][this.header[n].length - 1] += e[s];
            continue;
        }
        const t = e[s].indexOf(":");
        if (-1 === t || 0 === t) return;
        if (r = l.exec(e[s]), n = r[1].toLowerCase(), this.header[n] = this.header[n] || [], this.header[n].push(r[2] || ""), ++this.npairs === this.maxHeaderPairs) break;
    }
}, module.exports = u;
