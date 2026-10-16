import { init_dist9 } from "../../../../agent-client/dist/index.js";
import { init_agent_transport2 } from "../../network/agent-transport.js";
import { init_headless_network_platform } from "../../network/headless-network-platform.js";
import { init_platform_network_host } from "../../network/platform-network-host.js";
var __wakaru_init_backend_clients_initialized = false;
export function init_backend_clients() {
if (__wakaru_init_backend_clients_initialized) return;
__wakaru_init_backend_clients_initialized = true;
"use strict";
init_dist9();
init_agent_transport2();
init_headless_network_platform();
init_platform_network_host();

}
