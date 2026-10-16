"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeEnum = exports.makeEnumType = exports.setEnumType = exports.getEnumType = void 0;
const n = require("./module-3098.js"), s = Symbol("@bufbuild/protobuf/enum-type");
function i(t, e, r, n) {
    t[s] = o(e, r.map((e)=>({
            no: e.no,
            name: e.name,
            localName: t[e.no]
        })), n);
}
function o(t, e, r) {
    const n = Object.create(null), s = Object.create(null), i = [];
    for (const t of e){
        const e = a(t);
        i.push(e), n[t.name] = e, s[t.no] = e;
    }
    return {
        typeName: t,
        values: i,
        findName: (t)=>n[t],
        findNumber: (t)=>s[t]
    };
}
function a(t) {
    return "localName" in t ? t : Object.assign(Object.assign({}, t), {
        localName: t.name
    });
}
exports.getEnumType = function(t) {
    const e = t[s];
    return (0, n.assert)(e, "missing enum type on enum object"), e;
}, exports.setEnumType = i, exports.makeEnumType = o, exports.makeEnum = function(t, e, r) {
    const n = {};
    for (const t of e){
        const e = a(t);
        n[e.localName] = e.no, n[e.no] = e.localName;
    }
    return i(n, t, e, r), n;
};
