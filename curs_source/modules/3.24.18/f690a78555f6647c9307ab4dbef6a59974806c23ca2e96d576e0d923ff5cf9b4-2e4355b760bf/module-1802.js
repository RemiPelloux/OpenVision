"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.filterUnknownFields = exports.createExtensionContainer = exports.makeExtension = void 0;
const n = require("./module-1455.js");
exports.makeExtension = function(e, A, t, n) {
    let r;
    return {
        typeName: A,
        extendee: t,
        get field () {
            if (!r) {
                const t = "function" == typeof n ? n() : n;
                t.name = A.split(".").pop(), t.jsonName = `[${A}]`, r = e.util.newFieldList([
                    t
                ]).list()[0];
            }
            return r;
        },
        runtime: e
    };
}, exports.createExtensionContainer = function(e) {
    const A = e.field.localName, t = Object.create(null);
    return t[A] = function(e) {
        const A = e.field;
        if (A.repeated) return [];
        if (void 0 !== A.default) return A.default;
        switch(A.kind){
            case "enum":
                return A.T.values[0].no;
            case "scalar":
                return (0, n.scalarZeroValue)(A.T, A.L);
            case "message":
                const e = A.T, t = new e;
                return e.fieldWrapper ? e.fieldWrapper.unwrapField(t) : t;
            case "map":
                throw "map fields are not allowed to be extensions";
        }
    }(e), [
        t,
        ()=>t[A]
    ];
}, exports.filterUnknownFields = function(e, A) {
    if (!A.repeated && ("enum" == A.kind || "scalar" == A.kind)) {
        for(let t = e.length - 1; t >= 0; --t)if (e[t].no == A.no) return [
            e[t]
        ];
        return [];
    }
    return e.filter((e)=>e.no === A.no);
};
