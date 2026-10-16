import { require_Observable } from "../Observable.js";
import { require_argsOrArgArray } from "../util/argsOrArgArray.js";
var __wakaru_require_race_cache;
export function require_race() {
if (__wakaru_require_race_cache) return __wakaru_require_race_cache;
var exports2 = {};
__wakaru_require_race_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.raceInit = exports2.race = void 0;
var Observable_js_1 = require_Observable();
var argsOrArgArray_js_1 = require_argsOrArgArray();
function race(...sources) {
    sources = (0, argsOrArgArray_js_1.argsOrArgArray)(sources);
    return sources.length === 1 ? (0, Observable_js_1.from)(sources[0]) : new Observable_js_1.Observable(raceInit(sources));
}
exports2.race = race;
function raceInit(sources) {
    return (destination)=>{
        let subscriptions = [];
        for(let i = 0; subscriptions && !destination.closed && i < sources.length; i++){
            subscriptions.push((0, Observable_js_1.from)(sources[i]).subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    if (subscriptions) {
                        for(let s3 = 0; s3 < subscriptions.length; s3++){
                            s3 !== i && subscriptions[s3].unsubscribe();
                        }
                        subscriptions = null;
                    }
                    destination.next(value);
                }
            })));
        }
    };
}
exports2.raceInit = raceInit;

return exports2;
}
