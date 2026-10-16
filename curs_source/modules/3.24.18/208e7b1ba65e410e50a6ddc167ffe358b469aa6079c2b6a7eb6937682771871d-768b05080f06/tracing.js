import { _d } from "./baggage.js";
import { Ke } from "./debug-logger.js";
import { oi } from "./dsn.js";
import { Op } from "./parseSampleRate.js";
import { oo } from "./propagationContext.js";
import { h } from "./tslib.es6.js";
var x3e;
export { x3e };
var __wakaru_Tk_initialized = false;
export function Tk() {
if (__wakaru_Tk_initialized) return;
__wakaru_Tk_initialized = true;
"use strict";
h(), Ke(), _d(), oi(), Op(), oo(), x3e = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

}
