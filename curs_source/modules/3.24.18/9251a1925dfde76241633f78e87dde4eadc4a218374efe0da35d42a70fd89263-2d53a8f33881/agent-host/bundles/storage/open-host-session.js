import { init_conversation_root_compare } from "./conversation-root-compare.js";
import { init_durable_session_store } from "./durable-session-store.js";
import { init_instruments } from "./instruments.js";
import { init_reachable_blobs } from "./reachable-blobs.js";
import { init_session_blob_store } from "./session-blob-store.js";
import { init_session_id } from "./session-id.js";
import { init_session_manifest } from "./session-manifest.js";
import { init_sqlite_store } from "./sqlite-store.js";
import { init_dist5 } from "../../../agent-kv/dist/index.js";
import { toHex } from "../../../dist_exports.js";
import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
var SEED_PASSES, rejectLegacyReads, COMPARE_PASSES;
export { COMPARE_PASSES, SEED_PASSES, rejectLegacyReads };
var __wakaru_init_open_host_session_initialized = false;
export function init_open_host_session() {
if (__wakaru_init_open_host_session_initialized) return;
__wakaru_init_open_host_session_initialized = true;
"use strict";
init_dist5();
init_agent_pb();
init_conversation_root_compare();
init_durable_session_store();
init_instruments();
init_reachable_blobs();
init_session_blob_store();
init_session_id();
init_session_manifest();
init_sqlite_store();
SEED_PASSES = 2;
rejectLegacyReads = async (blobId)=>{
    throw new Error(`no legacy blob reader to read ${toHex(blobId).slice(0, 12)}\u2026 from`);
};
COMPARE_PASSES = 2;

}
