import { require_Observable } from "../Observable.js";
import { require_reduce } from "./reduce.js";
var __wakaru_require_toArray_cache;
export function require_toArray() {
if (__wakaru_require_toArray_cache) return __wakaru_require_toArray_cache;
var exports2 = {};
__wakaru_require_toArray_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.toArray = void 0;
var reduce_js_1 = require_reduce();
var Observable_js_1 = require_Observable();
var arrReducer = (arr, value)=>(arr.push(value), arr);
function toArray() {
    return (source)=>new Observable_js_1.Observable((subscriber)=>{
            (0, reduce_js_1.reduce)(arrReducer, [])(source).subscribe(subscriber);
        });
}
exports2.toArray = toArray;

return exports2;
}
