Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.filterUnknownFields = exports.createExtensionContainer = exports.makeExtension = void 0;
const r = require("./module-455.js");
exports.makeExtension = function(e, t, n, r) {
    let o;
    return {
        typeName: t,
        extendee: n,
        get field () {
            if (!o) {
                const n = "function" == typeof r ? r() : r;
                n.name = t.split(".").pop(), n.jsonName = `[${t}]`, o = e.util.newFieldList([
                    n
                ]).list()[0];
            }
            return o;
        },
        runtime: e
    };
}, exports.createExtensionContainer = function(e) {
    const t = e.field.localName, n = Object.create(null);
    return n[t] = function(e) {
        const t = e.field;
        if (t.repeated) return [];
        if (void 0 !== t.default) return t.default;
        switch(t.kind){
            case "enum":
                return t.T.values[0].no;
            case "scalar":
                return (0, r.scalarZeroValue)(t.T, t.L);
            case "message":
                const e = t.T, n = new e;
                return e.fieldWrapper ? e.fieldWrapper.unwrapField(n) : n;
            case "map":
                throw "map fields are not allowed to be extensions";
        }
    }(e), [
        n,
        ()=>n[t]
    ];
}, exports.filterUnknownFields = function(e, t) {
    if (!t.repeated && ("enum" == t.kind || "scalar" == t.kind)) {
        for(let n = e.length - 1; n >= 0; --n)if (e[n].no == t.no) return [
            e[n]
        ];
        return [];
    }
    return e.filter((e)=>e.no === t.no);
};
