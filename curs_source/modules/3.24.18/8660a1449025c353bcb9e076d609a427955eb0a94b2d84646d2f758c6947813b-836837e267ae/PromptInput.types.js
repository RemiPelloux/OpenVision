import { sva } from "./ipa.js";
import { aFr } from "./schemas_4.js";
import { E } from "./tslib.es6.js";
var m$h;
export { m$h };
var __wakaru_PIS_initialized = false;
export function PIS() {
if (__wakaru_PIS_initialized) return;
__wakaru_PIS_initialized = true;
"use strict";
E(), aFr(), m$h = sva([
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
]);

}
