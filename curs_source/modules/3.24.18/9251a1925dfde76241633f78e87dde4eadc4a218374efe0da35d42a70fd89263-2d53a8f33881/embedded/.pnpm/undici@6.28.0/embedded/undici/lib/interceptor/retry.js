import { require_retry_handler } from "../handler/retry-handler.js";
var __wakaru_require_retry2_cache;
export function require_retry2() {
if (__wakaru_require_retry2_cache) return __wakaru_require_retry2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_retry2_cache = module2;
"use strict";
var RetryHandler = require_retry_handler();
module2.exports = (globalOpts)=>{
    return (dispatch)=>{
        return function retryInterceptor(opts, handler) {
            return dispatch(opts, new RetryHandler({
                ...opts,
                retryOptions: {
                    ...globalOpts,
                    ...opts.retryOptions
                }
            }, {
                handler,
                dispatch
            }));
        };
    };
};

return module2.exports;
}
