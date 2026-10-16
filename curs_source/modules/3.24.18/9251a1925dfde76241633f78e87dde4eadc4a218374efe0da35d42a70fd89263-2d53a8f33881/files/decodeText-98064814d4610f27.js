var __wakaru_require_decodeText_cache;
export function require_decodeText() {
if (__wakaru_require_decodeText_cache) return __wakaru_require_decodeText_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_decodeText_cache = module2;
"use strict";
var utf8Decoder = new TextDecoder("utf-8");
var textDecoders = new Map([
    [
        "utf-8",
        utf8Decoder
    ],
    [
        "utf8",
        utf8Decoder
    ]
]);
function getDecoder(charset2) {
    let lc;
    while(true){
        switch(charset2){
            case "utf-8":
            case "utf8":
                return decoders.utf8;
            case "latin1":
            case "ascii":
            case "us-ascii":
            case "iso-8859-1":
            case "iso8859-1":
            case "iso88591":
            case "iso_8859-1":
            case "windows-1252":
            case "iso_8859-1:1987":
            case "cp1252":
            case "x-cp1252":
                return decoders.latin1;
            case "utf16le":
            case "utf-16le":
            case "ucs2":
            case "ucs-2":
                return decoders.utf16le;
            case "base64":
                return decoders.base64;
            default:
                if (lc === void 0) {
                    lc = true;
                    charset2 = charset2.toLowerCase();
                    continue;
                }
                return decoders.other.bind(charset2);
        }
    }
}
var decoders = {
    utf8: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return "";
        }
        if (typeof data === "string") {
            data = Buffer.from(data, sourceEncoding);
        }
        return data.utf8Slice(0, data.length);
    },
    latin1: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return "";
        }
        if (typeof data === "string") {
            return data;
        }
        return data.latin1Slice(0, data.length);
    },
    utf16le: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return "";
        }
        if (typeof data === "string") {
            data = Buffer.from(data, sourceEncoding);
        }
        return data.ucs2Slice(0, data.length);
    },
    base64: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return "";
        }
        if (typeof data === "string") {
            data = Buffer.from(data, sourceEncoding);
        }
        return data.base64Slice(0, data.length);
    },
    other: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return "";
        }
        if (typeof data === "string") {
            data = Buffer.from(data, sourceEncoding);
        }
        if (textDecoders.has(exports2.toString())) {
            try {
                return textDecoders.get(exports2).decode(data);
            } catch  {}
        }
        return typeof data === "string" ? data : data.toString();
    }
};
function decodeText(text4, sourceEncoding, destEncoding) {
    if (text4) {
        return getDecoder(destEncoding)(text4, sourceEncoding);
    }
    return text4;
}
module2.exports = decodeText;

return module2.exports;
}
