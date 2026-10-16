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
            const a = this.frameData?.byteLength ?? 0;
            let n = a, s = 6;
            a > t ? (s += 8, n = 127) : a > 125 && (s += 2, n = 126);
            const o = Buffer.allocUnsafe(a + s);
            o[0] = o[1] = 0, o[0] |= 128, o[0] = (240 & o[0]) + e, o[s - 4] = this.maskKey[0], o[s - 3] = this.maskKey[1], o[s - 2] = this.maskKey[2], o[s - 1] = this.maskKey[3], o[1] = n, 126 === n ? o.writeUInt16BE(a, 2) : 127 === n && (o[2] = o[3] = 0, o.writeUIntBE(a, 4, 6)), o[1] |= 128;
            for(let e = 0; e < a; e++)o[s + e] = this.frameData[e] ^ this.maskKey[e % 4];
            return o;
        }
    }
};
