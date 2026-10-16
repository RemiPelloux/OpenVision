import { require_constants13 } from "./constants.js";
var __wakaru_require_frame2_cache;
export function require_frame2() {
if (__wakaru_require_frame2_cache) return __wakaru_require_frame2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_frame2_cache = module2;
"use strict";
var { maxUnsigned16Bit } = require_constants13();
var BUFFER_SIZE = 16386;
var crypto8;
var buffer = null;
var bufIdx = BUFFER_SIZE;
try {
    crypto8 = require("node:crypto");
} catch  {
    crypto8 = {
        randomFillSync: function randomFillSync(buffer2, _offset, _size2) {
            for(let i = 0; i < buffer2.length; ++i){
                buffer2[i] = Math.random() * 255 | 0;
            }
            return buffer2;
        }
    };
}
function generateMask() {
    if (bufIdx === BUFFER_SIZE) {
        bufIdx = 0;
        crypto8.randomFillSync(buffer ??= Buffer.allocUnsafe(BUFFER_SIZE), 0, BUFFER_SIZE);
    }
    return [
        buffer[bufIdx++],
        buffer[bufIdx++],
        buffer[bufIdx++],
        buffer[bufIdx++]
    ];
}
var WebsocketFrameSend = class {
    constructor(data){
        this.frameData = data;
    }
    createFrame(opcode) {
        const frameData = this.frameData;
        const maskKey = generateMask();
        const bodyLength = frameData?.byteLength ?? 0;
        let payloadLength = bodyLength;
        let offset = 6;
        if (bodyLength > maxUnsigned16Bit) {
            offset += 8;
            payloadLength = 127;
        } else if (bodyLength > 125) {
            offset += 2;
            payloadLength = 126;
        }
        const buffer2 = Buffer.allocUnsafe(bodyLength + offset);
        buffer2[0] = buffer2[1] = 0;
        buffer2[0] |= 128;
        buffer2[0] = (buffer2[0] & 240) + opcode;
        buffer2[offset - 4] = maskKey[0];
        buffer2[offset - 3] = maskKey[1];
        buffer2[offset - 2] = maskKey[2];
        buffer2[offset - 1] = maskKey[3];
        buffer2[1] = payloadLength;
        if (payloadLength === 126) {
            buffer2.writeUInt16BE(bodyLength, 2);
        } else if (payloadLength === 127) {
            buffer2[2] = buffer2[3] = 0;
            buffer2.writeUIntBE(bodyLength, 4, 6);
        }
        buffer2[1] |= 128;
        for(let i = 0; i < bodyLength; ++i){
            buffer2[offset + i] = frameData[i] ^ maskKey[i & 3];
        }
        return buffer2;
    }
};
module2.exports = {
    WebsocketFrameSend
};

return module2.exports;
}
