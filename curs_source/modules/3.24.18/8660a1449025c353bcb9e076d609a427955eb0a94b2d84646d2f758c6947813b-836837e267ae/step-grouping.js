import { fjt } from "./conversation-density.js";
import { DWh } from "./file-change-rollup.js";
import { smi } from "./string_3.js";
import { MFr } from "./tool-call-description.js";
import { YSn } from "./tool-call-view-model-description.js";
import { E } from "./tslib.es6.js";
var JWh, eGh, tGh, nGh;
export { JWh, eGh, nGh, tGh };
var __wakaru_Cjt_initialized = false;
export function Cjt() {
if (__wakaru_Cjt_initialized) return;
__wakaru_Cjt_initialized = true;
"use strict";
E(), fjt(), DWh(), MFr(), YSn(), smi(), JWh = 2, eGh = new Set([
    "readToolCall",
    "grepToolCall",
    "globToolCall",
    "lsToolCall",
    "semSearchToolCall",
    "searchConversationsToolCall",
    "readLintsToolCall",
    "readTodosToolCall",
    "fetchToolCall",
    "webFetchToolCall",
    "webSearchToolCall",
    "getMcpToolsToolCall",
    "generateImageToolCall"
]), tGh = new Set([
    "readToolCall",
    "lsToolCall"
]), nGh = [
    "cursor-ide-browser",
    "cursor-browser-extension"
];

}
