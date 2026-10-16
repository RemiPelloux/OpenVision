import { At, D, Ei, Nt, Pn, Qe, Vn, Wd, st, xr } from "./Iwo.js";
import { K4, mze, x4e } from "./accessibilityConfiguration.js";
import { Ft, es, sn } from "./actions_2.js";
import { qn } from "./async.js";
import { El, yo } from "./cancellation.js";
import { or, yi } from "./configuration.js";
import { Hi, mt } from "./contextkey.js";
import { xw } from "./editorBrowser.js";
import { Ld, _a } from "./editorGroupsService.js";
import { Wo, gr } from "./editorService.js";
import { s6 } from "./filters.js";
import { kJ } from "./fuzzyScorer.js";
import { Gpe, usk } from "./gotoSymbolQuickAccess.js";
import { tRe } from "./iconLabels.js";
import { Ma, Ze, ut } from "./keyCodes.js";
import { Dg, Nd } from "./languageFeatures.js";
import { Bt } from "./nls.js";
import { MCi, rns } from "./outline.js";
import { Rwe, p_e } from "./outlineModel.js";
import { Eo, Fi } from "./platform_2.js";
import { e4e, kqe } from "./quickAccess.js";
import { Cl, Gu, kW } from "./quickInput.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { OB } from "./yBp.js";
import { HCr, Ht, Ivn, Wfn, int } from "./ze.js";
var LCe, Cel, Tel;
export { Cel, LCe, Tel };
var __wakaru_WKm_initialized = false;
export function WKm() {
if (__wakaru_WKm_initialized) return;
__wakaru_WKm_initialized = true;
"use strict";
E(), Bt(), Gu(), Wo(), Eo(), kqe(), usk(), or(), Qe(), qn(), yo(), es(), Ma(), kJ(), s6(), Ei(), rns(), xw(), Ld(), p_e(), Dg(), Hi(), mze(), tRe(), LCe = class extends Gpe {
    constructor(t, e, n, i, r, s){
        super(i, s, {
            openSideBySideDirection: ()=>this.configuration.openSideBySideDirection
        }), this.editorService = t, this.editorGroupService = e, this.configurationService = n, this.outlineService = r, this.onDidActiveTextEditorControlChange = this.editorService.onDidActiveEditorChange;
    }
    get configuration() {
        const t = this.configurationService.getValue().workbench?.editor;
        return {
            openEditorPinned: !t?.enablePreviewFromQuickOpen || !t?.enablePreview,
            openSideBySideDirection: t?.openSideBySideDirection
        };
    }
    get activeTextEditorControl() {
        if (!Ivn(this.editorService.activeEditorPane?.getControl())) return this.editorService.activeTextEditorControl;
    }
    gotoLocation(t, e) {
        if ((e.keyMods.alt || this.configuration.openEditorPinned && e.keyMods.ctrlCmd || e.forceSideBySide) && this.editorService.activeEditor) {
            t.restoreViewState?.();
            const n = {
                selection: e.range,
                pinned: e.keyMods.ctrlCmd || this.configuration.openEditorPinned,
                preserveFocus: e.preserveFocus
            };
            this.editorGroupService.sideGroup.openEditor(this.editorService.activeEditor, n);
        } else super.gotoLocation(t, e);
    }
    async getSymbolPicks(t, e, n, i, r) {
        return !await Promise.race([
            this.waitForLanguageSymbolRegistry(t, i),
            Wd(LCe.SYMBOL_PICKS_TIMEOUT)
        ]) || r.isCancellationRequested ? [] : this.doGetSymbolPicks(this.getDocumentSymbols(t, r), OB(e), n, r, t);
    }
    provideWithoutTextEditor(t) {
        return this.canPickWithOutlineService() ? this.doGetOutlinePicks(t) : super.provideWithoutTextEditor(t);
    }
    canPickWithOutlineService() {
        return this.editorService.activeEditorPane ? this.outlineService.canCreateOutline(this.editorService.activeEditorPane) : !1;
    }
    doGetOutlinePicks(t) {
        const e = this.editorService.activeEditorPane;
        if (!e) return st.None;
        const n = new El, i = new Nt;
        return i.add(Pn(()=>n.dispose(!0))), t.busy = !0, this.outlineService.createOutline(e, 4, n.token).then((r)=>{
            if (!r) return;
            if (n.token.isCancellationRequested) {
                r.dispose();
                return;
            }
            i.add(r);
            const s = r.captureViewState();
            i.add(Pn(()=>{
                t.selectedItems.length === 0 && s.dispose();
            }));
            const o = r.config.quickPickDataSource.getQuickPickElements(), a = o.map((u, d)=>({
                    kind: 0,
                    index: d,
                    score: 0,
                    label: u.label,
                    description: u.description,
                    ariaLabel: u.ariaLabel,
                    iconClasses: u.iconClasses
                }));
            i.add(t.onDidAccept(()=>{
                t.hide();
                const [u] = t.selectedItems;
                u && o[u.index] && r.reveal(o[u.index].element, {}, !1, !1);
            }));
            const l = ()=>{
                const u = a.filter((d)=>{
                    if (t.value === "@") return d.score = 0, d.highlights = void 0, !0;
                    const h = t.value.substring(Gpe.PREFIX.length).trim(), p = Wfn(d.label), g = int(h, h.toLowerCase(), 0, p.text, p.text.toLowerCase(), 0, {
                        firstMatchCanBeWeak: !0,
                        boostFullMatch: !0
                    });
                    return g ? (d.score = g[1], d.highlights = {
                        label: HCr(h, p) ?? void 0
                    }, !0) : !1;
                });
                if (u.length === 0) {
                    const d = D(4984, null);
                    t.items = [
                        {
                            label: d,
                            index: -1,
                            kind: 14
                        }
                    ], t.ariaLabel = d;
                } else t.items = u;
            };
            l(), i.add(t.onDidChangeValue(l));
            const c = new Vn;
            i.add(c), i.add(t.onDidChangeActive(()=>{
                const [u] = t.activeItems;
                u && o[u.index] ? c.value = r.preview(o[u.index].element) : c.clear();
            }));
        }).catch((r)=>{
            xr(r), t.hide();
        }).finally(()=>{
            t.busy = !1;
        }), i;
    }
}, LCe.SYMBOL_PICKS_TIMEOUT = 8e3, LCe = Re([
    F(0, gr),
    F(1, _a),
    F(2, yi),
    F(3, Nd),
    F(4, MCi),
    F(5, Rwe)
], LCe), Cel = class lPb extends sn {
    constructor(){
        super({
            id: lPb.ID,
            title: {
                ...At(4989, "Go to Symbol in Editor..."),
                mnemonicTitle: D(4985, null)
            },
            f1: !0,
            keybinding: {
                when: mt.and(K4.negate(), x4e.negate()),
                weight: 200,
                primary: ut.CtrlCmd | ut.Shift | Ze.KeyO
            },
            menu: [
                {
                    id: Ft.MenubarGoMenu,
                    group: "4_symbol_nav",
                    order: 1
                }
            ]
        });
    }
    run(e) {
        e.get(Cl).quickAccess.show(LCe.PREFIX, {
            itemActivation: kW.NONE
        });
    }
}, Cel.ID = "workbench.action.gotoSymbol", Tel = Cel, Ht(Tel), Fi.as(e4e.Quickaccess).registerQuickAccessProvider({
    ctor: LCe,
    prefix: Gpe.PREFIX,
    contextKey: "inFileSymbolsPicker",
    placeholder: D(4986, null),
    helpEntries: [
        {
            description: D(4987, null),
            prefix: Gpe.PREFIX,
            commandId: Tel.ID,
            commandCenterOrder: 40
        },
        {
            description: D(4988, null),
            prefix: Gpe.PREFIX_BY_CATEGORY
        }
    ]
});

}
