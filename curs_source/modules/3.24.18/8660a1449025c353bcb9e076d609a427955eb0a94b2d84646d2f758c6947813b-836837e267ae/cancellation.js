import { Gt, en, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var iCo, Xs, YXn, El;
export { El, Xs, YXn, iCo };
var __wakaru_yo_initialized = false;
export function yo() {
if (__wakaru_yo_initialized) return;
__wakaru_yo_initialized = true;
"use strict";
E(), Gt(), iCo = Object.freeze(function(t, e) {
    const n = setTimeout(t.bind(e), 0);
    return {
        dispose () {
            clearTimeout(n);
        }
    };
}), ((t)=>{
    function e(n) {
        return n === t.None || n === t.Cancelled || n instanceof YXn ? !0 : !n || typeof n != "object" ? !1 : typeof n.isCancellationRequested == "boolean" && typeof n.onCancellationRequested == "function";
    }
    t.isCancellationToken = e, t.None = Object.freeze({
        isCancellationRequested: !1,
        onCancellationRequested: en.None
    }), t.Cancelled = Object.freeze({
        isCancellationRequested: !0,
        onCancellationRequested: iCo
    });
})(Xs || (Xs = {})), YXn = class {
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
        return this._isCancelled ? iCo : (this._emitter || (this._emitter = new tt), this._emitter.event);
    }
    dispose() {
        this._emitter && (this._emitter.dispose(), this._emitter = null);
    }
}, El = class {
    constructor(t){
        this._token = void 0, this._parentListener = void 0, this._parentListener = t && t.onCancellationRequested(this.cancel, this);
    }
    get token() {
        return this._token || (this._token = new YXn), this._token;
    }
    cancel() {
        this._token ? this._token instanceof YXn && this._token.cancel() : this._token = Xs.Cancelled;
    }
    dispose(t = !1) {
        t && this.cancel(), this._parentListener?.dispose(), this._token ? this._token instanceof YXn && this._token.dispose() : this._token = Xs.None;
    }
};

}
