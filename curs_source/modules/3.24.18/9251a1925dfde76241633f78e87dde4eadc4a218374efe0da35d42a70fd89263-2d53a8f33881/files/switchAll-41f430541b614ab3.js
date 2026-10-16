import { require_switchMap } from "./switchMap.js";
import { require_identity } from "../util/identity.js";
var __wakaru_require_switchAll_cache;
export function require_switchAll() {
if (__wakaru_require_switchAll_cache) return __wakaru_require_switchAll_cache;
var exports2 = {};
__wakaru_require_switchAll_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.switchAll = void 0;
var switchMap_js_1 = require_switchMap();
var identity_js_1 = require_identity();
function switchAll() {
    return (0, switchMap_js_1.switchMap)(identity_js_1.identity);
}
exports2.switchAll = switchAll;

return exports2;
}
