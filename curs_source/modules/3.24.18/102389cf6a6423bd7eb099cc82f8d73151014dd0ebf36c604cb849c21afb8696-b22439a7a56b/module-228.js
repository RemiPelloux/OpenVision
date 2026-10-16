Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.normalizeFieldInfos = void 0;
const o = require("./module-186.js"), s = require("./module-822.js"), t = require("./module-408.js");
exports.normalizeFieldInfos = function(e, a) {
    var n, r, i, m, l, d;
    const c = [];
    let T;
    for (const _ of "function" == typeof e ? e() : e){
        const e = _;
        if (e.localName = (0, s.localFieldName)(_.name, void 0 !== _.oneof), e.jsonName = null !== (n = _.jsonName) && void 0 !== n ? n : (0, s.fieldJsonName)(_.name), e.repeated = null !== (r = _.repeated) && void 0 !== r && r, "scalar" == _.kind && (e.L = null !== (i = _.L) && void 0 !== i ? i : t.LongType.BIGINT), e.delimited = null !== (m = _.delimited) && void 0 !== m && m, e.req = null !== (l = _.req) && void 0 !== l && l, e.opt = null !== (d = _.opt) && void 0 !== d && d, void 0 === _.packed && (e.packed = !!a && ("enum" == _.kind || "scalar" == _.kind && _.T != t.ScalarType.BYTES && _.T != t.ScalarType.STRING)), void 0 !== _.oneof) {
            const a = "string" == typeof _.oneof ? _.oneof : _.oneof.name;
            T && T.name == a || (T = new o.InternalOneofInfo(a)), e.oneof = T, T.addField(e);
        }
        c.push(e);
    }
    return c;
};
