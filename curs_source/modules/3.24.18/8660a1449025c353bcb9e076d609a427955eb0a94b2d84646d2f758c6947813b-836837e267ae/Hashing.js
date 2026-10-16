import { jQu } from "./SZu.js";
import { VTo } from "./TypingUtils.js";
import { E } from "./tslib.es6.js";
var s_t, KTo, YTo;
export { KTo, YTo, s_t };
var __wakaru_Ydn_initialized = false;
export function Ydn() {
if (__wakaru_Ydn_initialized) return;
__wakaru_Ydn_initialized = true;
"use strict";
E(), VTo(), s_t = (t)=>{
    let e = 0;
    for(let n = 0; n < t.length; n++){
        const i = t.charCodeAt(n);
        e = (e << 5) - e + i, e = e & e;
    }
    return String(e >>> 0);
}, KTo = (t, e)=>s_t(JSON.stringify(YTo(t, e))), YTo = (t, e)=>{
    if (t == null) return null;
    const n = Object.keys(t).sort(), i = {};
    return n.forEach((r)=>{
        const s = t[r];
        if (e === 0 || jQu(s) !== "object") {
            i[r] = s;
            return;
        }
        i[r] = YTo(s, e != null ? e - 1 : e);
    }), i;
};

}
