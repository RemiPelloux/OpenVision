import { To } from "./f0s.js";
import { NU } from "./index_190.js";
import { dUs, hUs, pUs, uUs } from "./schemas_5.js";
import { $M, u9i } from "./schemas_6.js";
import { x } from "./tslib.es6.js";
var k5i, w5i, C5i, T5i;
export { C5i, T5i, k5i, w5i };
var __wakaru_E5i_initialized = false;
export function E5i() {
if (__wakaru_E5i_initialized) return;
__wakaru_E5i_initialized = true;
x(), NU(), u9i(), k5i = To("ZodISODateTime", (e, t)=>{
    uUs.init(e, t), $M.init(e, t);
}), w5i = To("ZodISODate", (e, t)=>{
    dUs.init(e, t), $M.init(e, t);
}), C5i = To("ZodISOTime", (e, t)=>{
    hUs.init(e, t), $M.init(e, t);
}), T5i = To("ZodISODuration", (e, t)=>{
    pUs.init(e, t), $M.init(e, t);
});

}
