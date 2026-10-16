import { require_codegen } from "../../compile/codegen/index.js";
import { require_util16 } from "../../compile/util.js";
import { require_code3 } from "../code.js";
var __wakaru_require_pattern_cache;
export function require_pattern() {
if (__wakaru_require_pattern_cache) return __wakaru_require_pattern_cache;
var exports2 = {};
__wakaru_require_pattern_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var code_1 = require_code3();
var util_1 = require_util16();
var codegen_1 = require_codegen();
var error3 = {
    message: ({ schemaCode })=>(0, codegen_1.str)`must match pattern "${schemaCode}"`,
    params: ({ schemaCode })=>(0, codegen_1._)`{pattern: ${schemaCode}}`
};
var def = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: true,
    error: error3,
    code (cxt) {
        const { gen, data, $data, schema: schema2, schemaCode, it: it2 } = cxt;
        const u2 = it2.opts.unicodeRegExp ? "u" : "";
        if ($data) {
            const { regExp } = it2.opts.code;
            const regExpCode = regExp.code === "new RegExp" ? (0, codegen_1._)`new RegExp` : (0, util_1.useFunc)(gen, regExp);
            const valid = gen.let("valid");
            gen.try(()=>gen.assign(valid, (0, codegen_1._)`${regExpCode}(${schemaCode}, ${u2}).test(${data})`), ()=>gen.assign(valid, false));
            cxt.fail$data((0, codegen_1._)`!${valid}`);
        } else {
            const regExp = (0, code_1.usePattern)(cxt, schema2);
            cxt.fail$data((0, codegen_1._)`!${regExp}.test(${data})`);
        }
    }
};
exports2.default = def;

return exports2;
}
