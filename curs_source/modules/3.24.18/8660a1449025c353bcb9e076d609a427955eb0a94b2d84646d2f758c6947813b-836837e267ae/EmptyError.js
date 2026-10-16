import { E } from "./tslib.es6.js";
var EOa;
export { EOa };
var __wakaru_J5p_initialized = false;
export function J5p() {
if (__wakaru_J5p_initialized) return;
__wakaru_J5p_initialized = true;
E(), EOa = class extends Error {
    constructor(){
        super("no elements in sequence"), this.name = "EmptyError";
    }
};

}
