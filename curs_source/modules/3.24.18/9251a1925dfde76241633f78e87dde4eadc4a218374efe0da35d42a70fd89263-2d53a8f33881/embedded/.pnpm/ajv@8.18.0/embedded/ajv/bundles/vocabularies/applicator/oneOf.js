import { require_codegen } from "../../compile/codegen/index.js";
import { require_util16 } from "../../compile/util.js";
var __wakaru_require_oneOf_cache;
export function require_oneOf() {
if (__wakaru_require_oneOf_cache) return __wakaru_require_oneOf_cache;
var exports2 = {};
__wakaru_require_oneOf_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var codegen_1 = require_codegen();
var util_1 = require_util16();
var error3 = {
    message: "must match exactly one schema in oneOf",
    params: ({ params })=>(0, codegen_1._)`{passingSchemas: ${params.passing}}`
};
var def = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: true,
    error: error3,
    code (cxt) {
        const { gen, schema: schema2, parentSchema, it: it2 } = cxt;
        if (!Array.isArray(schema2)) throw new Error("ajv implementation error");
        if (it2.opts.discriminator && parentSchema.discriminator) return;
        const schArr = schema2;
        const valid = gen.let("valid", false);
        const passing = gen.let("passing", null);
        const schValid = gen.name("_valid");
        cxt.setParams({
            passing
        });
        gen.block(validateOneOf);
        cxt.result(valid, ()=>cxt.reset(), ()=>cxt.error(true));
        function validateOneOf() {
            schArr.forEach((sch, i)=>{
                let schCxt;
                if ((0, util_1.alwaysValidSchema)(it2, sch)) {
                    gen.var(schValid, true);
                } else {
                    schCxt = cxt.subschema({
                        keyword: "oneOf",
                        schemaProp: i,
                        compositeRule: true
                    }, schValid);
                }
                if (i > 0) {
                    gen.if((0, codegen_1._)`${schValid} && ${valid}`).assign(valid, false).assign(passing, (0, codegen_1._)`[${passing}, ${i}]`).else();
                }
                gen.if(schValid, ()=>{
                    gen.assign(valid, true);
                    gen.assign(passing, i);
                    if (schCxt) cxt.mergeEvaluated(schCxt, codegen_1.Name);
                });
            });
        }
    }
};
exports2.default = def;

return exports2;
}
