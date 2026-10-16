import { require_Observable } from "../Observable.js";
import { require_noop } from "../util/noop.js";
var __wakaru_require_ignoreElements_cache;
export function require_ignoreElements() {
if (__wakaru_require_ignoreElements_cache) return __wakaru_require_ignoreElements_cache;
var exports2 = {};
__wakaru_require_ignoreElements_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.ignoreElements = void 0;
var Observable_js_1 = require_Observable();
var noop_js_1 = require_noop();
function ignoreElements() {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: noop_js_1.noop
            }));
        });
}
exports2.ignoreElements = ignoreElements;

return exports2;
}
