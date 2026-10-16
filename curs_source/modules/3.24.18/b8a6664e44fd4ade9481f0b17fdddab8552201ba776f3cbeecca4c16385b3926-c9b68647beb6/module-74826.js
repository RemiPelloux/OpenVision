"use strict";
const { promisify: r } = require(39023), s = require("./module-54814.js"), { buildMockDispatch: o } = require("./module-70076.js"), { kDispatches: n, kMockAgent: i, kClose: E, kOriginalClose: Q, kOrigin: g, kOriginalDispatch: C, kConnected: B } = require("./module-73192.js"), { MockInterceptor: a } = require("./module-13494.js"), I = require("./module-58832.js"), { InvalidArgumentError: c } = require("./module-95521.js");
class h extends s {
    constructor(A, e){
        if (super(A, e), !e || !e.agent || "function" != typeof e.agent.dispatch) throw new c("Argument opts.agent must implement Agent");
        this[i] = e.agent, this[g] = A, this[n] = [], this[B] = 1, this[C] = this.dispatch, this[Q] = this.close.bind(this), this.dispatch = o.call(this), this.close = this[E];
    }
    get [I.kConnected]() {
        return this[B];
    }
    intercept(A) {
        return new a(A, this[n]);
    }
    async [E]() {
        await r(this[Q])(), this[B] = 0, this[i][I.kClients].delete(this[g]);
    }
}
module.exports = h;
