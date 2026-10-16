import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_serde2 } from "./serde.js";
import { init_summarization_lifecycle } from "./summarization-lifecycle.js";
import { init_dist } from "../../context/dist/index.js";
import { createCounter, createHistogram } from "../../dist_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
import { init_dist27 } from "../../redaction/dist/index.js";
var logger68, pendingSummaryAdoption, pendingSummaryAgeAtTake, backgroundSummarizationStashed;
export { backgroundSummarizationStashed, logger68, pendingSummaryAdoption, pendingSummaryAgeAtTake };
var __wakaru_init_summarization_pending_store_initialized = false;
export function init_summarization_pending_store() {
if (__wakaru_init_summarization_pending_store_initialized) return;
__wakaru_init_summarization_pending_store_initialized = true;
"use strict";
init_dist();
init_dist4();
init_dist27();
init_serde2();
init_summarization_lifecycle();
logger68 = createLogger("summarization-pending-store");
pendingSummaryAdoption = createCounter("agent.background_summarization.pending_adoption", {
    description: "Outcomes of pending-summary adoption attempts at request start (adopted | persist_declined | rejected_prefix_mismatch | rejected_too_few_messages | rejected_threshold | rejected_version | error | empty)",
    labelNames: [
        "model",
        "outcome"
    ]
});
pendingSummaryAgeAtTake = createHistogram("agent.background_summarization.pending_age_ms", {
    description: "Age of a stashed pending summary when the next request takes it; ages near the store's TTL mean stashes are expiring before the conversation returns",
    labelNames: [
        "model"
    ]
});
backgroundSummarizationStashed = createCounter("agent.background_summarization.stashed", {
    description: "Post-turn stash outcomes for background summarizations that outlived their turn (stored | skipped_too_large | skipped_superseded | skipped_error_result | store_error)",
    labelNames: [
        "model",
        "outcome"
    ]
});

}
