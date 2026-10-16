"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.filterUnknownFields = exports.createExtensionContainer = exports.makeExtension = void 0;
const a = require("./module-1455.js");
exports.makeExtension = function(e, n, t, a) {
    let s;
    return {
        typeName: n,
        extendee: t,
        get field () {
            if (!s) {
                const t = "function" == typeof a ? a() : a;
                t.name = n.split(".").pop(), t.jsonName = `[${n}]`, s = e.util.newFieldList([
                    t
                ]).list()[0];
            }
            return s;
        },
        runtime: e
    };
}, exports.createExtensionContainer = function(e) {
    const n = e.field.localName, t = Object.create(null);
    return t[n] = function(e) {
        const n = e.field;
        if (n.repeated) return [];
        if (void 0 !== n.default) return n.default;
        switch(n.kind){
            case "enum":
                return n.T.values[0].no;
            case "scalar":
                return (0, a.scalarZeroValue)(n.T, n.L);
            case "message":
                const e = n.T, t = new e;
                return e.fieldWrapper ? e.fieldWrapper.unwrapField(t) : t;
            case "map":
                throw "map fields are not allowed to be extensions";
        }
    }(e), [
        t,
        ()=>t[n]
    ];
}, exports.filterUnknownFields = function(e, n) {
    if (!n.repeated && ("enum" == n.kind || "scalar" == n.kind)) {
        for(let t = e.length - 1; t >= 0; --t)if (e[t].no == n.no) return [
            e[t]
        ];
        return [];
    }
    return e.filter((e)=>e.no === n.no);
};
