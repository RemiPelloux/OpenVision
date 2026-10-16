import { x } from "./tslib.es6.js";
var bVr;
export { bVr };
var __wakaru_Erg_initialized = false;
export function Erg() {
if (__wakaru_Erg_initialized) return;
__wakaru_Erg_initialized = true;
"use strict";
x(), bVr = [
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
