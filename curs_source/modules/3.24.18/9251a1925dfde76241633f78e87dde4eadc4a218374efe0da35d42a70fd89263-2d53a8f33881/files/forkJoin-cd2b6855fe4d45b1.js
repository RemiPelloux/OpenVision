import { require_Observable } from "../Observable.js";
import { require_EmptyError } from "../util/EmptyError.js";
import { require_args } from "../util/args.js";
import { require_argsArgArrayOrObject } from "../util/argsArgArrayOrObject.js";
import { require_createObject } from "../util/createObject.js";
import { require_mapOneOrManyArgs } from "../util/mapOneOrManyArgs.js";
var __wakaru_require_forkJoin_cache;
export function require_forkJoin() {
if (__wakaru_require_forkJoin_cache) return __wakaru_require_forkJoin_cache;
var exports2 = {};
__wakaru_require_forkJoin_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.forkJoin = void 0;
var Observable_js_1 = require_Observable();
var argsArgArrayOrObject_js_1 = require_argsArgArrayOrObject();
var args_js_1 = require_args();
var mapOneOrManyArgs_js_1 = require_mapOneOrManyArgs();
var createObject_js_1 = require_createObject();
var EmptyError_js_1 = require_EmptyError();
function forkJoin(...args) {
    const resultSelector = (0, args_js_1.popResultSelector)(args);
    const { args: sources, keys } = (0, argsArgArrayOrObject_js_1.argsArgArrayOrObject)(args);
    const result = new Observable_js_1.Observable((destination)=>{
        const { length } = sources;
        if (!length) {
            destination.complete();
            return;
        }
        const values = new Array(length);
        let remainingCompletions = length;
        let remainingEmissions = length;
        for(let sourceIndex = 0; sourceIndex < length; sourceIndex++){
            let hasValue = false;
            (0, Observable_js_1.from)(sources[sourceIndex]).subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    if (!hasValue) {
                        hasValue = true;
                        remainingEmissions--;
                    }
                    values[sourceIndex] = value;
                },
                complete: ()=>remainingCompletions--,
                finalize: ()=>{
                    if (!remainingCompletions || !hasValue) {
                        if (remainingEmissions === 0) {
                            destination.next(keys ? (0, createObject_js_1.createObject)(keys, values) : values);
                            destination.complete();
                        } else {
                            destination.error(new EmptyError_js_1.EmptyError());
                        }
                    }
                }
            }));
        }
    });
    return resultSelector ? (0, mapOneOrManyArgs_js_1.mapOneOrManyArgs)(resultSelector)(result) : result;
}
exports2.forkJoin = forkJoin;

return exports2;
}
