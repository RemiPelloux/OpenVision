import { init_dist35 } from "../../../../agent/dist/index.js";
import { init_aiserver_pb } from "../../../../proto/dist/generated/aiserver/v1/aiserver_pb.js";
var ManagedLocalSmartModeClassifierError, MANAGED_LOCAL_SMART_MODE_CLASSIFIER_OFF;
export { MANAGED_LOCAL_SMART_MODE_CLASSIFIER_OFF, ManagedLocalSmartModeClassifierError };
var __wakaru_init_managed_local_smart_mode_classifier_initialized = false;
export function init_managed_local_smart_mode_classifier() {
if (__wakaru_init_managed_local_smart_mode_classifier_initialized) return;
__wakaru_init_managed_local_smart_mode_classifier_initialized = true;
"use strict";
init_dist35();
init_aiserver_pb();
ManagedLocalSmartModeClassifierError = class extends Error {
    constructor(message){
        super(message);
        this.name = "ManagedLocalSmartModeClassifierError";
    }
};
MANAGED_LOCAL_SMART_MODE_CLASSIFIER_OFF = {
    mode: false,
    shadowMode: false,
    executor: void 0
};

}
