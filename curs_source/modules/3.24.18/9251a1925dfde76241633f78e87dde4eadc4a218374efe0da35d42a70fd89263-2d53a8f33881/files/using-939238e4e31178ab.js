import { require_Observable } from "../Observable.js";
import { require_empty } from "./empty.js";
var __wakaru_require_using_cache;
export function require_using() {
if (__wakaru_require_using_cache) return __wakaru_require_using_cache;
var exports2 = {};
__wakaru_require_using_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.using = void 0;
var Observable_js_1 = require_Observable();
var empty_js_1 = require_empty();
function using(resourceFactory, observableFactory) {
    return new Observable_js_1.Observable((subscriber)=>{
        const resource = resourceFactory();
        const result = observableFactory(resource);
        const source = result ? (0, Observable_js_1.from)(result) : empty_js_1.EMPTY;
        source.subscribe(subscriber);
        return ()=>{
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}
exports2.using = using;

return exports2;
}
