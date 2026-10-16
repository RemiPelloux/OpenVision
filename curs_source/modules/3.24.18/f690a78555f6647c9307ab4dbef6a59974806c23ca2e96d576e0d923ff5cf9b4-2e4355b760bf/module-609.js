"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeEnum = exports.makeEnumType = exports.setEnumType = exports.getEnumType = void 0;
const n = require("./module-3098.js"), r = Symbol("@bufbuild/protobuf/enum-type");
function o(e, A, t, n) {
    e[r] = s(A, t.map((A)=>({
            no: A.no,
            name: A.name,
            localName: e[A.no]
        })), n);
}
function s(e, A, t) {
    const n = Object.create(null), r = Object.create(null), o = [];
    for (const e of A){
        const A = a(e);
        o.push(A), n[e.name] = A, r[e.no] = A;
    }
    return {
        typeName: e,
        values: o,
        findName: (e)=>n[e],
        findNumber: (e)=>r[e]
    };
}
function a(e) {
    return "localName" in e ? e : Object.assign(Object.assign({}, e), {
        localName: e.name
    });
}
exports.getEnumType = function(e) {
    const A = e[r];
    return (0, n.assert)(A, "missing enum type on enum object"), A;
}, exports.setEnumType = o, exports.makeEnumType = s, exports.makeEnum = function(e, A, t) {
    const n = {};
    for (const e of A){
        const A = a(e);
        n[A.localName] = A.no, n[A.no] = A.localName;
    }
    return o(n, e, A, t), n;
};
