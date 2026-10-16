import { i } from "./plugin-brand-icon.js";
function blr(r) {
    const e = r.options.bulletOrdered || ".";
    if (e !== "." && e !== ")") throw new Error("Cannot serialize items with `" + e + "` for `options.bulletOrdered`, expected `.` or `)`");
    return e;
}
export { blr };
var __wakaru_d3i_initialized = false;
export function d3i() {
if (__wakaru_d3i_initialized) return;
__wakaru_d3i_initialized = true;
i(blr, "checkBulletOrdered");

}
