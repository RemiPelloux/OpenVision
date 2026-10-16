import { tge } from "./carrier.js";
import { Akc } from "./defaultScopes.js";
import { YB } from "./is.js";
import { bhn, zke } from "./scope.js";
import { x } from "./tslib.es6.js";
function eqe(e) {
    return !!(e?.then && typeof e.then == "function");
}
var Dkc;
export { Dkc, eqe };
var __wakaru_png_initialized = false;
export function png() {
if (__wakaru_png_initialized) return;
__wakaru_png_initialized = true;
"use strict";
x(), Akc(), bhn(), YB(), tge(), Dkc = class {
    constructor(e, t){
        let n;
        e ? n = e : n = new zke;
        let i;
        t ? i = t : i = new zke, this._stack = [
            {
                scope: n
            }
        ], this._isolationScope = i;
    }
    withScope(e) {
        const t = this._pushScope();
        let n;
        try {
            n = e(t);
        } catch (i) {
            throw this._popScope(), i;
        }
        return eqe(n) ? n.then((i)=>(this._popScope(), i), (i)=>{
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
