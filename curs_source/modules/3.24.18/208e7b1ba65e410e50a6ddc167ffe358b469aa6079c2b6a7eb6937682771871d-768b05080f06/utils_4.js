import { FB } from "./constants_4.js";
import { Fs } from "./gen-ai-attributes.js";
import { h } from "./tslib.es6.js";
var __wakaru_WB_initialized = false;
export function WB() {
if (__wakaru_WB_initialized) return;
__wakaru_WB_initialized = true;
"use strict";
h(), Fs(), FB();

}
