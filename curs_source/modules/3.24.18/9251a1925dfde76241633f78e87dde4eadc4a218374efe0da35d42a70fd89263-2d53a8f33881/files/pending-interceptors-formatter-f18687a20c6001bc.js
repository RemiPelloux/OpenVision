var __wakaru_require_pending_interceptors_formatter2_cache;
export function require_pending_interceptors_formatter2() {
if (__wakaru_require_pending_interceptors_formatter2_cache) return __wakaru_require_pending_interceptors_formatter2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_pending_interceptors_formatter2_cache = module2;
"use strict";
var { Transform: Transform2 } = require("node:stream");
var { Console } = require("node:console");
var PERSISTENT = process.versions.icu ? "\u2705" : "Y ";
var NOT_PERSISTENT = process.versions.icu ? "\u274C" : "N ";
module2.exports = class PendingInterceptorsFormatter {
    constructor({ disableColors } = {}){
        this.transform = new Transform2({
            transform (chunk, _enc, cb) {
                cb(null, chunk);
            }
        });
        this.logger = new Console({
            stdout: this.transform,
            inspectOptions: {
                colors: !disableColors && !process.env.CI
            }
        });
    }
    format(pendingInterceptors) {
        const withPrettyHeaders = pendingInterceptors.map(({ method, path: path64, data: { statusCode }, persist, times, timesInvoked, origin })=>({
                Method: method,
                Origin: origin,
                Path: path64,
                "Status code": statusCode,
                Persistent: persist ? PERSISTENT : NOT_PERSISTENT,
                Invocations: timesInvoked,
                Remaining: persist ? Infinity : times - timesInvoked
            }));
        this.logger.table(withPrettyHeaders);
        return this.transform.read().toString();
    }
};

return module2.exports;
}
