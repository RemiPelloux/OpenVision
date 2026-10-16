"use strict";
var n = require("./module-36755.js");
function s(e, t, r, n, s) {
    this.name = e, this.buffer = t, this.position = r, this.line = n, this.column = s;
}
s.prototype.getSnippet = function(e, t) {
    var r, s, o, i, a;
    if (!this.buffer) return null;
    for(e = e || 4, t = t || 75, r = "", s = this.position; s > 0 && -1 === "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(s - 1));)if (s -= 1, this.position - s > t / 2 - 1) {
        r = " ... ", s += 5;
        break;
    }
    for(o = "", i = this.position; i < this.buffer.length && -1 === "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(i));)if ((i += 1) - this.position > t / 2 - 1) {
        o = " ... ", i -= 5;
        break;
    }
    return a = this.buffer.slice(s, i), n.repeat(" ", e) + r + a + o + "\n" + n.repeat(" ", e + this.position - s + r.length) + "^";
}, s.prototype.toString = function(e) {
    var t, r = "";
    return this.name && (r += 'in "' + this.name + '" '), r += "at line " + (this.line + 1) + ", column " + (this.column + 1), e || (t = this.getSnippet()) && (r += ":\n" + t), r;
}, module.exports = s;
