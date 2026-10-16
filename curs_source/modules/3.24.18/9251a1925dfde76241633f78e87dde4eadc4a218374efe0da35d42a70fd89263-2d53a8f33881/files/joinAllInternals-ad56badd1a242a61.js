import { require_mergeMap } from "./mergeMap.js";
import { require_toArray } from "./toArray.js";
import { require_identity } from "../util/identity.js";
import { require_mapOneOrManyArgs } from "../util/mapOneOrManyArgs.js";
import { require_pipe } from "../util/pipe.js";
var __wakaru_require_joinAllInternals_cache;
export function require_joinAllInternals() {
if (__wakaru_require_joinAllInternals_cache) return __wakaru_require_joinAllInternals_cache;
var exports2 = {};
__wakaru_require_joinAllInternals_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.joinAllInternals = void 0;
var identity_js_1 = require_identity();
var mapOneOrManyArgs_js_1 = require_mapOneOrManyArgs();
var pipe_js_1 = require_pipe();
var mergeMap_js_1 = require_mergeMap();
var toArray_js_1 = require_toArray();
function joinAllInternals(joinFn, project2) {
    return (0, pipe_js_1.pipe)((0, toArray_js_1.toArray)(), (0, mergeMap_js_1.mergeMap)((sources)=>joinFn(sources)), project2 ? (0, mapOneOrManyArgs_js_1.mapOneOrManyArgs)(project2) : identity_js_1.identity);
}
exports2.joinAllInternals = joinAllInternals;

return exports2;
}
