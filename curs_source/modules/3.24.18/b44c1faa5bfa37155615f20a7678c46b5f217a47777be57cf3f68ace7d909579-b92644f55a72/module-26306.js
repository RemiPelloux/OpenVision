"use strict";
require.d(exports, {
    Y: ()=>s
});
const n = 1024;
function s(...e) {
    const t = new Map, r = e.reduce((e, t)=>e.concat("supported" in t ? t.supported : t), []);
    function s(e) {
        if (null === e || 0 == e.length) return !1;
        const s = t.get(e);
        if (void 0 !== s) return s;
        const o = r.some((t)=>t.test(e));
        return t.size < n && t.set(e, o), o;
    }
    return s.supported = r, s;
}
