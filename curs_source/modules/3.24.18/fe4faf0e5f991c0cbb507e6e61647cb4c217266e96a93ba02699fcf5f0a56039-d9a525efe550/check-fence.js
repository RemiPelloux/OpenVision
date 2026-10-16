import { i } from "./plugin-brand-icon.js";
function Qcr(r) {
    const e = r.options.fence || "`";
    if (e !== "`" && e !== "~") throw new Error("Cannot serialize code with `" + e + "` for `options.fence`, expected `` ` `` or `~`");
    return e;
}
export { Qcr };
var __wakaru_Kvi_initialized = false;
export function Kvi() {
if (__wakaru_Kvi_initialized) return;
__wakaru_Kvi_initialized = true;
i(Qcr, "checkFence");

}
