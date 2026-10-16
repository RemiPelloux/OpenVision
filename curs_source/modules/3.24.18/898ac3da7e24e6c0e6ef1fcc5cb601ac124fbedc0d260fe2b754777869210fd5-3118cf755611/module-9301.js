"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createFeatureResolver = void 0;
const t = require("./module-7374.js"), s = require("./module-9526.js");
exports.createFeatureResolver = function(e, n, a) {
    var o;
    const r = null != n ? n : (i = a, t.FeatureSetDefaults.fromBinary(s.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), i));
    var i;
    const A = r.minimumEdition, l = r.maximumEdition;
    if (void 0 === A || void 0 === l || r.defaults.some((e)=>void 0 === e.edition)) throw new Error("Invalid FeatureSetDefaults");
    if (e < A) throw new Error(`Edition ${t.Edition[e]} is earlier than the minimum supported edition ${t.Edition[A]}`);
    if (l < e) throw new Error(`Edition ${t.Edition[e]} is later than the maximum supported edition ${t.Edition[l]}`);
    let c;
    for (const n of r.defaults){
        const a = null !== (o = n.edition) && void 0 !== o ? o : 0;
        if (a > e) continue;
        if (void 0 !== c && c.e > a) continue;
        let s;
        n.fixedFeatures && n.overridableFeatures ? (s = n.fixedFeatures, s.fromBinary(n.overridableFeatures.toBinary())) : s = n.fixedFeatures ? n.fixedFeatures : n.overridableFeatures ? n.overridableFeatures : new t.FeatureSet, c = {
            e: a,
            f: s
        };
    }
    if (void 0 === c) throw new Error(`No valid default found for edition ${t.Edition[e]}`);
    const m = c.f.toBinary(a);
    return (...n)=>{
        const s = t.FeatureSet.fromBinary(m, a);
        for (const e of n)void 0 !== e && s.fromBinary(e.toBinary(a), a);
        if (!function(e) {
            for (const n of t.FeatureSet.fields.list()){
                const a = e[n.localName];
                if (void 0 === a) return !1;
                if ("enum" == n.kind && 0 === a) return !1;
            }
            return !0;
        }(s)) throw new Error(`Invalid FeatureSet for edition ${t.Edition[e]}`);
        return s;
    };
};
