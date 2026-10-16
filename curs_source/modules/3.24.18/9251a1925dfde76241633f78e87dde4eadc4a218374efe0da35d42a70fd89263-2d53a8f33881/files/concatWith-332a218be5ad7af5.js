import { require_Observable } from "../Observable.js";
import { require_concatAll } from "./concatAll.js";
var __wakaru_require_concatWith_cache;
export function require_concatWith() {
if (__wakaru_require_concatWith_cache) return __wakaru_require_concatWith_cache;
var exports2 = {};
__wakaru_require_concatWith_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.concatWith = void 0;
var Observable_js_1 = require_Observable();
var concatAll_js_1 = require_concatAll();
function concatWith(...otherSources) {
    return (source)=>new Observable_js_1.Observable((subscriber)=>{
            (0, concatAll_js_1.concatAll)()((0, Observable_js_1.from)([
                source,
                ...otherSources
            ])).subscribe(subscriber);
        });
}
exports2.concatWith = concatWith;

return exports2;
}
