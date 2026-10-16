import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { init_display } from "./display.js";
import { init_scaling } from "./scaling.js";
import { init_screen_stability } from "./screen-stability.js";
import { init_shell2 } from "./shell.js";
import { init_types6 } from "./types.js";
import { MouseButton, ScrollDirection, init_computer_use_tool_pb } from "../../../proto/dist/generated/agent/v1/computer_use_tool_pb.js";
var BUTTON_MAP, SCROLL_BUTTON;
export { BUTTON_MAP, SCROLL_BUTTON };
var __wakaru_init_x11_executor_initialized = false;
export function init_x11_executor() {
if (__wakaru_init_x11_executor_initialized) return;
__wakaru_init_x11_executor_initialized = true;
"use strict";
init_dist8();
init_computer_use_tool_pb();
init_display();
init_scaling();
init_screen_stability();
init_shell2();
init_types6();
BUTTON_MAP = {
    [MouseButton.UNSPECIFIED]: "1",
    [MouseButton.LEFT]: "1",
    [MouseButton.MIDDLE]: "2",
    [MouseButton.RIGHT]: "3",
    [MouseButton.BACK]: "8",
    [MouseButton.FORWARD]: "9"
};
SCROLL_BUTTON = {
    [ScrollDirection.UNSPECIFIED]: 5,
    [ScrollDirection.UP]: 4,
    [ScrollDirection.DOWN]: 5,
    [ScrollDirection.LEFT]: 6,
    [ScrollDirection.RIGHT]: 7
};

}
