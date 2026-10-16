Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeEnum = exports.makeEnumType = exports.setEnumType = exports.getEnumType = void 0;
const s = require("./module-3098.js"), o = Symbol("@bufbuild/protobuf/enum-type");
function r(e, a, n, s) {
    e[o] = t(a, n.map((a)=>({
            no: a.no,
            name: a.name,
            localName: e[a.no]
        })), s);
}
function t(e, a, n) {
    const s = Object.create(null), o = Object.create(null), r = [];
    for (const e of a){
        const a = i(e);
        r.push(a), s[e.name] = a, o[e.no] = a;
    }
    return {
        typeName: e,
        values: r,
        findName: (e)=>s[e],
        findNumber: (e)=>o[e]
    };
}
function i(e) {
    return "localName" in e ? e : Object.assign(Object.assign({}, e), {
        localName: e.name
    });
}
exports.getEnumType = function(e) {
    const a = e[o];
    return (0, s.assert)(a, "missing enum type on enum object"), a;
}, exports.setEnumType = r, exports.makeEnumType = t, exports.makeEnum = function(e, a, n) {
    const s = {};
    for (const e of a){
        const a = i(e);
        s[a.localName] = a.no, s[a.no] = a.localName;
    }
    return r(s, e, a, n), s;
};
