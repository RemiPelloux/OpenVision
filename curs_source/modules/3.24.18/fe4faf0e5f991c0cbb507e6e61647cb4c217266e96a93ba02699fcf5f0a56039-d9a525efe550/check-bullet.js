import { i } from "./plugin-brand-icon.js";
function VNe(r) {
    const e = r.options.bullet || "*";
    if (e !== "*" && e !== "+" && e !== "-") throw new Error("Cannot serialize items with `" + e + "` for `options.bullet`, expected `*`, `+`, or `-`");
    return e;
}
export { VNe };
var __wakaru_rRt_initialized = false;
export function rRt() {
if (__wakaru_rRt_initialized) return;
__wakaru_rRt_initialized = true;
i(VNe, "checkBullet");

}
