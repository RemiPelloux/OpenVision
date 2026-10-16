import { D, Di, Gt, Hg, Nt, Pn, Qe, Vn, _r, en, rd, st, tt, xa } from "./Iwo.js";
import { C2g, I2g, L2g, N2g, Yds, eDk, w9e } from "./Ycg.js";
import { or, yi } from "./configuration.js";
import { ime, wle } from "./configurationResolver.js";
import { Hn } from "./dom_2.js";
import { fo, ps } from "./environmentService.js";
import { $Ai, w2n } from "./environmentVariable.js";
import { Dvl, V2g } from "./environmentVariableCollection.js";
import { jAi, k2n, uDk } from "./environmentVariableInfo.js";
import { BAi } from "./environmentVariableShared.js";
import { hV, sI } from "./history_3.js";
import { It, dn } from "./instantiation.js";
import { Q0n } from "./ipa.js";
import { j2g, lDk } from "./naiveCwdDetectionCapability.js";
import { Ki, Ot } from "./network.js";
import { Bt } from "./nls.js";
import { Ks, Wr } from "./notification.js";
import { Rd, ih } from "./pathService.js";
import { fc, hu } from "./productService.js";
import { Nh, Sg } from "./remoteAgentService.js";
import { epe } from "./remoteHosts.js";
import { Ua, ob } from "./severity_2.js";
import { LJ, Mv, NJ } from "./terminal.js";
import { dAi, uAi } from "./terminalCapabilityStore.js";
import { GAn, Nat } from "./terminalContribExports.js";
import { UAi } from "./terminalEnvironment.js";
import { Xds } from "./terminalEnvironment_2.js";
import { $2g, cDk } from "./terminalRecorder.js";
import { Kus } from "./terminalStrings.js";
import { UC, Z4 } from "./terminal_2.js";
import { JCe, bR } from "./terminal_3.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ai, Xo } from "./uuid_2.js";
import { $t, Bs } from "./window.js";
import { Sr, yr } from "./workspace.js";
import { rl, y7 } from "./ze.js";
var ths, K2g, nhs;
export { K2g, nhs, ths };
var __wakaru_hDk_initialized = false;
export function hDk() {
if (__wakaru_hDk_initialized) return;
__wakaru_hDk_initialized = true;
"use strict";
E(), Gt(), Qe(), Ki(), Di(), Bt(), Kus(), or(), It(), hu(), epe(), lDk(), dAi(), UC(), cDk(), Sr(), uDk(), Mv(), $Ai(), V2g(), BAi(), bR(), Xds(), wle(), fo(), hV(), ih(), Sg(), ob(), Ks(), Xo(), Hn(), Bs(), UAi(), Nat(), ths = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y){
        super(), this._instanceId = t, this._historyService = r, this._instantiationService = s, this._logService = o, this._workspaceContextService = a, this._configurationResolverService = l, this._workbenchEnvironmentService = c, this._productService = u, this._remoteAgentService = d, this._pathService = h, this._environmentVariableService = p, this._terminalConfigurationService = g, this._terminalProfileResolverService = f, this._configurationService = _, this._terminalInstanceService = b, this._notificationService = y, this.processState = 1, this.capabilities = this._register(new uAi), this._isDisposed = !1, this._process = null, this._processType = 0, this._preLaunchInputQueue = [], this._environmentVariableCollectionListener = this._register(new Vn), this._hasWrittenData = !1, this._hasChildProcesses = !1, this._ptyResponsiveListener = this._register(new Vn), this._ptyListenersAttached = !1, this._processListeners = this._register(new Vn), this._isDisconnected = !1, this._dimensions = {
            cols: 0,
            rows: 0
        }, this._onPtyDisconnect = this._register(new tt), this.onPtyDisconnect = this._onPtyDisconnect.event, this._onPtyReconnect = this._register(new tt), this.onPtyReconnect = this._onPtyReconnect.event, this._onProcessReady = this._register(new tt), this.onProcessReady = this._onProcessReady.event, this._onProcessStateChange = this._register(new tt), this.onProcessStateChange = this._onProcessStateChange.event, this._onBeforeProcessData = this._register(new tt), this.onBeforeProcessData = this._onBeforeProcessData.event, this._onProcessData = this._register(new tt), this.onProcessData = this._onProcessData.event, this._onProcessReplayComplete = this._register(new tt), this.onProcessReplayComplete = this._onProcessReplayComplete.event, this._onDidChangeProperty = this._register(new tt), this.onDidChangeProperty = this._onDidChangeProperty.event, this._onEnvironmentVariableInfoChange = this._register(new tt), this.onEnvironmentVariableInfoChanged = this._onEnvironmentVariableInfoChange.event, this._onProcessExit = this._register(new tt), this.onProcessExit = this._onProcessExit.event, this._onRestoreCommands = this._register(new tt), this.onRestoreCommands = this._onRestoreCommands.event, this._cwdWorkspaceFolder = Yds(e, this._workspaceContextService, this._historyService), this.ptyProcessReady = this._createPtyProcessReadyPromise(), this._ackDataBufferer = new K2g((S)=>this._process?.acknowledgeDataEvent(S)), this._dataFilter = this._register(this._instantiationService.createInstance(nhs)), this._register(this._dataFilter.onProcessData((S)=>{
            const C = {
                data: typeof S == "string" ? S : S.data
            };
            this._onBeforeProcessData.fire(C), C.data && C.data.length > 0 && (typeof S != "string" && (S.data = C.data), this._onProcessData.fire(typeof S != "string" ? S : {
                data: C.data,
                trackCommit: !1
            }));
        })), e && typeof e == "object" ? this.remoteAuthority = Q0n(e) : this.remoteAuthority = this._workbenchEnvironmentService.remoteAuthority, n && (this._extEnvironmentVariableCollection = new Dvl(n), this._environmentVariableCollectionListener.value = this._environmentVariableService.onDidChangeCollections((S)=>this._onEnvironmentVariableCollectionChange(S)), this.environmentVariableInfo = this._instantiationService.createInstance(k2n, this._extEnvironmentVariableCollection), this._onEnvironmentVariableInfoChange.fire(this.environmentVariableInfo)), this.shellIntegrationNonce = i ?? Ai();
    }
    get persistentProcessId() {
        return this._process?.id;
    }
    get shouldPersist() {
        return !!this.reconnectionProperties || (this._process ? this._process.shouldPersist : !1);
    }
    get hasWrittenData() {
        return this._hasWrittenData;
    }
    get hasChildProcesses() {
        return this._hasChildProcesses;
    }
    get reconnectionProperties() {
        return this._shellLaunchConfig?.attachPersistentProcess?.reconnectionProperties || this._shellLaunchConfig?.reconnectionProperties || void 0;
    }
    get extEnvironmentVariableCollection() {
        return this._extEnvironmentVariableCollection;
    }
    get processTraits() {
        return this._processTraits;
    }
    async freePortKillProcess(t) {
        try {
            this._process?.freePortKillProcess && await this._process?.freePortKillProcess(t);
        } catch (e) {
            this._notificationService.notify({
                message: D(10344, null, t, e),
                severity: Ua.Warning
            });
        }
    }
    dispose(t = !1) {
        this._isDisposed = !0, this._processListeners.clear(), this._process && (this._setProcessState(5), this._process.shutdown(t), this._process = null), super.dispose();
    }
    _createPtyProcessReadyPromise() {
        return new Promise((t)=>{
            const e = en.once(this.onProcessReady)(()=>{
                this._logService.debug(`Terminal process ready (shellProcessId: ${this.shellProcessId})`), this._store.delete(e), t(void 0);
            });
            this._store.add(e);
        });
    }
    async detachFromProcess(t) {
        await this._process?.detach?.(t), this._process = null;
    }
    async createProcess(t, e, n, i = !0) {
        this._shellLaunchConfig = t, this._dimensions.cols = e, this._dimensions.rows = n;
        let r;
        if (t.customPtyImplementation) this._processType = 1, r = t.customPtyImplementation(this._instanceId, e, n);
        else {
            const a = await this._terminalInstanceService.getBackend(this.remoteAuthority);
            if (!a) throw new Error(`No terminal backend registered for remote authority '${this.remoteAuthority}'`);
            this.backend = a;
            const l = N2g(this._cwdWorkspaceFolder, await this._terminalProfileResolverService.getEnvironment(this.remoteAuthority), this._configurationResolverService);
            if (this.userHome = this._pathService.resolvedUserHome?.fsPath, this.os = Hg, this.remoteAuthority) {
                const c = await this._pathService.userHome();
                this.userHome = c.path;
                const u = await this._remoteAgentService.getEnvironment();
                if (!u) throw new Error(`Failed to get remote environment for remote authority "${this.remoteAuthority}"`);
                this.userHome = u.userHome.path, this.os = u.os;
                const d = await this._resolveEnvironment(a, l, t), h = (this._configurationService.getValue("task.reconnection") && t.reconnectionProperties || !t.isFeatureTerminal) && this._terminalConfigurationService.config.enablePersistentSessions && !t.isTransient;
                if (t.attachPersistentProcess) {
                    const p = t.attachPersistentProcess.findRevivedId ? await a.attachToRevivedProcess(t.attachPersistentProcess.id) : await a.attachToProcess(t.attachPersistentProcess.id);
                    p ? r = p : (this._logService.warn("Attach to process failed for terminal", t.attachPersistentProcess), t.attachPersistentProcess = void 0);
                }
                if (!r) {
                    await this._terminalProfileResolverService.resolveShellLaunchConfig(t, {
                        remoteAuthority: this.remoteAuthority,
                        os: this.os
                    });
                    const p = {
                        shellIntegration: {
                            enabled: this._configurationService.getValue("terminal.integrated.shellIntegration.enabled"),
                            suggestEnabled: this._configurationService.getValue(GAn.SuggestEnabled),
                            nonce: this.shellIntegrationNonce
                        },
                        windowsEnableConpty: this._terminalConfigurationService.config.windowsEnableConpty,
                        windowsUseConptyDll: this._terminalConfigurationService.config.windowsUseConptyDll ?? !1,
                        environmentVariableCollections: this._extEnvironmentVariableCollection?.collections ? C2g(this._extEnvironmentVariableCollection.collections) : void 0,
                        workspaceFolder: this._cwdWorkspaceFolder
                    };
                    try {
                        r = await a.createProcess(t, "", e, n, this._terminalConfigurationService.config.unicodeVersion, d, p, h);
                    } catch (g) {
                        if (g?.message === "Could not fetch remote environment") {
                            this._logService.trace("Could not fetch remote environment, silently failing");
                            return;
                        }
                        throw g;
                    }
                }
                this._isDisposed || this._setupPtyHostListeners(a);
            } else {
                if (t.attachPersistentProcess) {
                    const c = t.attachPersistentProcess.findRevivedId ? await a.attachToRevivedProcess(t.attachPersistentProcess.id) : await a.attachToProcess(t.attachPersistentProcess.id);
                    c ? r = c : (this._logService.warn("Attach to process failed for terminal", t.attachPersistentProcess), t.attachPersistentProcess = void 0);
                }
                r || (r = await this._launchLocalProcess(a, t, e, n, this.userHome, l)), this._isDisposed || this._setupPtyHostListeners(a);
            }
        }
        if (this._isDisposed) {
            r.shutdown(!1), r?.dispose?.();
            return;
        }
        this._process = r, this._setProcessState(2), (this.os === rd.Linux || this.os === rd.Macintosh) && this.capabilities.add(1, new j2g(this._process)), this._dataFilter.newProcess(this._process, i);
        const s = this._processListeners.value = new Nt;
        s.add(r.onProcessReady((a)=>{
            this._processTraits = a, this.shellProcessId = a.pid, this._initialCwd = a.cwd, this._onDidChangeProperty.fire({
                type: "initialCwd",
                value: this._initialCwd
            }), this._onProcessReady.fire(a), this._preLaunchInputQueue.length > 0 && this._process && (r.input(this._preLaunchInputQueue.join("")), this._preLaunchInputQueue.length = 0);
        })), s.add(r.onProcessExit((a)=>{
            try {
                this._onExit(a), r?.dispose?.();
            } catch  {}
        })), s.add(r.onDidChangeProperty(({ type: a, value: l })=>{
            switch(a){
                case "hasChildProcesses":
                    this._hasChildProcesses = l;
                    break;
            }
            this._onDidChangeProperty.fire({
                type: a,
                value: l
            });
        })), r.onProcessReplayComplete && s.add(r.onProcessReplayComplete(()=>this._onProcessReplayComplete.fire())), r.onRestoreCommands && s.add(r.onRestoreCommands((a)=>this._onRestoreCommands.fire(a))), setTimeout(()=>{
            this.processState === 2 && this._setProcessState(3);
        }, 500);
        const o = await r.start();
        if (o) return o;
        y7(rl(), ()=>{
            this.backend?.getLatency().then((a)=>{
                this._logService.info(`Latency measurements for ${this.remoteAuthority ?? "local"} backend
${a.map((l)=>`${l.label}: ${l.latency.toFixed(2)}ms`).join(`
`)}`);
            });
        });
    }
    async relaunch(t, e, n, i) {
        return this.ptyProcessReady = this._createPtyProcessReadyPromise(), this._logService.trace(`Relaunching terminal instance ${this._instanceId}`), this._isDisconnected && (this._isDisconnected = !1, this._onPtyReconnect.fire()), this._hasWrittenData = !1, this.createProcess(t, e, n, i);
    }
    async _resolveEnvironment(t, e, n) {
        const i = Yds(n.cwd, this._workspaceContextService, this._historyService), r = xa ? "windows" : _r ? "osx" : "linux", s = this._configurationService.getValue(`terminal.integrated.env.${r}`);
        let o;
        n.useShellEnvironment ? o = await t.getShellEnvironment() : o = await this._terminalProfileResolverService.getEnvironment(this.remoteAuthority);
        const a = await L2g(n, s, e, this._productService.version, this._terminalConfigurationService.config.detectLocale, o);
        return this._environmentVariableCollectionListener.clear(), !this._isDisposed && I2g(n) && (this._extEnvironmentVariableCollection = this._environmentVariableService.mergedCollection, this._environmentVariableCollectionListener.value = this._environmentVariableService.onDidChangeCollections((l)=>this._onEnvironmentVariableCollectionChange(l)), await this._extEnvironmentVariableCollection.applyToProcessEnvironment(a, {
            workspaceFolder: i
        }, e), this._extEnvironmentVariableCollection.getVariableMap({
            workspaceFolder: i
        }).size && (this.environmentVariableInfo = this._instantiationService.createInstance(k2n, this._extEnvironmentVariableCollection), this._onEnvironmentVariableInfoChange.fire(this.environmentVariableInfo))), a;
    }
    async _launchLocalProcess(t, e, n, i, r, s) {
        await this._terminalProfileResolverService.resolveShellLaunchConfig(e, {
            remoteAuthority: void 0,
            os: Hg
        });
        const o = this._historyService.getLastActiveWorkspaceRoot(Ot.file), a = await eDk(e, r, s, o, this._terminalConfigurationService.config.cwd, this._logService), l = await this._resolveEnvironment(t, s, e), c = {
            shellIntegration: {
                enabled: this._configurationService.getValue("terminal.integrated.shellIntegration.enabled"),
                suggestEnabled: this._configurationService.getValue(GAn.SuggestEnabled),
                nonce: this.shellIntegrationNonce
            },
            windowsEnableConpty: this._terminalConfigurationService.config.windowsEnableConpty,
            windowsUseConptyDll: this._terminalConfigurationService.config.windowsUseConptyDll ?? !1,
            environmentVariableCollections: this._extEnvironmentVariableCollection ? C2g(this._extEnvironmentVariableCollection.collections) : void 0,
            workspaceFolder: this._cwdWorkspaceFolder
        }, u = (this._configurationService.getValue("task.reconnection") && e.reconnectionProperties || !e.isFeatureTerminal) && this._terminalConfigurationService.config.enablePersistentSessions && !e.isTransient;
        return await t.createProcess(e, a, n, i, this._terminalConfigurationService.config.unicodeVersion, l, c, u);
    }
    _setupPtyHostListeners(t) {
        this._ptyListenersAttached || (this._ptyListenersAttached = !0, this._register(t.onPtyHostUnresponsive(()=>{
            this._isDisconnected = !0, this._onPtyDisconnect.fire();
        })), this._ptyResponsiveListener.value = t.onPtyHostResponsive(()=>{
            this._isDisconnected = !1, this._onPtyReconnect.fire();
        }), this._register(t.onPtyHostRestart(async ()=>{
            if (this._isDisconnected || (this._isDisconnected = !0, this._onPtyDisconnect.fire()), this._ptyResponsiveListener.clear(), this._shellLaunchConfig) if (this._shellLaunchConfig.isFeatureTerminal && !this.reconnectionProperties) this._onExit(-1);
            else {
                const e = D(10345, null);
                this._onProcessData.fire({
                    data: w9e(e, {
                        loudFormatting: !0
                    }),
                    trackCommit: !1
                }), await this.relaunch(this._shellLaunchConfig, this._dimensions.cols, this._dimensions.rows, !1);
            }
        })), this._register(Pn(()=>{
            this.ptyProcessReady = void 0;
        })));
    }
    async getBackendOS() {
        let t = Hg;
        if (this.remoteAuthority) {
            const e = await this._remoteAgentService.getEnvironment();
            if (!e) throw new Error(`Failed to get remote environment for remote authority "${this.remoteAuthority}"`);
            t = e.os;
        }
        return t;
    }
    setDimensions(t, e, n) {
        if (n) {
            this._resize(t, e);
            return;
        }
        if (this._store.isDisposed) return Promise.resolve();
        if (!this.ptyProcessReady) throw new Error("TerminalProcessManager.setDimensions called before initialization");
        return this.ptyProcessReady.then(()=>this._resize(t, e));
    }
    async setUnicodeVersion(t) {
        return this._process?.setUnicodeVersion(t);
    }
    _resize(t, e) {
        if (this._process) {
            try {
                this._process.resize(t, e);
            } catch (n) {
                if (n.code !== "EPIPE" && n.code !== "ERR_IPC_CHANNEL_CLOSED") throw n;
            }
            this._dimensions.cols = t, this._dimensions.rows = e;
        }
    }
    async write(t) {
        await this.ptyProcessReady, this._dataFilter.disableSeamlessRelaunch(), this._hasWrittenData = !0, this.shellProcessId || this._processType === 1 ? this._process && this._process.input(t) : this._preLaunchInputQueue.push(t);
    }
    async sendSignal(t) {
        await this.ptyProcessReady, this._process && this._process.sendSignal(t);
    }
    async processBinary(t) {
        await this.ptyProcessReady, this._dataFilter.disableSeamlessRelaunch(), this._hasWrittenData = !0, this._process?.processBinary(t);
    }
    get initialCwd() {
        return this._initialCwd ?? "";
    }
    async refreshProperty(t) {
        if (!this._process) throw new Error("Cannot refresh property when process is not set");
        return this._process.refreshProperty(t);
    }
    async updateProperty(t, e) {
        return this._process?.updateProperty(t, e);
    }
    acknowledgeDataEvent(t) {
        this._ackDataBufferer.ack(t);
    }
    _onExit(t) {
        this._process = null, this.processState === 2 && this._setProcessState(4), this.processState === 3 && this._setProcessState(6), this._onProcessExit.fire(t);
    }
    _setProcessState(t) {
        this.processState = t, this._onProcessStateChange.fire();
    }
    _onEnvironmentVariableCollectionChange(t) {
        const e = this._extEnvironmentVariableCollection.diff(t, {
            workspaceFolder: this._cwdWorkspaceFolder
        });
        if (e === void 0) {
            this.environmentVariableInfo instanceof jAi && (this.environmentVariableInfo = this._instantiationService.createInstance(k2n, this._extEnvironmentVariableCollection), this._onEnvironmentVariableInfoChange.fire(this.environmentVariableInfo));
            return;
        }
        this.environmentVariableInfo = this._instantiationService.createInstance(jAi, e, this._instanceId, t), this._onEnvironmentVariableInfoChange.fire(this.environmentVariableInfo);
    }
    async clearBuffer() {
        this._process?.clearBuffer?.();
    }
}, ths = Re([
    F(4, sI),
    F(5, dn),
    F(6, Z4),
    F(7, yr),
    F(8, ime),
    F(9, ps),
    F(10, fc),
    F(11, Nh),
    F(12, Rd),
    F(13, w2n),
    F(14, NJ),
    F(15, JCe),
    F(16, yi),
    F(17, LJ),
    F(18, Wr)
], ths), K2g = class {
    constructor(t){
        this._callback = t, this._unsentCharCount = 0;
    }
    ack(t) {
        for(this._unsentCharCount += t; this._unsentCharCount > 5e3;)this._unsentCharCount -= 5e3, this._callback(5e3);
    }
}, nhs = class extends st {
    constructor(t){
        super(), this._logService = t, this._firstDisposable = this._register(new Vn), this._secondDisposable = this._register(new Vn), this._dataListener = this._register(new Vn), this._disableSeamlessRelaunch = !1, this._onProcessData = this._register(new tt);
    }
    get onProcessData() {
        return this._onProcessData.event;
    }
    newProcess(t, e) {
        if (this._dataListener.clear(), this._activeProcess?.shutdown(!1), this._activeProcess = t, !this._firstRecorder || !e || this._disableSeamlessRelaunch) {
            [this._firstRecorder, this._firstDisposable.value] = this._createRecorder(t), this._disableSeamlessRelaunch && e && this._onProcessData.fire("\x1Bc"), this._dataListener.value = t.onProcessData((n)=>this._onProcessData.fire(n)), this._disableSeamlessRelaunch = !1;
            return;
        }
        this._secondRecorder && this.triggerSwap(), this._swapTimeout = $t.setTimeout(()=>this.triggerSwap(), 3e3), this._dataListener.clear(), this._firstDisposable.clear(), [this._secondRecorder, this._secondDisposable.value] = this._createRecorder(t);
    }
    disableSeamlessRelaunch() {
        this._disableSeamlessRelaunch = !0, this._stopRecording(), this.triggerSwap();
    }
    triggerSwap() {
        if (this._swapTimeout && ($t.clearTimeout(this._swapTimeout), this._swapTimeout = void 0), !this._firstRecorder) return;
        if (!this._secondRecorder) {
            this._firstRecorder = void 0, this._firstDisposable.clear();
            return;
        }
        const t = this._getDataFromRecorder(this._firstRecorder), e = this._getDataFromRecorder(this._secondRecorder);
        t === e ? this._logService.trace("Seamless terminal relaunch - identical content") : (this._logService.trace("Seamless terminal relaunch - resetting content"), this._onProcessData.fire({
            data: `\x1Bc${e}`,
            trackCommit: !1
        })), this._dataListener.value = this._activeProcess.onProcessData((n)=>this._onProcessData.fire(n)), this._firstRecorder = this._secondRecorder, this._firstDisposable.value = this._secondDisposable.clearAndLeak(), this._secondRecorder = void 0;
    }
    dispose() {
        this._swapTimeout && ($t.clearTimeout(this._swapTimeout), this._swapTimeout = void 0), this._dataListener.clear(), this._firstDisposable.clear(), this._secondDisposable.clear(), this._activeProcess = void 0, super.dispose();
    }
    _stopRecording() {
        this._swapTimeout || (this._firstRecorder = void 0, this._firstDisposable.clear(), this._secondRecorder = void 0, this._secondDisposable.clear());
    }
    _createRecorder(t) {
        const e = new $2g(0, 0), n = t.onProcessData((i)=>e.handleData(typeof i == "string" ? i : i.data));
        return [
            e,
            n
        ];
    }
    _getDataFromRecorder(t) {
        return t.generateReplayEventSync().events.filter((e)=>!!e.data).map((e)=>e.data).join("");
    }
}, nhs = Re([
    F(0, Z4)
], nhs);

}
