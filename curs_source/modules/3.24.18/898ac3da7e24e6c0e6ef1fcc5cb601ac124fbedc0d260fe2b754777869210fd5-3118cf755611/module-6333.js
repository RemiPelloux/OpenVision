"use strict";
const t = require("./module-7075.js").Writable, { inherits: s } = require("./module-7975.js"), o = require("./module-7710.js"), r = require("./module-1464.js"), i = require("./module-2663.js"), A = require("./module-1537.js");
function l(e) {
    if (!(this instanceof l)) return new l(e);
    if ("object" != typeof e) throw new TypeError("Busboy expected an options-Object.");
    if ("object" != typeof e.headers) throw new TypeError("Busboy expected an options-Object with headers-attribute.");
    if ("string" != typeof e.headers["content-type"]) throw new TypeError("Missing Content-Type-header.");
    const { headers: n, ...a } = e;
    this.opts = {
        autoDestroy: !1,
        ...a
    }, t.call(this, this.opts), this._done = !1, this._parser = this.getParserByHeaders(n), this._finished = !1;
}
s(l, t), l.prototype.emit = function(e) {
    if ("finish" === e) {
        if (!this._done) return void this._parser?.end();
        if (this._finished) return;
        this._finished = !0;
    }
    t.prototype.emit.apply(this, arguments);
}, l.prototype.getParserByHeaders = function(e) {
    const n = A(e["content-type"]), a = {
        defCharset: this.opts.defCharset,
        fileHwm: this.opts.fileHwm,
        headers: e,
        highWaterMark: this.opts.highWaterMark,
        isPartAFile: this.opts.isPartAFile,
        limits: this.opts.limits,
        parsedConType: n,
        preservePath: this.opts.preservePath
    };
    if (r.detect.test(n[0])) return new r(this, a);
    if (i.detect.test(n[0])) return new i(this, a);
    throw new Error("Unsupported Content-Type.");
}, l.prototype._write = function(e, n, a) {
    this._parser.write(e, a);
}, module.exports = l, module.exports.default = l, module.exports.Busboy = l, module.exports.Dicer = o;
