import { jve } from "./ai-code-tracking.ts";
import { Ye, qe } from "./environmentMainService.js";
import { Lve } from "./git-operations-node.ts";
import { yrt } from "./index_5.ts";
import { Lrt } from "./index_6.ts";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { eE } from "./murmurhash.ts";
import { ert } from "./node.ts";
import { Ce, L, st } from "./path.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import * as Urt from "fs";
import { dirname as Uve } from "node:path";
import { normalize as Wve } from "node:path";
import { relative as art } from "node:path";
import { join as e9 } from "node:path";
import { readdir as grt } from "node:fs/promises";
import { access as hrt } from "node:fs/promises";
import { join as irt } from "node:path";
import { realpath as rrt } from "node:fs/promises";
import { basename as srt } from "node:path";
async function trt(e, t, n = {}) {
    const { limit: r = 500, sinceMs: s } = n, i = await e.getGitUser(t);
    if (!i) return;
    const a = await e.getCommitsByAuthor(t, {
        author: i,
        limit: r,
        sinceMs: s,
        allRefs: !0
    });
    return {
        user: i,
        commits: a
    };
}
function xve(e, t) {
    const n = art(e, t);
    if (n && !n.startsWith("..")) return n.replace(/\\/g, "/");
}
async function ort(e) {
    try {
        return irt(await rrt(Uve(e)), srt(e));
    } catch  {
        return;
    }
}
async function crt(e, t, n) {
    const r = t.replace(/\\/g, "/"), s = n?.replace(/\\/g, "/") ?? r;
    try {
        const i = await e.getGitRoot(Uve(t));
        if (i) {
            const a = xve(i, t);
            if (a) return a;
            const o = await ort(t), l = o ? xve(i, o) : void 0;
            if (l) return l;
        }
    } catch  {}
    return s;
}
function Fve(e) {
    const t = e.lastIndexOf("."), n = Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\"));
    return t === -1 || t < n ? "" : e.slice(t + 1);
}
function mrt(e) {
    try {
        let t = e;
        return e.includes("@") && !e.startsWith("http") && (e.startsWith("ssh://") || (t = e.replace(/^([^@]+)@([^:]+):(.*)/, "ssh://$1@$2/$3"))), new URL(t);
    } catch  {
        return null;
    }
}
function prt(e) {
    if (!e) return;
    const t = e.replace("https///", "https://").replace("http///", "http://");
    if (t.startsWith("gitlab-remote://")) try {
        const d = new URL(t).searchParams.get("project");
        if (d) return d.includes("/") ? d : void 0;
    } catch  {}
    const n = mrt(t);
    if (!n) return;
    const r = n.hostname.toLowerCase(), s = n.pathname.split("/").filter((l)=>l.length > 0);
    if (s.length > 0 && s[s.length - 1].endsWith(".git") && (s[s.length - 1] = s[s.length - 1].slice(0, -4)), r === "dev.azure.com" || r === "ssh.dev.azure.com" || r.endsWith(".visualstudio.com")) {
        const l = [
            ...s
        ];
        r === "ssh.dev.azure.com" && l.length > 0 && l[0].toLowerCase() === "v3" && l.shift();
        const d = l.filter((u)=>u.toLowerCase() !== "_git");
        return d.length >= 1 ? d.join("/") : void 0;
    }
    if (r.includes("github") || r.endsWith(".ghe.com")) return s.length >= 2 ? s.slice(0, 2).join("/") : void 0;
    if (r.includes("gitlab")) return s.length >= 1 ? s.join("/") : void 0;
    if (r.includes("bitbucket") || r.includes("stash")) return s.length >= 3 && s[0].toLowerCase() === "scm" ? s.slice(1, 3).join("/") : s.length >= 2 ? s.slice(0, 2).join("/") : void 0;
    const a = r.includes("gerrit"), o = s.length > 0 && s[0].toLowerCase() === "gerrit";
    if (a || o) {
        const l = [
            ...s
        ];
        return o && l.shift(), l.length > 0 && l[0].toLowerCase() === "a" && l.shift(), l.length >= 1 ? l.join("/") : void 0;
    }
    if (s.length >= 2) return s.slice(0, 2).join("/");
}
async function frt(e, t) {
    const n = new Set, r = [], s = (o)=>{
        n.has(o) || (n.add(o), r.push(o));
    };
    async function i(o) {
        try {
            return await hrt(e9(o, ".git")), !0;
        } catch  {
            return !1;
        }
    }
    async function a(o, l) {
        const d = await e.getGitRoot(o);
        if (!d) return !1;
        if (s(Wve(d)), !l) return !0;
        const u = await e.getSubmodules(d);
        if (!u) return !0;
        for (const m of u)s(Wve(e9(d, m.relativePath)));
        return !0;
    }
    for (const o of t)try {
        if (!await a(o, !0)) {
            const u = (await grt(o, {
                withFileTypes: !0
            })).filter((m)=>m.isDirectory() || m.isSymbolicLink()).map((m)=>m.name).sort((m, f)=>m.localeCompare(f));
            for (const m of u){
                const f = e9(o, m);
                await i(f) && await a(f, !1).catch(()=>{});
            }
        }
    } catch  {}
    return r;
}
async function _rt(e, t) {
    let n, r, s;
    try {
        [n, s] = await Promise.all([
            e.getCurrentBranch(t).catch(()=>{}),
            e.getDefaultBranch(t).catch(()=>{})
        ]);
        const a = await e.getUpstreamUrl(t);
        r = prt(a);
    } catch  {}
    return {
        branchName: n,
        repoName: r,
        primaryBranch: s,
        isPrimaryBranch: typeof n == "string" && typeof s == "string" && n && s ? n === s : void 0
    };
}
function r9(e, t) {
    let n = e;
    const r = t.startsWith(".") ? t.toLowerCase() : `.${t.toLowerCase()}`;
    return n = n.trim(), (r === ".js" || r === ".ts" || r === ".jsx" || r === ".tsx") && (n = n.replace(/\(\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\)\s*=>/g, "$1=>"), n = n.replace(/\$\{\s*([^}]+)\s*\}/g, "${$1}")), r === ".py" && (n = n.replace(/'''/g, '"'), n = n.replace(/"""/g, '"'), n = n.replace(/f"/g, '"'), n = n.replace(/f'/g, '"'), n = n.replace(/([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(?![=])/g, "$1=")), r === ".rb" && (n = n.replace(/:\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*=>/g, "$1:"), n = n.replace(/#\{\s*([^}]+)\s*\}/g, "#{$1}")), n = n.replace(/\s+/g, ""), n = n.replace(/'/g, '"'), (r === ".js" || r === ".ts" || r === ".jsx" || r === ".tsx") && (n = n.replace(/`/g, '"')), n = n.replace(/;/g, ""), n = n.replace(/,/g, ""), n;
}
function Crt(e, t, n, r, s, i = {}) {
    const { normalizeLines: a = !0 } = i, o = s.fileExtension || Fve(e), l = [], d = Date.now();
    for (const u of r){
        for(let m = u.original.startLineNumber; m < u.original.endLineNumberExclusive; m++){
            const f = m - 1;
            if (f < 0 || f >= t.length) continue;
            const v = t[f], T = a ? r9(v, o) : v;
            if (!T.trim()) continue;
            const S = `${e}:-${T}`, k = eE.hash(S, 0);
            l.push({
                hash: k,
                metadata: {
                    ...s,
                    fileExtension: o,
                    timestamp: d
                },
                operationType: "deletion"
            });
        }
        for(let m = u.modified.startLineNumber; m < u.modified.endLineNumberExclusive; m++){
            const f = m - 1;
            if (f < 0 || f >= n.length) continue;
            const v = n[f], T = a ? r9(v, o) : v;
            if (!T.trim()) continue;
            const S = `${e}:+${T}`, k = eE.hash(S, 0);
            l.push({
                hash: k,
                metadata: {
                    ...s,
                    fileExtension: o,
                    timestamp: d
                },
                operationType: "addition"
            });
        }
    }
    return l;
}
function qve(e, t) {
    const n = `${e}:${t}`;
    return eE.hash(n, 0);
}
function Nrt(e, t, n, r) {
    const s = [];
    if (s.push(qve(e, t)), r) {
        const i = t.charAt(0), a = t.slice(1), o = r9(a, n);
        if (o !== a) {
            const l = i + o;
            s.push(qve(e, l));
        }
    }
    return s;
}
function Drt(e, t = {}) {
    const { normalizeLines: n = !0 } = t, r = [];
    for (const s of e){
        const i = s.to || s.from || "";
        if (!i) continue;
        const a = Fve(i);
        for (const o of s.chunks || [])for (const l of o.changes || []){
            if (l.type !== "add" && l.type !== "del" || !l.content) continue;
            const d = l.content, u = Nrt(i, d, a, n);
            r.push(...u);
        }
    }
    return r;
}
var Kve, yf;
export { Crt, Drt, Fve, Kve, Nrt, _rt, crt, frt, mrt, ort, prt, qve, r9, trt, xve, yf };
var __wakaru_xrt_initialized = false;
export function xrt() {
if (__wakaru_xrt_initialized) return;
__wakaru_xrt_initialized = true;
"use strict";
h(), j(), Ce(), Ye(), te(), ert(), yrt(), Lrt(), Kve = class {
    async openDatabase(e) {
        const t = await import("@vscode/sqlite3");
        return new Promise((n, r)=>{
            const s = new t.default.Database(e, (i)=>{
                if (i) return r(i);
                n({
                    run: (o, l)=>new Promise((d, u)=>{
                            s.run(o, l || [], function(m) {
                                if (m) return u(m);
                                d();
                            });
                        }),
                    get: (o, l)=>new Promise((d, u)=>{
                            s.get(o, l || [], (m, f)=>{
                                if (m) return u(m);
                                d(f);
                            });
                        }),
                    all: (o, l)=>new Promise((d, u)=>{
                            s.all(o, l || [], (m, f)=>{
                                if (m) return u(m);
                                d(f || []);
                            });
                        }),
                    close: ()=>new Promise((o, l)=>{
                            s.close((d)=>{
                                if (d) return l(d);
                                o();
                            });
                        })
                });
            });
        });
    }
    async closeDatabase(e) {
        return e.close();
    }
}, yf = class extends J {
    constructor(e, t){
        super(), this.logService = e, this.environmentService = t, this.gitOperations = new Lve, this.cleanupIntervalId = setInterval(()=>{
            this.cleanupOldHashes(this.aiCodeTrackingStorage ?? void 0).catch((n)=>{
                this.logService.error("[AgentAnalyticsOperationsMainService] Error during periodic cleanup:", n);
            });
        }, 1440 * 60 * 1e3), this._register({
            dispose: async ()=>{
                if (this.cleanupIntervalId && (clearInterval(this.cleanupIntervalId), this.cleanupIntervalId = void 0), this.storageInitializationPromise) try {
                    await this.storageInitializationPromise;
                } catch  {}
                if (this.aiCodeTrackingStorage) {
                    try {
                        await this.aiCodeTrackingStorage.close();
                    } catch (n) {
                        this.logService.error("[AgentAnalyticsOperationsMainService] Error closing storage:", n);
                    }
                    this.aiCodeTrackingStorage = void 0;
                }
                this.storageInitializationPromise = void 0;
            }
        });
    }
    async getStorage() {
        return this.aiCodeTrackingStorage ? this.aiCodeTrackingStorage : this.storageInitializationPromise ? await this.storageInitializationPromise : (this.storageInitializationPromise = (async ()=>{
            try {
                const e = await this.getAiCodeTrackingDbPath(), t = st(e);
                await Urt.promises.mkdir(t, {
                    recursive: !0
                });
                const n = new Kve, r = new jve(n, e);
                return await r.initialize(), this.aiCodeTrackingStorage = r, await this.cleanupOldHashes(r), r;
            } catch (e) {
                throw this.storageInitializationPromise = void 0, e;
            }
        })(), await this.storageInitializationPromise);
    }
    async cleanupOldHashes(e) {
        try {
            const t = e ?? await this.getStorage(), n = Date.now() - 720 * 60 * 60 * 1e3, r = await t.deleteHashesBefore(n);
            r > 0 && this.logService.debug(`[AgentAnalyticsOperationsMainService] Cleaned up ${r} AI code hashes older than 1 month`);
        } catch (t) {
            this.logService.error("[AgentAnalyticsOperationsMainService] Error cleaning up old hashes:", t);
        }
    }
    async getGitRoot(e) {
        try {
            return await this.gitOperations.getGitRoot(e);
        } catch (t) {
            this.logService.debug("[AgentAnalyticsOperationsMainService] Error getting git root:", t);
            return;
        }
    }
    async getRemotes(e) {
        try {
            return await this.gitOperations.getRemotes(e);
        } catch (t) {
            return this.logService.debug("[AgentAnalyticsOperationsMainService] Error getting remotes:", t), [];
        }
    }
    async getGitUser(e) {
        try {
            return await this.gitOperations.getGitUser(e);
        } catch (t) {
            this.logService.debug("[AgentAnalyticsOperationsMainService] Error getting git user:", t);
            return;
        }
    }
    async getCommitsByAuthor(e, t, n, r, s) {
        const i = typeof t == "string" ? {
            author: t,
            limit: n ?? 0,
            sinceMs: r,
            allRefs: s
        } : t;
        try {
            const a = i.useGitOperationsBindingFix ? this.gitOperations.getCommitsByAuthor.bind(this.gitOperations) : this.gitOperations.getCommitsByAuthor;
            return a.length <= 2 ? await a(e, i) : await a(e, i.author, i.limit, i.sinceMs, i.allRefs);
        } catch (a) {
            return this.logService.debug("[AgentAnalyticsOperationsMainService] Error getting commits by author:", a), [];
        }
    }
    async getRecentCommits(e, t, n) {
        try {
            return await this.gitOperations.getRecentCommits(e, t, n);
        } catch (r) {
            return this.logService.debug("[AgentAnalyticsOperationsMainService] Error getting recent commits:", r), [];
        }
    }
    async getCurrentBranch(e) {
        try {
            return await this.gitOperations.getCurrentBranch(e);
        } catch (t) {
            this.logService.debug("[AgentAnalyticsOperationsMainService] Error getting current branch:", t);
            return;
        }
    }
    async getDefaultBranch(e) {
        try {
            return await this.gitOperations.getDefaultBranch(e);
        } catch (t) {
            this.logService.debug("[AgentAnalyticsOperationsMainService] Error getting default branch:", t);
            return;
        }
    }
    async getUpstreamUrl(e) {
        try {
            return await this.gitOperations.getUpstreamUrl(e);
        } catch (t) {
            this.logService.debug("[AgentAnalyticsOperationsMainService] Error getting upstream URL:", t);
            return;
        }
    }
    async getSubmodules(e) {
        try {
            return await this.gitOperations.getSubmodules(e);
        } catch (t) {
            this.logService.debug("[AgentAnalyticsOperationsMainService] Error getting submodules:", t);
            return;
        }
    }
    async commitExists(e, t) {
        try {
            return await this.gitOperations.commitExists(e, t);
        } catch (n) {
            return this.logService.debug("[AgentAnalyticsOperationsMainService] Error checking commit exists:", n), !1;
        }
    }
    async hashObject(e, t) {
        try {
            return await this.gitOperations.hashObject(e, t);
        } catch (n) {
            throw this.logService.error("[AgentAnalyticsOperationsMainService] Error hashing object:", n), n;
        }
    }
    async catBlob(e, t) {
        try {
            return await this.gitOperations.catBlob(e, t);
        } catch (n) {
            throw this.logService.error("[AgentAnalyticsOperationsMainService] Error reading blob:", n), n;
        }
    }
    async discoverRepos(e) {
        try {
            return await frt(this.gitOperations, e);
        } catch (t) {
            return this.logService.debug("[AgentAnalyticsOperationsMainService] Error discovering repos:", t), [];
        }
    }
    async getRepoInfo(e) {
        try {
            return await _rt(this.gitOperations, e);
        } catch (t) {
            return this.logService.debug("[AgentAnalyticsOperationsMainService] Error getting repo info:", t), {
                branchName: void 0,
                repoName: void 0,
                primaryBranch: void 0,
                isPrimaryBranch: void 0
            };
        }
    }
    async getUserCommits(e, t) {
        try {
            return await trt(this.gitOperations, e, t);
        } catch (n) {
            this.logService.debug("[AgentAnalyticsOperationsMainService] Error getting user commits:", n);
            return;
        }
    }
    async gitRelativePath(e, t) {
        try {
            return await crt(this.gitOperations, e, t);
        } catch (n) {
            return this.logService.debug("[AgentAnalyticsOperationsMainService] Error getting git relative path:", n), t ?? e;
        }
    }
    async getAiCodeTrackingDbPath() {
        const e = this.environmentService.userHome.fsPath;
        return L(e, ".cursor", "ai-tracking", "ai-code-tracking.db");
    }
    async storeAiCodeHashes(e, t, n, r, s) {
        try {
            const i = Crt(e, t, n, r, s, {
                normalizeLines: !0
            });
            return i.length > 0 && await (await this.getStorage()).storeHashes(i.map(({ operationType: o, ...l })=>l)), i;
        } catch (i) {
            throw this.logService.error("[AgentAnalyticsOperationsMainService] Error storing AI code hashes:", i), i;
        }
    }
    async storePreGeneratedHashes(e) {
        try {
            await (await this.getStorage()).storeHashes(e);
        } catch (t) {
            throw this.logService.error("[AgentAnalyticsOperationsMainService] Error storing pre-generated AI code hashes:", t), t;
        }
    }
    async getAiCodeHashes(e, t, n, r) {
        try {
            let s, i, a;
            t !== void 0 && typeof t == "object" && t !== null ? (s = Drt(e, t), i = n, a = r) : (s = e, i = t, a = n);
            const l = await this.getStorage(), d = i !== void 0 || a !== void 0;
            return await l.getHashes(s, d ? {
                minCreatedAt: i,
                maxCreatedAt: a
            } : void 0);
        } catch (s) {
            throw this.logService.error("[AgentAnalyticsOperationsMainService] Error getting AI code hashes:", s), s;
        }
    }
    async markCommitsScored(e) {
        try {
            await (await this.getStorage()).markCommitsScored(e);
        } catch (t) {
            throw this.logService.error("[AgentAnalyticsOperationsMainService] Error marking commits as scored:", t), t;
        }
    }
    async areCommitsScored(e) {
        try {
            return await (await this.getStorage()).areCommitsScored(e);
        } catch (t) {
            throw this.logService.error("[AgentAnalyticsOperationsMainService] Error checking if commits are scored:", t), t;
        }
    }
    async getTrackingStartTime() {
        try {
            return await (await this.getStorage()).getTrackingStartTime();
        } catch (e) {
            throw this.logService.error("[AgentAnalyticsOperationsMainService] Error getting tracking start time:", e), e;
        }
    }
    async setTrackingStartTime(e) {
        try {
            await (await this.getStorage()).setTrackingStartTime(e);
        } catch (t) {
            throw this.logService.error("[AgentAnalyticsOperationsMainService] Error setting tracking start time:", t), t;
        }
    }
    async getOrCreateAllAiTrackingStartTime(e) {
        try {
            return await (await this.getStorage()).getOrCreateAllAiTrackingStartTime(e);
        } catch (t) {
            throw this.logService.error("[AgentAnalyticsOperationsMainService] Error initializing all-AI tracking start time:", t), t;
        }
    }
    async storeConversationSummary(e) {
        try {
            await (await this.getStorage()).storeConversationSummary(e);
        } catch (t) {
            throw this.logService.error("[AgentAnalyticsOperationsMainService] Error storing conversation summary:", t), t;
        }
    }
    async storeConversationSummaries(e) {
        try {
            await (await this.getStorage()).storeConversationSummaries(e);
        } catch (t) {
            throw this.logService.error("[AgentAnalyticsOperationsMainService] Error storing conversation summaries:", t), t;
        }
    }
    async getConversationSummaries(e) {
        try {
            return await (await this.getStorage()).getConversationSummaries(e);
        } catch (t) {
            throw this.logService.error("[AgentAnalyticsOperationsMainService] Error getting conversation summaries:", t), t;
        }
    }
    async recordAiDeletedFile(e, t) {
        try {
            await (await this.getStorage()).recordAiDeletedFile(e, t);
        } catch (n) {
            throw this.logService.error("[AgentAnalyticsOperationsMainService] Error recording AI deleted file:", n), n;
        }
    }
    async getAiDeletedFiles(e, t) {
        try {
            const r = await (await this.getStorage()).getAiDeletedFiles(e, t);
            return Array.from(r);
        } catch (n) {
            throw this.logService.error("[AgentAnalyticsOperationsMainService] Error getting AI deleted files:", n), n;
        }
    }
}, yf = B([
    w(0, Z),
    w(1, qe)
], yf);

}
