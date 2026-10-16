"use strict";
const { maxUnsigned16Bit: r } = require("./module-30229.js"), s = 16386;
let o, n = null, i = s;
try {
    o = require(77598);
} catch  {
    o = {
        randomFillSync: function(A, e, t) {
            for(let e = 0; e < A.length; ++e)A[e] = 255 * Math.random() | 0;
            return A;
        }
    };
}
function a() {
    return i === s && (i = 0, o.randomFillSync(n ??= Buffer.allocUnsafe(s), 0, s)), [
        n[i++],
        n[i++],
        n[i++],
        n[i++]
    ];
}
module.exports = {
    WebsocketFrameSend: class {
        constructor(A){
            this.frameData = A;
        }
        createFrame(A) {
            const e = this.frameData, t = a(), s = e?.byteLength ?? 0;
            let o = s, n = 6;
            s > r ? (n += 8, o = 127) : s > 125 && (n += 2, o = 126);
            const i = Buffer.allocUnsafe(s + n);
            i[0] = i[1] = 0, i[0] |= 128, i[0] = (240 & i[0]) + A, i[n - 4] = t[0], i[n - 3] = t[1], i[n - 2] = t[2], i[n - 1] = t[3], i[1] = o, 126 === o ? i.writeUInt16BE(s, 2) : 127 === o && (i[2] = i[3] = 0, i.writeUIntBE(s, 4, 6)), i[1] |= 128;
            for(let A = 0; A < s; ++A)i[n + A] = e[A] ^ t[3 & A];
            return i;
        }
    }
};
