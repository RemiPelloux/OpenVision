import { OHe } from "./cursor-icons.js";
import { YFS } from "./index_149.js";
import { GFS, h4r, qFS } from "./ipa.js";
import { MSn } from "./parse_5.js";
import { m4r } from "./schemas_5.js";
import { E } from "./tslib.es6.js";
var f4r, iZh, ESa, rZh, sZh, oZh, aZh;
export { ESa, aZh, f4r, iZh, oZh, rZh, sZh };
var __wakaru_Mkt_initialized = false;
export function Mkt() {
if (__wakaru_Mkt_initialized) return;
__wakaru_Mkt_initialized = true;
"use strict";
E(), YFS(), OHe(), m4r(), MSn(), f4r = new Set([
    "subagent",
    "mode",
    "skill",
    "command",
    "action",
    "reference"
]), iZh = [
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
], ESa = new Set(iZh), rZh = [
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
], sZh = new Set(rZh), oZh = new Set([
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
]), aZh = GFS({
    case: qFS("uiElement"),
    element: h4r(),
    xpath: h4r(),
    textContent: h4r(),
    extra: h4r()
});

}
