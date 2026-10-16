import { init_dist9 } from "../../../agent-client/dist/index.js";
import { init_network_start_transport } from "./network-start-transport.js";
import { init_private_inference_backend } from "./private-inference-backend.js";
import { __toESM } from "../storage/sqlite-store.js";
import { init_dist12 } from "../../../context-rpc/dist/index.js";
import { require_dist } from "../../../cursor-network/dist/index.js";
import { init_esm3 } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { init_agent_service_connect } from "../../../proto/dist/generated/agent/v1/agent_service_connect.js";
import { init_aiserver_connect } from "../../../proto/dist/generated/aiserver/v1/aiserver_connect.js";
import { init_background_composer_connect } from "../../../proto/dist/generated/aiserver/v1/background_composer_connect.js";
import { init_inference_connect } from "../../../proto/dist/generated/aiserver/v1/inference_connect.js";
import { init_private_inference_connect } from "../../../proto/dist/generated/aiserver/v1/private_inference_connect.js";
import { init_repository_connect } from "../../../proto/dist/generated/aiserver/v1/repository_connect.js";
var import_cursor_network2;
export { import_cursor_network2 };
var __wakaru_init_agent_transport2_initialized = false;
export function init_agent_transport2() {
if (__wakaru_init_agent_transport2_initialized) return;
__wakaru_init_agent_transport2_initialized = true;
"use strict";
init_dist9();
init_dist12();
import_cursor_network2 = __toESM(require_dist(), 1);
init_agent_service_connect();
init_aiserver_connect();
init_background_composer_connect();
init_inference_connect();
init_private_inference_connect();
init_repository_connect();
init_esm3();
init_network_start_transport();
init_private_inference_backend();

}
