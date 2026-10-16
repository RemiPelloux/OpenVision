import { Iy } from "./languages.js";
import { E } from "./tslib.es6.js";
var u$o;
export { u$o };
var __wakaru_d$o_initialized = false;
export function d$o() {
if (__wakaru_d$o_initialized) return;
__wakaru_d$o_initialized = true;
"use strict";
E(), Iy(), u$o = new class {
    clone() {
        return this;
    }
    equals(t) {
        return this === t;
    }
};

}
