import { gt } from "./debug-build.js";
import { Ke } from "./debug-logger.js";
import { fn } from "./is.js";
import { xp } from "./syncpromise.js";
import { h } from "./tslib.es6.js";
var __wakaru_aW_initialized = false;
export function aW() {
if (__wakaru_aW_initialized) return;
__wakaru_aW_initialized = true;
"use strict";
h(), gt(), Ke(), fn(), xp();

}
