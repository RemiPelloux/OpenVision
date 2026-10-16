import { Qn, le } from "./async.js";
import { qI } from "./diagnostics.js";
import { bl } from "./extensionsScannerService.js";
import { Wt, mc } from "./files.js";
import { Jp, aS } from "./id.js";
import { B } from "./ipc.js";
import { Ys } from "./json.js";
import { $, $e } from "./network.js";
import { Ce, L, _t } from "./path.js";
import { gn, ie } from "./pfs.js";
import { Fe, ee, oe } from "./platform.js";
import { Jk, ku } from "./processMainService.js";
import { Tt, et } from "./productService.js";
import { OD } from "./ps.js";
import { Yo, ca } from "./stopwatch.js";
import { Fi, ts } from "./telemetry.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { ia } from "./workspacesManagementMainService.js";
import * as Kr from "os";
import * as Uct from "fs";
async function $2e(e, t) {
    const n = `${e}::${t.join(":")}`, r = qU.get(n);
    if (r) return r;
    const s = [
        {
            tag: "grunt.js",
            filePattern: /^gruntfile\.js$/i
        },
        {
            tag: "gulp.js",
            filePattern: /^gulpfile\.js$/i
        },
        {
            tag: "tsconfig.json",
            filePattern: /^tsconfig\.json$/i
        },
        {
            tag: "package.json",
            filePattern: /^package\.json$/i
        },
        {
            tag: "jsconfig.json",
            filePattern: /^jsconfig\.json$/i
        },
        {
            tag: "tslint.json",
            filePattern: /^tslint\.json$/i
        },
        {
            tag: "eslint.json",
            filePattern: /^eslint\.json$/i
        },
        {
            tag: "tasks.json",
            filePattern: /^tasks\.json$/i
        },
        {
            tag: "launch.json",
            filePattern: /^launch\.json$/i
        },
        {
            tag: "mcp.json",
            filePattern: /^mcp\.json$/i
        },
        {
            tag: "settings.json",
            filePattern: /^settings\.json$/i
        },
        {
            tag: "webpack.config.js",
            filePattern: /^webpack\.config\.js$/i
        },
        {
            tag: "project.json",
            filePattern: /^project\.json$/i
        },
        {
            tag: "makefile",
            filePattern: /^makefile$/i
        },
        {
            tag: "sln",
            filePattern: /^.+\.sln$/i
        },
        {
            tag: "csproj",
            filePattern: /^.+\.csproj$/i
        },
        {
            tag: "cmake",
            filePattern: /^.+\.cmake$/i
        },
        {
            tag: "github-actions",
            filePattern: /^.+\.ya?ml$/i,
            relativePathPattern: /^\.github(?:\/|\\)workflows$/i
        },
        {
            tag: "devcontainer.json",
            filePattern: /^devcontainer\.json$/i
        },
        {
            tag: "dockerfile",
            filePattern: /^(dockerfile|docker\-compose\.ya?ml)$/i
        },
        {
            tag: "cursorrules",
            filePattern: /^\.cursorrules$/i
        }
    ], i = new Map, a = new Map, o = 2e4;
    function l(u, m, f, v) {
        const T = m.substring(u.length + 1);
        return Qn.withAsyncBody(async (S)=>{
            let k;
            v.readdirCount++;
            try {
                k = await ie.readdir(m, {
                    withFileTypes: !0
                });
            } catch  {
                S();
                return;
            }
            if (v.count >= o) {
                v.count += k.length, v.maxReached = !0, S();
                return;
            }
            let y = k.length;
            if (y === 0) {
                S();
                return;
            }
            let b = k;
            v.count + k.length > o && (v.maxReached = !0, y = o - v.count, b = k.slice(0, y)), v.count += k.length;
            for (const I of b)if (I.isDirectory()) {
                if (f.includes(I.name) || await l(u, L(m, I.name), f, v), --y === 0) {
                    S();
                    return;
                }
            } else {
                const G = I.name.lastIndexOf(".");
                if (G >= 0) {
                    const U = I.name.substring(G + 1);
                    U && i.set(U, (i.get(U) ?? 0) + 1);
                }
                for (const U of s)U.relativePathPattern?.test(T) !== !1 && U.filePattern.test(I.name) && a.set(U.tag, (a.get(U.tag) ?? 0) + 1);
                if (--y === 0) {
                    S();
                    return;
                }
            }
        });
    }
    const d = Qn.withAsyncBody(async (u)=>{
        const m = {
            count: 0,
            maxReached: !1,
            readdirCount: 0
        }, f = new ca(!0);
        await l(e, e, t, m);
        const v = await Fct(e);
        u({
            configFiles: HU(a),
            fileTypes: HU(i),
            fileCount: m.count,
            maxFilesReached: m.maxReached,
            launchConfigFiles: v,
            totalScanTime: f.elapsed(),
            totalReaddirCount: m.readdirCount
        });
    });
    return qU.set(n, d), d;
}
function HU(e) {
    return Array.from(e.entries(), ([t, n])=>({
            name: t,
            count: n
        })).sort((t, n)=>n.count - t.count);
}
function xct() {
    const e = {
        os: `${Kr.type()} ${Kr.arch()} ${Kr.release()}`,
        memory: `${(Kr.totalmem() / mc.GB).toFixed(2)}GB (${(Kr.freemem() / mc.GB).toFixed(2)}GB free)`,
        vmHint: `${Math.round(aS.value() * 100)}%`
    }, t = Kr.cpus();
    return t && t.length > 0 && (e.cpus = `${t[0].model} (${t.length} x ${t[0].speed})`), e;
}
async function Fct(e) {
    try {
        const t = new Map, n = L(e, ".vscode", "launch.json"), r = await Uct.promises.readFile(n), s = [], i = ia(r.toString(), s);
        if (s.length) return console.log(`Unable to parse ${n}`), [];
        if (bl(i) === "object" && i.configurations) for (const a of i.configurations){
            const o = a.type;
            o && (t.has(o) ? t.set(o, t.get(o) + 1) : t.set(o, 1));
        }
        return HU(t);
    } catch  {
        return [];
    }
}
var qU, ub;
export { $2e, Fct, HU, qU, ub, xct };
var __wakaru_Wct_initialized = false;
export function Wct() {
if (__wakaru_Wct_initialized) return;
__wakaru_Wct_initialized = true;
"use strict";
h(), le(), Ys(), $e(), Ce(), oe(), Yo(), ye(), Jp(), gn(), OD(), qI(), Wt(), Tt(), ts(), qU = new Map, ub = class {
    constructor(e, t){
        this.productService = t;
    }
    formatMachineInfo(e) {
        const t = [];
        return t.push(`OS Version:       ${e.os}`), t.push(`CPUs:             ${e.cpus}`), t.push(`Memory (System):  ${e.memory}`), t.push(`VM:               ${e.vmHint}`), t.join(`
`);
    }
    formatEnvironment(e) {
        const t = [];
        t.push(`Version:          ${this.productService.nameShort} ${this.productService.version} (${this.productService.commit || "Commit unknown"}, ${this.productService.date || "Date unknown"})`), t.push(`OS Version:       ${Kr.type()} ${Kr.arch()} ${Kr.release()}`);
        const n = Kr.cpus();
        return n && n.length > 0 && t.push(`CPUs:             ${n[0].model} (${n.length} x ${n[0].speed})`), t.push(`Memory (System):  ${(Kr.totalmem() / mc.GB).toFixed(2)}GB (${(Kr.freemem() / mc.GB).toFixed(2)}GB free)`), ee || t.push(`Load (avg):       ${Kr.loadavg().map((r)=>Math.round(r)).join(", ")}`), t.push(`VM:               ${Math.round(aS.value() * 100)}%`), t.push(`Screen Reader:    ${e.screenReader ? "yes" : "no"}`), t.push(`Process Argv:     ${e.mainArguments.join(" ")}`), t.push(`GPU Status:       ${this.expandGPUFeatures(e.gpuFeatureStatus)}`), t.join(`
`);
    }
    async getPerformanceInfo(e, t) {
        return Promise.all([
            ku(e.mainPID),
            this.formatWorkspaceMetadata(e)
        ]).then(async (n)=>{
            let [r, s] = n, i = this.formatProcessList(e, r);
            return t.forEach((a)=>{
                if (Jk(a)) i += `
${a.errorMessage}`, s += `
${a.errorMessage}`;
                else if (i += `

Remote: ${a.hostName}`, a.processes && (i += `
${this.formatProcessList(e, a.processes)}`), a.workspaceMetadata) {
                    s += `
|  Remote: ${a.hostName}`;
                    for (const o of Object.keys(a.workspaceMetadata)){
                        const l = a.workspaceMetadata[o];
                        let d = `${l.fileCount} files`;
                        l.maxFilesReached && (d = `more than ${d}`), s += `|    Folder (${o}): ${d}`, s += this.formatWorkspaceStats(l);
                    }
                }
            }), {
                processInfo: i,
                workspaceInfo: s
            };
        });
    }
    async getSystemInfo(e, t) {
        const { memory: n, vmHint: r, os: s, cpus: i } = xct(), a = {
            os: s,
            memory: n,
            cpus: i,
            vmHint: r,
            processArgs: `${e.mainArguments.join(" ")}`,
            gpuStatus: e.gpuFeatureStatus,
            screenReader: `${e.screenReader ? "yes" : "no"}`,
            remoteData: t
        };
        return ee || (a.load = `${Kr.loadavg().map((o)=>Math.round(o)).join(", ")}`), Fe && (a.linuxEnv = {
            desktopSession: process.env.DESKTOP_SESSION,
            xdgSessionDesktop: process.env.XDG_SESSION_DESKTOP,
            xdgCurrentDesktop: process.env.XDG_CURRENT_DESKTOP,
            xdgSessionType: process.env.XDG_SESSION_TYPE
        }), Promise.resolve(a);
    }
    async getDiagnostics(e, t) {
        const n = [];
        return ku(e.mainPID).then(async (r)=>(n.push(""), n.push(this.formatEnvironment(e)), n.push(""), n.push(this.formatProcessList(e, r)), e.windows.some((s)=>s.folderURIs && s.folderURIs.length > 0 && !s.remoteAuthority) && (n.push(""), n.push("Workspace Stats: "), n.push(await this.formatWorkspaceMetadata(e))), t.forEach((s)=>{
                if (Jk(s)) n.push(`
${s.errorMessage}`);
                else if (n.push(`

`), n.push(`Remote:           ${s.hostName}`), n.push(this.formatMachineInfo(s.machineInfo)), s.processes && n.push(this.formatProcessList(e, s.processes)), s.workspaceMetadata) for (const i of Object.keys(s.workspaceMetadata)){
                    const a = s.workspaceMetadata[i];
                    let o = `${a.fileCount} files`;
                    a.maxFilesReached && (o = `more than ${o}`), n.push(`Folder (${i}): ${o}`), n.push(this.formatWorkspaceStats(a));
                }
            }), n.push(""), n.push(""), n.join(`
`)));
    }
    formatWorkspaceStats(e) {
        const t = [];
        let r = 0;
        const s = (l, d)=>{
            const u = ` ${l}(${d})`;
            r + u.length > 60 ? (t.push(i), i = "|                 ", r = i.length) : r += u.length, i += u;
        };
        let i = "|      File types:";
        const a = 10, o = e.fileTypes.length > a ? a : e.fileTypes.length;
        for(let l = 0; l < o; l++){
            const d = e.fileTypes[l];
            s(d.name, d.count);
        }
        if (t.push(i), e.configFiles.length >= 0 && (i = "|      Conf files:", r = 0, e.configFiles.forEach((l)=>{
            s(l.name, l.count);
        }), t.push(i)), e.launchConfigFiles.length > 0) {
            let l = "|      Launch Configs:";
            e.launchConfigFiles.forEach((d)=>{
                const u = d.count > 1 ? ` ${d.name}(${d.count})` : ` ${d.name}`;
                l += u;
            }), t.push(l);
        }
        return t.join(`
`);
    }
    expandGPUFeatures(e) {
        const t = Math.max(...Object.keys(e).map((n)=>n.length));
        return Object.keys(e).map((n)=>`${n}:  ${" ".repeat(t - n.length)}  ${e[n]}`).join(`
                  `);
    }
    formatWorkspaceMetadata(e) {
        const t = [], n = [];
        return e.windows.forEach((r)=>{
            r.folderURIs.length === 0 || r.remoteAuthority || (t.push(`|  Window (${r.title})`), r.folderURIs.forEach((s)=>{
                const i = x.revive(s);
                if (i.scheme === $.file) {
                    const a = i.fsPath;
                    n.push($2e(a, [
                        "node_modules",
                        ".git"
                    ]).then((o)=>{
                        let l = `${o.fileCount} files`;
                        o.maxFilesReached && (l = `more than ${l}`), t.push(`|    Folder (${_t(a)}): ${l}`), t.push(this.formatWorkspaceStats(o));
                    }).catch((o)=>{
                        t.push(`|      Error: Unable to collect workspace stats for folder ${a} (${o.toString()})`);
                    }));
                } else t.push(`|    Folder (${i.toString()}): Workspace stats not available.`);
            }));
        }), Promise.all(n).then((r)=>t.join(`
`)).catch((r)=>`Unable to collect workspace stats: ${r}`);
    }
    formatProcessList(e, t) {
        const n = new Map;
        e.windows.forEach((s)=>n.set(s.pid, `window [${s.id}] (${s.title})`)), e.pidToNames.forEach(({ pid: s, name: i })=>n.set(s, i));
        const r = [];
        return r.push("CPU %	Mem MB	   PID	Process"), t && this.formatProcessItem(e.mainPID, n, r, t, 0), r.join(`
`);
    }
    formatProcessItem(e, t, n, r, s) {
        const i = s === 0;
        let a;
        i ? a = r.pid === e ? `${this.productService.applicationName} main` : "remote agent" : t.has(r.pid) ? a = t.get(r.pid) : a = `${"  ".repeat(s)} ${r.name}`;
        const o = process.platform === "win32" ? r.mem : Kr.totalmem() * (r.mem / 100);
        n.push(`${r.load.toFixed(0).padStart(5, " ")}	${(o / mc.MB).toFixed(0).padStart(6, " ")}	${r.pid.toFixed(0).padStart(6, " ")}	${a}`), Array.isArray(r.children) && r.children.forEach((l)=>this.formatProcessItem(e, t, n, l, s + 1));
    }
    async getWorkspaceFileExtensions(e) {
        const t = new Set;
        for (const { uri: n } of e.folders){
            const r = x.revive(n);
            if (r.scheme !== $.file) continue;
            const s = r.fsPath;
            try {
                (await $2e(s, [
                    "node_modules",
                    ".git"
                ])).fileTypes.forEach((a)=>t.add(a.name));
            } catch  {}
        }
        return {
            extensions: [
                ...t
            ]
        };
    }
    async reportWorkspaceStats(e) {}
}, ub = B([
    w(0, Fi),
    w(1, et)
], ub);

}
