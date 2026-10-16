import { z1s } from "./BA.js";
import { Qe, Vn } from "./Iwo.js";
import { eee, p2i } from "./Ycg.js";
import { yPn } from "./agentReviewLifecycleLog.js";
import { ZM, vR } from "./aiSettingsService.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { $Kt } from "./composerStateUtils.js";
import { Hn, ws } from "./dom_2.js";
import { AA, qO } from "./editorInput.js";
import { DX, KJ } from "./editorPane.js";
import { D_l, hDg } from "./icons.contribution.js";
import { It, dn } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { Ki, Ot } from "./network.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { VFl, okw } from "./renderReviewChangesPane.js";
import { lat, zPe } from "./reviewChangesService.js";
import { lOf } from "./reviewChangesTabIdentity.js";
import { Zi, ki } from "./storage_2.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
var cOf, V1s, NV, XXt;
export { NV, V1s, XXt, cOf };
var __wakaru_iNi_initialized = false;
export function iNi() {
if (__wakaru_iNi_initialized) return;
__wakaru_iNi_initialized = true;
"use strict";
E(), Hn(), Qe(), Ki(), fn(), It(), el(), Zi(), Dl(), KJ(), qO(), Ji(), ZM(), yPn(), Pl(), $Kt(), hDg(), okw(), lOf(), lat(), cOf = "workbench.editor.reviewchanges", V1s = class {
    constructor(t){
        this.instantiationService = t;
    }
    canSerialize(t) {
        return t instanceof NV;
    }
    serialize(t) {
        if (t instanceof NV) return JSON.stringify({
            composerIdOverride: t.composerIdOverride,
            parentComposerId: t.parentComposerId,
            options: t.options
        });
    }
    deserialize(t, e) {
        const { composerIdOverride: n, parentComposerId: i, options: r } = JSON.parse(e);
        return t.createInstance(NV, n, i, r);
    }
}, V1s = Re([
    F(0, dn)
], V1s), NV = class extends AA {
    constructor(t, e, n, i, r, s, o, a){
        super(), this.composerDataService = i, this.reactiveStorageService = r, this.reviewChangesService = s, this.aiSettingsService = o, this.logService = a, this.nameListener = this._register(new Vn), this.updateListener = this._register(new Vn), this.options = n ? {
            ...n
        } : void 0, this.composerIdOverride = t, this.parentComposerId = e, this.composerId = t ?? i.selectedComposerId, this.setupNameListener(), this.setupUpdateListener();
    }
    get typeId() {
        return NV.ID;
    }
    get resource() {
        const t = this.options?.fromBugbot ? "agent-review" : this.options?.gitMode ? "git-changes" : "review-changes";
        return rt.from({
            scheme: Ot.reviewChanges,
            path: t
        });
    }
    get capabilities() {
        return this.options?.gitMode ? 2 : 10;
    }
    matches(t) {
        return super.matches(t) ? !0 : t instanceof NV ? this.options?.gitMode || t.options?.gitMode ? this.options?.gitMode === t.options?.gitMode && this.options?.gitModeLabel === t.options?.gitModeLabel : z1s(this.options, t.options) : !(t instanceof AA) && "resource" in t && t.resource ? t.resource.scheme === Ot.reviewChanges && t.resource.path === this.resource.path : !1;
    }
    _getFullName() {
        if (this.options?.fromBugbot) return "Agent Review";
        if (this.options?.gitMode) return this.options.gitModeLabel || "Git Changes";
        const t = this.composerId ?? this.composerDataService.selectedComposerId, e = this.composerDataService.getComposerTitle(t), i = this.composerDataService.allComposersData.allComposers.find((o)=>o.composerId === t)?.subtitle, r = this.composerDataService.getComposerDataIfLoaded(t);
        let s;
        if (r) {
            const o = r.gitWorktree !== void 0, a = r.isBestOfNParent === !0 || r.isBestOfNSubcomposer === !0;
            if (o || a) {
                const l = r.modelConfig?.modelName;
                typeof l == "string" && l.trim() !== "" && (s = this._toDisplayedModelName(l.trim()));
            }
        }
        return s ? `${s}${e ? `: ${e}` : ""}` : `Review${e ? `: ${e}` : ""}`;
    }
    getName() {
        const t = this._getFullName();
        return t.length <= 50 ? t : t.substring(0, 47) + "...";
    }
    getTitle(t) {
        const e = this._getFullName();
        return t === 2 || e.length <= 50 ? e : e.substring(0, 47) + "...";
    }
    _toDisplayedModelName(t) {
        if (t.includes(",")) {
            const e = t.split(",").map((i)=>i.trim()).filter((i)=>i.length > 0);
            return Array.from(new Set(e)).map((i)=>{
                const r = e.filter((o)=>o === i).length, s = this._toDisplayedModelNameSingle(i);
                return r > 1 ? `${r}\xD7${s}` : s;
            }).join(", ");
        }
        return this._toDisplayedModelNameSingle(t);
    }
    _toDisplayedModelNameSingle(t) {
        if (t === "default") return "Auto";
        let e = t;
        try {
            const i = this.aiSettingsService.getAvailableModelsWithStatus().find((r)=>r.name === t);
            i && i.clientDisplayName && (e = i.clientDisplayName);
        } catch  {}
        return e.includes("-thinking") && (e = e.replace("-thinking", "")), e.includes("(MAX)") && (e = e.replace("(MAX)", "")), e.trim();
    }
    getIcon() {
        return D_l;
    }
    toJSON() {
        return {
            composerIdOverride: this.composerIdOverride,
            parentComposerId: this.parentComposerId,
            options: this.options
        };
    }
    toUntyped() {
        return {
            resource: this.resource,
            options: {
                override: NV.ID,
                pinned: !0
            }
        };
    }
    copy() {
        return new NV(this.composerIdOverride, this.parentComposerId, this.options, this.composerDataService, this.reactiveStorageService, this.reviewChangesService, this.aiSettingsService, this.logService);
    }
    dispose() {
        eee(this.logService, "ReviewChangesEditorInput.dispose", {
            fromBugbot: this.options?.fromBugbot === !0,
            gitMode: this.options?.gitMode,
            composerId: this.composerId,
            name: this.getName()
        }), super.dispose();
    }
    setupNameListener() {
        this.nameListener.value = this.reactiveStorageService.onChangeEffectManuallyDisposed({
            deps: [
                ()=>{
                    const t = this.composerId ?? this.composerDataService.selectedComposerId, e = this.composerDataService.getComposerDataIfLoaded(t), n = p2i(this.composerDataService, t), i = e?.modelConfig?.modelName, r = e?.gitWorktree !== void 0, s = e?.isBestOfNParent === !0 || e?.isBestOfNSubcomposer === !0, o = e?.subtitle ?? n?.subtitle, a = {
                        activeComposerId: t,
                        name: e?.name ?? n?.name,
                        modelName: i,
                        isWorktree: r,
                        isBestOfN: s,
                        subtitle: o
                    };
                    return {
                        value: a,
                        serialized: JSON.stringify(a)
                    };
                }
            ],
            onChange: async ({ deps: [t], prevDeps: [e] = [
                void 0
            ] })=>{
                t.serialized !== e?.serialized && this._onDidChangeLabel.fire();
            }
        });
    }
    setupUpdateListener() {
        this.updateListener.value = this.reviewChangesService.onDidRequestUpdate((t)=>{
            if (!z1s(this.options, t.options)) {
                eee(this.logService, "ReviewChangesEditorInput.ignoreCrossKindUpdate", {
                    inputFromBugbot: this.options?.fromBugbot === !0,
                    eventFromBugbot: t.options?.fromBugbot === !0,
                    inputGitMode: this.options?.gitMode
                });
                return;
            }
            const e = this.composerId !== t.composerId, n = this.parentComposerId !== t.parentComposerId, i = JSON.stringify(this.options) !== JSON.stringify(t.options), r = this.options?.fromBugbot === !0, s = t.options?.fromBugbot === !0;
            (r !== s || r && i) && eee(this.logService, "ReviewChangesEditorInput.fromBugbotUpdate", {
                prevFromBugbot: r,
                nextFromBugbot: s,
                composerIdChanged: e,
                optionsChanged: i,
                prevComposerId: this.composerId,
                nextComposerId: t.composerId,
                prevGitMode: this.options?.gitMode
            }), (e || n || i) && (this.composerId = t.composerId, this.composerIdOverride = t.composerId, this.parentComposerId = t.parentComposerId, this.options = t.options, this._onDidChangeLabel.fire());
        });
    }
}, NV.ID = "workbench.editor.reviewchanges.input", NV = Re([
    F(3, no),
    F(4, sa),
    F(5, zPe),
    F(6, vR),
    F(7, Li)
], NV), XXt = class extends DX {
    constructor(t, e, n, i, r, s, o){
        super(XXt.ID, t, e, n), this._instantiationService = i, this.reviewChangesService = r, this.composerDataService = s, this.logService = o, this._solidDisposable = this._register(new Vn), this._updateListener = this._register(new Vn), this._inputDisposable = this._register(new Vn);
    }
    createEditor(t) {}
    async setInput(t, e, n, i) {
        await super.setInput(t, {
            ...e,
            pinned: !0
        }, n, i);
        const r = this.getContainer();
        if (!r) return;
        this._updateListener.value = this.reviewChangesService.onDidRequestUpdate((u)=>{
            if (!z1s(this._currentOptions, u.options)) {
                eee(this.logService, "ReviewChangesEditor.ignoreCrossKindUpdate", {
                    inputFromBugbot: this._currentOptions?.fromBugbot === !0,
                    eventFromBugbot: u.options?.fromBugbot === !0
                });
                return;
            }
            const d = this._currentComposerId !== u.composerId, h = JSON.stringify(this._currentOptions) !== JSON.stringify(u.options), p = this._currentOptions?.fromBugbot === !0, g = u.options?.fromBugbot === !0, f = p !== g;
            if ((f || p || g) && eee(this.logService, "ReviewChangesEditor.onDidRequestUpdate", {
                fromBugbotToggled: f,
                prevFromBugbot: p,
                nextFromBugbot: g,
                composerIdChanged: d,
                optionsChanged: h,
                prevComposerId: this._currentComposerId,
                nextComposerId: u.composerId
            }), d || f) this._solidDisposable.clear(), r.replaceChildren(), this._currentComposerId = u.composerId, this._currentOptions = u.options, this._solidDisposable.value = VFl(r, this._instantiationService, u.composerId, u.parentComposerId, u.options);
            else {
                this._currentOptions = u.options;
                const _ = u.options?.scrollToFile, b = u.options?.scrollToLine;
                if (_) {
                    const S = u.options?.fromBugbot ? "bugbot-scroll-to-file" : "review-changes-scroll-to-file", k = new CustomEvent(S, {
                        detail: {
                            file: _,
                            startLine: b,
                            endLine: b
                        }
                    });
                    ws(r.ownerDocument).dispatchEvent(k);
                }
                const y = u.options?.scrollToReviewFile;
                if (y) {
                    const S = new CustomEvent("review-changes-scroll-to-file", {
                        detail: {
                            file: y,
                            startLine: b,
                            endLine: b
                        }
                    });
                    ws(r.ownerDocument).dispatchEvent(S);
                }
            }
        });
        const s = t.options?.gitMode ? void 0 : t.composerIdOverride ?? this.composerDataService.selectedComposerId, o = t.parentComposerId, a = this._currentComposerId !== s, l = JSON.stringify(this._currentOptions) !== JSON.stringify(t.options), c = !this._solidDisposable.value || a || l;
        c && (t.options?.fromBugbot === !0 || this._currentOptions?.fromBugbot === !0) && eee(this.logService, "ReviewChangesEditor.setInput.recreate", {
            fromBugbot: t.options?.fromBugbot === !0,
            previousFromBugbot: this._currentOptions?.fromBugbot === !0,
            composerIdChanged: a,
            optionsChanged: l,
            hadExistingPane: !!this._solidDisposable.value,
            composerId: s
        }), c && (this._solidDisposable.clear(), r.replaceChildren(), this._currentComposerId = s, this._currentOptions = t.options, this._solidDisposable.value = VFl(r, this._instantiationService, s, o, t.options)), this._inputDisposable.value = t.onWillDispose(()=>{
            this._solidDisposable.clear();
        });
    }
    layout(t) {}
    focus() {
        super.focus(), this.getContainer()?.focus();
    }
    dispose() {
        this._currentOptions?.fromBugbot === !0 && eee(this.logService, "ReviewChangesEditor.dispose", {
            composerId: this._currentComposerId
        }), this._solidDisposable.clear(), this._composerIdListener?.dispose(), this._updateListener.clear(), this._inputDisposable.clear(), super.dispose();
    }
}, XXt.ID = cOf, XXt = Re([
    F(1, Ml),
    F(2, ki),
    F(3, dn),
    F(4, zPe),
    F(5, no),
    F(6, Li)
], XXt);

}
