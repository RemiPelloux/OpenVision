"use strict";
const { promisify: n } = require("./module-9023.js"), r = require("./module-4814.js"), { buildMockDispatch: o } = require("./module-76.js"), { kDispatches: s, kMockAgent: a, kClose: i, kOriginalClose: c, kOrigin: l, kOriginalDispatch: g, kConnected: E } = require("./module-3192.js"), { MockInterceptor: u } = require("./module-3494.js"), d = require("./module-8832.js"), { InvalidArgumentError: I } = require("./module-7902.js");
class h extends r {
    constructor(e, A){
        if (super(e, A), !A || !A.agent || "function" != typeof A.agent.dispatch) throw new I("Argument opts.agent must implement Agent");
        this[a] = A.agent, this[l] = e, this[s] = [], this[E] = 1, this[g] = this.dispatch, this[c] = this.close.bind(this), this.dispatch = o.call(this), this.close = this[i];
    }
    get [d.kConnected]() {
        return this[E];
    }
    intercept(e) {
        return new u(e, this[s]);
    }
    async [i]() {
        await n(this[c])(), this[E] = 0, this[a][d.kClients].delete(this[l]);
    }
}
module.exports = h;
