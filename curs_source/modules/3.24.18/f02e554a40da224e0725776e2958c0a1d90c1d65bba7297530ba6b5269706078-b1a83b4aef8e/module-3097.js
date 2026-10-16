"use strict";
const n = require("./module-7075.js").Writable, { inherits: s } = require("./module-7975.js"), i = require("./module-8938.js"), o = require("./module-908.js"), a = require("./module-3531.js"), u = require("./module-8613.js");
function c(t) {
    if (!(this instanceof c)) return new c(t);
    if ("object" != typeof t) throw new TypeError("Busboy expected an options-Object.");
    if ("object" != typeof t.headers) throw new TypeError("Busboy expected an options-Object with headers-attribute.");
    if ("string" != typeof t.headers["content-type"]) throw new TypeError("Missing Content-Type-header.");
    const { headers: e, ...r } = t;
    this.opts = {
        autoDestroy: !1,
        ...r
    }, n.call(this, this.opts), this._done = !1, this._parser = this.getParserByHeaders(e), this._finished = !1;
}
s(c, n), c.prototype.emit = function(t) {
    if ("finish" === t) {
        if (!this._done) return void this._parser?.end();
        if (this._finished) return;
        this._finished = !0;
    }
    n.prototype.emit.apply(this, arguments);
}, c.prototype.getParserByHeaders = function(t) {
    const e = u(t["content-type"]), r = {
        defCharset: this.opts.defCharset,
        fileHwm: this.opts.fileHwm,
        headers: t,
        highWaterMark: this.opts.highWaterMark,
        isPartAFile: this.opts.isPartAFile,
        limits: this.opts.limits,
        parsedConType: e,
        preservePath: this.opts.preservePath
    };
    if (o.detect.test(e[0])) return new o(this, r);
    if (a.detect.test(e[0])) return new a(this, r);
    throw new Error("Unsupported Content-Type.");
}, c.prototype._write = function(t, e, r) {
    this._parser.write(t, r);
}, module.exports = c, module.exports.default = c, module.exports.Busboy = c, module.exports.Dicer = i;
