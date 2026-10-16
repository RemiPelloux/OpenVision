var __wakaru_require_id_cache;
export function require_id() {
if (__wakaru_require_id_cache) return __wakaru_require_id_cache;
var exports2 = {};
__wakaru_require_id_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var def = {
    keyword: "id",
    code () {
        throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
};
exports2.default = def;

return exports2;
}
