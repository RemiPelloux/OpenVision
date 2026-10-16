import { VNe, rRt } from "./check-bullet.js";
import { i } from "./plugin-brand-icon.js";
function glr(r) {
    const e = VNe(r), a = r.options.bulletOther;
    if (!a) return e === "*" ? "-" : "*";
    if (a !== "*" && a !== "+" && a !== "-") throw new Error("Cannot serialize items with `" + a + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
    if (a === e) throw new Error("Expected `bullet` (`" + e + "`) and `bulletOther` (`" + a + "`) to be different");
    return a;
}
export { glr };
var __wakaru_u3i_initialized = false;
export function u3i() {
if (__wakaru_u3i_initialized) return;
__wakaru_u3i_initialized = true;
rRt(), i(glr, "checkBulletOther");

}
