import { vS } from "./composer.js";
import { saf } from "./realtime-voice-return-row.react.js";
import { uaf } from "./realtime-voice-tray.react.js";
import { EG } from "./realtimeVoiceService.js";
import { E } from "./tslib.es6.js";
import { D$ } from "./use-feature-gate.react.js";
import { iaf } from "./use-open-voice-call-transcript.react.js";
import { lBe } from "./use-realtime-voice.react.js";
import { Lg } from "./use-service.react.js";
import { haf } from "./use-workbench-appearance.react.js";
var __wakaru_DUk_initialized = false;
export function DUk() {
if (__wakaru_DUk_initialized) return;
__wakaru_DUk_initialized = true;
"use strict";
E(), D$(), Lg(), vS(), iaf(), saf(), uaf(), EG(), lBe(), haf();

}
