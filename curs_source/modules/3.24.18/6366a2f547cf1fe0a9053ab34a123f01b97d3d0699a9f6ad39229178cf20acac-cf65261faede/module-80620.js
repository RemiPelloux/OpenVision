require.d(exports, {
    createIdeGrepSessionOverrides: ()=>u
});
var o = require(91398), n = require(91105), i = require(59903), s = require(68388), a = require(65716);
class c {
    constructor(e, t, r = 5e3){
        this.ignoreService = e, this.provider = t, this.trackedStateTimeoutMs = r, this.worktreeGuardByRootsKey = new Map;
    }
    setWorktreeGuardInfo(e, t) {
        const r = this.getRootsKey(e);
        void 0 !== t ? this.worktreeGuardByRootsKey.set(r, t) : this.worktreeGuardByRootsKey.delete(r);
    }
    getWorktreeGuardInfo(e) {
        return this.worktreeGuardByRootsKey.get(this.getRootsKey(e));
    }
    getRootsKey(e) {
        return e.slice().sort().join("|");
    }
    async executeIndexedGrep(e, t, r) {
        const o = await this.provider();
        if (void 0 === o) return;
        if (r.type || !0 === r.multiline || "count" === (r.outputMode ?? "content")) return;
        const n = r.sort ?? "modified";
        if (!0 === r.sortAscending || "modified" !== n && "none" !== n) return;
        const i = this.getWorktreeGuardInfo(t);
        if ((0, s.fl)({
            targetPath: r.path,
            workspacePaths: t,
            mainWorktreePath: i?.mainWorktreePath
        })) throw new Error(s.PS);
        const a = r.outputMode ?? "content", c = {
            path: r.path,
            context: r.context,
            contextBefore: r.contextBefore,
            contextAfter: r.contextAfter,
            literal: !1,
            caseInsensitive: r.caseInsensitive,
            multiline: r.multiline,
            sort: "none" === n ? void 0 : n,
            includes: void 0 !== r.glob ? [
                r.glob
            ] : void 0,
            excludes: void 0
        };
        try {
            if (await this.hasCursorIgnoreNegation()) return;
            return "content" === a ? await this.executeContentMode(o, t, r.pattern, c) : "files_with_matches" === a ? await this.executeFilesMode(o, t, r.pattern, c) : void 0;
        } catch  {
            return;
        }
    }
    async executeContentMode(e, t, r, o) {
        const a = await e.queryContent(t, r, o);
        if (null === a) return;
        const c = {};
        for (const [e, t] of Object.entries(a)){
            if (t.truncated) return;
            const r = [];
            let o = t.totalLines, a = t.totalMatchedLines;
            for (const c of t.byFile){
                const t = c.matches ?? [], u = await (0, n.yeE)((0, s.o1)(c.file, e));
                if (null !== u && await this.ignoreService.isGitIgnored(u)) return;
                if (null === u || await this.isIndexedResultBlocked(u)) {
                    o -= t.length, a -= t.filter((e)=>!e.isContextLine).length;
                    continue;
                }
                const l = new i.uI({
                    file: c.file,
                    matches: t.map((e)=>new i.dx({
                            lineNumber: e.lineNumber,
                            content: e.content,
                            isContextLine: e.isContextLine
                        }))
                });
                r.push(l);
            }
            const u = new i.Zp({
                matches: r,
                totalLines: o,
                totalMatchedLines: a,
                clientTruncated: t.truncated
            });
            c[e] = new i.vD({
                result: {
                    case: "content",
                    value: u
                }
            });
        }
        return c;
    }
    async executeFilesMode(e, t, r, o) {
        const a = await e.queryContent(t, r, {
            ...o,
            mode: "files_only"
        });
        if (null === a) return;
        const c = {};
        for (const [e, t] of Object.entries(a)){
            if (t.truncated) return;
            const r = [];
            let o = 0;
            for (const i of t.byFile){
                const t = await (0, n.yeE)((0, s.o1)(i.file, e));
                if (null !== t && await this.ignoreService.isGitIgnored(t)) return;
                null === t || await this.isIndexedResultBlocked(t) ? o++ : r.push(i.file);
            }
            const a = new i.T7({
                files: r,
                totalFiles: t.totalFiles - o,
                clientTruncated: t.truncated
            });
            c[e] = new i.vD({
                result: {
                    case: "files",
                    value: a
                }
            });
        }
        return c;
    }
    async isIndexedResultBlocked(e) {
        const [t, r] = await Promise.all([
            this.ignoreService.isCursorIgnored(e),
            this.ignoreService.isRepoBlocked(e)
        ]);
        return t || r;
    }
    async hasCursorIgnoreNegation() {
        const e = await this.ignoreService.getCursorIgnoreMapping?.();
        if (void 0 === e) return !1;
        for (const t of Object.values(e))if (t.some((e)=>e.startsWith("!"))) return !0;
        return !1;
    }
    async getTrackedState(e) {
        const t = this.provider();
        if (void 0 !== t) try {
            const r = await (0, a.wj)(Promise.resolve(t.getTrackedState(e)), this.trackedStateTimeoutMs);
            if (null === r) return;
            const o = {};
            for (const [e, t] of Object.entries(r))o[e] = {
                gitStatus: t.gitStatus,
                gitBranchName: t.gitBranchName
            };
            return o;
        } catch  {
            return;
        }
    }
}
function u(e) {
    const t = new c(e.ignoreService, ()=>o.cursor.getGrepProvider()), r = [
        ...e.workspacePaths
    ];
    return t.setWorktreeGuardInfo(r, e.worktreeMainPath ? {
        mainWorktreePath: e.worktreeMainPath
    } : void 0), {
        overrides: {
            grepProvider: t,
            ...e.worktreeMainPath ? {
                worktreeMainPath: e.worktreeMainPath
            } : {}
        }
    };
}
