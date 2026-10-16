"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createFeatureResolver = void 0;
const a = require("./module-7374.js"), s = require("./module-9526.js");
exports.createFeatureResolver = function(e, n, t) {
    var o;
    const r = null != n ? n : function(e) {
        return a.FeatureSetDefaults.fromBinary(s.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), e);
    }(t), i = r.minimumEdition, A = r.maximumEdition;
    if (void 0 === i || void 0 === A || r.defaults.some((e)=>void 0 === e.edition)) throw new Error("Invalid FeatureSetDefaults");
    if (e < i) throw new Error(`Edition ${a.Edition[e]} is earlier than the minimum supported edition ${a.Edition[i]}`);
    if (A < e) throw new Error(`Edition ${a.Edition[e]} is later than the maximum supported edition ${a.Edition[A]}`);
    let c;
    for (const n of r.defaults){
        const t = null !== (o = n.edition) && void 0 !== o ? o : 0;
        if (t > e) continue;
        if (void 0 !== c && c.e > t) continue;
        let s;
        n.fixedFeatures && n.overridableFeatures ? (s = n.fixedFeatures, s.fromBinary(n.overridableFeatures.toBinary())) : s = n.fixedFeatures ? n.fixedFeatures : n.overridableFeatures ? n.overridableFeatures : new a.FeatureSet, c = {
            e: t,
            f: s
        };
    }
    if (void 0 === c) throw new Error(`No valid default found for edition ${a.Edition[e]}`);
    const l = c.f.toBinary(t);
    return (...n)=>{
        const s = a.FeatureSet.fromBinary(l, t);
        for (const e of n)void 0 !== e && s.fromBinary(e.toBinary(t), t);
        if (!function(e) {
            for (const n of a.FeatureSet.fields.list()){
                const t = e[n.localName];
                if (void 0 === t) return !1;
                if ("enum" == n.kind && 0 === t) return !1;
            }
            return !0;
        }(s)) throw new Error(`Invalid FeatureSet for edition ${a.Edition[e]}`);
        return s;
    };
};
