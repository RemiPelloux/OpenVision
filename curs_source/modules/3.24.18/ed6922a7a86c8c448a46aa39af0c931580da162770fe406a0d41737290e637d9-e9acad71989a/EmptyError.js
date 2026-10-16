import { x } from "./tslib.es6.js";
var eKs;
export { eKs };
var __wakaru_PPu_initialized = false;
export function PPu() {
if (__wakaru_PPu_initialized) return;
__wakaru_PPu_initialized = true;
x(), eKs = class extends Error {
    constructor(){
        super("no elements in sequence"), this.name = "EmptyError";
    }
};

}
