import { require_safer } from "../../../../safer-buffer@2.1.2/node_modules/safer-buffer/safer.js";
var __wakaru_require_utf7_cache;
export function require_utf7() {
if (__wakaru_require_utf7_cache) return __wakaru_require_utf7_cache;
var exports2 = {};
__wakaru_require_utf7_cache = exports2;
"use strict";
var Buffer4 = require_safer().Buffer;
exports2.utf7 = Utf7Codec;
exports2.unicode11utf7 = "utf7";
function Utf7Codec(codecOptions, iconv3) {
    this.iconv = iconv3;
}
Utf7Codec.prototype.encoder = Utf7Encoder;
Utf7Codec.prototype.decoder = Utf7Decoder;
Utf7Codec.prototype.bomAware = true;
var nonDirectChars = /[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g;
function Utf7Encoder(options2, codec) {
    this.iconv = codec.iconv;
}
Utf7Encoder.prototype.write = function(str3) {
    return Buffer4.from(str3.replace(nonDirectChars, function(chunk) {
        return "+" + (chunk === "+" ? "" : this.iconv.encode(chunk, "utf16-be").toString("base64").replace(/=+$/, "")) + "-";
    }.bind(this)));
};
Utf7Encoder.prototype.end = function() {};
function Utf7Decoder(options2, codec) {
    this.iconv = codec.iconv;
    this.inBase64 = false;
    this.base64Accum = "";
}
var base64Regex2 = /[A-Za-z0-9\/+]/;
var base64Chars = [];
for(i = 0; i < 256; i++){
    base64Chars[i] = base64Regex2.test(String.fromCharCode(i));
}
var i;
var plusChar = "+".charCodeAt(0);
var minusChar = "-".charCodeAt(0);
var andChar = "&".charCodeAt(0);
Utf7Decoder.prototype.write = function(buf) {
    var res = "";
    var lastI = 0;
    var inBase64 = this.inBase64;
    var base64Accum = this.base64Accum;
    for(var i2 = 0; i2 < buf.length; i2++){
        if (!inBase64) {
            if (buf[i2] == plusChar) {
                res += this.iconv.decode(buf.slice(lastI, i2), "ascii");
                lastI = i2 + 1;
                inBase64 = true;
            }
        } else {
            if (!base64Chars[buf[i2]]) {
                if (i2 == lastI && buf[i2] == minusChar) {
                    res += "+";
                } else {
                    var b64str = base64Accum + this.iconv.decode(buf.slice(lastI, i2), "ascii");
                    res += this.iconv.decode(Buffer4.from(b64str, "base64"), "utf16-be");
                }
                if (buf[i2] != minusChar) {
                    i2--;
                }
                lastI = i2 + 1;
                inBase64 = false;
                base64Accum = "";
            }
        }
    }
    if (!inBase64) {
        res += this.iconv.decode(buf.slice(lastI), "ascii");
    } else {
        var b64str = base64Accum + this.iconv.decode(buf.slice(lastI), "ascii");
        var canBeDecoded = b64str.length - b64str.length % 8;
        base64Accum = b64str.slice(canBeDecoded);
        b64str = b64str.slice(0, canBeDecoded);
        res += this.iconv.decode(Buffer4.from(b64str, "base64"), "utf16-be");
    }
    this.inBase64 = inBase64;
    this.base64Accum = base64Accum;
    return res;
};
Utf7Decoder.prototype.end = function() {
    var res = "";
    if (this.inBase64 && this.base64Accum.length > 0) {
        res = this.iconv.decode(Buffer4.from(this.base64Accum, "base64"), "utf16-be");
    }
    this.inBase64 = false;
    this.base64Accum = "";
    return res;
};
exports2.utf7imap = Utf7IMAPCodec;
function Utf7IMAPCodec(codecOptions, iconv3) {
    this.iconv = iconv3;
}
Utf7IMAPCodec.prototype.encoder = Utf7IMAPEncoder;
Utf7IMAPCodec.prototype.decoder = Utf7IMAPDecoder;
Utf7IMAPCodec.prototype.bomAware = true;
function Utf7IMAPEncoder(options2, codec) {
    this.iconv = codec.iconv;
    this.inBase64 = false;
    this.base64Accum = Buffer4.alloc(6);
    this.base64AccumIdx = 0;
}
Utf7IMAPEncoder.prototype.write = function(str3) {
    var inBase64 = this.inBase64;
    var base64Accum = this.base64Accum;
    var base64AccumIdx = this.base64AccumIdx;
    var buf = Buffer4.alloc(str3.length * 5 + 10);
    var bufIdx = 0;
    for(var i2 = 0; i2 < str3.length; i2++){
        var uChar = str3.charCodeAt(i2);
        if (uChar >= 32 && uChar <= 126) {
            if (inBase64) {
                if (base64AccumIdx > 0) {
                    bufIdx += buf.write(base64Accum.slice(0, base64AccumIdx).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), bufIdx);
                    base64AccumIdx = 0;
                }
                buf[bufIdx++] = minusChar;
                inBase64 = false;
            }
            if (!inBase64) {
                buf[bufIdx++] = uChar;
                if (uChar === andChar) {
                    buf[bufIdx++] = minusChar;
                }
            }
        } else {
            if (!inBase64) {
                buf[bufIdx++] = andChar;
                inBase64 = true;
            }
            if (inBase64) {
                base64Accum[base64AccumIdx++] = uChar >> 8;
                base64Accum[base64AccumIdx++] = uChar & 255;
                if (base64AccumIdx == base64Accum.length) {
                    bufIdx += buf.write(base64Accum.toString("base64").replace(/\//g, ","), bufIdx);
                    base64AccumIdx = 0;
                }
            }
        }
    }
    this.inBase64 = inBase64;
    this.base64AccumIdx = base64AccumIdx;
    return buf.slice(0, bufIdx);
};
Utf7IMAPEncoder.prototype.end = function() {
    var buf = Buffer4.alloc(10);
    var bufIdx = 0;
    if (this.inBase64) {
        if (this.base64AccumIdx > 0) {
            bufIdx += buf.write(this.base64Accum.slice(0, this.base64AccumIdx).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), bufIdx);
            this.base64AccumIdx = 0;
        }
        buf[bufIdx++] = minusChar;
        this.inBase64 = false;
    }
    return buf.slice(0, bufIdx);
};
function Utf7IMAPDecoder(options2, codec) {
    this.iconv = codec.iconv;
    this.inBase64 = false;
    this.base64Accum = "";
}
var base64IMAPChars = base64Chars.slice();
base64IMAPChars[",".charCodeAt(0)] = true;
Utf7IMAPDecoder.prototype.write = function(buf) {
    var res = "";
    var lastI = 0;
    var inBase64 = this.inBase64;
    var base64Accum = this.base64Accum;
    for(var i2 = 0; i2 < buf.length; i2++){
        if (!inBase64) {
            if (buf[i2] == andChar) {
                res += this.iconv.decode(buf.slice(lastI, i2), "ascii");
                lastI = i2 + 1;
                inBase64 = true;
            }
        } else {
            if (!base64IMAPChars[buf[i2]]) {
                if (i2 == lastI && buf[i2] == minusChar) {
                    res += "&";
                } else {
                    var b64str = base64Accum + this.iconv.decode(buf.slice(lastI, i2), "ascii").replace(/,/g, "/");
                    res += this.iconv.decode(Buffer4.from(b64str, "base64"), "utf16-be");
                }
                if (buf[i2] != minusChar) {
                    i2--;
                }
                lastI = i2 + 1;
                inBase64 = false;
                base64Accum = "";
            }
        }
    }
    if (!inBase64) {
        res += this.iconv.decode(buf.slice(lastI), "ascii");
    } else {
        var b64str = base64Accum + this.iconv.decode(buf.slice(lastI), "ascii").replace(/,/g, "/");
        var canBeDecoded = b64str.length - b64str.length % 8;
        base64Accum = b64str.slice(canBeDecoded);
        b64str = b64str.slice(0, canBeDecoded);
        res += this.iconv.decode(Buffer4.from(b64str, "base64"), "utf16-be");
    }
    this.inBase64 = inBase64;
    this.base64Accum = base64Accum;
    return res;
};
Utf7IMAPDecoder.prototype.end = function() {
    var res = "";
    if (this.inBase64 && this.base64Accum.length > 0) {
        res = this.iconv.decode(Buffer4.from(this.base64Accum, "base64"), "utf16-be");
    }
    this.inBase64 = false;
    this.base64Accum = "";
    return res;
};

return exports2;
}
