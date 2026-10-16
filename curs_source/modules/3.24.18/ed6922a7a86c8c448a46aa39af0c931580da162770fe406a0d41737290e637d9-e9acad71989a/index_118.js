import { x } from "./tslib.es6.js";
var _2;
export { _2 };
var __wakaru_Q1l_initialized = false;
export function Q1l() {
if (__wakaru_Q1l_initialized) return;
__wakaru_Q1l_initialized = true;
x(), _2 = class extends Error {
    constructor(e){
        super(e), this.name = "ShikiError";
    }
};

}
