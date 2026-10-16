import { x } from "./tslib.es6.js";
var yre;
export { yre };
var __wakaru_NFt_initialized = false;
export function NFt() {
if (__wakaru_NFt_initialized) return;
__wakaru_NFt_initialized = true;
"use strict";
x(), yre = class _1r {
    constructor(t, n){
        this.x = t, this.y = n;
    }
    static equals(t, n) {
        return t.x === n.x && t.y === n.y;
    }
    add(t) {
        return new _1r(this.x + t.x, this.y + t.y);
    }
    deltaX(t) {
        return new _1r(this.x + t, this.y);
    }
    deltaY(t) {
        return new _1r(this.x, this.y + t);
    }
    toString() {
        return `(${this.x},${this.y})`;
    }
};

}
