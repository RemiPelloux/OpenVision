import { uve } from "./misc.js";
import { pke } from "./time.js";
import { E } from "./tslib.es6.js";
var __wakaru_ihr_initialized = false;
export function ihr() {
if (__wakaru_ihr_initialized) return;
__wakaru_ihr_initialized = true;
"use strict";
E(), uve(), pke();

}
