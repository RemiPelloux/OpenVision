import { Ye, qe } from "./environmentMainService.js";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { Tt, et } from "./productService.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { ct, pt } from "./windows.js";
import Ait from "v8";
var pE;
export { pE };
var __wakaru_Mit_initialized = false;
export function Mit() {
if (__wakaru_Mit_initialized) return;
__wakaru_Mit_initialized = true;
"use strict";
h(), j(), Ye(), te(), Tt(), pt(), pE = class extends J {
    constructor(e, t, n, r){
        super(), this.environmentService = e, this.logService = t, this.productService = n, this.windowsService = r;
    }
    async getHeapSpaceStatistics() {
        return Ait.getHeapSpaceStatistics().map((n)=>({
                space_name: n.space_name,
                space_size: n.space_size,
                space_used_size: n.space_used_size,
                space_available_size: n.space_available_size,
                physical_space_size: n.physical_space_size
            }));
    }
}, pE = B([
    w(0, qe),
    w(1, Z),
    w(2, et),
    w(3, ct)
], pE);

}
