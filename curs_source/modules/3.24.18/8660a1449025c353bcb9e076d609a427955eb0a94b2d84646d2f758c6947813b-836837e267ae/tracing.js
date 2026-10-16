import { Iun } from "./baggage.js";
import { JC } from "./debug-logger.js";
import { kOe } from "./dsn.js";
import { XYn } from "./parseSampleRate.js";
import { bvt } from "./propagationContext.js";
import { E } from "./tslib.es6.js";
var lhr;
export { lhr };
var __wakaru_chr_initialized = false;
export function chr() {
if (__wakaru_chr_initialized) return;
__wakaru_chr_initialized = true;
"use strict";
E(), JC(), Iun(), kOe(), XYn(), bvt(), lhr = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

}
