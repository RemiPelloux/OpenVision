"use strict";
const r = require("./module-91124.js"), { ClientDestroyedError: s, ClientClosedError: o, InvalidArgumentError: n } = require("./module-95521.js"), { kDestroy: i, kClose: E, kDispatch: Q, kInterceptors: g } = require("./module-58832.js"), C = Symbol("destroyed"), B = Symbol("closed"), a = Symbol("onDestroyed"), I = Symbol("onClosed"), c = Symbol("Intercepted Dispatch");
module.exports = class extends r {
    constructor(){
        super(), this[C] = !1, this[a] = null, this[B] = !1, this[I] = [];
    }
    get destroyed() {
        return this[C];
    }
    get closed() {
        return this[B];
    }
    get interceptors() {
        return this[g];
    }
    set interceptors(A) {
        if (A) for(let e = A.length - 1; e >= 0; e--){
            if ("function" != typeof this[g][e]) throw new n("interceptor must be an function");
        }
        this[g] = A;
    }
    close(A) {
        if (void 0 === A) return new Promise((A, e)=>{
            this.close((t, r)=>t ? e(t) : A(r));
        });
        if ("function" != typeof A) throw new n("invalid callback");
        if (this[C]) return void queueMicrotask(()=>A(new s, null));
        if (this[B]) return void (this[I] ? this[I].push(A) : queueMicrotask(()=>A(null, null)));
        this[B] = !0, this[I].push(A);
        const e = ()=>{
            const A = this[I];
            this[I] = null;
            for(let e = 0; e < A.length; e++)A[e](null, null);
        };
        this[E]().then(()=>this.destroy()).then(()=>{
            queueMicrotask(e);
        });
    }
    destroy(A, e) {
        if ("function" == typeof A && (e = A, A = null), void 0 === e) return new Promise((e, t)=>{
            this.destroy(A, (A, r)=>A ? t(A) : e(r));
        });
        if ("function" != typeof e) throw new n("invalid callback");
        if (this[C]) return void (this[a] ? this[a].push(e) : queueMicrotask(()=>e(null, null)));
        A || (A = new s), this[C] = !0, this[a] = this[a] || [], this[a].push(e);
        const t = ()=>{
            const A = this[a];
            this[a] = null;
            for(let e = 0; e < A.length; e++)A[e](null, null);
        };
        this[i](A).then(()=>{
            queueMicrotask(t);
        });
    }
    [c](A, e) {
        if (!this[g] || 0 === this[g].length) return this[c] = this[Q], this[Q](A, e);
        let t = this[Q].bind(this);
        for(let A = this[g].length - 1; A >= 0; A--)t = this[g][A](t);
        return this[c] = t, t(A, e);
    }
    dispatch(A, e) {
        if (!e || "object" != typeof e) throw new n("handler must be an object");
        try {
            if (!A || "object" != typeof A) throw new n("opts must be an object.");
            if (this[C] || this[a]) throw new s;
            if (this[B]) throw new o;
            return this[c](A, e);
        } catch (A) {
            if ("function" != typeof e.onError) throw new n("invalid onError method");
            return e.onError(A), !1;
        }
    }
};
