import { dt } from "./currentScopes.js";
import { gt } from "./debug-build.js";
import { Ke } from "./debug-logger.js";
import { sr } from "./spanUtils.js";
import { h } from "./tslib.es6.js";
var bB, RB, Wp;
export { RB, Wp, bB };
var __wakaru_SI_initialized = false;
export function SI() {
if (__wakaru_SI_initialized) return;
__wakaru_SI_initialized = true;
"use strict";
h(), dt(), gt(), Ke(), sr(), bB = 100, RB = 10, Wp = "flag.evaluation.";

}
