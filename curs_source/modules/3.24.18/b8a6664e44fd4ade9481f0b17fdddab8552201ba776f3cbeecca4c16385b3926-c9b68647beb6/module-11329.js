"use strict";
const r = require("./module-9792.js"), s = require("./module-14622.js"), { kConnected: o, kSize: n, kRunning: i, kPending: E, kQueued: Q, kBusy: g, kFree: C, kUrl: B, kClose: a, kDestroy: I, kDispatch: c } = require("./module-58832.js"), h = require("./module-32721.js"), l = Symbol("clients"), u = Symbol("needDrain"), d = Symbol("queue"), f = Symbol("closed resolve"), y = Symbol("onDrain"), D = Symbol("onConnect"), R = Symbol("onDisconnect"), w = Symbol("onConnectionError"), p = Symbol("get dispatcher"), k = Symbol("add client"), F = Symbol("remove client"), N = Symbol("stats");
module.exports = {
    PoolBase: class extends r {
        constructor(){
            super(), this[d] = new s, this[l] = [], this[Q] = 0;
            const A = this;
            this[y] = function(e, t) {
                const r = A[d];
                let s = !1;
                for(; !s;){
                    const e = r.shift();
                    if (!e) break;
                    A[Q]--, s = !this.dispatch(e.opts, e.handler);
                }
                this[u] = s, !this[u] && A[u] && (A[u] = !1, A.emit("drain", e, [
                    A,
                    ...t
                ])), A[f] && r.isEmpty() && Promise.all(A[l].map((A)=>A.close())).then(A[f]);
            }, this[D] = (e, t)=>{
                A.emit("connect", e, [
                    A,
                    ...t
                ]);
            }, this[R] = (e, t, r)=>{
                A.emit("disconnect", e, [
                    A,
                    ...t
                ], r);
            }, this[w] = (e, t, r)=>{
                A.emit("connectionError", e, [
                    A,
                    ...t
                ], r);
            }, this[N] = new h(this);
        }
        get [g]() {
            return this[u];
        }
        get [o]() {
            return this[l].filter((A)=>A[o]).length;
        }
        get [C]() {
            return this[l].filter((A)=>A[o] && !A[u]).length;
        }
        get [E]() {
            let A = this[Q];
            for (const { [E]: e } of this[l])A += e;
            return A;
        }
        get [i]() {
            let A = 0;
            for (const { [i]: e } of this[l])A += e;
            return A;
        }
        get [n]() {
            let A = this[Q];
            for (const { [n]: e } of this[l])A += e;
            return A;
        }
        get stats() {
            return this[N];
        }
        async [a]() {
            return this[d].isEmpty() ? Promise.all(this[l].map((A)=>A.close())) : new Promise((A)=>{
                this[f] = A;
            });
        }
        async [I](A) {
            for(;;){
                const e = this[d].shift();
                if (!e) break;
                e.handler.onError(A);
            }
            return Promise.all(this[l].map((e)=>e.destroy(A)));
        }
        [c](A, e) {
            const t = this[p]();
            return t ? t.dispatch(A, e) || (t[u] = !0, this[u] = !this[p]()) : (this[u] = !0, this[d].push({
                opts: A,
                handler: e
            }), this[Q]++), !this[u];
        }
        [k](A) {
            return A.on("drain", this[y]).on("connect", this[D]).on("disconnect", this[R]).on("connectionError", this[w]), this[l].push(A), this[u] && process.nextTick(()=>{
                this[u] && this[y](A[B], [
                    this,
                    A
                ]);
            }), this;
        }
        [F](A) {
            A.close(()=>{
                const e = this[l].indexOf(A);
                -1 !== e && this[l].splice(e, 1);
            }), this[u] = this[l].some((A)=>!A[u] && !0 !== A.closed && !0 !== A.destroyed);
        }
    },
    kClients: l,
    kNeedDrain: u,
    kAddClient: k,
    kRemoveClient: F,
    kGetDispatcher: p
};
