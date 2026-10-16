import { E } from "./tslib.es6.js";
var swo;
export { swo };
var __wakaru_hpy_initialized = false;
export function hpy() {
if (__wakaru_hpy_initialized) return;
__wakaru_hpy_initialized = true;
"use strict";
E(), swo = [
    "X-Client-IP",
    "X-Forwarded-For",
    "Fly-Client-IP",
    "CF-Connecting-IP",
    "Fastly-Client-Ip",
    "True-Client-Ip",
    "X-Real-IP",
    "X-Cluster-Client-IP",
    "X-Forwarded",
    "Forwarded-For",
    "Forwarded",
    "X-Vercel-Forwarded-For"
];

}
