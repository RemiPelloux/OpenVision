"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.filterUnknownFields = exports.createExtensionContainer = exports.makeExtension = void 0;
const t = require("./module-1455.js");
exports.makeExtension = function(e, n, a, t) {
    let s;
    return {
        typeName: n,
        extendee: a,
        get field () {
            if (!s) {
                const a = "function" == typeof t ? t() : t;
                a.name = n.split(".").pop(), a.jsonName = `[${n}]`, s = e.util.newFieldList([
                    a
                ]).list()[0];
            }
            return s;
        },
        runtime: e
    };
}, exports.createExtensionContainer = function(e) {
    const n = e.field.localName, a = Object.create(null);
    return a[n] = function(e) {
        const n = e.field;
        if (n.repeated) return [];
        if (void 0 !== n.default) return n.default;
        switch(n.kind){
            case "enum":
                return n.T.values[0].no;
            case "scalar":
                return (0, t.scalarZeroValue)(n.T, n.L);
            case "message":
                const e = n.T, a = new e;
                return e.fieldWrapper ? e.fieldWrapper.unwrapField(a) : a;
            case "map":
                throw "map fields are not allowed to be extensions";
        }
    }(e), [
        a,
        ()=>a[n]
    ];
}, exports.filterUnknownFields = function(e, n) {
    if (!n.repeated && ("enum" == n.kind || "scalar" == n.kind)) {
        for(let a = e.length - 1; a >= 0; --a)if (e[a].no == n.no) return [
            e[a]
        ];
        return [];
    }
    return e.filter((e)=>e.no === n.no);
};
