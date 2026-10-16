"use strict";
require.d(exports, {
    Y: ()=>o
});
var n = require("./module-64972.js"), s = require("./module-36419.js"), i = require("./module-23694.js");
class o {
    mode = n.cm.ADAPTIVE;
    rateLimiter;
    standardRetryStrategy;
    constructor(e, t){
        const { rateLimiter: r } = t ?? {};
        this.rateLimiter = r ?? new s.Q, this.standardRetryStrategy = t ? new i.r({
            maxAttempts: "number" == typeof e ? e : 3,
            ...t
        }) : new i.r(e);
    }
    async acquireInitialRetryToken(e) {
        const t = this.standardRetryStrategy.acquireInitialRetryToken(e);
        return await this.rateLimiter.getSendToken(), t;
    }
    async refreshRetryTokenForRetry(e, t) {
        this.rateLimiter.updateClientSendingRate(t);
        const r = this.standardRetryStrategy.refreshRetryTokenForRetry(e, t);
        return await this.rateLimiter.getSendToken(), r;
    }
    recordSuccess(e) {
        this.rateLimiter.updateClientSendingRate({}), this.standardRetryStrategy.recordSuccess(e);
    }
    async maxAttemptsProvider() {
        return this.standardRetryStrategy.maxAttempts();
    }
}
