import { bw } from "./bcIdFromAuthority.js";
import { E } from "./configurationRegistry.js";
import { Ad, Oc } from "./cssDevService.js";
import { HI, qI } from "./diagnostics.js";
import { R7, rS } from "./diagnosticsMainService.js";
import { Ta, ci } from "./dialogMainService.js";
import { Ye, qe } from "./environmentMainService.js";
import { Lr } from "./extpath.js";
import { B } from "./ipc.js";
import { Te, hr } from "./ipcMain.js";
import { j, ve } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { Gi, _s, rc } from "./nativeHostMainService.js";
import { $e, Jt } from "./network.js";
import { Ne, vm } from "./nls.js";
import { oe, q } from "./platform.js";
import { Ha, Xn } from "./product.js";
import { Tt, et } from "./productService.js";
import { Hg, Su } from "./protocol.js";
import { OD } from "./ps.js";
import { Cme, tze } from "./rendererProcessInventoryCollector.js";
import { br, fr } from "./state.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Bi, cr } from "./utilityProcess.js";
import { JKe } from "./webviewGuestLabel.js";
import { Di } from "./window.js";
import { ct, pt } from "./windows.js";
import { exec as Ew } from "child_process";
import * as Ime from "fs";
import { screen as Kg } from "electron";
import { BrowserWindow as Rw } from "electron";
import { webContents as nze } from "electron";
import { contentTracing as qg } from "electron";
function Iv() {
    return globalThis._VSCODE_NLS_MESSAGES;
}
function sC(e = 0) {
    return Math.pow(1.2, e);
}
function Jk(e) {
    return !!e.hostName && !!e.errorMessage;
}
function ku(e) {
    return new Promise((t, n)=>{
        let r;
        const s = new Map;
        function i(l, d, u, m, f) {
            const v = s.get(d);
            if (l === e || v) {
                const T = {
                    name: a(u),
                    cmd: u,
                    pid: l,
                    ppid: d,
                    load: m,
                    mem: f
                };
                s.set(l, T), l === e && (r = T), v && (v.children || (v.children = []), v.children.push(T), v.children.length > 1 && (v.children = v.children.sort((S, k)=>S.pid - k.pid)));
            }
        }
        function a(l) {
            const d = /--utility-sub-type=network/i, u = /--crashes-directory/i, m = /\\pipe\\winpty-control/i, f = /conhost\.exe.+--headless/i, v = /--type=([a-zA-Z-]+)/;
            if (u.exec(l)) return "electron-crash-reporter";
            if (m.exec(l)) return "winpty-agent";
            if (f.exec(l)) return "conpty-agent";
            let T = v.exec(l);
            if (T && T.length === 2) return T[1] === "renderer" ? "window" : T[1] === "utility" ? d.exec(l) ? "utility-network-service" : "utility-process" : T[1] === "extensionHost" ? "extension-host" : T[1] === "utilityHost" ? "utility-host" : T[1];
            const S = /[a-zA-Z-]+\.js/g;
            let k = "";
            do T = S.exec(l), T && (k += T + " ");
            while (T)
            return k && l.indexOf("node ") < 0 && l.indexOf("node.exe") < 0 ? `electron-nodejs (${k})` : l;
        }
        if (process.platform === "win32") {
            const l = (d)=>d.indexOf("\\\\?\\") === 0 || d.indexOf("\\??\\") === 0 ? d.substring(4) : d.indexOf('"\\\\?\\') === 0 || d.indexOf('"\\??\\') === 0 ? '"' + d.substring(5) : d;
            import("@vscode/windows-process-tree").then((d)=>{
                d.getProcessList(e, (u)=>{
                    if (!u) {
                        n(new Error(`Root process ${e} not found`));
                        return;
                    }
                    d.getProcessCpuUsage(u, (m)=>{
                        const f = new Map;
                        m.forEach((v)=>{
                            const T = l(v.commandLine || "");
                            f.set(v.pid, {
                                name: a(T),
                                cmd: T,
                                pid: v.pid,
                                ppid: v.ppid,
                                load: v.cpu || 0,
                                mem: v.memory || 0
                            });
                        }), r = f.get(e), r ? (f.forEach((v)=>{
                            const T = f.get(v.ppid);
                            T && (T.children || (T.children = []), T.children.push(v));
                        }), f.forEach((v)=>{
                            v.children && (v.children = v.children.sort((T, S)=>T.pid - S.pid));
                        }), t(r)) : n(new Error(`Root process ${e} not found`));
                    });
                }, d.ProcessDataFlag.CommandLine | d.ProcessDataFlag.Memory);
            });
        } else {
            let l = function() {
                let d = [
                    r
                ];
                const u = [];
                for(; d.length;){
                    const f = d.shift();
                    f && (u.push(f.pid), f.children && (d = d.concat(f.children)));
                }
                let m = JSON.stringify(Jt.asFileUri("vs/base/node/cpuUsage.sh").fsPath);
                m += " " + u.join(" "), Ew(m, {}, (f, v, T)=>{
                    if (f || T) n(f || new Error(T.toString()));
                    else {
                        const S = v.toString().split(`
`);
                        for(let k = 0; k < u.length; k++){
                            const y = s.get(u[k]);
                            y.load = parseFloat(S[k]);
                        }
                        if (!r) {
                            n(new Error(`Root process ${e} not found`));
                            return;
                        }
                        t(r);
                    }
                });
            };
            var o = l;
            Ew("which ps", {}, (d, u, m)=>{
                if (d || m) if (process.platform !== "linux") n(d || new Error(m.toString()));
                else {
                    const f = JSON.stringify(Jt.asFileUri("vs/base/node/ps.sh").fsPath);
                    Ew(f, {}, (v, T, S)=>{
                        v || S ? n(v || new Error(S.toString())) : (yme(T, i), l());
                    });
                }
                else {
                    const f = u.toString().trim();
                    Ew(`${f} -ax -o pid=,ppid=,pcpu=,pmem=,command=`, {
                        maxBuffer: 1e3 * 1024,
                        env: {
                            LC_NUMERIC: "en_US.UTF-8"
                        }
                    }, (T, S, k)=>{
                        T || k && !k.includes("screen size is bogus") ? n(T || new Error(k.toString())) : (yme(S, i), process.platform === "linux" ? l() : r ? t(r) : n(new Error(`Root process ${e} not found`)));
                    });
                }
            });
        }
    });
}
function yme(e, t) {
    const n = /^\s*([0-9]+)\s+([0-9]+)\s+([0-9]+\.[0-9]+)\s+([0-9]+\.[0-9]+)\s+(.+)$/, r = e.toString().split(`
`);
    for (const s of r){
        const i = n.exec(s.trim());
        i && i.length === 6 && t(parseInt(i[1]), parseInt(i[2]), i[5], parseFloat(i[3]), parseFloat(i[4]));
    }
}
function YKe(e, t) {
    return `browser webview${t === void 0 ? "" : ` [${t}]`} (${wme(e)})`;
}
function wme(e) {
    if (!e || e === "about:blank") return "about:blank";
    if (e.startsWith("devtools://")) return "DevTools";
    try {
        const t = new URL(e);
        return t.protocol === "http:" || t.protocol === "https:" ? t.host || e : `${t.protocol}${t.pathname.slice(0, 40)}`;
    } catch  {
        return e.slice(0, 60);
    }
}
function Ia(e) {
    if (!e) return;
    const t = e.split("+");
    if (t.length < 2) return;
    const n = t[0];
    if (!n || n !== "background-composer") return;
    const r = t[1];
    if (r) return r;
}
function LD(e, t, n) {
    if (!e || !t?.size) return !1;
    if (typeof e.pid == "number" && t.has(e.pid)) return e.children || (e.children = []), n.name = "remote agent", Cw(n), e.children.push(n), !0;
    if (Array.isArray(e.children)) {
        for (const r of e.children)if (LD(r, t, n)) return !0;
    }
    return !1;
}
function Cw(e) {
    if (e.isRemote = !0, typeof e.mem == "number" && (e.remoteMem = e.mem, e.mem = 0), Array.isArray(e.children)) for (const t of e.children)Cw(t);
}
function rze(e) {
    if (!e?.workspaceEntries?.length) return [];
    const t = new Set, n = [];
    for (const r of e.workspaceEntries)t.has(r.workspaceId) || (t.add(r.workspaceId), n.push({
        workspaceId: r.workspaceId,
        displayName: r.displayName
    }));
    return n;
}
function UD(e) {
    return {
        ...e,
        children: void 0
    };
}
function xD(e, t = new Set) {
    const n = UD(e);
    if (t.has(e)) return n;
    t.add(e);
    const r = [];
    for (const s of e.children ?? []){
        if (t.has(s)) {
            r.push(UD(s));
            continue;
        }
        r.push(xD(s, t));
    }
    return t.delete(e), r.length && (n.children = r), n;
}
function Ame(e, t, n = new Set) {
    if (n.has(e)) return;
    n.add(e);
    const r = t.get(e.pid);
    if (r) return r;
    for (const s of e.children ?? []){
        const i = Ame(s, t, n);
        if (i) return i;
    }
}
function Mme(e, t = new Set) {
    if (t.has(e)) return 0;
    t.add(e);
    let n = e.load;
    for (const r of e.children ?? [])n += Mme(r, t);
    return n;
}
function Pme(e, t = new Set) {
    if (t.has(e)) return 0;
    t.add(e);
    let n = e.mem;
    for (const r of e.children ?? [])n += Pme(r, t);
    return n;
}
function Nme(e, t, n, r, s) {
    const i = r.reduce((l, d)=>l + Mme(d), 0), a = r.reduce((l, d)=>l + Pme(d), 0), o = {
        name: `${t} processes`,
        cmd: "",
        pid: s,
        ppid: 0,
        load: i,
        mem: a,
        children: r
    };
    return o.isGroupRoot = !0, {
        workspaceId: e,
        displayName: t,
        isShared: n,
        rootProcess: o
    };
}
function sze(e) {
    return typeof e != "object" || e === null ? !1 : "x" in e && "y" in e && "width" in e && "height" in e;
}
var FD, Zc, Dme, WD, yu;
export { Ame, Cw, Dme, FD, Ia, Iv, Jk, LD, Mme, Nme, Pme, UD, WD, YKe, Zc, ku, rze, sC, sze, wme, xD, yme, yu };
var __wakaru_ize_initialized = false;
export function ize() {
if (__wakaru_ize_initialized) return;
__wakaru_ize_initialized = true;
"use strict";
h(), Lr(), j(), $e(), oe(), OD(), hr(), Ne(), qI(), R7(), Ta(), Ye(), Ad(), JKe(), tze(), te(), Gi(), Ha(), Tt(), Hg(), br(), Bi(), Di(), bw(), pt(), FD = "issue.processExplorerWindowState", Zc = "__shared__", Dme = "Shared", WD = /bc-[a-f0-9\-]{8,}/i, yu = class {
    constructor(e, t, n, r, s, i, a, o, l, d, u, m){
        this.userEnv = e, this.environmentMainService = t, this.logService = n, this.diagnosticsService = r, this.diagnosticsMainService = s, this.dialogMainService = i, this.nativeHostMainService = a, this.protocolMainService = o, this.productService = l, this.stateService = d, this.cssDevelopmentService = u, this.windowsMainService = m, this.processExplorerWindow = null, this.processExplorerParentWindow = null, this.isProfiling = !1, this.profilerProcessLabels = new Map, this.rendererProcessInventoryCollector = new Cme, this.registerListeners();
    }
    registerListeners() {
        Te.on("vscode:listProcesses", async (e)=>{
            const t = [];
            try {
                t.push({
                    name: E(2176, null),
                    rootProcess: await ku(process.pid)
                });
                const n = await this.diagnosticsMainService.getMainDiagnostics(), r = await this.diagnosticsMainService.getRemoteDiagnostics({
                    includeProcesses: !0
                }), s = this.buildBcIdToPids(n), i = t[0]?.rootProcess;
                r.forEach((a)=>{
                    if (Jk(a)) {
                        this.logService.info(`[ProcessExplorer] Remote diagnostic error: ${a.hostName}`), t.push({
                            name: a.hostName,
                            rootProcess: a
                        });
                        return;
                    }
                    const o = a.hostName ? WD.exec(a.hostName) : null;
                    if (o && a.processes) {
                        const l = o[0], d = s.get(l);
                        let u = !1;
                        i && d?.length && (u = LD(i, new Set(d), a.processes)), u || t.push({
                            name: a.hostName,
                            rootProcess: a.processes
                        });
                    } else a.processes && t.push({
                        name: a.hostName,
                        rootProcess: a.processes
                    });
                });
            } catch (n) {
                this.logService.error(`Listing processes failed: ${n}`);
            }
            this.safeSend(e, "vscode:listProcessesResponse", t);
        }), Te.on("vscode:listProcessesForWorkspaces", async (e, t)=>{
            const n = rze(t), r = new Map;
            for (const l of n)r.set(l.workspaceId, {
                workspaceId: l.workspaceId,
                displayName: l.displayName,
                isShared: !1,
                children: []
            });
            r.set(Zc, {
                workspaceId: Zc,
                displayName: Dme,
                isShared: !0,
                children: []
            });
            try {
                const l = await ku(process.pid), d = await this.diagnosticsMainService.getMainDiagnostics(), u = await this.diagnosticsMainService.getRemoteDiagnostics({
                    includeProcesses: !0
                }), m = this.buildBcIdToPids(d), f = new Map;
                for (const k of t?.workspaceEntries ?? []){
                    const y = Ia(k.remoteAuthority);
                    y && f.set(y, k.workspaceId);
                }
                const v = new Map;
                for (const [k, y] of m){
                    const b = f.get(k);
                    if (b) for (const I of y)v.set(I, b);
                }
                const T = r.get(Zc);
                T && T.children.push(UD(l));
                const S = [];
                for (const k of u){
                    if (Jk(k)) {
                        this.logService.info(`[ProcessExplorer] Remote diagnostic error: ${k.hostName}`);
                        continue;
                    }
                    const b = (k.hostName ? WD.exec(k.hostName) : null)?.[0], I = b ? f.get(b) : void 0;
                    if (k.processes && b) {
                        const G = m.get(b);
                        (G?.length ? LD(l, new Set(G), k.processes) : !1) || (Cw(k.processes), S.push({
                            workspaceId: I,
                            process: k.processes
                        }));
                        continue;
                    }
                    k.processes && (Cw(k.processes), S.push({
                        workspaceId: I,
                        process: k.processes
                    }));
                }
                for (const k of l.children ?? []){
                    const y = Ame(k, v);
                    ((y ? r.get(y) : void 0) ?? r.get(Zc))?.children.push(xD(k));
                }
                for (const k of S)((k.workspaceId ? r.get(k.workspaceId) : void 0) ?? r.get(Zc))?.children.push(xD(k.process));
            } catch (l) {
                this.logService.error(`[ProcessExplorer] Listing workspace-grouped processes failed: ${l}`);
            }
            let s = -1;
            const i = [];
            for (const l of n){
                const d = r.get(l.workspaceId);
                d && i.push(Nme(d.workspaceId, d.displayName, d.isShared, d.children, s--));
            }
            const a = r.get(Zc);
            a && i.push(Nme(a.workspaceId, a.displayName, a.isShared, a.children, s--));
            const o = {
                groups: i
            };
            this.safeSend(e, "vscode:listProcessesForWorkspacesResponse", o);
        }), Te.on("vscode:workbenchCommand", (e, t)=>{
            const { id: n, from: r, args: s } = t;
            if (n === "workbench.action.openDevToolsForBgWindow" && r === "processExplorer") {
                this.openDevToolsForPid(s[0]?.pid);
                return;
            }
            let i;
            switch(r){
                case "processExplorer":
                    i = this.processExplorerParentWindow;
                    break;
                default:
                    throw new Error(`Unexpected command source: ${r}`);
            }
            i?.webContents.send("vscode:runAction", {
                id: n,
                from: r,
                args: s
            });
        }), Te.on("vscode:closeProcessExplorer", (e)=>{
            this.processExplorerWindow?.close();
        }), Te.on("vscode:pidToNameRequest", async (e)=>{
            const t = await this.getKnownProcessLabels();
            this.safeSend(e, "vscode:pidToNameResponse", Array.from(t.entries()));
        });
    }
    async getKnownProcessLabels() {
        const e = await this.diagnosticsMainService.getMainDiagnostics(), t = new Map([
            [
                e.mainPID,
                `${this.productService.applicationName} main process`
            ]
        ]);
        try {
            this.addProcessTreeLabels(await ku(process.pid), t);
        } catch (n) {
            this.logService.warn(`[ProcessMainService] Could not collect process tree labels: ${n instanceof Error ? n.message : String(n)}`);
        }
        for (const n of e.windows){
            const r = Ia(n.remoteAuthority);
            r ? t.set(n.pid, `bg-window (${r})`) : t.set(n.pid, `window [${n.id}] (${n.title})`);
        }
        for (const n of this.windowsMainService.getWindows()){
            const r = n.browserView;
            if (r?.webContents && !r.webContents.isDestroyed()) {
                const s = r.webContents.getOSProcessId();
                if (!t.has(s)) {
                    const i = Ia(n.remoteAuthority);
                    t.set(s, i ? `bg-window (${i})` : "bg-window");
                }
            }
        }
        this.addWebviewGuestLabels(t);
        for (const { pid: n, name: r, processTitle: s } of cr.getAll())t.set(n, s || r);
        return t;
    }
    addWebviewGuestLabels(e) {
        for (const t of nze.getAllWebContents()){
            if (t.isDestroyed() || t.getType() !== "webview") continue;
            let n;
            try {
                n = t.getOSProcessId();
            } catch  {
                continue;
            }
            const r = t.hostWebContents, s = r && !r.isDestroyed() ? this.windowsMainService.getWindowByWebContents(r) : void 0, i = YKe(t.getURL(), s?.id), a = e.get(n);
            e.set(n, a?.startsWith("browser webview") ? `${a}, ${wme(t.getURL())}` : i);
        }
    }
    addProcessTreeLabels(e, t) {
        t.has(e.pid) || t.set(e.pid, this.getProcessTreeLabel(e));
        for (const n of e.children ?? [])this.addProcessTreeLabels(n, t);
    }
    getProcessTreeLabel(e) {
        return e.name.length > 0 ? e.name : e.cmd;
    }
    buildBcIdToPids(e) {
        const t = new Map, n = (r, s)=>{
            if (!r) return;
            const i = t.get(r);
            i ? i.push(s) : t.set(r, [
                s
            ]);
        };
        for (const r of e.windows)n(Ia(r.remoteAuthority), r.pid);
        for (const r of this.windowsMainService.getWindows()){
            const s = r.browserView;
            s?.webContents && !s.webContents.isDestroyed() && n(Ia(r.remoteAuthority), s.webContents.getOSProcessId());
        }
        return t;
    }
    async openProcessExplorer(e) {
        if (!this.processExplorerWindow && (this.processExplorerParentWindow = Rw.getFocusedWindow(), this.processExplorerParentWindow)) {
            const t = new ve, n = t.add(this.protocolMainService.createIPCObjectUrl()), r = this.stateService.getItem(FD, void 0), s = sze(r) ? r : this.getWindowPosition(this.processExplorerParentWindow, 800, 500);
            this.processExplorerWindow = this.createBrowserWindow(s, n, {
                backgroundColor: e.styles.backgroundColor,
                title: e.mode === "workspaceGroups" ? E(2177, null) : E(2178, null),
                zoomLevel: e.zoomLevel,
                alwaysOnTop: !0
            }, "process-explorer"), n.update({
                appRoot: this.environmentMainService.appRoot,
                windowId: this.processExplorerWindow.id,
                userEnv: this.userEnv,
                data: e,
                product: Xn,
                nls: {
                    messages: Iv(),
                    language: vm()
                },
                cssModules: this.cssDevelopmentService.isEnabled ? await this.cssDevelopmentService.getCssModules() : void 0
            }), this.processExplorerWindow.loadURL(Jt.asBrowserUri(`vs/code/electron-sandbox/processExplorer/processExplorer${this.environmentMainService.isBuilt ? "" : "-dev"}.html`).toString(!0)), this.processExplorerWindow.on("close", ()=>{
                this.processExplorerWindow = null, t.dispose();
            }), this.processExplorerParentWindow.on("close", ()=>{
                this.processExplorerWindow && (this.processExplorerWindow.close(), this.processExplorerWindow = null, t.dispose());
            });
            const i = ()=>{
                if (!this.processExplorerWindow) return;
                const a = this.processExplorerWindow.getSize(), o = this.processExplorerWindow.getPosition();
                if (!a || !o) return;
                const l = {
                    width: a[0],
                    height: a[1],
                    x: o[0],
                    y: o[1]
                };
                this.stateService.setItem(FD, l);
            };
            this.processExplorerWindow.on("moved", i), this.processExplorerWindow.on("resized", i);
        }
        this.processExplorerWindow && this.focusWindow(this.processExplorerWindow);
    }
    focusWindow(e) {
        e.isMinimized() && e.restore(), e.focus();
    }
    getWindowPosition(e, t, n) {
        let r;
        const s = Kg.getAllDisplays();
        if (s.length === 1) r = s[0];
        else {
            if (q) {
                const o = Kg.getCursorScreenPoint();
                r = Kg.getDisplayNearestPoint(o);
            }
            !r && e && (r = Kg.getDisplayMatching(e.getBounds())), r || (r = Kg.getPrimaryDisplay() || s[0]);
        }
        const i = r.bounds, a = {
            width: t,
            height: n,
            x: i.x + i.width / 2 - t / 2,
            y: i.y + i.height / 2 - n / 2
        };
        return i.width > 0 && i.height > 0 && (a.x < i.x && (a.x = i.x), a.y < i.y && (a.y = i.y), a.x > i.x + i.width && (a.x = i.x), a.y > i.y + i.height && (a.y = i.y), a.width > i.width && (a.width = i.width), a.height > i.height && (a.height = i.height)), a;
    }
    async cursorIsProfilerRunning() {
        return this.isProfiling;
    }
    async getRendererProcessInventory() {
        return this.rendererProcessInventoryCollector.collect();
    }
    async cursorStartProfilerCPU() {
        if (this.isProfiling) return;
        this.isProfiling = !0, this.profilerProcessLabels = await this.getKnownProcessLabels();
        const e = {
            recording_mode: "record-until-full",
            included_categories: [
                "disabled-by-default-v8.cpu_profiler",
                "disabled-by-default-v8.cpu_profiler.hires"
            ],
            excluded_categories: [
                "*"
            ]
        };
        await qg.startRecording(e);
    }
    async cursorStartProfilerMemory() {
        if (this.isProfiling) return;
        this.isProfiling = !0, this.profilerProcessLabels = await this.getKnownProcessLabels();
        const t = this.environmentMainService.args["trace-category-filter"]?.split(",") || [];
        t.push("disabled-by-default-memory-infra", "disabled-by-default-memory-infra.v8.code_stats");
        const n = {
            included_categories: t,
            excluded_categories: [
                "*"
            ],
            memory_dump_config: {
                allowed_dump_modes: [
                    "light",
                    "detailed"
                ],
                triggers: [
                    {
                        type: "periodic_interval",
                        mode: "detailed",
                        min_time_between_dumps_ms: 1e4
                    },
                    {
                        type: "periodic_interval",
                        mode: "light",
                        min_time_between_dumps_ms: 1e3
                    }
                ]
            }
        };
        await qg.startRecording(n);
    }
    async cursorStartProfilerGC() {
        if (this.isProfiling) return;
        this.isProfiling = !0, this.profilerProcessLabels = await this.getKnownProcessLabels();
        const e = {
            recording_mode: "record-until-full",
            included_categories: [
                "disabled-by-default-v8.gc_stats"
            ],
            excluded_categories: [
                "*"
            ]
        };
        await qg.startRecording(e);
    }
    async addKnownProcessLabelsToProfile(e) {
        try {
            const t = new Map([
                ...this.profilerProcessLabels,
                ...await this.getKnownProcessLabels()
            ]);
            this.profilerProcessLabels = new Map;
            const n = await Ime.promises.readFile(e, "utf8"), r = this.rewriteProfileMetadata(n, t);
            r !== n && await Ime.promises.writeFile(e, r, "utf8");
        } catch (t) {
            this.logService.warn(`[ProcessMainService] Could not add process labels to profile: ${t instanceof Error ? t.message : String(t)}`);
        }
    }
    rewriteProfileMetadata(e, t) {
        const n = new Set, r = [], s = /\{"args":\{"name":"([^"]*)"\},"cat":"__metadata","name":"process_name","ph":"M","pid":(\d+),"tid":0,"ts":0\}/g;
        let i = e.replace(s, (v, T, S)=>{
            const k = Number(S), y = t.get(k);
            return y ? (n.add(k), JSON.stringify(this.createProfileProcessNameEvent(k, y))) : v;
        });
        const a = /\{"args":\{"name":"([^"]*)"\},"cat":"__metadata","name":"thread_name","ph":"M","pid":(\d+),"tid":(\d+),"ts":0\}/g;
        i = i.replace(a, (v, T, S, k)=>{
            const y = Number(S), b = Number(k), I = t.get(y);
            return !I || !Number.isFinite(b) ? v : JSON.stringify(this.createProfileThreadNameEvent(y, b, this.getProfileThreadName(I, T)));
        });
        for (const [v, T] of t)n.has(v) || r.push(this.createProfileProcessNameEvent(v, T));
        if (r.length === 0) return i;
        const l = i.lastIndexOf('],"metadata":');
        if (l === -1) return this.logService.warn("[ProcessMainService] Could not add missing process labels to profile: traceEvents end marker not found"), i;
        const d = i.slice(0, l), u = i.slice(l), m = d.trimEnd().endsWith("[") ? "" : ",", f = r.map((v)=>JSON.stringify(v)).join(",");
        return `${d}${m}${f}${u}`;
    }
    createProfileProcessNameEvent(e, t) {
        return {
            args: {
                name: t
            },
            cat: "__metadata",
            name: "process_name",
            ph: "M",
            pid: e,
            tid: 0,
            ts: 0
        };
    }
    createProfileThreadNameEvent(e, t, n) {
        return {
            args: {
                name: n
            },
            cat: "__metadata",
            name: "thread_name",
            ph: "M",
            pid: e,
            tid: t,
            ts: 0
        };
    }
    getProfileThreadName(e, t) {
        return t === "CrBrowserMain" || t === "CrRendererMain" || t === "node.CrUtilityMain" ? e : t === "v8:ProfEvntProc" ? `${e} CPU profiler` : `${e} (${t})`;
    }
    async cursorStopProfiler() {
        if (!this.isProfiling) return;
        this.isProfiling = !1;
        const e = `${rc(this.environmentMainService.userHome.fsPath, this.productService.applicationName)}-${this.productService.commit ?? "dev"}.profile.txt`, t = await qg.stopRecording(e);
        await this.addKnownProcessLabelsToProfile(t), this.nativeHostMainService.showItemInFolder(void 0, t);
    }
    async stopTracing() {
        if (!this.environmentMainService.args.trace) return;
        const e = await qg.stopRecording(`${rc(this.environmentMainService.userHome.fsPath, this.productService.applicationName)}.trace.txt`);
        await this.dialogMainService.showMessageBox({
            type: "info",
            message: E(2179, null),
            detail: E(2180, null, e),
            buttons: [
                E(2181, null)
            ]
        }, Rw.getFocusedWindow() ?? void 0), this.nativeHostMainService.showItemInFolder(void 0, e);
    }
    async getSystemStatus() {
        const [e, t] = await Promise.all([
            this.diagnosticsMainService.getMainDiagnostics(),
            this.diagnosticsMainService.getRemoteDiagnostics({
                includeProcesses: !1,
                includeWorkspaceMetadata: !1
            })
        ]);
        return this.diagnosticsService.getDiagnostics(e, t);
    }
    async $getSystemInfo() {
        const [e, t] = await Promise.all([
            this.diagnosticsMainService.getMainDiagnostics(),
            this.diagnosticsMainService.getRemoteDiagnostics({
                includeProcesses: !1,
                includeWorkspaceMetadata: !1
            })
        ]);
        return await this.diagnosticsService.getSystemInfo(e, t);
    }
    async $getPerformanceInfo() {
        try {
            const [e, t] = await Promise.all([
                this.diagnosticsMainService.getMainDiagnostics(),
                this.diagnosticsMainService.getRemoteDiagnostics({
                    includeProcesses: !0,
                    includeWorkspaceMetadata: !0
                })
            ]);
            return await this.diagnosticsService.getPerformanceInfo(e, t);
        } catch (e) {
            throw this.logService.warn("issueService#getPerformanceInfo ", e.message), e;
        }
    }
    createBrowserWindow(e, t, n, r) {
        const s = {
            fullscreen: !1,
            skipTaskbar: !1,
            resizable: !0,
            width: e.width,
            height: e.height,
            minWidth: 300,
            minHeight: 200,
            x: e.x,
            y: e.y,
            title: n.title,
            backgroundColor: n.backgroundColor || yu.DEFAULT_BACKGROUND_COLOR,
            webPreferences: {
                preload: Jt.asFileUri("vs/base/parts/sandbox/electron-sandbox/preload.js").fsPath,
                additionalArguments: [
                    `--vscode-window-config=${t.resource.toString()}`
                ],
                v8CacheOptions: this.environmentMainService.useCodeCache ? "bypassHeatCheck" : "none",
                enableWebSQL: !1,
                spellcheck: !1,
                zoomFactor: sC(n.zoomLevel),
                sandbox: !0
            },
            alwaysOnTop: n.alwaysOnTop,
            experimentalDarkMode: !0
        }, i = new Rw(s);
        return i.setMenuBarVisibility(!1), i;
    }
    safeSend(e, t, ...n) {
        e.sender.isDestroyed() || e.sender.send(t, ...n);
    }
    async closeProcessExplorer() {
        this.processExplorerWindow?.close();
    }
    openDevToolsForPid(e) {
        if (e) {
            for (const t of Rw.getAllWindows())if (t.webContents && !t.webContents.isDestroyed() && t.webContents.getOSProcessId() === e) {
                t.webContents.openDevTools();
                return;
            }
            for (const t of this.windowsMainService.getWindows()){
                const n = t.browserView;
                if (n?.webContents && !n.webContents.isDestroyed() && n.webContents.getOSProcessId() === e) {
                    n.webContents.openDevTools();
                    return;
                }
            }
            this.logService.warn(`[ProcessExplorer] Could not find window or view with PID ${e} to open devtools`);
        }
    }
}, yu.DEFAULT_BACKGROUND_COLOR = "#1E1E1E", yu = B([
    w(1, qe),
    w(2, Z),
    w(3, HI),
    w(4, rS),
    w(5, ci),
    w(6, _s),
    w(7, Su),
    w(8, et),
    w(9, fr),
    w(10, Oc),
    w(11, ct)
], yu);

}
