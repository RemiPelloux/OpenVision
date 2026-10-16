import { require_codegen } from "../../compile/codegen/index.js";
import { require_util16 } from "../../compile/util.js";
import { require_ucs2length } from "../../runtime/ucs2length.js";
var __wakaru_require_limitLength_cache;
export function require_limitLength() {
if (__wakaru_require_limitLength_cache) return __wakaru_require_limitLength_cache;
var exports2 = {};
__wakaru_require_limitLength_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var codegen_1 = require_codegen();
var util_1 = require_util16();
var ucs2length_1 = require_ucs2length();
var error3 = {
    message ({ keyword, schemaCode }) {
        const comp = keyword === "maxLength" ? "more" : "fewer";
        return (0, codegen_1.str)`must NOT have ${comp} than ${schemaCode} characters`;
    },
    params: ({ schemaCode })=>(0, codegen_1._)`{limit: ${schemaCode}}`
};
var def = {
    keyword: [
        "maxLength",
        "minLength"
    ],
    type: "string",
    schemaType: "number",
    $data: true,
    error: error3,
    code (cxt) {
        const { keyword, data, schemaCode, it: it2 } = cxt;
        const op = keyword === "maxLength" ? codegen_1.operators.GT : codegen_1.operators.LT;
        const len = it2.opts.unicode === false ? (0, codegen_1._)`${data}.length` : (0, codegen_1._)`${(0, util_1.useFunc)(cxt.gen, ucs2length_1.default)}(${data})`;
        cxt.fail$data((0, codegen_1._)`${len} ${op} ${schemaCode}`);
    }
};
exports2.default = def;

return exports2;
}
