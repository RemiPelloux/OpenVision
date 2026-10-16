import { gt } from "./debug-build.js";
import { Ke } from "./debug-logger.js";
import { sr } from "./spanUtils.js";
import { h } from "./tslib.es6.js";
var __wakaru_YC_initialized = false;
export function YC() {
if (__wakaru_YC_initialized) return;
__wakaru_YC_initialized = true;
"use strict";
h(), gt(), Ke(), sr();

}
