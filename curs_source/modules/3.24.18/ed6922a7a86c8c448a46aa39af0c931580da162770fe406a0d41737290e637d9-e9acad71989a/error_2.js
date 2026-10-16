import { x } from "./tslib.es6.js";
var das;
export { das };
var __wakaru_Zki_initialized = false;
export function Zki() {
if (__wakaru_Zki_initialized) return;
__wakaru_Zki_initialized = true;
x(), process.env.NODE_ENV !== "production" && (das = new Set);

}
