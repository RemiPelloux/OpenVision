import { require_Observable } from "../Observable.js";
import { require_empty } from "./empty.js";
import { require_args } from "../util/args.js";
import { require_argsOrArgArray } from "../util/argsOrArgArray.js";
var __wakaru_require_zip_cache;
export function require_zip() {
if (__wakaru_require_zip_cache) return __wakaru_require_zip_cache;
var exports2 = {};
__wakaru_require_zip_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.zip = void 0;
var Observable_js_1 = require_Observable();
var argsOrArgArray_js_1 = require_argsOrArgArray();
var empty_js_1 = require_empty();
var args_js_1 = require_args();
function zip(...args) {
    const resultSelector = (0, args_js_1.popResultSelector)(args);
    const sources = (0, argsOrArgArray_js_1.argsOrArgArray)(args);
    return sources.length ? new Observable_js_1.Observable((destination)=>{
        let buffers = sources.map(()=>[]);
        let completed = sources.map(()=>false);
        destination.add(()=>{
            buffers = completed = null;
        });
        for(let sourceIndex = 0; !destination.closed && sourceIndex < sources.length; sourceIndex++){
            (0, Observable_js_1.from)(sources[sourceIndex]).subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    buffers[sourceIndex].push(value);
                    if (buffers.every((buffer)=>buffer.length)) {
                        const result = buffers.map((buffer)=>buffer.shift());
                        destination.next(resultSelector ? resultSelector(...result) : result);
                        if (buffers.some((buffer, i)=>!buffer.length && completed[i])) {
                            destination.complete();
                        }
                    }
                },
                complete: ()=>{
                    completed[sourceIndex] = true;
                    !buffers[sourceIndex].length && destination.complete();
                }
            }));
        }
        return ()=>{
            buffers = completed = null;
        };
    }) : empty_js_1.EMPTY;
}
exports2.zip = zip;

return exports2;
}
