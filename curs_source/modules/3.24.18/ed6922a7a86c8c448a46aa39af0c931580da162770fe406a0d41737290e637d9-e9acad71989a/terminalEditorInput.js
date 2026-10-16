import { Lo, S, Se, bt, rn, ve } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Cn, qt } from "./configuration.js";
import { dn, xn } from "./contextkey.js";
import { Fc, wc } from "./dialogs.js";
import { H0, MA } from "./editorInput.js";
import { Ze, _t } from "./instantiation.js";
import { $d, Id } from "./lifecycle_2.js";
import { rt } from "./nls.js";
import { Kp, Us } from "./severity_2.js";
import { Fwt, dq, ng } from "./terminal.js";
import { Er, Gx } from "./terminalContextKey.js";
import { c7e } from "./terminalIcon.js";
import { Int, dbe } from "./terminalTabsList.js";
import { Mf, fw, pG } from "./terminal_2.js";
import { Ft, Sr } from "./themables.js";
import { $r, as } from "./themeService.js";
import { x } from "./tslib.es6.js";
var g8;
export { g8 };
var __wakaru_P5n_initialized = false;
export function P5n() {
if (__wakaru_P5n_initialized) return;
__wakaru_P5n_initialized = true;
"use strict";
x(), rt(), Kp(), Se(), as(), Sr(), MA(), ng(), c7e(), Ze(), fw(), $d(), dn(), Cn(), Gx(), Fc(), bt(), g8 = class extends H0 {
    constructor(e, t, n, i, r, s, o, a, c){
        super(), this.resource = e, this._terminalInstance = t, this._themeService = n, this._terminalInstanceService = i, this._instantiationService = r, this._configurationService = s, this._lifecycleService = o, this._contextKeyService = a, this._dialogService = c, this.closeHandler = this, this._isDetached = !1, this._isShuttingDown = !1, this._isReverted = !1, this._onDidRequestAttach = this._register(new ve), this.onDidRequestAttach = this._onDidRequestAttach.event, this._terminalEditorFocusContextKey = Er.editorFocus.bindTo(a), t && this._setupInstanceListeners();
    }
    setGroup(e) {
        this._group = e, e?.scopedContextKeyService && this._terminalInstance?.setParentContextKeyService(e.scopedContextKeyService);
    }
    get group() {
        return this._group;
    }
    get typeId() {
        return g8.ID;
    }
    get editorId() {
        return Fwt;
    }
    get capabilities() {
        return 202;
    }
    setTerminalInstance(e) {
        if (this._terminalInstance) throw new Error("cannot set instance that has already been set");
        this._terminalInstance = e, this._setupInstanceListeners();
    }
    copy() {
        const e = this._terminalInstanceService.createInstance(this._copyLaunchConfig || {}, Mf.Editor);
        return e.focusWhenReady(), this._copyLaunchConfig = void 0, this._instantiationService.createInstance(g8, e.resource, e);
    }
    setCopyLaunchConfig(e) {
        this._copyLaunchConfig = e;
    }
    get terminalInstance() {
        return this._isDetached ? void 0 : this._terminalInstance;
    }
    showConfirm() {
        if (this._isReverted) return !1;
        const e = this._configurationService.getValue("terminal.integrated.confirmOnKill");
        return (e === "editor" || e === "always") && this._terminalInstance?.hasChildProcesses || !1;
    }
    async confirm(e) {
        const { confirmed: t } = await this._dialogService.confirm({
            type: Us.Warning,
            message: S(10269, null),
            primaryButton: S(10270, null),
            detail: e.length > 1 ? e.map((n)=>n.editor.getName()).join(`
`) + `

` + S(10271, null) : S(10272, null)
        });
        return t ? 1 : 2;
    }
    async revert() {
        this._isReverted = !0;
    }
    _setupInstanceListeners() {
        const e = this._terminalInstance;
        if (!e) return;
        const t = e.onDidFocus(()=>this._terminalEditorFocusContextKey.set(!0)), n = e.onDidBlur(()=>this._terminalEditorFocusContextKey.reset());
        this._register(rn(()=>{
            !this._isDetached && !this._isShuttingDown && e.dispose(pG.User), Lo([
                t,
                n
            ]);
        }));
        const i = [
            e.onExit((r)=>{
                e.waitOnExit || this.dispose();
            }),
            e.onDisposed(()=>this.dispose()),
            e.onTitleChanged(()=>this._onDidChangeLabel.fire()),
            e.onIconChanged(()=>this._onDidChangeLabel.fire()),
            t,
            n,
            e.statusList.onDidChangePrimaryStatus(()=>this._onDidChangeLabel.fire())
        ];
        this._lifecycleService.onWillShutdown((r)=>{
            this._isShuttingDown = !0, Lo(i), this._configurationService.getValue("terminal.integrated.enablePersistentSessions") && (r.reason === 3 || r.context === "no-refs") ? e.detachProcessAndDispose(pG.Shutdown) : e.dispose(pG.Shutdown);
        });
    }
    getName() {
        return this._terminalInstance?.title || this.resource.fragment;
    }
    getIcon() {
        if (!(!this._terminalInstance || !Ft.isThemeIcon(this._terminalInstance.icon))) return this._terminalInstance.icon;
    }
    getLabelExtraClasses() {
        if (!this._terminalInstance) return [];
        const e = [
            "terminal-tab",
            "predefined-file-icon"
        ], t = dbe(this._terminalInstance);
        t && e.push(t);
        const n = Int(this._terminalInstance, this._themeService.getColorTheme().type);
        return n && e.push(...n), (this._terminalInstance.hasContributedActions || this._terminalInstance.hasContributedAttention) && e.push("terminal-contribution-icon"), e;
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
                override: Fwt,
                pinned: !0,
                forceReload: !0
            }
        };
    }
}, g8.ID = "workbench.editors.terminal", g8 = ie([
    C(2, $r),
    C(3, dq),
    C(4, _t),
    C(5, qt),
    C(6, Id),
    C(7, xn),
    C(8, wc)
], g8);

}
