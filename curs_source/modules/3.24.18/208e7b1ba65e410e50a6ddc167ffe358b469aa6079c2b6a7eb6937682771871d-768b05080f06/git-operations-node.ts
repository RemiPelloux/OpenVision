import { Nve } from "./git-exec.ts";
import { Vnt } from "./index_4.ts";
import { J2, Mve } from "./process-env.ts";
import { h } from "./tslib.es6.js";
import { Ive } from "./util.ts";
import { accessSync as $nt } from "node:fs";
import { realpathSync as Hnt } from "node:fs";
import { readFile as Knt } from "node:fs/promises";
import { join as Q1 } from "node:path";
import { resolve as Q2 } from "node:path";
import * as Rve from "node:path";
import { spawn as Unt } from "node:child_process";
import { isAbsolute as X2 } from "node:path";
import { dirname as Ynt } from "node:path";
import { constants as jnt } from "node:fs";
import { statSync as qnt } from "node:fs";
import { delimiter as znt } from "node:path";
function Cve(e, t) {
    return Ive && (e = e.toLowerCase(), t = t.toLowerCase()), e === t ? !0 : (e.charAt(e.length - 1) !== Rve.sep && (e += Rve.sep), t.startsWith(e));
}
function Mnt(e) {
    const t = e === "allow-hooks" ? J2.filter(([n])=>n !== "core.hooksPath") : J2;
    return [
        ...Mve,
        ...t
    ];
}
function Pnt(e) {
    const t = e.GIT_CONFIG_COUNT;
    if (t === void 0 || t === "") return 0;
    const n = Number.parseInt(String(t), 10);
    return !Number.isFinite(n) || n < 0 ? 0 : n;
}
function Nnt(e, t) {
    const n = Pnt(e), r = {
        ...e
    }, s = new Set;
    for(let a = 0; a < n; a++){
        const o = r[`GIT_CONFIG_KEY_${a}`];
        for (const [l, d] of t)o === l && (r[`GIT_CONFIG_VALUE_${a}`] = d, s.add(l));
    }
    let i = n;
    for (const [a, o] of t)s.has(a) || (r[`GIT_CONFIG_KEY_${i}`] = a, r[`GIT_CONFIG_VALUE_${i}`] = o, i++);
    return i !== n && (r.GIT_CONFIG_COUNT = String(i)), r;
}
function Dnt(e) {
    const t = {
        ...process.env,
        ...e.spawnerEnv,
        LC_ALL: "en_US.UTF-8",
        LANG: "en_US.UTF-8",
        GIT_PAGER: "cat",
        ...e.optionsEnv
    };
    return e.command !== void 0 ? t.VSCODE_GIT_COMMAND = e.command : delete t.VSCODE_GIT_COMMAND, Nnt(t, Mnt(e.repoConfigExecution ?? "block"));
}
function Fnt(e) {
    const t = new Set([
        "-c",
        "-C",
        "--git-dir",
        "--work-tree"
    ]);
    for(let n = 0; n < e.length; n++){
        const r = e[n];
        if (t.has(r)) {
            n++;
            continue;
        }
        if (!r.startsWith("-")) return r;
    }
}
function Pve(e, t) {
    return Dnt({
        command: Fnt(e),
        optionsEnv: t
    });
}
async function Wnt(e, t, n) {
    const { env: r, encoding: s = "utf8", ...i } = n ?? {}, a = await Nve(e, t, {
        ...i,
        encoding: s,
        env: Pve(t, r)
    });
    return {
        stdout: String(a.stdout),
        stderr: String(a.stderr)
    };
}
function Bnt(e, t, n) {
    const { env: r, ...s } = n ?? {};
    return Unt(e, t, {
        ...s,
        env: Pve(t, r)
    });
}
function Z1(e) {
    const t = Q2(e);
    try {
        return Hnt.native(t);
    } catch (n) {
        return n.code === "ENOENT" ? t : null;
    }
}
function Dve(e, t) {
    return Cve(e, t) || Cve(Ynt(t), e);
}
function Z2(e, t) {
    if (!X2(e)) return !1;
    const n = Q2(t), r = Q2(e);
    if (Dve(n, r)) return !1;
    const s = Z1(t), i = Z1(e);
    return s !== null && i !== null && !Dve(s, i);
}
function Jnt(e) {
    const t = process.platform === "win32", n = [];
    if (t) for (const i of [
        process.env.ProgramW6432,
        process.env["ProgramFiles(x86)"],
        process.env.ProgramFiles,
        process.env.LocalAppData ? Q1(process.env.LocalAppData, "Programs") : void 0
    ])i && X2(i) && n.push(Q1(i, "Git", "cmd", "git.exe"));
    const r = process.env.PATH ?? process.env.Path ?? "", s = t ? "git.exe" : "git";
    for (const i of r.split(znt)){
        const a = i.trim().replace(/^"|"$/g, "");
        a && X2(a) && n.push(Q1(a, s));
    }
    for (const i of n)try {
        if (qnt(i).isFile() && Z2(i, e)) {
            $nt(i, jnt.X_OK);
            const a = Z1(i);
            if (a !== null) return a;
        }
    } catch  {}
    throw new Error("No trusted Git executable found");
}
function Xnt(e) {
    const t = e.split("\0"), n = [];
    for(let r = 0; r + 1 < t.length; r += 2){
        const s = t[r]?.trim() ?? "", i = t[r + 1] ?? "";
        s && n.push({
            hash: s,
            message: i
        });
    }
    return n;
}
function Qnt(e) {
    const t = [];
    let n = !1;
    for (const r of e.split(/\r?\n/)){
        const s = r.trim();
        if (!s || s.startsWith("#") || s.startsWith(";")) continue;
        if (/^\[submodule\s+"[^"]+"\]$/.test(s)) {
            n = !0;
            continue;
        }
        if (s.startsWith("[") && s.endsWith("]")) {
            n = !1;
            continue;
        }
        if (!n) continue;
        const i = r.match(/^\s*path\s*=\s*(.+?)\s*$/);
        if (!i) continue;
        const a = i[1]?.trim();
        a && t.push({
            relativePath: a
        });
    }
    return t;
}
var Ove, Lve;
export { Bnt, Cve, Dnt, Dve, Fnt, Jnt, Lve, Mnt, Nnt, Ove, Pnt, Pve, Qnt, Wnt, Xnt, Z1, Z2 };
var __wakaru_Znt_initialized = false;
export function Znt() {
if (__wakaru_Znt_initialized) return;
__wakaru_Znt_initialized = true;
"use strict";
h(), Vnt(), Ove = Wnt, Lve = class yLe {
    constructor(t = {}){
        this.dependencies = t, this.activeGitProcesses = 0, this.gitProcessWaiters = [];
    }
    static{
        this.MAX_CONCURRENT_GIT_PROCESSES = 8;
    }
    acquireGitProcessSlot() {
        if (this.activeGitProcesses < yLe.MAX_CONCURRENT_GIT_PROCESSES) {
            this.activeGitProcesses++;
            return;
        }
        return new Promise((t)=>{
            this.gitProcessWaiters.push(t);
        });
    }
    releaseGitProcessSlot() {
        const t = this.gitProcessWaiters.shift();
        t ? t() : this.activeGitProcesses--;
    }
    resolveGitPath(t) {
        if (this.resolvedGitPath !== void 0 && Z2(this.resolvedGitPath, t)) return this.resolvedGitPath;
        const n = (this.dependencies.resolveGitPath ?? Jnt)(t);
        if (!Z2(n, t)) throw new Error(`Refusing untrusted Git executable: ${n}`);
        const r = Z1(n);
        if (r === null) throw new Error(`Unable to resolve Git executable: ${n}`);
        return this.resolvedGitPath = r, this.resolvedGitPath;
    }
    async executeGitCommand(t, n, r = {}) {
        const s = r.trimStdout ?? !0, i = this.acquireGitProcessSlot();
        i && await i;
        try {
            const a = this.resolveGitPath(t), { stdout: o } = await (this.dependencies.execFileAsync ?? Ove)(a, n, {
                cwd: t,
                maxBuffer: 10 * 1024 * 1024
            });
            return s ? o.trim() : o;
        } catch (a) {
            const o = a;
            if (o.stdout) return s ? o.stdout.trim() : o.stdout;
            const l = `git ${n.map((d)=>JSON.stringify(d)).join(" ")}`;
            throw new Error(`Git command failed: ${l}
${o.stderr || String(a)}`);
        } finally{
            this.releaseGitProcessSlot();
        }
    }
    async getGitRoot(t) {
        try {
            return (await this.executeGitCommand(t, [
                "rev-parse",
                "--show-toplevel"
            ])).trim() || void 0;
        } catch  {
            return;
        }
    }
    async getRemotes(t) {
        try {
            return (await this.executeGitCommand(t, [
                "remote"
            ])).split(`
`).map((r)=>r.trim()).filter((r)=>r.length > 0);
        } catch  {
            return [];
        }
    }
    async getGitUser(t) {
        try {
            return (await this.executeGitCommand(t, [
                "config",
                "user.email"
            ])).trim() || void 0;
        } catch  {
            return;
        }
    }
    async getCommitsByAuthor(t, n) {
        const { author: r, limit: s, sinceMs: i, allRefs: a = !0 } = n;
        try {
            const o = [
                "log"
            ];
            return a && o.push("--all"), i !== void 0 && o.push(`--since=${new Date(i).toISOString()}`), o.push(`--author=${r}`, "--format=%H", "-n", String(s)), (await this.executeGitCommand(t, o)).split(`
`).map((d)=>d.trim()).filter((d)=>d.length > 0);
        } catch  {
            return [];
        }
    }
    async getRecentCommits(t, n, r) {
        try {
            const s = [
                "log",
                "-z",
                "--format=%H%x00%s",
                "-n",
                String(n)
            ];
            r && s.push(`--author=${r}`);
            const i = await this.executeGitCommand(t, s, {
                trimStdout: !1
            });
            return Xnt(i);
        } catch  {
            return [];
        }
    }
    async getCurrentBranch(t) {
        try {
            const r = (await this.executeGitCommand(t, [
                "rev-parse",
                "--abbrev-ref",
                "HEAD"
            ])).trim();
            return r && r !== "HEAD" ? r : void 0;
        } catch  {
            return;
        }
    }
    async getDefaultBranch(t) {
        try {
            return (await this.executeGitCommand(t, [
                "symbolic-ref",
                "refs/remotes/origin/HEAD",
                "--short"
            ])).trim().replace(/^origin\//, "") || void 0;
        } catch  {
            try {
                return await this.executeGitCommand(t, [
                    "rev-parse",
                    "--verify",
                    "refs/heads/main"
                ]), "main";
            } catch  {
                try {
                    return await this.executeGitCommand(t, [
                        "rev-parse",
                        "--verify",
                        "refs/heads/master"
                    ]), "master";
                } catch  {
                    return;
                }
            }
        }
    }
    async getUpstreamUrl(t) {
        const n = [
            "origin",
            "gerrit",
            "review",
            "upstream"
        ];
        for (const r of n)try {
            const i = (await this.executeGitCommand(t, [
                "remote",
                "get-url",
                r
            ])).trim();
            if (i) return i;
        } catch  {}
        try {
            const r = await this.getRemotes(t);
            if (r.length > 0) {
                const i = r.filter((o)=>!n.includes(o))[0] || r[0];
                return (await this.executeGitCommand(t, [
                    "remote",
                    "get-url",
                    i
                ])).trim() || void 0;
            }
        } catch  {}
    }
    async getSubmodules(t) {
        try {
            const n = await Knt(Q1(t, ".gitmodules"), "utf-8"), r = Qnt(n);
            return r.length === 0 ? void 0 : r;
        } catch  {
            return;
        }
    }
    async commitExists(t, n) {
        try {
            return await this.executeGitCommand(t, [
                "cat-file",
                "-e",
                `${n}^{commit}`
            ]), !0;
        } catch  {
            return !1;
        }
    }
    async hashObject(t, n) {
        const r = this.resolveGitPath(n), s = this.acquireGitProcessSlot();
        s && await s;
        try {
            return await this.spawnHashObject(r, t, n);
        } finally{
            this.releaseGitProcessSlot();
        }
    }
    spawnHashObject(t, n, r) {
        return new Promise((s, i)=>{
            const a = (this.dependencies.spawn ?? Bnt)(t, [
                "-c",
                "gc.auto=0",
                "hash-object",
                "-w",
                "--stdin"
            ], {
                cwd: r,
                shell: !1
            });
            let o = "", l = "";
            a.stdout.on("data", (d)=>{
                o += d.toString();
            }), a.stderr.on("data", (d)=>{
                l += d.toString();
            }), a.on("error", (d)=>{
                i(new Error(`Git hash-object failed: ${d.message}`));
            }), a.on("close", (d)=>{
                d === 0 ? s(o.trim()) : i(new Error(`Git hash-object failed (exit code ${d}): ${l}`));
            }), a.stdin.write(n), a.stdin.end();
        });
    }
    async catBlob(t, n) {
        return this.executeGitCommand(n, [
            "cat-file",
            "blob",
            t
        ], {
            trimStdout: !1
        });
    }
};

}
