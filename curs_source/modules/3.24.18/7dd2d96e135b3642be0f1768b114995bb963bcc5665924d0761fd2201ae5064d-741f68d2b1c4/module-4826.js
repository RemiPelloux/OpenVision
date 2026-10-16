"use strict";
const { promisify: a } = require("./module-9023.js"), s = require("./module-4814.js"), { buildMockDispatch: o } = require("./module-76.js"), { kDispatches: r, kMockAgent: i, kClose: A, kOriginalClose: c, kOrigin: l, kOriginalDispatch: d, kConnected: m } = require("./module-3192.js"), { MockInterceptor: u } = require("./module-3494.js"), g = require("./module-8832.js"), { InvalidArgumentError: p } = require("./module-7902.js");
class E extends s {
    constructor(e, n){
        if (super(e, n), !n || !n.agent || "function" != typeof n.agent.dispatch) throw new p("Argument opts.agent must implement Agent");
        this[i] = n.agent, this[l] = e, this[r] = [], this[m] = 1, this[d] = this.dispatch, this[c] = this.close.bind(this), this.dispatch = o.call(this), this.close = this[A];
    }
    get [g.kConnected]() {
        return this[m];
    }
    intercept(e) {
        return new u(e, this[r]);
    }
    async [A]() {
        await a(this[c])(), this[m] = 0, this[i][g.kClients].delete(this[l]);
    }
}
module.exports = E;
