import { Qj, _Wt, sVi } from "./A3u.js";
import { He, Hie, Ps, S, Se, Z3e, cn, rn, wO, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { FT } from "./arraysFind.js";
import { Am, bn } from "./async.js";
import { Ar, Eo } from "./cancellation.js";
import { Pe, _i } from "./codicons.js";
import { X_o, olh } from "./editorNavigationQuickAccess.js";
import { S_e } from "./fuzzyScorer.js";
import { Jc, kh } from "./languageFeatures.js";
import { Wp, bwe } from "./languages.js";
import { rt } from "./nls.js";
import { Ere, xre } from "./outlineModel.js";
import { l3c } from "./qIc.js";
import { dt, qi } from "./range.js";
import { Ft, Sr } from "./themables.js";
import { x } from "./tslib.es6.js";
var tte, UKi, $Ki;
export { $Ki, UKi, tte };
var __wakaru_Z4v_initialized = false;
export function Z4v() {
if (__wakaru_Z4v_initialized) return;
__wakaru_Z4v_initialized = true;
"use strict";
x(), bn(), Ar(), _i(), Sr(), S_e(), Se(), Ps(), qi(), Wp(), xre(), olh(), rt(), kh(), FT(), tte = class extends X_o {
    constructor(e, t, n = Object.create(null)){
        super(n), this._languageFeaturesService = e, this._outlineModelService = t, this.options = n, this.options.canAcceptInBackground = !0;
    }
    provideWithoutTextEditor(e) {
        return this.provideLabelPick(e, S(1481, null)), we.None;
    }
    provideWithTextEditor(e, t, n, i) {
        const r = e.editor, s = this.getModel(r);
        return s ? this._languageFeaturesService.documentSymbolProvider.has(s) ? this.doProvideWithEditorSymbols(e, s, t, n, i) : this.doProvideWithoutEditorSymbols(e, s, t, n) : we.None;
    }
    doProvideWithoutEditorSymbols(e, t, n, i) {
        const r = new He;
        return this.provideLabelPick(n, S(1482, null)), (async ()=>!await this.waitForLanguageSymbolRegistry(t, r) || i.isCancellationRequested || r.add(this.doProvideWithEditorSymbols(e, t, n, i)))(), r;
    }
    provideLabelPick(e, t) {
        e.items = [
            {
                label: t,
                index: 0,
                kind: 14
            }
        ], e.ariaLabel = t;
    }
    async waitForLanguageSymbolRegistry(e, t) {
        if (this._languageFeaturesService.documentSymbolProvider.has(e)) return !0;
        const n = new Am, i = t.add(this._languageFeaturesService.documentSymbolProvider.onDidChange(()=>{
            this._languageFeaturesService.documentSymbolProvider.has(e) && (i.dispose(), n.complete(!0));
        }));
        return t.add(rn(()=>n.complete(!1))), n.p;
    }
    doProvideWithEditorSymbols(e, t, n, i, r) {
        const s = e.editor, o = new He;
        o.add(n.onDidAccept((u)=>{
            const [h] = n.selectedItems;
            h && h.range && (this.gotoLocation(e, {
                range: h.range.selection,
                keyMods: n.keyMods,
                preserveFocus: u.inBackground
            }), r?.handleAccept?.(h, u.inBackground), u.inBackground || n.hide());
        })), o.add(n.onDidTriggerItemButton(({ item: u })=>{
            u && u.range && (this.gotoLocation(e, {
                range: u.range.selection,
                keyMods: n.keyMods,
                forceSideBySide: !0
            }), n.hide());
        }));
        const a = this.getDocumentSymbols(t, i), c = o.add(new cn), l = async (u)=>{
            c?.value?.cancel(), n.busy = !1, c.value = new Eo, n.busy = !0;
            try {
                const h = Qj(n.value.substr(tte.PREFIX.length).trim()), p = await this.doGetSymbolPicks(a, h, void 0, c.value.token, t);
                if (i.isCancellationRequested) return;
                if (p.length > 0) {
                    if (n.items = p, u && h.original.length === 0) {
                        const g = Hie(p, (f)=>!!(f.type !== "separator" && f.range && dt.containsPosition(f.range.decoration, u)));
                        g && (n.activeItems = [
                            g
                        ]);
                    }
                } else h.original.length > 0 ? this.provideLabelPick(n, S(1483, null)) : this.provideLabelPick(n, S(1484, null));
            } finally{
                i.isCancellationRequested || (n.busy = !1);
            }
        };
        return o.add(n.onDidChangeValue(()=>l(void 0))), l(s.getSelection()?.getPosition()), o.add(n.onDidChangeActive(()=>{
            const [u] = n.activeItems;
            u && u.range && (s.revealRangeInCenter(u.range.selection, 0), this.addDecorations(s, u.range.decoration));
        })), o;
    }
    async doGetSymbolPicks(e, t, n, i, r) {
        const s = await e;
        if (i.isCancellationRequested) return [];
        const o = t.original.indexOf(tte.SCOPE_PREFIX) === 0, a = o ? 1 : 0;
        let c, l;
        t.values && t.values.length > 1 ? (c = sVi(t.values[0]), l = sVi(t.values.slice(1))) : c = t;
        let u;
        const h = this.options?.openSideBySideDirection?.();
        h && (u = [
            {
                iconClass: h === "right" ? Ft.asClassName(Pe.splitHorizontal) : Ft.asClassName(Pe.splitVertical),
                tooltip: S(h === "right" ? 1485 : 1486, null)
            }
        ]);
        const p = [];
        for(let b = 0; b < s.length; b++){
            const y = s[b], T = Z3e(y.name), E = `$(${bwe.toIcon(y.kind).id}) ${T}`, A = E.length - T.length;
            let R = y.containerName;
            n?.extraContainerLabel && (R ? R = `${n.extraContainerLabel} \u2022 ${R}` : R = n.extraContainerLabel);
            let D, P, N, O;
            if (t.original.length > a) {
                let H = !1;
                if (c !== t && ([D, P] = _Wt(E, {
                    ...t,
                    values: void 0
                }, a, A), typeof D == "number" && (H = !0)), typeof D != "number" && ([D, P] = _Wt(E, c, a, A), typeof D != "number")) continue;
                if (!H && l) {
                    if (R && l.original.length > 0 && ([N, O] = _Wt(R, l)), typeof N != "number") continue;
                    typeof D == "number" && (D += N);
                }
            }
            const F = y.tags && y.tags.indexOf(1) >= 0;
            p.push({
                index: b,
                kind: y.kind,
                score: D,
                label: E,
                ariaLabel: l3c(y.name, y.kind),
                description: R,
                highlights: F ? void 0 : {
                    label: P,
                    description: O
                },
                range: {
                    selection: dt.collapseToStart(y.selectionRange),
                    decoration: y.range
                },
                uri: r.uri,
                symbolName: T,
                strikethrough: F,
                buttons: u
            });
        }
        const g = p.sort((b, y)=>o ? this.compareByKindAndScore(b, y) : this.compareByScore(b, y));
        let f = [];
        if (o) {
            let b = function() {
                T && typeof y == "number" && E > 0 && (T.label = wO($Ki[y] || UKi, E));
            };
            var v = b;
            let y, T, E = 0;
            for (const A of g)y !== A.kind ? (b(), y = A.kind, E = 1, T = {
                type: "separator"
            }, f.push(T)) : E++, f.push(A);
            b();
        } else g.length > 0 && (f = [
            {
                label: S(1487, null, p.length),
                type: "separator"
            },
            ...g
        ]);
        return f;
    }
    compareByScore(e, t) {
        if (typeof e.score != "number" && typeof t.score == "number") return 1;
        if (typeof e.score == "number" && typeof t.score != "number") return -1;
        if (typeof e.score == "number" && typeof t.score == "number") {
            if (e.score > t.score) return -1;
            if (e.score < t.score) return 1;
        }
        return e.index < t.index ? -1 : e.index > t.index ? 1 : 0;
    }
    compareByKindAndScore(e, t) {
        const n = $Ki[e.kind] || UKi, i = $Ki[t.kind] || UKi, r = n.localeCompare(i);
        return r === 0 ? this.compareByScore(e, t) : r;
    }
    async getDocumentSymbols(e, t) {
        const n = await this._outlineModelService.getOrCreate(e, t);
        return t.isCancellationRequested ? [] : n.asListOfDocumentSymbols();
    }
}, tte.PREFIX = "@", tte.SCOPE_PREFIX = ":", tte.PREFIX_BY_CATEGORY = `${tte.PREFIX}${tte.SCOPE_PREFIX}`, tte = ie([
    C(0, Jc),
    C(1, Ere)
], tte), UKi = S(1488, null), $Ki = {
    5: S(1489, null),
    11: S(1490, null),
    8: S(1491, null),
    12: S(1492, null),
    4: S(1493, null),
    22: S(1494, null),
    23: S(1495, null),
    24: S(1496, null),
    10: S(1497, null),
    2: S(1498, null),
    3: S(1499, null),
    25: S(1500, null),
    1: S(1501, null),
    6: S(1502, null),
    9: S(1503, null),
    21: S(1504, null),
    14: S(1505, null),
    0: S(1506, null),
    17: S(1507, null),
    15: S(1508, null),
    16: S(1509, null),
    18: S(1510, null),
    19: S(1511, null),
    7: S(1512, null),
    13: S(1513, null)
};

}
