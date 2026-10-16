"use strict";
const { InvalidArgumentError: a } = require("./module-7902.js"), { kClients: s, kRunning: o, kClose: r, kDestroy: i, kDispatch: A, kInterceptors: c } = require("./module-8832.js"), l = require("./module-9792.js"), d = require("./module-4003.js"), m = require("./module-4814.js"), u = require("./module-9361.js"), g = require("./module-858.js"), { WeakRef: p, FinalizationRegistry: E } = require("./module-1531.js")(), h = Symbol("onConnect"), T = Symbol("onDisconnect"), k = Symbol("onConnectionError"), f = Symbol("maxRedirections"), _ = Symbol("onDrain"), I = Symbol("factory"), C = Symbol("finalizer"), y = Symbol("options");
function B(e, n) {
    return n && 1 === n.connections ? new m(e, n) : new d(e, n);
}
module.exports = class extends l {
    constructor({ factory: e = B, maxRedirections: n = 0, connect: t, ...o } = {}){
        if (super(), "function" != typeof e) throw new a("factory must be a function.");
        if (null != t && "function" != typeof t && "object" != typeof t) throw new a("connect must be a function or an object");
        if (!Number.isInteger(n) || n < 0) throw new a("maxRedirections must be a positive number");
        t && "function" != typeof t && (t = {
            ...t
        }), this[c] = o.interceptors && o.interceptors.Agent && Array.isArray(o.interceptors.Agent) ? o.interceptors.Agent : [
            g({
                maxRedirections: n
            })
        ], this[y] = {
            ...u.deepClone(o),
            connect: t
        }, this[y].interceptors = o.interceptors ? {
            ...o.interceptors
        } : void 0, this[f] = n, this[I] = e, this[s] = new Map, this[C] = new E((e)=>{
            const n = this[s].get(e);
            void 0 !== n && void 0 === n.deref() && this[s].delete(e);
        });
        const r = this;
        this[_] = (e, n)=>{
            r.emit("drain", e, [
                r,
                ...n
            ]);
        }, this[h] = (e, n)=>{
            r.emit("connect", e, [
                r,
                ...n
            ]);
        }, this[T] = (e, n, t)=>{
            r.emit("disconnect", e, [
                r,
                ...n
            ], t);
        }, this[k] = (e, n, t)=>{
            r.emit("connectionError", e, [
                r,
                ...n
            ], t);
        };
    }
    get [o]() {
        let e = 0;
        for (const n of this[s].values()){
            const t = n.deref();
            t && (e += t[o]);
        }
        return e;
    }
    [A](e, n) {
        let t;
        if (!e.origin || !("string" == typeof e.origin || e.origin instanceof URL)) throw new a("opts.origin must be a non-empty string or URL.");
        t = String(e.origin);
        const o = this[s].get(t);
        let r = o ? o.deref() : null;
        return r || (r = this[I](e.origin, this[y]).on("drain", this[_]).on("connect", this[h]).on("disconnect", this[T]).on("connectionError", this[k]), this[s].set(t, new p(r)), this[C].register(r, t)), r.dispatch(e, n);
    }
    async [r]() {
        const e = [];
        for (const n of this[s].values()){
            const t = n.deref();
            t && e.push(t.close());
        }
        await Promise.all(e);
    }
    async [i](e) {
        const n = [];
        for (const t of this[s].values()){
            const a = t.deref();
            a && n.push(a.destroy(e));
        }
        await Promise.all(n);
    }
};
