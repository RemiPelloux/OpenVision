"use strict";
require.d(exports, {
    Tr: ()=>s,
    Vq: ()=>l,
    gy: ()=>a,
    jn: ()=>c,
    vE: ()=>i
});
let n;
const s = ()=>void 0 !== n, o = ()=>{
    if (void 0 === n) throw new Error("webp codec not registered: registerWebpCodec() must be called by a Node server before decoding/encoding webp");
    return n;
}, i = (e)=>e.length >= 12 && "RIFF" === e.toString("ascii", 0, 4) && "WEBP" === e.toString("ascii", 8, 12), a = (e)=>{
    if (!i(e) || e.length < 16) return;
    const t = e.toString("ascii", 12, 16);
    if ("VP8 " === t) {
        if (e.length < 30 || 157 !== e[23] || 1 !== e[24] || 42 !== e[25]) return;
        return {
            width: 16383 & (e[26] | e[27] << 8),
            height: 16383 & (e[28] | e[29] << 8)
        };
    }
    if ("VP8L" === t) {
        if (e.length < 25 || 47 !== e[20]) return;
        const t = (e[21] | e[22] << 8 | e[23] << 16 | e[24] << 24) >>> 0;
        return {
            width: 1 + (16383 & t),
            height: 1 + (t >> 14 & 16383)
        };
    }
    if ("VP8X" === t) {
        if (e.length < 30) return;
        return {
            width: 1 + (e[24] | e[25] << 8 | e[26] << 16),
            height: 1 + (e[27] | e[28] << 8 | e[29] << 16)
        };
    }
}, c = (e)=>o().decode(e), l = (e)=>o().encode(e);
