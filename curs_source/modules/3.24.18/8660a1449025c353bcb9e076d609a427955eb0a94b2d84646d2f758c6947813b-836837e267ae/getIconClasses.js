import { ms } from "./files.js";
import { y4 } from "./modesRegistry.js";
import { Ki } from "./network.js";
import { Lr } from "./resources.js";
import { ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
var bDp;
export { bDp };
var __wakaru_EB_initialized = false;
export function EB() {
if (__wakaru_EB_initialized) return;
__wakaru_EB_initialized = true;
"use strict";
E(), Ki(), Lr(), fn(), y4(), ms(), ta(), bDp = /(?:\/|^)(?:([^\/]+)\/)?([^\/]+)$/;

}
