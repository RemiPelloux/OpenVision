"use strict";
const n = require("./module-74088.js"), { ClientDestroyedError: s, ClientClosedError: o, InvalidArgumentError: i } = require("./module-48762.js"), { kDestroy: a, kClose: c, kDispatch: l, kInterceptors: u } = require("./module-15532.js"), d = Symbol("destroyed"), p = Symbol("closed"), m = Symbol("onDestroyed"), h = Symbol("onClosed"), f = Symbol("Intercepted Dispatch");
module.exports = class extends n {
    constructor(){
        super(), this[d] = !1, this[m] = null, this[p] = !1, this[h] = [];
    }
    get destroyed() {
        return this[d];
    }
    get closed() {
        return this[p];
    }
    get interceptors() {
        return this[u];
    }
    set interceptors(e) {
        if (e) for(let t = e.length - 1; t >= 0; t--){
            if ("function" != typeof this[u][t]) throw new i("interceptor must be an function");
        }
        this[u] = e;
    }
    close(e) {
        if (void 0 === e) return new Promise((e, t)=>{
            this.close((r, n)=>r ? t(r) : e(n));
        });
        if ("function" != typeof e) throw new i("invalid callback");
        if (this[d]) return void queueMicrotask(()=>e(new s, null));
        if (this[p]) return void (this[h] ? this[h].push(e) : queueMicrotask(()=>e(null, null)));
        this[p] = !0, this[h].push(e);
        const t = ()=>{
            const e = this[h];
            this[h] = null;
            for(let t = 0; t < e.length; t++)e[t](null, null);
        };
        this[c]().then(()=>this.destroy()).then(()=>{
            queueMicrotask(t);
        });
    }
    destroy(e, t) {
        if ("function" == typeof e && (t = e, e = null), void 0 === t) return new Promise((t, r)=>{
            this.destroy(e, (e, n)=>e ? r(e) : t(n));
        });
        if ("function" != typeof t) throw new i("invalid callback");
        if (this[d]) return void (this[m] ? this[m].push(t) : queueMicrotask(()=>t(null, null)));
        e || (e = new s), this[d] = !0, this[m] = this[m] || [], this[m].push(t);
        const r = ()=>{
            const e = this[m];
            this[m] = null;
            for(let t = 0; t < e.length; t++)e[t](null, null);
        };
        this[a](e).then(()=>{
            queueMicrotask(r);
        });
    }
    [f](e, t) {
        if (!this[u] || 0 === this[u].length) return this[f] = this[l], this[l](e, t);
        let r = this[l].bind(this);
        for(let e = this[u].length - 1; e >= 0; e--)r = this[u][e](r);
        return this[f] = r, r(e, t);
    }
    dispatch(e, t) {
        if (!t || "object" != typeof t) throw new i("handler must be an object");
        try {
            if (!e || "object" != typeof e) throw new i("opts must be an object.");
            if (this[d] || this[m]) throw new s;
            if (this[p]) throw new o;
            return this[f](e, t);
        } catch (e) {
            if ("function" != typeof t.onError) throw new i("invalid onError method");
            return t.onError(e), !1;
        }
    }
};
