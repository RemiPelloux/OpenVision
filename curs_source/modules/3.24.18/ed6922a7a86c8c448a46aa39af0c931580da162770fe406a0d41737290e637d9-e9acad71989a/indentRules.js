import { yfi } from "./qIc.js";
import { x } from "./tslib.es6.js";
var nPc;
export { nPc };
var __wakaru_kpg_initialized = false;
export function kpg() {
if (__wakaru_kpg_initialized) return;
__wakaru_kpg_initialized = true;
"use strict";
x(), nPc = class {
    constructor(e){
        this._indentationRules = e;
    }
    shouldIncrease(e) {
        return !!(this._indentationRules && this._indentationRules.increaseIndentPattern && yfi(this._indentationRules.increaseIndentPattern) && this._indentationRules.increaseIndentPattern.test(e));
    }
    shouldDecrease(e) {
        return !!(this._indentationRules && this._indentationRules.decreaseIndentPattern && yfi(this._indentationRules.decreaseIndentPattern) && this._indentationRules.decreaseIndentPattern.test(e));
    }
    shouldIndentNextLine(e) {
        return !!(this._indentationRules && this._indentationRules.indentNextLinePattern && yfi(this._indentationRules.indentNextLinePattern) && this._indentationRules.indentNextLinePattern.test(e));
    }
    shouldIgnore(e) {
        return !!(this._indentationRules && this._indentationRules.unIndentedLinePattern && yfi(this._indentationRules.unIndentedLinePattern) && this._indentationRules.unIndentedLinePattern.test(e));
    }
    getIndentMetadata(e) {
        let t = 0;
        return this.shouldIncrease(e) && (t += 1), this.shouldDecrease(e) && (t += 2), this.shouldIndentNextLine(e) && (t += 4), this.shouldIgnore(e) && (t += 8), t;
    }
};

}
