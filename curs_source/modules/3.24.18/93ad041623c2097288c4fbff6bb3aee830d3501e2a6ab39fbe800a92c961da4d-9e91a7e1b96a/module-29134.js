"use strict";
require.d(exports, {
    Ds: ()=>a,
    HK: ()=>l,
    Xf: ()=>c
});
var n = require(96851), s = require("./module-88141.js");
const i = {}, o = [], a = (e, t, r)=>`${e}/${t}/${r}/${s.VQ}`, c = async (e, t, r, a, c)=>{
    const l = await u(e, t.secretAccessKey, t.accessKeyId), d = `${r}:${a}:${c}:${(0, n.toHex)(l)}:${t.sessionToken}`;
    if (d in i) return i[d];
    for(o.push(d); o.length > s.g5;)delete i[o.shift()];
    let h = `AWS4${t.secretAccessKey}`;
    for (const t of [
        r,
        a,
        c,
        s.VQ
    ])h = await u(e, h, t);
    return i[d] = h;
}, l = ()=>{
    o.length = 0, Object.keys(i).forEach((e)=>{
        delete i[e];
    });
}, u = (e, t, r)=>{
    const s = new e(t);
    return s.update((0, n.toUint8Array)(r)), s.digest();
};
