"use strict";
const { promisify: n } = require("./module-39023.js"), s = require("./module-6602.js"), { buildMockDispatch: o } = require("./module-34008.js"), { kDispatches: i, kMockAgent: a, kClose: c, kOriginalClose: l, kOrigin: u, kOriginalDispatch: d, kConnected: p } = require("./module-51476.js"), { MockInterceptor: m } = require("./module-73834.js"), h = require("./module-15532.js"), { InvalidArgumentError: f } = require("./module-48762.js");
class g extends s {
    constructor(e, t){
        if (super(e, t), !t || !t.agent || "function" != typeof t.agent.dispatch) throw new f("Argument opts.agent must implement Agent");
        this[a] = t.agent, this[u] = e, this[i] = [], this[p] = 1, this[d] = this.dispatch, this[l] = this.close.bind(this), this.dispatch = o.call(this), this.close = this[c];
    }
    get [h.kConnected]() {
        return this[p];
    }
    intercept(e) {
        return new m(e, this[i]);
    }
    async [c]() {
        await n(this[l])(), this[p] = 0, this[a][h.kClients].delete(this[u]);
    }
}
module.exports = g;
