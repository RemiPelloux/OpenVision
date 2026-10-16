import { require_codegen } from "../../compile/codegen/index.js";
var __wakaru_require_multipleOf_cache;
export function require_multipleOf() {
if (__wakaru_require_multipleOf_cache) return __wakaru_require_multipleOf_cache;
var exports2 = {};
__wakaru_require_multipleOf_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var codegen_1 = require_codegen();
var error3 = {
    message: ({ schemaCode })=>(0, codegen_1.str)`must be multiple of ${schemaCode}`,
    params: ({ schemaCode })=>(0, codegen_1._)`{multipleOf: ${schemaCode}}`
};
var def = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: true,
    error: error3,
    code (cxt) {
        const { gen, data, schemaCode, it: it2 } = cxt;
        const prec = it2.opts.multipleOfPrecision;
        const res = gen.let("res");
        const invalid = prec ? (0, codegen_1._)`Math.abs(Math.round(${res}) - ${res}) > 1e-${prec}` : (0, codegen_1._)`${res} !== parseInt(${res})`;
        cxt.fail$data((0, codegen_1._)`(${schemaCode} === 0 || (${res} = ${data}/${schemaCode}, ${invalid}))`);
    }
};
exports2.default = def;

return exports2;
}
