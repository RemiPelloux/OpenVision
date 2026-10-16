import { L0o, Ovt } from "./Iwo.js";
import { bo } from "./arrays.js";
import { J3a, dDp } from "./bracketSelections.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
var NWr, eNa;
export { NWr, eNa };
var __wakaru_hDp_initialized = false;
export function hDp() {
if (__wakaru_hDp_initialized) return;
__wakaru_hDp_initialized = true;
"use strict";
E(), bo(), Qs(), dDp(), NWr = class $sn {
    static async create(e, n) {
        if (!n.getOption(123).localityBonus || !n.hasModel()) return $sn.None;
        const i = n.getModel(), r = n.getPosition();
        if (!e.canComputeWordRanges(i.uri)) return $sn.None;
        const [s] = await new J3a().provideSelectionRanges(i, [
            r
        ]);
        if (s.length === 0) return $sn.None;
        const o = await e.computeWordRanges(i.uri, s[0].range);
        if (!o) return $sn.None;
        const a = i.getWordUntilPosition(r);
        return delete o[a.word], new class extends $sn {
            distance(l, c) {
                if (!r.equals(n.getPosition())) return 0;
                if (c.kind === 17) return 2 << 20;
                const u = typeof c.label == "string" ? c.label : c.label.label, d = o[u];
                if (L0o(d)) return 2 << 20;
                const h = Ovt(d, qt.fromPositions(l), qt.compareRangesUsingStarts), p = h >= 0 ? d[h] : d[Math.max(0, ~h - 1)];
                let g = s.length;
                for (const f of s){
                    if (!qt.containsRange(f.range, p)) break;
                    g -= 1;
                }
                return g;
            }
        };
    }
}, NWr.None = new class extends NWr {
    distance() {
        return 0;
    }
}, eNa = NWr;

}
