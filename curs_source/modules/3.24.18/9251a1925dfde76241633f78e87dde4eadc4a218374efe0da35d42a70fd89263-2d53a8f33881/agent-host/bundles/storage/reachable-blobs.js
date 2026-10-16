import { init_dist5 } from "../../../agent-kv/dist/index.js";
import { init_esm2 } from "../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_blob_reference_metadata } from "../../../proto/dist/generated/agent/v1/blob_reference_metadata.js";
var reachability;
export { reachability };
var __wakaru_init_reachable_blobs_initialized = false;
export function init_reachable_blobs() {
if (__wakaru_init_reachable_blobs_initialized) return;
__wakaru_init_reachable_blobs_initialized = true;
"use strict";
init_dist5();
init_blob_reference_metadata();
init_esm2();
reachability = new Map();

}
