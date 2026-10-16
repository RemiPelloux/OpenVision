import { Fi } from "./files.js";
import { $T } from "./modesRegistry.js";
import { li } from "./network.js";
import { Li } from "./resources.js";
import { Sr } from "./themables.js";
import { x } from "./tslib.es6.js";
import { Qt } from "./uri.js";
var Jwu;
export { Jwu };
var __wakaru_WM_initialized = false;
export function WM() {
if (__wakaru_WM_initialized) return;
__wakaru_WM_initialized = true;
"use strict";
x(), li(), Li(), Qt(), $T(), Fi(), Sr(), Jwu = /(?:\/|^)(?:([^\/]+)\/)?([^\/]+)$/;

}
