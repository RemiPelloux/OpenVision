import { h } from "./tslib.es6.js";
import { rgPath as ZBe } from "@vscode/ripgrep";
var oG;
export { oG };
var __wakaru_e7e_initialized = false;
export function e7e() {
if (__wakaru_e7e_initialized) return;
__wakaru_e7e_initialized = true;
"use strict";
h(), oG = ZBe.replace(/\bnode_modules\.asar\b/, "node_modules.asar.unpacked");

}
