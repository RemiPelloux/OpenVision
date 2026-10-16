"use strict";
const { InvalidArgumentError: r } = require("./module-38238.js"), { kClients: s, kRunning: o, kClose: n, kDestroy: i, kDispatch: a, kInterceptors: Q } = require("./module-76992.js"), g = require("./module-27110.js"), E = require("./module-3817.js"), B = require("./module-90996.js"), c = require("./module-55201.js"), I = require("./module-39935.js"), C = Symbol("onConnect"), h = Symbol("onDisconnect"), l = Symbol("onConnectionError"), u = Symbol("maxRedirections"), d = Symbol("onDrain"), f = Symbol("factory"), w = Symbol("options");
function y(A, e) {
    return e && 1 === e.connections ? new B(A, e) : new E(A, e);
}
module.exports = class extends g {
    constructor({ factory: A = y, maxRedirections: e = 0, connect: t, ...o } = {}){
        if ("function" != typeof A) throw new r("factory must be a function.");
        if (null != t && "function" != typeof t && "object" != typeof t) throw new r("connect must be a function or an object");
        if (!Number.isInteger(e) || e < 0) throw new r("maxRedirections must be a positive number");
        super(o), t && "function" != typeof t && (t = {
            ...t
        }), this[Q] = o.interceptors?.Agent && Array.isArray(o.interceptors.Agent) ? o.interceptors.Agent : [
            I({
                maxRedirections: e
            })
        ], this[w] = {
            ...c.deepClone(o),
            connect: t
        }, this[w].interceptors = o.interceptors ? {
            ...o.interceptors
        } : void 0, this[u] = e, this[f] = A, this[s] = new Map, this[d] = (A, e)=>{
            this.emit("drain", A, [
                this,
                ...e
            ]);
        }, this[C] = (A, e)=>{
            this.emit("connect", A, [
                this,
                ...e
            ]);
        }, this[h] = (A, e, t)=>{
            this.emit("disconnect", A, [
                this,
                ...e
            ], t);
        }, this[l] = (A, e, t)=>{
            this.emit("connectionError", A, [
                this,
                ...e
            ], t);
        };
    }
    get [o]() {
        let A = 0;
        for (const e of this[s].values())A += e[o];
        return A;
    }
    [a](A, e) {
        let t;
        if (!A.origin || !("string" == typeof A.origin || A.origin instanceof URL)) throw new r("opts.origin must be a non-empty string or URL.");
        t = String(A.origin);
        let o = this[s].get(t);
        return o || (o = this[f](A.origin, this[w]).on("drain", this[d]).on("connect", this[C]).on("disconnect", this[h]).on("connectionError", this[l]), this[s].set(t, o)), o.dispatch(A, e);
    }
    async [n]() {
        const A = [];
        for (const e of this[s].values())A.push(e.close());
        this[s].clear(), await Promise.all(A);
    }
    async [i](A) {
        const e = [];
        for (const t of this[s].values())e.push(t.destroy(A));
        this[s].clear(), await Promise.all(e);
    }
};
