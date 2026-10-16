import { Pfe, Zl, kP, op } from "./index_41.js";
import { i } from "./plugin-brand-icon.js";
function NB(r) {
    if (r === null || op(r) || kP(r)) return 1;
    if (Pfe(r)) return 2;
}
export { NB };
var __wakaru_WMt_initialized = false;
export function WMt() {
if (__wakaru_WMt_initialized) return;
__wakaru_WMt_initialized = true;
Zl(), i(NB, "classifyCharacter");

}
