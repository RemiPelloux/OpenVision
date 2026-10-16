"use strict";
const { InvalidArgumentError: n } = require("./module-7902.js"), { kClients: r, kRunning: o, kClose: s, kDestroy: a, kDispatch: i, kInterceptors: c } = require("./module-8832.js"), l = require("./module-9792.js"), g = require("./module-4003.js"), E = require("./module-4814.js"), u = require("./module-9361.js"), d = require("./module-858.js"), { WeakRef: I, FinalizationRegistry: h } = require("./module-1531.js")(), Q = Symbol("onConnect"), m = Symbol("onDisconnect"), C = Symbol("onConnectionError"), B = Symbol("maxRedirections"), p = Symbol("onDrain"), f = Symbol("factory"), y = Symbol("finalizer"), T = Symbol("options");
function k(e, A) {
    return A && 1 === A.connections ? new E(e, A) : new g(e, A);
}
module.exports = class extends l {
    constructor({ factory: e = k, maxRedirections: A = 0, connect: t, ...o } = {}){
        if (super(), "function" != typeof e) throw new n("factory must be a function.");
        if (null != t && "function" != typeof t && "object" != typeof t) throw new n("connect must be a function or an object");
        if (!Number.isInteger(A) || A < 0) throw new n("maxRedirections must be a positive number");
        t && "function" != typeof t && (t = {
            ...t
        }), this[c] = o.interceptors && o.interceptors.Agent && Array.isArray(o.interceptors.Agent) ? o.interceptors.Agent : [
            d({
                maxRedirections: A
            })
        ], this[T] = {
            ...u.deepClone(o),
            connect: t
        }, this[T].interceptors = o.interceptors ? {
            ...o.interceptors
        } : void 0, this[B] = A, this[f] = e, this[r] = new Map, this[y] = new h((e)=>{
            const A = this[r].get(e);
            void 0 !== A && void 0 === A.deref() && this[r].delete(e);
        });
        const s = this;
        this[p] = (e, A)=>{
            s.emit("drain", e, [
                s,
                ...A
            ]);
        }, this[Q] = (e, A)=>{
            s.emit("connect", e, [
                s,
                ...A
            ]);
        }, this[m] = (e, A, t)=>{
            s.emit("disconnect", e, [
                s,
                ...A
            ], t);
        }, this[C] = (e, A, t)=>{
            s.emit("connectionError", e, [
                s,
                ...A
            ], t);
        };
    }
    get [o]() {
        let e = 0;
        for (const A of this[r].values()){
            const t = A.deref();
            t && (e += t[o]);
        }
        return e;
    }
    [i](e, A) {
        let t;
        if (!e.origin || !("string" == typeof e.origin || e.origin instanceof URL)) throw new n("opts.origin must be a non-empty string or URL.");
        t = String(e.origin);
        const o = this[r].get(t);
        let s = o ? o.deref() : null;
        return s || (s = this[f](e.origin, this[T]).on("drain", this[p]).on("connect", this[Q]).on("disconnect", this[m]).on("connectionError", this[C]), this[r].set(t, new I(s)), this[y].register(s, t)), s.dispatch(e, A);
    }
    async [s]() {
        const e = [];
        for (const A of this[r].values()){
            const t = A.deref();
            t && e.push(t.close());
        }
        await Promise.all(e);
    }
    async [a](e) {
        const A = [];
        for (const t of this[r].values()){
            const n = t.deref();
            n && A.push(n.destroy(e));
        }
        await Promise.all(A);
    }
};
