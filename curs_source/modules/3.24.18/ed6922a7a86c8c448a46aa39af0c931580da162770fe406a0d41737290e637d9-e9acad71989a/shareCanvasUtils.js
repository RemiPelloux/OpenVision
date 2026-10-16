import { R1 } from "./adminSettingsService.js";
import { Za } from "./authenticationService.js";
import { am } from "./buildFlags.js";
import { qs } from "./experimentService.js";
import { IR } from "./privacy_mode_pb.js";
import { Vp } from "./reactiveStorageTypes_2.js";
import { x } from "./tslib.es6.js";
var __wakaru_Qer_initialized = false;
export function Qer() {
if (__wakaru_Qer_initialized) return;
__wakaru_Qer_initialized = true;
"use strict";
x(), am(), Za(), R1(), qs(), Vp(), IR();

}
