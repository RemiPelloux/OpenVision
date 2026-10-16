import { $, $e } from "./network.js";
import { Ha, Xn } from "./product.js";
import { h } from "./tslib.es6.js";
var Wfe, Bfe, v2, T2, Gfe;
export { Bfe, Gfe, T2, Wfe, v2 };
var __wakaru_dZe_initialized = false;
export function dZe() {
if (__wakaru_dZe_initialized) return;
__wakaru_dZe_initialized = true;
"use strict";
h(), $e(), Ha(), Wfe = new Set([
    $.http,
    $.https,
    $.data,
    "blob",
    "about"
]), Bfe = [
    "vscode",
    "cursor"
], v2 = new Set([
    $.file,
    $.command,
    $.vsls,
    $.webviewPanel,
    $.internal,
    $.extension,
    $.commentsInput,
    $.codeSetting,
    $.walkThrough,
    $.walkThroughSnippet,
    $.untitled,
    $.terminal,
    $.tmp,
    "javascript",
    "chrome",
    "devtools"
].map((e)=>e.toLowerCase())), T2 = typeof Xn.urlProtocol == "string" ? Xn.urlProtocol.toLowerCase() : void 0, T2 && v2.add(T2), Gfe = 1;

}
