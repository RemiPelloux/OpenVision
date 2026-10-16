Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.filterUnknownFields = exports.createExtensionContainer = exports.makeExtension = void 0;
const s = require("./module-1455.js");
exports.makeExtension = function(e, a, n, s) {
    let o;
    return {
        typeName: a,
        extendee: n,
        get field () {
            if (!o) {
                const n = "function" == typeof s ? s() : s;
                n.name = a.split(".").pop(), n.jsonName = `[${a}]`, o = e.util.newFieldList([
                    n
                ]).list()[0];
            }
            return o;
        },
        runtime: e
    };
}, exports.createExtensionContainer = function(e) {
    const a = e.field.localName, n = Object.create(null);
    return n[a] = function(e) {
        const a = e.field;
        if (a.repeated) return [];
        if (void 0 !== a.default) return a.default;
        switch(a.kind){
            case "enum":
                return a.T.values[0].no;
            case "scalar":
                return (0, s.scalarZeroValue)(a.T, a.L);
            case "message":
                const e = a.T, n = new e;
                return e.fieldWrapper ? e.fieldWrapper.unwrapField(n) : n;
            case "map":
                throw "map fields are not allowed to be extensions";
        }
    }(e), [
        n,
        ()=>n[a]
    ];
}, exports.filterUnknownFields = function(e, a) {
    if (!a.repeated && ("enum" == a.kind || "scalar" == a.kind)) {
        for(let n = e.length - 1; n >= 0; --n)if (e[n].no == a.no) return [
            e[n]
        ];
        return [];
    }
    return e.filter((e)=>e.no === a.no);
};
