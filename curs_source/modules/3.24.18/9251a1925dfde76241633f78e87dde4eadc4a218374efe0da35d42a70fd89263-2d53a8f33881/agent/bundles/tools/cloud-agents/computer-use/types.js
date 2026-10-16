import { external_exports } from "../../../../../external_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var anthropicComputerInputSchema, geminiComputerInputSchema, openaiComputerInputSchema;
export { anthropicComputerInputSchema, geminiComputerInputSchema, openaiComputerInputSchema };
var __wakaru_init_types14_initialized = false;
export function init_types14() {
if (__wakaru_init_types14_initialized) return;
__wakaru_init_types14_initialized = true;
"use strict";
init_zod();
anthropicComputerInputSchema = external_exports.object({
    action: external_exports.enum([
        "key",
        "hold_key",
        "type",
        "cursor_position",
        "mouse_move",
        "left_mouse_down",
        "left_mouse_up",
        "left_click",
        "left_click_drag",
        "right_click",
        "middle_click",
        "double_click",
        "triple_click",
        "scroll",
        "wait",
        "screenshot"
    ]),
    coordinate: external_exports.tuple([
        external_exports.number(),
        external_exports.number()
    ]).optional(),
    duration: external_exports.number().optional(),
    scroll_amount: external_exports.number().optional(),
    scroll_direction: external_exports.enum([
        "up",
        "down",
        "left",
        "right"
    ]).optional(),
    start_coordinate: external_exports.tuple([
        external_exports.number(),
        external_exports.number()
    ]).optional(),
    text: external_exports.string().optional(),
    key: external_exports.string().optional()
});
geminiComputerInputSchema = external_exports.object({
    name: external_exports.enum([
        "click_at",
        "double_click",
        "hover_at",
        "type_text_at",
        "key_combination",
        "scroll_at",
        "scroll_document",
        "drag_and_drop",
        "wait_5_seconds"
    ]),
    args: external_exports.object({
        x: external_exports.number().min(0).max(999).optional(),
        y: external_exports.number().min(0).max(999).optional(),
        text: external_exports.string().optional(),
        press_enter: external_exports.boolean().optional(),
        clear_before_typing: external_exports.boolean().optional(),
        keys: external_exports.string().optional(),
        direction: external_exports.enum([
            "up",
            "down",
            "left",
            "right"
        ]).optional(),
        magnitude: external_exports.number().min(0).max(999).optional(),
        destination_x: external_exports.number().min(0).max(999).optional(),
        destination_y: external_exports.number().min(0).max(999).optional()
    })
});
openaiComputerInputSchema = external_exports.object({
    type: external_exports.enum([
        "click",
        "double_click",
        "scroll",
        "type",
        "wait",
        "move",
        "keypress",
        "drag"
    ]),
    x: external_exports.number().optional(),
    y: external_exports.number().optional(),
    button: external_exports.enum([
        "left",
        "right",
        "middle"
    ]).optional(),
    scroll_x: external_exports.number().optional(),
    scroll_y: external_exports.number().optional(),
    text: external_exports.string().optional(),
    ms: external_exports.number().optional(),
    keys: external_exports.array(external_exports.string()).optional(),
    path: external_exports.array(external_exports.tuple([
        external_exports.number(),
        external_exports.number()
    ])).optional()
});

}
