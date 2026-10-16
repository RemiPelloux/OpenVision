var __wakaru_require_shebang_regex_cache;
export function require_shebang_regex() {
if (__wakaru_require_shebang_regex_cache) return __wakaru_require_shebang_regex_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_shebang_regex_cache = module2;
"use strict";
module2.exports = /^#!(.*)/;

return module2.exports;
}
