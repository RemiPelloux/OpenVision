import { Br, ae, oe } from "./event.js";
import { w } from "./tslib.es6.js";
var Yr, Yt, bt, it;
export { Yr, Yt, bt, it };
var __wakaru_Zt_initialized = false;
export function Zt() {
if (__wakaru_Zt_initialized) return;
__wakaru_Zt_initialized = true;
"use strict";
w(), Br(), Yr = Object.freeze(function(e, t) {
    const r = setTimeout(e.bind(t), 0);
    return {
        dispose () {
            clearTimeout(r);
        }
    };
}), ((e)=>{
    function t(r) {
        return r === e.None || r === e.Cancelled || r instanceof bt ? !0 : !r || typeof r != "object" ? !1 : typeof r.isCancellationRequested == "boolean" && typeof r.onCancellationRequested == "function";
    }
    e.isCancellationToken = t, e.None = Object.freeze({
        isCancellationRequested: !1,
        onCancellationRequested: oe.None
    }), e.Cancelled = Object.freeze({
        isCancellationRequested: !0,
        onCancellationRequested: Yr
    });
})(Yt || (Yt = {})), bt = class {
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
        return this._isCancelled ? Yr : (this._emitter || (this._emitter = new ae), this._emitter.event);
    }
    dispose() {
        this._emitter && (this._emitter.dispose(), this._emitter = null);
    }
}, it = class {
    constructor(e){
        this._token = void 0, this._parentListener = void 0, this._parentListener = e && e.onCancellationRequested(this.cancel, this);
    }
    get token() {
        return this._token || (this._token = new bt), this._token;
    }
    cancel() {
        this._token ? this._token instanceof bt && this._token.cancel() : this._token = Yt.Cancelled;
    }
    dispose(e = !1) {
        e && this.cancel(), this._parentListener?.dispose(), this._token ? this._token instanceof bt && this._token.dispose() : this._token = Yt.None;
    }
};

}
