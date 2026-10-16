import { require_Observable } from "../Observable.js";
import { require_mapOneOrManyArgs } from "../util/mapOneOrManyArgs.js";
var __wakaru_require_fromEventPattern_cache;
export function require_fromEventPattern() {
if (__wakaru_require_fromEventPattern_cache) return __wakaru_require_fromEventPattern_cache;
var exports2 = {};
__wakaru_require_fromEventPattern_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.fromEventPattern = void 0;
var Observable_js_1 = require_Observable();
var mapOneOrManyArgs_js_1 = require_mapOneOrManyArgs();
function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return (0, mapOneOrManyArgs_js_1.mapOneOrManyArgs)(resultSelector)(fromEventPattern(addHandler, removeHandler));
    }
    return new Observable_js_1.Observable((subscriber)=>{
        const handler = (...e)=>subscriber.next(e.length === 1 ? e[0] : e);
        const retValue = addHandler(handler);
        return (0, Observable_js_1.isFunction)(removeHandler) ? ()=>removeHandler(handler, retValue) : void 0;
    });
}
exports2.fromEventPattern = fromEventPattern;

return exports2;
}
