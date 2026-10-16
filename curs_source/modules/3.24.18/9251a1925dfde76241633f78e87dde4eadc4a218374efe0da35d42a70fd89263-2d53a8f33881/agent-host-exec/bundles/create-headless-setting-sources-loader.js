import { init_ripgrep2 } from "./ripgrep.js";
import { init_setting_sources } from "./setting-sources.js";
import { init_dist } from "../../context/dist/index.js";
import { init_headless_defaults } from "../../daemon_metrics_exports.js";
import { init_dist20 } from "../../local-exec/dist/index.js";
var import_node_os29, NOOP_AGENT_SKILLS_SERVICE;
export { NOOP_AGENT_SKILLS_SERVICE, import_node_os29 };
var __wakaru_init_create_headless_setting_sources_loader_initialized = false;
export function init_create_headless_setting_sources_loader() {
if (__wakaru_init_create_headless_setting_sources_loader_initialized) return;
__wakaru_init_create_headless_setting_sources_loader_initialized = true;
"use strict";
import_node_os29 = require("node:os");
init_dist();
init_dist20();
init_headless_defaults();
init_ripgrep2();
init_setting_sources();
NOOP_AGENT_SKILLS_SERVICE = {
    getAllAgentSkills: async ()=>[],
    reload () {},
    onDidChangeSkills: ()=>()=>{},
    dispose () {}
};

}
