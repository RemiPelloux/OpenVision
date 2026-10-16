"use strict";
const n = require("./module-1124.js"), { ClientDestroyedError: r, ClientClosedError: o, InvalidArgumentError: s } = require("./module-7902.js"), { kDestroy: a, kClose: i, kDispatch: c, kInterceptors: l } = require("./module-8832.js"), g = Symbol("destroyed"), E = Symbol("closed"), u = Symbol("onDestroyed"), d = Symbol("onClosed"), I = Symbol("Intercepted Dispatch");
module.exports = class extends n {
    constructor(){
        super(), this[g] = !1, this[u] = null, this[E] = !1, this[d] = [];
    }
    get destroyed() {
        return this[g];
    }
    get closed() {
        return this[E];
    }
    get interceptors() {
        return this[l];
    }
    set interceptors(e) {
        if (e) for(let A = e.length - 1; A >= 0; A--){
            if ("function" != typeof this[l][A]) throw new s("interceptor must be an function");
        }
        this[l] = e;
    }
    close(e) {
        if (void 0 === e) return new Promise((e, A)=>{
            this.close((t, n)=>t ? A(t) : e(n));
        });
        if ("function" != typeof e) throw new s("invalid callback");
        if (this[g]) return void queueMicrotask(()=>e(new r, null));
        if (this[E]) return void (this[d] ? this[d].push(e) : queueMicrotask(()=>e(null, null)));
        this[E] = !0, this[d].push(e);
        const A = ()=>{
            const e = this[d];
            this[d] = null;
            for(let A = 0; A < e.length; A++)e[A](null, null);
        };
        this[i]().then(()=>this.destroy()).then(()=>{
            queueMicrotask(A);
        });
    }
    destroy(e, A) {
        if ("function" == typeof e && (A = e, e = null), void 0 === A) return new Promise((A, t)=>{
            this.destroy(e, (e, n)=>e ? t(e) : A(n));
        });
        if ("function" != typeof A) throw new s("invalid callback");
        if (this[g]) return void (this[u] ? this[u].push(A) : queueMicrotask(()=>A(null, null)));
        e || (e = new r), this[g] = !0, this[u] = this[u] || [], this[u].push(A);
        const t = ()=>{
            const e = this[u];
            this[u] = null;
            for(let A = 0; A < e.length; A++)e[A](null, null);
        };
        this[a](e).then(()=>{
            queueMicrotask(t);
        });
    }
    [I](e, A) {
        if (!this[l] || 0 === this[l].length) return this[I] = this[c], this[c](e, A);
        let t = this[c].bind(this);
        for(let e = this[l].length - 1; e >= 0; e--)t = this[l][e](t);
        return this[I] = t, t(e, A);
    }
    dispatch(e, A) {
        if (!A || "object" != typeof A) throw new s("handler must be an object");
        try {
            if (!e || "object" != typeof e) throw new s("opts must be an object.");
            if (this[g] || this[u]) throw new r;
            if (this[E]) throw new o;
            return this[I](e, A);
        } catch (e) {
            if ("function" != typeof A.onError) throw new s("invalid onError method");
            return A.onError(e), !1;
        }
    }
};
