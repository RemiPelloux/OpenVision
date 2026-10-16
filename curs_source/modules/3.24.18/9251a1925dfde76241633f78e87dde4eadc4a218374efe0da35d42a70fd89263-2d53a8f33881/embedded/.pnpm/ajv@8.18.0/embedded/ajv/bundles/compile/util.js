import { require_code2 } from "./codegen/code.js";
import { require_codegen } from "./codegen/index.js";
var __wakaru_require_util16_cache;
export function require_util16() {
if (__wakaru_require_util16_cache) return __wakaru_require_util16_cache;
var exports2 = {};
__wakaru_require_util16_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.checkStrictMode = exports2.getErrorPath = exports2.Type = exports2.useFunc = exports2.setEvaluated = exports2.evaluatedPropsToName = exports2.mergeEvaluated = exports2.eachItem = exports2.unescapeJsonPointer = exports2.escapeJsonPointer = exports2.escapeFragment = exports2.unescapeFragment = exports2.schemaRefOrVal = exports2.schemaHasRulesButRef = exports2.schemaHasRules = exports2.checkUnknownRules = exports2.alwaysValidSchema = exports2.toHash = void 0;
var codegen_1 = require_codegen();
var code_1 = require_code2();
function toHash(arr) {
    const hash = {};
    for (const item of arr)hash[item] = true;
    return hash;
}
exports2.toHash = toHash;
function alwaysValidSchema(it2, schema2) {
    if (typeof schema2 == "boolean") return schema2;
    if (Object.keys(schema2).length === 0) return true;
    checkUnknownRules(it2, schema2);
    return !schemaHasRules(schema2, it2.self.RULES.all);
}
exports2.alwaysValidSchema = alwaysValidSchema;
function checkUnknownRules(it2, schema2 = it2.schema) {
    const { opts, self: self2 } = it2;
    if (!opts.strictSchema) return;
    if (typeof schema2 === "boolean") return;
    const rules = self2.RULES.keywords;
    for(const key in schema2){
        if (!rules[key]) checkStrictMode(it2, `unknown keyword: "${key}"`);
    }
}
exports2.checkUnknownRules = checkUnknownRules;
function schemaHasRules(schema2, rules) {
    if (typeof schema2 == "boolean") return !schema2;
    for(const key in schema2)if (rules[key]) return true;
    return false;
}
exports2.schemaHasRules = schemaHasRules;
function schemaHasRulesButRef(schema2, RULES) {
    if (typeof schema2 == "boolean") return !schema2;
    for(const key in schema2)if (key !== "$ref" && RULES.all[key]) return true;
    return false;
}
exports2.schemaHasRulesButRef = schemaHasRulesButRef;
function schemaRefOrVal({ topSchemaRef, schemaPath }, schema2, keyword, $data) {
    if (!$data) {
        if (typeof schema2 == "number" || typeof schema2 == "boolean") return schema2;
        if (typeof schema2 == "string") return (0, codegen_1._)`${schema2}`;
    }
    return (0, codegen_1._)`${topSchemaRef}${schemaPath}${(0, codegen_1.getProperty)(keyword)}`;
}
exports2.schemaRefOrVal = schemaRefOrVal;
function unescapeFragment(str3) {
    return unescapeJsonPointer(decodeURIComponent(str3));
}
exports2.unescapeFragment = unescapeFragment;
function escapeFragment(str3) {
    return encodeURIComponent(escapeJsonPointer(str3));
}
exports2.escapeFragment = escapeFragment;
function escapeJsonPointer(str3) {
    if (typeof str3 == "number") return `${str3}`;
    return str3.replace(/~/g, "~0").replace(/\//g, "~1");
}
exports2.escapeJsonPointer = escapeJsonPointer;
function unescapeJsonPointer(str3) {
    return str3.replace(/~1/g, "/").replace(/~0/g, "~");
}
exports2.unescapeJsonPointer = unescapeJsonPointer;
function eachItem(xs2, f2) {
    if (Array.isArray(xs2)) {
        for (const x of xs2)f2(x);
    } else {
        f2(xs2);
    }
}
exports2.eachItem = eachItem;
function makeMergeEvaluated({ mergeNames, mergeToName, mergeValues: mergeValues3, resultToName }) {
    return (gen, from2, to3, toName2)=>{
        const res = to3 === void 0 ? from2 : to3 instanceof codegen_1.Name ? (from2 instanceof codegen_1.Name ? mergeNames(gen, from2, to3) : mergeToName(gen, from2, to3), to3) : from2 instanceof codegen_1.Name ? (mergeToName(gen, to3, from2), from2) : mergeValues3(from2, to3);
        return toName2 === codegen_1.Name && !(res instanceof codegen_1.Name) ? resultToName(gen, res) : res;
    };
}
exports2.mergeEvaluated = {
    props: makeMergeEvaluated({
        mergeNames: (gen, from2, to3)=>gen.if((0, codegen_1._)`${to3} !== true && ${from2} !== undefined`, ()=>{
                gen.if((0, codegen_1._)`${from2} === true`, ()=>gen.assign(to3, true), ()=>gen.assign(to3, (0, codegen_1._)`${to3} || {}`).code((0, codegen_1._)`Object.assign(${to3}, ${from2})`));
            }),
        mergeToName: (gen, from2, to3)=>gen.if((0, codegen_1._)`${to3} !== true`, ()=>{
                if (from2 === true) {
                    gen.assign(to3, true);
                } else {
                    gen.assign(to3, (0, codegen_1._)`${to3} || {}`);
                    setEvaluated(gen, to3, from2);
                }
            }),
        mergeValues: (from2, to3)=>from2 === true ? true : {
                ...from2,
                ...to3
            },
        resultToName: evaluatedPropsToName
    }),
    items: makeMergeEvaluated({
        mergeNames: (gen, from2, to3)=>gen.if((0, codegen_1._)`${to3} !== true && ${from2} !== undefined`, ()=>gen.assign(to3, (0, codegen_1._)`${from2} === true ? true : ${to3} > ${from2} ? ${to3} : ${from2}`)),
        mergeToName: (gen, from2, to3)=>gen.if((0, codegen_1._)`${to3} !== true`, ()=>gen.assign(to3, from2 === true ? true : (0, codegen_1._)`${to3} > ${from2} ? ${to3} : ${from2}`)),
        mergeValues: (from2, to3)=>from2 === true ? true : Math.max(from2, to3),
        resultToName: (gen, items)=>gen.var("items", items)
    })
};
function evaluatedPropsToName(gen, ps2) {
    if (ps2 === true) return gen.var("props", true);
    const props = gen.var("props", (0, codegen_1._)`{}`);
    if (ps2 !== void 0) setEvaluated(gen, props, ps2);
    return props;
}
exports2.evaluatedPropsToName = evaluatedPropsToName;
function setEvaluated(gen, props, ps2) {
    Object.keys(ps2).forEach((p2)=>gen.assign((0, codegen_1._)`${props}${(0, codegen_1.getProperty)(p2)}`, true));
}
exports2.setEvaluated = setEvaluated;
var snippets = {};
function useFunc(gen, f2) {
    return gen.scopeValue("func", {
        ref: f2,
        code: snippets[f2.code] || (snippets[f2.code] = new code_1._Code(f2.code))
    });
}
exports2.useFunc = useFunc;
var Type3;
(function(Type4) {
    Type4[Type4["Num"] = 0] = "Num";
    Type4[Type4["Str"] = 1] = "Str";
})(Type3 || (exports2.Type = Type3 = {}));
function getErrorPath(dataProp, dataPropType, jsPropertySyntax) {
    if (dataProp instanceof codegen_1.Name) {
        const isNumber = dataPropType === Type3.Num;
        return jsPropertySyntax ? isNumber ? (0, codegen_1._)`"[" + ${dataProp} + "]"` : (0, codegen_1._)`"['" + ${dataProp} + "']"` : isNumber ? (0, codegen_1._)`"/" + ${dataProp}` : (0, codegen_1._)`"/" + ${dataProp}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return jsPropertySyntax ? (0, codegen_1.getProperty)(dataProp).toString() : "/" + escapeJsonPointer(dataProp);
}
exports2.getErrorPath = getErrorPath;
function checkStrictMode(it2, msg, mode = it2.opts.strictSchema) {
    if (!mode) return;
    msg = `strict mode: ${msg}`;
    if (mode === true) throw new Error(msg);
    it2.self.logger.warn(msg);
}
exports2.checkStrictMode = checkStrictMode;

return exports2;
}
