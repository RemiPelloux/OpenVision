import { Ajh, rva, sva, vIS } from "./ipa.js";
import { aFr } from "./schemas_4.js";
import { EHt, Qne } from "./shared_3.js";
import { E } from "./tslib.es6.js";
var fRp, vRp, BMa;
export { BMa, fRp, vRp };
var __wakaru_$T1_initialized = false;
export function $T1() {
if (__wakaru_$T1_initialized) return;
__wakaru_$T1_initialized = true;
"use strict";
E(), EHt(), aFr(), fRp = Ajh({
    name: rva(),
    appearance: sva([
        "light",
        "dark"
    ]),
    highContrast: vIS()
}), vRp = Object.fromEntries(Qne.map((t)=>[
        t,
        rva()
    ])), BMa = fRp.extend(vRp);

}
