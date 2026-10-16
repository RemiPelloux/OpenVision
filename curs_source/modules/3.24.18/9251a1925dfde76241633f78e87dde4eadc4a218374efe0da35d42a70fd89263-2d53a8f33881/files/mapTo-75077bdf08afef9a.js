import { require_map } from "./map.js";
var __wakaru_require_mapTo_cache;
export function require_mapTo() {
if (__wakaru_require_mapTo_cache) return __wakaru_require_mapTo_cache;
var exports2 = {};
__wakaru_require_mapTo_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.mapTo = void 0;
var map_js_1 = require_map();
function mapTo(value) {
    return (0, map_js_1.map)(()=>value);
}
exports2.mapTo = mapTo;

return exports2;
}
