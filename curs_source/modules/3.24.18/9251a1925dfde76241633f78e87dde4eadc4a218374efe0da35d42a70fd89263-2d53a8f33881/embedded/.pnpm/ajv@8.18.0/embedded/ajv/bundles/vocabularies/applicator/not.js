import { require_util16 } from "../../compile/util.js";
var __wakaru_require_not2_cache;
export function require_not2() {
if (__wakaru_require_not2_cache) return __wakaru_require_not2_cache;
var exports2 = {};
__wakaru_require_not2_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var util_1 = require_util16();
var def = {
    keyword: "not",
    schemaType: [
        "object",
        "boolean"
    ],
    trackErrors: true,
    code (cxt) {
        const { gen, schema: schema2, it: it2 } = cxt;
        if ((0, util_1.alwaysValidSchema)(it2, schema2)) {
            cxt.fail();
            return;
        }
        const valid = gen.name("valid");
        cxt.subschema({
            keyword: "not",
            compositeRule: true,
            createErrors: false,
            allErrors: false
        }, valid);
        cxt.failResult(valid, ()=>cxt.reset(), ()=>cxt.error());
    },
    error: {
        message: "must NOT be valid"
    }
};
exports2.default = def;

return exports2;
}
