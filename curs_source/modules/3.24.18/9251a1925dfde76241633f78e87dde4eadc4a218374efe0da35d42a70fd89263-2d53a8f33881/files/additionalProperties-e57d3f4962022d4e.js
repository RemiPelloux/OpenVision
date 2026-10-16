import { require_codegen } from "../../compile/codegen/index.js";
import { require_names2 } from "../../compile/names.js";
import { require_util16 } from "../../compile/util.js";
import { require_code3 } from "../code.js";
var __wakaru_require_additionalProperties_cache;
export function require_additionalProperties() {
if (__wakaru_require_additionalProperties_cache) return __wakaru_require_additionalProperties_cache;
var exports2 = {};
__wakaru_require_additionalProperties_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var code_1 = require_code3();
var codegen_1 = require_codegen();
var names_1 = require_names2();
var util_1 = require_util16();
var error3 = {
    message: "must NOT have additional properties",
    params: ({ params })=>(0, codegen_1._)`{additionalProperty: ${params.additionalProperty}}`
};
var def = {
    keyword: "additionalProperties",
    type: [
        "object"
    ],
    schemaType: [
        "boolean",
        "object"
    ],
    allowUndefined: true,
    trackErrors: true,
    error: error3,
    code (cxt) {
        const { gen, schema: schema2, parentSchema, data, errsCount, it: it2 } = cxt;
        if (!errsCount) throw new Error("ajv implementation error");
        const { allErrors, opts } = it2;
        it2.props = true;
        if (opts.removeAdditional !== "all" && (0, util_1.alwaysValidSchema)(it2, schema2)) return;
        const props = (0, code_1.allSchemaProperties)(parentSchema.properties);
        const patProps = (0, code_1.allSchemaProperties)(parentSchema.patternProperties);
        checkAdditionalProperties();
        cxt.ok((0, codegen_1._)`${errsCount} === ${names_1.default.errors}`);
        function checkAdditionalProperties() {
            gen.forIn("key", data, (key)=>{
                if (!props.length && !patProps.length) additionalPropertyCode(key);
                else gen.if(isAdditional(key), ()=>additionalPropertyCode(key));
            });
        }
        function isAdditional(key) {
            let definedProp;
            if (props.length > 8) {
                const propsSchema = (0, util_1.schemaRefOrVal)(it2, parentSchema.properties, "properties");
                definedProp = (0, code_1.isOwnProperty)(gen, propsSchema, key);
            } else if (props.length) {
                definedProp = (0, codegen_1.or)(...props.map((p2)=>(0, codegen_1._)`${key} === ${p2}`));
            } else {
                definedProp = codegen_1.nil;
            }
            if (patProps.length) {
                definedProp = (0, codegen_1.or)(definedProp, ...patProps.map((p2)=>(0, codegen_1._)`${(0, code_1.usePattern)(cxt, p2)}.test(${key})`));
            }
            return (0, codegen_1.not)(definedProp);
        }
        function deleteAdditional(key) {
            gen.code((0, codegen_1._)`delete ${data}[${key}]`);
        }
        function additionalPropertyCode(key) {
            if (opts.removeAdditional === "all" || opts.removeAdditional && schema2 === false) {
                deleteAdditional(key);
                return;
            }
            if (schema2 === false) {
                cxt.setParams({
                    additionalProperty: key
                });
                cxt.error();
                if (!allErrors) gen.break();
                return;
            }
            if (typeof schema2 == "object" && !(0, util_1.alwaysValidSchema)(it2, schema2)) {
                const valid = gen.name("valid");
                if (opts.removeAdditional === "failing") {
                    applyAdditionalSchema(key, valid, false);
                    gen.if((0, codegen_1.not)(valid), ()=>{
                        cxt.reset();
                        deleteAdditional(key);
                    });
                } else {
                    applyAdditionalSchema(key, valid);
                    if (!allErrors) gen.if((0, codegen_1.not)(valid), ()=>gen.break());
                }
            }
        }
        function applyAdditionalSchema(key, valid, errors) {
            const subschema = {
                keyword: "additionalProperties",
                dataProp: key,
                dataPropType: util_1.Type.Str
            };
            if (errors === false) {
                Object.assign(subschema, {
                    compositeRule: true,
                    createErrors: false,
                    allErrors: false
                });
            }
            cxt.subschema(subschema, valid);
        }
    }
};
exports2.default = def;

return exports2;
}
