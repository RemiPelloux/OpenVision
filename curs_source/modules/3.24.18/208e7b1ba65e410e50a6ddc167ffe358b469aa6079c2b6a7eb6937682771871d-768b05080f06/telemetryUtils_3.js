import { Jp } from "./id.js";
import { ts } from "./telemetry.js";
import { JZe } from "./telemetryUtils_2.js";
import { h } from "./tslib.es6.js";
var __wakaru_net_initialized = false;
export function net() {
if (__wakaru_net_initialized) return;
__wakaru_net_initialized = true;
"use strict";
h(), ts(), JZe(), Jp();

}
