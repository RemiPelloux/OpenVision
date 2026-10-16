"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Subject = void 0;
const n = require("./module-1078.js");
class o extends n.Observable {
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
            const { observers: t } = this, r = t.length;
            for(let n = 0; n < r; n++)t[n].next(e);
        }
    }
    error(e) {
        if (!this._closed) {
            this.hasError = this._closed = !0, this.thrownError = e;
            const { observers: t } = this, r = t.length;
            for(let n = 0; n < r; n++)t[n].error(e);
            this._clearObservers();
        }
    }
    complete() {
        if (!this._closed) {
            this._closed = !0;
            const { observers: e } = this, t = e.length;
            for(let r = 0; r < t; r++)e[r].complete();
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
        if (this.hasError || this._closed) return n.Subscription.EMPTY;
        const { currentObservers: t } = this, r = this._observerCounter++;
        return t.set(r, e), this.observerSnapshot = void 0, e.add(()=>{
            t.delete(r), this.observerSnapshot = void 0;
        }), e;
    }
    _checkFinalizedStatuses(e) {
        const { hasError: t, thrownError: r, _closed: n } = this;
        t ? e.error(r) : n && e.complete();
    }
    asObservable() {
        return new n.Observable((e)=>this.subscribe(e));
    }
}
exports.Subject = o;
