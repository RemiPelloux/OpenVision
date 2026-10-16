import { SMt } from "./index_32.js";
import { Ivi } from "./index_33.js";
import { i } from "./plugin-brand-icon.js";
function BNe(r) {
    return function(e, a) {
        return SMt(e, {
            ...r,
            file: a
        });
    };
}
export { BNe };
var __wakaru_Nvi_initialized = false;
export function Nvi() {
if (__wakaru_Nvi_initialized) return;
__wakaru_Nvi_initialized = true;
Ivi(), i(BNe, "rehypeRaw");

}
