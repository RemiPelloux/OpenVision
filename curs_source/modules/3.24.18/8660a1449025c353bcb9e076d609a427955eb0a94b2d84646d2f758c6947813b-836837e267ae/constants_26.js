import { Ki, Ot } from "./network.js";
import { E } from "./tslib.es6.js";
var iKv, rKv, sKv, oKv, aKv, lKv, cKv;
export { aKv, cKv, iKv, lKv, oKv, rKv, sKv };
var __wakaru_uKv_initialized = false;
export function uKv() {
if (__wakaru_uKv_initialized) return;
__wakaru_uKv_initialized = true;
"use strict";
E(), Ki(), iKv = [
    "node_modules",
    "__tests__",
    ".git",
    "dist",
    "out",
    "bin",
    "site-packages",
    "__pycache__"
], rKv = new Set([
    Ot.aiChat,
    Ot.cursorDev,
    Ot.aiSettings,
    Ot.vscodeSettings
]), sKv = new RegExp("(^|\\/)" + iKv.join("|") + "(\\/|$)"), oKv = /\.(png|jpg|jpeg|gif|tiff)$/i, aKv = 9e3, lKv = 100, cKv = 50;

}
