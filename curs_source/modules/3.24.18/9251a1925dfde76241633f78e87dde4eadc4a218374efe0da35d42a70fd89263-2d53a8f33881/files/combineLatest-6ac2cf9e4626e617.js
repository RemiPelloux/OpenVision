import { require_Observable } from "../Observable.js";
import { require_empty } from "./empty.js";
import { require_argsArgArrayOrObject } from "../util/argsArgArrayOrObject.js";
import { require_createObject } from "../util/createObject.js";
import { require_identity } from "../util/identity.js";
var __wakaru_require_combineLatest_cache;
export function require_combineLatest() {
if (__wakaru_require_combineLatest_cache) return __wakaru_require_combineLatest_cache;
var exports2 = {};
__wakaru_require_combineLatest_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.combineLatestInit = exports2.combineLatest = void 0;
var Observable_js_1 = require_Observable();
var argsArgArrayOrObject_js_1 = require_argsArgArrayOrObject();
var identity_js_1 = require_identity();
var createObject_js_1 = require_createObject();
var empty_js_1 = require_empty();
function combineLatest(sources, resultSelector) {
    const parts = (0, argsArgArrayOrObject_js_1.arrayOrObject)(sources);
    if (!parts) {
        throw new TypeError("sources must be an array or object");
    }
    const { args: observables, keys } = parts;
    if (observables.length === 0) {
        return empty_js_1.EMPTY;
    }
    return new Observable_js_1.Observable(combineLatestInit(observables, keys ? (values)=>(0, createObject_js_1.createObject)(keys, values) : resultSelector ? (values)=>resultSelector(...values) : identity_js_1.identity));
}
exports2.combineLatest = combineLatest;
function combineLatestInit(observables, valueTransform = identity_js_1.identity) {
    return (destination)=>{
        const { length } = observables;
        const values = new Array(length);
        let active = length;
        let remainingFirstValues = length;
        for(let i = 0; i < length; i++){
            const source = (0, Observable_js_1.from)(observables[i]);
            let hasFirstValue = false;
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    values[i] = value;
                    if (!hasFirstValue) {
                        hasFirstValue = true;
                        remainingFirstValues--;
                    }
                    if (!remainingFirstValues) {
                        destination.next(valueTransform(Array.from(values)));
                    }
                },
                complete: ()=>{
                    if (!--active) {
                        destination.complete();
                    }
                }
            }));
        }
    };
}
exports2.combineLatestInit = combineLatestInit;

return exports2;
}
