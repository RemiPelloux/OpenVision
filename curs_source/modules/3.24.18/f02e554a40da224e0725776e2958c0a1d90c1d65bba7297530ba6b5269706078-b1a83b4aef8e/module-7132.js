"use strict";
const { InvalidArgumentError: n } = require("./module-8762.js"), { kClients: s, kRunning: i, kClose: o, kDestroy: a, kDispatch: u, kInterceptors: c } = require("./module-5532.js"), l = require("./module-4220.js"), m = require("./module-6215.js"), d = require("./module-6602.js"), f = require("./module-3589.js"), p = require("./module-1878.js"), { WeakRef: h, FinalizationRegistry: g } = require("./module-4191.js")(), A = Symbol("onConnect"), _ = Symbol("onDisconnect"), y = Symbol("onConnectionError"), w = Symbol("maxRedirections"), S = Symbol("onDrain"), J = Symbol("factory"), B = Symbol("finalizer"), E = Symbol("options");
function I(t, e) {
    return e && 1 === e.connections ? new d(t, e) : new m(t, e);
}
module.exports = class extends l {
    constructor({ factory: t = I, maxRedirections: e = 0, connect: r, ...i } = {}){
        if (super(), "function" != typeof t) throw new n("factory must be a function.");
        if (null != r && "function" != typeof r && "object" != typeof r) throw new n("connect must be a function or an object");
        if (!Number.isInteger(e) || e < 0) throw new n("maxRedirections must be a positive number");
        r && "function" != typeof r && (r = {
            ...r
        }), this[c] = i.interceptors && i.interceptors.Agent && Array.isArray(i.interceptors.Agent) ? i.interceptors.Agent : [
            p({
                maxRedirections: e
            })
        ], this[E] = {
            ...f.deepClone(i),
            connect: r
        }, this[E].interceptors = i.interceptors ? {
            ...i.interceptors
        } : void 0, this[w] = e, this[J] = t, this[s] = new Map, this[B] = new g((t)=>{
            const e = this[s].get(t);
            void 0 !== e && void 0 === e.deref() && this[s].delete(t);
        });
        const o = this;
        this[S] = (t, e)=>{
            o.emit("drain", t, [
                o,
                ...e
            ]);
        }, this[A] = (t, e)=>{
            o.emit("connect", t, [
                o,
                ...e
            ]);
        }, this[_] = (t, e, r)=>{
            o.emit("disconnect", t, [
                o,
                ...e
            ], r);
        }, this[y] = (t, e, r)=>{
            o.emit("connectionError", t, [
                o,
                ...e
            ], r);
        };
    }
    get [i]() {
        let t = 0;
        for (const e of this[s].values()){
            const r = e.deref();
            r && (t += r[i]);
        }
        return t;
    }
    [u](t, e) {
        let r;
        if (!t.origin || !("string" == typeof t.origin || t.origin instanceof URL)) throw new n("opts.origin must be a non-empty string or URL.");
        r = String(t.origin);
        const i = this[s].get(r);
        let o = i ? i.deref() : null;
        return o || (o = this[J](t.origin, this[E]).on("drain", this[S]).on("connect", this[A]).on("disconnect", this[_]).on("connectionError", this[y]), this[s].set(r, new h(o)), this[B].register(o, r)), o.dispatch(t, e);
    }
    async [o]() {
        const t = [];
        for (const e of this[s].values()){
            const r = e.deref();
            r && t.push(r.close());
        }
        await Promise.all(t);
    }
    async [a](t) {
        const e = [];
        for (const r of this[s].values()){
            const n = r.deref();
            n && e.push(n.destroy(t));
        }
        await Promise.all(e);
    }
};
