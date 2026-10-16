import { i } from "./plugin-brand-icon.js";
function ohr(r, e) {
    if (r.options.allowDangerousHtml) {
        const a = {
            type: "raw",
            value: e.value
        };
        return r.patch(e, a), r.applyData(e, a);
    }
}
export { ohr };
var __wakaru_Zxi_initialized = false;
export function Zxi() {
if (__wakaru_Zxi_initialized) return;
__wakaru_Zxi_initialized = true;
"";
i(ohr, "html");

}
