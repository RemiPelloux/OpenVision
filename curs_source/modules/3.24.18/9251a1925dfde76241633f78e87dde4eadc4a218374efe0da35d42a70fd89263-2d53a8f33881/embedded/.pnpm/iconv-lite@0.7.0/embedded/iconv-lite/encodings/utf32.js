import { require_safer } from "../../../../safer-buffer@2.1.2/node_modules/safer-buffer/safer.js";
var __wakaru_require_utf32_cache;
export function require_utf32() {
if (__wakaru_require_utf32_cache) return __wakaru_require_utf32_cache;
var exports2 = {};
__wakaru_require_utf32_cache = exports2;
"use strict";
var Buffer4 = require_safer().Buffer;
exports2._utf32 = Utf32Codec;
function Utf32Codec(codecOptions, iconv3) {
    this.iconv = iconv3;
    this.bomAware = true;
    this.isLE = codecOptions.isLE;
}
exports2.utf32le = {
    type: "_utf32",
    isLE: true
};
exports2.utf32be = {
    type: "_utf32",
    isLE: false
};
exports2.ucs4le = "utf32le";
exports2.ucs4be = "utf32be";
Utf32Codec.prototype.encoder = Utf32Encoder;
Utf32Codec.prototype.decoder = Utf32Decoder;
function Utf32Encoder(options2, codec) {
    this.isLE = codec.isLE;
    this.highSurrogate = 0;
}
Utf32Encoder.prototype.write = function(str3) {
    var src = Buffer4.from(str3, "ucs2");
    var dst = Buffer4.alloc(src.length * 2);
    var write32 = this.isLE ? dst.writeUInt32LE : dst.writeUInt32BE;
    var offset = 0;
    for(var i = 0; i < src.length; i += 2){
        var code = src.readUInt16LE(i);
        var isHighSurrogate = code >= 55296 && code < 56320;
        var isLowSurrogate = code >= 56320 && code < 57344;
        if (this.highSurrogate) {
            if (isHighSurrogate || !isLowSurrogate) {
                write32.call(dst, this.highSurrogate, offset);
                offset += 4;
            } else {
                var codepoint = (this.highSurrogate - 55296 << 10 | code - 56320) + 65536;
                write32.call(dst, codepoint, offset);
                offset += 4;
                this.highSurrogate = 0;
                continue;
            }
        }
        if (isHighSurrogate) {
            this.highSurrogate = code;
        } else {
            write32.call(dst, code, offset);
            offset += 4;
            this.highSurrogate = 0;
        }
    }
    if (offset < dst.length) {
        dst = dst.slice(0, offset);
    }
    return dst;
};
Utf32Encoder.prototype.end = function() {
    if (!this.highSurrogate) {
        return;
    }
    var buf = Buffer4.alloc(4);
    if (this.isLE) {
        buf.writeUInt32LE(this.highSurrogate, 0);
    } else {
        buf.writeUInt32BE(this.highSurrogate, 0);
    }
    this.highSurrogate = 0;
    return buf;
};
function Utf32Decoder(options2, codec) {
    this.isLE = codec.isLE;
    this.badChar = codec.iconv.defaultCharUnicode.charCodeAt(0);
    this.overflow = [];
}
Utf32Decoder.prototype.write = function(src) {
    if (src.length === 0) {
        return "";
    }
    var i = 0;
    var codepoint = 0;
    var dst = Buffer4.alloc(src.length + 4);
    var offset = 0;
    var isLE = this.isLE;
    var overflow = this.overflow;
    var badChar = this.badChar;
    if (overflow.length > 0) {
        for(; i < src.length && overflow.length < 4; i++){
            overflow.push(src[i]);
        }
        if (overflow.length === 4) {
            if (isLE) {
                codepoint = overflow[i] | overflow[i + 1] << 8 | overflow[i + 2] << 16 | overflow[i + 3] << 24;
            } else {
                codepoint = overflow[i + 3] | overflow[i + 2] << 8 | overflow[i + 1] << 16 | overflow[i] << 24;
            }
            overflow.length = 0;
            offset = _writeCodepoint(dst, offset, codepoint, badChar);
        }
    }
    for(; i < src.length - 3; i += 4){
        if (isLE) {
            codepoint = src[i] | src[i + 1] << 8 | src[i + 2] << 16 | src[i + 3] << 24;
        } else {
            codepoint = src[i + 3] | src[i + 2] << 8 | src[i + 1] << 16 | src[i] << 24;
        }
        offset = _writeCodepoint(dst, offset, codepoint, badChar);
    }
    for(; i < src.length; i++){
        overflow.push(src[i]);
    }
    return dst.slice(0, offset).toString("ucs2");
};
function _writeCodepoint(dst, offset, codepoint, badChar) {
    if (codepoint < 0 || codepoint > 1114111) {
        codepoint = badChar;
    }
    if (codepoint >= 65536) {
        codepoint -= 65536;
        var high = 55296 | codepoint >> 10;
        dst[offset++] = high & 255;
        dst[offset++] = high >> 8;
        var codepoint = 56320 | codepoint & 1023;
    }
    dst[offset++] = codepoint & 255;
    dst[offset++] = codepoint >> 8;
    return offset;
}
Utf32Decoder.prototype.end = function() {
    this.overflow.length = 0;
};
exports2.utf32 = Utf32AutoCodec;
exports2.ucs4 = "utf32";
function Utf32AutoCodec(options2, iconv3) {
    this.iconv = iconv3;
}
Utf32AutoCodec.prototype.encoder = Utf32AutoEncoder;
Utf32AutoCodec.prototype.decoder = Utf32AutoDecoder;
function Utf32AutoEncoder(options2, codec) {
    options2 = options2 || {};
    if (options2.addBOM === void 0) {
        options2.addBOM = true;
    }
    this.encoder = codec.iconv.getEncoder(options2.defaultEncoding || "utf-32le", options2);
}
Utf32AutoEncoder.prototype.write = function(str3) {
    return this.encoder.write(str3);
};
Utf32AutoEncoder.prototype.end = function() {
    return this.encoder.end();
};
function Utf32AutoDecoder(options2, codec) {
    this.decoder = null;
    this.initialBufs = [];
    this.initialBufsLen = 0;
    this.options = options2 || {};
    this.iconv = codec.iconv;
}
Utf32AutoDecoder.prototype.write = function(buf) {
    if (!this.decoder) {
        this.initialBufs.push(buf);
        this.initialBufsLen += buf.length;
        if (this.initialBufsLen < 32) {
            return "";
        }
        var encoding = detectEncoding(this.initialBufs, this.options.defaultEncoding);
        this.decoder = this.iconv.getDecoder(encoding, this.options);
        var resStr = "";
        for(var i = 0; i < this.initialBufs.length; i++){
            resStr += this.decoder.write(this.initialBufs[i]);
        }
        this.initialBufs.length = this.initialBufsLen = 0;
        return resStr;
    }
    return this.decoder.write(buf);
};
Utf32AutoDecoder.prototype.end = function() {
    if (!this.decoder) {
        var encoding = detectEncoding(this.initialBufs, this.options.defaultEncoding);
        this.decoder = this.iconv.getDecoder(encoding, this.options);
        var resStr = "";
        for(var i = 0; i < this.initialBufs.length; i++){
            resStr += this.decoder.write(this.initialBufs[i]);
        }
        var trail = this.decoder.end();
        if (trail) {
            resStr += trail;
        }
        this.initialBufs.length = this.initialBufsLen = 0;
        return resStr;
    }
    return this.decoder.end();
};
function detectEncoding(bufs, defaultEncoding) {
    var b2 = [];
    var charsProcessed = 0;
    var invalidLE = 0;
    var invalidBE = 0;
    var bmpCharsLE = 0;
    var bmpCharsBE = 0;
    outerLoop: for(var i = 0; i < bufs.length; i++){
        var buf = bufs[i];
        for(var j2 = 0; j2 < buf.length; j2++){
            b2.push(buf[j2]);
            if (b2.length === 4) {
                if (charsProcessed === 0) {
                    if (b2[0] === 255 && b2[1] === 254 && b2[2] === 0 && b2[3] === 0) {
                        return "utf-32le";
                    }
                    if (b2[0] === 0 && b2[1] === 0 && b2[2] === 254 && b2[3] === 255) {
                        return "utf-32be";
                    }
                }
                if (b2[0] !== 0 || b2[1] > 16) invalidBE++;
                if (b2[3] !== 0 || b2[2] > 16) invalidLE++;
                if (b2[0] === 0 && b2[1] === 0 && (b2[2] !== 0 || b2[3] !== 0)) bmpCharsBE++;
                if ((b2[0] !== 0 || b2[1] !== 0) && b2[2] === 0 && b2[3] === 0) bmpCharsLE++;
                b2.length = 0;
                charsProcessed++;
                if (charsProcessed >= 100) {
                    break outerLoop;
                }
            }
        }
    }
    if (bmpCharsBE - invalidBE > bmpCharsLE - invalidLE) return "utf-32be";
    if (bmpCharsBE - invalidBE < bmpCharsLE - invalidLE) return "utf-32le";
    return defaultEncoding || "utf-32le";
}

return exports2;
}
