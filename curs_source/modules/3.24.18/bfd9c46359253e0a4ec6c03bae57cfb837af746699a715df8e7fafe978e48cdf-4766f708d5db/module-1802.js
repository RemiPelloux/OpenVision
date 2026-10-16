"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.filterUnknownFields = exports.createExtensionContainer = exports.makeExtension = void 0;
const n = require("./module-31455.js");
exports.makeExtension = function(e, t, r, n) {
    let s;
    return {
        typeName: t,
        extendee: r,
        get field () {
            if (!s) {
                const r = "function" == typeof n ? n() : n;
                r.name = t.split(".").pop(), r.jsonName = `[${t}]`, s = e.util.newFieldList([
                    r
                ]).list()[0];
            }
            return s;
        },
        runtime: e
    };
}, exports.createExtensionContainer = function(e) {
    const t = e.field.localName, r = Object.create(null);
    return r[t] = function(e) {
        const t = e.field;
        if (t.repeated) return [];
        if (void 0 !== t.default) return t.default;
        switch(t.kind){
            case "enum":
                return t.T.values[0].no;
            case "scalar":
                return (0, n.scalarZeroValue)(t.T, t.L);
            case "message":
                const e = t.T, r = new e;
                return e.fieldWrapper ? e.fieldWrapper.unwrapField(r) : r;
            case "map":
                throw "map fields are not allowed to be extensions";
        }
    }(e), [
        r,
        ()=>r[t]
    ];
}, exports.filterUnknownFields = function(e, t) {
    if (!t.repeated && ("enum" == t.kind || "scalar" == t.kind)) {
        for(let r = e.length - 1; r >= 0; --r)if (e[r].no == t.no) return [
            e[r]
        ];
        return [];
    }
    return e.filter((e)=>e.no === t.no);
};
