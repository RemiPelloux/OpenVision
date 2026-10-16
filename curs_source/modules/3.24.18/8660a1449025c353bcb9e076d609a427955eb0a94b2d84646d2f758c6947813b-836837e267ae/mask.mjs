import { $De, Uut } from "./index_13.mjs";
import { E } from "./tslib.es6.js";
var uRs;
export { uRs };
var __wakaru_uSv_initialized = false;
export function uSv() {
if (__wakaru_uSv_initialized) return;
__wakaru_uSv_initialized = true;
E(), Uut(), uRs = {
    ...$De,
    getAnimatableNone: (t)=>{
        const e = $De.parse(t);
        return $De.createTransformer(t)(e.map((i)=>typeof i == "number" ? 0 : typeof i == "object" ? {
                ...i,
                alpha: 1
            } : i));
    }
};

}
