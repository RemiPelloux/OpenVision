import { require_codegen } from "../../compile/codegen/index.js";
var __wakaru_require_format_cache;
export function require_format() {
if (__wakaru_require_format_cache) return __wakaru_require_format_cache;
var exports2 = {};
__wakaru_require_format_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var codegen_1 = require_codegen();
var error3 = {
    message: ({ schemaCode })=>(0, codegen_1.str)`must match format "${schemaCode}"`,
    params: ({ schemaCode })=>(0, codegen_1._)`{format: ${schemaCode}}`
};
var def = {
    keyword: "format",
    type: [
        "number",
        "string"
    ],
    schemaType: "string",
    $data: true,
    error: error3,
    code (cxt, ruleType) {
        const { gen, data, $data, schema: schema2, schemaCode, it: it2 } = cxt;
        const { opts, errSchemaPath, schemaEnv, self: self2 } = it2;
        if (!opts.validateFormats) return;
        if ($data) validate$DataFormat();
        else validateFormat();
        function validate$DataFormat() {
            const fmts = gen.scopeValue("formats", {
                ref: self2.formats,
                code: opts.code.formats
            });
            const fDef = gen.const("fDef", (0, codegen_1._)`${fmts}[${schemaCode}]`);
            const fType = gen.let("fType");
            const format2 = gen.let("format");
            gen.if((0, codegen_1._)`typeof ${fDef} == "object" && !(${fDef} instanceof RegExp)`, ()=>gen.assign(fType, (0, codegen_1._)`${fDef}.type || "string"`).assign(format2, (0, codegen_1._)`${fDef}.validate`), ()=>gen.assign(fType, (0, codegen_1._)`"string"`).assign(format2, fDef));
            cxt.fail$data((0, codegen_1.or)(unknownFmt(), invalidFmt()));
            function unknownFmt() {
                if (opts.strictSchema === false) return codegen_1.nil;
                return (0, codegen_1._)`${schemaCode} && !${format2}`;
            }
            function invalidFmt() {
                const callFormat = schemaEnv.$async ? (0, codegen_1._)`(${fDef}.async ? await ${format2}(${data}) : ${format2}(${data}))` : (0, codegen_1._)`${format2}(${data})`;
                const validData = (0, codegen_1._)`(typeof ${format2} == "function" ? ${callFormat} : ${format2}.test(${data}))`;
                return (0, codegen_1._)`${format2} && ${format2} !== true && ${fType} === ${ruleType} && !${validData}`;
            }
        }
        function validateFormat() {
            const formatDef = self2.formats[schema2];
            if (!formatDef) {
                unknownFormat();
                return;
            }
            if (formatDef === true) return;
            const [fmtType, format2, fmtRef] = getFormat2(formatDef);
            if (fmtType === ruleType) cxt.pass(validCondition());
            function unknownFormat() {
                if (opts.strictSchema === false) {
                    self2.logger.warn(unknownMsg());
                    return;
                }
                throw new Error(unknownMsg());
                function unknownMsg() {
                    return `unknown format "${schema2}" ignored in schema at path "${errSchemaPath}"`;
                }
            }
            function getFormat2(fmtDef) {
                const code = fmtDef instanceof RegExp ? (0, codegen_1.regexpCode)(fmtDef) : opts.code.formats ? (0, codegen_1._)`${opts.code.formats}${(0, codegen_1.getProperty)(schema2)}` : void 0;
                const fmt = gen.scopeValue("formats", {
                    key: schema2,
                    ref: fmtDef,
                    code
                });
                if (typeof fmtDef == "object" && !(fmtDef instanceof RegExp)) {
                    return [
                        fmtDef.type || "string",
                        fmtDef.validate,
                        (0, codegen_1._)`${fmt}.validate`
                    ];
                }
                return [
                    "string",
                    fmtDef,
                    fmt
                ];
            }
            function validCondition() {
                if (typeof formatDef == "object" && !(formatDef instanceof RegExp) && formatDef.async) {
                    if (!schemaEnv.$async) throw new Error("async format in sync schema");
                    return (0, codegen_1._)`await ${fmtRef}(${data})`;
                }
                return typeof format2 == "function" ? (0, codegen_1._)`${fmtRef}(${data})` : (0, codegen_1._)`${fmtRef}.test(${data})`;
            }
        }
    }
};
exports2.default = def;

return exports2;
}
