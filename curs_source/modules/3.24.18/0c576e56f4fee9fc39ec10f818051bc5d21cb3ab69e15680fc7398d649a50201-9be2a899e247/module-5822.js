"use strict";
function r(e, r) {
    const n = o(e);
    return r ? n : (0, exports.safeObjectProperty)(u(n));
}
function n(e) {
    return r(e, !1);
}
function o(e) {
    let t = !1;
    const r = [];
    for(let n = 0; n < e.length; n++){
        let o = e.charAt(n);
        switch(o){
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
                r.push(o), t = !1;
                break;
            default:
                t && (t = !1, o = o.toUpperCase()), r.push(o);
        }
    }
    return r.join("");
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.safeIdentifier = exports.safeObjectProperty = exports.findEnumSharedPrefix = exports.fieldJsonName = exports.localOneofName = exports.localFieldName = exports.localName = void 0, exports.localName = function(e) {
    switch(e.kind){
        case "field":
            return r(e.name, void 0 !== e.oneof);
        case "oneof":
            return n(e.name);
        case "enum":
        case "message":
        case "service":
        case "extension":
            {
                const r = e.file.proto.package, n = void 0 === r ? 0 : r.length + 1, o = e.typeName.substring(n).replace(/\./g, "_");
                return (0, exports.safeObjectProperty)((0, exports.safeIdentifier)(o));
            }
        case "enum_value":
            {
                let r = e.name;
                const n = e.parent.sharedPrefix;
                return void 0 !== n && (r = r.substring(n.length)), (0, exports.safeObjectProperty)(r);
            }
        case "rpc":
            {
                let r = e.name;
                return 0 == r.length ? r : (r = r[0].toLowerCase() + r.substring(1), (0, exports.safeObjectProperty)(r));
            }
    }
}, exports.localFieldName = r, exports.localOneofName = n, exports.fieldJsonName = o, exports.findEnumSharedPrefix = function(e, t) {
    const r = ((n = e).substring(0, 1) + n.substring(1).replace(/[A-Z]/g, (e)=>"_" + e)).toLowerCase() + "_";
    var n;
    for (const e of t){
        if (!e.toLowerCase().startsWith(r)) return;
        const t = e.substring(r.length);
        if (0 == t.length) return;
        if (/^\d/.test(t)) return;
    }
    return r;
};
const s = new Set([
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
]), i = new Set([
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
]), c = (e)=>`${e}$`, u = (e)=>a.has(e) ? c(e) : e;
exports.safeObjectProperty = (e)=>i.has(e) ? c(e) : e;
exports.safeIdentifier = (e)=>s.has(e) ? c(e) : e;
