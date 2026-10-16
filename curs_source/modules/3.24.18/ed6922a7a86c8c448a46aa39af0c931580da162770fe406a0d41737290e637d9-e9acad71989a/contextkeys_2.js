import { He, S, Se } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { At, dn, xn } from "./contextkey.js";
import { xc } from "./editor_2.js";
import { Fi, Ii } from "./files.js";
import { kl, pc } from "./language.js";
import { Ll, fc } from "./model.js";
import { gt, li } from "./network.js";
import { rt } from "./nls.js";
import { Ac, Li, fo, ml, u1 } from "./resources.js";
import { x } from "./tslib.es6.js";
var Iy, YCt, SLe, the, tqt, Ger, kLe, ztt, Uxo, TBn, uE, XE, $xo, UPh, nqt, Ver, Hxo, EBn, aTe, $Ph, jer, Wxo, Gxo, Ktt, qer, Zv, Ytt, zer, mG, ute, Vxo, iqt, HPh, WPh, J_e, gG, GPh, XCt, jxo, qxo, rqt, R8e, D8e, VPh, Tq, Ker, jPh, zxo, nhe, ZCt, ebe, cTe, qPh, QCt, sqt, Kxo, xBn, ihe, Yer, wLe, zPh, IBn, M8e, KPh, Xtt, Ztt, CLe, Qtt, oqt, mT, YPh, Su;
export { $Ph, $xo, CLe, D8e, EBn, GPh, Ger, Gxo, HPh, Hxo, IBn, Iy, J_e, KPh, Ker, Ktt, Kxo, M8e, QCt, Qtt, R8e, SLe, Su, TBn, Tq, UPh, Uxo, VPh, Ver, Vxo, WPh, Wxo, XCt, XE, Xtt, YCt, YPh, Yer, Ytt, ZCt, Ztt, Zv, aTe, cTe, ebe, gG, ihe, iqt, jPh, jer, jxo, kLe, mG, mT, nhe, nqt, oqt, qPh, qer, qxo, rqt, sqt, the, tqt, uE, ute, wLe, xBn, zPh, zer, ztt, zxo };
var __wakaru_yd_initialized = false;
export function yd() {
if (__wakaru_yd_initialized) return;
__wakaru_yd_initialized = true;
"use strict";
x(), Se(), li(), Li(), kl(), Ll(), rt(), dn(), Fi(), xc(), Iy = new At("workbenchState", void 0, {
    type: "string",
    description: S(4280, null)
}), YCt = new At("workspaceFolderCount", 0, S(4281, null)), SLe = new At("openFolderWorkspaceSupport", !0, !0), the = new At("enterMultiRootWorkspaceSupport", !0, !0), tqt = new At("emptyWorkspaceSupport", !0, !0), Ger = new At("dirtyWorkingCopies", !1, S(4282, null)), kLe = new At("remoteName", "", S(4283, null)), ztt = new At("virtualWorkspace", "", S(4284, null)), Uxo = new At("temporaryWorkspace", !1, S(4285, null)), TBn = new At("isFullscreen", !1, S(4286, null)), uE = new At("isAuxiliaryWindowFocusedContext", !1, S(4287, null)), XE = new At("isGlass", !1, S(4288, null)), $xo = new At("hasWebFileSystemAccess", !1, !0), UPh = new At("embedderIdentifier", void 0, S(4289, null)), nqt = new At("activeEditorIsDirty", !1, S(4290, null)), Ver = new At("activeEditorIsNotPreview", !1, S(4291, null)), Hxo = new At("activeEditorIsFirstInGroup", !1, S(4292, null)), EBn = new At("activeEditorIsLastInGroup", !1, S(4293, null)), aTe = new At("activeEditorIsPinned", !1, S(4294, null)), $Ph = new At("activeEditorIsReadonly", !1, S(4295, null)), jer = new At("activeCompareEditorCanSwap", !1, S(4296, null)), Wxo = new At("activeEditorCanToggleReadonly", !0, S(4297, null)), Gxo = new At("activeEditorCanRevert", !1, S(4298, null)), Ktt = new At("activeEditorCanSplitInGroup", !0), qer = new At("activeEditorIsReviewChanges", !1, S(4299, null)), Zv = new At("activeEditor", null, {
    type: "string",
    description: S(4300, null)
}), Ytt = new At("activeEditorAvailableEditorIds", "", S(4301, null)), zer = new At("textCompareEditorVisible", !1, S(4302, null)), mG = new At("textCompareEditorActive", !1, S(4303, null)), ute = new At("sideBySideEditorActive", !1, S(4304, null)), Vxo = new At("groupEditorsCount", 0, S(4305, null)), iqt = new At("activeEditorGroupEmpty", !1, S(4306, null)), HPh = new At("activeEditorGroupIndex", 0, S(4307, null)), WPh = new At("activeEditorGroupLast", !1, S(4308, null)), J_e = new At("activeEditorGroupLocked", !1, S(4309, null)), gG = new At("multipleEditorGroups", !1, S(4310, null)), GPh = gG.toNegated(), XCt = new At("multipleEditorsSelectedInGroup", !1, S(4311, null)), jxo = new At("twoEditorsSelectedInGroup", !1, S(4312, null)), qxo = new At("SelectedEditorsInGroupFileOrUntitledResourceContextKey", !0, S(4313, null)), rqt = new At("editorPartMultipleEditorGroups", !1, S(4314, null)), R8e = new At("editorPartMaximizedEditorGroup", !1, S(4315, null)), D8e = new At("isAuxiliaryEditorPart", !1, S(4316, null)), VPh = new At("editorIsOpen", !1, S(4317, null)), Tq = new At("inZenMode", !1, S(4318, null)), Ker = new At("isCenteredLayout", !1, S(4319, null)), jPh = new At("splitEditorsVertically", !1, S(4320, null)), zxo = new At("mainEditorAreaVisible", !0, S(4321, null)), nhe = new At("agentChatMaximized", !1, S(4322, null)), ZCt = new At("editorTabsVisible", !0, S(4323, null)), ebe = new At("sideBarVisible", !1, S(4324, null)), cTe = new At("sideBarFocus", !1, S(4325, null)), qPh = new At("activeViewlet", "", S(4326, null)), QCt = new At("statusBarFocused", !1, S(4327, null)), sqt = new At("titleBarStyle", "custom", S(4328, null)), Kxo = new At("titleBarVisible", !1, S(4329, null)), xBn = new At("bannerFocused", !1, S(4330, null)), ihe = new At("notificationFocus", !0, S(4331, null)), Yer = new At("notificationCenterVisible", !1, S(4332, null)), wLe = new At("notificationToastsVisible", !1, S(4333, null)), zPh = new At("activeAuxiliary", "", S(4334, null)), IBn = new At("auxiliaryBarFocus", !1, S(4335, null)), M8e = new At("auxiliaryBarVisible", !1, S(4336, null)), KPh = new At("activePanel", "", S(4337, null)), Xtt = new At("panelFocus", !1, S(4338, null)), Ztt = new At("panelPosition", "bottom", S(4339, null)), CLe = new At("panelAlignment", "center", S(4340, null)), Qtt = new At("panelVisible", !1, S(4341, null)), oqt = new At("panelMaximized", !1, S(4342, null)), mT = new At("focusedView", "", S(4343, null)), YPh = new At("documentBodyFocused", !1, S(4344, null)), Su = class {
    constructor(e, t, n, i){
        this._contextKeyService = e, this._fileService = t, this._languageService = n, this._modelService = i, this._disposables = new He, this._schemeKey = Su.Scheme.bindTo(this._contextKeyService), this._filenameKey = Su.Filename.bindTo(this._contextKeyService), this._dirnameKey = Su.Dirname.bindTo(this._contextKeyService), this._pathKey = Su.Path.bindTo(this._contextKeyService), this._langIdKey = Su.LangId.bindTo(this._contextKeyService), this._resourceKey = Su.Resource.bindTo(this._contextKeyService), this._extensionKey = Su.Extension.bindTo(this._contextKeyService), this._hasResource = Su.HasResource.bindTo(this._contextKeyService), this._isFileSystemResource = Su.IsFileSystemResource.bindTo(this._contextKeyService), this._disposables.add(t.onDidChangeFileSystemProviderRegistrations(()=>{
            const r = this.get();
            this._isFileSystemResource.set(!!(r && t.hasProvider(r)));
        })), this._disposables.add(i.onModelAdded((r)=>{
            Ac(r.uri, this.get()) && this._setLangId();
        })), this._disposables.add(i.onModelLanguageChanged((r)=>{
            Ac(r.model.uri, this.get()) && this._setLangId();
        }));
    }
    dispose() {
        this._disposables.dispose();
    }
    _setLangId() {
        const e = this.get();
        if (!e) {
            this._langIdKey.set(null);
            return;
        }
        const t = this._modelService.getModel(e)?.getLanguageId() ?? this._languageService.guessLanguageIdByFilepathOrFirstLine(e);
        this._langIdKey.set(t);
    }
    set(e) {
        e = e ?? void 0, !Ac(this._value, e) && (this._value = e, this._contextKeyService.bufferChangeEvents(()=>{
            this._resourceKey.set(e ? e.toString() : null), this._schemeKey.set(e ? e.scheme : null), this._filenameKey.set(e ? fo(e) : null), this._dirnameKey.set(e ? this.uriToPath(ml(e)) : null), this._pathKey.set(e ? this.uriToPath(e) : null), this._setLangId(), this._extensionKey.set(e ? u1(e) : null), this._hasResource.set(!!e), this._isFileSystemResource.set(e ? this._fileService.hasProvider(e) : !1);
        }));
    }
    uriToPath(e) {
        return e.scheme === gt.file ? e.fsPath : e.path;
    }
    reset() {
        this._value = void 0, this._contextKeyService.bufferChangeEvents(()=>{
            this._resourceKey.reset(), this._schemeKey.reset(), this._filenameKey.reset(), this._dirnameKey.reset(), this._pathKey.reset(), this._langIdKey.reset(), this._extensionKey.reset(), this._hasResource.reset(), this._isFileSystemResource.reset();
        });
    }
    get() {
        return this._value;
    }
}, Su.Scheme = new At("resourceScheme", void 0, {
    type: "string",
    description: S(4345, null)
}), Su.Filename = new At("resourceFilename", void 0, {
    type: "string",
    description: S(4346, null)
}), Su.Dirname = new At("resourceDirname", void 0, {
    type: "string",
    description: S(4347, null)
}), Su.Path = new At("resourcePath", void 0, {
    type: "string",
    description: S(4348, null)
}), Su.LangId = new At("resourceLangId", void 0, {
    type: "string",
    description: S(4349, null)
}), Su.Resource = new At("resource", void 0, {
    type: "URI",
    description: S(4350, null)
}), Su.Extension = new At("resourceExtname", void 0, {
    type: "string",
    description: S(4351, null)
}), Su.HasResource = new At("resourceSet", void 0, {
    type: "boolean",
    description: S(4352, null)
}), Su.IsFileSystemResource = new At("isFileSystemResource", void 0, {
    type: "boolean",
    description: S(4353, null)
}), Su = ie([
    C(0, xn),
    C(1, Ii),
    C(2, pc),
    C(3, fc)
], Su);

}
