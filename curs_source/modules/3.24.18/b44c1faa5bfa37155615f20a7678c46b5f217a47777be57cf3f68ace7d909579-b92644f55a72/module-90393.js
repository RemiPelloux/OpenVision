"use strict";
require.d(exports, {
    Y$: ()=>i,
    _3: ()=>a,
    cM: ()=>o,
    z7: ()=>n
});
const n = 65536, s = Math.max(1, Math.floor(n / 8));
function o(e) {
    return {
        announced: e ?? new Set,
        leasedIds: new Set,
        chain: Promise.resolve()
    };
}
async function i(e, t) {
    const r = e.chain.then(()=>t()), n = r.then(()=>{}, ()=>{});
    return e.chain = n, r;
}
function a(e, t) {
    let r = 0;
    for (const s of t)0 === s.length || e.has(s) || (e.size >= n && c(e), e.add(s), r += 1);
    return r;
}
function c(e) {
    const t = [];
    for (const r of e)if (t.push(r), t.length >= s) break;
    for (const r of t)e.delete(r);
}
