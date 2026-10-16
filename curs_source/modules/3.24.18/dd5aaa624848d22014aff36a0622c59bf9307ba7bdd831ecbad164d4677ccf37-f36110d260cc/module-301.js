Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createFeatureResolver = void 0;
const r = require("./module-374.js"), o = require("./module-526.js");
exports.createFeatureResolver = function(e, t, n) {
    var a;
    const s = null != t ? t : (i = n, r.FeatureSetDefaults.fromBinary(o.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), i));
    var i;
    const l = s.minimumEdition, u = s.maximumEdition;
    if (void 0 === l || void 0 === u || s.defaults.some((e)=>void 0 === e.edition)) throw new Error("Invalid FeatureSetDefaults");
    if (e < l) throw new Error(`Edition ${r.Edition[e]} is earlier than the minimum supported edition ${r.Edition[l]}`);
    if (u < e) throw new Error(`Edition ${r.Edition[e]} is later than the maximum supported edition ${r.Edition[u]}`);
    let c;
    for (const t of s.defaults){
        const n = null !== (a = t.edition) && void 0 !== a ? a : 0;
        if (n > e) continue;
        if (void 0 !== c && c.e > n) continue;
        let o;
        t.fixedFeatures && t.overridableFeatures ? (o = t.fixedFeatures, o.fromBinary(t.overridableFeatures.toBinary())) : o = t.fixedFeatures ? t.fixedFeatures : t.overridableFeatures ? t.overridableFeatures : new r.FeatureSet, c = {
            e: n,
            f: o
        };
    }
    if (void 0 === c) throw new Error(`No valid default found for edition ${r.Edition[e]}`);
    const m = c.f.toBinary(n);
    return (...t)=>{
        const o = r.FeatureSet.fromBinary(m, n);
        for (const e of t)void 0 !== e && o.fromBinary(e.toBinary(n), n);
        if (!function(e) {
            for (const t of r.FeatureSet.fields.list()){
                const n = e[t.localName];
                if (void 0 === n) return !1;
                if ("enum" == t.kind && 0 === n) return !1;
            }
            return !0;
        }(o)) throw new Error(`Invalid FeatureSet for edition ${r.Edition[e]}`);
        return o;
    };
};
