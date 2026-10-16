import { require_codegen } from "../../compile/codegen/index.js";
import { require_util16 } from "../../compile/util.js";
import { require_equal } from "../../runtime/equal.js";
var __wakaru_require_enum2_cache;
export function require_enum2() {
if (__wakaru_require_enum2_cache) return __wakaru_require_enum2_cache;
var exports2 = {};
__wakaru_require_enum2_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var codegen_1 = require_codegen();
var util_1 = require_util16();
var equal_1 = require_equal();
var error3 = {
    message: "must be equal to one of the allowed values",
    params: ({ schemaCode })=>(0, codegen_1._)`{allowedValues: ${schemaCode}}`
};
var def = {
    keyword: "enum",
    schemaType: "array",
    $data: true,
    error: error3,
    code (cxt) {
        const { gen, data, $data, schema: schema2, schemaCode, it: it2 } = cxt;
        if (!$data && schema2.length === 0) throw new Error("enum must have non-empty array");
        const useLoop = schema2.length >= it2.opts.loopEnum;
        let eql;
        const getEql = ()=>eql !== null && eql !== void 0 ? eql : eql = (0, util_1.useFunc)(gen, equal_1.default);
        let valid;
        if (useLoop || $data) {
            valid = gen.let("valid");
            cxt.block$data(valid, loopEnum);
        } else {
            if (!Array.isArray(schema2)) throw new Error("ajv implementation error");
            const vSchema = gen.const("vSchema", schemaCode);
            valid = (0, codegen_1.or)(...schema2.map((_x, i)=>equalCode(vSchema, i)));
        }
        cxt.pass(valid);
        function loopEnum() {
            gen.assign(valid, false);
            gen.forOf("v", schemaCode, (v2)=>gen.if((0, codegen_1._)`${getEql()}(${data}, ${v2})`, ()=>gen.assign(valid, true).break()));
        }
        function equalCode(vSchema, i) {
            const sch = schema2[i];
            return typeof sch === "object" && sch !== null ? (0, codegen_1._)`${getEql()}(${data}, ${vSchema}[${i}])` : (0, codegen_1._)`${data} === ${sch}`;
        }
    }
};
exports2.default = def;

return exports2;
}
