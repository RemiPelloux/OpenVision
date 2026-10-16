import { init_dashboard } from "../../bidi_connect_exports.js";
import { init_auth } from "./auth/index.js";
import { init_loader3 } from "./mcp/loader.js";
import { init_paths } from "./paths.js";
import { init_permissions_file_provider } from "./permissions-file-provider.js";
import { init_project_permissions_file_provider } from "./project-permissions-file-provider.js";
var __wakaru_init_dist21_initialized = false;
export function init_dist21() {
if (__wakaru_init_dist21_initialized) return;
__wakaru_init_dist21_initialized = true;
"use strict";
init_auth();
init_dashboard();
init_loader3();
init_paths();
init_permissions_file_provider();
init_project_permissions_file_provider();

}
