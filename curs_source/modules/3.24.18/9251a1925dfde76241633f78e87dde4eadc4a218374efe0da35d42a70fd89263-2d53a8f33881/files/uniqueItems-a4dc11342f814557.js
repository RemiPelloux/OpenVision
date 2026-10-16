import { require_codegen } from "../../compile/codegen/index.js";
import { require_util16 } from "../../compile/util.js";
import { require_dataType } from "../../compile/validate/dataType.js";
import { require_equal } from "../../runtime/equal.js";
var __wakaru_require_uniqueItems_cache;
export function require_uniqueItems() {
if (__wakaru_require_uniqueItems_cache) return __wakaru_require_uniqueItems_cache;
var exports2 = {};
__wakaru_require_uniqueItems_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var dataType_1 = require_dataType();
var codegen_1 = require_codegen();
var util_1 = require_util16();
var equal_1 = require_equal();
var error3 = {
    message: ({ params: { i, j: j2 } })=>(0, codegen_1.str)`must NOT have duplicate items (items ## ${j2} and ${i} are identical)`,
    params: ({ params: { i, j: j2 } })=>(0, codegen_1._)`{i: ${i}, j: ${j2}}`
};
var def = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: true,
    error: error3,
    code (cxt) {
        const { gen, data, $data, schema: schema2, parentSchema, schemaCode, it: it2 } = cxt;
        if (!$data && !schema2) return;
        const valid = gen.let("valid");
        const itemTypes = parentSchema.items ? (0, dataType_1.getSchemaTypes)(parentSchema.items) : [];
        cxt.block$data(valid, validateUniqueItems, (0, codegen_1._)`${schemaCode} === false`);
        cxt.ok(valid);
        function validateUniqueItems() {
            const i = gen.let("i", (0, codegen_1._)`${data}.length`);
            const j2 = gen.let("j");
            cxt.setParams({
                i,
                j: j2
            });
            gen.assign(valid, true);
            gen.if((0, codegen_1._)`${i} > 1`, ()=>(canOptimize() ? loopN : loopN2)(i, j2));
        }
        function canOptimize() {
            return itemTypes.length > 0 && !itemTypes.some((t)=>t === "object" || t === "array");
        }
        function loopN(i, j2) {
            const item = gen.name("item");
            const wrongType = (0, dataType_1.checkDataTypes)(itemTypes, item, it2.opts.strictNumbers, dataType_1.DataType.Wrong);
            const indices = gen.const("indices", (0, codegen_1._)`{}`);
            gen.for((0, codegen_1._)`;${i}--;`, ()=>{
                gen.let(item, (0, codegen_1._)`${data}[${i}]`);
                gen.if(wrongType, (0, codegen_1._)`continue`);
                if (itemTypes.length > 1) gen.if((0, codegen_1._)`typeof ${item} == "string"`, (0, codegen_1._)`${item} += "_"`);
                gen.if((0, codegen_1._)`typeof ${indices}[${item}] == "number"`, ()=>{
                    gen.assign(j2, (0, codegen_1._)`${indices}[${item}]`);
                    cxt.error();
                    gen.assign(valid, false).break();
                }).code((0, codegen_1._)`${indices}[${item}] = ${i}`);
            });
        }
        function loopN2(i, j2) {
            const eql = (0, util_1.useFunc)(gen, equal_1.default);
            const outer = gen.name("outer");
            gen.label(outer).for((0, codegen_1._)`;${i}--;`, ()=>gen.for((0, codegen_1._)`${j2} = ${i}; ${j2}--;`, ()=>gen.if((0, codegen_1._)`${eql}(${data}[${i}], ${data}[${j2}])`, ()=>{
                        cxt.error();
                        gen.assign(valid, false).break(outer);
                    })));
        }
    }
};
exports2.default = def;

return exports2;
}
