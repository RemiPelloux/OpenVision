import { BLOB_ID_HEX_PATTERN, HOST_SESSION_ORIGINS, init_session_manifest } from "./session-manifest.js";
import { __toESM, init_sqlite_store } from "./sqlite-store.js";
import { external_exports } from "../../../external_exports.js";
import { init_zod } from "../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var import_node_crypto3, import_node_fs7, import_node_path6, SESSION_META_FILE_NAME, SESSION_META_SCHEMA_VERSION, MAX_SESSION_META_BYTES, optionalPositiveMs2, optionalTitle2, optionalWorkspacePaths, hostSessionMetaSchema, HELD_SESSION_META_SUFFIX, RETIRED_SESSION_META_SUFFIX;
export { HELD_SESSION_META_SUFFIX, MAX_SESSION_META_BYTES, RETIRED_SESSION_META_SUFFIX, SESSION_META_FILE_NAME, SESSION_META_SCHEMA_VERSION, hostSessionMetaSchema, import_node_crypto3, import_node_fs7, import_node_path6, optionalPositiveMs2, optionalTitle2, optionalWorkspacePaths };
var __wakaru_init_session_meta_initialized = false;
export function init_session_meta() {
if (__wakaru_init_session_meta_initialized) return;
__wakaru_init_session_meta_initialized = true;
"use strict";
import_node_crypto3 = require("node:crypto");
import_node_fs7 = __toESM(require("node:fs"), 1);
import_node_path6 = __toESM(require("node:path"), 1);
init_zod();
init_session_manifest();
init_sqlite_store();
SESSION_META_FILE_NAME = "meta.json";
SESSION_META_SCHEMA_VERSION = 1;
MAX_SESSION_META_BYTES = 256 * 1024;
optionalPositiveMs2 = external_exports.number().finite().positive().optional().catch(void 0);
optionalTitle2 = external_exports.string().min(1).optional().catch(void 0);
optionalWorkspacePaths = external_exports.array(external_exports.unknown()).transform((entries)=>{
    const paths = entries.flatMap((entry)=>typeof entry === "string" ? [
            entry
        ] : []);
    return paths.length === 0 ? void 0 : paths;
}).optional().catch(void 0);
hostSessionMetaSchema = external_exports.object({
    schemaVersion: external_exports.literal(SESSION_META_SCHEMA_VERSION),
    sessionId: external_exports.string().min(1),
    origin: external_exports.enum(HOST_SESSION_ORIGINS),
    createdAtMs: external_exports.number().finite(),
    updatedAtMs: optionalPositiveMs2,
    title: optionalTitle2,
    isArchived: external_exports.boolean(),
    workspacePaths: optionalWorkspacePaths,
    latestRootBlobIdHex: external_exports.string().regex(BLOB_ID_HEX_PATTERN)
}).transform((parsed)=>({
        schemaVersion: parsed.schemaVersion,
        sessionId: parsed.sessionId,
        origin: parsed.origin,
        createdAtMs: parsed.createdAtMs,
        ...parsed.updatedAtMs === void 0 ? {} : {
            updatedAtMs: parsed.updatedAtMs
        },
        ...parsed.title === void 0 ? {} : {
            title: parsed.title
        },
        isArchived: parsed.isArchived,
        ...parsed.workspacePaths === void 0 ? {} : {
            workspacePaths: parsed.workspacePaths
        },
        latestRootBlobIdHex: parsed.latestRootBlobIdHex
    }));
HELD_SESSION_META_SUFFIX = ".retire";
RETIRED_SESSION_META_SUFFIX = ".retired";

}
