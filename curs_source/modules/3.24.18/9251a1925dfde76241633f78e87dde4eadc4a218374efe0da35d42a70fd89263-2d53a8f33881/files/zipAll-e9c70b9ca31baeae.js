import { require_zip } from "../observable/zip.js";
import { require_joinAllInternals } from "./joinAllInternals.js";
var __wakaru_require_zipAll_cache;
export function require_zipAll() {
if (__wakaru_require_zipAll_cache) return __wakaru_require_zipAll_cache;
var exports2 = {};
__wakaru_require_zipAll_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.zipAll = void 0;
var zip_js_1 = require_zip();
var joinAllInternals_js_1 = require_joinAllInternals();
function zipAll(project2) {
    return (0, joinAllInternals_js_1.joinAllInternals)(zip_js_1.zip, project2);
}
exports2.zipAll = zipAll;

return exports2;
}
