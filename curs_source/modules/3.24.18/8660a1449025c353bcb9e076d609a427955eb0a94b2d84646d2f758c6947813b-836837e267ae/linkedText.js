import { SM } from "./decorators.js";
import { E } from "./tslib.es6.js";
import { Re } from "./userDataProfile.js";
import { sl } from "./ze.js";
var zRi, iKg;
export { iKg, zRi };
var __wakaru_NKt_initialized = false;
export function NKt() {
if (__wakaru_NKt_initialized) return;
__wakaru_NKt_initialized = true;
"use strict";
E(), SM(), zRi = class {
    constructor(t){
        this.nodes = t;
    }
    toString() {
        return this.nodes.map((t)=>typeof t == "string" ? t : t.label).join("");
    }
}, Re([
    sl
], zRi.prototype, "toString", null), iKg = /\[([^\]]+)\]\(((?:https?:\/\/|command:|file:)[^\)\s]+)(?: (["'])(.+?)(\3))?\)/gi;

}
