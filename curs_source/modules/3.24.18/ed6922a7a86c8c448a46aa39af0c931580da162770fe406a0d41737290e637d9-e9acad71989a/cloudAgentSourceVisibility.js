import { Zc, hm } from "./background_composer_pb.js";
import { x } from "./tslib.es6.js";
var Hpo, DZd, Wpo;
export { DZd, Hpo, Wpo };
var __wakaru_RDv_initialized = false;
export function RDv() {
if (__wakaru_RDv_initialized) return;
__wakaru_RDv_initialized = true;
"use strict";
x(), hm(), Hpo = new Set([
    Zc.AUTOMATIONS,
    Zc.GITHUB_CI_AUTOFIX,
    Zc.BUGBOT_AUTOFIX,
    Zc.GRAPHITE_FULL_SELF_DRIVING,
    Zc.FULL_SELF_DRIVING,
    Zc.QABOT_FRONTEND,
    Zc.AS_SUBAGENT_FROM_LOCAL
]), DZd = {
    "source:sdk": [
        Zc.SDK
    ],
    "source:automations": [
        Zc.AUTOMATIONS
    ],
    "source:api": [
        Zc.API
    ],
    "source:bugbot_autofix": [
        Zc.GITHUB_CI_AUTOFIX,
        Zc.BUGBOT_AUTOFIX
    ],
    "source:qabot_frontend": [
        Zc.QABOT_FRONTEND
    ],
    "source:local": [
        Zc.LOCAL
    ]
}, Wpo = "cursor/glassSidebarSettings";

}
