Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeEnum = exports.makeEnumType = exports.setEnumType = exports.getEnumType = void 0;
const r = require("./module-98.js"), o = Symbol("@bufbuild/protobuf/enum-type");
function a(e, t, n, r) {
    e[o] = s(t, n.map((t)=>({
            no: t.no,
            name: t.name,
            localName: e[t.no]
        })), r);
}
function s(e, t, n) {
    const r = Object.create(null), o = Object.create(null), a = [];
    for (const e of t){
        const t = i(e);
        a.push(t), r[e.name] = t, o[e.no] = t;
    }
    return {
        typeName: e,
        values: a,
        findName: (e)=>r[e],
        findNumber: (e)=>o[e]
    };
}
function i(e) {
    return "localName" in e ? e : Object.assign(Object.assign({}, e), {
        localName: e.name
    });
}
exports.getEnumType = function(e) {
    const t = e[o];
    return (0, r.assert)(t, "missing enum type on enum object"), t;
}, exports.setEnumType = a, exports.makeEnumType = s, exports.makeEnum = function(e, t, n) {
    const r = {};
    for (const e of t){
        const t = i(e);
        r[t.localName] = t.no, r[t.no] = t.localName;
    }
    return a(r, e, t, n), r;
};
