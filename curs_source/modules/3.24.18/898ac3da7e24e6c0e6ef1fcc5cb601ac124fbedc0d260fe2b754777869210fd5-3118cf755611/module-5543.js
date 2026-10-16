"use strict";
const { promisify: t } = require("./module-9023.js"), s = require("./module-4003.js"), { buildMockDispatch: o } = require("./module-76.js"), { kDispatches: r, kMockAgent: i, kClose: A, kOriginalClose: l, kOrigin: c, kOriginalDispatch: m, kConnected: d } = require("./module-3192.js"), { MockInterceptor: g } = require("./module-3494.js"), u = require("./module-8832.js"), { InvalidArgumentError: E } = require("./module-7902.js");
class p extends s {
    constructor(e, n){
        if (super(e, n), !n || !n.agent || "function" != typeof n.agent.dispatch) throw new E("Argument opts.agent must implement Agent");
        this[i] = n.agent, this[c] = e, this[r] = [], this[d] = 1, this[m] = this.dispatch, this[l] = this.close.bind(this), this.dispatch = o.call(this), this.close = this[A];
    }
    get [u.kConnected]() {
        return this[d];
    }
    intercept(e) {
        return new g(e, this[r]);
    }
    async [A]() {
        await t(this[l])(), this[d] = 0, this[i][u.kClients].delete(this[c]);
    }
}
module.exports = p;
