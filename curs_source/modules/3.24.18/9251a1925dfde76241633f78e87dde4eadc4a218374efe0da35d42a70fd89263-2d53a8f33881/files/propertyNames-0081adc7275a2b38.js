import { require_codegen } from "../../compile/codegen/index.js";
import { require_util16 } from "../../compile/util.js";
var __wakaru_require_propertyNames_cache;
export function require_propertyNames() {
if (__wakaru_require_propertyNames_cache) return __wakaru_require_propertyNames_cache;
var exports2 = {};
__wakaru_require_propertyNames_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var codegen_1 = require_codegen();
var util_1 = require_util16();
var error3 = {
    message: "property name must be valid",
    params: ({ params })=>(0, codegen_1._)`{propertyName: ${params.propertyName}}`
};
var def = {
    keyword: "propertyNames",
    type: "object",
    schemaType: [
        "object",
        "boolean"
    ],
    error: error3,
    code (cxt) {
        const { gen, schema: schema2, data, it: it2 } = cxt;
        if ((0, util_1.alwaysValidSchema)(it2, schema2)) return;
        const valid = gen.name("valid");
        gen.forIn("key", data, (key)=>{
            cxt.setParams({
                propertyName: key
            });
            cxt.subschema({
                keyword: "propertyNames",
                data: key,
                dataTypes: [
                    "string"
                ],
                propertyName: key,
                compositeRule: true
            }, valid);
            gen.if((0, codegen_1.not)(valid), ()=>{
                cxt.error(true);
                if (!it2.allErrors) gen.break();
            });
        });
        cxt.ok(valid);
    }
};
exports2.default = def;

return exports2;
}
