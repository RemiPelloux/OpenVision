var __wakaru_require_proto_base64_cache;
export function require_proto_base64() {
if (__wakaru_require_proto_base64_cache) return __wakaru_require_proto_base64_cache;
var exports2 = {};
__wakaru_require_proto_base64_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.protoBase64 = void 0;
var encTable2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
var decTable2 = [];
for(let i = 0; i < encTable2.length; i++)decTable2[encTable2[i].charCodeAt(0)] = i;
decTable2["-".charCodeAt(0)] = encTable2.indexOf("+");
decTable2["_".charCodeAt(0)] = encTable2.indexOf("/");
exports2.protoBase64 = {
    dec (base64Str) {
        let es2 = base64Str.length * 3 / 4;
        if (base64Str[base64Str.length - 2] == "=") es2 -= 2;
        else if (base64Str[base64Str.length - 1] == "=") es2 -= 1;
        let bytes = new Uint8Array(es2), bytePos = 0, groupPos = 0, b2, p2 = 0;
        for(let i = 0; i < base64Str.length; i++){
            b2 = decTable2[base64Str.charCodeAt(i)];
            if (b2 === void 0) {
                switch(base64Str[i]){
                    case "=":
                        groupPos = 0;
                    case "\n":
                    case "\r":
                    case "	":
                    case " ":
                        continue;
                    default:
                        throw Error("invalid base64 string.");
                }
            }
            switch(groupPos){
                case 0:
                    p2 = b2;
                    groupPos = 1;
                    break;
                case 1:
                    bytes[bytePos++] = p2 << 2 | (b2 & 48) >> 4;
                    p2 = b2;
                    groupPos = 2;
                    break;
                case 2:
                    bytes[bytePos++] = (p2 & 15) << 4 | (b2 & 60) >> 2;
                    p2 = b2;
                    groupPos = 3;
                    break;
                case 3:
                    bytes[bytePos++] = (p2 & 3) << 6 | b2;
                    groupPos = 0;
                    break;
            }
        }
        if (groupPos == 1) throw Error("invalid base64 string.");
        return bytes.subarray(0, bytePos);
    },
    enc (bytes) {
        let base642 = "", groupPos = 0, b2, p2 = 0;
        for(let i = 0; i < bytes.length; i++){
            b2 = bytes[i];
            switch(groupPos){
                case 0:
                    base642 += encTable2[b2 >> 2];
                    p2 = (b2 & 3) << 4;
                    groupPos = 1;
                    break;
                case 1:
                    base642 += encTable2[p2 | b2 >> 4];
                    p2 = (b2 & 15) << 2;
                    groupPos = 2;
                    break;
                case 2:
                    base642 += encTable2[p2 | b2 >> 6];
                    base642 += encTable2[b2 & 63];
                    groupPos = 0;
                    break;
            }
        }
        if (groupPos) {
            base642 += encTable2[p2];
            base642 += "=";
            if (groupPos == 1) base642 += "=";
        }
        return base642;
    }
};

return exports2;
}
