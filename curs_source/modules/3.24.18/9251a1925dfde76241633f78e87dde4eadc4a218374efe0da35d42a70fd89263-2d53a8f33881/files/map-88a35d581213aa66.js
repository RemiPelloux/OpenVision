import { require_Observable } from "../Observable.js";
var __wakaru_require_map_cache;
export function require_map() {
if (__wakaru_require_map_cache) return __wakaru_require_map_cache;
var exports2 = {};
__wakaru_require_map_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.map = void 0;
var Observable_js_1 = require_Observable();
function map4(project2) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let index = 0;
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    destination.next(project2(value, index++));
                }
            }));
        });
}
exports2.map = map4;

return exports2;
}
