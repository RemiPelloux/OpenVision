import { S } from "./HVr.js";
import { rt } from "./nls.js";
import { Ew, RV } from "./product.js";
import { x } from "./tslib.es6.js";
var IMh;
export { IMh };
var __wakaru_Nr__initialized = false;
export function Nr_() {
if (__wakaru_Nr__initialized) return;
__wakaru_Nr__initialized = true;
"use strict";
x(), rt(), RV(), IMh = {
    "terminal.integrated.stickyScroll.enabled": {
        markdownDescription: S(10838, null, "https://code.visualstudio.com/docs/terminal/shell-integration", "`#terminal.integrated.shellIntegration.enabled#`"),
        type: "boolean",
        default: Ew.quality !== "stable"
    },
    "terminal.integrated.stickyScroll.maxLineCount": {
        markdownDescription: S(10839, null),
        type: "number",
        default: 5,
        minimum: 1,
        maximum: 10
    },
    "terminal.integrated.stickyScroll.ignoredCommands": {
        markdownDescription: S(10840, null),
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
