"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeEnum = exports.makeEnumType = exports.setEnumType = exports.getEnumType = void 0;
const n = require("./module-3098.js"), r = Symbol("@bufbuild/protobuf/enum-type");
function o(e, t, A, n) {
    e[r] = s(t, A.map((t)=>({
            no: t.no,
            name: t.name,
            localName: e[t.no]
        })), n);
}
function s(e, t, A) {
    const n = Object.create(null), r = Object.create(null), o = [];
    for (const e of t){
        const t = i(e);
        o.push(t), n[e.name] = t, r[e.no] = t;
    }
    return {
        typeName: e,
        values: o,
        findName: (e)=>n[e],
        findNumber: (e)=>r[e]
    };
}
function i(e) {
    return "localName" in e ? e : Object.assign(Object.assign({}, e), {
        localName: e.name
    });
}
exports.getEnumType = function(e) {
    const t = e[r];
    return (0, n.assert)(t, "missing enum type on enum object"), t;
}, exports.setEnumType = o, exports.makeEnumType = s, exports.makeEnum = function(e, t, A) {
    const n = {};
    for (const e of t){
        const t = i(e);
        n[t.localName] = t.no, n[t.no] = t.localName;
    }
    return o(n, e, t, A), n;
};
