"use strict";
const { kClients: r } = require("./module-76992.js"), s = require("./module-16618.js"), { kAgent: o, kMockAgentSet: n, kMockAgentGet: i, kDispatches: a, kIsMockActive: Q, kNetConnect: g, kGetNetConnect: E, kOptions: B, kFactory: c } = require("./module-53304.js"), I = require("./module-8026.js"), C = require("./module-76599.js"), { matchValue: h, buildMockOptions: l } = require("./module-61452.js"), { InvalidArgumentError: u, UndiciError: d } = require("./module-38238.js"), f = require("./module-47510.js"), w = require("./module-20060.js"), y = require("./module-94651.js");
module.exports = class extends f {
    constructor(A){
        if (super(A), this[g] = !0, this[Q] = !0, A?.agent && "function" != typeof A.agent.dispatch) throw new u("Argument opts.agent must implement Agent");
        const e = A?.agent ? A.agent : new s(A);
        this[o] = e, this[r] = e[r], this[B] = l(A);
    }
    get(A) {
        let e = this[i](A);
        return e || (e = this[c](A), this[n](A, e)), e;
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
        this[r].set(A, e);
    }
    [c](A) {
        const e = Object.assign({
            agent: this
        }, this[B]);
        return this[B] && 1 === this[B].connections ? new I(A, e) : new C(A, e);
    }
    [i](A) {
        const e = this[r].get(A);
        if (e) return e;
        if ("string" != typeof A) {
            const e = this[c]("http://localhost:9999");
            return this[n](A, e), e;
        }
        for (const [e, t] of Array.from(this[r]))if (t && "string" != typeof e && h(e, A)) {
            const e = this[c](A);
            return this[n](A, e), e[a] = t[a], e;
        }
    }
    [E]() {
        return this[g];
    }
    pendingInterceptors() {
        const A = this[r];
        return Array.from(A.entries()).flatMap(([A, e])=>e[a].map((e)=>({
                    ...e,
                    origin: A
                }))).filter(({ pending: A })=>A);
    }
    assertNoPendingInterceptors({ pendingInterceptorsFormatter: A = new y } = {}) {
        const e = this.pendingInterceptors();
        if (0 === e.length) return;
        const t = new w("interceptor", "interceptors").pluralize(e.length);
        throw new d(`\n${t.count} ${t.noun} ${t.is} pending:\n\n${A.format(e)}\n`.trim());
    }
};
