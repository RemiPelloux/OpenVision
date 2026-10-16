import { Ka, Zl, gl } from "./index_41.js";
import { ng, wc } from "./index_74.js";
import { i } from "./plugin-brand-icon.js";
function SJ(r, e) {
    let a;
    return s;
    function s(l) {
        return Ka(l) ? (r.enter("lineEnding"), r.consume(l), r.exit("lineEnding"), a = !0, s) : gl(l) ? wc(r, s, a ? "linePrefix" : "lineSuffix")(l) : e(l);
    }
}
export { SJ };
var __wakaru_Fur_initialized = false;
export function Fur() {
if (__wakaru_Fur_initialized) return;
__wakaru_Fur_initialized = true;
ng(), Zl(), i(SJ, "factoryWhitespace");

}
