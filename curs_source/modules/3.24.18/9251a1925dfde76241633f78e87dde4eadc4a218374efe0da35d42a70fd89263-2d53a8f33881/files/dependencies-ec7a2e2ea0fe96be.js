import { require_codegen } from "../../compile/codegen/index.js";
import { require_util16 } from "../../compile/util.js";
import { require_code3 } from "../code.js";
var __wakaru_require_dependencies_cache;
export function require_dependencies() {
if (__wakaru_require_dependencies_cache) return __wakaru_require_dependencies_cache;
var exports2 = {};
__wakaru_require_dependencies_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.validateSchemaDeps = exports2.validatePropertyDeps = exports2.error = void 0;
var codegen_1 = require_codegen();
var util_1 = require_util16();
var code_1 = require_code3();
exports2.error = {
    message: ({ params: { property, depsCount, deps } })=>{
        const property_ies = depsCount === 1 ? "property" : "properties";
        return (0, codegen_1.str)`must have ${property_ies} ${deps} when property ${property} is present`;
    },
    params: ({ params: { property, depsCount, deps, missingProperty } })=>(0, codegen_1._)`{property: ${property},
    missingProperty: ${missingProperty},
    depsCount: ${depsCount},
    deps: ${deps}}`
};
var def = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: exports2.error,
    code (cxt) {
        const [propDeps, schDeps] = splitDependencies(cxt);
        validatePropertyDeps(cxt, propDeps);
        validateSchemaDeps(cxt, schDeps);
    }
};
function splitDependencies({ schema: schema2 }) {
    const propertyDeps = {};
    const schemaDeps = {};
    for(const key in schema2){
        if (key === "__proto__") continue;
        const deps = Array.isArray(schema2[key]) ? propertyDeps : schemaDeps;
        deps[key] = schema2[key];
    }
    return [
        propertyDeps,
        schemaDeps
    ];
}
function validatePropertyDeps(cxt, propertyDeps = cxt.schema) {
    const { gen, data, it: it2 } = cxt;
    if (Object.keys(propertyDeps).length === 0) return;
    const missing = gen.let("missing");
    for(const prop in propertyDeps){
        const deps = propertyDeps[prop];
        if (deps.length === 0) continue;
        const hasProperty = (0, code_1.propertyInData)(gen, data, prop, it2.opts.ownProperties);
        cxt.setParams({
            property: prop,
            depsCount: deps.length,
            deps: deps.join(", ")
        });
        if (it2.allErrors) {
            gen.if(hasProperty, ()=>{
                for (const depProp of deps){
                    (0, code_1.checkReportMissingProp)(cxt, depProp);
                }
            });
        } else {
            gen.if((0, codegen_1._)`${hasProperty} && (${(0, code_1.checkMissingProp)(cxt, deps, missing)})`);
            (0, code_1.reportMissingProp)(cxt, missing);
            gen.else();
        }
    }
}
exports2.validatePropertyDeps = validatePropertyDeps;
function validateSchemaDeps(cxt, schemaDeps = cxt.schema) {
    const { gen, data, keyword, it: it2 } = cxt;
    const valid = gen.name("valid");
    for(const prop in schemaDeps){
        if ((0, util_1.alwaysValidSchema)(it2, schemaDeps[prop])) continue;
        gen.if((0, code_1.propertyInData)(gen, data, prop, it2.opts.ownProperties), ()=>{
            const schCxt = cxt.subschema({
                keyword,
                schemaProp: prop
            }, valid);
            cxt.mergeValidEvaluated(schCxt, valid);
        }, ()=>gen.var(valid, true));
        cxt.ok(valid);
    }
}
exports2.validateSchemaDeps = validateSchemaDeps;
exports2.default = def;

return exports2;
}
