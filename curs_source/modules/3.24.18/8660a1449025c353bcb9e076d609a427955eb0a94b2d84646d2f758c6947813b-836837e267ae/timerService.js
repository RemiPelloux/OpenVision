import { Di, Pn, Qe, Wd, st, th, yx } from "./Iwo.js";
import { Fdn, jn, mP } from "./SZu.js";
import { M2k, cfl } from "./Ycg.js";
import { GS, Ty } from "./accessibility.js";
import { c7, qn } from "./async.js";
import { El, yo } from "./cancellation.js";
import { XF, aud, iud, oud, pa, rud, sud } from "./constants_8.js";
import { Wo, gr } from "./editorService.js";
import { Nxg, rfl } from "./extHostStartupTimings.js";
import { id, ld } from "./extensions_4.js";
import { It } from "./instantiation.js";
import { Id, Pv } from "./layoutService_2.js";
import { Fp, zp } from "./lifecycle_2.js";
import { Ki, Ot } from "./network.js";
import { GB, VO } from "./panecomposite.js";
import { E } from "./tslib.es6.js";
import { SL, d$ } from "./update.js";
import { F, Re } from "./userDataProfile.js";
import { C9e } from "./webWorkerFactory.js";
import { Sr, yr } from "./workspace.js";
var Kxg, Yxg, Xxg, hVe, Zxg, n2n, aye, T9e, hfl, pfl, Qxg, Jxg, Xus;
export { Jxg, Kxg, Qxg, T9e, Xus, Xxg, Yxg, Zxg, aye, hVe, hfl, n2n, pfl };
var __wakaru_E9e_initialized = false;
export function E9e() {
if (__wakaru_E9e_initialized) return;
__wakaru_E9e_initialized = true;
"use strict";
E(), mP(), Ki(), pa(), It(), Sr(), ld(), d$(), zp(), Wo(), Ty(), qn(), yo(), Qe(), rfl(), Pv(), GB(), Di(), C9e(), Kxg = "default", Yxg = new Set([
    iud,
    rud,
    sud,
    oud,
    aud
]), Xxg = class Dre {
    static classify(e) {
        return e.length === 0 ? "none" : e.every(Dre.isLocalBuiltInTextEditor) ? "localBuiltInText" : e.some(Dre.isExtensionContributedEditor) ? "extensionContributed" : e.some(Dre.isComposerEditor) ? "composer" : "nativeNonText";
    }
    static isLocalBuiltInTextEditor(e) {
        return e.modified && e.original ? Dre.isLocalBuiltInTextEditor(e.modified) && Dre.isLocalBuiltInTextEditor(e.original) : e.primary && e.secondary ? Dre.isLocalBuiltInTextEditor(e.primary) && Dre.isLocalBuiltInTextEditor(e.secondary) : e.editorId === Kxg && e.resource !== void 0 && Dre.isLocalEditorResource(e.resource);
    }
    static isExtensionContributedEditor(e) {
        return e.modified && e.original ? Dre.isExtensionContributedEditor(e.modified) || Dre.isExtensionContributedEditor(e.original) : e.primary && e.secondary ? Dre.isExtensionContributedEditor(e.primary) || Dre.isExtensionContributedEditor(e.secondary) : e.typeId !== void 0 && Yxg.has(e.typeId);
    }
    static isComposerEditor(e) {
        return e.modified && e.original ? Dre.isComposerEditor(e.modified) || Dre.isComposerEditor(e.original) : e.primary && e.secondary ? Dre.isComposerEditor(e.primary) || Dre.isComposerEditor(e.secondary) : e.typeId === XF;
    }
    static isLocalEditorResource(e) {
        return e.scheme === Ot.file || e.scheme === Ot.untitled;
    }
}, hVe = jn("timerService"), Zxg = class {
    constructor(){
        this._entries = [];
    }
    setMarks(t, e) {
        this._entries.push([
            t,
            e
        ]);
    }
    getDuration(t, e) {
        const n = this._findEntry(t);
        if (!n) return 0;
        const i = this._findEntry(e);
        return i ? i.startTime - n.startTime : 0;
    }
    getDurationIfPresent(t, e) {
        const n = this._findEntry(t);
        if (!n) return;
        const i = this._findEntry(e);
        if (i) return i.startTime - n.startTime;
    }
    getStartTime(t) {
        const e = this._findEntry(t);
        return e ? e.startTime : -1;
    }
    getDurationIfPresentForSource(t, e, n) {
        const i = this._findEntryInSource(t, e);
        if (!i) return;
        const r = this._findEntryInSource(t, n);
        if (r) return r.startTime - i.startTime;
    }
    getStartTimeForSource(t, e) {
        const n = this._findEntryInSource(t, e);
        return n ? n.startTime : -1;
    }
    _findEntry(t) {
        for (const [, e] of this._entries)for(let n = e.length - 1; n >= 0; n--)if (e[n].name === t) return e[n];
    }
    _findEntryInSource(t, e) {
        for (const [n, i] of this._entries)if (n === t) {
            for(let r = i.length - 1; r >= 0; r--)if (i[r].name === e) return i[r];
        }
    }
    getEntries() {
        return this._entries.slice(0);
    }
}, n2n = "glass/willCreateReactRoot", aye = "glass/didPresentShell", T9e = "glass/didPresentUsableShell", hfl = [
    "ellapsedWorkbenchMainToReactRoot",
    "ellapsedReactRootToShellPresent",
    "ellapsedWorkbenchMainToShellPresent"
], pfl = [
    "ellapsedShellPresentToUsable",
    "ellapsedWorkbenchMainToShellUsable"
], Qxg = new Set([
    n2n,
    aye,
    T9e
]), Jxg = [
    "ellapsedExtHostBoot",
    "ellapsedExtHostBundleLoad",
    "ellapsedExtHostWaitForInit",
    "ellapsedExtHostInit",
    "ellapsedExtHostActivation"
], Xus = class extends st {
    constructor(t, e, n, i, r, s, o, a){
        super(), this._lifecycleService = t, this._contextService = e, this._extensionService = n, this._updateService = i, this._paneCompositeService = r, this._editorService = s, this._accessibilityService = o, this._barrier = new c7, this._startupCancellation = new El, this._marks = new Zxg, this._terminalBackendReadiness = [], this._extHostTimings = this._register(new Nxg(this._marks)), this.onDidObserveExtHostActivationMark = this._extHostTimings.onDidObserveActivationMark, this._register(Pn(()=>this._startupCancellation.dispose(!0)));
        const l = t.when(3).then(()=>Promise.all(this._terminalBackendReadiness));
        yx(Promise.all([
            this._extensionService.whenInstalledExtensionsRegistered(),
            t.when(3),
            a.whenRestored,
            l
        ]), this._startupCancellation.token).then((c)=>{
            if (c !== void 0) return this.setPerformanceMarks("renderer", Fdn()), this._computeStartupMetrics();
        }).then((c)=>{
            c !== void 0 && (this._startupMetrics = c, this._barrier.open());
        }), this.perfBaseline = this._barrier.wait().then(()=>this._lifecycleService.when(4)).then(()=>Wd(this._startupMetrics.timers.ellapsedRequire)).then(()=>{
            const c = (function() {
                let p = !1;
                function g(b) {
                    return p ? 0 : (performance.now() - f >= 1e3 && (p = !0), b <= 2 ? b : g(b - 1) + g(b - 2));
                }
                const f = performance.now();
                g(24);
                const _ = Math.round(performance.now() - f);
                self.postMessage({
                    value: p ? -1 : _
                });
            }).toString(), u = new Blob([
                `(${c})();`
            ], {
                type: "application/javascript"
            }), d = URL.createObjectURL(u), h = cfl(d, {
                name: "perfBaseline"
            });
            return new Promise((p)=>{
                h.onmessage = (g)=>p(g.data.value);
            }).finally(()=>{
                h.terminate(), URL.revokeObjectURL(d);
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
    registerTerminalBackendReadiness(t) {
        this._terminalBackendReadiness.push(t.catch(()=>{}));
    }
    setPerformanceMarks(t, e) {
        const n = e.filter((i)=>i.name.startsWith("code/") || Qxg.has(i.name));
        this._marks.setMarks(t, M2k(n)), this._extHostTimings.observe(t);
    }
    getPerformanceMarks() {
        return this._marks.getEntries();
    }
    getDuration(t, e) {
        return this._marks.getDuration(t, e);
    }
    getStartTime(t) {
        return this._marks.getStartTime(t);
    }
    refreshGlassShellPresentTimers() {
        const t = this._computeGlassShellPresentTimers();
        return this._startupMetrics && Object.assign(this._startupMetrics.timers, t), t;
    }
    refreshGlassShellUsableTimers() {
        const t = this._computeGlassShellUsableTimers();
        return this._startupMetrics && Object.assign(this._startupMetrics.timers, t), t;
    }
    refreshExtHostActivationTimers() {
        const t = this._userHostActivationTimers();
        return this._startupMetrics && Object.assign(this._startupMetrics.timers, t), t;
    }
    getExtHostStartupTimingsByRole() {
        return this._extHostTimings.getTimingsByRole();
    }
    _userHostActivationTimers() {
        const t = this._extHostTimings.getUserHostTimings();
        return {
            ellapsedExtHostBoot: t.boot,
            ellapsedExtHostBundleLoad: t.bundleLoad,
            ellapsedExtHostWaitForInit: t.waitForInit,
            ellapsedExtHostInit: t.init,
            ellapsedExtHostActivation: t.eagerActivation
        };
    }
    async _computeStartupMetrics() {
        const t = this._isInitialStartup();
        let e;
        th ? e = "code/timeOrigin" : e = t ? "code/didStartMain" : "code/willOpenNewWindow";
        const n = this._paneCompositeService.getActivePaneComposite(0), i = this._paneCompositeService.getActivePaneComposite(1), r = this._editorService.visibleEditors, s = {
            ellapsed: this._marks.getDuration(e, "code/didStartWorkbench"),
            isLatestVersion: !!await this._updateService.isLatestVersion(),
            didUseCachedData: this._didUseCachedData(),
            windowKind: this._lifecycleService.startupKind,
            windowCount: await this._getWindowCount(),
            viewletId: n?.getId(),
            editorIds: r.map((o)=>o.typeId),
            editorRestoreKind: Xxg.classify(r),
            panelId: i ? i.getId() : void 0,
            timers: {
                ellapsedAppReady: t ? this._marks.getDuration("code/didStartMain", "code/mainAppReady") : void 0,
                ellapsedNlsGeneration: t ? this._marks.getDuration("code/willGenerateNls", "code/didGenerateNls") : void 0,
                ellapsedLoadMainBundle: t ? this._marks.getDuration("code/willLoadMainBundle", "code/didLoadMainBundle") : void 0,
                ellapsedRunMainBundle: t ? this._marks.getDuration("code/didStartMain", "code/didRunMainBundle") : void 0,
                ellapsedCrashReporter: t ? this._marks.getDuration("code/willStartCrashReporter", "code/didStartCrashReporter") : void 0,
                ellapsedMainServer: t ? this._marks.getDuration("code/willStartMainServer", "code/didStartMainServer") : void 0,
                ellapsedWindowCreate: t ? this._marks.getDuration("code/willCreateCodeWindow", "code/didCreateCodeWindow") : void 0,
                ellapsedWindowRestoreState: t ? this._marks.getDuration("code/willRestoreCodeWindowState", "code/didRestoreCodeWindowState") : void 0,
                ellapsedBrowserWindowCreate: t ? this._marks.getDuration("code/willCreateCodeBrowserWindow", "code/didCreateCodeBrowserWindow") : void 0,
                ellapsedWindowMaximize: t ? this._marks.getDuration("code/willMaximizeCodeWindow", "code/didMaximizeCodeWindow") : void 0,
                ellapsedWindowLoad: t ? this._marks.getDuration("code/mainAppReady", "code/willOpenNewWindow") : void 0,
                ellapsedMainProcess: t ? this._marks.getDuration("code/didStartMain", "code/willOpenNewWindow") : void 0,
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
                ellapsedExtensionsReady: this._marks.getDuration(e, "code/didLoadExtensions"),
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
            initialStartup: t,
            hasAccessibilitySupport: this._accessibilityService.isScreenReaderOptimized(),
            emptyWorkbench: this._contextService.getWorkbenchState() === 1
        };
        return await this._extendStartupInfo(s), s;
    }
    _computeGlassShellPresentTimers() {
        return {
            ellapsedWorkbenchMainToReactRoot: this._marks.getDurationIfPresent("code/willLoadWorkbenchMain", n2n),
            ellapsedReactRootToShellPresent: this._marks.getDurationIfPresent(n2n, aye),
            ellapsedWorkbenchMainToShellPresent: this._marks.getDurationIfPresent("code/willLoadWorkbenchMain", aye)
        };
    }
    _computeGlassShellUsableTimers() {
        return {
            ellapsedShellPresentToUsable: this._marks.getDurationIfPresent(aye, T9e),
            ellapsedWorkbenchMainToShellUsable: this._marks.getDurationIfPresent("code/willLoadWorkbenchMain", T9e)
        };
    }
}, Xus = Re([
    F(0, Fp),
    F(1, yr),
    F(2, id),
    F(3, SL),
    F(4, VO),
    F(5, gr),
    F(6, GS),
    F(7, Id)
], Xus);

}
