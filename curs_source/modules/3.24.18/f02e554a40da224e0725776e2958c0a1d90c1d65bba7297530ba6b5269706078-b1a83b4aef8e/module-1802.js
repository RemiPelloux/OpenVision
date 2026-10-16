"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.filterUnknownFields = exports.createExtensionContainer = exports.makeExtension = void 0;
const n = require("./module-1455.js");
exports.makeExtension = function(t, e, r, n) {
    let s;
    return {
        typeName: e,
        extendee: r,
        get field () {
            if (!s) {
                const r = "function" == typeof n ? n() : n;
                r.name = e.split(".").pop(), r.jsonName = `[${e}]`, s = t.util.newFieldList([
                    r
                ]).list()[0];
            }
            return s;
        },
        runtime: t
    };
}, exports.createExtensionContainer = function(t) {
    const e = t.field.localName, r = Object.create(null);
    return r[e] = function(t) {
        const e = t.field;
        if (e.repeated) return [];
        if (void 0 !== e.default) return e.default;
        switch(e.kind){
            case "enum":
                return e.T.values[0].no;
            case "scalar":
                return (0, n.scalarZeroValue)(e.T, e.L);
            case "message":
                const t = e.T, r = new t;
                return t.fieldWrapper ? t.fieldWrapper.unwrapField(r) : r;
            case "map":
                throw "map fields are not allowed to be extensions";
        }
    }(t), [
        r,
        ()=>r[e]
    ];
}, exports.filterUnknownFields = function(t, e) {
    if (!e.repeated && ("enum" == e.kind || "scalar" == e.kind)) {
        for(let r = t.length - 1; r >= 0; --r)if (t[r].no == e.no) return [
            t[r]
        ];
        return [];
    }
    return t.filter((t)=>t.no === e.no);
};
