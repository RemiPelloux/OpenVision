import { require_util16 } from "../../compile/util.js";
var __wakaru_require_thenElse_cache;
export function require_thenElse() {
if (__wakaru_require_thenElse_cache) return __wakaru_require_thenElse_cache;
var exports2 = {};
__wakaru_require_thenElse_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var util_1 = require_util16();
var def = {
    keyword: [
        "then",
        "else"
    ],
    schemaType: [
        "object",
        "boolean"
    ],
    code ({ keyword, parentSchema, it: it2 }) {
        if (parentSchema.if === void 0) (0, util_1.checkStrictMode)(it2, `"${keyword}" without "if" is ignored`);
    }
};
exports2.default = def;

return exports2;
}
