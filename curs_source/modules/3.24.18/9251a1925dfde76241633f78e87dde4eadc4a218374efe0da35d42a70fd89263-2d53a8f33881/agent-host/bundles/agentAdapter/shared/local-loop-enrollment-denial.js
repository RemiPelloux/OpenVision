import { NonRetriableError } from "../../../../agent-client/dist/errors.js";
import { init_dist9 } from "../../../../agent-client/dist/index.js";
import { init_esm3 } from "../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
var RUN_INFERENCE_NOT_ENROLLED_MESSAGE, LocalLoopEnrollmentLatch, LocalLoopDeniedMidTurnError;
export { LocalLoopDeniedMidTurnError, LocalLoopEnrollmentLatch, RUN_INFERENCE_NOT_ENROLLED_MESSAGE };
var __wakaru_init_local_loop_enrollment_denial_initialized = false;
export function init_local_loop_enrollment_denial() {
if (__wakaru_init_local_loop_enrollment_denial_initialized) return;
__wakaru_init_local_loop_enrollment_denial_initialized = true;
"use strict";
init_dist9();
init_esm3();
RUN_INFERENCE_NOT_ENROLLED_MESSAGE = "InferenceService.RunInference is not enabled for this account";
LocalLoopEnrollmentLatch = class {
    constructor(){
        this.latched = false;
        this.denials = 0;
        this.gateReadOff = false;
    }
    recordDenial() {
        if (this.latched) {
            return;
        }
        this.latched = true;
        this.denials += 1;
        this.gateReadOff = false;
    }
    observeGate(gateOn) {
        if (!this.latched) {
            return false;
        }
        if (!gateOn) {
            this.gateReadOff = true;
        } else if (this.gateReadOff && this.denials === 1) {
            this.latched = false;
        }
        return this.latched;
    }
};
LocalLoopDeniedMidTurnError = class extends NonRetriableError {
    constructor(cause){
        super("The local agent loop was turned off for this account during the turn", {
            cause,
            displayInfo: {
                title: "Local agent loop turned off",
                detail: "The local agent loop was turned off for your account while this turn was running. Resume to continue on the backend loop.",
                isRetryable: true
            }
        });
    }
};

}
