import { xs } from "./carrier.js";
import { b8 } from "./defaultScopes.js";
import { fn } from "./is.js";
import { Ap, yc } from "./scope.js";
import { h } from "./tslib.es6.js";
function RC(e) {
    return !!(e?.then && typeof e.then == "function");
}
var C8;
export { C8, RC };
var __wakaru_R3e_initialized = false;
export function R3e() {
if (__wakaru_R3e_initialized) return;
__wakaru_R3e_initialized = true;
"use strict";
h(), b8(), Ap(), fn(), xs(), C8 = class {
    constructor(e, t){
        let n;
        e ? n = e : n = new yc;
        let r;
        t ? r = t : r = new yc, this._stack = [
            {
                scope: n
            }
        ], this._isolationScope = r;
    }
    withScope(e) {
        const t = this._pushScope();
        let n;
        try {
            n = e(t);
        } catch (r) {
            throw this._popScope(), r;
        }
        return RC(n) ? n.then((r)=>(this._popScope(), r), (r)=>{
            throw this._popScope(), r;
        }) : (this._popScope(), n);
    }
    getClient() {
        return this.getStackTop().client;
    }
    getScope() {
        return this.getStackTop().scope;
    }
    getIsolationScope() {
        return this._isolationScope;
    }
    getStackTop() {
        return this._stack[this._stack.length - 1];
    }
    _pushScope() {
        const e = this.getScope().clone();
        return this._stack.push({
            client: this.getClient(),
            scope: e
        }), e;
    }
    _popScope() {
        return this._stack.length <= 1 ? !1 : !!this._stack.pop();
    }
};

}
