"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createFeatureResolver = void 0;
const n = require("./module-7374.js"), r = require("./module-9526.js");
exports.createFeatureResolver = function(e, A, t) {
    var o;
    const s = null != A ? A : (a = t, n.FeatureSetDefaults.fromBinary(r.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), a));
    var a;
    const i = s.minimumEdition, c = s.maximumEdition;
    if (void 0 === i || void 0 === c || s.defaults.some((e)=>void 0 === e.edition)) throw new Error("Invalid FeatureSetDefaults");
    if (e < i) throw new Error(`Edition ${n.Edition[e]} is earlier than the minimum supported edition ${n.Edition[i]}`);
    if (c < e) throw new Error(`Edition ${n.Edition[e]} is later than the maximum supported edition ${n.Edition[c]}`);
    let l;
    for (const A of s.defaults){
        const t = null !== (o = A.edition) && void 0 !== o ? o : 0;
        if (t > e) continue;
        if (void 0 !== l && l.e > t) continue;
        let r;
        A.fixedFeatures && A.overridableFeatures ? (r = A.fixedFeatures, r.fromBinary(A.overridableFeatures.toBinary())) : r = A.fixedFeatures ? A.fixedFeatures : A.overridableFeatures ? A.overridableFeatures : new n.FeatureSet, l = {
            e: t,
            f: r
        };
    }
    if (void 0 === l) throw new Error(`No valid default found for edition ${n.Edition[e]}`);
    const g = l.f.toBinary(t);
    return (...A)=>{
        const r = n.FeatureSet.fromBinary(g, t);
        for (const e of A)void 0 !== e && r.fromBinary(e.toBinary(t), t);
        if (!function(e) {
            for (const A of n.FeatureSet.fields.list()){
                const t = e[A.localName];
                if (void 0 === t) return !1;
                if ("enum" == A.kind && 0 === t) return !1;
            }
            return !0;
        }(r)) throw new Error(`Invalid FeatureSet for edition ${n.Edition[e]}`);
        return r;
    };
};
