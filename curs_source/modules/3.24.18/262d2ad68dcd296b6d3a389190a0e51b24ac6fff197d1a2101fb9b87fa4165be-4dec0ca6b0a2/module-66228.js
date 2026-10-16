"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.normalizeFieldInfos = void 0;
const n = require("./module-3186.js"), o = require("./module-75822.js"), s = require("./module-3408.js");
exports.normalizeFieldInfos = function(e, t) {
    var r, i, a, l, c, u;
    const d = [];
    let p;
    for (const h of "function" == typeof e ? e() : e){
        const e = h;
        if (e.localName = (0, o.localFieldName)(h.name, void 0 !== h.oneof), e.jsonName = null !== (r = h.jsonName) && void 0 !== r ? r : (0, o.fieldJsonName)(h.name), e.repeated = null !== (i = h.repeated) && void 0 !== i && i, "scalar" == h.kind && (e.L = null !== (a = h.L) && void 0 !== a ? a : s.LongType.BIGINT), e.delimited = null !== (l = h.delimited) && void 0 !== l && l, e.req = null !== (c = h.req) && void 0 !== c && c, e.opt = null !== (u = h.opt) && void 0 !== u && u, void 0 === h.packed && (e.packed = !!t && ("enum" == h.kind || "scalar" == h.kind && h.T != s.ScalarType.BYTES && h.T != s.ScalarType.STRING)), void 0 !== h.oneof) {
            const t = "string" == typeof h.oneof ? h.oneof : h.oneof.name;
            p && p.name == t || (p = new n.InternalOneofInfo(t)), e.oneof = p, p.addField(e);
        }
        d.push(e);
    }
    return d;
};
