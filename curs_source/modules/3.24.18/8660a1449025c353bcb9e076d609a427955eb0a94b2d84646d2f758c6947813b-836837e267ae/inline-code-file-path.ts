import { E } from "./tslib.es6.js";
var HLa, TOp, EOp, IOp, xOp, AOp, WLa;
export { AOp, EOp, HLa, IOp, TOp, WLa, xOp };
var __wakaru_X21_initialized = false;
export function X21() {
if (__wakaru_X21_initialized) return;
__wakaru_X21_initialized = true;
"use strict";
E(), HLa = /^(?!\d+(?:\.\d+)+$)(?:\.[A-Za-z0-9_+[\]-]+|[A-Za-z0-9_+[\]-]+(?:\.[A-Za-z0-9_+[\]-]+)+)$/, TOp = /#L?(\d+)(?:\s*-\s*L?(\d+))?$/i, EOp = /:(\d+)(?:\s*-\s*(\d+))?$/, IOp = /^(?:[^\\/\s]+[\\/])+[^\\/\s]+$/, xOp = /^(?:mdc:|\.{1,2}\/|~\/|\/|[A-Za-z]:\\)/, AOp = /^([a-z][a-z0-9+.-]*):/i, WLa = new Set([
    "http:",
    "https:",
    "mailto:",
    "file:",
    "vscode:",
    "vscode-insiders:",
    "tel:",
    "ftp:",
    "ftps:",
    "ssh:",
    "git:",
    "github:",
    "gitlab:",
    "bitbucket:",
    "slack:",
    "teams:"
]);

}
