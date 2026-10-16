import { require_codegen } from "./codegen/index.js";
var __wakaru_require_names2_cache;
export function require_names2() {
if (__wakaru_require_names2_cache) return __wakaru_require_names2_cache;
var exports2 = {};
__wakaru_require_names2_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var codegen_1 = require_codegen();
var names3 = {
    data: new codegen_1.Name("data"),
    valCxt: new codegen_1.Name("valCxt"),
    instancePath: new codegen_1.Name("instancePath"),
    parentData: new codegen_1.Name("parentData"),
    parentDataProperty: new codegen_1.Name("parentDataProperty"),
    rootData: new codegen_1.Name("rootData"),
    dynamicAnchors: new codegen_1.Name("dynamicAnchors"),
    vErrors: new codegen_1.Name("vErrors"),
    errors: new codegen_1.Name("errors"),
    this: new codegen_1.Name("this"),
    self: new codegen_1.Name("self"),
    scope: new codegen_1.Name("scope"),
    json: new codegen_1.Name("json"),
    jsonPos: new codegen_1.Name("jsonPos"),
    jsonLen: new codegen_1.Name("jsonLen"),
    jsonPart: new codegen_1.Name("jsonPart")
};
exports2.default = names3;

return exports2;
}
