"use strict";
const { kClients: t } = require("./module-8832.js"), s = require("./module-568.js"), { kAgent: o, kMockAgentSet: r, kMockAgentGet: i, kDispatches: l, kIsMockActive: d, kNetConnect: m, kGetNetConnect: c, kOptions: p, kFactory: A } = require("./module-3192.js"), u = require("./module-4826.js"), g = require("./module-5543.js"), { matchValue: T, buildMockOptions: h } = require("./module-76.js"), { InvalidArgumentError: k, UndiciError: _ } = require("./module-7902.js"), E = require("./module-1124.js"), f = require("./module-4332.js"), C = require("./module-2347.js");
class I {
    constructor(e){
        this.value = e;
    }
    deref() {
        return this.value;
    }
}
module.exports = class extends E {
    constructor(e){
        if (super(e), this[m] = !0, this[d] = !0, e && e.agent && "function" != typeof e.agent.dispatch) throw new k("Argument opts.agent must implement Agent");
        const a = e && e.agent ? e.agent : new s(e);
        this[o] = a, this[t] = a[t], this[p] = h(e);
    }
    get(e) {
        let a = this[i](e);
        return a || (a = this[A](e), this[r](e, a)), a;
    }
    dispatch(e, a) {
        return this.get(e.origin), this[o].dispatch(e, a);
    }
    async close() {
        await this[o].close(), this[t].clear();
    }
    deactivate() {
        this[d] = !1;
    }
    activate() {
        this[d] = !0;
    }
    enableNetConnect(e) {
        if ("string" == typeof e || "function" == typeof e || e instanceof RegExp) Array.isArray(this[m]) ? this[m].push(e) : this[m] = [
            e
        ];
        else {
            if (void 0 !== e) throw new k("Unsupported matcher. Must be one of String|Function|RegExp.");
            this[m] = !0;
        }
    }
    disableNetConnect() {
        this[m] = !1;
    }
    get isMockActive() {
        return this[d];
    }
    [r](e, a) {
        this[t].set(e, new I(a));
    }
    [A](e) {
        const a = Object.assign({
            agent: this
        }, this[p]);
        return this[p] && 1 === this[p].connections ? new u(e, a) : new g(e, a);
    }
    [i](e) {
        const a = this[t].get(e);
        if (a) return a.deref();
        if ("string" != typeof e) {
            const a = this[A]("http://localhost:9999");
            return this[r](e, a), a;
        }
        for (const [a, n] of Array.from(this[t])){
            const t = n.deref();
            if (t && "string" != typeof a && T(a, e)) {
                const a = this[A](e);
                return this[r](e, a), a[l] = t[l], a;
            }
        }
    }
    [c]() {
        return this[m];
    }
    pendingInterceptors() {
        const e = this[t];
        return Array.from(e.entries()).flatMap(([e, a])=>a.deref()[l].map((a)=>({
                    ...a,
                    origin: e
                }))).filter(({ pending: e })=>e);
    }
    assertNoPendingInterceptors({ pendingInterceptorsFormatter: e = new C } = {}) {
        const a = this.pendingInterceptors();
        if (0 === a.length) return;
        const n = new f("interceptor", "interceptors").pluralize(a.length);
        throw new _(`\n${n.count} ${n.noun} ${n.is} pending:\n\n${e.format(a)}\n`.trim());
    }
};
