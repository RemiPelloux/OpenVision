import { x } from "./tslib.es6.js";
var y6c;
export { y6c };
var __wakaru_D_g_initialized = false;
export function D_g() {
if (__wakaru_D_g_initialized) return;
__wakaru_D_g_initialized = true;
"use strict";
x(), y6c = class {
    get type() {
        return this._theme.type;
    }
    get value() {
        return this._theme;
    }
    constructor(e){
        this._theme = e;
    }
    update(e) {
        this._theme = e;
    }
    getColor(e) {
        return this._theme.getColor(e);
    }
};

}
