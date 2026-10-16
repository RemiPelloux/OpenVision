import { MAa, qwn } from "./dark.js";
import { ARp, Cbi } from "./high-contrast.js";
import { Wwt } from "./ipa.js";
import { DAa, zwn } from "./light.js";
import { EHt } from "./shared_3.js";
import { E } from "./tslib.es6.js";
var cbe, RRp, PRp;
export { PRp, RRp, cbe };
var __wakaru_MRp_initialized = false;
export function MRp() {
if (__wakaru_MRp_initialized) return;
__wakaru_MRp_initialized = true;
"use strict";
E(), MAa(), ARp(), DAa(), EHt(), cbe = {
    light: zwn,
    dark: qwn,
    highContrast: Cbi
}, RRp = {
    "cursor-dark": qwn,
    "cursor-light": zwn,
    "cursor-high-contrast": Cbi
}, PRp = {
    light: Wwt(zwn),
    dark: Wwt(qwn),
    highContrast: Wwt(Cbi)
};

}
