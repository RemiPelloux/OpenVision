import { init_dist8 } from "../../../../../agent-exec/dist/index.js";
import { init_event_tracking } from "../../../utils/event-tracking.js";
import { init_request_id } from "../../../utils/request-id.js";
var __wakaru_init_observation_initialized = false;
export function init_observation() {
if (__wakaru_init_observation_initialized) return;
__wakaru_init_observation_initialized = true;
"use strict";
init_dist8();
init_event_tracking();
init_request_id();

}
