"use strict";
const { maxUnsigned16Bit: t } = require("./module-5440.js");
let s;
try {
    s = require("./module-6982.js");
} catch  {}
module.exports = {
    WebsocketFrameSend: class {
        constructor(e){
            this.frameData = e, this.maskKey = s.randomBytes(4);
        }
        createFrame(e) {
            const n = this.frameData?.byteLength ?? 0;
            let a = n, s = 6;
            n > t ? (s += 8, a = 127) : n > 125 && (s += 2, a = 126);
            const o = Buffer.allocUnsafe(n + s);
            o[0] = o[1] = 0, o[0] |= 128, o[0] = (240 & o[0]) + e, o[s - 4] = this.maskKey[0], o[s - 3] = this.maskKey[1], o[s - 2] = this.maskKey[2], o[s - 1] = this.maskKey[3], o[1] = a, 126 === a ? o.writeUInt16BE(n, 2) : 127 === a && (o[2] = o[3] = 0, o.writeUIntBE(n, 4, 6)), o[1] |= 128;
            for(let e = 0; e < n; e++)o[s + e] = this.frameData[e] ^ this.maskKey[e % 4];
            return o;
        }
    }
};
