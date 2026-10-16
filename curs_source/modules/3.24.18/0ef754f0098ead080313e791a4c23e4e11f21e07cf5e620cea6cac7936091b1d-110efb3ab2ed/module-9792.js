"use strict";
const t = require("./module-1124.js"), { ClientDestroyedError: s, ClientClosedError: o, InvalidArgumentError: r } = require("./module-7902.js"), { kDestroy: i, kClose: l, kDispatch: d, kInterceptors: m } = require("./module-8832.js"), c = Symbol("destroyed"), p = Symbol("closed"), A = Symbol("onDestroyed"), u = Symbol("onClosed"), g = Symbol("Intercepted Dispatch");
module.exports = class extends t {
    constructor(){
        super(), this[c] = !1, this[A] = null, this[p] = !1, this[u] = [];
    }
    get destroyed() {
        return this[c];
    }
    get closed() {
        return this[p];
    }
    get interceptors() {
        return this[m];
    }
    set interceptors(e) {
        if (e) for(let a = e.length - 1; a >= 0; a--){
            if ("function" != typeof this[m][a]) throw new r("interceptor must be an function");
        }
        this[m] = e;
    }
    close(e) {
        if (void 0 === e) return new Promise((e, a)=>{
            this.close((n, t)=>n ? a(n) : e(t));
        });
        if ("function" != typeof e) throw new r("invalid callback");
        if (this[c]) return void queueMicrotask(()=>e(new s, null));
        if (this[p]) return void (this[u] ? this[u].push(e) : queueMicrotask(()=>e(null, null)));
        this[p] = !0, this[u].push(e);
        const a = ()=>{
            const e = this[u];
            this[u] = null;
            for(let a = 0; a < e.length; a++)e[a](null, null);
        };
        this[l]().then(()=>this.destroy()).then(()=>{
            queueMicrotask(a);
        });
    }
    destroy(e, a) {
        if ("function" == typeof e && (a = e, e = null), void 0 === a) return new Promise((a, n)=>{
            this.destroy(e, (e, t)=>e ? n(e) : a(t));
        });
        if ("function" != typeof a) throw new r("invalid callback");
        if (this[c]) return void (this[A] ? this[A].push(a) : queueMicrotask(()=>a(null, null)));
        e || (e = new s), this[c] = !0, this[A] = this[A] || [], this[A].push(a);
        const n = ()=>{
            const e = this[A];
            this[A] = null;
            for(let a = 0; a < e.length; a++)e[a](null, null);
        };
        this[i](e).then(()=>{
            queueMicrotask(n);
        });
    }
    [g](e, a) {
        if (!this[m] || 0 === this[m].length) return this[g] = this[d], this[d](e, a);
        let n = this[d].bind(this);
        for(let e = this[m].length - 1; e >= 0; e--)n = this[m][e](n);
        return this[g] = n, n(e, a);
    }
    dispatch(e, a) {
        if (!a || "object" != typeof a) throw new r("handler must be an object");
        try {
            if (!e || "object" != typeof e) throw new r("opts must be an object.");
            if (this[c] || this[A]) throw new s;
            if (this[p]) throw new o;
            return this[g](e, a);
        } catch (e) {
            if ("function" != typeof a.onError) throw new r("invalid onError method");
            return a.onError(e), !1;
        }
    }
};
