"use strict";
const { kClients: r } = require("./module-58832.js"), s = require("./module-60568.js"), { kAgent: o, kMockAgentSet: n, kMockAgentGet: i, kDispatches: E, kIsMockActive: Q, kNetConnect: g, kGetNetConnect: C, kOptions: B, kFactory: a } = require("./module-73192.js"), I = require("./module-74826.js"), c = require("./module-65543.js"), { matchValue: h, buildMockOptions: l } = require("./module-70076.js"), { InvalidArgumentError: u, UndiciError: d } = require("./module-95521.js"), f = require("./module-91124.js"), y = require("./module-24332.js"), D = require("./module-82347.js");
class R {
    constructor(A){
        this.value = A;
    }
    deref() {
        return this.value;
    }
}
module.exports = class extends f {
    constructor(A){
        if (super(A), this[g] = !0, this[Q] = !0, A && A.agent && "function" != typeof A.agent.dispatch) throw new u("Argument opts.agent must implement Agent");
        const e = A && A.agent ? A.agent : new s(A);
        this[o] = e, this[r] = e[r], this[B] = l(A);
    }
    get(A) {
        let e = this[i](A);
        return e || (e = this[a](A), this[n](A, e)), e;
    }
    dispatch(A, e) {
        return this.get(A.origin), this[o].dispatch(A, e);
    }
    async close() {
        await this[o].close(), this[r].clear();
    }
    deactivate() {
        this[Q] = !1;
    }
    activate() {
        this[Q] = !0;
    }
    enableNetConnect(A) {
        if ("string" == typeof A || "function" == typeof A || A instanceof RegExp) Array.isArray(this[g]) ? this[g].push(A) : this[g] = [
            A
        ];
        else {
            if (void 0 !== A) throw new u("Unsupported matcher. Must be one of String|Function|RegExp.");
            this[g] = !0;
        }
    }
    disableNetConnect() {
        this[g] = !1;
    }
    get isMockActive() {
        return this[Q];
    }
    [n](A, e) {
        this[r].set(A, new R(e));
    }
    [a](A) {
        const e = Object.assign({
            agent: this
        }, this[B]);
        return this[B] && 1 === this[B].connections ? new I(A, e) : new c(A, e);
    }
    [i](A) {
        const e = this[r].get(A);
        if (e) return e.deref();
        if ("string" != typeof A) {
            const e = this[a]("http://localhost:9999");
            return this[n](A, e), e;
        }
        for (const [e, t] of Array.from(this[r])){
            const r = t.deref();
            if (r && "string" != typeof e && h(e, A)) {
                const e = this[a](A);
                return this[n](A, e), e[E] = r[E], e;
            }
        }
    }
    [C]() {
        return this[g];
    }
    pendingInterceptors() {
        const A = this[r];
        return Array.from(A.entries()).flatMap(([A, e])=>e.deref()[E].map((e)=>({
                    ...e,
                    origin: A
                }))).filter(({ pending: A })=>A);
    }
    assertNoPendingInterceptors({ pendingInterceptorsFormatter: A = new D } = {}) {
        const e = this.pendingInterceptors();
        if (0 === e.length) return;
        const t = new y("interceptor", "interceptors").pluralize(e.length);
        throw new d(`\n${t.count} ${t.noun} ${t.is} pending:\n\n${A.format(e)}\n`.trim());
    }
};
