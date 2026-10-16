import { require_src } from "./src/index.js";
var __wakaru_require_jschardet_cache;
export function require_jschardet() {
if (__wakaru_require_jschardet_cache) return __wakaru_require_jschardet_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_jschardet_cache = module2;
module2.exports = require_src();

return module2.exports;
}
