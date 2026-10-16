import { x } from "./tslib.es6.js";
var Y2n, Ago;
export { Ago, Y2n };
var __wakaru_X2n_initialized = false;
export function X2n() {
if (__wakaru_X2n_initialized) return;
__wakaru_X2n_initialized = true;
x(), Y2n = class extends Error {
    constructor(){
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
}, Ago = {};

}
