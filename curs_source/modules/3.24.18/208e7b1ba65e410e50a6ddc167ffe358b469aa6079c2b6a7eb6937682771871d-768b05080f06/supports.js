import { gt } from "./debug-build.js";
import { Ke } from "./debug-logger.js";
import { h } from "./tslib.es6.js";
import { dn } from "./worldwide.js";
var __wakaru_HB_initialized = false;
export function HB() {
if (__wakaru_HB_initialized) return;
__wakaru_HB_initialized = true;
"use strict";
h(), gt(), Ke(), dn();

}
