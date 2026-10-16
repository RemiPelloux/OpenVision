import { x } from "./tslib.es6.js";
var eas;
export { eas };
var __wakaru_zbn_initialized = false;
export function zbn() {
if (__wakaru_zbn_initialized) return;
__wakaru_zbn_initialized = true;
x(), process.env.NODE_ENV !== "production" && (eas = new Set);

}
