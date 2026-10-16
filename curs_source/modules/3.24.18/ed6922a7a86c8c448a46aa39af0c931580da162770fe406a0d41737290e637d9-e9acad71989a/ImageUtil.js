import { Fo, jn } from "./HVr.js";
import { k_h } from "./canvasEncoding.js";
import { Q9 } from "./mime.js";
import { li } from "./network.js";
import { Li } from "./resources.js";
import { x } from "./tslib.es6.js";
import { Qt } from "./uri.js";
import { Js } from "./uuid.js";
var kJi, yIh, z3n, wJi, Mjt, GTo;
export { GTo, Mjt, kJi, wJi, yIh, z3n };
var __wakaru_koe_initialized = false;
export function koe() {
if (__wakaru_koe_initialized) return;
__wakaru_koe_initialized = true;
"use strict";
x(), Fo(), Q9(), li(), jn(), Li(), Qt(), Js(), k_h(), kJi = 1024 * 1024, yIh = 10 * 1024 * 1024, z3n = 1024, wJi = "image/svg+xml", Mjt = "image/png", GTo = new Set([
    "image/heic",
    "image/heif",
    "image/heic-sequence",
    "image/heif-sequence"
]);

}
