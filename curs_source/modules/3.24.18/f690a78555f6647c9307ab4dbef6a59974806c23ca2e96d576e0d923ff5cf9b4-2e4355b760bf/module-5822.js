"use strict";
function t(e, t) {
    const n = r(e);
    return t ? n : (0, exports.safeObjectProperty)(c(n));
}
function n(e) {
    return t(e, !1);
}
function r(e) {
    let A = !1;
    const t = [];
    for(let n = 0; n < e.length; n++){
        let r = e.charAt(n);
        switch(r){
            case "_":
                A = !0;
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
                t.push(r), A = !1;
                break;
            default:
                A && (A = !1, r = r.toUpperCase()), t.push(r);
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
            return n(e.name);
        case "enum":
        case "message":
        case "service":
        case "extension":
            {
                const t = e.file.proto.package, n = void 0 === t ? 0 : t.length + 1, r = e.typeName.substring(n).replace(/\./g, "_");
                return (0, exports.safeObjectProperty)((0, exports.safeIdentifier)(r));
            }
        case "enum_value":
            {
                let t = e.name;
                const n = e.parent.sharedPrefix;
                return void 0 !== n && (t = t.substring(n.length)), (0, exports.safeObjectProperty)(t);
            }
        case "rpc":
            {
                let t = e.name;
                return 0 == t.length ? t : (t = t[0].toLowerCase() + t.substring(1), (0, exports.safeObjectProperty)(t));
            }
    }
}, exports.localFieldName = t, exports.localOneofName = n, exports.fieldJsonName = r, exports.findEnumSharedPrefix = function(e, A) {
    const t = ((n = e).substring(0, 1) + n.substring(1).replace(/[A-Z]/g, (e)=>"_" + e)).toLowerCase() + "_";
    var n;
    for (const e of A){
        if (!e.toLowerCase().startsWith(t)) return;
        const A = e.substring(t.length);
        if (0 == A.length) return;
        if (/^\d/.test(A)) return;
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
]), s = new Set([
    "constructor",
    "toString",
    "toJSON",
    "valueOf"
]), a = new Set([
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
]), i = (e)=>`${e}$`, c = (e)=>a.has(e) ? i(e) : e;
exports.safeObjectProperty = (e)=>s.has(e) ? i(e) : e;
exports.safeIdentifier = (e)=>o.has(e) ? i(e) : e;
