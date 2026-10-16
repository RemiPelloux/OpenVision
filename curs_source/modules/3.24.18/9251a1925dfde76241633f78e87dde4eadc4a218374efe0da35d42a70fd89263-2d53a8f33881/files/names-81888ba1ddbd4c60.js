var __wakaru_require_names_cache;
export function require_names() {
if (__wakaru_require_names_cache) return __wakaru_require_names_cache;
var exports2 = {};
__wakaru_require_names_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.safeIdentifier = exports2.safeObjectProperty = exports2.findEnumSharedPrefix = exports2.fieldJsonName = exports2.localOneofName = exports2.localFieldName = exports2.localName = void 0;
function localName(desc) {
    switch(desc.kind){
        case "field":
            return localFieldName2(desc.name, desc.oneof !== void 0);
        case "oneof":
            return localOneofName2(desc.name);
        case "enum":
        case "message":
        case "service":
        case "extension":
            {
                const pkg = desc.file.proto.package;
                const offset = pkg === void 0 ? 0 : pkg.length + 1;
                const name17 = desc.typeName.substring(offset).replace(/\./g, "_");
                return (0, exports2.safeObjectProperty)((0, exports2.safeIdentifier)(name17));
            }
        case "enum_value":
            {
                let name17 = desc.name;
                const sharedPrefix = desc.parent.sharedPrefix;
                if (sharedPrefix !== void 0) {
                    name17 = name17.substring(sharedPrefix.length);
                }
                return (0, exports2.safeObjectProperty)(name17);
            }
        case "rpc":
            {
                let name17 = desc.name;
                if (name17.length == 0) {
                    return name17;
                }
                name17 = name17[0].toLowerCase() + name17.substring(1);
                return (0, exports2.safeObjectProperty)(name17);
            }
    }
}
exports2.localName = localName;
function localFieldName2(protoName, inOneof) {
    const name17 = protoCamelCase2(protoName);
    if (inOneof) {
        return name17;
    }
    return (0, exports2.safeObjectProperty)(safeMessageProperty2(name17));
}
exports2.localFieldName = localFieldName2;
function localOneofName2(protoName) {
    return localFieldName2(protoName, false);
}
exports2.localOneofName = localOneofName2;
exports2.fieldJsonName = protoCamelCase2;
function findEnumSharedPrefix(enumName, valueNames) {
    const prefix = camelToSnakeCase(enumName) + "_";
    for (const name17 of valueNames){
        if (!name17.toLowerCase().startsWith(prefix)) {
            return void 0;
        }
        const shortName = name17.substring(prefix.length);
        if (shortName.length == 0) {
            return void 0;
        }
        if (/^\d/.test(shortName)) {
            return void 0;
        }
    }
    return prefix;
}
exports2.findEnumSharedPrefix = findEnumSharedPrefix;
function camelToSnakeCase(camel) {
    return (camel.substring(0, 1) + camel.substring(1).replace(/[A-Z]/g, (c)=>"_" + c)).toLowerCase();
}
function protoCamelCase2(snakeCase) {
    let capNext = false;
    const b2 = [];
    for(let i = 0; i < snakeCase.length; i++){
        let c = snakeCase.charAt(i);
        switch(c){
            case "_":
                capNext = true;
                break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                b2.push(c);
                capNext = false;
                break;
            default:
                if (capNext) {
                    capNext = false;
                    c = c.toUpperCase();
                }
                b2.push(c);
                break;
        }
    }
    return b2.join("");
}
var reservedIdentifiers = new Set([
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "else",
    "export",
    "extends",
    "false",
    "finally",
    "for",
    "function",
    "if",
    "import",
    "in",
    "instanceof",
    "new",
    "null",
    "return",
    "super",
    "switch",
    "this",
    "throw",
    "true",
    "try",
    "typeof",
    "var",
    "void",
    "while",
    "with",
    "yield",
    "enum",
    "implements",
    "interface",
    "let",
    "package",
    "private",
    "protected",
    "public",
    "static",
    "Object",
    "bigint",
    "number",
    "boolean",
    "string",
    "object",
    "globalThis",
    "Uint8Array",
    "Partial"
]);
var reservedObjectProperties2 = new Set([
    "constructor",
    "toString",
    "toJSON",
    "valueOf"
]);
var reservedMessageProperties2 = new Set([
    "getType",
    "clone",
    "equals",
    "fromBinary",
    "fromJson",
    "fromJsonString",
    "toBinary",
    "toJson",
    "toJsonString",
    "toObject"
]);
var fallback3 = (name17)=>`${name17}$`;
var safeMessageProperty2 = (name17)=>{
    if (reservedMessageProperties2.has(name17)) {
        return fallback3(name17);
    }
    return name17;
};
var safeObjectProperty2 = (name17)=>{
    if (reservedObjectProperties2.has(name17)) {
        return fallback3(name17);
    }
    return name17;
};
exports2.safeObjectProperty = safeObjectProperty2;
var safeIdentifier = (name17)=>{
    if (reservedIdentifiers.has(name17)) {
        return fallback3(name17);
    }
    return name17;
};
exports2.safeIdentifier = safeIdentifier;

return exports2;
}
