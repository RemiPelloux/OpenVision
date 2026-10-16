"use strict";
require.d(exports, {
    Y: ()=>s
});
const n = 1024;
function s(...t) {
    const e = new Map, r = t.reduce((t, e)=>t.concat("supported" in e ? e.supported : e), []);
    function s(t) {
        if (null === t || 0 == t.length) return !1;
        const s = e.get(t);
        if (void 0 !== s) return s;
        const i = r.some((e)=>e.test(t));
        return e.size < n && e.set(t, i), i;
    }
    return s.supported = r, s;
}
