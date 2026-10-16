import { require_scalars } from "./scalars.js";
var __wakaru_require_extensions_cache;
export function require_extensions() {
if (__wakaru_require_extensions_cache) return __wakaru_require_extensions_cache;
var exports2 = {};
__wakaru_require_extensions_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.filterUnknownFields = exports2.createExtensionContainer = exports2.makeExtension = void 0;
var scalars_js_1 = require_scalars();
function makeExtension2(runtime, typeName, extendee, field4) {
    let fi2;
    return {
        typeName,
        extendee,
        get field () {
            if (!fi2) {
                const i = typeof field4 == "function" ? field4() : field4;
                i.name = typeName.split(".").pop();
                i.jsonName = `[${typeName}]`;
                fi2 = runtime.util.newFieldList([
                    i
                ]).list()[0];
            }
            return fi2;
        },
        runtime
    };
}
exports2.makeExtension = makeExtension2;
function createExtensionContainer2(extension3) {
    const localName = extension3.field.localName;
    const container = Object.create(null);
    container[localName] = initExtensionField2(extension3);
    return [
        container,
        ()=>container[localName]
    ];
}
exports2.createExtensionContainer = createExtensionContainer2;
function initExtensionField2(ext2) {
    const field4 = ext2.field;
    if (field4.repeated) {
        return [];
    }
    if (field4.default !== void 0) {
        return field4.default;
    }
    switch(field4.kind){
        case "enum":
            return field4.T.values[0].no;
        case "scalar":
            return (0, scalars_js_1.scalarZeroValue)(field4.T, field4.L);
        case "message":
            const T = field4.T, value = new T();
            return T.fieldWrapper ? T.fieldWrapper.unwrapField(value) : value;
        case "map":
            throw "map fields are not allowed to be extensions";
    }
}
function filterUnknownFields2(unknownFields, field4) {
    if (!field4.repeated && (field4.kind == "enum" || field4.kind == "scalar")) {
        for(let i = unknownFields.length - 1; i >= 0; --i){
            if (unknownFields[i].no == field4.no) {
                return [
                    unknownFields[i]
                ];
            }
        }
        return [];
    }
    return unknownFields.filter((uf)=>uf.no === field4.no);
}
exports2.filterUnknownFields = filterUnknownFields2;

return exports2;
}
