Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.normalizeFieldInfos = void 0;
const s = require("./module-3186.js"), o = require("./module-5822.js"), r = require("./module-3408.js");
exports.normalizeFieldInfos = function(e, a) {
    var n, t, i, m, l, d;
    const c = [];
    let T;
    for (const p of "function" == typeof e ? e() : e){
        const e = p;
        if (e.localName = (0, o.localFieldName)(p.name, void 0 !== p.oneof), e.jsonName = null !== (n = p.jsonName) && void 0 !== n ? n : (0, o.fieldJsonName)(p.name), e.repeated = null !== (t = p.repeated) && void 0 !== t && t, "scalar" == p.kind && (e.L = null !== (i = p.L) && void 0 !== i ? i : r.LongType.BIGINT), e.delimited = null !== (m = p.delimited) && void 0 !== m && m, e.req = null !== (l = p.req) && void 0 !== l && l, e.opt = null !== (d = p.opt) && void 0 !== d && d, void 0 === p.packed && (e.packed = !!a && ("enum" == p.kind || "scalar" == p.kind && p.T != r.ScalarType.BYTES && p.T != r.ScalarType.STRING)), void 0 !== p.oneof) {
            const a = "string" == typeof p.oneof ? p.oneof : p.oneof.name;
            T && T.name == a || (T = new s.InternalOneofInfo(a)), e.oneof = T, T.addField(e);
        }
        c.push(e);
    }
    return c;
};
