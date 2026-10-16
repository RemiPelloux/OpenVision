import { require_constants6 } from "./constants.js";
var __wakaru_require_frame_cache;
export function require_frame() {
if (__wakaru_require_frame_cache) return __wakaru_require_frame_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_frame_cache = module2;
"use strict";
var { maxUnsigned16Bit } = require_constants6();
var crypto8;
try {
    crypto8 = require("crypto");
} catch  {}
var WebsocketFrameSend = class {
    constructor(data){
        this.frameData = data;
        this.maskKey = crypto8.randomBytes(4);
    }
    createFrame(opcode) {
        const bodyLength = this.frameData?.byteLength ?? 0;
        let payloadLength = bodyLength;
        let offset = 6;
        if (bodyLength > maxUnsigned16Bit) {
            offset += 8;
            payloadLength = 127;
        } else if (bodyLength > 125) {
            offset += 2;
            payloadLength = 126;
        }
        const buffer = Buffer.allocUnsafe(bodyLength + offset);
        buffer[0] = buffer[1] = 0;
        buffer[0] |= 128;
        buffer[0] = (buffer[0] & 240) + opcode;
        buffer[offset - 4] = this.maskKey[0];
        buffer[offset - 3] = this.maskKey[1];
        buffer[offset - 2] = this.maskKey[2];
        buffer[offset - 1] = this.maskKey[3];
        buffer[1] = payloadLength;
        if (payloadLength === 126) {
            buffer.writeUInt16BE(bodyLength, 2);
        } else if (payloadLength === 127) {
            buffer[2] = buffer[3] = 0;
            buffer.writeUIntBE(bodyLength, 4, 6);
        }
        buffer[1] |= 128;
        for(let i = 0; i < bodyLength; i++){
            buffer[offset + i] = this.frameData[i] ^ this.maskKey[i % 4];
        }
        return buffer;
    }
};
module2.exports = {
    WebsocketFrameSend
};

return module2.exports;
}
