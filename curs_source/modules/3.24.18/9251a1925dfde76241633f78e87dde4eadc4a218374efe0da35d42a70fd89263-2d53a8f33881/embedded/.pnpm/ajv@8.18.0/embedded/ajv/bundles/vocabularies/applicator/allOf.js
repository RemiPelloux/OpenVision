import { require_util16 } from "../../compile/util.js";
var __wakaru_require_allOf_cache;
export function require_allOf() {
if (__wakaru_require_allOf_cache) return __wakaru_require_allOf_cache;
var exports2 = {};
__wakaru_require_allOf_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var util_1 = require_util16();
var def = {
    keyword: "allOf",
    schemaType: "array",
    code (cxt) {
        const { gen, schema: schema2, it: it2 } = cxt;
        if (!Array.isArray(schema2)) throw new Error("ajv implementation error");
        const valid = gen.name("valid");
        schema2.forEach((sch, i)=>{
            if ((0, util_1.alwaysValidSchema)(it2, sch)) return;
            const schCxt = cxt.subschema({
                keyword: "allOf",
                schemaProp: i
            }, valid);
            cxt.ok(valid);
            cxt.mergeEvaluated(schCxt);
        });
    }
};
exports2.default = def;

return exports2;
}
