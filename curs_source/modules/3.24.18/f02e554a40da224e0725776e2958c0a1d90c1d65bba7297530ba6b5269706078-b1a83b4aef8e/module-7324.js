"use strict";
const { maxUnsigned16Bit: n } = require("./module-5948.js");
let s;
try {
    s = require("./module-6982.js");
} catch  {}
module.exports = {
    WebsocketFrameSend: class {
        constructor(t){
            this.frameData = t, this.maskKey = s.randomBytes(4);
        }
        createFrame(t) {
            const e = this.frameData?.byteLength ?? 0;
            let r = e, s = 6;
            e > n ? (s += 8, r = 127) : e > 125 && (s += 2, r = 126);
            const i = Buffer.allocUnsafe(e + s);
            i[0] = i[1] = 0, i[0] |= 128, i[0] = (240 & i[0]) + t, i[s - 4] = this.maskKey[0], i[s - 3] = this.maskKey[1], i[s - 2] = this.maskKey[2], i[s - 1] = this.maskKey[3], i[1] = r, 126 === r ? i.writeUInt16BE(e, 2) : 127 === r && (i[2] = i[3] = 0, i.writeUIntBE(e, 4, 6)), i[1] |= 128;
            for(let t = 0; t < e; t++)i[s + t] = this.frameData[t] ^ this.maskKey[t % 4];
            return i;
        }
    }
};
