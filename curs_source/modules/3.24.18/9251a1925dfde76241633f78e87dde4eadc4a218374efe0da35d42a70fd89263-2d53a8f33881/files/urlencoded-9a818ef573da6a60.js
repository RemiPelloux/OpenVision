import { require_Decoder } from "../utils/Decoder.js";
import { require_decodeText } from "../utils/decodeText.js";
import { require_getLimit } from "../utils/getLimit.js";
var __wakaru_require_urlencoded_cache;
export function require_urlencoded() {
if (__wakaru_require_urlencoded_cache) return __wakaru_require_urlencoded_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_urlencoded_cache = module2;
"use strict";
var Decoder = require_Decoder();
var decodeText = require_decodeText();
var getLimit = require_getLimit();
var RE_CHARSET = /^charset$/i;
UrlEncoded.detect = /^application\/x-www-form-urlencoded/i;
function UrlEncoded(boy, cfg) {
    const limits = cfg.limits;
    const parsedConType = cfg.parsedConType;
    this.boy = boy;
    this.fieldSizeLimit = getLimit(limits, "fieldSize", 1 * 1024 * 1024);
    this.fieldNameSizeLimit = getLimit(limits, "fieldNameSize", 100);
    this.fieldsLimit = getLimit(limits, "fields", Infinity);
    let charset2;
    for(var i = 0, len = parsedConType.length; i < len; ++i){
        if (Array.isArray(parsedConType[i]) && RE_CHARSET.test(parsedConType[i][0])) {
            charset2 = parsedConType[i][1].toLowerCase();
            break;
        }
    }
    if (charset2 === void 0) {
        charset2 = cfg.defCharset || "utf8";
    }
    this.decoder = new Decoder();
    this.charset = charset2;
    this._fields = 0;
    this._state = "key";
    this._checkingBytes = true;
    this._bytesKey = 0;
    this._bytesVal = 0;
    this._key = "";
    this._val = "";
    this._keyTrunc = false;
    this._valTrunc = false;
    this._hitLimit = false;
}
UrlEncoded.prototype.write = function(data, cb) {
    if (this._fields === this.fieldsLimit) {
        if (!this.boy.hitFieldsLimit) {
            this.boy.hitFieldsLimit = true;
            this.boy.emit("fieldsLimit");
        }
        return cb();
    }
    let idxeq;
    let idxamp;
    let i;
    let p2 = 0;
    const len = data.length;
    while(p2 < len){
        if (this._state === "key") {
            idxeq = idxamp = void 0;
            for(i = p2; i < len; ++i){
                if (!this._checkingBytes) {
                    ++p2;
                }
                if (data[i] === 61) {
                    idxeq = i;
                    break;
                } else if (data[i] === 38) {
                    idxamp = i;
                    break;
                }
                if (this._checkingBytes && this._bytesKey === this.fieldNameSizeLimit) {
                    this._hitLimit = true;
                    break;
                } else if (this._checkingBytes) {
                    ++this._bytesKey;
                }
            }
            if (idxeq !== void 0) {
                if (idxeq > p2) {
                    this._key += this.decoder.write(data.toString("binary", p2, idxeq));
                }
                this._state = "val";
                this._hitLimit = false;
                this._checkingBytes = true;
                this._val = "";
                this._bytesVal = 0;
                this._valTrunc = false;
                this.decoder.reset();
                p2 = idxeq + 1;
            } else if (idxamp !== void 0) {
                ++this._fields;
                let key;
                const keyTrunc = this._keyTrunc;
                if (idxamp > p2) {
                    key = this._key += this.decoder.write(data.toString("binary", p2, idxamp));
                } else {
                    key = this._key;
                }
                this._hitLimit = false;
                this._checkingBytes = true;
                this._key = "";
                this._bytesKey = 0;
                this._keyTrunc = false;
                this.decoder.reset();
                if (key.length) {
                    this.boy.emit("field", decodeText(key, "binary", this.charset), "", keyTrunc, false);
                }
                p2 = idxamp + 1;
                if (this._fields === this.fieldsLimit) {
                    return cb();
                }
            } else if (this._hitLimit) {
                if (i > p2) {
                    this._key += this.decoder.write(data.toString("binary", p2, i));
                }
                p2 = i;
                if ((this._bytesKey = this._key.length) === this.fieldNameSizeLimit) {
                    this._checkingBytes = false;
                    this._keyTrunc = true;
                }
            } else {
                if (p2 < len) {
                    this._key += this.decoder.write(data.toString("binary", p2));
                }
                p2 = len;
            }
        } else {
            idxamp = void 0;
            for(i = p2; i < len; ++i){
                if (!this._checkingBytes) {
                    ++p2;
                }
                if (data[i] === 38) {
                    idxamp = i;
                    break;
                }
                if (this._checkingBytes && this._bytesVal === this.fieldSizeLimit) {
                    this._hitLimit = true;
                    break;
                } else if (this._checkingBytes) {
                    ++this._bytesVal;
                }
            }
            if (idxamp !== void 0) {
                ++this._fields;
                if (idxamp > p2) {
                    this._val += this.decoder.write(data.toString("binary", p2, idxamp));
                }
                this.boy.emit("field", decodeText(this._key, "binary", this.charset), decodeText(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc);
                this._state = "key";
                this._hitLimit = false;
                this._checkingBytes = true;
                this._key = "";
                this._bytesKey = 0;
                this._keyTrunc = false;
                this.decoder.reset();
                p2 = idxamp + 1;
                if (this._fields === this.fieldsLimit) {
                    return cb();
                }
            } else if (this._hitLimit) {
                if (i > p2) {
                    this._val += this.decoder.write(data.toString("binary", p2, i));
                }
                p2 = i;
                if (this._val === "" && this.fieldSizeLimit === 0 || (this._bytesVal = this._val.length) === this.fieldSizeLimit) {
                    this._checkingBytes = false;
                    this._valTrunc = true;
                }
            } else {
                if (p2 < len) {
                    this._val += this.decoder.write(data.toString("binary", p2));
                }
                p2 = len;
            }
        }
    }
    cb();
};
UrlEncoded.prototype.end = function() {
    if (this.boy._done) {
        return;
    }
    if (this._state === "key" && this._key.length > 0) {
        this.boy.emit("field", decodeText(this._key, "binary", this.charset), "", this._keyTrunc, false);
    } else if (this._state === "val") {
        this.boy.emit("field", decodeText(this._key, "binary", this.charset), decodeText(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc);
    }
    this.boy._done = true;
    this.boy.emit("finish");
};
module2.exports = UrlEncoded;

return module2.exports;
}
