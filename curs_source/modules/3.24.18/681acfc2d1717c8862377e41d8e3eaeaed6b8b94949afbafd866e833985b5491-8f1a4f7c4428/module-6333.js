"use strict";
const n = require("./module-7075.js").Writable, { inherits: r } = require("./module-7975.js"), o = require("./module-7710.js"), s = require("./module-1464.js"), i = require("./module-2663.js"), a = require("./module-1537.js");
function c(e) {
    if (!(this instanceof c)) return new c(e);
    if ("object" != typeof e) throw new TypeError("Busboy expected an options-Object.");
    if ("object" != typeof e.headers) throw new TypeError("Busboy expected an options-Object with headers-attribute.");
    if ("string" != typeof e.headers["content-type"]) throw new TypeError("Missing Content-Type-header.");
    const { headers: t, ...A } = e;
    this.opts = {
        autoDestroy: !1,
        ...A
    }, n.call(this, this.opts), this._done = !1, this._parser = this.getParserByHeaders(t), this._finished = !1;
}
r(c, n), c.prototype.emit = function(e) {
    if ("finish" === e) {
        if (!this._done) return void this._parser?.end();
        if (this._finished) return;
        this._finished = !0;
    }
    n.prototype.emit.apply(this, arguments);
}, c.prototype.getParserByHeaders = function(e) {
    const t = a(e["content-type"]), A = {
        defCharset: this.opts.defCharset,
        fileHwm: this.opts.fileHwm,
        headers: e,
        highWaterMark: this.opts.highWaterMark,
        isPartAFile: this.opts.isPartAFile,
        limits: this.opts.limits,
        parsedConType: t,
        preservePath: this.opts.preservePath
    };
    if (s.detect.test(t[0])) return new s(this, A);
    if (i.detect.test(t[0])) return new i(this, A);
    throw new Error("Unsupported Content-Type.");
}, c.prototype._write = function(e, t, A) {
    this._parser.write(e, A);
}, module.exports = c, module.exports.default = c, module.exports.Busboy = c, module.exports.Dicer = o;
