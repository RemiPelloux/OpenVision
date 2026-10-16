function n(e, n) {
    const r = o(e);
    return n ? r : (0, exports.safeObjectProperty)(u(r));
}
function r(e) {
    return n(e, !1);
}
function o(e) {
    let t = !1;
    const n = [];
    for(let r = 0; r < e.length; r++){
        let o = e.charAt(r);
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
                n.push(o), t = !1;
                break;
            default:
                t && (t = !1, o = o.toUpperCase()), n.push(o);
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
            return r(e.name);
        case "enum":
        case "message":
        case "service":
        case "extension":
            {
                const n = e.file.proto.package, r = void 0 === n ? 0 : n.length + 1, o = e.typeName.substring(r).replace(/\./g, "_");
                return (0, exports.safeObjectProperty)((0, exports.safeIdentifier)(o));
            }
        case "enum_value":
            {
                let n = e.name;
                const r = e.parent.sharedPrefix;
                return void 0 !== r && (n = n.substring(r.length)), (0, exports.safeObjectProperty)(n);
            }
        case "rpc":
            {
                let n = e.name;
                return 0 == n.length ? n : (n = n[0].toLowerCase() + n.substring(1), (0, exports.safeObjectProperty)(n));
            }
    }
}, exports.localFieldName = n, exports.localOneofName = r, exports.fieldJsonName = o, exports.findEnumSharedPrefix = function(e, t) {
    const n = ((r = e).substring(0, 1) + r.substring(1).replace(/[A-Z]/g, (e)=>"_" + e)).toLowerCase() + "_";
    var r;
    for (const e of t){
        if (!e.toLowerCase().startsWith(n)) return;
        const t = e.substring(n.length);
        if (0 == t.length) return;
        if (/^\d/.test(t)) return;
    }
    return n;
};
const a = new Set([
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
]), l = (e)=>`${e}$`, u = (e)=>i.has(e) ? l(e) : e;
exports.safeObjectProperty = (e)=>s.has(e) ? l(e) : e;
exports.safeIdentifier = (e)=>a.has(e) ? l(e) : e;
