import { init_agent_store } from "./agent-store.js";
import { init_blob_not_found_error } from "./blob-not-found-error.js";
import { init_blob_read_kind } from "./blob-read-kind.js";
import { init_blob_store } from "./blob-store.js";
import { init_cached_blob_store } from "./cached-blob-store.js";
import { init_controlled } from "./controlled.js";
import { init_reference } from "./reference.js";
import { init_retry_blob_store } from "./retry-blob-store.js";
import { init_serde } from "./serde.js";
import { init_subagent_states } from "./subagent-states.js";
import { init_typed_blob_store } from "./typed-blob-store.js";
import { init_writethrough_middleware } from "./writethrough-middleware.js";
var __wakaru_init_dist5_initialized = false;
export function init_dist5() {
if (__wakaru_init_dist5_initialized) return;
__wakaru_init_dist5_initialized = true;
"use strict";
init_agent_store();
init_blob_read_kind();
init_blob_not_found_error();
init_blob_store();
init_cached_blob_store();
init_controlled();
init_reference();
init_retry_blob_store();
init_serde();
init_subagent_states();
init_typed_blob_store();
init_writethrough_middleware();

}
