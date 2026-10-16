Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeEnum = exports.makeEnumType = exports.setEnumType = exports.getEnumType = void 0;
const o = require("./module-98.js"), s = Symbol("@bufbuild/protobuf/enum-type");
function t(e, a, n, o) {
    e[s] = r(a, n.map((a)=>({
            no: a.no,
            name: a.name,
            localName: e[a.no]
        })), o);
}
function r(e, a, n) {
    const o = Object.create(null), s = Object.create(null), t = [];
    for (const e of a){
        const a = i(e);
        t.push(a), o[e.name] = a, s[e.no] = a;
    }
    return {
        typeName: e,
        values: t,
        findName: (e)=>o[e],
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
    return (0, o.assert)(a, "missing enum type on enum object"), a;
}, exports.setEnumType = t, exports.makeEnumType = r, exports.makeEnum = function(e, a, n) {
    const o = {};
    for (const e of a){
        const a = i(e);
        o[a.localName] = a.no, o[a.no] = a.localName;
    }
    return t(o, e, a, n), o;
};
