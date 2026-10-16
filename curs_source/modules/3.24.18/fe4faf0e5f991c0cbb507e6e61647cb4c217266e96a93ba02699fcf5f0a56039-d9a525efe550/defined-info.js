import { Cw, bir } from "./info.js";
import { i } from "./plugin-brand-icon.js";
import { yNe } from "./types_2.js";
var gNe = {};
function rNt(r, e, a) {
    a && (r[e] = a);
}
var wNe, iNt, _Ne;
export { _Ne, gNe, iNt, rNt, wNe };
var __wakaru_wir_initialized = false;
export function wir() {
if (__wakaru_wir_initialized) return;
__wakaru_wir_initialized = true;
bir(), yNe(), wNe = Object.keys(gNe), iNt = class extends Cw {
    constructor(e, a, s, l){
        let u = -1;
        if (super(e, a), rNt(this, "space", l), typeof s == "number") for(; ++u < wNe.length;){
            const p = wNe[u];
            rNt(this, wNe[u], (s & gNe[p]) === gNe[p]);
        }
    }
}, i(iNt, "DefinedInfo"), _Ne = iNt, _Ne.prototype.defined = !0, i(rNt, "mark");

}
