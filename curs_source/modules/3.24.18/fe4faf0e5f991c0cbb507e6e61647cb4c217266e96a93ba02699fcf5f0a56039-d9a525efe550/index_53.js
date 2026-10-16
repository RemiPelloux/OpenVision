import { i } from "./plugin-brand-icon.js";
function qMt(r, e) {
    const a = String(r);
    let s = a.indexOf(e), l = s, u = 0, p = 0;
    if (typeof e != "string") throw new TypeError("Expected substring");
    for(; s !== -1;)s === l ? ++u > p && (p = u) : u = 1, l = s + e.length, s = a.indexOf(e, l);
    return p;
}
export { qMt };
var __wakaru_Ycr_initialized = false;
export function Ycr() {
if (__wakaru_Ycr_initialized) return;
__wakaru_Ycr_initialized = true;
i(qMt, "longestStreak");

}
