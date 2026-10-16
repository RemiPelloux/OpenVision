import { require_Observable } from "../Observable.js";
var __wakaru_require_find_cache;
export function require_find() {
if (__wakaru_require_find_cache) return __wakaru_require_find_cache;
var exports2 = {};
__wakaru_require_find_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createFind = exports2.find = void 0;
var Observable_js_1 = require_Observable();
function find(predicate) {
    return (source)=>new Observable_js_1.Observable((subscriber)=>createFind(predicate, "value", source, subscriber));
}
exports2.find = find;
function createFind(predicate, emit2, source, destination) {
    const findIndex = emit2 === "index";
    let index = 0;
    source.subscribe((0, Observable_js_1.operate)({
        destination,
        next: (value)=>{
            const i = index++;
            if (predicate(value, i, source)) {
                destination.next(findIndex ? i : value);
                destination.complete();
            }
        },
        complete: ()=>{
            destination.next(findIndex ? -1 : void 0);
            destination.complete();
        }
    }));
}
exports2.createFind = createFind;

return exports2;
}
