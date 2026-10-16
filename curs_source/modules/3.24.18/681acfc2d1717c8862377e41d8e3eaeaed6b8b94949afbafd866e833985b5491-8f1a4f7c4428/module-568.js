"use strict";
const { InvalidArgumentError: n } = require("./module-7902.js"), { kClients: r, kRunning: o, kClose: s, kDestroy: i, kDispatch: a, kInterceptors: c } = require("./module-8832.js"), l = require("./module-9792.js"), u = require("./module-4003.js"), g = require("./module-4814.js"), E = require("./module-9361.js"), h = require("./module-858.js"), { WeakRef: d, FinalizationRegistry: I } = require("./module-1531.js")(), B = Symbol("onConnect"), Q = Symbol("onDisconnect"), f = Symbol("onConnectionError"), C = Symbol("maxRedirections"), p = Symbol("onDrain"), m = Symbol("factory"), y = Symbol("finalizer"), w = Symbol("options");
function k(e, t) {
    return t && 1 === t.connections ? new g(e, t) : new u(e, t);
}
module.exports = class extends l {
    constructor({ factory: e = k, maxRedirections: t = 0, connect: A, ...o } = {}){
        if (super(), "function" != typeof e) throw new n("factory must be a function.");
        if (null != A && "function" != typeof A && "object" != typeof A) throw new n("connect must be a function or an object");
        if (!Number.isInteger(t) || t < 0) throw new n("maxRedirections must be a positive number");
        A && "function" != typeof A && (A = {
            ...A
        }), this[c] = o.interceptors && o.interceptors.Agent && Array.isArray(o.interceptors.Agent) ? o.interceptors.Agent : [
            h({
                maxRedirections: t
            })
        ], this[w] = {
            ...E.deepClone(o),
            connect: A
        }, this[w].interceptors = o.interceptors ? {
            ...o.interceptors
        } : void 0, this[C] = t, this[m] = e, this[r] = new Map, this[y] = new I((e)=>{
            const t = this[r].get(e);
            void 0 !== t && void 0 === t.deref() && this[r].delete(e);
        });
        const s = this;
        this[p] = (e, t)=>{
            s.emit("drain", e, [
                s,
                ...t
            ]);
        }, this[B] = (e, t)=>{
            s.emit("connect", e, [
                s,
                ...t
            ]);
        }, this[Q] = (e, t, A)=>{
            s.emit("disconnect", e, [
                s,
                ...t
            ], A);
        }, this[f] = (e, t, A)=>{
            s.emit("connectionError", e, [
                s,
                ...t
            ], A);
        };
    }
    get [o]() {
        let e = 0;
        for (const t of this[r].values()){
            const A = t.deref();
            A && (e += A[o]);
        }
        return e;
    }
    [a](e, t) {
        let A;
        if (!e.origin || !("string" == typeof e.origin || e.origin instanceof URL)) throw new n("opts.origin must be a non-empty string or URL.");
        A = String(e.origin);
        const o = this[r].get(A);
        let s = o ? o.deref() : null;
        return s || (s = this[m](e.origin, this[w]).on("drain", this[p]).on("connect", this[B]).on("disconnect", this[Q]).on("connectionError", this[f]), this[r].set(A, new d(s)), this[y].register(s, A)), s.dispatch(e, t);
    }
    async [s]() {
        const e = [];
        for (const t of this[r].values()){
            const A = t.deref();
            A && e.push(A.close());
        }
        await Promise.all(e);
    }
    async [i](e) {
        const t = [];
        for (const A of this[r].values()){
            const n = A.deref();
            n && t.push(n.destroy(e));
        }
        await Promise.all(t);
    }
};
