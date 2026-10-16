"use strict";
const a = require("./module-7075.js").Writable, { inherits: s } = require("./module-7975.js"), o = require("./module-7710.js"), r = require("./module-1464.js"), i = require("./module-2663.js"), A = require("./module-1537.js");
function c(e) {
    if (!(this instanceof c)) return new c(e);
    if ("object" != typeof e) throw new TypeError("Busboy expected an options-Object.");
    if ("object" != typeof e.headers) throw new TypeError("Busboy expected an options-Object with headers-attribute.");
    if ("string" != typeof e.headers["content-type"]) throw new TypeError("Missing Content-Type-header.");
    const { headers: n, ...t } = e;
    this.opts = {
        autoDestroy: !1,
        ...t
    }, a.call(this, this.opts), this._done = !1, this._parser = this.getParserByHeaders(n), this._finished = !1;
}
s(c, a), c.prototype.emit = function(e) {
    if ("finish" === e) {
        if (!this._done) return void this._parser?.end();
        if (this._finished) return;
        this._finished = !0;
    }
    a.prototype.emit.apply(this, arguments);
}, c.prototype.getParserByHeaders = function(e) {
    const n = A(e["content-type"]), t = {
        defCharset: this.opts.defCharset,
        fileHwm: this.opts.fileHwm,
        headers: e,
        highWaterMark: this.opts.highWaterMark,
        isPartAFile: this.opts.isPartAFile,
        limits: this.opts.limits,
        parsedConType: n,
        preservePath: this.opts.preservePath
    };
    if (r.detect.test(n[0])) return new r(this, t);
    if (i.detect.test(n[0])) return new i(this, t);
    throw new Error("Unsupported Content-Type.");
}, c.prototype._write = function(e, n, t) {
    this._parser.write(e, t);
}, module.exports = c, module.exports.default = c, module.exports.Busboy = c, module.exports.Dicer = o;
