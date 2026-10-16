"use strict";
const t = require("./module-7075.js").Writable, { inherits: s } = require("./module-7975.js"), o = require("./module-7710.js"), r = require("./module-1464.js"), i = require("./module-2663.js"), l = require("./module-1537.js");
function d(e) {
    if (!(this instanceof d)) return new d(e);
    if ("object" != typeof e) throw new TypeError("Busboy expected an options-Object.");
    if ("object" != typeof e.headers) throw new TypeError("Busboy expected an options-Object with headers-attribute.");
    if ("string" != typeof e.headers["content-type"]) throw new TypeError("Missing Content-Type-header.");
    const { headers: a, ...n } = e;
    this.opts = {
        autoDestroy: !1,
        ...n
    }, t.call(this, this.opts), this._done = !1, this._parser = this.getParserByHeaders(a), this._finished = !1;
}
s(d, t), d.prototype.emit = function(e) {
    if ("finish" === e) {
        if (!this._done) return void this._parser?.end();
        if (this._finished) return;
        this._finished = !0;
    }
    t.prototype.emit.apply(this, arguments);
}, d.prototype.getParserByHeaders = function(e) {
    const a = l(e["content-type"]), n = {
        defCharset: this.opts.defCharset,
        fileHwm: this.opts.fileHwm,
        headers: e,
        highWaterMark: this.opts.highWaterMark,
        isPartAFile: this.opts.isPartAFile,
        limits: this.opts.limits,
        parsedConType: a,
        preservePath: this.opts.preservePath
    };
    if (r.detect.test(a[0])) return new r(this, n);
    if (i.detect.test(a[0])) return new i(this, n);
    throw new Error("Unsupported Content-Type.");
}, d.prototype._write = function(e, a, n) {
    this._parser.write(e, n);
}, module.exports = d, module.exports.default = d, module.exports.Busboy = d, module.exports.Dicer = o;
