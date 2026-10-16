import { E } from "./tslib.es6.js";
var ufr, oxo, __t, lQn, cQn;
export { __t, cQn, lQn, oxo, ufr };
var __wakaru_uQn_initialized = false;
export function uQn() {
if (__wakaru_uQn_initialized) return;
__wakaru_uQn_initialized = true;
E(), ufr = Object.freeze({
    status: "aborted"
}), oxo = Symbol("zod_brand"), __t = class extends Error {
    constructor(){
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
}, lQn = class extends Error {
    constructor(t){
        super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
    }
}, cQn = {};

}
