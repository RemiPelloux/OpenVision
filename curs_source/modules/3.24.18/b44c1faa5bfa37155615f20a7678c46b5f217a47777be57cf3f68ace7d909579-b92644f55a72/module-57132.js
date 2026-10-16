"use strict";
const { InvalidArgumentError: n } = require("./module-48762.js"), { kClients: s, kRunning: o, kClose: i, kDestroy: a, kDispatch: c, kInterceptors: l } = require("./module-15532.js"), u = require("./module-84220.js"), d = require("./module-26215.js"), p = require("./module-6602.js"), m = require("./module-83589.js"), h = require("./module-31878.js"), { WeakRef: f, FinalizationRegistry: g } = require("./module-84191.js")(), y = Symbol("onConnect"), w = Symbol("onDisconnect"), v = Symbol("onConnectionError"), _ = Symbol("maxRedirections"), A = Symbol("onDrain"), S = Symbol("factory"), b = Symbol("finalizer"), E = Symbol("options");
function I(e, t) {
    return t && 1 === t.connections ? new p(e, t) : new d(e, t);
}
module.exports = class extends u {
    constructor({ factory: e = I, maxRedirections: t = 0, connect: r, ...o } = {}){
        if (super(), "function" != typeof e) throw new n("factory must be a function.");
        if (null != r && "function" != typeof r && "object" != typeof r) throw new n("connect must be a function or an object");
        if (!Number.isInteger(t) || t < 0) throw new n("maxRedirections must be a positive number");
        r && "function" != typeof r && (r = {
            ...r
        }), this[l] = o.interceptors && o.interceptors.Agent && Array.isArray(o.interceptors.Agent) ? o.interceptors.Agent : [
            h({
                maxRedirections: t
            })
        ], this[E] = {
            ...m.deepClone(o),
            connect: r
        }, this[E].interceptors = o.interceptors ? {
            ...o.interceptors
        } : void 0, this[_] = t, this[S] = e, this[s] = new Map, this[b] = new g((e)=>{
            const t = this[s].get(e);
            void 0 !== t && void 0 === t.deref() && this[s].delete(e);
        });
        const i = this;
        this[A] = (e, t)=>{
            i.emit("drain", e, [
                i,
                ...t
            ]);
        }, this[y] = (e, t)=>{
            i.emit("connect", e, [
                i,
                ...t
            ]);
        }, this[w] = (e, t, r)=>{
            i.emit("disconnect", e, [
                i,
                ...t
            ], r);
        }, this[v] = (e, t, r)=>{
            i.emit("connectionError", e, [
                i,
                ...t
            ], r);
        };
    }
    get [o]() {
        let e = 0;
        for (const t of this[s].values()){
            const r = t.deref();
            r && (e += r[o]);
        }
        return e;
    }
    [c](e, t) {
        let r;
        if (!e.origin || !("string" == typeof e.origin || e.origin instanceof URL)) throw new n("opts.origin must be a non-empty string or URL.");
        r = String(e.origin);
        const o = this[s].get(r);
        let i = o ? o.deref() : null;
        return i || (i = this[S](e.origin, this[E]).on("drain", this[A]).on("connect", this[y]).on("disconnect", this[w]).on("connectionError", this[v]), this[s].set(r, new f(i)), this[b].register(i, r)), i.dispatch(e, t);
    }
    async [i]() {
        const e = [];
        for (const t of this[s].values()){
            const r = t.deref();
            r && e.push(r.close());
        }
        await Promise.all(e);
    }
    async [a](e) {
        const t = [];
        for (const r of this[s].values()){
            const n = r.deref();
            n && t.push(n.destroy(e));
        }
        await Promise.all(t);
    }
};
