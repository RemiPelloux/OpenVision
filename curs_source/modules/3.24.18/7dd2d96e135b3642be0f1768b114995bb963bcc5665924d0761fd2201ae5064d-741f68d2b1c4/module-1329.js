"use strict";
const a = require("./module-9792.js"), s = require("./module-4622.js"), { kConnected: o, kSize: r, kRunning: i, kPending: A, kQueued: c, kBusy: l, kFree: d, kUrl: m, kClose: u, kDestroy: g, kDispatch: p } = require("./module-8832.js"), E = require("./module-2721.js"), h = Symbol("clients"), T = Symbol("needDrain"), k = Symbol("queue"), f = Symbol("closed resolve"), _ = Symbol("onDrain"), I = Symbol("onConnect"), C = Symbol("onDisconnect"), y = Symbol("onConnectionError"), B = Symbol("get dispatcher"), Q = Symbol("add client"), v = Symbol("remove client"), R = Symbol("stats");
module.exports = {
    PoolBase: class extends a {
        constructor(){
            super(), this[k] = new s, this[h] = [], this[c] = 0;
            const e = this;
            this[_] = function(n, t) {
                const a = e[k];
                let s = !1;
                for(; !s;){
                    const n = a.shift();
                    if (!n) break;
                    e[c]--, s = !this.dispatch(n.opts, n.handler);
                }
                this[T] = s, !this[T] && e[T] && (e[T] = !1, e.emit("drain", n, [
                    e,
                    ...t
                ])), e[f] && a.isEmpty() && Promise.all(e[h].map((e)=>e.close())).then(e[f]);
            }, this[I] = (n, t)=>{
                e.emit("connect", n, [
                    e,
                    ...t
                ]);
            }, this[C] = (n, t, a)=>{
                e.emit("disconnect", n, [
                    e,
                    ...t
                ], a);
            }, this[y] = (n, t, a)=>{
                e.emit("connectionError", n, [
                    e,
                    ...t
                ], a);
            }, this[R] = new E(this);
        }
        get [l]() {
            return this[T];
        }
        get [o]() {
            return this[h].filter((e)=>e[o]).length;
        }
        get [d]() {
            return this[h].filter((e)=>e[o] && !e[T]).length;
        }
        get [A]() {
            let e = this[c];
            for (const { [A]: n } of this[h])e += n;
            return e;
        }
        get [i]() {
            let e = 0;
            for (const { [i]: n } of this[h])e += n;
            return e;
        }
        get [r]() {
            let e = this[c];
            for (const { [r]: n } of this[h])e += n;
            return e;
        }
        get stats() {
            return this[R];
        }
        async [u]() {
            return this[k].isEmpty() ? Promise.all(this[h].map((e)=>e.close())) : new Promise((e)=>{
                this[f] = e;
            });
        }
        async [g](e) {
            for(;;){
                const n = this[k].shift();
                if (!n) break;
                n.handler.onError(e);
            }
            return Promise.all(this[h].map((n)=>n.destroy(e)));
        }
        [p](e, n) {
            const t = this[B]();
            return t ? t.dispatch(e, n) || (t[T] = !0, this[T] = !this[B]()) : (this[T] = !0, this[k].push({
                opts: e,
                handler: n
            }), this[c]++), !this[T];
        }
        [Q](e) {
            return e.on("drain", this[_]).on("connect", this[I]).on("disconnect", this[C]).on("connectionError", this[y]), this[h].push(e), this[T] && process.nextTick(()=>{
                this[T] && this[_](e[m], [
                    this,
                    e
                ]);
            }), this;
        }
        [v](e) {
            e.close(()=>{
                const n = this[h].indexOf(e);
                -1 !== n && this[h].splice(n, 1);
            }), this[T] = this[h].some((e)=>!e[T] && !0 !== e.closed && !0 !== e.destroyed);
        }
    },
    kClients: h,
    kNeedDrain: T,
    kAddClient: Q,
    kRemoveClient: v,
    kGetDispatcher: B
};
