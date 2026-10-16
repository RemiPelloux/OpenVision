"use strict";
const r = require("./module-47510.js"), { ClientDestroyedError: s, ClientClosedError: o, InvalidArgumentError: n } = require("./module-38238.js"), { kDestroy: i, kClose: a, kClosed: Q, kDestroyed: g, kDispatch: E, kInterceptors: B } = require("./module-76992.js"), c = Symbol("onDestroyed"), I = Symbol("onClosed"), C = Symbol("Intercepted Dispatch"), h = Symbol("webSocketOptions");
module.exports = class extends r {
    constructor(A){
        super(), this[g] = !1, this[c] = null, this[Q] = !1, this[I] = [], this[h] = A?.webSocket ?? {};
    }
    get webSocketOptions() {
        return {
            maxFragments: this[h].maxFragments ?? 131072,
            maxPayloadSize: this[h].maxPayloadSize ?? 134217728
        };
    }
    get destroyed() {
        return this[g];
    }
    get closed() {
        return this[Q];
    }
    get interceptors() {
        return this[B];
    }
    set interceptors(A) {
        if (A) for(let e = A.length - 1; e >= 0; e--){
            if ("function" != typeof this[B][e]) throw new n("interceptor must be an function");
        }
        this[B] = A;
    }
    close(A) {
        if (void 0 === A) return new Promise((A, e)=>{
            this.close((t, r)=>t ? e(t) : A(r));
        });
        if ("function" != typeof A) throw new n("invalid callback");
        if (this[g]) return void queueMicrotask(()=>A(new s, null));
        if (this[Q]) return void (this[I] ? this[I].push(A) : queueMicrotask(()=>A(null, null)));
        this[Q] = !0, this[I].push(A);
        const e = ()=>{
            const A = this[I];
            this[I] = null;
            for(let e = 0; e < A.length; e++)A[e](null, null);
        };
        this[a]().then(()=>this.destroy()).then(()=>{
            queueMicrotask(e);
        });
    }
    destroy(A, e) {
        if ("function" == typeof A && (e = A, A = null), void 0 === e) return new Promise((e, t)=>{
            this.destroy(A, (A, r)=>A ? t(A) : e(r));
        });
        if ("function" != typeof e) throw new n("invalid callback");
        if (this[g]) return void (this[c] ? this[c].push(e) : queueMicrotask(()=>e(null, null)));
        A || (A = new s), this[g] = !0, this[c] = this[c] || [], this[c].push(e);
        const t = ()=>{
            const A = this[c];
            this[c] = null;
            for(let e = 0; e < A.length; e++)A[e](null, null);
        };
        this[i](A).then(()=>{
            queueMicrotask(t);
        });
    }
    [C](A, e) {
        if (!this[B] || 0 === this[B].length) return this[C] = this[E], this[E](A, e);
        let t = this[E].bind(this);
        for(let A = this[B].length - 1; A >= 0; A--)t = this[B][A](t);
        return this[C] = t, t(A, e);
    }
    dispatch(A, e) {
        if (!e || "object" != typeof e) throw new n("handler must be an object");
        try {
            if (!A || "object" != typeof A) throw new n("opts must be an object.");
            if (this[g] || this[c]) throw new s;
            if (this[Q]) throw new o;
            return this[C](A, e);
        } catch (A) {
            if ("function" != typeof e.onError) throw new n("invalid onError method");
            return e.onError(A), !1;
        }
    }
};
