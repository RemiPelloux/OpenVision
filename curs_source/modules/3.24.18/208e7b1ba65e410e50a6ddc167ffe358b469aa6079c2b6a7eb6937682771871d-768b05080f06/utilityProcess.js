import { le } from "./async.js";
import { tBe } from "./envKey.js";
import { N, O, se } from "./event.js";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { En, Vt, ht } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { $e, Jt } from "./network.js";
import { ns } from "./objects.js";
import { ee, oe } from "./platform.js";
import { nS } from "./processes.js";
import { jk, rt } from "./severity_2.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { fm } from "./unc.js";
import { ct, pt } from "./windows.js";
import { MessageChannelMain as nBe } from "electron";
import { app as rBe } from "electron";
import { utilityProcess as sBe } from "electron";
import { StringDecoder as w7 } from "string_decoder";
function xLe() {
    const e = xx();
    return e ? Array.from(e) : [];
}
function xx() {
    return process.uncHostAllowlist;
}
function BLe() {
    return process.platform !== "win32" ? !0 : process.restrictUNCAccess === !1;
}
function Ws(e) {
    if (!e || typeof e != "object" || e instanceof RegExp) return e;
    const t = Array.isArray(e) ? [] : {};
    return Object.entries(e).forEach(([n, r])=>{
        t[n] = r && typeof r == "object" ? Ws(r) : r;
    }), t;
}
function y7(e) {
    if (!e) return;
    const t = new Set([
        "DEBUG",
        "NODE_OPTIONS",
        "VSCODE_NODE_OPTIONS",
        "LD_PRELOAD",
        "DYLD_INSERT_LIBRARIES"
    ]);
    for (const n of Object.keys(e))t.has(n.toUpperCase()) && delete e[n];
}
function eBe(e) {
    return e.length > 0 && !/^[0-9]/.test(e);
}
function iBe(e) {
    return typeof e.responseWindowId == "number";
}
var cr, Yp;
export { BLe, Ws, Yp, cr, eBe, iBe, xLe, xx, y7 };
var __wakaru_Bi_initialized = false;
export function Bi() {
if (__wakaru_Bi_initialized) return;
__wakaru_Bi_initialized = true;
"use strict";
h(), j(), se(), te(), le(), $e(), pt(), jk(), Vt(), nS(), ns(), oe(), fm(), tBe(), cr = class extends J {
    constructor(e, t){
        super(), this.logService = e, this.lifecycleMainService = t, this.id = String(++cr.ID_COUNTER), this._onStdout = this._register(new N), this.onStdout = this._onStdout.event, this._onStderr = this._register(new N), this.onStderr = this._onStderr.event, this._onMessage = this._register(new N), this.onMessage = this._onMessage.event, this._onSpawn = this._register(new N), this.onSpawn = this._onSpawn.event, this._onExit = this._register(new N), this.onExit = this._onExit.event, this._onCrash = this._register(new N), this.onCrash = this._onCrash.event, this.process = void 0, this.processPid = void 0, this.configuration = void 0;
    }
    static getAll() {
        return Array.from(cr.all.values());
    }
    log(e, t) {
        let n;
        switch(this.configuration?.correlationId ? n = `[UtilityProcess id: ${this.configuration?.correlationId}, type: ${this.configuration?.type}, pid: ${this.processPid ?? "<none>"}]: ${e}` : n = `[UtilityProcess type: ${this.configuration?.type}, pid: ${this.processPid ?? "<none>"}]: ${e}`, t){
            case rt.Error:
                this.logService.error(n);
                break;
            case rt.Warning:
                this.logService.warn(n);
                break;
            case rt.Info:
                this.logService.trace(n);
                break;
        }
    }
    validateCanStart() {
        return this.process ? (this.log("Cannot start utility process because it is already running...", rt.Error), !1) : !0;
    }
    start(e) {
        const t = this.doStart(e);
        return t && e.payload && this.postMessage(e.payload) && this.log("payload sent via postMessage()", rt.Info), t;
    }
    doStart(e) {
        if (!this.validateCanStart()) return !1;
        this.configuration = e;
        const t = `${this.configuration.type}-${this.id}`, n = Jt.asFileUri("bootstrap-fork.js").fsPath, r = this.configuration.args ?? [], s = this.configuration.execArgv ?? [], i = this.configuration.allowLoadingUnsignedLibraries, a = this.configuration.respondToAuthRequestsFromMainProcess, o = "pipe", l = this.createEnv(e);
        return this.log("creating new...", rt.Info), this.process = sBe.fork(n, r, {
            serviceName: t,
            env: l,
            execArgv: s,
            allowLoadingUnsignedLibraries: i,
            respondToAuthRequestsFromMainProcess: a,
            stdio: o
        }), this.registerListeners(this.process, this.configuration, t), !0;
    }
    createEnv(e) {
        const t = e.env ? {
            ...e.env
        } : {
            ...Ws(process.env)
        };
        t.VSCODE_PROCESS_TITLE = e.processTitle, t.VSCODE_ESM_ENTRYPOINT = e.entryPoint, typeof e.parentLifecycleBound == "number" && (t.VSCODE_PARENT_PID = String(e.parentLifecycleBound)), t.VSCODE_CRASH_REPORTER_PROCESS_TYPE = e.type, ee && (BLe() ? t.NODE_DISABLE_UNC_ACCESS_CHECKS = "1" : t.NODE_UNC_HOST_ALLOWLIST = xLe().join("\\")), y7(t);
        for (const n of Object.keys(t)){
            if (!eBe(n)) {
                this.logService.warn(`UtilityProcess: ignoring environment variable with an invalid name: '${n}'`), delete t[n];
                continue;
            }
            t[n] = String(t[n]);
        }
        return t;
    }
    registerListeners(e, t, n) {
        if (e.stdout) {
            const r = new w7("utf-8");
            this._register(O.fromNodeEventEmitter(e.stdout, "data")((s)=>this._onStdout.fire(typeof s == "string" ? s : r.write(s))));
        }
        if (e.stderr) {
            const r = new w7("utf-8");
            this._register(O.fromNodeEventEmitter(e.stderr, "data")((s)=>this._onStderr.fire(typeof s == "string" ? s : r.write(s))));
        }
        this._register(O.fromNodeEventEmitter(e, "message")((r)=>this._onMessage.fire(r))), this._register(O.fromNodeEventEmitter(e, "spawn")(()=>{
            this.processPid = e.pid, typeof e.pid == "number" && cr.all.set(e.pid, {
                pid: e.pid,
                name: iBe(t) ? `${t.type} [${t.responseWindowId}]` : t.type,
                processTitle: t.processTitle
            }), this.log("successfully created", rt.Info), this._onSpawn.fire(e.pid);
        })), this._register(O.fromNodeEventEmitter(e, "exit")((r)=>{
            this.log(`received exit event with code ${r}`, rt.Info), this._onExit.fire({
                pid: this.processPid,
                code: r,
                signal: "unknown"
            }), this.onDidExitOrCrashOrKill();
        })), this._register(O.fromNodeEventEmitter(e, "error", (r, s, i)=>({
                type: r,
                location: s,
                report: i
            }))(({ type: r, location: s, report: i })=>{
            let a;
            try {
                const l = (typeof i == "string" ? JSON.parse(i) : i)?.javascriptHeap;
                l && (a = `javascriptHeap: used ${l.usedMemory}, total ${l.totalMemory}, limit ${l.memoryLimit ?? l.heapSizeLimit}`);
            } catch  {}
            a ? this.log(`crashed due to ${r} from V8 at ${s} (${a})`, rt.Error) : this.log(`crashed due to ${r} from V8 at ${s}`, rt.Info);
        })), this._register(O.fromNodeEventEmitter(rBe, "child-process-gone", (r, s)=>({
                event: r,
                details: s
            }))(({ details: r })=>{
            r.type === "Utility" && r.name === n && (this.log(`crashed with code ${r.exitCode} and reason '${r.reason}'`, rt.Error), this._onCrash.fire({
                pid: this.processPid,
                code: r.exitCode,
                reason: r.reason
            }), this.onDidExitOrCrashOrKill());
        }));
    }
    once(e, t) {
        const n = this._register(this._onMessage.event((r)=>{
            r === e && (n.dispose(), t());
        }));
    }
    postMessage(e, t) {
        return this.process ? (this.process.postMessage(e, t), !0) : !1;
    }
    connect(e) {
        const { port1: t, port2: n } = new nBe;
        return this.postMessage(e, [
            n
        ]), t;
    }
    enableInspectPort() {
        if (!this.process || typeof this.processPid != "number") return !1;
        this.log("enabling inspect port", rt.Info);
        const e = process;
        return typeof e._debugProcess == "function" ? (e._debugProcess(this.processPid), !0) : !1;
    }
    kill() {
        if (!this.process) return;
        this.log("attempting to kill the process...", rt.Info), this.process.kill() ? (this.log("successfully killed the process", rt.Info), this.onDidExitOrCrashOrKill()) : this.log("unable to kill the process", rt.Warning);
    }
    onDidExitOrCrashOrKill() {
        typeof this.processPid == "number" && cr.all.delete(this.processPid), this.process = void 0;
    }
    async waitForExit(e) {
        this.process && (this.log("waiting to exit...", rt.Info), await Promise.race([
            O.toPromise(this.onExit),
            En(e)
        ]), this.process && (this.log(`did not exit within ${e}ms, will kill it now...`, rt.Info), this.kill()));
    }
}, cr.ID_COUNTER = 0, cr.all = new Map, cr = B([
    w(0, Z),
    w(1, ht)
], cr), Yp = class extends cr {
    constructor(e, t, n){
        super(e, n), this.windowsMainService = t;
    }
    start(e) {
        const t = this.windowsMainService.getWindowById(e.responseWindowId);
        if (t === void 0 || t.webContents === void 0 || t?.win?.isDestroyed() === !0 || t?.webContents?.isDestroyed() === !0) return this.log("Refusing to start utility process because requesting window cannot be found or is destroyed...", rt.Error), !0;
        if (!super.doStart(e)) return !1;
        t?.win && this.registerWindowListeners(t.win, e);
        const r = this.connect(e.payload);
        return t.webContents.postMessage(e.responseChannel, e.responseNonce, [
            r
        ]), !0;
    }
    registerWindowListeners(e, t) {
        t.windowLifecycleBound && (this._register(O.filter(this.lifecycleMainService.onWillLoadWindow, (n)=>n.window.win === e)(()=>this.kill())), this._register(O.fromNodeEventEmitter(e, "closed")(()=>this.kill())));
    }
}, Yp = B([
    w(0, Z),
    w(1, ct),
    w(2, ht)
], Yp);

}
