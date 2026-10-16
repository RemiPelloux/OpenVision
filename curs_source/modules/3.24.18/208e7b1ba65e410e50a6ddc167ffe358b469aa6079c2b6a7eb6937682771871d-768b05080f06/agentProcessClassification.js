import { h } from "./tslib.es6.js";
var jTe;
export { jTe };
var __wakaru_nit_initialized = false;
export function nit() {
if (__wakaru_nit_initialized) return;
__wakaru_nit_initialized = true;
"use strict";
h(), jTe = /(cursor|electron)[^/\\]* helper|^(cursor( dev| nightly| lab)?|code( - insiders)?|electron)(\.exe)?$|(^|[/\\])(cursor( dev| nightly| lab)?|code( - insiders)?|electron)\.app[/\\]contents[/\\]|[/\\]\.build[/\\]electron[/\\]/i;

}
