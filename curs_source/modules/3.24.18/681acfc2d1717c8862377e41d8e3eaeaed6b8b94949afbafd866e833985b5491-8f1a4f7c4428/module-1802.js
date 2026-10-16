"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.filterUnknownFields = exports.createExtensionContainer = exports.makeExtension = void 0;
const n = require("./module-1455.js");
exports.makeExtension = function(e, t, A, n) {
    let r;
    return {
        typeName: t,
        extendee: A,
        get field () {
            if (!r) {
                const A = "function" == typeof n ? n() : n;
                A.name = t.split(".").pop(), A.jsonName = `[${t}]`, r = e.util.newFieldList([
                    A
                ]).list()[0];
            }
            return r;
        },
        runtime: e
    };
}, exports.createExtensionContainer = function(e) {
    const t = e.field.localName, A = Object.create(null);
    return A[t] = function(e) {
        const t = e.field;
        if (t.repeated) return [];
        if (void 0 !== t.default) return t.default;
        switch(t.kind){
            case "enum":
                return t.T.values[0].no;
            case "scalar":
                return (0, n.scalarZeroValue)(t.T, t.L);
            case "message":
                const e = t.T, A = new e;
                return e.fieldWrapper ? e.fieldWrapper.unwrapField(A) : A;
            case "map":
                throw "map fields are not allowed to be extensions";
        }
    }(e), [
        A,
        ()=>A[t]
    ];
}, exports.filterUnknownFields = function(e, t) {
    if (!t.repeated && ("enum" == t.kind || "scalar" == t.kind)) {
        for(let A = e.length - 1; A >= 0; --A)if (e[A].no == t.no) return [
            e[A]
        ];
        return [];
    }
    return e.filter((e)=>e.no === t.no);
};
