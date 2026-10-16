"use strict";
const n = require("./module-9792.js"), r = require("./module-4622.js"), { kConnected: o, kSize: s, kRunning: a, kPending: i, kQueued: c, kBusy: l, kFree: g, kUrl: E, kClose: u, kDestroy: d, kDispatch: I } = require("./module-8832.js"), h = require("./module-2721.js"), Q = Symbol("clients"), m = Symbol("needDrain"), C = Symbol("queue"), B = Symbol("closed resolve"), p = Symbol("onDrain"), f = Symbol("onConnect"), y = Symbol("onDisconnect"), T = Symbol("onConnectionError"), k = Symbol("get dispatcher"), w = Symbol("add client"), N = Symbol("remove client"), D = Symbol("stats");
module.exports = {
    PoolBase: class extends n {
        constructor(){
            super(), this[C] = new r, this[Q] = [], this[c] = 0;
            const e = this;
            this[p] = function(A, t) {
                const n = e[C];
                let r = !1;
                for(; !r;){
                    const A = n.shift();
                    if (!A) break;
                    e[c]--, r = !this.dispatch(A.opts, A.handler);
                }
                this[m] = r, !this[m] && e[m] && (e[m] = !1, e.emit("drain", A, [
                    e,
                    ...t
                ])), e[B] && n.isEmpty() && Promise.all(e[Q].map((e)=>e.close())).then(e[B]);
            }, this[f] = (A, t)=>{
                e.emit("connect", A, [
                    e,
                    ...t
                ]);
            }, this[y] = (A, t, n)=>{
                e.emit("disconnect", A, [
                    e,
                    ...t
                ], n);
            }, this[T] = (A, t, n)=>{
                e.emit("connectionError", A, [
                    e,
                    ...t
                ], n);
            }, this[D] = new h(this);
        }
        get [l]() {
            return this[m];
        }
        get [o]() {
            return this[Q].filter((e)=>e[o]).length;
        }
        get [g]() {
            return this[Q].filter((e)=>e[o] && !e[m]).length;
        }
        get [i]() {
            let e = this[c];
            for (const { [i]: A } of this[Q])e += A;
            return e;
        }
        get [a]() {
            let e = 0;
            for (const { [a]: A } of this[Q])e += A;
            return e;
        }
        get [s]() {
            let e = this[c];
            for (const { [s]: A } of this[Q])e += A;
            return e;
        }
        get stats() {
            return this[D];
        }
        async [u]() {
            return this[C].isEmpty() ? Promise.all(this[Q].map((e)=>e.close())) : new Promise((e)=>{
                this[B] = e;
            });
        }
        async [d](e) {
            for(;;){
                const A = this[C].shift();
                if (!A) break;
                A.handler.onError(e);
            }
            return Promise.all(this[Q].map((A)=>A.destroy(e)));
        }
        [I](e, A) {
            const t = this[k]();
            return t ? t.dispatch(e, A) || (t[m] = !0, this[m] = !this[k]()) : (this[m] = !0, this[C].push({
                opts: e,
                handler: A
            }), this[c]++), !this[m];
        }
        [w](e) {
            return e.on("drain", this[p]).on("connect", this[f]).on("disconnect", this[y]).on("connectionError", this[T]), this[Q].push(e), this[m] && process.nextTick(()=>{
                this[m] && this[p](e[E], [
                    this,
                    e
                ]);
            }), this;
        }
        [N](e) {
            e.close(()=>{
                const A = this[Q].indexOf(e);
                -1 !== A && this[Q].splice(A, 1);
            }), this[m] = this[Q].some((e)=>!e[m] && !0 !== e.closed && !0 !== e.destroyed);
        }
    },
    kClients: Q,
    kNeedDrain: m,
    kAddClient: w,
    kRemoveClient: N,
    kGetDispatcher: k
};
