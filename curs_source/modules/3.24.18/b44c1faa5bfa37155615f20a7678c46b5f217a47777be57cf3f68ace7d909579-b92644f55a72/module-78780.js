"use strict";
require.d(exports, {
    oM: ()=>d,
    O5: ()=>y
});
var n = require("./module-5393.js");
const s = Buffer.from([
    137,
    80,
    78,
    71,
    13,
    10,
    26,
    10
]), o = Buffer.from([
    0,
    0,
    0,
    0,
    73,
    69,
    78,
    68,
    174,
    66,
    96,
    130
]), i = (e)=>1 === e || e >= 208 && e <= 216, a = (e)=>192 === e || 193 === e || 194 === e, c = (e)=>e >= 195 && e <= 207 && 196 !== e && 200 !== e && 204 !== e, l = (e)=>((e)=>{
        if (e.length < s.length + 25 + o.length || !e.subarray(0, s.length).equals(s) || 13 !== e.readUInt32BE(8) || "IHDR" !== e.toString("ascii", 12, 16) || !e.subarray(e.length - o.length).equals(o)) return;
        const t = e.readUInt32BE(16), r = e.readUInt32BE(20);
        return t < 1 || r < 1 ? void 0 : {
            mimeType: "image/png",
            width: t,
            height: r
        };
    })(e) ?? ((e)=>{
        if (e.length < 4 || 255 !== e[0] || 216 !== e[1] || 255 !== e[e.length - 2] || 217 !== e[e.length - 1]) return;
        let t = 2;
        for(; t + 4 <= e.length;){
            if (255 !== e[t]) return;
            const r = e[t + 1];
            if (255 === r) {
                t += 1;
                continue;
            }
            if (i(r)) {
                t += 2;
                continue;
            }
            if (218 === r || 217 === r || c(r)) return;
            const n = e.readUInt16BE(t + 2);
            if (n < 2) return;
            if (a(r)) {
                if (n < 8 || t + 9 > e.length) return;
                const r = e.readUInt16BE(t + 5), s = e.readUInt16BE(t + 7);
                if (s < 1 || r < 1) return;
                return {
                    mimeType: "image/jpeg",
                    width: s,
                    height: r
                };
            }
            t += 2 + n;
        }
    })(e);
var u = require("./module-61522.js");
const d = [
    {
        width: 1280,
        height: 800
    },
    {
        width: 1456,
        height: 840
    }
], p = 1048576, m = (e)=>new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
const h = (e, t, r = 1024)=>(function(e, t, r = 1024) {
        if (e < 1 || t < 1) return {
            width: e,
            height: t,
            needsResize: !1
        };
        const n = Math.max(e, t);
        if (n <= r) return {
            width: e,
            height: t,
            needsResize: !1
        };
        const s = Math.min(e, t);
        if (s < 8) return {
            width: e,
            height: t,
            needsResize: !1
        };
        let o = r / n, i = Math.max(1, Math.round(e * o)), a = Math.max(1, Math.round(t * o));
        return (i < 8 || a < 8) && (o = 8 / s, i = Math.max(8, Math.round(e * o)), a = Math.max(8, Math.round(t * o))), {
            width: i,
            height: a,
            needsResize: i !== e || a !== t
        };
    })(e, t, r), f = (e, t, r)=>{
    e.resize({
        w: t,
        h: r
    });
};
let g;
const y = async (e, t)=>{
    if ((0, u.vE)(e)) return (async (e, t)=>{
        const r = (0, u.gy)(e);
        if (!0 === t?.preserveWebpDimensions && void 0 !== r) return {
            data: m(e),
            mimeType: "image/webp"
        };
        const s = void 0 !== r && d.some((e)=>e.width === r.width && e.height === r.height);
        if (void 0 !== r && (s || !h(r.width, r.height, 1280).needsResize) && e.length <= p) return {
            data: m(e),
            mimeType: "image/webp"
        };
        if ("passthrough" === t?.webpWithoutCodec && !(0, u.Tr)()) return {
            data: m(e),
            mimeType: "image/webp"
        };
        const o = await (0, u.jn)(e), i = (await (0, n.I)()).fromBitmap({
            data: Buffer.from(o.data),
            width: o.width,
            height: o.height
        });
        let { width: a, height: c, needsResize: l } = s ? {
            width: i.bitmap.width,
            height: i.bitmap.height,
            needsResize: !1
        } : h(i.bitmap.width, i.bitmap.height, 1280);
        l && f(i, a, c);
        let g = await (0, u.Vq)({
            data: i.bitmap.data,
            width: i.bitmap.width,
            height: i.bitmap.height
        });
        for(; g.length > p && a > 8 && c > 8;)a = Math.max(8, Math.round(.8 * a)), c = Math.max(8, Math.round(.8 * c)), f(i, a, c), g = await (0, u.Vq)({
            data: i.bitmap.data,
            width: i.bitmap.width,
            height: i.bitmap.height
        });
        return {
            data: m(g),
            mimeType: "image/webp"
        };
    })(e, t);
    const r = l(e);
    if (void 0 !== r && e.length <= p && !h(r.width, r.height).needsResize) return {
        data: m(e),
        mimeType: r.mimeType
    };
    if (void 0 !== r && void 0 !== g) return (async ({ codec: e, imageData: t, mimeType: r })=>{
        const n = await e.readOrientedDimensions(t);
        if (void 0 === n) throw new Error(`Could not read ${r} dimensions`);
        let { width: s, height: o } = h(n.width, n.height), i = await e.resize({
            data: t,
            mimeType: r,
            width: s,
            height: o
        });
        for(; i.length > p && s > 8 && o > 8;)s = Math.max(8, Math.round(.8 * s)), o = Math.max(8, Math.round(.8 * o)), i = await e.resize({
            data: t,
            mimeType: r,
            width: s,
            height: o
        });
        return {
            data: m(i),
            mimeType: r
        };
    })({
        codec: g,
        imageData: e,
        mimeType: r.mimeType
    });
    const s = await (0, n.I)(), o = await s.read(e), i = ((e)=>{
        switch(e.mime){
            case "image/png":
            default:
                return "image/png";
            case "image/bmp":
                return "image/bmp";
            case "image/tiff":
                return "image/tiff";
            case "image/x-ms-bmp":
                return "image/x-ms-bmp";
            case "image/gif":
                return "image/gif";
            case "image/jpeg":
                return "image/jpeg";
        }
    })(o), a = !0 === t?.convertUnsupportedModelFormatsToPng && "image/png" !== i && "image/jpeg" !== i ? "image/png" : i, { width: c, height: y, needsResize: w } = h(o.width, o.height);
    if (!w && e.length <= p && a === i) return {
        data: m(e),
        mimeType: i
    };
    let v = c, _ = y;
    w && f(o, v, _);
    let A = await o.getBuffer(a);
    for(; A.length > p && v > 8 && _ > 8;)v = Math.max(8, Math.round(.8 * v)), _ = Math.max(8, Math.round(.8 * _)), f(o, v, _), A = await o.getBuffer(a);
    return {
        data: m(A),
        mimeType: a
    };
};
