import { F4, K7, PCn } from "./Observable_3.js";
import { E } from "./tslib.es6.js";
var kOa;
export { kOa };
var __wakaru_V5p_initialized = false;
export function V5p() {
if (__wakaru_V5p_initialized) return;
__wakaru_V5p_initialized = true;
E(), K7(), kOa = class extends F4 {
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
    next(t) {
        if (!this._closed) {
            const { observers: e } = this, n = e.length;
            for(let i = 0; i < n; i++)e[i].next(t);
        }
    }
    error(t) {
        if (!this._closed) {
            this.hasError = this._closed = !0, this.thrownError = t;
            const { observers: e } = this, n = e.length;
            for(let i = 0; i < n; i++)e[i].error(t);
            this._clearObservers();
        }
    }
    complete() {
        if (!this._closed) {
            this._closed = !0;
            const { observers: t } = this, e = t.length;
            for(let n = 0; n < e; n++)t[n].complete();
            this._clearObservers();
        }
    }
    unsubscribe() {
        this._closed = !0, this._clearObservers();
    }
    get observed() {
        return this.currentObservers.size > 0;
    }
    _subscribe(t) {
        return this._checkFinalizedStatuses(t), this._innerSubscribe(t);
    }
    _innerSubscribe(t) {
        if (this.hasError || this._closed) return PCn.EMPTY;
        const { currentObservers: e } = this, n = this._observerCounter++;
        return e.set(n, t), this.observerSnapshot = void 0, t.add(()=>{
            e.delete(n), this.observerSnapshot = void 0;
        }), t;
    }
    _checkFinalizedStatuses(t) {
        const { hasError: e, thrownError: n, _closed: i } = this;
        e ? t.error(n) : i && t.complete();
    }
    asObservable() {
        return new F4((t)=>this.subscribe(t));
    }
};

}
