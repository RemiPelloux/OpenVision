require.r(exports);
require.d(exports, {
    fieldJsonName: ()=>fieldJsonName,
    findEnumSharedPrefix: ()=>findEnumSharedPrefix,
    localFieldName: ()=>localFieldName,
    localName: ()=>localName,
    localOneofName: ()=>localOneofName,
    safeIdentifier: ()=>safeIdentifier,
    safeObjectProperty: ()=>safeObjectProperty
});
function localName(desc) {
    switch(desc.kind){
        case "field":
            return localFieldName(desc.name, desc.oneof !== void 0);
        case "oneof":
            return localOneofName(desc.name);
        case "enum":
        case "message":
        case "service":
        case "extension":
            {
                const pkg = desc.file.proto.package;
                const offset = pkg === void 0 ? 0 : pkg.length + 1;
                const name = desc.typeName.substring(offset).replace(/\./g, "_");
                return safeObjectProperty(safeIdentifier(name));
            }
        case "enum_value":
            {
                let name = desc.name;
                const sharedPrefix = desc.parent.sharedPrefix;
                if (sharedPrefix !== void 0) {
                    name = name.substring(sharedPrefix.length);
                }
                return safeObjectProperty(name);
            }
        case "rpc":
            {
                let name = desc.name;
                if (name.length == 0) {
                    return name;
                }
                name = name[0].toLowerCase() + name.substring(1);
                return safeObjectProperty(name);
            }
    }
}
function localFieldName(protoName, inOneof) {
    const name = protoCamelCase(protoName);
    if (inOneof) {
        return name;
    }
    return safeObjectProperty(safeMessageProperty(name));
}
function localOneofName(protoName) {
    return localFieldName(protoName, false);
}
const fieldJsonName = protoCamelCase;
function findEnumSharedPrefix(enumName, valueNames) {
    const prefix = camelToSnakeCase(enumName) + "_";
    for (const name of valueNames){
        if (!name.toLowerCase().startsWith(prefix)) {
            return void 0;
        }
        const shortName = name.substring(prefix.length);
        if (shortName.length == 0) {
            return void 0;
        }
        if (/^\d/.test(shortName)) {
            return void 0;
        }
    }
    return prefix;
}
function camelToSnakeCase(camel) {
    return (camel.substring(0, 1) + camel.substring(1).replace(/[A-Z]/g, (c)=>"_" + c)).toLowerCase();
}
function protoCamelCase(snakeCase) {
    let capNext = false;
    const b = [];
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
                b.push(c);
                capNext = false;
                break;
            default:
                if (capNext) {
                    capNext = false;
                    c = c.toUpperCase();
                }
                b.push(c);
                break;
        }
    }
    return b.join("");
}
const reservedIdentifiers = new Set([
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
const reservedObjectProperties = new Set([
    "constructor",
    "toString",
    "toJSON",
    "valueOf"
]);
const reservedMessageProperties = new Set([
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
const fallback = (name)=>`${name}$`;
const safeMessageProperty = (name)=>{
    if (reservedMessageProperties.has(name)) {
        return fallback(name);
    }
    return name;
};
const safeObjectProperty = (name)=>{
    if (reservedObjectProperties.has(name)) {
        return fallback(name);
    }
    return name;
};
const safeIdentifier = (name)=>{
    if (reservedIdentifiers.has(name)) {
        return fallback(name);
    }
    return name;
};
