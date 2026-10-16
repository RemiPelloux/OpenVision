import { C$t, N5, ZO } from "./Observable_3.js";
import { x } from "./tslib.es6.js";
var Xzs;
export { Xzs };
var __wakaru_xPu_initialized = false;
export function xPu() {
if (__wakaru_xPu_initialized) return;
__wakaru_xPu_initialized = true;
x(), N5(), Xzs = class extends ZO {
    _closed = !1;
    get closed() {
        return this._closed;
    }
    _observerCounter = 0;
    currentObservers = new Map;
    observerSnapshot;
    get observers() {
        return this.observerSnapshot ??= Array.from(this.currentObservers.values());
    }
    hasError = !1;
    thrownError = null;
    constructor(){
        super();
    }
    _clearObservers() {
        this.currentObservers.clear(), this.observerSnapshot = void 0;
    }
    next(e) {
        if (!this._closed) {
            const { observers: t } = this, n = t.length;
            for(let i = 0; i < n; i++)t[i].next(e);
        }
    }
    error(e) {
        if (!this._closed) {
            this.hasError = this._closed = !0, this.thrownError = e;
            const { observers: t } = this, n = t.length;
            for(let i = 0; i < n; i++)t[i].error(e);
            this._clearObservers();
        }
    }
    complete() {
        if (!this._closed) {
            this._closed = !0;
            const { observers: e } = this, t = e.length;
            for(let n = 0; n < t; n++)e[n].complete();
            this._clearObservers();
        }
    }
    unsubscribe() {
        this._closed = !0, this._clearObservers();
    }
    get observed() {
        return this.currentObservers.size > 0;
    }
    _subscribe(e) {
        return this._checkFinalizedStatuses(e), this._innerSubscribe(e);
    }
    _innerSubscribe(e) {
        if (this.hasError || this._closed) return C$t.EMPTY;
        const { currentObservers: t } = this, n = this._observerCounter++;
        return t.set(n, e), this.observerSnapshot = void 0, e.add(()=>{
            t.delete(n), this.observerSnapshot = void 0;
        }), e;
    }
    _checkFinalizedStatuses(e) {
        const { hasError: t, thrownError: n, _closed: i } = this;
        t ? e.error(n) : i && e.complete();
    }
    asObservable() {
        return new ZO((e)=>this.subscribe(e));
    }
};

}
