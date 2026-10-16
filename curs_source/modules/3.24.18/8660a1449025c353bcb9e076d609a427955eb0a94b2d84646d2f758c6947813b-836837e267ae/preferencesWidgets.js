import { D, Gt, Nt, Qe, st, tt } from "./Iwo.js";
import { HOe } from "./SZu.js";
import { Bj, fz } from "./actionViewItems.js";
import { PT, oR, wM } from "./actionbar.js";
import { vu, za } from "./actions.js";
import { Ad } from "./baseColors.js";
import { Ap } from "./colorRegistry.js";
import { Mf, aL, pf } from "./contextView.js";
import { Hi, Rr } from "./contextkey.js";
import { Dd, Hn, Pr } from "./dom_2.js";
import { fo, ps } from "./environmentService.js";
import { yWr } from "./historyWidgetKeybindingHint.js";
import { av, gS } from "./hover.js";
import { Ek, zf } from "./htmlContent.js";
import { It, dn } from "./instantiation.js";
import { ayi, oyi, ryi } from "./ipa.js";
import { Ma, Ze } from "./keyCodes.js";
import { Al, ru } from "./keybinding.js";
import { nT, rv } from "./keyboardEvent.js";
import { Yp, qg } from "./label.js";
import { Kp, Ph } from "./language.js";
import { Att, ari } from "./miscColors.js";
import { Ki, Ot } from "./network.js";
import { Bt } from "./nls.js";
import { K0l, V0l, vJg } from "./preferencesIcons.js";
import { Lr, gu } from "./resources.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { CY, k4 } from "./widget.js";
import { Sr, yr } from "./workspace.js";
import { Ii, Mj, Xa, c2, fr, j3, li, sR } from "./ze.js";
var ugs, Y0l, dgs, X0l;
export { X0l, Y0l, dgs, ugs };
var __wakaru__Jg_initialized = false;
export function _Jg() {
if (__wakaru__Jg_initialized) return;
__wakaru__Jg_initialized = true;
"use strict";
E(), Hn(), nT(), PT(), fz(), CY(), vu(), Gt(), Ek(), Ma(), Qe(), Ki(), Lr(), fn(), Bt(), oyi(), yWr(), Hi(), pf(), It(), ru(), qg(), Ap(), ta(), Sr(), K0l(), fo(), Kp(), sR(), gS(), ugs = class extends Bj {
    constructor(t, e, n, i){
        super(null, t), this.contextService = e, this.contextMenuService = n, this.hoverService = i, this._folderSettingCounts = new Map, this.renderDisposables = this._register(new Nt);
        const r = this.contextService.getWorkspace();
        this._folder = r.folders.length === 1 ? r.folders[0] : null, this._register(this.contextService.onDidChangeWorkspaceFolders(()=>this.onWorkspaceFoldersChanged()));
    }
    get folder() {
        return this._folder;
    }
    set folder(t) {
        this._folder = t, this.update();
    }
    setCount(t, e) {
        const n = this.contextService.getWorkspaceFolder(t);
        if (!n) throw new Error("unknown folder");
        const i = n.uri;
        this._folderSettingCounts.set(i.toString(), e), this.update();
    }
    render(t) {
        this.renderDisposables.clear(), this.element = t, this.container = t, this.labelElement = Ii(".action-title"), this.detailsElement = Ii(".action-details"), this.dropDownElement = Ii(".dropdown-icon.hide" + Gn.asCSSSelector(vJg)), this.anchorElement = Ii("a.action-label.folder-settings", {
            role: "button",
            "aria-haspopup": "true",
            tabindex: "0"
        }, this.labelElement, this.detailsElement, this.dropDownElement), this.anchorElementHover = this._register(this.hoverService.setupManagedHover(c2("mouse"), this.anchorElement, "")), this.renderDisposables.add(li(this.anchorElement, Pr.MOUSE_DOWN, (e)=>Dd.stop(e))), this.renderDisposables.add(li(this.anchorElement, Pr.CLICK, (e)=>this.onClick(e))), this.renderDisposables.add(li(this.container, Pr.KEY_UP, (e)=>this.onKeyUp(e))), fr(this.container, this.anchorElement), this.update();
    }
    onKeyUp(t) {
        switch(new rv(t).keyCode){
            case Ze.Enter:
            case Ze.Space:
                this.onClick(t);
                return;
        }
    }
    onClick(t) {
        Dd.stop(t, !0), !this.folder || this._action.checked ? this.showMenu() : this._action.run(this._folder);
    }
    updateEnabled() {
        this.update();
    }
    updateChecked() {
        this.update();
    }
    onWorkspaceFoldersChanged() {
        const t = this._folder, e = this.contextService.getWorkspace();
        t && (this._folder = e.folders.filter((n)=>gu(n.uri, t.uri))[0] || e.folders[0]), this._folder = this._folder ? this._folder : e.folders.length === 1 ? e.folders[0] : null, this.update(), this._action.checked && this._action.run(this._folder);
    }
    update() {
        let t = 0;
        this._folderSettingCounts.forEach((n)=>t += n);
        const e = this.contextService.getWorkspace();
        if (this._folder) {
            this.labelElement.textContent = this._folder.name, this.anchorElementHover.update(this._folder.name);
            const n = this.labelWithCount(this._action.label, t);
            this.detailsElement.textContent = n, this.dropDownElement.classList.toggle("hide", e.folders.length === 1 || !this._action.checked);
        } else {
            const n = this.labelWithCount(this._action.label, t);
            this.labelElement.textContent = n, this.detailsElement.textContent = "", this.anchorElementHover.update(this._action.label), this.dropDownElement.classList.remove("hide");
        }
        this.anchorElement.classList.toggle("checked", this._action.checked), this.container.classList.toggle("disabled", !this._action.enabled);
    }
    showMenu() {
        this.contextMenuService.showContextMenu({
            getAnchor: ()=>this.container,
            getActions: ()=>this.getDropdownMenuActions(),
            getActionViewItem: ()=>{},
            onHide: ()=>{
                this.anchorElement.blur();
            }
        });
    }
    getDropdownMenuActions() {
        const t = [], e = this.contextService.getWorkspace().folders;
        return this.contextService.getWorkbenchState() === 3 && e.length > 0 && t.push(...e.map((n, i)=>{
            const r = this._folderSettingCounts.get(n.uri.toString());
            return {
                id: "folderSettingsTarget" + i,
                label: this.labelWithCount(n.name, r),
                tooltip: this.labelWithCount(n.name, r),
                checked: !!this.folder && gu(this.folder.uri, n.uri),
                enabled: !0,
                class: void 0,
                run: ()=>this._action.run(n)
            };
        })), t;
    }
    labelWithCount(t, e) {
        return e && (t += ` (${e})`), t;
    }
}, ugs = Re([
    F(1, yr),
    F(2, Mf),
    F(3, av)
], ugs), Y0l = class extends k4 {
    constructor(t, e, n, i, r, s, o){
        super(), this.contextService = n, this.instantiationService = i, this.environmentService = r, this.labelService = s, this.languageService = o, this._settingsTarget = null, this._onDidTargetChange = this._register(new tt), this.onDidTargetChange = this._onDidTargetChange.event, this.options = e ?? {}, this.create(t), this._register(this.contextService.onDidChangeWorkbenchState(()=>this.onWorkbenchStateChanged())), this._register(this.contextService.onDidChangeWorkspaceFolders(()=>this.update()));
    }
    resetLabels() {
        const t = this.environmentService.remoteAuthority, e = t && this.labelService.getHostLabel(Ot.vscodeRemote, t);
        this.userLocalSettings.label = D(8600, null), this.userRemoteSettings.label = D(8601, null) + (e ? ` [${e}]` : ""), this.workspaceSettings.label = D(8602, null), this.folderSettingsAction.label = D(8603, null);
    }
    create(t) {
        const e = fr(t, Ii(".settings-tabs-widget"));
        this.settingsSwitcherBar = this._register(new oR(e, {
            orientation: wM.HORIZONTAL,
            focusOnlyEnabledItems: !0,
            ariaLabel: D(8604, null),
            ariaRole: "tablist",
            actionViewItemProvider: (r, s)=>r.id === "folderSettings" ? this.folderSettings : void 0
        })), this.userLocalSettings = new za("userSettings", "", ".settings-tab", !0, ()=>this.updateTarget(3)), this.userLocalSettings.tooltip = D(8605, null), this.userRemoteSettings = new za("userSettingsRemote", "", ".settings-tab", !0, ()=>this.updateTarget(4));
        const n = this.environmentService.remoteAuthority, i = n && this.labelService.getHostLabel(Ot.vscodeRemote, n);
        this.userRemoteSettings.tooltip = D(8606, null) + (i ? ` [${i}]` : ""), this.workspaceSettings = new za("workspaceSettings", "", ".settings-tab", !1, ()=>this.updateTarget(5)), this.folderSettingsAction = new za("folderSettings", "", ".settings-tab", !1, async (r)=>{
            this.updateTarget(HOe(r) ? r.uri : 3);
        }), this.folderSettings = this.instantiationService.createInstance(ugs, this.folderSettingsAction), this.resetLabels(), this.update(), this.settingsSwitcherBar.push([
            this.userLocalSettings,
            this.userRemoteSettings,
            this.workspaceSettings,
            this.folderSettingsAction
        ]);
    }
    get settingsTarget() {
        return this._settingsTarget;
    }
    set settingsTarget(t) {
        this._settingsTarget = t, this.userLocalSettings.checked = this.settingsTarget === 3, this.userRemoteSettings.checked = this.settingsTarget === 4, this.workspaceSettings.checked = this.settingsTarget === 5, this.settingsTarget instanceof rt ? (this.folderSettings.action.checked = !0, this.folderSettings.folder = this.contextService.getWorkspaceFolder(this.settingsTarget)) : this.folderSettings.action.checked = !1;
    }
    setResultCount(t, e) {
        if (t === 5) {
            let n = D(8607, null);
            e && (n += ` (${e})`), this.workspaceSettings.label = n;
        } else if (t === 3) {
            let n = D(8608, null);
            e && (n += ` (${e})`), this.userLocalSettings.label = n;
        } else t instanceof rt && this.folderSettings.setCount(t, e);
    }
    updateLanguageFilterIndicators(t) {
        if (this.resetLabels(), t) {
            const e = this.languageService.getLanguageName(t);
            if (e) {
                const n = ` [${e}]`;
                this.userLocalSettings.label += n, this.userRemoteSettings.label += n, this.workspaceSettings.label += n, this.folderSettingsAction.label += n;
            }
        }
    }
    onWorkbenchStateChanged() {
        this.folderSettings.folder = null, this.update(), this.settingsTarget === 5 && this.contextService.getWorkbenchState() === 3 && this.updateTarget(3);
    }
    updateTarget(t) {
        return this.settingsTarget === t || t instanceof rt && this.settingsTarget instanceof rt && gu(this.settingsTarget, t) || (this.settingsTarget = t, this._onDidTargetChange.fire(this.settingsTarget)), Promise.resolve(void 0);
    }
    async update() {
        this.settingsSwitcherBar.domNode.classList.toggle("empty-workbench", this.contextService.getWorkbenchState() === 1), this.userRemoteSettings.enabled = !!(this.options.enableRemoteSettings && this.environmentService.remoteAuthority), this.workspaceSettings.enabled = this.contextService.getWorkbenchState() !== 1, this.folderSettings.action.enabled = this.contextService.getWorkbenchState() === 3 && this.contextService.getWorkspace().folders.length > 0, this.workspaceSettings.tooltip = D(8609, null);
    }
}, Y0l = Re([
    F(2, yr),
    F(3, dn),
    F(4, ps),
    F(5, Yp),
    F(6, Ph)
], Y0l), dgs = class extends k4 {
    constructor(t, e, n, i, r, s){
        super(), this.options = e, this.contextViewService = n, this.instantiationService = i, this.contextKeyService = r, this.keybindingService = s, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._onFocus = this._register(new tt), this.onFocus = this._onFocus.event, this.create(t);
    }
    create(t) {
        this.domNode = fr(t, Ii("div.settings-header-widget")), this.createSearchContainer(fr(this.domNode, Ii("div.settings-search-container"))), this.controlsDiv = fr(this.domNode, Ii("div.settings-search-controls")), this.options.showResultCount && (this.countElement = fr(this.controlsDiv, Ii(".settings-count-widget")), this.countElement.style.backgroundColor = Xa(Att), this.countElement.style.color = Xa(ari), this.countElement.style.border = `1px solid ${Xa(Ad)}`), this.inputBox.inputElement.setAttribute("aria-live", this.options.ariaLive || "off"), this.options.ariaLabelledBy && this.inputBox.inputElement.setAttribute("aria-labelledBy", this.options.ariaLabelledBy);
        const e = this._register(j3(this.inputBox.inputElement));
        this._register(e.onDidFocus(()=>this._onFocus.fire()));
        const n = this.options.focusKey;
        n && (this._register(e.onDidFocus(()=>n.set(!0))), this._register(e.onDidBlur(()=>n.set(!1))));
    }
    createSearchContainer(t) {
        this.searchContainer = t;
        const e = fr(this.searchContainer, Ii("div.settings-search-input"));
        this.inputBox = this._register(this.createInputBox(e)), this._register(this.inputBox.onDidChange((n)=>this._onDidChange.fire(n)));
    }
    createInputBox(t) {
        const e = ()=>ayi(this.keybindingService);
        return new ryi(t, this.contextViewService, {
            ...this.options,
            showHistoryHint: e
        }, this.contextKeyService);
    }
    showMessage(t) {
        this.countElement && t !== this.countElement.textContent && (this.countElement.textContent = t, this.inputBox.inputElement.setAttribute("aria-label", t), this.inputBox.inputElement.style.paddingRight = this.getControlsWidth() + "px");
    }
    layout(t) {
        t.width < 400 ? (this.countElement?.classList.add("hide"), this.inputBox.inputElement.style.paddingRight = "0px") : (this.countElement?.classList.remove("hide"), this.inputBox.inputElement.style.paddingRight = this.getControlsWidth() + "px");
    }
    getControlsWidth() {
        return (this.countElement ? Mj(this.countElement) : 0) + 20;
    }
    focus() {
        this.inputBox.focus(), this.getValue() && this.inputBox.select();
    }
    hasFocus() {
        return this.inputBox.hasFocus();
    }
    clear() {
        this.inputBox.value = "";
    }
    getValue() {
        return this.inputBox.value;
    }
    setValue(t) {
        return this.inputBox.value = t;
    }
    dispose() {
        this.options.focusKey?.set(!1), super.dispose();
    }
}, dgs = Re([
    F(2, aL),
    F(3, dn),
    F(4, Rr),
    F(5, Al)
], dgs), X0l = class extends st {
    constructor(t){
        super(), this.editor = t, this._line = -1, this._preferences = [], this._onClick = this._register(new tt), this.onClick = this._onClick.event, this._editPreferenceDecoration = this.editor.createDecorationsCollection(), this._register(this.editor.onMouseDown((e)=>{
            e.target.type !== 2 || e.target.detail.isAfterLines || !this.isVisible() || this._onClick.fire(e);
        }));
    }
    get preferences() {
        return this._preferences;
    }
    getLine() {
        return this._line;
    }
    show(t, e, n) {
        this._preferences = n;
        const i = [];
        this._line = t, i.push({
            options: {
                description: "edit-preference-widget-decoration",
                glyphMarginClassName: Gn.asClassName(V0l),
                glyphMarginHoverMessage: new zf().appendText(e),
                stickiness: 1
            },
            range: {
                startLineNumber: t,
                startColumn: 1,
                endLineNumber: t,
                endColumn: 1
            }
        }), this._editPreferenceDecoration.set(i);
    }
    hide() {
        this._editPreferenceDecoration.clear();
    }
    isVisible() {
        return this._editPreferenceDecoration.length > 0;
    }
    dispose() {
        this.hide(), super.dispose();
    }
};

}
