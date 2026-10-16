import { i } from "./plugin-brand-icon.js";
import { gir, rJ } from "./schema.js";
function eNt(r, e) {
    const a = {}, s = {};
    for (const l of r)Object.assign(a, l.property), Object.assign(s, l.normal);
    return new rJ(a, s, e);
}
export { eNt };
var __wakaru_Yki_initialized = false;
export function Yki() {
if (__wakaru_Yki_initialized) return;
__wakaru_Yki_initialized = true;
gir(), i(eNt, "merge");

}
