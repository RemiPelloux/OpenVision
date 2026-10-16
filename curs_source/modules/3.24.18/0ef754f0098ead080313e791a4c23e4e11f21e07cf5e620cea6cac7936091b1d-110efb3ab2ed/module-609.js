"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeEnum = exports.makeEnumType = exports.setEnumType = exports.getEnumType = void 0;
const t = require("./module-3098.js"), s = Symbol("@bufbuild/protobuf/enum-type");
function o(e, a, n, t) {
    e[s] = r(a, n.map((a)=>({
            no: a.no,
            name: a.name,
            localName: e[a.no]
        })), t);
}
function r(e, a, n) {
    const t = Object.create(null), s = Object.create(null), o = [];
    for (const e of a){
        const a = i(e);
        o.push(a), t[e.name] = a, s[e.no] = a;
    }
    return {
        typeName: e,
        values: o,
        findName: (e)=>t[e],
        findNumber: (e)=>s[e]
    };
}
function i(e) {
    return "localName" in e ? e : Object.assign(Object.assign({}, e), {
        localName: e.name
    });
}
exports.getEnumType = function(e) {
    const a = e[s];
    return (0, t.assert)(a, "missing enum type on enum object"), a;
}, exports.setEnumType = o, exports.makeEnumType = r, exports.makeEnum = function(e, a, n) {
    const t = {};
    for (const e of a){
        const a = i(e);
        t[a.localName] = a.no, t[a.no] = a.localName;
    }
    return o(t, e, a, n), t;
};
