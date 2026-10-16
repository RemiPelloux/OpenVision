import { init_dist8 } from "../agent-exec/dist/index.js";
import { init_dist40 } from "../agent-host-exec/dist/index.js";
import { init_surface_agent_store } from "./agent-store/surface-agent-store.ts";
import { init_surface_canvas } from "./surface-canvas.ts";
import { init_surface_conversation_search } from "./surface-conversation-search.ts";
import { init_surface_git } from "./surface-git.ts";
import { init_surface_hook } from "./surface-hook.ts";
import { init_surface_mcp_writer } from "./surface-mcp-writer.ts";
import { init_surface_request_context } from "./surface-request-context.ts";
var __wakaru_init_surface_resources_initialized = false;
export function init_surface_resources() {
if (__wakaru_init_surface_resources_initialized) return;
__wakaru_init_surface_resources_initialized = true;
"use strict";
init_dist8();
init_dist40();
init_surface_agent_store();
init_surface_canvas();
init_surface_conversation_search();
init_surface_git();
init_surface_hook();
init_surface_mcp_writer();
init_surface_request_context();

}
