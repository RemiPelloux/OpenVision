import { E } from "./tslib.es6.js";
var kqu;
export { kqu };
var __wakaru_wqu_initialized = false;
export function wqu() {
if (__wakaru_wqu_initialized) return;
__wakaru_wqu_initialized = true;
"use strict";
E(), kqu = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;

}
