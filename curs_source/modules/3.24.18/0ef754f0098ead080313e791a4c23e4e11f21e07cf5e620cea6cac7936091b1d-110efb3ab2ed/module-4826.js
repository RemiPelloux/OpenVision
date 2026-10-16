"use strict";
const { promisify: t } = require("./module-9023.js"), s = require("./module-4814.js"), { buildMockDispatch: o } = require("./module-76.js"), { kDispatches: r, kMockAgent: i, kClose: l, kOriginalClose: d, kOrigin: m, kOriginalDispatch: c, kConnected: p } = require("./module-3192.js"), { MockInterceptor: A } = require("./module-3494.js"), u = require("./module-8832.js"), { InvalidArgumentError: g } = require("./module-7902.js");
class T extends s {
    constructor(e, a){
        if (super(e, a), !a || !a.agent || "function" != typeof a.agent.dispatch) throw new g("Argument opts.agent must implement Agent");
        this[i] = a.agent, this[m] = e, this[r] = [], this[p] = 1, this[c] = this.dispatch, this[d] = this.close.bind(this), this.dispatch = o.call(this), this.close = this[l];
    }
    get [u.kConnected]() {
        return this[p];
    }
    intercept(e) {
        return new A(e, this[r]);
    }
    async [l]() {
        await t(this[d])(), this[p] = 0, this[i][u.kClients].delete(this[m]);
    }
}
module.exports = T;
