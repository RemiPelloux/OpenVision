"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.normalizeFieldInfos = void 0;
const n = require("./module-3186.js"), o = require("./module-5822.js"), s = require("./module-3408.js");
exports.normalizeFieldInfos = function(e, t) {
    var r, i, a, c, u, l;
    const d = [];
    let p;
    for (const f of "function" == typeof e ? e() : e){
        const e = f;
        if (e.localName = (0, o.localFieldName)(f.name, void 0 !== f.oneof), e.jsonName = null !== (r = f.jsonName) && void 0 !== r ? r : (0, o.fieldJsonName)(f.name), e.repeated = null !== (i = f.repeated) && void 0 !== i && i, "scalar" == f.kind && (e.L = null !== (a = f.L) && void 0 !== a ? a : s.LongType.BIGINT), e.delimited = null !== (c = f.delimited) && void 0 !== c && c, e.req = null !== (u = f.req) && void 0 !== u && u, e.opt = null !== (l = f.opt) && void 0 !== l && l, void 0 === f.packed && (e.packed = !!t && ("enum" == f.kind || "scalar" == f.kind && f.T != s.ScalarType.BYTES && f.T != s.ScalarType.STRING)), void 0 !== f.oneof) {
            const t = "string" == typeof f.oneof ? f.oneof : f.oneof.name;
            p && p.name == t || (p = new n.InternalOneofInfo(t)), e.oneof = p, p.addField(e);
        }
        d.push(e);
    }
    return d;
};
