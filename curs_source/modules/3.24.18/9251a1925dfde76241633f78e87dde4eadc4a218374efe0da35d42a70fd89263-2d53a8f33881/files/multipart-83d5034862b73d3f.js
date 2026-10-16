import { require_Dicer } from "../../deps/dicer/lib/Dicer.js";
import { require_basename } from "../utils/basename.js";
import { require_decodeText } from "../utils/decodeText.js";
import { require_getLimit } from "../utils/getLimit.js";
import { require_parseParams } from "../utils/parseParams.js";
var __wakaru_require_multipart_cache;
export function require_multipart() {
if (__wakaru_require_multipart_cache) return __wakaru_require_multipart_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_multipart_cache = module2;
"use strict";
var { Readable: Readable2 } = require("node:stream");
var { inherits } = require("node:util");
var Dicer = require_Dicer();
var parseParams = require_parseParams();
var decodeText = require_decodeText();
var basename18 = require_basename();
var getLimit = require_getLimit();
var RE_BOUNDARY = /^boundary$/i;
var RE_FIELD = /^form-data$/i;
var RE_CHARSET = /^charset$/i;
var RE_FILENAME = /^filename$/i;
var RE_NAME = /^name$/i;
Multipart.detect = /^multipart\/form-data/i;
function Multipart(boy, cfg) {
    let i;
    let len;
    const self2 = this;
    let boundary;
    const limits = cfg.limits;
    const isPartAFile = cfg.isPartAFile || ((fieldName, contentType, fileName)=>contentType === "application/octet-stream" || fileName !== void 0);
    const parsedConType = cfg.parsedConType || [];
    const defCharset = cfg.defCharset || "utf8";
    const preservePath = cfg.preservePath;
    const fileOpts = {
        highWaterMark: cfg.fileHwm
    };
    for(i = 0, len = parsedConType.length; i < len; ++i){
        if (Array.isArray(parsedConType[i]) && RE_BOUNDARY.test(parsedConType[i][0])) {
            boundary = parsedConType[i][1];
            break;
        }
    }
    function checkFinished() {
        if (nends === 0 && finished2 && !boy._done) {
            finished2 = false;
            self2.end();
        }
    }
    if (typeof boundary !== "string") {
        throw new Error("Multipart: Boundary not found");
    }
    const fieldSizeLimit = getLimit(limits, "fieldSize", 1 * 1024 * 1024);
    const fileSizeLimit = getLimit(limits, "fileSize", Infinity);
    const filesLimit = getLimit(limits, "files", Infinity);
    const fieldsLimit = getLimit(limits, "fields", Infinity);
    const partsLimit = getLimit(limits, "parts", Infinity);
    const headerPairsLimit = getLimit(limits, "headerPairs", 2e3);
    const headerSizeLimit = getLimit(limits, "headerSize", 80 * 1024);
    let nfiles = 0;
    let nfields = 0;
    let nends = 0;
    let curFile;
    let curField;
    let finished2 = false;
    this._needDrain = false;
    this._pause = false;
    this._cb = void 0;
    this._nparts = 0;
    this._boy = boy;
    const parserCfg = {
        boundary,
        maxHeaderPairs: headerPairsLimit,
        maxHeaderSize: headerSizeLimit,
        partHwm: fileOpts.highWaterMark,
        highWaterMark: cfg.highWaterMark
    };
    this.parser = new Dicer(parserCfg);
    this.parser.on("drain", function() {
        self2._needDrain = false;
        if (self2._cb && !self2._pause) {
            const cb = self2._cb;
            self2._cb = void 0;
            cb();
        }
    }).on("part", function onPart(part) {
        if (++self2._nparts > partsLimit) {
            self2.parser.removeListener("part", onPart);
            self2.parser.on("part", skipPart);
            boy.hitPartsLimit = true;
            boy.emit("partsLimit");
            return skipPart(part);
        }
        if (curField) {
            const field4 = curField;
            field4.emit("end");
            field4.removeAllListeners("end");
        }
        part.on("header", function(header) {
            let contype;
            let fieldname;
            let parsed;
            let charset2;
            let encoding;
            let filename;
            let nsize = 0;
            if (header["content-type"]) {
                parsed = parseParams(header["content-type"][0]);
                if (parsed[0]) {
                    contype = parsed[0].toLowerCase();
                    for(i = 0, len = parsed.length; i < len; ++i){
                        if (RE_CHARSET.test(parsed[i][0])) {
                            charset2 = parsed[i][1].toLowerCase();
                            break;
                        }
                    }
                }
            }
            if (contype === void 0) {
                contype = "text/plain";
            }
            if (charset2 === void 0) {
                charset2 = defCharset;
            }
            if (header["content-disposition"]) {
                parsed = parseParams(header["content-disposition"][0]);
                if (!RE_FIELD.test(parsed[0])) {
                    return skipPart(part);
                }
                for(i = 0, len = parsed.length; i < len; ++i){
                    if (RE_NAME.test(parsed[i][0])) {
                        fieldname = parsed[i][1];
                    } else if (RE_FILENAME.test(parsed[i][0])) {
                        filename = parsed[i][1];
                        if (!preservePath) {
                            filename = basename18(filename);
                        }
                    }
                }
            } else {
                return skipPart(part);
            }
            if (header["content-transfer-encoding"]) {
                encoding = header["content-transfer-encoding"][0].toLowerCase();
            } else {
                encoding = "7bit";
            }
            let onData, onEnd;
            if (isPartAFile(fieldname, contype, filename)) {
                if (nfiles === filesLimit) {
                    if (!boy.hitFilesLimit) {
                        boy.hitFilesLimit = true;
                        boy.emit("filesLimit");
                    }
                    return skipPart(part);
                }
                ++nfiles;
                if (boy.listenerCount("file") === 0) {
                    self2.parser._ignore();
                    return;
                }
                ++nends;
                const file = new FileStream(fileOpts);
                curFile = file;
                file.on("end", function() {
                    --nends;
                    self2._pause = false;
                    checkFinished();
                    if (self2._cb && !self2._needDrain) {
                        const cb = self2._cb;
                        self2._cb = void 0;
                        cb();
                    }
                });
                file._read = function(n) {
                    if (!self2._pause) {
                        return;
                    }
                    self2._pause = false;
                    if (self2._cb && !self2._needDrain) {
                        const cb = self2._cb;
                        self2._cb = void 0;
                        cb();
                    }
                };
                boy.emit("file", fieldname, file, filename, encoding, contype);
                onData = function(data) {
                    if ((nsize += data.length) > fileSizeLimit) {
                        const extralen = fileSizeLimit - nsize + data.length;
                        if (extralen > 0) {
                            file.push(data.slice(0, extralen));
                        }
                        file.truncated = true;
                        file.bytesRead = fileSizeLimit;
                        part.removeAllListeners("data");
                        file.emit("limit");
                        return;
                    } else if (!file.push(data)) {
                        self2._pause = true;
                    }
                    file.bytesRead = nsize;
                };
                onEnd = function() {
                    curFile = void 0;
                    file.push(null);
                };
            } else {
                if (nfields === fieldsLimit) {
                    if (!boy.hitFieldsLimit) {
                        boy.hitFieldsLimit = true;
                        boy.emit("fieldsLimit");
                    }
                    return skipPart(part);
                }
                ++nfields;
                ++nends;
                let buffer = "";
                let truncated = false;
                curField = part;
                onData = function(data) {
                    if ((nsize += data.length) > fieldSizeLimit) {
                        const extralen = fieldSizeLimit - (nsize - data.length);
                        buffer += data.toString("binary", 0, extralen);
                        truncated = true;
                        part.removeAllListeners("data");
                    } else {
                        buffer += data.toString("binary");
                    }
                };
                onEnd = function() {
                    curField = void 0;
                    if (buffer.length) {
                        buffer = decodeText(buffer, "binary", charset2);
                    }
                    boy.emit("field", fieldname, buffer, false, truncated, encoding, contype);
                    --nends;
                    checkFinished();
                };
            }
            part._readableState.sync = false;
            part.on("data", onData);
            part.on("end", onEnd);
        }).on("error", function(err) {
            if (curFile) {
                curFile.emit("error", err);
            }
        });
    }).on("error", function(err) {
        boy.emit("error", err);
    }).on("finish", function() {
        finished2 = true;
        checkFinished();
    });
}
Multipart.prototype.write = function(chunk, cb) {
    const r = this.parser.write(chunk);
    if (r && !this._pause) {
        cb();
    } else {
        this._needDrain = !r;
        this._cb = cb;
    }
};
Multipart.prototype.end = function() {
    const self2 = this;
    if (self2.parser.writable) {
        self2.parser.end();
    } else if (!self2._boy._done) {
        process.nextTick(function() {
            self2._boy._done = true;
            self2._boy.emit("finish");
        });
    }
};
function skipPart(part) {
    part.resume();
}
function FileStream(opts) {
    Readable2.call(this, opts);
    this.bytesRead = 0;
    this.truncated = false;
}
inherits(FileStream, Readable2);
FileStream.prototype._read = function(n) {};
module2.exports = Multipart;

return module2.exports;
}
