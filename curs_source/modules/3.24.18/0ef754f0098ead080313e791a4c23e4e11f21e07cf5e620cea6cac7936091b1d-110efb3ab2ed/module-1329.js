"use strict";
const t = require("./module-9792.js"), s = require("./module-4622.js"), { kConnected: o, kSize: r, kRunning: i, kPending: l, kQueued: d, kBusy: m, kFree: c, kUrl: p, kClose: A, kDestroy: u, kDispatch: g } = require("./module-8832.js"), T = require("./module-2721.js"), h = Symbol("clients"), k = Symbol("needDrain"), _ = Symbol("queue"), E = Symbol("closed resolve"), f = Symbol("onDrain"), C = Symbol("onConnect"), I = Symbol("onDisconnect"), v = Symbol("onConnectionError"), y = Symbol("get dispatcher"), S = Symbol("add client"), R = Symbol("remove client"), N = Symbol("stats");
module.exports = {
    PoolBase: class extends t {
        constructor(){
            super(), this[_] = new s, this[h] = [], this[d] = 0;
            const e = this;
            this[f] = function(a, n) {
                const t = e[_];
                let s = !1;
                for(; !s;){
                    const a = t.shift();
                    if (!a) break;
                    e[d]--, s = !this.dispatch(a.opts, a.handler);
                }
                this[k] = s, !this[k] && e[k] && (e[k] = !1, e.emit("drain", a, [
                    e,
                    ...n
                ])), e[E] && t.isEmpty() && Promise.all(e[h].map((e)=>e.close())).then(e[E]);
            }, this[C] = (a, n)=>{
                e.emit("connect", a, [
                    e,
                    ...n
                ]);
            }, this[I] = (a, n, t)=>{
                e.emit("disconnect", a, [
                    e,
                    ...n
                ], t);
            }, this[v] = (a, n, t)=>{
                e.emit("connectionError", a, [
                    e,
                    ...n
                ], t);
            }, this[N] = new T(this);
        }
        get [m]() {
            return this[k];
        }
        get [o]() {
            return this[h].filter((e)=>e[o]).length;
        }
        get [c]() {
            return this[h].filter((e)=>e[o] && !e[k]).length;
        }
        get [l]() {
            let e = this[d];
            for (const { [l]: a } of this[h])e += a;
            return e;
        }
        get [i]() {
            let e = 0;
            for (const { [i]: a } of this[h])e += a;
            return e;
        }
        get [r]() {
            let e = this[d];
            for (const { [r]: a } of this[h])e += a;
            return e;
        }
        get stats() {
            return this[N];
        }
        async [A]() {
            return this[_].isEmpty() ? Promise.all(this[h].map((e)=>e.close())) : new Promise((e)=>{
                this[E] = e;
            });
        }
        async [u](e) {
            for(;;){
                const a = this[_].shift();
                if (!a) break;
                a.handler.onError(e);
            }
            return Promise.all(this[h].map((a)=>a.destroy(e)));
        }
        [g](e, a) {
            const n = this[y]();
            return n ? n.dispatch(e, a) || (n[k] = !0, this[k] = !this[y]()) : (this[k] = !0, this[_].push({
                opts: e,
                handler: a
            }), this[d]++), !this[k];
        }
        [S](e) {
            return e.on("drain", this[f]).on("connect", this[C]).on("disconnect", this[I]).on("connectionError", this[v]), this[h].push(e), this[k] && process.nextTick(()=>{
                this[k] && this[f](e[p], [
                    this,
                    e
                ]);
            }), this;
        }
        [R](e) {
            e.close(()=>{
                const a = this[h].indexOf(e);
                -1 !== a && this[h].splice(a, 1);
            }), this[k] = this[h].some((e)=>!e[k] && !0 !== e.closed && !0 !== e.destroyed);
        }
    },
    kClients: h,
    kNeedDrain: k,
    kAddClient: S,
    kRemoveClient: R,
    kGetDispatcher: y
};
