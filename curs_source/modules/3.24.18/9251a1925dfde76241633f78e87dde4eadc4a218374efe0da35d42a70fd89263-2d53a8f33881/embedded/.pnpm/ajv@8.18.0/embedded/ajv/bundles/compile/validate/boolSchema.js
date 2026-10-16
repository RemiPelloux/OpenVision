import { require_codegen } from "../codegen/index.js";
import { require_errors3 } from "../errors.js";
import { require_names2 } from "../names.js";
var __wakaru_require_boolSchema_cache;
export function require_boolSchema() {
if (__wakaru_require_boolSchema_cache) return __wakaru_require_boolSchema_cache;
var exports2 = {};
__wakaru_require_boolSchema_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.boolOrEmptySchema = exports2.topBoolOrEmptySchema = void 0;
var errors_1 = require_errors3();
var codegen_1 = require_codegen();
var names_1 = require_names2();
var boolError = {
    message: "boolean schema is false"
};
function topBoolOrEmptySchema(it2) {
    const { gen, schema: schema2, validateName } = it2;
    if (schema2 === false) {
        falseSchemaError(it2, false);
    } else if (typeof schema2 == "object" && schema2.$async === true) {
        gen.return(names_1.default.data);
    } else {
        gen.assign((0, codegen_1._)`${validateName}.errors`, null);
        gen.return(true);
    }
}
exports2.topBoolOrEmptySchema = topBoolOrEmptySchema;
function boolOrEmptySchema(it2, valid) {
    const { gen, schema: schema2 } = it2;
    if (schema2 === false) {
        gen.var(valid, false);
        falseSchemaError(it2);
    } else {
        gen.var(valid, true);
    }
}
exports2.boolOrEmptySchema = boolOrEmptySchema;
function falseSchemaError(it2, overrideAllErrors) {
    const { gen, data } = it2;
    const cxt = {
        gen,
        keyword: "false schema",
        data,
        schema: false,
        schemaCode: false,
        schemaValue: false,
        params: {},
        it: it2
    };
    (0, errors_1.reportError)(cxt, boolError, void 0, overrideAllErrors);
}

return exports2;
}
