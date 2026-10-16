import { require_exhaustMap } from "./exhaustMap.js";
import { require_identity } from "../util/identity.js";
var __wakaru_require_exhaustAll_cache;
export function require_exhaustAll() {
if (__wakaru_require_exhaustAll_cache) return __wakaru_require_exhaustAll_cache;
var exports2 = {};
__wakaru_require_exhaustAll_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.exhaustAll = void 0;
var exhaustMap_js_1 = require_exhaustMap();
var identity_js_1 = require_identity();
function exhaustAll() {
    return (0, exhaustMap_js_1.exhaustMap)(identity_js_1.identity);
}
exports2.exhaustAll = exhaustAll;

return exports2;
}
