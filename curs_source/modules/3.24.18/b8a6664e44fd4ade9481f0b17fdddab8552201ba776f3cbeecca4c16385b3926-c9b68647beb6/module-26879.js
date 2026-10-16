"use strict";
const r = require(78474).EventEmitter, s = require(57975).inherits, o = require("./module-5529.js"), n = require("./module-89512.js"), i = Buffer.from("\r\n\r\n"), E = /\r\n/g, Q = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/;
function g(A) {
    r.call(this), A = A || {};
    const e = this;
    this.nread = 0, this.maxed = !1, this.npairs = 0, this.maxHeaderPairs = o(A, "maxHeaderPairs", 2e3), this.maxHeaderSize = o(A, "maxHeaderSize", 81920), this.buffer = "", this.header = {}, this.finished = !1, this.ss = new n(i), this.ss.on("info", function(A, t, r, s) {
        t && !e.maxed && (e.nread + s - r >= e.maxHeaderSize ? (s = e.maxHeaderSize - e.nread + r, e.nread = e.maxHeaderSize, e.maxed = !0) : e.nread += s - r, e.buffer += t.toString("binary", r, s)), A && e._finish();
    });
}
s(g, r), g.prototype.push = function(A) {
    const e = this.ss.push(A);
    if (this.finished) return e;
}, g.prototype.reset = function() {
    this.finished = !1, this.buffer = "", this.header = {}, this.ss.reset();
}, g.prototype._finish = function() {
    this.buffer && this._parseHeader(), this.ss.matches = this.ss.maxMatches;
    const A = this.header;
    this.header = {}, this.buffer = "", this.finished = !0, this.nread = this.npairs = 0, this.maxed = !1, this.emit("header", A);
}, g.prototype._parseHeader = function() {
    if (this.npairs === this.maxHeaderPairs) return;
    const A = this.buffer.split(E), e = A.length;
    let t, r;
    for(var s = 0; s < e; ++s){
        if (0 === A[s].length) continue;
        if (("\t" === A[s][0] || " " === A[s][0]) && r) {
            this.header[r][this.header[r].length - 1] += A[s];
            continue;
        }
        const e = A[s].indexOf(":");
        if (-1 === e || 0 === e) return;
        if (t = Q.exec(A[s]), r = t[1].toLowerCase(), this.header[r] = this.header[r] || [], this.header[r].push(t[2] || ""), ++this.npairs === this.maxHeaderPairs) break;
    }
}, module.exports = g;
