var __wakaru_require_buffer2_cache;
export function require_buffer2() {
if (__wakaru_require_buffer2_cache) return __wakaru_require_buffer2_cache;
var exports2 = {};
__wakaru_require_buffer2_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.decodeBase64 = decodeBase64;
exports2.decodeJwt = decodeJwt2;
var utf8Decoder = new TextDecoder();
function decodeBase64(encoded) {
    let building = 0;
    let remainder = 0;
    let bufi = 0;
    const buffer = new Uint8Array(Math.floor(encoded.length / 4 * 3));
    const append = (value)=>{
        switch(remainder){
            case 3:
                buffer[bufi++] = building | value;
                remainder = 0;
                break;
            case 2:
                buffer[bufi++] = building | value >>> 2;
                building = value << 6;
                remainder = 3;
                break;
            case 1:
                buffer[bufi++] = building | value >>> 4;
                building = value << 4;
                remainder = 2;
                break;
            default:
                building = value << 2;
                remainder = 1;
        }
    };
    for(let i = 0; i < encoded.length; i++){
        const code = encoded.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            append(code - 65);
        } else if (code >= 97 && code <= 122) {
            append(code - 97 + 26);
        } else if (code >= 48 && code <= 57) {
            append(code - 48 + 52);
        } else if (code === 43 || code === 45) {
            append(62);
        } else if (code === 47 || code === 95) {
            append(63);
        } else if (code === 61) {
            break;
        } else {
            throw new SyntaxError(`Unexpected base64 character ${encoded[i]}`);
        }
    }
    const unpadded = bufi;
    while(remainder > 0){
        append(0);
    }
    return buffer.subarray(0, unpadded);
}
function decodeJwt2(accessToken) {
    const base64Payload = accessToken.split(".")[1];
    const payloadBuffer = decodeBase64(base64Payload);
    return JSON.parse(utf8Decoder.decode(payloadBuffer));
}

return exports2;
}
