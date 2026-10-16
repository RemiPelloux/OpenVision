import { require_onErrorResumeNext } from "../observable/onErrorResumeNext.js";
import { require_argsOrArgArray } from "../util/argsOrArgArray.js";
var __wakaru_require_onErrorResumeNextWith_cache;
export function require_onErrorResumeNextWith() {
if (__wakaru_require_onErrorResumeNextWith_cache) return __wakaru_require_onErrorResumeNextWith_cache;
var exports2 = {};
__wakaru_require_onErrorResumeNextWith_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.onErrorResumeNextWith = void 0;
var argsOrArgArray_js_1 = require_argsOrArgArray();
var onErrorResumeNext_js_1 = require_onErrorResumeNext();
function onErrorResumeNextWith(...sources) {
    const nextSources = (0, argsOrArgArray_js_1.argsOrArgArray)(sources);
    return (source)=>(0, onErrorResumeNext_js_1.onErrorResumeNext)(source, ...nextSources);
}
exports2.onErrorResumeNextWith = onErrorResumeNextWith;

return exports2;
}
