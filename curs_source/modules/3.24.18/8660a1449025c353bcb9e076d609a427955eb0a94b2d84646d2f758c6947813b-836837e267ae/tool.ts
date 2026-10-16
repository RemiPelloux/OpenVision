import { E } from "./tslib.es6.js";
var QPn;
export { QPn };
var __wakaru_JPn_initialized = false;
export function JPn() {
if (__wakaru_JPn_initialized) return;
__wakaru_JPn_initialized = true;
"use strict";
E(), QPn = class {
    definition;
    constructor(t){
        this.definition = t;
    }
    get name() {
        return this.definition.name;
    }
};

}
