import { Vl, le } from "./async.js";
import { Js, Rl } from "./buildFlags.js";
import { Ie, Jn, Mt } from "./cancellation.js";
import { at, ot } from "./configuration.js";
import { Ye, qe } from "./environmentMainService.js";
import { N, ge, se } from "./event.js";
import { B, Hn } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { En, Vt, ht } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { Xn } from "./product.js";
import { Tt, et } from "./productService.js";
import { fs, li } from "./request_2.js";
import { rf } from "./spanCollector.js";
import { Cn, or } from "./storageMainService.js";
import { w } from "./themeMainService.js";
import { LO, OO, Uhe, r1 } from "./tracing_2.js";
import { h } from "./tslib.es6.js";
import { Eo, nl, npe, xe } from "./update.js";
import { hJe } from "./updateMode.js";
import { Ym, eT, t3, tT } from "./updateReleaseTrack.js";
import { IO, yhe } from "./updateSupervisor.js";
import AJe from "electron";
import CJe from "path";
import IJe from "os";
import { randomUUID as RJe } from "crypto";
import * as xhe from "original-fs";
function mxe(e) {
    return e.applicationValue !== void 0 || e.userValue !== void 0 || e.userLocalValue !== void 0 || e.userRemoteValue !== void 0 || e.workspaceValue !== void 0 || e.workspaceFolderValue !== void 0;
}
function e3(e) {
    for (const t of t3)if (e === t) return !0;
    return !1;
}
function wxe(e) {
    const t = e.getValue(eT);
    return e3(t) ? t : "stable";
}
function Exe(e = Xn) {
    return e.honorManagedReleaseTrackOverride === !0;
}
function bxe(e, t = Xn) {
    if (!Exe(t)) return;
    const n = e.getValue(tT);
    return e3(n) ? n : void 0;
}
function Zv(e, t = Xn) {
    return bxe(e, t) ?? wxe(e);
}
function Md(e) {
    return e.res.statusCode && e.res.statusCode >= 200 && e.res.statusCode < 300 || e.res.statusCode === 1223;
}
function pJe(e) {
    const t = e.inspect("update.mode");
    if (t.policyValue !== void 0) return t.policyValue;
    if (mxe(t) || t.memoryValue !== void 0) return t.value;
    const n = Zv(e);
    return n === "dev" || n === "dogfood" || n === "candidate" ? "silentlyApplyOnQuit" : "default";
}
function EJe(e, t) {
    if (OO()) return;
    const n = r1(e);
    LO(n, "event", t), n.end(), rf.collect(n);
}
var Re;
export { EJe, Exe, Md, Re, Zv, bxe, e3, mxe, pJe, wxe };
var __wakaru_xO_initialized = false;
export function xO() {
if (__wakaru_xO_initialized) return;
__wakaru_xO_initialized = true;
"use strict";
h(), le(), Mt(), se(), at(), Rl(), Ye(), Vt(), te(), Tt(), fs(), Eo(), hJe(), or(), j(), Ym(), yhe(), Uhe(), Re = class extends J {
    constructor(e, t, n, r, s, i, a){
        super(), this.lifecycleMainService = e, this.configurationService = t, this.environmentMainService = n, this.requestService = r, this.logService = s, this.productService = i, this.applicationStorageMainService = a, this.outdatedUpdateCheckTimer = this._register(new Vl), this.isCheckingForOutdatedUpdate = !1, this._state = xe.Uninitialized, this._onStateChange = this._register(new N), this.onStateChange = this._onStateChange.event, e.when(3).finally(()=>this.initialize());
    }
    get state() {
        return this._state;
    }
    setState(e) {
        if (this.logService.info("update#setState", e.type), this._state = e, this._onStateChange.fire(e), e.type === "ready") try {
            const t = Date.now(), n = this.getUpdateTelemetryContext();
            this.applicationStorageMainService.store(Re.UPDATE_READY_TIME, t, -1, 1), this.applicationStorageMainService.store(Re.UPDATE_IS_BACKGROUND_UPDATE, n.isBackgroundUpdate, -1, 1), this.applicationStorageMainService.store(Re.UPDATE_UPDATE_MODE, n.updateMode, -1, 1), this.storeEvent({
                type: "cursor.update.ready",
                data: {
                    updateVersion: e.update.version,
                    targetVersionStr: e.update.productVersion || e.update.version,
                    currentVersion: this.productService.version,
                    ...n
                }
            });
        } catch (t) {
            this.logService.error("update#setState - failed to store update ready time", t);
        }
        else if (e.type === "idle" || e.type === "checking for updates") try {
            const t = this.applicationStorageMainService.getBoolean(Re.UPDATE_RESTART_MARKER, -1, !1), n = this.applicationStorageMainService.getNumber(Re.UPDATE_READY_TIME, -1, 0);
            t && n && Date.now() - n > 2880 * 60 * 1e3 && (this.logService.info("update#setState - cleaning up stale update tracking data"), this.clearUpdateTrackingData());
        } catch (t) {
            this.logService.error("update#setState - failed to clean up stale data", t);
        }
    }
    async initialize() {
        this.removeUpdateFileIfExists(), await this.applicationStorageMainService.whenReady;
        const e = this.checkUpdateRestartResult();
        if (!this.environmentMainService.isBuilt) {
            this.setState(xe.Disabled(0)), this.logService.info("update#ctor - updates are disabled by the environment");
            return;
        }
        if (this.environmentMainService.disableUpdates) {
            this.setState(xe.Disabled(1)), this.logService.info("update#ctor - updates are disabled by the environment");
            return;
        }
        if (!this.productService.updateUrl || !this.productService.commit) {
            this.setState(xe.Disabled(3)), this.logService.info("update#ctor - updates are disabled as there is no update URL");
            return;
        }
        const t = this.getUpdateMode(), n = this.getProductQualityForUpdateMode(t);
        if (!n) {
            this.setState(xe.Disabled(2)), this.logService.info("update#ctor - updates are disabled by user preference");
            return;
        }
        if (this.url = this.buildUpdateUrl(n, !1), !this.url) {
            this.setState(xe.Disabled(4)), this.logService.info("update#ctor - updates are disabled as the update URL is badly formed");
            return;
        }
        this._effectiveReleaseTrack = this.getReleaseTrack();
        let r;
        if (this._register(this.configurationService.onDidChangeConfiguration((s)=>{
            (s.affectsConfiguration(eT) || s.affectsConfiguration(tT)) && (clearTimeout(r), r = setTimeout(()=>{
                this.onReleaseTrackChanged();
            }, 1e3));
        })), this.setState(xe.Idle(this.getUpdateType())), this.registerOutdatedUpdateRecheckTriggers(), e && (this.logService.info("update#ctor - retrying the update that failed to install"), this.checkForUpdates(!1)), t === "manual") {
            this.logService.info("update#ctor - manual checks only; automatic updates are disabled by user preference");
            return;
        }
        t === "start" ? (this.logService.info("update#ctor - startup checks only; automatic updates are disabled by user preference"), setTimeout(()=>this.checkForUpdates(!1), 30 * 1e3)) : this.scheduleCheckForUpdates(30 * 1e3).then(void 0, (s)=>this.logService.error(s));
    }
    checkUpdateRestartResult() {
        try {
            const e = this.applicationStorageMainService.getBoolean(Re.UPDATE_RESTART_MARKER, -1, !1), t = this.applicationStorageMainService.get(Re.UPDATE_TARGET_VERSION, -1, void 0);
            if (e && t) {
                const n = this.applicationStorageMainService.getNumber(Re.UPDATE_QUIT_TIME, -1, 0), r = this.applicationStorageMainService.getNumber(Re.UPDATE_READY_TIME, -1, 0), s = this.applicationStorageMainService.getBoolean(Re.UPDATE_EXPLICIT_RESTART, -1, !1), i = this.applicationStorageMainService.get(Re.UPDATE_INSTALLATION_ID, -1, void 0), a = n ? Date.now() - n : void 0, o = this.productService.version, l = o === t, d = this.lifecycleMainService.consumeLastShutdownJoinerTimings();
                let u, m, f;
                if (d) {
                    let y = 0;
                    for(const b in d){
                        const I = d[b];
                        y++, (m === void 0 || I > m) && (m = I, u = b);
                    }
                    f = y;
                }
                const v = this.getStoredUpdateTelemetryContext(), T = this.getUpdateSupervisorRestartTelemetry(i), S = this.shouldHandleUpdateRestartCompleted() ? this.onUpdateRestartCompleted({
                    installationId: i,
                    targetVersion: t,
                    currentVersion: o,
                    updateSuccess: l,
                    supervisorResult: T
                }) : void 0;
                this.storeEvent({
                    type: "cursor.update.restartCompleted",
                    data: {
                        restartTime: a ? a / 1e3 : void 0,
                        targetVersion: t,
                        currentVersion: o,
                        updateSuccess: l,
                        ...i !== void 0 ? {
                            installationId: i
                        } : {},
                        waitTimeBeforeRestart: r && n ? (n - r) / 1e3 : void 0,
                        isExplicitRestart: s,
                        shutdownJoinerCount: f,
                        slowestShutdownJoinerId: u,
                        slowestShutdownJoinerMs: m,
                        ...T,
                        shipItCacheResetAt: S?.shipItCacheResetAt,
                        ...v
                    }
                });
                const k = this.getPostRestartUpdateSnapshot();
                if (k && this.storeEvent({
                    type: "cursor.update.win32.postRestartSnapshot",
                    data: {
                        targetVersion: t,
                        currentVersion: o,
                        ...k,
                        ...v,
                        ...i !== void 0 ? {
                            installationId: i
                        } : {}
                    }
                }), this.reportRestartDiagnostics({
                    restartTimeSeconds: a ? a / 1e3 : void 0,
                    targetVersion: t,
                    currentVersion: o,
                    updateSuccess: l,
                    quitTime: n || void 0
                }), !l) try {
                    const y = {
                        targetVersion: t,
                        currentVersion: o,
                        quitTime: n || void 0,
                        retrying: S?.retryUpdate
                    };
                    this.applicationStorageMainService.store(npe, JSON.stringify(y), -1, 1);
                } catch (y) {
                    this.logService.error("update#checkUpdateRestartResult - failed to store install failure flag", y);
                }
                return this.clearUpdateTrackingData(), S?.retryUpdate ?? !1;
            }
        } catch (e) {
            this.logService.error("update#checkUpdateRestartResult - failed to check update restart result", e), this.clearUpdateTrackingData();
        }
        return !1;
    }
    clearUpdateTrackingData() {
        this.applicationStorageMainService.remove(Re.UPDATE_RESTART_MARKER, -1), this.applicationStorageMainService.remove(Re.UPDATE_TARGET_VERSION, -1), this.applicationStorageMainService.remove(Re.UPDATE_READY_TIME, -1), this.applicationStorageMainService.remove(Re.UPDATE_QUIT_TIME, -1), this.applicationStorageMainService.remove(Re.UPDATE_EXPLICIT_RESTART, -1), this.applicationStorageMainService.remove(Re.UPDATE_INSTALLATION_ID, -1), this.applicationStorageMainService.remove(Re.UPDATE_IS_BACKGROUND_UPDATE, -1), this.applicationStorageMainService.remove(Re.UPDATE_UPDATE_MODE, -1);
    }
    clearVetoedUpdateMarkers() {
        this.applicationStorageMainService.remove(Re.UPDATE_RESTART_MARKER, -1), this.applicationStorageMainService.remove(Re.UPDATE_TARGET_VERSION, -1), this.applicationStorageMainService.remove(Re.UPDATE_QUIT_TIME, -1), this.applicationStorageMainService.remove(Re.UPDATE_EXPLICIT_RESTART, -1), this.applicationStorageMainService.remove(Re.UPDATE_INSTALLATION_ID, -1);
    }
    removeTrailingInstallationStartedEvent() {
        try {
            const e = this.applicationStorageMainService.get(nl, -1, "[]"), t = JSON.parse(e);
            t.length > 0 && t[t.length - 1].type === "cursor.update.installationStarted" && (t.pop(), this.applicationStorageMainService.store(nl, JSON.stringify(t), -1, 1));
        } catch (e) {
            this.logService.error("update#removeTrailingInstallationStartedEvent - failed", e);
        }
    }
    onReleaseTrackChanged() {
        const e = this.getReleaseTrack();
        this._effectiveReleaseTrack !== e && (this._effectiveReleaseTrack = e, this.logService.info("update#ctor - release track changed", e), this.checkForUpdates(!0));
    }
    buildUpdateUrl(e, t) {
        const n = this.buildUpdateFeedUrl(e, t);
        if (n) {
            try {
                if (this.configurationService.getValue("_update.prss")) {
                    const r = new URL(n);
                    return r.searchParams.set("prss", "true"), r.toString();
                }
            } catch (r) {
                this.logService.error("Failed to add update URL params", r);
            }
            return n;
        }
    }
    getProductQuality() {
        try {
            const e = this.getUpdateMode();
            return this.getProductQualityForUpdateMode(e);
        } catch (e) {
            this.logService.error("Failed to get product quality", e);
        }
    }
    getUpdateMode() {
        return this.productService.applicationName === "cursor-alpha" ? "silentlyApplyOnQuit" : pJe(this.configurationService);
    }
    getProductQualityForUpdateMode(e) {
        return e === "none" ? void 0 : this.productService.quality;
    }
    scheduleCheckForUpdates(e = 3600 * 1e3) {
        const t = e * .1 * (Math.random() * 2 - 1), n = Math.round(e + t);
        return En(n).then(()=>this.checkForUpdates(!1)).then(()=>this.scheduleCheckForUpdates(3600 * 1e3));
    }
    scheduleCheckForOutdatedUpdate(e = Re.OUTDATED_UPDATE_CHECK_INTERVAL_MS) {
        this.outdatedUpdateCheckTimer.cancelAndSet(()=>{
            this.checkForOutdatedUpdate().catch((t)=>this.logService.error("update#scheduleCheckForOutdatedUpdates received error", t));
        }, e);
    }
    registerOutdatedUpdateRecheckTriggers() {
        const e = AJe.powerMonitor, t = ()=>this.recheckOutdatedUpdateOnResume("resume"), n = ()=>this.recheckOutdatedUpdateOnResume("unlock-screen");
        e.on("resume", t), e.on("unlock-screen", n), this._register(ge(()=>{
            e.removeListener("resume", t), e.removeListener("unlock-screen", n);
        }));
    }
    recheckOutdatedUpdateOnResume(e) {
        this.state.type === "ready" && (this.logService.info("update#recheckOutdatedUpdateOnResume - re-checking pending update freshness", e), this.checkForOutdatedUpdate().catch((t)=>this.logService.error("update#recheckOutdatedUpdateOnResume received error", t)));
    }
    async checkForOutdatedUpdate() {
        const e = this.getPendingUpdateVersionIfAbortable();
        if (!e) {
            this.state.type !== "idle" && this.scheduleCheckForOutdatedUpdate();
            return;
        }
        if (!this.isCheckingForOutdatedUpdate) {
            this.isCheckingForOutdatedUpdate = !0;
            try {
                this.checkForUpdatedReleaseTrack();
                const t = this.getOutdatedUpdateCheckURL();
                if (t) {
                    this.logService.debug("update#checkForOutdatedUpdate - checking for outdated update", e);
                    let n;
                    if (this.shouldSendAuthHeaders() ? n = await this.requestService.request({
                        url: t,
                        headers: this.getUpdateRequestHeaders()
                    }, Ie.None) : n = await this.requestService.request({
                        url: t
                    }, Ie.None), Md(n)) {
                        const r = await this.getOutdatedUpdateCheckResponseVersion(n);
                        if (r !== e && this.getPendingUpdateVersionIfAbortable() === e) {
                            this.logService.info("update#checkForOutdatedUpdate - found outdated update", e, r), this.invalidateUpdate(e, r), r && this.doCheckForUpdates(!1);
                            return;
                        }
                    } else this.logService.warn("update#checkForOutdatedUpdate - error status code when checking for outdated update", n.res.statusCode);
                }
            } catch (t) {
                this.logService.error("update#checkForOutdatedUpdate - failed to check for outdated update", t);
            } finally{
                this.isCheckingForOutdatedUpdate = !1;
            }
            this.state.type !== "idle" && this.scheduleCheckForOutdatedUpdate();
        }
    }
    async fetchServerRequestedUpdateVersion(e) {
        const t = this.getOutdatedUpdateCheckURL();
        if (!t) return;
        let n;
        if (this.shouldSendAuthHeaders() ? n = await this.requestService.request({
            url: t,
            headers: this.getUpdateRequestHeaders()
        }, e) : n = await this.requestService.request({
            url: t
        }, e), !Md(n)) {
            this.logService.warn("update#fetchServerRequestedUpdateVersion - error status code", n.res.statusCode);
            return;
        }
        return this.getOutdatedUpdateCheckResponseVersion(n);
    }
    async abortBeforeReadyIfOutdated(e) {
        const t = new Jn, n = Hn(()=>t.cancel(), Re.OUTDATED_UPDATE_PRE_READY_CHECK_TIMEOUT_MS);
        try {
            this.checkForUpdatedReleaseTrack();
            const r = await this.fetchServerRequestedUpdateVersion(t.token);
            if (r && r !== e) return this.logService.info("update#abortBeforeReadyIfOutdated - newer build available before Ready, restarting download", e, r), this.invalidateUpdate(e, r), this.doCheckForUpdates(!1), !0;
        } catch (r) {
            this.logService.error("update#abortBeforeReadyIfOutdated - pre-Ready check failed, surfacing downloaded update", r);
        } finally{
            n.dispose(), t.dispose();
        }
        return !1;
    }
    async checkForUpdates(e) {
        this.logService.trace("update#checkForUpdates, state = ", this.state.type), this.state.type === "idle" && (this.checkForUpdatedReleaseTrack(), this.doCheckForUpdates(e));
    }
    checkForUpdatedReleaseTrack() {
        const e = this.getReleaseTrack();
        if (this.url && !this.url.includes(e) && this.productService.updateUrl) {
            const t = this.getProductQuality();
            if (t) {
                let n = this.buildUpdateUrl(t, !1);
                if (n) {
                    const r = new URL(n);
                    r.searchParams.set("trackChanged", "1"), n = r.toString(), this.logService.info("update#checkForUpdates - updating to release track", e, n), this.url = n;
                }
            }
        } else if (this.url && this.url.includes("trackChanged=1")) {
            const t = new URL(this.url);
            t.searchParams.delete("trackChanged"), this.url = t.toString(), this.logService.info("update#checkForUpdates - removing trackChanged param");
        }
    }
    async downloadUpdate() {
        this.logService.trace("update#downloadUpdate, state = ", this.state.type), this.state.type === "available for download" && await this.doDownloadUpdate(this.state);
    }
    async doDownloadUpdate(e) {}
    async applyUpdate() {
        this.logService.trace("update#applyUpdate, state = ", this.state.type), this.state.type === "downloaded" && await this.doApplyUpdate();
    }
    async doApplyUpdate() {}
    prepareUpdateInstallation(e) {
        try {
            if (this.state.type === "ready" && this.state.update) {
                const t = this.applicationStorageMainService.getBoolean(Re.UPDATE_EXPLICIT_RESTART, -1, !1), n = this.applicationStorageMainService.get(Re.UPDATE_INSTALLATION_ID, -1, void 0), r = t || e, s = Date.now(), i = n ?? RJe(), a = this.state.update.productVersion || this.state.update.version;
                this.applicationStorageMainService.store(Re.UPDATE_RESTART_MARKER, !0, -1, 1), this.applicationStorageMainService.store(Re.UPDATE_TARGET_VERSION, a, -1, 1), this.applicationStorageMainService.store(Re.UPDATE_QUIT_TIME, s, -1, 1), this.applicationStorageMainService.store(Re.UPDATE_EXPLICIT_RESTART, r, -1, 1), this.applicationStorageMainService.store(Re.UPDATE_INSTALLATION_ID, i, -1, 1), (!t || e) && this.storeEvent({
                    type: "cursor.update.installationStarted",
                    data: {
                        installationId: i,
                        updateVersion: this.state.update.version,
                        previousVersion: this.productService.version,
                        isExplicitRestart: r,
                        ...this.getStoredUpdateTelemetryContext()
                    }
                });
            }
        } catch (t) {
            this.logService.error("update#prepareUpdateInstallation - failed to store update restart markers", t);
        }
    }
    markUpdateInstallation() {
        this.prepareUpdateInstallation(!1);
    }
    getPendingUpdateInstallationInfo() {
        if (this.state.type !== "ready") return;
        const e = this.applicationStorageMainService.get(Re.UPDATE_INSTALLATION_ID, -1, void 0), t = this.applicationStorageMainService.get(Re.UPDATE_TARGET_VERSION, -1, void 0);
        if (!(!e || !t)) return {
            installationId: e,
            targetVersion: t
        };
    }
    quitAndInstall() {
        if (this.logService.trace("update#quitAndInstall, state = ", this.state.type), this.state.type !== "ready") return Promise.resolve(void 0);
        this.prepareUpdateInstallation(!0);
        try {
            this.prepareForQuitAndInstall();
        } catch (e) {
            this.logService.warn("update#prepareForQuitAndInstall - failed", e), this.clearPreparedQuitAndInstall();
        }
        return this.logService.trace("update#quitAndInstall(): before lifecycle quit()"), this.lifecycleMainService.quit(!0).then((e)=>{
            if (this.logService.trace(`update#quitAndInstall(): after lifecycle quit() with veto: ${e}`), e) {
                this.clearPreparedQuitAndInstall(), this.clearVetoedUpdateMarkers(), this.removeTrailingInstallationStartedEvent();
                return;
            }
            this.logService.trace("update#quitAndInstall(): running raw#quitAndInstall()"), this.doQuitAndInstall();
        }), Promise.resolve(void 0);
    }
    async isLatestVersion() {
        if (!this.url) return;
        if (this.getUpdateMode() === "none") return !1;
        for (const t of [
            this.url
        ])if (t) try {
            const n = await this.requestService.request({
                url: t,
                headers: {
                    "User-Agent": `${this.productService.nameShort}/${this.productService.version}`
                }
            }, Ie.None);
            if (!Md(n)) throw new Error("Server returned " + n.res.statusCode);
            return n.res.statusCode === 204;
        } catch (n) {
            this.logService.error("update#isLatestVersion(): failed to check for updates"), this.logService.error(n);
            return;
        }
    }
    async _applySpecificUpdate(e) {}
    async _setUpdateBaseUrl(e) {
        if (this.logService.info("update#_setUpdateBaseUrl -", e), !this.url || !this.productService.updateUrl) {
            this.logService.warn("update#_setUpdateBaseUrl - no current URL to override");
            return;
        }
        this._updateBaseUrlOverride = e, this.url = this.url.replace(this.productService.updateUrl, e), this.logService.info("update#_setUpdateBaseUrl - new URL:", this.url);
    }
    getUpdateType() {
        return 1;
    }
    getUpdateRequestHeaders() {
        try {
            const e = this.shouldSendAuthHeaders() ? this.applicationStorageMainService.get("cursorAuth/accessToken", -1) : void 0, t = this.productService.commit ?? this.productService.devCommit;
            return {
                ...e ? {
                    Authorization: `Bearer ${e}`
                } : {},
                ...t ? {
                    "X-Cursor-Commit": t
                } : {},
                ...this.productService.version ? {
                    "X-Cursor-Version": this.productService.version
                } : {}
            };
        } catch (e) {
            return this.logService.error("Failed to get update request headers", e), {};
        }
    }
    doQuitAndInstall() {}
    prepareForQuitAndInstall() {}
    clearPreparedQuitAndInstall() {}
    getPostRestartUpdateSnapshot() {}
    reportRestartDiagnostics(e) {}
    getUpdateSupervisorRestartTelemetry(e) {}
    onUpdateRestartCompleted(e) {}
    shouldHandleUpdateRestartCompleted() {
        return this.isUpdateSupervisorEnabled();
    }
    isUpdateSupervisorEnabled() {
        return this.applicationStorageMainService.getBoolean(IO, -1, !1);
    }
    getUpdateTelemetryContext() {
        return {
            isBackgroundUpdate: !!this.configurationService.getValue("update.enableWindowsBackgroundUpdates"),
            updateMode: this.getUpdateMode()
        };
    }
    getStoredUpdateTelemetryContext() {
        return {
            isBackgroundUpdate: this.applicationStorageMainService.getBoolean(Re.UPDATE_IS_BACKGROUND_UPDATE, -1, !!this.configurationService.getValue("update.enableWindowsBackgroundUpdates")),
            updateMode: this.applicationStorageMainService.get(Re.UPDATE_UPDATE_MODE, -1, this.getUpdateMode())
        };
    }
    reportUpdateEventImmediate(e) {
        try {
            EJe(e.type, Object.fromEntries(Object.entries(e.data).map(([t, n])=>[
                    `cursor.update.${t}`,
                    n
                ])));
        } catch (t) {
            this.logService.warn("update#reportUpdateEventImmediate - failed to report event", t);
        }
    }
    createUpdateURL(e, t, n, r = !1) {
        const s = this._updateBaseUrlOverride ?? n.updateUrl, i = Js.localMode ? "cursor-local" : n.nameShort.replace(/ /g, "-").toLowerCase(), a = this.getReleaseTrack(), o = `${s}/api/update/${e}/${i}/${n.version}/${this.machineId}/${a}`;
        return this.logService.info("updateURL", o), o;
    }
    getOutdatedUpdateCheckURL() {
        if (!this.url) return;
        const e = new URL(this.url);
        return e.searchParams.set("isOutdatedCheck", "1"), e.toString();
    }
    getReinstallUpdateCheckURL() {
        if (!this.url) return;
        const e = new URL(this.url);
        return e.searchParams.set("forceUpdate", "1"), e.toString();
    }
    isReinstallUpdateCheckURL(e) {
        return e ? new URL(e).searchParams.get("forceUpdate") === "1" : !1;
    }
    getReleaseTrack() {
        if (this.productService.applicationName === "cursor-alpha") return "stable";
        try {
            return Zv(this.configurationService);
        } catch (e) {
            this.logService.warn("could not fetch release track - using default", e);
        }
        return "stable";
    }
    removeUpdateFileIfExists() {
        try {
            xhe.existsSync(this.updateFileLocation()) && xhe.unlinkSync(this.updateFileLocation());
        } catch (e) {
            this.logService.error("Failed to check for legacy shouldUpdate file", e);
        }
    }
    updateFileLocation() {
        const e = this.productService.dataFolderName ?? ".cursor";
        return CJe.join(IJe.homedir(), e, "shouldUpdate");
    }
    storeEvent(e) {
        const t = this.applicationStorageMainService.get(nl, -1, "[]"), n = JSON.parse(t);
        for(; n.length > 30;)n.shift();
        n.push(e.recordedAtUnixMs === void 0 ? {
            ...e,
            recordedAtUnixMs: Date.now()
        } : e), this.applicationStorageMainService.store(nl, JSON.stringify(n), -1, 1);
    }
}, Re.UPDATE_RESTART_MARKER = "cursor.update.restartMarker", Re.UPDATE_TARGET_VERSION = "cursor.update.targetVersion", Re.UPDATE_READY_TIME = "cursor.update.readyTime", Re.UPDATE_QUIT_TIME = "cursor.update.quitTime", Re.UPDATE_EXPLICIT_RESTART = "cursor.update.explicitRestart", Re.UPDATE_INSTALLATION_ID = "cursor.update.installationId", Re.UPDATE_IS_BACKGROUND_UPDATE = "cursor.update.isBackgroundUpdate", Re.UPDATE_UPDATE_MODE = "cursor.update.updateMode", Re.OUTDATED_UPDATE_PRE_READY_CHECK_TIMEOUT_MS = 10 * 1e3, Re.OUTDATED_UPDATE_CHECK_INTERVAL_MS = 300 * 1e3, Re = B([
    w(0, ht),
    w(1, ot),
    w(2, qe),
    w(3, li),
    w(4, Z),
    w(5, et),
    w(6, Cn)
], Re);

}
