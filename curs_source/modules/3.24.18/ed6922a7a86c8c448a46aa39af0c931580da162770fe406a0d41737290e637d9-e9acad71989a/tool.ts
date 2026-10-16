import { x } from "./tslib.es6.js";
var Rzt;
export { Rzt };
var __wakaru_Dzt_initialized = false;
export function Dzt() {
if (__wakaru_Dzt_initialized) return;
__wakaru_Dzt_initialized = true;
"use strict";
x(), Rzt = class {
    definition;
    constructor(e){
        this.definition = e;
    }
    get name() {
        return this.definition.name;
    }
};

}
