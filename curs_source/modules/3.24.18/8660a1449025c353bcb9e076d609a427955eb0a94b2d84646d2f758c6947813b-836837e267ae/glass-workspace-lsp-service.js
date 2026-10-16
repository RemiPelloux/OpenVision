import { D, Ec, Ei, Gt, Qe, Vn, Ya, st, tt } from "./Iwo.js";
import { pc } from "./LYd.js";
import { bn, jn } from "./SZu.js";
import { HP0 } from "./XRv.js";
import { LNi, tNn } from "./aiGenerationRegistryService.js";
import { qn } from "./async.js";
import { ZD, jO } from "./backgroundWorkRegistry.js";
import { rp } from "./bcIdFromAuthority.js";
import { hs } from "./commands.js";
import { bcd, cJn, epn, lJn, n4t, npn, pa, tpn, y_r } from "./constants_8.js";
import { iF } from "./extensionManagementUtil.js";
import { MA, aU, gG } from "./extensionManagement_2.js";
import { Rn } from "./extensions.js";
import { id, ld } from "./extensions_4.js";
import { BIn, Qc } from "./gYa.js";
import { yp } from "./glass-command-service.js";
import { aw, vN } from "./glass-context-key-service.js";
import { hC, ow } from "./glass-environment-service.js";
import { WDe, aEe } from "./glass-lifecycle-service.js";
import { Zu, eu } from "./glass-log-service.js";
import { ul, zc } from "./glass-notification-service.js";
import { Nu, xc } from "./glass-storage-service.js";
import { $P0, Etc } from "./glass-workspace-lsp-limit-service.js";
import { F2v, NPs } from "./glass-workspace-lsp-settings-service.js";
import { Gv, xXt } from "./glassContextKeys.js";
import { YEi, nos } from "./glassWorkspaceLspConstants.js";
import { It } from "./instantiation.js";
import { Ki, Ot } from "./network.js";
import { Bt } from "./nls.js";
import { Yn } from "./notification.js";
import { Wg, io } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var fJt, FPs;
export { FPs, fJt };
var __wakaru_BPs_initialized = false;
export function BPs() {
if (__wakaru_BPs_initialized) return;
__wakaru_BPs_initialized = true;
"use strict";
E(), WDe(), hC(), qn(), rp(), pa(), Ei(), Gt(), Qe(), Ki(), Bt(), aw(), iF(), Rn(), It(), nos(), jO(), LNi(), MA(), ld(), Gv(), yp(), $P0(), F2v(), Zu(), zc(), xc(), fJt = jn("glassWorkspaceLspService"), hs.registerCommand(YEi, (t)=>t.get(fJt).isEnabled()), FPs = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h){
        super(), this._storageService = e, this._extensionService = n, this._extensionManagementService = i, this._notificationService = r, this._lifecycleService = s, this._workspaceLspLimitService = o, this._environmentService = a, this._settingsService = l, this._aiGenerationRegistryService = c, this._backgroundWorkService = u, this._logService = d, this._extensionEnablementService = h, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._isEnabled = !1, this._idleDisableTimer = this._register(new Vn), this._mountedCodeFileCount = 0, this._declarativeContributionsRegistered = !1, this._limitRegistration = this._register(new Vn), this._evictionRequested = !1, this._settingsReenableRequested = !1, this._limitEntry = {
            isRemote: ()=>this._environmentService.remoteAuthority !== void 0,
            getMountedCodeFileCount: ()=>this._mountedCodeFileCount,
            evict: ()=>this._evict()
        }, this._workspaceLspEnabledContext = t.bindContextKey(xXt), this._storageService.remove(epn, io.WORKSPACE), this._register(this._lifecycleService.onWillShutdown(()=>{
            this._idleDisableTimer.clear(), this._unregisterFromLspLimit();
        })), this._register(this._extensionService.onDidChangeExtensions((p)=>{
            if (!this._declarativeContributionsRegistered) return;
            const g = new Set(n4t);
            if (p.added.length === 0 && p.removed.every((b)=>g.has(b.identifier.value.toLowerCase()))) return;
            [
                ...p.added,
                ...p.removed
            ].some((b)=>{
                const y = b.contributes;
                return !!y && tpn.some((S)=>S in y);
            }) && (this._declarativeContributionsRegistered = !1, this._logService.info("[GlassWorkspaceLsp] foreign extension delta touched grammars/languages; next enable will fully re-register"));
        })), this._register(this._settingsService.onDidChange(()=>{
            this._handleSettingsChange();
        }));
    }
    isEnabled() {
        return this._isEnabled;
    }
    isExplicitlyDisabled() {
        return this._storageService.get(cJn, io.WORKSPACE) === "true";
    }
    isExplicitlyEnabled() {
        return this._storageService.get(lJn, io.WORKSPACE) === "true";
    }
    isEnabling() {
        return this._pendingAction === "enable";
    }
    isDisabling() {
        return this._pendingAction === "disable";
    }
    async enableUnlessExplicitlyDisabled() {
        this.isExplicitlyDisabled() || !this._isEffectivelyEligible() || this.isEnabled() || await this._enable(!1);
    }
    async enable() {
        await this._enable(!0);
    }
    _enabledAllowListedExtensions(t) {
        const e = new Set(n4t), n = [], i = [];
        for (const r of t){
            if (!e.has(r.identifier.id.toLowerCase())) continue;
            const s = this._extensionEnablementService.getEnablementState(r), o = s === 1 ? this._extensionEnablementService.getUserEnablementState(r) : s;
            this._extensionEnablementService.isEnabledEnablementState(o) ? n.push(r) : i.push(r.identifier.id);
        }
        return i.length > 0 && this._logService.info(`[GlassWorkspaceLsp] leaving disabled extensions unloaded: ${i.join(", ")}`), n;
    }
    async _enable(t) {
        if (!(!t && !this._isEffectivelyEligible() || this.isEnabled() || this._pendingAction !== void 0)) {
            this._pendingAction = "enable", this._isEnabled = !0, this._workspaceLspEnabledContext.set(!0), this._registerWithLspLimit(), this._onDidChange.fire(), this._storageService.store(epn, "true", io.WORKSPACE, Wg.USER), t && (this._storageService.store(lJn, "true", io.WORKSPACE, Wg.USER), this._storageService.remove(cJn, io.WORKSPACE));
            try {
                const e = await this._extensionManagementService.getInstalled(), n = this._enabledAllowListedExtensions(e), i = this._environmentService.remoteAuthority === void 0 ? n : n.map((l)=>this._hasHostInRemoteWorkspace(l, n) ? l : HP0(l)), r = this._declarativeContributionsRegistered ? tpn : void 0;
                this._logService.info(`[GlassWorkspaceLsp] enabling (${i.length} extensions, ${r ? "keeping grammars/languages registrations" : "fully registering grammars/languages"})`);
                const s = {
                    toAdd: i,
                    toRemove: [],
                    skipExtensionPoints: r
                }, o = this._environmentService.remoteAuthority === void 0 && i.some((l)=>npn.includes(l.identifier.id.toLowerCase())), a = o ? this._describeActiveLocalAgentWork() : void 0;
                o && a === void 0 ? (this._logService.info("[GlassWorkspaceLsp] restarting local extension hosts for TypeScript Native Preview"), await this._extensionService.startExtensionHosts(s)) : (a !== void 0 && this._logService.info(`[GlassWorkspaceLsp] skipping the TypeScript Native Preview extension host restart because ${a}; enabling via the delta path`), await this._extensionService.deltaExtensions(s)), this._declarativeContributionsRegistered = !0, this._logService.info("[GlassWorkspaceLsp] enabled");
            } catch (e) {
                this._logService.error("[GlassWorkspaceLsp] enable failed", e), this._notificationService.notify({
                    severity: Yn.Error,
                    message: D("glassWorkspaceLsp.enableFailed", "Enabled LSP for this workspace, but loading language features failed: {0}", e instanceof Error ? e.message : String(e))
                });
            } finally{
                this._pendingAction = void 0, this._onDidChange.fire(), (this._evictionRequested || !this._isEffectivelyEligible()) && (this._evictionRequested = !1, await this._disable(!1));
            }
        }
    }
    _hasHostInRemoteWorkspace(t, e) {
        const n = (r)=>r.location.scheme === Ot.vscodeRemote;
        return n(t) || e.some((r)=>n(r) && Qc(r.identifier, t.identifier)) || this._extensionService.canAddExtension(BIn(t));
    }
    async disable() {
        await this._disable(!0);
    }
    dispose() {
        this._unregisterFromLspLimit(), super.dispose();
    }
    _restoreWorkspaceLspEnabledState(t) {
        this._isEnabled = !0, this._workspaceLspEnabledContext.set(!0), this._store.isDisposed || this._registerWithLspLimit(), this._storageService.store(epn, "true", io.WORKSPACE, Wg.USER), this._storageService.remove(cJn, io.WORKSPACE), t && this._storageService.store(lJn, "true", io.WORKSPACE, Wg.USER);
    }
    _registerWithLspLimit() {
        this._limitRegistration.value ??= this._workspaceLspLimitService.register(this._limitEntry);
    }
    _unregisterFromLspLimit() {
        this._limitRegistration.clear();
    }
    async _evict() {
        if (this._pendingAction === "enable") {
            this._evictionRequested = !0;
            return;
        }
        await this._disable(!1);
    }
    _isEnabledByDefault() {
        const t = this._settingsService.getSettings();
        return t.enabled && (!this._environmentService.isGlassCursorWorktreeAgentWorkspace || t.worktreesEnabled);
    }
    _isEffectivelyEligible() {
        return this.isExplicitlyEnabled() || this._isEnabledByDefault();
    }
    _handleSettingsChange() {
        if (!this._isEffectivelyEligible()) {
            this._settingsReenableRequested = !1, this._pendingAction !== "enable" && this._disable(!1);
            return;
        }
        if (!(this._mountedCodeFileCount === 0 || this.isExplicitlyDisabled() || this.isEnabled())) {
            if (this._pendingAction === "disable") {
                this._settingsReenableRequested = !0;
                return;
            }
            this.enableUnlessExplicitlyDisabled();
        }
    }
    async _disable(t) {
        if (this._store.isDisposed || !this.isEnabled() || this._pendingAction !== void 0) return;
        const e = this.isExplicitlyEnabled();
        this._pendingAction = "disable", this._isEnabled = !1, this._workspaceLspEnabledContext.set(!1), this._idleDisableTimer.clear(), this._unregisterFromLspLimit(), this._onDidChange.fire(), this._storageService.remove(epn, io.WORKSPACE), t && (this._storageService.store(cJn, "true", io.WORKSPACE, Wg.USER), this._storageService.remove(lJn, io.WORKSPACE));
        try {
            const n = await this._extensionManagementService.getInstalled();
            if (this._store.isDisposed) {
                this._restoreWorkspaceLspEnabledState(e);
                return;
            }
            const i = new Set(y_r), r = n.filter((a)=>i.has(a.identifier.id.toLowerCase())).map((a)=>a.identifier.id);
            t && (this._declarativeContributionsRegistered = !1), this._logService.info(`[GlassWorkspaceLsp] disabling (${t ? "explicit, tearing down grammars/languages" : "idle, keeping grammars/languages registrations"}, ${r.length} extensions)`);
            const s = {
                toAdd: [],
                toRemove: r,
                skipExtensionPoints: t ? void 0 : tpn,
                forceHandleExtensionPoints: t ? tpn : void 0
            }, o = this._environmentService.remoteAuthority;
            o === void 0 ? await this._extensionService.startExtensionHosts(s) : (await this._extensionService.deltaExtensions(s), await this._extensionService.repairRemoteExtensionHosts(o)), this._logService.info("[GlassWorkspaceLsp] disabled");
        } catch (n) {
            if (this._store.isDisposed) return;
            if (this._logService.error("[GlassWorkspaceLsp] disable failed", n), this._restoreWorkspaceLspEnabledState(e), this._scheduleIdleDisable(), !Ya(n)) {
                const i = n instanceof Error ? n.message : String(n);
                this._notificationService.notify({
                    severity: Yn.Error,
                    message: t ? D("glassWorkspaceLsp.disableFailed", "Disabled LSP for this workspace, but unloading language features failed: {0}", i) : D("glassWorkspaceLsp.idleDisableFailed", "Turned off LSP for this workspace after inactivity, but unloading language features failed: {0}", i)
                });
            }
        } finally{
            this._pendingAction = void 0, this._onDidChange.fire(), this._settingsReenableRequested && (this._settingsReenableRequested = !1, this.enableUnlessExplicitlyDisabled());
        }
    }
    onCodeFileMount() {
        this._mountedCodeFileCount++, this._idleDisableTimer.clear(), this._workspaceLspLimitService.touch(this._limitEntry);
    }
    onCodeFileActivate() {
        this._workspaceLspLimitService.touch(this._limitEntry);
    }
    onCodeFileUnmount() {
        this._mountedCodeFileCount !== 0 && (this._mountedCodeFileCount--, !(this._mountedCodeFileCount > 0) && this._scheduleIdleDisable());
    }
    _scheduleIdleDisable() {
        this._idleDisableTimer.clear(), !(!this.isEnabled() || this._mountedCodeFileCount > 0) && (this._idleDisableTimer.value = Ec(()=>{
            this._disableIfIdle();
        }, bcd));
    }
    async _disableIfIdle() {
        if (this._idleDisableTimer.clear(), this._store.isDisposed || !this.isEnabled() || this._pendingAction !== void 0 || this._mountedCodeFileCount > 0) return;
        const t = this._describeActiveLocalAgentWork();
        if (t) {
            this._logService.info(`[GlassWorkspaceLsp] deferring idle disable because ${t}; rescheduling`), this._scheduleIdleDisable();
            return;
        }
        await this._disable(!1);
    }
    _describeActiveLocalAgentWork() {
        const t = this._aiGenerationRegistryService.inprogressAIGenerations.value.length;
        if (t > 0) return `${t} AI generation(s) are in progress`;
        if (this._backgroundWorkService.backgroundWorkItems.value.some((n)=>n.kind === "shell" || n.kind === "subagent" && !pc(n.subagentComposerId ?? n.id))) return "an agent is waiting on a background task";
    }
}, FPs = Re([
    F(0, vN),
    F(1, Nu),
    F(2, id),
    F(3, gG),
    F(4, ul),
    F(5, aEe),
    F(6, Etc),
    F(7, ow),
    F(8, NPs),
    F(9, tNn),
    F(10, ZD),
    F(11, eu),
    F(12, aU)
], FPs), bn(fJt, FPs, 1);

}
