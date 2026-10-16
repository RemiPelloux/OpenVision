import { Q, ne } from "./instantiation.js";
import { h } from "./tslib.es6.js";
var sf, Pa, Whe, FO, WO;
export { FO, Pa, WO, Whe, sf };
var __wakaru_c1_initialized = false;
export function c1() {
if (__wakaru_c1_initialized) return;
__wakaru_c1_initialized = true;
"use strict";
h(), ne(), sf = Q("tracingService"), Pa = "module_version", Whe = "module_sequence", FO = {
    "agent_host.updater.outcome": [
        "kind",
        "module_channel",
        Pa,
        "reason",
        "remote"
    ],
    "agent_host.updater.retry": [
        "kind",
        "class",
        "phase",
        "module_channel",
        "remote"
    ],
    "agent_host.updater.signature": [
        "status",
        "enforced",
        "module_channel",
        Pa,
        "remote"
    ],
    "agent_host.updater.heartbeat": [
        "state",
        "module_age",
        "module_channel",
        Pa,
        "remote"
    ],
    "agent_host.updater.sidecar": [
        "record",
        "result",
        "remote"
    ]
}, WO = {
    "agent_host.updater.apply_delay_ms": [
        "kind",
        "module_channel",
        Pa,
        "remote"
    ],
    "agent_host.updater.stage_ms": [
        "result",
        "module_channel",
        Pa,
        "remote"
    ],
    "agent_host.updater.fetch_ms": [
        "result",
        "module_channel",
        Pa,
        "remote"
    ],
    "agent_host.updater.fetch_bytes": [
        "result",
        "module_channel",
        Pa,
        "remote"
    ]
};

}
