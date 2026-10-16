import { tB } from "./mime.js";
import { Ki } from "./network.js";
import { Lr } from "./resources.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
var d5i, h5i;
export { d5i, h5i };
var __wakaru_sRt_initialized = false;
export function sRt() {
if (__wakaru_sRt_initialized) return;
__wakaru_sRt_initialized = true;
"use strict";
E(), tB(), Ki(), Lr(), fn(), d5i = 25 * 1024 * 1024, h5i = new Set([
    ".bmp",
    ".gif",
    ".jpeg",
    ".jpg",
    ".png",
    ".webp"
]);

}
