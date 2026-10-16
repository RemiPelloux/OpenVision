import { $De, Uut } from "./index_13.mjs";
import { cFi, mOn } from "./number.mjs";
import { E } from "./tslib.es6.js";
var XSv;
export { XSv };
var __wakaru_mv0_initialized = false;
export function mv0() {
if (__wakaru_mv0_initialized) return;
__wakaru_mv0_initialized = true;
E(), Uut(), cFi(), XSv = {
    correct: (t, { treeScale: e, projectionDelta: n })=>{
        const i = t, r = $De.parse(t);
        if (r.length > 5) return i;
        const s = $De.createTransformer(t), o = typeof r[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
        r[0 + o] /= a, r[1 + o] /= l;
        const c = mOn(a, l, .5);
        return typeof r[2 + o] == "number" && (r[2 + o] /= c), typeof r[3 + o] == "number" && (r[3 + o] /= c), s(r);
    }
};

}
