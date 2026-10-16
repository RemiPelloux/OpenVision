import { gt } from "./debug-build.js";
import { Ke } from "./debug-logger.js";
import { hs } from "./envelope.js";
import { lI } from "./ratelimit.js";
import { h } from "./tslib.es6.js";
var __wakaru_KFe_initialized = false;
export function KFe() {
if (__wakaru_KFe_initialized) return;
__wakaru_KFe_initialized = true;
"use strict";
h(), gt(), Ke(), hs(), lI();

}
