import { Md, Re, xO } from "./abstractUpdateService.js";
import { le } from "./async.js";
import { Ie, Mt } from "./cancellation.js";
import { at, ot } from "./configuration.js";
import { kXe } from "./crypto.js";
import { sc } from "./decorators.js";
import { Ye, qe } from "./environmentMainService.js";
import { Dv, O, se } from "./event.js";
import { Pd } from "./extHostContinuousProfilingService.js";
import { Wt, cn } from "./files.js";
import { B, Ue } from "./ipc.js";
import { En, Vt, ht } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { Gi, _s } from "./nativeHostMainService.js";
import { Ce, L, _t, st } from "./path.js";
import { gn, ie } from "./pfs.js";
import { Tt, et } from "./productService.js";
import { fs, li } from "./request_2.js";
import { Cn, or } from "./storageMainService.js";
import { Fi, ts } from "./telemetry.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Eo, nl, xe } from "./update.js";
import { XO, rge, sge } from "./updateStorageKeys.js";
import { x, ye } from "./uri.js";
import { tmpdir as SXe } from "os";
import * as _Xe from "crypto";
import * as jt from "fs";
import { spawn as p1 } from "child_process";
import * as vXe from "fs";
function vG(e) {
    return e.res.statusCode === 204;
}
async function TXe(e, t) {
    if (await new Promise((s, i)=>{
        const a = vXe.createReadStream(e), o = _Xe.createHash("sha256");
        a.pipe(o);
        const l = Dv((d, u)=>{
            a.removeAllListeners(), o.removeAllListeners(), a.destroy(), d ? i(d) : s(u);
        });
        a.once("error", l), a.once("end", l), o.once("error", l), o.once("data", (d)=>l(void 0, d.toString("hex")));
    }) !== t) throw new Error("Hash mismatch");
}
async function yXe(e, t = 1e3) {
    for(; !e();)await En(t);
}
function Mo() {
    return typeof f1 > "u" && (f1 = [
        L(st(process.execPath), "unins000.exe"),
        L(st(process.execPath), "Uninstall Cursor.exe"),
        L(st(process.execPath), "Uninstall Cursor Nightly.exe"),
        L(st(process.execPath), "Uninstall Cursor Lab.exe")
    ].find((n)=>{
        try {
            return jt.existsSync(n);
        } catch  {
            return !1;
        }
    }) ? 0 : 1), f1;
}
function wXe(e) {
    return `CursorUpdateSupervisor-${e}`;
}
function age(e) {
    let t;
    try {
        t = JSON.parse(e);
    } catch  {
        return;
    }
    if (!EXe(t)) return;
    const n = t.schemaVersion, r = t.installationId, s = t.targetVersion, i = t.createdAtUnixMs;
    if (!(n !== h1 || typeof r != "string" || !oge(r) || typeof s != "string" || s.length === 0 || s.length > 128 || typeof i != "number" || !Number.isInteger(i) || Date.now() - i > gge || i - Date.now() > fge)) return {
        schemaVersion: n,
        installationId: r,
        targetVersion: s,
        createdAtUnixMs: i
    };
}
function oge(e) {
    return e.length > 0 && e.length <= 128 && /^[a-zA-Z0-9-]+$/.test(e);
}
function EXe(e) {
    return typeof e == "object" && e !== null;
}
function cge(e, t) {
    const n = st(e), r = `${e}.${process.pid}.tmp`;
    jt.mkdirSync(n, {
        recursive: !0
    }), jt.writeFileSync(r, `${JSON.stringify(t, void 0, 2)}
`);
    try {
        jt.renameSync(r, e);
    } catch  {
        jt.copyFileSync(r, e), jt.rmSync(r, {
            force: !0
        });
    }
}
var h1, lge, dge, uge, ol, mge, pge, hge, gge, fge, g1, f1, of;
export { EXe, Mo, TXe, age, cge, dge, f1, fge, g1, gge, h1, hge, lge, mge, of, oge, ol, pge, uge, vG, wXe, yXe };
var __wakaru_bXe_initialized = false;
export function bXe() {
if (__wakaru_bXe_initialized) return;
__wakaru_bXe_initialized = true;
"use strict";
h(), le(), Mt(), sc(), se(), Ce(), ye(), kXe(), gn(), at(), Ye(), Wt(), Vt(), te(), Gi(), Tt(), fs(), ts(), Eo(), xO(), or(), sge(), h1 = 1, lge = "update-supervisor", dge = "win32", uge = "active.json", ol = "inno_updater.exe", mge = "cursor-update.journal.json", pge = "_bak", hge = 1e3, gge = 1440 * 60 * 1e3, fge = 300 * 1e3, g1 = "cursor.update.installationId", f1 = void 0, of = class extends Re {
    constructor(e, t, n, r, s, i, a, o, l, d, u){
        super(t, n, s, i, a, d, u), this.machineId = e, this.telemetryService = r, this.fileService = o, this.nativeHostMainService = l, this.isSystemShuttingDown = !1, t.setRelaunchHandler(this), this._register(t.onWillShutdown((m)=>{
            const f = this.preparedUpdateSupervisor;
            if (f) {
                if (!this.isUpdateSupervisorEnabled()) {
                    this.clearPreparedQuitAndInstall();
                    return;
                }
                m.join("win32UpdateSupervisor", this.armUpdateSupervisor(f));
            }
        })), this._register(O.once(this.nativeHostMainService.onWillShutdownOS)(()=>{
            if (this.isSystemShuttingDown = !0, this.logService.info("Win32UpdateService: system shutdown detected; skipping updates."), this.state.type === "ready" && this.state.update) {
                const m = this.applicationStorageMainService.get(g1, -1, void 0);
                this.queueShutdownSafeUpdateEvent({
                    type: "cursor.update.win32.shutdownDuringPendingUpdate",
                    data: {
                        updateVersion: this.state.update.version,
                        hasStagedFlag: !!this.availableUpdate?.updateFilePath,
                        ...this.getStoredUpdateTelemetryContext(),
                        ...m !== void 0 ? {
                            installationId: m
                        } : {}
                    }
                });
            }
        }));
    }
    get cachePath() {
        const e = Math.random().toString(36).substring(2, 15), t = L(SXe(), `vscode-${this.productService.quality}-${this.productService.target}-${process.arch}-${e}`);
        return jt.promises.mkdir(t, {
            recursive: !0
        }).then(()=>t);
    }
    handleRelaunch(e) {
        return e?.addArgs || e?.removeArgs ? !1 : this.isSystemShuttingDown ? (this.logService.trace("update#handleRelaunch(): system shutdown detected; not applying update"), !1) : this.state.type !== "ready" || !this.availableUpdate ? !1 : (this.logService.trace("update#handleRelaunch(): running raw#quitAndInstall()"), this.markUpdateInstallation(), this.doQuitAndInstall(), !0);
    }
    async initialize() {
        if (await this.applicationStorageMainService.whenReady, this.drainShutdownSafeUpdateEvents(), this.productService.target === "user" && await this.nativeHostMainService.isAdmin(void 0)) {
            this.setState(xe.Disabled(5)), this.logService.info("update#ctor - updates are disabled due to running as Admin in user setup");
            return;
        }
        this.recoverInterruptedUpdateSwap(), this.storeMarkerlessPostRestartSnapshot(), await super.initialize();
    }
    shouldSendAuthHeaders() {
        return this.applicationStorageMainService.getBoolean(XO, -1, !1);
    }
    buildUpdateFeedUrl(e, t = !1) {
        let n = `win32-${process.arch}`;
        return Mo() === 1 ? n += "-archive" : this.productService.target === "user" && (n += "-user"), this.createUpdateURL(n, e, this.productService, t);
    }
    getPendingUpdateVersionIfAbortable() {
        if (this.state.type === "ready") return this.availableUpdate?.updateFilePath ? void 0 : this.state.update?.version;
        if (this.state.type === "downloaded") return this.state.update?.version;
    }
    async getOutdatedUpdateCheckResponseVersion(e) {
        const t = await Pd(e);
        return t?.url ? t.version : void 0;
    }
    invalidateUpdate(e, t) {
        this.availableUpdate = void 0, this.setState(xe.Idle(Mo()));
    }
    doCheckForUpdates(e) {
        if (!this.url) return;
        this.setState(xe.CheckingForUpdates(e));
        let t;
        this.shouldSendAuthHeaders() ? t = this.requestService.request({
            url: this.url,
            headers: this.getUpdateRequestHeaders()
        }, Ie.None) : t = this.requestService.request({
            url: this.url
        }, Ie.None), t.then(Pd).then((n)=>{
            const r = Mo();
            return !n || !n.url || !n.version || !n.productVersion ? (this.setState(xe.Idle(r)), Promise.resolve(null)) : r === 1 ? (this.setState(xe.AvailableForDownload(n)), Promise.resolve(null)) : (this.setState(xe.Downloading), this.cleanup(n.version).then(()=>this.getUpdatePackagePath(n.version).then((s)=>ie.exists(s).then((i)=>{
                        if (i) return Promise.resolve(s);
                        const a = `${s}.tmp`;
                        return this.requestService.request({
                            url: n.url
                        }, Ie.None).then((o)=>{
                            if (!Md(o)) throw new Error("Server returned " + o.res.statusCode);
                            if (vG(o)) throw new Error("Server returned no content");
                            return o;
                        }).then((o)=>this.fileService.writeFile(x.file(a), o.stream)).then(n.sha256hash ? ()=>TXe(a, n.sha256hash) : ()=>{}).then(()=>ie.rename(a, s, !1)).then(()=>s);
                    })).then(async (s)=>{
                    if (this.availableUpdate = {
                        packagePath: s
                    }, this.setState(xe.Downloaded(n)), this.scheduleCheckForOutdatedUpdate(), this.configurationService.getValue("update.enableWindowsBackgroundUpdates")) {
                        if (this.productService.target === "user") {
                            if (await this.abortBeforeReadyIfOutdated(n.version) || this.state.type !== "downloaded") return;
                            this.doApplyUpdate();
                        }
                    } else {
                        if (await this.abortBeforeReadyIfOutdated(n.version) || this.state.type !== "downloaded") return;
                        this.setState(xe.Ready(n));
                    }
                })));
        }).catch((n)=>{
            this.logService.error(n);
            const r = e ? n.message || n : void 0;
            this.setState(xe.Idle(Mo(), r));
        });
    }
    async doDownloadUpdate(e) {
        e.update.url && this.nativeHostMainService.openExternal(void 0, e.update.url), this.setState(xe.Idle(Mo()));
    }
    async getUpdatePackagePath(e) {
        const t = await this.cachePath;
        return L(t, `CodeSetup-${this.productService.quality}-${e}.exe`);
    }
    async cleanup(e = null) {
        const t = e ? (i)=>!new RegExp(`${this.productService.quality}-${e}\\.exe$`).test(i) : ()=>!0, n = await this.cachePath, s = (await ie.readdir(n)).filter(t).map(async (i)=>{
            try {
                await jt.promises.unlink(L(n, i));
            } catch  {}
        });
        await Promise.all(s);
    }
    async doApplyUpdate() {
        if (this.isSystemShuttingDown) return this.logService.info("update#doApplyUpdate(): system shutdown in progress; skipping update"), Promise.resolve(void 0);
        if (this.state.type !== "downloaded" || !this.availableUpdate) return Promise.resolve(void 0);
        const e = this.state.update;
        this.setState(xe.Updating(e));
        const t = await this.cachePath;
        this.availableUpdate.updateFilePath = L(t, `CodeSetup-${this.productService.quality}-${e.version}.flag`), this.isUpdateSupervisorEnabled() && this.supportsUpdateSupervisorProtocol(e) && (this.availableUpdate.supervisorManifestPath = this.getUpdateSupervisorManifestPath()), await ie.writeFile(this.availableUpdate.updateFilePath, "flag");
        const n = [
            "/verysilent",
            "/log",
            `/update="${this.availableUpdate.updateFilePath}"`,
            "/nocloseapplications",
            "/mergetasks=!desktopicon,!quicklaunchicon"
        ];
        this.availableUpdate.supervisorManifestPath && n.push(`/supervisor="${this.availableUpdate.supervisorManifestPath}"`), p1(this.availableUpdate.packagePath, n, {
            detached: !0,
            stdio: [
                "ignore",
                "ignore",
                "ignore"
            ],
            windowsVerbatimArguments: !0
        }).once("exit", ()=>{
            this.availableUpdate = void 0, this.setState(xe.Idle(Mo()));
        });
        const s = `${this.productService.win32MutexName}-ready`, i = await import("@vscode/windows-mutex");
        yXe(()=>i.isActive(s)).then(()=>{
            this.setState(xe.Ready(e)), this.productService.target !== "user" && this.quitAndInstall();
        });
    }
    doQuitAndInstall() {
        if (this.isSystemShuttingDown) {
            this.logService.info("update#quitAndInstall(): system shutdown in progress; skipping update"), this.clearPreparedQuitAndInstall();
            return;
        }
        if (this.state.type !== "ready" || !this.availableUpdate) {
            this.clearPreparedQuitAndInstall();
            return;
        }
        this.logService.trace("update#quitAndInstall(): running raw#quitAndInstall()");
        const e = this.state.update, t = this.applicationStorageMainService.get(g1, -1, void 0), n = {
            updateVersion: e.version,
            ...this.getStoredUpdateTelemetryContext(),
            ...t !== void 0 ? {
                installationId: t
            } : {}
        };
        this.availableUpdate.updateFilePath ? (this.queueShutdownSafeUpdateEvent({
            type: "cursor.update.win32.promotionTriggered",
            data: {
                ...n,
                triggerKind: "updateFlagUnlinked"
            }
        }), jt.unlinkSync(this.availableUpdate.updateFilePath)) : (this.queueShutdownSafeUpdateEvent({
            type: "cursor.update.win32.promotionTriggered",
            data: {
                ...n,
                triggerKind: "installerSpawned"
            }
        }), p1(this.availableUpdate.packagePath, [
            "/silent",
            "/log",
            "/mergetasks=!desktopicon,!quicklaunchicon"
        ], {
            detached: !0,
            stdio: [
                "ignore",
                "ignore",
                "ignore"
            ]
        })), this.preparedUpdateSupervisor = void 0;
    }
    prepareForQuitAndInstall() {
        if (this.preparedUpdateSupervisor = void 0, !this.isUpdateSupervisorEnabled()) return;
        const e = this.availableUpdate?.supervisorManifestPath, t = this.getPendingUpdateInstallationInfo();
        if (!e || !this.availableUpdate?.updateFilePath || !t || !oge(t.installationId)) return;
        const n = L(st(process.execPath), "tools", ol);
        if (!jt.existsSync(n)) {
            this.logService.warn("[UpdateSupervisor] Win32 helper is unavailable");
            return;
        }
        const r = st(e), s = L(r, t.installationId), i = L(s, ol), a = {
            schemaVersion: h1,
            installationId: t.installationId,
            targetVersion: t.targetVersion,
            createdAtUnixMs: Date.now()
        };
        try {
            this.pruneUpdateSupervisorAttempts(r), jt.mkdirSync(s, {
                recursive: !0
            }), jt.copyFileSync(n, i), cge(e, a), this.preparedUpdateSupervisor = {
                installation: t,
                manifestPath: e,
                attemptDirectory: s,
                supervisorPath: i
            }, this.logService.info(`[UpdateSupervisor] Prepared Win32 supervisor (installationId=${t.installationId}, targetVersion=${t.targetVersion})`);
        } catch (o) {
            this.logService.warn("[UpdateSupervisor] Failed to prepare Win32 supervisor", o), this.removeUpdateSupervisorAttempt({
                manifestPath: e,
                attemptDirectory: s,
                installationId: t.installationId
            });
        }
    }
    clearPreparedQuitAndInstall() {
        const e = this.preparedUpdateSupervisor;
        this.preparedUpdateSupervisor = void 0, e && (this.logService.info(`[UpdateSupervisor] Discarding Win32 supervisor (installationId=${e.installation.installationId})`), this.removeUpdateSupervisorAttempt({
            manifestPath: e.manifestPath,
            attemptDirectory: e.attemptDirectory,
            installationId: e.installation.installationId
        }));
    }
    onUpdateRestartCompleted(e) {
        if (!e.installationId) return;
        const t = this.readUpdateSupervisorManifest();
        if (!t || t.installationId !== e.installationId || t.targetVersion !== e.targetVersion) {
            this.logService.warn(`[UpdateSupervisor] Win32 restart acknowledgement skipped (installationId=${e.installationId}, targetVersion=${e.targetVersion})`);
            return;
        }
        const n = L(this.getUpdateSupervisorRoot(), t.installationId, "app-ready.json");
        try {
            cge(n, {
                schemaVersion: h1,
                installationId: t.installationId,
                currentVersion: e.currentVersion
            }), this.logService.info(`[UpdateSupervisor] Win32 restart acknowledged (installationId=${t.installationId}, currentVersion=${e.currentVersion})`);
        } catch (r) {
            this.logService.warn("[UpdateSupervisor] Failed to acknowledge Win32 restart", r);
        }
    }
    supportsUpdateSupervisorProtocol(e) {
        return this.productService.target === "user" && Mo() === 0 && e.version !== "unknown" && e.productVersion !== "unknown" && jt.existsSync(L(st(process.execPath), "tools", ol));
    }
    async armUpdateSupervisor(e) {
        try {
            const t = p1(e.supervisorPath, [
                "--supervise",
                e.manifestPath
            ], {
                detached: !0,
                stdio: "ignore"
            });
            t.once("error", (i)=>{
                this.logService.warn(`[UpdateSupervisor] Win32 supervisor process error (installationId=${e.installation.installationId})`, i);
            }), t.unref();
            const n = await import("@vscode/windows-mutex"), r = wXe(e.installation.installationId), s = Date.now() + hge;
            for(; Date.now() < s;){
                if (n.isActive(r)) {
                    this.logService.info(`[UpdateSupervisor] Armed Win32 supervisor (installationId=${e.installation.installationId}, pid=${t.pid ?? "unknown"})`);
                    return;
                }
                await En(50);
            }
            this.logService.warn(`[UpdateSupervisor] Win32 supervisor did not become ready (installationId=${e.installation.installationId})`);
        } catch (t) {
            this.logService.warn(`[UpdateSupervisor] Failed to arm Win32 supervisor (installationId=${e.installation.installationId})`, t);
        }
    }
    getUpdateSupervisorRoot() {
        return L(this.environmentMainService.userDataPath, lge, dge);
    }
    getUpdateSupervisorManifestPath() {
        return L(this.getUpdateSupervisorRoot(), uge);
    }
    readUpdateSupervisorManifest() {
        try {
            return age(jt.readFileSync(this.getUpdateSupervisorManifestPath(), "utf8"));
        } catch  {
            return;
        }
    }
    pruneUpdateSupervisorAttempts(e) {
        try {
            jt.mkdirSync(e, {
                recursive: !0
            });
            for (const t of jt.readdirSync(e, {
                withFileTypes: !0
            }))try {
                jt.rmSync(L(e, t.name), {
                    force: !0,
                    recursive: t.isDirectory()
                });
            } catch  {}
        } catch  {}
    }
    removeUpdateSupervisorAttempt(e) {
        try {
            age(jt.readFileSync(e.manifestPath, "utf8"))?.installationId === e.installationId && jt.rmSync(e.manifestPath, {
                force: !0
            });
        } catch  {}
        try {
            jt.rmSync(e.attemptDirectory, {
                force: !0,
                recursive: !0
            });
        } catch  {}
    }
    getPostRestartUpdateSnapshot() {
        const e = st(process.execPath), t = _t(e).toLowerCase() === "_", n = t ? st(e) : e, r = _t(process.execPath), s = L(n, "_");
        return {
            hadRestartMarker: !0,
            rootInstallDirExists: this.pathExists(n),
            rootCursorExeExists: this.pathExists(L(n, r)),
            stagedDirExists: this.pathExists(s),
            stagedCursorExeExists: this.pathExists(L(s, r)),
            execPathUnderStagedDir: t
        };
    }
    pathExists(e) {
        try {
            return jt.existsSync(e);
        } catch  {
            return !1;
        }
    }
    storeMarkerlessPostRestartSnapshot() {
        try {
            const e = this.applicationStorageMainService.getBoolean("cursor.update.restartMarker", -1, !1);
            if (e && this.applicationStorageMainService.get("cursor.update.targetVersion", -1, void 0)) return;
            const t = this.getPostRestartUpdateSnapshot();
            if (!t.stagedDirExists && !t.execPathUnderStagedDir) return;
            const n = this.applicationStorageMainService.get(g1, -1, void 0);
            this.storeUpdateEvent({
                type: "cursor.update.win32.postRestartSnapshot",
                data: {
                    currentVersion: this.productService.version,
                    ...t,
                    hadRestartMarker: e,
                    ...this.getStoredUpdateTelemetryContext(),
                    ...n !== void 0 ? {
                        installationId: n
                    } : {}
                }
            });
        } catch (e) {
            this.logService.error("update#initialize - failed to report markerless post-restart snapshot", e);
        }
    }
    recoverInterruptedUpdateSwap() {
        try {
            if (!this.applicationStorageMainService.getBoolean(rge, -1, !1)) return;
            const e = st(process.execPath), n = _t(e).toLowerCase() === "_" ? st(e) : e, r = this.pathExists(L(n, mge)), s = this.pathExists(L(n, pge));
            if (!r && !s) return;
            const a = [
                L(n, "_", "tools", ol),
                L(n, "tools", ol)
            ].find((o)=>this.pathExists(o));
            if (a !== void 0) try {
                const o = p1(a, [
                    "--recover",
                    n
                ], {
                    detached: !0,
                    stdio: "ignore"
                });
                o.once("error", (l)=>this.logService.warn("update#initialize - interrupted update swap recovery failed to start", l)), o.unref();
            } catch (o) {
                this.logService.warn("update#initialize - interrupted update swap recovery failed to spawn", o);
            }
            else this.logService.warn(`update#initialize - interrupted update swap detected but ${ol} is missing; cannot recover`);
        } catch (e) {
            this.logService.error("update#initialize - failed to recover interrupted update swap", e);
        }
    }
    getShutdownSafeUpdateEventsPath() {
        return L(this.environmentMainService.userDataPath, "cursor-update-pending-events.json");
    }
    readShutdownSafeUpdateEvents(e) {
        for (const t of [
            `${e}.tmp`,
            e
        ])try {
            const n = JSON.parse(jt.readFileSync(t, "utf8"));
            if (Array.isArray(n)) return n;
        } catch  {}
        return [];
    }
    queueShutdownSafeUpdateEvent(e) {
        try {
            const t = this.getShutdownSafeUpdateEventsPath(), n = this.readShutdownSafeUpdateEvents(t);
            for(; n.length >= 20;)n.shift();
            n.push(e.recordedAtUnixMs === void 0 ? {
                ...e,
                recordedAtUnixMs: Date.now()
            } : e);
            const r = `${t}.tmp`;
            jt.writeFileSync(r, JSON.stringify(n), {
                flush: !0
            }), jt.renameSync(r, t);
        } catch (t) {
            this.logService.error("update#queueShutdownSafeUpdateEvent - failed to persist event", t);
        }
    }
    drainShutdownSafeUpdateEvents() {
        try {
            const e = this.getShutdownSafeUpdateEventsPath(), t = `${e}.tmp`;
            if (!jt.existsSync(e) && !jt.existsSync(t)) return;
            const n = this.readShutdownSafeUpdateEvents(e);
            jt.rmSync(e, {
                force: !0
            }), jt.rmSync(t, {
                force: !0
            });
            for (const r of n)this.storeUpdateEvent(r);
        } catch (e) {
            this.logService.error("update#drainShutdownSafeUpdateEvents - failed", e);
        }
    }
    storeUpdateEvent(e) {
        const t = this.applicationStorageMainService.get(nl, -1, "[]"), n = JSON.parse(t);
        for(; n.length > 30;)n.shift();
        n.push(e.recordedAtUnixMs === void 0 ? {
            ...e,
            recordedAtUnixMs: Date.now()
        } : e), this.applicationStorageMainService.store(nl, JSON.stringify(n), -1, 1);
    }
    getUpdateType() {
        return Mo();
    }
    async _applySpecificUpdate(e) {
        if (this.state.type !== "idle") return;
        const t = this.configurationService.getValue("update.enableWindowsBackgroundUpdates"), n = {
            version: "unknown",
            productVersion: "unknown"
        };
        this.setState(xe.Downloading), this.availableUpdate = {
            packagePath: e
        }, this.setState(xe.Downloaded(n)), t ? this.productService.target === "user" && this.doApplyUpdate() : this.setState(xe.Ready(n));
    }
}, B([
    Ue
], of.prototype, "cachePath", null), of = B([
    w(1, ht),
    w(2, ot),
    w(3, Fi),
    w(4, qe),
    w(5, li),
    w(6, Z),
    w(7, cn),
    w(8, _s),
    w(9, et),
    w(10, Cn)
], of);

}
