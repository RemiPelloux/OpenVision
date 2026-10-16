"use strict";
const n = require("./module-4220.js"), s = require("./module-2290.js"), { kConnected: i, kSize: o, kRunning: a, kPending: u, kQueued: c, kBusy: l, kFree: m, kUrl: d, kClose: f, kDestroy: p, kDispatch: h } = require("./module-5532.js"), g = require("./module-3661.js"), A = Symbol("clients"), _ = Symbol("needDrain"), y = Symbol("queue"), w = Symbol("closed resolve"), S = Symbol("onDrain"), J = Symbol("onConnect"), B = Symbol("onDisconnect"), E = Symbol("onConnectionError"), I = Symbol("get dispatcher"), C = Symbol("add client"), b = Symbol("remove client"), k = Symbol("stats");
module.exports = {
    PoolBase: class extends n {
        constructor(){
            super(), this[y] = new s, this[A] = [], this[c] = 0;
            const t = this;
            this[S] = function(e, r) {
                const n = t[y];
                let s = !1;
                for(; !s;){
                    const e = n.shift();
                    if (!e) break;
                    t[c]--, s = !this.dispatch(e.opts, e.handler);
                }
                this[_] = s, !this[_] && t[_] && (t[_] = !1, t.emit("drain", e, [
                    t,
                    ...r
                ])), t[w] && n.isEmpty() && Promise.all(t[A].map((t)=>t.close())).then(t[w]);
            }, this[J] = (e, r)=>{
                t.emit("connect", e, [
                    t,
                    ...r
                ]);
            }, this[B] = (e, r, n)=>{
                t.emit("disconnect", e, [
                    t,
                    ...r
                ], n);
            }, this[E] = (e, r, n)=>{
                t.emit("connectionError", e, [
                    t,
                    ...r
                ], n);
            }, this[k] = new g(this);
        }
        get [l]() {
            return this[_];
        }
        get [i]() {
            return this[A].filter((t)=>t[i]).length;
        }
        get [m]() {
            return this[A].filter((t)=>t[i] && !t[_]).length;
        }
        get [u]() {
            let t = this[c];
            for (const { [u]: e } of this[A])t += e;
            return t;
        }
        get [a]() {
            let t = 0;
            for (const { [a]: e } of this[A])t += e;
            return t;
        }
        get [o]() {
            let t = this[c];
            for (const { [o]: e } of this[A])t += e;
            return t;
        }
        get stats() {
            return this[k];
        }
        async [f]() {
            return this[y].isEmpty() ? Promise.all(this[A].map((t)=>t.close())) : new Promise((t)=>{
                this[w] = t;
            });
        }
        async [p](t) {
            for(;;){
                const e = this[y].shift();
                if (!e) break;
                e.handler.onError(t);
            }
            return Promise.all(this[A].map((e)=>e.destroy(t)));
        }
        [h](t, e) {
            const r = this[I]();
            return r ? r.dispatch(t, e) || (r[_] = !0, this[_] = !this[I]()) : (this[_] = !0, this[y].push({
                opts: t,
                handler: e
            }), this[c]++), !this[_];
        }
        [C](t) {
            return t.on("drain", this[S]).on("connect", this[J]).on("disconnect", this[B]).on("connectionError", this[E]), this[A].push(t), this[_] && process.nextTick(()=>{
                this[_] && this[S](t[d], [
                    this,
                    t
                ]);
            }), this;
        }
        [b](t) {
            t.close(()=>{
                const e = this[A].indexOf(t);
                -1 !== e && this[A].splice(e, 1);
            }), this[_] = this[A].some((t)=>!t[_] && !0 !== t.closed && !0 !== t.destroyed);
        }
    },
    kClients: A,
    kNeedDrain: _,
    kAddClient: C,
    kRemoveClient: b,
    kGetDispatcher: I
};
