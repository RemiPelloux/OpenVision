"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.normalizeFieldInfos = void 0;
const t = require("./module-3186.js"), s = require("./module-5822.js"), o = require("./module-3408.js");
exports.normalizeFieldInfos = function(e, a) {
    var n, r, i, l, d, m;
    const c = [];
    let p;
    for (const A of "function" == typeof e ? e() : e){
        const e = A;
        if (e.localName = (0, s.localFieldName)(A.name, void 0 !== A.oneof), e.jsonName = null !== (n = A.jsonName) && void 0 !== n ? n : (0, s.fieldJsonName)(A.name), e.repeated = null !== (r = A.repeated) && void 0 !== r && r, "scalar" == A.kind && (e.L = null !== (i = A.L) && void 0 !== i ? i : o.LongType.BIGINT), e.delimited = null !== (l = A.delimited) && void 0 !== l && l, e.req = null !== (d = A.req) && void 0 !== d && d, e.opt = null !== (m = A.opt) && void 0 !== m && m, void 0 === A.packed && (e.packed = !!a && ("enum" == A.kind || "scalar" == A.kind && A.T != o.ScalarType.BYTES && A.T != o.ScalarType.STRING)), void 0 !== A.oneof) {
            const a = "string" == typeof A.oneof ? A.oneof : A.oneof.name;
            p && p.name == a || (p = new t.InternalOneofInfo(a)), e.oneof = p, p.addField(e);
        }
        c.push(e);
    }
    return c;
};
