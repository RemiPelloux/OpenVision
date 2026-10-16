import { m7t } from "./De_3.js";
import { Ai, Ct, He, Oo, S, Se, Ul, Zk, bt, cn, hp, jn, rn, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Cn, qt } from "./configuration.js";
import { lG, yq } from "./configurationResolver.js";
import { en } from "./dom_2.js";
import { Vr, Yi } from "./environmentService.js";
import { F5n, gzt } from "./environmentVariable.js";
import { f9h, nMo } from "./environmentVariableCollection.js";
import { O5n, mzt, nh_ } from "./environmentVariableInfo.js";
import { L5n } from "./environmentVariableShared.js";
import { c0, i8 } from "./history_3.js";
import { Ze, _t } from "./instantiation.js";
import { eh_, l9h } from "./naiveCwdDetectionCapability.js";
import { gt, li } from "./network.js";
import { rt } from "./nls.js";
import { di, ji } from "./notification.js";
import { fu, zl } from "./pathService.js";
import { Jk, e2 } from "./path_2.js";
import { Ka, jo } from "./productService.js";
import { f3, sa } from "./qIc.js";
import { Ip, Kd } from "./remoteAgentService.js";
import { Sse } from "./remoteHosts.js";
import { Kp, Us } from "./severity_2.js";
import { JDo } from "./shellIntegrationAddon.js";
import { dq, ng, r8 } from "./terminal.js";
import { Vqt, b0t } from "./terminalCapabilityStore.js";
import { C8e, zjt } from "./terminalContribExports.js";
import { N5n } from "./terminalEnvironment.js";
import { Dir } from "./terminalEnvironment_2.js";
import { th_, u9h } from "./terminalRecorder.js";
import { l5n } from "./terminalStrings.js";
import { RN, fw } from "./terminal_2.js";
import { hT, lte } from "./terminal_3.js";
import { x } from "./tslib.es6.js";
import { Ee } from "./uri.js";
import { Js, zn } from "./uuid.js";
import { lo, on } from "./window.js";
import { Jn, ci } from "./workspace.js";
function rbe(e, t = {}) {
    let n = "";
    return t.excludeLeadingNewLine || (n += `\r
`), n += "\x1B[0m\x1B[7m * ", t.loudFormatting ? n += "\x1B[0;104m" : n += "\x1B[0m", n += ` ${e} \x1B[0m
\r`, n;
}
function xir(e) {
    return [
        ...e.entries()
    ];
}
function XDo(e) {
    return e ? [
        ...e.entries()
    ] : [];
}
function q5h(e) {
    return Array.from(e.entries()).map((t)=>[
            t[0],
            xir(t[1].map),
            XDo(t[1].descriptionMap)
        ]);
}
function Hd_(e, ...t) {
    const n = t.reduce((s, o)=>(s[o] = !0, s), {}), i = [
        /^ELECTRON_.+$/,
        /^VSCODE_(?!(PORTABLE|SHELL_LOGIN|ENV_REPLACE|ENV_APPEND|ENV_PREPEND)).+$/,
        /^SNAP(|_.*)$/,
        /^GDK_PIXBUF_.+$/
    ];
    Object.keys(e).filter((s)=>!n[s]).forEach((s)=>{
        for(let o = 0; o < i.length; o++)if (s.search(i[o]) !== -1) {
            delete e[s];
            break;
        }
    });
}
function Y5h(e) {
    return !e.strictEnv;
}
function Z5h(e, t) {
    if (t) if (Oo) for(const n in t){
        let i = n;
        for(const s in e)if (n.toLowerCase() === s.toLowerCase()) {
            i = s;
            break;
        }
        const r = t[n];
        r !== void 0 && Q5h(e, i, r);
    }
    else Object.keys(t).forEach((n)=>{
        const i = t[n];
        i !== void 0 && Q5h(e, n, i);
    });
}
function Q5h(e, t, n) {
    typeof n == "string" ? e[t] = n : delete e[t];
}
function Vd_(e, t, n, i) {
    e.TERM_PROGRAM = "vscode", t && (e.TERM_PROGRAM_VERSION = t), jd_(e, i) && (e.LANG = qd_(n)), e.COLORTERM = "truecolor";
}
function J5h(e, t) {
    if (t) for (const n of Object.keys(t)){
        const i = t[n];
        i != null && (e[n] = i);
    }
}
async function e9h(e, t) {
    return await Promise.all(Object.entries(t).map(async ([n, i])=>{
        if (typeof i == "string") try {
            t[n] = await e(i);
        } catch  {
            t[n] = i;
        }
    })), t;
}
function jd_(e, t) {
    if (t === "on") return !0;
    if (t === "auto") {
        const n = e.LANG;
        return !n || n.search(/\.UTF\-8$/) === -1 && n.search(/\.utf8$/) === -1 && n.search(/\.euc.+/) === -1;
    }
    return !1;
}
function qd_(e) {
    const t = e ? e.split("-") : [], n = t.length;
    if (n === 0) return "en_US.UTF-8";
    if (n === 1) {
        const i = {
            af: "ZA",
            am: "ET",
            be: "BY",
            bg: "BG",
            ca: "ES",
            cs: "CZ",
            da: "DK",
            de: "DE",
            el: "GR",
            en: "US",
            es: "ES",
            et: "EE",
            eu: "ES",
            fi: "FI",
            fr: "FR",
            he: "IL",
            hr: "HR",
            hu: "HU",
            hy: "AM",
            is: "IS",
            it: "IT",
            ja: "JP",
            kk: "KZ",
            ko: "KR",
            lt: "LT",
            nl: "NL",
            no: "NO",
            pl: "PL",
            pt: "BR",
            ro: "RO",
            ru: "RU",
            sk: "SK",
            sl: "SI",
            sr: "YU",
            sv: "SE",
            tr: "TR",
            uk: "UA",
            zh: "CN"
        };
        t[0] in i && t.push(i[t[0]]);
    } else t[1] = t[1].toUpperCase();
    return t.join("_") + ".UTF-8";
}
async function zd_(e, t, n, i, r, s) {
    if (e.cwd) {
        const a = typeof e.cwd == "object" ? e.cwd.fsPath : e.cwd, c = await t9h(a, n);
        return JDo(c || a);
    }
    let o;
    return !e.ignoreConfigurationCwd && r && (n && (r = await t9h(r, n, s)), r && (e2(r) ? o = r : i && (o = Jk(i.fsPath, r)))), o || (o = i ? i.fsPath : t || ""), JDo(o);
}
async function t9h(e, t, n) {
    if (t) try {
        return await t(e);
    } catch (i) {
        n?.error("Could not resolve terminal cwd", i);
        return;
    }
    return e;
}
function n9h(e, t, n) {
    if (n) return (i)=>n.resolveWithEnvironment(t, e, i);
}
async function i9h(e, t, n, i, r, s) {
    const o = {};
    if (e.strictEnv) J5h(o, e.env);
    else {
        J5h(o, s);
        const a = {
            ...t
        };
        n && (a && await e9h(n, a), e.env && await e9h(n, e.env)), Ai && (o.VSCODE_NODE_OPTIONS && (o.NODE_OPTIONS = o.VSCODE_NODE_OPTIONS, delete o.VSCODE_NODE_OPTIONS), o.VSCODE_NODE_REPL_EXTERNAL_MODULE && (o.NODE_REPL_EXTERNAL_MODULE = o.VSCODE_NODE_REPL_EXTERNAL_MODULE, delete o.VSCODE_NODE_REPL_EXTERNAL_MODULE)), Hd_(o, "VSCODE_IPC_HOOK_CLI"), Z5h(o, a), Z5h(o, e.env), Vd_(o, i, Zk, r);
    }
    return o;
}
function Rir(e, t, n) {
    const i = typeof e == "string" ? Ee.parse(e) : e;
    let r = i ? t.getWorkspaceFolder(i) ?? void 0 : void 0;
    if (!r) {
        const s = n.getLastActiveWorkspaceRoot();
        r = s ? t.getWorkspaceFolder(s) ?? void 0 : void 0;
    }
    return r;
}
var Oir, v9h, Fir;
export { Fir, Hd_, J5h, Oir, Q5h, Rir, Vd_, XDo, Y5h, Z5h, e9h, i9h, jd_, n9h, q5h, qd_, rbe, t9h, v9h, xir, zd_ };
var __wakaru_rh__initialized = false;
export function rh_() {
if (__wakaru_rh__initialized) return;
__wakaru_rh__initialized = true;
"use strict";
x(), bt(), Se(), li(), jn(), rt(), l5n(), Cn(), Ze(), Ka(), Sse(), eh_(), Vqt(), fw(), th_(), ci(), nh_(), ng(), F5n(), f9h(), L5n(), hT(), Dir(), lG(), Vr(), i8(), fu(), Ip(), Kp(), ji(), Js(), en(), lo(), N5n(), C8e(), Oir = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f, v, b, y, T){
        super(), this._instanceId = e, this._historyService = r, this._instantiationService = s, this._logService = o, this._workspaceContextService = a, this._configurationResolverService = c, this._workbenchEnvironmentService = l, this._productService = u, this._remoteAgentService = h, this._pathService = p, this._environmentVariableService = g, this._terminalConfigurationService = f, this._terminalProfileResolverService = v, this._configurationService = b, this._terminalInstanceService = y, this._notificationService = T, this.processState = 1, this.capabilities = this._register(new b0t), this._isDisposed = !1, this._process = null, this._processType = 0, this._preLaunchInputQueue = [], this._environmentVariableCollectionListener = this._register(new cn), this._hasWrittenData = !1, this._hasChildProcesses = !1, this._ptyResponsiveListener = this._register(new cn), this._ptyListenersAttached = !1, this._processListeners = this._register(new cn), this._isDisconnected = !1, this._dimensions = {
            cols: 0,
            rows: 0
        }, this._onPtyDisconnect = this._register(new ve), this.onPtyDisconnect = this._onPtyDisconnect.event, this._onPtyReconnect = this._register(new ve), this.onPtyReconnect = this._onPtyReconnect.event, this._onProcessReady = this._register(new ve), this.onProcessReady = this._onProcessReady.event, this._onProcessStateChange = this._register(new ve), this.onProcessStateChange = this._onProcessStateChange.event, this._onBeforeProcessData = this._register(new ve), this.onBeforeProcessData = this._onBeforeProcessData.event, this._onProcessData = this._register(new ve), this.onProcessData = this._onProcessData.event, this._onProcessReplayComplete = this._register(new ve), this.onProcessReplayComplete = this._onProcessReplayComplete.event, this._onDidChangeProperty = this._register(new ve), this.onDidChangeProperty = this._onDidChangeProperty.event, this._onEnvironmentVariableInfoChange = this._register(new ve), this.onEnvironmentVariableInfoChanged = this._onEnvironmentVariableInfoChange.event, this._onProcessExit = this._register(new ve), this.onProcessExit = this._onProcessExit.event, this._onRestoreCommands = this._register(new ve), this.onRestoreCommands = this._onRestoreCommands.event, this._cwdWorkspaceFolder = Rir(t, this._workspaceContextService, this._historyService), this.ptyProcessReady = this._createPtyProcessReadyPromise(), this._ackDataBufferer = new v9h((E)=>this._process?.acknowledgeDataEvent(E)), this._dataFilter = this._register(this._instantiationService.createInstance(Fir)), this._register(this._dataFilter.onProcessData((E)=>{
            const R = {
                data: typeof E == "string" ? E : E.data
            };
            this._onBeforeProcessData.fire(R), R.data && R.data.length > 0 && (typeof E != "string" && (E.data = R.data), this._onProcessData.fire(typeof E != "string" ? E : {
                data: R.data,
                trackCommit: !1
            }));
        })), t && typeof t == "object" ? this.remoteAuthority = m7t(t) : this.remoteAuthority = this._workbenchEnvironmentService.remoteAuthority, n && (this._extEnvironmentVariableCollection = new nMo(n), this._environmentVariableCollectionListener.value = this._environmentVariableService.onDidChangeCollections((E)=>this._onEnvironmentVariableCollectionChange(E)), this.environmentVariableInfo = this._instantiationService.createInstance(mzt, this._extEnvironmentVariableCollection), this._onEnvironmentVariableInfoChange.fire(this.environmentVariableInfo)), this.shellIntegrationNonce = i ?? zn();
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
    async freePortKillProcess(e) {
        try {
            this._process?.freePortKillProcess && await this._process?.freePortKillProcess(e);
        } catch (t) {
            this._notificationService.notify({
                message: S(10344, null, e, t),
                severity: Us.Warning
            });
        }
    }
    dispose(e = !1) {
        this._isDisposed = !0, this._processListeners.clear(), this._process && (this._setProcessState(5), this._process.shutdown(e), this._process = null), super.dispose();
    }
    _createPtyProcessReadyPromise() {
        return new Promise((e)=>{
            const t = Ct.once(this.onProcessReady)(()=>{
                this._logService.debug(`Terminal process ready (shellProcessId: ${this.shellProcessId})`), this._store.delete(t), e(void 0);
            });
            this._store.add(t);
        });
    }
    async detachFromProcess(e) {
        await this._process?.detach?.(e), this._process = null;
    }
    async createProcess(e, t, n, i = !0) {
        this._shellLaunchConfig = e, this._dimensions.cols = t, this._dimensions.rows = n;
        let r;
        if (e.customPtyImplementation) this._processType = 1, r = e.customPtyImplementation(this._instanceId, t, n);
        else {
            const a = await this._terminalInstanceService.getBackend(this.remoteAuthority);
            if (!a) throw new Error(`No terminal backend registered for remote authority '${this.remoteAuthority}'`);
            this.backend = a;
            const c = n9h(this._cwdWorkspaceFolder, await this._terminalProfileResolverService.getEnvironment(this.remoteAuthority), this._configurationResolverService);
            if (this.userHome = this._pathService.resolvedUserHome?.fsPath, this.os = hp, this.remoteAuthority) {
                const l = await this._pathService.userHome();
                this.userHome = l.path;
                const u = await this._remoteAgentService.getEnvironment();
                if (!u) throw new Error(`Failed to get remote environment for remote authority "${this.remoteAuthority}"`);
                this.userHome = u.userHome.path, this.os = u.os;
                const h = await this._resolveEnvironment(a, c, e), p = (this._configurationService.getValue("task.reconnection") && e.reconnectionProperties || !e.isFeatureTerminal) && this._terminalConfigurationService.config.enablePersistentSessions && !e.isTransient;
                if (e.attachPersistentProcess) {
                    const g = e.attachPersistentProcess.findRevivedId ? await a.attachToRevivedProcess(e.attachPersistentProcess.id) : await a.attachToProcess(e.attachPersistentProcess.id);
                    g ? r = g : (this._logService.warn("Attach to process failed for terminal", e.attachPersistentProcess), e.attachPersistentProcess = void 0);
                }
                if (!r) {
                    await this._terminalProfileResolverService.resolveShellLaunchConfig(e, {
                        remoteAuthority: this.remoteAuthority,
                        os: this.os
                    });
                    const g = {
                        shellIntegration: {
                            enabled: this._configurationService.getValue("terminal.integrated.shellIntegration.enabled"),
                            suggestEnabled: this._configurationService.getValue(zjt.SuggestEnabled),
                            nonce: this.shellIntegrationNonce
                        },
                        windowsEnableConpty: this._terminalConfigurationService.config.windowsEnableConpty,
                        windowsUseConptyDll: this._terminalConfigurationService.config.windowsUseConptyDll ?? !1,
                        environmentVariableCollections: this._extEnvironmentVariableCollection?.collections ? q5h(this._extEnvironmentVariableCollection.collections) : void 0,
                        workspaceFolder: this._cwdWorkspaceFolder
                    };
                    try {
                        r = await a.createProcess(e, "", t, n, this._terminalConfigurationService.config.unicodeVersion, h, g, p);
                    } catch (f) {
                        if (f?.message === "Could not fetch remote environment") {
                            this._logService.trace("Could not fetch remote environment, silently failing");
                            return;
                        }
                        throw f;
                    }
                }
                this._isDisposed || this._setupPtyHostListeners(a);
            } else {
                if (e.attachPersistentProcess) {
                    const l = e.attachPersistentProcess.findRevivedId ? await a.attachToRevivedProcess(e.attachPersistentProcess.id) : await a.attachToProcess(e.attachPersistentProcess.id);
                    l ? r = l : (this._logService.warn("Attach to process failed for terminal", e.attachPersistentProcess), e.attachPersistentProcess = void 0);
                }
                r || (r = await this._launchLocalProcess(a, e, t, n, this.userHome, c)), this._isDisposed || this._setupPtyHostListeners(a);
            }
        }
        if (this._isDisposed) {
            r.shutdown(!1), r?.dispose?.();
            return;
        }
        this._process = r, this._setProcessState(2), (this.os === Ul.Linux || this.os === Ul.Macintosh) && this.capabilities.add(1, new l9h(this._process)), this._dataFilter.newProcess(this._process, i);
        const s = this._processListeners.value = new He;
        s.add(r.onProcessReady((a)=>{
            this._processTraits = a, this.shellProcessId = a.pid, this._initialCwd = a.cwd, this._onDidChangeProperty.fire({
                type: "initialCwd",
                value: this._initialCwd
            }), this._onProcessReady.fire(a), this._preLaunchInputQueue.length > 0 && this._process && (r.input(this._preLaunchInputQueue.join("")), this._preLaunchInputQueue.length = 0);
        })), s.add(r.onProcessExit((a)=>{
            try {
                this._onExit(a), r?.dispose?.();
            } catch  {}
        })), s.add(r.onDidChangeProperty(({ type: a, value: c })=>{
            switch(a){
                case "hasChildProcesses":
                    this._hasChildProcesses = c;
                    break;
            }
            this._onDidChangeProperty.fire({
                type: a,
                value: c
            });
        })), r.onProcessReplayComplete && s.add(r.onProcessReplayComplete(()=>this._onProcessReplayComplete.fire())), r.onRestoreCommands && s.add(r.onRestoreCommands((a)=>this._onRestoreCommands.fire(a))), setTimeout(()=>{
            this.processState === 2 && this._setProcessState(3);
        }, 500);
        const o = await r.start();
        if (o) return o;
        f3(sa(), ()=>{
            this.backend?.getLatency().then((a)=>{
                this._logService.info(`Latency measurements for ${this.remoteAuthority ?? "local"} backend
${a.map((c)=>`${c.label}: ${c.latency.toFixed(2)}ms`).join(`
`)}`);
            });
        });
    }
    async relaunch(e, t, n, i) {
        return this.ptyProcessReady = this._createPtyProcessReadyPromise(), this._logService.trace(`Relaunching terminal instance ${this._instanceId}`), this._isDisconnected && (this._isDisconnected = !1, this._onPtyReconnect.fire()), this._hasWrittenData = !1, this.createProcess(e, t, n, i);
    }
    async _resolveEnvironment(e, t, n) {
        const i = Rir(n.cwd, this._workspaceContextService, this._historyService), r = Oo ? "windows" : Ai ? "osx" : "linux", s = this._configurationService.getValue(`terminal.integrated.env.${r}`);
        let o;
        n.useShellEnvironment ? o = await e.getShellEnvironment() : o = await this._terminalProfileResolverService.getEnvironment(this.remoteAuthority);
        const a = await i9h(n, s, t, this._productService.version, this._terminalConfigurationService.config.detectLocale, o);
        return this._environmentVariableCollectionListener.clear(), !this._isDisposed && Y5h(n) && (this._extEnvironmentVariableCollection = this._environmentVariableService.mergedCollection, this._environmentVariableCollectionListener.value = this._environmentVariableService.onDidChangeCollections((c)=>this._onEnvironmentVariableCollectionChange(c)), await this._extEnvironmentVariableCollection.applyToProcessEnvironment(a, {
            workspaceFolder: i
        }, t), this._extEnvironmentVariableCollection.getVariableMap({
            workspaceFolder: i
        }).size && (this.environmentVariableInfo = this._instantiationService.createInstance(mzt, this._extEnvironmentVariableCollection), this._onEnvironmentVariableInfoChange.fire(this.environmentVariableInfo))), a;
    }
    async _launchLocalProcess(e, t, n, i, r, s) {
        await this._terminalProfileResolverService.resolveShellLaunchConfig(t, {
            remoteAuthority: void 0,
            os: hp
        });
        const o = this._historyService.getLastActiveWorkspaceRoot(gt.file), a = await zd_(t, r, s, o, this._terminalConfigurationService.config.cwd, this._logService), c = await this._resolveEnvironment(e, s, t), l = {
            shellIntegration: {
                enabled: this._configurationService.getValue("terminal.integrated.shellIntegration.enabled"),
                suggestEnabled: this._configurationService.getValue(zjt.SuggestEnabled),
                nonce: this.shellIntegrationNonce
            },
            windowsEnableConpty: this._terminalConfigurationService.config.windowsEnableConpty,
            windowsUseConptyDll: this._terminalConfigurationService.config.windowsUseConptyDll ?? !1,
            environmentVariableCollections: this._extEnvironmentVariableCollection ? q5h(this._extEnvironmentVariableCollection.collections) : void 0,
            workspaceFolder: this._cwdWorkspaceFolder
        }, u = (this._configurationService.getValue("task.reconnection") && t.reconnectionProperties || !t.isFeatureTerminal) && this._terminalConfigurationService.config.enablePersistentSessions && !t.isTransient;
        return await e.createProcess(t, a, n, i, this._terminalConfigurationService.config.unicodeVersion, c, l, u);
    }
    _setupPtyHostListeners(e) {
        this._ptyListenersAttached || (this._ptyListenersAttached = !0, this._register(e.onPtyHostUnresponsive(()=>{
            this._isDisconnected = !0, this._onPtyDisconnect.fire();
        })), this._ptyResponsiveListener.value = e.onPtyHostResponsive(()=>{
            this._isDisconnected = !1, this._onPtyReconnect.fire();
        }), this._register(e.onPtyHostRestart(async ()=>{
            if (this._isDisconnected || (this._isDisconnected = !0, this._onPtyDisconnect.fire()), this._ptyResponsiveListener.clear(), this._shellLaunchConfig) if (this._shellLaunchConfig.isFeatureTerminal && !this.reconnectionProperties) this._onExit(-1);
            else {
                const t = S(10345, null);
                this._onProcessData.fire({
                    data: rbe(t, {
                        loudFormatting: !0
                    }),
                    trackCommit: !1
                }), await this.relaunch(this._shellLaunchConfig, this._dimensions.cols, this._dimensions.rows, !1);
            }
        })), this._register(rn(()=>{
            this.ptyProcessReady = void 0;
        })));
    }
    async getBackendOS() {
        let e = hp;
        if (this.remoteAuthority) {
            const t = await this._remoteAgentService.getEnvironment();
            if (!t) throw new Error(`Failed to get remote environment for remote authority "${this.remoteAuthority}"`);
            e = t.os;
        }
        return e;
    }
    setDimensions(e, t, n) {
        if (n) {
            this._resize(e, t);
            return;
        }
        if (this._store.isDisposed) return Promise.resolve();
        if (!this.ptyProcessReady) throw new Error("TerminalProcessManager.setDimensions called before initialization");
        return this.ptyProcessReady.then(()=>this._resize(e, t));
    }
    async setUnicodeVersion(e) {
        return this._process?.setUnicodeVersion(e);
    }
    _resize(e, t) {
        if (this._process) {
            try {
                this._process.resize(e, t);
            } catch (n) {
                if (n.code !== "EPIPE" && n.code !== "ERR_IPC_CHANNEL_CLOSED") throw n;
            }
            this._dimensions.cols = e, this._dimensions.rows = t;
        }
    }
    async write(e) {
        await this.ptyProcessReady, this._dataFilter.disableSeamlessRelaunch(), this._hasWrittenData = !0, this.shellProcessId || this._processType === 1 ? this._process && this._process.input(e) : this._preLaunchInputQueue.push(e);
    }
    async sendSignal(e) {
        await this.ptyProcessReady, this._process && this._process.sendSignal(e);
    }
    async processBinary(e) {
        await this.ptyProcessReady, this._dataFilter.disableSeamlessRelaunch(), this._hasWrittenData = !0, this._process?.processBinary(e);
    }
    get initialCwd() {
        return this._initialCwd ?? "";
    }
    async refreshProperty(e) {
        if (!this._process) throw new Error("Cannot refresh property when process is not set");
        return this._process.refreshProperty(e);
    }
    async updateProperty(e, t) {
        return this._process?.updateProperty(e, t);
    }
    acknowledgeDataEvent(e) {
        this._ackDataBufferer.ack(e);
    }
    _onExit(e) {
        this._process = null, this.processState === 2 && this._setProcessState(4), this.processState === 3 && this._setProcessState(6), this._onProcessExit.fire(e);
    }
    _setProcessState(e) {
        this.processState = e, this._onProcessStateChange.fire();
    }
    _onEnvironmentVariableCollectionChange(e) {
        const t = this._extEnvironmentVariableCollection.diff(e, {
            workspaceFolder: this._cwdWorkspaceFolder
        });
        if (t === void 0) {
            this.environmentVariableInfo instanceof O5n && (this.environmentVariableInfo = this._instantiationService.createInstance(mzt, this._extEnvironmentVariableCollection), this._onEnvironmentVariableInfoChange.fire(this.environmentVariableInfo));
            return;
        }
        this.environmentVariableInfo = this._instantiationService.createInstance(O5n, t, this._instanceId, e), this._onEnvironmentVariableInfoChange.fire(this.environmentVariableInfo);
    }
    async clearBuffer() {
        this._process?.clearBuffer?.();
    }
}, Oir = ie([
    C(4, c0),
    C(5, _t),
    C(6, RN),
    C(7, Jn),
    C(8, yq),
    C(9, Yi),
    C(10, jo),
    C(11, Kd),
    C(12, zl),
    C(13, gzt),
    C(14, r8),
    C(15, lte),
    C(16, qt),
    C(17, dq),
    C(18, di)
], Oir), v9h = class {
    constructor(e){
        this._callback = e, this._unsentCharCount = 0;
    }
    ack(e) {
        for(this._unsentCharCount += e; this._unsentCharCount > 5e3;)this._unsentCharCount -= 5e3, this._callback(5e3);
    }
}, Fir = class extends we {
    constructor(e){
        super(), this._logService = e, this._firstDisposable = this._register(new cn), this._secondDisposable = this._register(new cn), this._dataListener = this._register(new cn), this._disableSeamlessRelaunch = !1, this._onProcessData = this._register(new ve);
    }
    get onProcessData() {
        return this._onProcessData.event;
    }
    newProcess(e, t) {
        if (this._dataListener.clear(), this._activeProcess?.shutdown(!1), this._activeProcess = e, !this._firstRecorder || !t || this._disableSeamlessRelaunch) {
            [this._firstRecorder, this._firstDisposable.value] = this._createRecorder(e), this._disableSeamlessRelaunch && t && this._onProcessData.fire("\x1Bc"), this._dataListener.value = e.onProcessData((n)=>this._onProcessData.fire(n)), this._disableSeamlessRelaunch = !1;
            return;
        }
        this._secondRecorder && this.triggerSwap(), this._swapTimeout = on.setTimeout(()=>this.triggerSwap(), 3e3), this._dataListener.clear(), this._firstDisposable.clear(), [this._secondRecorder, this._secondDisposable.value] = this._createRecorder(e);
    }
    disableSeamlessRelaunch() {
        this._disableSeamlessRelaunch = !0, this._stopRecording(), this.triggerSwap();
    }
    triggerSwap() {
        if (this._swapTimeout && (on.clearTimeout(this._swapTimeout), this._swapTimeout = void 0), !this._firstRecorder) return;
        if (!this._secondRecorder) {
            this._firstRecorder = void 0, this._firstDisposable.clear();
            return;
        }
        const e = this._getDataFromRecorder(this._firstRecorder), t = this._getDataFromRecorder(this._secondRecorder);
        e === t ? this._logService.trace("Seamless terminal relaunch - identical content") : (this._logService.trace("Seamless terminal relaunch - resetting content"), this._onProcessData.fire({
            data: `\x1Bc${t}`,
            trackCommit: !1
        })), this._dataListener.value = this._activeProcess.onProcessData((n)=>this._onProcessData.fire(n)), this._firstRecorder = this._secondRecorder, this._firstDisposable.value = this._secondDisposable.clearAndLeak(), this._secondRecorder = void 0;
    }
    dispose() {
        this._swapTimeout && (on.clearTimeout(this._swapTimeout), this._swapTimeout = void 0), this._dataListener.clear(), this._firstDisposable.clear(), this._secondDisposable.clear(), this._activeProcess = void 0, super.dispose();
    }
    _stopRecording() {
        this._swapTimeout || (this._firstRecorder = void 0, this._firstDisposable.clear(), this._secondRecorder = void 0, this._secondDisposable.clear());
    }
    _createRecorder(e) {
        const t = new u9h(0, 0), n = e.onProcessData((i)=>t.handleData(typeof i == "string" ? i : i.data));
        return [
            t,
            n
        ];
    }
    _getDataFromRecorder(e) {
        return e.generateReplayEventSync().events.filter((t)=>!!t.data).map((t)=>t.data).join("");
    }
}, Fir = ie([
    C(0, RN)
], Fir);

}
