"use strict";
function r(t, r) {
    const n = s(t);
    return r ? n : (0, exports.safeObjectProperty)(c(n));
}
function n(t) {
    return r(t, !1);
}
function s(t) {
    let e = !1;
    const r = [];
    for(let n = 0; n < t.length; n++){
        let s = t.charAt(n);
        switch(s){
            case "_":
                e = !0;
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
                r.push(s), e = !1;
                break;
            default:
                e && (e = !1, s = s.toUpperCase()), r.push(s);
        }
    }
    return r.join("");
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.safeIdentifier = exports.safeObjectProperty = exports.findEnumSharedPrefix = exports.fieldJsonName = exports.localOneofName = exports.localFieldName = exports.localName = void 0, exports.localName = function(t) {
    switch(t.kind){
        case "field":
            return r(t.name, void 0 !== t.oneof);
        case "oneof":
            return n(t.name);
        case "enum":
        case "message":
        case "service":
        case "extension":
            {
                const r = t.file.proto.package, n = void 0 === r ? 0 : r.length + 1, s = t.typeName.substring(n).replace(/\./g, "_");
                return (0, exports.safeObjectProperty)((0, exports.safeIdentifier)(s));
            }
        case "enum_value":
            {
                let r = t.name;
                const n = t.parent.sharedPrefix;
                return void 0 !== n && (r = r.substring(n.length)), (0, exports.safeObjectProperty)(r);
            }
        case "rpc":
            {
                let r = t.name;
                return 0 == r.length ? r : (r = r[0].toLowerCase() + r.substring(1), (0, exports.safeObjectProperty)(r));
            }
    }
}, exports.localFieldName = r, exports.localOneofName = n, exports.fieldJsonName = s, exports.findEnumSharedPrefix = function(t, e) {
    const r = ((n = t).substring(0, 1) + n.substring(1).replace(/[A-Z]/g, (t)=>"_" + t)).toLowerCase() + "_";
    var n;
    for (const t of e){
        if (!t.toLowerCase().startsWith(r)) return;
        const e = t.substring(r.length);
        if (0 == e.length) return;
        if (/^\d/.test(e)) return;
    }
    return r;
};
const i = new Set([
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
]), o = new Set([
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
]), u = (t)=>`${t}$`, c = (t)=>a.has(t) ? u(t) : t;
exports.safeObjectProperty = (t)=>o.has(t) ? u(t) : t;
exports.safeIdentifier = (t)=>i.has(t) ? u(t) : t;
