"use strict";
require.r(exports), require.d(exports, {
    AdaptiveRetryStrategy: ()=>n.Y,
    ConfiguredRetryStrategy: ()=>o,
    DEFAULT_MAX_ATTEMPTS: ()=>c.Gz,
    DEFAULT_RETRY_DELAY_BASE: ()=>l.bp,
    DEFAULT_RETRY_MODE: ()=>c.L0,
    DefaultRateLimiter: ()=>a.Q,
    INITIAL_RETRY_TOKENS: ()=>l.Df,
    INVOCATION_ID_HEADER: ()=>l.l5,
    MAXIMUM_RETRY_DELAY: ()=>l.G8,
    NO_RETRY_INCREMENT: ()=>l.XP,
    REQUEST_HEADER: ()=>l.ok,
    RETRY_COST: ()=>l.XS,
    RETRY_MODES: ()=>c.cm,
    Retry: ()=>s.f,
    StandardRetryStrategy: ()=>i.r,
    THROTTLING_RETRY_DELAY_BASE: ()=>l.jh,
    TIMEOUT_RETRY_COST: ()=>l.Rn
});
var n = require("./module-3745.js"), s = require("./module-79892.js"), i = require("./module-23694.js");
class o extends i.r {
    computeNextBackoffDelay;
    constructor(e, t = s.f.delay()){
        super("function" == typeof e ? e : async ()=>e), this.computeNextBackoffDelay = "number" == typeof t ? ()=>t : t;
    }
    async refreshRetryTokenForRetry(e, t) {
        const r = await super.refreshRetryTokenForRetry(e, t);
        return r.getRetryDelay = ()=>this.computeNextBackoffDelay(r.getRetryCount()), r;
    }
}
var a = require("./module-36419.js"), c = require("./module-64972.js"), l = require("./module-51181.js");
