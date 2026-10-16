import { xJ } from "./blank-line.js";
import { Rur } from "./content.js";
import { ng, wc } from "./index_74.js";
import { DRt } from "./index_81.js";
import { i } from "./plugin-brand-icon.js";
function Efr(r) {
    const e = this, a = r.attempt(xJ, s, r.attempt(this.parser.constructs.flowInitial, l, wc(r, r.attempt(this.parser.constructs.flow, l, r.attempt(Rur, l)), "linePrefix")));
    return a;
    function s(u) {
        if (u === null) {
            r.consume(u);
            return;
        }
        return r.enter("lineEndingBlank"), r.consume(u), r.exit("lineEndingBlank"), e.currentConstruct = void 0, a;
    }
    function l(u) {
        if (u === null) {
            r.consume(u);
            return;
        }
        return r.enter("lineEnding"), r.consume(u), r.exit("lineEnding"), e.currentConstruct = void 0, a;
    }
}
var Afr;
export { Afr, Efr };
var __wakaru_$xi_initialized = false;
export function $xi() {
if (__wakaru_$xi_initialized) return;
__wakaru_$xi_initialized = true;
DRt(), ng(), Afr = {
    tokenize: Efr
}, i(Efr, "initializeFlow");

}
