import { mMw, pMw } from "./BA.js";
import { Gt, Nt, Qe, Vn, st, tt } from "./Iwo.js";
import { BP, Xkl, Zkl, gms, p2i, sRg, wYg } from "./Ycg.js";
import { Ykl } from "./agentIconUtils.js";
import { EA, RB } from "./backgroundComposerDataService.js";
import { gs, yt } from "./codicons.js";
import { Yh, vS } from "./composer.js";
import { uv } from "./composerData.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { EYg, d2i } from "./composerHistoryActionViewItem.js";
import { $Kt } from "./composerStateUtils.js";
import { mlt } from "./composerUtils.js";
import { Bb, Ux } from "./composerViews.js";
import { Ef, LHt } from "./constants_18.js";
import { XF, pa } from "./constants_8.js";
import { Ld, _a } from "./editorGroupsService.js";
import { AA, qO } from "./editorInput.js";
import { DX, KJ } from "./editorPane.js";
import { Wo, gr } from "./editorService.js";
import { Iqe, xpe } from "./embeddedAuxBarEditorPartService.js";
import { Cr, _s } from "./experimentService.js";
import { It, dn } from "./instantiation.js";
import { MSi } from "./ipa.js";
import { Id, Pv } from "./layoutService_2.js";
import { MC, SHe } from "./menuEntryActionViewItem.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { kBl, tUf } from "./renderComposerPane.js";
import { Zi, ki } from "./storage_2.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { xL } from "./unificationGate.js";
import { F, Re } from "./userDataProfile.js";
import { $t, Bs } from "./window.js";
var oZt, ANi, Ows, Uk, aAt, Fws;
export { ANi, Fws, Ows, Uk, aAt, oZt };
var __wakaru_lAt_initialized = false;
export function lAt() {
if (__wakaru_lAt_initialized) return;
__wakaru_lAt_initialized = true;
"use strict";
E(), Bs(), gs(), pa(), Gt(), Qe(), It(), el(), Zi(), Dl(), MC(), Iqe(), KJ(), qO(), Ld(), Wo(), _s(), Pv(), Ykl(), xL(), RB(), mlt(), vS(), EYg(), Ef(), uv(), Pl(), $Kt(), Ux(), tUf(), oZt = "workbench.editor.composer", ANi = new Set, Ows = class {
    constructor(t){
        this.instantiationService = t;
    }
    canSerialize(t) {
        return t instanceof Uk;
    }
    serialize(t) {
        if (t instanceof Uk) return JSON.stringify(t.toJSON());
    }
    deserialize(t, e) {
        const { composerId: n, restoreInRegularEditorGroup: i } = JSON.parse(e), r = t.invokeFunction((l)=>l.get(ki)), s = t.invokeFunction((l)=>l.get(Cr));
        if (!(!BP(r, s) && !(i === !0)) && n) return t.createInstance(Uk, n);
    }
}, Ows = Re([
    F(0, dn)
], Ows), Uk = class extends AA {
    constructor(t, e, n, i, r, s, o, a, l, c, u){
        super(), this.composerId = t, this.composerDataService = e, this.reactiveStorageService = n, this.storageService = i, this.experimentService = r, this.editorGroupsService = s, this.editorService = o, this.layoutService = a, this.instantiationService = l, this.embeddedAuxBarEditorPartService = c, this.backgroundComposerDataService = u, this.nameListeners = this._register(new Vn), this._onDidChangeLabelEmitter = this._register(new tt({
            onWillAddFirstListener: ()=>this.setupNameListener(),
            onDidRemoveLastListener: ()=>this.nameListeners.clear()
        })), this.onDidChangeLabel = this._onDidChangeLabelEmitter.event, this.closeHandler = this;
    }
    isChatMaximized() {
        return !this.layoutService.isVisible("workbench.parts.editor", $t);
    }
    getTotalChatEditorCount() {
        let t = 0;
        const e = this.embeddedAuxBarEditorPartService.getPart();
        if (e) for (const n of e.groups)for (const i of n.editors)i instanceof Uk && t++;
        return t;
    }
    isEmptyChat() {
        const t = this.composerDataService.getComposerDataIfLoaded(this.composerId);
        return t ? MSi(t) : !1;
    }
    showConfirm() {
        return !this.isChatMaximized() || !BP(this.storageService, this.experimentService) ? !1 : this.getTotalChatEditorCount() <= 1;
    }
    async confirm(t) {
        if (!BP(this.storageService, this.experimentService) || !this.isChatMaximized() || this.getTotalChatEditorCount() > 1 || this.isEmptyChat()) return 1;
        try {
            await this.instantiationService.invokeFunction((n)=>n.get(Yh)).createComposer({
                openInNewTab: !1,
                skipShowAndFocus: !0
            });
        } catch  {}
        return 1;
    }
    get typeId() {
        return Uk.ID;
    }
    get editorId() {
        return oZt;
    }
    get resource() {
        return sRg(this.composerId);
    }
    get capabilities() {
        return 2;
    }
    toUntyped() {
        return {
            resource: this.resource,
            options: {
                override: oZt
            }
        };
    }
    matches(t) {
        return super.matches(t) ? !0 : t instanceof Uk && t.composerId === this.composerId;
    }
    isSubagent() {
        return !!Zkl(this.composerDataService, this.backgroundComposerDataService, this.composerId).isSubagent;
    }
    getName() {
        return this.composerDataService.getComposerTitle(this.composerId);
    }
    getIcon() {
        const t = Zkl(this.composerDataService, this.backgroundComposerDataService, this.composerId), e = t.isCloudAgent ? yt.cloudTwo : yt.chat;
        if (t.isSubagent) return yt.chat;
        if (this.isEmptyChat() && !t.isGenerating && !t.isBlocked) return e;
        const n = wYg(t);
        return n.id === yt.checkCircled.id ? e : n;
    }
    getLabelExtraClasses() {
        const t = [];
        return this.isEmptyChat() && t.push("composer-empty-chat"), pMw(this.composerId) && t.push("composer-finished-tab-unread"), t;
    }
    toJSON() {
        const t = this.editorGroupsService.getGroups(0).some((e)=>e.editors.some((n)=>n instanceof Uk && n.composerId === this.composerId));
        return {
            composerId: this.composerId,
            restoreInRegularEditorGroup: t
        };
    }
    setupNameListener() {
        const t = new Nt;
        t.add(this.reactiveStorageService.onChangeEffectManuallyDisposed({
            deps: [
                ()=>{
                    const e = this.composerDataService.getComposerDataIfLoaded(this.composerId), n = p2i(this.composerDataService, this.composerId), i = n?.createdFromBackgroundAgent?.bcId;
                    return `${e?.name ?? n?.name}|${e !== void 0}|${e?.status}|${!!n?.hasBlockingPendingActions}|${!!n?.isDraft}|${!!n?.isArchived}|${i}|${gms(this.backgroundComposerDataService, i)}`;
                }
            ],
            onChange: ()=>{
                this._onDidChangeLabelEmitter.fire();
            }
        })), t.add(this.reactiveStorageService.onChangeEffectManuallyDisposed({
            deps: [
                ()=>{
                    const e = this.composerDataService.getComposerDataIfLoaded(this.composerId), i = p2i(this.composerDataService, this.composerId)?.createdFromBackgroundAgent?.bcId;
                    return Xkl({
                        backgroundComposerStatus: gms(this.backgroundComposerDataService, i),
                        loadedComposerStatus: e?.status
                    });
                }
            ],
            onChange: ({ deps: e, prevDeps: n })=>{
                const i = e[0], r = n?.[0];
                if (i) {
                    this.setUnreadFinishedTabState(!1);
                    return;
                }
                r && !this.isActiveComposerEditorFocused() && this.setUnreadFinishedTabState(!0);
            }
        })), this.nameListeners.value = t;
    }
    clearUnreadFinishedTabState() {
        this.setUnreadFinishedTabState(!1);
    }
    setUnreadFinishedTabState(t) {
        mMw(this.composerId, t) && this._onDidChangeLabelEmitter.fire();
    }
    isActiveComposerEditorFocused() {
        return !!(this.editorService.activeEditor?.matches(this) && this.editorService.activeEditorPane?.hasFocus());
    }
    copy() {
        return this.instantiationService.createInstance(Uk, this.composerId);
    }
}, Uk.ID = XF, Uk = Re([
    F(1, no),
    F(2, sa),
    F(3, ki),
    F(4, Cr),
    F(5, _a),
    F(6, gr),
    F(7, Id),
    F(8, dn),
    F(9, xpe),
    F(10, EA)
], Uk), aAt = class extends DX {
    constructor(t, e, n, i, r, s, o, a){
        super(aAt.ID, t, e, n), this._instantiationService = i, this.composerService = r, this.composerDataService = s, this.composerViewsService = o, this.reactiveStorageService = a, this._solidDisposable = this._register(new Vn), this.inputDisposable = this._register(new Vn), this._register(this.reactiveStorageService.onChangeEffectManuallyDisposed({
            deps: [
                ()=>{
                    const l = this._input?.resource?.path;
                    if (l) return this.composerViewsService.getComposerLocation(l);
                }
            ],
            onChange: ({ deps: l, prevDeps: c })=>{
                const u = l[0], d = c?.[0];
                u && u !== d && this.dispose();
            }
        }));
    }
    createEditor(t) {
        this._register(this.onDidFocus(()=>{
            const e = this._input;
            e instanceof Uk && (this.composerDataService.setLastFocusedComposerId(e.composerId), e.clearUnreadFinishedTabState());
        }));
    }
    focus() {
        if (!this._input) return;
        this._input instanceof Uk && this._input.clearUnreadFinishedTabState();
        const t = this._input.resource.path;
        this.composerViewsService.focus(t);
    }
    async setInput(t, e, n, i) {
        await super.setInput(t, {
            ...e,
            pinned: !0
        }, n, i), t.clearUnreadFinishedTabState();
        const r = t.resource.path, s = this.getContainer();
        if (!s) {
            this._solidDisposable.clear();
            return;
        }
        this._solidDisposable.value = kBl(s, this._instantiationService, "editor", r), this.inputDisposable.value = t.onWillDispose(()=>{
            this._solidDisposable.clear();
        });
    }
    get minimumWidth() {
        return 300;
    }
    layout(t) {}
    getActionViewItem(t, e) {
        if (t.id !== LHt) return super.getActionViewItem(t, e);
        const n = this.group.id, i = ()=>this._input instanceof Uk ? this._input.composerId : this._input?.resource?.path, r = i();
        class s extends d2i {
            render(a) {
                super.render(a), a.setAttribute(SHe, this._action.id), a.setAttribute("data-history-menu-alignment", "left-edge-below"), a.setAttribute("data-history-group-id", String(n)), r && a.setAttribute("data-history-composer-id", r), this.element && (this.element.setAttribute(SHe, this._action.id), this.element.setAttribute("data-history-menu-alignment", "left-edge-below"), this.element.setAttribute("data-history-group-id", String(n)), r && this.element.setAttribute("data-history-composer-id", r));
            }
        }
        return this._instantiationService.createInstance(s, void 0, t, {
            icon: !0,
            label: !1,
            ...e
        }, i);
    }
}, aAt.ID = oZt, aAt = Re([
    F(1, Ml),
    F(2, ki),
    F(3, dn),
    F(4, Yh),
    F(5, no),
    F(6, Bb),
    F(7, sa)
], aAt), Fws = class extends st {
    constructor(t){
        super(), this.editor = t;
    }
}, Fws.ID = "editor.contrib.composer";

}
