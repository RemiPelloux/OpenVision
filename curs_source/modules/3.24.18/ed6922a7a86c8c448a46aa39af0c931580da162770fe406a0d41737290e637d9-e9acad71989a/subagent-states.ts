import { Wj, xee } from "./De_3.js";
import { zd } from "./agent_pb.js";
import { Yu } from "./browser.ts";
import { Gp } from "./index_3.ts";
import { mde } from "./index_4.ts";
import { DMn } from "./serde.ts";
import { x } from "./tslib.es6.js";
var Sfv, kfv;
export { Sfv, kfv };
var __wakaru_e2u_initialized = false;
export function e2u() {
if (__wakaru_e2u_initialized) return;
__wakaru_e2u_initialized = true;
"use strict";
x(), Gp(), mde(), zd(), Yu(), DMn(), Sfv = Wj("@anysphere/agent-kv:subagent-states"), kfv = xee("agent_kv.subagent_state_ref.missing_blob", {
    description: "Subagent state refs whose blob was missing, counted per read until a checkpoint rewrites the ref. fallback=inline kept the entry saved beside the ref (usually a transcript-free summary), dropped omitted the subagent, superseded kept a newer in-memory state.",
    labelNames: [
        "reader",
        "fallback"
    ]
});

}
