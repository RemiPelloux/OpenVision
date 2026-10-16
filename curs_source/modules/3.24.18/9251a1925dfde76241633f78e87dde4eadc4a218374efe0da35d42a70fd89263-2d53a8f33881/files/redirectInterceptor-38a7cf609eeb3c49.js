import { require_RedirectHandler } from "../handler/RedirectHandler.js";
var __wakaru_require_redirectInterceptor_cache;
export function require_redirectInterceptor() {
if (__wakaru_require_redirectInterceptor_cache) return __wakaru_require_redirectInterceptor_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_redirectInterceptor_cache = module2;
"use strict";
var RedirectHandler = require_RedirectHandler();
function createRedirectInterceptor({ maxRedirections: defaultMaxRedirections }) {
    return (dispatch)=>{
        return function Intercept(opts, handler) {
            const { maxRedirections = defaultMaxRedirections } = opts;
            if (!maxRedirections) {
                return dispatch(opts, handler);
            }
            const redirectHandler = new RedirectHandler(dispatch, maxRedirections, opts, handler);
            opts = {
                ...opts,
                maxRedirections: 0
            };
            return dispatch(opts, redirectHandler);
        };
    };
}
module2.exports = createRedirectInterceptor;

return module2.exports;
}
