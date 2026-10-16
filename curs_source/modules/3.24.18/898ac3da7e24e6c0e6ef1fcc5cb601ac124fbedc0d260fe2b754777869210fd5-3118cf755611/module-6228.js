"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.normalizeFieldInfos = void 0;
const t = require("./module-3186.js"), s = require("./module-5822.js"), o = require("./module-3408.js");
exports.normalizeFieldInfos = function(e, n) {
    var a, r, i, A, l, c;
    const m = [];
    let d;
    for (const g of "function" == typeof e ? e() : e){
        const e = g;
        if (e.localName = (0, s.localFieldName)(g.name, void 0 !== g.oneof), e.jsonName = null !== (a = g.jsonName) && void 0 !== a ? a : (0, s.fieldJsonName)(g.name), e.repeated = null !== (r = g.repeated) && void 0 !== r && r, "scalar" == g.kind && (e.L = null !== (i = g.L) && void 0 !== i ? i : o.LongType.BIGINT), e.delimited = null !== (A = g.delimited) && void 0 !== A && A, e.req = null !== (l = g.req) && void 0 !== l && l, e.opt = null !== (c = g.opt) && void 0 !== c && c, void 0 === g.packed && (e.packed = !!n && ("enum" == g.kind || "scalar" == g.kind && g.T != o.ScalarType.BYTES && g.T != o.ScalarType.STRING)), void 0 !== g.oneof) {
            const n = "string" == typeof g.oneof ? g.oneof : g.oneof.name;
            d && d.name == n || (d = new t.InternalOneofInfo(n)), e.oneof = d, d.addField(e);
        }
        m.push(e);
    }
    return m;
};
