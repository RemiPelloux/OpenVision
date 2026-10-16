import { D, Nt, Qe } from "./Iwo.js";
import { Hi, Rr, cn } from "./contextkey.js";
import { od } from "./editor_2.js";
import { is, ms } from "./files.js";
import { Kp, Ph } from "./language.js";
import { dd, xp } from "./model.js";
import { Ki, Ot } from "./network.js";
import { Bt } from "./nls.js";
import { Aa, Lr, Mc, XR, gu } from "./resources.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Q4, JAn, uEt, iTe, eRn, yls, CVt, tRn, shl, axi, yR, DA, ohl, ESg, nRn, Sls, ahl, lxi, u9e, ISg, kls, lhl, chl, dEt, wls, J4, hEt, Cls, VJ, lme, uhl, iRn, xSg, ASg, aMe, Iie, RSg, TVt, dhl, hhl, rRn, Hat, Wat, PSg, xie, Tls, MSg, phl, rTe, EVt, lMe, Jze, DSg, BCk, sRn, mhl, UCk, sTe, Els, eVe, NSg, cxi, Gat, LSg, uxi, pEt, tVe, mEt, oRn, qB, OSg, Ch;
export { ASg, BCk, CVt, Ch, Cls, DA, DSg, ESg, EVt, Els, Gat, Hat, ISg, Iie, J4, JAn, Jze, LSg, MSg, NSg, OSg, PSg, Q4, RSg, Sls, TVt, Tls, UCk, VJ, Wat, aMe, ahl, axi, chl, cxi, dEt, dhl, eRn, eVe, hEt, hhl, iRn, iTe, kls, lMe, lhl, lme, lxi, mEt, mhl, nRn, oRn, ohl, pEt, phl, qB, rRn, rTe, sRn, sTe, shl, tRn, tVe, u9e, uEt, uhl, uxi, wls, xSg, xie, yR, yls };
var __wakaru_vf_initialized = false;
export function vf() {
if (__wakaru_vf_initialized) return;
__wakaru_vf_initialized = true;
"use strict";
E(), Qe(), Ki(), Lr(), Kp(), xp(), Bt(), Hi(), ms(), od(), Q4 = new cn("workbenchState", void 0, {
    type: "string",
    description: D(4280, null)
}), JAn = new cn("workspaceFolderCount", 0, D(4281, null)), uEt = new cn("openFolderWorkspaceSupport", !0, !0), iTe = new cn("enterMultiRootWorkspaceSupport", !0, !0), eRn = new cn("emptyWorkspaceSupport", !0, !0), yls = new cn("dirtyWorkingCopies", !1, D(4282, null)), CVt = new cn("remoteName", "", D(4283, null)), tRn = new cn("virtualWorkspace", "", D(4284, null)), shl = new cn("temporaryWorkspace", !1, D(4285, null)), axi = new cn("isFullscreen", !1, D(4286, null)), yR = new cn("isAuxiliaryWindowFocusedContext", !1, D(4287, null)), DA = new cn("isGlass", !1, D(4288, null)), ohl = new cn("hasWebFileSystemAccess", !1, !0), ESg = new cn("embedderIdentifier", void 0, D(4289, null)), nRn = new cn("activeEditorIsDirty", !1, D(4290, null)), Sls = new cn("activeEditorIsNotPreview", !1, D(4291, null)), ahl = new cn("activeEditorIsFirstInGroup", !1, D(4292, null)), lxi = new cn("activeEditorIsLastInGroup", !1, D(4293, null)), u9e = new cn("activeEditorIsPinned", !1, D(4294, null)), ISg = new cn("activeEditorIsReadonly", !1, D(4295, null)), kls = new cn("activeCompareEditorCanSwap", !1, D(4296, null)), lhl = new cn("activeEditorCanToggleReadonly", !0, D(4297, null)), chl = new cn("activeEditorCanRevert", !1, D(4298, null)), dEt = new cn("activeEditorCanSplitInGroup", !0), wls = new cn("activeEditorIsReviewChanges", !1, D(4299, null)), J4 = new cn("activeEditor", null, {
    type: "string",
    description: D(4300, null)
}), hEt = new cn("activeEditorAvailableEditorIds", "", D(4301, null)), Cls = new cn("textCompareEditorVisible", !1, D(4302, null)), VJ = new cn("textCompareEditorActive", !1, D(4303, null)), lme = new cn("sideBySideEditorActive", !1, D(4304, null)), uhl = new cn("groupEditorsCount", 0, D(4305, null)), iRn = new cn("activeEditorGroupEmpty", !1, D(4306, null)), xSg = new cn("activeEditorGroupIndex", 0, D(4307, null)), ASg = new cn("activeEditorGroupLast", !1, D(4308, null)), aMe = new cn("activeEditorGroupLocked", !1, D(4309, null)), Iie = new cn("multipleEditorGroups", !1, D(4310, null)), RSg = Iie.toNegated(), TVt = new cn("multipleEditorsSelectedInGroup", !1, D(4311, null)), dhl = new cn("twoEditorsSelectedInGroup", !1, D(4312, null)), hhl = new cn("SelectedEditorsInGroupFileOrUntitledResourceContextKey", !0, D(4313, null)), rRn = new cn("editorPartMultipleEditorGroups", !1, D(4314, null)), Hat = new cn("editorPartMaximizedEditorGroup", !1, D(4315, null)), Wat = new cn("isAuxiliaryEditorPart", !1, D(4316, null)), PSg = new cn("editorIsOpen", !1, D(4317, null)), xie = new cn("inZenMode", !1, D(4318, null)), Tls = new cn("isCenteredLayout", !1, D(4319, null)), MSg = new cn("splitEditorsVertically", !1, D(4320, null)), phl = new cn("mainEditorAreaVisible", !0, D(4321, null)), rTe = new cn("agentChatMaximized", !1, D(4322, null)), EVt = new cn("editorTabsVisible", !0, D(4323, null)), lMe = new cn("sideBarVisible", !1, D(4324, null)), Jze = new cn("sideBarFocus", !1, D(4325, null)), DSg = new cn("activeViewlet", "", D(4326, null)), BCk = new cn("statusBarFocused", !1, D(4327, null)), sRn = new cn("titleBarStyle", "custom", D(4328, null)), mhl = new cn("titleBarVisible", !1, D(4329, null)), UCk = new cn("bannerFocused", !1, D(4330, null)), sTe = new cn("notificationFocus", !0, D(4331, null)), Els = new cn("notificationCenterVisible", !1, D(4332, null)), eVe = new cn("notificationToastsVisible", !1, D(4333, null)), NSg = new cn("activeAuxiliary", "", D(4334, null)), cxi = new cn("auxiliaryBarFocus", !1, D(4335, null)), Gat = new cn("auxiliaryBarVisible", !1, D(4336, null)), LSg = new cn("activePanel", "", D(4337, null)), uxi = new cn("panelFocus", !1, D(4338, null)), pEt = new cn("panelPosition", "bottom", D(4339, null)), tVe = new cn("panelAlignment", "center", D(4340, null)), mEt = new cn("panelVisible", !1, D(4341, null)), oRn = new cn("panelMaximized", !1, D(4342, null)), qB = new cn("focusedView", "", D(4343, null)), OSg = new cn("documentBodyFocused", !1, D(4344, null)), Ch = class {
    constructor(t, e, n, i){
        this._contextKeyService = t, this._fileService = e, this._languageService = n, this._modelService = i, this._disposables = new Nt, this._schemeKey = Ch.Scheme.bindTo(this._contextKeyService), this._filenameKey = Ch.Filename.bindTo(this._contextKeyService), this._dirnameKey = Ch.Dirname.bindTo(this._contextKeyService), this._pathKey = Ch.Path.bindTo(this._contextKeyService), this._langIdKey = Ch.LangId.bindTo(this._contextKeyService), this._resourceKey = Ch.Resource.bindTo(this._contextKeyService), this._extensionKey = Ch.Extension.bindTo(this._contextKeyService), this._hasResource = Ch.HasResource.bindTo(this._contextKeyService), this._isFileSystemResource = Ch.IsFileSystemResource.bindTo(this._contextKeyService), this._disposables.add(e.onDidChangeFileSystemProviderRegistrations(()=>{
            const r = this.get();
            this._isFileSystemResource.set(!!(r && e.hasProvider(r)));
        })), this._disposables.add(i.onModelAdded((r)=>{
            gu(r.uri, this.get()) && this._setLangId();
        })), this._disposables.add(i.onModelLanguageChanged((r)=>{
            gu(r.model.uri, this.get()) && this._setLangId();
        }));
    }
    dispose() {
        this._disposables.dispose();
    }
    _setLangId() {
        const t = this.get();
        if (!t) {
            this._langIdKey.set(null);
            return;
        }
        const e = this._modelService.getModel(t)?.getLanguageId() ?? this._languageService.guessLanguageIdByFilepathOrFirstLine(t);
        this._langIdKey.set(e);
    }
    set(t) {
        t = t ?? void 0, !gu(this._value, t) && (this._value = t, this._contextKeyService.bufferChangeEvents(()=>{
            this._resourceKey.set(t ? t.toString() : null), this._schemeKey.set(t ? t.scheme : null), this._filenameKey.set(t ? Aa(t) : null), this._dirnameKey.set(t ? this.uriToPath(Mc(t)) : null), this._pathKey.set(t ? this.uriToPath(t) : null), this._setLangId(), this._extensionKey.set(t ? XR(t) : null), this._hasResource.set(!!t), this._isFileSystemResource.set(t ? this._fileService.hasProvider(t) : !1);
        }));
    }
    uriToPath(t) {
        return t.scheme === Ot.file ? t.fsPath : t.path;
    }
    reset() {
        this._value = void 0, this._contextKeyService.bufferChangeEvents(()=>{
            this._resourceKey.reset(), this._schemeKey.reset(), this._filenameKey.reset(), this._dirnameKey.reset(), this._pathKey.reset(), this._langIdKey.reset(), this._extensionKey.reset(), this._hasResource.reset(), this._isFileSystemResource.reset();
        });
    }
    get() {
        return this._value;
    }
}, Ch.Scheme = new cn("resourceScheme", void 0, {
    type: "string",
    description: D(4345, null)
}), Ch.Filename = new cn("resourceFilename", void 0, {
    type: "string",
    description: D(4346, null)
}), Ch.Dirname = new cn("resourceDirname", void 0, {
    type: "string",
    description: D(4347, null)
}), Ch.Path = new cn("resourcePath", void 0, {
    type: "string",
    description: D(4348, null)
}), Ch.LangId = new cn("resourceLangId", void 0, {
    type: "string",
    description: D(4349, null)
}), Ch.Resource = new cn("resource", void 0, {
    type: "URI",
    description: D(4350, null)
}), Ch.Extension = new cn("resourceExtname", void 0, {
    type: "string",
    description: D(4351, null)
}), Ch.HasResource = new cn("resourceSet", void 0, {
    type: "boolean",
    description: D(4352, null)
}), Ch.IsFileSystemResource = new cn("isFileSystemResource", void 0, {
    type: "boolean",
    description: D(4353, null)
}), Ch = Re([
    F(0, Rr),
    F(1, is),
    F(2, Ph),
    F(3, dd)
], Ch);

}
