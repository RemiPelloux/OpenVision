"use strict";
const t = require("./module-9792.js"), s = require("./module-4622.js"), { kConnected: o, kSize: r, kRunning: i, kPending: A, kQueued: l, kBusy: c, kFree: m, kUrl: d, kClose: g, kDestroy: u, kDispatch: E } = require("./module-8832.js"), p = require("./module-2721.js"), T = Symbol("clients"), k = Symbol("needDrain"), I = Symbol("queue"), h = Symbol("closed resolve"), _ = Symbol("onDrain"), C = Symbol("onConnect"), f = Symbol("onDisconnect"), B = Symbol("onConnectionError"), Q = Symbol("get dispatcher"), y = Symbol("add client"), R = Symbol("remove client"), N = Symbol("stats");
module.exports = {
    PoolBase: class extends t {
        constructor(){
            super(), this[I] = new s, this[T] = [], this[l] = 0;
            const e = this;
            this[_] = function(n, a) {
                const t = e[I];
                let s = !1;
                for(; !s;){
                    const n = t.shift();
                    if (!n) break;
                    e[l]--, s = !this.dispatch(n.opts, n.handler);
                }
                this[k] = s, !this[k] && e[k] && (e[k] = !1, e.emit("drain", n, [
                    e,
                    ...a
                ])), e[h] && t.isEmpty() && Promise.all(e[T].map((e)=>e.close())).then(e[h]);
            }, this[C] = (n, a)=>{
                e.emit("connect", n, [
                    e,
                    ...a
                ]);
            }, this[f] = (n, a, t)=>{
                e.emit("disconnect", n, [
                    e,
                    ...a
                ], t);
            }, this[B] = (n, a, t)=>{
                e.emit("connectionError", n, [
                    e,
                    ...a
                ], t);
            }, this[N] = new p(this);
        }
        get [c]() {
            return this[k];
        }
        get [o]() {
            return this[T].filter((e)=>e[o]).length;
        }
        get [m]() {
            return this[T].filter((e)=>e[o] && !e[k]).length;
        }
        get [A]() {
            let e = this[l];
            for (const { [A]: n } of this[T])e += n;
            return e;
        }
        get [i]() {
            let e = 0;
            for (const { [i]: n } of this[T])e += n;
            return e;
        }
        get [r]() {
            let e = this[l];
            for (const { [r]: n } of this[T])e += n;
            return e;
        }
        get stats() {
            return this[N];
        }
        async [g]() {
            return this[I].isEmpty() ? Promise.all(this[T].map((e)=>e.close())) : new Promise((e)=>{
                this[h] = e;
            });
        }
        async [u](e) {
            for(;;){
                const n = this[I].shift();
                if (!n) break;
                n.handler.onError(e);
            }
            return Promise.all(this[T].map((n)=>n.destroy(e)));
        }
        [E](e, n) {
            const a = this[Q]();
            return a ? a.dispatch(e, n) || (a[k] = !0, this[k] = !this[Q]()) : (this[k] = !0, this[I].push({
                opts: e,
                handler: n
            }), this[l]++), !this[k];
        }
        [y](e) {
            return e.on("drain", this[_]).on("connect", this[C]).on("disconnect", this[f]).on("connectionError", this[B]), this[T].push(e), this[k] && process.nextTick(()=>{
                this[k] && this[_](e[d], [
                    this,
                    e
                ]);
            }), this;
        }
        [R](e) {
            e.close(()=>{
                const n = this[T].indexOf(e);
                -1 !== n && this[T].splice(n, 1);
            }), this[k] = this[T].some((e)=>!e[k] && !0 !== e.closed && !0 !== e.destroyed);
        }
    },
    kClients: T,
    kNeedDrain: k,
    kAddClient: y,
    kRemoveClient: R,
    kGetDispatcher: Q
};
