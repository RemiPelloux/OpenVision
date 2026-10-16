import { sh } from "./argvHelper.js";
import { Bl, Qn, le, wr } from "./async.js";
import { Jn, Mt } from "./cancellation.js";
import { at, ot } from "./configuration.js";
import { E } from "./configurationRegistry.js";
import { bt } from "./diskFileSystemProviderServer_2.js";
import { Ye, qe } from "./environmentMainService.js";
import { Ka } from "./errorMessage.js";
import { Ve, kt } from "./errors.js";
import { N, ge, se } from "./event.js";
import { B } from "./ipc.js";
import { Te, hr } from "./ipcMain.js";
import { xc } from "./launchMainService.js";
import { J, Ut, j, ve } from "./lifecycle.js";
import { Nl, Vt, ht } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { Aa, Ro } from "./loggerService_2.js";
import { Fpe, Lpe, Ope, Qg, Zg, ef, mO, pO, xpe } from "./mcpProcess.js";
import { NYe } from "./mcpStdioSpawnEnvironment.js";
import { Ne } from "./nls.js";
import { AGe } from "./numbers.js";
import { Ce, L, Om, _t } from "./path.js";
import { Pv, ee, f4, oe, os, ym } from "./platform.js";
import { bo, fi } from "./policy.js";
import { nV, rV } from "./shell.js";
import { Cs } from "./storage_3.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
import { Ls, Us } from "./userDataProfile.js";
import { Bi, cr } from "./utilityProcess.js";
import { Wn, vt } from "./uuid.js";
import { spawn as MGe } from "child_process";
import { rgPath as RYe } from "@vscode/ripgrep";
import { existsSync as bYe } from "fs";
function IGe(e, t, n) {
    return Math.min(Math.max(e, t), n);
}
async function oh(e, t, n, r) {
    return n["force-disable-user-env"] ? (t.trace("resolveShellEnv(): skipped (--force-disable-user-env)"), {}) : ee ? (t.trace("resolveShellEnv(): skipped (Windows)"), {}) : xc(r) && !n["force-user-env"] ? (t.trace("resolveShellEnv(): skipped (VSCODE_CLI is set)"), {}) : (xc(r) ? t.trace("resolveShellEnv(): running (--force-user-env)") : t.trace("resolveShellEnv(): running (macOS/Linux)"), bS || (bS = Qn.withAsyncBody(async (s, i)=>{
        const a = new Jn;
        let o = 1e4;
        const l = e.getValue("application.shellEnvironmentResolutionTimeout");
        typeof l == "number" && (o = IGe(l, 1, 120) * 1e3);
        const d = setTimeout(()=>{
            a.dispose(!0), i(new Error(E(2239, null)));
        }, o);
        try {
            s(await PGe(t, a.token));
        } catch (u) {
            !Cs(u) && !a.token.isCancellationRequested ? i(new Error(E(2240, null, bt(u)))) : s({});
        } finally{
            clearTimeout(d), a.dispose();
        }
    })), bS);
}
async function PGe(e, t) {
    const n = process.env.ELECTRON_RUN_AS_NODE;
    e.trace("getUnixShellEnvironment#runAsNode", n);
    const r = process.env.ELECTRON_NO_ATTACH_CONSOLE;
    e.trace("getUnixShellEnvironment#noAttach", r);
    const s = vt().replace(/-/g, "").substr(0, 12), i = new RegExp(s + "({.*})" + s), a = {
        ...process.env,
        ELECTRON_RUN_AS_NODE: "1",
        ELECTRON_NO_ATTACH_CONSOLE: "1",
        VSCODE_RESOLVING_ENVIRONMENT: "1"
    };
    e.trace("getUnixShellEnvironment#env", a);
    const o = await nV(os, a);
    return e.trace("getUnixShellEnvironment#shell", o), new Promise((l, d)=>{
        if (t.isCancellationRequested) return d(new kt);
        const u = _t(o);
        let m, f;
        const v = "";
        /^(?:pwsh|powershell)(?:-preview)?$/.test(u) ? (m = `& '${process.execPath}' ${v} -p '''${s}'' + JSON.stringify(process.env) + ''${s}'''`, f = [
            "-Login",
            "-Command"
        ]) : u === "nu" ? (m = `^'${process.execPath}' ${v} -p '"${s}" + JSON.stringify(process.env) + "${s}"'`, f = [
            "-i",
            "-l",
            "-c"
        ]) : u === "xonsh" ? (m = `import os, json; print("${s}", json.dumps(dict(os.environ)), "${s}")`, f = [
            "-i",
            "-l",
            "-c"
        ]) : (m = `'${process.execPath}' ${v} -p '"${s}" + JSON.stringify(process.env) + "${s}"'`, u === "tcsh" || u === "csh" ? f = [
            "-ic"
        ] : f = [
            "-i",
            "-l",
            "-c"
        ]), e.trace("getUnixShellEnvironment#spawn", JSON.stringify(f), m);
        const T = MGe(o, [
            ...f,
            m
        ], {
            detached: !0,
            stdio: [
                "ignore",
                "pipe",
                "pipe"
            ],
            env: a
        });
        t.onCancellationRequested(()=>(T.kill(), d(new kt))), T.on("error", (y)=>{
            e.error("getUnixShellEnvironment#errorChildProcess", bt(y)), d(y);
        });
        const S = [];
        T.stdout.on("data", (y)=>S.push(y));
        const k = [];
        T.stderr.on("data", (y)=>k.push(y)), T.on("close", (y, b)=>{
            const I = Buffer.concat(S).toString("utf8");
            e.trace("getUnixShellEnvironment#raw", I);
            const G = Buffer.concat(k).toString("utf8");
            if (G.trim() && e.trace("getUnixShellEnvironment#stderr", G), y || b) return d(new Error(E(2241, null, y, b)));
            const U = i.exec(I), X = U ? U[1] : "{}";
            try {
                const W = JSON.parse(X);
                n ? W.ELECTRON_RUN_AS_NODE = n : delete W.ELECTRON_RUN_AS_NODE, r ? W.ELECTRON_NO_ATTACH_CONSOLE = r : delete W.ELECTRON_NO_ATTACH_CONSOLE, delete W.VSCODE_RESOLVING_ENVIRONMENT, delete W.XDG_RUNTIME_DIR, e.trace("getUnixShellEnvironment#result", W), l(W);
            } catch (W) {
                e.error("getUnixShellEnvironment#errorCaught", bt(W)), d(W);
            }
        });
    });
}
var bS;
function kYe(e) {
    if (typeof e != "object" || e === null) return !1;
    const t = e;
    return t.type === Lpe && typeof t.phase == "string" && xpe.has(t.phase) && typeof t.elapsedMs == "number" && typeof t.timestampMs == "number" && (t.message === void 0 || typeof t.message == "string") && (t.data === void 0 || typeof t.data == "object" && t.data !== null);
}
function SYe(e) {
    if (typeof e != "object" || e === null) return !1;
    const t = e;
    return t.type === Qg.initFailed && typeof t.error == "string";
}
function yYe(e, t) {
    return t - e > ef;
}
function wYe(e, t, n) {
    const s = [
        ...e.filter((l)=>t - l <= ef),
        t
    ];
    if (s.length > n.restartMaxPer10Min) return {
        restartAfterMs: null,
        recentTimestampsMs: s
    };
    const i = s.length, a = Math.pow(2, i - 1) * 1e3;
    return {
        restartAfterMs: Math.min(n.restartBackoffCapMs, a),
        recentTimestampsMs: s
    };
}
function EYe(e, t, n, r) {
    return new Promise((s, i)=>{
        let a = !1;
        const o = setTimeout(()=>{
            a || (a = !0, clearTimeout(o), r?.(), i(new Error(n)));
        }, t);
        e.then((l)=>{
            a || (a = !0, clearTimeout(o), s(l));
        }, (l)=>{
            a || (a = !0, clearTimeout(o), i(l));
        });
    });
}
function Wpe(e, t) {
    return t ? L(e, "resources", "helpers") : void 0;
}
function CYe(e, t) {
    const n = Wpe(e, t);
    if (n) return n;
    const r = f4;
    if (r && ym) return L(e, ".build", "node", `v${r}`, `${ym}-${Pv}`);
}
function IYe(e, t) {
    const n = "Path" in e && e.Path !== void 0 ? "Path" : "PATH", r = e[n] ?? "";
    return r.split(Om).includes(t) ? e : {
        ...e,
        [n]: r.length > 0 ? `${t}${Om}${r}` : t
    };
}
function AYe(e, t, n) {
    const r = CYe(t, n);
    return r ? IYe(e, r) : e;
}
function qw(e) {
    for (const t of e)try {
        if (bYe(t)) return t;
    } catch  {}
}
function MYe(e) {
    return e.replace(/\bnode_modules\.asar\b/, "node_modules.asar.unpacked");
}
function PYe(e, t, n = RYe) {
    const r = ee ? "cursorsandbox.exe" : "cursorsandbox", s = MYe(n), i = Wpe(e, t);
    return i ? {
        sandboxHelperBinaryPath: qw([
            L(i, r)
        ]),
        ripgrepBinaryPath: qw([
            L(i, "rg"),
            L(i, "rg.exe"),
            s
        ])
    } : {
        sandboxHelperBinaryPath: qw([
            L(e, "node_modules", "@anysphere", "sandbox-helper", "bin", r)
        ]),
        ripgrepBinaryPath: qw([
            s
        ])
    };
}
var Kw, zw;
export { AYe, CYe, EYe, IGe, IYe, Kw, MYe, PGe, PYe, SYe, Wpe, bS, kYe, oh, qw, wYe, yYe, zw };
var __wakaru_ch_initialized = false;
export function ch() {
if (__wakaru_ch_initialized) return;
__wakaru_ch_initialized = true;
"use strict";
h(), Ce(), Ne(), Mt(), Ka(), Ve(), oe(), Wn(), rV(), sh(), le(), AGe(), bS = void 0;

}
var __wakaru_DYe_initialized = false;
export function DYe() {
if (__wakaru_DYe_initialized) return;
__wakaru_DYe_initialized = true;
"use strict";
h(), hr(), le(), Ve(), j(), se(), at(), Ye(), Vt(), ch(), te(), Us(), fi(), Ro(), Bi(), Ze(), Ne(), Fpe(), NYe(), Kw = "vs/code/electron-utility/mcpProcess/mcpProcessMain", zw = class extends J {
    constructor(e, t, n, r, s, i, a, o){
        super(), this.options = e, this.environmentMainService = t, this.configurationService = n, this.userDataProfilesService = r, this.lifecycleMainService = s, this.logService = i, this.loggerMainService = a, this.policyService = o, this.firstWindowConnectionBarrier = new Bl, this.utilityProcessRef = this._register(new Ut), this.utilityProcessLogListener = this._register(new Ut), this.utilityProcessOutputListeners = this._register(new Ut), this.utilityProcessCrashListener = this._register(new Ut), this.lifecycleSignals = new Ope, this.lastStartupDiagnostic = void 0, this.lastSpawnPid = void 0, this.lastProcessStartReturned = void 0, this.lastCrashEventReceived = !1, this._onDidCrash = this._register(new N), this.onDidCrash = this._onDidCrash.event, this._onDidGiveUp = this._register(new N), this.onDidGiveUp = this._onDidGiveUp.event, this._onDidConnect = this._register(new N), this.onDidConnect = this._onDidConnect.event, this.recentRestartTimestampsMs = [], this.restartCount = 0, this.gaveUpAtMs = void 0, this.restartBackoff = void 0, this.restartBackoffHandle = void 0, this.spawnStartedAtMs = void 0, this.mainConnectRequested = !1, this.utilityProcessEnvPromise = void 0, this._whenReady = void 0, this._whenIpcReady = void 0, this._crashHandled = !1, this.mcpProcessLogger = this._register(this.loggerMainService.createLogger("mcpprocess", {
            name: E(2120, null)
        })), this._register(ge(()=>this.clearRestartBackoff())), this.registerListeners();
    }
    get utilityProcess() {
        return this.utilityProcessRef.value;
    }
    get gaveUp() {
        return this.gaveUpAtMs !== void 0;
    }
    registerListeners() {
        Te.on(mO.request, (e, t)=>this.onWindowConnection(e, {
                nonce: t,
                responseChannel: mO.response
            })), Te.on(pO.request, (e, t)=>this.onWindowConnection(e, {
                nonce: t,
                responseChannel: pO.response
            })), this._register(this.lifecycleMainService.onWillShutdown(()=>this.onWillShutdown()));
    }
    async onWindowConnection(e, t) {
        const { nonce: n, responseChannel: r } = t;
        if (this.logService.trace(`[McpProcess] onWindowConnection for: ${r}`), this.firstWindowConnectionBarrier.isOpen() || this.firstWindowConnectionBarrier.open(), this.maybeResetExpiredGiveUp(), this.gaveUp) {
            this.logService.warn("[McpProcess] dropping window connection request: process is in give-up state"), this.rejectWindowConnection(e, t);
            return;
        }
        try {
            await this.whenReady();
        } catch (i) {
            this.logService.error("[McpProcess] whenReady rejected, dropping window connection", i), this.rejectWindowConnection(e, t);
            return;
        }
        let s;
        try {
            s = await this.connect(r);
        } catch (i) {
            this.logService.error("[McpProcess] connect failed, dropping window connection", i), this.rejectWindowConnection(e, t);
            return;
        }
        if (e.sender.isDestroyed()) return s.close();
        e.sender.postMessage(r, n, [
            s
        ]);
    }
    rejectWindowConnection(e, t) {
        e.sender.isDestroyed() || e.sender.postMessage(t.responseChannel, t.nonce);
    }
    maybeResetExpiredGiveUp() {
        this.gaveUpAtMs === void 0 || !yYe(this.gaveUpAtMs, Date.now()) || (this.gaveUpAtMs = void 0, this.logService.info("[McpProcess] restart-budget window expired since give-up; allowing a fresh start attempt"), this.mcpProcessLogger.info("[McpProcess] restart-budget window expired since give-up; allowing a fresh start attempt"), this.mainConnectRequested && this.connectMain().catch((e)=>this.logService.error("[McpProcess] main reconnect after give-up reset failed", e)));
    }
    onWillShutdown() {
        this.logService.trace("[McpProcess] onWillShutdown"), this.mcpProcessLogger.info("[McpProcess] shutting down utility process"), this.clearRestartBackoff(), this.utilityProcess?.postMessage(Qg.exit), this.utilityProcessRef.clear();
    }
    whenReady() {
        return this.gaveUp ? Promise.reject(new Error("[McpProcess] gave up after exceeding restart budget")) : (this._whenReady || (this._whenReady = (async ()=>{
            await this.whenIpcReady;
            const e = this.lifecycleSignals.waitFor("initDone");
            await this.waitForColdStartSignal(e, "initDone"), this.logService.trace("[McpProcess] Overall ready");
        })()), this._whenReady);
    }
    get whenIpcReady() {
        return this._whenIpcReady || (this._whenIpcReady = (async ()=>{
            await this.firstWindowConnectionBarrier.wait(), await this.waitForRestartBackoff(), this.prepareStartupState();
            const e = this.lifecycleSignals.waitFor("ipcReady");
            await this.startUtilityProcess(), await this.waitForColdStartSignal(e, "ipcReady"), this.logService.trace("[McpProcess] IPC ready");
        })()), this._whenIpcReady;
    }
    async waitForColdStartSignal(e, t) {
        const n = this.options.runtimeConfig ?? Zg;
        let r = !1;
        const s = EYe(e.p, n.coldStartTimeoutMs, `[McpProcess] timed out waiting for ${t} after ${n.coldStartTimeoutMs}ms`, ()=>r = !0);
        try {
            await s;
        } catch (i) {
            if (!(i instanceof kt)) {
                const a = this.getStartupContext(t);
                this.logService.error(`[McpProcess] ${t} wait failed; ${a}`, i), this.mcpProcessLogger.error(`[McpProcess] ${t} wait failed; ${a}`, i), this.handleCrashAndMaybeRestart(r, r ? "startup_timeout" : "startup_failure");
            }
            throw i;
        }
    }
    async waitForRestartBackoff() {
        this.restartBackoff && await this.restartBackoff.p;
    }
    clearRestartBackoff() {
        this.restartBackoffHandle !== void 0 && (clearTimeout(this.restartBackoffHandle), this.restartBackoffHandle = void 0), this.restartBackoff?.cancel(), this.restartBackoff = void 0;
    }
    prepareStartupState() {
        this.lifecycleSignals.reset(), this.lastStartupDiagnostic = void 0, this.lastSpawnPid = void 0, this.lastProcessStartReturned = void 0, this.lastCrashEventReceived = !1, this.spawnStartedAtMs = Date.now();
    }
    async getUtilityProcessEnv() {
        return this.utilityProcessEnvPromise || (this.utilityProcessEnvPromise = (async ()=>{
            let e = {
                ...process.env
            };
            try {
                const t = await oh(this.configurationService, this.logService, this.environmentMainService.args, process.env);
                e = {
                    ...e,
                    ...t
                };
            } catch (t) {
                this.logService.error("[McpProcess] Failed to resolve shell environment for utility process; using main process env", t);
            }
            return AYe(e, this.environmentMainService.appRoot, this.environmentMainService.isBuilt);
        })()), this.utilityProcessEnvPromise;
    }
    async startUtilityProcess() {
        this._crashHandled = !1;
        const e = new cr(this.logService, this.lifecycleMainService);
        this.utilityProcessRef.value = e, this.utilityProcessLogListener.value = e.onMessage((i)=>{
            const a = this.lifecycleSignals.markMessage(i);
            a ? this.mcpProcessLogger.info(`[McpProcess] received lifecycle signal ${a}; ${this.getStartupContext(a)}`) : SYe(i) ? (this.logService.error(i.error), this.mcpProcessLogger.error(`[McpProcess] init failed: ${i.error}`), this.lifecycleSignals.errorAll(new Error(i.error))) : kYe(i) ? (this.lastStartupDiagnostic = i, this.mcpProcessLogger.info(`[McpProcess startup] phase=${i.phase} elapsedMs=${i.elapsedMs}${i.message ? ` message=${i.message}` : ""}${i.data ? ` data=${JSON.stringify(i.data)}` : ""}`)) : typeof i == "object" && i !== null && "warning" in i && typeof i.warning == "string" && (this.logService.warn(i.warning), this.mcpProcessLogger.warn(i.warning));
        });
        const t = new ve;
        this.utilityProcessOutputListeners.value = t, t.add(e.onSpawn((i)=>{
            this.lastSpawnPid = i, this.mcpProcessLogger.info(`[McpProcess] spawned utility process pid=${i ?? "<unknown>"}`);
        })), t.add(e.onExit((i)=>{
            this.mcpProcessLogger.info(`[McpProcess] utility process exited pid=${i.pid} code=${i.code} signal=${i.signal}`);
        })), t.add(e.onStdout((i)=>this.logUtilityProcessOutput("stdout", i))), t.add(e.onStderr((i)=>this.logUtilityProcessOutput("stderr", i))), this.utilityProcessCrashListener.value = e.onCrash((i)=>{
            this.lastCrashEventReceived = !0, this.mcpProcessLogger.error(`[McpProcess] utility process crashed pid=${i.pid} code=${i.code} reason=${i.reason} elapsedMs=${this.getStartupTimingMs()}`), this._onDidCrash.fire(), this.handleCrashAndMaybeRestart(!1, "crash");
        });
        const n = await this.getUtilityProcessEnv(), r = this.createMcpProcessConfiguration(n);
        this.mcpProcessLogger.info(`[McpProcess] starting utility process entryPoint=${Kw} restartCount=${this.restartCount} coldStartTimeoutMs=${r.runtimeConfig.coldStartTimeoutMs} loggerCount=${r.loggers.length}`);
        const s = e.start({
            processTitle: "mcp-process",
            type: "mcp-process",
            entryPoint: Kw,
            payload: r,
            env: n,
            respondToAuthRequestsFromMainProcess: !0
        });
        this.lastProcessStartReturned = s, this.mcpProcessLogger.info(`[McpProcess] utility process start returned ${s}`), s || (this.logService.error("[McpProcess] failed to start utility process"), this.mcpProcessLogger.error("[McpProcess] failed to start utility process"));
    }
    logUtilityProcessOutput(e, t) {
        const n = t.trimEnd();
        n.length !== 0 && (e === "stderr" ? this.mcpProcessLogger.warn(`[McpProcess ${e}] ${n}`) : this.mcpProcessLogger.info(`[McpProcess ${e}] ${n}`));
    }
    handleCrashAndMaybeRestart(e = !1, t = "crash") {
        if (this._crashHandled) return;
        this._crashHandled = !0, this.restartCount++, this.clearRestartBackoff(), this.lifecycleSignals.cancelAll(), this.utilityProcessLogListener.clear(), this.utilityProcessOutputListeners.clear(), this.utilityProcessCrashListener.clear();
        const n = this.utilityProcess, r = this.options.runtimeConfig ?? Zg, s = wYe(this.recentRestartTimestampsMs, Date.now(), r);
        if (this.recentRestartTimestampsMs = s.recentTimestampsMs, this._whenIpcReady = void 0, this._whenReady = void 0, e && this.mcpProcessLogger.error(`[McpProcess] killing utility process after cold-start timeout; ${this.getStartupContext()}`), n?.kill(), this.utilityProcessRef.clear(), s.restartAfterMs === null) {
            this.gaveUpAtMs = Date.now(), this.logService.error(`[McpProcess] giving up after ${s.recentTimestampsMs.length} startup failures within ${ef}ms; falling back to legacy in-window MCP`), this.mcpProcessLogger.error(`[McpProcess] giving up after ${s.recentTimestampsMs.length} startup failures within ${ef}ms; falling back to legacy in-window MCP; ${this.getStartupContext()}`), this._onDidGiveUp.fire();
            return;
        }
        const i = t === "crash" ? "crash detected" : "startup failure detected";
        this.logService.warn(`[McpProcess] ${i} (attempt ${s.recentTimestampsMs.length}), retrying in ${s.restartAfterMs}ms`), this.mcpProcessLogger.warn(`[McpProcess] ${i} (attempt ${s.recentTimestampsMs.length}), retrying in ${s.restartAfterMs}ms; ${this.getStartupContext()}`);
        const a = new wr;
        this.restartBackoff = a, this.restartBackoffHandle = setTimeout(()=>{
            if (this.restartBackoff !== a || (this.restartBackoff = void 0, this.restartBackoffHandle = void 0, a.complete(void 0), this.gaveUp || this._store.isDisposed)) return;
            (this.mainConnectRequested ? this.connectMain() : this.whenReady()).catch((l)=>this.logService.error("[McpProcess] restart attempt failed", l));
        }, s.restartAfterMs);
    }
    getStartupContext(e) {
        const t = this.options.runtimeConfig ?? Zg, n = this.lastStartupDiagnostic;
        return [
            `entryPoint=${Kw}`,
            `waitingFor=${e ?? "<none>"}`,
            `lastPhase=${n?.phase ?? "<none>"}`,
            `lastMessage=${n?.message ?? "<none>"}`,
            `lastPhaseElapsedMs=${n?.elapsedMs ?? "<none>"}`,
            `spawnPid=${this.lastSpawnPid ?? "<unknown>"}`,
            `startReturned=${this.lastProcessStartReturned ?? "<unknown>"}`,
            `crashEventReceived=${this.lastCrashEventReceived}`,
            `restartCount=${this.restartCount}`,
            `coldStartTimeoutMs=${t.coldStartTimeoutMs}`,
            `elapsedMs=${this.getStartupTimingMs()}`
        ].join(" ");
    }
    createMcpProcessConfiguration(e) {
        const t = PYe(this.environmentMainService.appRoot, this.environmentMainService.isBuilt);
        return {
            machineId: this.options.machineId,
            devDeviceId: this.options.devDeviceId,
            args: this.environmentMainService.args,
            logLevel: this.loggerMainService.getLogLevel(),
            loggers: this.loggerMainService.getGlobalLoggers(),
            profiles: {
                home: this.userDataProfilesService.profilesHome,
                all: this.userDataProfilesService.profiles
            },
            policiesData: this.policyService.serialize(),
            runtimeConfig: this.options.runtimeConfig ?? Zg,
            restartCount: this.restartCount,
            stdioSpawnEnv: this.toStringEnv(e),
            sandboxHelperBinaryPath: t.sandboxHelperBinaryPath,
            ripgrepBinaryPath: t.ripgrepBinaryPath
        };
    }
    toStringEnv(e) {
        const t = {};
        for (const [n, r] of Object.entries(e))typeof r == "string" && (t[n] = r);
        return t;
    }
    async connect(e) {
        return await this.whenIpcReady, Nl(this.utilityProcess).connect(e);
    }
    async connectMain() {
        this.mainConnectRequested = !0;
        const e = await this.connect("main");
        return !this._store.isDisposed && !this.gaveUp && this._onDidConnect.fire(e), e;
    }
    getRestartCount() {
        return this.restartCount;
    }
    getStartupTimingMs() {
        return this.spawnStartedAtMs === void 0 ? -1 : Date.now() - this.spawnStartedAtMs;
    }
    hasGivenUp() {
        return this.gaveUp;
    }
}, zw = B([
    w(1, qe),
    w(2, ot),
    w(3, Ls),
    w(4, ht),
    w(5, Z),
    w(6, Aa),
    w(7, bo)
], zw);

}
