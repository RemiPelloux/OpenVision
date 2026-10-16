import { require_safer } from "../../../../safer-buffer@2.1.2/node_modules/safer-buffer/safer.js";
var __wakaru_require_sbcs_codec_cache;
export function require_sbcs_codec() {
if (__wakaru_require_sbcs_codec_cache) return __wakaru_require_sbcs_codec_cache;
var exports2 = {};
__wakaru_require_sbcs_codec_cache = exports2;
"use strict";
var Buffer4 = require_safer().Buffer;
exports2._sbcs = SBCSCodec;
function SBCSCodec(codecOptions, iconv3) {
    if (!codecOptions) {
        throw new Error("SBCS codec is called without the data.");
    }
    if (!codecOptions.chars || codecOptions.chars.length !== 128 && codecOptions.chars.length !== 256) {
        throw new Error("Encoding '" + codecOptions.type + "' has incorrect 'chars' (must be of len 128 or 256)");
    }
    if (codecOptions.chars.length === 128) {
        var asciiString = "";
        for(var i = 0; i < 128; i++){
            asciiString += String.fromCharCode(i);
        }
        codecOptions.chars = asciiString + codecOptions.chars;
    }
    this.decodeBuf = Buffer4.from(codecOptions.chars, "ucs2");
    var encodeBuf = Buffer4.alloc(65536, iconv3.defaultCharSingleByte.charCodeAt(0));
    for(var i = 0; i < codecOptions.chars.length; i++){
        encodeBuf[codecOptions.chars.charCodeAt(i)] = i;
    }
    this.encodeBuf = encodeBuf;
}
SBCSCodec.prototype.encoder = SBCSEncoder;
SBCSCodec.prototype.decoder = SBCSDecoder;
function SBCSEncoder(options2, codec) {
    this.encodeBuf = codec.encodeBuf;
}
SBCSEncoder.prototype.write = function(str3) {
    var buf = Buffer4.alloc(str3.length);
    for(var i = 0; i < str3.length; i++){
        buf[i] = this.encodeBuf[str3.charCodeAt(i)];
    }
    return buf;
};
SBCSEncoder.prototype.end = function() {};
function SBCSDecoder(options2, codec) {
    this.decodeBuf = codec.decodeBuf;
}
SBCSDecoder.prototype.write = function(buf) {
    var decodeBuf = this.decodeBuf;
    var newBuf = Buffer4.alloc(buf.length * 2);
    var idx1 = 0;
    var idx2 = 0;
    for(var i = 0; i < buf.length; i++){
        idx1 = buf[i] * 2;
        idx2 = i * 2;
        newBuf[idx2] = decodeBuf[idx1];
        newBuf[idx2 + 1] = decodeBuf[idx1 + 1];
    }
    return newBuf.toString("ucs2");
};
SBCSDecoder.prototype.end = function() {};

return exports2;
}
