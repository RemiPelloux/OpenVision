"use strict";
const t = require("./module-1124.js"), { ClientDestroyedError: s, ClientClosedError: o, InvalidArgumentError: r } = require("./module-7902.js"), { kDestroy: i, kClose: A, kDispatch: l, kInterceptors: c } = require("./module-8832.js"), m = Symbol("destroyed"), d = Symbol("closed"), g = Symbol("onDestroyed"), u = Symbol("onClosed"), E = Symbol("Intercepted Dispatch");
module.exports = class extends t {
    constructor(){
        super(), this[m] = !1, this[g] = null, this[d] = !1, this[u] = [];
    }
    get destroyed() {
        return this[m];
    }
    get closed() {
        return this[d];
    }
    get interceptors() {
        return this[c];
    }
    set interceptors(e) {
        if (e) for(let n = e.length - 1; n >= 0; n--){
            if ("function" != typeof this[c][n]) throw new r("interceptor must be an function");
        }
        this[c] = e;
    }
    close(e) {
        if (void 0 === e) return new Promise((e, n)=>{
            this.close((a, t)=>a ? n(a) : e(t));
        });
        if ("function" != typeof e) throw new r("invalid callback");
        if (this[m]) return void queueMicrotask(()=>e(new s, null));
        if (this[d]) return void (this[u] ? this[u].push(e) : queueMicrotask(()=>e(null, null)));
        this[d] = !0, this[u].push(e);
        const n = ()=>{
            const e = this[u];
            this[u] = null;
            for(let n = 0; n < e.length; n++)e[n](null, null);
        };
        this[A]().then(()=>this.destroy()).then(()=>{
            queueMicrotask(n);
        });
    }
    destroy(e, n) {
        if ("function" == typeof e && (n = e, e = null), void 0 === n) return new Promise((n, a)=>{
            this.destroy(e, (e, t)=>e ? a(e) : n(t));
        });
        if ("function" != typeof n) throw new r("invalid callback");
        if (this[m]) return void (this[g] ? this[g].push(n) : queueMicrotask(()=>n(null, null)));
        e || (e = new s), this[m] = !0, this[g] = this[g] || [], this[g].push(n);
        const a = ()=>{
            const e = this[g];
            this[g] = null;
            for(let n = 0; n < e.length; n++)e[n](null, null);
        };
        this[i](e).then(()=>{
            queueMicrotask(a);
        });
    }
    [E](e, n) {
        if (!this[c] || 0 === this[c].length) return this[E] = this[l], this[l](e, n);
        let a = this[l].bind(this);
        for(let e = this[c].length - 1; e >= 0; e--)a = this[c][e](a);
        return this[E] = a, a(e, n);
    }
    dispatch(e, n) {
        if (!n || "object" != typeof n) throw new r("handler must be an object");
        try {
            if (!e || "object" != typeof e) throw new r("opts must be an object.");
            if (this[m] || this[g]) throw new s;
            if (this[d]) throw new o;
            return this[E](e, n);
        } catch (e) {
            if ("function" != typeof n.onError) throw new r("invalid onError method");
            return n.onError(e), !1;
        }
    }
};
