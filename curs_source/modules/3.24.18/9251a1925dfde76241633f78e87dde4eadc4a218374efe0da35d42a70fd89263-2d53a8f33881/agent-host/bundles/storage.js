import { init_agent_host_storage } from "./storage/agent-host-storage.js";
import { init_blob_read_source } from "./storage/blob-read-source.js";
import { init_blob_read_summary } from "./storage/blob-read-summary.js";
import { init_catalog_merge } from "./storage/catalog-merge.js";
import { init_conversation_root_compare } from "./storage/conversation-root-compare.js";
import { init_durable_session_store } from "./storage/durable-session-store.js";
import { init_host_session_inspection } from "./storage/host-session-inspection.js";
import { init_host_session_registry } from "./storage/host-session-registry.js";
import { init_instruments } from "./storage/instruments.js";
import { init_open_host_session } from "./storage/open-host-session.js";
import { init_reachable_blobs } from "./storage/reachable-blobs.js";
import { init_session_blob_store } from "./storage/session-blob-store.js";
import { init_session_id } from "./storage/session-id.js";
import { init_session_manifest } from "./storage/session-manifest.js";
import { init_sqlite_store } from "./storage/sqlite-store.js";
import { init_storage_policy } from "./storage/storage-policy.js";
var __wakaru_init_storage_initialized = false;
export function init_storage() {
if (__wakaru_init_storage_initialized) return;
__wakaru_init_storage_initialized = true;
"use strict";
init_agent_host_storage();
init_blob_read_source();
init_blob_read_summary();
init_catalog_merge();
init_conversation_root_compare();
init_durable_session_store();
init_host_session_inspection();
init_host_session_registry();
init_instruments();
init_open_host_session();
init_reachable_blobs();
init_session_blob_store();
init_session_id();
init_session_manifest();
init_sqlite_store();
init_storage_policy();

}
