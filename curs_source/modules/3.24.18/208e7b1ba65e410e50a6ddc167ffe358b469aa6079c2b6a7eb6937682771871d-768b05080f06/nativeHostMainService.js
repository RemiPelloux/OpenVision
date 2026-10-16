import { AG } from "./async.cursor.js";
import { d7, zk } from "./auth.js";
import { Dc, Xp } from "./auxiliaryWindows.js";
import { ae, it } from "./buffer.js";
import { Ie, Mt } from "./cancellation.js";
import { dp } from "./color.js";
import { at, ot } from "./configuration.js";
import { E } from "./configurationRegistry.js";
import { Ja, mF, pF } from "./constants.js";
import { Ad, Oc } from "./cssDevService.js";
import { sc } from "./decorators.js";
import { Ta, ci } from "./dialogMainService.js";
import { c7e } from "./docker.js";
import { Ye, qe } from "./environmentMainService.js";
import { Ve, kt } from "./errors.js";
import { N, O, se } from "./event.js";
import { A7e } from "./externalBrowserSpawn.js";
import { Lr, d3, u3 } from "./extpath.js";
import { eA } from "./extpath_2.js";
import { Jp, aS } from "./id.js";
import { Q, ne, ni } from "./instantiation.js";
import { B, Ue } from "./ipc.js";
import { Te, hr } from "./ipcMain.js";
import { h6 } from "./labels.js";
import { J, j } from "./lifecycle.js";
import { Vt, ht } from "./lifecycleMainService.js";
import { P7e } from "./listeningPortsCommand.js";
import { CG, IG, b7e } from "./localServerProbe.js";
import { Z, te } from "./log.js";
import { Zo } from "./main.js";
import { YT, fc } from "./menubar_2.js";
import { $, $e } from "./network.js";
import { Ne } from "./nls.js";
import { Ce, De, Fn, L, Yt, _t, on, st, xn } from "./path.js";
import { Zn, gn, ie } from "./pfs.js";
import { Fe, Xs, ee, oe, q } from "./platform.js";
import { rG } from "./ports.js";
import { sC } from "./processMainService.js";
import { Tt, et } from "./productService.js";
import { fs, li } from "./request_2.js";
import { Ii } from "./resources.js";
import { C7e } from "./screenshotFlatten.js";
import { gc, mp, no, up, w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Nd, hA, pS } from "./tunnel.js";
import { x, ye } from "./uri.js";
import { rr } from "./userDataProfile.js";
import { Wn, vt } from "./uuid.js";
import { yR } from "./watcher.js";
import { O7e, gA } from "./webContentsScreenshot.js";
import { Di, pp } from "./window.js";
import { A6, HT, I6, M6, b6, qT } from "./windowImpl.js";
import { dG, uS } from "./windowProfiling.js";
import { hp, ro } from "./window_2.js";
import { ct, pt } from "./windows.js";
import { bn, od, q6 } from "./workspace.js";
import { Pc, lo } from "./workspacesManagementMainService.js";
import { pG } from "./wsl.js";
import { f7e } from "./wsl_2.js";
import { filter as $7e } from "rxjs";
import { release as B7e } from "os";
import { fromEvent as DG } from "rxjs";
import { loadavg as F7e } from "os";
import { totalmem as G7e } from "os";
import { NEVER as H7e } from "rxjs";
import { take as J7e } from "rxjs";
import JT from "electron";
import * as K7 from "fs";
import { share as K7e } from "rxjs";
import { arch as L7e } from "os";
import { promisify as Lc } from "util";
import { webContents as NG } from "electron";
import { spawn as PG } from "child_process";
import { shell as TA } from "electron";
import { cpus as U7e } from "os";
import { type as V7e } from "os";
import { platform as W7e } from "os";
import * as Xt from "fs";
import { switchMap as Y7e } from "rxjs";
import { exec as Zp } from "child_process";
import { net as _A } from "electron";
import * as cA from "path";
import * as d7e from "os";
import { app as di } from "electron";
import { execFile as eh } from "child_process";
import { nativeImage as fA } from "electron";
import * as hG from "child_process";
import { map as j7e } from "rxjs";
import { tmpdir as kA } from "os";
import { clipboard as ka } from "electron";
import * as l7e from "fs";
import * as n7e from "child_process";
import { Menu as nh } from "electron";
import { Observable as q7e } from "rxjs";
import * as r7e from "os";
import { screen as rh } from "electron";
import * as tG from "net";
import { BrowserWindow as th } from "electron";
import * as u7e from "path";
import * as uG from "fs";
import { powerMonitor as vA } from "electron";
import { freemem as x7e } from "os";
import { Subject as z7e } from "rxjs";
function FUe(e, t) {
    return x.isUri(e) ? Ii(e.scheme, t) : yR(e, t + ":");
}
function S5(e, ...t) {
    return t.some((n)=>FUe(e, n));
}
function rc(e, t, n = 8) {
    let r = "";
    for(let i = 0; i < n; i++){
        let a;
        i === 0 && ee && !t && (n === 3 || n === 4) ? a = u3 : a = d3, r += a.charAt(Math.floor(Math.random() * a.length));
    }
    let s;
    return t ? s = `${t}-${r}` : s = r, e ? L(e, s) : s;
}
function rC(e, t) {
    if (Xs) return "custom";
    const n = e.getValue("window");
    if (n) {
        if (YT(n, t) || q && n.nativeFullScreen === !1) return "native";
        const i = n.titleBarStyle;
        if (i === "native" || i === "custom") return "custom";
    }
    return "custom";
}
function R5e(e) {
    if (typeof e != "object" || e === null) return !1;
    const t = Object.getOwnPropertyDescriptor(e, "ok")?.value;
    return t === !0 ? Object.getOwnPropertyDescriptor(e, "value") !== void 0 : t === !1 ? typeof Object.getOwnPropertyDescriptor(e, "error")?.value == "string" : !1;
}
function XT(e, t, n, r) {
    const s = e.get(no), i = e.get(et), a = e.get(ot), o = e.get(qe), l = a.getValue("window"), d = o.args["enable-smoke-test-driver"], u = b6(i.nameShort, h6({
        rawRemoteDebuggingPortSwitch: JT.app.commandLine.getSwitchValue("remote-debugging-port"),
        applicationName: i.applicationName
    })), m = {
        backgroundColor: s.getBackgroundColor({
            isGlass: n.isGlassWindow === !0
        }),
        minWidth: n.isGlassWindow === !0 ? pp.WIDTH_GLASS : pp.WIDTH,
        minHeight: pp.HEIGHT,
        title: n.isGlassWindow === !0 ? u : i.nameLong,
        show: !d && n.hideBecauseShadowWindow === !1 && t.mode !== 0 && t.mode !== 3,
        x: t.x,
        y: t.y,
        width: t.width,
        height: t.height,
        webPreferences: {
            ...r,
            enableWebSQL: !1,
            spellcheck: !1,
            zoomFactor: sC(t.zoomLevel ?? l?.zoomLevel),
            autoplayPolicy: "user-gesture-required",
            enableBlinkFeatures: "HighlightAPI",
            sandbox: !0,
            enableDeprecatedPaste: !0,
            webviewTag: !0
        },
        experimentalDarkMode: !0
    };
    if (n.isGlassWindow === !0 && (m.minHeight = pp.HEIGHT_GLASS, m.hasShadow = !0, q && (m.show = !1)), n.isGlassWindow === !0 || n.glassVibrancy === !0) if (m.hasShadow = !0, q) {
        const T = s.getGlassThemeForVibrancy({
            isGlass: !0
        }), S = HT(T);
        S !== void 0 && (m.backgroundColor = qT(T), m.vibrancy = S, m.visualEffectState = "active");
    } else if (ee) {
        const T = s.getGlassThemeForVibrancy({
            isGlass: !0
        }), S = up(T);
        m.backgroundMaterial = S, m.backgroundColor = S === "mica" ? mp(T) : s.getBackgroundColor({
            isGlass: !0
        });
    } else n.isGlassWindow === !0 && (m.backgroundColor = s.getBackgroundColor({
        isGlass: !0
    }));
    if (n.glassVibrancy === !0 && (m.show = !1, m.resizable = !1, m.maximizable = !1, m.fullscreenable = !1, typeof t.width == "number" && t.width > 0 && (m.minWidth = Math.max(m.minWidth ?? 0, t.width), m.maxWidth = t.width), m.glassDeferShow = !0), Fe ? m.icon = L(o.appRoot, "resources/linux/code.png") : ee && !o.isBuilt && (m.icon = L(o.appRoot, "resources/win32/code_150x150.png")), q && (m.acceptFirstMouse = !0, l?.clickThroughInactive === !1 && (m.acceptFirstMouse = !1)), n?.disableFullscreen ? m.fullscreen = !1 : q && !M6(a, n) && (m.fullscreenable = !1), I6(a, n) && (m.tabbingIdentifier = i.nameShort), !fc(a, n?.forceNativeTitlebar ? "native" : rC(a, n)) && (m.titleBarStyle = "hidden", q || (m.frame = !1), A6(a, n))) if (q) m.titleBarOverlay = !0;
    else {
        const S = s.getWindowSplash(void 0)?.colorInfo.titleBarBackground ?? s.getBackgroundColor({
            isGlass: n.isGlassWindow === !0
        }), k = dp.fromHex(S).isDarker() ? "#FFFFFF" : "#000000";
        m.titleBarOverlay = {
            height: 29,
            color: S,
            symbolColor: k
        };
    }
    return m;
}
function ZT(e, t) {
    if (typeof e == "string" || typeof e > "u") return typeof e == "string" ? {
        id: _t(e)
    } : t ? q6 : od;
    const n = e;
    return n.configuration ? {
        id: n.id,
        configPath: n.configuration
    } : n.folders.length === 1 ? {
        id: n.id,
        uri: n.folders[0].uri
    } : {
        id: n.id
    };
}
async function iS(e) {
    try {
        return await ie.realpath(e);
    } catch  {
        const n = NBe(e);
        return await K7.promises.access(n, K7.constants.R_OK), n;
    }
}
function NBe(e) {
    return Zo(on(e), Fn);
}
function $Be(e, t, n, r = 1) {
    let s = !1;
    return new Promise((i)=>{
        const a = setTimeout(()=>{
            if (!s) return s = !0, i(0);
        }, n);
        rA(e, t, r, (o)=>{
            if (!s) return s = !0, clearTimeout(a), i(o);
        });
    });
}
function rA(e, t, n, r) {
    if (t === 0) return r(0);
    const s = new tG.Socket;
    s.once("connect", ()=>(nG(s), rA(e + n, t - 1, n, r))), s.once("data", ()=>{}), s.once("error", (i)=>(nG(s), i.code !== "ECONNREFUSED" ? rA(e + n, t - 1, n, r) : r(e))), s.connect(e, "127.0.0.1");
}
function nG(e) {
    try {
        e.removeAllListeners("connect"), e.removeAllListeners("error"), e.end(), e.destroy(), e.unref();
    } catch (t) {
        console.error(t);
    }
}
async function s7e(e = !1) {
    return (lA === void 0 || e) && (lA = i7e()), lA;
}
async function i7e() {
    for (const e of a7e())if (await o7e(e)) return !0;
    return !1;
}
function a7e() {
    return ee ? [
        "docker.exe",
        cA.join(process.env.ProgramFiles ?? "C:\\Program Files", "Docker", "Docker", "resources", "bin", "docker.exe")
    ] : [
        "docker",
        "/usr/local/bin/docker",
        "/opt/homebrew/bin/docker",
        "/usr/bin/docker",
        cA.join(r7e.homedir(), ".docker", "bin", "docker")
    ];
}
async function o7e(e) {
    if (cA.isAbsolute(e)) try {
        await uG.promises.access(e, uG.constants.X_OK);
    } catch  {
        return !1;
    }
    return new Promise((t)=>{
        try {
            n7e.execFile(e, [
                "--version"
            ], {
                timeout: 5e3,
                windowsHide: !0
            }, (n)=>t(!n));
        } catch  {
            t(!1);
        }
    });
}
var lA;
function mG(e) {
    const t = new Set, n = [];
    for (const r of e.replace(/^\uFEFF/, "").split(/\r?\n/)){
        const s = r.replace(/\0/g, "").trim();
        !s || s.startsWith("docker-desktop") || t.has(s) || (t.add(s), n.push(s));
    }
    return n;
}
async function gG(e = !1) {
    return (dA === void 0 || e) && (dA = p7e()), dA;
}
async function m7e() {
    if (!await gG()) return [];
    const e = _G();
    return e ? new Promise((t)=>{
        try {
            hG.execFile(e, [
                "-l",
                "-q"
            ], {
                encoding: "utf16le",
                timeout: 5e3,
                windowsHide: !0
            }, (n, r)=>{
                if (n || typeof r != "string") {
                    t([]);
                    return;
                }
                t(mG(r));
            });
        } catch  {
            t([]);
        }
    }) : [];
}
async function p7e() {
    const e = h7e();
    if (e === void 0) return !1;
    if (e >= 22e3) {
        const t = _G();
        if (t) return new Promise((n)=>{
            try {
                hG.execFile(t, [
                    "--status"
                ], (r)=>n(!r));
            } catch  {
                n(!1);
            }
        });
    } else {
        const t = g7e();
        if (t) try {
            if ((await l7e.promises.stat(t)).isFile()) return !0;
        } catch  {}
    }
    return !1;
}
function h7e() {
    const e = /(\d+)\.(\d+)\.(\d+)/g.exec(d7e.release());
    if (e) return parseInt(e[3]);
}
function fG(e) {
    const t = process.env.SystemRoot;
    if (t) {
        const n = process.env.hasOwnProperty("PROCESSOR_ARCHITEW6432");
        return u7e.join(t, n ? "Sysnative" : "System32", e);
    }
}
function _G() {
    return fG("wsl.exe");
}
function g7e() {
    return fG("lxss\\LxssManager.dll");
}
var dA;
function yG(e) {
    const t = e.scheme.toLowerCase();
    if (t !== "http" && t !== "https") return !1;
    try {
        const n = new URL(e.toString()).hostname.toLowerCase(), r = (n.startsWith("[") && n.endsWith("]") ? n.slice(1, -1) : n).replace(/\.$/, "");
        return pS(r) || Nd(r) || r.endsWith(".localhost") || /^127\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(r);
    } catch  {
        return !1;
    }
}
function EG(...e) {
    const t = new Set;
    for (const n of e)for (const r of n.split(/\r?\n/)){
        const s = r.trim().split(/\s+/);
        if (s.length < 4 || s[3] !== "0A") continue;
        const i = s[1].lastIndexOf(":");
        _S(t, Number.parseInt(s[1].slice(i + 1), 16));
    }
    return [
        ...t
    ].sort((n, r)=>n - r);
}
function y7e(e) {
    const t = new Set;
    for (const n of e.split(/[\0\r\n]+/)){
        const r = /^n.*:(\d+)$/.exec(n.trim());
        r && _S(t, Number.parseInt(r[1], 10));
    }
    return [
        ...t
    ].sort((n, r)=>n - r);
}
function w7e(e) {
    const t = new Set;
    for (const n of e.split(/\r?\n/)){
        const r = n.trim().split(/\s+/);
        if (r.length < 5 || r[0].toUpperCase() !== "TCP" || r[3].toUpperCase() !== "LISTENING" && !/^(?:0\.0\.0\.0|\[::\]):0$/.test(r[2])) continue;
        const s = r[1].lastIndexOf(":");
        _S(t, Number.parseInt(r[1].slice(s + 1), 10));
    }
    return [
        ...t
    ].sort((n, r)=>n - r);
}
function bG(...e) {
    const t = new Set;
    for (const n of e)for (const r of n)_S(t, r);
    return [
        ...t
    ].sort((n, r)=>n - r);
}
function _S(e, t) {
    Number.isInteger(t) && t >= 1 && t <= 65535 && e.add(t);
}
function RG(e) {
    if (!e) return;
    const t = e.indexOf(";"), n = (t >= 0 ? e.slice(0, t) : e).trim().toLowerCase();
    return n.length > 0 ? n : void 0;
}
function E7e(e) {
    const n = new TextDecoder().decode(e).replace(/^[\uFEFF\t\n\f\r ]+/, "").toLowerCase();
    return CG.some((r)=>n.startsWith(r) && (r === "<!--" || n.length === r.length || IG.has(n[r.length])));
}
function R7e(e, t) {
    let n;
    try {
        n = dp.Format.CSS.parse(t)?.rgba;
    } catch  {
        return !1;
    }
    if (!n || n.a === 0) return !1;
    let r = !1;
    for(let s = 0; s < e.length; s += 4){
        const i = 255 - e[s + 3];
        i !== 0 && (r = !0, e[s] = Math.min(255, e[s] + Math.round(n.b * i / 255)), e[s + 1] = Math.min(255, e[s + 1] + Math.round(n.g * i / 255)), e[s + 2] = Math.min(255, e[s + 2] + Math.round(n.r * i / 255)), e[s + 3] = 255);
    }
    return r;
}
async function I7e(e) {
    e.pid === void 0 && await new Promise((t, n)=>{
        e.once("spawn", t), e.once("error", n);
    });
}
function M7e(e, t, n, r, s, i) {
    return new Promise((a)=>{
        try {
            e(t, n, {
                encoding: "utf8",
                maxBuffer: 1024 * 1024,
                timeout: i,
                windowsHide: !0
            }, (o, l)=>{
                const d = typeof o?.code == "number" ? o.code : void 0;
                if (o && !(s && d === 1 && l.trim() === "")) {
                    a({
                        status: "unavailable"
                    });
                    return;
                }
                a({
                    status: "complete",
                    ports: r(l)
                });
            });
        } catch  {
            a({
                status: "unavailable"
            });
        }
    });
}
function N7e(e, t) {
    const { timeoutMs: n, signal: r } = t, s = new AbortController, i = r === void 0 ? s.signal : AbortSignal.any([
        r,
        s.signal
    ]);
    return new Promise((a, o)=>{
        if (r?.aborted) {
            o(r.reason);
            return;
        }
        let l, d;
        const u = ()=>{
            l !== void 0 && (clearTimeout(l), l = void 0), d !== void 0 && (r?.removeEventListener("abort", d), d = void 0);
        };
        d = ()=>{
            u(), o(r.reason);
        }, l = setTimeout(()=>{
            l = void 0, u();
            const f = new AG(n, t.onTimeoutMessage);
            s.abort(f), o(f);
        }, n), r?.addEventListener("abort", d);
        let m;
        try {
            m = e(i);
        } catch (f) {
            m = Promise.reject(f);
        }
        m.then(a, o).finally(u);
    });
}
function MG(e, t) {
    return N7e(()=>e.capturePage(t), {
        timeoutMs: gA,
        onTimeoutMessage: `Screenshot timed out after ${gA}ms: no new frame was presented (the window may be hidden or minimized)`
    });
}
var _s, $t;
export { $Be, $t, E7e, EG, FUe, I7e, M7e, MG, N7e, NBe, R5e, R7e, RG, S5, XT, ZT, _G, _S, _s, a7e, bG, dA, fG, g7e, gG, h7e, i7e, iS, lA, m7e, mG, nG, o7e, p7e, rA, rC, rc, s7e, w7e, y7e, yG };
var __wakaru_Gi_initialized = false;
export function Gi() {
if (__wakaru_Gi_initialized) return;
__wakaru_Gi_initialized = true;
"use strict";
h(), it(), Mt(), Ja(), sc(), Ve(), se(), Lr(), j(), $e(), Ce(), oe(), ye(), Wn(), hr(), eA(), Jp(), gn(), rG(), Ne(), Xp(), at(), Ad(), Ta(), Ye(), ne(), Vt(), te(), Tt(), dG(), c7e(), pG(), f7e(), fs(), gc(), hA(), Di(), hp(), pt(), bn(), Pc(), b7e(), C7e(), A7e(), P7e(), O7e(), d7(), _s = Q("nativeHostMainService"), $t = class extends J {
    constructor(e, t, n, r, s, i, a, o, l, d, u, m, f, v){
        super(), this.windowsMainService = e, this.auxiliaryWindowsMainService = t, this.dialogMainService = n, this.lifecycleMainService = r, this.environmentMainService = s, this.logService = i, this.productService = a, this.themeMainService = o, this.workspacesManagementMainService = l, this.configurationService = d, this.requestService = u, this.proxyAuthService = m, this.instantiationService = f, this.cssDevelopmentService = v, this._onDidChangeCssModules = this._register(new N), this.onDidChangeCssModules = this._onDidChangeCssModules.event, this._onDidChangePassword = this._register(new N), this.onDidChangePassword = this._onDidChangePassword.event, this.heicConversionFolderPath = L(kA(), "cursor-heic-conversion"), this.heicCleanupDone = !1, v.isEnabled && this._register(v.onDidChangeCssModules((T)=>{
            this._onDidChangeCssModules.fire(Object.fromEntries(T));
        }));
        {
            this.onDidOpenMainWindow = O.map(this.windowsMainService.onDidOpenWindow, (k)=>k.id), this.onDidTriggerWindowSystemContextMenu = O.any(O.map(this.windowsMainService.onDidTriggerSystemContextMenu, ({ window: k, x: y, y: b })=>({
                    windowId: k.id,
                    x: y,
                    y: b
                })), O.map(this.auxiliaryWindowsMainService.onDidTriggerSystemContextMenu, ({ window: k, x: y, y: b })=>({
                    windowId: k.id,
                    x: y,
                    y: b
                }))), this.onDidMaximizeWindow = O.any(O.map(this.windowsMainService.onDidMaximizeWindow, (k)=>k.id), O.map(this.auxiliaryWindowsMainService.onDidMaximizeWindow, (k)=>k.id)), this.onDidUnmaximizeWindow = O.any(O.map(this.windowsMainService.onDidUnmaximizeWindow, (k)=>k.id), O.map(this.auxiliaryWindowsMainService.onDidUnmaximizeWindow, (k)=>k.id)), this.onDidChangeWindowFullScreen = O.any(O.map(this.windowsMainService.onDidChangeFullScreen, (k)=>({
                    windowId: k.window.id,
                    fullscreen: k.fullscreen
                })), O.map(this.auxiliaryWindowsMainService.onDidChangeFullScreen, (k)=>({
                    windowId: k.window.id,
                    fullscreen: k.fullscreen
                }))), this.onDidBlurMainWindow = O.filter(O.fromNodeEventEmitter(di, "browser-window-blur", (k, y)=>y.id), (k)=>!!this.windowsMainService.getWindowById(k)), this.onDidFocusMainWindow = O.any(O.map(O.filter(O.map(this.windowsMainService.onDidChangeWindowsCount, ()=>this.windowsMainService.getLastActiveWindow()), (k)=>!!k), (k)=>k.id), O.filter(O.fromNodeEventEmitter(di, "browser-window-focus", (k, y)=>y.id), (k)=>!!this.windowsMainService.getWindowById(k))), this.onDidBlurMainOrAuxiliaryWindow = O.any(this.onDidBlurMainWindow, O.map(O.filter(O.fromNodeEventEmitter(di, "browser-window-blur", (k, y)=>this.auxiliaryWindowsMainService.getWindowByWebContents(y.webContents)), (k)=>!!k), (k)=>k.id)), this.onDidFocusMainOrAuxiliaryWindow = O.any(this.onDidFocusMainWindow, O.map(O.filter(O.fromNodeEventEmitter(di, "browser-window-focus", (k, y)=>this.auxiliaryWindowsMainService.getWindowByWebContents(y.webContents)), (k)=>!!k), (k)=>k.id)), this.onDidSuspendOS = O.fromNodeEventEmitter(vA, "suspend"), this.onDidResumeOS = O.fromNodeEventEmitter(vA, "resume");
            const T = new z7e, S = T.pipe(Y7e(()=>{
                const k = th.getAllWindows().find((y)=>!y.isDestroyed());
                return k ? new q7e((y)=>{
                    const I = DG(k, "query-session-end").pipe($7e((G)=>G.reasons.includes("shutdown") || G.reasons.includes("logoff"))).subscribe(y);
                    return I.add(DG(k, "closed").subscribe(()=>T.next())), I;
                }) : H7e;
            }), j7e(()=>{}), J7e(1), K7e());
            this.onWillShutdownOS = O.any(O.fromNodeEventEmitter(vA, "shutdown"), O.fromRxJS(S)), di.on("browser-window-created", ()=>T.next()), T.next(), this.onDidChangeColorScheme = O.map(this.themeMainService.onDidChangeColorScheme, ()=>this.themeMainService.getOSColorScheme()), this.onDidChangeDisplay = O.debounce(O.any(O.filter(O.fromNodeEventEmitter(rh, "display-metrics-changed", (k, y, b)=>b), (k)=>!(Array.isArray(k) && k.length === 1 && k[0] === "workArea")), O.fromNodeEventEmitter(rh, "display-added"), O.fromNodeEventEmitter(rh, "display-removed")), ()=>{}, 100);
        }
    }
    get windowId() {
        throw new Error("Not implemented in electron-main");
    }
    async getWindows(e, t) {
        const n = this.windowsMainService.getWindows().map((s)=>({
                id: s.id,
                workspace: s.openedWorkspace ?? ZT(s.backupPath, s.isExtensionDevelopmentHost),
                title: s.win?.getTitle() ?? "",
                filename: s.getRepresentedFilename(),
                dirty: s.isDocumentEdited(),
                parentWindowId: s.parentWindowId,
                remoteAuthority: s.remoteAuthority,
                isGlass: s.config?.glass === !0
            })), r = [];
        return t.includeAuxiliaryWindows && r.push(...this.auxiliaryWindowsMainService.getWindows().map((s)=>({
                id: s.id,
                parentId: s.parentId,
                title: s.win?.getTitle() ?? "",
                filename: s.getRepresentedFilename()
            }))), [
            ...n,
            ...r
        ];
    }
    async getWindowCount(e) {
        return this.windowsMainService.getWindowCount();
    }
    async getActiveWindowId(e) {
        const t = this.windowsMainService.getFocusedWindow() || this.windowsMainService.getLastActiveWindow();
        if (t) return t.id;
    }
    async getActiveWindowPosition() {
        const e = this.windowsMainService.getFocusedWindow() || this.windowsMainService.getLastActiveWindow();
        if (e) return e.getBounds();
    }
    async getNativeWindowHandle(e, t) {
        const n = this.windowById(t, e);
        if (n?.win) return ae.wrap(n.win.getNativeWindowHandle());
    }
    openWindow(e, t, n) {
        return Array.isArray(t) ? this.doOpenWindow(e, t, n) : this.doOpenEmptyWindow(e, t);
    }
    async doOpenWindow(e, t, n = Object.create(null)) {
        return t.length > 0 ? (await this.windowsMainService.open({
            context: 5,
            contextWindowId: e,
            urisToOpen: t,
            cli: this.environmentMainService.args,
            forceNewWindow: n.forceNewWindow,
            cursorForceNewWindow: n.cursorForceNewWindow,
            forceReuseWindow: n.forceReuseWindow,
            preferNewWindow: n.preferNewWindow,
            diffMode: n.diffMode,
            mergeMode: n.mergeMode,
            addMode: n.addMode,
            removeMode: n.removeMode,
            gotoLineMode: n.gotoLineMode,
            noRecentEntry: n.noRecentEntry,
            waitMarkerFileURI: n.waitMarkerFileURI,
            remoteAuthority: n.remoteAuthority || void 0,
            forceProfile: n.forceProfile,
            forceTempProfile: n.forceTempProfile,
            windowInWindow: n.windowInWindow ? this.potentiallyGetParentWindowId(e) : void 0,
            windowInWindowBodyClass: n.windowInWindowBodyClass,
            shadowWindowForWorkspaceId: n.shadowWindowForWorkspaceId
        })).map((r)=>({
                windowId: r.id,
                parentWindowId: r.parentWindowId
            })) : [];
    }
    async doOpenEmptyWindow(e, t) {
        return (await this.windowsMainService.openEmptyWindow({
            context: 5,
            contextWindowId: e
        }, t)).map((n)=>({
                windowId: n.id,
                parentWindowId: n.parentWindowId
            }));
    }
    async isFullScreen(e, t) {
        return this.windowById(t?.targetWindowId, e)?.isFullScreen ?? !1;
    }
    async toggleFullScreen(e, t) {
        this.windowById(t?.targetWindowId, e)?.toggleFullScreen();
    }
    async getCursorScreenPoint(e) {
        const t = rh.getCursorScreenPoint(), n = rh.getDisplayNearestPoint(t);
        return {
            point: t,
            display: n.bounds
        };
    }
    async isMaximized(e, t) {
        return this.windowById(t?.targetWindowId, e)?.win?.isMaximized() ?? !1;
    }
    async maximizeWindow(e, t) {
        this.windowById(t?.targetWindowId, e)?.win?.maximize();
    }
    async unmaximizeWindow(e, t) {
        this.windowById(t?.targetWindowId, e)?.win?.unmaximize();
    }
    async minimizeWindow(e, t) {
        this.windowById(t?.targetWindowId, e)?.win?.minimize();
    }
    async moveWindowTop(e, t) {
        this.windowById(t?.targetWindowId, e)?.win?.moveTop();
    }
    async positionWindow(e, t, n) {
        const r = this.windowById(n?.targetWindowId, e);
        if (r?.win) {
            if (r.win.isFullScreen()) {
                const s = O.toPromise(O.once(O.fromNodeEventEmitter(r.win, "leave-full-screen")));
                r.win.setFullScreen(!1), await s;
            }
            r.win.setBounds(t);
        }
    }
    async revealAboutWindow(e, t) {
        return this.auxiliaryWindowsMainService.revealAboutWindow(t);
    }
    async fitAboutWindow(e, t) {
        return this.auxiliaryWindowsMainService.fitAboutWindow(t);
    }
    async updateAboutWindowControls(e, t) {
        return this.auxiliaryWindowsMainService.updateAboutWindowControls(t);
    }
    async updateWindowControls(e, t) {
        this.windowById(t.targetWindowId ?? e)?.updateWindowControls(t);
    }
    async focusWindow(e, t) {
        const n = this.windowById(t?.targetWindowId, e);
        n?.focus({
            force: t?.force ?? !1
        }), t?.webContents && n?.webContents?.focus();
    }
    async setMinimumSize(e, t, n) {
        const r = this.codeWindowById(e);
        if (r?.win) {
            const [s, i] = r.win.getSize(), [a, o] = r.win.getMinimumSize(), [l, d] = [
                t ?? a,
                n ?? o
            ], [u, m] = [
                Math.max(s, l),
                Math.max(i, d)
            ];
            (a !== l || o !== d) && r.win.setMinimumSize(l, d), (s !== u || i !== m) && r.win.setSize(u, m);
        }
    }
    async saveWindowSplash(e, t) {
        const n = this.codeWindowById(e);
        this.themeMainService.saveWindowSplash(e, n?.openedWorkspace, t);
    }
    async saveGlassSplash(e, t) {
        this.themeMainService.saveGlassSplash(e, t);
    }
    async getWindowInWindows(e) {
        const t = this.codeWindowById(e), n = this.windowsMainService.getWindows(), r = t?.parentWindowId ? n.find((a)=>a.id === t.parentWindowId) : t;
        if (!r) return [];
        const s = n.filter((a)=>a.parentWindowId === r.id), i = s.some((a)=>a.isBrowserViewVisible);
        return [
            {
                windowId: r.id,
                isRoot: !0,
                isVisible: !i,
                remoteAuthority: r.remoteAuthority,
                lastShownAtUnixMs: r.lastShownAtUnixMs
            },
            ...s.map((a)=>({
                    windowId: a.id,
                    isRoot: !1,
                    isVisible: a.isBrowserViewVisible,
                    remoteAuthority: a.remoteAuthority,
                    lastShownAtUnixMs: a.lastShownAtUnixMs
                }))
        ];
    }
    potentiallyGetParentWindowId(e) {
        const t = this.codeWindowById(e);
        return t?.parentWindowId ? t.parentWindowId : e;
    }
    async showWindowInWindow(e, t) {
        const n = this.codeWindowById(t.windowId);
        if (n === void 0) throw new Error("Window not found");
        const r = n.parentWindowId;
        if (r !== void 0 && e !== void 0 && r !== e) {
            const o = this.codeWindowById(e);
            o && n.attachToParent(o);
        }
        const i = (await this.getWindowInWindows(t.windowId)).find((o)=>o.isVisible);
        if (n.lastShownAtUnixMs = Date.now(), t.explicitBounds && n.browserView && (n.windowInWindowExplicitBounds = t.explicitBounds, n.browserView.setBounds(t.explicitBounds)), n.browserView && n.id !== i?.windowId) {
            if (n.parentWindowId) {
                const o = this.codeWindowById(n.parentWindowId);
                if (o?.win && o.win.contentView.addChildView(n.browserView), t.explicitBounds) n.windowInWindowExplicitBounds = t.explicitBounds, n.browserView.setBounds(t.explicitBounds);
                else if (n.windowInWindowExplicitBounds = void 0, o?.win) {
                    const l = o.win.contentView.getBounds();
                    n.browserView.setBounds({
                        x: 0,
                        y: 0,
                        width: l.width,
                        height: l.height
                    });
                }
            }
            n.isBrowserViewVisible = !0;
        }
        if (i && i.windowId !== n.id) {
            const o = this.codeWindowById(i.windowId);
            if (o?.browserView) {
                if (o.parentWindowId) {
                    const l = this.codeWindowById(o.parentWindowId);
                    l?.win && l.win.contentView.removeChildView(o.browserView);
                }
                o.isBrowserViewVisible = !1;
            }
            if (o) {
                const l = {
                    id: pF,
                    from: "menu",
                    args: [
                        {
                            windowId: o.id
                        }
                    ]
                };
                o.sendWhenReady("vscode:runAction", Ie.None, l);
            }
        }
        t.doNotFocus || n.webContents?.focus();
        const a = {
            id: mF,
            from: "menu",
            args: [
                {
                    windowId: t.windowId,
                    forceZoomLevel: t.forceZoomLevel
                }
            ]
        };
        n.sendWhenReady("vscode:runAction", Ie.None, a);
    }
    async runActionInWindow(e, t) {
        const n = this.codeWindowById(t.windowId);
        if (!n) return;
        if (!t.waitForResult) {
            const a = {
                id: t.actionId,
                from: "menu",
                args: [
                    {
                        windowId: t.windowId,
                        ...t.args
                    }
                ]
            };
            n.sendWhenReady("vscode:runAction", Ie.None, a);
            return;
        }
        const r = `vscode:runActionResult:${vt()}`, s = new Promise((a, o)=>{
            const l = (u, m)=>{
                if (clearTimeout(d), !R5e(m)) {
                    a(void 0);
                    return;
                }
                if (!m.ok) {
                    o(new Error(m.error));
                    return;
                }
                a(m.value);
            }, d = setTimeout(()=>{
                Te.removeListener(r, l), a(void 0);
            }, 5e3);
            Te.once(r, l);
        }), i = {
            id: t.actionId,
            from: "menu",
            args: [
                {
                    windowId: t.windowId,
                    ...t.args
                }
            ],
            replyChannel: r
        };
        return n.sendWhenReady("vscode:runAction", Ie.None, i), s;
    }
    async restoreShellCommand() {
        if (ee) {
            const e = xn(this.environmentMainService.appRoot, "codeBin"), t = xn(this.environmentMainService.appRoot, "restoreCode.bat"), n = await Promise.allSettled([
                Lc(Zp)(t, {
                    shell: "cmd.exe",
                    windowsHide: !0,
                    env: {
                        ...process.env,
                        codeBinDir: e
                    }
                }),
                Xt.promises.unlink(xn(this.environmentMainService.appRoot, "bin", "code")),
                Xt.promises.unlink(xn(this.environmentMainService.appRoot, "bin", "code.cmd")),
                Xt.promises.unlink(xn(this.environmentMainService.appRoot, "bin", "code.sh")),
                Xt.promises.unlink(xn(this.environmentMainService.appRoot, "bin", "server-env-setup"))
            ]);
            let r = !1;
            for (const s of n)if (s.status === "rejected") {
                if (s.reason instanceof Error && "code" in s.reason && s.reason.code === "ENOENT") continue;
                r = !0, this.logService.error("Error removing old code command from the path", s.reason);
            }
            if (r) {
                const s = xn(this.environmentMainService.appRoot, "bin", "code") + "*";
                throw new Error(`Unable to restore the \`code\` command to the path. Please manually remove '${e}' from the PATH environment variable and delete ${s}.`);
            }
            return;
        }
        throw new Error("Unable to restore the `code` command to the path. Please open the VSCode command palette and run the 'Shell Command: Install 'code' command in PATH' command.");
    }
    async replaceShellCommand(e) {
        if (ee) {
            const s = xn(this.environmentMainService.appRoot, "codeBin");
            this.logService.info(`Replacing shell command on windows. Adding ${s} to the front of the path`);
            const i = xn(this.environmentMainService.appRoot, "replaceCode.bat");
            try {
                await Lc(Zp)(i, {
                    shell: "cmd.exe",
                    windowsHide: !0,
                    env: {
                        ...process.env,
                        codeBinDir: s
                    }
                });
            } catch (a) {
                throw this.logService.error("Error replacing the `code` command on the path", a), new Error(E(2156, null));
            }
            return;
        }
        const t = async ()=>{
            const s = xn(this.environmentMainService.appRoot, "bin", "code"), i = "/usr/local/bin/code";
            if (!await ie.exists(s)) throw new Error(E(2157, null, s));
            return {
                source: i,
                target: s
            };
        }, { source: n, target: r } = await t();
        try {
            const { symbolicLink: s } = await Zn.stat(n);
            if (s && !s.dangling) {
                const i = await iS(n);
                if (r === i) return;
            }
            await Xt.promises.unlink(n);
        } catch (s) {
            if (s.code !== "EACCES" && s.code !== "ENOENT") throw s;
        }
        try {
            await Xt.promises.symlink(r, n);
        } catch (s) {
            if (s.code !== "EACCES" && s.code !== "ENOENT" && s.code !== "EEXIST") throw s;
            const { response: i } = await this.showMessageBox(e, {
                type: "info",
                message: E(2158, null, this.productService.nameShort),
                buttons: [
                    E(2159, null),
                    E(2160, null)
                ]
            });
            if (i === 0) try {
                const a = `osascript -e "do shell script \\"mkdir -p /usr/local/bin && ln -sf '${r}' '${n}'\\" with administrator privileges"`;
                await Lc(Zp)(a);
            } catch  {
                throw new Error(E(2161, null, n));
            }
        }
    }
    async installShellCommand(e) {
        const { source: t, target: n } = await this.getShellCommandLink();
        try {
            const { symbolicLink: r } = await Zn.stat(t);
            if (r && !r.dangling) {
                const s = await iS(t);
                if (n === s) return;
            }
            await Xt.promises.unlink(t);
        } catch (r) {
            if (r.code !== "EACCES" && r.code !== "ENOENT") throw r;
        }
        try {
            await Xt.promises.symlink(n, t);
        } catch (r) {
            if (r.code !== "EACCES" && r.code !== "ENOENT" && r.code !== "EEXIST") throw r;
            const { response: s } = await this.showMessageBox(e, {
                type: "info",
                message: E(2162, null, this.productService.nameShort),
                buttons: [
                    E(2163, null),
                    E(2164, null)
                ]
            });
            if (s === 1) throw new kt;
            try {
                const i = `osascript -e "do shell script \\"mkdir -p /usr/local/bin && ln -sf '${n}' '${t}'\\" with administrator privileges"`;
                await Lc(Zp)(i);
            } catch  {
                throw new Error(E(2165, null, t));
            }
        }
    }
    async uninstallShellCommand(e) {
        const { source: t } = await this.getShellCommandLink();
        try {
            await Xt.promises.unlink(t);
        } catch (n) {
            switch(n.code){
                case "EACCES":
                    {
                        const { response: r } = await this.showMessageBox(e, {
                            type: "info",
                            message: E(2166, null, this.productService.nameShort),
                            buttons: [
                                E(2167, null),
                                E(2168, null)
                            ]
                        });
                        if (r === 1) throw new kt;
                        try {
                            const s = `osascript -e "do shell script \\"rm '${t}'\\" with administrator privileges"`;
                            await Lc(Zp)(s);
                        } catch  {
                            throw new Error(E(2169, null, t));
                        }
                        break;
                    }
                case "ENOENT":
                    break;
                default:
                    throw n;
            }
        }
    }
    async getShellCommandLink() {
        const e = xn(this.environmentMainService.appRoot, "bin", "code"), t = `/usr/local/bin/${this.productService.applicationName}`;
        if (!await ie.exists(e)) throw new Error(E(2170, null, e));
        return {
            source: t,
            target: e
        };
    }
    async showMessageBox(e, t) {
        const n = this.windowById(t?.targetWindowId, e);
        let r = n?.win ?? void 0;
        if (n && "browserView" in n && n.browserView !== void 0) {
            const s = n;
            if (s.isBrowserViewVisible || t.showOverHiddenWindowInWindow) {
                const i = this.codeWindowById(s.parentWindowId);
                i && (r = i.win ?? void 0);
            } else throw new Error("Dialogs are skipped in hidden window-in-windows");
        }
        return this.dialogMainService.showMessageBox(t, r);
    }
    async showSaveDialog(e, t) {
        const n = this.windowById(t?.targetWindowId, e);
        return this.dialogMainService.showSaveDialog(t, n?.win ?? void 0);
    }
    async showOpenDialog(e, t) {
        const n = this.windowById(t?.targetWindowId, e);
        return this.dialogMainService.showOpenDialog(t, n?.win ?? void 0);
    }
    async pickFileFolderAndOpen(e, t) {
        const n = await this.dialogMainService.pickFileFolder(t);
        n && await this.doOpenPicked(await Promise.all(n.map(async (r)=>await Zn.existsDirectory(r) ? {
                folderUri: x.file(r)
            } : {
                fileUri: x.file(r)
            })), t, e);
    }
    async pickFolderAndOpen(e, t) {
        const n = await this.dialogMainService.pickFolder(t);
        n && await this.doOpenPicked(n.map((r)=>({
                folderUri: x.file(r)
            })), t, e);
    }
    async pickFolder(e, t) {
        return await this.dialogMainService.pickFolder(t);
    }
    async pickFileAndOpen(e, t) {
        const n = await this.dialogMainService.pickFile(t);
        n && await this.doOpenPicked(n.map((r)=>({
                fileUri: x.file(r)
            })), t, e);
    }
    async pickWorkspaceAndOpen(e, t) {
        const n = await this.dialogMainService.pickWorkspace(t);
        n && await this.doOpenPicked(n.map((r)=>({
                workspaceUri: x.file(r)
            })), t, e);
    }
    async doOpenPicked(e, t, n) {
        await this.windowsMainService.open({
            context: 3,
            contextWindowId: n,
            cli: this.environmentMainService.args,
            urisToOpen: e,
            forceNewWindow: t.forceNewWindow,
            cursorForceNewWindow: t.cursorForceNewWindow
        });
    }
    async showItemInFolder(e, t) {
        TA.showItemInFolder(t);
    }
    async setRepresentedFilename(e, t, n) {
        this.windowById(n?.targetWindowId, e)?.setRepresentedFilename(t);
    }
    async setDocumentEdited(e, t, n) {
        this.windowById(n?.targetWindowId, e)?.setDocumentEdited(t);
    }
    async openExternal(e, t, n) {
        this.environmentMainService.unsetSnapExportedVariables();
        try {
            const r = n ?? this.configurationService.getValue("workbench.externalBrowser");
            return S5(t, $.http, $.https) && r ? await this.openExternalBrowser(e, t, r) : (this.doOpenShellExternal(e, t), !0);
        } finally{
            this.environmentMainService.restoreSnapExportedVariables();
        }
    }
    async openExternalBrowser(e, t, n) {
        if ((n.includes(De.sep) || n.includes(Yt.sep)) && !await ie.exists(n)) return this.logService.error(`Configured external browser path does not exist: ${n}`), this.doOpenShellExternal(e, t);
        try {
            const { default: r } = await import("open"), s = await r(t, {
                app: {
                    name: Object.hasOwn(r.apps, n) ? r.apps[n] : n
                }
            });
            return await I7e(s), ee || s.stderr?.once("data", (i)=>(this.logService.error(`Error opening external URL '${t}' using browser '${n}': ${i.toString()}`), this.doOpenShellExternal(e, t))), !0;
        } catch (r) {
            return this.logService.error(`Unable to open external URL '${t}' using browser '${n}' due to ${r}.`), this.doOpenShellExternal(e, t);
        }
    }
    async doOpenShellExternal(e, t) {
        try {
            return await TA.openExternal(t), !0;
        } catch (n) {
            return this.reportShellExternalFailure(e, t, n), !1;
        }
    }
    async reportShellExternalFailure(e, t, n) {
        let r, s;
        S5(t, $.http, $.https) ? (r = !0, s = E(2171, null)) : (r = !1, s = E(2172, null)), this.logService.error(`Unable to open external ${r ? "link" : "program"} using the default handler due to ${n}.`);
        try {
            const { response: i } = await this.showMessageBox(e, {
                type: "error",
                message: s,
                detail: n.message,
                buttons: r ? [
                    E(2173, null),
                    E(2174, null)
                ] : [
                    E(2175, null)
                ],
                showOverHiddenWindowInWindow: !0
            });
            r && i === 0 && await this.writeClipboardText(e, t);
        } catch (i) {
            this.logService.error(`Unable to offer a fallback for a failed external ${r ? "link" : "program"} open due to ${i}.`);
        }
    }
    async hasExternalProtocolHandler(e, t) {
        return di.getApplicationNameForProtocol(t).length > 0;
    }
    moveItemToTrash(e, t) {
        return TA.trashItem(t);
    }
    async isAdmin() {
        let e;
        return ee ? e = (await import("native-is-elevated")).default() : e = process.getuid?.() === 0, e;
    }
    async writeElevated(e, t, n, r) {
        const s = await import("@vscode/sudo-prompt"), i = rc(this.environmentMainService.userDataPath, "code-elevated");
        await ie.writeFile(i, JSON.stringify({
            source: t.fsPath,
            target: n.fsPath
        }));
        try {
            await new Promise((a, o)=>{
                const l = [
                    `"${this.cliPath}"`
                ];
                r?.unlock && l.push("--file-chmod"), l.push("--file-write", `"${i}"`);
                const d = {
                    name: this.productService.nameLong.replace("-", ""),
                    icns: q && this.environmentMainService.isBuilt ? L(st(this.environmentMainService.appRoot), `${this.productService.nameShort}.icns`) : void 0
                };
                this.logService.trace(`[sudo-prompt] running command: ${l.join(" ")}`), s.exec(l.join(" "), d, (u, m, f)=>{
                    m && this.logService.trace(`[sudo-prompt] received stdout: ${m}`), f && this.logService.error(`[sudo-prompt] received stderr: ${f}`), u ? o(u) : a(void 0);
                });
            });
        } finally{
            await Xt.promises.unlink(i);
        }
    }
    async isRunningUnderARM64Translation() {
        return Fe || ee ? !1 : di.runningUnderARM64Translation;
    }
    get cliPath() {
        return ee ? this.environmentMainService.isBuilt ? L(st(process.execPath), "bin", `${this.productService.applicationName}.cmd`) : L(this.environmentMainService.appRoot, "scripts", "code-cli.bat") : Fe ? this.environmentMainService.isBuilt ? L(st(process.execPath), "bin", `${this.productService.applicationName}`) : L(this.environmentMainService.appRoot, "scripts", "code-cli.sh") : this.environmentMainService.isBuilt ? L(this.environmentMainService.appRoot, "bin", "code") : L(this.environmentMainService.appRoot, "scripts", "code-cli.sh");
    }
    async getOSStatistics() {
        return {
            totalmem: G7e(),
            freemem: x7e(),
            loadavg: F7e()
        };
    }
    async getOSProperties() {
        return {
            arch: L7e(),
            platform: W7e(),
            release: B7e(),
            type: V7e(),
            cpus: U7e()
        };
    }
    async getOSVirtualMachineHint() {
        return aS.value();
    }
    async getOSColorScheme() {
        return this.themeMainService.getOSColorScheme();
    }
    async hasWSLFeatureInstalled() {
        return ee && gG();
    }
    async getWSLDistros() {
        return ee ? m7e() : [];
    }
    async hasDockerInstalled() {
        return s7e();
    }
    async getVolumeDiskSpace(e, t) {
        const n = await Xt.promises.statfs(t);
        return {
            availableBytes: n.bavail * n.bsize,
            totalBytes: n.blocks * n.bsize
        };
    }
    async getDirectorySize(e, t) {
        return this.calculateDirectorySizeRecursive(t);
    }
    async getRemoteAuthorityForWorkspaceConfigPath(e, t) {
        const n = x.revive(t);
        return n.scheme !== $.file ? void 0 : (await this.workspacesManagementMainService.resolveLocalWorkspace(n))?.remoteAuthority;
    }
    async calculateDirectorySizeRecursive(e) {
        let t = 0;
        try {
            const n = await Xt.promises.lstat(e);
            if (n.isSymbolicLink()) return 0;
            if (!n.isDirectory()) return n.size;
            const r = await Xt.promises.readdir(e, {
                withFileTypes: !0
            });
            for (const s of r){
                const i = L(e, s.name);
                try {
                    const a = await Xt.promises.lstat(i);
                    if (a.isSymbolicLink()) continue;
                    a.isDirectory() ? t += await this.calculateDirectorySizeRecursive(i) : t += a.size;
                } catch  {}
            }
        } catch  {}
        return t;
    }
    async getScreenshot(e, t) {
        const n = this.windowById(t?.targetWindowId, e);
        if (!n?.win) return;
        let r = await MG(n.win.webContents);
        const { width: s, height: i } = r.getSize(), a = r.toBitmap(), o = this.themeMainService.getBackgroundColor({
            isGlass: this.themeMainService.isWindowGlassMode(n.win)
        });
        return a.length === s * i * 4 && R7e(a, o) && (r = fA.createFromBitmap(a, {
            width: s,
            height: i
        })), ae.wrap(r.toJPEG(95));
    }
    async getApplicationIcon(e) {
        const t = this.resolveApplicationIconPath();
        if (!(!t || !Xt.existsSync(t))) {
            try {
                const n = fA.createFromPath(t);
                if (!n.isEmpty()) return ae.wrap(n.toPNG());
            } catch (n) {
                this.logService.trace("[NativeHost] getApplicationIcon createFromPath failed", n);
            }
            if (q && /\.icns$/i.test(t)) return this.readIcnsAsPngViaSips(t);
        }
    }
    resolveApplicationIconPath() {
        const e = di.isPackaged ? L(di.getAppPath(), "resources") : L(this.environmentMainService.appRoot, "resources");
        if (Fe) return L(e, "linux/code.png");
        if (ee) return L(e, "win32/code_150x150.png");
        if (q) return di.isPackaged ? L(st(di.getAppPath()), `${this.productService.nameShort}.icns`) : L(e, "darwin/code.icns");
    }
    async readIcnsAsPngViaSips(e) {
        const t = await Xt.promises.mkdtemp(L(kA(), "cursor-app-icon-")), n = L(t, "icon.png");
        try {
            await Lc(eh)("sips", [
                "-s",
                "format",
                "png",
                e,
                "--out",
                n
            ], {
                timeout: 3e4,
                windowsHide: !0
            });
            const r = await Xt.promises.readFile(n);
            return r.length > 0 ? ae.wrap(r) : void 0;
        } catch (r) {
            this.logService.trace("[NativeHost] getApplicationIcon sips failed", r);
            return;
        } finally{
            await Xt.promises.rm(t, {
                recursive: !0,
                force: !0
            }).catch(()=>{});
        }
    }
    async captureWebviewScreenshot(e, t, n, r) {
        if (typeof t != "number") return;
        const s = NG.fromId(t);
        if (!s) return;
        const i = await MG(s, n), a = r === "jpeg" ? i.toJPEG(80) : i.toPNG();
        return ae.wrap(a);
    }
    async getProcessId(e) {
        return this.windowById(void 0, e)?.win?.webContents.getOSProcessId();
    }
    async killProcess(e, t, n) {
        process.kill(t, n);
    }
    async readClipboardText(e, t) {
        return ka.readText(t);
    }
    async readImage() {
        return ka.readImage().toPNG();
    }
    async writeClipboardImage(e, t) {
        const n = fA.createFromBuffer(Buffer.from(t));
        ka.writeImage(n);
    }
    async cleanupOrphanedHeicFiles() {
        if (!this.heicCleanupDone) {
            this.heicCleanupDone = !0;
            try {
                const e = await Xt.promises.readdir(this.heicConversionFolderPath);
                for (const t of e)try {
                    await Xt.promises.unlink(L(this.heicConversionFolderPath, t)), this.logService.trace("[heic] Cleaned up orphaned file");
                } catch (n) {
                    this.logService.trace("[heic] Failed to cleanup orphaned file", n);
                }
            } catch  {}
        }
    }
    async convertHeicToPng(e, t) {
        if (!q) throw new Error("HEIC/HEIF conversion is only supported on macOS.");
        await this.cleanupOrphanedHeicFiles(), await Xt.promises.mkdir(this.heicConversionFolderPath, {
            recursive: !0
        });
        const n = `${rc(this.heicConversionFolderPath, "input")}.heic`, r = `${rc(this.heicConversionFolderPath, "output")}.png`;
        try {
            await ie.writeFile(n, Buffer.from(t.buffer)), await Lc(eh)("sips", [
                "-s",
                "format",
                "png",
                n,
                "--out",
                r
            ], {
                timeout: 3e4,
                windowsHide: !0
            });
            const s = await Xt.promises.readFile(r);
            return ae.wrap(s);
        } catch (s) {
            throw this.logService.error("[heic] Failed converting image to PNG", s), s;
        } finally{
            try {
                await Xt.promises.unlink(n);
            } catch  {
                this.logService.trace("[heic] Failed to cleanup input file");
            }
            try {
                await Xt.promises.unlink(r);
            } catch  {
                this.logService.trace("[heic] Failed to cleanup output file");
            }
        }
    }
    async fetchRemoteImage(e, t) {
        let n;
        try {
            n = new URL(t);
        } catch  {
            return;
        }
        if (!(n.protocol !== "http:" && n.protocol !== "https:")) try {
            const r = await _A.fetch(n.toString(), {
                credentials: "omit",
                signal: AbortSignal.timeout($t.REMOTE_IMAGE_TIMEOUT_MS)
            });
            if (!r.ok || !r.headers.get("content-type")?.toLowerCase().startsWith("image/") || Number(r.headers.get("content-length")) > $t.MAX_REMOTE_IMAGE_BYTES) return;
            const a = new Uint8Array(await r.arrayBuffer());
            return a.byteLength > $t.MAX_REMOTE_IMAGE_BYTES ? void 0 : ae.wrap(a);
        } catch (r) {
            const s = r instanceof Error ? r.name : "unknown";
            this.logService.error(`[image] Failed fetching remote image (${s})`);
            return;
        }
    }
    async captureLocalListeningPorts(e) {
        try {
            if (Fe) {
                const [t, n] = await Promise.all([
                    Xt.promises.readFile("/proc/net/tcp", "utf8"),
                    Xt.promises.readFile("/proc/net/tcp6", "utf8")
                ]);
                return {
                    status: "complete",
                    ports: EG(t, n)
                };
            }
            if (q) return await this.captureListeningPortsWithCommand("/usr/sbin/lsof", [
                "-nP",
                "-iTCP",
                "-sTCP:LISTEN",
                "-F0n"
            ], y7e, !0);
            if (ee) {
                const [t, n] = await Promise.all([
                    this.captureListeningPortsWithCommand("netstat.exe", [
                        "-ano"
                    ], w7e, !1),
                    this.captureRunningWslListeningPorts()
                ]);
                return t.status === "unavailable" && n.length === 0 ? {
                    status: "unavailable"
                } : {
                    status: "complete",
                    ports: bG(t.status === "complete" ? t.ports : [], n)
                };
            }
        } catch (t) {
            this.logService.trace(`NativeHostMainService: local listener snapshot unavailable (${t instanceof Error ? t.name : "unknown"})`);
        }
        return {
            status: "unavailable"
        };
    }
    captureListeningPortsWithCommand(e, t, n, r) {
        return M7e(eh, e, t, n, r, $t.LISTENING_PORTS_SNAPSHOT_TIMEOUT_MS);
    }
    captureRunningWslListeningPorts() {
        return new Promise((e)=>{
            eh("wsl.exe", [
                "--list",
                "--running",
                "--quiet"
            ], {
                encoding: "utf16le",
                maxBuffer: 64 * 1024,
                timeout: $t.LISTENING_PORTS_SNAPSHOT_TIMEOUT_MS,
                windowsHide: !0
            }, (t, n)=>{
                if (t || typeof n != "string") {
                    e([]);
                    return;
                }
                const r = mG(n).slice(0, $t.MAX_WSL_DISTROS_FOR_PORT_SNAPSHOT);
                if (r.length === 0) {
                    e([]);
                    return;
                }
                Promise.all(r.map((s)=>this.captureWslDistroListeningPorts(s))).then((s)=>e(bG(...s))).catch(()=>e([]));
            });
        });
    }
    captureWslDistroListeningPorts(e) {
        return new Promise((t)=>{
            eh("wsl.exe", [
                "-d",
                e,
                "-e",
                "sh",
                "-c",
                "cat /proc/net/tcp /proc/net/tcp6"
            ], {
                encoding: "utf8",
                maxBuffer: 1024 * 1024,
                timeout: $t.LISTENING_PORTS_SNAPSHOT_TIMEOUT_MS,
                windowsHide: !0
            }, (n, r)=>{
                if (n || typeof r != "string" || r.trim() === "") {
                    t([]);
                    return;
                }
                t(EG(r));
            });
        });
    }
    async probeLocalServer(e, t) {
        let n;
        try {
            n = new URL(t);
        } catch  {
            return {
                reachable: !1
            };
        }
        if (n.protocol !== "http:" && n.protocol !== "https:" || !yG(x.parse(n.origin))) return {
            reachable: !1
        };
        const [r, s] = await Promise.all([
            this.fetchLocalRootFacts(n.origin),
            this.isCdpDiscoveryEndpoint(n.origin)
        ]);
        return r ? {
            reachable: !0,
            ...r,
            isCdpDiscoveryEndpoint: s
        } : {
            reachable: !1
        };
    }
    fetchLocalRootFacts(e) {
        return new Promise((t)=>{
            let n;
            try {
                n = _A.request({
                    method: "GET",
                    url: e + "/",
                    redirect: "manual",
                    cache: "no-store",
                    useSessionCookies: !1
                });
            } catch  {
                t(void 0);
                return;
            }
            let r = !1;
            const s = setTimeout(()=>{
                n.abort(), i(void 0);
            }, $t.LOCAL_SERVER_PROBE_TIMEOUT_MS), i = (o)=>{
                r || (r = !0, clearTimeout(s), t(o));
            };
            let a = 0;
            n.on("redirect", (o, l, d)=>{
                let u;
                try {
                    u = new URL(d);
                } catch  {}
                if (!u || ++a > $t.LOCAL_SERVER_PROBE_MAX_REDIRECTS || !yG(x.parse(u.origin))) {
                    n.abort(), i({
                        statusCode: o,
                        mediaType: void 0,
                        looksLikeHtmlDocument: !1
                    });
                    return;
                }
                n.followRedirect();
            }), n.on("response", (o)=>{
                const l = o.statusCode, d = o.headers["content-type"], u = RG(Array.isArray(d) ? d[0] : d), m = [];
                let f = 0;
                const v = ()=>i({
                        statusCode: l,
                        mediaType: u,
                        looksLikeHtmlDocument: E7e(Buffer.concat(m).subarray(0, $t.LOCAL_SERVER_PROBE_SNIFF_BYTES))
                    });
                o.on("data", (T)=>{
                    m.push(T), f += T.byteLength, f >= $t.LOCAL_SERVER_PROBE_SNIFF_BYTES && (n.abort(), v());
                }), o.on("end", v), o.on("error", v);
            }), n.on("error", ()=>i(void 0)), n.end();
        });
    }
    async isCdpDiscoveryEndpoint(e) {
        try {
            const t = await _A.fetch(`${e}/json/version`, {
                credentials: "omit",
                cache: "no-store",
                redirect: "manual",
                signal: AbortSignal.timeout($t.CDP_DISCOVERY_PROBE_TIMEOUT_MS)
            });
            if (!t.ok || RG(t.headers.get("content-type")) !== "application/json" || Number(t.headers.get("content-length")) > $t.CDP_DISCOVERY_MAX_BYTES) return !1;
            const r = Buffer.from(await t.arrayBuffer());
            if (r.byteLength > $t.CDP_DISCOVERY_MAX_BYTES) return !1;
            const s = JSON.parse(r.toString("utf8"));
            return typeof s?.webSocketDebuggerUrl == "string" || typeof s?.Browser == "string";
        } catch  {
            return !1;
        }
    }
    async writeClipboardText(e, t, n) {
        return ka.writeText(t, n);
    }
    async readClipboardFindText(e) {
        return ka.readFindText();
    }
    async writeClipboardFindText(e, t) {
        return ka.writeFindText(t);
    }
    async writeClipboardBuffer(e, t, n, r) {
        return ka.writeBuffer(t, Buffer.from(n.buffer), r);
    }
    async readClipboardBuffer(e, t) {
        return ae.wrap(ka.readBuffer(t));
    }
    async hasClipboard(e, t, n) {
        return ka.has(t, n);
    }
    async newWindowTab() {
        await this.windowsMainService.open({
            context: 5,
            cli: this.environmentMainService.args,
            forceNewTabbedWindow: !0,
            forceEmpty: !0,
            remoteAuthority: this.environmentMainService.args.remote || void 0
        });
    }
    async showPreviousWindowTab() {
        nh.sendActionToFirstResponder("selectPreviousTab:");
    }
    async showNextWindowTab() {
        nh.sendActionToFirstResponder("selectNextTab:");
    }
    async moveWindowTabToNewWindow() {
        nh.sendActionToFirstResponder("moveTabToNewWindow:");
    }
    async mergeAllWindowTabs() {
        nh.sendActionToFirstResponder("mergeAllWindows:");
    }
    async toggleWindowTabsBar() {
        nh.sendActionToFirstResponder("toggleTabBar:");
    }
    async updateTouchBar(e, t) {
        this.codeWindowById(e)?.updateTouchBar(t);
    }
    async notifyReady(e) {
        this.codeWindowById(e)?.setReady();
    }
    async relaunch(e, t) {
        return this.lifecycleMainService.relaunch(t);
    }
    async reload(e, t) {
        const n = this.codeWindowById(e);
        if (n) {
            if (rr(n.openedWorkspace)) {
                const r = n.openedWorkspace.configPath;
                if (r.scheme === $.file && (await this.workspacesManagementMainService.resolveLocalWorkspace(r))?.transient) {
                    await this.openWindow(n.id, {
                        forceReuseWindow: !0
                    });
                    return;
                }
            }
            return this.lifecycleMainService.reload(n, t?.disableExtensions !== void 0 || t?.hmr !== void 0 ? {
                _: [],
                "disable-extensions": t.disableExtensions,
                hmr: t.hmr
            } : void 0);
        }
    }
    async destroyWindowNoFallback(e, t) {
        return this.codeWindowById(t?.targetWindowId)?.win?.destroy();
    }
    async closeWindowNoFallback(e, t) {
        return this.codeWindowById(t?.targetWindowId)?.close();
    }
    async closeWindow(e, t) {
        return this.windowById(t?.targetWindowId, e)?.win?.close();
    }
    async quit(e) {
        const t = this.windowsMainService.getLastActiveWindow();
        t?.isExtensionDevelopmentHost && this.windowsMainService.getWindowCount() > 1 && t.win ? t.win.close() : this.lifecycleMainService.quit();
    }
    async exit(e, t) {
        await this.lifecycleMainService.kill(t);
    }
    async openGlassWindow(e, t) {
        const { classic: n, ...r } = this.environmentMainService.args;
        await this.windowsMainService.open({
            context: 5,
            cli: {
                ...r,
                glass: !0,
                "new-window": !0
            },
            forceNewWindow: !0,
            forceEmpty: !0,
            allowAdditionalGlassWindow: t?.forceNewWindow === !0,
            glassLaunchIntent: t?.glassLaunchIntent
        });
    }
    async cursorFocusOrOpenEditorWindow(e) {
        const t = this.windowsMainService.getWindows().find((i)=>i.config?.glass !== !0);
        if (t) return t.focus({
            force: !0
        }), !0;
        const { glass: n, classic: r, ...s } = this.environmentMainService.args;
        return await this.windowsMainService.open({
            context: 5,
            contextWindowId: e,
            cli: {
                ...s,
                classic: !0,
                glass: !1
            },
            forceNewWindow: !0,
            forceEmpty: !0
        }), !0;
    }
    async openGlassWindowAsNewUser(e) {
        const t = L(kA(), `cursor-new-user-${Date.now()}`), n = process.argv.slice(1).filter((i)=>!i.startsWith("--user-data-dir") && i !== "--glass" && i !== "--classic");
        n.push(`--user-data-dir=${t}`, "--glass");
        const r = n.indexOf(".");
        r !== -1 && (n[r] = xn("."));
        const s = q ? PG("open", [
            "-n",
            "-a",
            process.execPath,
            "--args",
            ...n
        ], {
            detached: !0,
            stdio: "ignore"
        }) : PG(process.execPath, n, {
            detached: !0,
            stdio: "ignore"
        });
        s.on("error", (i)=>this.logService.error("[openGlassWindowAsNewUser] spawn failed", i)), s.unref();
    }
    async resolveProxy(e, t) {
        return this.codeWindowById(e)?.win?.webContents?.session?.resolveProxy(t);
    }
    async lookupAuthorization(e, t) {
        return this.proxyAuthService.lookupAuthorization(t);
    }
    async lookupKerberosAuthorization(e, t) {
        return this.requestService.lookupKerberosAuthorization(t);
    }
    async loadCertificates(e) {
        return this.requestService.loadCertificates();
    }
    findFreePort(e, t, n, r, s = 1) {
        return $Be(t, n, r, s);
    }
    async openDevTools(e, t) {
        this.windowById(t?.targetWindowId, e)?.webContents?.openDevTools(t?.mode ? {
            mode: t.mode,
            activate: t.activate
        } : void 0);
    }
    async toggleDevTools(e, t) {
        this.windowById(t?.targetWindowId, e)?.webContents?.toggleDevTools();
    }
    async openGPUInfoWindow(e) {
        const t = this.codeWindowById(e);
        if (t) {
            if (typeof this.gpuInfoWindowId != "number") {
                const n = this.instantiationService.invokeFunction(XT, ro(), {
                    forceNativeTitlebar: !0,
                    hideBecauseShadowWindow: !1
                });
                n.backgroundColor = void 0;
                const r = new th(n);
                r.setMenuBarVisibility(!1), r.loadURL("chrome://gpu"), r.once("ready-to-show", ()=>r.show()), r.once("close", ()=>this.gpuInfoWindowId = void 0), t.win?.on("close", ()=>{
                    this.gpuInfoWindowId && (th.fromId(this.gpuInfoWindowId)?.close(), this.gpuInfoWindowId = void 0);
                }), this.gpuInfoWindowId = r.id;
            }
            if (typeof this.gpuInfoWindowId == "number") {
                const n = th.fromId(this.gpuInfoWindowId);
                n?.isMinimized() && n?.restore(), n?.focus();
            }
        }
    }
    async openDevToolsWindow(e, t) {
        if (!this.codeWindowById(e)) return;
        const r = this.instantiationService.invokeFunction(XT, ro(), {
            forceNativeTitlebar: !0,
            hideBecauseShadowWindow: !1
        });
        r.backgroundColor = void 0;
        const s = new th(r);
        s.setMenuBarVisibility(!1), s.loadURL(t), s.once("ready-to-show", ()=>s.show());
    }
    async reloadWindowCSS(e) {
        const t = this.codeWindowById(e);
        if (!t || !t.win) throw new Error;
        if (!this.cssDevelopmentService.isEnabled) throw new Error("CSS Dev is not enabled");
        const n = await this.cssDevelopmentService.getCssModules(!0);
        return t.config && (t.config.cssModules = n), Object.fromEntries(n);
    }
    async profileRenderer(e, t, n) {
        const r = this.codeWindowById(e);
        if (!r || !r.win) throw new Error;
        return await new uS(r.win, t, this.logService).inspect(n);
    }
    async windowsGetStringRegKey(e, t, n, r) {
        if (!ee) return;
        const s = await import("@vscode/windows-registry");
        try {
            return s.GetStringRegKey(t, n, r);
        } catch  {
            return;
        }
    }
    windowById(e, t) {
        return this.codeWindowById(e) ?? this.auxiliaryWindowById(e) ?? this.codeWindowById(t);
    }
    codeWindowById(e) {
        if (typeof e == "number") return this.windowsMainService.getWindowById(e);
    }
    auxiliaryWindowById(e) {
        if (typeof e != "number") return;
        const t = NG.fromId(e);
        if (t) return this.auxiliaryWindowsMainService.getWindowByWebContents(t);
    }
}, $t.MAX_REMOTE_IMAGE_BYTES = 32 * 1024 * 1024, $t.REMOTE_IMAGE_TIMEOUT_MS = 3e4, $t.LISTENING_PORTS_SNAPSHOT_TIMEOUT_MS = 1e3, $t.MAX_WSL_DISTROS_FOR_PORT_SNAPSHOT = 3, $t.LOCAL_SERVER_PROBE_TIMEOUT_MS = 1500, $t.LOCAL_SERVER_PROBE_MAX_REDIRECTS = 3, $t.LOCAL_SERVER_PROBE_SNIFF_BYTES = 1024, $t.CDP_DISCOVERY_PROBE_TIMEOUT_MS = 500, $t.CDP_DISCOVERY_MAX_BYTES = 16 * 1024, B([
    Ue
], $t.prototype, "cliPath", null), $t = B([
    w(0, ct),
    w(1, Dc),
    w(2, ci),
    w(3, ht),
    w(4, qe),
    w(5, Z),
    w(6, et),
    w(7, no),
    w(8, lo),
    w(9, ot),
    w(10, li),
    w(11, zk),
    w(12, ni),
    w(13, Oc)
], $t);

}
