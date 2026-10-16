import { Ss } from "./aiMiscServices.js";
import { Hx } from "./cloudAgentRepositoryService.js";
import { iy_ } from "./local-agent-interruption-tray.react.js";
import { ty_ } from "./local-agent-interruption.js";
import { _rs } from "./power.js";
import { dv } from "./storage-keys.js";
import { E } from "./tslib.es6.js";
import { RWC } from "./use-cloud-handoff-eligibility.react.js";
import { z6 } from "./use-glass-persistent-state.react.js";
import { CSc } from "./use-move-agent-to-cloud.react.js";
import { In } from "./use-service.react_2.js";
import { Bs } from "./window.js";
var sy_, oy_;
export { oy_, sy_ };
var __wakaru_jWC_initialized = false;
export function jWC() {
if (__wakaru_jWC_initialized) return;
__wakaru_jWC_initialized = true;
"use strict";
E(), Bs(), _rs(), Ss(), Hx(), iy_(), dv(), ty_(), RWC(), z6(), CSc(), In(), sy_ = 120 * 1e3, oy_ = 5 * 1e3;

}
