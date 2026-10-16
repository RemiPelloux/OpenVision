import { require_codegen } from "../../compile/codegen/index.js";
import { require_util16 } from "../../compile/util.js";
import { require_code3 } from "../code.js";
var __wakaru_require_required_cache;
export function require_required() {
if (__wakaru_require_required_cache) return __wakaru_require_required_cache;
var exports2 = {};
__wakaru_require_required_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var code_1 = require_code3();
var codegen_1 = require_codegen();
var util_1 = require_util16();
var error3 = {
    message: ({ params: { missingProperty } })=>(0, codegen_1.str)`must have required property '${missingProperty}'`,
    params: ({ params: { missingProperty } })=>(0, codegen_1._)`{missingProperty: ${missingProperty}}`
};
var def = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: true,
    error: error3,
    code (cxt) {
        const { gen, schema: schema2, schemaCode, data, $data, it: it2 } = cxt;
        const { opts } = it2;
        if (!$data && schema2.length === 0) return;
        const useLoop = schema2.length >= opts.loopRequired;
        if (it2.allErrors) allErrorsMode();
        else exitOnErrorMode();
        if (opts.strictRequired) {
            const props = cxt.parentSchema.properties;
            const { definedProperties } = cxt.it;
            for (const requiredKey of schema2){
                if ((props === null || props === void 0 ? void 0 : props[requiredKey]) === void 0 && !definedProperties.has(requiredKey)) {
                    const schemaPath = it2.schemaEnv.baseId + it2.errSchemaPath;
                    const msg = `required property "${requiredKey}" is not defined at "${schemaPath}" (strictRequired)`;
                    (0, util_1.checkStrictMode)(it2, msg, it2.opts.strictRequired);
                }
            }
        }
        function allErrorsMode() {
            if (useLoop || $data) {
                cxt.block$data(codegen_1.nil, loopAllRequired);
            } else {
                for (const prop of schema2){
                    (0, code_1.checkReportMissingProp)(cxt, prop);
                }
            }
        }
        function exitOnErrorMode() {
            const missing = gen.let("missing");
            if (useLoop || $data) {
                const valid = gen.let("valid", true);
                cxt.block$data(valid, ()=>loopUntilMissing(missing, valid));
                cxt.ok(valid);
            } else {
                gen.if((0, code_1.checkMissingProp)(cxt, schema2, missing));
                (0, code_1.reportMissingProp)(cxt, missing);
                gen.else();
            }
        }
        function loopAllRequired() {
            gen.forOf("prop", schemaCode, (prop)=>{
                cxt.setParams({
                    missingProperty: prop
                });
                gen.if((0, code_1.noPropertyInData)(gen, data, prop, opts.ownProperties), ()=>cxt.error());
            });
        }
        function loopUntilMissing(missing, valid) {
            cxt.setParams({
                missingProperty: missing
            });
            gen.forOf(missing, schemaCode, ()=>{
                gen.assign(valid, (0, code_1.propertyInData)(gen, data, missing, opts.ownProperties));
                gen.if((0, codegen_1.not)(valid), ()=>{
                    cxt.error();
                    gen.break();
                });
            }, codegen_1.nil);
        }
    }
};
exports2.default = def;

return exports2;
}
