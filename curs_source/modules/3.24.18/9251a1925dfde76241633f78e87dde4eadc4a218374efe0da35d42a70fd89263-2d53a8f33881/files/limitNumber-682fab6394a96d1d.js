import { require_codegen } from "../../compile/codegen/index.js";
var __wakaru_require_limitNumber_cache;
export function require_limitNumber() {
if (__wakaru_require_limitNumber_cache) return __wakaru_require_limitNumber_cache;
var exports2 = {};
__wakaru_require_limitNumber_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var codegen_1 = require_codegen();
var ops = codegen_1.operators;
var KWDs = {
    maximum: {
        okStr: "<=",
        ok: ops.LTE,
        fail: ops.GT
    },
    minimum: {
        okStr: ">=",
        ok: ops.GTE,
        fail: ops.LT
    },
    exclusiveMaximum: {
        okStr: "<",
        ok: ops.LT,
        fail: ops.GTE
    },
    exclusiveMinimum: {
        okStr: ">",
        ok: ops.GT,
        fail: ops.LTE
    }
};
var error3 = {
    message: ({ keyword, schemaCode })=>(0, codegen_1.str)`must be ${KWDs[keyword].okStr} ${schemaCode}`,
    params: ({ keyword, schemaCode })=>(0, codegen_1._)`{comparison: ${KWDs[keyword].okStr}, limit: ${schemaCode}}`
};
var def = {
    keyword: Object.keys(KWDs),
    type: "number",
    schemaType: "number",
    $data: true,
    error: error3,
    code (cxt) {
        const { keyword, data, schemaCode } = cxt;
        cxt.fail$data((0, codegen_1._)`${data} ${KWDs[keyword].fail} ${schemaCode} || isNaN(${data})`);
    }
};
exports2.default = def;

return exports2;
}
