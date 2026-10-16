import { ec, pd } from "./background_composer_pb.js";
import { E } from "./tslib.es6.js";
var xKa, L9m, AKa;
export { AKa, L9m, xKa };
var __wakaru_RKa_initialized = false;
export function RKa() {
if (__wakaru_RKa_initialized) return;
__wakaru_RKa_initialized = true;
"use strict";
E(), pd(), xKa = new Set([
    ec.AUTOMATIONS,
    ec.GITHUB_CI_AUTOFIX,
    ec.BUGBOT_AUTOFIX,
    ec.GRAPHITE_FULL_SELF_DRIVING,
    ec.FULL_SELF_DRIVING,
    ec.QABOT_FRONTEND,
    ec.AS_SUBAGENT_FROM_LOCAL
]), L9m = {
    "source:sdk": [
        ec.SDK
    ],
    "source:automations": [
        ec.AUTOMATIONS
    ],
    "source:api": [
        ec.API
    ],
    "source:bugbot_autofix": [
        ec.GITHUB_CI_AUTOFIX,
        ec.BUGBOT_AUTOFIX
    ],
    "source:qabot_frontend": [
        ec.QABOT_FRONTEND
    ],
    "source:local": [
        ec.LOCAL
    ]
}, AKa = "cursor/glassSidebarSettings";

}
