"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createFeatureResolver = void 0;
const n = require("./module-7374.js"), r = require("./module-9526.js");
exports.createFeatureResolver = function(e, t, A) {
    var o;
    const s = null != t ? t : (i = A, n.FeatureSetDefaults.fromBinary(r.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), i));
    var i;
    const a = s.minimumEdition, c = s.maximumEdition;
    if (void 0 === a || void 0 === c || s.defaults.some((e)=>void 0 === e.edition)) throw new Error("Invalid FeatureSetDefaults");
    if (e < a) throw new Error(`Edition ${n.Edition[e]} is earlier than the minimum supported edition ${n.Edition[a]}`);
    if (c < e) throw new Error(`Edition ${n.Edition[e]} is later than the maximum supported edition ${n.Edition[c]}`);
    let l;
    for (const t of s.defaults){
        const A = null !== (o = t.edition) && void 0 !== o ? o : 0;
        if (A > e) continue;
        if (void 0 !== l && l.e > A) continue;
        let r;
        t.fixedFeatures && t.overridableFeatures ? (r = t.fixedFeatures, r.fromBinary(t.overridableFeatures.toBinary())) : r = t.fixedFeatures ? t.fixedFeatures : t.overridableFeatures ? t.overridableFeatures : new n.FeatureSet, l = {
            e: A,
            f: r
        };
    }
    if (void 0 === l) throw new Error(`No valid default found for edition ${n.Edition[e]}`);
    const u = l.f.toBinary(A);
    return (...t)=>{
        const r = n.FeatureSet.fromBinary(u, A);
        for (const e of t)void 0 !== e && r.fromBinary(e.toBinary(A), A);
        if (!function(e) {
            for (const t of n.FeatureSet.fields.list()){
                const A = e[t.localName];
                if (void 0 === A) return !1;
                if ("enum" == t.kind && 0 === A) return !1;
            }
            return !0;
        }(r)) throw new Error(`Invalid FeatureSet for edition ${n.Edition[e]}`);
        return r;
    };
};
