import { E1, dr } from "./codicons.js";
import { at, ot } from "./configuration.js";
import { E, Jr } from "./configurationRegistry.js";
import { N, O, ge, se } from "./event.js";
import { tV, yS } from "./externalTerminalService.js";
import { B, Oe, Qr } from "./ipc.js";
import { J, j, ve } from "./lifecycle.js";
import { Z, rd, rn, te } from "./log.js";
import { met, v_e } from "./logIpc_2.js";
import { Ce, L, Om, _t, on, st, xn } from "./path.js";
import { Zn, gn, ie } from "./pfs.js";
import { Fe, Nr, ee, oe, os, q } from "./platform.js";
import { Ln, pr } from "./platform_2.js";
import { EA, Ld, Od, QG, XG, ZG, ih } from "./powershell.js";
import { ah } from "./processes_2.js";
import { F1, pet } from "./requestStore.js";
import { ch, oh } from "./shellEnv.js";
import { Yo, ca } from "./stopwatch.js";
import { Lu, f_e, qr } from "./terminal.js";
import { Cet } from "./terminalEnvironment.js";
import { S_e, ket } from "./terminalPlatformConfiguration.js";
import { lf } from "./themables.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
import * as Aet from "child_process";
import * as Iet from "fs";
import { userInfo as bGe } from "os";
import * as bet from "os";
import * as zG from "os";
function _Ge({ useAlternateBitness: e = !1 } = {}) {
    return e ? ih === 0 ? process.env["ProgramFiles(x86)"] || null : Od === 0 && process.env.ProgramW6432 || null : process.env.ProgramFiles || null;
}
async function SS({ useAlternateBitness: e = !1, findPreview: t = !1 } = {}) {
    const n = _Ge({
        useAlternateBitness: e
    });
    if (!n) return null;
    const r = L(n, "PowerShell");
    if (!await Zn.existsDirectory(r)) return null;
    let s = -1, i = null;
    for (const l of await ie.readdir(r)){
        let d = -1;
        if (t) {
            const m = l.indexOf("-");
            if (m < 0) continue;
            const f = l.substring(0, m);
            if (!EA.test(f) || l.substring(m + 1) !== "preview") continue;
            d = parseInt(f, 10);
        } else {
            if (!EA.test(l)) continue;
            d = parseInt(l, 10);
        }
        if (d <= s) continue;
        const u = L(r, l, "pwsh.exe");
        await Zn.existsFile(u) && (i = u, s = d);
    }
    if (!i) return null;
    const a = n.includes("x86") ? " (x86)" : "", o = t ? " Preview" : "";
    return new Ld(i, `PowerShell${o}${a}`, !0);
}
async function YG({ findPreview: e } = {}) {
    if (!process.env.LOCALAPPDATA) return null;
    const t = L(process.env.LOCALAPPDATA, "Microsoft", "WindowsApps");
    if (!await Zn.existsDirectory(t)) return null;
    const { pwshMsixDirRegex: n, pwshMsixName: r } = e ? {
        pwshMsixDirRegex: QG,
        pwshMsixName: "PowerShell Preview (Store)"
    } : {
        pwshMsixDirRegex: XG,
        pwshMsixName: "PowerShell (Store)"
    };
    for (const s of await ie.readdir(t))if (n.test(s)) {
        const i = L(t, s, "pwsh.exe");
        return new Ld(i, r);
    }
    return null;
}
function vGe() {
    const e = L(zG.homedir(), ".dotnet", "tools", "pwsh.exe");
    return new Ld(e, ".NET Core PowerShell Global Tool");
}
function TGe() {
    const e = L(zG.homedir(), "scoop", "apps"), t = L(e, "pwsh", "current", "pwsh.exe");
    return new Ld(t, "PowerShell (Scoop)");
}
function kGe() {
    const e = L(process.env.windir, ih === 1 && Od !== 1 ? "SysNative" : "System32", "WindowsPowerShell", "v1.0", "powershell.exe");
    return new Ld(e, "Windows PowerShell", !0);
}
async function* SGe() {
    let e = await SS();
    e && (yield e), e = await SS({
        useAlternateBitness: !0
    }), e && (yield e), e = await YG(), e && (yield e), e = vGe(), e && (yield e), e = await SS({
        findPreview: !0
    }), e && (yield e), e = await YG({
        findPreview: !0
    }), e && (yield e), e = await SS({
        useAlternateBitness: !0,
        findPreview: !0
    }), e && (yield e), e = await TGe(), e && (yield e), e = kGe(), e && (yield e);
}
async function* JG() {
    for await (const e of SGe())await e.exists() && (yield e);
}
async function yGe() {
    for await (const e of JG())return e;
    return null;
}
async function nV(e, t) {
    return e === Nr.Windows ? ee ? CGe() : tV(t) : RGe(e, t);
}
function RGe(e, t) {
    if (Fe && e === Nr.Macintosh || q && e === Nr.Linux) return "/bin/bash";
    if (!wS) {
        let n;
        if (ee) n = "/bin/bash";
        else {
            if (n = t.SHELL, !n) try {
                n = bGe().shell;
            } catch  {}
            n || (n = "sh"), n === "/bin/false" && (n = "/bin/bash");
        }
        wS = n;
    }
    return wS;
}
async function CGe() {
    return ES || (ES = (await yGe()).exePath), ES;
}
var wS, ES;
function het(e, t) {
    const n = [
        {
            name: null,
            description: E(2287, null)
        }
    ];
    return n.push(...e.map((r)=>({
            name: r.profileName,
            description: get(r)
        }))), t && n.push(...t.map((r)=>({
            name: r.title,
            description: fet(r)
        }))), {
        values: n.map((r)=>r.name),
        markdownDescriptions: n.map((r)=>r.description)
    };
}
function get(e) {
    let t = `$(${lf.isThemeIcon(e.icon) ? e.icon.id : e.icon ? e.icon : dr.terminal.id}) ${e.profileName}
- path: ${e.path}`;
    return e.args && (typeof e.args == "string" ? t += `
- args: "${e.args}"` : t += `
- args: [${e.args.length === 0 ? "" : `'${e.args.join("','")}'`}]`), e.overrideName !== void 0 && (t += `
- overrideName: ${e.overrideName}`), e.color && (t += `
- color: ${e.color}`), e.env && (t += `
- env: ${JSON.stringify(e.env)}`), t;
}
function fet(e) {
    return `$(${lf.isThemeIcon(e.icon) ? e.icon.id : e.icon ? e.icon : dr.terminal.id}) ${e.title}
- extensionIdentifier: ${e.extensionIdentifier}`;
}
function vet() {
    pr.as(Jr.Configuration).registerConfiguration(S_e), Tet();
}
function Tet(e, t) {
    const n = pr.as(Jr.Configuration);
    let r;
    e && (r = het(e?.profiles, t));
    const s = D2;
    D2 = {
        id: "terminal",
        order: 100,
        title: E(2283, null),
        type: "object",
        properties: {
            "terminal.integrated.defaultProfile.linux": {
                restricted: !0,
                markdownDescription: E(2284, null),
                type: [
                    "string",
                    "null"
                ],
                default: null,
                enum: e?.os === Nr.Linux ? r?.values : void 0,
                markdownEnumDescriptions: e?.os === Nr.Linux ? r?.markdownDescriptions : void 0
            },
            "terminal.integrated.defaultProfile.osx": {
                restricted: !0,
                markdownDescription: E(2285, null),
                type: [
                    "string",
                    "null"
                ],
                default: null,
                enum: e?.os === Nr.Macintosh ? r?.values : void 0,
                markdownEnumDescriptions: e?.os === Nr.Macintosh ? r?.markdownDescriptions : void 0
            },
            "terminal.integrated.defaultProfile.windows": {
                restricted: !0,
                markdownDescription: E(2286, null),
                type: [
                    "string",
                    "null"
                ],
                default: null,
                enum: e?.os === Nr.Windows ? r?.values : void 0,
                markdownEnumDescriptions: e?.os === Nr.Windows ? r?.markdownDescriptions : void 0
            }
        }
    }, n.updateConfigurations({
        add: [
            D2
        ],
        remove: s ? [
            s
        ] : []
    });
}
var D2;
function Ret() {
    const e = /(\d+)\.(\d+)\.(\d+)/g.exec(bet.release());
    let t = 0;
    return e && e.length === 4 && (t = parseInt(e[3])), t;
}
function Met(e, t, n, r, s = process.env, i, a, o, l) {
    return i = i || {
        existsFile: Zn.existsFile,
        readFile: Iet.promises.readFile
    }, ee ? Pet(n, i, s, a, r.getValue("terminal.integrated.useWslProfiles") !== !1, e && typeof e == "object" ? {
        ...e
    } : r.getValue("terminal.integrated.profiles.windows"), typeof t == "string" ? t : r.getValue("terminal.integrated.defaultProfile.windows"), l, o) : Fet(i, a, n, e && typeof e == "object" ? {
        ...e
    } : r.getValue(Fe ? "terminal.integrated.profiles.linux" : "terminal.integrated.profiles.osx"), typeof t == "string" ? t : r.getValue(Fe ? "terminal.integrated.defaultProfile.linux" : "terminal.integrated.defaultProfile.osx"), l, o, s);
}
async function Pet(e, t, n, r, s, i, a, o, l) {
    const d = process.env.hasOwnProperty("PROCESSOR_ARCHITEW6432"), u = `${process.env.windir}\\${d ? "Sysnative" : "System32"}`, m = Ret() >= 22e3;
    await Det(o);
    const f = new Map;
    if (e) {
        f.set("PowerShell", {
            source: "PowerShell",
            icon: dr.terminalPowershell,
            isAutoDetected: !0
        }), f.set("Windows PowerShell", {
            path: `${u}\\WindowsPowerShell\\v1.0\\powershell.exe`,
            icon: dr.terminalPowershell,
            isAutoDetected: !0
        }), f.set("Git Bash", {
            source: "Git Bash",
            isAutoDetected: !0
        }), f.set("Command Prompt", {
            path: `${u}\\cmd.exe`,
            icon: dr.terminalCmd,
            isAutoDetected: !0
        }), f.set("Cygwin", {
            path: [
                {
                    path: `${process.env.HOMEDRIVE}\\cygwin64\\bin\\bash.exe`,
                    isUnsafe: !0
                },
                {
                    path: `${process.env.HOMEDRIVE}\\cygwin\\bin\\bash.exe`,
                    isUnsafe: !0
                }
            ],
            args: [
                "--login"
            ],
            isAutoDetected: !0
        }), f.set("bash (MSYS2)", {
            path: [
                {
                    path: `${process.env.HOMEDRIVE}\\msys64\\usr\\bin\\bash.exe`,
                    isUnsafe: !0
                }
            ],
            args: [
                "--login",
                "-i"
            ],
            env: {
                CHERE_INVOKING: "1"
            },
            icon: dr.terminalBash,
            isAutoDetected: !0
        });
        const T = `${process.env.CMDER_ROOT || `${process.env.HOMEDRIVE}\\cmder`}\\vendor\\bin\\vscode_init.cmd`;
        f.set("Cmder", {
            path: `${u}\\cmd.exe`,
            args: [
                "/K",
                T
            ],
            requiresPath: process.env.CMDER_ROOT ? T : {
                path: T,
                isUnsafe: !0
            },
            isAutoDetected: !0
        });
    }
    b_e(i, f);
    const v = await w_e(f.entries(), a, t, n, r, l);
    if (e && s) try {
        const T = await Uet(`${u}\\${m ? "wsl" : "bash"}.exe`, a);
        for (const S of T)(!i || !(S.profileName in i)) && v.push(S);
    } catch  {
        O2 && (r?.trace("WSL is not installed, so could not detect WSL profiles"), O2 = !1);
    }
    return v;
}
async function w_e(e, t, n, r = process.env, s, i) {
    const a = [];
    for (const [o, l] of e)a.push(Net(o, l, t, n, r, s, i));
    return (await Promise.all(a)).filter((o)=>!!o);
}
async function Net(e, t, n, r, s = process.env, i, a) {
    if (t === null) return;
    let o, l, d;
    if ("source" in t && !("path" in t)) {
        const v = vf?.get(t.source);
        if (!v) return;
        o = v.paths, l = t.args || v.args, t.icon ? d = E_e(t.icon) : v.icon && (d = v.icon);
    } else o = Array.isArray(t.path) ? t.path : [
        t.path
    ], l = ee || Array.isArray(t.args) ? t.args : void 0, d = E_e(t.icon);
    let u;
    if (a) {
        const v = o.map((S)=>typeof S == "string" ? S : S.path), T = await a(v);
        u = new Array(o.length);
        for(let S = 0; S < o.length; S++)typeof o[S] == "string" ? u[S] = T[S] : u[S] = {
            path: T[S],
            isUnsafe: !0
        };
    } else u = o.slice();
    let m;
    if (t.requiresPath) {
        let v;
        if (Ln(t.requiresPath) ? v = t.requiresPath : (v = t.requiresPath.path, t.requiresPath.isUnsafe && (m = v)), !await r.existsFile(v)) return;
    }
    const f = await G1(e, n, u, r, s, l, t.env, t.overrideName, t.isAutoDetected, m);
    if (!f) {
        i?.debug("Terminal profile not validated", e, o);
        return;
    }
    return f.isAutoDetected = t.isAutoDetected, f.icon = d, f.color = t.color, f;
}
function E_e(e) {
    return typeof e == "string" ? {
        id: e
    } : e;
}
async function Det(e) {
    if (vf && !e) return;
    const [t, n] = await Promise.all([
        Oet(),
        e || Let()
    ]);
    vf = new Map, vf.set("Git Bash", {
        profileName: "Git Bash",
        paths: t,
        args: [
            "--login",
            "-i"
        ]
    }), vf.set("PowerShell", {
        profileName: "PowerShell",
        paths: n,
        icon: dr.terminalPowershell
    });
}
async function Oet() {
    const e = new Set, t = await yS("git.exe");
    if (t) {
        const s = st(t);
        e.add(xn(s, "../.."));
    }
    function n(s, i) {
        i && s.add(i);
    }
    n(e, process.env.ProgramW6432), n(e, process.env.ProgramFiles), n(e, process.env["ProgramFiles(X86)"]), n(e, `${process.env.LocalAppData}\\Program`);
    const r = [];
    for (const s of e)r.push(`${s}\\Git\\bin\\bash.exe`, `${s}\\Git\\usr\\bin\\bash.exe`, `${s}\\usr\\bin\\bash.exe`);
    return r.push(`${process.env.UserProfile}\\scoop\\apps\\git\\current\\bin\\bash.exe`), r.push(`${process.env.UserProfile}\\scoop\\apps\\git-with-openssh\\current\\bin\\bash.exe`), r;
}
async function Let() {
    const e = [];
    for await (const t of JG())e.push(t.exePath);
    return e;
}
async function Uet(e, t) {
    const n = [], r = await new Promise((a, o)=>{
        Aet.exec("wsl.exe -l -q", {
            encoding: "utf16le",
            timeout: 1e3
        }, (l, d)=>{
            if (l) return o("Problem occurred when getting wsl distros");
            a(d);
        });
    });
    if (!r) return [];
    const s = new RegExp(/[\r?\n]/), i = r.split(s).filter((a)=>a.trim().length > 0 && a !== "");
    for (const a of i){
        if (a === "" || a.startsWith("docker-desktop")) continue;
        const o = `${a} (WSL)`, l = {
            profileName: o,
            path: e,
            args: [
                "-d",
                `${a}`
            ],
            isDefault: o === t,
            icon: xet(a),
            isAutoDetected: !1
        };
        n.push(l);
    }
    return n;
}
function xet(e) {
    return e.includes("Ubuntu") ? dr.terminalUbuntu : e.includes("Debian") ? dr.terminalDebian : dr.terminalLinux;
}
async function Fet(e, t, n, r, s, i, a, o) {
    const l = new Map;
    if (n && await e.existsFile("/etc/shells")) {
        const d = (await e.readFile("/etc/shells")).toString(), u = (i || d.split(`
`)).map((f)=>{
            const v = f.indexOf("#");
            return v === -1 ? f : f.substring(0, v);
        }).filter((f)=>f.trim().length > 0), m = new Map;
        for (const f of u){
            let v = _t(f), T = m.get(v) || 0;
            T++, T > 1 && (v = `${v} (${T})`), m.set(v, T), l.set(v, {
                path: f,
                isAutoDetected: !0
            });
        }
    }
    return b_e(r, l), await w_e(l.entries(), s, e, o, t, a);
}
function b_e(e, t) {
    if (e) for (const [n, r] of Object.entries(e))r === null || typeof r != "object" || !("path" in r) && !("source" in r) ? t.delete(n) : (r.icon = r.icon || t.get(n)?.icon, t.set(n, r));
}
async function G1(e, t, n, r, s, i, a, o, l, d) {
    if (n.length === 0) return Promise.resolve(void 0);
    const u = n.shift();
    if (u === "") return G1(e, t, n, r, s, i, a, o, l);
    const m = typeof u != "string" && u.isUnsafe, f = typeof u == "string" ? u : u.path, v = {
        profileName: e,
        path: f,
        args: i,
        env: a,
        overrideName: o,
        isAutoDetected: l,
        isDefault: e === t,
        isUnsafePath: m,
        requiresUnsafePath: d
    };
    if (_t(f) === f) {
        const S = s.PATH ? s.PATH.split(Om) : void 0, k = await yS(f, void 0, S, void 0, r.existsFile);
        return k ? (v.path = k, v.isFromPath = !0, v) : G1(e, t, n, r, s, i);
    }
    return await r.existsFile(on(f)) ? v : G1(e, t, n, r, s, i, a, o, l);
}
var vf, O2, V1;
export { CGe, D2, Det, ES, E_e, Fet, G1, JG, Let, Met, Net, O2, Oet, Pet, RGe, Ret, SGe, SS, TGe, Tet, Uet, V1, YG, _Ge, b_e, fet, get, het, kGe, nV, vGe, vet, vf, wS, w_e, xet, yGe };
var __wakaru_rV_initialized = false;
export function rV() {
if (__wakaru_rV_initialized) return;
__wakaru_rV_initialized = true;
"use strict";
h(), oe(), ZG(), ah(), wS = null, ES = null;

}
var __wakaru_Wet_initialized = false;
export function Wet() {
if (__wakaru_Wet_initialized) return;
__wakaru_Wet_initialized = true;
"use strict";
h(), E1(), Ce(), oe(), ah(), Ze(), gn(), ZG(), Cet(), O2 = !0;

}
var __wakaru_Bet_initialized = false;
export function Bet() {
if (__wakaru_Bet_initialized) return;
__wakaru_Bet_initialized = true;
"use strict";
h(), se(), j(), oe(), Qr(), at(), te(), met(), ch(), pet(), f_e(), ket(), Wet(), rV(), Yo(), V1 = class extends J {
    constructor(e, t, n, r){
        super(), this._ptyHostStarter = e, this._configurationService = t, this._logService = n, this._loggerService = r, this._wasQuitRequested = !1, this._restartCount = 0, this._isResponsive = !0, this._onPtyHostExit = this._register(new N), this.onPtyHostExit = this._onPtyHostExit.event, this._onPtyHostStart = this._register(new N), this.onPtyHostStart = this._onPtyHostStart.event, this._onPtyHostUnresponsive = this._register(new N), this.onPtyHostUnresponsive = this._onPtyHostUnresponsive.event, this._onPtyHostResponsive = this._register(new N), this.onPtyHostResponsive = this._onPtyHostResponsive.event, this._onPtyHostRequestResolveVariables = this._register(new N), this.onPtyHostRequestResolveVariables = this._onPtyHostRequestResolveVariables.event, this._onProcessData = this._register(new N), this.onProcessData = this._onProcessData.event, this._onProcessReady = this._register(new N), this.onProcessReady = this._onProcessReady.event, this._onProcessReplay = this._register(new N), this.onProcessReplay = this._onProcessReplay.event, this._onProcessOrphanQuestion = this._register(new N), this.onProcessOrphanQuestion = this._onProcessOrphanQuestion.event, this._onDidRequestDetach = this._register(new N), this.onDidRequestDetach = this._onDidRequestDetach.event, this._onDidChangeProperty = this._register(new N), this.onDidChangeProperty = this._onDidChangeProperty.event, this._onProcessExit = this._register(new N), this.onProcessExit = this._onProcessExit.event, this._ptyHostStore = this._register(new ve), vet(), this._register(this._ptyHostStarter), this._register(ge(()=>this._disposePtyHost())), this._resolveVariablesRequestStore = this._register(new F1(void 0, this._logService)), this._register(this._resolveVariablesRequestStore.onCreateRequest(this._onPtyHostRequestResolveVariables.fire, this._onPtyHostRequestResolveVariables)), this._ptyHostStarter.onRequestConnection && this._register(O.once(this._ptyHostStarter.onRequestConnection)(()=>this._ensurePtyHost())), this._ptyHostStarter.onWillShutdown && this._register(this._ptyHostStarter.onWillShutdown(()=>this._wasQuitRequested = !0));
    }
    get _proxy() {
        return this._ensurePtyHost(), this.__proxy;
    }
    get _optionalProxy() {
        return this.__proxy;
    }
    _ensurePtyHost() {
        this.__connection || this._startPtyHost();
    }
    get _ignoreProcessNames() {
        return this._configurationService.getValue("terminal.integrated.ignoreProcessNames");
    }
    async _refreshIgnoreProcessNames() {
        return this._optionalProxy?.refreshIgnoreProcessNames?.(this._ignoreProcessNames);
    }
    async _resolveShellEnv() {
        if (ee) return process.env;
        try {
            return await oh(this._configurationService, this._logService, {
                _: []
            }, process.env);
        } catch (e) {
            return this._logService.error("ptyHost was unable to resolve shell environment", e), {};
        }
    }
    _startPtyHost() {
        const e = this._ptyHostStarter.start(), t = e.client, n = this._ptyHostStore;
        n.add(e.store), this._logService.getLevel() === rn.Trace && this._logService.trace("PtyHostService#_startPtyHost", new Error().stack?.replace(/^Error/, ""));
        const r = Oe.toService(t.getChannel(Lu.Heartbeat));
        n.add(r.onBeat(()=>this._handleHeartbeat())), this._handleHeartbeat(!0), n.add(e.onDidProcessExit((i)=>{
            this._onPtyHostExit.fire(i.code), !this._wasQuitRequested && !this._store.isDisposed && (this._restartCount <= 5 ? (this._logService.error(`ptyHost terminated unexpectedly with code ${i.code}`), this._restartCount++, this.restartPtyHost()) : this._logService.error(`ptyHost terminated unexpectedly with code ${i.code}, giving up`));
        }));
        const s = Oe.toService(t.getChannel(Lu.PtyHost));
        n.add(s.onProcessData((i)=>this._onProcessData.fire(i))), n.add(s.onProcessReady((i)=>this._onProcessReady.fire(i))), n.add(s.onProcessExit((i)=>this._onProcessExit.fire(i))), n.add(s.onDidChangeProperty((i)=>this._onDidChangeProperty.fire(i))), n.add(s.onProcessReplay((i)=>this._onProcessReplay.fire(i))), n.add(s.onProcessOrphanQuestion((i)=>this._onProcessOrphanQuestion.fire(i))), n.add(s.onDidRequestDetach((i)=>this._onDidRequestDetach.fire(i))), n.add(new v_e(this._loggerService, t.getChannel(Lu.Logger))), this.__connection = e, this.__proxy = s, this._onPtyHostStart.fire(), n.add(this._configurationService.onDidChangeConfiguration(async (i)=>{
            i.affectsConfiguration("terminal.integrated.ignoreProcessNames") && await this._refreshIgnoreProcessNames();
        })), this._refreshIgnoreProcessNames();
    }
    async createProcess(e, t, n, r, s, i, a, o, l, d, u) {
        const m = setTimeout(()=>this._handleUnresponsiveCreateProcess(), qr.CreateProcessTimeout), f = await this._proxy.createProcess(e, t, n, r, s, i, a, o, l, d, u);
        return clearTimeout(m), f;
    }
    updateTitle(e, t, n) {
        return this._proxy.updateTitle(e, t, n);
    }
    updateIcon(e, t, n, r) {
        return this._proxy.updateIcon(e, t, n, r);
    }
    attachToProcess(e) {
        return this._proxy.attachToProcess(e);
    }
    detachFromProcess(e, t) {
        return this._proxy.detachFromProcess(e, t);
    }
    shutdownAll() {
        return this._proxy.shutdownAll();
    }
    shutdownAllForWorkspace(e) {
        return this._proxy.shutdownAllForWorkspace(e);
    }
    listProcesses() {
        return this._proxy.listProcesses();
    }
    async getPerformanceMarks() {
        return this._optionalProxy?.getPerformanceMarks() ?? [];
    }
    async reduceConnectionGraceTime() {
        return this._optionalProxy?.reduceConnectionGraceTime();
    }
    start(e) {
        return this._proxy.start(e);
    }
    shutdown(e, t) {
        return this._proxy.shutdown(e, t);
    }
    input(e, t) {
        return this._proxy.input(e, t);
    }
    sendSignal(e, t) {
        return this._proxy.sendSignal(e, t);
    }
    processBinary(e, t) {
        return this._proxy.processBinary(e, t);
    }
    resize(e, t, n) {
        return this._proxy.resize(e, t, n);
    }
    clearBuffer(e) {
        return this._proxy.clearBuffer(e);
    }
    acknowledgeDataEvent(e, t) {
        return this._proxy.acknowledgeDataEvent(e, t);
    }
    setUnicodeVersion(e, t) {
        return this._proxy.setUnicodeVersion(e, t);
    }
    getInitialCwd(e) {
        return this._proxy.getInitialCwd(e);
    }
    getCwd(e) {
        return this._proxy.getCwd(e);
    }
    async getLatency() {
        const e = new ca, t = await this._proxy.getLatency();
        return e.stop(), [
            {
                label: "ptyhostservice<->ptyhost",
                latency: e.elapsed()
            },
            ...t
        ];
    }
    orphanQuestionReply(e) {
        return this._proxy.orphanQuestionReply(e);
    }
    installAutoReply(e, t) {
        return this._proxy.installAutoReply(e, t);
    }
    uninstallAllAutoReplies() {
        return this._proxy.uninstallAllAutoReplies();
    }
    getDefaultSystemShell(e) {
        return this._optionalProxy?.getDefaultSystemShell(e) ?? nV(e ?? os, process.env);
    }
    async getProfiles(e, t, n, r = !1) {
        const s = await this._resolveShellEnv();
        return Met(t, n, r, this._configurationService, s, void 0, this._logService, this._resolveVariables.bind(this, e));
    }
    async getEnvironment() {
        return this.__proxy ? this._proxy.getEnvironment() : {
            ...process.env
        };
    }
    getWslPath(e, t) {
        return this._proxy.getWslPath(e, t);
    }
    getRevivedPtyNewId(e, t) {
        return this._proxy.getRevivedPtyNewId(e, t);
    }
    setTerminalLayoutInfo(e) {
        return this._proxy.setTerminalLayoutInfo(e);
    }
    async getTerminalLayoutInfo(e) {
        return this._optionalProxy?.getTerminalLayoutInfo(e);
    }
    async requestDetachInstance(e, t) {
        return this._proxy.requestDetachInstance(e, t);
    }
    async acceptDetachInstanceReply(e, t) {
        return this._proxy.acceptDetachInstanceReply(e, t);
    }
    async freePortKillProcess(e) {
        if (!this._proxy.freePortKillProcess) throw new Error("freePortKillProcess does not exist on the pty proxy");
        return this._proxy.freePortKillProcess(e);
    }
    async serializeTerminalState(e) {
        return this._proxy.serializeTerminalState(e);
    }
    async reviveTerminalProcesses(e, t, n) {
        return this._proxy.reviveTerminalProcesses(e, t, n);
    }
    async refreshProperty(e, t) {
        return this._proxy.refreshProperty(e, t);
    }
    async updateProperty(e, t, n) {
        return this._proxy.updateProperty(e, t, n);
    }
    async restartPtyHost() {
        this._disposePtyHost(), this._isResponsive = !0, this._startPtyHost();
    }
    _disposePtyHost() {
        this._clearHeartbeatTimeouts(), this._optionalProxy?.shutdownAll().catch(()=>{}), this.__connection = void 0, this.__proxy = void 0, this._ptyHostStore.clear();
    }
    _handleHeartbeat(e) {
        this._clearHeartbeatTimeouts(), this._heartbeatFirstTimeout = setTimeout(()=>this._handleHeartbeatFirstTimeout(), e ? qr.ConnectingBeatInterval : qr.BeatInterval * qr.FirstWaitMultiplier), this._isResponsive || (this._isResponsive = !0, this._onPtyHostResponsive.fire());
    }
    _handleHeartbeatFirstTimeout() {
        this._logService.warn(`No ptyHost heartbeat after ${qr.BeatInterval * qr.FirstWaitMultiplier / 1e3} seconds`), this._heartbeatFirstTimeout = void 0, this._heartbeatSecondTimeout = setTimeout(()=>this._handleHeartbeatSecondTimeout(), qr.BeatInterval * qr.SecondWaitMultiplier);
    }
    _handleHeartbeatSecondTimeout() {
        this._logService.error(`No ptyHost heartbeat after ${(qr.BeatInterval * qr.FirstWaitMultiplier + qr.BeatInterval * qr.FirstWaitMultiplier) / 1e3} seconds`), this._heartbeatSecondTimeout = void 0, this._isResponsive && (this._isResponsive = !1, this._onPtyHostUnresponsive.fire());
    }
    _handleUnresponsiveCreateProcess() {
        this._clearHeartbeatTimeouts(), this._logService.error(`No ptyHost response to createProcess after ${qr.CreateProcessTimeout / 1e3} seconds`), this._isResponsive && (this._isResponsive = !1, this._onPtyHostUnresponsive.fire());
    }
    _clearHeartbeatTimeouts() {
        this._heartbeatFirstTimeout && (clearTimeout(this._heartbeatFirstTimeout), this._heartbeatFirstTimeout = void 0), this._heartbeatSecondTimeout && (clearTimeout(this._heartbeatSecondTimeout), this._heartbeatSecondTimeout = void 0);
    }
    _resolveVariables(e, t) {
        return this._resolveVariablesRequestStore.createRequest({
            workspaceId: e,
            originalText: t
        });
    }
    async acceptPtyHostResolvedVariables(e, t) {
        this._resolveVariablesRequestStore.acceptReply(e, t);
    }
}, V1 = B([
    w(1, ot),
    w(2, Z),
    w(3, rd)
], V1);

}
