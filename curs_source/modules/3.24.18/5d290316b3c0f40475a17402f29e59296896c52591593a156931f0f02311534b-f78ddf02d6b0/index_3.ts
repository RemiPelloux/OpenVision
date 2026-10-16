import { Ib } from "./abort-reason.ts";
import { Cb } from "./browser-bridge.ts";
import { Cp } from "./core.ts";
import { Gb } from "./logger_2.ts";
import { Yb } from "./otel.ts";
import { h } from "./tslib.es6.js";
var __wakaru_Tt_initialized = false;
export function Tt() {
if (__wakaru_Tt_initialized) return;
__wakaru_Tt_initialized = true;
h(), Ib(), Cb(), Cp(), Gb(), Yb();

}
