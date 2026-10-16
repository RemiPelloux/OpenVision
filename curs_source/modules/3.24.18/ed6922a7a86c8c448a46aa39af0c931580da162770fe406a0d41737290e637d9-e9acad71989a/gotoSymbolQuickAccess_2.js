import { Qj } from "./A3u.js";
import { Ae, He, Kl, S, Se, cn, ns, rn, si, we } from "./HVr.js";
import { Wde, hL, roe } from "./accessibilityConfiguration.js";
import { C, Re, ei, ie, pt } from "./actions_2.js";
import { bn } from "./async.js";
import { Ar, Eo } from "./cancellation.js";
import { Cn, qt } from "./configuration.js";
import { dn, he } from "./contextkey.js";
import { Nv } from "./editorBrowser.js";
import { Nc, gs } from "./editorGroupsService.js";
import { Ni, hn } from "./editorService.js";
import { Yy } from "./filters.js";
import { S_e } from "./fuzzyScorer.js";
import { Z4v, tte } from "./gotoSymbolQuickAccess.js";
import { bW } from "./iconLabels.js";
import { Ie, Pr, fe } from "./keyCodes.js";
import { Jc, kh } from "./languageFeatures.js";
import { rt } from "./nls.js";
import { Awt, zGt } from "./outline.js";
import { Ere, xre } from "./outlineModel.js";
import { kn, rr } from "./platform_2.js";
import { XFt, a5e, hFt, pbi, qe } from "./qIc.js";
import { IX, P$ } from "./quickAccess.js";
import { Gs, Ya, wW } from "./quickInput.js";
import { x } from "./tslib.es6.js";
var soe, obo, abo;
export { abo, obo, soe };
var __wakaru_cbo_initialized = false;
export function cbo() {
if (__wakaru_cbo_initialized) return;
__wakaru_cbo_initialized = true;
"use strict";
x(), rt(), Ya(), Ni(), rr(), IX(), Z4v(), Cn(), Se(), bn(), Ar(), ei(), Pr(), S_e(), Yy(), si(), zGt(), Nv(), Nc(), xre(), kh(), dn(), Wde(), bW(), soe = class extends tte {
    constructor(e, t, n, i, r, s){
        super(i, s, {
            openSideBySideDirection: ()=>this.configuration.openSideBySideDirection
        }), this.editorService = e, this.editorGroupService = t, this.configurationService = n, this.outlineService = r, this.onDidActiveTextEditorControlChange = this.editorService.onDidActiveEditorChange;
    }
    get configuration() {
        const e = this.configurationService.getValue().workbench?.editor;
        return {
            openEditorPinned: !e?.enablePreviewFromQuickOpen || !e?.enablePreview,
            openSideBySideDirection: e?.openSideBySideDirection
        };
    }
    get activeTextEditorControl() {
        if (!XFt(this.editorService.activeEditorPane?.getControl())) return this.editorService.activeTextEditorControl;
    }
    gotoLocation(e, t) {
        if ((t.keyMods.alt || this.configuration.openEditorPinned && t.keyMods.ctrlCmd || t.forceSideBySide) && this.editorService.activeEditor) {
            e.restoreViewState?.();
            const n = {
                selection: t.range,
                pinned: t.keyMods.ctrlCmd || this.configuration.openEditorPinned,
                preserveFocus: t.preserveFocus
            };
            this.editorGroupService.sideGroup.openEditor(this.editorService.activeEditor, n);
        } else super.gotoLocation(e, t);
    }
    async getSymbolPicks(e, t, n, i, r) {
        return !await Promise.race([
            this.waitForLanguageSymbolRegistry(e, i),
            Kl(soe.SYMBOL_PICKS_TIMEOUT)
        ]) || r.isCancellationRequested ? [] : this.doGetSymbolPicks(this.getDocumentSymbols(e, r), Qj(t), n, r, e);
    }
    provideWithoutTextEditor(e) {
        return this.canPickWithOutlineService() ? this.doGetOutlinePicks(e) : super.provideWithoutTextEditor(e);
    }
    canPickWithOutlineService() {
        return this.editorService.activeEditorPane ? this.outlineService.canCreateOutline(this.editorService.activeEditorPane) : !1;
    }
    doGetOutlinePicks(e) {
        const t = this.editorService.activeEditorPane;
        if (!t) return we.None;
        const n = new Eo, i = new He;
        return i.add(rn(()=>n.dispose(!0))), e.busy = !0, this.outlineService.createOutline(t, 4, n.token).then((r)=>{
            if (!r) return;
            if (n.token.isCancellationRequested) {
                r.dispose();
                return;
            }
            i.add(r);
            const s = r.captureViewState();
            i.add(rn(()=>{
                e.selectedItems.length === 0 && s.dispose();
            }));
            const o = r.config.quickPickDataSource.getQuickPickElements(), a = o.map((u, h)=>({
                    kind: 0,
                    index: h,
                    score: 0,
                    label: u.label,
                    description: u.description,
                    ariaLabel: u.ariaLabel,
                    iconClasses: u.iconClasses
                }));
            i.add(e.onDidAccept(()=>{
                e.hide();
                const [u] = e.selectedItems;
                u && o[u.index] && r.reveal(o[u.index].element, {}, !1, !1);
            }));
            const c = ()=>{
                const u = a.filter((h)=>{
                    if (e.value === "@") return h.score = 0, h.highlights = void 0, !0;
                    const p = e.value.substring(tte.PREFIX.length).trim(), g = hFt(h.label), f = a5e(p, p.toLowerCase(), 0, g.text, g.text.toLowerCase(), 0, {
                        firstMatchCanBeWeak: !0,
                        boostFullMatch: !0
                    });
                    return f ? (h.score = f[1], h.highlights = {
                        label: pbi(p, g) ?? void 0
                    }, !0) : !1;
                });
                if (u.length === 0) {
                    const h = S(4984, null);
                    e.items = [
                        {
                            label: h,
                            index: -1,
                            kind: 14
                        }
                    ], e.ariaLabel = h;
                } else e.items = u;
            };
            c(), i.add(e.onDidChangeValue(c));
            const l = new cn;
            i.add(l), i.add(e.onDidChangeActive(()=>{
                const [u] = e.activeItems;
                u && o[u.index] ? l.value = r.preview(o[u.index].element) : l.clear();
            }));
        }).catch((r)=>{
            ns(r), e.hide();
        }).finally(()=>{
            e.busy = !1;
        }), i;
    }
}, soe.SYMBOL_PICKS_TIMEOUT = 8e3, soe = ie([
    C(0, hn),
    C(1, gs),
    C(2, qt),
    C(3, Jc),
    C(4, Awt),
    C(5, Ere)
], soe), obo = class CCm extends pt {
    constructor(){
        super({
            id: CCm.ID,
            title: {
                ...Ae(4989, "Go to Symbol in Editor..."),
                mnemonicTitle: S(4985, null)
            },
            f1: !0,
            keybinding: {
                when: he.and(hL.negate(), roe.negate()),
                weight: 200,
                primary: Ie.CtrlCmd | Ie.Shift | fe.KeyO
            },
            menu: [
                {
                    id: Re.MenubarGoMenu,
                    group: "4_symbol_nav",
                    order: 1
                }
            ]
        });
    }
    run(t) {
        t.get(Gs).quickAccess.show(soe.PREFIX, {
            itemActivation: wW.NONE
        });
    }
}, obo.ID = "workbench.action.gotoSymbol", abo = obo, qe(abo), kn.as(P$.Quickaccess).registerQuickAccessProvider({
    ctor: soe,
    prefix: tte.PREFIX,
    contextKey: "inFileSymbolsPicker",
    placeholder: S(4986, null),
    helpEntries: [
        {
            description: S(4987, null),
            prefix: tte.PREFIX,
            commandId: abo.ID,
            commandCenterOrder: 40
        },
        {
            description: S(4988, null),
            prefix: tte.PREFIX_BY_CATEGORY
        }
    ]
});

}
