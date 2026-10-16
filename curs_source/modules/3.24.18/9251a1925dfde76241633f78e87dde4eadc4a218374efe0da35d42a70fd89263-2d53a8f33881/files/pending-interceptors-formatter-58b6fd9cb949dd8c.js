var __wakaru_require_pending_interceptors_formatter_cache;
export function require_pending_interceptors_formatter() {
if (__wakaru_require_pending_interceptors_formatter_cache) return __wakaru_require_pending_interceptors_formatter_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_pending_interceptors_formatter_cache = module2;
"use strict";
var { Transform: Transform2 } = require("stream");
var { Console } = require("console");
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
                Persistent: persist ? "\u2705" : "\u274C",
                Invocations: timesInvoked,
                Remaining: persist ? Infinity : times - timesInvoked
            }));
        this.logger.table(withPrettyHeaders);
        return this.transform.read().toString();
    }
};

return module2.exports;
}
