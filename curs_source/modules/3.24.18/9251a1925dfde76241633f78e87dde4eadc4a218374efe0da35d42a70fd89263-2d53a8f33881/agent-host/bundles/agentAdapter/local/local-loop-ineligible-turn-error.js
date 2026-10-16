import { NonRetriableError } from "../../../../agent-client/dist/errors.js";
import { init_dist9 } from "../../../../agent-client/dist/index.js";
import { displayInfoForReason } from "../../../../tree_chunk_napi_exports.js";
var LocalLoopIneligibleTurnError;
export { LocalLoopIneligibleTurnError };
var __wakaru_init_local_loop_ineligible_turn_error_initialized = false;
export function init_local_loop_ineligible_turn_error() {
if (__wakaru_init_local_loop_ineligible_turn_error_initialized) return;
__wakaru_init_local_loop_ineligible_turn_error_initialized = true;
"use strict";
init_dist9();
LocalLoopIneligibleTurnError = class extends NonRetriableError {
    constructor(reason, context2){
        super(`Local loop cannot run this turn: ${reason}`, {
            displayInfo: {
                ...displayInfoForReason(reason, context2),
                isRetryable: false
            }
        });
        this.reason = reason;
    }
};

}
