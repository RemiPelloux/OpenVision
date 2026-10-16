import { IzC } from "./environment-setup-blocked-tray.react.js";
import { PzC } from "./environment-setup-in-progress-tray.react.js";
import { NzC } from "./environment-setup-save-ready-tray.react.js";
import { E } from "./tslib.es6.js";
import { lre } from "./use-followup-tray-event-key.react.js";
var lS_;
export { lS_ };
var __wakaru_UzC_initialized = false;
export function UzC() {
if (__wakaru_UzC_initialized) return;
__wakaru_UzC_initialized = true;
"use strict";
E(), lre(), IzC(), PzC(), NzC(), lS_ = {
    blocked: "env-setup",
    "in-progress": "env-setup-in-progress",
    "save-ready": "env-setup-save"
};

}
