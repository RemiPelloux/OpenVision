"use strict";
const { promisify: n } = require("./module-9023.js"), r = require("./module-4003.js"), { buildMockDispatch: o } = require("./module-76.js"), { kDispatches: s, kMockAgent: i, kClose: a, kOriginalClose: c, kOrigin: l, kOriginalDispatch: u, kConnected: g } = require("./module-3192.js"), { MockInterceptor: E } = require("./module-3494.js"), h = require("./module-8832.js"), { InvalidArgumentError: d } = require("./module-7902.js");
class I extends r {
    constructor(e, t){
        if (super(e, t), !t || !t.agent || "function" != typeof t.agent.dispatch) throw new d("Argument opts.agent must implement Agent");
        this[i] = t.agent, this[l] = e, this[s] = [], this[g] = 1, this[u] = this.dispatch, this[c] = this.close.bind(this), this.dispatch = o.call(this), this.close = this[a];
    }
    get [h.kConnected]() {
        return this[g];
    }
    intercept(e) {
        return new E(e, this[s]);
    }
    async [a]() {
        await n(this[c])(), this[g] = 0, this[i][h.kClients].delete(this[l]);
    }
}
module.exports = I;
