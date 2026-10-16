import { Ai, Ct, Dl, Gie, He, Kl, Lo, S, Se, bt, jn, nmi, po, rn, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Am, bn } from "./async.js";
import { U2t } from "./baseColors.js";
import { tc } from "./colorRegistry.js";
import { $n, vi } from "./commands.js";
import { Cn, qt } from "./configuration.js";
import { dn, xn } from "./contextkey.js";
import { yd, ztt } from "./contextkeys_2.js";
import { MO } from "./cssValue.js";
import { sw } from "./decorators.js";
import { Rnr, w3h } from "./detachedTerminal.js";
import { Fc, wc } from "./dialogs.js";
import { vTe } from "./editorGroupColumn.js";
import { Nc, gs } from "./editorGroupsService.js";
import { Ni, Pki, _1, hn, ib } from "./editorService.js";
import { Vr, Yi } from "./environmentService.js";
import { Ma, hc } from "./extensions_4.js";
import { vLe, x8e } from "./fastContextService.js";
import { dh } from "./iconRegistry.js";
import { Ze, _t } from "./instantiation.js";
import { no, qr } from "./keybinding.js";
import { $d, Id } from "./lifecycle_2.js";
import { gt, li } from "./network.js";
import { rt } from "./nls.js";
import { di, ji } from "./notification.js";
import { fu, zl } from "./pathService.js";
import { AE, ERe, Nwe, Ol, Pv, Qpt, W7, cU, dS, nw, wI, xo } from "./qIc.js";
import { Ip, Kd } from "./remoteAgentService.js";
import { $h, np } from "./telemetry.js";
import { Gf, ZUe, dq, eP, ng, r8 } from "./terminal.js";
import { sB } from "./terminalActions.js";
import { Vqt, b0t } from "./terminalCapabilityStore.js";
import { Er, Gx } from "./terminalContextKey.js";
import { P5n, g8 } from "./terminalEditorInput.js";
import { Ud_ } from "./terminalEvents.js";
import { c7e } from "./terminalIcon.js";
import { N5h, UDo, e9, j5n } from "./terminalInstance.js";
import { rbe } from "./terminalProcessManager.js";
import { wh_, zir } from "./terminalProfileQuickpick.js";
import { Eh_ } from "./terminalReconnection.js";
import { l5n } from "./terminalStrings.js";
import { A5n, Int, dbe } from "./terminalTabsList.js";
import { O0t } from "./terminalUri.js";
import { Mf, RN, ate, fw, pG } from "./terminal_2.js";
import { F1, X_e, hT } from "./terminal_3.js";
import { Ft, Sr } from "./themables.js";
import { Ef, x0 } from "./theme.js";
import { $r, aW, as } from "./themeService.js";
import { DLe, K8e } from "./timerService.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Ic, Pp } from "./viewsService.js";
import { lo, on } from "./window.js";
import { Jn, ci } from "./workspace.js";
import { X8e } from "./workspaceCommands.js";
import { NR } from "./workspaceProjectPaths.js";
import { d7v } from "./xmo.js";
import { CTe, uMo } from "./xtermTerminal.js";
function j8e(e, t, n = _1) {
    if (n === _1 || n === ib) return n;
    let i = e.getGroups(2)[n];
    if (!i && n < 9) {
        for(let r = 0; r <= n; r++){
            const s = e.getGroups(2);
            s[r] || e.addGroup(s[r - 1], ERe(t));
        }
        i = e.getGroups(2)[n];
    }
    return i?.id ?? ib;
}
function xd_(e, t) {
    const n = UDo(e);
    let i = "";
    for (const r of n){
        const s = dbe(r), o = e.getColor(r);
        o && (t ? i += `.monaco-workbench .show-file-icons .predefined-file-icon.terminal-tab.${s}::before,.monaco-workbench .show-file-icons .file-icon.terminal-tab.${s}::before{ color: ${o} !important; }` : i += `.monaco-workbench .${s} .codicon:first-child:not(.codicon-split-horizontal):not(.codicon-trashcan):not(.file-icon){ color: ${o} !important; }`);
    }
    return i;
}
function jDo(e, t) {
    if (t) {
        for (const n of e)if (n.resource.path === t.path) return n;
    }
}
async function B5h(e, t, n, i) {
    switch(i.config.splitCwd){
        case "workspaceRoot":
            if (t !== void 0 && n !== void 0) {
                if (t.length === 1) return t[0].uri;
                if (t.length > 1) {
                    const r = {
                        placeHolder: S(10207, null)
                    }, s = await n.executeCommand(X8e, [
                        r
                    ]);
                    return s ? Promise.resolve(s.uri) : void 0;
                }
            }
            return "";
        case "initial":
            return e.getInitialCwd();
        case "inherited":
            return e.getSpeculativeCwd();
    }
}
function Bd_(e, t, n, i, r) {
    const s = new He, o = s.add(new Gie), a = s.add(new po);
    function c(h, p) {
        const g = o.add(Ct.map(r(p), (v)=>({
                instance: h,
                data: v
            })));
        let f = a.get(h.instanceId);
        f || (f = new po, a.set(h.instanceId, f)), f.set(p, g);
    }
    for (const h of e){
        const p = h.capabilities.get(i);
        p && c(h, p);
    }
    s.add(n((h)=>{
        a.deleteAndDispose(h.instanceId);
    }));
    const l = s.add(new nmi(e, t, n, (h)=>Ct.map(h.capabilities.onDidAddCapability, (p)=>({
                instance: h,
                changeEvent: p
            }))));
    s.add(l.event((h)=>{
        h.changeEvent.id === i && c(h.instance, h.changeEvent.capability);
    }));
    const u = s.add(new nmi(e, t, n, (h)=>Ct.map(h.capabilities.onDidRemoveCapability, (p)=>({
                instance: h,
                changeEvent: p
            }))));
    return s.add(u.event((h)=>{
        h.changeEvent.id === i && a.get(h.instance.instanceId)?.deleteAndDispose(h.changeEvent.id);
    })), {
        dispose: ()=>s.dispose(),
        event: o.event
    };
}
function Ch_(e, t) {
    const n = t.reconnectionProperties?.ownerId;
    if (!n) return;
    const i = e.get(n);
    i ? i.push(t) : e.set(n, [
        t
    ]);
}
function Th_(e, t) {
    const n = t.reconnectionProperties?.ownerId;
    if (!n) return;
    const i = e.get(n);
    if (!i) return;
    const r = i.indexOf(t);
    r !== -1 && i.splice(r, 1), i.length === 0 && e.delete(n);
}
var u7e, Lq, Kir;
export { B5h, Bd_, Ch_, Kir, Lq, Th_, j8e, jDo, u7e, xd_ };
var __wakaru_vzt_initialized = false;
export function vzt() {
if (__wakaru_vzt_initialized) return;
__wakaru_vzt_initialized = true;
"use strict";
x(), MO(), nw(), lo(), bn(), sw(), bt(), Se(), li(), wI(), jn(), Sr(), Qt(), rt(), vi(), Cn(), dn(), Fc(), Ze(), no(), ji(), np(), Vqt(), fw(), l5n(), tc(), dh(), x0(), as(), ci(), yd(), x8e(), fu(), vTe(), Nc(), Ni(), Vr(), hc(), $d(), Ip(), K8e(), Pp(), NR(), hT(), Gx(), w3h(), ng(), sB(), P5n(), Ud_(), c7e(), j5n(), wh_(), Eh_(), O0t(), uMo(), u7e = 6, Lq = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f, v, b, y, T, E, A, R, D, P, N){
        super(), this._contextKeyService = e, this._lifecycleService = t, this._logService = n, this._dialogService = i, this._instantiationService = r, this._remoteAgentService = s, this._viewsService = o, this._configurationService = a, this._terminalConfigService = c, this._environmentService = l, this._terminalConfigurationService = u, this._terminalEditorService = h, this._terminalGroupService = p, this._terminalInstanceService = g, this._editorGroupsService = f, this._terminalProfileService = v, this._extensionService = b, this._notificationService = y, this._workspaceContextService = T, this._pathService = E, this._commandService = A, this._telemetryService = R, this._keybindingService = D, this._timerService = P, this._fastContextService = N, this._hostActiveTerminals = new Map, this._detachedXterms = new Set, this._isShuttingDown = !1, this._backgroundedTerminalInstances = [], this._backgroundedTerminalDisposables = new Map, this._connectionState = 0, this._whenConnected = new Am, this._restoredGroupCount = 0, this._reconnectedTerminals = new Map, this._onDidCreateInstance = this._register(new ve), this._onDidChangeInstanceDimensions = this._register(new ve), this._onDidRegisterProcessSupport = this._register(new ve), this._onDidChangeConnectionState = this._register(new ve), this._onDidRequestStartExtensionTerminal = this._register(new ve), this._onDidDisposeInstance = this._register(new ve), this._onDidFocusInstance = this._register(new ve), this._onDidChangeActiveInstance = this._register(new ve), this._onDidChangeInstances = this._register(new ve), this._onDidChangeInstanceCapability = this._register(new ve), this._onDidChangeActiveGroup = this._register(new ve), this._onHighlightRequest = this._register(new ve), this._terminalsPathPromise = d7v(this._workspaceContextService.getWorkspace(), this._pathService), this._register(this.onDidCreateInstance(()=>this._terminalProfileService.refreshAvailableProfiles())), this._forwardInstanceHostEvents(this._terminalGroupService), this._forwardInstanceHostEvents(this._terminalEditorService), this._register(this.onDidDisposeInstance((O)=>this._removeFromReconnected(O))), this._register(rn(()=>this._reconnectedTerminals.clear())), this._register(this._terminalGroupService.onDidChangeActiveGroup(this._onDidChangeActiveGroup.fire, this._onDidChangeActiveGroup)), this._register(this._terminalInstanceService.onDidCreateInstance((O)=>{
            this._initInstanceListeners(O), this._onDidCreateInstance.fire(O);
        })), this._register(this._terminalGroupService.onDidChangeActiveInstance((O)=>{
            !O && !this._isShuttingDown && this._terminalConfigService.config.hideOnLastClosed && this._terminalGroupService.hidePanel(), O?.shellType ? this._terminalShellTypeContextKey.set(O.shellType.toString()) : (!O || !O.shellType) && this._terminalShellTypeContextKey.reset();
        })), this._handleInstanceContextKeys(), this._terminalShellTypeContextKey = Er.shellType.bindTo(this._contextKeyService), this._processSupportContextKey = Er.processSupported.bindTo(this._contextKeyService), this._processSupportContextKey.set(!Dl || this._remoteAgentService.getConnection() !== null), this._terminalHasBeenCreated = Er.terminalHasBeenCreated.bindTo(this._contextKeyService), this._terminalCountContextKey = Er.count.bindTo(this._contextKeyService), this._terminalEditorActive = Er.terminalEditorActive.bindTo(this._contextKeyService), this._register(this.onDidChangeActiveInstance((O)=>{
            this._terminalEditorActive.set(!!O?.target && O.target === Mf.Editor);
        })), this.registerLastTerminalCommandTimingListenersForCmdk(), this._register(t.onBeforeShutdown(async (O)=>O.veto(this._onBeforeShutdown(O.reason, O.context), "veto.terminal"))), this._register(t.onWillShutdown((O)=>this._onWillShutdown(O))), this._initializePrimaryBackend(), Kl(0).then(()=>this._register(this._instantiationService.createInstance(Kir, on.document.head)));
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
    getReconnectedTerminals(e) {
        return this._reconnectedTerminals.get(e);
    }
    findTerminalByMetadata(e, t) {
        return this.instances.find((n)=>{
            const i = n.reconnectionProperties;
            return !i || i.ownerId !== e ? !1 : t(i.data);
        });
    }
    get defaultLocation() {
        return this._terminalConfigurationService.config.defaultLocation === "editor" ? Mf.Editor : Mf.Panel;
    }
    get activeInstance() {
        for (const e of this._hostActiveTerminals.values())if (e?.hasFocus) return e;
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
        return this._register(this.createOnInstanceEvent((e)=>Ct.map(e.onData, (t)=>({
                    instance: e,
                    data: t
                })))).event;
    }
    get onAnyInstanceDataInput() {
        return this._register(this.createOnInstanceEvent((e)=>Ct.map(e.onDidInputData, ()=>e, e.store))).event;
    }
    get onAnyInstanceIconChange() {
        return this._register(this.createOnInstanceEvent((e)=>e.onIconChanged)).event;
    }
    get onAnyInstanceMaximumDimensionsChange() {
        return this._register(this.createOnInstanceEvent((e)=>Ct.map(e.onMaximumDimensionsChanged, ()=>e, e.store))).event;
    }
    get onAnyInstancePrimaryStatusChange() {
        return this._register(this.createOnInstanceEvent((e)=>Ct.map(e.statusList.onDidChangePrimaryStatus, ()=>e, e.store))).event;
    }
    get onAnyInstanceProcessIdReady() {
        return this._register(this.createOnInstanceEvent((e)=>e.onProcessIdReady)).event;
    }
    get onAnyInstanceSelectionChange() {
        return this._register(this.createOnInstanceEvent((e)=>e.onDidChangeSelection)).event;
    }
    get onAnyInstanceTitleChange() {
        return this._register(this.createOnInstanceEvent((e)=>e.onTitleChanged)).event;
    }
    get onAnyInstanceShellTypeChanged() {
        return this._register(this.createOnInstanceEvent((e)=>Ct.map(e.onDidChangeShellType, ()=>e))).event;
    }
    get onAnyInstanceAddedCapabilityType() {
        return this._register(this.createOnInstanceEvent((e)=>e.capabilities.onDidAddCapabilityType)).event;
    }
    get onHighlightRequest() {
        return this._onHighlightRequest.event;
    }
    highlightTerminalContainer(e = 500) {
        this._onHighlightRequest.fire({
            delayInMs: e
        });
    }
    registerLastTerminalCommandTimingListenersForCmdk() {
        this._register(this.onAnyInstanceDataInput(()=>{
            this._fastContextService?.markNowAsLastTerminalCommand();
        }));
    }
    async showProfileQuickPick(e, t) {
        const i = await this._instantiationService.createInstance(zir).showAndGetResult(e);
        if (!i || typeof i == "string") return;
        const r = i.keyMods;
        if (e === "createInstance") {
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
                cwd: t
            }) : o = await this.createTerminal({
                location: this.defaultLocation,
                config: i.config,
                cwd: t
            }));
            if (o && this.defaultLocation !== Mf.Editor) return this._terminalGroupService.showPanel(!0), this.setActiveInstance(o), o;
        }
    }
    async _initializePrimaryBackend() {
        Ol("code/terminal/willGetTerminalBackend"), this._primaryBackend = await this._terminalInstanceService.getBackend(this._environmentService.remoteAuthority), Ol("code/terminal/didGetTerminalBackend"), this._primaryBackend && this._timerService.registerTerminalBackendReadiness(this._primaryBackend.whenReady);
        const e = this._terminalConfigurationService.config.enablePersistentSessions;
        this._connectionState = 0;
        const t = !!this._environmentService.remoteAuthority && e;
        this._primaryBackend && this._register(this._primaryBackend.onDidRequestDetach(async (i)=>{
            const r = this.getInstanceFromResource(N5h(i.workspaceId, i.instanceId));
            if (r) {
                const s = r?.persistentProcessId;
                s && !r.shellLaunchConfig.isFeatureTerminal && !r.shellLaunchConfig.customPtyImplementation ? (r.target === Mf.Editor ? this._terminalEditorService.detachInstance(r) : this._terminalGroupService.getGroupForInstance(r)?.removeInstance(r), await r.detachProcessAndDispose(pG.User), await this._primaryBackend?.acceptDetachInstanceReply(i.requestId, s)) : await this._primaryBackend?.acceptDetachInstanceReply(i.requestId, void 0);
            }
        })), Ol("code/terminal/willReconnect");
        let n;
        t ? n = this._reconnectToRemoteTerminals() : e ? n = this._reconnectToLocalTerminals() : n = Promise.resolve(), n.then(async ()=>{
            this._setConnected(), Ol("code/terminal/didReconnect"), Ol("code/terminal/willReplay");
            const i = await this._reconnectedTerminalGroups?.then((o)=>o.map((a)=>a.terminalInstances).flat()) ?? [];
            await Promise.all(i.map((o)=>new Promise((a)=>Ct.once(o.onProcessReplayComplete)(a)))), Ol("code/terminal/didReplay"), Ol("code/terminal/willGetPerformanceMarks");
            const r = this._environmentService.remoteAuthority, s = Array.from(this._terminalInstanceService.getRegisteredBackends()).filter((o)=>o.remoteAuthority === void 0 || o.remoteAuthority === r);
            for (const o of s)o.setReady();
            this._whenConnected.complete(), await Promise.all(s.map(async (o)=>{
                this._timerService.setPerformanceMarks(o.remoteAuthority === void 0 ? "localPtyHost" : "remotePtyHost", await o.getPerformanceMarks());
            })), Ol("code/terminal/didGetPerformanceMarks");
        });
    }
    getPrimaryBackend() {
        return this._primaryBackend;
    }
    _forwardInstanceHostEvents(e) {
        this._register(e.onDidChangeInstances(this._onDidChangeInstances.fire, this._onDidChangeInstances)), this._register(e.onDidDisposeInstance(this._onDidDisposeInstance.fire, this._onDidDisposeInstance)), this._register(e.onDidChangeActiveInstance((t)=>this._evaluateActiveInstance(e, t))), this._register(e.onDidFocusInstance((t)=>{
            this._onDidFocusInstance.fire(t), this._evaluateActiveInstance(e, t);
        })), this._register(e.onDidChangeInstanceCapability((t)=>{
            this._onDidChangeInstanceCapability.fire(t);
        })), this._hostActiveTerminals.set(e, void 0);
    }
    _evaluateActiveInstance(e, t) {
        if (this._hostActiveTerminals.set(e, t), t === void 0) for (const n of this._hostActiveTerminals.values())n && (t = n);
        this._activeInstance = t, this._onDidChangeActiveInstance.fire(t);
    }
    setActiveInstance(e) {
        e.shellLaunchConfig.hideFromUser && this._showBackgroundTerminal(e), e.target === Mf.Editor ? this._terminalEditorService.setActiveInstance(e) : this._terminalGroupService.setActiveInstance(e);
    }
    async focusInstance(e) {
        return e.target === Mf.Editor ? this._terminalEditorService.focusInstance(e) : this._terminalGroupService.focusInstance(e);
    }
    async focusActiveInstance() {
        if (this._activeInstance) return this.focusInstance(this._activeInstance);
    }
    async createContributedTerminalProfile(e, t, n) {
        await this._extensionService.activateByEvent(`onTerminalProfile:${t}`);
        const i = this._terminalProfileService.getContributedProfileProvider(e, t);
        if (!i) {
            this._notificationService.error(`No terminal profile provider registered for id "${t}"`);
            return;
        }
        try {
            await i.createContributedTerminalProfile(n), this._terminalGroupService.setActiveInstanceByIndex(this._terminalGroupService.instances.length - 1), await this._terminalGroupService.activeInstance?.focusWhenReady();
        } catch (r) {
            this._notificationService.error(r.message);
        }
    }
    async safeDisposeTerminal(e) {
        if (!(e.target !== Mf.Editor && e.hasChildProcesses && (this._terminalConfigurationService.config.confirmOnKill === "panel" || this._terminalConfigurationService.config.confirmOnKill === "always") && await this._showTerminalCloseConfirmation(!0))) return new Promise((t)=>{
            Ct.once(e.onExit)(()=>t()), e.dispose(pG.User);
        });
    }
    _setConnected() {
        this._connectionState = 1, this._onDidChangeConnectionState.fire(), this._logService.trace("Pty host ready");
    }
    async _reconnectToRemoteTerminals() {
        const e = this._environmentService.remoteAuthority;
        if (!e) return;
        const t = await this._terminalInstanceService.getBackend(e);
        if (!t) return;
        Ol("code/terminal/willGetTerminalLayoutInfo");
        const n = await t.getTerminalLayoutInfo();
        Ol("code/terminal/didGetTerminalLayoutInfo"), t.reduceConnectionGraceTime(), Ol("code/terminal/willRecreateTerminalGroups"), await this._recreateTerminalGroups(n), Ol("code/terminal/didRecreateTerminalGroups"), this._attachProcessLayoutListeners(), this._logService.trace("Reconnected to remote terminals");
    }
    async _reconnectToLocalTerminals() {
        const e = await this._terminalInstanceService.getBackend();
        if (!e) return;
        Ol("code/terminal/willGetTerminalLayoutInfo");
        const t = await e.getTerminalLayoutInfo();
        Ol("code/terminal/didGetTerminalLayoutInfo"), t && t.tabs.length > 0 && (Ol("code/terminal/willRecreateTerminalGroups"), this._reconnectedTerminalGroups = this._recreateTerminalGroups(t), Ol("code/terminal/didRecreateTerminalGroups")), this._attachProcessLayoutListeners(), this._logService.trace("Reconnected to local terminals");
    }
    _recreateTerminalGroups(e) {
        const t = [];
        let n;
        if (e) {
            for (const i of e.tabs){
                const r = i.terminals.filter((s)=>s.terminal && s.terminal.isOrphan);
                if (r.length) {
                    this._restoredGroupCount += r.length;
                    const s = this._recreateTerminalGroup(i, r);
                    t.push(s), i.isActive && (n = s);
                    const o = this.instances.find((a)=>a.shellLaunchConfig.attachPersistentProcess?.id === i.activePersistentProcessId);
                    o && this.setActiveInstance(o);
                }
            }
            e.tabs.length && n?.then((i)=>this._terminalGroupService.activeGroup = i);
        }
        return Promise.all(t).then((i)=>i.filter((r)=>!!r));
    }
    async _recreateTerminalGroup(e, t) {
        let n;
        for (const r of t){
            const s = r.terminal;
            this._lifecycleService.startupKind !== 3 && s.type === "Task" || (Ol(`code/terminal/willRecreateTerminal/${s.id}-${s.pid}`), n = this.createTerminal({
                config: {
                    attachPersistentProcess: s
                },
                location: n ? {
                    parentTerminal: n
                } : Mf.Panel
            }), n.then(()=>Ol(`code/terminal/didRecreateTerminal/${s.id}-${s.pid}`)));
        }
        return n?.then((r)=>{
            const s = this._terminalGroupService.getGroupForInstance(r);
            return s?.resizePanes(e.terminals.map((o)=>o.relativeSize)), s;
        });
    }
    _attachProcessLayoutListeners() {
        this._register(this.onDidChangeActiveGroup(()=>this._saveState())), this._register(this.onDidChangeActiveInstance(()=>this._saveState())), this._register(this.onDidChangeInstances(()=>this._saveState())), this._register(this.onAnyInstanceProcessIdReady(()=>this._saveState())), this._register(this.onAnyInstanceTitleChange((e)=>this._updateTitle(e))), this._register(this.onAnyInstanceIconChange((e)=>this._updateIcon(e.instance, e.userInitiated)));
    }
    _handleInstanceContextKeys() {
        const e = Er.isOpen.bindTo(this._contextKeyService), t = ()=>{
            e.set(this.instances.length > 0), this._terminalCountContextKey.set(this.instances.length);
        };
        this._register(this.onDidChangeInstances(()=>t()));
    }
    async getActiveOrCreateInstance(e) {
        const t = this.activeInstance;
        if (!t) return this.createTerminal();
        if (!e?.acceptsInput || t.xterm?.isStdinDisabled !== !0) return t;
        const n = await this.createTerminal();
        return this.setActiveInstance(n), await this.revealActiveTerminal(), n;
    }
    getActiveInstance() {
        return this.activeInstance;
    }
    async revealTerminal(e, t) {
        e.target === Mf.Editor ? await this._terminalEditorService.revealActiveEditor(t) : await this._terminalGroupService.showPanel(t === void 0 ? void 0 : !t);
    }
    async revealActiveTerminal(e) {
        const t = this.activeInstance;
        t && await this.revealTerminal(t, e);
    }
    setEditable(e, t) {
        t ? this._editable = {
            instance: e,
            data: t
        } : this._editable = void 0;
        const n = this._viewsService.getActiveViewWithId(F1), i = this.isEditable(e);
        n?.terminalTabbedView?.setEditable(i);
    }
    isEditable(e) {
        return !!this._editable && (this._editable.instance === e || !e);
    }
    getEditableData(e) {
        return this._editable && this._editable.instance === e ? this._editable.data : void 0;
    }
    requestStartExtensionTerminal(e, t, n) {
        return new Promise((i)=>{
            this._onDidRequestStartExtensionTerminal.fire({
                proxy: e,
                cols: t,
                rows: n,
                callback: i
            });
        });
    }
    _onBeforeShutdown(e, t) {
        return Dl ? (this._isShuttingDown = !0, !1) : this._onBeforeShutdownAsync(e, t);
    }
    async _onBeforeShutdownAsync(e, t) {
        if (this.instances.length === 0) return !1;
        try {
            if (this._shutdownWindowCount = await this._nativeDelegate?.getWindowCount(), this._shouldReviveProcesses(e) && await Promise.race([
                this._primaryBackend?.persistTerminalState(),
                Kl(2e3)
            ]), !this._shouldPersistTerminalsOnShutdown(e, t) && (this._terminalConfigurationService.config.confirmOnExit === "always" && this.foregroundInstances.length > 0 || this._terminalConfigurationService.config.confirmOnExit === "hasChildProcesses" && this.foregroundInstances.some((s)=>s.hasChildProcesses))) return this._onBeforeShutdownConfirmation(e);
        } catch (n) {
            this._logService.warn("Exception occurred during terminal shutdown", n);
        }
        return this._isShuttingDown = !0, !1;
    }
    setNativeDelegate(e) {
        this._nativeDelegate = e;
    }
    _shouldReviveProcesses(e) {
        if (!this._terminalConfigurationService.config.enablePersistentSessions) return !1;
        switch(this._terminalConfigurationService.config.persistentSessionReviveProcess){
            case "onExit":
                return e === 1 && this._shutdownWindowCount === 1 && !Ai ? !0 : e === 4 || e === 2;
            case "onExitAndWindowClose":
                return e !== 3;
            default:
                return !1;
        }
    }
    _shouldPersistTerminalsOnShutdown(e, t) {
        return this._terminalConfigurationService.config.enablePersistentSessions ? e === 3 ? !0 : t === "no-refs" : !1;
    }
    async _onBeforeShutdownConfirmation(e) {
        const t = await this._showTerminalCloseConfirmation();
        return t || (this._isShuttingDown = !0), t;
    }
    _onWillShutdown(e) {
        const t = this._shouldPersistTerminalsOnShutdown(e.reason, e.context);
        for (const n of [
            ...this._terminalGroupService.instances,
            ...this._backgroundedTerminalInstances
        ])t && n.shouldPersist ? n.detachProcessAndDispose(pG.Shutdown) : n.dispose(pG.Shutdown);
        !t && !this._shouldReviveProcesses(e.reason) && this._primaryBackend?.setTerminalLayoutInfo(void 0);
    }
    _saveState() {
        if (this._isShuttingDown || !this._terminalConfigurationService.config.enablePersistentSessions) return;
        const t = {
            tabs: this._terminalGroupService.groups.map((n)=>n.getLayoutInfo(n === this._terminalGroupService.activeGroup))
        };
        this._primaryBackend?.setTerminalLayoutInfo(t);
    }
    _updateTitle(e) {
        !this._terminalConfigurationService.config.enablePersistentSessions || !e || !e.persistentProcessId || !e.title || e.isDisposed || (e.staticTitle ? this._primaryBackend?.updateTitle(e.persistentProcessId, e.staticTitle, ate.Api) : this._primaryBackend?.updateTitle(e.persistentProcessId, e.title, e.titleSource));
    }
    _updateIcon(e, t) {
        !this._terminalConfigurationService.config.enablePersistentSessions || !e || !e.persistentProcessId || !e.icon || e.isDisposed || this._primaryBackend?.updateIcon(e.persistentProcessId, t, e.icon, e.color);
    }
    refreshActiveGroup() {
        this._onDidChangeActiveGroup.fire(this._terminalGroupService.activeGroup);
    }
    getInstanceFromId(e) {
        let t = -1;
        if (this._backgroundedTerminalInstances.forEach((n, i)=>{
            n.instanceId === e && (t = i);
        }), t !== -1) return this._backgroundedTerminalInstances[t];
        try {
            return this.instances[this._getIndexFromId(e)];
        } catch  {
            return;
        }
    }
    getInstanceFromIndex(e) {
        return this.instances[e];
    }
    getInstanceFromResource(e) {
        return jDo(this.instances, e);
    }
    async getTerminalFileUriFromResource(e) {
        if (e.scheme !== gt.vscodeTerminal) throw new Error(`Expected vscode-terminal URI, got: ${e.scheme}`);
        const n = A5n(e).instanceId;
        if (n === void 0) throw new Error(`Terminal URI missing instanceId: ${e.toString()}`);
        const i = await this._terminalsPathPromise;
        return Ee.joinPath(i, `${n}.txt`);
    }
    async getTerminalFilePathFromResource(e) {
        return (await this.getTerminalFileUriFromResource(e)).fsPath;
    }
    isAttachedToTerminal(e) {
        return this.instances.some((t)=>t.processId === e.pid);
    }
    moveToEditor(e, t) {
        if (e.target === Mf.Editor) return;
        const n = this._terminalGroupService.getGroupForInstance(e);
        n && (n.removeInstance(e), this._terminalEditorService.openEditor(e, t ? {
            viewColumn: t
        } : void 0));
    }
    moveIntoNewEditor(e) {
        this.moveToEditor(e, Pki);
    }
    async moveToTerminalView(e, t, n) {
        if (Ee.isUri(e) && (e = this.getInstanceFromResource(e)), !e) return;
        if (this._terminalEditorService.detachInstance(e), e.target !== Mf.Editor) {
            await this._terminalGroupService.showPanel(!0);
            return;
        }
        e.target = Mf.Panel;
        let i;
        if (t && (i = this._terminalGroupService.getGroupForInstance(t)), i || (i = this._terminalGroupService.createGroup()), i.addInstance(e), this.setActiveInstance(e), await this._terminalGroupService.showPanel(!0), t && n) {
            const r = i.terminalInstances.indexOf(t) + (n === "after" ? 1 : 0);
            i.moveInstance(e, r, n);
        }
        this._onDidChangeInstances.fire(), this._onDidChangeActiveGroup.fire(this._terminalGroupService.activeGroup);
    }
    _initInstanceListeners(e) {
        const t = new He;
        t.add(e.onDimensionsChanged(()=>{
            this._onDidChangeInstanceDimensions.fire(e), this._terminalConfigurationService.config.enablePersistentSessions && this.isProcessSupportRegistered && this._saveState();
        })), t.add(e.onDidFocus(this._onDidChangeActiveInstance.fire, this._onDidChangeActiveInstance)), t.add(e.onRequestAddInstanceToGroup(async (i)=>await this._addInstanceToGroup(e, i))), t.add(e.onDidChangeShellType(()=>this._extensionService.activateByEvent(`onTerminal:${e.shellType}`))), t.add(Ct.runAndSubscribe(e.capabilities.onDidAddCapability, (()=>{
            e.capabilities.has(2) && this._extensionService.activateByEvent(`onTerminalShellIntegration:${e.shellType}`);
        })));
        const n = this._register(e.onDisposed(()=>{
            t.dispose(), this._store.delete(n), this.instances.includes(e) || this._onDidDisposeInstance.fire(e);
        }));
    }
    async _addInstanceToGroup(e, t) {
        const n = A5n(t.uri);
        if (n.instanceId === void 0) return;
        let i = this.getInstanceFromResource(t.uri);
        if (!i) {
            const r = await this._primaryBackend?.requestDetachInstance(n.workspaceId, n.instanceId);
            if (r) {
                i = await this.createTerminal({
                    config: {
                        attachPersistentProcess: r
                    },
                    resource: t.uri
                }), this._terminalGroupService.moveInstance(i, e, t.side);
                return;
            }
        }
        if (i = this._terminalGroupService.getInstanceFromResource(t.uri), i) {
            this._terminalGroupService.moveInstance(i, e, t.side);
            return;
        }
        if (i = this._terminalEditorService.getInstanceFromResource(t.uri), i) {
            this.moveToTerminalView(i, e, t.side);
            return;
        }
    }
    registerProcessSupport(e) {
        e && (this._processSupportContextKey.set(e), this._onDidRegisterProcessSupport.fire());
    }
    _getIndexFromId(e) {
        let t = -1;
        if (this.instances.forEach((n, i)=>{
            n.instanceId === e && (t = i);
        }), t === -1) throw new Error(`Terminal with ID ${e} does not exist (has it already been disposed?)`);
        return t;
    }
    async _showTerminalCloseConfirmation(e) {
        let t;
        const n = this.foregroundInstances;
        n.length === 1 || e ? t = S(10357, null) : t = S(10358, null, n.length);
        const { confirmed: i } = await this._dialogService.confirm({
            type: "warning",
            message: t,
            primaryButton: S(10359, null)
        });
        return !i;
    }
    getDefaultInstanceHost() {
        return this.defaultLocation === Mf.Editor ? this._terminalEditorService : this._terminalGroupService;
    }
    async getInstanceHost(e) {
        if (e) {
            if (e === Mf.Editor) return this._terminalEditorService;
            if (typeof e == "object") {
                if ("viewColumn" in e) return this._terminalEditorService;
                if ("parentTerminal" in e) return (await e.parentTerminal).target === Mf.Editor ? this._terminalEditorService : this._terminalGroupService;
            } else return this._terminalGroupService;
        }
        return this;
    }
    async createTerminal(e) {
        if (this._telemetryService.publicLogCapture("terminal:create"), this._terminalProfileService.availableProfiles.length === 0) {
            const c = e?.config && "customPtyImplementation" in e.config, l = e?.config && "attachPersistentProcess" in e.config && e.config.attachPersistentProcess, u = this._remoteAgentService.getConnection() && Ee.isUri(e?.cwd) && e?.cwd.scheme === gt.vscodeFileResource;
            !c && !l && !u && (this._connectionState === 0 && Ol("code/terminal/willGetProfiles"), await this._terminalProfileService.profilesReady, this._connectionState === 0 && Ol("code/terminal/didGetProfiles"));
        }
        const t = e?.config || this._terminalProfileService.getDefaultProfile(), n = t && "extensionIdentifier" in t ? {} : this._terminalInstanceService.convertProfileToShellLaunchConfig(t || {}), i = e?.skipContributedProfileCheck || n.attachPersistentProcess ? void 0 : await this._getContributedProfile(n, e), r = typeof e?.location == "object" && "splitActiveTerminal" in e.location ? e.location.splitActiveTerminal : typeof e?.location == "object" ? "parentTerminal" in e.location : !1;
        if (await this._resolveCwd(n, r, e), !n.customPtyImplementation && i) {
            const c = await this.resolveLocation(e?.location);
            let l;
            r ? l = c === Mf.Editor ? {
                viewColumn: ib
            } : {
                splitActiveTerminal: !0
            } : l = typeof e?.location == "object" && "viewColumn" in e.location ? e.location : c, await this.createContributedTerminalProfile(i.extensionIdentifier, i.id, {
                icon: i.icon,
                color: i.color,
                location: l,
                cwd: n.cwd
            });
            const u = c === Mf.Editor ? this._terminalEditorService : this._terminalGroupService, h = u.instances[u.instances.length - 1];
            return await h?.focusWhenReady(), this._terminalHasBeenCreated.set(!0), h;
        }
        if (!n.customPtyImplementation && !this.isProcessSupportRegistered) throw new Error("Could not create terminal when process support is not registered");
        if (n.hideFromUser) {
            const c = this._terminalInstanceService.createInstance(n, Mf.Panel);
            this._backgroundedTerminalInstances.push(c);
            const l = c.onDisposed((u)=>{
                this._onDidDisposeInstance.fire(u);
                const h = this._backgroundedTerminalInstances.indexOf(u);
                h !== -1 && this._backgroundedTerminalInstances.splice(h, 1);
                const p = this._backgroundedTerminalDisposables.get(u.instanceId);
                p && Lo(p), this._backgroundedTerminalDisposables.delete(u.instanceId);
            });
            return this._backgroundedTerminalDisposables.set(c.instanceId, [
                l
            ]), this._terminalHasBeenCreated.set(!0), c;
        }
        this._evaluateLocalCwd(n);
        const s = await this.resolveLocation(e?.location) || this.defaultLocation, o = await this._getSplitParent(e?.location);
        this._terminalHasBeenCreated.set(!0), this._extensionService.activateByEvent("onTerminal:*");
        let a;
        return o ? a = this._splitTerminal(n, s, o) : a = this._createTerminal(n, s, e), a.shellType && this._extensionService.activateByEvent(`onTerminal:${a.shellType}`), a;
    }
    async _getContributedProfile(e, t) {
        return t?.config && "extensionIdentifier" in t.config ? t.config : this._terminalProfileService.getContributedDefaultProfile(e);
    }
    async createDetachedTerminal(e) {
        const t = await e9.getXtermConstructor(this._keybindingService, this._contextKeyService), n = this._instantiationService.createInstance(CTe, t, {
            cols: e.cols,
            rows: e.rows,
            xtermColorProvider: e.colorProvider,
            capabilities: e.capabilities || new b0t,
            disableOverviewRuler: e.disableOverviewRuler,
            detached: !0
        }, void 0);
        e.readonly && n.raw.attachCustomKeyEventHandler(()=>!1);
        const i = new Rnr(n, e, this._instantiationService);
        this._detachedXterms.add(i);
        const r = n.onDidDispose(()=>{
            this._detachedXterms.delete(i), r.dispose();
        });
        return i;
    }
    async _resolveCwd(e, t, n) {
        if (!e.cwd) {
            if (n?.cwd) e.cwd = n.cwd;
            else if (t && n?.location) {
                let r = this.activeInstance;
                if (typeof n.location == "object" && "parentTerminal" in n.location && (r = await n.location.parentTerminal), !r) throw new Error("Cannot split without an active instance");
                e.cwd = await B5h(r, this._workspaceContextService.getWorkspace().folders, this._commandService, this._terminalConfigService);
            }
        }
    }
    _splitTerminal(e, t, n) {
        let i;
        if (typeof e.cwd != "object" && typeof n.shellLaunchConfig.cwd == "object" && (e.cwd = Ee.from({
            scheme: n.shellLaunchConfig.cwd.scheme,
            authority: n.shellLaunchConfig.cwd.authority,
            path: e.cwd || n.shellLaunchConfig.cwd.path
        })), t === Mf.Editor || n.target === Mf.Editor) i = this._terminalEditorService.splitInstance(n, e);
        else {
            const r = this._terminalGroupService.getGroupForInstance(n);
            if (!r) throw new Error(`Cannot split a terminal without a group (instanceId: ${n.instanceId}, title: ${n.title})`);
            e.parentTerminalId = n.instanceId, i = r.split(e);
        }
        return this._addToReconnected(i), i;
    }
    _addToReconnected(e) {
        Ch_(this._reconnectedTerminals, e);
    }
    _removeFromReconnected(e) {
        Th_(this._reconnectedTerminals, e);
    }
    _createTerminal(e, t, n) {
        let i;
        const r = this._getEditorOptions(n?.location);
        return t === Mf.Editor ? (i = this._terminalInstanceService.createInstance(e, Mf.Editor), this._terminalEditorService.openEditor(i, r)) : i = this._terminalGroupService.createGroup(e).terminalInstances[0], this._addToReconnected(i), i;
    }
    async resolveLocation(e) {
        if (e && typeof e == "object") if ("parentTerminal" in e) {
            const t = await e.parentTerminal;
            return t.target ? t.target : Mf.Panel;
        } else {
            if ("viewColumn" in e) return Mf.Editor;
            if ("splitActiveTerminal" in e) return this._activeInstance?.target ? this._activeInstance?.target : Mf.Panel;
        }
        return e;
    }
    async _getSplitParent(e) {
        if (e && typeof e == "object" && "parentTerminal" in e) return e.parentTerminal;
        if (e && typeof e == "object" && "splitActiveTerminal" in e) return this.activeInstance;
    }
    _getEditorOptions(e) {
        if (e && typeof e == "object" && "viewColumn" in e) return e.viewColumn = j8e(this._editorGroupsService, this._configurationService, e.viewColumn), e;
    }
    _evaluateLocalCwd(e) {
        typeof e.cwd != "string" && e.cwd?.scheme === gt.file && (ztt.getValue(this._contextKeyService) ? (e.initialText = rbe(S(10360, null, "\x1B[3m", "\x1B[23m"), {
            excludeLeadingNewLine: !0,
            loudFormatting: !0
        }), e.type = "Local") : this._remoteAgentService.getConnection() && (e.initialText = rbe(S(10361, null, "\x1B[3m", "\x1B[23m"), {
            excludeLeadingNewLine: !0,
            loudFormatting: !0
        }), e.type = "Local"));
    }
    _showBackgroundTerminal(e) {
        if (this._backgroundedTerminalInstances.indexOf(e) === -1) return;
        this._backgroundedTerminalInstances.splice(this._backgroundedTerminalInstances.indexOf(e), 1);
        const n = this._backgroundedTerminalDisposables.get(e.instanceId);
        n && Lo(n), this._backgroundedTerminalDisposables.delete(e.instanceId), this._terminalGroupService.createGroup(e), this.instances.length === 1 && this._terminalGroupService.setActiveInstanceByIndex(0), this._onDidChangeInstances.fire();
    }
    async setContainers(e, t) {
        this._terminalConfigurationService.setPanelContainer(e), this._terminalGroupService.setContainer(t);
    }
    getEditingTerminal() {
        return this._editingTerminal;
    }
    setEditingTerminal(e) {
        this._editingTerminal = e;
    }
    createOnInstanceEvent(e) {
        return new nmi(this.instances, this.onDidCreateInstance, this.onDidDisposeInstance, e);
    }
    createOnInstanceCapabilityEvent(e, t) {
        return Bd_(this.instances, this.onDidCreateInstance, this.onDidDisposeInstance, e, t);
    }
}, ie([
    xo
], Lq.prototype, "onAnyInstanceData", null), ie([
    xo
], Lq.prototype, "onAnyInstanceDataInput", null), ie([
    xo
], Lq.prototype, "onAnyInstanceIconChange", null), ie([
    xo
], Lq.prototype, "onAnyInstanceMaximumDimensionsChange", null), ie([
    xo
], Lq.prototype, "onAnyInstancePrimaryStatusChange", null), ie([
    xo
], Lq.prototype, "onAnyInstanceProcessIdReady", null), ie([
    xo
], Lq.prototype, "onAnyInstanceSelectionChange", null), ie([
    xo
], Lq.prototype, "onAnyInstanceTitleChange", null), ie([
    xo
], Lq.prototype, "onAnyInstanceShellTypeChanged", null), ie([
    xo
], Lq.prototype, "onAnyInstanceAddedCapabilityType", null), ie([
    cU(500)
], Lq.prototype, "_saveState", null), ie([
    cU(500)
], Lq.prototype, "_updateTitle", null), ie([
    cU(500)
], Lq.prototype, "_updateIcon", null), Lq = ie([
    C(0, xn),
    C(1, Id),
    C(2, RN),
    C(3, wc),
    C(4, _t),
    C(5, Kd),
    C(6, Ic),
    C(7, qt),
    C(8, r8),
    C(9, Yi),
    C(10, r8),
    C(11, ZUe),
    C(12, eP),
    C(13, dq),
    C(14, gs),
    C(15, X_e),
    C(16, Ma),
    C(17, di),
    C(18, Jn),
    C(19, zl),
    C(20, $n),
    C(21, $h),
    C(22, qr),
    C(23, DLe),
    C(24, vLe)
], Lq), Kir = class extends aW {
    constructor(e, t, n, i, r){
        super(n), this._terminalService = t, this._themeService = n, this._terminalProfileService = i, this._editorService = r, this._registerListeners(), this._styleElement = dS(e), this._register(rn(()=>this._styleElement.remove())), this.updateStyles();
    }
    _registerListeners() {
        this._register(this._terminalService.onAnyInstanceIconChange(()=>this.updateStyles())), this._register(this._terminalService.onDidCreateInstance(()=>this.updateStyles())), this._register(this._editorService.onDidActiveEditorChange(()=>{
            this._editorService.activeEditor instanceof g8 && this.updateStyles();
        })), this._register(this._editorService.onDidCloseEditor(()=>{
            this._editorService.activeEditor instanceof g8 && this.updateStyles();
        })), this._register(this._terminalProfileService.onDidChangeAvailableProfiles(()=>this.updateStyles()));
    }
    updateStyles() {
        super.updateStyles();
        const e = this._themeService.getColorTheme();
        let t = "";
        const n = this._themeService.getProductIconTheme();
        for (const r of this._terminalService.instances){
            const s = r.icon;
            if (!s) continue;
            let o;
            s instanceof Ee ? o = s : s instanceof Object && "light" in s && "dark" in s && (o = e.type === Ef.LIGHT ? s.light : s.dark);
            const a = Int(r, e.type);
            if (o instanceof Ee && a && a.length > 1 && (t += Pv`.monaco-workbench .terminal-tab.${Qpt(a[0])}::before
					{content: ''; background-image: ${AE(o)};}`), Ft.isThemeIcon(s)) {
                const l = Nwe().getIcon(s.id);
                if (l) {
                    const u = n.getIcon(l);
                    u && (t += Pv`.monaco-workbench .terminal-tab.codicon-${Qpt(s.id)}::before
							{content: ${W7(u.fontCharacter)} !important; font-family: ${W7(u.font?.id ?? "codicon")} !important;}`);
                }
            }
        }
        const i = e.getColor(U2t);
        i && (t += Pv`.monaco-workbench .show-file-icons .file-icon.terminal-tab::before { color: ${i}; }`), t += xd_(e, !0), this._styleElement.textContent !== t && (this._styleElement.textContent = t);
    }
}, Kir = ie([
    C(1, Gf),
    C(2, $r),
    C(3, X_e),
    C(4, hn)
], Kir);

}
