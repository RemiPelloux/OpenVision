import { jPt } from "./index_112.js";
import { f4i } from "./index_113.js";
import { i } from "./plugin-brand-icon.js";
function jhr(r, e) {
    return r && "run" in r ? async function(a, s) {
        const l = jPt(a, {
            file: s,
            ...e
        });
        await r.run(l, s);
    } : function(a, s) {
        return jPt(a, {
            file: s,
            ...r || e
        });
    };
}
export { jhr };
var __wakaru_h4i_initialized = false;
export function h4i() {
if (__wakaru_h4i_initialized) return;
__wakaru_h4i_initialized = true;
f4i(), i(jhr, "remarkRehype");

}
