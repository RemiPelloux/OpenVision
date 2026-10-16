import { a } from "./business-error.js";
import { lazy as vD } from "./react-runtime/react/esm-index-production.js";
function ap() {
    let e;
    return {
        pick (t) {
            return e ?? t;
        },
        replaceFailed (t, r) {
            (e === void 0 || e === t) && (e = vD(r));
        }
    };
}
export { ap };
var __wakaru_SV_initialized = false;
export function SV() {
if (__wakaru_SV_initialized) return;
__wakaru_SV_initialized = true;
a(ap, "createCollectorSlot");

}
