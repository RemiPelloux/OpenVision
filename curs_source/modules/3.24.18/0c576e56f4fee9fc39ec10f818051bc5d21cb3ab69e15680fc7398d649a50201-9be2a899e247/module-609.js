"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeEnum = exports.makeEnumType = exports.setEnumType = exports.getEnumType = void 0;
const n = require("./module-3098.js"), o = Symbol("@bufbuild/protobuf/enum-type");
function s(e, t, r, n) {
    e[o] = i(t, r.map((t)=>({
            no: t.no,
            name: t.name,
            localName: e[t.no]
        })), n);
}
function i(e, t, r) {
    const n = Object.create(null), o = Object.create(null), s = [];
    for (const e of t){
        const t = a(e);
        s.push(t), n[e.name] = t, o[e.no] = t;
    }
    return {
        typeName: e,
        values: s,
        findName: (e)=>n[e],
        findNumber: (e)=>o[e]
    };
}
function a(e) {
    return "localName" in e ? e : Object.assign(Object.assign({}, e), {
        localName: e.name
    });
}
exports.getEnumType = function(e) {
    const t = e[o];
    return (0, n.assert)(t, "missing enum type on enum object"), t;
}, exports.setEnumType = s, exports.makeEnumType = i, exports.makeEnum = function(e, t, r) {
    const n = {};
    for (const e of t){
        const t = a(e);
        n[t.localName] = t.no, n[t.no] = t.localName;
    }
    return s(n, e, t, r), n;
};
