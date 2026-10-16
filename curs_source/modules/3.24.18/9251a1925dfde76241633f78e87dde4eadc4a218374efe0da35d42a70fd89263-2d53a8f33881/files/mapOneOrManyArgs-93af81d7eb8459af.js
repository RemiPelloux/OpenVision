import { require_map } from "../operators/map.js";
var __wakaru_require_mapOneOrManyArgs_cache;
export function require_mapOneOrManyArgs() {
if (__wakaru_require_mapOneOrManyArgs_cache) return __wakaru_require_mapOneOrManyArgs_cache;
var exports2 = {};
__wakaru_require_mapOneOrManyArgs_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.mapOneOrManyArgs = void 0;
var map_js_1 = require_map();
var { isArray } = Array;
function callOrApply(fn, args) {
    return isArray(args) ? fn(...args) : fn(args);
}
function mapOneOrManyArgs(fn) {
    return (0, map_js_1.map)((args)=>callOrApply(fn, args));
}
exports2.mapOneOrManyArgs = mapOneOrManyArgs;

return exports2;
}
