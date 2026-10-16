import { require_Observable } from "../Observable.js";
import { require_find } from "./find.js";
var __wakaru_require_findIndex_cache;
export function require_findIndex() {
if (__wakaru_require_findIndex_cache) return __wakaru_require_findIndex_cache;
var exports2 = {};
__wakaru_require_findIndex_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.findIndex = void 0;
var Observable_js_1 = require_Observable();
var find_js_1 = require_find();
function findIndex(predicate) {
    return (source)=>new Observable_js_1.Observable((subscriber)=>(0, find_js_1.createFind)(predicate, "index", source, subscriber));
}
exports2.findIndex = findIndex;

return exports2;
}
