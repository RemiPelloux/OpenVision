import { ju } from "./agent_pb.js";
import { kl } from "./browser.ts";
import { Ng } from "./index_3.ts";
import { iCe } from "./index_4.ts";
import { hpe, iie } from "./ipa.js";
import { FSi } from "./serde.ts";
import { E } from "./tslib.es6.js";
var $N1, HN1;
export { $N1, HN1 };
var __wakaru_w4p_initialized = false;
export function w4p() {
if (__wakaru_w4p_initialized) return;
__wakaru_w4p_initialized = true;
"use strict";
E(), Ng(), iCe(), ju(), kl(), FSi(), $N1 = iie("@anysphere/agent-kv:subagent-states"), HN1 = hpe("agent_kv.subagent_state_ref.missing_blob", {
    description: "Subagent state refs whose blob was missing, counted per read until a checkpoint rewrites the ref. fallback=inline kept the entry saved beside the ref (usually a transcript-free summary), dropped omitted the subagent, superseded kept a newer in-memory state.",
    labelNames: [
        "reader",
        "fallback"
    ]
});

}
