"use strict";
const { kClients: n } = require("./module-8832.js"), r = require("./module-568.js"), { kAgent: o, kMockAgentSet: s, kMockAgentGet: i, kDispatches: a, kIsMockActive: c, kNetConnect: l, kGetNetConnect: u, kOptions: g, kFactory: E } = require("./module-3192.js"), h = require("./module-4826.js"), d = require("./module-5543.js"), { matchValue: I, buildMockOptions: B } = require("./module-76.js"), { InvalidArgumentError: Q, UndiciError: f } = require("./module-7902.js"), C = require("./module-1124.js"), p = require("./module-4332.js"), m = require("./module-2347.js");
class y {
    constructor(e){
        this.value = e;
    }
    deref() {
        return this.value;
    }
}
module.exports = class extends C {
    constructor(e){
        if (super(e), this[l] = !0, this[c] = !0, e && e.agent && "function" != typeof e.agent.dispatch) throw new Q("Argument opts.agent must implement Agent");
        const t = e && e.agent ? e.agent : new r(e);
        this[o] = t, this[n] = t[n], this[g] = B(e);
    }
    get(e) {
        let t = this[i](e);
        return t || (t = this[E](e), this[s](e, t)), t;
    }
    dispatch(e, t) {
        return this.get(e.origin), this[o].dispatch(e, t);
    }
    async close() {
        await this[o].close(), this[n].clear();
    }
    deactivate() {
        this[c] = !1;
    }
    activate() {
        this[c] = !0;
    }
    enableNetConnect(e) {
        if ("string" == typeof e || "function" == typeof e || e instanceof RegExp) Array.isArray(this[l]) ? this[l].push(e) : this[l] = [
            e
        ];
        else {
            if (void 0 !== e) throw new Q("Unsupported matcher. Must be one of String|Function|RegExp.");
            this[l] = !0;
        }
    }
    disableNetConnect() {
        this[l] = !1;
    }
    get isMockActive() {
        return this[c];
    }
    [s](e, t) {
        this[n].set(e, new y(t));
    }
    [E](e) {
        const t = Object.assign({
            agent: this
        }, this[g]);
        return this[g] && 1 === this[g].connections ? new h(e, t) : new d(e, t);
    }
    [i](e) {
        const t = this[n].get(e);
        if (t) return t.deref();
        if ("string" != typeof e) {
            const t = this[E]("http://localhost:9999");
            return this[s](e, t), t;
        }
        for (const [t, A] of Array.from(this[n])){
            const n = A.deref();
            if (n && "string" != typeof t && I(t, e)) {
                const t = this[E](e);
                return this[s](e, t), t[a] = n[a], t;
            }
        }
    }
    [u]() {
        return this[l];
    }
    pendingInterceptors() {
        const e = this[n];
        return Array.from(e.entries()).flatMap(([e, t])=>t.deref()[a].map((t)=>({
                    ...t,
                    origin: e
                }))).filter(({ pending: e })=>e);
    }
    assertNoPendingInterceptors({ pendingInterceptorsFormatter: e = new m } = {}) {
        const t = this.pendingInterceptors();
        if (0 === t.length) return;
        const A = new p("interceptor", "interceptors").pluralize(t.length);
        throw new f(`\n${A.count} ${A.noun} ${A.is} pending:\n\n${e.format(t)}\n`.trim());
    }
};
