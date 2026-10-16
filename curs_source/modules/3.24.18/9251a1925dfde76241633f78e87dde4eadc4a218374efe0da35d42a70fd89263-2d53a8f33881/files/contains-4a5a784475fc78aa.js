import { require_codegen } from "../../compile/codegen/index.js";
import { require_util16 } from "../../compile/util.js";
var __wakaru_require_contains_cache;
export function require_contains() {
if (__wakaru_require_contains_cache) return __wakaru_require_contains_cache;
var exports2 = {};
__wakaru_require_contains_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var codegen_1 = require_codegen();
var util_1 = require_util16();
var error3 = {
    message: ({ params: { min, max } })=>max === void 0 ? (0, codegen_1.str)`must contain at least ${min} valid item(s)` : (0, codegen_1.str)`must contain at least ${min} and no more than ${max} valid item(s)`,
    params: ({ params: { min, max } })=>max === void 0 ? (0, codegen_1._)`{minContains: ${min}}` : (0, codegen_1._)`{minContains: ${min}, maxContains: ${max}}`
};
var def = {
    keyword: "contains",
    type: "array",
    schemaType: [
        "object",
        "boolean"
    ],
    before: "uniqueItems",
    trackErrors: true,
    error: error3,
    code (cxt) {
        const { gen, schema: schema2, parentSchema, data, it: it2 } = cxt;
        let min;
        let max;
        const { minContains, maxContains } = parentSchema;
        if (it2.opts.next) {
            min = minContains === void 0 ? 1 : minContains;
            max = maxContains;
        } else {
            min = 1;
        }
        const len = gen.const("len", (0, codegen_1._)`${data}.length`);
        cxt.setParams({
            min,
            max
        });
        if (max === void 0 && min === 0) {
            (0, util_1.checkStrictMode)(it2, `"minContains" == 0 without "maxContains": "contains" keyword ignored`);
            return;
        }
        if (max !== void 0 && min > max) {
            (0, util_1.checkStrictMode)(it2, `"minContains" > "maxContains" is always invalid`);
            cxt.fail();
            return;
        }
        if ((0, util_1.alwaysValidSchema)(it2, schema2)) {
            let cond = (0, codegen_1._)`${len} >= ${min}`;
            if (max !== void 0) cond = (0, codegen_1._)`${cond} && ${len} <= ${max}`;
            cxt.pass(cond);
            return;
        }
        it2.items = true;
        const valid = gen.name("valid");
        if (max === void 0 && min === 1) {
            validateItems(valid, ()=>gen.if(valid, ()=>gen.break()));
        } else if (min === 0) {
            gen.let(valid, true);
            if (max !== void 0) gen.if((0, codegen_1._)`${data}.length > 0`, validateItemsWithCount);
        } else {
            gen.let(valid, false);
            validateItemsWithCount();
        }
        cxt.result(valid, ()=>cxt.reset());
        function validateItemsWithCount() {
            const schValid = gen.name("_valid");
            const count2 = gen.let("count", 0);
            validateItems(schValid, ()=>gen.if(schValid, ()=>checkLimits(count2)));
        }
        function validateItems(_valid, block) {
            gen.forRange("i", 0, len, (i)=>{
                cxt.subschema({
                    keyword: "contains",
                    dataProp: i,
                    dataPropType: util_1.Type.Num,
                    compositeRule: true
                }, _valid);
                block();
            });
        }
        function checkLimits(count2) {
            gen.code((0, codegen_1._)`${count2}++`);
            if (max === void 0) {
                gen.if((0, codegen_1._)`${count2} >= ${min}`, ()=>gen.assign(valid, true).break());
            } else {
                gen.if((0, codegen_1._)`${count2} > ${max}`, ()=>gen.assign(valid, false).break());
                if (min === 1) gen.assign(valid, true);
                else gen.if((0, codegen_1._)`${count2} >= ${min}`, ()=>gen.assign(valid, true));
            }
        }
    }
};
exports2.default = def;

return exports2;
}
