"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeEnum = exports.makeEnumType = exports.setEnumType = exports.getEnumType = void 0;
const t = require("./module-3098.js"), s = Symbol("@bufbuild/protobuf/enum-type");
function o(e, n, a, t) {
    e[s] = r(n, a.map((n)=>({
            no: n.no,
            name: n.name,
            localName: e[n.no]
        })), t);
}
function r(e, n, a) {
    const t = Object.create(null), s = Object.create(null), o = [];
    for (const e of n){
        const n = i(e);
        o.push(n), t[e.name] = n, s[e.no] = n;
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
    const n = e[s];
    return (0, t.assert)(n, "missing enum type on enum object"), n;
}, exports.setEnumType = o, exports.makeEnumType = r, exports.makeEnum = function(e, n, a) {
    const t = {};
    for (const e of n){
        const n = i(e);
        t[n.localName] = n.no, t[n.no] = n.localName;
    }
    return o(t, e, n, a), t;
};
