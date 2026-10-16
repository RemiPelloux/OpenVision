import { require_codegen } from "../../compile/codegen/index.js";
import { require_util16 } from "../../compile/util.js";
import { require_code3 } from "../code.js";
var __wakaru_require_patternProperties_cache;
export function require_patternProperties() {
if (__wakaru_require_patternProperties_cache) return __wakaru_require_patternProperties_cache;
var exports2 = {};
__wakaru_require_patternProperties_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var code_1 = require_code3();
var codegen_1 = require_codegen();
var util_1 = require_util16();
var util_2 = require_util16();
var def = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code (cxt) {
        const { gen, schema: schema2, data, parentSchema, it: it2 } = cxt;
        const { opts } = it2;
        const patterns = (0, code_1.allSchemaProperties)(schema2);
        const alwaysValidPatterns = patterns.filter((p2)=>(0, util_1.alwaysValidSchema)(it2, schema2[p2]));
        if (patterns.length === 0 || alwaysValidPatterns.length === patterns.length && (!it2.opts.unevaluated || it2.props === true)) {
            return;
        }
        const checkProperties = opts.strictSchema && !opts.allowMatchingProperties && parentSchema.properties;
        const valid = gen.name("valid");
        if (it2.props !== true && !(it2.props instanceof codegen_1.Name)) {
            it2.props = (0, util_2.evaluatedPropsToName)(gen, it2.props);
        }
        const { props } = it2;
        validatePatternProperties();
        function validatePatternProperties() {
            for (const pat of patterns){
                if (checkProperties) checkMatchingProperties(pat);
                if (it2.allErrors) {
                    validateProperties(pat);
                } else {
                    gen.var(valid, true);
                    validateProperties(pat);
                    gen.if(valid);
                }
            }
        }
        function checkMatchingProperties(pat) {
            for(const prop in checkProperties){
                if (new RegExp(pat).test(prop)) {
                    (0, util_1.checkStrictMode)(it2, `property ${prop} matches pattern ${pat} (use allowMatchingProperties)`);
                }
            }
        }
        function validateProperties(pat) {
            gen.forIn("key", data, (key)=>{
                gen.if((0, codegen_1._)`${(0, code_1.usePattern)(cxt, pat)}.test(${key})`, ()=>{
                    const alwaysValid = alwaysValidPatterns.includes(pat);
                    if (!alwaysValid) {
                        cxt.subschema({
                            keyword: "patternProperties",
                            schemaProp: pat,
                            dataProp: key,
                            dataPropType: util_2.Type.Str
                        }, valid);
                    }
                    if (it2.opts.unevaluated && props !== true) {
                        gen.assign((0, codegen_1._)`${props}[${key}]`, true);
                    } else if (!alwaysValid && !it2.allErrors) {
                        gen.if((0, codegen_1.not)(valid), ()=>gen.break());
                    }
                });
            });
        }
    }
};
exports2.default = def;

return exports2;
}
