import { Kfr } from "./index_106.js";
import { Dxi } from "./index_107.js";
import { i } from "./plugin-brand-icon.js";
function Jfr(r) {
    const e = this;
    e.parser = a;
    function a(s) {
        return Kfr(s, {
            ...e.data("settings"),
            ...r,
            extensions: e.data("micromarkExtensions") || [],
            mdastExtensions: e.data("fromMarkdownExtensions") || []
        });
    }
    i(a, "parser");
}
export { Jfr };
var __wakaru_Fxi_initialized = false;
export function Fxi() {
if (__wakaru_Fxi_initialized) return;
__wakaru_Fxi_initialized = true;
Dxi(), i(Jfr, "remarkParse");

}
