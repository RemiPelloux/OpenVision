import { Gt, Pn, Qe, Vh, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { df, qn } from "./async.js";
import { G$e, sd } from "./chat_pb.js";
import { Q0t, hot } from "./cursorExtensionIsolationService.js";
import { Rn } from "./extensions.js";
import { qKr } from "./gitExtensionRequestRecorder.js";
import { It } from "./instantiation.js";
import { Fp, zp } from "./lifecycle_2.js";
import { du, kv } from "./map.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
import { LF1, OF1 } from "./yBp.js";
var Jv, oym, VKr;
export { Jv, VKr, oym };
var __wakaru_hy_initialized = false;
export function hy() {
if (__wakaru_hy_initialized) return;
__wakaru_hy_initialized = true;
"use strict";
E(), It(), Qe(), qn(), du(), Rn(), qKr(), Sr(), fn(), sd(), Gt(), zp(), Q0t(), Jv = jn("gitContextService"), oym = /^[0-9a-f]{40}(?:[0-9a-f]{24})?$/, VKr = class extends st {
    constructor(t, e, n){
        super(), this._workspaceContextService = t, this._lifecycleService = e, this._gitContextprovider = void 0, this._gitIgnoreProvider = void 0, this._extensionIsolationEnabled = !1, this._onDidRunGitStatus = this._register(new tt), this.onDidRunGitStatus = this._onDidRunGitStatus.event, this._onDidGitPush = this._register(new tt), this.onDidGitPush = this._onDidGitPush.event, this._onDidGitCommit = this._register(new tt), this.onDidGitCommit = this._onDidGitCommit.event, this._onDidGitHeadChange = this._register(new tt), this.onDidGitHeadChange = this._onDidGitHeadChange.event, this._onDidChangeGitContextProvider = this._register(new tt), this.onDidChangeGitContextProvider = this._onDidChangeGitContextProvider.event, this._onDidChangeCachedBranch = this._register(new tt), this.onDidChangeCachedBranch = this._onDidChangeCachedBranch.event, this._cachedCurrentBranchByCwd = new Map, this._branchRefreshesInFlight = new Map, this._pendingRefreshBranchCacheKeys = new Set, this._fullCommitCacheByKey = new kv(128), this._commitMetadataCacheByKey = new kv(256), this._register(Pn(()=>{
            this._providerReady?.cancel();
        })), this._extensionIsolationEnabled = n.getCursorExtensionsIsolationEnabled(), this._register(this.onDidGitHeadChange((i)=>{
            this._refreshCachedBranch({
                cwd: i
            });
        }));
    }
    _toBranchCacheKey(t) {
        return t?.trim() || "__default__";
    }
    _normalizeBranchCwd(t) {
        const e = t?.trim();
        return e || void 0;
    }
    getCachedCurrentBranch(t) {
        return this._cachedCurrentBranchByCwd.get(this._toBranchCacheKey(t?.cwd));
    }
    async getOrFetchCurrentBranch(t) {
        const e = this._toBranchCacheKey(t?.cwd), n = this._branchRefreshesInFlight.get(e);
        return n ? (await n, this._cachedCurrentBranchByCwd.get(e)) : this._cachedCurrentBranchByCwd.has(e) ? this._cachedCurrentBranchByCwd.get(e) : (await this._refreshCachedBranch(t), this._cachedCurrentBranchByCwd.get(e));
    }
    refreshCurrentBranch(t) {
        return this._refreshCachedBranch(t);
    }
    async _refreshCachedBranch(t) {
        if (!this._gitContextprovider) try {
            await this.waitForGitContextProvider(1e4);
        } catch  {
            return;
        }
        const e = this._normalizeBranchCwd(t?.cwd), n = this._toBranchCacheKey(e), i = this._branchRefreshesInFlight.get(n);
        if (i) return this._pendingRefreshBranchCacheKeys.add(n), i;
        const r = new df;
        this._branchRefreshesInFlight.set(n, r.p);
        try {
            const s = await this.getCurrentBranch(e ? {
                cwd: e
            } : void 0).catch(()=>{}), o = this._cachedCurrentBranchByCwd.get(n), a = this._cachedCurrentBranchByCwd.has(n);
            if (s === void 0) {
                a && (this._cachedCurrentBranchByCwd.delete(n), this._onDidChangeCachedBranch.fire({
                    cwd: e,
                    branch: s
                }));
                return;
            }
            (!a || s !== o) && (this._cachedCurrentBranchByCwd.set(n, s), this._onDidChangeCachedBranch.fire({
                cwd: e,
                branch: s
            }));
        } finally{
            this._branchRefreshesInFlight.get(n) === r.p && this._branchRefreshesInFlight.delete(n), r.complete(), this._pendingRefreshBranchCacheKeys.has(n) && (this._pendingRefreshBranchCacheKeys.delete(n), this._refreshCachedBranch({
                cwd: e
            }));
        }
    }
    async getSubmodules(t) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.getSubmodules(t);
    }
    async waitForGitContextProvider(t) {
        if (this._gitContextprovider) return;
        const e = this._whenProviderReady();
        if (t === void 0) {
            await e;
            return;
        }
        if (await Vh(e, t), !this._gitContextprovider) throw new Error(`Timed out waiting for git context provider after ${t}ms`);
    }
    _whenProviderReady() {
        return this._gitContextprovider ? Promise.resolve() : (this._providerReady === void 0 && (this._providerReady = new df), this._providerReady.p);
    }
    async getGitFileBlameWithAbsolutePath(t, e, n) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        const i = this._workspaceContextService.asRelativePath(rt.file(t));
        return this.getGitFileBlameWithRelativePath(i, e, n);
    }
    hasGitContextProvider() {
        return this._gitContextprovider !== void 0;
    }
    hasGitIgnoreProvider() {
        return this._gitIgnoreProvider !== void 0;
    }
    hasCorrectGitIgnoreProvider() {
        return this._extensionIsolationEnabled ? this.hasGitIgnoreProvider() : this.hasGitContextProvider();
    }
    registerGitContextProvider(t) {
        this._gitContextprovider = LF1(t, ()=>this._workspaceContextService.getWorkspace().id), this._providerReady?.complete(), this._providerReady = void 0, this._refreshCachedBranch(), this._onDidChangeGitContextProvider.fire(!0);
    }
    unregisterGitContextProvider() {
        const t = this._gitContextprovider !== void 0;
        this._gitContextprovider = void 0, this._fullCommitCacheByKey.clear(), this._commitMetadataCacheByKey.clear(), t && this._onDidChangeGitContextProvider.fire(!1);
    }
    registerGitIgnoreProvider(t) {
        this._gitIgnoreProvider = t;
    }
    unregisterGitIgnoreProvider() {
        this._gitIgnoreProvider = void 0;
    }
    async searchAllCommits(t) {
        if (!this._gitContextprovider) throw new Error("No commit search provider registered");
        return this._gitContextprovider.getCommits(t);
    }
    async getFullCommit(t, e) {
        const n = this._gitContextprovider;
        if (!n) throw new Error("No full commit provider registered");
        const i = `${e?.trim() ?? ""}\0${t}`, r = this._fullCommitCacheByKey.get(i);
        if (r) return r;
        const s = n.getFullCommit(t, e).then((o)=>(o === void 0 && this._fullCommitCacheByKey.delete(i), o), (o)=>{
            throw this._fullCommitCacheByKey.delete(i), o;
        });
        return this._fullCommitCacheByKey.set(i, s), s;
    }
    async getCommitMetadataOnly(t, e) {
        const n = this._gitContextprovider;
        if (!n) throw new Error("No commit metadata provider registered");
        const i = ()=>n.getCommitMetadataOnly ? n.getCommitMetadataOnly(t, e) : n.getFullCommit(t, e);
        if (!OF1(t)) return i();
        const r = `${e?.trim() ?? ""}\0${t}`, s = this._commitMetadataCacheByKey.get(r);
        if (s) return s;
        const o = i().then((a)=>(a === void 0 && this._commitMetadataCacheByKey.delete(r), a), (a)=>{
            throw this._commitMetadataCacheByKey.delete(r), a;
        });
        return this._commitMetadataCacheByKey.set(r, o), o;
    }
    async getSingleFileDiff(t, e, n) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        if (this._gitContextprovider.getSingleFileDiff) return this._gitContextprovider.getSingleFileDiff(t, e, n);
    }
    async getFullCommitProto(t) {
        const e = await this.getFullCommit(t);
        if (e) return new G$e({
            sha: e.sha,
            message: e.message,
            description: e.description,
            diff: e.diff.map((n)=>({
                    from: n.from,
                    to: n.to,
                    chunks: n.chunks.map((i)=>({
                            content: i.content,
                            lines: i.changes.map((r)=>r.content)
                        }))
                })),
            author: e.author,
            date: e.date
        });
    }
    async searchAllPrs(t, e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getPullRequests(t, e);
    }
    async getFullPr(t, e, n) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider?.getFullPullRequest(t, e, n);
    }
    async getEarlyCommitHash() {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getEarlyCommitHash();
    }
    async getIssues(t, e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getIssues(t, e);
    }
    async getFullIssue(t, e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getFullIssue(t, e);
    }
    async getBranchDiff(t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getBranchDiff({
            ...t,
            cwd: t?.cwd?.fsPath
        });
    }
    async getGitRoot(t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getGitRoot(t);
    }
    async getWorktreeSourceRepoRoot(t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        try {
            const e = await this.executeGitCommand(t, [
                "rev-parse",
                "--path-format=absolute",
                "--git-common-dir"
            ], {
                caller: "GitContextService.getWorktreeSourceRepoRoot"
            });
            if (!e || !e.trim()) return;
            const n = (o)=>o.replace(/\\/g, "/").replace(/\/+$/, ""), i = n(e.trim());
            if (!i.endsWith("/.git")) return;
            const r = i.substring(0, i.length - 5), s = n(t);
            return r === s ? void 0 : r;
        } catch  {
            return;
        }
    }
    async detachHead(t) {
        await this.executeGitCommand(t, [
            "checkout",
            "--detach"
        ], {
            caller: "GitContextService.detachHead"
        });
    }
    async checkoutAndPull(t, e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.checkoutAndPull(t, e);
    }
    async checkoutAndFastForward(t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.checkoutAndFastForward(t);
    }
    async getDiffRaw() {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getDiffRaw();
    }
    async getLastCommit() {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getLastCommit();
    }
    async getLastCommits(t, e = 0, n) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getLastCommits(t, e, void 0, n);
    }
    async getDiff(t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getDiff(t);
    }
    async getGitDiff(t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getCurrentDiff({
            cwd: t
        });
    }
    async getDiffFilesPatch(t) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.getDiffFilesPatch(t);
    }
    async resolveGitRevision(t) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.resolveGitRevision(t);
    }
    async getUntrackedFilePatch(t) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.getUntrackedFilePatch(t);
    }
    async getDiffFileEntries(t) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.getDiffFileEntries(t);
    }
    async getGitStatusRaw() {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getGitStatusRaw();
    }
    async getGitLineBlameWithRelativePath(t, e, n) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getGitLineBlame(t, e, n);
    }
    async getGitLineBlameWithAbsolutePath(t, e, n) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        const i = this._workspaceContextService.asRelativePath(rt.file(t));
        return this.getGitLineBlameWithRelativePath(i, e, n);
    }
    async getGitFileBlameWithRelativePath(t, e, n) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getGitFileBlame(t, e, n);
    }
    async getGitFileLineBlameWithRelativePath(t, e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getGitFileLineBlame(t, e);
    }
    async getGitFileLineBlameWithAbsolutePath(t, e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        const n = this._workspaceContextService.asRelativePath(rt.file(t));
        return this.getGitFileLineBlameWithRelativePath(n, e);
    }
    async getGitUpstreamURL(t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getGitUpstreamURL(t);
    }
    async getFileContentAtRef(t, e, n) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getFileContentAtRef(t, e, n);
    }
    async getFileContentForDiffScope(t) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.getFileContentForDiffScope(t);
    }
    async getCommitRawByCommitHash(t, e, n, i, r) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getCommitRawByCommitHash(t, e, n, i, r);
    }
    async getCommitDetails(t, e, n, i) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getCommitDetails(t, e, n, i);
    }
    async createWorktree(t, e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.createWorktree(t, e);
    }
    async createWorktreeWithBranch(t) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.createWorktreeWithBranch(t);
    }
    async stageFiles(t) {
        if (t.filePaths.length !== 0) {
            if (!this._gitContextprovider) throw new Error("No git context provider registered");
            return await this._gitContextprovider.stageFiles(t);
        }
    }
    async unstageFiles(t) {
        if (t.filePaths.length !== 0) {
            if (!this._gitContextprovider) throw new Error("No git context provider registered");
            return await this._gitContextprovider.unstageFiles(t);
        }
    }
    async unstageAllChanges(t) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.unstageAllChanges(t);
    }
    async restoreFiles(t) {
        if (t.filePaths.length !== 0) {
            if (!this._gitContextprovider) throw new Error("No git context provider registered");
            return await this._gitContextprovider.restoreFiles(t);
        }
    }
    async restoreStagedAndWorkingFiles(t) {
        if (t.filePaths.length !== 0) {
            if (!this._gitContextprovider) throw new Error("No git context provider registered");
            return await this._gitContextprovider.restoreStagedAndWorkingFiles(t);
        }
    }
    async hardReset(t) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.hardReset(t);
    }
    async resolveSubmoduleCommitShas(t) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.resolveSubmoduleCommitShas(t);
    }
    async getRevListCount(t) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.getRevListCount(t);
    }
    async getMergedInTips(t) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.getMergedInTips(t);
    }
    async generateWorktreePath() {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.generateUniqueWorktreePath();
    }
    async removeWorktree(t, e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.removeWorktree(t, e);
    }
    async stageAllChanges(t) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.stageAllChanges(t);
    }
    async commitChanges(t, e) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.commitChanges(t, e);
    }
    async pushBranch(t, e, n) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.pushBranch(t, e, n);
    }
    async getFilenamesInCommit(t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getFilenamesInCommit(t);
    }
    async getFilesChangedSinceCommit(t, e, n) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.getFilesChangedSinceCommit(t, e, n);
    }
    async getCurrentBranch(t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getCurrentBranch(t);
    }
    async hasUnpushedCommits(t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.hasUnpushedCommits(t);
    }
    async getClosestRemoteRef(t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getClosestRemoteRef(t);
    }
    async getDefaultBranch(t) {
        if (!this._gitContextprovider) try {
            await this.waitForGitContextProvider(1e4);
        } catch  {
            return;
        }
        return await this._gitContextprovider?.getDefaultBranch(t);
    }
    async getGitUser(t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getGitUser(t);
    }
    async getAllBranchNames(t) {
        if (!this._gitContextprovider) try {
            await this.waitForGitContextProvider(1e4);
        } catch  {
            return;
        }
        return await this._gitContextprovider?.getAllBranchNames(t);
    }
    async getRemoteNames(t) {
        if (!this._gitContextprovider) try {
            await this.waitForGitContextProvider(1e4);
        } catch  {
            return;
        }
        return await this._gitContextprovider?.getRemoteNames(t);
    }
    async createAndCheckoutBranch(t) {
        if (!this._gitContextprovider) try {
            await this.waitForGitContextProvider(1e4);
        } catch  {
            return {
                status: "failed"
            };
        }
        return await this._gitContextprovider?.createAndCheckoutBranch(t) ?? {
            status: "failed"
        };
    }
    async getBranchDivergenceStatus(t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getBranchDivergenceStatus(t);
    }
    async getUserCommits(t, e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getUserCommits(t, e);
    }
    async getMergeBase(t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getMergeBase(t);
    }
    async revertFile(t, e, n) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.revertFile(t, e, n);
    }
    async getUntrackedFiles(t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getUntrackedFiles(t);
    }
    async areFilesCheckedInToRemote(t) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.areFilesCheckedInToRemote(t);
    }
    async getBranchPullRequests(t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getBranchPullRequests(t);
    }
    async gitFetch(t) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.gitFetch(t);
    }
    async generateAndApplyPatch(t, e, n) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.generateAndApplyPatch(t, e, n);
    }
    async executeGitCommand(t, e, n) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.executeGitCommand(t, e, n);
    }
    async createTempIndexFile() {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.createTempIndexFile();
    }
    async deleteTempIndexFile(t) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.deleteTempIndexFile(t);
    }
    async getGitTelemetryAttributes(t) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.getGitTelemetryAttributes(t);
    }
    async getGitProcessStats() {
        return this._gitContextprovider?.getGitProcessStats ? await this._gitContextprovider.getGitProcessStats() : {
            spawnedGitProcessCount: 0,
            runningGitProcessCount: 0
        };
    }
    async areIgnored(t) {
        if (this._extensionIsolationEnabled) {
            if (!this._gitIgnoreProvider) throw new Error("No git ignore provider registered");
            return await this._gitIgnoreProvider.areIgnored(t);
        }
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.areIgnored(t);
    }
    async isGithubRepo() {
        return this._gitContextprovider ? await this._gitContextprovider.isGithubRepo() : !1;
    }
}, VKr = Re([
    F(0, yr),
    F(1, Fp),
    F(2, hot)
], VKr), bn(Jv, VKr, 1);

}
