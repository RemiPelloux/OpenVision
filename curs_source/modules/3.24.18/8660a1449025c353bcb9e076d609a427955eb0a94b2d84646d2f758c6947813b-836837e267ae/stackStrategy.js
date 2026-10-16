import { $xe } from "./carrier.js";
import { XHu } from "./defaultScopes.js";
import { _j } from "./is.js";
import { SOe, UYn } from "./scope.js";
import { E } from "./tslib.es6.js";
function fvt(t) {
    return !!(t?.then && typeof t.then == "function");
}
var QHu;
export { QHu, fvt };
var __wakaru_Juy_initialized = false;
export function Juy() {
if (__wakaru_Juy_initialized) return;
__wakaru_Juy_initialized = true;
"use strict";
E(), XHu(), UYn(), _j(), $xe(), QHu = class {
    constructor(t, e){
        let n;
        t ? n = t : n = new SOe;
        let i;
        e ? i = e : i = new SOe, this._stack = [
            {
                scope: n
            }
        ], this._isolationScope = i;
    }
    withScope(t) {
        const e = this._pushScope();
        let n;
        try {
            n = t(e);
        } catch (i) {
            throw this._popScope(), i;
        }
        return fvt(n) ? n.then((i)=>(this._popScope(), i), (i)=>{
            throw this._popScope(), i;
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
        const t = this.getScope().clone();
        return this._stack.push({
            client: this.getClient(),
            scope: t
        }), t;
    }
    _popScope() {
        return this._stack.length <= 1 ? !1 : !!this._stack.pop();
    }
};

}
