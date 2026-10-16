"use strict";
function a(e, a) {
    const t = s(e);
    return a ? t : (0, exports.safeObjectProperty)(l(t));
}
function t(e) {
    return a(e, !1);
}
function s(e) {
    let n = !1;
    const a = [];
    for(let t = 0; t < e.length; t++){
        let s = e.charAt(t);
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
                a.push(s), n = !1;
                break;
            default:
                n && (n = !1, s = s.toUpperCase()), a.push(s);
        }
    }
    return a.join("");
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.safeIdentifier = exports.safeObjectProperty = exports.findEnumSharedPrefix = exports.fieldJsonName = exports.localOneofName = exports.localFieldName = exports.localName = void 0, exports.localName = function(e) {
    switch(e.kind){
        case "field":
            return a(e.name, void 0 !== e.oneof);
        case "oneof":
            return t(e.name);
        case "enum":
        case "message":
        case "service":
        case "extension":
            {
                const a = e.file.proto.package, t = void 0 === a ? 0 : a.length + 1, s = e.typeName.substring(t).replace(/\./g, "_");
                return (0, exports.safeObjectProperty)((0, exports.safeIdentifier)(s));
            }
        case "enum_value":
            {
                let a = e.name;
                const t = e.parent.sharedPrefix;
                return void 0 !== t && (a = a.substring(t.length)), (0, exports.safeObjectProperty)(a);
            }
        case "rpc":
            {
                let a = e.name;
                return 0 == a.length ? a : (a = a[0].toLowerCase() + a.substring(1), (0, exports.safeObjectProperty)(a));
            }
    }
}, exports.localFieldName = a, exports.localOneofName = t, exports.fieldJsonName = s, exports.findEnumSharedPrefix = function(e, n) {
    const a = ((t = e).substring(0, 1) + t.substring(1).replace(/[A-Z]/g, (e)=>"_" + e)).toLowerCase() + "_";
    var t;
    for (const e of n){
        if (!e.toLowerCase().startsWith(a)) return;
        const n = e.substring(a.length);
        if (0 == n.length) return;
        if (/^\d/.test(n)) return;
    }
    return a;
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
]), A = (e)=>`${e}$`, l = (e)=>i.has(e) ? A(e) : e;
exports.safeObjectProperty = (e)=>r.has(e) ? A(e) : e;
exports.safeIdentifier = (e)=>o.has(e) ? A(e) : e;
