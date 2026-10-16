"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createFeatureResolver = void 0;
const n = require("./module-27374.js"), s = require("./module-19526.js");
exports.createFeatureResolver = function(e, t, r) {
    var o;
    const i = null != t ? t : (a = r, n.FeatureSetDefaults.fromBinary(s.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), a));
    var a;
    const c = i.minimumEdition, l = i.maximumEdition;
    if (void 0 === c || void 0 === l || i.defaults.some((e)=>void 0 === e.edition)) throw new Error("Invalid FeatureSetDefaults");
    if (e < c) throw new Error(`Edition ${n.Edition[e]} is earlier than the minimum supported edition ${n.Edition[c]}`);
    if (l < e) throw new Error(`Edition ${n.Edition[e]} is later than the maximum supported edition ${n.Edition[l]}`);
    let u;
    for (const t of i.defaults){
        const r = null !== (o = t.edition) && void 0 !== o ? o : 0;
        if (r > e) continue;
        if (void 0 !== u && u.e > r) continue;
        let s;
        t.fixedFeatures && t.overridableFeatures ? (s = t.fixedFeatures, s.fromBinary(t.overridableFeatures.toBinary())) : s = t.fixedFeatures ? t.fixedFeatures : t.overridableFeatures ? t.overridableFeatures : new n.FeatureSet, u = {
            e: r,
            f: s
        };
    }
    if (void 0 === u) throw new Error(`No valid default found for edition ${n.Edition[e]}`);
    const d = u.f.toBinary(r);
    return (...t)=>{
        const s = n.FeatureSet.fromBinary(d, r);
        for (const e of t)void 0 !== e && s.fromBinary(e.toBinary(r), r);
        if (!function(e) {
            for (const t of n.FeatureSet.fields.list()){
                const r = e[t.localName];
                if (void 0 === r) return !1;
                if ("enum" == t.kind && 0 === r) return !1;
            }
            return !0;
        }(s)) throw new Error(`Invalid FeatureSet for edition ${n.Edition[e]}`);
        return s;
    };
};
