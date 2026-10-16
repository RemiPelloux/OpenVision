import { init_rejections } from "./rejections.js";
var loadFailures;
export { loadFailures };
var __wakaru_init_loader_reports_initialized = false;
export function init_loader_reports() {
if (__wakaru_init_loader_reports_initialized) return;
__wakaru_init_loader_reports_initialized = true;
"use strict";
init_rejections();
loadFailures = new WeakMap();

}
