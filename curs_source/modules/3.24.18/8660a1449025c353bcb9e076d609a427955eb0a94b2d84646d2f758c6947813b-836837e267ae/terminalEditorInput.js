import { D, Gt, Nc, Pn, Qe, tt } from "./Iwo.js";
import { _2n, kVe } from "./Ycg.js";
import { or, yi } from "./configuration.js";
import { Hi, Rr } from "./contextkey.js";
import { bd, hd } from "./dialogs.js";
import { AA, qO } from "./editorInput.js";
import { It, dn } from "./instantiation.js";
import { Fp, zp } from "./lifecycle_2.js";
import { Bt } from "./nls.js";
import { Ua, ob } from "./severity_2.js";
import { LJ, Mv, ozt } from "./terminal.js";
import { QI, ns } from "./terminalContextKey.js";
import { ZEt } from "./terminalIcon.js";
import { UC, ny, pG } from "./terminal_2.js";
import { Gn, ta } from "./themables.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var wV;
export { wV };
var __wakaru_FAi_initialized = false;
export function FAi() {
if (__wakaru_FAi_initialized) return;
__wakaru_FAi_initialized = true;
"use strict";
E(), Bt(), ob(), Qe(), Dl(), ta(), qO(), Mv(), ZEt(), It(), UC(), zp(), Hi(), or(), QI(), bd(), Gt(), wV = class extends AA {
    constructor(t, e, n, i, r, s, o, a, l){
        super(), this.resource = t, this._terminalInstance = e, this._themeService = n, this._terminalInstanceService = i, this._instantiationService = r, this._configurationService = s, this._lifecycleService = o, this._contextKeyService = a, this._dialogService = l, this.closeHandler = this, this._isDetached = !1, this._isShuttingDown = !1, this._isReverted = !1, this._onDidRequestAttach = this._register(new tt), this.onDidRequestAttach = this._onDidRequestAttach.event, this._terminalEditorFocusContextKey = ns.editorFocus.bindTo(a), e && this._setupInstanceListeners();
    }
    setGroup(t) {
        this._group = t, t?.scopedContextKeyService && this._terminalInstance?.setParentContextKeyService(t.scopedContextKeyService);
    }
    get group() {
        return this._group;
    }
    get typeId() {
        return wV.ID;
    }
    get editorId() {
        return ozt;
    }
    get capabilities() {
        return 202;
    }
    setTerminalInstance(t) {
        if (this._terminalInstance) throw new Error("cannot set instance that has already been set");
        this._terminalInstance = t, this._setupInstanceListeners();
    }
    copy() {
        const t = this._terminalInstanceService.createInstance(this._copyLaunchConfig || {}, ny.Editor);
        return t.focusWhenReady(), this._copyLaunchConfig = void 0, this._instantiationService.createInstance(wV, t.resource, t);
    }
    setCopyLaunchConfig(t) {
        this._copyLaunchConfig = t;
    }
    get terminalInstance() {
        return this._isDetached ? void 0 : this._terminalInstance;
    }
    showConfirm() {
        if (this._isReverted) return !1;
        const t = this._configurationService.getValue("terminal.integrated.confirmOnKill");
        return (t === "editor" || t === "always") && this._terminalInstance?.hasChildProcesses || !1;
    }
    async confirm(t) {
        const { confirmed: e } = await this._dialogService.confirm({
            type: Ua.Warning,
            message: D(10269, null),
            primaryButton: D(10270, null),
            detail: t.length > 1 ? t.map((n)=>n.editor.getName()).join(`
`) + `

` + D(10271, null) : D(10272, null)
        });
        return e ? 1 : 2;
    }
    async revert() {
        this._isReverted = !0;
    }
    _setupInstanceListeners() {
        const t = this._terminalInstance;
        if (!t) return;
        const e = t.onDidFocus(()=>this._terminalEditorFocusContextKey.set(!0)), n = t.onDidBlur(()=>this._terminalEditorFocusContextKey.reset());
        this._register(Pn(()=>{
            !this._isDetached && !this._isShuttingDown && t.dispose(pG.User), Nc([
                e,
                n
            ]);
        }));
        const i = [
            t.onExit((r)=>{
                t.waitOnExit || this.dispose();
            }),
            t.onDisposed(()=>this.dispose()),
            t.onTitleChanged(()=>this._onDidChangeLabel.fire()),
            t.onIconChanged(()=>this._onDidChangeLabel.fire()),
            e,
            n,
            t.statusList.onDidChangePrimaryStatus(()=>this._onDidChangeLabel.fire())
        ];
        this._lifecycleService.onWillShutdown((r)=>{
            this._isShuttingDown = !0, Nc(i), this._configurationService.getValue("terminal.integrated.enablePersistentSessions") && (r.reason === 3 || r.context === "no-refs") ? t.detachProcessAndDispose(pG.Shutdown) : t.dispose(pG.Shutdown);
        });
    }
    getName() {
        return this._terminalInstance?.title || this.resource.fragment;
    }
    getIcon() {
        if (!(!this._terminalInstance || !Gn.isThemeIcon(this._terminalInstance.icon))) return this._terminalInstance.icon;
    }
    getLabelExtraClasses() {
        if (!this._terminalInstance) return [];
        const t = [
            "terminal-tab",
            "predefined-file-icon"
        ], e = kVe(this._terminalInstance);
        e && t.push(e);
        const n = _2n(this._terminalInstance, this._themeService.getColorTheme().type);
        return n && t.push(...n), (this._terminalInstance.hasContributedActions || this._terminalInstance.hasContributedAttention) && t.push("terminal-contribution-icon"), t;
    }
    detachInstance() {
        this._isShuttingDown || (this._terminalInstance?.detachFromElement(), this._terminalInstance?.setParentContextKeyService(this._contextKeyService), this._isDetached = !0);
    }
    getDescription() {
        return this._terminalInstance?.description;
    }
    toUntyped() {
        return {
            resource: this.resource,
            options: {
                override: ozt,
                pinned: !0,
                forceReload: !0
            }
        };
    }
}, wV.ID = "workbench.editors.terminal", wV = Re([
    F(2, Ml),
    F(3, LJ),
    F(4, dn),
    F(5, yi),
    F(6, Fp),
    F(7, Rr),
    F(8, hd)
], wV);

}
