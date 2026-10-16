"use strict";
const { promisify: n } = require("./module-9023.js"), s = require("./module-6215.js"), { buildMockDispatch: i } = require("./module-4008.js"), { kDispatches: o, kMockAgent: a, kClose: u, kOriginalClose: c, kOrigin: l, kOriginalDispatch: m, kConnected: d } = require("./module-1476.js"), { MockInterceptor: f } = require("./module-3834.js"), p = require("./module-5532.js"), { InvalidArgumentError: h } = require("./module-8762.js");
class g extends s {
    constructor(t, e){
        if (super(t, e), !e || !e.agent || "function" != typeof e.agent.dispatch) throw new h("Argument opts.agent must implement Agent");
        this[a] = e.agent, this[l] = t, this[o] = [], this[d] = 1, this[m] = this.dispatch, this[c] = this.close.bind(this), this.dispatch = i.call(this), this.close = this[u];
    }
    get [p.kConnected]() {
        return this[d];
    }
    intercept(t) {
        return new f(t, this[o]);
    }
    async [u]() {
        await n(this[c])(), this[d] = 0, this[a][p.kClients].delete(this[l]);
    }
}
module.exports = g;
