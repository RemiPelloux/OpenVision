import { E } from "./tslib.es6.js";
var s_e;
export { s_e };
var __wakaru_avn_initialized = false;
export function avn() {
if (__wakaru_avn_initialized) return;
__wakaru_avn_initialized = true;
"use strict";
E(), s_e = class sXs {
    constructor(e, n){
        this.x = e, this.y = n;
    }
    static equals(e, n) {
        return e.x === n.x && e.y === n.y;
    }
    add(e) {
        return new sXs(this.x + e.x, this.y + e.y);
    }
    deltaX(e) {
        return new sXs(this.x + e, this.y);
    }
    deltaY(e) {
        return new sXs(this.x, this.y + e);
    }
    toString() {
        return `(${this.x},${this.y})`;
    }
};

}
