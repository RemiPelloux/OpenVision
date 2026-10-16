import { init_server3 } from "./server.ts";
import { init_surface_channel_hub } from "./surface-channel-hub.ts";
import { init_surface_test_hooks } from "./surface-test-hooks.ts";
var __wakaru_init_daemon_initialized = false;
export function init_daemon() {
if (__wakaru_init_daemon_initialized) return;
__wakaru_init_daemon_initialized = true;
"use strict";
init_server3();
init_surface_channel_hub();
init_surface_test_hooks();

}
