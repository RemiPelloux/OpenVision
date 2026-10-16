import { aT, le } from "./async.js";
import { wot } from "./autoContinueAgentClaims.js";
import { Ja, fF, gF } from "./constants.js";
import { Ye, qe } from "./environmentMainService.js";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { Rot } from "./localAgentRepository.js";
import { Eot } from "./localAgentStorageLimits.js";
import { Z, te } from "./log.js";
import { Ce, L } from "./path.js";
import { t8 } from "./stickyArchiveRowMerge.js";
import { vp } from "./storageIpc_2.js";
import { e8 } from "./storage_3.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { ct, pt } from "./windows.js";
import { bn, od } from "./workspace.js";
import { z as je } from "zod";
import * as zE from "fs";
function Sot(e, t, n, r) {
    for (const [i, a] of [
        ...e
    ])r(a) || e.delete(i);
    const s = [];
    for (const i of t){
        const a = e.get(i);
        a !== void 0 && a !== n || (e.set(i, n), s.push(i));
    }
    return s;
}
function yot(e, t, n) {
    for (const r of t)e.get(r) === n && e.delete(r);
}
function uOe(e, t, n) {
    if (n <= 0) return [];
    if (t.size === 0 || e.length <= n) return e.slice(0, n);
    const r = new Set;
    for (const s of e){
        if (r.size >= n) break;
        t.has(s.composerId) && r.add(s.composerId);
    }
    for (const s of e){
        if (r.size >= n) break;
        r.add(s.composerId);
    }
    return e.filter((s)=>r.has(s.composerId));
}
function bot(e) {
    return e.createdFromBackgroundAgent !== void 0 && e.createdFromBackgroundAgent.shouldStreamMessages !== !1;
}
function pOe(e) {
    if (!e || typeof e != "object") return;
    const t = e, n = vp(t.environment);
    switch(t.type){
        case "local":
            return n ? {
                type: "local",
                environment: n,
                ...t.status ? {
                    status: t.status
                } : {}
            } : void 0;
        case "worktree":
            {
                if (!n || typeof t.worktreePath != "string") return;
                const r = vp(t.sourceEnvironment);
                return {
                    type: "worktree",
                    environment: n,
                    worktreePath: t.worktreePath,
                    ownership: t.ownership ?? "unknown",
                    ...t.worktreeId ? {
                        worktreeId: t.worktreeId
                    } : {},
                    ...t.sourceRepoRootPath ? {
                        sourceRepoRootPath: t.sourceRepoRootPath
                    } : {},
                    ...r ? {
                        sourceEnvironment: r
                    } : {},
                    ...t.retentionPolicy ? {
                        retentionPolicy: t.retentionPolicy
                    } : {},
                    ...t.status ? {
                        status: t.status
                    } : {}
                };
            }
        case "cloud":
            return {
                type: "cloud",
                ...n ? {
                    environment: n
                } : {},
                ...t.status ? {
                    status: t.status
                } : {}
            };
        default:
            return;
    }
}
function Cot(e) {
    if (!Array.isArray(e)) return;
    const t = [];
    for (const n of e){
        if (!n || typeof n != "object") continue;
        const r = n;
        if (typeof r.id != "string" || typeof r.timestamp != "number") continue;
        const s = pOe(r.location);
        !s || !r.destination || !r.reason || t.push({
            ...r,
            id: r.id,
            timestamp: r.timestamp,
            destination: r.destination,
            location: s,
            reason: r.reason
        });
    }
    return t;
}
function Iot(e) {
    if (!e || typeof e != "object") return;
    const t = je.array(kOe).safeParse(e.trackedGitRepos);
    if (!(!t.success || t.data.length === 0)) return t.data.map((n)=>({
            repoPath: n.repoPath,
            branches: n.branches.map((r)=>({
                    branchName: r.branchName,
                    lastInteractionAt: r.lastInteractionAt ?? 0
                }))
        }));
}
function Aot(e) {
    const t = new Map;
    for (const n of e){
        const r = t.get(n.composerId);
        (!r || e8(n, r)) && t.set(n.composerId, n);
    }
    return Array.from(t.values());
}
function Mot(e) {
    try {
        return Buffer.from(e).toString("hex");
    } catch  {
        return Array.from(e, (t)=>t.toString(16).padStart(2, "0")).join("");
    }
}
function Pot(e) {
    const t = e.trim().toLowerCase();
    if (t.length % 2 !== 0) throw new Error("Invalid hex string length");
    const n = new Uint8Array(t.length / 2);
    for(let r = 0; r < t.length; r += 2)n[r / 2] = parseInt(t.slice(r, r + 2), 16);
    return n;
}
var hOe, gOe, fOe, _Oe, vOe, TOe, kOe, cU, SOe, yOe, wOe, EOe, bOe, ROe, YE;
export { Aot, Cot, EOe, Iot, Mot, Pot, ROe, SOe, Sot, TOe, YE, _Oe, bOe, bot, cU, fOe, gOe, hOe, kOe, pOe, uOe, vOe, wOe, yOe, yot };
var __wakaru_Not_initialized = false;
export function Not() {
if (__wakaru_Not_initialized) return;
__wakaru_Not_initialized = true;
"use strict";
h(), j(), le(), t8(), Ja(), te(), Ye(), wot(), Eot(), pt(), Rot(), bn(), Ce(), ye(), hOe = je.object({
    folder: je.string().optional(),
    workspace: je.string().optional()
}), gOe = je.object({
    allComposers: je.array(je.unknown()).optional()
}), fOe = je.object({
    bcId: je.string(),
    shouldStreamMessages: je.boolean().optional()
}).passthrough(), _Oe = je.object({
    source: je.literal("local-scheduled-task"),
    taskId: je.string().optional(),
    taskName: je.string().optional()
}).passthrough(), vOe = je.object({
    composerId: je.string(),
    name: je.string(),
    createdAt: je.number().optional(),
    lastUpdatedAt: je.number().optional(),
    unfinishedRunAt: je.number().optional(),
    conversationCheckpointLastUpdatedAt: je.number().optional(),
    subtitle: je.string().optional(),
    hasUnreadMessages: je.boolean().optional(),
    hasBlockingPendingActions: je.boolean().optional(),
    hasPendingPlan: je.boolean().optional(),
    workspaceIdentifier: je.unknown().optional(),
    agentLocation: je.unknown().optional(),
    agentLocationHistory: je.array(je.unknown()).optional(),
    agentProjectId: je.string().optional(),
    isArchived: je.boolean().optional(),
    isDraft: je.boolean().optional(),
    isEphemeral: je.boolean().optional(),
    createdFromBackgroundAgent: fOe.optional(),
    createdFromLocalScheduledTask: _Oe.optional(),
    subagentInfo: je.object({
        parentComposerId: je.string().optional(),
        subagentTypeName: je.string().optional()
    }).passthrough().optional(),
    projectIcon: je.string().optional()
}).refine((e)=>!e.isDraft && !e.isEphemeral && !bot(e), {
    message: "excluded by local agent scan rules"
}), TOe = je.object({
    branchName: je.string(),
    lastInteractionAt: je.number().optional()
}), kOe = je.object({
    repoPath: je.string(),
    branches: je.array(TOe)
}), cU = 50, SOe = 2, yOe = 8, wOe = "composer.composerData", EOe = "composerData:", bOe = "agentKv:blob:", ROe = 3e3, YE = class extends J {
    constructor(e, t, n){
        super(), this.logService = e, this.environmentMainService = t, this.windowsMainService = n, this.autoContinueClaimedByWindow = new Map, this.globalDbPromise = this.openGlobalDatabase();
    }
    dispose() {
        this.globalDbPromise.then((e)=>{
            e && this.closeDatabase(e);
        }), super.dispose();
    }
    async scanAgents(e) {
        return this.scanRecentWorkspaces(e);
    }
    async claimAgentsForAutoContinue(e, t) {
        return Sot(this.autoContinueClaimedByWindow, e, t, (n)=>this.windowsMainService.getWindowById(n) !== void 0);
    }
    async releaseAgentsForAutoContinue(e, t) {
        yot(this.autoContinueClaimedByWindow, e, t);
    }
    async getComposerData(e) {
        const t = await this.globalDbPromise;
        if (t) try {
            const n = await new Promise((r)=>{
                t.get("SELECT value FROM cursorDiskKV WHERE key = ?", [
                    `${EOe}${e}`
                ], (s, i)=>{
                    r(s ? void 0 : i);
                });
            });
            return n ? typeof n.value == "string" ? n.value : n.value.toString("utf-8") : void 0;
        } catch (n) {
            this.logService.warn("[LocalAgentStorage] Failed to load composer data", n);
            return;
        }
    }
    async getBlob(e) {
        const t = await this.globalDbPromise;
        if (t) try {
            const n = Mot(e), r = await new Promise((i)=>{
                t.get("SELECT value FROM cursorDiskKV WHERE key = ?", [
                    `${bOe}${n}`
                ], (a, o)=>{
                    i(a ? void 0 : o);
                });
            });
            if (!r) return;
            const s = typeof r.value == "string" ? Buffer.from(r.value, "utf-8") : r.value;
            return this.decodeBlobValue(s);
        } catch (n) {
            this.logService.warn("[LocalAgentStorage] Failed to load blob", n);
            return;
        }
    }
    async scanRecentWorkspaces(e) {
        const t = this.getWorkspaceStorageHome();
        let n;
        try {
            n = await zE.promises.readdir(t, {
                withFileTypes: !0
            });
        } catch (b) {
            return this.logService.error("[LocalAgentStorage] Failed to read workspace storage directory", b), [];
        }
        const r = n.filter((b)=>b.isDirectory()).map((b)=>b.name), i = (await import("@vscode/sqlite3")).default.Database, a = Date.now() - SOe * 24 * 60 * 60 * 1e3, o = [];
        let l = 0, d = 0;
        const u = this.scanGlobalComposerHeaders(), m = new aT(yOe);
        try {
            const b = await Promise.all(r.map((I)=>m.queue(async ()=>{
                    try {
                        const G = L(t, I), U = L(G, "state.vscdb");
                        let X;
                        try {
                            X = await zE.promises.stat(U);
                        } catch  {
                            return [];
                        }
                        if (X.mtimeMs < a) return d++, [];
                        const W = L(G, "workspace.json"), K = await this.readWorkspaceIdentifier(W, I);
                        return l++, await this.readComposerDataFromDb(i, U, K);
                    } catch (G) {
                        return this.logService.warn(`[LocalAgentStorage] Error scanning workspace ${I}`, G), [];
                    }
                })));
            for (const I of b)o.push(...I);
        } finally{
            m.dispose();
        }
        const f = await u;
        o.push(...f);
        const v = Aot(o);
        this.logService.info(`[LocalAgentStorage] Scanned ${l} recent databases (skipped ${d} old), found ${o.length} agent headers, deduped to ${v.length}`);
        const T = (b, I)=>(I.lastUpdatedAt ?? I.createdAt ?? 0) - (b.lastUpdatedAt ?? b.createdAt ?? 0), S = new Set(e?.prioritizeAgentIds ?? []), k = uOe(v.filter((b)=>!b.isArchived).sort(T), S, cU), y = uOe(v.filter((b)=>b.isArchived).sort(T), S, cU);
        return [
            ...k,
            ...y
        ];
    }
    getWorkspaceStorageHome() {
        return L(this.environmentMainService.userDataPath, "User", "workspaceStorage");
    }
    getGlobalStoragePath() {
        return L(this.environmentMainService.userDataPath, "User", "globalStorage", "state.vscdb");
    }
    async readWorkspaceIdentifier(e, t) {
        try {
            const n = await zE.promises.readFile(e, "utf-8");
            let r;
            try {
                r = JSON.parse(n);
            } catch  {
                return {
                    id: t
                };
            }
            const s = hOe.safeParse(r);
            if (!s.success) return {
                id: t
            };
            const i = s.data, a = i.folder, o = i.workspace, l = a || o;
            if (!l) return {
                id: t
            };
            const d = x.parse(l);
            return a ? {
                id: t,
                uri: d
            } : {
                id: t,
                configPath: d
            };
        } catch  {
            return {
                id: t
            };
        }
    }
    async readComposerDataFromDb(e, t, n) {
        const r = await new Promise((s)=>{
            const i = new e(t, 1, (a)=>{
                s(a ? null : i);
            });
        });
        if (!r) return [];
        try {
            await this.setBusyTimeout(r);
            const s = await new Promise((a)=>{
                r.get("SELECT value FROM ItemTable WHERE key = ?", [
                    wOe
                ], (o, l)=>{
                    a(o ? void 0 : l);
                });
            });
            if (!s) return [];
            const i = typeof s.value == "string" ? s.value : s.value.toString("utf-8");
            return this.readComposerHeadersFromBlob(i, n);
        } finally{
            await this.closeDatabase(r);
        }
    }
    async scanGlobalComposerHeaders() {
        const e = await this.globalDbPromise;
        if (!e) return [];
        if (await this.isHeaderTableCanonical(e)) try {
            const t = await this.scanGlobalComposerHeadersFromTable(e);
            if (t !== void 0) return t;
        } catch (t) {
            this.logService.warn("[LocalAgentStorage] Failed to load global composer headers from table; falling back to blob", t);
        }
        try {
            const t = await new Promise((r)=>{
                e.get("SELECT value FROM ItemTable WHERE key = ?", [
                    gF
                ], (s, i)=>{
                    r(s ? void 0 : i);
                });
            });
            if (!t) return [];
            const n = typeof t.value == "string" ? t.value : t.value.toString("utf-8");
            return this.readComposerHeadersFromBlob(n, od);
        } catch (t) {
            return this.logService.warn("[LocalAgentStorage] Failed to load global composer headers", t), [];
        }
    }
    async scanGlobalComposerHeadersFromTable(e) {
        const t = await new Promise((r, s)=>{
            e.all("SELECT value FROM composerHeaders", [], (i, a)=>{
                i ? s(i) : r(a);
            });
        });
        if (!t) return;
        const n = [];
        for (const r of t){
            const s = typeof r.value == "string" ? r.value : r.value.toString("utf-8");
            let i;
            try {
                i = JSON.parse(s);
            } catch  {
                continue;
            }
            const a = this.scannableHeaderRowToAgent(i, od);
            a && n.push(a);
        }
        return n;
    }
    async isHeaderTableCanonical(e) {
        try {
            const t = await new Promise((n)=>{
                e.get("SELECT value FROM cursorDiskKV WHERE key = ?", [
                    fF
                ], (r, s)=>{
                    n(r ? void 0 : s);
                });
            });
            if (t) return (typeof t.value == "string" ? t.value : t.value.toString("utf-8")) === "1";
        } catch  {}
        return !1;
    }
    readComposerHeadersFromBlob(e, t) {
        let n;
        try {
            n = JSON.parse(e);
        } catch  {
            return [];
        }
        const r = gOe.safeParse(n);
        if (!r.success) return [];
        const s = r.data.allComposers ?? [], i = [];
        for (const a of s){
            const o = this.scannableHeaderRowToAgent(a, t);
            o && i.push(o);
        }
        return i;
    }
    scannableHeaderRowToAgent(e, t) {
        const n = vOe.safeParse(e);
        if (!n.success) return;
        const r = n.data, s = vp(r.workspaceIdentifier) ?? t, i = pOe(r.agentLocation), a = Cot(r.agentLocationHistory);
        return {
            composerId: r.composerId,
            name: r.name,
            createdAt: r.createdAt,
            lastUpdatedAt: r.lastUpdatedAt,
            unfinishedRunAt: r.unfinishedRunAt,
            conversationCheckpointLastUpdatedAt: r.conversationCheckpointLastUpdatedAt,
            workspaceIdentifier: s,
            subtitle: r.subtitle,
            trackedGitRepos: Iot(e),
            hasUnreadMessages: r.hasUnreadMessages,
            hasBlockingPendingActions: r.hasBlockingPendingActions,
            hasPendingPlan: r.hasPendingPlan,
            isArchived: r.isArchived,
            subagentParentComposerId: r.subagentInfo?.parentComposerId,
            subagentTypeName: r.subagentInfo?.subagentTypeName,
            createdFromLocalScheduledTask: r.createdFromLocalScheduledTask,
            projectIcon: r.projectIcon,
            projectId: r.agentProjectId,
            agentLocation: i,
            agentLocationHistory: a
        };
    }
    async openGlobalDatabase() {
        const e = this.getGlobalStoragePath();
        if (!zE.existsSync(e)) return null;
        const n = (await import("@vscode/sqlite3")).default.Database, r = await new Promise((s)=>{
            const i = new n(e, 1, (a)=>{
                s(a ? null : i);
            });
        });
        return r && await this.setBusyTimeout(r), r;
    }
    async closeDatabase(e) {
        await new Promise((t)=>{
            e.close(()=>t());
        });
    }
    async setBusyTimeout(e) {
        await new Promise((t)=>{
            e.run(`PRAGMA busy_timeout = ${ROe}`, ()=>t());
        });
    }
    decodeBlobValue(e) {
        if (e.length === 1 && e[0] === 0) return new Uint8Array(0);
        const t = e.toString("utf-8");
        if (/^[0-9a-fA-F]+$/.test(t)) try {
            const n = Pot(t);
            return n.length === 1 && n[0] === 0 ? new Uint8Array(0) : n;
        } catch  {
            return;
        }
        return new Uint8Array(e);
    }
}, YE = B([
    w(0, Z),
    w(1, qe),
    w(2, ct)
], YE);

}
