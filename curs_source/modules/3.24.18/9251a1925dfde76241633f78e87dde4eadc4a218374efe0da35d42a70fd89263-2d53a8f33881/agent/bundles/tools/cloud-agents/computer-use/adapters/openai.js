import { convertKeyArray, convertScrollDelta, makeCoordinate2, mapButton } from "../../../../../../mcp_sandbox_policy_exports.js";
import { ClickAction, ComputerUseAction, Coordinate, DragAction, KeyAction, MouseButton, MouseMoveAction, ScrollAction, TypeAction, WaitAction, init_computer_use_tool_pb } from "../../../../../../proto/dist/generated/agent/v1/computer_use_tool_pb.js";
var OPENAI_KEY_MAP, OpenAIAdapter, openaiAdapter;
export { OPENAI_KEY_MAP, OpenAIAdapter, openaiAdapter };
var __wakaru_init_openai2_initialized = false;
export function init_openai2() {
if (__wakaru_init_openai2_initialized) return;
__wakaru_init_openai2_initialized = true;
"use strict";
init_computer_use_tool_pb();
OPENAI_KEY_MAP = {
    ENTER: "Return",
    LEFT: "Left",
    RIGHT: "Right",
    UP: "Up",
    DOWN: "Down",
    ESC: "Escape",
    SPACE: "space",
    BACKSPACE: "BackSpace",
    TAB: "Tab"
};
OpenAIAdapter = class {
    constructor(){
        this.providerId = "openai";
    }
    parseAction(input, _config) {
        const { type: type2 } = input;
        switch(type2){
            case "click":
                return [
                    new ComputerUseAction({
                        action: {
                            case: "click",
                            value: new ClickAction({
                                coordinate: makeCoordinate2(input),
                                button: mapButton(input.button),
                                count: 1
                            })
                        }
                    })
                ];
            case "double_click":
                return [
                    new ComputerUseAction({
                        action: {
                            case: "click",
                            value: new ClickAction({
                                coordinate: makeCoordinate2(input),
                                button: MouseButton.LEFT,
                                count: 2
                            })
                        }
                    })
                ];
            case "move":
                {
                    const coord = makeCoordinate2(input);
                    if (!coord) {
                        throw new Error("move requires x and y");
                    }
                    return [
                        new ComputerUseAction({
                            action: {
                                case: "mouseMove",
                                value: new MouseMoveAction({
                                    coordinate: coord
                                })
                            }
                        })
                    ];
                }
            case "scroll":
                {
                    const scrollX = input.scroll_x ?? 0;
                    const scrollY = input.scroll_y ?? 0;
                    if (scrollX === 0 && scrollY === 0) {
                        return [];
                    }
                    const { direction, amount } = convertScrollDelta(scrollX, scrollY);
                    return [
                        new ComputerUseAction({
                            action: {
                                case: "scroll",
                                value: new ScrollAction({
                                    coordinate: makeCoordinate2(input),
                                    direction,
                                    amount
                                })
                            }
                        })
                    ];
                }
            case "type":
                {
                    if (input.text === void 0) {
                        throw new Error("type requires text");
                    }
                    return [
                        new ComputerUseAction({
                            action: {
                                case: "type",
                                value: new TypeAction({
                                    text: input.text
                                })
                            }
                        })
                    ];
                }
            case "keypress":
                {
                    if (input.keys === void 0 || input.keys.length === 0) {
                        throw new Error("keypress requires keys");
                    }
                    return [
                        new ComputerUseAction({
                            action: {
                                case: "key",
                                value: new KeyAction({
                                    key: convertKeyArray(input.keys)
                                })
                            }
                        })
                    ];
                }
            case "drag":
                {
                    if (input.path === void 0 || input.path.length < 2) {
                        throw new Error("drag requires path with at least 2 points");
                    }
                    return [
                        new ComputerUseAction({
                            action: {
                                case: "drag",
                                value: new DragAction({
                                    path: input.path.map(([x, y])=>new Coordinate({
                                            x,
                                            y
                                        })),
                                    button: MouseButton.LEFT
                                })
                            }
                        })
                    ];
                }
            case "wait":
                {
                    if (input.ms === void 0) {
                        throw new Error("wait requires ms");
                    }
                    return [
                        new ComputerUseAction({
                            action: {
                                case: "wait",
                                value: new WaitAction({
                                    durationMs: input.ms
                                })
                            }
                        })
                    ];
                }
            default:
                {
                    const _exhaustive = type2;
                    throw new Error(`Unknown OpenAI action: ${_exhaustive}`);
                }
        }
    }
};
openaiAdapter = new OpenAIAdapter();

}
