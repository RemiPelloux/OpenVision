import { lfs } from "./client.ts";
import { oEl } from "./realtimeVoiceRecords.js";
import { E } from "./tslib.es6.js";
var __wakaru_cEl_initialized = false;
export function cEl() {
if (__wakaru_cEl_initialized) return;
__wakaru_cEl_initialized = true;
"use strict";
E(), lfs(), oEl();

}
