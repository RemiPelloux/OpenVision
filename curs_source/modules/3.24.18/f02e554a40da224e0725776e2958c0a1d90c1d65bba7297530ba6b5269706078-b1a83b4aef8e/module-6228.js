"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.normalizeFieldInfos = void 0;
const n = require("./module-3186.js"), s = require("./module-5822.js"), i = require("./module-3408.js");
exports.normalizeFieldInfos = function(t, e) {
    var r, o, a, u, c, l;
    const m = [];
    let d;
    for (const f of "function" == typeof t ? t() : t){
        const t = f;
        if (t.localName = (0, s.localFieldName)(f.name, void 0 !== f.oneof), t.jsonName = null !== (r = f.jsonName) && void 0 !== r ? r : (0, s.fieldJsonName)(f.name), t.repeated = null !== (o = f.repeated) && void 0 !== o && o, "scalar" == f.kind && (t.L = null !== (a = f.L) && void 0 !== a ? a : i.LongType.BIGINT), t.delimited = null !== (u = f.delimited) && void 0 !== u && u, t.req = null !== (c = f.req) && void 0 !== c && c, t.opt = null !== (l = f.opt) && void 0 !== l && l, void 0 === f.packed && (t.packed = !!e && ("enum" == f.kind || "scalar" == f.kind && f.T != i.ScalarType.BYTES && f.T != i.ScalarType.STRING)), void 0 !== f.oneof) {
            const e = "string" == typeof f.oneof ? f.oneof : f.oneof.name;
            d && d.name == e || (d = new n.InternalOneofInfo(e)), t.oneof = d, d.addField(t);
        }
        m.push(t);
    }
    return m;
};
