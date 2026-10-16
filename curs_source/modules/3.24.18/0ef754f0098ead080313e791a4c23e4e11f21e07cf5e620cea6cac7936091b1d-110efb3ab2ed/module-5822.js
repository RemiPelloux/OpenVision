"use strict";
function n(e, n) {
    const t = s(e);
    return n ? t : (0, exports.safeObjectProperty)(d(t));
}
function t(e) {
    return n(e, !1);
}
function s(e) {
    let a = !1;
    const n = [];
    for(let t = 0; t < e.length; t++){
        let s = e.charAt(t);
        switch(s){
            case "_":
                a = !0;
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
                n.push(s), a = !1;
                break;
            default:
                a && (a = !1, s = s.toUpperCase()), n.push(s);
        }
    }
    return n.join("");
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.safeIdentifier = exports.safeObjectProperty = exports.findEnumSharedPrefix = exports.fieldJsonName = exports.localOneofName = exports.localFieldName = exports.localName = void 0, exports.localName = function(e) {
    switch(e.kind){
        case "field":
            return n(e.name, void 0 !== e.oneof);
        case "oneof":
            return t(e.name);
        case "enum":
        case "message":
        case "service":
        case "extension":
            {
                const n = e.file.proto.package, t = void 0 === n ? 0 : n.length + 1, s = e.typeName.substring(t).replace(/\./g, "_");
                return (0, exports.safeObjectProperty)((0, exports.safeIdentifier)(s));
            }
        case "enum_value":
            {
                let n = e.name;
                const t = e.parent.sharedPrefix;
                return void 0 !== t && (n = n.substring(t.length)), (0, exports.safeObjectProperty)(n);
            }
        case "rpc":
            {
                let n = e.name;
                return 0 == n.length ? n : (n = n[0].toLowerCase() + n.substring(1), (0, exports.safeObjectProperty)(n));
            }
    }
}, exports.localFieldName = n, exports.localOneofName = t, exports.fieldJsonName = s, exports.findEnumSharedPrefix = function(e, a) {
    const n = ((t = e).substring(0, 1) + t.substring(1).replace(/[A-Z]/g, (e)=>"_" + e)).toLowerCase() + "_";
    var t;
    for (const e of a){
        if (!e.toLowerCase().startsWith(n)) return;
        const a = e.substring(n.length);
        if (0 == a.length) return;
        if (/^\d/.test(a)) return;
    }
    return n;
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
]), l = (e)=>`${e}$`, d = (e)=>i.has(e) ? l(e) : e;
exports.safeObjectProperty = (e)=>r.has(e) ? l(e) : e;
exports.safeIdentifier = (e)=>o.has(e) ? l(e) : e;
