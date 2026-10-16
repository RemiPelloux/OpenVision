"use strict";
const a = require("./module-1124.js"), { ClientDestroyedError: s, ClientClosedError: o, InvalidArgumentError: r } = require("./module-7902.js"), { kDestroy: i, kClose: A, kDispatch: c, kInterceptors: l } = require("./module-8832.js"), d = Symbol("destroyed"), m = Symbol("closed"), u = Symbol("onDestroyed"), g = Symbol("onClosed"), p = Symbol("Intercepted Dispatch");
module.exports = class extends a {
    constructor(){
        super(), this[d] = !1, this[u] = null, this[m] = !1, this[g] = [];
    }
    get destroyed() {
        return this[d];
    }
    get closed() {
        return this[m];
    }
    get interceptors() {
        return this[l];
    }
    set interceptors(e) {
        if (e) for(let n = e.length - 1; n >= 0; n--){
            if ("function" != typeof this[l][n]) throw new r("interceptor must be an function");
        }
        this[l] = e;
    }
    close(e) {
        if (void 0 === e) return new Promise((e, n)=>{
            this.close((t, a)=>t ? n(t) : e(a));
        });
        if ("function" != typeof e) throw new r("invalid callback");
        if (this[d]) return void queueMicrotask(()=>e(new s, null));
        if (this[m]) return void (this[g] ? this[g].push(e) : queueMicrotask(()=>e(null, null)));
        this[m] = !0, this[g].push(e);
        const n = ()=>{
            const e = this[g];
            this[g] = null;
            for(let n = 0; n < e.length; n++)e[n](null, null);
        };
        this[A]().then(()=>this.destroy()).then(()=>{
            queueMicrotask(n);
        });
    }
    destroy(e, n) {
        if ("function" == typeof e && (n = e, e = null), void 0 === n) return new Promise((n, t)=>{
            this.destroy(e, (e, a)=>e ? t(e) : n(a));
        });
        if ("function" != typeof n) throw new r("invalid callback");
        if (this[d]) return void (this[u] ? this[u].push(n) : queueMicrotask(()=>n(null, null)));
        e || (e = new s), this[d] = !0, this[u] = this[u] || [], this[u].push(n);
        const t = ()=>{
            const e = this[u];
            this[u] = null;
            for(let n = 0; n < e.length; n++)e[n](null, null);
        };
        this[i](e).then(()=>{
            queueMicrotask(t);
        });
    }
    [p](e, n) {
        if (!this[l] || 0 === this[l].length) return this[p] = this[c], this[c](e, n);
        let t = this[c].bind(this);
        for(let e = this[l].length - 1; e >= 0; e--)t = this[l][e](t);
        return this[p] = t, t(e, n);
    }
    dispatch(e, n) {
        if (!n || "object" != typeof n) throw new r("handler must be an object");
        try {
            if (!e || "object" != typeof e) throw new r("opts must be an object.");
            if (this[d] || this[u]) throw new s;
            if (this[m]) throw new o;
            return this[p](e, n);
        } catch (e) {
            if ("function" != typeof n.onError) throw new r("invalid onError method");
            return n.onError(e), !1;
        }
    }
};
