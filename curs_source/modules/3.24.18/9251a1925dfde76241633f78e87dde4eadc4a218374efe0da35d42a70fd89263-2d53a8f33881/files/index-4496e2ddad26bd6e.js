import { require_codegen } from "../../compile/codegen/index.js";
import { require_compile } from "../../compile/index.js";
import { require_ref_error } from "../../compile/ref_error.js";
import { require_util16 } from "../../compile/util.js";
import { require_types2 } from "./types.js";
var __wakaru_require_discriminator_cache;
export function require_discriminator() {
if (__wakaru_require_discriminator_cache) return __wakaru_require_discriminator_cache;
var exports2 = {};
__wakaru_require_discriminator_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var codegen_1 = require_codegen();
var types_1 = require_types2();
var compile_1 = require_compile();
var ref_error_1 = require_ref_error();
var util_1 = require_util16();
var error3 = {
    message: ({ params: { discrError, tagName } })=>discrError === types_1.DiscrError.Tag ? `tag "${tagName}" must be string` : `value of tag "${tagName}" must be in oneOf`,
    params: ({ params: { discrError, tag, tagName } })=>(0, codegen_1._)`{error: ${discrError}, tag: ${tagName}, tagValue: ${tag}}`
};
var def = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: error3,
    code (cxt) {
        const { gen, data, schema: schema2, parentSchema, it: it2 } = cxt;
        const { oneOf } = parentSchema;
        if (!it2.opts.discriminator) {
            throw new Error("discriminator: requires discriminator option");
        }
        const tagName = schema2.propertyName;
        if (typeof tagName != "string") throw new Error("discriminator: requires propertyName");
        if (schema2.mapping) throw new Error("discriminator: mapping is not supported");
        if (!oneOf) throw new Error("discriminator: requires oneOf keyword");
        const valid = gen.let("valid", false);
        const tag = gen.const("tag", (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(tagName)}`);
        gen.if((0, codegen_1._)`typeof ${tag} == "string"`, ()=>validateMapping(), ()=>cxt.error(false, {
                discrError: types_1.DiscrError.Tag,
                tag,
                tagName
            }));
        cxt.ok(valid);
        function validateMapping() {
            const mapping = getMapping();
            gen.if(false);
            for(const tagValue in mapping){
                gen.elseIf((0, codegen_1._)`${tag} === ${tagValue}`);
                gen.assign(valid, applyTagSchema(mapping[tagValue]));
            }
            gen.else();
            cxt.error(false, {
                discrError: types_1.DiscrError.Mapping,
                tag,
                tagName
            });
            gen.endIf();
        }
        function applyTagSchema(schemaProp) {
            const _valid = gen.name("valid");
            const schCxt = cxt.subschema({
                keyword: "oneOf",
                schemaProp
            }, _valid);
            cxt.mergeEvaluated(schCxt, codegen_1.Name);
            return _valid;
        }
        function getMapping() {
            var _a18;
            const oneOfMapping = {};
            const topRequired = hasRequired(parentSchema);
            let tagRequired = true;
            for(let i = 0; i < oneOf.length; i++){
                let sch = oneOf[i];
                if ((sch === null || sch === void 0 ? void 0 : sch.$ref) && !(0, util_1.schemaHasRulesButRef)(sch, it2.self.RULES)) {
                    const ref = sch.$ref;
                    sch = compile_1.resolveRef.call(it2.self, it2.schemaEnv.root, it2.baseId, ref);
                    if (sch instanceof compile_1.SchemaEnv) sch = sch.schema;
                    if (sch === void 0) throw new ref_error_1.default(it2.opts.uriResolver, it2.baseId, ref);
                }
                const propSch = (_a18 = sch === null || sch === void 0 ? void 0 : sch.properties) === null || _a18 === void 0 ? void 0 : _a18[tagName];
                if (typeof propSch != "object") {
                    throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${tagName}"`);
                }
                tagRequired = tagRequired && (topRequired || hasRequired(sch));
                addMappings(propSch, i);
            }
            if (!tagRequired) throw new Error(`discriminator: "${tagName}" must be required`);
            return oneOfMapping;
            function hasRequired({ required: required2 }) {
                return Array.isArray(required2) && required2.includes(tagName);
            }
            function addMappings(sch, i) {
                if (sch.const) {
                    addMapping(sch.const, i);
                } else if (sch.enum) {
                    for (const tagValue of sch.enum){
                        addMapping(tagValue, i);
                    }
                } else {
                    throw new Error(`discriminator: "properties/${tagName}" must have "const" or "enum"`);
                }
            }
            function addMapping(tagValue, i) {
                if (typeof tagValue != "string" || tagValue in oneOfMapping) {
                    throw new Error(`discriminator: "${tagName}" values must be unique strings`);
                }
                oneOfMapping[tagValue] = i;
            }
        }
    }
};
exports2.default = def;

return exports2;
}
