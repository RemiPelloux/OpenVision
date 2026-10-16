"use strict";
const n = require("./module-9792.js"), r = require("./module-4622.js"), { kConnected: o, kSize: s, kRunning: i, kPending: a, kQueued: c, kBusy: l, kFree: u, kUrl: g, kClose: E, kDestroy: h, kDispatch: d } = require("./module-8832.js"), I = require("./module-2721.js"), B = Symbol("clients"), Q = Symbol("needDrain"), f = Symbol("queue"), C = Symbol("closed resolve"), p = Symbol("onDrain"), m = Symbol("onConnect"), y = Symbol("onDisconnect"), w = Symbol("onConnectionError"), k = Symbol("get dispatcher"), b = Symbol("add client"), N = Symbol("remove client"), T = Symbol("stats");
module.exports = {
    PoolBase: class extends n {
        constructor(){
            super(), this[f] = new r, this[B] = [], this[c] = 0;
            const e = this;
            this[p] = function(t, A) {
                const n = e[f];
                let r = !1;
                for(; !r;){
                    const t = n.shift();
                    if (!t) break;
                    e[c]--, r = !this.dispatch(t.opts, t.handler);
                }
                this[Q] = r, !this[Q] && e[Q] && (e[Q] = !1, e.emit("drain", t, [
                    e,
                    ...A
                ])), e[C] && n.isEmpty() && Promise.all(e[B].map((e)=>e.close())).then(e[C]);
            }, this[m] = (t, A)=>{
                e.emit("connect", t, [
                    e,
                    ...A
                ]);
            }, this[y] = (t, A, n)=>{
                e.emit("disconnect", t, [
                    e,
                    ...A
                ], n);
            }, this[w] = (t, A, n)=>{
                e.emit("connectionError", t, [
                    e,
                    ...A
                ], n);
            }, this[T] = new I(this);
        }
        get [l]() {
            return this[Q];
        }
        get [o]() {
            return this[B].filter((e)=>e[o]).length;
        }
        get [u]() {
            return this[B].filter((e)=>e[o] && !e[Q]).length;
        }
        get [a]() {
            let e = this[c];
            for (const { [a]: t } of this[B])e += t;
            return e;
        }
        get [i]() {
            let e = 0;
            for (const { [i]: t } of this[B])e += t;
            return e;
        }
        get [s]() {
            let e = this[c];
            for (const { [s]: t } of this[B])e += t;
            return e;
        }
        get stats() {
            return this[T];
        }
        async [E]() {
            return this[f].isEmpty() ? Promise.all(this[B].map((e)=>e.close())) : new Promise((e)=>{
                this[C] = e;
            });
        }
        async [h](e) {
            for(;;){
                const t = this[f].shift();
                if (!t) break;
                t.handler.onError(e);
            }
            return Promise.all(this[B].map((t)=>t.destroy(e)));
        }
        [d](e, t) {
            const A = this[k]();
            return A ? A.dispatch(e, t) || (A[Q] = !0, this[Q] = !this[k]()) : (this[Q] = !0, this[f].push({
                opts: e,
                handler: t
            }), this[c]++), !this[Q];
        }
        [b](e) {
            return e.on("drain", this[p]).on("connect", this[m]).on("disconnect", this[y]).on("connectionError", this[w]), this[B].push(e), this[Q] && process.nextTick(()=>{
                this[Q] && this[p](e[g], [
                    this,
                    e
                ]);
            }), this;
        }
        [N](e) {
            e.close(()=>{
                const t = this[B].indexOf(e);
                -1 !== t && this[B].splice(t, 1);
            }), this[Q] = this[B].some((e)=>!e[Q] && !0 !== e.closed && !0 !== e.destroyed);
        }
    },
    kClients: B,
    kNeedDrain: Q,
    kAddClient: b,
    kRemoveClient: N,
    kGetDispatcher: k
};
