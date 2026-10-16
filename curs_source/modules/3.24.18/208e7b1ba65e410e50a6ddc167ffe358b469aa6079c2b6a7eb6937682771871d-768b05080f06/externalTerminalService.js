import { E } from "./configurationRegistry.js";
import { sc } from "./decorators.js";
import { gh, uVe } from "./externalTerminal_2.js";
import { B, Ue } from "./ipc.js";
import { $e, Jt } from "./network.js";
import { Ne } from "./nls.js";
import { Ce, Dm, L, Om, _t, st } from "./path.js";
import { gn, ie } from "./pfs.js";
import { Fe, ee, oe } from "./platform.js";
import { Ln } from "./platform_2.js";
import { Ei, Is } from "./process.js";
import { nS } from "./processes.js";
import { ah } from "./processes_2.js";
import { h } from "./tslib.es6.js";
import * as Bd from "child_process";
import { promises as eV } from "fs";
function i7(e, t) {
    const n = t.toLowerCase(), r = Object.keys(e).find((s)=>s.toLowerCase() === n);
    return r ? e[r] : e[t];
}
function ZWe(e, ...t) {
    const n = t.reduce((i, a)=>(i[a] = !0, i), {}), r = [
        /^ELECTRON_.+$/,
        /^VSCODE_(?!(PORTABLE|SHELL_LOGIN|ENV_REPLACE|ENV_APPEND|ENV_PREPEND)).+$/,
        /^SNAP(|_.*)$/,
        /^GDK_PIXBUF_.+$/
    ];
    Object.keys(e).filter((i)=>!n[i]).forEach((i)=>{
        for(let a = 0; a < r.length; a++)if (i.search(r[a]) !== -1) {
            delete e[i];
            break;
        }
    });
}
function tV(e = Is) {
    return e.comspec || "cmd.exe";
}
async function EGe(e) {
    if (await ie.exists(e)) {
        let t;
        try {
            t = await eV.stat(e);
        } catch (n) {
            n.message.startsWith("EACCES") && (t = await eV.lstat(e));
        }
        return t ? !t.isDirectory() : !1;
    }
    return !1;
}
async function yS(e, t, n, r = Is, s = EGe) {
    if (Dm(e)) return await s(e) ? e : void 0;
    if (t === void 0 && (t = Ei()), st(e) !== ".") {
        const o = L(t, e);
        return await s(o) ? o : void 0;
    }
    const a = i7(r, "PATH");
    if (n === void 0 && Ln(a) && (n = a.split(Om)), !(n === void 0 || n.length === 0)) for (const o of n){
        let l;
        if (Dm(o) ? l = L(o, e) : l = L(t, o, e), ee) {
            const u = (i7(r, "PATHEXT") || ".COM;.EXE;.BAT;.CMD").split(";").map(async (m)=>{
                const f = l + m;
                return await s(f) ? f : void 0;
            });
            for (const m of u){
                const f = await m;
                if (f) return f;
            }
        }
        if (await s(l)) return l;
    }
}
function Gd(e) {
    const t = {
        ...e.env
    };
    return ZWe(t), t;
}
function KA(e) {
    return "errno" in e && e.errno === "ENOENT" && "path" in e && typeof e.path == "string" ? new Error(E(2022, null, e.path)) : e;
}
function mVe(e) {
    let t = "";
    for (const n of e)n.indexOf(" ") >= 0 ? t += '"' + n + '"' : t += n, t += " ";
    return t;
}
var zA, DS, OS, YA, JA, UV, XA, QA;
export { DS, EGe, Gd, JA, KA, OS, QA, UV, XA, YA, ZWe, i7, mVe, tV, yS, zA };
var __wakaru_pVe_initialized = false;
export function pVe() {
if (__wakaru_pVe_initialized) return;
__wakaru_pVe_initialized = true;
"use strict";
h(), sc(), $e(), Ce(), oe(), nS(), gn(), ah(), Ne(), uVe(), zA = E(2017, null), DS = class {
    async getDefaultTerminalForPlatforms() {
        return {
            windows: YA.getDefaultTerminalWindows(),
            linux: await QA.getDefaultTerminalLinuxReady(),
            osx: "xterm"
        };
    }
}, OS = class Wa extends DS {
    openTerminal(t, n) {
        return this.spawnTerminal(Bd, t, tV(), n);
    }
    spawnTerminal(t, n, r, s) {
        const i = n.windowsExec || Wa.getDefaultTerminalWindows();
        s && s[1] === ":" && (s = s[0].toUpperCase() + s.substr(1));
        const a = _t(i, ".exe").toLowerCase();
        if (a === "cmder") return t.spawn(i, s ? [
            s
        ] : void 0), Promise.resolve(void 0);
        const o = [
            "/c",
            "start",
            "/wait"
        ];
        return i.indexOf(" ") >= 0 && o.push(i), o.push(i), a === "wt" && o.push("-d ."), new Promise((l, d)=>{
            const u = Gd(process), m = t.spawn(r, o, {
                cwd: s,
                env: u,
                detached: !0
            });
            m.on("error", d), m.on("exit", ()=>l());
        });
    }
    async runInTerminal(t, n, r, s, i) {
        const a = "windowsExec" in i && i.windowsExec ? i.windowsExec : Wa.getDefaultTerminalWindows(), o = await Wa.getWtExePath();
        return new Promise((l, d)=>{
            const u = `"${n} - ${zA}"`, m = `"${r.join('" "')}" & pause`, f = Object.assign({}, Gd(process), s);
            Object.keys(f).filter((y)=>f[y] === null).forEach((y)=>delete f[y]);
            const v = {
                cwd: n,
                env: f,
                windowsVerbatimArguments: !0
            };
            let T, S;
            _t(a, ".exe") === "wt" ? (T = a, S = [
                "-d",
                ".",
                Wa.CMD,
                "/c",
                m
            ]) : o ? (T = o, S = [
                "-d",
                ".",
                a,
                "/c",
                m
            ]) : (T = Wa.CMD, S = [
                "/c",
                "start",
                u,
                "/wait",
                a,
                "/c",
                `"${m}"`
            ]), Bd.spawn(T, S, v).on("error", (y)=>{
                d(KA(y));
            }), l(void 0);
        });
    }
    static getDefaultTerminalWindows() {
        if (!Wa._DEFAULT_TERMINAL_WINDOWS) {
            const t = !!process.env.hasOwnProperty("PROCESSOR_ARCHITEW6432");
            Wa._DEFAULT_TERMINAL_WINDOWS = `${process.env.windir ? process.env.windir : "C:\\Windows"}\\${t ? "Sysnative" : "System32"}\\cmd.exe`;
        }
        return Wa._DEFAULT_TERMINAL_WINDOWS;
    }
    static async getWtExePath() {
        try {
            return await yS("wt");
        } catch  {
            return;
        }
    }
}, OS.CMD = "cmd.exe", B([
    Ue
], OS, "getWtExePath", null), YA = OS, JA = class gLe extends DS {
    openTerminal(t, n) {
        return this.spawnTerminal(Bd, t, n);
    }
    runInTerminal(t, n, r, s, i) {
        const a = i.osxExec || gh;
        return new Promise((o, l)=>{
            if (a === gh || a === "iTerm.app") {
                const d = a === gh ? "TerminalHelper" : "iTermHelper", m = [
                    Jt.asFileUri(`vs/workbench/contrib/externalTerminal/node/${d}.scpt`).fsPath,
                    "-t",
                    t || zA,
                    "-w",
                    n
                ];
                for (const T of r)m.push("-a"), m.push(T);
                if (s) {
                    const T = Object.assign({}, Gd(process), s);
                    for(const S in T){
                        const k = T[S];
                        k === null ? (m.push("-u"), m.push(S)) : (m.push("-e"), m.push(`${S}=${k}`));
                    }
                }
                let f = "";
                const v = Bd.spawn(gLe.OSASCRIPT, m);
                v.on("error", (T)=>{
                    l(KA(T));
                }), v.stderr.on("data", (T)=>{
                    f += T.toString();
                }), v.on("exit", (T)=>{
                    if (T === 0) o(void 0);
                    else if (f) {
                        const S = f.split(`
`, 1);
                        l(new Error(S[0]));
                    } else l(new Error(E(2018, null, d, T)));
                });
            } else l(new Error(E(2019, null, a)));
        });
    }
    spawnTerminal(t, n, r) {
        const s = n.osxExec || gh;
        return new Promise((i, a)=>{
            const o = [
                "-a",
                s
            ];
            r && o.push(r);
            const l = Gd(process), d = t.spawn("/usr/bin/open", o, {
                cwd: r,
                env: l
            });
            d.on("error", a), d.on("exit", ()=>i());
        });
    }
}, JA.OSASCRIPT = "/usr/bin/osascript", UV = JA, XA = class Vo extends DS {
    openTerminal(t, n) {
        return this.spawnTerminal(Bd, t, n);
    }
    runInTerminal(t, n, r, s, i) {
        const a = i.linuxExec ? Promise.resolve(i.linuxExec) : Vo.getDefaultTerminalLinuxReady();
        return new Promise((o, l)=>{
            const d = [];
            a.then((u)=>{
                u.indexOf("gnome-terminal") >= 0 ? d.push("-x") : d.push("-e"), d.push("bash"), d.push("-c");
                const m = `${mVe(r)}; echo; read -p "${Vo.WAIT_MESSAGE}" -n1;`;
                d.push(`''${m}''`);
                const f = Object.assign({}, Gd(process), s);
                Object.keys(f).filter((k)=>f[k] === null).forEach((k)=>delete f[k]);
                const v = {
                    cwd: n,
                    env: f
                };
                let T = "";
                const S = Bd.spawn(u, d, v);
                S.on("error", (k)=>{
                    l(KA(k));
                }), S.stderr.on("data", (k)=>{
                    T += k.toString();
                }), S.on("exit", (k)=>{
                    if (k === 0) o(void 0);
                    else if (T) {
                        const y = T.split(`
`, 1);
                        l(new Error(y[0]));
                    } else l(new Error(E(2021, null, u, k)));
                });
            });
        });
    }
    static async getDefaultTerminalLinuxReady() {
        if (!Vo._DEFAULT_TERMINAL_LINUX_READY) if (!Fe) Vo._DEFAULT_TERMINAL_LINUX_READY = Promise.resolve("xterm");
        else {
            const t = await ie.exists("/etc/debian_version");
            Vo._DEFAULT_TERMINAL_LINUX_READY = new Promise((n)=>{
                t ? n("x-terminal-emulator") : process.env.DESKTOP_SESSION === "gnome" || process.env.DESKTOP_SESSION === "gnome-classic" ? n("gnome-terminal") : process.env.DESKTOP_SESSION === "kde-plasma" ? n("konsole") : process.env.COLORTERM ? n(process.env.COLORTERM) : process.env.TERM ? n(process.env.TERM) : n("xterm");
            });
        }
        return Vo._DEFAULT_TERMINAL_LINUX_READY;
    }
    spawnTerminal(t, n, r) {
        const s = n.linuxExec ? Promise.resolve(n.linuxExec) : Vo.getDefaultTerminalLinuxReady();
        return new Promise((i, a)=>{
            s.then((o)=>{
                const l = Gd(process), d = t.spawn(o, [], {
                    cwd: r,
                    env: l
                });
                d.on("error", a), d.on("exit", ()=>i());
            });
        });
    }
}, XA.WAIT_MESSAGE = E(2020, null), QA = XA;

}
