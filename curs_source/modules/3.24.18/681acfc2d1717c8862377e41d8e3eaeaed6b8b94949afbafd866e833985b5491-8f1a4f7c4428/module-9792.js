"use strict";
const n = require("./module-1124.js"), { ClientDestroyedError: r, ClientClosedError: o, InvalidArgumentError: s } = require("./module-7902.js"), { kDestroy: i, kClose: a, kDispatch: c, kInterceptors: l } = require("./module-8832.js"), u = Symbol("destroyed"), g = Symbol("closed"), E = Symbol("onDestroyed"), h = Symbol("onClosed"), d = Symbol("Intercepted Dispatch");
module.exports = class extends n {
    constructor(){
        super(), this[u] = !1, this[E] = null, this[g] = !1, this[h] = [];
    }
    get destroyed() {
        return this[u];
    }
    get closed() {
        return this[g];
    }
    get interceptors() {
        return this[l];
    }
    set interceptors(e) {
        if (e) for(let t = e.length - 1; t >= 0; t--){
            if ("function" != typeof this[l][t]) throw new s("interceptor must be an function");
        }
        this[l] = e;
    }
    close(e) {
        if (void 0 === e) return new Promise((e, t)=>{
            this.close((A, n)=>A ? t(A) : e(n));
        });
        if ("function" != typeof e) throw new s("invalid callback");
        if (this[u]) return void queueMicrotask(()=>e(new r, null));
        if (this[g]) return void (this[h] ? this[h].push(e) : queueMicrotask(()=>e(null, null)));
        this[g] = !0, this[h].push(e);
        const t = ()=>{
            const e = this[h];
            this[h] = null;
            for(let t = 0; t < e.length; t++)e[t](null, null);
        };
        this[a]().then(()=>this.destroy()).then(()=>{
            queueMicrotask(t);
        });
    }
    destroy(e, t) {
        if ("function" == typeof e && (t = e, e = null), void 0 === t) return new Promise((t, A)=>{
            this.destroy(e, (e, n)=>e ? A(e) : t(n));
        });
        if ("function" != typeof t) throw new s("invalid callback");
        if (this[u]) return void (this[E] ? this[E].push(t) : queueMicrotask(()=>t(null, null)));
        e || (e = new r), this[u] = !0, this[E] = this[E] || [], this[E].push(t);
        const A = ()=>{
            const e = this[E];
            this[E] = null;
            for(let t = 0; t < e.length; t++)e[t](null, null);
        };
        this[i](e).then(()=>{
            queueMicrotask(A);
        });
    }
    [d](e, t) {
        if (!this[l] || 0 === this[l].length) return this[d] = this[c], this[c](e, t);
        let A = this[c].bind(this);
        for(let e = this[l].length - 1; e >= 0; e--)A = this[l][e](A);
        return this[d] = A, A(e, t);
    }
    dispatch(e, t) {
        if (!t || "object" != typeof t) throw new s("handler must be an object");
        try {
            if (!e || "object" != typeof e) throw new s("opts must be an object.");
            if (this[u] || this[E]) throw new r;
            if (this[g]) throw new o;
            return this[d](e, t);
        } catch (e) {
            if ("function" != typeof t.onError) throw new s("invalid onError method");
            return t.onError(e), !1;
        }
    }
};
