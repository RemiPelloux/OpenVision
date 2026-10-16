"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createFeatureResolver = void 0;
const n = require("./module-7374.js"), o = require("./module-9526.js");
exports.createFeatureResolver = function(e, t, r) {
    var s;
    const i = null != t ? t : (a = r, n.FeatureSetDefaults.fromBinary(o.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), a));
    var a;
    const c = i.minimumEdition, u = i.maximumEdition;
    if (void 0 === c || void 0 === u || i.defaults.some((e)=>void 0 === e.edition)) throw new Error("Invalid FeatureSetDefaults");
    if (e < c) throw new Error(`Edition ${n.Edition[e]} is earlier than the minimum supported edition ${n.Edition[c]}`);
    if (u < e) throw new Error(`Edition ${n.Edition[e]} is later than the maximum supported edition ${n.Edition[u]}`);
    let l;
    for (const t of i.defaults){
        const r = null !== (s = t.edition) && void 0 !== s ? s : 0;
        if (r > e) continue;
        if (void 0 !== l && l.e > r) continue;
        let o;
        t.fixedFeatures && t.overridableFeatures ? (o = t.fixedFeatures, o.fromBinary(t.overridableFeatures.toBinary())) : o = t.fixedFeatures ? t.fixedFeatures : t.overridableFeatures ? t.overridableFeatures : new n.FeatureSet, l = {
            e: r,
            f: o
        };
    }
    if (void 0 === l) throw new Error(`No valid default found for edition ${n.Edition[e]}`);
    const d = l.f.toBinary(r);
    return (...t)=>{
        const o = n.FeatureSet.fromBinary(d, r);
        for (const e of t)void 0 !== e && o.fromBinary(e.toBinary(r), r);
        if (!function(e) {
            for (const t of n.FeatureSet.fields.list()){
                const r = e[t.localName];
                if (void 0 === r) return !1;
                if ("enum" == t.kind && 0 === r) return !1;
            }
            return !0;
        }(o)) throw new Error(`Invalid FeatureSet for edition ${n.Edition[e]}`);
        return o;
    };
};
