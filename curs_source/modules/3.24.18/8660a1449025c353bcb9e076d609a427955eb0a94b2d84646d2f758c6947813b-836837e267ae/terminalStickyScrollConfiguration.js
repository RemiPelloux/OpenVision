import { D } from "./Iwo.js";
import { Bt } from "./nls.js";
import { IC, oY } from "./product.js";
import { E } from "./tslib.es6.js";
var _yg;
export { _yg };
var __wakaru_G0k_initialized = false;
export function G0k() {
if (__wakaru_G0k_initialized) return;
__wakaru_G0k_initialized = true;
"use strict";
E(), Bt(), oY(), _yg = {
    "terminal.integrated.stickyScroll.enabled": {
        markdownDescription: D(10838, null, "https://code.visualstudio.com/docs/terminal/shell-integration", "`#terminal.integrated.shellIntegration.enabled#`"),
        type: "boolean",
        default: IC.quality !== "stable"
    },
    "terminal.integrated.stickyScroll.maxLineCount": {
        markdownDescription: D(10839, null),
        type: "number",
        default: 5,
        minimum: 1,
        maximum: 10
    },
    "terminal.integrated.stickyScroll.ignoredCommands": {
        markdownDescription: D(10840, null),
        type: "array",
        items: {
            type: "string"
        },
        default: [
            "clear",
            "cls",
            "clear-host",
            "agent",
            "agy",
            "copilot",
            "claude",
            "codex",
            "gemini"
        ]
    }
};

}
