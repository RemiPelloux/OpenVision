import { init_paths3 } from "./paths.js";
import { init_secure_open } from "./secure-open.js";
import { init_stat_fast_path } from "./stat-fast-path.js";
var META_DELETION_ARMED, META_FILES_ROOT_DEV, META_FILES_ROOT_INO, META_TOMBSTONE_CURSOR_MS, META_LAST_COMPLETE_ROUND_MS, META_LAST_LISTING_APPLIED_MS, META_INDEX_CREATED_MS, META_TOMBSTONE_ROUNDS_SINCE_INCLUDE, META_TOMBSTONE_LAST_INCLUDE_MS, META_REMOTE_VERSION, META_REMOTE_VERSION_LISTED_MS, STAT_COLUMN_IS_SET, CLEAR_RECORDED_STATS_SQL;
export { CLEAR_RECORDED_STATS_SQL, META_DELETION_ARMED, META_FILES_ROOT_DEV, META_FILES_ROOT_INO, META_INDEX_CREATED_MS, META_LAST_COMPLETE_ROUND_MS, META_LAST_LISTING_APPLIED_MS, META_REMOTE_VERSION, META_REMOTE_VERSION_LISTED_MS, META_TOMBSTONE_CURSOR_MS, META_TOMBSTONE_LAST_INCLUDE_MS, META_TOMBSTONE_ROUNDS_SINCE_INCLUDE, STAT_COLUMN_IS_SET };
var __wakaru_init_local_index_initialized = false;
export function init_local_index() {
if (__wakaru_init_local_index_initialized) return;
__wakaru_init_local_index_initialized = true;
"use strict";
init_paths3();
init_secure_open();
init_stat_fast_path();
META_DELETION_ARMED = "deletion_armed";
META_FILES_ROOT_DEV = "files_root_dev";
META_FILES_ROOT_INO = "files_root_ino";
META_TOMBSTONE_CURSOR_MS = "tombstone_cursor_ms";
META_LAST_COMPLETE_ROUND_MS = "last_complete_round_ms";
META_LAST_LISTING_APPLIED_MS = "last_listing_applied_ms";
META_INDEX_CREATED_MS = "index_created_ms";
META_TOMBSTONE_ROUNDS_SINCE_INCLUDE = "tombstone_rounds_since_include";
META_TOMBSTONE_LAST_INCLUDE_MS = "tombstone_last_include_ms";
META_REMOTE_VERSION = "remote_version";
META_REMOTE_VERSION_LISTED_MS = "remote_version_listed_ms";
STAT_COLUMN_IS_SET = "stat_size IS NOT NULL OR stat_mtime_ns IS NOT NULL OR stat_ctime_ns IS NOT NULL OR stat_ino IS NOT NULL OR stat_dev IS NOT NULL OR stat_recorded_ms IS NOT NULL";
CLEAR_RECORDED_STATS_SQL = `UPDATE files SET
  stat_size = NULL,
  stat_mtime_ns = NULL,
  stat_ctime_ns = NULL,
  stat_ino = NULL,
  stat_dev = NULL,
  stat_recorded_ms = NULL
 WHERE ${STAT_COLUMN_IS_SET}`;

}
