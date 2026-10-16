import { i } from "./plugin-brand-icon.js";
function zT(...r) {
    {
        const e = r.join(" ");
        r$t.has(e) || (r$t.add(e), console.error(`Base UI: ${e}`));
    }
}
var r$t;
export { r$t, zT };
var __wakaru_Pme_initialized = false;
export function Pme() {
if (__wakaru_Pme_initialized) return;
__wakaru_Pme_initialized = true;
r$t = new Set, i(zT, "error");

}
