import { init_active_activities } from "./active-activities.js";
import { init_activity_reconciler } from "./activity-reconciler.js";
import { init_auth_fsm } from "./auth-fsm.js";
import { init_connect_flow_logic } from "./connect-flow-logic.js";
import { init_connection_fsm } from "./connection-fsm.js";
import { init_coordinator } from "./coordinator.js";
import { init_error_classification } from "./error-classification.js";
import { init_event_classification } from "./event-classification.js";
import { init_event_log } from "./event-log.js";
import { init_projection } from "./projection.js";
import { init_types9 } from "./types.js";
import { init_v2_types } from "./v2-types.js";
var __wakaru_init_fsm_initialized = false;
export function init_fsm() {
if (__wakaru_init_fsm_initialized) return;
__wakaru_init_fsm_initialized = true;
"use strict";
init_active_activities();
init_activity_reconciler();
init_auth_fsm();
init_connect_flow_logic();
init_connection_fsm();
init_coordinator();
init_error_classification();
init_event_classification();
init_event_log();
init_projection();
init_types9();
init_v2_types();

}
