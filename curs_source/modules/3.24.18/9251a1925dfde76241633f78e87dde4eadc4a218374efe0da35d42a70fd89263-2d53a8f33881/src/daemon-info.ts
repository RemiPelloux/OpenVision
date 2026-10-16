import { init_esm3 } from "../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { init_api_schema_revision } from "./api-schema-revision.ts";
import { init_capabilities2 } from "./capabilities.ts";
var INTEGER_REVISION_RE, SEMVER_REVISION_RE;
export { INTEGER_REVISION_RE, SEMVER_REVISION_RE };
var __wakaru_init_daemon_info_initialized = false;
export function init_daemon_info() {
if (__wakaru_init_daemon_info_initialized) return;
__wakaru_init_daemon_info_initialized = true;
"use strict";
init_esm3();
init_api_schema_revision();
init_capabilities2();
init_api_schema_revision();
INTEGER_REVISION_RE = /^\d+$/;
SEMVER_REVISION_RE = /^\d+\.\d+\.\d+$/;

}
