var SOCKET_ENV_VARS_TO_SCRUB;
export { SOCKET_ENV_VARS_TO_SCRUB };
var __wakaru_init_env_filter_initialized = false;
export function init_env_filter() {
if (__wakaru_init_env_filter_initialized) return;
__wakaru_init_env_filter_initialized = true;
"use strict";
SOCKET_ENV_VARS_TO_SCRUB = [
    "SSH_AUTH_SOCK",
    "DBUS_SESSION_BUS_ADDRESS",
    "XDG_RUNTIME_DIR",
    "WAYLAND_DISPLAY"
];

}
