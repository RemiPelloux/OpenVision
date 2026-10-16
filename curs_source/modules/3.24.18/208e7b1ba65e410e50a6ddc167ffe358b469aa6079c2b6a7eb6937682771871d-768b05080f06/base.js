import { gt } from "./debug-build.js";
import { Ke } from "./debug-logger.js";
import { hs } from "./envelope.js";
import { cI } from "./promisebuffer.js";
import { lI } from "./ratelimit.js";
import { h } from "./tslib.es6.js";
var __wakaru_qFe_initialized = false;
export function qFe() {
if (__wakaru_qFe_initialized) return;
__wakaru_qFe_initialized = true;
"use strict";
h(), gt(), Ke(), hs(), cI(), lI();

}
