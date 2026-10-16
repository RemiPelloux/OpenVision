import { require_redirect_handler } from "../handler/redirect-handler.js";
var __wakaru_require_redirect_interceptor_cache;
export function require_redirect_interceptor() {
if (__wakaru_require_redirect_interceptor_cache) return __wakaru_require_redirect_interceptor_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_redirect_interceptor_cache = module2;
"use strict";
var RedirectHandler = require_redirect_handler();
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
