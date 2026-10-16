Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createFeatureResolver = void 0;
const s = require("./module-7374.js"), o = require("./module-9526.js");
exports.createFeatureResolver = function(e, a, n) {
    var r;
    const t = null != a ? a : (i = n, s.FeatureSetDefaults.fromBinary(o.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), i));
    var i;
    const m = t.minimumEdition, l = t.maximumEdition;
    if (void 0 === m || void 0 === l || t.defaults.some((e)=>void 0 === e.edition)) throw new Error("Invalid FeatureSetDefaults");
    if (e < m) throw new Error(`Edition ${s.Edition[e]} is earlier than the minimum supported edition ${s.Edition[m]}`);
    if (l < e) throw new Error(`Edition ${s.Edition[e]} is later than the maximum supported edition ${s.Edition[l]}`);
    let d;
    for (const a of t.defaults){
        const n = null !== (r = a.edition) && void 0 !== r ? r : 0;
        if (n > e) continue;
        if (void 0 !== d && d.e > n) continue;
        let o;
        a.fixedFeatures && a.overridableFeatures ? (o = a.fixedFeatures, o.fromBinary(a.overridableFeatures.toBinary())) : o = a.fixedFeatures ? a.fixedFeatures : a.overridableFeatures ? a.overridableFeatures : new s.FeatureSet, d = {
            e: n,
            f: o
        };
    }
    if (void 0 === d) throw new Error(`No valid default found for edition ${s.Edition[e]}`);
    const c = d.f.toBinary(n);
    return (...a)=>{
        const o = s.FeatureSet.fromBinary(c, n);
        for (const e of a)void 0 !== e && o.fromBinary(e.toBinary(n), n);
        if (!function(e) {
            for (const a of s.FeatureSet.fields.list()){
                const n = e[a.localName];
                if (void 0 === n) return !1;
                if ("enum" == a.kind && 0 === n) return !1;
            }
            return !0;
        }(o)) throw new Error(`Invalid FeatureSet for edition ${s.Edition[e]}`);
        return o;
    };
};
