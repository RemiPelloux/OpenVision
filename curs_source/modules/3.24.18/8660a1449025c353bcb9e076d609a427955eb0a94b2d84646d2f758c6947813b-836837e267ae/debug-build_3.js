import { E } from "./tslib.es6.js";
var qv;
export { qv };
var __wakaru_uce_initialized = false;
export function uce() {
if (__wakaru_uce_initialized) return;
__wakaru_uce_initialized = true;
E(), qv = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;

}
