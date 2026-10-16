import { require_codegen } from "../../compile/codegen/index.js";
var __wakaru_require_limitItems_cache;
export function require_limitItems() {
if (__wakaru_require_limitItems_cache) return __wakaru_require_limitItems_cache;
var exports2 = {};
__wakaru_require_limitItems_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var codegen_1 = require_codegen();
var error3 = {
    message ({ keyword, schemaCode }) {
        const comp = keyword === "maxItems" ? "more" : "fewer";
        return (0, codegen_1.str)`must NOT have ${comp} than ${schemaCode} items`;
    },
    params: ({ schemaCode })=>(0, codegen_1._)`{limit: ${schemaCode}}`
};
var def = {
    keyword: [
        "maxItems",
        "minItems"
    ],
    type: "array",
    schemaType: "number",
    $data: true,
    error: error3,
    code (cxt) {
        const { keyword, data, schemaCode } = cxt;
        const op = keyword === "maxItems" ? codegen_1.operators.GT : codegen_1.operators.LT;
        cxt.fail$data((0, codegen_1._)`${data}.length ${op} ${schemaCode}`);
    }
};
exports2.default = def;

return exports2;
}
