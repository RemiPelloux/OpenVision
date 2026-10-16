import { require_map } from "./map.js";
import { require_dateTimestampProvider } from "../scheduler/dateTimestampProvider.js";
var __wakaru_require_timestamp_cache;
export function require_timestamp() {
if (__wakaru_require_timestamp_cache) return __wakaru_require_timestamp_cache;
var exports2 = {};
__wakaru_require_timestamp_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.timestamp = void 0;
var dateTimestampProvider_js_1 = require_dateTimestampProvider();
var map_js_1 = require_map();
function timestamp2(timestampProvider = dateTimestampProvider_js_1.dateTimestampProvider) {
    return (0, map_js_1.map)((value)=>({
            value,
            timestamp: timestampProvider.now()
        }));
}
exports2.timestamp = timestamp2;

return exports2;
}
