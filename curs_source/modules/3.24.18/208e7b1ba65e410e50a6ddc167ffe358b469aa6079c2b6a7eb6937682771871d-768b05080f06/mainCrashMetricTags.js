import { Jtt } from "./clientTraceCommonAttributes.js";
import { oe } from "./platform.js";
import { wA } from "./telemetrySource.js";
import { h } from "./tslib.es6.js";
import { Ym } from "./updateReleaseTrack.js";
var __wakaru_ave_initialized = false;
export function ave() {
if (__wakaru_ave_initialized) return;
__wakaru_ave_initialized = true;
"use strict";
h(), oe(), wA(), Ym(), Jtt();

}
