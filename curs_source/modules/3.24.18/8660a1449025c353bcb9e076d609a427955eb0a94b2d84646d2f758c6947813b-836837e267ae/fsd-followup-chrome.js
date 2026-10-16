import { M8i } from "./fsd-suppression-policy.js";
import { ftn } from "./glass-fsd-launch-helpers.js";
import { FA } from "./glass-side-chat-utils.js";
import { NE } from "./glass-tab-persistence-constants.js";
import { nl } from "./index.ts";
import { E } from "./tslib.es6.js";
var __wakaru_PFs_initialized = false;
export function PFs() {
if (__wakaru_PFs_initialized) return;
__wakaru_PFs_initialized = true;
"use strict";
E(), nl(), NE(), FA(), ftn(), M8i();

}
