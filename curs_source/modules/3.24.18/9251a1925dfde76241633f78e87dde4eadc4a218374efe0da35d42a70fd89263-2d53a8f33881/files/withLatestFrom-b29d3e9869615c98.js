import { require_Observable } from "../Observable.js";
import { require_args } from "../util/args.js";
import { require_identity } from "../util/identity.js";
import { require_noop } from "../util/noop.js";
var __wakaru_require_withLatestFrom_cache;
export function require_withLatestFrom() {
if (__wakaru_require_withLatestFrom_cache) return __wakaru_require_withLatestFrom_cache;
var exports2 = {};
__wakaru_require_withLatestFrom_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.withLatestFrom = void 0;
var Observable_js_1 = require_Observable();
var identity_js_1 = require_identity();
var noop_js_1 = require_noop();
var args_js_1 = require_args();
function withLatestFrom(...inputs) {
    const project2 = (0, args_js_1.popResultSelector)(inputs);
    return (source)=>new Observable_js_1.Observable((destination)=>{
            const len = inputs.length;
            const otherValues = new Array(len);
            let hasValue = inputs.map(()=>false);
            let ready2 = false;
            for(let i = 0; i < len; i++){
                (0, Observable_js_1.from)(inputs[i]).subscribe((0, Observable_js_1.operate)({
                    destination,
                    next: (value)=>{
                        otherValues[i] = value;
                        if (!ready2 && !hasValue[i]) {
                            hasValue[i] = true;
                            (ready2 = hasValue.every(identity_js_1.identity)) && (hasValue = null);
                        }
                    },
                    complete: noop_js_1.noop
                }));
            }
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    if (ready2) {
                        const values = [
                            value,
                            ...otherValues
                        ];
                        destination.next(project2 ? project2(...values) : values);
                    }
                }
            }));
        });
}
exports2.withLatestFrom = withLatestFrom;

return exports2;
}
