import { require_encodings } from "../encodings/index.js";
import { require_bom_handling } from "./bom-handling.js";
import { require_merge_exports } from "./helpers/merge-exports.js";
import { require_streams } from "./streams.js";
import { require_safer } from "../../../../safer-buffer@2.1.2/node_modules/safer-buffer/safer.js";
var __wakaru_require_lib_cache;
export function require_lib() {
if (__wakaru_require_lib_cache) return __wakaru_require_lib_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_lib_cache = module2;
"use strict";
var Buffer4 = require_safer().Buffer;
var bomHandling = require_bom_handling();
var mergeModules = require_merge_exports();
var iconv3 = module2.exports;
iconv3.encodings = null;
iconv3.defaultCharUnicode = "\uFFFD";
iconv3.defaultCharSingleByte = "?";
iconv3.encode = function encode3(str3, encoding, options2) {
    str3 = "" + (str3 || "");
    var encoder2 = iconv3.getEncoder(encoding, options2);
    var res = encoder2.write(str3);
    var trail = encoder2.end();
    return trail && trail.length > 0 ? Buffer4.concat([
        res,
        trail
    ]) : res;
};
iconv3.decode = function decode4(buf, encoding, options2) {
    if (typeof buf === "string") {
        if (!iconv3.skipDecodeWarning) {
            console.error("Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding");
            iconv3.skipDecodeWarning = true;
        }
        buf = Buffer4.from("" + (buf || ""), "binary");
    }
    var decoder2 = iconv3.getDecoder(encoding, options2);
    var res = decoder2.write(buf);
    var trail = decoder2.end();
    return trail ? res + trail : res;
};
iconv3.encodingExists = function encodingExists(enc) {
    try {
        iconv3.getCodec(enc);
        return true;
    } catch (e) {
        return false;
    }
};
iconv3.toEncoding = iconv3.encode;
iconv3.fromEncoding = iconv3.decode;
iconv3._codecDataCache = {
    __proto__: null
};
iconv3.getCodec = function getCodec(encoding) {
    if (!iconv3.encodings) {
        var raw = require_encodings();
        iconv3.encodings = {
            __proto__: null
        };
        mergeModules(iconv3.encodings, raw);
    }
    var enc = iconv3._canonicalizeEncoding(encoding);
    var codecOptions = {};
    while(true){
        var codec = iconv3._codecDataCache[enc];
        if (codec) {
            return codec;
        }
        var codecDef = iconv3.encodings[enc];
        switch(typeof codecDef){
            case "string":
                enc = codecDef;
                break;
            case "object":
                for(var key in codecDef){
                    codecOptions[key] = codecDef[key];
                }
                if (!codecOptions.encodingName) {
                    codecOptions.encodingName = enc;
                }
                enc = codecDef.type;
                break;
            case "function":
                if (!codecOptions.encodingName) {
                    codecOptions.encodingName = enc;
                }
                codec = new codecDef(codecOptions, iconv3);
                iconv3._codecDataCache[codecOptions.encodingName] = codec;
                return codec;
            default:
                throw new Error("Encoding not recognized: '" + encoding + "' (searched as: '" + enc + "')");
        }
    }
};
iconv3._canonicalizeEncoding = function(encoding) {
    return ("" + encoding).toLowerCase().replace(/:\d{4}$|[^0-9a-z]/g, "");
};
iconv3.getEncoder = function getEncoder(encoding, options2) {
    var codec = iconv3.getCodec(encoding);
    var encoder2 = new codec.encoder(options2, codec);
    if (codec.bomAware && options2 && options2.addBOM) {
        encoder2 = new bomHandling.PrependBOM(encoder2, options2);
    }
    return encoder2;
};
iconv3.getDecoder = function getDecoder(encoding, options2) {
    var codec = iconv3.getCodec(encoding);
    var decoder2 = new codec.decoder(options2, codec);
    if (codec.bomAware && !(options2 && options2.stripBOM === false)) {
        decoder2 = new bomHandling.StripBOM(decoder2, options2);
    }
    return decoder2;
};
iconv3.enableStreamingAPI = function enableStreamingAPI(streamModule2) {
    if (iconv3.supportsStreams) {
        return;
    }
    var streams = require_streams()(streamModule2);
    iconv3.IconvLiteEncoderStream = streams.IconvLiteEncoderStream;
    iconv3.IconvLiteDecoderStream = streams.IconvLiteDecoderStream;
    iconv3.encodeStream = function encodeStream(encoding, options2) {
        return new iconv3.IconvLiteEncoderStream(iconv3.getEncoder(encoding, options2), options2);
    };
    iconv3.decodeStream = function decodeStream(encoding, options2) {
        return new iconv3.IconvLiteDecoderStream(iconv3.getDecoder(encoding, options2), options2);
    };
    iconv3.supportsStreams = true;
};
var streamModule;
try {
    streamModule = require("stream");
} catch (e) {}
if (streamModule && streamModule.Transform) {
    iconv3.enableStreamingAPI(streamModule);
} else {
    iconv3.encodeStream = iconv3.decodeStream = function() {
        throw new Error("iconv-lite Streaming API is not enabled. Use iconv.enableStreamingAPI(require('stream')); to enable it.");
    };
}
if (false) {
    console.error("iconv-lite warning: js files use non-utf8 encoding. See https://github.com/ashtuchkin/iconv-lite/wiki/Javascript-source-file-encodings for more info.");
}

return module2.exports;
}
