"use strict";
var n = require("./module-36755.js");
function o(e, t, r, n, o) {
    this.name = e, this.buffer = t, this.position = r, this.line = n, this.column = o;
}
o.prototype.getSnippet = function(e, t) {
    var r, o, s, i, a;
    if (!this.buffer) return null;
    for(e = e || 4, t = t || 75, r = "", o = this.position; o > 0 && -1 === "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(o - 1));)if (o -= 1, this.position - o > t / 2 - 1) {
        r = " ... ", o += 5;
        break;
    }
    for(s = "", i = this.position; i < this.buffer.length && -1 === "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(i));)if ((i += 1) - this.position > t / 2 - 1) {
        s = " ... ", i -= 5;
        break;
    }
    return a = this.buffer.slice(o, i), n.repeat(" ", e) + r + a + s + "\n" + n.repeat(" ", e + this.position - o + r.length) + "^";
}, o.prototype.toString = function(e) {
    var t, r = "";
    return this.name && (r += 'in "' + this.name + '" '), r += "at line " + (this.line + 1) + ", column " + (this.column + 1), e || (t = this.getSnippet()) && (r += ":\n" + t), r;
}, module.exports = o;
