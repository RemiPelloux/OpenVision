"use strict";
const { InvalidArgumentError: r } = require("./module-95521.js"), { kClients: s, kRunning: o, kClose: n, kDestroy: i, kDispatch: E, kInterceptors: Q } = require("./module-58832.js"), g = require("./module-9792.js"), C = require("./module-34003.js"), B = require("./module-54814.js"), a = require("./module-9361.js"), I = require("./module-80858.js"), { WeakRef: c, FinalizationRegistry: h } = require("./module-71531.js")(), l = Symbol("onConnect"), u = Symbol("onDisconnect"), d = Symbol("onConnectionError"), f = Symbol("maxRedirections"), y = Symbol("onDrain"), D = Symbol("factory"), R = Symbol("finalizer"), w = Symbol("options");
function p(A, e) {
    return e && 1 === e.connections ? new B(A, e) : new C(A, e);
}
module.exports = class extends g {
    constructor({ factory: A = p, maxRedirections: e = 0, connect: t, ...o } = {}){
        if (super(), "function" != typeof A) throw new r("factory must be a function.");
        if (null != t && "function" != typeof t && "object" != typeof t) throw new r("connect must be a function or an object");
        if (!Number.isInteger(e) || e < 0) throw new r("maxRedirections must be a positive number");
        t && "function" != typeof t && (t = {
            ...t
        }), this[Q] = o.interceptors && o.interceptors.Agent && Array.isArray(o.interceptors.Agent) ? o.interceptors.Agent : [
            I({
                maxRedirections: e
            })
        ], this[w] = {
            ...a.deepClone(o),
            connect: t
        }, this[w].interceptors = o.interceptors ? {
            ...o.interceptors
        } : void 0, this[f] = e, this[D] = A, this[s] = new Map, this[R] = new h((A)=>{
            const e = this[s].get(A);
            void 0 !== e && void 0 === e.deref() && this[s].delete(A);
        });
        const n = this;
        this[y] = (A, e)=>{
            n.emit("drain", A, [
                n,
                ...e
            ]);
        }, this[l] = (A, e)=>{
            n.emit("connect", A, [
                n,
                ...e
            ]);
        }, this[u] = (A, e, t)=>{
            n.emit("disconnect", A, [
                n,
                ...e
            ], t);
        }, this[d] = (A, e, t)=>{
            n.emit("connectionError", A, [
                n,
                ...e
            ], t);
        };
    }
    get [o]() {
        let A = 0;
        for (const e of this[s].values()){
            const t = e.deref();
            t && (A += t[o]);
        }
        return A;
    }
    [E](A, e) {
        let t;
        if (!A.origin || !("string" == typeof A.origin || A.origin instanceof URL)) throw new r("opts.origin must be a non-empty string or URL.");
        t = String(A.origin);
        const o = this[s].get(t);
        let n = o ? o.deref() : null;
        return n || (n = this[D](A.origin, this[w]).on("drain", this[y]).on("connect", this[l]).on("disconnect", this[u]).on("connectionError", this[d]), this[s].set(t, new c(n)), this[R].register(n, t)), n.dispatch(A, e);
    }
    async [n]() {
        const A = [];
        for (const e of this[s].values()){
            const t = e.deref();
            t && A.push(t.close());
        }
        await Promise.all(A);
    }
    async [i](A) {
        const e = [];
        for (const t of this[s].values()){
            const r = t.deref();
            r && e.push(r.destroy(A));
        }
        await Promise.all(e);
    }
};
