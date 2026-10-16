import { __toESM } from "../agent-host/dist/storage/sqlite-store.js";
import { init_esm4 } from "../node_modules/.pnpm/_46b84b12e081161e2c23c10160f61a1d/node_modules/@connectrpc/connect-node/dist/esm/index.js";
import { init_agent_host_connect } from "../proto/dist/generated/agent/v1/agent_host_connect.js";
import { init_http2_options } from "./http2-options.ts";
import { init_listen } from "./listen.ts";
import { init_service } from "./service.ts";
import { init_surface_channel_hub } from "./surface-channel-hub.ts";
import { init_surface_test_hooks } from "./surface-test-hooks.ts";
import { init_unix_socket } from "./unix-socket.ts";
var import_node_fs44, http22;
export { http22, import_node_fs44 };
var __wakaru_init_server3_initialized = false;
export function init_server3() {
if (__wakaru_init_server3_initialized) return;
__wakaru_init_server3_initialized = true;
"use strict";
import_node_fs44 = require("node:fs");
http22 = __toESM(require("node:http2"), 1);
init_agent_host_connect();
init_esm4();
init_http2_options();
init_listen();
init_service();
init_surface_channel_hub();
init_surface_test_hooks();
init_unix_socket();

}
