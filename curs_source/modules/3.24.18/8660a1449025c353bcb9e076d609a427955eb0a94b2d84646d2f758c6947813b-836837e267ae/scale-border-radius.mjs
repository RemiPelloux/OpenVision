import { YSv } from "./ofv.js";
import { E } from "./tslib.es6.js";
import { hOn, tb } from "./units.mjs";
var vOn;
export { vOn };
var __wakaru_pv0_initialized = false;
export function pv0() {
if (__wakaru_pv0_initialized) return;
__wakaru_pv0_initialized = true;
E(), hOn(), vOn = {
    correct: (t, e)=>{
        if (!e.target) return t;
        if (typeof t == "string") if (tb.test(t)) t = parseFloat(t);
        else return t;
        const n = YSv(t, e.target.x), i = YSv(t, e.target.y);
        return `${n}% ${i}%`;
    }
};

}
