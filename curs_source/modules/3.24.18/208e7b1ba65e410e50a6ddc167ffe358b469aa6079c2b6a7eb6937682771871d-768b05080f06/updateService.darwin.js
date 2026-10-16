import { Re, xO } from "./abstractUpdateService.js";
import { le } from "./async.js";
import { at, ot } from "./configuration.js";
import { sc } from "./decorators.js";
import { Ye, qe } from "./environmentMainService.js";
import { O, se } from "./event.js";
import { Pd } from "./extHostContinuousProfilingService.js";
import { B, Ue } from "./ipc.js";
import { j, ve } from "./lifecycle.js";
import { En, Vt, ht } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { $e, Jt } from "./network.js";
import { Tt, et } from "./productService.js";
import { fs, li } from "./request_2.js";
import { _a } from "./sentry.js";
import { ms } from "./sessionReplay.js";
import { Vpe, _O } from "./shutdownHangWatchdog.js";
import { Rr } from "./spanUtils.js";
import { Cn, or } from "./storageMainService.js";
import { Fi, ts } from "./telemetry.js";
import { gc, no, w } from "./themeMainService.js";
import { c1, sf } from "./tracingService.js";
import { h } from "./tslib.es6.js";
import { Eo, xe } from "./update.js";
import { Io, khe, mJe } from "./updateDiagnostics.js";
import { $he, BO, Hhe, VJe, Vhe, jhe } from "./updateDiagnosticsLogSanitizer.js";
import { qJe } from "./updateFileTail.js";
import { IO, She, yhe } from "./updateSupervisor.js";
import { Khe, Yhe, zJe, zhe } from "./updateSupervisorResult.js";
import * as $Je from "fs";
import { spawnSync as GO } from "child_process";
import { basename as JJe } from "path";
import { spawn as Jhe } from "child_process";
import { createHash as NJe } from "crypto";
import Na from "electron";
import { homedir as VO } from "os";
import * as YJe from "original-fs";
import * as Zt from "fs";
import { dirname as _i } from "path";
import { join as kn } from "path";
async function DJe(e, t) {
    let n = 0;
    const r = e.toString("utf8"), s = [];
    let i = "";
    const a = Math.max(1, Math.floor(t.yieldEveryChars ?? Vhe)), o = t.yieldToEventLoop ?? GJe;
    let l = 0;
    const d = {
        inPrivateKey: !1
    }, u = [
        ...t.paths,
        {
            value: t.homeDir,
            placeholder: "~"
        }
    ].filter((m)=>typeof m.value == "string" && m.value.length > 0).sort((m, f)=>f.value.length - m.value.length);
    for(let m = 0; m < r.length;){
        const f = FJe(r, m, a), v = f - m;
        m = f;
        const T = i + r.slice(m - v, m), S = xJe(T, m === r.length);
        let k = T.slice(0, S);
        if (i = T.slice(S), k.length > 0) {
            if (d.inPrivateKey || k.includes("PRIVATE KEY-----")) {
                const y = WJe(k, d);
                k = y.value, n += y.count;
            }
            for (const y of u){
                const b = UJe(k, y.value);
                b > 0 && (n += b, k = k.split(y.value).join(y.placeholder));
            }
            if (k.includes("/Users/") || k.includes("/home/")) {
                const y = Bhe(k, /(\/Users\/|\/home\/)[^/\s'"]+/g, ()=>"~");
                k = y.value, n += y.count;
            }
            if (LJe(k)) for (const y of Hhe){
                const b = Bhe(k, y.pattern, y.replace);
                k = b.value, n += b.count;
            }
            s.push(k);
        }
        l += v, l >= a && m < r.length && (l = 0, await o());
    }
    return {
        rawTailSha256: NJe("sha256").update(e).digest("hex"),
        rawTailBytes: e.byteLength,
        sanitizedText: s.join(""),
        redactionCount: n
    };
}
function OJe(e, t) {
    return [
        `raw_tail_sha256=${e.rawTailSha256}`,
        `raw_tail_bytes=${e.rawTailBytes}`,
        `file_bytes=${t}`,
        `truncated_to_tail=${t > e.rawTailBytes}`,
        `redaction_count=${e.redactionCount}`,
        "",
        "--- sanitized ShipIt_stderr.log tail ---",
        e.sanitizedText
    ].join(`
`);
}
function Bhe(e, t, n) {
    let r = 0;
    return {
        value: e.replace(t, (...i)=>(r++, n(...i))),
        count: r
    };
}
function LJe(e) {
    const t = e.toLowerCase();
    return t.includes("://") || t.includes("bearer") || t.includes("basic") || t.includes("negotiate") || t.includes("ntlm") || t.includes("digest") || t.includes("token") || t.includes("secret") || t.includes("password") || t.includes("passwd") || t.includes("pwd") || t.includes("api_key") || t.includes("api-key") || t.includes("apikey") || t.includes("access_key") || t.includes("access-key") || t.includes("accesskey") || t.includes("auth") || t.includes("cookie") || t.includes("credential") || t.includes("private_key") || t.includes("private-key") || e.includes("AKIA") || e.includes("ASIA") || t.includes("ghp_") || t.includes("gho_") || t.includes("ghu_") || t.includes("ghs_") || t.includes("ghr_") || t.includes("github_pat_") || t.includes("xox") || t.includes("npm_") || t.includes("sk-") || e.includes("eyJ");
}
function UJe(e, t) {
    let n = 0, r = e.indexOf(t);
    for(; r !== -1;)n++, r = e.indexOf(t, r + t.length);
    return n;
}
function xJe(e, t) {
    if (t) return e.length;
    const n = e.lastIndexOf(`
`);
    let r = e.lastIndexOf("\r");
    r === e.length - 1 && (r = e.lastIndexOf("\r", e.length - 2));
    const s = Math.max(r, n);
    return s === -1 ? 0 : e.charCodeAt(s) === 13 && e.charCodeAt(s + 1) === 10 ? s + 2 : s + 1;
}
function FJe(e, t, n) {
    return Math.min(e.length, t + n);
}
function WJe(e, t) {
    let n = 0, r = 0, s = "";
    for(; r < e.length;){
        if (t.inPrivateKey) {
            const l = BO.exec(e.slice(r));
            if (!l) return {
                value: Ghe(e),
                count: n
            };
            t.inPrivateKey = !1, r += l.index + l[0].length;
            continue;
        }
        const i = jhe.exec(e.slice(r));
        if (!i) {
            s += e.slice(r);
            break;
        }
        s += e.slice(r, r + i.index), s += $he, n++;
        const a = r + i.index + i[0].length, o = BO.exec(e.slice(a));
        if (!o) {
            if (BJe(e, a)) return t.inPrivateKey = !0, {
                value: s + Ghe(e),
                count: n
            };
            r = a;
            continue;
        }
        r = a + o.index + o[0].length;
    }
    return {
        value: s,
        count: n
    };
}
function BJe(e, t) {
    for(let n = t; n < e.length; n++){
        const r = e.charCodeAt(n);
        if (r === 10 || r === 13) return !0;
        if (e.charAt(n).trim().length > 0) return !1;
    }
    return !0;
}
function Ghe(e) {
    return e.endsWith(`\r
`) ? `\r
` : e.endsWith(`
`) ? `
` : e.endsWith("\r") ? "\r" : "";
}
async function GJe() {
    await En(0);
}
async function jJe(e, t, n = HJe) {
    let r;
    try {
        r = await n(e);
        const s = (await r.stat()).size, i = Math.min(s, Math.max(0, Math.floor(t)));
        if (i <= 0) return {
            data: Buffer.alloc(0),
            fileBytes: s
        };
        const a = Buffer.allocUnsafe(i), { bytesRead: o } = await r.read(a, 0, i, s - i);
        return {
            data: a.subarray(0, o),
            fileBytes: s
        };
    } catch  {
        return;
    } finally{
        if (r !== void 0) try {
            await r.close();
        } catch  {}
    }
}
async function HJe(e) {
    return $Je.promises.open(e, "r");
}
function KJe({ raw: e, installationId: t }) {
    let n;
    try {
        n = JSON.parse(e);
    } catch  {
        return;
    }
    if (!qhe(n) || n.schemaVersion !== 1 || n.installationId !== t || n.status !== "failure") return;
    const r = {
        supervisorStatus: "failure",
        supervisorFailureCode: typeof n.code == "string" && Khe.has(n.code) ? n.code : "unknown"
    }, s = qhe(n.details) ? n.details : {};
    typeof s.phase == "string" && zhe.has(s.phase) && (r.supervisorTimeoutPhase = s.phase);
    const i = typeof s.line == "string" ? Yhe.exec(s.line) : null;
    return i && (r.shipItErrorDomain = i[1], r.shipItErrorCode = Number(i[2])), r;
}
function qhe(e) {
    return typeof e == "object" && e !== null;
}
function Xhe() {
    const e = $O();
    if (!e) return;
    const t = Qhe(e);
    for(let n = 0; n < 100; n++){
        const r = n === 0 ? "ShipIt_stderr.log" : `ShipIt_stderr.log.${n}`, s = kn(t, r);
        try {
            return Zt.accessSync(s, Zt.constants.W_OK), s;
        } catch  {
            if (!Zt.existsSync(s)) return s;
        }
    }
    return kn(t, "ShipIt_stderr.log");
}
function Qhe(e) {
    return kn(VO(), "Library", "Caches", `${e}.ShipIt`);
}
function XJe(e) {
    let t;
    try {
        t = Zt.readdirSync(e).filter((s)=>!s.startsWith("ShipIt_std"));
    } catch  {
        return !1;
    }
    if (t.length === 0) return !1;
    const n = `${e}.stale-${Date.now()}`;
    let r = 0;
    try {
        Zt.mkdirSync(n);
        for (const s of t)Zt.renameSync(kn(e, s), kn(n, s)), r++;
    } catch  {}
    return YJe.promises.rm(n, {
        recursive: !0,
        force: !0
    }).catch(()=>{}), r === t.length;
}
function $O() {
    try {
        const e = _i(_i(process.execPath)), r = Zt.readFileSync(kn(e, "Info.plist"), "utf8").match(/<key>CFBundleIdentifier<\/key>\s*<string>([^<]+)<\/string>/)?.[1]?.trim();
        return r && r.length > 0 ? r : void 0;
    } catch  {
        return;
    }
}
async function QJe(e) {
    const t = Xhe();
    if (!t) return;
    const n = await jJe(t, e);
    if (n === void 0) return;
    const r = _i(_i(process.execPath)), s = await DJe(n.data, {
        homeDir: VO(),
        paths: [
            {
                value: _i(t),
                placeholder: "<shipItDir>"
            },
            {
                value: r,
                placeholder: "<appContentsDir>"
            },
            {
                value: _i(r),
                placeholder: "<appBundle>"
            }
        ]
    });
    return {
        filename: "ShipIt_stderr.sanitized.log",
        data: OJe(s, n.fileBytes),
        contentType: "text/plain"
    };
}
function ZJe(e) {
    let t;
    try {
        t = JSON.parse(e);
    } catch  {
        return;
    }
    if (!jO(t)) return;
    const n = t;
    if (!(n.schemaVersion !== 1 || typeof n.createdAt != "string" || typeof n.parentPid != "number" || typeof n.timeoutMs != "number" || typeof n.elapsedMs != "number" || typeof n.expectedCommand != "string" || n.actualCommand !== void 0 && typeof n.actualCommand != "string" || n.samplePath !== void 0 && typeof n.samplePath != "string" || n.sigkillSent !== void 0 && typeof n.sigkillSent != "boolean")) return {
        schemaVersion: n.schemaVersion,
        createdAt: n.createdAt,
        parentPid: n.parentPid,
        timeoutMs: n.timeoutMs,
        elapsedMs: n.elapsedMs,
        expectedCommand: n.expectedCommand,
        actualCommand: n.actualCommand,
        samplePath: n.samplePath,
        sigkillSent: n.sigkillSent === !0
    };
}
function eXe(e) {
    let t;
    try {
        t = JSON.parse(e);
    } catch  {
        return;
    }
    if (!jO(t)) return;
    const n = t;
    if (!(n.schemaVersion !== 1 || typeof n.installationId != "string" || typeof n.currentVersion != "string" || typeof n.targetVersion != "string" || n.appearance !== "dark" && n.appearance !== "light" || typeof n.bundleIdentifier != "string" || typeof n.targetBundlePath != "string" || typeof n.shipItStatePath != "string" || typeof n.shipItLogPath != "string" || typeof n.shipItLogStartOffset != "number" || typeof n.eventsPath != "string" || typeof n.resultPath != "string" || typeof n.appReadyPath != "string" || typeof n.oldMainPid != "number" || !Number.isInteger(n.oldMainPid) || typeof n.createdAt != "string")) return {
        schemaVersion: n.schemaVersion,
        installationId: n.installationId,
        currentVersion: n.currentVersion,
        targetVersion: n.targetVersion,
        appearance: n.appearance,
        bundleIdentifier: n.bundleIdentifier,
        targetBundlePath: n.targetBundlePath,
        shipItStatePath: n.shipItStatePath,
        shipItLogPath: n.shipItLogPath,
        shipItLogStartOffset: n.shipItLogStartOffset,
        eventsPath: n.eventsPath,
        resultPath: n.resultPath,
        appReadyPath: n.appReadyPath,
        oldMainPid: n.oldMainPid,
        createdAt: n.createdAt
    };
}
function Zhe(e, t) {
    const n = _i(e), r = `${e}.${process.pid}.tmp`;
    Zt.mkdirSync(n, {
        recursive: !0
    }), Zt.writeFileSync(r, `${JSON.stringify(t, void 0, 2)}
`), Zt.renameSync(r, e);
}
function tXe(e) {
    try {
        return Zt.statSync(e).size;
    } catch  {
        return 0;
    }
}
function jO(e) {
    return typeof e == "object" && e !== null;
}
async function nXe(e) {
    const t = Date.now() + e.timeoutMs;
    for(;;){
        const n = await e.tracingService.getIsLegacyPrivacyMode(), r = rXe();
        if (n === !0 || n === !1 && (!e.shouldWaitForUser || r)) return {
            privacyMode: n,
            hasUser: r
        };
        const s = t - Date.now();
        if (s <= 0) return {
            privacyMode: n,
            hasUser: r
        };
        await En(Math.min(nge, s));
    }
}
function rXe() {
    const e = ms()?.getUser();
    return typeof e?.email == "string" && e.email.length > 0 || typeof e?.id == "string" && e.id.length > 0;
}
function sXe(e) {
    if (e) try {
        return {
            filename: JJe(e),
            data: Zt.readFileSync(e, "utf8"),
            contentType: "text/plain"
        };
    } catch  {
        return;
    }
}
var HO, ege, tge, nge, l1, qO, KO, zO, YO, JO, Ao;
export { $O, Ao, BJe, Bhe, DJe, FJe, GJe, Ghe, HJe, HO, JO, KJe, KO, LJe, OJe, QJe, Qhe, UJe, WJe, XJe, Xhe, YO, ZJe, Zhe, eXe, ege, jJe, jO, l1, nXe, nge, qO, qhe, rXe, sXe, tXe, tge, xJe, zO };
var __wakaru_iXe_initialized = false;
export function iXe() {
if (__wakaru_iXe_initialized) return;
__wakaru_iXe_initialized = true;
"use strict";
h(), le(), sc(), se(), j(), $e(), at(), Ye(), Vt(), te(), Tt(), fs(), ts(), Eo(), mJe(), yhe(), xO(), or(), _a(), c1(), _O(), gc(), VJe(), qJe(), zJe(), HO = 5e3, ege = "darwin-update-exit-watchdog.json", tge = 6e4, nge = 1e4, l1 = "cursor-update-supervisor", qO = "update-supervisor", KO = "active.json", zO = 113, YO = "cursor.update.shipItCacheResetTarget", JO = "cursor.update.shipItCacheResetAt", Ao = class extends Re {
    constructor(e, t, n, r, s, i, a, o, l, d, u){
        super(t, n, s, i, a, o, l), this.machineId = e, this.telemetryService = r, this.tracingService = d, this.themeMainService = u, this.disposables = new ve, this._usingBackupUrl = !1, t.setRelaunchHandler(this);
    }
    get onRawError() {
        return O.fromNodeEventEmitter(Na.autoUpdater, "error", (e, t)=>t);
    }
    get onRawUpdateNotAvailable() {
        return O.fromNodeEventEmitter(Na.autoUpdater, "update-not-available");
    }
    get onRawUpdateAvailable() {
        return O.fromNodeEventEmitter(Na.autoUpdater, "update-available");
    }
    get onRawUpdateDownloaded() {
        return O.fromNodeEventEmitter(Na.autoUpdater, "update-downloaded", (e, t, n, r)=>({
                version: n,
                productVersion: n,
                timestamp: r
            }));
    }
    handleRelaunch(e) {
        return e?.addArgs || e?.removeArgs || this.state.type !== "ready" ? !1 : (this.logService.trace("update#handleRelaunch(): running raw#quitAndInstall()"), this.markUpdateInstallation(), this.doQuitAndInstall(), !0);
    }
    async initialize() {
        this.onRawError(this.onError, this, this.disposables), this.onRawUpdateAvailable(this.onUpdateAvailable, this, this.disposables), this.onRawUpdateDownloaded(this.onUpdateDownloaded, this, this.disposables), this.onRawUpdateNotAvailable(this.onUpdateNotAvailable, this, this.disposables), await super.initialize(), this.reportExitWatchdogMarkerIfPresent(), this.disposables.add(this.applicationStorageMainService.onDidChangeValue(-1, "cursorAuth/accessToken", this.disposables)((e)=>{
            this.refreshFeedUrl();
        })), this.logUpdateSupervisorGate("startup"), this.disposables.add(this.applicationStorageMainService.onDidChangeValue(-1, IO, this.disposables)(()=>this.logUpdateSupervisorGate("storage-change")));
    }
    logUpdateSupervisorGate(e) {
        this.logService.info(`[UpdateSupervisor] Cached gate ${e} (enabled=${this.isUpdateSupervisorEnabled()})`);
    }
    onError(e) {
        this.logService.info("UpdateService onError()"), this.logService.error("UpdateService (using backup url: " + this._usingBackupUrl + ") error:", e);
        const t = this.state.type === "downloading", n = this.state.type === "checking for updates" && this.state.explicit ? e : void 0;
        this.setState(xe.Idle(1, n)), t && this.resetNativeUpdaterAfterInterruptedDownload("error", e);
    }
    resetNativeUpdaterAfterInterruptedDownload(e, t) {
        if (this.reportInterruptedDownloadToSentry(e, t), !this.url) {
            this.logService.warn(`UpdateService could not reset native updater after interrupted download (${e}): no feed URL`);
            return;
        }
        this.logService.warn(`UpdateService resetting native updater after interrupted download (${e})`), this.setFeedURL(this.url);
    }
    async reportInterruptedDownloadToSentry(e, t) {
        try {
            if (!await this.waitForSentryBootstrap()) return;
            const n = t?.match(/OSStatus error (-?\d+)/)?.[1], r = {
                level: "warning",
                exception: {
                    values: [
                        {
                            type: "DarwinUpdateDownloadInterrupted",
                            value: `Update download interrupted (${e})`
                        }
                    ]
                },
                tags: {
                    "event.process": "main",
                    cursor_update_event: "darwin_update_download_interrupted",
                    interruption_reason: e,
                    ...n !== void 0 ? {
                        os_status: n
                    } : {}
                },
                extra: {
                    product_version: this.productService.version,
                    product_quality: this.productService.quality
                }
            };
            Rr()?.captureEvent(r);
        } catch (n) {
            this.logService.warn("UpdateService reportInterruptedDownloadToSentry() - failed", n);
        }
    }
    async reportExitWatchdogMarkerIfPresent() {
        const e = this.getExitWatchdogMarkerPath();
        if (Zt.existsSync(e)) try {
            const t = ZJe(Zt.readFileSync(e, "utf8"));
            try {
                Zt.unlinkSync(e);
            } catch  {}
            if (!t || (this.logService.warn(`UpdateService detected previous Darwin exit watchdog timeout (elapsed=${t.elapsedMs}ms)`), !await this.waitForSentryBootstrap())) return;
            const n = sXe(t.samplePath), r = {
                level: "warning",
                exception: {
                    values: [
                        {
                            type: "DarwinUpdateExitWatchdogTimeout",
                            value: "Darwin update exit watchdog timed out"
                        }
                    ]
                },
                tags: {
                    "event.process": "main",
                    cursor_update_event: "darwin_exit_watchdog_timeout",
                    schema_version: String(t.schemaVersion),
                    expected_command: t.expectedCommand,
                    sample_attached: String(n !== void 0)
                },
                extra: {
                    created_at: t.createdAt,
                    parent_pid: t.parentPid,
                    timeout_ms: t.timeoutMs,
                    elapsed_ms: t.elapsedMs,
                    sigkill_sent: t.sigkillSent,
                    product_version: this.productService.version,
                    product_quality: this.productService.quality
                }
            };
            Rr()?.captureEvent(r, {
                attachments: n ? [
                    n
                ] : []
            });
        } catch (t) {
            this.logService.warn("UpdateService reportExitWatchdogMarkerIfPresent() - failed to process marker", t);
        }
    }
    async waitForSentryBootstrap(e = {}) {
        try {
            await this.applicationStorageMainService.whenReady;
            const t = this.applicationStorageMainService.get("cursorAuth/accessToken", -1), n = await nXe({
                tracingService: this.tracingService,
                shouldWaitForUser: !!t,
                timeoutMs: tge
            });
            if (n.privacyMode === !0) return this.logService.info("UpdateService waitForSentryBootstrap() - skipping report because privacy mode is enabled"), !1;
            if (n.privacyMode === null && (this.logService.warn("UpdateService waitForSentryBootstrap() - timed out waiting for privacy mode state"), e.requireKnownPrivacyMode)) return !1;
            t && !n.hasUser && this.logService.warn("UpdateService waitForSentryBootstrap() - timed out waiting for Sentry user context");
        } catch (t) {
            if (this.logService.warn("UpdateService waitForSentryBootstrap() - failed while waiting for Sentry bootstrap", t), e.requireKnownPrivacyMode) return !1;
        }
        return !0;
    }
    refreshFeedUrl() {
        if (!this.url || !this.productService.quality) return;
        this.logService.info("UpdateService refreshFeedUrl() - Auth token changed, refreshing feed URL");
        const e = this.buildUpdateFeedUrl(this.productService.quality);
        e && e !== this.url && (this.url = e, this.logService.info("UpdateService refreshFeedUrl() - Feed URL updated"));
    }
    buildUpdateFeedUrl(e, t = !1) {
        let n;
        this.productService.darwinUniversalAssetId ? n = this.productService.darwinUniversalAssetId : n = process.arch === "x64" ? "darwin" : "darwin-arm64";
        const r = this.createUpdateURL(n, e, this.productService, t);
        return t ? r : this.setFeedURL(r);
    }
    shouldSendAuthHeaders() {
        return !0;
    }
    setFeedURL(e) {
        try {
            const t = this.getUpdateRequestHeaders();
            return Na.autoUpdater.setFeedURL({
                url: e,
                headers: t
            }), e;
        } catch (t) {
            this.logService.error("Failed to set update feed URL", t);
            return;
        }
    }
    getPendingUpdateVersionIfAbortable() {
        return this.state.type === "ready" ? this.state.update?.version : void 0;
    }
    async getOutdatedUpdateCheckResponseVersion(e) {
        const t = await Pd(e);
        return t?.url ? t.name : void 0;
    }
    invalidateUpdate(e, t) {
        if (!t) {
            const n = this.getReinstallUpdateCheckURL();
            if (n) {
                this.setFeedURL(n), this.doCheckForUpdates(!1);
                return;
            }
        }
        this.setState(xe.Idle(1));
    }
    doCheckForUpdates(e) {
        this.setState(xe.CheckingForUpdates(e)), Na.autoUpdater.getFeedURL() !== this.url && this.url && this.setFeedURL(this.url), Na.autoUpdater.checkForUpdates();
    }
    onUpdateAvailable() {
        this.logService.info("UpdateService onUpdateAvailable()"), this.state.type === "checking for updates" && this.setState(xe.Downloading);
    }
    async onUpdateDownloaded(e) {
        if (this.logService.info("UpdateService onUpdateDownloaded()"), this.state.type === "downloading") {
            if (this.isReinstallUpdateCheckURL(Na.autoUpdater.getFeedURL()) && this.url) {
                this.logService.info("update#onUpdateDownloaded() - canceled outdated update"), this.setFeedURL(this.url), this.setState(xe.Idle(1));
                return;
            }
            this.setState(xe.Downloaded(e)), !await this.abortBeforeReadyIfOutdated(e.version) && this.state.type === "downloaded" && (this.setState(xe.Ready(e)), this.scheduleCheckForOutdatedUpdate());
        }
    }
    onUpdateNotAvailable() {
        this.logService.info("UpdateService onUpdateNotAvailable()");
        const e = this.state.type === "downloading";
        this.state.type !== "checking for updates" && !e || (this.setState(xe.Idle(1)), e && this.resetNativeUpdaterAfterInterruptedDownload("update-not-available"));
    }
    doQuitAndInstall() {
        this.logService.info("UpdateService doQuitAndInstall()"), this.logService.trace("update#quitAndInstall(): running raw#quitAndInstall()"), this.armPostUpdateSupervisor(), Na.autoUpdater.quitAndInstall(), this.armPostUpdateExitWatchdog();
    }
    prepareForQuitAndInstall() {
        this.preparedUpdateSupervisor = void 0;
        const e = this.isUpdateSupervisorEnabled();
        if (this.logService.info(`[UpdateSupervisor] Snapshotting before quit (enabled=${e})`), !e) return;
        const t = this.getPendingUpdateInstallationInfo(), n = $O(), r = Xhe(), s = this.getUpdateSupervisorSourcePath();
        if (!t || !n || !r || !s) {
            this.logService.warn(`[UpdateSupervisor] Preparation failed (installation=${t !== void 0}, bundleIdentifier=${n !== void 0}, shipItLog=${r !== void 0}, helper=${s !== void 0})`);
            return;
        }
        this.preparedUpdateSupervisor = {
            installation: t,
            bundleIdentifier: n,
            shipItLogPath: r,
            shipItLogStartOffset: tXe(r),
            supervisorSourcePath: s,
            appearance: this.themeMainService.getColorScheme().dark ? "dark" : "light",
            targetBundlePath: _i(_i(_i(process.execPath)))
        }, this.logService.info(`[UpdateSupervisor] Prepared before quit (installationId=${t.installationId}, targetVersion=${t.targetVersion})`);
    }
    clearPreparedQuitAndInstall() {
        this.preparedUpdateSupervisor && this.logService.info(`[UpdateSupervisor] Discarding prepared attempt after shutdown veto (installationId=${this.preparedUpdateSupervisor.installation.installationId})`), this.preparedUpdateSupervisor = void 0;
    }
    armPostUpdateSupervisor() {
        const e = this.preparedUpdateSupervisor;
        if (this.preparedUpdateSupervisor = void 0, !e) {
            this.logService.info("[UpdateSupervisor] Arm skipped: no prepared attempt");
            return;
        }
        const { installation: t } = e, n = this.getUpdateSupervisorRoot(), r = kn(n, t.installationId), s = kn(r, l1), i = kn(n, KO), a = kn(r, "app-ready.json"), o = {
            schemaVersion: 1,
            installationId: t.installationId,
            currentVersion: this.productService.version,
            targetVersion: t.targetVersion,
            appearance: e.appearance,
            bundleIdentifier: e.bundleIdentifier,
            targetBundlePath: e.targetBundlePath,
            shipItStatePath: kn(_i(e.shipItLogPath), "ShipItState.plist"),
            shipItLogPath: e.shipItLogPath,
            shipItLogStartOffset: e.shipItLogStartOffset,
            eventsPath: kn(r, "events.jsonl"),
            resultPath: kn(r, "result.json"),
            appReadyPath: a,
            oldMainPid: process.pid,
            createdAt: new Date().toISOString(),
            reopenAfterStuckInstall: !this.isShipItCacheResetKilled()
        };
        try {
            this.logService.info(`[UpdateSupervisor] Arming after semantic shutdown (installationId=${t.installationId}, targetVersion=${t.targetVersion})`), Zt.mkdirSync(r, {
                recursive: !0
            }), Zt.copyFileSync(e.supervisorSourcePath, s), Zt.chmodSync(s, 493);
            try {
                Zt.unlinkSync(a);
            } catch  {}
            Zhe(i, o);
            const l = Jhe(s, [
                i
            ], {
                detached: !0,
                stdio: "ignore"
            });
            l.on("error", (d)=>{
                this.logService.warn(`[UpdateSupervisor] Process error (installationId=${t.installationId})`, d);
                try {
                    Zt.unlinkSync(i);
                } catch  {}
            }), l.unref(), this.logService.info(`[UpdateSupervisor] Armed (installationId=${t.installationId}, pid=${l.pid ?? "unknown"})`);
        } catch (l) {
            this.logService.warn(`[UpdateSupervisor] Failed to arm (installationId=${t.installationId})`, l);
        }
    }
    getUpdateSupervisorSourcePath() {
        const e = kn(this.environmentMainService.appRoot, "resources", "helpers", l1);
        if (Zt.existsSync(e)) return e;
        const t = kn(this.environmentMainService.appRoot, ".build", qO, `darwin-${process.arch}`, l1);
        return Zt.existsSync(t) ? t : void 0;
    }
    getUpdateSupervisorRoot() {
        return kn(this.environmentMainService.userDataPath, qO);
    }
    armPostUpdateExitWatchdog() {
        const e = String(process.pid), t = process.execPath, n = this.getExitWatchdogMarkerPath(), r = this.applicationStorageMainService.getBoolean(Vpe, -1, !1), s = Jt.asFileUri("vs/platform/update/electron-main/darwinUpdateExitWatchdog.js").fsPath;
        try {
            const i = Jhe(process.execPath, [
                s,
                e,
                String(HO),
                t,
                n,
                r ? "1" : "0"
            ], {
                detached: !0,
                env: {
                    ...process.env,
                    ELECTRON_RUN_AS_NODE: "1"
                },
                stdio: "ignore"
            });
            i.on("error", (a)=>{
                this.logService.warn("UpdateService doQuitAndInstall() - exit watchdog process error", a);
            }), i.unref(), this.logService.info(`UpdateService doQuitAndInstall() - armed exit watchdog (${HO}ms, sigkill=${r})`);
        } catch (i) {
            this.logService.warn("UpdateService doQuitAndInstall() - failed to arm exit watchdog", i);
        }
    }
    getExitWatchdogMarkerPath() {
        return kn(VO(), this.productService.dataFolderName ?? ".cursor", ege);
    }
    getUpdateSupervisorRestartTelemetry(e) {
        if (!e) return;
        const t = kn(this.getUpdateSupervisorRoot(), e);
        let n;
        try {
            n = Zt.readFileSync(kn(t, "result.json"), "utf8");
        } catch  {
            return Zt.existsSync(t) ? {
                supervisorStatus: "pending"
            } : void 0;
        }
        return KJe({
            raw: n,
            installationId: e
        });
    }
    onUpdateRestartCompleted(e) {
        return this.acknowledgeUpdateSupervisor(e), this.retryStuckShipItInstall(e);
    }
    retryStuckShipItInstall({ targetVersion: e, updateSuccess: t, supervisorResult: n }) {
        if (this.isShipItCacheResetKilled()) return;
        if (this.applicationStorageMainService.get(YO, -1) === e) return {
            retryUpdate: !1,
            shipItCacheResetAt: this.applicationStorageMainService.getNumber(JO, -1, 0)
        };
        const r = n?.supervisorFailureCode === "shipit_install_error" || n?.supervisorFailureCode === "shipit_attempts_exhausted" || n?.supervisorFailureCode === "overall_timeout" && n.supervisorTimeoutPhase === "installing";
        if (t || !r || !this.resetShipItForThisApp()) return;
        const s = Date.now();
        return this.applicationStorageMainService.store(YO, e, -1, 1), this.applicationStorageMainService.store(JO, s, -1, 1), this.logService.info(`update#retryStuckShipItInstall - cleared ShipIt's cache after ${n?.supervisorFailureCode} for ${e}`), {
            retryUpdate: !0,
            shipItCacheResetAt: s
        };
    }
    resetShipItForThisApp() {
        const e = $O(), t = process.getuid?.();
        if (!e || t === void 0) return !1;
        const n = GO("/bin/launchctl", [
            "print",
            `system/${e}.ShipIt`
        ], {
            timeout: 1e3
        });
        if (n.status !== zO) return this.logService.info(`update#resetShipItForThisApp - left ShipIt alone, system job print status ${n.status}`), !1;
        const r = `gui/${t}/${e}.ShipIt`, s = GO("/bin/launchctl", [
            "print",
            r
        ], {
            encoding: "utf8",
            timeout: 1e3
        }), i = s.status === zO;
        if (!i && (s.status !== 0 || /\bpid\s*=\s*\d+/.test(s.stdout))) return this.logService.info(`update#resetShipItForThisApp - left ${r} alone, launchctl print status ${s.status}`), !1;
        if (!i) {
            const a = GO("/bin/launchctl", [
                "bootout",
                r
            ], {
                timeout: 1e3
            });
            if (this.logService.info(`update#resetShipItForThisApp - booted out ${r}, status ${a.status}`), a.status !== 0) return !1;
        }
        return XJe(Qhe(e));
    }
    isShipItCacheResetKilled() {
        return this.applicationStorageMainService.getBoolean(She, -1, !1);
    }
    acknowledgeUpdateSupervisor(e) {
        if (!e.installationId) return;
        const t = this.getUpdateSupervisorRoot(), n = kn(t, KO);
        let r;
        try {
            r = eXe(Zt.readFileSync(n, "utf8"));
        } catch  {
            this.logService.warn(`[UpdateSupervisor] Restart acknowledgement skipped: active manifest unavailable (installationId=${e.installationId})`);
            return;
        }
        const s = kn(t, e.installationId), i = r ? Date.parse(r.createdAt) : Number.NaN;
        if (!r || r.installationId !== e.installationId || r.targetVersion !== e.targetVersion || r.appReadyPath !== kn(s, "app-ready.json") || !Number.isFinite(i) || Math.abs(Date.now() - i) > 1440 * 60 * 1e3) {
            this.logService.warn(`[UpdateSupervisor] Restart acknowledgement skipped: manifest validation failed (installationId=${e.installationId}, manifestParsed=${r !== void 0}, targetVersion=${e.targetVersion})`);
            return;
        }
        try {
            Zhe(r.appReadyPath, {
                schemaVersion: 1,
                installationId: e.installationId,
                currentVersion: e.currentVersion,
                pid: process.pid,
                readyAt: new Date().toISOString()
            }), this.logService.info(`[UpdateSupervisor] Restart acknowledged (installationId=${e.installationId}, success=${e.updateSuccess}, currentVersion=${e.currentVersion})`);
        } catch (a) {
            this.logService.warn(`[UpdateSupervisor] Failed to write restart acknowledgement (installationId=${e.installationId})`, a);
        }
    }
    reportRestartDiagnostics(e) {
        try {
            const t = this.readUpdateDiagnosticsConfig();
            if (!t.enabled) return;
            const n = e.restartTimeSeconds !== void 0 && e.restartTimeSeconds >= t.restartTimeThresholdSeconds;
            if (e.updateSuccess && !n) return;
            this.reportRestartDiagnosticsToSentry(e, t, n);
        } catch (t) {
            this.logService.warn("UpdateService reportRestartDiagnostics() - failed", t);
        }
    }
    readUpdateDiagnosticsConfig() {
        try {
            const e = this.applicationStorageMainService.get(khe, -1, void 0);
            if (!e) return Io;
            const t = JSON.parse(e);
            return jO(t) ? {
                enabled: typeof t.enabled == "boolean" ? t.enabled : Io.enabled,
                restartTimeThresholdSeconds: typeof t.restartTimeThresholdSeconds == "number" ? t.restartTimeThresholdSeconds : Io.restartTimeThresholdSeconds,
                attachShipItLog: typeof t.attachShipItLog == "boolean" ? t.attachShipItLog : Io.attachShipItLog,
                maxAttachmentBytes: typeof t.maxAttachmentBytes == "number" ? t.maxAttachmentBytes : Io.maxAttachmentBytes
            } : Io;
        } catch  {
            return Io;
        }
    }
    async reportRestartDiagnosticsToSentry(e, t, n) {
        try {
            if (!await this.waitForSentryBootstrap({
                requireKnownPrivacyMode: !0
            })) return;
            const r = t.attachShipItLog ? await QJe(t.maxAttachmentBytes) : void 0;
            if (!e.updateSuccess) {
                this.logService.warn(`UpdateService detected failed Darwin update install (targetVersion=${e.targetVersion}, currentVersion=${e.currentVersion})`);
                const s = {
                    level: "error",
                    exception: {
                        values: [
                            {
                                type: "DarwinUpdateInstallFailed",
                                value: "Darwin update install did not reach the target version"
                            }
                        ]
                    },
                    tags: {
                        "event.process": "main",
                        cursor_update_event: "darwin_update_install_failed",
                        ship_it_log_attached: String(r !== void 0)
                    },
                    extra: {
                        restart_time_seconds: e.restartTimeSeconds,
                        target_version: e.targetVersion,
                        current_version: e.currentVersion,
                        quit_time: e.quitTime,
                        product_version: this.productService.version,
                        product_quality: this.productService.quality
                    }
                };
                Rr()?.captureEvent(s, {
                    attachments: r ? [
                        r
                    ] : []
                });
            }
            if (n) {
                this.logService.warn(`UpdateService detected slow update restart (restartTime=${e.restartTimeSeconds}s >= ${t.restartTimeThresholdSeconds}s)`);
                const s = {
                    level: "warning",
                    exception: {
                        values: [
                            {
                                type: "SlowUpdateRestart",
                                value: `Update restart took ${e.restartTimeSeconds}s (threshold ${t.restartTimeThresholdSeconds}s)`
                            }
                        ]
                    },
                    tags: {
                        "event.process": "main",
                        cursor_update_event: "slow_update_restart",
                        update_success: String(e.updateSuccess),
                        ship_it_log_attached: String(r !== void 0)
                    },
                    extra: {
                        restart_time_seconds: e.restartTimeSeconds,
                        threshold_seconds: t.restartTimeThresholdSeconds,
                        target_version: e.targetVersion,
                        current_version: e.currentVersion,
                        update_success: e.updateSuccess,
                        quit_time: e.quitTime,
                        product_version: this.productService.version,
                        product_quality: this.productService.quality
                    }
                };
                Rr()?.captureEvent(s, {
                    attachments: r ? [
                        r
                    ] : []
                });
            }
        } catch (r) {
            this.logService.warn("UpdateService reportRestartDiagnosticsToSentry() - failed", r);
        }
    }
    dispose() {
        this.disposables.dispose(), super.dispose();
    }
}, B([
    Ue
], Ao.prototype, "onRawError", null), B([
    Ue
], Ao.prototype, "onRawUpdateNotAvailable", null), B([
    Ue
], Ao.prototype, "onRawUpdateAvailable", null), B([
    Ue
], Ao.prototype, "onRawUpdateDownloaded", null), Ao = B([
    w(1, ht),
    w(2, ot),
    w(3, Fi),
    w(4, qe),
    w(5, li),
    w(6, Z),
    w(7, et),
    w(8, Cn),
    w(9, sf),
    w(10, no)
], Ao);

}
