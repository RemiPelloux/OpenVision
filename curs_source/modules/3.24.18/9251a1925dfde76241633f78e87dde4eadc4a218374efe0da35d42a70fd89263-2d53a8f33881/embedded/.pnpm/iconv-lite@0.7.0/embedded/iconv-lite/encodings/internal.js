import { require_safer } from "../../../../safer-buffer@2.1.2/node_modules/safer-buffer/safer.js";
var __wakaru_require_internal_cache;
export function require_internal() {
if (__wakaru_require_internal_cache) return __wakaru_require_internal_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_internal_cache = module2;
"use strict";
var Buffer4 = require_safer().Buffer;
module2.exports = {
    utf8: {
        type: "_internal",
        bomAware: true
    },
    cesu8: {
        type: "_internal",
        bomAware: true
    },
    unicode11utf8: "utf8",
    ucs2: {
        type: "_internal",
        bomAware: true
    },
    utf16le: "ucs2",
    binary: {
        type: "_internal"
    },
    base64: {
        type: "_internal"
    },
    hex: {
        type: "_internal"
    },
    _internal: InternalCodec
};
function InternalCodec(codecOptions, iconv3) {
    this.enc = codecOptions.encodingName;
    this.bomAware = codecOptions.bomAware;
    if (this.enc === "base64") {
        this.encoder = InternalEncoderBase64;
    } else if (this.enc === "utf8") {
        this.encoder = InternalEncoderUtf8;
    } else if (this.enc === "cesu8") {
        this.enc = "utf8";
        this.encoder = InternalEncoderCesu8;
        if (Buffer4.from("eda0bdedb2a9", "hex").toString() !== "\u{1F4A9}") {
            this.decoder = InternalDecoderCesu8;
            this.defaultCharUnicode = iconv3.defaultCharUnicode;
        }
    }
}
InternalCodec.prototype.encoder = InternalEncoder;
InternalCodec.prototype.decoder = InternalDecoder;
var StringDecoder = require("string_decoder").StringDecoder;
function InternalDecoder(options2, codec) {
    this.decoder = new StringDecoder(codec.enc);
}
InternalDecoder.prototype.write = function(buf) {
    if (!Buffer4.isBuffer(buf)) {
        buf = Buffer4.from(buf);
    }
    return this.decoder.write(buf);
};
InternalDecoder.prototype.end = function() {
    return this.decoder.end();
};
function InternalEncoder(options2, codec) {
    this.enc = codec.enc;
}
InternalEncoder.prototype.write = function(str3) {
    return Buffer4.from(str3, this.enc);
};
InternalEncoder.prototype.end = function() {};
function InternalEncoderBase64(options2, codec) {
    this.prevStr = "";
}
InternalEncoderBase64.prototype.write = function(str3) {
    str3 = this.prevStr + str3;
    var completeQuads = str3.length - str3.length % 4;
    this.prevStr = str3.slice(completeQuads);
    str3 = str3.slice(0, completeQuads);
    return Buffer4.from(str3, "base64");
};
InternalEncoderBase64.prototype.end = function() {
    return Buffer4.from(this.prevStr, "base64");
};
function InternalEncoderCesu8(options2, codec) {}
InternalEncoderCesu8.prototype.write = function(str3) {
    var buf = Buffer4.alloc(str3.length * 3);
    var bufIdx = 0;
    for(var i = 0; i < str3.length; i++){
        var charCode = str3.charCodeAt(i);
        if (charCode < 128) {
            buf[bufIdx++] = charCode;
        } else if (charCode < 2048) {
            buf[bufIdx++] = 192 + (charCode >>> 6);
            buf[bufIdx++] = 128 + (charCode & 63);
        } else {
            buf[bufIdx++] = 224 + (charCode >>> 12);
            buf[bufIdx++] = 128 + (charCode >>> 6 & 63);
            buf[bufIdx++] = 128 + (charCode & 63);
        }
    }
    return buf.slice(0, bufIdx);
};
InternalEncoderCesu8.prototype.end = function() {};
function InternalDecoderCesu8(options2, codec) {
    this.acc = 0;
    this.contBytes = 0;
    this.accBytes = 0;
    this.defaultCharUnicode = codec.defaultCharUnicode;
}
InternalDecoderCesu8.prototype.write = function(buf) {
    var acc = this.acc;
    var contBytes = this.contBytes;
    var accBytes = this.accBytes;
    var res = "";
    for(var i = 0; i < buf.length; i++){
        var curByte = buf[i];
        if ((curByte & 192) !== 128) {
            if (contBytes > 0) {
                res += this.defaultCharUnicode;
                contBytes = 0;
            }
            if (curByte < 128) {
                res += String.fromCharCode(curByte);
            } else if (curByte < 224) {
                acc = curByte & 31;
                contBytes = 1;
                accBytes = 1;
            } else if (curByte < 240) {
                acc = curByte & 15;
                contBytes = 2;
                accBytes = 1;
            } else {
                res += this.defaultCharUnicode;
            }
        } else {
            if (contBytes > 0) {
                acc = acc << 6 | curByte & 63;
                contBytes--;
                accBytes++;
                if (contBytes === 0) {
                    if (accBytes === 2 && acc < 128 && acc > 0) {
                        res += this.defaultCharUnicode;
                    } else if (accBytes === 3 && acc < 2048) {
                        res += this.defaultCharUnicode;
                    } else {
                        res += String.fromCharCode(acc);
                    }
                }
            } else {
                res += this.defaultCharUnicode;
            }
        }
    }
    this.acc = acc;
    this.contBytes = contBytes;
    this.accBytes = accBytes;
    return res;
};
InternalDecoderCesu8.prototype.end = function() {
    var res = 0;
    if (this.contBytes > 0) {
        res += this.defaultCharUnicode;
    }
    return res;
};
function InternalEncoderUtf8(options2, codec) {
    this.highSurrogate = "";
}
InternalEncoderUtf8.prototype.write = function(str3) {
    if (this.highSurrogate) {
        str3 = this.highSurrogate + str3;
        this.highSurrogate = "";
    }
    if (str3.length > 0) {
        var charCode = str3.charCodeAt(str3.length - 1);
        if (charCode >= 55296 && charCode < 56320) {
            this.highSurrogate = str3[str3.length - 1];
            str3 = str3.slice(0, str3.length - 1);
        }
    }
    return Buffer4.from(str3, this.enc);
};
InternalEncoderUtf8.prototype.end = function() {
    if (this.highSurrogate) {
        var str3 = this.highSurrogate;
        this.highSurrogate = "";
        return Buffer4.from(str3, this.enc);
    }
};

return module2.exports;
}
