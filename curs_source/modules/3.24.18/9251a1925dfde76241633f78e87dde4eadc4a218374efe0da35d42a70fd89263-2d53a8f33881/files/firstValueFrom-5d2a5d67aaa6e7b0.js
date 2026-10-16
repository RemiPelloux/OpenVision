import { require_Observable } from "./Observable.js";
import { require_EmptyError } from "./util/EmptyError.js";
var __wakaru_require_firstValueFrom_cache;
export function require_firstValueFrom() {
if (__wakaru_require_firstValueFrom_cache) return __wakaru_require_firstValueFrom_cache;
var exports2 = {};
__wakaru_require_firstValueFrom_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.firstValueFrom = void 0;
var Observable_js_1 = require_Observable();
var EmptyError_js_1 = require_EmptyError();
function firstValueFrom2(source, config2) {
    const hasConfig = typeof config2 === "object";
    return new Promise((resolve36, reject2)=>{
        const subscriber = new Observable_js_1.Subscriber({
            next: (value)=>{
                resolve36(value);
                subscriber.unsubscribe();
            },
            error: reject2,
            complete: ()=>{
                if (hasConfig) {
                    resolve36(config2.defaultValue);
                } else {
                    reject2(new EmptyError_js_1.EmptyError());
                }
            }
        });
        source.subscribe(subscriber);
    });
}
exports2.firstValueFrom = firstValueFrom2;

return exports2;
}
