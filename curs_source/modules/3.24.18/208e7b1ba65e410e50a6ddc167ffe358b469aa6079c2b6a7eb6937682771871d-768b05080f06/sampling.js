import { gt } from "./debug-build.js";
import { Ke } from "./debug-logger.js";
import { kd } from "./hasSpansEnabled.js";
import { Op } from "./parseSampleRate.js";
import { h } from "./tslib.es6.js";
var __wakaru_nW_initialized = false;
export function nW() {
if (__wakaru_nW_initialized) return;
__wakaru_nW_initialized = true;
"use strict";
h(), gt(), Ke(), kd(), Op();

}
