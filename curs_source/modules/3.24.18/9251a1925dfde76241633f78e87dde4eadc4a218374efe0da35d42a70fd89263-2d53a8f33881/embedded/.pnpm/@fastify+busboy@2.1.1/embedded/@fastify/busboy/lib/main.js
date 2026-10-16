import { require_Dicer } from "../deps/dicer/lib/Dicer.js";
import { require_multipart } from "./types/multipart.js";
import { require_urlencoded } from "./types/urlencoded.js";
import { require_parseParams } from "./utils/parseParams.js";
var __wakaru_require_main_cache;
export function require_main() {
if (__wakaru_require_main_cache) return __wakaru_require_main_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_main_cache = module2;
"use strict";
var WritableStream2 = require("node:stream").Writable;
var { inherits } = require("node:util");
var Dicer = require_Dicer();
var MultipartParser = require_multipart();
var UrlencodedParser = require_urlencoded();
var parseParams = require_parseParams();
function Busboy(opts) {
    if (!(this instanceof Busboy)) {
        return new Busboy(opts);
    }
    if (typeof opts !== "object") {
        throw new TypeError("Busboy expected an options-Object.");
    }
    if (typeof opts.headers !== "object") {
        throw new TypeError("Busboy expected an options-Object with headers-attribute.");
    }
    if (typeof opts.headers["content-type"] !== "string") {
        throw new TypeError("Missing Content-Type-header.");
    }
    const { headers, ...streamOptions } = opts;
    this.opts = {
        autoDestroy: false,
        ...streamOptions
    };
    WritableStream2.call(this, this.opts);
    this._done = false;
    this._parser = this.getParserByHeaders(headers);
    this._finished = false;
}
inherits(Busboy, WritableStream2);
Busboy.prototype.emit = function(ev) {
    if (ev === "finish") {
        if (!this._done) {
            this._parser?.end();
            return;
        } else if (this._finished) {
            return;
        }
        this._finished = true;
    }
    WritableStream2.prototype.emit.apply(this, arguments);
};
Busboy.prototype.getParserByHeaders = function(headers) {
    const parsed = parseParams(headers["content-type"]);
    const cfg = {
        defCharset: this.opts.defCharset,
        fileHwm: this.opts.fileHwm,
        headers,
        highWaterMark: this.opts.highWaterMark,
        isPartAFile: this.opts.isPartAFile,
        limits: this.opts.limits,
        parsedConType: parsed,
        preservePath: this.opts.preservePath
    };
    if (MultipartParser.detect.test(parsed[0])) {
        return new MultipartParser(this, cfg);
    }
    if (UrlencodedParser.detect.test(parsed[0])) {
        return new UrlencodedParser(this, cfg);
    }
    throw new Error("Unsupported Content-Type.");
};
Busboy.prototype._write = function(chunk, encoding, cb) {
    this._parser.write(chunk, cb);
};
module2.exports = Busboy;
module2.exports.default = Busboy;
module2.exports.Busboy = Busboy;
module2.exports.Dicer = Dicer;

return module2.exports;
}
