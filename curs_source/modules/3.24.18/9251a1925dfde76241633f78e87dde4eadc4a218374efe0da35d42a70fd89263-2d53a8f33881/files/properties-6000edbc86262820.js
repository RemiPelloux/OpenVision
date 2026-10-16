import { require_util16 } from "../../compile/util.js";
import { require_validate } from "../../compile/validate/index.js";
import { require_additionalProperties } from "./additionalProperties.js";
import { require_code3 } from "../code.js";
var __wakaru_require_properties_cache;
export function require_properties() {
if (__wakaru_require_properties_cache) return __wakaru_require_properties_cache;
var exports2 = {};
__wakaru_require_properties_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var validate_1 = require_validate();
var code_1 = require_code3();
var util_1 = require_util16();
var additionalProperties_1 = require_additionalProperties();
var def = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code (cxt) {
        const { gen, schema: schema2, parentSchema, data, it: it2 } = cxt;
        if (it2.opts.removeAdditional === "all" && parentSchema.additionalProperties === void 0) {
            additionalProperties_1.default.code(new validate_1.KeywordCxt(it2, additionalProperties_1.default, "additionalProperties"));
        }
        const allProps = (0, code_1.allSchemaProperties)(schema2);
        for (const prop of allProps){
            it2.definedProperties.add(prop);
        }
        if (it2.opts.unevaluated && allProps.length && it2.props !== true) {
            it2.props = util_1.mergeEvaluated.props(gen, (0, util_1.toHash)(allProps), it2.props);
        }
        const properties = allProps.filter((p2)=>!(0, util_1.alwaysValidSchema)(it2, schema2[p2]));
        if (properties.length === 0) return;
        const valid = gen.name("valid");
        for (const prop of properties){
            if (hasDefault(prop)) {
                applyPropertySchema(prop);
            } else {
                gen.if((0, code_1.propertyInData)(gen, data, prop, it2.opts.ownProperties));
                applyPropertySchema(prop);
                if (!it2.allErrors) gen.else().var(valid, true);
                gen.endIf();
            }
            cxt.it.definedProperties.add(prop);
            cxt.ok(valid);
        }
        function hasDefault(prop) {
            return it2.opts.useDefaults && !it2.compositeRule && schema2[prop].default !== void 0;
        }
        function applyPropertySchema(prop) {
            cxt.subschema({
                keyword: "properties",
                schemaProp: prop,
                dataProp: prop
            }, valid);
        }
    }
};
exports2.default = def;

return exports2;
}
