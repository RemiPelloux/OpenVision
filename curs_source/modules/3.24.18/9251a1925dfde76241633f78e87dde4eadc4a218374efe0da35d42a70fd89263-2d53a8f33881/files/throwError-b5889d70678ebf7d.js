import { require_Observable } from "../Observable.js";
var __wakaru_require_throwError_cache;
export function require_throwError() {
if (__wakaru_require_throwError_cache) return __wakaru_require_throwError_cache;
var exports2 = {};
__wakaru_require_throwError_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.throwError = void 0;
var Observable_js_1 = require_Observable();
function throwError2(errorFactory) {
    return new Observable_js_1.Observable((subscriber)=>{
        subscriber.error(errorFactory());
    });
}
exports2.throwError = throwError2;

return exports2;
}
