import { s4i, vhr } from "./index_110.js";
import { i } from "./plugin-brand-icon.js";
function xhr(r, e) {
    const a = {
        type: "text",
        value: vhr(String(e.value))
    };
    return r.patch(e, a), r.applyData(e, a);
}
export { xhr };
var __wakaru_c4i_initialized = false;
export function c4i() {
if (__wakaru_c4i_initialized) return;
__wakaru_c4i_initialized = true;
s4i(), i(xhr, "text");

}
