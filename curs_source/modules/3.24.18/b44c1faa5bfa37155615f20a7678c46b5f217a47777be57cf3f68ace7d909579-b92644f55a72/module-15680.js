"use strict";
const { kClients: n } = require("./module-15532.js"), s = require("./module-57132.js"), { kAgent: o, kMockAgentSet: i, kMockAgentGet: a, kDispatches: c, kIsMockActive: l, kNetConnect: u, kGetNetConnect: d, kOptions: p, kFactory: m } = require("./module-51476.js"), h = require("./module-47254.js"), f = require("./module-48843.js"), { matchValue: g, buildMockOptions: y } = require("./module-34008.js"), { InvalidArgumentError: w, UndiciError: v } = require("./module-48762.js"), _ = require("./module-74088.js"), A = require("./module-65288.js"), S = require("./module-93279.js");
class b {
    constructor(e){
        this.value = e;
    }
    deref() {
        return this.value;
    }
}
module.exports = class extends _ {
    constructor(e){
        if (super(e), this[u] = !0, this[l] = !0, e && e.agent && "function" != typeof e.agent.dispatch) throw new w("Argument opts.agent must implement Agent");
        const t = e && e.agent ? e.agent : new s(e);
        this[o] = t, this[n] = t[n], this[p] = y(e);
    }
    get(e) {
        let t = this[a](e);
        return t || (t = this[m](e), this[i](e, t)), t;
    }
    dispatch(e, t) {
        return this.get(e.origin), this[o].dispatch(e, t);
    }
    async close() {
        await this[o].close(), this[n].clear();
    }
    deactivate() {
        this[l] = !1;
    }
    activate() {
        this[l] = !0;
    }
    enableNetConnect(e) {
        if ("string" == typeof e || "function" == typeof e || e instanceof RegExp) Array.isArray(this[u]) ? this[u].push(e) : this[u] = [
            e
        ];
        else {
            if (void 0 !== e) throw new w("Unsupported matcher. Must be one of String|Function|RegExp.");
            this[u] = !0;
        }
    }
    disableNetConnect() {
        this[u] = !1;
    }
    get isMockActive() {
        return this[l];
    }
    [i](e, t) {
        this[n].set(e, new b(t));
    }
    [m](e) {
        const t = Object.assign({
            agent: this
        }, this[p]);
        return this[p] && 1 === this[p].connections ? new h(e, t) : new f(e, t);
    }
    [a](e) {
        const t = this[n].get(e);
        if (t) return t.deref();
        if ("string" != typeof e) {
            const t = this[m]("http://localhost:9999");
            return this[i](e, t), t;
        }
        for (const [t, r] of Array.from(this[n])){
            const n = r.deref();
            if (n && "string" != typeof t && g(t, e)) {
                const t = this[m](e);
                return this[i](e, t), t[c] = n[c], t;
            }
        }
    }
    [d]() {
        return this[u];
    }
    pendingInterceptors() {
        const e = this[n];
        return Array.from(e.entries()).flatMap(([e, t])=>t.deref()[c].map((t)=>({
                    ...t,
                    origin: e
                }))).filter(({ pending: e })=>e);
    }
    assertNoPendingInterceptors({ pendingInterceptorsFormatter: e = new S } = {}) {
        const t = this.pendingInterceptors();
        if (0 === t.length) return;
        const r = new A("interceptor", "interceptors").pluralize(t.length);
        throw new v(`\n${r.count} ${r.noun} ${r.is} pending:\n\n${e.format(t)}\n`.trim());
    }
};
