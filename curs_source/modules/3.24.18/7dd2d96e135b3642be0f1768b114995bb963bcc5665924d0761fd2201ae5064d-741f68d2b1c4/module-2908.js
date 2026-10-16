"use strict";
const { kClients: a } = require("./module-8832.js"), s = require("./module-568.js"), { kAgent: o, kMockAgentSet: r, kMockAgentGet: i, kDispatches: A, kIsMockActive: c, kNetConnect: l, kGetNetConnect: d, kOptions: m, kFactory: u } = require("./module-3192.js"), g = require("./module-4826.js"), p = require("./module-5543.js"), { matchValue: E, buildMockOptions: h } = require("./module-76.js"), { InvalidArgumentError: T, UndiciError: k } = require("./module-7902.js"), f = require("./module-1124.js"), _ = require("./module-4332.js"), I = require("./module-2347.js");
class C {
    constructor(e){
        this.value = e;
    }
    deref() {
        return this.value;
    }
}
module.exports = class extends f {
    constructor(e){
        if (super(e), this[l] = !0, this[c] = !0, e && e.agent && "function" != typeof e.agent.dispatch) throw new T("Argument opts.agent must implement Agent");
        const n = e && e.agent ? e.agent : new s(e);
        this[o] = n, this[a] = n[a], this[m] = h(e);
    }
    get(e) {
        let n = this[i](e);
        return n || (n = this[u](e), this[r](e, n)), n;
    }
    dispatch(e, n) {
        return this.get(e.origin), this[o].dispatch(e, n);
    }
    async close() {
        await this[o].close(), this[a].clear();
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
            if (void 0 !== e) throw new T("Unsupported matcher. Must be one of String|Function|RegExp.");
            this[l] = !0;
        }
    }
    disableNetConnect() {
        this[l] = !1;
    }
    get isMockActive() {
        return this[c];
    }
    [r](e, n) {
        this[a].set(e, new C(n));
    }
    [u](e) {
        const n = Object.assign({
            agent: this
        }, this[m]);
        return this[m] && 1 === this[m].connections ? new g(e, n) : new p(e, n);
    }
    [i](e) {
        const n = this[a].get(e);
        if (n) return n.deref();
        if ("string" != typeof e) {
            const n = this[u]("http://localhost:9999");
            return this[r](e, n), n;
        }
        for (const [n, t] of Array.from(this[a])){
            const a = t.deref();
            if (a && "string" != typeof n && E(n, e)) {
                const n = this[u](e);
                return this[r](e, n), n[A] = a[A], n;
            }
        }
    }
    [d]() {
        return this[l];
    }
    pendingInterceptors() {
        const e = this[a];
        return Array.from(e.entries()).flatMap(([e, n])=>n.deref()[A].map((n)=>({
                    ...n,
                    origin: e
                }))).filter(({ pending: e })=>e);
    }
    assertNoPendingInterceptors({ pendingInterceptorsFormatter: e = new I } = {}) {
        const n = this.pendingInterceptors();
        if (0 === n.length) return;
        const t = new _("interceptor", "interceptors").pluralize(n.length);
        throw new k(`\n${t.count} ${t.noun} ${t.is} pending:\n\n${e.format(n)}\n`.trim());
    }
};
