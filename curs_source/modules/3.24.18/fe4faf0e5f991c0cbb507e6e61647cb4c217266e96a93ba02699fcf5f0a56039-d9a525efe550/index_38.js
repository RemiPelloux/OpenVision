import { Ksr } from "./index_36.js";
import { icr } from "./index_37.js";
import { i } from "./plugin-brand-icon.js";
function Nfe(r) {
    return function(e) {
        return Ksr(e, r);
    };
}
export { Nfe };
var __wakaru_Pvi_initialized = false;
export function Pvi() {
if (__wakaru_Pvi_initialized) return;
__wakaru_Pvi_initialized = true;
icr(), i(Nfe, "rehypeSanitize");

}
