"use strict";
let e = 0;
const t = 1e3;
let r;
const s = Symbol("kFastTimer"), o = [];
function n() {
    e += 499;
    let A = 0, t = o.length;
    for(; A < t;){
        const r = o[A];
        0 === r._state ? (r._idleStart = e - 499, r._state = 1) : 1 === r._state && e >= r._idleStart + r._idleTimeout && (r._state = -1, r._idleStart = -1, r._onTimeout(r._timerArg)), -1 === r._state ? (r._state = -2, 0 !== --t && (o[A] = o[t])) : ++A;
    }
    o.length = t, 0 !== o.length && i();
}
function i() {
    r ? r.refresh() : (clearTimeout(r), r = setTimeout(n, 499), r.unref && r.unref());
}
class a {
    [s] = !0;
    _state = -2;
    _idleTimeout = -1;
    _idleStart = -1;
    _onTimeout;
    _timerArg;
    constructor(A, e, t){
        this._onTimeout = A, this._idleTimeout = e, this._timerArg = t, this.refresh();
    }
    refresh() {
        -2 === this._state && o.push(this), r && 1 !== o.length || i(), this._state = 0;
    }
    clear() {
        this._state = -1, this._idleStart = -1;
    }
}
module.exports = {
    setTimeout: (A, e, r)=>e <= t ? setTimeout(A, e, r) : new a(A, e, r),
    clearTimeout (A) {
        A[s] ? A.clear() : clearTimeout(A);
    },
    setFastTimeout: (A, e, t)=>new a(A, e, t),
    clearFastTimeout (A) {
        A.clear();
    },
    now: ()=>e,
    tick (A = 0) {
        e += A - t + 1, n(), n();
    },
    reset () {
        e = 0, o.length = 0, clearTimeout(r), r = null;
    },
    kFastTimer: s
};
