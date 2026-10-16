"use strict";
const n = require("./module-84220.js"), s = require("./module-42290.js"), { kConnected: o, kSize: i, kRunning: a, kPending: c, kQueued: l, kBusy: u, kFree: d, kUrl: p, kClose: m, kDestroy: h, kDispatch: f } = require("./module-15532.js"), g = require("./module-53661.js"), y = Symbol("clients"), w = Symbol("needDrain"), v = Symbol("queue"), _ = Symbol("closed resolve"), A = Symbol("onDrain"), S = Symbol("onConnect"), b = Symbol("onDisconnect"), E = Symbol("onConnectionError"), I = Symbol("get dispatcher"), C = Symbol("add client"), k = Symbol("remove client"), x = Symbol("stats");
module.exports = {
    PoolBase: class extends n {
        constructor(){
            super(), this[v] = new s, this[y] = [], this[l] = 0;
            const e = this;
            this[A] = function(t, r) {
                const n = e[v];
                let s = !1;
                for(; !s;){
                    const t = n.shift();
                    if (!t) break;
                    e[l]--, s = !this.dispatch(t.opts, t.handler);
                }
                this[w] = s, !this[w] && e[w] && (e[w] = !1, e.emit("drain", t, [
                    e,
                    ...r
                ])), e[_] && n.isEmpty() && Promise.all(e[y].map((e)=>e.close())).then(e[_]);
            }, this[S] = (t, r)=>{
                e.emit("connect", t, [
                    e,
                    ...r
                ]);
            }, this[b] = (t, r, n)=>{
                e.emit("disconnect", t, [
                    e,
                    ...r
                ], n);
            }, this[E] = (t, r, n)=>{
                e.emit("connectionError", t, [
                    e,
                    ...r
                ], n);
            }, this[x] = new g(this);
        }
        get [u]() {
            return this[w];
        }
        get [o]() {
            return this[y].filter((e)=>e[o]).length;
        }
        get [d]() {
            return this[y].filter((e)=>e[o] && !e[w]).length;
        }
        get [c]() {
            let e = this[l];
            for (const { [c]: t } of this[y])e += t;
            return e;
        }
        get [a]() {
            let e = 0;
            for (const { [a]: t } of this[y])e += t;
            return e;
        }
        get [i]() {
            let e = this[l];
            for (const { [i]: t } of this[y])e += t;
            return e;
        }
        get stats() {
            return this[x];
        }
        async [m]() {
            return this[v].isEmpty() ? Promise.all(this[y].map((e)=>e.close())) : new Promise((e)=>{
                this[_] = e;
            });
        }
        async [h](e) {
            for(;;){
                const t = this[v].shift();
                if (!t) break;
                t.handler.onError(e);
            }
            return Promise.all(this[y].map((t)=>t.destroy(e)));
        }
        [f](e, t) {
            const r = this[I]();
            return r ? r.dispatch(e, t) || (r[w] = !0, this[w] = !this[I]()) : (this[w] = !0, this[v].push({
                opts: e,
                handler: t
            }), this[l]++), !this[w];
        }
        [C](e) {
            return e.on("drain", this[A]).on("connect", this[S]).on("disconnect", this[b]).on("connectionError", this[E]), this[y].push(e), this[w] && process.nextTick(()=>{
                this[w] && this[A](e[p], [
                    this,
                    e
                ]);
            }), this;
        }
        [k](e) {
            e.close(()=>{
                const t = this[y].indexOf(e);
                -1 !== t && this[y].splice(t, 1);
            }), this[w] = this[y].some((e)=>!e[w] && !0 !== e.closed && !0 !== e.destroyed);
        }
    },
    kClients: y,
    kNeedDrain: w,
    kAddClient: C,
    kRemoveClient: k,
    kGetDispatcher: I
};
