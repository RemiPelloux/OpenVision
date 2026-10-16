"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.normalizeFieldInfos = void 0;
const n = require("./module-3186.js"), s = require("./module-75822.js"), o = require("./module-3408.js");
exports.normalizeFieldInfos = function(e, t) {
    var r, i, a, c, l, u;
    const d = [];
    let p;
    for (const m of "function" == typeof e ? e() : e){
        const e = m;
        if (e.localName = (0, s.localFieldName)(m.name, void 0 !== m.oneof), e.jsonName = null !== (r = m.jsonName) && void 0 !== r ? r : (0, s.fieldJsonName)(m.name), e.repeated = null !== (i = m.repeated) && void 0 !== i && i, "scalar" == m.kind && (e.L = null !== (a = m.L) && void 0 !== a ? a : o.LongType.BIGINT), e.delimited = null !== (c = m.delimited) && void 0 !== c && c, e.req = null !== (l = m.req) && void 0 !== l && l, e.opt = null !== (u = m.opt) && void 0 !== u && u, void 0 === m.packed && (e.packed = !!t && ("enum" == m.kind || "scalar" == m.kind && m.T != o.ScalarType.BYTES && m.T != o.ScalarType.STRING)), void 0 !== m.oneof) {
            const t = "string" == typeof m.oneof ? m.oneof : m.oneof.name;
            p && p.name == t || (p = new n.InternalOneofInfo(t)), e.oneof = p, p.addField(e);
        }
        d.push(e);
    }
    return d;
};
