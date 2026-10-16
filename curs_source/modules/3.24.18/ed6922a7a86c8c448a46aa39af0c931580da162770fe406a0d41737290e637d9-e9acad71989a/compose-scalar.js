import { n$ } from "./Scalar_2.js";
import { NE } from "./identity.js";
import { OZc } from "./resolve-block-scalar.js";
import { UZc } from "./resolve-flow-scalar.js";
import { x } from "./tslib.es6.js";
var __wakaru_fxg_initialized = false;
export function fxg() {
if (__wakaru_fxg_initialized) return;
__wakaru_fxg_initialized = true;
x(), NE(), n$(), OZc(), UZc();

}
