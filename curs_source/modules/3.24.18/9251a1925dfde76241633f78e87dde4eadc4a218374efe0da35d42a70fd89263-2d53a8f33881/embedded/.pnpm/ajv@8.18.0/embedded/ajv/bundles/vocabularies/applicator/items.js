import { require_codegen } from "../../compile/codegen/index.js";
import { require_util16 } from "../../compile/util.js";
import { require_code3 } from "../code.js";
var __wakaru_require_items_cache;
export function require_items() {
if (__wakaru_require_items_cache) return __wakaru_require_items_cache;
var exports2 = {};
__wakaru_require_items_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.validateTuple = void 0;
var codegen_1 = require_codegen();
var util_1 = require_util16();
var code_1 = require_code3();
var def = {
    keyword: "items",
    type: "array",
    schemaType: [
        "object",
        "array",
        "boolean"
    ],
    before: "uniqueItems",
    code (cxt) {
        const { schema: schema2, it: it2 } = cxt;
        if (Array.isArray(schema2)) return validateTuple(cxt, "additionalItems", schema2);
        it2.items = true;
        if ((0, util_1.alwaysValidSchema)(it2, schema2)) return;
        cxt.ok((0, code_1.validateArray)(cxt));
    }
};
function validateTuple(cxt, extraItems, schArr = cxt.schema) {
    const { gen, parentSchema, data, keyword, it: it2 } = cxt;
    checkStrictTuple(parentSchema);
    if (it2.opts.unevaluated && schArr.length && it2.items !== true) {
        it2.items = util_1.mergeEvaluated.items(gen, schArr.length, it2.items);
    }
    const valid = gen.name("valid");
    const len = gen.const("len", (0, codegen_1._)`${data}.length`);
    schArr.forEach((sch, i)=>{
        if ((0, util_1.alwaysValidSchema)(it2, sch)) return;
        gen.if((0, codegen_1._)`${len} > ${i}`, ()=>cxt.subschema({
                keyword,
                schemaProp: i,
                dataProp: i
            }, valid));
        cxt.ok(valid);
    });
    function checkStrictTuple(sch) {
        const { opts, errSchemaPath } = it2;
        const l = schArr.length;
        const fullTuple = l === sch.minItems && (l === sch.maxItems || sch[extraItems] === false);
        if (opts.strictTuples && !fullTuple) {
            const msg = `"${keyword}" is ${l}-tuple, but minItems or maxItems/${extraItems} are not specified or different at path "${errSchemaPath}"`;
            (0, util_1.checkStrictMode)(it2, msg, opts.strictTuples);
        }
    }
}
exports2.validateTuple = validateTuple;
exports2.default = def;

return exports2;
}
