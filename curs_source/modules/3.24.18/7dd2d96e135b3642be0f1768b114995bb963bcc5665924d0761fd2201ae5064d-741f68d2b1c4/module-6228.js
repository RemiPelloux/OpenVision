"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.normalizeFieldInfos = void 0;
const a = require("./module-3186.js"), s = require("./module-5822.js"), o = require("./module-3408.js");
exports.normalizeFieldInfos = function(e, n) {
    var t, r, i, A, c, l;
    const d = [];
    let m;
    for (const u of "function" == typeof e ? e() : e){
        const e = u;
        if (e.localName = (0, s.localFieldName)(u.name, void 0 !== u.oneof), e.jsonName = null !== (t = u.jsonName) && void 0 !== t ? t : (0, s.fieldJsonName)(u.name), e.repeated = null !== (r = u.repeated) && void 0 !== r && r, "scalar" == u.kind && (e.L = null !== (i = u.L) && void 0 !== i ? i : o.LongType.BIGINT), e.delimited = null !== (A = u.delimited) && void 0 !== A && A, e.req = null !== (c = u.req) && void 0 !== c && c, e.opt = null !== (l = u.opt) && void 0 !== l && l, void 0 === u.packed && (e.packed = !!n && ("enum" == u.kind || "scalar" == u.kind && u.T != o.ScalarType.BYTES && u.T != o.ScalarType.STRING)), void 0 !== u.oneof) {
            const n = "string" == typeof u.oneof ? u.oneof : u.oneof.name;
            m && m.name == n || (m = new a.InternalOneofInfo(n)), e.oneof = m, m.addField(e);
        }
        d.push(e);
    }
    return d;
};
