import { AV } from "./agentHarnessManifest.js";
import { Fd, qA } from "./agentHarnessSignature.js";
import { Qn, le } from "./async.js";
import { at, ot } from "./configuration.js";
import { Ye, qe } from "./environmentMainService.js";
import { Em, Ve } from "./errors.js";
import { O, se } from "./event.js";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { Vt, ht } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { Gi, _s } from "./nativeHostMainService.js";
import { OGe } from "./ports_2.js";
import { Tt, et } from "./productService.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Bi, Yp } from "./utilityProcess.js";
import { ct, pt } from "./windows.js";
function Ml() {
    const e = new Error(Em);
    return e.name = e.message, e;
}
function DGe() {
    return 1025 + Math.floor(64510 * Math.random());
}
function xd(e) {
    const t = AV.exec(e);
    if (t === null) return;
    const [, n, r, s, i, a] = t;
    return {
        major: Number(n),
        minor: Number(r),
        patch: Number(s),
        pre: i === void 0 ? void 0 : [
            Number(i),
            Number(a ?? 0)
        ]
    };
}
function NV(e) {
    return e !== void 0 && xd(e)?.pre !== void 0;
}
function QGe(e, t) {
    return e[Fd] === !0 && NV(t) ? [
        `--${Fd}`
    ] : [];
}
function oVe(e) {
    switch(e){
        case "glass":
            return "Agents Window";
        case "unifiedAgent":
            return "Unified Agent";
        case "editor":
            return "Editor";
        default:
            return;
    }
}
var Wd;
export { DGe, Ml, NV, QGe, Wd, oVe, xd };
var __wakaru_cVe_initialized = false;
export function cVe() {
if (__wakaru_cVe_initialized) return;
__wakaru_cVe_initialized = true;
"use strict";
h(), le(), Ve(), se(), j(), Vt(), te(), Bi(), pt(), at(), OGe(), Gi(), Ye(), Tt(), qA(), Wd = class extends J {
    constructor(e, t, n, r, s, i, a){
        super(), this._logService = e, this._lifecycleMainService = t, this._windowsMainService = n, this._configurationService = r, this._nativeHostMainService = s, this._environmentMainService = i, this._productService = a, this._extHosts = new Map, this._shutdown = !1, this._register(this._lifecycleMainService.onWillShutdown((o)=>{
            this._shutdown = !0, o.join("extHostStarter", this._waitForAllExit(6e3));
        }));
    }
    dispose() {
        super.dispose();
    }
    _getExtHost(e) {
        const t = this._extHosts.get(e);
        if (!t) throw new Error("Unknown extension host!");
        return t;
    }
    onDynamicStdout(e) {
        return this._getExtHost(e).onStdout;
    }
    onDynamicStderr(e) {
        return this._getExtHost(e).onStderr;
    }
    onDynamicMessage(e) {
        return this._getExtHost(e).onMessage;
    }
    onDynamicExit(e) {
        return this._getExtHost(e).onExit;
    }
    onDynamicCrash(e) {
        return O.map(this._getExtHost(e).onCrash, ({ code: t, reason: n })=>({
                code: t,
                reason: n
            }));
    }
    async createExtensionHost() {
        if (this._shutdown) throw Ml();
        const e = String(++Wd._lastId), t = new Yp(this._logService, this._windowsMainService, this._lifecycleMainService);
        this._extHosts.set(e, t);
        const n = t.onExit(({ pid: r, code: s, signal: i })=>{
            n.dispose(), this._logService.info(`Extension host with pid ${r} exited with code: ${s}, signal: ${i}.`), setTimeout(()=>{
                t.dispose(), this._extHosts.delete(e);
            }), setTimeout(()=>{
                try {
                    process.kill(r, 0), this._logService.error(`Extension host with pid ${r} still exists, forcefully killing it...`), process.kill(r);
                } catch  {}
            }, 1e3);
        });
        return {
            id: e
        };
    }
    async start(e, t) {
        if (this._shutdown) throw Ml();
        let n = [
            "--skipWorkspaceStorageLock"
        ], r = t.execArgv;
        n.push(...QGe(this._environmentMainService.args, this._productService.version)), (this._configurationService.getValue("application.experimental.extensionMonitor.enabled") ?? !1) && (r = await this._getPatchedExecArgv(t.execArgv ?? []), n.push("--monitorExtensions"));
        const i = t.env.CURSOR_EXTENSION_HOST_ROLE ? `(${t.env.CURSOR_EXTENSION_HOST_ROLE})` : "", a = t.env.CURSOR_WORKSPACE_LABEL || oVe(t.env.CURSOR_LAYOUT) || "empty", o = [
            "extension-host"
        ];
        i && o.push(i), o.push(a, `[${t.responseWindowId}-${e}]`);
        const l = this._getExtHost(e);
        return l.start({
            ...t,
            processTitle: o.join(" "),
            type: "extensionHost",
            entryPoint: "vs/workbench/api/node/extensionHostProcess",
            args: n,
            execArgv: r,
            allowLoadingUnsignedLibraries: !0,
            respondToAuthRequestsFromMainProcess: !0,
            correlationId: e
        }), {
            pid: await O.toPromise(l.onSpawn)
        };
    }
    async enableInspectPort(e) {
        if (this._shutdown) throw Ml();
        const t = this._extHosts.get(e);
        return t ? t.enableInspectPort() : !1;
    }
    async kill(e) {
        if (this._shutdown) throw Ml();
        const t = this._extHosts.get(e);
        t && t.kill();
    }
    async _killAllNow() {
        for (const [, e] of this._extHosts)e.kill();
    }
    async _waitForAllExit(e) {
        const t = [];
        for (const [, n] of this._extHosts)t.push(n.waitForExit(e));
        return Qn.settled(t).then(()=>{});
    }
    async _getPatchedExecArgv(e) {
        const t = [
            ...e
        ];
        t.indexOf("--nolazy") === -1 && t.unshift("--nolazy");
        const n = t.findIndex((a)=>a.startsWith("--inspect-brk="));
        if (n !== -1) {
            const a = t[n].split("=")[1];
            return t[n] = `--inspect=${a}`, t;
        }
        const r = t.findIndex((a)=>a.startsWith("--inspect=")), s = t.findIndex((a)=>a.startsWith("--inspect-port="));
        if (r !== -1 || s !== -1) return t;
        const i = await this._findDebugPort();
        return i !== 0 ? t.push(`--inspect=127.0.0.1:${i}`) : t.push("--inspect-port=0"), t;
    }
    async _findDebugPort() {
        return await this._nativeHostMainService.findFreePort(DGe(), 10, 5e3, 2048);
    }
}, Wd._lastId = 0, Wd = B([
    w(0, Z),
    w(1, ht),
    w(2, ct),
    w(3, ot),
    w(4, _s),
    w(5, qe),
    w(6, et)
], Wd);

}
