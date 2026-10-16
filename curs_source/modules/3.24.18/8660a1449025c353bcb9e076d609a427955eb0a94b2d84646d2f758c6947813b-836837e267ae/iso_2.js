import { pkt } from "./api_4.js";
import { jFe } from "./core_3.js";
import { $Fe } from "./index_146.js";
import { ad } from "./ipa.js";
import { DSn, J7h, Q7h, Z7h, eUh } from "./schemas_3.js";
import { SB, aFr } from "./schemas_4.js";
import { E } from "./tslib.es6.js";
var djh, hjh, pjh, mjh;
export { djh, hjh, mjh, pjh };
var __wakaru_hIS_initialized = false;
export function hIS() {
if (__wakaru_hIS_initialized) return;
__wakaru_hIS_initialized = true;
E(), $Fe(), aFr(), jFe(), DSn(), pkt(), djh = ad("ZodISODateTime", (t, e)=>{
    Z7h.init(t, e), SB.init(t, e);
}), hjh = ad("ZodISODate", (t, e)=>{
    Q7h.init(t, e), SB.init(t, e);
}), pjh = ad("ZodISOTime", (t, e)=>{
    J7h.init(t, e), SB.init(t, e);
}), mjh = ad("ZodISODuration", (t, e)=>{
    eUh.init(t, e), SB.init(t, e);
});

}
