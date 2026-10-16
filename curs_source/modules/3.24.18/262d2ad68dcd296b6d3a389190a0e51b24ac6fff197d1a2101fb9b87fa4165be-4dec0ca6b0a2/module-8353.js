"use strict";
require.d(exports, {
    a: ()=>s,
    n: ()=>i
});
const n = {}, o = {};
for(let e = 0; e < 256; e++){
    let t = e.toString(16).toLowerCase();
    1 === t.length && (t = `0${t}`), n[e] = t, o[t] = e;
}
function s(e) {
    if (e.length % 2 != 0) throw new Error("Hex encoded strings must have an even number length");
    const t = new Uint8Array(e.length / 2);
    for(let r = 0; r < e.length; r += 2){
        const n = e.slice(r, r + 2).toLowerCase();
        if (!(n in o)) throw new Error(`Cannot decode unrecognized sequence ${n} as hexadecimal`);
        t[r / 2] = o[n];
    }
    return t;
}
function i(e) {
    let t = "";
    for(let r = 0; r < e.byteLength; r++)t += n[e[r]];
    return t;
}
