"use strict";
const { maxUnsigned16Bit: r } = require("./module-85440.js");
let s;
try {
    s = require(76982);
} catch  {}
module.exports = {
    WebsocketFrameSend: class {
        constructor(A){
            this.frameData = A, this.maskKey = s.randomBytes(4);
        }
        createFrame(A) {
            const e = this.frameData?.byteLength ?? 0;
            let t = e, s = 6;
            e > r ? (s += 8, t = 127) : e > 125 && (s += 2, t = 126);
            const o = Buffer.allocUnsafe(e + s);
            o[0] = o[1] = 0, o[0] |= 128, o[0] = (240 & o[0]) + A, o[s - 4] = this.maskKey[0], o[s - 3] = this.maskKey[1], o[s - 2] = this.maskKey[2], o[s - 1] = this.maskKey[3], o[1] = t, 126 === t ? o.writeUInt16BE(e, 2) : 127 === t && (o[2] = o[3] = 0, o.writeUIntBE(e, 4, 6)), o[1] |= 128;
            for(let A = 0; A < e; A++)o[s + A] = this.frameData[A] ^ this.maskKey[A % 4];
            return o;
        }
    }
};
