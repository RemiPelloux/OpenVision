import { INn, Qj, y_e } from "./A3u.js";
import { T1 } from "./De_3.js";
import { S } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { NNn, lPe } from "./agentsContextKeys.js";
import { Pe, _i } from "./codicons.js";
import { dkt, jU } from "./composerContextKeys.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { Hv, rE } from "./composerViews.js";
import { dn, xn } from "./contextkey.js";
import { Nc, gs } from "./editorGroupsService.js";
import { Ni, hn } from "./editorService.js";
import { jd, vd, xc } from "./editor_2.js";
import { fEv } from "./editorquickaccess.css";
import { $ee, uPe } from "./embeddedAuxBarEditorPartService.js";
import { S_e } from "./fuzzyScorer.js";
import { WM } from "./getIconClasses.js";
import { kl, pc } from "./language.js";
import { Bc, Zh } from "./layoutService_2.js";
import { Ll, fc } from "./model.js";
import { rt } from "./nls.js";
import { L$, Rde, Uee } from "./pickerQuickAccess.js";
import { Ya, wre } from "./quickInput.js";
import { Ft, Sr } from "./themables.js";
import { x } from "./tslib.es6.js";
import { aPe, cL } from "./unifiedAppLayoutContextKeys.js";
var kWt, h1e, oet, p1e;
export { h1e, kWt, oet, p1e };
var __wakaru_vVi_initialized = false;
export function vVi() {
if (__wakaru_vVi_initialized) return;
__wakaru_vVi_initialized = true;
"use strict";
x(), fEv(), rt(), Ya(), Rde(), Nc(), xc(), Ni(), Ll(), kl(), WM(), S_e(), _i(), Sr(), dn(), cL(), jU(), nl(), rE(), NNn(), Zh(), uPe(), kWt = class extends Uee {
    constructor(e, t, n, i, r){
        super(e, {
            canAcceptInBackground: !0,
            noResultsPick: {
                label: S(3707, null),
                groupId: -1
            }
        }), this.editorGroupService = t, this.editorService = n, this.modelService = i, this.languageService = r, this.pickState = new class {
            constructor(){
                this.scorerCache = Object.create(null), this.isQuickNavigating = void 0;
            }
            reset(s) {
                s || (this.scorerCache = Object.create(null)), this.isQuickNavigating = s;
            }
        };
    }
    provide(e, t) {
        return this.pickState.reset(!!e.quickNavigate), super.provide(e, t);
    }
    _getPicks(e) {
        const t = Qj(e), n = this.doGetEditorPickItems().filter((r)=>{
            if (!t.normalized) return !0;
            const s = y_e(r, t, !0, wre, this.pickState.scorerCache);
            return s.score ? (r.highlights = {
                label: s.labelMatch,
                description: s.descriptionMatch
            }, !0) : !1;
        });
        if (t.normalized) {
            const r = this.editorGroupService.getGroups(2).map((s)=>s.id);
            n.sort((s, o)=>s.groupId !== o.groupId ? r.indexOf(s.groupId) - r.indexOf(o.groupId) : INn(s, o, t, !0, wre, this.pickState.scorerCache));
        }
        const i = [];
        if (this.editorGroupService.count > 1) {
            let r;
            for (const s of n){
                if (typeof r != "number" || r !== s.groupId) {
                    const o = this.editorGroupService.getGroup(s.groupId);
                    o && i.push({
                        type: "separator",
                        label: o.label
                    }), r = s.groupId;
                }
                i.push(s);
            }
        } else i.push(...n);
        return i;
    }
    doGetEditorPickItems() {
        const e = this.doGetEditors(), t = new Map;
        for (const { groupId: n } of e)if (!t.has(n)) {
            const i = this.editorGroupService.getGroup(n);
            i && t.set(n, i.ariaLabel);
        }
        return e.map(({ editor: n, groupId: i })=>{
            const r = vd.getOriginalUri(n, {
                supportSideBySide: jd.PRIMARY
            }), s = n.isDirty() && !n.isSaving(), o = n.getDescription(), a = o ? `${n.getName()} ${o}` : n.getName();
            return {
                groupId: i,
                resource: r,
                label: n.getName(),
                ariaLabel: t.size > 1 ? S(s ? 3708 : 3709, null, a, t.get(i)) : s ? S(3710, null, a) : a,
                description: o,
                iconClasses: T1(this.modelService, this.languageService, r, void 0, n.getIcon()).concat(n.getLabelExtraClasses()),
                italic: !this.editorGroupService.getGroup(i)?.isPinned(n),
                buttons: [
                    {
                        iconClass: s ? "dirty-editor " + Ft.asClassName(Pe.closeDirty) : Ft.asClassName(Pe.close),
                        tooltip: S(3711, null),
                        alwaysVisible: s
                    }
                ],
                trigger: async ()=>{
                    const c = this.editorGroupService.getGroup(i);
                    return c && (await c.closeEditor(n, {
                        preserveFocus: !0
                    }), !c.contains(n)) ? L$.REMOVE_ITEM : L$.NO_ACTION;
                },
                accept: (c, l)=>this.editorGroupService.getGroup(i)?.openEditor(n, {
                        preserveFocus: l.inBackground
                    })
            };
        });
    }
}, kWt = ie([
    C(1, gs),
    C(2, hn),
    C(3, fc),
    C(4, pc)
], kWt), h1e = class extends kWt {
    constructor(e, t, n, i, r, s, o, a, c){
        super(h1e.PREFIX, e, t, n, i), this.contextKeyService = r, this.composerDataService = s, this.composerViewsService = o, this.layoutService = a, this.embeddedAuxBarEditorPartService = c;
    }
    doGetEditors() {
        const e = this.getTargetGroup();
        return e.getEditors(0).map((t)=>({
                editor: t,
                groupId: e.id
            }));
    }
    getTargetGroup() {
        if (this.isChatEditorGroupEnabled()) {
            const e = this.getFocusedAuxiliaryBarGroup() ?? this.getFocusedComposerGroup();
            if (e) return e;
        }
        return this.editorGroupService.activeGroup;
    }
    isChatEditorGroupEnabled() {
        return this.contextKeyService.getContextKeyValue(aPe) === !0;
    }
    getFocusedAuxiliaryBarGroup() {
        if (this.layoutService.hasFocus("workbench.parts.auxiliarybar")) return this.embeddedAuxBarEditorPartService.getFirstGroup();
    }
    getFocusedComposerGroup() {
        if (this.isComposerContextFocused()) return this.composerViewsService.getEditorGroupForComposer(this.composerDataService.selectedComposerId);
    }
    isComposerContextFocused() {
        return this.contextKeyService.getContextKeyValue(dkt.key) === !0 || this.contextKeyService.getContextKeyValue(lPe.agentsPaneFocused.key) === !0;
    }
}, h1e.PREFIX = "edt active ", h1e = ie([
    C(0, gs),
    C(1, hn),
    C(2, fc),
    C(3, pc),
    C(4, xn),
    C(5, Zs),
    C(6, Hv),
    C(7, Bc),
    C(8, $ee)
], h1e), oet = class extends kWt {
    constructor(e, t, n, i){
        super(oet.PREFIX, e, t, n, i);
    }
    doGetEditors() {
        const e = [];
        for (const t of this.editorGroupService.getGroups(2))for (const n of t.getEditors(1))e.push({
            editor: n,
            groupId: t.id
        });
        return e;
    }
}, oet.PREFIX = "edt ", oet = ie([
    C(0, gs),
    C(1, hn),
    C(2, fc),
    C(3, pc)
], oet), p1e = class extends kWt {
    constructor(e, t, n, i){
        super(p1e.PREFIX, e, t, n, i);
    }
    doGetEditors() {
        const e = [];
        for (const t of this.editorService.getEditors(0))e.push(t);
        return e;
    }
}, p1e.PREFIX = "edt mru ", p1e = ie([
    C(0, gs),
    C(1, hn),
    C(2, fc),
    C(3, pc)
], p1e);

}
