import { GAs, wbv } from "./hex.mjs";
import { BQt, Ebv } from "./hsla.mjs";
import { OYl, yRt } from "./rgba.mjs";
import { E } from "./tslib.es6.js";
var jG;
export { jG };
var __wakaru_qAs_initialized = false;
export function qAs() {
if (__wakaru_qAs_initialized) return;
__wakaru_qAs_initialized = true;
E(), wbv(), Ebv(), OYl(), jG = {
    test: (t)=>yRt.test(t) || GAs.test(t) || BQt.test(t),
    parse: (t)=>yRt.test(t) ? yRt.parse(t) : BQt.test(t) ? BQt.parse(t) : GAs.parse(t),
    transform: (t)=>typeof t == "string" ? t : t.hasOwnProperty("red") ? yRt.transform(t) : BQt.transform(t),
    getAnimatableNone: (t)=>{
        const e = jG.parse(t);
        return e.alpha = 0, jG.transform(e);
    }
};

}
