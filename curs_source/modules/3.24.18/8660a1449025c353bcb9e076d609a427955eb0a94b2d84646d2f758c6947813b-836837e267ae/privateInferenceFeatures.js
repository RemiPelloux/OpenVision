import { nl } from "./index.ts";
import { dhn } from "./private-inference-features.ts";
import { E } from "./tslib.es6.js";
var Owm, hCe;
export { Owm, hCe };
var __wakaru_PB_initialized = false;
export function PB() {
if (__wakaru_PB_initialized) return;
__wakaru_PB_initialized = true;
"use strict";
E(), nl(), Owm = "PrivateInferenceFeatureOffError", hCe = class extends Error {
    constructor(t){
        super(dhn), this.feature = t, this.name = Owm;
    }
};

}
