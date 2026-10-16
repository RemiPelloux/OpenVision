import { require_codegen } from "../../compile/codegen/index.js";
import { require_util16 } from "../../compile/util.js";
import { require_additionalItems } from "./additionalItems.js";
import { require_code3 } from "../code.js";
var __wakaru_require_items2020_cache;
export function require_items2020() {
if (__wakaru_require_items2020_cache) return __wakaru_require_items2020_cache;
var exports2 = {};
__wakaru_require_items2020_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var codegen_1 = require_codegen();
var util_1 = require_util16();
var code_1 = require_code3();
var additionalItems_1 = require_additionalItems();
var error3 = {
    message: ({ params: { len } })=>(0, codegen_1.str)`must NOT have more than ${len} items`,
    params: ({ params: { len } })=>(0, codegen_1._)`{limit: ${len}}`
};
var def = {
    keyword: "items",
    type: "array",
    schemaType: [
        "object",
        "boolean"
    ],
    before: "uniqueItems",
    error: error3,
    code (cxt) {
        const { schema: schema2, parentSchema, it: it2 } = cxt;
        const { prefixItems } = parentSchema;
        it2.items = true;
        if ((0, util_1.alwaysValidSchema)(it2, schema2)) return;
        if (prefixItems) (0, additionalItems_1.validateAdditionalItems)(cxt, prefixItems);
        else cxt.ok((0, code_1.validateArray)(cxt));
    }
};
exports2.default = def;

return exports2;
}
