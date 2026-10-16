import { i } from "./plugin-brand-icon.js";
function MQn(r, e) {
    const a = {};
    for(const s in r){
        const l = r[s];
        if (e?.hasOwnProperty(s)) {
            const u = e[s](l);
            u != null && Object.assign(a, u);
            continue;
        }
        l === !0 ? a[`data-${s.toLowerCase()}`] = "" : l && (a[`data-${s.toLowerCase()}`] = l.toString());
    }
    return a;
}
export { MQn };
var __wakaru_lki_initialized = false;
export function lki() {
if (__wakaru_lki_initialized) return;
__wakaru_lki_initialized = true;
i(MQn, "getStateAttributesProps");

}
