import { Di } from "./Iwo.js";
import { zO } from "./agentReferenceLifetime.js";
import { jm } from "./command-ids.js";
import { LS } from "./composerEventService.js";
import { Ef } from "./constants_18.js";
import { S2 } from "./cursorIgnoreService.js";
import { mv } from "./editor-panel-context.react.js";
import { OQv } from "./editor-panel-message-target.js";
import { yp } from "./glass-command-service.js";
import { Hv } from "./glassActiveAgentService.js";
import { Mt } from "./index_197.js";
import { lhc } from "./markdown-formatting-keybindings.js";
import { ChC } from "./planSelectionToChat.js";
import { VPe } from "./planStorageService.js";
import { E } from "./tslib.es6.js";
import { wF } from "./use-agent-repository-service.react.js";
import { hk } from "./use-keybinding-label.react.js";
import { In } from "./use-service.react_2.js";
import { Bs } from "./window.js";
var __wakaru_OhC_initialized = false;
export function OhC() {
if (__wakaru_OhC_initialized) return;
__wakaru_OhC_initialized = true;
"use strict";
E(), Mt(), Bs(), Di(), LS(), Ef(), ChC(), VPe(), zO(), Hv(), S2(), mv(), yp(), OQv(), jm(), lhc(), wF(), hk(), In();

}
