import { Hvi, Xcr } from "./pattern-in-scope.js";
import { i } from "./plugin-brand-icon.js";
function BMt(r, e, a, s) {
    let l = -1;
    for(; ++l < a.unsafe.length;)if (a.unsafe[l].character === `
` && Xcr(a.stack, a.unsafe[l])) return /[ \t]/.test(s.before) ? "" : " ";
    return `\\
`;
}
export { BMt };
var __wakaru_Zvi_initialized = false;
export function Zvi() {
if (__wakaru_Zvi_initialized) return;
__wakaru_Zvi_initialized = true;
Hvi(), i(BMt, "hardBreak");

}
