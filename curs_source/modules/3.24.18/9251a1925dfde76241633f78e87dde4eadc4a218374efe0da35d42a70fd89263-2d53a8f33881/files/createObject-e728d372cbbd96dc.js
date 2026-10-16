var __wakaru_require_createObject_cache;
export function require_createObject() {
if (__wakaru_require_createObject_cache) return __wakaru_require_createObject_cache;
var exports2 = {};
__wakaru_require_createObject_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createObject = void 0;
function createObject(keys, values) {
    return keys.reduce((result, key, i)=>(result[key] = values[i], result), {});
}
exports2.createObject = createObject;

return exports2;
}
