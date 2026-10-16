Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Subject = void 0;
const s = require("./module-1078.js");
class o extends s.Observable {
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
            const { observers: a } = this, n = a.length;
            for(let s = 0; s < n; s++)a[s].next(e);
        }
    }
    error(e) {
        if (!this._closed) {
            this.hasError = this._closed = !0, this.thrownError = e;
            const { observers: a } = this, n = a.length;
            for(let s = 0; s < n; s++)a[s].error(e);
            this._clearObservers();
        }
    }
    complete() {
        if (!this._closed) {
            this._closed = !0;
            const { observers: e } = this, a = e.length;
            for(let n = 0; n < a; n++)e[n].complete();
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
        if (this.hasError || this._closed) return s.Subscription.EMPTY;
        const { currentObservers: a } = this, n = this._observerCounter++;
        return a.set(n, e), this.observerSnapshot = void 0, e.add(()=>{
            a.delete(n), this.observerSnapshot = void 0;
        }), e;
    }
    _checkFinalizedStatuses(e) {
        const { hasError: a, thrownError: n, _closed: s } = this;
        a ? e.error(n) : s && e.complete();
    }
    asObservable() {
        return new s.Observable((e)=>this.subscribe(e));
    }
}
exports.Subject = o;
