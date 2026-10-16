"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createFeatureResolver = void 0;
const n = require("./module-7374.js"), s = require("./module-9526.js");
exports.createFeatureResolver = function(t, e, r) {
    var i;
    const o = null != e ? e : (a = r, n.FeatureSetDefaults.fromBinary(s.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), a));
    var a;
    const u = o.minimumEdition, c = o.maximumEdition;
    if (void 0 === u || void 0 === c || o.defaults.some((t)=>void 0 === t.edition)) throw new Error("Invalid FeatureSetDefaults");
    if (t < u) throw new Error(`Edition ${n.Edition[t]} is earlier than the minimum supported edition ${n.Edition[u]}`);
    if (c < t) throw new Error(`Edition ${n.Edition[t]} is later than the maximum supported edition ${n.Edition[c]}`);
    let l;
    for (const e of o.defaults){
        const r = null !== (i = e.edition) && void 0 !== i ? i : 0;
        if (r > t) continue;
        if (void 0 !== l && l.e > r) continue;
        let s;
        e.fixedFeatures && e.overridableFeatures ? (s = e.fixedFeatures, s.fromBinary(e.overridableFeatures.toBinary())) : s = e.fixedFeatures ? e.fixedFeatures : e.overridableFeatures ? e.overridableFeatures : new n.FeatureSet, l = {
            e: r,
            f: s
        };
    }
    if (void 0 === l) throw new Error(`No valid default found for edition ${n.Edition[t]}`);
    const m = l.f.toBinary(r);
    return (...e)=>{
        const s = n.FeatureSet.fromBinary(m, r);
        for (const t of e)void 0 !== t && s.fromBinary(t.toBinary(r), r);
        if (!function(t) {
            for (const e of n.FeatureSet.fields.list()){
                const r = t[e.localName];
                if (void 0 === r) return !1;
                if ("enum" == e.kind && 0 === r) return !1;
            }
            return !0;
        }(s)) throw new Error(`Invalid FeatureSet for edition ${n.Edition[t]}`);
        return s;
    };
};
