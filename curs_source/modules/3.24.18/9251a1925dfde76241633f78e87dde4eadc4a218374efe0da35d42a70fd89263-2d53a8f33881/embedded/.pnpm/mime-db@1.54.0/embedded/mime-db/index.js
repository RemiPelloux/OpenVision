import { require_db } from "./db.json";
var __wakaru_require_mime_db_cache;
export function require_mime_db() {
if (__wakaru_require_mime_db_cache) return __wakaru_require_mime_db_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_mime_db_cache = module2;
module2.exports = require_db();

return module2.exports;
}
