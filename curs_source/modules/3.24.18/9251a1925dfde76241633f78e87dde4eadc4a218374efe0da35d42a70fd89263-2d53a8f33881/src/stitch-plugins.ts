import { init_dist } from "../context/dist/index.js";
import { registerImplementedDaemonCapability } from "../daemon_metrics_exports.js";
import { init_dist20 } from "../local-exec/dist/index.js";
import { DAEMON_CAPABILITY_PLUGINS_V1, init_capabilities2 } from "./capabilities.ts";
import { init_surface_plugins } from "./surface-plugins.ts";
var IMPORT_THIRD_PARTY;
export { IMPORT_THIRD_PARTY };
var __wakaru_init_stitch_plugins_initialized = false;
export function init_stitch_plugins() {
if (__wakaru_init_stitch_plugins_initialized) return;
__wakaru_init_stitch_plugins_initialized = true;
"use strict";
init_dist();
init_dist20();
init_capabilities2();
init_surface_plugins();
registerImplementedDaemonCapability(DAEMON_CAPABILITY_PLUGINS_V1);
IMPORT_THIRD_PARTY = {
    importThirdPartyPlugins: true
};

}
