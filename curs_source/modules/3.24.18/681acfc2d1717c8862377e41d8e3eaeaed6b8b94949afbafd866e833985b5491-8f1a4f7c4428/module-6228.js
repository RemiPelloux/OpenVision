"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.normalizeFieldInfos = void 0;
const n = require("./module-3186.js"), r = require("./module-5822.js"), o = require("./module-3408.js");
exports.normalizeFieldInfos = function(e, t) {
    var A, s, i, a, c, l;
    const u = [];
    let g;
    for (const E of "function" == typeof e ? e() : e){
        const e = E;
        if (e.localName = (0, r.localFieldName)(E.name, void 0 !== E.oneof), e.jsonName = null !== (A = E.jsonName) && void 0 !== A ? A : (0, r.fieldJsonName)(E.name), e.repeated = null !== (s = E.repeated) && void 0 !== s && s, "scalar" == E.kind && (e.L = null !== (i = E.L) && void 0 !== i ? i : o.LongType.BIGINT), e.delimited = null !== (a = E.delimited) && void 0 !== a && a, e.req = null !== (c = E.req) && void 0 !== c && c, e.opt = null !== (l = E.opt) && void 0 !== l && l, void 0 === E.packed && (e.packed = !!t && ("enum" == E.kind || "scalar" == E.kind && E.T != o.ScalarType.BYTES && E.T != o.ScalarType.STRING)), void 0 !== E.oneof) {
            const t = "string" == typeof E.oneof ? E.oneof : E.oneof.name;
            g && g.name == t || (g = new n.InternalOneofInfo(t)), e.oneof = g, g.addField(e);
        }
        u.push(e);
    }
    return u;
};
