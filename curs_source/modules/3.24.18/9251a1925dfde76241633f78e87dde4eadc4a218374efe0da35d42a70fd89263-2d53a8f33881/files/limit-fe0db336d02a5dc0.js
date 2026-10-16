import { require_ajv } from "../../../../ajv@8.18.0/node_modules/ajv/dist/ajv.js";
import { require_codegen } from "../../../../ajv@8.18.0/node_modules/ajv/dist/compile/codegen/index.js";
var __wakaru_require_limit_cache;
export function require_limit() {
if (__wakaru_require_limit_cache) return __wakaru_require_limit_cache;
var exports2 = {};
__wakaru_require_limit_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.formatLimitDefinition = void 0;
var ajv_1 = require_ajv();
var codegen_1 = require_codegen();
var ops = codegen_1.operators;
var KWDs = {
    formatMaximum: {
        okStr: "<=",
        ok: ops.LTE,
        fail: ops.GT
    },
    formatMinimum: {
        okStr: ">=",
        ok: ops.GTE,
        fail: ops.LT
    },
    formatExclusiveMaximum: {
        okStr: "<",
        ok: ops.LT,
        fail: ops.GTE
    },
    formatExclusiveMinimum: {
        okStr: ">",
        ok: ops.GT,
        fail: ops.LTE
    }
};
var error3 = {
    message: ({ keyword, schemaCode })=>(0, codegen_1.str)`should be ${KWDs[keyword].okStr} ${schemaCode}`,
    params: ({ keyword, schemaCode })=>(0, codegen_1._)`{comparison: ${KWDs[keyword].okStr}, limit: ${schemaCode}}`
};
exports2.formatLimitDefinition = {
    keyword: Object.keys(KWDs),
    type: "string",
    schemaType: "string",
    $data: true,
    error: error3,
    code (cxt) {
        const { gen, data, schemaCode, keyword, it: it2 } = cxt;
        const { opts, self: self2 } = it2;
        if (!opts.validateFormats) return;
        const fCxt = new ajv_1.KeywordCxt(it2, self2.RULES.all.format.definition, "format");
        if (fCxt.$data) validate$DataFormat();
        else validateFormat();
        function validate$DataFormat() {
            const fmts = gen.scopeValue("formats", {
                ref: self2.formats,
                code: opts.code.formats
            });
            const fmt = gen.const("fmt", (0, codegen_1._)`${fmts}[${fCxt.schemaCode}]`);
            cxt.fail$data((0, codegen_1.or)((0, codegen_1._)`typeof ${fmt} != "object"`, (0, codegen_1._)`${fmt} instanceof RegExp`, (0, codegen_1._)`typeof ${fmt}.compare != "function"`, compareCode(fmt)));
        }
        function validateFormat() {
            const format2 = fCxt.schema;
            const fmtDef = self2.formats[format2];
            if (!fmtDef || fmtDef === true) return;
            if (typeof fmtDef != "object" || fmtDef instanceof RegExp || typeof fmtDef.compare != "function") {
                throw new Error(`"${keyword}": format "${format2}" does not define "compare" function`);
            }
            const fmt = gen.scopeValue("formats", {
                key: format2,
                ref: fmtDef,
                code: opts.code.formats ? (0, codegen_1._)`${opts.code.formats}${(0, codegen_1.getProperty)(format2)}` : void 0
            });
            cxt.fail$data(compareCode(fmt));
        }
        function compareCode(fmt) {
            return (0, codegen_1._)`${fmt}.compare(${data}, ${schemaCode}) ${KWDs[keyword].fail} 0`;
        }
    },
    dependencies: [
        "format"
    ]
};
var formatLimitPlugin = (ajv2)=>{
    ajv2.addKeyword(exports2.formatLimitDefinition);
    return ajv2;
};
exports2.default = formatLimitPlugin;

return exports2;
}
