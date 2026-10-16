"use strict";
const { promisify: r } = require(57975), s = require("./module-90996.js"), { buildMockDispatch: o } = require("./module-61452.js"), { kDispatches: n, kMockAgent: i, kClose: a, kOriginalClose: Q, kOrigin: g, kOriginalDispatch: E, kConnected: B } = require("./module-53304.js"), { MockInterceptor: c } = require("./module-678.js"), I = require("./module-76992.js"), { InvalidArgumentError: C } = require("./module-38238.js");
class h extends s {
    constructor(A, e){
        if (super(A, e), !e || !e.agent || "function" != typeof e.agent.dispatch) throw new C("Argument opts.agent must implement Agent");
        this[i] = e.agent, this[g] = A, this[n] = [], this[B] = 1, this[E] = this.dispatch, this[Q] = this.close.bind(this), this.dispatch = o.call(this), this.close = this[a];
    }
    get [I.kConnected]() {
        return this[B];
    }
    intercept(A) {
        return new c(A, this[n]);
    }
    async [a]() {
        await r(this[Q])(), this[B] = 0, this[i][I.kClients].delete(this[g]);
    }
}
module.exports = h;
