import { init_conflict_events } from "./conflict-events.js";
import { init_conflict_notice_claim_state } from "./conflict-notice-claim-state.js";
import { init_conflict_notice_render } from "./conflict-notice-render.js";
var __wakaru_init_conflict_notice_drain_initialized = false;
export function init_conflict_notice_drain() {
if (__wakaru_init_conflict_notice_drain_initialized) return;
__wakaru_init_conflict_notice_drain_initialized = true;
"use strict";
init_conflict_events();
init_conflict_notice_claim_state();
init_conflict_notice_render();

}
