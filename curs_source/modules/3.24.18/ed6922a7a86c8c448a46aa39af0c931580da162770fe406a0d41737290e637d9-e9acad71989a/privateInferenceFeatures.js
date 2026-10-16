import { Ml } from "./index.ts";
import { Lmt } from "./private-inference-features.ts";
import { x } from "./tslib.es6.js";
var m2d, d_e;
export { d_e, m2d };
var __wakaru_D6_initialized = false;
export function D6() {
if (__wakaru_D6_initialized) return;
__wakaru_D6_initialized = true;
"use strict";
x(), Ml(), m2d = "PrivateInferenceFeatureOffError", d_e = class extends Error {
    constructor(e){
        super(Lmt), this.feature = e, this.name = m2d;
    }
};

}
