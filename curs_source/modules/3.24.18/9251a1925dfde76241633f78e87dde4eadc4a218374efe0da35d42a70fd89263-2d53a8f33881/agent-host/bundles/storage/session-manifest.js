import { init_session_blob_store } from "./session-blob-store.js";
import { init_session_listing_projection } from "./session-listing-projection.js";
import { external_exports } from "../../../external_exports.js";
import { init_zod } from "../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var HOST_SESSION_MANIFEST_KEY, HOST_SESSION_MANIFEST_VERSION, HOST_SESSION_ORIGINS, BLOB_ID_HEX_PATTERN, hostSessionManifestSchema;
export { BLOB_ID_HEX_PATTERN, HOST_SESSION_MANIFEST_KEY, HOST_SESSION_MANIFEST_VERSION, HOST_SESSION_ORIGINS, hostSessionManifestSchema };
var __wakaru_init_session_manifest_initialized = false;
export function init_session_manifest() {
if (__wakaru_init_session_manifest_initialized) return;
__wakaru_init_session_manifest_initialized = true;
"use strict";
init_zod();
init_session_blob_store();
init_session_listing_projection();
HOST_SESSION_MANIFEST_KEY = "agentHost:sessionManifest";
HOST_SESSION_MANIFEST_VERSION = 1;
HOST_SESSION_ORIGINS = [
    "migrated-from-renderer-cas",
    "host-native"
];
BLOB_ID_HEX_PATTERN = /^[0-9a-f]{64}$/;
hostSessionManifestSchema = external_exports.object({
    manifestVersion: external_exports.literal(HOST_SESSION_MANIFEST_VERSION),
    sessionId: external_exports.string().min(1),
    latestRootBlobIdHex: external_exports.string().regex(BLOB_ID_HEX_PATTERN),
    origin: external_exports.enum(HOST_SESSION_ORIGINS),
    createdAtMs: external_exports.number().int().nonnegative(),
    migratedBlobCount: external_exports.number().int().nonnegative()
}).strict();

}
