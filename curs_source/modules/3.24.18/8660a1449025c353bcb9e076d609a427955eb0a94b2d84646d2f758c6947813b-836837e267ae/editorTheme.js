import { E } from "./tslib.es6.js";
var D$d;
export { D$d };
var __wakaru_CDy_initialized = false;
export function CDy() {
if (__wakaru_CDy_initialized) return;
__wakaru_CDy_initialized = true;
"use strict";
E(), D$d = class {
    get type() {
        return this._theme.type;
    }
    get value() {
        return this._theme;
    }
    constructor(t){
        this._theme = t;
    }
    update(t) {
        this._theme = t;
    }
    getColor(t) {
        return this._theme.getColor(t);
    }
};

}
