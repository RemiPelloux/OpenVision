import { E } from "./tslib.es6.js";
var Ot1, Ft1, dvi, P7r;
export { Ft1, Ot1, P7r, dvi };
var __wakaru_hvi_initialized = false;
export function hvi() {
if (__wakaru_hvi_initialized) return;
__wakaru_hvi_initialized = true;
E(), Ot1 = Object.freeze({
    status: "aborted"
}), Ft1 = Symbol("zod_brand"), dvi = class extends Error {
    constructor(){
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
}, P7r = {};

}
