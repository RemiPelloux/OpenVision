"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createFeatureResolver = void 0;
const t = require("./module-7374.js"), s = require("./module-9526.js");
exports.createFeatureResolver = function(e, a, n) {
    var o;
    const r = null != a ? a : (i = n, t.FeatureSetDefaults.fromBinary(s.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), i));
    var i;
    const l = r.minimumEdition, d = r.maximumEdition;
    if (void 0 === l || void 0 === d || r.defaults.some((e)=>void 0 === e.edition)) throw new Error("Invalid FeatureSetDefaults");
    if (e < l) throw new Error(`Edition ${t.Edition[e]} is earlier than the minimum supported edition ${t.Edition[l]}`);
    if (d < e) throw new Error(`Edition ${t.Edition[e]} is later than the maximum supported edition ${t.Edition[d]}`);
    let m;
    for (const a of r.defaults){
        const n = null !== (o = a.edition) && void 0 !== o ? o : 0;
        if (n > e) continue;
        if (void 0 !== m && m.e > n) continue;
        let s;
        a.fixedFeatures && a.overridableFeatures ? (s = a.fixedFeatures, s.fromBinary(a.overridableFeatures.toBinary())) : s = a.fixedFeatures ? a.fixedFeatures : a.overridableFeatures ? a.overridableFeatures : new t.FeatureSet, m = {
            e: n,
            f: s
        };
    }
    if (void 0 === m) throw new Error(`No valid default found for edition ${t.Edition[e]}`);
    const c = m.f.toBinary(n);
    return (...a)=>{
        const s = t.FeatureSet.fromBinary(c, n);
        for (const e of a)void 0 !== e && s.fromBinary(e.toBinary(n), n);
        if (!function(e) {
            for (const a of t.FeatureSet.fields.list()){
                const n = e[a.localName];
                if (void 0 === n) return !1;
                if ("enum" == a.kind && 0 === n) return !1;
            }
            return !0;
        }(s)) throw new Error(`Invalid FeatureSet for edition ${t.Edition[e]}`);
        return s;
    };
};
