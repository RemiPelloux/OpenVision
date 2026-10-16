import { i } from "./plugin-brand-icon.js";
function bhr(r, e) {
    const a = {
        type: "root",
        children: r.wrap(r.all(e))
    };
    return r.patch(e, a), r.applyData(e, a);
}
export { bhr };
var __wakaru_n4i_initialized = false;
export function n4i() {
if (__wakaru_n4i_initialized) return;
__wakaru_n4i_initialized = true;
"";
i(bhr, "root");

}
