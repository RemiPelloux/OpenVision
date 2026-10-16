import { efd } from "./A3u.js";
import { fto } from "./TypingUtils.js";
import { x } from "./tslib.es6.js";
var AJe, vto, _to;
export { AJe, _to, vto };
var __wakaru_vHt_initialized = false;
export function vHt() {
if (__wakaru_vHt_initialized) return;
__wakaru_vHt_initialized = true;
"use strict";
x(), fto(), AJe = (e)=>{
    let t = 0;
    for(let n = 0; n < e.length; n++){
        const i = e.charCodeAt(n);
        t = (t << 5) - t + i, t = t & t;
    }
    return String(t >>> 0);
}, vto = (e, t)=>AJe(JSON.stringify(_to(e, t))), _to = (e, t)=>{
    if (e == null) return null;
    const n = Object.keys(e).sort(), i = {};
    return n.forEach((r)=>{
        const s = e[r];
        if (t === 0 || efd(s) !== "object") {
            i[r] = s;
            return;
        }
        i[r] = _to(s, t != null ? t - 1 : t);
    }), i;
};

}
