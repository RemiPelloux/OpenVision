import { i } from "./plugin-brand-icon.js";
function oIe(r, e) {
    if (r && !e) return r;
    if (!r && e) return e;
    if (r || e) return {
        ...r,
        ...e
    };
}
export { oIe };
var __wakaru_IQn_initialized = false;
export function IQn() {
if (__wakaru_IQn_initialized) return;
__wakaru_IQn_initialized = true;
i(oIe, "mergeObjects");

}
