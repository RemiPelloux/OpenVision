import { Ixi } from "./constructs.js";
import { Axi, vfr } from "./content_2.js";
import { Nxi, Ufr } from "./create-tokenizer.js";
import { Sfr, Txi } from "./document.js";
import { $xi, Afr } from "./flow.js";
import { Xlr, pRt } from "./index_70.js";
import { i } from "./plugin-brand-icon.js";
import { Ifr, Mfr, Nfr } from "./text_2.js";
var Rfr = {};
function Hfr(r) {
    const s = {
        constructs: pRt([
            Rfr,
            ...(r || {}).extensions || []
        ]),
        content: l(vfr),
        defined: [],
        document: l(Sfr),
        flow: l(Afr),
        lazy: {},
        string: l(Ifr),
        text: l(Nfr)
    };
    return s;
    function l(u) {
        return p;
        function p(m) {
            return Ufr(s, u, m);
        }
    }
}
export { Hfr, Rfr };
var __wakaru_Mxi_initialized = false;
export function Mxi() {
if (__wakaru_Mxi_initialized) return;
__wakaru_Mxi_initialized = true;
Xlr(), Axi(), Txi(), $xi(), Mfr(), Ixi(), Nxi(), i(Hfr, "parse");

}
