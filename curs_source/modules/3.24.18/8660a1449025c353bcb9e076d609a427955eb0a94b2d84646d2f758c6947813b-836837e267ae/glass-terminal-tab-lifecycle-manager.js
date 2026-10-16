import { Agv, D5i, Fxs, RVl, VLn, Ygv, lgv, uc0, ugv, xgv, yQt, zLn } from "./Asv.js";
import { Ei, Gt, Qe, da, en, st, tt, xr } from "./Iwo.js";
import { jt, k_ } from "./editor-panel-tab-kind.js";
import { Kpc } from "./glass-local-terminal-persistence.js";
import { qcT, swc } from "./glass-pty-connection-readiness.js";
import { Ds, NE } from "./glass-tab-persistence-constants.js";
import { VcT } from "./glass-terminal-cloud-create-outcome.js";
import { iEe } from "./glass-terminal-service-proxy.js";
import { Kgv, L5i, XVl, YVl } from "./glass-tmux-session-service.js";
import { GfC, WfC, yPt } from "./gpc.js";
import { GcT, zcT } from "./mE_.js";
import { Rgv } from "./machine-reachability-cache.js";
import { cZn, xdn } from "./symbols.js";
import { Qgv } from "./terminal-close-confirmation.js";
import { ytl } from "./terminal.js";
import { UC, ny } from "./terminal_2.js";
import { SQt } from "./terminal_4.js";
import { AVe, CRi } from "./tmux_session_service_pb.js";
import { E } from "./tslib.es6.js";
var KE_;
export { KE_ };
var __wakaru_KcT_initialized = false;
export function KcT() {
if (__wakaru_KcT_initialized) return;
__wakaru_KcT_initialized = true;
"use strict";
E(), iEe(), CRi(), Ei(), Gt(), Qe(), cZn(), UC(), Rgv(), k_(), SQt(), Qgv(), Kpc(), L5i(), qcT(), NE(), VcT(), KE_ = class extends st {
    constructor(t){
        super(), this._isPtyConnecting = !0, this._didTimeoutPtyConnectionWait = !1, this._ptyReconcileSkippedForShutdown = !1, this._inFlightTerminalCreateJoinable = !1, this._terminalPersistenceIdsClosedBeforeRebind = new Set, this._rememberedAgentTerminalSelections = new Map, this._suppressRememberedTerminalSelectionClearDepth = 0, this._onDidChangePtyConnecting = this._register(new tt), this.onDidChangePtyConnecting = this._onDidChangePtyConnecting.event, this._host = t.host, this._manager = t.manager, this._terminalService = t.terminalService, this._composerTerminalService = t.composerTerminalService, this._tmuxSessionService = t.tmuxSessionService, this._experimentService = t.experimentService, this._analyticsService = t.analyticsService, this._logService = t.logService, this._layoutService = t.layoutService, this._glassActiveAgentService = t.glassActiveAgentService, this._resourceOwnershipService = t.resourceOwnershipService, this._workspaceConnectionService = t.workspaceConnectionService, this._prettyDialogService = t.prettyDialogService, this._register({
            dispose: Agv(()=>{
                this._tryResumeOfflineTerminal();
            })
        }), this._register(this._workspaceConnectionService.connectionState.onChange(()=>{
            this._tryResumeOfflineTerminal();
        }));
    }
    get isPtyConnecting() {
        return this._isPtyConnecting;
    }
    initialize() {
        this._trackAgentTerminalOwners();
        const t = this._register(new da), e = ()=>{
            const i = new Set(this._terminalService.instances);
            for (const r of [
                ...t.keys()
            ])i.has(r) || t.deleteAndDispose(r);
            for (const r of i)t.has(r) || t.set(r, D5i(r, ()=>{
                this._syncTerminalTabTitles(r);
            }));
        }, n = this._manager.subscribe("tabClosed", (i)=>{
            if (i.kind !== jt.Terminal || i.isTransfer || !this._shouldDisposeOwnedTerminalResource(i.props)) return;
            const r = WfC(this._terminalService.instances, i.props);
            if (r) {
                this._disposeTerminalIfUnbound(r);
                return;
            }
            i.props.terminalPersistenceId && this._terminalPersistenceIdsClosedBeforeRebind.add(i.props.terminalPersistenceId);
        });
        this._register({
            dispose: n
        }), this._register(this._terminalService.onDidDisposeInstance((i)=>{
            this._syncTerminalTabsOnDisposedInstance(i.instanceId);
        })), e(), this._register(en.debounce(this._terminalService.onDidChangeInstances, ()=>{}, xdn)(()=>{
            e(), this.fullReconcileTerminalTabs();
        })), this._trackPtyConnection();
    }
    _trackAgentTerminalOwners() {
        const t = (e)=>{
            const n = lgv(e);
            n && this._resourceOwnershipService.setTerminalOwner(e.instanceId, n);
        };
        for (const e of this._terminalService.instances)t(e);
        this._register(this._terminalService.onDidCreateInstance(t));
    }
    async createTerminal(t) {
        let e;
        const n = await this._createTerminalInternal({
            ...t,
            getShellLaunchConfig: async ()=>(e = await this._buildTmuxShellLaunchConfigIfEnabled(), e?.kind === "tmux" ? e.shellLaunchConfig : void 0)
        });
        let i;
        e === void 0 ? i = void 0 : e.kind === "tmux" ? i = {
            kind: "tmux",
            bcId: e.bcId
        } : i = e;
        const r = zcT({
            tmuxAttempt: i,
            instanceCreated: n !== void 0
        });
        r && this._analyticsService.trackEvent("agent_layout.cloud_terminal_connect", r);
    }
    async runCommandInTerminal(t) {
        const e = await this._createTerminalInternal({
            shellLaunchConfig: {
                name: t.name,
                type: "Task",
                cwd: t.cwd,
                env: t.env,
                hideFromUser: !1,
                useShellEnvironment: !0
            }
        });
        if (!e) throw new Error("Failed to create Glass terminal for task.");
        this._terminalService.setActiveInstance(e), this._layoutService.setEditorPanelVisibility({
            source: "local-user-intent",
            visible: !0
        }), this._activateTerminalInstance(e), await e.processReady, await e.sendText(t.commandLine, !0);
    }
    async attachTmuxSession(t) {
        const e = this._host.currentBcId();
        if (!e) {
            await this._createTerminalInternal({
                targetIndex: t.targetIndex
            });
            return;
        }
        const n = await this._createTerminalInternal({
            targetIndex: t.targetIndex,
            shellLaunchConfig: this._buildTmuxShellLaunchConfig({
                bcId: e,
                sessionName: t.sessionName,
                sessionId: t.sessionId,
                sessionKind: t.sessionKind,
                displayName: t.displayName
            })
        });
        this._trackCloudTerminalConnectOutcome({
            bcId: e,
            connectionType: "attach",
            instance: n
        });
    }
    async _buildTmuxShellLaunchConfigIfEnabled() {
        const t = this._host.currentBcId();
        if (!t || !this._experimentService.checkFeatureGate("cloud_glass_shared_sessions", {
            disableExposureLog: !1
        })) return;
        let e;
        try {
            e = await this._tmuxSessionService.createSession(t, {
                displayName: "Terminal",
                kind: AVe.USER_MANUAL
            });
        } catch (n) {
            return xr(n), {
                kind: "tmux_failure",
                bcId: t,
                failureReason: "error"
            };
        }
        return e ? {
            kind: "tmux",
            bcId: t,
            shellLaunchConfig: this._buildTmuxShellLaunchConfig({
                bcId: t,
                sessionName: e.sessionName || e.sessionId,
                sessionId: e.sessionId,
                sessionKind: e.kind,
                displayName: e.displayName
            })
        } : {
            kind: "tmux_failure",
            bcId: t,
            failureReason: "session_unavailable"
        };
    }
    _trackCloudTerminalConnectOutcome({ bcId: t, connectionType: e, instance: n }) {
        n ? this._analyticsService.trackEvent("agent_layout.cloud_terminal_connect", {
            bcId: t,
            connectionType: e,
            outcome: "connected"
        }) : this._analyticsService.trackEvent("agent_layout.cloud_terminal_connect", {
            bcId: t,
            connectionType: e,
            outcome: "failed",
            failureReason: "error"
        });
    }
    _buildTmuxShellLaunchConfig({ bcId: t, sessionName: e, sessionId: n, sessionKind: i, displayName: r }) {
        return {
            executable: YVl,
            args: uc0({
                tmuxConfigPath: XVl,
                sessionName: e
            }),
            env: {
                EXEC_DAEMON_TMUX_PATH: YVl,
                EXEC_DAEMON_TMUX_CONF_PATH: XVl
            },
            name: r?.trim() || "Terminal",
            reconnectionProperties: {
                ownerId: `${Kgv}${t}`,
                data: {
                    tmuxSessionId: n,
                    tmuxSessionName: e,
                    tmuxSessionKind: i,
                    tmuxBcId: t
                }
            }
        };
    }
    _canCreateTerminalForCurrentMachine() {
        const t = this._host.currentBcId();
        if (!t) return !0;
        if (this._workspaceConnectionService.connectionState.value === "disconnected") return !1;
        const e = xgv(t);
        return e !== "unreachable" && e !== "forbidden" && e !== "private-worker";
    }
    _reusePendingHorizontalTerminalTab() {
        const t = this._pendingHorizontalTerminalTabId;
        return t === void 0 ? void 0 : this._manager.getTab({
            groupId: Ds,
            tabId: t
        })?.kind === jt.Terminal ? t : void 0;
    }
    _activateOrCreateOfflineTerminalTab(t) {
        const e = this._reusePendingHorizontalTerminalTab(), n = e ?? this._createPendingHorizontalTerminalTab({
            targetIndex: t?.targetIndex,
            targetGroupId: t?.targetGroupId
        });
        n !== void 0 && (this._pendingHorizontalTerminalTabId = n, e === void 0 && t?.onTabCreated?.(n), this._manager.setActive({
            groupId: Ds,
            tabId: n,
            force: !0
        }), this._host.focusTabWhenReady(n));
    }
    _tryResumeOfflineTerminal() {
        if (this._inFlightTerminalCreate) return;
        const t = this._pendingHorizontalTerminalTabId;
        if (t === void 0) return;
        const e = this._manager.getTab({
            groupId: Ds,
            tabId: t
        });
        e?.kind !== jt.Terminal || typeof e.props.terminalId == "number" || this._host.activeAgentBelongsToThisWorkspace() && this._canCreateTerminalForCurrentMachine() && (this._logService.info("[GlassTerminalTabLifecycleManager] Resuming terminal creation: cloud machine is connected"), this.createTerminal());
    }
    _createPendingHorizontalTerminalTab(t) {
        if (!this._manager.getGroup(Ds)) return;
        const e = t?.targetGroupId ?? this._host.getNewTabGroupId(), n = this._glassActiveAgentService.getActiveAgentId();
        this._manager.push({
            groupId: e,
            kind: jt.Terminal,
            props: {
                preview: !1,
                ...n ? {
                    ownerAgentId: n
                } : {},
                workspaceGroupKey: this._host.getTerminalWorkspaceTarget().key
            },
            label: this._manager.definitions[jt.Terminal].defaultLabel,
            activate: !0,
            targetIndex: t?.targetIndex
        });
        const i = this._manager.getGroup(e)?.activeTabId;
        return i && this._manager.getTab({
            groupId: Ds,
            tabId: i
        })?.kind === jt.Terminal ? i : void 0;
    }
    async _createTerminalInternal(t) {
        if (!this._host.activeAgentBelongsToThisWorkspace()) return;
        const e = t?.shellLaunchConfig === void 0;
        for(; this._inFlightTerminalCreate;){
            if (e && this._inFlightTerminalCreateJoinable) {
                const i = this._pendingHorizontalTerminalTabId;
                return i !== void 0 && t?.onTabCreated?.(i), this._inFlightTerminalCreate;
            }
            if (await this._inFlightTerminalCreate, !this._host.activeAgentBelongsToThisWorkspace()) return;
        }
        if (!this._canCreateTerminalForCurrentMachine()) {
            this._logService.info("[GlassTerminalTabLifecycleManager] Skipping terminal creation: cloud machine is not connected"), this._activateOrCreateOfflineTerminalTab(t);
            return;
        }
        const n = this._spawnAndBindPendingTerminal(t);
        this._inFlightTerminalCreate = n, this._inFlightTerminalCreateJoinable = e;
        try {
            return await n;
        } finally{
            this._inFlightTerminalCreate === n && (this._inFlightTerminalCreate = void 0, this._inFlightTerminalCreateJoinable = !1);
        }
    }
    async _spawnAndBindPendingTerminal(t) {
        const e = this._reusePendingHorizontalTerminalTab() ?? this._createPendingHorizontalTerminalTab({
            targetIndex: t?.targetIndex,
            targetGroupId: t?.targetGroupId
        });
        e && (this._pendingHorizontalTerminalTabId = e, t?.onTabCreated?.(e));
        try {
            const n = t?.shellLaunchConfig ?? await t?.getShellLaunchConfig?.();
            this._isPtyConnecting && await this._waitForPtyConnectionReadiness();
            const i = this._glassActiveAgentService.getActiveAgentId(), r = n ? await this._terminalService.createTerminal({
                config: n,
                cwd: n.cwd ?? this._host.workspaceTerminalCwd(),
                location: ny.Panel
            }) : await this._terminalService.createTerminal({
                cwd: this._host.workspaceTerminalCwd(),
                location: ny.Panel
            });
            if (this._resourceOwnershipService.setTerminalOwner(r.instanceId, i), e) {
                const s = this._manager.getTab({
                    groupId: Ds,
                    tabId: e
                });
                if (s?.kind !== jt.Terminal) {
                    r.dispose();
                    return;
                }
                this._manager.replace({
                    groupId: Ds,
                    tabId: e,
                    kind: jt.Terminal,
                    props: this._getTerminalTabProps(r, {
                        customLabel: s.props.customLabel
                    })
                }), this._manager.setLabel({
                    groupId: Ds,
                    tabId: e,
                    label: this._getResolvedTerminalTabLabel(r, s.props.customLabel)
                });
            } else {
                this._ensureRegularTerminalTabForInstance(r, {
                    activate: !0,
                    targetIndex: t?.targetIndex,
                    targetGroupId: t?.targetGroupId
                });
                const s = this._findRegularTerminalTabId(r.instanceId);
                s && t?.onTabCreated?.(s);
            }
            return this._rememberAgentTerminalSelectionForInstance(r, {
                ownerAgentId: i
            }), this._analyticsService.trackEvent("agent_layout.terminal_opened"), r;
        } catch (n) {
            e && this._host.closeManagerTab(e), xr(n);
            return;
        } finally{
            this._pendingHorizontalTerminalTabId === e && (this._pendingHorizontalTerminalTabId = void 0);
        }
    }
    activateTerminalTab() {
        if (!this._manager.getGroup(Ds)) return;
        const t = this.findMostRecentTerminalTab();
        if (t) {
            this._manager.setActive({
                groupId: Ds,
                tabId: t.id,
                force: !0
            }), this._host.focusTabWhenReady(t.id);
            return;
        }
        this.createTerminal().catch(xr);
    }
    findMostRecentTerminalTab(t) {
        const e = this._host.getTerminalWorkspaceTarget().key;
        return this._manager.getAllTabs().reduce((n, i)=>{
            if (i.kind !== jt.Terminal || t !== void 0 && this._manager.findGroupIdForTab(i.id) !== t) return n;
            const r = i.props.terminalId;
            if (typeof r != "number") return n;
            const s = this._terminalService.getInstanceFromId(r);
            return !s || !Fxs(s) || this._getTerminalTabWorkspaceGroupKey(i) !== e ? n : n ? (i.lastActiveTime ?? 0) > (n.lastActiveTime ?? 0) ? i : n : i;
        }, void 0);
    }
    activateTerminalResource(t) {
        const e = this._terminalService.getInstanceFromId(t.terminalId);
        return t.workspaceGroupKey !== void 0 && t.workspaceGroupKey !== this._host.getTerminalWorkspaceTarget().key || !e ? !1 : this._activateTerminalInstance(e);
    }
    renameTerminalTab(t) {
        const e = this._manager.getTab({
            groupId: Ds,
            tabId: t.tabId
        });
        if (e?.kind !== jt.Terminal) return;
        const n = this._normalizeTerminalCustomLabel(t.customLabel);
        if (n === void 0) return;
        const i = e.props.terminalId;
        if (typeof i != "number") {
            this._manager.replace({
                groupId: Ds,
                tabId: t.tabId,
                kind: jt.Terminal,
                props: this._withTerminalCustomLabel(e.props, n)
            }), this._manager.setLabel({
                groupId: Ds,
                tabId: t.tabId,
                label: n
            });
            return;
        }
        this._syncBoundTerminalTabsCustomLabel(i, n);
        const r = this._terminalService.getInstanceFromId(i);
        r && this._applyTerminalCustomLabel(r, n);
    }
    _findRegularTerminalTabId(t) {
        return this._manager.getAllTabs().find((e)=>e.kind === jt.Terminal && e.props.terminalId === t)?.id;
    }
    _activateTerminalInstance(t) {
        const e = yQt(t, this._getTerminalResolverServices());
        return !e.isBindable || e.kind === "composer-ai" ? !1 : (this._terminalService.setActiveInstance(t), this._ensureRegularTerminalTabForInstance(t, {
            activate: !0
        }), this._rememberAgentTerminalSelectionForInstance(t), this._host.focusTabWhenReady(this._findRegularTerminalTabId(t.instanceId)), !0);
    }
    _getTerminalResolverServices() {
        return {
            composerTerminalService: this._composerTerminalService,
            ownershipService: this._resourceOwnershipService
        };
    }
    _normalizeTerminalCustomLabel(t) {
        const e = t?.trim();
        return e || void 0;
    }
    _getTerminalCustomLabelForInstance(t, e) {
        return this._normalizeTerminalCustomLabel(e) ?? this._normalizeTerminalCustomLabel(t.staticTitle);
    }
    _applyTerminalCustomLabel(t, e) {
        const n = this._getTerminalCustomLabelForInstance(t, e);
        if (n !== void 0) return t.staticTitle !== n && t.rename(n), n;
    }
    _getResolvedTerminalTabLabel(t, e) {
        return VLn(this._applyTerminalCustomLabel(t, e), t, {
            fallbackLabel: this._manager.definitions[jt.Terminal].defaultLabel,
            truncatePath: !0
        });
    }
    _getTerminalTabProps(t, e = {}) {
        const n = ugv(t, this._getTerminalResolverServices(), this._glassActiveAgentService.getActiveAgentId()), i = this._getTerminalCustomLabelForInstance(t, e.customLabel), r = n ? this._host.terminalWorkspaceTargetForAgent(n)?.key : this._host.getTerminalWorkspaceTarget().key, s = yPt(t);
        return {
            ...s ? {
                terminalPersistenceId: s
            } : {},
            terminalId: t.instanceId,
            ...n ? {
                ownerAgentId: n
            } : {},
            ...i ? {
                customLabel: i
            } : {},
            workspaceGroupKey: r,
            ...this._isAgentControlledTerminal(t) ? {
                agentControlled: !0
            } : {}
        };
    }
    _withTerminalCustomLabel(t, e) {
        const n = this._normalizeTerminalCustomLabel(e);
        if (n === void 0) {
            const { customLabel: i, ...r } = t;
            return r;
        }
        return {
            ...t,
            customLabel: n
        };
    }
    _ensureRegularTerminalTabForInstance(t, e = {}) {
        const n = this._findRegularTerminalTabId(t.instanceId);
        if (n) {
            const i = this._manager.getTab({
                groupId: Ds,
                tabId: n
            }), r = i?.kind === jt.Terminal ? i.props.customLabel : void 0;
            this._manager.replace({
                groupId: Ds,
                tabId: n,
                kind: jt.Terminal,
                props: this._getTerminalTabProps(t, {
                    customLabel: r
                })
            }), this._manager.setLabel({
                groupId: Ds,
                tabId: n,
                label: this._getResolvedTerminalTabLabel(t, r)
            }), e.activate !== !1 && this._manager.setActive({
                groupId: Ds,
                tabId: n,
                force: !0
            });
            return;
        }
        this._manager.push({
            groupId: e.targetGroupId ?? (e.activate !== !1 ? this._host.getNewTabGroupId() : Ds),
            kind: jt.Terminal,
            props: this._getTerminalTabProps(t),
            label: this._getResolvedTerminalTabLabel(t),
            activate: e.activate !== !1,
            ...e.targetIndex !== void 0 ? {
                targetIndex: e.targetIndex
            } : {}
        });
    }
    _isAgentControlledTerminal(t) {
        return yQt(t, this._getTerminalResolverServices()).kind === "agent-exec";
    }
    _getTerminalTabWorkspaceGroupKey(t) {
        if (t.kind !== jt.Terminal) return;
        if (typeof t.props.workspaceGroupKey == "string") return t.props.workspaceGroupKey;
        const e = t.props.terminalId;
        if (typeof e != "number") return;
        const n = this._terminalService.getInstanceFromId(e);
        return n ? RVl(n) : void 0;
    }
    _syncBoundTerminalTabsCustomLabel(t, e) {
        if (this._manager.getGroup(Ds)) {
            for (const n of this._manager.findAllTabsByKind(jt.Terminal, {
                includeUnregisteredStable: !0
            }))if (n.instance.props.terminalId === t && (this._manager.replace({
                groupId: Ds,
                tabId: n.instance.id,
                kind: jt.Terminal,
                props: this._withTerminalCustomLabel(n.instance.props, e)
            }), n.type === "tab")) {
                const i = this._terminalService.getInstanceFromId(t);
                this._manager.setLabel({
                    groupId: Ds,
                    tabId: n.instance.id,
                    label: i !== void 0 ? this._getResolvedTerminalTabLabel(i, e) : e ?? this._manager.definitions[jt.Terminal].defaultLabel
                });
            }
        }
    }
    getRememberedAgentTerminalSelectionsSnapshot() {
        return Object.fromEntries(this._rememberedAgentTerminalSelections);
    }
    setRememberedAgentTerminalSelectionsFromPersistence(t) {
        if (this._rememberedAgentTerminalSelections.clear(), !!t) for (const [e, n] of Object.entries(t)){
            const i = e.trim();
            i && this._rememberedAgentTerminalSelections.set(i, n);
        }
    }
    _rememberAgentTerminalSelectionForInstance(t, e = {}) {
        const n = this._host.normalizeOptionalAgentId(e.ownerAgentId) ?? ugv(t, this._getTerminalResolverServices(), this._glassActiveAgentService.getActiveAgentId());
        if (!n) return;
        const i = e.workspaceGroupKey ?? this._host.terminalWorkspaceTargetForAgent(n)?.key ?? this._host.getTerminalWorkspaceTarget().key, r = this._normalizeTerminalCustomLabel(e.customLabel) ?? this._normalizeTerminalCustomLabel(t.staticTitle), s = zLn(t), o = yPt(t);
        this._setRememberedAgentTerminalSelection(n, {
            terminalId: t.instanceId,
            ...o ? {
                terminalPersistenceId: o
            } : {},
            ...r ? {
                customLabel: r
            } : {},
            ...s ? {
                tmuxSession: s
            } : {},
            ...i ? {
                workspaceGroupKey: i
            } : {}
        });
    }
    _rememberAgentTerminalSelectionForTab(t) {
        const e = t.props.terminalId;
        if (typeof e != "number") return;
        const n = this._terminalService.getInstanceFromId(e);
        if (n) {
            this._rememberAgentTerminalSelectionForInstance(n, {
                customLabel: t.props.customLabel,
                ownerAgentId: t.props.ownerAgentId,
                workspaceGroupKey: t.props.workspaceGroupKey
            });
            return;
        }
        const i = this._host.normalizeOptionalAgentId(t.props.ownerAgentId);
        if (!i) return;
        const r = this._normalizeTerminalCustomLabel(t.props.customLabel);
        this._setRememberedAgentTerminalSelection(i, {
            terminalId: e,
            ...t.props.terminalPersistenceId ? {
                terminalPersistenceId: t.props.terminalPersistenceId
            } : {},
            ...r ? {
                customLabel: r
            } : {},
            ...t.props.workspaceGroupKey ? {
                workspaceGroupKey: t.props.workspaceGroupKey
            } : {}
        });
    }
    forgetAgentTerminalSelectionForTab(t) {
        const e = this._host.normalizeOptionalAgentId(t.props.ownerAgentId);
        if (!e) return;
        const n = this._rememberedAgentTerminalSelections.get(e);
        (n?.terminalId !== void 0 && n.terminalId === t.props.terminalId || n?.terminalPersistenceId !== void 0 && n.terminalPersistenceId === t.props.terminalPersistenceId) && this._deleteRememberedAgentTerminalSelection(e);
    }
    _setRememberedAgentTerminalSelection(t, e) {
        this._rememberedAgentTerminalSelections.set(t, e), this._host.schedulePersist();
    }
    _deleteRememberedAgentTerminalSelection(t) {
        this._rememberedAgentTerminalSelections.delete(t) && this._host.schedulePersist();
    }
    syncRememberedTerminalSelectionForActiveTab(t) {
        const e = this._manager.getTab({
            groupId: Ds,
            tabId: t
        });
        if (!e) return;
        if (e.kind === jt.Terminal) {
            this._rememberAgentTerminalSelectionForTab(e);
            return;
        }
        const n = this._host.getCurrentAgentId();
        this._suppressRememberedTerminalSelectionClearDepth === 0 && !this._host.isRestoring() && n && this._host.isTabVisibleForAgent(e, n) && this._deleteRememberedAgentTerminalSelection(n);
    }
    tryRestoreRememberedAgentTerminal(t) {
        const e = this._rememberedAgentTerminalSelections.get(t);
        if (!e) return !1;
        const n = this._host.terminalWorkspaceTargetForAgent(t)?.key;
        if (e.workspaceGroupKey && n && e.workspaceGroupKey !== n) return this._deleteRememberedAgentTerminalSelection(t), !1;
        if (e.terminalId !== void 0) {
            const s = this._terminalService.getInstanceFromId(e.terminalId);
            if (s && this._canBindTerminalTabToInstance(s)) return this._activateTerminalInstance(s);
        }
        if (e.terminalPersistenceId !== void 0) {
            const s = this._terminalService.instances.find((o)=>yPt(o) === e.terminalPersistenceId);
            if (s && this._canBindTerminalTabToInstance(s)) return this._activateTerminalInstance(s);
        }
        const r = e.tmuxSession;
        return r && this._host.activeAgentBelongsToThisWorkspace() && this._canCreateTerminalForCurrentMachine() && this._host.currentBcId() === r.tmuxBcId ? (this.attachTmuxSession({
            sessionId: r.tmuxSessionId,
            sessionKind: r.tmuxSessionKind,
            sessionName: r.tmuxSessionName,
            ...e.customLabel ? {
                displayName: e.customLabel
            } : {}
        }), !0) : this._tryRestoreExistingCloudUserTmuxSession(t) ? !0 : this._host.isCloud && this._host.activeAgentBelongsToThisWorkspace() && this._canCreateTerminalForCurrentMachine() ? (this.createTerminal(), !0) : !1;
    }
    _tryRestoreExistingCloudUserTmuxSession(t) {
        const e = this._host.currentBcId();
        return !this._host.isCloud || !e || !this._host.activeAgentBelongsToThisWorkspace() || !this._canCreateTerminalForCurrentMachine() ? !1 : this._tryActivateExistingUserTmuxTerminal(e) ? !0 : this._experimentService.checkFeatureGate("cloud_glass_shared_sessions", {
            disableExposureLog: !1
        }) ? (this._attachMostRecentUserTmuxSessionForAgent(t, e).catch(xr), !0) : !1;
    }
    _tryActivateExistingUserTmuxTerminal(t) {
        let e;
        for (const n of this._terminalService.instances){
            const i = zLn(n);
            !i || i.tmuxBcId !== t || i.tmuxSessionKind !== AVe.USER_MANUAL || !this._canBindTerminalTabToInstance(n) || (!e || n.createdAt > e.createdAt) && (e = n);
        }
        return e ? this._activateTerminalInstance(e) : !1;
    }
    async _attachMostRecentUserTmuxSessionForAgent(t, e) {
        const n = await this._tmuxSessionService.listSessions(e), i = this._pickMostRecentUserTmuxSession(n);
        !i || this._glassActiveAgentService.getActiveAgentId() !== t || this._host.currentBcId() !== e || await this.attachTmuxSession({
            sessionId: i.sessionId,
            sessionKind: i.kind,
            sessionName: i.sessionName || i.sessionId,
            ...i.displayName ? {
                displayName: i.displayName
            } : {}
        });
    }
    _pickMostRecentUserTmuxSession(t) {
        let e, n = -1;
        for (const i of t){
            if (i.kind !== AVe.USER_MANUAL || !i.sessionId) continue;
            const r = Number(i.createdAtUnixMs);
            (!e || r > n) && (e = i, n = r);
        }
        return e;
    }
    async confirmBusyTerminalTabClose(t) {
        const e = t.props.terminalId;
        if (typeof e != "number") return !0;
        const n = this._terminalService.getInstanceFromId(e);
        return n ? Ygv({
            kind: "workspace",
            instance: n,
            prettyDialogService: this._prettyDialogService
        }) : !0;
    }
    _shouldDisposeOwnedTerminalResource(t) {
        if (t.agentControlled) return !1;
        const e = this._glassActiveAgentService.getActiveAgentId();
        return t.ownerAgentId === void 0 || t.ownerAgentId === e;
    }
    _disposeTerminalIfUnbound(t) {
        this._manager.findAllTabsByKind(jt.Terminal, {
            includeUnregisteredStable: !0
        }).some((n)=>GfC(t, n.instance.props)) || t.dispose();
    }
    async resetAllTerminalTabs() {
        if (!this._manager.getGroup(Ds)) return;
        const t = this._manager.findAllTabsByKind(jt.Terminal, {
            includeUnregisteredStable: !0
        }).map((e)=>e.instance.id);
        for (const e of t)await this.resetTerminalTab(e);
    }
    async resetTerminalTab(t) {
        const e = this._manager.getTab({
            groupId: Ds,
            tabId: t
        });
        if (e?.kind !== jt.Terminal) return;
        if (!this._canCreateTerminalForCurrentMachine()) {
            this._logService.info("[GlassTerminalTabLifecycleManager] Skipping terminal reset: cloud machine is not connected");
            return;
        }
        const n = e.props.terminalId;
        try {
            const i = await this._terminalService.createTerminal({
                cwd: this._host.workspaceTerminalCwd(),
                location: ny.Panel
            });
            if (this._store.isDisposed) {
                i.dispose();
                return;
            }
            this._resourceOwnershipService.setTerminalOwner(i.instanceId, this._glassActiveAgentService.getActiveAgentId());
            const r = this._manager.getTab({
                groupId: Ds,
                tabId: t
            });
            if (r?.kind !== jt.Terminal || r.props.terminalId !== n) {
                i.dispose();
                return;
            }
            this._manager.replace({
                groupId: Ds,
                tabId: t,
                kind: jt.Terminal,
                props: this._getTerminalTabProps(i, {
                    customLabel: r.props.customLabel
                })
            }), this._manager.setLabel({
                groupId: Ds,
                tabId: t,
                label: this._getResolvedTerminalTabLabel(i, r.props.customLabel)
            }), typeof n == "number" && n !== i.instanceId && this._terminalService.getInstanceFromId(n)?.dispose();
        } catch (i) {
            xr(i);
        }
    }
    _closeTerminalTabBindingWithoutForgetting(t) {
        this._suppressRememberedTerminalSelectionClearDepth++;
        try {
            this._host.closeManagerTab(t);
        } finally{
            this._suppressRememberedTerminalSelectionClearDepth--;
        }
    }
    _syncTerminalTabLabel(t, e) {
        let n = t.instance.props.customLabel;
        if (t.instance.props.agentControlled) {
            const r = this._normalizeTerminalCustomLabel(e.staticTitle);
            r !== n && (n = r, this._manager.replace({
                groupId: Ds,
                tabId: t.instance.id,
                kind: jt.Terminal,
                props: this._withTerminalCustomLabel(t.instance.props, n)
            }));
        }
        const i = this._getResolvedTerminalTabLabel(e, n);
        t.instance.label !== i && this._manager.setLabel({
            groupId: Ds,
            tabId: t.instance.id,
            label: i
        });
    }
    _syncTerminalTabsOnDisposedInstance(t) {
        if (!this._host.isShuttingDown() && (this._resourceOwnershipService.setTerminalOwner(t, void 0), !!this._manager.getGroup(Ds))) for (const e of this._manager.findAllTabsByKind(jt.Terminal, {
            includeUnregisteredStable: !0
        }))e.instance.props.terminalId === t && this._closeTerminalTabBindingWithoutForgetting(e.instance.id);
    }
    _syncTerminalTabTitles(t) {
        if (this._manager.getGroup(Ds)) for (const e of this._manager.findAllTabsByKind(jt.Terminal, {
            includeUnregisteredStable: !0
        }))e.instance.props.terminalId === t.instanceId && this._syncTerminalTabLabel(e, t);
    }
    fullReconcileTerminalTabs() {
        if (this._isPtyConnecting || !this._manager.getGroup(Ds)) return;
        this._disposeTerminalsClosedBeforeRebind();
        const t = this._terminalService.connectionState === ytl.Connected, e = new Map;
        for (const i of this._terminalService.instances){
            const r = yPt(i);
            r !== void 0 && !i.isDisposed && this._canBindTerminalTabToInstance(i) && e.set(r, i);
        }
        const n = new Set;
        for (const i of this._manager.findAllTabsByKind(jt.Terminal, {
            includeUnregisteredStable: !1
        })){
            if (i.type !== "tab") continue;
            const r = i.instance.props.terminalId, s = i.instance.props.terminalPersistenceId, o = typeof s == "string" ? e.get(s) : void 0, a = typeof r == "number" ? this._terminalService.getInstanceFromId(r) : void 0, l = o ?? a;
            if (l !== void 0 && !l.isDisposed && this._canBindTerminalTabToInstance(l)) {
                if (n.has(l.instanceId)) {
                    t && i.instance.id !== this._pendingHorizontalTerminalTabId && this._closeTerminalTabBindingWithoutForgetting(i.instance.id);
                    continue;
                }
                r !== l.instanceId && this._manager.replace({
                    groupId: Ds,
                    tabId: i.instance.id,
                    kind: jt.Terminal,
                    props: this._getTerminalTabProps(l, {
                        customLabel: i.instance.props.customLabel
                    })
                }), n.add(l.instanceId), this._syncTerminalTabLabel(i, l);
                continue;
            }
            if (typeof r != "number") {
                if (i.instance.id === this._pendingHorizontalTerminalTabId || !t) continue;
                this._closeTerminalTabBindingWithoutForgetting(i.instance.id);
                continue;
            }
            t && this._closeTerminalTabBindingWithoutForgetting(i.instance.id);
        }
        if (this._host.isLocal && this._pendingHorizontalTerminalTabId === void 0) for (const i of this._terminalService.instances){
            if (i.isDisposed || n.has(i.instanceId)) continue;
            const r = yQt(i, this._getTerminalResolverServices());
            !r.isBindable || !r.isVisibleInTabBar || (this._ensureRegularTerminalTabForInstance(i, {
                activate: !1
            }), n.add(i.instanceId));
        }
    }
    _disposeTerminalsClosedBeforeRebind() {
        if (this._terminalPersistenceIdsClosedBeforeRebind.size !== 0) for (const t of [
            ...this._terminalService.instances
        ]){
            const e = yPt(t);
            e === void 0 || !this._terminalPersistenceIdsClosedBeforeRebind.delete(e) || t.dispose();
        }
    }
    _canBindTerminalTabToInstance(t) {
        return yQt(t, this._getTerminalResolverServices()).isBindable;
    }
    _trackPtyConnection() {
        let t = !1;
        this._register({
            dispose () {
                t = !0;
            }
        }), this._setPtyConnecting(!0);
        const e = ()=>{
            t || this._finishPtyConnectionWait();
        };
        this._waitForPtyConnectionReadiness().then(e).catch(()=>{
            t || this._setPtyConnecting(!1);
        }), this._terminalService.whenConnected.then(()=>{
            if (t) return;
            const n = this._didTimeoutPtyConnectionWait;
            this._didTimeoutPtyConnectionWait && this._logService.info("[GlassTerminalTabLifecycleManager] terminal pty host reported connected after Glass terminal initialization fallback"), this._finishPtyConnectionWait({
                reconcileEvenIfReady: n
            });
        }).catch(()=>{
            t || this._setPtyConnecting(!1);
        });
    }
    _waitForPtyConnectionReadiness() {
        return this._isPtyConnecting ? (this._ptyConnectionReadinessPromise ??= this._createPtyConnectionReadinessPromise(), this._ptyConnectionReadinessPromise) : Promise.resolve();
    }
    async _createPtyConnectionReadinessPromise() {
        await GcT(this._terminalService.whenConnected, swc) === "timedOut" && (this._didTimeoutPtyConnectionWait = !0, this._logService.warn(`[GlassTerminalTabLifecycleManager] terminal pty host did not report connected after ${swc}ms; continuing Glass terminal initialization`));
    }
    _finishPtyConnectionWait(t) {
        if (!(!this._isPtyConnecting && t?.reconcileEvenIfReady !== !0)) {
            if (this._setPtyConnecting(!1), this._host.isShuttingDown()) {
                this._ptyReconcileSkippedForShutdown = !0;
                return;
            }
            if (this._ptyReconcileSkippedForShutdown = !1, this.fullReconcileTerminalTabs(), this._host.isLocal) {
                const e = this._host.getCurrentAgentId();
                e && this.tryRestoreRememberedAgentTerminal(e);
            }
        }
    }
    resumeReconcileAfterVetoedShutdown() {
        this._ptyReconcileSkippedForShutdown && this._finishPtyConnectionWait({
            reconcileEvenIfReady: !0
        });
    }
    _setPtyConnecting(t) {
        this._isPtyConnecting !== t && (this._isPtyConnecting = t, this._onDidChangePtyConnecting.fire(t));
    }
};

}
