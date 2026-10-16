import { require_codegen } from "../../compile/codegen/index.js";
import { require_util16 } from "../../compile/util.js";
var __wakaru_require_if_cache;
export function require_if() {
if (__wakaru_require_if_cache) return __wakaru_require_if_cache;
var exports2 = {};
__wakaru_require_if_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var codegen_1 = require_codegen();
var util_1 = require_util16();
var error3 = {
    message: ({ params })=>(0, codegen_1.str)`must match "${params.ifClause}" schema`,
    params: ({ params })=>(0, codegen_1._)`{failingKeyword: ${params.ifClause}}`
};
var def = {
    keyword: "if",
    schemaType: [
        "object",
        "boolean"
    ],
    trackErrors: true,
    error: error3,
    code (cxt) {
        const { gen, parentSchema, it: it2 } = cxt;
        if (parentSchema.then === void 0 && parentSchema.else === void 0) {
            (0, util_1.checkStrictMode)(it2, '"if" without "then" and "else" is ignored');
        }
        const hasThen = hasSchema(it2, "then");
        const hasElse = hasSchema(it2, "else");
        if (!hasThen && !hasElse) return;
        const valid = gen.let("valid", true);
        const schValid = gen.name("_valid");
        validateIf();
        cxt.reset();
        if (hasThen && hasElse) {
            const ifClause = gen.let("ifClause");
            cxt.setParams({
                ifClause
            });
            gen.if(schValid, validateClause("then", ifClause), validateClause("else", ifClause));
        } else if (hasThen) {
            gen.if(schValid, validateClause("then"));
        } else {
            gen.if((0, codegen_1.not)(schValid), validateClause("else"));
        }
        cxt.pass(valid, ()=>cxt.error(true));
        function validateIf() {
            const schCxt = cxt.subschema({
                keyword: "if",
                compositeRule: true,
                createErrors: false,
                allErrors: false
            }, schValid);
            cxt.mergeEvaluated(schCxt);
        }
        function validateClause(keyword, ifClause) {
            return ()=>{
                const schCxt = cxt.subschema({
                    keyword
                }, schValid);
                gen.assign(valid, schValid);
                cxt.mergeValidEvaluated(schCxt, valid);
                if (ifClause) gen.assign(ifClause, (0, codegen_1._)`${keyword}`);
                else cxt.setParams({
                    ifClause: keyword
                });
            };
        }
    }
};
function hasSchema(it2, keyword) {
    const schema2 = it2.schema[keyword];
    return schema2 !== void 0 && !(0, util_1.alwaysValidSchema)(it2, schema2);
}
exports2.default = def;

return exports2;
}
