"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.normalizeFieldInfos = void 0;
const n = require("./module-3186.js"), r = require("./module-5822.js"), o = require("./module-3408.js");
exports.normalizeFieldInfos = function(e, A) {
    var t, s, a, i, c, l;
    const g = [];
    let E;
    for (const u of "function" == typeof e ? e() : e){
        const e = u;
        if (e.localName = (0, r.localFieldName)(u.name, void 0 !== u.oneof), e.jsonName = null !== (t = u.jsonName) && void 0 !== t ? t : (0, r.fieldJsonName)(u.name), e.repeated = null !== (s = u.repeated) && void 0 !== s && s, "scalar" == u.kind && (e.L = null !== (a = u.L) && void 0 !== a ? a : o.LongType.BIGINT), e.delimited = null !== (i = u.delimited) && void 0 !== i && i, e.req = null !== (c = u.req) && void 0 !== c && c, e.opt = null !== (l = u.opt) && void 0 !== l && l, void 0 === u.packed && (e.packed = !!A && ("enum" == u.kind || "scalar" == u.kind && u.T != o.ScalarType.BYTES && u.T != o.ScalarType.STRING)), void 0 !== u.oneof) {
            const A = "string" == typeof u.oneof ? u.oneof : u.oneof.name;
            E && E.name == A || (E = new n.InternalOneofInfo(A)), e.oneof = E, E.addField(e);
        }
        g.push(e);
    }
    return g;
};
