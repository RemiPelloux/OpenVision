import { xs } from "./carrier.js";
import { Pp } from "./index_2.js";
import { oo } from "./propagationContext.js";
import { Ap } from "./scope.js";
import { h } from "./tslib.es6.js";
var __wakaru_dt_initialized = false;
export function dt() {
if (__wakaru_dt_initialized) return;
__wakaru_dt_initialized = true;
"use strict";
h(), Pp(), xs(), Ap(), oo();

}
