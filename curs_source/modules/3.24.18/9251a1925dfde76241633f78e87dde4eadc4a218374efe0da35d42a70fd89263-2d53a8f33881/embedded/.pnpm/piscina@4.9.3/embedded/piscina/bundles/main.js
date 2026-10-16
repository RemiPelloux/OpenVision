import { require_dist3 } from "./index.js";
var __wakaru_require_main2_cache;
export function require_main2() {
if (__wakaru_require_main2_cache) return __wakaru_require_main2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_main2_cache = module2;
"use strict";
var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
    return mod2 && mod2.__esModule ? mod2 : {
        "default": mod2
    };
};
var index_1 = __importDefault(require_dist3());
module2.exports = index_1.default;

return module2.exports;
}
