import { N, O, se } from "./event.js";
import { h } from "./tslib.es6.js";
var vR, Ie, Lm, Jn;
export { Ie, Jn, Lm, vR };
var __wakaru_Mt_initialized = false;
export function Mt() {
if (__wakaru_Mt_initialized) return;
__wakaru_Mt_initialized = true;
"use strict";
h(), se(), vR = Object.freeze(function(e, t) {
    const n = setTimeout(e.bind(t), 0);
    return {
        dispose () {
            clearTimeout(n);
        }
    };
}), ((e)=>{
    function t(n) {
        return n === e.None || n === e.Cancelled || n instanceof Lm ? !0 : !n || typeof n != "object" ? !1 : typeof n.isCancellationRequested == "boolean" && typeof n.onCancellationRequested == "function";
    }
    e.isCancellationToken = t, e.None = Object.freeze({
        isCancellationRequested: !1,
        onCancellationRequested: O.None
    }), e.Cancelled = Object.freeze({
        isCancellationRequested: !0,
        onCancellationRequested: vR
    });
})(Ie || (Ie = {})), Lm = class {
    constructor(){
        this._isCancelled = !1, this._emitter = null;
    }
    cancel() {
        this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose()));
    }
    get isCancellationRequested() {
        return this._isCancelled;
    }
    get onCancellationRequested() {
        return this._isCancelled ? vR : (this._emitter || (this._emitter = new N), this._emitter.event);
    }
    dispose() {
        this._emitter && (this._emitter.dispose(), this._emitter = null);
    }
}, Jn = class {
    constructor(e){
        this._token = void 0, this._parentListener = void 0, this._parentListener = e && e.onCancellationRequested(this.cancel, this);
    }
    get token() {
        return this._token || (this._token = new Lm), this._token;
    }
    cancel() {
        this._token ? this._token instanceof Lm && this._token.cancel() : this._token = Ie.Cancelled;
    }
    dispose(e = !1) {
        e && this.cancel(), this._parentListener?.dispose(), this._token ? this._token instanceof Lm && this._token.dispose() : this._token = Ie.None;
    }
};

}
