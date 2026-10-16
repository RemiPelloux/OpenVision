"use strict";
const { maxUnsigned16Bit: n } = require("./module-5440.js");
let r;
try {
    r = require("./module-6982.js");
} catch  {}
module.exports = {
    WebsocketFrameSend: class {
        constructor(e){
            this.frameData = e, this.maskKey = r.randomBytes(4);
        }
        createFrame(e) {
            const t = this.frameData?.byteLength ?? 0;
            let A = t, r = 6;
            t > n ? (r += 8, A = 127) : t > 125 && (r += 2, A = 126);
            const o = Buffer.allocUnsafe(t + r);
            o[0] = o[1] = 0, o[0] |= 128, o[0] = (240 & o[0]) + e, o[r - 4] = this.maskKey[0], o[r - 3] = this.maskKey[1], o[r - 2] = this.maskKey[2], o[r - 1] = this.maskKey[3], o[1] = A, 126 === A ? o.writeUInt16BE(t, 2) : 127 === A && (o[2] = o[3] = 0, o.writeUIntBE(t, 4, 6)), o[1] |= 128;
            for(let e = 0; e < t; e++)o[r + e] = this.frameData[e] ^ this.maskKey[e % 4];
            return o;
        }
    }
};
