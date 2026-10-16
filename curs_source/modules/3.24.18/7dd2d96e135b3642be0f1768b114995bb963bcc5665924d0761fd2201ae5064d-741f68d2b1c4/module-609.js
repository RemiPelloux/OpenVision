"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeEnum = exports.makeEnumType = exports.setEnumType = exports.getEnumType = void 0;
const a = require("./module-3098.js"), s = Symbol("@bufbuild/protobuf/enum-type");
function o(e, n, t, a) {
    e[s] = r(n, t.map((n)=>({
            no: n.no,
            name: n.name,
            localName: e[n.no]
        })), a);
}
function r(e, n, t) {
    const a = Object.create(null), s = Object.create(null), o = [];
    for (const e of n){
        const n = i(e);
        o.push(n), a[e.name] = n, s[e.no] = n;
    }
    return {
        typeName: e,
        values: o,
        findName: (e)=>a[e],
        findNumber: (e)=>s[e]
    };
}
function i(e) {
    return "localName" in e ? e : Object.assign(Object.assign({}, e), {
        localName: e.name
    });
}
exports.getEnumType = function(e) {
    const n = e[s];
    return (0, a.assert)(n, "missing enum type on enum object"), n;
}, exports.setEnumType = o, exports.makeEnumType = r, exports.makeEnum = function(e, n, t) {
    const a = {};
    for (const e of n){
        const n = i(e);
        a[n.localName] = n.no, a[n.no] = n.localName;
    }
    return o(a, e, n, t), a;
};
