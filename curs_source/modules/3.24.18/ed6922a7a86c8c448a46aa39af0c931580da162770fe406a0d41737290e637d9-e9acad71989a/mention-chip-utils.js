import { xRe } from "./cursor-icons.js";
import { CIf, sLi, wIf } from "./f0s.js";
import { IIf } from "./index_143.js";
import { d1n } from "./parse_3.js";
import { aLi } from "./schemas_2.js";
import { x } from "./tslib.es6.js";
var cLi, MGl, PGl, LGl, NGl, OGl, FGl;
export { FGl, LGl, MGl, NGl, OGl, PGl, cLi };
var __wakaru_KXe_initialized = false;
export function KXe() {
if (__wakaru_KXe_initialized) return;
__wakaru_KXe_initialized = true;
"use strict";
x(), IIf(), xRe(), aLi(), d1n(), cLi = new Set([
    "subagent",
    "mode",
    "skill",
    "command",
    "action",
    "reference"
]), MGl = [
    "file",
    "code",
    "chat",
    "folder",
    "doc",
    "cursorRule",
    "browser",
    "terminal",
    "branch",
    "mcp",
    "canvas",
    "clipboard"
], PGl = new Set(MGl), LGl = [
    "fileSelection",
    "folderSelection",
    "docSelection",
    "cursorRule",
    "terminalFile",
    "codeSelection",
    "browserConnection",
    "browserSelection",
    "gitPRDiffSelection",
    "chatSelection",
    "pastChatSelection",
    "uiElement",
    "branch",
    "mcpSelection",
    "canvasSelection"
], NGl = new Set(LGl), OGl = new Set([
    "primary",
    "secondary",
    "tertiary",
    "quaternary",
    "git-added",
    "git-modified",
    "git-removed",
    "git-untracked",
    "cyan",
    "blue",
    "red",
    "green",
    "success",
    "danger",
    "yellow",
    "magenta",
    "orange",
    "purple",
    "accent",
    "brand"
]), FGl = wIf({
    case: CIf("uiElement"),
    element: sLi(),
    xpath: sLi(),
    textContent: sLi(),
    extra: sLi()
});

}
