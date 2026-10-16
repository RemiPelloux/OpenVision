import { E } from "./tslib.es6.js";
var JCS, eTS, pjt, Dfa, X5r;
export { Dfa, JCS, X5r, eTS, pjt };
var __wakaru_jFe_initialized = false;
export function jFe() {
if (__wakaru_jFe_initialized) return;
__wakaru_jFe_initialized = true;
E(), JCS = Object.freeze({
    status: "aborted"
}), eTS = Symbol("zod_brand"), pjt = class extends Error {
    constructor(){
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
}, Dfa = class extends Error {
    constructor(t){
        super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
    }
}, X5r = {};

}
