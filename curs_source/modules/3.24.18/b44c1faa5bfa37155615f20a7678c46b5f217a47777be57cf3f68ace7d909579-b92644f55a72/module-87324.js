"use strict";
const { maxUnsigned16Bit: n } = require("./module-15948.js");
let s;
try {
    s = require("./module-76982.js");
} catch  {}
module.exports = {
    WebsocketFrameSend: class {
        constructor(e){
            this.frameData = e, this.maskKey = s.randomBytes(4);
        }
        createFrame(e) {
            const t = this.frameData?.byteLength ?? 0;
            let r = t, s = 6;
            t > n ? (s += 8, r = 127) : t > 125 && (s += 2, r = 126);
            const o = Buffer.allocUnsafe(t + s);
            o[0] = o[1] = 0, o[0] |= 128, o[0] = (240 & o[0]) + e, o[s - 4] = this.maskKey[0], o[s - 3] = this.maskKey[1], o[s - 2] = this.maskKey[2], o[s - 1] = this.maskKey[3], o[1] = r, 126 === r ? o.writeUInt16BE(t, 2) : 127 === r && (o[2] = o[3] = 0, o.writeUIntBE(t, 4, 6)), o[1] |= 128;
            for(let e = 0; e < t; e++)o[s + e] = this.frameData[e] ^ this.maskKey[e % 4];
            return o;
        }
    }
};
