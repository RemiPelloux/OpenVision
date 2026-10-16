"use strict";
const { InvalidArgumentError: t } = require("./module-7902.js"), { kClients: s, kRunning: o, kClose: r, kDestroy: i, kDispatch: l, kInterceptors: d } = require("./module-8832.js"), m = require("./module-9792.js"), c = require("./module-4003.js"), p = require("./module-4814.js"), A = require("./module-9361.js"), u = require("./module-858.js"), { WeakRef: g, FinalizationRegistry: T } = require("./module-1531.js")(), h = Symbol("onConnect"), k = Symbol("onDisconnect"), _ = Symbol("onConnectionError"), E = Symbol("maxRedirections"), f = Symbol("onDrain"), C = Symbol("factory"), I = Symbol("finalizer"), v = Symbol("options");
function y(e, a) {
    return a && 1 === a.connections ? new p(e, a) : new c(e, a);
}
module.exports = class extends m {
    constructor({ factory: e = y, maxRedirections: a = 0, connect: n, ...o } = {}){
        if (super(), "function" != typeof e) throw new t("factory must be a function.");
        if (null != n && "function" != typeof n && "object" != typeof n) throw new t("connect must be a function or an object");
        if (!Number.isInteger(a) || a < 0) throw new t("maxRedirections must be a positive number");
        n && "function" != typeof n && (n = {
            ...n
        }), this[d] = o.interceptors && o.interceptors.Agent && Array.isArray(o.interceptors.Agent) ? o.interceptors.Agent : [
            u({
                maxRedirections: a
            })
        ], this[v] = {
            ...A.deepClone(o),
            connect: n
        }, this[v].interceptors = o.interceptors ? {
            ...o.interceptors
        } : void 0, this[E] = a, this[C] = e, this[s] = new Map, this[I] = new T((e)=>{
            const a = this[s].get(e);
            void 0 !== a && void 0 === a.deref() && this[s].delete(e);
        });
        const r = this;
        this[f] = (e, a)=>{
            r.emit("drain", e, [
                r,
                ...a
            ]);
        }, this[h] = (e, a)=>{
            r.emit("connect", e, [
                r,
                ...a
            ]);
        }, this[k] = (e, a, n)=>{
            r.emit("disconnect", e, [
                r,
                ...a
            ], n);
        }, this[_] = (e, a, n)=>{
            r.emit("connectionError", e, [
                r,
                ...a
            ], n);
        };
    }
    get [o]() {
        let e = 0;
        for (const a of this[s].values()){
            const n = a.deref();
            n && (e += n[o]);
        }
        return e;
    }
    [l](e, a) {
        let n;
        if (!e.origin || !("string" == typeof e.origin || e.origin instanceof URL)) throw new t("opts.origin must be a non-empty string or URL.");
        n = String(e.origin);
        const o = this[s].get(n);
        let r = o ? o.deref() : null;
        return r || (r = this[C](e.origin, this[v]).on("drain", this[f]).on("connect", this[h]).on("disconnect", this[k]).on("connectionError", this[_]), this[s].set(n, new g(r)), this[I].register(r, n)), r.dispatch(e, a);
    }
    async [r]() {
        const e = [];
        for (const a of this[s].values()){
            const n = a.deref();
            n && e.push(n.close());
        }
        await Promise.all(e);
    }
    async [i](e) {
        const a = [];
        for (const n of this[s].values()){
            const t = n.deref();
            t && a.push(t.destroy(e));
        }
        await Promise.all(a);
    }
};
