import { D, Fa, Kxe, Nt, Pn, Qe, Vn, fet, rY, st } from "./Iwo.js";
import { p4 } from "./arraysFind.js";
import { df, qn } from "./async.js";
import { El, yo } from "./cancellation.js";
import { gs, yt } from "./codicons.js";
import { OKm, hel } from "./editorNavigationQuickAccess.js";
import { kJ } from "./fuzzyScorer.js";
import { Dg, Nd } from "./languageFeatures.js";
import { Iy, lHe } from "./languages.js";
import { Bt } from "./nls.js";
import { Rwe, p_e } from "./outlineModel.js";
import { Qs, qt } from "./range.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { MXr, OB, aEn } from "./yBp.js";
import { F8d } from "./ze.js";
var Gpe, nns, ins;
export { Gpe, ins, nns };
var __wakaru_usk_initialized = false;
export function usk() {
if (__wakaru_usk_initialized) return;
__wakaru_usk_initialized = true;
"use strict";
E(), qn(), yo(), gs(), ta(), kJ(), Qe(), Fa(), Qs(), Iy(), p_e(), OKm(), Bt(), Dg(), p4(), Gpe = class extends hel {
    constructor(t, e, n = Object.create(null)){
        super(n), this._languageFeaturesService = t, this._outlineModelService = e, this.options = n, this.options.canAcceptInBackground = !0;
    }
    provideWithoutTextEditor(t) {
        return this.provideLabelPick(t, D(1481, null)), st.None;
    }
    provideWithTextEditor(t, e, n, i) {
        const r = t.editor, s = this.getModel(r);
        return s ? this._languageFeaturesService.documentSymbolProvider.has(s) ? this.doProvideWithEditorSymbols(t, s, e, n, i) : this.doProvideWithoutEditorSymbols(t, s, e, n) : st.None;
    }
    doProvideWithoutEditorSymbols(t, e, n, i) {
        const r = new Nt;
        return this.provideLabelPick(n, D(1482, null)), (async ()=>!await this.waitForLanguageSymbolRegistry(e, r) || i.isCancellationRequested || r.add(this.doProvideWithEditorSymbols(t, e, n, i)))(), r;
    }
    provideLabelPick(t, e) {
        t.items = [
            {
                label: e,
                index: 0,
                kind: 14
            }
        ], t.ariaLabel = e;
    }
    async waitForLanguageSymbolRegistry(t, e) {
        if (this._languageFeaturesService.documentSymbolProvider.has(t)) return !0;
        const n = new df, i = e.add(this._languageFeaturesService.documentSymbolProvider.onDidChange(()=>{
            this._languageFeaturesService.documentSymbolProvider.has(t) && (i.dispose(), n.complete(!0));
        }));
        return e.add(Pn(()=>n.complete(!1))), n.p;
    }
    doProvideWithEditorSymbols(t, e, n, i, r) {
        const s = t.editor, o = new Nt;
        o.add(n.onDidAccept((u)=>{
            const [d] = n.selectedItems;
            d && d.range && (this.gotoLocation(t, {
                range: d.range.selection,
                keyMods: n.keyMods,
                preserveFocus: u.inBackground
            }), r?.handleAccept?.(d, u.inBackground), u.inBackground || n.hide());
        })), o.add(n.onDidTriggerItemButton(({ item: u })=>{
            u && u.range && (this.gotoLocation(t, {
                range: u.range.selection,
                keyMods: n.keyMods,
                forceSideBySide: !0
            }), n.hide());
        }));
        const a = this.getDocumentSymbols(e, i), l = o.add(new Vn), c = async (u)=>{
            l?.value?.cancel(), n.busy = !1, l.value = new El, n.busy = !0;
            try {
                const d = OB(n.value.substr(Gpe.PREFIX.length).trim()), h = await this.doGetSymbolPicks(a, d, void 0, l.value.token, e);
                if (i.isCancellationRequested) return;
                if (h.length > 0) {
                    if (n.items = h, u && d.original.length === 0) {
                        const p = Kxe(h, (g)=>!!(g.type !== "separator" && g.range && qt.containsPosition(g.range.decoration, u)));
                        p && (n.activeItems = [
                            p
                        ]);
                    }
                } else d.original.length > 0 ? this.provideLabelPick(n, D(1483, null)) : this.provideLabelPick(n, D(1484, null));
            } finally{
                i.isCancellationRequested || (n.busy = !1);
            }
        };
        return o.add(n.onDidChangeValue(()=>c(void 0))), c(s.getSelection()?.getPosition()), o.add(n.onDidChangeActive(()=>{
            const [u] = n.activeItems;
            u && u.range && (s.revealRangeInCenter(u.range.selection, 0), this.addDecorations(s, u.range.decoration));
        })), o;
    }
    async doGetSymbolPicks(t, e, n, i, r) {
        const s = await t;
        if (i.isCancellationRequested) return [];
        const o = e.original.indexOf(Gpe.SCOPE_PREFIX) === 0, a = o ? 1 : 0;
        let l, c;
        e.values && e.values.length > 1 ? (l = MXr(e.values[0]), c = MXr(e.values.slice(1))) : l = e;
        let u;
        const d = this.options?.openSideBySideDirection?.();
        d && (u = [
            {
                iconClass: d === "right" ? Gn.asClassName(yt.splitHorizontal) : Gn.asClassName(yt.splitVertical),
                tooltip: D(d === "right" ? 1485 : 1486, null)
            }
        ]);
        const h = [];
        for(let _ = 0; _ < s.length; _++){
            const b = s[_], y = fet(b.name), S = `$(${lHe.toIcon(b.kind).id}) ${y}`, k = S.length - y.length;
            let C = b.containerName;
            n?.extraContainerLabel && (C ? C = `${n.extraContainerLabel} \u2022 ${C}` : C = n.extraContainerLabel);
            let T, I, A, P;
            if (e.original.length > a) {
                let O = !1;
                if (l !== e && ([T, I] = aEn(S, {
                    ...e,
                    values: void 0
                }, a, k), typeof T == "number" && (O = !0)), typeof T != "number" && ([T, I] = aEn(S, l, a, k), typeof T != "number")) continue;
                if (!O && c) {
                    if (C && c.original.length > 0 && ([A, P] = aEn(C, c)), typeof A != "number") continue;
                    typeof T == "number" && (T += A);
                }
            }
            const M = b.tags && b.tags.indexOf(1) >= 0;
            h.push({
                index: _,
                kind: b.kind,
                score: T,
                label: S,
                ariaLabel: F8d(b.name, b.kind),
                description: C,
                highlights: M ? void 0 : {
                    label: I,
                    description: P
                },
                range: {
                    selection: qt.collapseToStart(b.selectionRange),
                    decoration: b.range
                },
                uri: r.uri,
                symbolName: y,
                strikethrough: M,
                buttons: u
            });
        }
        const p = h.sort((_, b)=>o ? this.compareByKindAndScore(_, b) : this.compareByScore(_, b));
        let g = [];
        if (o) {
            let _ = function() {
                y && typeof b == "number" && S > 0 && (y.label = rY(ins[b] || nns, S));
            };
            var f = _;
            let b, y, S = 0;
            for (const k of p)b !== k.kind ? (_(), b = k.kind, S = 1, y = {
                type: "separator"
            }, g.push(y)) : S++, g.push(k);
            _();
        } else p.length > 0 && (g = [
            {
                label: D(1487, null, h.length),
                type: "separator"
            },
            ...p
        ]);
        return g;
    }
    compareByScore(t, e) {
        if (typeof t.score != "number" && typeof e.score == "number") return 1;
        if (typeof t.score == "number" && typeof e.score != "number") return -1;
        if (typeof t.score == "number" && typeof e.score == "number") {
            if (t.score > e.score) return -1;
            if (t.score < e.score) return 1;
        }
        return t.index < e.index ? -1 : t.index > e.index ? 1 : 0;
    }
    compareByKindAndScore(t, e) {
        const n = ins[t.kind] || nns, i = ins[e.kind] || nns, r = n.localeCompare(i);
        return r === 0 ? this.compareByScore(t, e) : r;
    }
    async getDocumentSymbols(t, e) {
        const n = await this._outlineModelService.getOrCreate(t, e);
        return e.isCancellationRequested ? [] : n.asListOfDocumentSymbols();
    }
}, Gpe.PREFIX = "@", Gpe.SCOPE_PREFIX = ":", Gpe.PREFIX_BY_CATEGORY = `${Gpe.PREFIX}${Gpe.SCOPE_PREFIX}`, Gpe = Re([
    F(0, Nd),
    F(1, Rwe)
], Gpe), nns = D(1488, null), ins = {
    5: D(1489, null),
    11: D(1490, null),
    8: D(1491, null),
    12: D(1492, null),
    4: D(1493, null),
    22: D(1494, null),
    23: D(1495, null),
    24: D(1496, null),
    10: D(1497, null),
    2: D(1498, null),
    3: D(1499, null),
    25: D(1500, null),
    1: D(1501, null),
    6: D(1502, null),
    9: D(1503, null),
    21: D(1504, null),
    14: D(1505, null),
    0: D(1506, null),
    17: D(1507, null),
    15: D(1508, null),
    16: D(1509, null),
    18: D(1510, null),
    19: D(1511, null),
    7: D(1512, null),
    13: D(1513, null)
};

}
