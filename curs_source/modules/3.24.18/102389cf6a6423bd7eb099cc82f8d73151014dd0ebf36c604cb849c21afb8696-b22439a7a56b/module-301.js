Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createFeatureResolver = void 0;
const o = require("./module-374.js"), s = require("./module-526.js");
exports.createFeatureResolver = function(e, a, n) {
    var t;
    const r = null != a ? a : (i = n, o.FeatureSetDefaults.fromBinary(s.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), i));
    var i;
    const m = r.minimumEdition, l = r.maximumEdition;
    if (void 0 === m || void 0 === l || r.defaults.some((e)=>void 0 === e.edition)) throw new Error("Invalid FeatureSetDefaults");
    if (e < m) throw new Error(`Edition ${o.Edition[e]} is earlier than the minimum supported edition ${o.Edition[m]}`);
    if (l < e) throw new Error(`Edition ${o.Edition[e]} is later than the maximum supported edition ${o.Edition[l]}`);
    let d;
    for (const a of r.defaults){
        const n = null !== (t = a.edition) && void 0 !== t ? t : 0;
        if (n > e) continue;
        if (void 0 !== d && d.e > n) continue;
        let s;
        a.fixedFeatures && a.overridableFeatures ? (s = a.fixedFeatures, s.fromBinary(a.overridableFeatures.toBinary())) : s = a.fixedFeatures ? a.fixedFeatures : a.overridableFeatures ? a.overridableFeatures : new o.FeatureSet, d = {
            e: n,
            f: s
        };
    }
    if (void 0 === d) throw new Error(`No valid default found for edition ${o.Edition[e]}`);
    const c = d.f.toBinary(n);
    return (...a)=>{
        const s = o.FeatureSet.fromBinary(c, n);
        for (const e of a)void 0 !== e && s.fromBinary(e.toBinary(n), n);
        if (!function(e) {
            for (const a of o.FeatureSet.fields.list()){
                const n = e[a.localName];
                if (void 0 === n) return !1;
                if ("enum" == a.kind && 0 === n) return !1;
            }
            return !0;
        }(s)) throw new Error(`Invalid FeatureSet for edition ${o.Edition[e]}`);
        return s;
    };
};
