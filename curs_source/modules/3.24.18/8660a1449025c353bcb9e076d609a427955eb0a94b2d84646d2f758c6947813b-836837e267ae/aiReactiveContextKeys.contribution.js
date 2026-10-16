import { Gt, Qe, Vn, en, st } from "./Iwo.js";
import { bn } from "./SZu.js";
import { DGr, Ss, l$ } from "./aiMiscServices.js";
import { C1, Qb } from "./aiServerConfigService.js";
import { Rs, ss } from "./authenticationService.js";
import { EA, RB } from "./backgroundComposerDataService.js";
import { vl, wm } from "./buildFlags.js";
import { Ju, og } from "./codeEditorService.js";
import { EYr, H4 } from "./composerContextKeys.js";
import { or, yi } from "./configuration.js";
import { mJn, pa } from "./constants_8.js";
import { Hi, Rr, cn } from "./contextkey.js";
import { fo, ps } from "./environmentService.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { Xh } from "./ipa.js";
import { EE, mT } from "./privateInferenceEnablementService.js";
import { PB } from "./privateInferenceFeatures.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { zUa } from "./shareConversationSharingAvailability.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { wu } from "./utilities_3.js";
import { K6e, aN } from "./yBp.js";
var RYr, SJ, Gwm, mGt, PTn, qwm, PYr;
export { Gwm, PTn, PYr, RYr, SJ, mGt, qwm };
var __wakaru_oCt_initialized = false;
export function oCt() {
if (__wakaru_oCt_initialized) return;
__wakaru_oCt_initialized = true;
"use strict";
E(), el(), Zi(), wu(), Qe(), Gt(), og(), Hi(), Ss(), Rn(), pa(), or(), RB(), C1(), Rs(), fo(), _s(), EE(), PB(), wm(), H4(), zUa(), RYr = new cn("cppSuggestion", !1), SJ = new cn("backgroundComposerEnabled", !1), Gwm = new cn("showBackgroundAgentHistoryAction", !1), mGt = new cn("isSharedChatsEnabled", !1), PTn = new cn("isSharedCanvasesEnabled", !1), qwm = new cn("hasEnvironmentJsonOnDisk", !1), PYr = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d){
        super(), this._reactiveStorageService = t, this._storageService = e, this.contextKeyService = n, this._configurationService = i, this._backgroundComposerDataService = r, this._aiServerConfigService = s, this._cursorAuthenticationService = o, this._privateInferenceEnablementService = a, this._cppService = l, this._codeEditorService = c, this._environmentService = u, this._experimentService = d, this._cppSuggestionListener = this._register(new Vn), this._sharedChatsGatesListener = this._register(new Vn), this._sharedCanvasesGatesListener = this._register(new Vn), this.reactiveStorageRoot = this._register(this._reactiveStorageService.createScoped(this));
    }
    bindInitialKeys() {
        this._bindCppSuggestionKey(), this._bindBackgroundComposerEnabledKey(), this._bindShowBackgroundAgentHistoryActionKey(), this._bindIsSharedChatsEnabledKey(), this._bindIsSharedCanvasesEnabledKey(), this._bindComposerSubmitOnCmdEnterKey(), this._bindHasEnvironmentJsonOnDiskKey();
    }
    _bindCppSuggestionKey() {
        const t = RYr.bindTo(this.contextKeyService), e = ()=>{
            this._cppSuggestionListener.value = this._cppService.suggestion.event(()=>{
                const n = this._configurationService.getValue(mJn) === !0;
                t.set(this._cppService.suggestion.value !== void 0 && n);
            });
        };
        this._codeEditorService.listCodeEditors().length > 0 ? e() : this._cppSuggestionListener.value = en.once(this._codeEditorService.onCodeEditorAdd)(e);
    }
    _bindBackgroundComposerEnabledKey() {
        const t = SJ.bindTo(this.contextKeyService);
        this.reactiveStorageRoot.onChangeEffect({
            deps: [
                ()=>this._cursorAuthenticationService.reactivePrivacyMode(),
                ()=>this._cursorAuthenticationService.isBackgroundComposerEnabled()
            ],
            onChange: ()=>{
                t.set(this._cursorAuthenticationService.isBackgroundComposerEnabled());
            },
            runNowToo: !0
        });
    }
    _bindShowBackgroundAgentHistoryActionKey() {
        const t = Gwm.bindTo(this.contextKeyService);
        t.set(!1), this.reactiveStorageRoot.onChangeEffect({
            deps: [
                ()=>this._aiServerConfigService.cachedServerConfig.backgroundComposerConfig?.showBackgroundAgentHistoryAction
            ],
            onChange: ()=>{
                const e = this._aiServerConfigService.cachedServerConfig.backgroundComposerConfig?.showBackgroundAgentHistoryAction ?? !1;
                t.set(e);
            },
            runNowToo: !0
        });
    }
    _bindIsSharedChatsEnabledKey() {
        const t = mGt.bindTo(this.contextKeyService), e = ()=>{
            const n = K6e() && aN(this._privateInferenceEnablementService, "share-conversation") && this._experimentService.checkFeatureGate("shared_chats", {
                disableExposureLog: !1
            });
            t.set(n);
        };
        e(), this._sharedChatsGatesListener.value = this._experimentService.onDidChangeGates((n)=>{
            (n.changedGates === void 0 || n.changedGates.has("shared_chats")) && e();
        });
    }
    _bindIsSharedCanvasesEnabledKey() {
        const t = PTn.bindTo(this.contextKeyService), e = ()=>{
            const n = !vl.localMode && this._experimentService.checkFeatureGate("shared_canvases", {
                disableExposureLog: !1
            });
            t.set(n);
        };
        e(), this._sharedCanvasesGatesListener.value = this._experimentService.onDidChangeGates((n)=>{
            (n.changedGates === void 0 || n.changedGates.has("shared_canvases")) && e();
        });
    }
    _bindComposerSubmitOnCmdEnterKey() {
        const t = EYr.bindTo(this.contextKeyService), e = this._register(Xh(this._storageService, "chatSubmitOnCmdEnter")), n = ()=>{
            t.set(e.get() === !0);
        };
        this.reactiveStorageRoot.onChangeEffect({
            deps: [
                ()=>e.get()
            ],
            onChange: n,
            runNowToo: !0
        });
    }
    _bindHasEnvironmentJsonOnDiskKey() {
        if (this._environmentService.isGlass) return;
        const t = qwm.bindTo(this.contextKeyService);
        this.reactiveStorageRoot.onChangeEffect({
            deps: [
                ()=>this._backgroundComposerDataService.data.hasEnvironmentJsonOnDisk
            ],
            onChange: ()=>{
                t.set(this._backgroundComposerDataService.data.hasEnvironmentJsonOnDisk ?? !1);
            },
            runNowToo: !0
        });
    }
}, PYr = Re([
    F(0, sa),
    F(1, ki),
    F(2, Rr),
    F(3, yi),
    F(4, EA),
    F(5, Qb),
    F(6, ss),
    F(7, mT),
    F(8, l$),
    F(9, Ju),
    F(10, ps),
    F(11, Cr)
], PYr), bn(DGr, PYr, 1);

}
