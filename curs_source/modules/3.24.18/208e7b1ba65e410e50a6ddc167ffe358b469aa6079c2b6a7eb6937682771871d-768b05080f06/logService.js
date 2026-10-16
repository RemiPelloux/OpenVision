import { J, j } from "./lifecycle.js";
import { n6, te } from "./log.js";
import { h } from "./tslib.es6.js";
var C9e;
export { C9e };
var __wakaru_Wlt_initialized = false;
export function Wlt() {
if (__wakaru_Wlt_initialized) return;
__wakaru_Wlt_initialized = true;
"use strict";
h(), j(), te(), C9e = class extends J {
    get vscodeService() {
        return this;
    }
    get isDisposed() {
        return this._store.isDisposed;
    }
    constructor(e, t = []){
        super(), this.logger = new n6([
            e,
            ...t
        ]), e.isDisposed || this._register(e.onDidChangeLogLevel((n)=>this.setLevel(n)));
    }
    get onDidChangeLogLevel() {
        return this.logger.onDidChangeLogLevel;
    }
    setLevel(e) {
        this.logger.setLevel(e);
    }
    getLevel() {
        return this.logger.getLevel();
    }
    trace(e, ...t) {
        this.logger.trace(e, ...t);
    }
    debug(e, ...t) {
        this.logger.debug(e, ...t);
    }
    info(e, ...t) {
        this.logger.info(e, ...t);
    }
    warn(e, ...t) {
        this.logger.warn(e, ...t);
    }
    error(e, ...t) {
        this.logger.error(e, ...t);
    }
    flush() {
        this.logger.flush();
    }
};

}
