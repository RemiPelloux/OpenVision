import { jm } from "./command-ids.js";
import { Kct } from "./composerTranscriptLinkNavigation.js";
import { Hks } from "./composerTranscriptToolRuntime.js";
import { yp } from "./glass-command-service.js";
import { hC } from "./glass-environment-service.js";
import { Xf } from "./glass-opener-service.js";
import { vT } from "./glass-tab-persistence-service.contract.js";
import { EG } from "./realtimeVoiceService.js";
import { E } from "./tslib.es6.js";
import { kF } from "./use-agent-workspace.react.js";
import { vee } from "./use-loaded-agent-reference.react.js";
import { lBe } from "./use-realtime-voice.react.js";
import { w_ } from "./use-service-event-state.react_2.js";
import { In } from "./use-service.react_2.js";
import { Cu } from "./workspaceCollectionService.js";
var __wakaru_XFi_initialized = false;
export function XFi() {
if (__wakaru_XFi_initialized) return;
__wakaru_XFi_initialized = true;
"use strict";
E(), vee(), Cu(), kF(), In(), w_(), Kct(), Hks(), jm(), yp(), hC(), Xf(), EG(), lBe(), vT();

}
