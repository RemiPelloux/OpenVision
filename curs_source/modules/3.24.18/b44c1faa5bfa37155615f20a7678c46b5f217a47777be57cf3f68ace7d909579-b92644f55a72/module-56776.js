"use strict";
require.d(exports, {
    A7: ()=>i,
    oK: ()=>n
});
const n = 128;
function s(e) {
    const t = new Headers, r = (new TextDecoder).decode(e).split("\r\n");
    for (const e of r){
        if ("" === e) continue;
        const r = e.indexOf(":");
        if (r > 0) {
            const n = e.substring(0, r).trim(), s = e.substring(r + 1).trim();
            t.append(n, s);
        }
    }
    return t;
}
function o(e) {
    const t = [];
    return e.forEach((e, r)=>{
        t.push(`${r}: ${e}\r\n`);
    }), (new TextEncoder).encode(t.join(""));
}
function i() {
    return {
        serialize: o,
        parse: s
    };
}
