import { require_codegen } from "../../compile/codegen/index.js";
import { require_util16 } from "../../compile/util.js";
var __wakaru_require_additionalItems_cache;
export function require_additionalItems() {
if (__wakaru_require_additionalItems_cache) return __wakaru_require_additionalItems_cache;
var exports2 = {};
__wakaru_require_additionalItems_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.validateAdditionalItems = void 0;
var codegen_1 = require_codegen();
var util_1 = require_util16();
var error3 = {
    message: ({ params: { len } })=>(0, codegen_1.str)`must NOT have more than ${len} items`,
    params: ({ params: { len } })=>(0, codegen_1._)`{limit: ${len}}`
};
var def = {
    keyword: "additionalItems",
    type: "array",
    schemaType: [
        "boolean",
        "object"
    ],
    before: "uniqueItems",
    error: error3,
    code (cxt) {
        const { parentSchema, it: it2 } = cxt;
        const { items } = parentSchema;
        if (!Array.isArray(items)) {
            (0, util_1.checkStrictMode)(it2, '"additionalItems" is ignored when "items" is not an array of schemas');
            return;
        }
        validateAdditionalItems(cxt, items);
    }
};
function validateAdditionalItems(cxt, items) {
    const { gen, schema: schema2, data, keyword, it: it2 } = cxt;
    it2.items = true;
    const len = gen.const("len", (0, codegen_1._)`${data}.length`);
    if (schema2 === false) {
        cxt.setParams({
            len: items.length
        });
        cxt.pass((0, codegen_1._)`${len} <= ${items.length}`);
    } else if (typeof schema2 == "object" && !(0, util_1.alwaysValidSchema)(it2, schema2)) {
        const valid = gen.var("valid", (0, codegen_1._)`${len} <= ${items.length}`);
        gen.if((0, codegen_1.not)(valid), ()=>validateItems(valid));
        cxt.ok(valid);
    }
    function validateItems(valid) {
        gen.forRange("i", items.length, len, (i)=>{
            cxt.subschema({
                keyword,
                dataProp: i,
                dataPropType: util_1.Type.Num
            }, valid);
            if (!it2.allErrors) gen.if((0, codegen_1.not)(valid), ()=>gen.break());
        });
    }
}
exports2.validateAdditionalItems = validateAdditionalItems;
exports2.default = def;

return exports2;
}
