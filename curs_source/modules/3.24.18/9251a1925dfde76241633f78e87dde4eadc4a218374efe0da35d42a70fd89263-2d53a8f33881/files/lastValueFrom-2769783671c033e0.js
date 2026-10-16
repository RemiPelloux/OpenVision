import { require_EmptyError } from "./util/EmptyError.js";
var __wakaru_require_lastValueFrom_cache;
export function require_lastValueFrom() {
if (__wakaru_require_lastValueFrom_cache) return __wakaru_require_lastValueFrom_cache;
var exports2 = {};
__wakaru_require_lastValueFrom_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.lastValueFrom = void 0;
var EmptyError_js_1 = require_EmptyError();
function lastValueFrom2(source, config2) {
    const hasConfig = typeof config2 === "object";
    return new Promise((resolve36, reject2)=>{
        let _hasValue = false;
        let _value;
        source.subscribe({
            next: (value)=>{
                _value = value;
                _hasValue = true;
            },
            error: reject2,
            complete: ()=>{
                if (_hasValue) {
                    resolve36(_value);
                } else if (hasConfig) {
                    resolve36(config2.defaultValue);
                } else {
                    reject2(new EmptyError_js_1.EmptyError());
                }
            }
        });
    });
}
exports2.lastValueFrom = lastValueFrom2;

return exports2;
}
