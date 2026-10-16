import { require_codegen } from "../codegen/index.js";
import { require_util16 } from "../util.js";
var __wakaru_require_defaults2_cache;
export function require_defaults2() {
if (__wakaru_require_defaults2_cache) return __wakaru_require_defaults2_cache;
var exports2 = {};
__wakaru_require_defaults2_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.assignDefaults = void 0;
var codegen_1 = require_codegen();
var util_1 = require_util16();
function assignDefaults(it2, ty) {
    const { properties, items } = it2.schema;
    if (ty === "object" && properties) {
        for(const key in properties){
            assignDefault(it2, key, properties[key].default);
        }
    } else if (ty === "array" && Array.isArray(items)) {
        items.forEach((sch, i)=>assignDefault(it2, i, sch.default));
    }
}
exports2.assignDefaults = assignDefaults;
function assignDefault(it2, prop, defaultValue) {
    const { gen, compositeRule, data, opts } = it2;
    if (defaultValue === void 0) return;
    const childData = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(prop)}`;
    if (compositeRule) {
        (0, util_1.checkStrictMode)(it2, `default is ignored for: ${childData}`);
        return;
    }
    let condition = (0, codegen_1._)`${childData} === undefined`;
    if (opts.useDefaults === "empty") {
        condition = (0, codegen_1._)`${condition} || ${childData} === null || ${childData} === ""`;
    }
    gen.if(condition, (0, codegen_1._)`${childData} = ${(0, codegen_1.stringify)(defaultValue)}`);
}

return exports2;
}
