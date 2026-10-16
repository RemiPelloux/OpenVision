"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeEnum = exports.makeEnumType = exports.setEnumType = exports.getEnumType = void 0;
const n = require("./module-43098.js"), s = Symbol("@bufbuild/protobuf/enum-type");
function o(e, t, r, n) {
    e[s] = i(t, r.map((t)=>({
            no: t.no,
            name: t.name,
            localName: e[t.no]
        })), n);
}
function i(e, t, r) {
    const n = Object.create(null), s = Object.create(null), o = [];
    for (const e of t){
        const t = a(e);
        o.push(t), n[e.name] = t, s[e.no] = t;
    }
    return {
        typeName: e,
        values: o,
        findName: (e)=>n[e],
        findNumber: (e)=>s[e]
    };
}
function a(e) {
    return "localName" in e ? e : Object.assign(Object.assign({}, e), {
        localName: e.name
    });
}
exports.getEnumType = function(e) {
    const t = e[s];
    return (0, n.assert)(t, "missing enum type on enum object"), t;
}, exports.setEnumType = o, exports.makeEnumType = i, exports.makeEnum = function(e, t, r) {
    const n = {};
    for (const e of t){
        const t = a(e);
        n[t.localName] = t.no, n[t.no] = t.localName;
    }
    return o(n, e, t, r), n;
};
