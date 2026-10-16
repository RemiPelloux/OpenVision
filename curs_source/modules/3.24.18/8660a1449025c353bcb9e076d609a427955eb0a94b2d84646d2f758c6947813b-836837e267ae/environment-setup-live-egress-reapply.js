import { pd } from "./background_composer_pb.js";
import { E } from "./tslib.es6.js";
var Ihc, EJv;
export { EJv, Ihc };
var __wakaru_pmC_initialized = false;
export function pmC() {
if (__wakaru_pmC_initialized) return;
__wakaru_pmC_initialized = true;
"use strict";
E(), pd(), Ihc = {
    saved: "Successfully saved network settings",
    stored_not_applied: "Network settings saved \u2014 they take effect when the VM restarts",
    reapply_failed: "Network settings saved, but the running VM wasn't updated. Retry to push the saved policy to the running VM."
}, EJv = "Failed to update network access settings";

}
