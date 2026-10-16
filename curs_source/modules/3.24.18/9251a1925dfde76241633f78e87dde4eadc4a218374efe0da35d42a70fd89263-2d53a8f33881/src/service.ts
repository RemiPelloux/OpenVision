import { init_esm3 } from "../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { init_agent_host_pb } from "../proto/dist/generated/agent/v1/agent_host_pb.js";
import { init_agent_host_surface_pb } from "../proto/dist/generated/agent/v1/agent_host_surface_pb.js";
import { init_daemon_auth } from "./daemon-auth.ts";
import { init_daemon_info } from "./daemon-info.ts";
import { init_hydrate_attach_conversation_state } from "./hydrate-attach-conversation-state.ts";
import { init_map_request } from "./map-request.ts";
import { init_map_response } from "./map-response.ts";
import { init_product_auth_refresh } from "./product-auth-refresh.ts";
import { init_rpc } from "./rpc.ts";
import { init_surface_channel_hub } from "./surface-channel-hub.ts";
import { init_surface_test_hooks } from "./surface-test-hooks.ts";
var __wakaru_init_service_initialized = false;
export function init_service() {
if (__wakaru_init_service_initialized) return;
__wakaru_init_service_initialized = true;
"use strict";
init_agent_host_pb();
init_agent_host_surface_pb();
init_esm3();
init_daemon_auth();
init_daemon_info();
init_hydrate_attach_conversation_state();
init_map_request();
init_map_response();
init_product_auth_refresh();
init_rpc();
init_surface_channel_hub();
init_surface_test_hooks();

}
