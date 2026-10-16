import { x } from "./tslib.es6.js";
var fBi, V6s, QZe, qIn, zIn;
export { QZe, V6s, fBi, qIn, zIn };
var __wakaru_KIn_initialized = false;
export function KIn() {
if (__wakaru_KIn_initialized) return;
__wakaru_KIn_initialized = true;
x(), fBi = Object.freeze({
    status: "aborted"
}), V6s = Symbol("zod_brand"), QZe = class extends Error {
    constructor(){
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
}, qIn = class extends Error {
    constructor(e){
        super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
    }
}, zIn = {};

}
