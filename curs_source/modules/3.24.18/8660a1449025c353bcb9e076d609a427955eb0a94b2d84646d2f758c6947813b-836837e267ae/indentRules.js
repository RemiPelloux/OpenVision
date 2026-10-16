import { E } from "./tslib.es6.js";
import { cwr } from "./ze.js";
var wFd;
export { wFd };
var __wakaru_PAy_initialized = false;
export function PAy() {
if (__wakaru_PAy_initialized) return;
__wakaru_PAy_initialized = true;
"use strict";
E(), wFd = class {
    constructor(t){
        this._indentationRules = t;
    }
    shouldIncrease(t) {
        return !!(this._indentationRules && this._indentationRules.increaseIndentPattern && cwr(this._indentationRules.increaseIndentPattern) && this._indentationRules.increaseIndentPattern.test(t));
    }
    shouldDecrease(t) {
        return !!(this._indentationRules && this._indentationRules.decreaseIndentPattern && cwr(this._indentationRules.decreaseIndentPattern) && this._indentationRules.decreaseIndentPattern.test(t));
    }
    shouldIndentNextLine(t) {
        return !!(this._indentationRules && this._indentationRules.indentNextLinePattern && cwr(this._indentationRules.indentNextLinePattern) && this._indentationRules.indentNextLinePattern.test(t));
    }
    shouldIgnore(t) {
        return !!(this._indentationRules && this._indentationRules.unIndentedLinePattern && cwr(this._indentationRules.unIndentedLinePattern) && this._indentationRules.unIndentedLinePattern.test(t));
    }
    getIndentMetadata(t) {
        let e = 0;
        return this.shouldIncrease(t) && (e += 1), this.shouldDecrease(t) && (e += 2), this.shouldIndentNextLine(t) && (e += 4), this.shouldIgnore(t) && (e += 8), e;
    }
};

}
