"use strict";
function A(e, A) {
    const n = r(e);
    return A ? n : (0, exports.safeObjectProperty)(c(n));
}
function n(e) {
    return A(e, !1);
}
function r(e) {
    let t = !1;
    const A = [];
    for(let n = 0; n < e.length; n++){
        let r = e.charAt(n);
        switch(r){
            case "_":
                t = !0;
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
                A.push(r), t = !1;
                break;
            default:
                t && (t = !1, r = r.toUpperCase()), A.push(r);
        }
    }
    return A.join("");
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.safeIdentifier = exports.safeObjectProperty = exports.findEnumSharedPrefix = exports.fieldJsonName = exports.localOneofName = exports.localFieldName = exports.localName = void 0, exports.localName = function(e) {
    switch(e.kind){
        case "field":
            return A(e.name, void 0 !== e.oneof);
        case "oneof":
            return n(e.name);
        case "enum":
        case "message":
        case "service":
        case "extension":
            {
                const A = e.file.proto.package, n = void 0 === A ? 0 : A.length + 1, r = e.typeName.substring(n).replace(/\./g, "_");
                return (0, exports.safeObjectProperty)((0, exports.safeIdentifier)(r));
            }
        case "enum_value":
            {
                let A = e.name;
                const n = e.parent.sharedPrefix;
                return void 0 !== n && (A = A.substring(n.length)), (0, exports.safeObjectProperty)(A);
            }
        case "rpc":
            {
                let A = e.name;
                return 0 == A.length ? A : (A = A[0].toLowerCase() + A.substring(1), (0, exports.safeObjectProperty)(A));
            }
    }
}, exports.localFieldName = A, exports.localOneofName = n, exports.fieldJsonName = r, exports.findEnumSharedPrefix = function(e, t) {
    const A = ((n = e).substring(0, 1) + n.substring(1).replace(/[A-Z]/g, (e)=>"_" + e)).toLowerCase() + "_";
    var n;
    for (const e of t){
        if (!e.toLowerCase().startsWith(A)) return;
        const t = e.substring(A.length);
        if (0 == t.length) return;
        if (/^\d/.test(t)) return;
    }
    return A;
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
]), a = (e)=>`${e}$`, c = (e)=>i.has(e) ? a(e) : e;
exports.safeObjectProperty = (e)=>s.has(e) ? a(e) : e;
exports.safeIdentifier = (e)=>o.has(e) ? a(e) : e;
