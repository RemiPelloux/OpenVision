"use strict";
function t(e, t) {
    const a = s(e);
    return t ? a : (0, exports.safeObjectProperty)(c(a));
}
function a(e) {
    return t(e, !1);
}
function s(e) {
    let n = !1;
    const t = [];
    for(let a = 0; a < e.length; a++){
        let s = e.charAt(a);
        switch(s){
            case "_":
                n = !0;
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
                t.push(s), n = !1;
                break;
            default:
                n && (n = !1, s = s.toUpperCase()), t.push(s);
        }
    }
    return t.join("");
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.safeIdentifier = exports.safeObjectProperty = exports.findEnumSharedPrefix = exports.fieldJsonName = exports.localOneofName = exports.localFieldName = exports.localName = void 0, exports.localName = function(e) {
    switch(e.kind){
        case "field":
            return t(e.name, void 0 !== e.oneof);
        case "oneof":
            return a(e.name);
        case "enum":
        case "message":
        case "service":
        case "extension":
            {
                const t = e.file.proto.package, a = void 0 === t ? 0 : t.length + 1, s = e.typeName.substring(a).replace(/\./g, "_");
                return (0, exports.safeObjectProperty)((0, exports.safeIdentifier)(s));
            }
        case "enum_value":
            {
                let t = e.name;
                const a = e.parent.sharedPrefix;
                return void 0 !== a && (t = t.substring(a.length)), (0, exports.safeObjectProperty)(t);
            }
        case "rpc":
            {
                let t = e.name;
                return 0 == t.length ? t : (t = t[0].toLowerCase() + t.substring(1), (0, exports.safeObjectProperty)(t));
            }
    }
}, exports.localFieldName = t, exports.localOneofName = a, exports.fieldJsonName = s, exports.findEnumSharedPrefix = function(e, n) {
    const t = ((a = e).substring(0, 1) + a.substring(1).replace(/[A-Z]/g, (e)=>"_" + e)).toLowerCase() + "_";
    var a;
    for (const e of n){
        if (!e.toLowerCase().startsWith(t)) return;
        const n = e.substring(t.length);
        if (0 == n.length) return;
        if (/^\d/.test(n)) return;
    }
    return t;
};
const o = new Set([
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
]), r = new Set([
    "constructor",
    "toString",
    "toJSON",
    "valueOf"
]), i = new Set([
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
]), A = (e)=>`${e}$`, c = (e)=>i.has(e) ? A(e) : e;
exports.safeObjectProperty = (e)=>r.has(e) ? A(e) : e;
exports.safeIdentifier = (e)=>o.has(e) ? A(e) : e;
