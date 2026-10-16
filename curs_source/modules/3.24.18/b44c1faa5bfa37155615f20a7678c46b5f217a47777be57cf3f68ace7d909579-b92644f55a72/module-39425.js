"use strict";
function t(e, t) {
    Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = t, this.message = (this.reason || "(unknown reason)") + (this.mark ? " " + this.mark.toString() : ""), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack || "";
}
t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t.prototype.toString = function(e) {
    var t = this.name + ": ";
    return t += this.reason || "(unknown reason)", !e && this.mark && (t += " " + this.mark.toString()), t;
}, module.exports = t;
