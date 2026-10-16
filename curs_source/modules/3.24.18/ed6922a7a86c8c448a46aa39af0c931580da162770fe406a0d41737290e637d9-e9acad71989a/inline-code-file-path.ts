import { x } from "./tslib.es6.js";
var Lzs, jMu, qMu, zMu, KMu, YMu, Nzs;
export { KMu, Lzs, Nzs, YMu, jMu, qMu, zMu };
var __wakaru_vhv_initialized = false;
export function vhv() {
if (__wakaru_vhv_initialized) return;
__wakaru_vhv_initialized = true;
"use strict";
x(), Lzs = /^(?!\d+(?:\.\d+)+$)(?:\.[A-Za-z0-9_+[\]-]+|[A-Za-z0-9_+[\]-]+(?:\.[A-Za-z0-9_+[\]-]+)+)$/, jMu = /#L?(\d+)(?:\s*-\s*L?(\d+))?$/i, qMu = /:(\d+)(?:\s*-\s*(\d+))?$/, zMu = /^(?:[^\\/\s]+[\\/])+[^\\/\s]+$/, KMu = /^(?:mdc:|\.{1,2}\/|~\/|\/|[A-Za-z]:\\)/, YMu = /^([a-z][a-z0-9+.-]*):/i, Nzs = new Set([
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
