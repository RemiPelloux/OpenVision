import { require_redirect_handler } from "../handler/redirect-handler.js";
var __wakaru_require_redirect_cache;
export function require_redirect() {
if (__wakaru_require_redirect_cache) return __wakaru_require_redirect_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_redirect_cache = module2;
"use strict";
var RedirectHandler = require_redirect_handler();
module2.exports = (opts)=>{
    const globalMaxRedirections = opts?.maxRedirections;
    return (dispatch)=>{
        return function redirectInterceptor(opts2, handler) {
            const { maxRedirections = globalMaxRedirections, ...baseOpts } = opts2;
            if (!maxRedirections) {
                return dispatch(opts2, handler);
            }
            const redirectHandler = new RedirectHandler(dispatch, maxRedirections, opts2, handler);
            return dispatch(baseOpts, redirectHandler);
        };
    };
};

return module2.exports;
}
