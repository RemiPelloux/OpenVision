import { require_safer } from "../../../../safer-buffer@2.1.2/node_modules/safer-buffer/safer.js";
var __wakaru_require_utf16_cache;
export function require_utf16() {
if (__wakaru_require_utf16_cache) return __wakaru_require_utf16_cache;
var exports2 = {};
__wakaru_require_utf16_cache = exports2;
"use strict";
var Buffer4 = require_safer().Buffer;
exports2.utf16be = Utf16BECodec;
function Utf16BECodec() {}
Utf16BECodec.prototype.encoder = Utf16BEEncoder;
Utf16BECodec.prototype.decoder = Utf16BEDecoder;
Utf16BECodec.prototype.bomAware = true;
function Utf16BEEncoder() {}
Utf16BEEncoder.prototype.write = function(str3) {
    var buf = Buffer4.from(str3, "ucs2");
    for(var i = 0; i < buf.length; i += 2){
        var tmp = buf[i];
        buf[i] = buf[i + 1];
        buf[i + 1] = tmp;
    }
    return buf;
};
Utf16BEEncoder.prototype.end = function() {};
function Utf16BEDecoder() {
    this.overflowByte = -1;
}
Utf16BEDecoder.prototype.write = function(buf) {
    if (buf.length == 0) {
        return "";
    }
    var buf2 = Buffer4.alloc(buf.length + 1);
    var i = 0;
    var j2 = 0;
    if (this.overflowByte !== -1) {
        buf2[0] = buf[0];
        buf2[1] = this.overflowByte;
        i = 1;
        j2 = 2;
    }
    for(; i < buf.length - 1; i += 2, j2 += 2){
        buf2[j2] = buf[i + 1];
        buf2[j2 + 1] = buf[i];
    }
    this.overflowByte = i == buf.length - 1 ? buf[buf.length - 1] : -1;
    return buf2.slice(0, j2).toString("ucs2");
};
Utf16BEDecoder.prototype.end = function() {
    this.overflowByte = -1;
};
exports2.utf16 = Utf16Codec;
function Utf16Codec(codecOptions, iconv3) {
    this.iconv = iconv3;
}
Utf16Codec.prototype.encoder = Utf16Encoder;
Utf16Codec.prototype.decoder = Utf16Decoder;
function Utf16Encoder(options2, codec) {
    options2 = options2 || {};
    if (options2.addBOM === void 0) {
        options2.addBOM = true;
    }
    this.encoder = codec.iconv.getEncoder("utf-16le", options2);
}
Utf16Encoder.prototype.write = function(str3) {
    return this.encoder.write(str3);
};
Utf16Encoder.prototype.end = function() {
    return this.encoder.end();
};
function Utf16Decoder(options2, codec) {
    this.decoder = null;
    this.initialBufs = [];
    this.initialBufsLen = 0;
    this.options = options2 || {};
    this.iconv = codec.iconv;
}
Utf16Decoder.prototype.write = function(buf) {
    if (!this.decoder) {
        this.initialBufs.push(buf);
        this.initialBufsLen += buf.length;
        if (this.initialBufsLen < 16) {
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
Utf16Decoder.prototype.end = function() {
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
    var asciiCharsLE = 0;
    var asciiCharsBE = 0;
    outerLoop: for(var i = 0; i < bufs.length; i++){
        var buf = bufs[i];
        for(var j2 = 0; j2 < buf.length; j2++){
            b2.push(buf[j2]);
            if (b2.length === 2) {
                if (charsProcessed === 0) {
                    if (b2[0] === 255 && b2[1] === 254) return "utf-16le";
                    if (b2[0] === 254 && b2[1] === 255) return "utf-16be";
                }
                if (b2[0] === 0 && b2[1] !== 0) asciiCharsBE++;
                if (b2[0] !== 0 && b2[1] === 0) asciiCharsLE++;
                b2.length = 0;
                charsProcessed++;
                if (charsProcessed >= 100) {
                    break outerLoop;
                }
            }
        }
    }
    if (asciiCharsBE > asciiCharsLE) return "utf-16be";
    if (asciiCharsBE < asciiCharsLE) return "utf-16le";
    return defaultEncoding || "utf-16le";
}

return exports2;
}
