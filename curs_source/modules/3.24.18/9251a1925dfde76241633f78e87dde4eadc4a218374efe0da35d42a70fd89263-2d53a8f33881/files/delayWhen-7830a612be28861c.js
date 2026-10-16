import { require_concat } from "../observable/concat.js";
import { require_ignoreElements } from "./ignoreElements.js";
import { require_map } from "./map.js";
import { require_mergeMap } from "./mergeMap.js";
import { require_take } from "./take.js";
import { require_rx } from "../util/rx.js";
var __wakaru_require_delayWhen_cache;
export function require_delayWhen() {
if (__wakaru_require_delayWhen_cache) return __wakaru_require_delayWhen_cache;
var exports2 = {};
__wakaru_require_delayWhen_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.delayWhen = void 0;
var concat_js_1 = require_concat();
var take_js_1 = require_take();
var ignoreElements_js_1 = require_ignoreElements();
var mergeMap_js_1 = require_mergeMap();
var rx_js_1 = require_rx();
var map_js_1 = require_map();
function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
        return (source)=>(0, concat_js_1.concat)((0, rx_js_1.rx)(subscriptionDelay, (0, take_js_1.take)(1), (0, ignoreElements_js_1.ignoreElements)()), (0, rx_js_1.rx)(source, delayWhen(delayDurationSelector)));
    }
    return (0, mergeMap_js_1.mergeMap)((value, index)=>(0, rx_js_1.rx)(delayDurationSelector(value, index), (0, take_js_1.take)(1), (0, map_js_1.map)(()=>value)));
}
exports2.delayWhen = delayWhen;

return exports2;
}
