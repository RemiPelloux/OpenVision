"use strict";
require.d(exports, {
    A7: ()=>o,
    oK: ()=>n
});
const n = 128;
function s(t) {
    const e = new Headers, r = (new TextDecoder).decode(t).split("\r\n");
    for (const t of r){
        if ("" === t) continue;
        const r = t.indexOf(":");
        if (r > 0) {
            const n = t.substring(0, r).trim(), s = t.substring(r + 1).trim();
            e.append(n, s);
        }
    }
    return e;
}
function i(t) {
    const e = [];
    return t.forEach((t, r)=>{
        e.push(`${r}: ${t}\r\n`);
    }), (new TextEncoder).encode(e.join(""));
}
function o() {
    return {
        serialize: i,
        parse: s
    };
}
