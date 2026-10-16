import { init_computer_use2 } from "./computer-use.js";
import { init_desktop_lease } from "./desktop-lease.js";
import { init_display } from "./display.js";
import { init_input_event_logger } from "./input-event-logger.js";
import { init_lazy_computer_use } from "./lazy-computer-use.js";
import { init_mac_remote_executor } from "./mac-remote-executor.js";
import { init_mac_rpc_client } from "./mac-rpc-client.js";
import { init_mac_sidecar_install } from "./mac-sidecar-install.js";
import { init_scaling } from "./scaling.js";
import { init_shell2 } from "./shell.js";
import { init_sidecar_release_pin } from "./sidecar-release-pin.js";
import { init_types6 } from "./types.js";
import { init_x11_executor } from "./x11-executor.js";
var __wakaru_init_computer_use3_initialized = false;
export function init_computer_use3() {
if (__wakaru_init_computer_use3_initialized) return;
__wakaru_init_computer_use3_initialized = true;
"use strict";
init_computer_use2();
init_desktop_lease();
init_display();
init_input_event_logger();
init_lazy_computer_use();
init_mac_remote_executor();
init_mac_rpc_client();
init_mac_sidecar_install();
init_scaling();
init_shell2();
init_sidecar_release_pin();
init_types6();
init_x11_executor();

}
