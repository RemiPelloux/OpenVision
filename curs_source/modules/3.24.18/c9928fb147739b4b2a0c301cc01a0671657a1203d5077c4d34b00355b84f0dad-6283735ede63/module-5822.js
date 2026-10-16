function n(e, n) {
    const s = o(e);
    return n ? s : (0, exports.safeObjectProperty)(l(s));
}
function s(e) {
    return n(e, !1);
}
function o(e) {
    let a = !1;
    const n = [];
    for(let s = 0; s < e.length; s++){
        let o = e.charAt(s);
        switch(o){
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
                n.push(o), a = !1;
                break;
            default:
                a && (a = !1, o = o.toUpperCase()), n.push(o);
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
            return s(e.name);
        case "enum":
        case "message":
        case "service":
        case "extension":
            {
                const n = e.file.proto.package, s = void 0 === n ? 0 : n.length + 1, o = e.typeName.substring(s).replace(/\./g, "_");
                return (0, exports.safeObjectProperty)((0, exports.safeIdentifier)(o));
            }
        case "enum_value":
            {
                let n = e.name;
                const s = e.parent.sharedPrefix;
                return void 0 !== s && (n = n.substring(s.length)), (0, exports.safeObjectProperty)(n);
            }
        case "rpc":
            {
                let n = e.name;
                return 0 == n.length ? n : (n = n[0].toLowerCase() + n.substring(1), (0, exports.safeObjectProperty)(n));
            }
    }
}, exports.localFieldName = n, exports.localOneofName = s, exports.fieldJsonName = o, exports.findEnumSharedPrefix = function(e, a) {
    const n = ((s = e).substring(0, 1) + s.substring(1).replace(/[A-Z]/g, (e)=>"_" + e)).toLowerCase() + "_";
    var s;
    for (const e of a){
        if (!e.toLowerCase().startsWith(n)) return;
        const a = e.substring(n.length);
        if (0 == a.length) return;
        if (/^\d/.test(a)) return;
    }
    return n;
};
const r = new Set([
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
]), t = new Set([
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
]), m = (e)=>`${e}$`, l = (e)=>i.has(e) ? m(e) : e;
exports.safeObjectProperty = (e)=>t.has(e) ? m(e) : e;
exports.safeIdentifier = (e)=>r.has(e) ? m(e) : e;
