"use strict";
const { kClients: n } = require("./module-5532.js"), s = require("./module-7132.js"), { kAgent: i, kMockAgentSet: o, kMockAgentGet: a, kDispatches: u, kIsMockActive: c, kNetConnect: l, kGetNetConnect: m, kOptions: d, kFactory: f } = require("./module-1476.js"), p = require("./module-7254.js"), h = require("./module-8843.js"), { matchValue: g, buildMockOptions: A } = require("./module-4008.js"), { InvalidArgumentError: _, UndiciError: y } = require("./module-8762.js"), w = require("./module-4088.js"), S = require("./module-5288.js"), J = require("./module-3279.js");
class B {
    constructor(t){
        this.value = t;
    }
    deref() {
        return this.value;
    }
}
module.exports = class extends w {
    constructor(t){
        if (super(t), this[l] = !0, this[c] = !0, t && t.agent && "function" != typeof t.agent.dispatch) throw new _("Argument opts.agent must implement Agent");
        const e = t && t.agent ? t.agent : new s(t);
        this[i] = e, this[n] = e[n], this[d] = A(t);
    }
    get(t) {
        let e = this[a](t);
        return e || (e = this[f](t), this[o](t, e)), e;
    }
    dispatch(t, e) {
        return this.get(t.origin), this[i].dispatch(t, e);
    }
    async close() {
        await this[i].close(), this[n].clear();
    }
    deactivate() {
        this[c] = !1;
    }
    activate() {
        this[c] = !0;
    }
    enableNetConnect(t) {
        if ("string" == typeof t || "function" == typeof t || t instanceof RegExp) Array.isArray(this[l]) ? this[l].push(t) : this[l] = [
            t
        ];
        else {
            if (void 0 !== t) throw new _("Unsupported matcher. Must be one of String|Function|RegExp.");
            this[l] = !0;
        }
    }
    disableNetConnect() {
        this[l] = !1;
    }
    get isMockActive() {
        return this[c];
    }
    [o](t, e) {
        this[n].set(t, new B(e));
    }
    [f](t) {
        const e = Object.assign({
            agent: this
        }, this[d]);
        return this[d] && 1 === this[d].connections ? new p(t, e) : new h(t, e);
    }
    [a](t) {
        const e = this[n].get(t);
        if (e) return e.deref();
        if ("string" != typeof t) {
            const e = this[f]("http://localhost:9999");
            return this[o](t, e), e;
        }
        for (const [e, r] of Array.from(this[n])){
            const n = r.deref();
            if (n && "string" != typeof e && g(e, t)) {
                const e = this[f](t);
                return this[o](t, e), e[u] = n[u], e;
            }
        }
    }
    [m]() {
        return this[l];
    }
    pendingInterceptors() {
        const t = this[n];
        return Array.from(t.entries()).flatMap(([t, e])=>e.deref()[u].map((e)=>({
                    ...e,
                    origin: t
                }))).filter(({ pending: t })=>t);
    }
    assertNoPendingInterceptors({ pendingInterceptorsFormatter: t = new J } = {}) {
        const e = this.pendingInterceptors();
        if (0 === e.length) return;
        const r = new S("interceptor", "interceptors").pluralize(e.length);
        throw new y(`\n${r.count} ${r.noun} ${r.is} pending:\n\n${t.format(e)}\n`.trim());
    }
};
