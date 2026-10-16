"use strict";
const r = require(57075).Writable, { inherits: s } = require(57975), o = require("./module-57710.js"), n = require("./module-31464.js"), i = require("./module-12663.js"), E = require("./module-21537.js");
function Q(A) {
    if (!(this instanceof Q)) return new Q(A);
    if ("object" != typeof A) throw new TypeError("Busboy expected an options-Object.");
    if ("object" != typeof A.headers) throw new TypeError("Busboy expected an options-Object with headers-attribute.");
    if ("string" != typeof A.headers["content-type"]) throw new TypeError("Missing Content-Type-header.");
    const { headers: e, ...t } = A;
    this.opts = {
        autoDestroy: !1,
        ...t
    }, r.call(this, this.opts), this._done = !1, this._parser = this.getParserByHeaders(e), this._finished = !1;
}
s(Q, r), Q.prototype.emit = function(A) {
    if ("finish" === A) {
        if (!this._done) return void this._parser?.end();
        if (this._finished) return;
        this._finished = !0;
    }
    r.prototype.emit.apply(this, arguments);
}, Q.prototype.getParserByHeaders = function(A) {
    const e = E(A["content-type"]), t = {
        defCharset: this.opts.defCharset,
        fileHwm: this.opts.fileHwm,
        headers: A,
        highWaterMark: this.opts.highWaterMark,
        isPartAFile: this.opts.isPartAFile,
        limits: this.opts.limits,
        parsedConType: e,
        preservePath: this.opts.preservePath
    };
    if (n.detect.test(e[0])) return new n(this, t);
    if (i.detect.test(e[0])) return new i(this, t);
    throw new Error("Unsupported Content-Type.");
}, Q.prototype._write = function(A, e, t) {
    this._parser.write(A, t);
}, module.exports = Q, module.exports.default = Q, module.exports.Busboy = Q, module.exports.Dicer = o;
