import { FSv, NSv } from "./A3u.js";
import { Hp, Se, bt, rn, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Am, bn } from "./async.js";
import { Hu, NMe } from "./chat_pb.js";
import { FJe, tkt } from "./cursorExtensionIsolationService.js";
import { Pn } from "./extensions.js";
import { TDd } from "./gitExtensionRequestRecorder.js";
import { Ze } from "./instantiation.js";
import { $d, Id } from "./lifecycle_2.js";
import { ag, oc } from "./map.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Jn, ci } from "./workspace.js";
var kk, EDd, yWi;
export { EDd, kk, yWi };
var __wakaru_r0_initialized = false;
export function r0() {
if (__wakaru_r0_initialized) return;
__wakaru_r0_initialized = true;
"use strict";
x(), Ze(), Se(), bn(), oc(), Pn(), TDd(), ci(), Qt(), Hu(), bt(), $d(), tkt(), kk = vn("gitContextService"), EDd = /^[0-9a-f]{40}(?:[0-9a-f]{24})?$/, yWi = class extends we {
    constructor(e, t, n){
        super(), this._workspaceContextService = e, this._lifecycleService = t, this._gitContextprovider = void 0, this._gitIgnoreProvider = void 0, this._extensionIsolationEnabled = !1, this._onDidRunGitStatus = this._register(new ve), this.onDidRunGitStatus = this._onDidRunGitStatus.event, this._onDidGitPush = this._register(new ve), this.onDidGitPush = this._onDidGitPush.event, this._onDidGitCommit = this._register(new ve), this.onDidGitCommit = this._onDidGitCommit.event, this._onDidGitHeadChange = this._register(new ve), this.onDidGitHeadChange = this._onDidGitHeadChange.event, this._onDidChangeGitContextProvider = this._register(new ve), this.onDidChangeGitContextProvider = this._onDidChangeGitContextProvider.event, this._onDidChangeCachedBranch = this._register(new ve), this.onDidChangeCachedBranch = this._onDidChangeCachedBranch.event, this._cachedCurrentBranchByCwd = new Map, this._branchRefreshesInFlight = new Map, this._pendingRefreshBranchCacheKeys = new Set, this._fullCommitCacheByKey = new ag(128), this._commitMetadataCacheByKey = new ag(256), this._register(rn(()=>{
            this._providerReady?.cancel();
        })), this._extensionIsolationEnabled = n.getCursorExtensionsIsolationEnabled(), this._register(this.onDidGitHeadChange((i)=>{
            this._refreshCachedBranch({
                cwd: i
            });
        }));
    }
    _toBranchCacheKey(e) {
        return e?.trim() || "__default__";
    }
    _normalizeBranchCwd(e) {
        const t = e?.trim();
        return t || void 0;
    }
    getCachedCurrentBranch(e) {
        return this._cachedCurrentBranchByCwd.get(this._toBranchCacheKey(e?.cwd));
    }
    async getOrFetchCurrentBranch(e) {
        const t = this._toBranchCacheKey(e?.cwd), n = this._branchRefreshesInFlight.get(t);
        return n ? (await n, this._cachedCurrentBranchByCwd.get(t)) : this._cachedCurrentBranchByCwd.has(t) ? this._cachedCurrentBranchByCwd.get(t) : (await this._refreshCachedBranch(e), this._cachedCurrentBranchByCwd.get(t));
    }
    refreshCurrentBranch(e) {
        return this._refreshCachedBranch(e);
    }
    async _refreshCachedBranch(e) {
        if (!this._gitContextprovider) try {
            await this.waitForGitContextProvider(1e4);
        } catch  {
            return;
        }
        const t = this._normalizeBranchCwd(e?.cwd), n = this._toBranchCacheKey(t), i = this._branchRefreshesInFlight.get(n);
        if (i) return this._pendingRefreshBranchCacheKeys.add(n), i;
        const r = new Am;
        this._branchRefreshesInFlight.set(n, r.p);
        try {
            const s = await this.getCurrentBranch(t ? {
                cwd: t
            } : void 0).catch(()=>{}), o = this._cachedCurrentBranchByCwd.get(n), a = this._cachedCurrentBranchByCwd.has(n);
            if (s === void 0) {
                a && (this._cachedCurrentBranchByCwd.delete(n), this._onDidChangeCachedBranch.fire({
                    cwd: t,
                    branch: s
                }));
                return;
            }
            (!a || s !== o) && (this._cachedCurrentBranchByCwd.set(n, s), this._onDidChangeCachedBranch.fire({
                cwd: t,
                branch: s
            }));
        } finally{
            this._branchRefreshesInFlight.get(n) === r.p && this._branchRefreshesInFlight.delete(n), r.complete(), this._pendingRefreshBranchCacheKeys.has(n) && (this._pendingRefreshBranchCacheKeys.delete(n), this._refreshCachedBranch({
                cwd: t
            }));
        }
    }
    async getSubmodules(e) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.getSubmodules(e);
    }
    async waitForGitContextProvider(e) {
        if (this._gitContextprovider) return;
        const t = this._whenProviderReady();
        if (e === void 0) {
            await t;
            return;
        }
        if (await Hp(t, e), !this._gitContextprovider) throw new Error(`Timed out waiting for git context provider after ${e}ms`);
    }
    _whenProviderReady() {
        return this._gitContextprovider ? Promise.resolve() : (this._providerReady === void 0 && (this._providerReady = new Am), this._providerReady.p);
    }
    async getGitFileBlameWithAbsolutePath(e, t, n) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        const i = this._workspaceContextService.asRelativePath(Ee.file(e));
        return this.getGitFileBlameWithRelativePath(i, t, n);
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
    registerGitContextProvider(e) {
        this._gitContextprovider = NSv(e, ()=>this._workspaceContextService.getWorkspace().id), this._providerReady?.complete(), this._providerReady = void 0, this._refreshCachedBranch(), this._onDidChangeGitContextProvider.fire(!0);
    }
    unregisterGitContextProvider() {
        const e = this._gitContextprovider !== void 0;
        this._gitContextprovider = void 0, this._fullCommitCacheByKey.clear(), this._commitMetadataCacheByKey.clear(), e && this._onDidChangeGitContextProvider.fire(!1);
    }
    registerGitIgnoreProvider(e) {
        this._gitIgnoreProvider = e;
    }
    unregisterGitIgnoreProvider() {
        this._gitIgnoreProvider = void 0;
    }
    async searchAllCommits(e) {
        if (!this._gitContextprovider) throw new Error("No commit search provider registered");
        return this._gitContextprovider.getCommits(e);
    }
    async getFullCommit(e, t) {
        const n = this._gitContextprovider;
        if (!n) throw new Error("No full commit provider registered");
        const i = `${t?.trim() ?? ""}\0${e}`, r = this._fullCommitCacheByKey.get(i);
        if (r) return r;
        const s = n.getFullCommit(e, t).then((o)=>(o === void 0 && this._fullCommitCacheByKey.delete(i), o), (o)=>{
            throw this._fullCommitCacheByKey.delete(i), o;
        });
        return this._fullCommitCacheByKey.set(i, s), s;
    }
    async getCommitMetadataOnly(e, t) {
        const n = this._gitContextprovider;
        if (!n) throw new Error("No commit metadata provider registered");
        const i = ()=>n.getCommitMetadataOnly ? n.getCommitMetadataOnly(e, t) : n.getFullCommit(e, t);
        if (!FSv(e)) return i();
        const r = `${t?.trim() ?? ""}\0${e}`, s = this._commitMetadataCacheByKey.get(r);
        if (s) return s;
        const o = i().then((a)=>(a === void 0 && this._commitMetadataCacheByKey.delete(r), a), (a)=>{
            throw this._commitMetadataCacheByKey.delete(r), a;
        });
        return this._commitMetadataCacheByKey.set(r, o), o;
    }
    async getSingleFileDiff(e, t, n) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        if (this._gitContextprovider.getSingleFileDiff) return this._gitContextprovider.getSingleFileDiff(e, t, n);
    }
    async getFullCommitProto(e) {
        const t = await this.getFullCommit(e);
        if (t) return new NMe({
            sha: t.sha,
            message: t.message,
            description: t.description,
            diff: t.diff.map((n)=>({
                    from: n.from,
                    to: n.to,
                    chunks: n.chunks.map((i)=>({
                            content: i.content,
                            lines: i.changes.map((r)=>r.content)
                        }))
                })),
            author: t.author,
            date: t.date
        });
    }
    async searchAllPrs(e, t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getPullRequests(e, t);
    }
    async getFullPr(e, t, n) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider?.getFullPullRequest(e, t, n);
    }
    async getEarlyCommitHash() {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getEarlyCommitHash();
    }
    async getIssues(e, t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getIssues(e, t);
    }
    async getFullIssue(e, t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getFullIssue(e, t);
    }
    async getBranchDiff(e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getBranchDiff({
            ...e,
            cwd: e?.cwd?.fsPath
        });
    }
    async getGitRoot(e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getGitRoot(e);
    }
    async getWorktreeSourceRepoRoot(e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        try {
            const t = await this.executeGitCommand(e, [
                "rev-parse",
                "--path-format=absolute",
                "--git-common-dir"
            ], {
                caller: "GitContextService.getWorktreeSourceRepoRoot"
            });
            if (!t || !t.trim()) return;
            const n = (o)=>o.replace(/\\/g, "/").replace(/\/+$/, ""), i = n(t.trim());
            if (!i.endsWith("/.git")) return;
            const r = i.substring(0, i.length - 5), s = n(e);
            return r === s ? void 0 : r;
        } catch  {
            return;
        }
    }
    async detachHead(e) {
        await this.executeGitCommand(e, [
            "checkout",
            "--detach"
        ], {
            caller: "GitContextService.detachHead"
        });
    }
    async checkoutAndPull(e, t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.checkoutAndPull(e, t);
    }
    async checkoutAndFastForward(e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.checkoutAndFastForward(e);
    }
    async getDiffRaw() {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getDiffRaw();
    }
    async getLastCommit() {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getLastCommit();
    }
    async getLastCommits(e, t = 0, n) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getLastCommits(e, t, void 0, n);
    }
    async getDiff(e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getDiff(e);
    }
    async getGitDiff(e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getCurrentDiff({
            cwd: e
        });
    }
    async getDiffFilesPatch(e) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.getDiffFilesPatch(e);
    }
    async resolveGitRevision(e) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.resolveGitRevision(e);
    }
    async getUntrackedFilePatch(e) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.getUntrackedFilePatch(e);
    }
    async getDiffFileEntries(e) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.getDiffFileEntries(e);
    }
    async getGitStatusRaw() {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getGitStatusRaw();
    }
    async getGitLineBlameWithRelativePath(e, t, n) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getGitLineBlame(e, t, n);
    }
    async getGitLineBlameWithAbsolutePath(e, t, n) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        const i = this._workspaceContextService.asRelativePath(Ee.file(e));
        return this.getGitLineBlameWithRelativePath(i, t, n);
    }
    async getGitFileBlameWithRelativePath(e, t, n) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getGitFileBlame(e, t, n);
    }
    async getGitFileLineBlameWithRelativePath(e, t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getGitFileLineBlame(e, t);
    }
    async getGitFileLineBlameWithAbsolutePath(e, t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        const n = this._workspaceContextService.asRelativePath(Ee.file(e));
        return this.getGitFileLineBlameWithRelativePath(n, t);
    }
    async getGitUpstreamURL(e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getGitUpstreamURL(e);
    }
    async getFileContentAtRef(e, t, n) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getFileContentAtRef(e, t, n);
    }
    async getFileContentForDiffScope(e) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.getFileContentForDiffScope(e);
    }
    async getCommitRawByCommitHash(e, t, n, i, r) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getCommitRawByCommitHash(e, t, n, i, r);
    }
    async getCommitDetails(e, t, n, i) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getCommitDetails(e, t, n, i);
    }
    async createWorktree(e, t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.createWorktree(e, t);
    }
    async createWorktreeWithBranch(e) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.createWorktreeWithBranch(e);
    }
    async stageFiles(e) {
        if (e.filePaths.length !== 0) {
            if (!this._gitContextprovider) throw new Error("No git context provider registered");
            return await this._gitContextprovider.stageFiles(e);
        }
    }
    async unstageFiles(e) {
        if (e.filePaths.length !== 0) {
            if (!this._gitContextprovider) throw new Error("No git context provider registered");
            return await this._gitContextprovider.unstageFiles(e);
        }
    }
    async unstageAllChanges(e) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.unstageAllChanges(e);
    }
    async restoreFiles(e) {
        if (e.filePaths.length !== 0) {
            if (!this._gitContextprovider) throw new Error("No git context provider registered");
            return await this._gitContextprovider.restoreFiles(e);
        }
    }
    async restoreStagedAndWorkingFiles(e) {
        if (e.filePaths.length !== 0) {
            if (!this._gitContextprovider) throw new Error("No git context provider registered");
            return await this._gitContextprovider.restoreStagedAndWorkingFiles(e);
        }
    }
    async hardReset(e) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.hardReset(e);
    }
    async resolveSubmoduleCommitShas(e) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.resolveSubmoduleCommitShas(e);
    }
    async getRevListCount(e) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.getRevListCount(e);
    }
    async getMergedInTips(e) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.getMergedInTips(e);
    }
    async generateWorktreePath() {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.generateUniqueWorktreePath();
    }
    async removeWorktree(e, t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.removeWorktree(e, t);
    }
    async stageAllChanges(e) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.stageAllChanges(e);
    }
    async commitChanges(e, t) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.commitChanges(e, t);
    }
    async pushBranch(e, t, n) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.pushBranch(e, t, n);
    }
    async getFilenamesInCommit(e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getFilenamesInCommit(e);
    }
    async getFilesChangedSinceCommit(e, t, n) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.getFilesChangedSinceCommit(e, t, n);
    }
    async getCurrentBranch(e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getCurrentBranch(e);
    }
    async hasUnpushedCommits(e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.hasUnpushedCommits(e);
    }
    async getClosestRemoteRef(e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getClosestRemoteRef(e);
    }
    async getDefaultBranch(e) {
        if (!this._gitContextprovider) try {
            await this.waitForGitContextProvider(1e4);
        } catch  {
            return;
        }
        return await this._gitContextprovider?.getDefaultBranch(e);
    }
    async getGitUser(e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getGitUser(e);
    }
    async getAllBranchNames(e) {
        if (!this._gitContextprovider) try {
            await this.waitForGitContextProvider(1e4);
        } catch  {
            return;
        }
        return await this._gitContextprovider?.getAllBranchNames(e);
    }
    async getRemoteNames(e) {
        if (!this._gitContextprovider) try {
            await this.waitForGitContextProvider(1e4);
        } catch  {
            return;
        }
        return await this._gitContextprovider?.getRemoteNames(e);
    }
    async createAndCheckoutBranch(e) {
        if (!this._gitContextprovider) try {
            await this.waitForGitContextProvider(1e4);
        } catch  {
            return {
                status: "failed"
            };
        }
        return await this._gitContextprovider?.createAndCheckoutBranch(e) ?? {
            status: "failed"
        };
    }
    async getBranchDivergenceStatus(e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getBranchDivergenceStatus(e);
    }
    async getUserCommits(e, t) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getUserCommits(e, t);
    }
    async getMergeBase(e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getMergeBase(e);
    }
    async revertFile(e, t, n) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.revertFile(e, t, n);
    }
    async getUntrackedFiles(e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getUntrackedFiles(e);
    }
    async areFilesCheckedInToRemote(e) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.areFilesCheckedInToRemote(e);
    }
    async getBranchPullRequests(e) {
        if (!this._gitContextprovider) throw new Error("No full commit provider registered");
        return await this._gitContextprovider.getBranchPullRequests(e);
    }
    async gitFetch(e) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.gitFetch(e);
    }
    async generateAndApplyPatch(e, t, n) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.generateAndApplyPatch(e, t, n);
    }
    async executeGitCommand(e, t, n) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.executeGitCommand(e, t, n);
    }
    async createTempIndexFile() {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.createTempIndexFile();
    }
    async deleteTempIndexFile(e) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.deleteTempIndexFile(e);
    }
    async getGitTelemetryAttributes(e) {
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.getGitTelemetryAttributes(e);
    }
    async getGitProcessStats() {
        return this._gitContextprovider?.getGitProcessStats ? await this._gitContextprovider.getGitProcessStats() : {
            spawnedGitProcessCount: 0,
            runningGitProcessCount: 0
        };
    }
    async areIgnored(e) {
        if (this._extensionIsolationEnabled) {
            if (!this._gitIgnoreProvider) throw new Error("No git ignore provider registered");
            return await this._gitIgnoreProvider.areIgnored(e);
        }
        if (!this._gitContextprovider) throw new Error("No git context provider registered");
        return await this._gitContextprovider.areIgnored(e);
    }
    async isGithubRepo() {
        return this._gitContextprovider ? await this._gitContextprovider.isGithubRepo() : !1;
    }
}, yWi = ie([
    C(0, Jn),
    C(1, Id),
    C(2, FJe)
], yWi), mn(kk, yWi, 1);

}
