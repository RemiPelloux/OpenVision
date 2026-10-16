import { createCounter } from "../../../dist_exports.js";
import { init_dist4 } from "../../../metrics/dist/index.js";
var leaseCheck;
export { leaseCheck };
var __wakaru_init_desktop_lease_initialized = false;
export function init_desktop_lease() {
if (__wakaru_init_desktop_lease_initialized) return;
__wakaru_init_desktop_lease_initialized = true;
"use strict";
init_dist4();
leaseCheck = createCounter("computer_use.desktop_lease.check", {
    description: "Desktop lease action-gate outcomes",
    labelNames: [
        "outcome",
        "reason"
    ]
});

}
