import { require_codegen } from "../../compile/codegen/index.js";
var __wakaru_require_limitProperties_cache;
export function require_limitProperties() {
if (__wakaru_require_limitProperties_cache) return __wakaru_require_limitProperties_cache;
var exports2 = {};
__wakaru_require_limitProperties_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var codegen_1 = require_codegen();
var error3 = {
    message ({ keyword, schemaCode }) {
        const comp = keyword === "maxProperties" ? "more" : "fewer";
        return (0, codegen_1.str)`must NOT have ${comp} than ${schemaCode} properties`;
    },
    params: ({ schemaCode })=>(0, codegen_1._)`{limit: ${schemaCode}}`
};
var def = {
    keyword: [
        "maxProperties",
        "minProperties"
    ],
    type: "object",
    schemaType: "number",
    $data: true,
    error: error3,
    code (cxt) {
        const { keyword, data, schemaCode } = cxt;
        const op = keyword === "maxProperties" ? codegen_1.operators.GT : codegen_1.operators.LT;
        cxt.fail$data((0, codegen_1._)`Object.keys(${data}).length ${op} ${schemaCode}`);
    }
};
exports2.default = def;

return exports2;
}
