import { Het, M_e } from "./electronUtilityHostController.js";
import { B } from "./ipc.js";
import { Vt, ht } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { C_e } from "./utilityHost.js";
import { I_e, Vet } from "./utilityHostService.js";
var $1;
export { $1 };
var __wakaru_qet_initialized = false;
export function qet() {
if (__wakaru_qet_initialized) return;
__wakaru_qet_initialized = true;
"use strict";
h(), Vt(), te(), Vet(), Het(), C_e(), $1 = class extends I_e {
    constructor(e, t){
        super(e, (n, r)=>new M_e(n, r, t));
    }
}, $1 = B([
    w(0, Z),
    w(1, ht)
], $1);

}
