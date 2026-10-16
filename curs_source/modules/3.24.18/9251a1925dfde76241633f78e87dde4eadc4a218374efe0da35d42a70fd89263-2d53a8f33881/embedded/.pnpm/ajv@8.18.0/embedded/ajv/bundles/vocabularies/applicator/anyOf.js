import { require_code3 } from "../code.js";
var __wakaru_require_anyOf_cache;
export function require_anyOf() {
if (__wakaru_require_anyOf_cache) return __wakaru_require_anyOf_cache;
var exports2 = {};
__wakaru_require_anyOf_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var code_1 = require_code3();
var def = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: true,
    code: code_1.validateUnion,
    error: {
        message: "must match a schema in anyOf"
    }
};
exports2.default = def;

return exports2;
}
