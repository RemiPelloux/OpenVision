import { E } from "./tslib.es6.js";
var R4;
export { R4 };
var __wakaru_bIh_initialized = false;
export function bIh() {
if (__wakaru_bIh_initialized) return;
__wakaru_bIh_initialized = true;
E(), R4 = class extends Error {
    constructor(t){
        super(t), this.name = "ShikiError";
    }
};

}
