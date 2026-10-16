"use strict";
const { kClients: n } = require("./module-8832.js"), r = require("./module-568.js"), { kAgent: o, kMockAgentSet: s, kMockAgentGet: a, kDispatches: i, kIsMockActive: c, kNetConnect: l, kGetNetConnect: g, kOptions: E, kFactory: u } = require("./module-3192.js"), d = require("./module-4826.js"), I = require("./module-5543.js"), { matchValue: h, buildMockOptions: Q } = require("./module-76.js"), { InvalidArgumentError: m, UndiciError: C } = require("./module-7902.js"), B = require("./module-1124.js"), p = require("./module-4332.js"), f = require("./module-2347.js");
class y {
    constructor(e){
        this.value = e;
    }
    deref() {
        return this.value;
    }
}
module.exports = class extends B {
    constructor(e){
        if (super(e), this[l] = !0, this[c] = !0, e && e.agent && "function" != typeof e.agent.dispatch) throw new m("Argument opts.agent must implement Agent");
        const A = e && e.agent ? e.agent : new r(e);
        this[o] = A, this[n] = A[n], this[E] = Q(e);
    }
    get(e) {
        let A = this[a](e);
        return A || (A = this[u](e), this[s](e, A)), A;
    }
    dispatch(e, A) {
        return this.get(e.origin), this[o].dispatch(e, A);
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
            if (void 0 !== e) throw new m("Unsupported matcher. Must be one of String|Function|RegExp.");
            this[l] = !0;
        }
    }
    disableNetConnect() {
        this[l] = !1;
    }
    get isMockActive() {
        return this[c];
    }
    [s](e, A) {
        this[n].set(e, new y(A));
    }
    [u](e) {
        const A = Object.assign({
            agent: this
        }, this[E]);
        return this[E] && 1 === this[E].connections ? new d(e, A) : new I(e, A);
    }
    [a](e) {
        const A = this[n].get(e);
        if (A) return A.deref();
        if ("string" != typeof e) {
            const A = this[u]("http://localhost:9999");
            return this[s](e, A), A;
        }
        for (const [A, t] of Array.from(this[n])){
            const n = t.deref();
            if (n && "string" != typeof A && h(A, e)) {
                const A = this[u](e);
                return this[s](e, A), A[i] = n[i], A;
            }
        }
    }
    [g]() {
        return this[l];
    }
    pendingInterceptors() {
        const e = this[n];
        return Array.from(e.entries()).flatMap(([e, A])=>A.deref()[i].map((A)=>({
                    ...A,
                    origin: e
                }))).filter(({ pending: e })=>e);
    }
    assertNoPendingInterceptors({ pendingInterceptorsFormatter: e = new f } = {}) {
        const A = this.pendingInterceptors();
        if (0 === A.length) return;
        const t = new p("interceptor", "interceptors").pluralize(A.length);
        throw new C(`\n${t.count} ${t.noun} ${t.is} pending:\n\n${e.format(A)}\n`.trim());
    }
};
