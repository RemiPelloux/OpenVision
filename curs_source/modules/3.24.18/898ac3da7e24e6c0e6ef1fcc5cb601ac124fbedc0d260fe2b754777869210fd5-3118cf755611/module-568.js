"use strict";
const { InvalidArgumentError: t } = require("./module-7902.js"), { kClients: s, kRunning: o, kClose: r, kDestroy: i, kDispatch: A, kInterceptors: l } = require("./module-8832.js"), c = require("./module-9792.js"), m = require("./module-4003.js"), d = require("./module-4814.js"), g = require("./module-9361.js"), u = require("./module-858.js"), { WeakRef: E, FinalizationRegistry: p } = require("./module-1531.js")(), T = Symbol("onConnect"), k = Symbol("onDisconnect"), I = Symbol("onConnectionError"), h = Symbol("maxRedirections"), _ = Symbol("onDrain"), C = Symbol("factory"), f = Symbol("finalizer"), B = Symbol("options");
function Q(e, n) {
    return n && 1 === n.connections ? new d(e, n) : new m(e, n);
}
module.exports = class extends c {
    constructor({ factory: e = Q, maxRedirections: n = 0, connect: a, ...o } = {}){
        if (super(), "function" != typeof e) throw new t("factory must be a function.");
        if (null != a && "function" != typeof a && "object" != typeof a) throw new t("connect must be a function or an object");
        if (!Number.isInteger(n) || n < 0) throw new t("maxRedirections must be a positive number");
        a && "function" != typeof a && (a = {
            ...a
        }), this[l] = o.interceptors && o.interceptors.Agent && Array.isArray(o.interceptors.Agent) ? o.interceptors.Agent : [
            u({
                maxRedirections: n
            })
        ], this[B] = {
            ...g.deepClone(o),
            connect: a
        }, this[B].interceptors = o.interceptors ? {
            ...o.interceptors
        } : void 0, this[h] = n, this[C] = e, this[s] = new Map, this[f] = new p((e)=>{
            const n = this[s].get(e);
            void 0 !== n && void 0 === n.deref() && this[s].delete(e);
        });
        const r = this;
        this[_] = (e, n)=>{
            r.emit("drain", e, [
                r,
                ...n
            ]);
        }, this[T] = (e, n)=>{
            r.emit("connect", e, [
                r,
                ...n
            ]);
        }, this[k] = (e, n, a)=>{
            r.emit("disconnect", e, [
                r,
                ...n
            ], a);
        }, this[I] = (e, n, a)=>{
            r.emit("connectionError", e, [
                r,
                ...n
            ], a);
        };
    }
    get [o]() {
        let e = 0;
        for (const n of this[s].values()){
            const a = n.deref();
            a && (e += a[o]);
        }
        return e;
    }
    [A](e, n) {
        let a;
        if (!e.origin || !("string" == typeof e.origin || e.origin instanceof URL)) throw new t("opts.origin must be a non-empty string or URL.");
        a = String(e.origin);
        const o = this[s].get(a);
        let r = o ? o.deref() : null;
        return r || (r = this[C](e.origin, this[B]).on("drain", this[_]).on("connect", this[T]).on("disconnect", this[k]).on("connectionError", this[I]), this[s].set(a, new E(r)), this[f].register(r, a)), r.dispatch(e, n);
    }
    async [r]() {
        const e = [];
        for (const n of this[s].values()){
            const a = n.deref();
            a && e.push(a.close());
        }
        await Promise.all(e);
    }
    async [i](e) {
        const n = [];
        for (const a of this[s].values()){
            const t = a.deref();
            t && n.push(t.destroy(e));
        }
        await Promise.all(n);
    }
};
