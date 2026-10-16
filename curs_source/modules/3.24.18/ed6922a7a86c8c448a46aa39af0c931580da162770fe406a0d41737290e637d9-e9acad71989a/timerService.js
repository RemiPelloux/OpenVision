import { Dl, Kl, Se, Tw, jn, rn, we } from "./HVr.js";
import { Op, ym } from "./accessibility.js";
import { C, ie } from "./actions_2.js";
import { bn, p3 } from "./async.js";
import { Ar, Eo } from "./cancellation.js";
import { BRc, FRc, LRc, NRc, ORc, QL, So } from "./constants_8.js";
import { Ni, hn } from "./editorService.js";
import { bRo, n3h } from "./extHostStartupTimings.js";
import { Ma, hc } from "./extensions_4.js";
import { Ze } from "./instantiation.js";
import { Bc, Zh } from "./layoutService_2.js";
import { $d, Id } from "./lifecycle_2.js";
import { gt, li } from "./network.js";
import { $I, PC } from "./panecomposite.js";
import { Ngn, vn, wI } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { FD, L6 } from "./update.js";
import { jqt, z8e } from "./webWorkerFactory.js";
import { Jn, ci } from "./workspace.js";
function p3h(e, t) {
    if (!e.startsWith("blob:")) throw new URIError("Not a blob-url: " + e);
    return new Worker(jqt ? jqt.createScriptURL(e) : e, {
        ...t,
        type: "module"
    });
}
function jl_(e) {
    const t = new Map;
    for (const n of e)t.delete(n.name), t.set(n.name, n);
    return [
        ...t.values()
    ];
}
var g3h, f3h, v3h, DLe, _3h, Tnr, qqt, u5n, ERo, xRo, b3h, y3h, Enr;
export { DLe, ERo, Enr, Tnr, _3h, b3h, f3h, g3h, jl_, p3h, qqt, u5n, v3h, xRo, y3h };
var __wakaru_K8e_initialized = false;
export function K8e() {
if (__wakaru_K8e_initialized) return;
__wakaru_K8e_initialized = true;
"use strict";
x(), wI(), li(), So(), Ze(), ci(), hc(), L6(), $d(), Ni(), Op(), bn(), Ar(), Se(), bRo(), Zh(), $I(), jn(), z8e(), g3h = "default", f3h = new Set([
    LRc,
    NRc,
    ORc,
    FRc,
    BRc
]), v3h = class Cz {
    static classify(t) {
        return t.length === 0 ? "none" : t.every(Cz.isLocalBuiltInTextEditor) ? "localBuiltInText" : t.some(Cz.isExtensionContributedEditor) ? "extensionContributed" : t.some(Cz.isComposerEditor) ? "composer" : "nativeNonText";
    }
    static isLocalBuiltInTextEditor(t) {
        return t.modified && t.original ? Cz.isLocalBuiltInTextEditor(t.modified) && Cz.isLocalBuiltInTextEditor(t.original) : t.primary && t.secondary ? Cz.isLocalBuiltInTextEditor(t.primary) && Cz.isLocalBuiltInTextEditor(t.secondary) : t.editorId === g3h && t.resource !== void 0 && Cz.isLocalEditorResource(t.resource);
    }
    static isExtensionContributedEditor(t) {
        return t.modified && t.original ? Cz.isExtensionContributedEditor(t.modified) || Cz.isExtensionContributedEditor(t.original) : t.primary && t.secondary ? Cz.isExtensionContributedEditor(t.primary) || Cz.isExtensionContributedEditor(t.secondary) : t.typeId !== void 0 && f3h.has(t.typeId);
    }
    static isComposerEditor(t) {
        return t.modified && t.original ? Cz.isComposerEditor(t.modified) || Cz.isComposerEditor(t.original) : t.primary && t.secondary ? Cz.isComposerEditor(t.primary) || Cz.isComposerEditor(t.secondary) : t.typeId === QL;
    }
    static isLocalEditorResource(t) {
        return t.scheme === gt.file || t.scheme === gt.untitled;
    }
}, DLe = vn("timerService"), _3h = class {
    constructor(){
        this._entries = [];
    }
    setMarks(e, t) {
        this._entries.push([
            e,
            t
        ]);
    }
    getDuration(e, t) {
        const n = this._findEntry(e);
        if (!n) return 0;
        const i = this._findEntry(t);
        return i ? i.startTime - n.startTime : 0;
    }
    getDurationIfPresent(e, t) {
        const n = this._findEntry(e);
        if (!n) return;
        const i = this._findEntry(t);
        if (i) return i.startTime - n.startTime;
    }
    getStartTime(e) {
        const t = this._findEntry(e);
        return t ? t.startTime : -1;
    }
    getDurationIfPresentForSource(e, t, n) {
        const i = this._findEntryInSource(e, t);
        if (!i) return;
        const r = this._findEntryInSource(e, n);
        if (r) return r.startTime - i.startTime;
    }
    getStartTimeForSource(e, t) {
        const n = this._findEntryInSource(e, t);
        return n ? n.startTime : -1;
    }
    _findEntry(e) {
        for (const [, t] of this._entries)for(let n = t.length - 1; n >= 0; n--)if (t[n].name === e) return t[n];
    }
    _findEntryInSource(e, t) {
        for (const [n, i] of this._entries)if (n === e) {
            for(let r = i.length - 1; r >= 0; r--)if (i[r].name === t) return i[r];
        }
    }
    getEntries() {
        return this._entries.slice(0);
    }
}, Tnr = "glass/willCreateReactRoot", qqt = "glass/didPresentShell", u5n = "glass/didPresentUsableShell", ERo = [
    "ellapsedWorkbenchMainToReactRoot",
    "ellapsedReactRootToShellPresent",
    "ellapsedWorkbenchMainToShellPresent"
], xRo = [
    "ellapsedShellPresentToUsable",
    "ellapsedWorkbenchMainToShellUsable"
], b3h = new Set([
    Tnr,
    qqt,
    u5n
]), y3h = [
    "ellapsedExtHostBoot",
    "ellapsedExtHostBundleLoad",
    "ellapsedExtHostWaitForInit",
    "ellapsedExtHostInit",
    "ellapsedExtHostActivation"
], Enr = class extends we {
    constructor(e, t, n, i, r, s, o, a){
        super(), this._lifecycleService = e, this._contextService = t, this._extensionService = n, this._updateService = i, this._paneCompositeService = r, this._editorService = s, this._accessibilityService = o, this._barrier = new p3, this._startupCancellation = new Eo, this._marks = new _3h, this._terminalBackendReadiness = [], this._extHostTimings = this._register(new n3h(this._marks)), this.onDidObserveExtHostActivationMark = this._extHostTimings.onDidObserveActivationMark, this._register(rn(()=>this._startupCancellation.dispose(!0)));
        const c = e.when(3).then(()=>Promise.all(this._terminalBackendReadiness));
        Tw(Promise.all([
            this._extensionService.whenInstalledExtensionsRegistered(),
            e.when(3),
            a.whenRestored,
            c
        ]), this._startupCancellation.token).then((l)=>{
            if (l !== void 0) return this.setPerformanceMarks("renderer", Ngn()), this._computeStartupMetrics();
        }).then((l)=>{
            l !== void 0 && (this._startupMetrics = l, this._barrier.open());
        }), this.perfBaseline = this._barrier.wait().then(()=>this._lifecycleService.when(4)).then(()=>Kl(this._startupMetrics.timers.ellapsedRequire)).then(()=>{
            const l = (function() {
                let g = !1;
                function f(y) {
                    return g ? 0 : (performance.now() - v >= 1e3 && (g = !0), y <= 2 ? y : f(y - 1) + f(y - 2));
                }
                const v = performance.now();
                f(24);
                const b = Math.round(performance.now() - v);
                self.postMessage({
                    value: g ? -1 : b
                });
            }).toString(), u = new Blob([
                `(${l})();`
            ], {
                type: "application/javascript"
            }), h = URL.createObjectURL(u), p = p3h(h, {
                name: "perfBaseline"
            });
            return new Promise((g)=>{
                p.onmessage = (f)=>g(f.data.value);
            }).finally(()=>{
                p.terminate(), URL.revokeObjectURL(h);
            });
        });
    }
    whenReady() {
        return this._barrier.wait();
    }
    get startupMetrics() {
        if (!this._startupMetrics) throw new Error("illegal state, MUST NOT access startupMetrics before whenReady has resolved");
        return this._startupMetrics;
    }
    registerTerminalBackendReadiness(e) {
        this._terminalBackendReadiness.push(e.catch(()=>{}));
    }
    setPerformanceMarks(e, t) {
        const n = t.filter((i)=>i.name.startsWith("code/") || b3h.has(i.name));
        this._marks.setMarks(e, jl_(n)), this._extHostTimings.observe(e);
    }
    getPerformanceMarks() {
        return this._marks.getEntries();
    }
    getDuration(e, t) {
        return this._marks.getDuration(e, t);
    }
    getStartTime(e) {
        return this._marks.getStartTime(e);
    }
    refreshGlassShellPresentTimers() {
        const e = this._computeGlassShellPresentTimers();
        return this._startupMetrics && Object.assign(this._startupMetrics.timers, e), e;
    }
    refreshGlassShellUsableTimers() {
        const e = this._computeGlassShellUsableTimers();
        return this._startupMetrics && Object.assign(this._startupMetrics.timers, e), e;
    }
    refreshExtHostActivationTimers() {
        const e = this._userHostActivationTimers();
        return this._startupMetrics && Object.assign(this._startupMetrics.timers, e), e;
    }
    getExtHostStartupTimingsByRole() {
        return this._extHostTimings.getTimingsByRole();
    }
    _userHostActivationTimers() {
        const e = this._extHostTimings.getUserHostTimings();
        return {
            ellapsedExtHostBoot: e.boot,
            ellapsedExtHostBundleLoad: e.bundleLoad,
            ellapsedExtHostWaitForInit: e.waitForInit,
            ellapsedExtHostInit: e.init,
            ellapsedExtHostActivation: e.eagerActivation
        };
    }
    async _computeStartupMetrics() {
        const e = this._isInitialStartup();
        let t;
        Dl ? t = "code/timeOrigin" : t = e ? "code/didStartMain" : "code/willOpenNewWindow";
        const n = this._paneCompositeService.getActivePaneComposite(0), i = this._paneCompositeService.getActivePaneComposite(1), r = this._editorService.visibleEditors, s = {
            ellapsed: this._marks.getDuration(t, "code/didStartWorkbench"),
            isLatestVersion: !!await this._updateService.isLatestVersion(),
            didUseCachedData: this._didUseCachedData(),
            windowKind: this._lifecycleService.startupKind,
            windowCount: await this._getWindowCount(),
            viewletId: n?.getId(),
            editorIds: r.map((o)=>o.typeId),
            editorRestoreKind: v3h.classify(r),
            panelId: i ? i.getId() : void 0,
            timers: {
                ellapsedAppReady: e ? this._marks.getDuration("code/didStartMain", "code/mainAppReady") : void 0,
                ellapsedNlsGeneration: e ? this._marks.getDuration("code/willGenerateNls", "code/didGenerateNls") : void 0,
                ellapsedLoadMainBundle: e ? this._marks.getDuration("code/willLoadMainBundle", "code/didLoadMainBundle") : void 0,
                ellapsedRunMainBundle: e ? this._marks.getDuration("code/didStartMain", "code/didRunMainBundle") : void 0,
                ellapsedCrashReporter: e ? this._marks.getDuration("code/willStartCrashReporter", "code/didStartCrashReporter") : void 0,
                ellapsedMainServer: e ? this._marks.getDuration("code/willStartMainServer", "code/didStartMainServer") : void 0,
                ellapsedWindowCreate: e ? this._marks.getDuration("code/willCreateCodeWindow", "code/didCreateCodeWindow") : void 0,
                ellapsedWindowRestoreState: e ? this._marks.getDuration("code/willRestoreCodeWindowState", "code/didRestoreCodeWindowState") : void 0,
                ellapsedBrowserWindowCreate: e ? this._marks.getDuration("code/willCreateCodeBrowserWindow", "code/didCreateCodeBrowserWindow") : void 0,
                ellapsedWindowMaximize: e ? this._marks.getDuration("code/willMaximizeCodeWindow", "code/didMaximizeCodeWindow") : void 0,
                ellapsedWindowLoad: e ? this._marks.getDuration("code/mainAppReady", "code/willOpenNewWindow") : void 0,
                ellapsedMainProcess: e ? this._marks.getDuration("code/didStartMain", "code/willOpenNewWindow") : void 0,
                ellapsedWindowLoadToRequire: this._marks.getDuration("code/willOpenNewWindow", "code/willLoadWorkbenchMain"),
                ellapsedRequire: this._marks.getDuration("code/willLoadWorkbenchMain", "code/didLoadWorkbenchMain"),
                ellapsedWaitForWindowConfig: this._marks.getDuration("code/willWaitForWindowConfig", "code/didWaitForWindowConfig"),
                ellapsedStorageInit: this._marks.getDuration("code/willInitStorage", "code/didInitStorage"),
                ellapsedSharedProcesConnected: this._marks.getDuration("code/willConnectSharedProcess", "code/didConnectSharedProcess"),
                ellapsedWorkspaceServiceInit: this._marks.getDuration("code/willInitWorkspaceService", "code/didInitWorkspaceService"),
                ellapsedRequiredUserDataInit: this._marks.getDuration("code/willInitRequiredUserData", "code/didInitRequiredUserData"),
                ellapsedOtherUserDataInit: this._marks.getDuration("code/willInitOtherUserData", "code/didInitOtherUserData"),
                ellapsedExtensions: this._marks.getDuration("code/willLoadExtensions", "code/didLoadExtensions"),
                ellapsedEditorRestore: this._marks.getDuration("code/willRestoreEditors", "code/didRestoreEditors"),
                ellapsedViewletRestore: this._marks.getDuration("code/willRestoreViewlet", "code/didRestoreViewlet"),
                ellapsedPanelRestore: this._marks.getDuration("code/willRestorePanel", "code/didRestorePanel"),
                ellapsedWorkbenchContributions: this._marks.getDuration("code/willCreateWorkbenchContributions/1", "code/didCreateWorkbenchContributions/2"),
                ellapsedWorkbench: this._marks.getDuration("code/willStartWorkbench", "code/didStartWorkbench"),
                ellapsedExtensionsReady: this._marks.getDuration(t, "code/didLoadExtensions"),
                ellapsedRenderer: this._marks.getDuration("code/didStartRenderer", "code/didStartWorkbench"),
                ellapsedPreWorkbenchServices: this._marks.getDuration("code/didLoadWorkbenchMain", "code/willStartWorkbench"),
                ellapsedLayoutReady: this._marks.getDuration("code/didStartRenderer", "code/didLayoutReady"),
                ellapsedMcpProcessConnected: this._marks.getDuration("code/willConnectMcpProcess", "code/didConnectMcpProcess"),
                ellapsedUserConfigurationInit: this._marks.getDuration("code/willInitUserConfiguration", "code/didInitUserConfiguration"),
                ellapsedWorkspaceConfigurationLoad: this._marks.getDuration("code/willInitWorkspaceConfiguration", "code/didInitWorkspaceConfiguration"),
                ellapsedWorkbenchContributionsStarting: this._marks.getDuration("code/willCreateWorkbenchContributions/1", "code/didCreateWorkbenchContributions/1"),
                ellapsedWorkbenchContributionsReady: this._marks.getDuration("code/willCreateWorkbenchContributions/2", "code/didCreateWorkbenchContributions/2"),
                ellapsedLifecycleStartingToReady: this._marks.getDuration("code/willStartWorkbench", "code/LifecyclePhase/Ready"),
                ellapsedLifecycleReadyToRestored: this._marks.getDuration("code/LifecyclePhase/Ready", "code/LifecyclePhase/Restored"),
                ellapsedEditorGroupsReady: this._marks.getDuration("code/willRestoreEditors", "code/restoreEditors/editorGroupsReady"),
                ellapsedEditorsResolve: this._marks.getDuration("code/restoreEditors/editorGroupsReady", "code/restoreEditors/editorsToOpenResolved"),
                ellapsedEditorsOpen: this._marks.getDuration("code/restoreEditors/editorsToOpenResolved", "code/restoreEditors/editorsOpened"),
                ellapsedDesktopOpenSingleWorkspace: this._marks.getDuration("code/willOpenSingleWorkspace", "code/didOpenSingleWorkspace"),
                ...this._computeGlassShellPresentTimers(),
                ...this._computeGlassShellUsableTimers(),
                ...this._userHostActivationTimers()
            },
            platform: void 0,
            release: void 0,
            arch: void 0,
            totalmem: void 0,
            freemem: void 0,
            meminfo: void 0,
            cpus: void 0,
            loadavg: void 0,
            isVMLikelyhood: void 0,
            initialStartup: e,
            hasAccessibilitySupport: this._accessibilityService.isScreenReaderOptimized(),
            emptyWorkbench: this._contextService.getWorkbenchState() === 1
        };
        return await this._extendStartupInfo(s), s;
    }
    _computeGlassShellPresentTimers() {
        return {
            ellapsedWorkbenchMainToReactRoot: this._marks.getDurationIfPresent("code/willLoadWorkbenchMain", Tnr),
            ellapsedReactRootToShellPresent: this._marks.getDurationIfPresent(Tnr, qqt),
            ellapsedWorkbenchMainToShellPresent: this._marks.getDurationIfPresent("code/willLoadWorkbenchMain", qqt)
        };
    }
    _computeGlassShellUsableTimers() {
        return {
            ellapsedShellPresentToUsable: this._marks.getDurationIfPresent(qqt, u5n),
            ellapsedWorkbenchMainToShellUsable: this._marks.getDurationIfPresent("code/willLoadWorkbenchMain", u5n)
        };
    }
}, Enr = ie([
    C(0, Id),
    C(1, Jn),
    C(2, Ma),
    C(3, FD),
    C(4, PC),
    C(5, hn),
    C(6, ym),
    C(7, Bc)
], Enr);

}
