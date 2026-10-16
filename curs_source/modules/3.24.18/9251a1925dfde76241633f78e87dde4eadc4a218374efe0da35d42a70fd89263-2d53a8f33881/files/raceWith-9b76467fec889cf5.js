import { require_Observable } from "../Observable.js";
import { require_race } from "../observable/race.js";
import { require_identity } from "../util/identity.js";
var __wakaru_require_raceWith_cache;
export function require_raceWith() {
if (__wakaru_require_raceWith_cache) return __wakaru_require_raceWith_cache;
var exports2 = {};
__wakaru_require_raceWith_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.raceWith = void 0;
var race_js_1 = require_race();
var Observable_js_1 = require_Observable();
var identity_js_1 = require_identity();
function raceWith(...otherSources) {
    return !otherSources.length ? identity_js_1.identity : (source)=>new Observable_js_1.Observable((subscriber)=>{
            (0, race_js_1.raceInit)([
                source,
                ...otherSources
            ])(subscriber);
        });
}
exports2.raceWith = raceWith;

return exports2;
}
