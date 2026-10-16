import { require_formats } from "./formats.js";
import { require_limit } from "./limit.js";
import { require_codegen } from "../../../../ajv@8.18.0/node_modules/ajv/dist/compile/codegen/index.js";
var __wakaru_require_dist2_cache;
export function require_dist2() {
if (__wakaru_require_dist2_cache) return __wakaru_require_dist2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_dist2_cache = module2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var formats_1 = require_formats();
var limit_1 = require_limit();
var codegen_1 = require_codegen();
var fullName = new codegen_1.Name("fullFormats");
var fastName = new codegen_1.Name("fastFormats");
var formatsPlugin = (ajv2, opts = {
    keywords: true
})=>{
    if (Array.isArray(opts)) {
        addFormats(ajv2, opts, formats_1.fullFormats, fullName);
        return ajv2;
    }
    const [formats, exportName] = opts.mode === "fast" ? [
        formats_1.fastFormats,
        fastName
    ] : [
        formats_1.fullFormats,
        fullName
    ];
    const list2 = opts.formats || formats_1.formatNames;
    addFormats(ajv2, list2, formats, exportName);
    if (opts.keywords) (0, limit_1.default)(ajv2);
    return ajv2;
};
formatsPlugin.get = (name17, mode = "full")=>{
    const formats = mode === "fast" ? formats_1.fastFormats : formats_1.fullFormats;
    const f2 = formats[name17];
    if (!f2) throw new Error(`Unknown format "${name17}"`);
    return f2;
};
function addFormats(ajv2, list2, fs39, exportName) {
    var _a18;
    var _b2;
    (_a18 = (_b2 = ajv2.opts.code).formats) !== null && _a18 !== void 0 ? _a18 : _b2.formats = (0, codegen_1._)`require("ajv-formats/dist/formats").${exportName}`;
    for (const f2 of list2)ajv2.addFormat(f2, fs39[f2]);
}
module2.exports = exports2 = formatsPlugin;
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.default = formatsPlugin;

return module2.exports;
}
