import { require_Observable } from "../Observable.js";
import { require_mergeAll } from "./mergeAll.js";
var __wakaru_require_mergeWith_cache;
export function require_mergeWith() {
if (__wakaru_require_mergeWith_cache) return __wakaru_require_mergeWith_cache;
var exports2 = {};
__wakaru_require_mergeWith_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.mergeWith = void 0;
var Observable_js_1 = require_Observable();
var mergeAll_js_1 = require_mergeAll();
function mergeWith(...otherSources) {
    return (source)=>new Observable_js_1.Observable((subscriber)=>{
            (0, mergeAll_js_1.mergeAll)()((0, Observable_js_1.from)([
                source,
                ...otherSources
            ])).subscribe(subscriber);
        });
}
exports2.mergeWith = mergeWith;

return exports2;
}
