import { oi } from "./dsn.js";
import { co } from "./dynamicSamplingContext.js";
import { hs } from "./envelope.js";
import { es } from "./misc.js";
import { VC } from "./should-ignore-span.js";
import { sr } from "./spanUtils.js";
import { h } from "./tslib.es6.js";
var __wakaru_zC_initialized = false;
export function zC() {
if (__wakaru_zC_initialized) return;
__wakaru_zC_initialized = true;
"use strict";
h(), co(), oi(), hs(), es(), VC(), sr();

}
