import { init_workspace_list } from "./workspace-list.js";
import { init_client4 } from "../public-api/client.js";
import { init_esm2 } from "../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
var __wakaru_init_catalog_session_summary_initialized = false;
export function init_catalog_session_summary() {
if (__wakaru_init_catalog_session_summary_initialized) return;
__wakaru_init_catalog_session_summary_initialized = true;
"use strict";
init_esm2();
init_client4();
init_workspace_list();

}
