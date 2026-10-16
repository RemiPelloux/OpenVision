"use strict";
const r = require("./module-27110.js"), s = require("./module-50423.js"), { kConnected: o, kSize: n, kRunning: i, kPending: a, kQueued: Q, kBusy: g, kFree: E, kUrl: B, kClose: c, kDestroy: I, kDispatch: C } = require("./module-76992.js"), h = require("./module-33103.js"), l = Symbol("clients"), u = Symbol("needDrain"), d = Symbol("queue"), f = Symbol("closed resolve"), w = Symbol("onDrain"), y = Symbol("onConnect"), D = Symbol("onDisconnect"), p = Symbol("onConnectionError"), k = Symbol("get dispatcher"), R = Symbol("add client"), F = Symbol("remove client"), m = Symbol("stats");
module.exports = {
    PoolBase: class extends r {
        constructor(A){
            super(A), this[d] = new s, this[l] = [], this[Q] = 0;
            const e = this;
            this[w] = function(A, t) {
                const r = e[d];
                let s = !1;
                for(; !s;){
                    const A = r.shift();
                    if (!A) break;
                    e[Q]--, s = !this.dispatch(A.opts, A.handler);
                }
                this[u] = s, !this[u] && e[u] && (e[u] = !1, e.emit("drain", A, [
                    e,
                    ...t
                ])), e[f] && r.isEmpty() && Promise.all(e[l].map((A)=>A.close())).then(e[f]);
            }, this[y] = (A, t)=>{
                e.emit("connect", A, [
                    e,
                    ...t
                ]);
            }, this[D] = (A, t, r)=>{
                e.emit("disconnect", A, [
                    e,
                    ...t
                ], r);
            }, this[p] = (A, t, r)=>{
                e.emit("connectionError", A, [
                    e,
                    ...t
                ], r);
            }, this[m] = new h(this);
        }
        get [g]() {
            return this[u];
        }
        get [o]() {
            return this[l].filter((A)=>A[o]).length;
        }
        get [E]() {
            return this[l].filter((A)=>A[o] && !A[u]).length;
        }
        get [a]() {
            let A = this[Q];
            for (const { [a]: e } of this[l])A += e;
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
            return this[m];
        }
        async [c]() {
            this[d].isEmpty() ? await Promise.all(this[l].map((A)=>A.close())) : await new Promise((A)=>{
                this[f] = A;
            });
        }
        async [I](A) {
            for(;;){
                const e = this[d].shift();
                if (!e) break;
                e.handler.onError(A);
            }
            await Promise.all(this[l].map((e)=>e.destroy(A)));
        }
        [C](A, e) {
            const t = this[k]();
            return t ? t.dispatch(A, e) || (t[u] = !0, this[u] = !this[k]()) : (this[u] = !0, this[d].push({
                opts: A,
                handler: e
            }), this[Q]++), !this[u];
        }
        [R](A) {
            return A.on("drain", this[w]).on("connect", this[y]).on("disconnect", this[D]).on("connectionError", this[p]), this[l].push(A), this[u] && queueMicrotask(()=>{
                this[u] && this[w](A[B], [
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
    kAddClient: R,
    kRemoveClient: F,
    kGetDispatcher: k
};
