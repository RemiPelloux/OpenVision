import { x } from "./tslib.es6.js";
var YUc;
export { YUc };
var __wakaru__yg_initialized = false;
export function _yg() {
if (__wakaru__yg_initialized) return;
__wakaru__yg_initialized = true;
"use strict";
x(), YUc = class {
    constructor(e){
        this.spliceables = e;
    }
    splice(e, t, n) {
        this.spliceables.forEach((i)=>i.splice(e, t, n));
    }
};

}
