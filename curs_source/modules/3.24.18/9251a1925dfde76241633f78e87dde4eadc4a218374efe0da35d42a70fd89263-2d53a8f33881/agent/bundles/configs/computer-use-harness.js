import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { init_shared } from "../tools/cloud-agents/computer-use/shared.js";
import { init_common9 } from "../tools/common.js";
import { init_core5 } from "../tools/core.js";
import { init_dist26 } from "../../../chat-inference/dist/index.js";
import { external_exports } from "../../../external_exports.js";
import { init_zod } from "../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { MouseButton, ScrollDirection, init_computer_use_tool_pb } from "../../../proto/dist/generated/agent/v1/computer_use_tool_pb.js";
var pixel, parameters, buttons, directions;
export { buttons, directions, parameters, pixel };
var __wakaru_init_computer_use_harness_initialized = false;
export function init_computer_use_harness() {
if (__wakaru_init_computer_use_harness_initialized) return;
__wakaru_init_computer_use_harness_initialized = true;
"use strict";
init_dist8();
init_dist26();
init_computer_use_tool_pb();
init_zod();
init_shared();
init_common9();
init_core5();
pixel = external_exports.number().int().min(0);
parameters = external_exports.object({
    action: external_exports.enum([
        "screenshot",
        "click",
        "move",
        "drag",
        "type",
        "key",
        "scroll",
        "wait"
    ]).describe("Action to perform."),
    x: pixel.optional().describe("Target/start x coordinate; pair with y. Required for move/drag."),
    y: pixel.optional().describe("Target/start y coordinate; pair with x. Required for move/drag."),
    x2: pixel.optional().describe("Drag destination x coordinate; required for drag."),
    y2: pixel.optional().describe("Drag destination y coordinate; required for drag."),
    text: external_exports.string().max(4e3).optional().describe("Text; newlines press Return and tabs press Tab; required for type."),
    key: external_exports.string().max(100).optional().describe("Key or shortcut; required for key, e.g. Return or ctrl+a."),
    button: external_exports.enum([
        "left",
        "right",
        "middle"
    ]).optional().describe("Click/drag mouse button; defaults to left."),
    modifiers: external_exports.array(external_exports.enum([
        "ctrl",
        "alt",
        "shift",
        "meta"
    ])).max(4).optional().describe("Keys held during click, drag, or scroll."),
    count: external_exports.number().int().min(1).max(3).optional().describe("Click count for click; defaults to 1."),
    direction: external_exports.enum([
        "up",
        "down",
        "left",
        "right"
    ]).optional().describe("Direction for scroll; defaults to down."),
    amount: external_exports.number().int().min(1).max(100).optional().describe("Amount for scroll; defaults to 3."),
    durationMs: external_exports.number().int().min(0).max(3e4).optional().describe("Duration for wait in milliseconds; defaults to 1000.")
});
buttons = {
    left: MouseButton.LEFT,
    right: MouseButton.RIGHT,
    middle: MouseButton.MIDDLE
};
directions = {
    up: ScrollDirection.UP,
    down: ScrollDirection.DOWN,
    left: ScrollDirection.LEFT,
    right: ScrollDirection.RIGHT
};

}
