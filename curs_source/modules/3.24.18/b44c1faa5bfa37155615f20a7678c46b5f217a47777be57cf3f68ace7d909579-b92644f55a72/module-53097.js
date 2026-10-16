"use strict";
const n = require("./module-57075.js").Writable, { inherits: s } = require("./module-57975.js"), o = require("./module-78938.js"), i = require("./module-30908.js"), a = require("./module-13531.js"), c = require("./module-48613.js");
function l(e) {
    if (!(this instanceof l)) return new l(e);
    if ("object" != typeof e) throw new TypeError("Busboy expected an options-Object.");
    if ("object" != typeof e.headers) throw new TypeError("Busboy expected an options-Object with headers-attribute.");
    if ("string" != typeof e.headers["content-type"]) throw new TypeError("Missing Content-Type-header.");
    const { headers: t, ...r } = e;
    this.opts = {
        autoDestroy: !1,
        ...r
    }, n.call(this, this.opts), this._done = !1, this._parser = this.getParserByHeaders(t), this._finished = !1;
}
s(l, n), l.prototype.emit = function(e) {
    if ("finish" === e) {
        if (!this._done) return void this._parser?.end();
        if (this._finished) return;
        this._finished = !0;
    }
    n.prototype.emit.apply(this, arguments);
}, l.prototype.getParserByHeaders = function(e) {
    const t = c(e["content-type"]), r = {
        defCharset: this.opts.defCharset,
        fileHwm: this.opts.fileHwm,
        headers: e,
        highWaterMark: this.opts.highWaterMark,
        isPartAFile: this.opts.isPartAFile,
        limits: this.opts.limits,
        parsedConType: t,
        preservePath: this.opts.preservePath
    };
    if (i.detect.test(t[0])) return new i(this, r);
    if (a.detect.test(t[0])) return new a(this, r);
    throw new Error("Unsupported Content-Type.");
}, l.prototype._write = function(e, t, r) {
    this._parser.write(e, r);
}, module.exports = l, module.exports.default = l, module.exports.Busboy = l, module.exports.Dicer = o;
