import { i } from "./plugin-brand-icon.js";
function _lr(r) {
    const e = r.options.listItemIndent || "one";
    if (e !== "tab" && e !== "one" && e !== "mixed") throw new Error("Cannot serialize items with `" + e + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
    return e;
}
export { _lr };
var __wakaru_m3i_initialized = false;
export function m3i() {
if (__wakaru_m3i_initialized) return;
__wakaru_m3i_initialized = true;
i(_lr, "checkListItemIndent");

}
