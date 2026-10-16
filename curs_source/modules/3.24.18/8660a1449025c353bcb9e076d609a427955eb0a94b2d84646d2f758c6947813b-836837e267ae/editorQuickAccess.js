import { D } from "./Iwo.js";
import { BXr, DGt } from "./agentsContextKeys.js";
import { gs, yt } from "./codicons.js";
import { H4, rCt } from "./composerContextKeys.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { Bb, Ux } from "./composerViews.js";
import { Hi, Rr } from "./contextkey.js";
import { Ld, _a } from "./editorGroupsService.js";
import { Wo, gr } from "./editorService.js";
import { Nm, Wm, od } from "./editor_2.js";
import { fU1 } from "./editorquickaccess.css";
import { Iqe, xpe } from "./embeddedAuxBarEditorPartService.js";
import { kJ } from "./fuzzyScorer.js";
import { EB } from "./getIconClasses.js";
import { pR } from "./ipa.js";
import { Kp, Ph } from "./language.js";
import { Id, Pv } from "./layoutService_2.js";
import { dd, xp } from "./model.js";
import { Bt } from "./nls.js";
import { Ipe, PGt, RGt } from "./pickerQuickAccess.js";
import { Gu, x7 } from "./quickInput.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { Tqe, q4 } from "./unifiedAppLayoutContextKeys.js";
import { F, Re } from "./userDataProfile.js";
import { Jz, OB, lwi } from "./yBp.js";
var dEn, r4e, fCt, s4e;
export { dEn, fCt, r4e, s4e };
var __wakaru_GXr_initialized = false;
export function GXr() {
if (__wakaru_GXr_initialized) return;
__wakaru_GXr_initialized = true;
"use strict";
E(), fU1(), Bt(), Gu(), PGt(), Ld(), od(), Wo(), xp(), Kp(), EB(), kJ(), gs(), ta(), Hi(), q4(), H4(), Pl(), Ux(), BXr(), Pv(), Iqe(), dEn = class extends RGt {
    constructor(t, e, n, i, r){
        super(t, {
            canAcceptInBackground: !0,
            noResultsPick: {
                label: D(3707, null),
                groupId: -1
            }
        }), this.editorGroupService = e, this.editorService = n, this.modelService = i, this.languageService = r, this.pickState = new class {
            constructor(){
                this.scorerCache = Object.create(null), this.isQuickNavigating = void 0;
            }
            reset(s) {
                s || (this.scorerCache = Object.create(null)), this.isQuickNavigating = s;
            }
        };
    }
    provide(t, e) {
        return this.pickState.reset(!!t.quickNavigate), super.provide(t, e);
    }
    _getPicks(t) {
        const e = OB(t), n = this.doGetEditorPickItems().filter((r)=>{
            if (!e.normalized) return !0;
            const s = Jz(r, e, !0, x7, this.pickState.scorerCache);
            return s.score ? (r.highlights = {
                label: s.labelMatch,
                description: s.descriptionMatch
            }, !0) : !1;
        });
        if (e.normalized) {
            const r = this.editorGroupService.getGroups(2).map((s)=>s.id);
            n.sort((s, o)=>s.groupId !== o.groupId ? r.indexOf(s.groupId) - r.indexOf(o.groupId) : lwi(s, o, e, !0, x7, this.pickState.scorerCache));
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
        const t = this.doGetEditors(), e = new Map;
        for (const { groupId: n } of t)if (!e.has(n)) {
            const i = this.editorGroupService.getGroup(n);
            i && e.set(n, i.ariaLabel);
        }
        return t.map(({ editor: n, groupId: i })=>{
            const r = Wm.getOriginalUri(n, {
                supportSideBySide: Nm.PRIMARY
            }), s = n.isDirty() && !n.isSaving(), o = n.getDescription(), a = o ? `${n.getName()} ${o}` : n.getName();
            return {
                groupId: i,
                resource: r,
                label: n.getName(),
                ariaLabel: e.size > 1 ? D(s ? 3708 : 3709, null, a, e.get(i)) : s ? D(3710, null, a) : a,
                description: o,
                iconClasses: pR(this.modelService, this.languageService, r, void 0, n.getIcon()).concat(n.getLabelExtraClasses()),
                italic: !this.editorGroupService.getGroup(i)?.isPinned(n),
                buttons: [
                    {
                        iconClass: s ? "dirty-editor " + Gn.asClassName(yt.closeDirty) : Gn.asClassName(yt.close),
                        tooltip: D(3711, null),
                        alwaysVisible: s
                    }
                ],
                trigger: async ()=>{
                    const l = this.editorGroupService.getGroup(i);
                    return l && (await l.closeEditor(n, {
                        preserveFocus: !0
                    }), !l.contains(n)) ? Ipe.REMOVE_ITEM : Ipe.NO_ACTION;
                },
                accept: (l, c)=>this.editorGroupService.getGroup(i)?.openEditor(n, {
                        preserveFocus: c.inBackground
                    })
            };
        });
    }
}, dEn = Re([
    F(1, _a),
    F(2, gr),
    F(3, dd),
    F(4, Ph)
], dEn), r4e = class extends dEn {
    constructor(t, e, n, i, r, s, o, a, l){
        super(r4e.PREFIX, t, e, n, i), this.contextKeyService = r, this.composerDataService = s, this.composerViewsService = o, this.layoutService = a, this.embeddedAuxBarEditorPartService = l;
    }
    doGetEditors() {
        const t = this.getTargetGroup();
        return t.getEditors(0).map((e)=>({
                editor: e,
                groupId: t.id
            }));
    }
    getTargetGroup() {
        if (this.isChatEditorGroupEnabled()) {
            const t = this.getFocusedAuxiliaryBarGroup() ?? this.getFocusedComposerGroup();
            if (t) return t;
        }
        return this.editorGroupService.activeGroup;
    }
    isChatEditorGroupEnabled() {
        return this.contextKeyService.getContextKeyValue(Tqe) === !0;
    }
    getFocusedAuxiliaryBarGroup() {
        if (this.layoutService.hasFocus("workbench.parts.auxiliarybar")) return this.embeddedAuxBarEditorPartService.getFirstGroup();
    }
    getFocusedComposerGroup() {
        if (this.isComposerContextFocused()) return this.composerViewsService.getEditorGroupForComposer(this.composerDataService.selectedComposerId);
    }
    isComposerContextFocused() {
        return this.contextKeyService.getContextKeyValue(rCt.key) === !0 || this.contextKeyService.getContextKeyValue(DGt.agentsPaneFocused.key) === !0;
    }
}, r4e.PREFIX = "edt active ", r4e = Re([
    F(0, _a),
    F(1, gr),
    F(2, dd),
    F(3, Ph),
    F(4, Rr),
    F(5, no),
    F(6, Bb),
    F(7, Id),
    F(8, xpe)
], r4e), fCt = class extends dEn {
    constructor(t, e, n, i){
        super(fCt.PREFIX, t, e, n, i);
    }
    doGetEditors() {
        const t = [];
        for (const e of this.editorGroupService.getGroups(2))for (const n of e.getEditors(1))t.push({
            editor: n,
            groupId: e.id
        });
        return t;
    }
}, fCt.PREFIX = "edt ", fCt = Re([
    F(0, _a),
    F(1, gr),
    F(2, dd),
    F(3, Ph)
], fCt), s4e = class extends dEn {
    constructor(t, e, n, i){
        super(s4e.PREFIX, t, e, n, i);
    }
    doGetEditors() {
        const t = [];
        for (const e of this.editorService.getEditors(0))t.push(e);
        return t;
    }
}, s4e.PREFIX = "edt mru ", s4e = Re([
    F(0, _a),
    F(1, gr),
    F(2, dd),
    F(3, Ph)
], s4e);

}
