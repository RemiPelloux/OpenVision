Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.normalizeFieldInfos = void 0;
const r = require("./module-186.js"), o = require("./module-822.js"), a = require("./module-408.js");
exports.normalizeFieldInfos = function(e, t) {
    var n, s, i, l, u, c;
    const m = [];
    let p;
    for (const d of "function" == typeof e ? e() : e){
        const e = d;
        if (e.localName = (0, o.localFieldName)(d.name, void 0 !== d.oneof), e.jsonName = null !== (n = d.jsonName) && void 0 !== n ? n : (0, o.fieldJsonName)(d.name), e.repeated = null !== (s = d.repeated) && void 0 !== s && s, "scalar" == d.kind && (e.L = null !== (i = d.L) && void 0 !== i ? i : a.LongType.BIGINT), e.delimited = null !== (l = d.delimited) && void 0 !== l && l, e.req = null !== (u = d.req) && void 0 !== u && u, e.opt = null !== (c = d.opt) && void 0 !== c && c, void 0 === d.packed && (e.packed = !!t && ("enum" == d.kind || "scalar" == d.kind && d.T != a.ScalarType.BYTES && d.T != a.ScalarType.STRING)), void 0 !== d.oneof) {
            const t = "string" == typeof d.oneof ? d.oneof : d.oneof.name;
            p && p.name == t || (p = new r.InternalOneofInfo(t)), e.oneof = p, p.addField(e);
        }
        m.push(e);
    }
    return m;
};
