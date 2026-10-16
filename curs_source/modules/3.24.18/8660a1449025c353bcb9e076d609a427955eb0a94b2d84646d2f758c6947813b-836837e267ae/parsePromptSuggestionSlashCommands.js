import { a0 } from "./cursorRules.js";
import { E } from "./tslib.es6.js";
var WEl;
export { WEl };
var __wakaru_Mfs_initialized = false;
export function Mfs() {
if (__wakaru_Mfs_initialized) return;
__wakaru_Mfs_initialized = true;
"use strict";
E(), a0(), WEl = /(?:^|\s)(\/[\w-]+)(?=\s|$|[.,!?;:])/g;

}
