import { dQa } from "./env-egress-policy.js";
import { E } from "./tslib.es6.js";
var XCt, w4e, Got, sGm, oGm;
export { Got, XCt, oGm, sGm, w4e };
var __wakaru_sts_initialized = false;
export function sts() {
if (__wakaru_sts_initialized) return;
__wakaru_sts_initialized = true;
"use strict";
E(), dQa(), XCt = 1, w4e = 2, Got = 3, sGm = {
    [XCt]: {
        hiddenFromAgent: !1,
        leakScanned: !1,
        availableAtRuntime: !0,
        availableAtBuild: !1
    },
    [w4e]: {
        hiddenFromAgent: !0,
        leakScanned: !0,
        availableAtRuntime: !0,
        availableAtBuild: !1
    },
    [Got]: {
        hiddenFromAgent: !0,
        leakScanned: !0,
        availableAtRuntime: !1,
        availableAtBuild: !0
    }
}, oGm = [
    {
        key: "hiddenFromAgent",
        label: "Hidden from agent"
    },
    {
        key: "leakScanned",
        label: "Leak scanned before commit"
    },
    {
        key: "availableAtRuntime",
        label: "Available at runtime"
    },
    {
        key: "availableAtBuild",
        label: "Available at build"
    }
];

}
