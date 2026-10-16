"use strict";
const { kClients: t } = require("./module-8832.js"), s = require("./module-568.js"), { kAgent: o, kMockAgentSet: r, kMockAgentGet: i, kDispatches: A, kIsMockActive: l, kNetConnect: c, kGetNetConnect: m, kOptions: d, kFactory: g } = require("./module-3192.js"), u = require("./module-4826.js"), E = require("./module-5543.js"), { matchValue: p, buildMockOptions: T } = require("./module-76.js"), { InvalidArgumentError: k, UndiciError: I } = require("./module-7902.js"), h = require("./module-1124.js"), _ = require("./module-4332.js"), C = require("./module-2347.js");
class f {
    constructor(e){
        this.value = e;
    }
    deref() {
        return this.value;
    }
}
module.exports = class extends h {
    constructor(e){
        if (super(e), this[c] = !0, this[l] = !0, e && e.agent && "function" != typeof e.agent.dispatch) throw new k("Argument opts.agent must implement Agent");
        const n = e && e.agent ? e.agent : new s(e);
        this[o] = n, this[t] = n[t], this[d] = T(e);
    }
    get(e) {
        let n = this[i](e);
        return n || (n = this[g](e), this[r](e, n)), n;
    }
    dispatch(e, n) {
        return this.get(e.origin), this[o].dispatch(e, n);
    }
    async close() {
        await this[o].close(), this[t].clear();
    }
    deactivate() {
        this[l] = !1;
    }
    activate() {
        this[l] = !0;
    }
    enableNetConnect(e) {
        if ("string" == typeof e || "function" == typeof e || e instanceof RegExp) Array.isArray(this[c]) ? this[c].push(e) : this[c] = [
            e
        ];
        else {
            if (void 0 !== e) throw new k("Unsupported matcher. Must be one of String|Function|RegExp.");
            this[c] = !0;
        }
    }
    disableNetConnect() {
        this[c] = !1;
    }
    get isMockActive() {
        return this[l];
    }
    [r](e, n) {
        this[t].set(e, new f(n));
    }
    [g](e) {
        const n = Object.assign({
            agent: this
        }, this[d]);
        return this[d] && 1 === this[d].connections ? new u(e, n) : new E(e, n);
    }
    [i](e) {
        const n = this[t].get(e);
        if (n) return n.deref();
        if ("string" != typeof e) {
            const n = this[g]("http://localhost:9999");
            return this[r](e, n), n;
        }
        for (const [n, a] of Array.from(this[t])){
            const t = a.deref();
            if (t && "string" != typeof n && p(n, e)) {
                const n = this[g](e);
                return this[r](e, n), n[A] = t[A], n;
            }
        }
    }
    [m]() {
        return this[c];
    }
    pendingInterceptors() {
        const e = this[t];
        return Array.from(e.entries()).flatMap(([e, n])=>n.deref()[A].map((n)=>({
                    ...n,
                    origin: e
                }))).filter(({ pending: e })=>e);
    }
    assertNoPendingInterceptors({ pendingInterceptorsFormatter: e = new C } = {}) {
        const n = this.pendingInterceptors();
        if (0 === n.length) return;
        const a = new _("interceptor", "interceptors").pluralize(n.length);
        throw new I(`\n${a.count} ${a.noun} ${a.is} pending:\n\n${e.format(n)}\n`.trim());
    }
};
