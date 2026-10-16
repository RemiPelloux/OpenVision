import { E } from "./tslib.es6.js";
var j0i, SXa;
export { SXa, j0i };
var __wakaru_$0i_initialized = false;
export function $0i() {
if (__wakaru_$0i_initialized) return;
__wakaru_$0i_initialized = true;
E(), j0i = class extends Error {
    constructor(){
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
}, SXa = {};

}
