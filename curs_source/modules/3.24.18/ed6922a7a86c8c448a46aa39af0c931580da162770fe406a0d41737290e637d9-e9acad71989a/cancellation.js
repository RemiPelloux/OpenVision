import { Ct, bt, ve } from "./HVr.js";
import { x } from "./tslib.es6.js";
var gqr, Ji, Ppn, Eo;
export { Eo, Ji, Ppn, gqr };
var __wakaru_Ar_initialized = false;
export function Ar() {
if (__wakaru_Ar_initialized) return;
__wakaru_Ar_initialized = true;
"use strict";
x(), bt(), gqr = Object.freeze(function(e, t) {
    const n = setTimeout(e.bind(t), 0);
    return {
        dispose () {
            clearTimeout(n);
        }
    };
}), ((e)=>{
    function t(n) {
        return n === e.None || n === e.Cancelled || n instanceof Ppn ? !0 : !n || typeof n != "object" ? !1 : typeof n.isCancellationRequested == "boolean" && typeof n.onCancellationRequested == "function";
    }
    e.isCancellationToken = t, e.None = Object.freeze({
        isCancellationRequested: !1,
        onCancellationRequested: Ct.None
    }), e.Cancelled = Object.freeze({
        isCancellationRequested: !0,
        onCancellationRequested: gqr
    });
})(Ji || (Ji = {})), Ppn = class {
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
        return this._isCancelled ? gqr : (this._emitter || (this._emitter = new ve), this._emitter.event);
    }
    dispose() {
        this._emitter && (this._emitter.dispose(), this._emitter = null);
    }
}, Eo = class {
    constructor(e){
        this._token = void 0, this._parentListener = void 0, this._parentListener = e && e.onCancellationRequested(this.cancel, this);
    }
    get token() {
        return this._token || (this._token = new Ppn), this._token;
    }
    cancel() {
        this._token ? this._token instanceof Ppn && this._token.cancel() : this._token = Ji.Cancelled;
    }
    dispose(e = !1) {
        e && this.cancel(), this._parentListener?.dispose(), this._token ? this._token instanceof Ppn && this._token.dispose() : this._token = Ji.None;
    }
};

}
