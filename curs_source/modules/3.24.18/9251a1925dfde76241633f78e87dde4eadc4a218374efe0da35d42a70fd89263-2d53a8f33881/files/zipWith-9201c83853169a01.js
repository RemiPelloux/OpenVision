import { require_Observable } from "../Observable.js";
import { require_zip } from "../observable/zip.js";
var __wakaru_require_zipWith_cache;
export function require_zipWith() {
if (__wakaru_require_zipWith_cache) return __wakaru_require_zipWith_cache;
var exports2 = {};
__wakaru_require_zipWith_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.zipWith = void 0;
var Observable_js_1 = require_Observable();
var zip_js_1 = require_zip();
function zipWith(...otherInputs) {
    return (source)=>new Observable_js_1.Observable((subscriber)=>{
            (0, zip_js_1.zip)(source, ...otherInputs).subscribe(subscriber);
        });
}
exports2.zipWith = zipWith;

return exports2;
}
