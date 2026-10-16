import { E } from "./tslib.es6.js";
var Sbv;
export { Sbv };
var __wakaru_sg0_initialized = false;
export function sg0() {
if (__wakaru_sg0_initialized) return;
__wakaru_sg0_initialized = true;
E(), Sbv = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

}
