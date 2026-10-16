import { require_codegen } from "../../compile/codegen/index.js";
import { require_util16 } from "../../compile/util.js";
import { require_equal } from "../../runtime/equal.js";
var __wakaru_require_const_cache;
export function require_const() {
if (__wakaru_require_const_cache) return __wakaru_require_const_cache;
var exports2 = {};
__wakaru_require_const_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var codegen_1 = require_codegen();
var util_1 = require_util16();
var equal_1 = require_equal();
var error3 = {
    message: "must be equal to constant",
    params: ({ schemaCode })=>(0, codegen_1._)`{allowedValue: ${schemaCode}}`
};
var def = {
    keyword: "const",
    $data: true,
    error: error3,
    code (cxt) {
        const { gen, data, $data, schemaCode, schema: schema2 } = cxt;
        if ($data || schema2 && typeof schema2 == "object") {
            cxt.fail$data((0, codegen_1._)`!${(0, util_1.useFunc)(gen, equal_1.default)}(${data}, ${schemaCode})`);
        } else {
            cxt.fail((0, codegen_1._)`${schema2} !== ${data}`);
        }
    }
};
exports2.default = def;

return exports2;
}
