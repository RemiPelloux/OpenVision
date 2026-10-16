import { D, Di, Gt, Jpr, Nc, Nt, Pn, Qe, Wd, _r, en, st, th, tt } from "./Iwo.js";
import { mP, ud } from "./SZu.js";
import { Cvl, DDk, NDk, PMk, QVt, _2n, h2g, m2g, qMk, w9e, y2n } from "./Ycg.js";
import { df, qn } from "./async.js";
import { Ogn } from "./baseColors.js";
import { Ap } from "./colorRegistry.js";
import { nr, rs } from "./commands.js";
import { or, yi } from "./configuration.js";
import { Hi, Rr } from "./contextkey.js";
import { tRn, vf } from "./contextkeys_2.js";
import { NQ } from "./cssValue.js";
import { SM } from "./decorators.js";
import { D2k, eds } from "./detachedTerminal.js";
import { bd, hd } from "./dialogs.js";
import { PEt } from "./editorGroupColumn.js";
import { Ld, _a } from "./editorGroupsService.js";
import { Wo, gr, kIr, p2 } from "./editorService.js";
import { fo, ps } from "./environmentService.js";
import { id, ld } from "./extensions_4.js";
import { Fat, Qze } from "./fastContextService.js";
import { Aak } from "./gYa.js";
import { b_ } from "./iconRegistry.js";
import { It, dn } from "./instantiation.js";
import { Al, ru } from "./keybinding.js";
import { Fp, zp } from "./lifecycle_2.js";
import { Ki, Ot } from "./network.js";
import { Bt } from "./nls.js";
import { Ks, Wr } from "./notification.js";
import { Rd, ih } from "./pathService.js";
import { Nh, Sg } from "./remoteAgentService.js";
import { Uv, Xv } from "./telemetry.js";
import { LJ, Mv, NJ, Py, iat, pV } from "./terminal.js";
import { yG } from "./terminalActions.js";
import { dAi, uAi } from "./terminalCapabilityStore.js";
import { QI, ns } from "./terminalContextKey.js";
import { FAi, wV } from "./terminalEditorInput.js";
import { zMk } from "./terminalEvents.js";
import { ZEt } from "./terminalIcon.js";
import { T2n, cU } from "./terminalInstance.js";
import { MDk, hhs } from "./terminalProfileQuickpick.js";
import { LDk } from "./terminalReconnection.js";
import { Kus } from "./terminalStrings.js";
import { QEt } from "./terminalUri.js";
import { UC, Z4, ame, ny, pG } from "./terminal_2.js";
import { PA, Zze, bR } from "./terminal_3.js";
import { Gn, ta } from "./themables.js";
import { LI, ov } from "./theme.js";
import { Dl, HAe, Ml } from "./themeService.js";
import { E9e, hVe } from "./timerService.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { jT, wb } from "./viewsService.js";
import { $t, Bs } from "./window.js";
import { Sr, yr } from "./workspace.js";
import { C2 } from "./workspaceProjectPaths.js";
import { L9e, gPg } from "./xtermTerminal.js";
import { E5e, EY, MQ, U3, bBt, bP, mz, sl, xy } from "./ze.js";
var O9e, JJ, phs;
export { JJ, O9e, phs };
var __wakaru_mKt_initialized = false;
export function mKt() {
if (__wakaru_mKt_initialized) return;
__wakaru_mKt_initialized = true;
"use strict";
E(), NQ(), U3(), Bs(), qn(), SM(), Gt(), Qe(), Ki(), mP(), Di(), ta(), fn(), Bt(), rs(), or(), Hi(), bd(), It(), ru(), Ks(), Xv(), dAi(), UC(), Kus(), Ap(), b_(), LI(), Dl(), Sr(), vf(), Fat(), ih(), PEt(), Ld(), Wo(), fo(), ld(), zp(), Sg(), E9e(), jT(), C2(), bR(), QI(), D2k(), Mv(), yG(), FAi(), zMk(), ZEt(), T2n(), MDk(), LDk(), QEt(), gPg(), O9e = 6, JJ = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y, S, k, C, T, I, A){
        super(), this._contextKeyService = t, this._lifecycleService = e, this._logService = n, this._dialogService = i, this._instantiationService = r, this._remoteAgentService = s, this._viewsService = o, this._configurationService = a, this._terminalConfigService = l, this._environmentService = c, this._terminalConfigurationService = u, this._terminalEditorService = d, this._terminalGroupService = h, this._terminalInstanceService = p, this._editorGroupsService = g, this._terminalProfileService = f, this._extensionService = _, this._notificationService = b, this._workspaceContextService = y, this._pathService = S, this._commandService = k, this._telemetryService = C, this._keybindingService = T, this._timerService = I, this._fastContextService = A, this._hostActiveTerminals = new Map, this._detachedXterms = new Set, this._isShuttingDown = !1, this._backgroundedTerminalInstances = [], this._backgroundedTerminalDisposables = new Map, this._connectionState = 0, this._whenConnected = new df, this._restoredGroupCount = 0, this._reconnectedTerminals = new Map, this._onDidCreateInstance = this._register(new tt), this._onDidChangeInstanceDimensions = this._register(new tt), this._onDidRegisterProcessSupport = this._register(new tt), this._onDidChangeConnectionState = this._register(new tt), this._onDidRequestStartExtensionTerminal = this._register(new tt), this._onDidDisposeInstance = this._register(new tt), this._onDidFocusInstance = this._register(new tt), this._onDidChangeActiveInstance = this._register(new tt), this._onDidChangeInstances = this._register(new tt), this._onDidChangeInstanceCapability = this._register(new tt), this._onDidChangeActiveGroup = this._register(new tt), this._onHighlightRequest = this._register(new tt), this._terminalsPathPromise = Aak(this._workspaceContextService.getWorkspace(), this._pathService), this._register(this.onDidCreateInstance(()=>this._terminalProfileService.refreshAvailableProfiles())), this._forwardInstanceHostEvents(this._terminalGroupService), this._forwardInstanceHostEvents(this._terminalEditorService), this._register(this.onDidDisposeInstance((P)=>this._removeFromReconnected(P))), this._register(Pn(()=>this._reconnectedTerminals.clear())), this._register(this._terminalGroupService.onDidChangeActiveGroup(this._onDidChangeActiveGroup.fire, this._onDidChangeActiveGroup)), this._register(this._terminalInstanceService.onDidCreateInstance((P)=>{
            this._initInstanceListeners(P), this._onDidCreateInstance.fire(P);
        })), this._register(this._terminalGroupService.onDidChangeActiveInstance((P)=>{
            !P && !this._isShuttingDown && this._terminalConfigService.config.hideOnLastClosed && this._terminalGroupService.hidePanel(), P?.shellType ? this._terminalShellTypeContextKey.set(P.shellType.toString()) : (!P || !P.shellType) && this._terminalShellTypeContextKey.reset();
        })), this._handleInstanceContextKeys(), this._terminalShellTypeContextKey = ns.shellType.bindTo(this._contextKeyService), this._processSupportContextKey = ns.processSupported.bindTo(this._contextKeyService), this._processSupportContextKey.set(!th || this._remoteAgentService.getConnection() !== null), this._terminalHasBeenCreated = ns.terminalHasBeenCreated.bindTo(this._contextKeyService), this._terminalCountContextKey = ns.count.bindTo(this._contextKeyService), this._terminalEditorActive = ns.terminalEditorActive.bindTo(this._contextKeyService), this._register(this.onDidChangeActiveInstance((P)=>{
            this._terminalEditorActive.set(!!P?.target && P.target === ny.Editor);
        })), this.registerLastTerminalCommandTimingListenersForCmdk(), this._register(e.onBeforeShutdown(async (P)=>P.veto(this._onBeforeShutdown(P.reason, P.context), "veto.terminal"))), this._register(e.onWillShutdown((P)=>this._onWillShutdown(P))), this._initializePrimaryBackend(), Wd(0).then(()=>this._register(this._instantiationService.createInstance(phs, $t.document.head)));
    }
    get isProcessSupportRegistered() {
        return !!this._processSupportContextKey.get();
    }
    get connectionState() {
        return this._connectionState;
    }
    get whenConnected() {
        return this._whenConnected.p;
    }
    get restoredGroupCount() {
        return this._restoredGroupCount;
    }
    get instances() {
        return this._terminalGroupService.instances.concat(this._terminalEditorService.instances).concat(this._backgroundedTerminalInstances);
    }
    get foregroundInstances() {
        return this._terminalGroupService.instances.concat(this._terminalEditorService.instances);
    }
    get detachedInstances() {
        return this._detachedXterms;
    }
    getReconnectedTerminals(t) {
        return this._reconnectedTerminals.get(t);
    }
    findTerminalByMetadata(t, e) {
        return this.instances.find((n)=>{
            const i = n.reconnectionProperties;
            return !i || i.ownerId !== t ? !1 : e(i.data);
        });
    }
    get defaultLocation() {
        return this._terminalConfigurationService.config.defaultLocation === "editor" ? ny.Editor : ny.Panel;
    }
    get activeInstance() {
        for (const t of this._hostActiveTerminals.values())if (t?.hasFocus) return t;
        return this._activeInstance;
    }
    get onDidCreateInstance() {
        return this._onDidCreateInstance.event;
    }
    get onDidChangeInstanceDimensions() {
        return this._onDidChangeInstanceDimensions.event;
    }
    get onDidRegisterProcessSupport() {
        return this._onDidRegisterProcessSupport.event;
    }
    get onDidChangeConnectionState() {
        return this._onDidChangeConnectionState.event;
    }
    get onDidRequestStartExtensionTerminal() {
        return this._onDidRequestStartExtensionTerminal.event;
    }
    get onDidDisposeInstance() {
        return this._onDidDisposeInstance.event;
    }
    get onDidFocusInstance() {
        return this._onDidFocusInstance.event;
    }
    get onDidChangeActiveInstance() {
        return this._onDidChangeActiveInstance.event;
    }
    get onDidChangeInstances() {
        return this._onDidChangeInstances.event;
    }
    get onDidChangeInstanceCapability() {
        return this._onDidChangeInstanceCapability.event;
    }
    get onDidChangeActiveGroup() {
        return this._onDidChangeActiveGroup.event;
    }
    get onAnyInstanceData() {
        return this._register(this.createOnInstanceEvent((t)=>en.map(t.onData, (e)=>({
                    instance: t,
                    data: e
                })))).event;
    }
    get onAnyInstanceDataInput() {
        return this._register(this.createOnInstanceEvent((t)=>en.map(t.onDidInputData, ()=>t, t.store))).event;
    }
    get onAnyInstanceIconChange() {
        return this._register(this.createOnInstanceEvent((t)=>t.onIconChanged)).event;
    }
    get onAnyInstanceMaximumDimensionsChange() {
        return this._register(this.createOnInstanceEvent((t)=>en.map(t.onMaximumDimensionsChanged, ()=>t, t.store))).event;
    }
    get onAnyInstancePrimaryStatusChange() {
        return this._register(this.createOnInstanceEvent((t)=>en.map(t.statusList.onDidChangePrimaryStatus, ()=>t, t.store))).event;
    }
    get onAnyInstanceProcessIdReady() {
        return this._register(this.createOnInstanceEvent((t)=>t.onProcessIdReady)).event;
    }
    get onAnyInstanceSelectionChange() {
        return this._register(this.createOnInstanceEvent((t)=>t.onDidChangeSelection)).event;
    }
    get onAnyInstanceTitleChange() {
        return this._register(this.createOnInstanceEvent((t)=>t.onTitleChanged)).event;
    }
    get onAnyInstanceShellTypeChanged() {
        return this._register(this.createOnInstanceEvent((t)=>en.map(t.onDidChangeShellType, ()=>t))).event;
    }
    get onAnyInstanceAddedCapabilityType() {
        return this._register(this.createOnInstanceEvent((t)=>t.capabilities.onDidAddCapabilityType)).event;
    }
    get onHighlightRequest() {
        return this._onHighlightRequest.event;
    }
    highlightTerminalContainer(t = 500) {
        this._onHighlightRequest.fire({
            delayInMs: t
        });
    }
    registerLastTerminalCommandTimingListenersForCmdk() {
        this._register(this.onAnyInstanceDataInput(()=>{
            this._fastContextService?.markNowAsLastTerminalCommand();
        }));
    }
    async showProfileQuickPick(t, e) {
        const i = await this._instantiationService.createInstance(hhs).showAndGetResult(t);
        if (!i || typeof i == "string") return;
        const r = i.keyMods;
        if (t === "createInstance") {
            const s = this.getDefaultInstanceHost().activeInstance;
            let o;
            if (i.config && "id" in i?.config) {
                await this.createContributedTerminalProfile(i.config.extensionIdentifier, i.config.id, {
                    icon: i.config.options?.icon,
                    color: i.config.options?.color,
                    location: r?.alt && s ? {
                        splitActiveTerminal: !0
                    } : this.defaultLocation
                });
                return;
            } else i.config && "profileName" in i.config && (r?.alt && s ? o = await this.createTerminal({
                location: {
                    parentTerminal: s
                },
                config: i.config,
                cwd: e
            }) : o = await this.createTerminal({
                location: this.defaultLocation,
                config: i.config,
                cwd: e
            }));
            if (o && this.defaultLocation !== ny.Editor) return this._terminalGroupService.showPanel(!0), this.setActiveInstance(o), o;
        }
    }
    async _initializePrimaryBackend() {
        ud("code/terminal/willGetTerminalBackend"), this._primaryBackend = await this._terminalInstanceService.getBackend(this._environmentService.remoteAuthority), ud("code/terminal/didGetTerminalBackend"), this._primaryBackend && this._timerService.registerTerminalBackendReadiness(this._primaryBackend.whenReady);
        const t = this._terminalConfigurationService.config.enablePersistentSessions;
        this._connectionState = 0;
        const e = !!this._environmentService.remoteAuthority && t;
        this._primaryBackend && this._register(this._primaryBackend.onDidRequestDetach(async (i)=>{
            const r = this.getInstanceFromResource(h2g(i.workspaceId, i.instanceId));
            if (r) {
                const s = r?.persistentProcessId;
                s && !r.shellLaunchConfig.isFeatureTerminal && !r.shellLaunchConfig.customPtyImplementation ? (r.target === ny.Editor ? this._terminalEditorService.detachInstance(r) : this._terminalGroupService.getGroupForInstance(r)?.removeInstance(r), await r.detachProcessAndDispose(pG.User), await this._primaryBackend?.acceptDetachInstanceReply(i.requestId, s)) : await this._primaryBackend?.acceptDetachInstanceReply(i.requestId, void 0);
            }
        })), ud("code/terminal/willReconnect");
        let n;
        e ? n = this._reconnectToRemoteTerminals() : t ? n = this._reconnectToLocalTerminals() : n = Promise.resolve(), n.then(async ()=>{
            this._setConnected(), ud("code/terminal/didReconnect"), ud("code/terminal/willReplay");
            const i = await this._reconnectedTerminalGroups?.then((o)=>o.map((a)=>a.terminalInstances).flat()) ?? [];
            await Promise.all(i.map((o)=>new Promise((a)=>en.once(o.onProcessReplayComplete)(a)))), ud("code/terminal/didReplay"), ud("code/terminal/willGetPerformanceMarks");
            const r = this._environmentService.remoteAuthority, s = Array.from(this._terminalInstanceService.getRegisteredBackends()).filter((o)=>o.remoteAuthority === void 0 || o.remoteAuthority === r);
            for (const o of s)o.setReady();
            this._whenConnected.complete(), await Promise.all(s.map(async (o)=>{
                this._timerService.setPerformanceMarks(o.remoteAuthority === void 0 ? "localPtyHost" : "remotePtyHost", await o.getPerformanceMarks());
            })), ud("code/terminal/didGetPerformanceMarks");
        });
    }
    getPrimaryBackend() {
        return this._primaryBackend;
    }
    _forwardInstanceHostEvents(t) {
        this._register(t.onDidChangeInstances(this._onDidChangeInstances.fire, this._onDidChangeInstances)), this._register(t.onDidDisposeInstance(this._onDidDisposeInstance.fire, this._onDidDisposeInstance)), this._register(t.onDidChangeActiveInstance((e)=>this._evaluateActiveInstance(t, e))), this._register(t.onDidFocusInstance((e)=>{
            this._onDidFocusInstance.fire(e), this._evaluateActiveInstance(t, e);
        })), this._register(t.onDidChangeInstanceCapability((e)=>{
            this._onDidChangeInstanceCapability.fire(e);
        })), this._hostActiveTerminals.set(t, void 0);
    }
    _evaluateActiveInstance(t, e) {
        if (this._hostActiveTerminals.set(t, e), e === void 0) for (const n of this._hostActiveTerminals.values())n && (e = n);
        this._activeInstance = e, this._onDidChangeActiveInstance.fire(e);
    }
    setActiveInstance(t) {
        t.shellLaunchConfig.hideFromUser && this._showBackgroundTerminal(t), t.target === ny.Editor ? this._terminalEditorService.setActiveInstance(t) : this._terminalGroupService.setActiveInstance(t);
    }
    async focusInstance(t) {
        return t.target === ny.Editor ? this._terminalEditorService.focusInstance(t) : this._terminalGroupService.focusInstance(t);
    }
    async focusActiveInstance() {
        if (this._activeInstance) return this.focusInstance(this._activeInstance);
    }
    async createContributedTerminalProfile(t, e, n) {
        await this._extensionService.activateByEvent(`onTerminalProfile:${e}`);
        const i = this._terminalProfileService.getContributedProfileProvider(t, e);
        if (!i) {
            this._notificationService.error(`No terminal profile provider registered for id "${e}"`);
            return;
        }
        try {
            await i.createContributedTerminalProfile(n), this._terminalGroupService.setActiveInstanceByIndex(this._terminalGroupService.instances.length - 1), await this._terminalGroupService.activeInstance?.focusWhenReady();
        } catch (r) {
            this._notificationService.error(r.message);
        }
    }
    async safeDisposeTerminal(t) {
        if (!(t.target !== ny.Editor && t.hasChildProcesses && (this._terminalConfigurationService.config.confirmOnKill === "panel" || this._terminalConfigurationService.config.confirmOnKill === "always") && await this._showTerminalCloseConfirmation(!0))) return new Promise((e)=>{
            en.once(t.onExit)(()=>e()), t.dispose(pG.User);
        });
    }
    _setConnected() {
        this._connectionState = 1, this._onDidChangeConnectionState.fire(), this._logService.trace("Pty host ready");
    }
    async _reconnectToRemoteTerminals() {
        const t = this._environmentService.remoteAuthority;
        if (!t) return;
        const e = await this._terminalInstanceService.getBackend(t);
        if (!e) return;
        ud("code/terminal/willGetTerminalLayoutInfo");
        const n = await e.getTerminalLayoutInfo();
        ud("code/terminal/didGetTerminalLayoutInfo"), e.reduceConnectionGraceTime(), ud("code/terminal/willRecreateTerminalGroups"), await this._recreateTerminalGroups(n), ud("code/terminal/didRecreateTerminalGroups"), this._attachProcessLayoutListeners(), this._logService.trace("Reconnected to remote terminals");
    }
    async _reconnectToLocalTerminals() {
        const t = await this._terminalInstanceService.getBackend();
        if (!t) return;
        ud("code/terminal/willGetTerminalLayoutInfo");
        const e = await t.getTerminalLayoutInfo();
        ud("code/terminal/didGetTerminalLayoutInfo"), e && e.tabs.length > 0 && (ud("code/terminal/willRecreateTerminalGroups"), this._reconnectedTerminalGroups = this._recreateTerminalGroups(e), ud("code/terminal/didRecreateTerminalGroups")), this._attachProcessLayoutListeners(), this._logService.trace("Reconnected to local terminals");
    }
    _recreateTerminalGroups(t) {
        const e = [];
        let n;
        if (t) {
            for (const i of t.tabs){
                const r = i.terminals.filter((s)=>s.terminal && s.terminal.isOrphan);
                if (r.length) {
                    this._restoredGroupCount += r.length;
                    const s = this._recreateTerminalGroup(i, r);
                    e.push(s), i.isActive && (n = s);
                    const o = this.instances.find((a)=>a.shellLaunchConfig.attachPersistentProcess?.id === i.activePersistentProcessId);
                    o && this.setActiveInstance(o);
                }
            }
            t.tabs.length && n?.then((i)=>this._terminalGroupService.activeGroup = i);
        }
        return Promise.all(e).then((i)=>i.filter((r)=>!!r));
    }
    async _recreateTerminalGroup(t, e) {
        let n;
        for (const r of e){
            const s = r.terminal;
            this._lifecycleService.startupKind !== 3 && s.type === "Task" || (ud(`code/terminal/willRecreateTerminal/${s.id}-${s.pid}`), n = this.createTerminal({
                config: {
                    attachPersistentProcess: s
                },
                location: n ? {
                    parentTerminal: n
                } : ny.Panel
            }), n.then(()=>ud(`code/terminal/didRecreateTerminal/${s.id}-${s.pid}`)));
        }
        return n?.then((r)=>{
            const s = this._terminalGroupService.getGroupForInstance(r);
            return s?.resizePanes(t.terminals.map((o)=>o.relativeSize)), s;
        });
    }
    _attachProcessLayoutListeners() {
        this._register(this.onDidChangeActiveGroup(()=>this._saveState())), this._register(this.onDidChangeActiveInstance(()=>this._saveState())), this._register(this.onDidChangeInstances(()=>this._saveState())), this._register(this.onAnyInstanceProcessIdReady(()=>this._saveState())), this._register(this.onAnyInstanceTitleChange((t)=>this._updateTitle(t))), this._register(this.onAnyInstanceIconChange((t)=>this._updateIcon(t.instance, t.userInitiated)));
    }
    _handleInstanceContextKeys() {
        const t = ns.isOpen.bindTo(this._contextKeyService), e = ()=>{
            t.set(this.instances.length > 0), this._terminalCountContextKey.set(this.instances.length);
        };
        this._register(this.onDidChangeInstances(()=>e()));
    }
    async getActiveOrCreateInstance(t) {
        const e = this.activeInstance;
        if (!e) return this.createTerminal();
        if (!t?.acceptsInput || e.xterm?.isStdinDisabled !== !0) return e;
        const n = await this.createTerminal();
        return this.setActiveInstance(n), await this.revealActiveTerminal(), n;
    }
    getActiveInstance() {
        return this.activeInstance;
    }
    async revealTerminal(t, e) {
        t.target === ny.Editor ? await this._terminalEditorService.revealActiveEditor(e) : await this._terminalGroupService.showPanel(e === void 0 ? void 0 : !e);
    }
    async revealActiveTerminal(t) {
        const e = this.activeInstance;
        e && await this.revealTerminal(e, t);
    }
    setEditable(t, e) {
        e ? this._editable = {
            instance: t,
            data: e
        } : this._editable = void 0;
        const n = this._viewsService.getActiveViewWithId(PA), i = this.isEditable(t);
        n?.terminalTabbedView?.setEditable(i);
    }
    isEditable(t) {
        return !!this._editable && (this._editable.instance === t || !t);
    }
    getEditableData(t) {
        return this._editable && this._editable.instance === t ? this._editable.data : void 0;
    }
    requestStartExtensionTerminal(t, e, n) {
        return new Promise((i)=>{
            this._onDidRequestStartExtensionTerminal.fire({
                proxy: t,
                cols: e,
                rows: n,
                callback: i
            });
        });
    }
    _onBeforeShutdown(t, e) {
        return th ? (this._isShuttingDown = !0, !1) : this._onBeforeShutdownAsync(t, e);
    }
    async _onBeforeShutdownAsync(t, e) {
        if (this.instances.length === 0) return !1;
        try {
            if (this._shutdownWindowCount = await this._nativeDelegate?.getWindowCount(), this._shouldReviveProcesses(t) && await Promise.race([
                this._primaryBackend?.persistTerminalState(),
                Wd(2e3)
            ]), !this._shouldPersistTerminalsOnShutdown(t, e) && (this._terminalConfigurationService.config.confirmOnExit === "always" && this.foregroundInstances.length > 0 || this._terminalConfigurationService.config.confirmOnExit === "hasChildProcesses" && this.foregroundInstances.some((s)=>s.hasChildProcesses))) return this._onBeforeShutdownConfirmation(t);
        } catch (n) {
            this._logService.warn("Exception occurred during terminal shutdown", n);
        }
        return this._isShuttingDown = !0, !1;
    }
    setNativeDelegate(t) {
        this._nativeDelegate = t;
    }
    _shouldReviveProcesses(t) {
        if (!this._terminalConfigurationService.config.enablePersistentSessions) return !1;
        switch(this._terminalConfigurationService.config.persistentSessionReviveProcess){
            case "onExit":
                return t === 1 && this._shutdownWindowCount === 1 && !_r ? !0 : t === 4 || t === 2;
            case "onExitAndWindowClose":
                return t !== 3;
            default:
                return !1;
        }
    }
    _shouldPersistTerminalsOnShutdown(t, e) {
        return this._terminalConfigurationService.config.enablePersistentSessions ? t === 3 ? !0 : e === "no-refs" : !1;
    }
    async _onBeforeShutdownConfirmation(t) {
        const e = await this._showTerminalCloseConfirmation();
        return e || (this._isShuttingDown = !0), e;
    }
    _onWillShutdown(t) {
        const e = this._shouldPersistTerminalsOnShutdown(t.reason, t.context);
        for (const n of [
            ...this._terminalGroupService.instances,
            ...this._backgroundedTerminalInstances
        ])e && n.shouldPersist ? n.detachProcessAndDispose(pG.Shutdown) : n.dispose(pG.Shutdown);
        !e && !this._shouldReviveProcesses(t.reason) && this._primaryBackend?.setTerminalLayoutInfo(void 0);
    }
    _saveState() {
        if (this._isShuttingDown || !this._terminalConfigurationService.config.enablePersistentSessions) return;
        const e = {
            tabs: this._terminalGroupService.groups.map((n)=>n.getLayoutInfo(n === this._terminalGroupService.activeGroup))
        };
        this._primaryBackend?.setTerminalLayoutInfo(e);
    }
    _updateTitle(t) {
        !this._terminalConfigurationService.config.enablePersistentSessions || !t || !t.persistentProcessId || !t.title || t.isDisposed || (t.staticTitle ? this._primaryBackend?.updateTitle(t.persistentProcessId, t.staticTitle, ame.Api) : this._primaryBackend?.updateTitle(t.persistentProcessId, t.title, t.titleSource));
    }
    _updateIcon(t, e) {
        !this._terminalConfigurationService.config.enablePersistentSessions || !t || !t.persistentProcessId || !t.icon || t.isDisposed || this._primaryBackend?.updateIcon(t.persistentProcessId, e, t.icon, t.color);
    }
    refreshActiveGroup() {
        this._onDidChangeActiveGroup.fire(this._terminalGroupService.activeGroup);
    }
    getInstanceFromId(t) {
        let e = -1;
        if (this._backgroundedTerminalInstances.forEach((n, i)=>{
            n.instanceId === t && (e = i);
        }), e !== -1) return this._backgroundedTerminalInstances[e];
        try {
            return this.instances[this._getIndexFromId(t)];
        } catch  {
            return;
        }
    }
    getInstanceFromIndex(t) {
        return this.instances[t];
    }
    getInstanceFromResource(t) {
        return Cvl(this.instances, t);
    }
    async getTerminalFileUriFromResource(t) {
        if (t.scheme !== Ot.vscodeTerminal) throw new Error(`Expected vscode-terminal URI, got: ${t.scheme}`);
        const n = y2n(t).instanceId;
        if (n === void 0) throw new Error(`Terminal URI missing instanceId: ${t.toString()}`);
        const i = await this._terminalsPathPromise;
        return rt.joinPath(i, `${n}.txt`);
    }
    async getTerminalFilePathFromResource(t) {
        return (await this.getTerminalFileUriFromResource(t)).fsPath;
    }
    isAttachedToTerminal(t) {
        return this.instances.some((e)=>e.processId === t.pid);
    }
    moveToEditor(t, e) {
        if (t.target === ny.Editor) return;
        const n = this._terminalGroupService.getGroupForInstance(t);
        n && (n.removeInstance(t), this._terminalEditorService.openEditor(t, e ? {
            viewColumn: e
        } : void 0));
    }
    moveIntoNewEditor(t) {
        this.moveToEditor(t, kIr);
    }
    async moveToTerminalView(t, e, n) {
        if (rt.isUri(t) && (t = this.getInstanceFromResource(t)), !t) return;
        if (this._terminalEditorService.detachInstance(t), t.target !== ny.Editor) {
            await this._terminalGroupService.showPanel(!0);
            return;
        }
        t.target = ny.Panel;
        let i;
        if (e && (i = this._terminalGroupService.getGroupForInstance(e)), i || (i = this._terminalGroupService.createGroup()), i.addInstance(t), this.setActiveInstance(t), await this._terminalGroupService.showPanel(!0), e && n) {
            const r = i.terminalInstances.indexOf(e) + (n === "after" ? 1 : 0);
            i.moveInstance(t, r, n);
        }
        this._onDidChangeInstances.fire(), this._onDidChangeActiveGroup.fire(this._terminalGroupService.activeGroup);
    }
    _initInstanceListeners(t) {
        const e = new Nt;
        e.add(t.onDimensionsChanged(()=>{
            this._onDidChangeInstanceDimensions.fire(t), this._terminalConfigurationService.config.enablePersistentSessions && this.isProcessSupportRegistered && this._saveState();
        })), e.add(t.onDidFocus(this._onDidChangeActiveInstance.fire, this._onDidChangeActiveInstance)), e.add(t.onRequestAddInstanceToGroup(async (i)=>await this._addInstanceToGroup(t, i))), e.add(t.onDidChangeShellType(()=>this._extensionService.activateByEvent(`onTerminal:${t.shellType}`))), e.add(en.runAndSubscribe(t.capabilities.onDidAddCapability, (()=>{
            t.capabilities.has(2) && this._extensionService.activateByEvent(`onTerminalShellIntegration:${t.shellType}`);
        })));
        const n = this._register(t.onDisposed(()=>{
            e.dispose(), this._store.delete(n), this.instances.includes(t) || this._onDidDisposeInstance.fire(t);
        }));
    }
    async _addInstanceToGroup(t, e) {
        const n = y2n(e.uri);
        if (n.instanceId === void 0) return;
        let i = this.getInstanceFromResource(e.uri);
        if (!i) {
            const r = await this._primaryBackend?.requestDetachInstance(n.workspaceId, n.instanceId);
            if (r) {
                i = await this.createTerminal({
                    config: {
                        attachPersistentProcess: r
                    },
                    resource: e.uri
                }), this._terminalGroupService.moveInstance(i, t, e.side);
                return;
            }
        }
        if (i = this._terminalGroupService.getInstanceFromResource(e.uri), i) {
            this._terminalGroupService.moveInstance(i, t, e.side);
            return;
        }
        if (i = this._terminalEditorService.getInstanceFromResource(e.uri), i) {
            this.moveToTerminalView(i, t, e.side);
            return;
        }
    }
    registerProcessSupport(t) {
        t && (this._processSupportContextKey.set(t), this._onDidRegisterProcessSupport.fire());
    }
    _getIndexFromId(t) {
        let e = -1;
        if (this.instances.forEach((n, i)=>{
            n.instanceId === t && (e = i);
        }), e === -1) throw new Error(`Terminal with ID ${t} does not exist (has it already been disposed?)`);
        return e;
    }
    async _showTerminalCloseConfirmation(t) {
        let e;
        const n = this.foregroundInstances;
        n.length === 1 || t ? e = D(10357, null) : e = D(10358, null, n.length);
        const { confirmed: i } = await this._dialogService.confirm({
            type: "warning",
            message: e,
            primaryButton: D(10359, null)
        });
        return !i;
    }
    getDefaultInstanceHost() {
        return this.defaultLocation === ny.Editor ? this._terminalEditorService : this._terminalGroupService;
    }
    async getInstanceHost(t) {
        if (t) {
            if (t === ny.Editor) return this._terminalEditorService;
            if (typeof t == "object") {
                if ("viewColumn" in t) return this._terminalEditorService;
                if ("parentTerminal" in t) return (await t.parentTerminal).target === ny.Editor ? this._terminalEditorService : this._terminalGroupService;
            } else return this._terminalGroupService;
        }
        return this;
    }
    async createTerminal(t) {
        if (this._telemetryService.publicLogCapture("terminal:create"), this._terminalProfileService.availableProfiles.length === 0) {
            const l = t?.config && "customPtyImplementation" in t.config, c = t?.config && "attachPersistentProcess" in t.config && t.config.attachPersistentProcess, u = this._remoteAgentService.getConnection() && rt.isUri(t?.cwd) && t?.cwd.scheme === Ot.vscodeFileResource;
            !l && !c && !u && (this._connectionState === 0 && ud("code/terminal/willGetProfiles"), await this._terminalProfileService.profilesReady, this._connectionState === 0 && ud("code/terminal/didGetProfiles"));
        }
        const e = t?.config || this._terminalProfileService.getDefaultProfile(), n = e && "extensionIdentifier" in e ? {} : this._terminalInstanceService.convertProfileToShellLaunchConfig(e || {}), i = t?.skipContributedProfileCheck || n.attachPersistentProcess ? void 0 : await this._getContributedProfile(n, t), r = typeof t?.location == "object" && "splitActiveTerminal" in t.location ? t.location.splitActiveTerminal : typeof t?.location == "object" ? "parentTerminal" in t.location : !1;
        if (await this._resolveCwd(n, r, t), !n.customPtyImplementation && i) {
            const l = await this.resolveLocation(t?.location);
            let c;
            r ? c = l === ny.Editor ? {
                viewColumn: p2
            } : {
                splitActiveTerminal: !0
            } : c = typeof t?.location == "object" && "viewColumn" in t.location ? t.location : l, await this.createContributedTerminalProfile(i.extensionIdentifier, i.id, {
                icon: i.icon,
                color: i.color,
                location: c,
                cwd: n.cwd
            });
            const u = l === ny.Editor ? this._terminalEditorService : this._terminalGroupService, d = u.instances[u.instances.length - 1];
            return await d?.focusWhenReady(), this._terminalHasBeenCreated.set(!0), d;
        }
        if (!n.customPtyImplementation && !this.isProcessSupportRegistered) throw new Error("Could not create terminal when process support is not registered");
        if (n.hideFromUser) {
            const l = this._terminalInstanceService.createInstance(n, ny.Panel);
            this._backgroundedTerminalInstances.push(l);
            const c = l.onDisposed((u)=>{
                this._onDidDisposeInstance.fire(u);
                const d = this._backgroundedTerminalInstances.indexOf(u);
                d !== -1 && this._backgroundedTerminalInstances.splice(d, 1);
                const h = this._backgroundedTerminalDisposables.get(u.instanceId);
                h && Nc(h), this._backgroundedTerminalDisposables.delete(u.instanceId);
            });
            return this._backgroundedTerminalDisposables.set(l.instanceId, [
                c
            ]), this._terminalHasBeenCreated.set(!0), l;
        }
        this._evaluateLocalCwd(n);
        const s = await this.resolveLocation(t?.location) || this.defaultLocation, o = await this._getSplitParent(t?.location);
        this._terminalHasBeenCreated.set(!0), this._extensionService.activateByEvent("onTerminal:*");
        let a;
        return o ? a = this._splitTerminal(n, s, o) : a = this._createTerminal(n, s, t), a.shellType && this._extensionService.activateByEvent(`onTerminal:${a.shellType}`), a;
    }
    async _getContributedProfile(t, e) {
        return e?.config && "extensionIdentifier" in e.config ? e.config : this._terminalProfileService.getContributedDefaultProfile(t);
    }
    async createDetachedTerminal(t) {
        const e = await cU.getXtermConstructor(this._keybindingService, this._contextKeyService), n = this._instantiationService.createInstance(L9e, e, {
            cols: t.cols,
            rows: t.rows,
            xtermColorProvider: t.colorProvider,
            capabilities: t.capabilities || new uAi,
            disableOverviewRuler: t.disableOverviewRuler,
            detached: !0
        }, void 0);
        t.readonly && n.raw.attachCustomKeyEventHandler(()=>!1);
        const i = new eds(n, t, this._instantiationService);
        this._detachedXterms.add(i);
        const r = n.onDidDispose(()=>{
            this._detachedXterms.delete(i), r.dispose();
        });
        return i;
    }
    async _resolveCwd(t, e, n) {
        if (!t.cwd) {
            if (n?.cwd) t.cwd = n.cwd;
            else if (e && n?.location) {
                let r = this.activeInstance;
                if (typeof n.location == "object" && "parentTerminal" in n.location && (r = await n.location.parentTerminal), !r) throw new Error("Cannot split without an active instance");
                t.cwd = await m2g(r, this._workspaceContextService.getWorkspace().folders, this._commandService, this._terminalConfigService);
            }
        }
    }
    _splitTerminal(t, e, n) {
        let i;
        if (typeof t.cwd != "object" && typeof n.shellLaunchConfig.cwd == "object" && (t.cwd = rt.from({
            scheme: n.shellLaunchConfig.cwd.scheme,
            authority: n.shellLaunchConfig.cwd.authority,
            path: t.cwd || n.shellLaunchConfig.cwd.path
        })), e === ny.Editor || n.target === ny.Editor) i = this._terminalEditorService.splitInstance(n, t);
        else {
            const r = this._terminalGroupService.getGroupForInstance(n);
            if (!r) throw new Error(`Cannot split a terminal without a group (instanceId: ${n.instanceId}, title: ${n.title})`);
            t.parentTerminalId = n.instanceId, i = r.split(t);
        }
        return this._addToReconnected(i), i;
    }
    _addToReconnected(t) {
        DDk(this._reconnectedTerminals, t);
    }
    _removeFromReconnected(t) {
        NDk(this._reconnectedTerminals, t);
    }
    _createTerminal(t, e, n) {
        let i;
        const r = this._getEditorOptions(n?.location);
        return e === ny.Editor ? (i = this._terminalInstanceService.createInstance(t, ny.Editor), this._terminalEditorService.openEditor(i, r)) : i = this._terminalGroupService.createGroup(t).terminalInstances[0], this._addToReconnected(i), i;
    }
    async resolveLocation(t) {
        if (t && typeof t == "object") if ("parentTerminal" in t) {
            const e = await t.parentTerminal;
            return e.target ? e.target : ny.Panel;
        } else {
            if ("viewColumn" in t) return ny.Editor;
            if ("splitActiveTerminal" in t) return this._activeInstance?.target ? this._activeInstance?.target : ny.Panel;
        }
        return t;
    }
    async _getSplitParent(t) {
        if (t && typeof t == "object" && "parentTerminal" in t) return t.parentTerminal;
        if (t && typeof t == "object" && "splitActiveTerminal" in t) return this.activeInstance;
    }
    _getEditorOptions(t) {
        if (t && typeof t == "object" && "viewColumn" in t) return t.viewColumn = QVt(this._editorGroupsService, this._configurationService, t.viewColumn), t;
    }
    _evaluateLocalCwd(t) {
        typeof t.cwd != "string" && t.cwd?.scheme === Ot.file && (tRn.getValue(this._contextKeyService) ? (t.initialText = w9e(D(10360, null, "\x1B[3m", "\x1B[23m"), {
            excludeLeadingNewLine: !0,
            loudFormatting: !0
        }), t.type = "Local") : this._remoteAgentService.getConnection() && (t.initialText = w9e(D(10361, null, "\x1B[3m", "\x1B[23m"), {
            excludeLeadingNewLine: !0,
            loudFormatting: !0
        }), t.type = "Local"));
    }
    _showBackgroundTerminal(t) {
        if (this._backgroundedTerminalInstances.indexOf(t) === -1) return;
        this._backgroundedTerminalInstances.splice(this._backgroundedTerminalInstances.indexOf(t), 1);
        const n = this._backgroundedTerminalDisposables.get(t.instanceId);
        n && Nc(n), this._backgroundedTerminalDisposables.delete(t.instanceId), this._terminalGroupService.createGroup(t), this.instances.length === 1 && this._terminalGroupService.setActiveInstanceByIndex(0), this._onDidChangeInstances.fire();
    }
    async setContainers(t, e) {
        this._terminalConfigurationService.setPanelContainer(t), this._terminalGroupService.setContainer(e);
    }
    getEditingTerminal() {
        return this._editingTerminal;
    }
    setEditingTerminal(t) {
        this._editingTerminal = t;
    }
    createOnInstanceEvent(t) {
        return new Jpr(this.instances, this.onDidCreateInstance, this.onDidDisposeInstance, t);
    }
    createOnInstanceCapabilityEvent(t, e) {
        return qMk(this.instances, this.onDidCreateInstance, this.onDidDisposeInstance, t, e);
    }
}, Re([
    sl
], JJ.prototype, "onAnyInstanceData", null), Re([
    sl
], JJ.prototype, "onAnyInstanceDataInput", null), Re([
    sl
], JJ.prototype, "onAnyInstanceIconChange", null), Re([
    sl
], JJ.prototype, "onAnyInstanceMaximumDimensionsChange", null), Re([
    sl
], JJ.prototype, "onAnyInstancePrimaryStatusChange", null), Re([
    sl
], JJ.prototype, "onAnyInstanceProcessIdReady", null), Re([
    sl
], JJ.prototype, "onAnyInstanceSelectionChange", null), Re([
    sl
], JJ.prototype, "onAnyInstanceTitleChange", null), Re([
    sl
], JJ.prototype, "onAnyInstanceShellTypeChanged", null), Re([
    sl
], JJ.prototype, "onAnyInstanceAddedCapabilityType", null), Re([
    MQ(500)
], JJ.prototype, "_saveState", null), Re([
    MQ(500)
], JJ.prototype, "_updateTitle", null), Re([
    MQ(500)
], JJ.prototype, "_updateIcon", null), JJ = Re([
    F(0, Rr),
    F(1, Fp),
    F(2, Z4),
    F(3, hd),
    F(4, dn),
    F(5, Nh),
    F(6, wb),
    F(7, yi),
    F(8, NJ),
    F(9, ps),
    F(10, NJ),
    F(11, iat),
    F(12, pV),
    F(13, LJ),
    F(14, _a),
    F(15, Zze),
    F(16, id),
    F(17, Wr),
    F(18, yr),
    F(19, Rd),
    F(20, nr),
    F(21, Uv),
    F(22, Al),
    F(23, hVe),
    F(24, Qze)
], JJ), phs = class extends HAe {
    constructor(t, e, n, i, r){
        super(n), this._terminalService = e, this._themeService = n, this._terminalProfileService = i, this._editorService = r, this._registerListeners(), this._styleElement = bP(t), this._register(Pn(()=>this._styleElement.remove())), this.updateStyles();
    }
    _registerListeners() {
        this._register(this._terminalService.onAnyInstanceIconChange(()=>this.updateStyles())), this._register(this._terminalService.onDidCreateInstance(()=>this.updateStyles())), this._register(this._editorService.onDidActiveEditorChange(()=>{
            this._editorService.activeEditor instanceof wV && this.updateStyles();
        })), this._register(this._editorService.onDidCloseEditor(()=>{
            this._editorService.activeEditor instanceof wV && this.updateStyles();
        })), this._register(this._terminalProfileService.onDidChangeAvailableProfiles(()=>this.updateStyles()));
    }
    updateStyles() {
        super.updateStyles();
        const t = this._themeService.getColorTheme();
        let e = "";
        const n = this._themeService.getProductIconTheme();
        for (const r of this._terminalService.instances){
            const s = r.icon;
            if (!s) continue;
            let o;
            s instanceof rt ? o = s : s instanceof Object && "light" in s && "dark" in s && (o = t.type === ov.LIGHT ? s.light : s.dark);
            const a = _2n(r, t.type);
            if (o instanceof rt && a && a.length > 1 && (e += xy`.monaco-workbench .terminal-tab.${bBt(a[0])}::before
					{content: ''; background-image: ${mz(o)};}`), Gn.isThemeIcon(s)) {
                const c = E5e().getIcon(s.id);
                if (c) {
                    const u = n.getIcon(c);
                    u && (e += xy`.monaco-workbench .terminal-tab.codicon-${bBt(s.id)}::before
							{content: ${EY(u.fontCharacter)} !important; font-family: ${EY(u.font?.id ?? "codicon")} !important;}`);
                }
            }
        }
        const i = t.getColor(Ogn);
        i && (e += xy`.monaco-workbench .show-file-icons .file-icon.terminal-tab::before { color: ${i}; }`), e += PMk(t, !0), this._styleElement.textContent !== e && (this._styleElement.textContent = e);
    }
}, phs = Re([
    F(1, Py),
    F(2, Ml),
    F(3, Zze),
    F(4, gr)
], phs);

}
