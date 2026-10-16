import { Trt, t9 } from "./lru-cache.ts";
import { h } from "./tslib.es6.js";
import { ul } from "./types_2.ts";
var n9, Bve, Gve, Vve, Ss, $ve, jve;
export { $ve, Bve, Gve, Ss, Vve, jve, n9 };
var __wakaru_krt_initialized = false;
export function krt() {
if (__wakaru_krt_initialized) return;
__wakaru_krt_initialized = true;
"use strict";
h(), ul(), Trt(), n9 = 1024 * 1024, Bve = 10080 * 60 * 1e3, Gve = 1e4, Vve = 500, Ss = 900, $ve = 5e3, jve = class {
    constructor(e, t, n){
        if (this.transactionQueue = Promise.resolve(), this.isClosing = !1, !e) throw new Error("SqliteAdapter is required. This package has no SQLite dependencies - you must provide an adapter.");
        this.adapter = e, this.dbPath = t, this.hashCache = new t9(n?.hashCacheSize ?? Gve), this.scoredCommitsCache = new t9(n?.scoredCommitsCacheSize ?? Vve);
    }
    async runExclusiveTransactionSection(e) {
        if (this.isClosing) throw new Error("AiCodeTrackingStorage is closing");
        const t = this.transactionQueue;
        let n = ()=>{};
        this.transactionQueue = new Promise((r)=>{
            n = r;
        }), await t;
        try {
            return await e();
        } finally{
            n();
        }
    }
    async withTransaction(e) {
        if (this.isClosing) throw new Error("AiCodeTrackingStorage is closing");
        this.db || await this.initialize();
        const t = this.db;
        return this.runExclusiveTransactionSection(async ()=>{
            let n = !1;
            try {
                await t.run("BEGIN TRANSACTION"), n = !0;
                const r = await e(t);
                return await t.run("COMMIT"), r;
            } catch (r) {
                if (n) try {
                    await t.run("ROLLBACK");
                } catch  {}
                throw r;
            }
        });
    }
    async initialize() {
        if (this.db) return;
        this.db = await this.adapter.openDatabase(this.dbPath), await this.db.run(`
      CREATE TABLE IF NOT EXISTS ai_code_hashes (
        hash TEXT PRIMARY KEY,
        source TEXT NOT NULL,
        fileExtension TEXT,
        fileName TEXT,
        requestId TEXT,
        conversationId TEXT,
        timestamp INTEGER,
        model TEXT,
        createdAt INTEGER NOT NULL
      )
    `);
        try {
            await this.db.run(`
        ALTER TABLE ai_code_hashes ADD COLUMN model TEXT
      `);
        } catch  {}
        await this.db.run(`
      CREATE INDEX IF NOT EXISTS idx_ai_code_hashes_createdAt
      ON ai_code_hashes(createdAt)
    `), await this.db.run(`
      CREATE TABLE IF NOT EXISTS scored_commits (
        commitHash TEXT NOT NULL,
        branchName TEXT NOT NULL,
        scoredAt INTEGER NOT NULL,
        PRIMARY KEY (commitHash, branchName)
      )
    `);
        const e = [
            "linesAdded INTEGER",
            "linesDeleted INTEGER",
            "tabLinesAdded INTEGER",
            "tabLinesDeleted INTEGER",
            "composerLinesAdded INTEGER",
            "composerLinesDeleted INTEGER",
            "humanLinesAdded INTEGER",
            "humanLinesDeleted INTEGER",
            "blankLinesAdded INTEGER",
            "blankLinesDeleted INTEGER",
            "commitMessage TEXT",
            "commitDate TEXT",
            "v1AiPercentage TEXT",
            "v2AiPercentage TEXT"
        ];
        for (const n of e)try {
            await this.db.run(`ALTER TABLE scored_commits ADD COLUMN ${n}`);
        } catch  {}
        await this.db.run(`
      CREATE INDEX IF NOT EXISTS idx_scored_commits_scoredAt
      ON scored_commits(scoredAt)
    `), await this.db.run(`
      CREATE TABLE IF NOT EXISTS tracking_state (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL
      )
    `), await this.db.run(`
      CREATE TABLE IF NOT EXISTS conversation_summaries (
        conversationId TEXT PRIMARY KEY,
        title TEXT,
        tldr TEXT,
        overview TEXT,
        summaryBullets TEXT,
        model TEXT,
        mode TEXT,
        updatedAt INTEGER NOT NULL
      )
    `), await this.db.run(`
      CREATE INDEX IF NOT EXISTS idx_conversation_summaries_updatedAt
      ON conversation_summaries(updatedAt)
    `), await this.db.run(`
      CREATE TABLE IF NOT EXISTS tracked_file_content (
        gitPath TEXT PRIMARY KEY,
        content TEXT NOT NULL,
        conversationId TEXT,
        model TEXT,
        fileExtension TEXT,
        createdAt INTEGER NOT NULL
      )
    `), await this.db.run(`
      CREATE INDEX IF NOT EXISTS idx_tracked_file_content_createdAt
      ON tracked_file_content(createdAt)
    `), await this.db.run(`
      CREATE TABLE IF NOT EXISTS ai_deleted_files (
        gitPath TEXT NOT NULL,
        composerId TEXT,
        conversationId TEXT,
        model TEXT,
        deletedAt INTEGER NOT NULL,
        PRIMARY KEY (gitPath, deletedAt)
      )
    `), await this.db.run(`
      CREATE INDEX IF NOT EXISTS idx_ai_deleted_files_deletedAt
      ON ai_deleted_files(deletedAt)
    `);
        const t = Date.now() - Bve;
        await this.db.run("DELETE FROM tracked_file_content WHERE createdAt < ?", [
            t
        ]), await this.db.run("DELETE FROM ai_deleted_files WHERE deletedAt < ?", [
            t
        ]);
    }
    async storeHashes(e) {
        if (this.db || await this.initialize(), e.length === 0) return;
        const t = Date.now(), n = `
      INSERT OR REPLACE INTO ai_code_hashes
      (hash, source, fileExtension, fileName, requestId, conversationId, timestamp, model, createdAt)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
        await this.withTransaction(async (r)=>{
            for (const { hash: s, metadata: i } of e){
                let a = i.conversationId ?? null;
                i.source === "tab" && a && (console.warn(`[AiCodeTracking] Attempted to store TAB source with conversationId for hash ${s}. Clearing conversationId to prevent data corruption.`), a = null), await r.run(n, [
                    s,
                    i.source,
                    i.fileExtension ?? null,
                    i.fileName ?? null,
                    i.requestId ?? null,
                    a,
                    i.timestamp ?? null,
                    i.model ?? null,
                    t
                ]);
            }
        });
        for (const { hash: r, metadata: s } of e){
            const i = s.source === "tab" && s.conversationId ? {
                ...s,
                conversationId: void 0
            } : s;
            this.hashCache.set(r, i);
        }
    }
    async storeHash(e, t) {
        return this.storeHashes([
            {
                hash: e,
                metadata: t
            }
        ]);
    }
    async recordAiDeletedFile(e, t) {
        this.db || await this.initialize();
        const n = Date.now();
        await this.db.run("INSERT OR IGNORE INTO ai_deleted_files (gitPath, composerId, conversationId, model, deletedAt) VALUES (?, ?, ?, ?, ?)", [
            e,
            t?.composerId ?? null,
            t?.conversationId ?? null,
            t?.model ?? null,
            n
        ]);
    }
    async getAiDeletedFiles(e, t) {
        if (!this.db || e.length === 0) return new Set;
        const n = e.map(()=>"?").join(","), r = [
            ...e
        ];
        let s = `SELECT DISTINCT gitPath FROM ai_deleted_files WHERE gitPath IN (${n})`;
        t !== void 0 && (s += " AND deletedAt <= ?", r.push(t));
        const i = await this.db.all(s, r);
        return new Set(i.map((a)=>a.gitPath));
    }
    async getHashes(e, t) {
        if (this.db || await this.initialize(), e.length === 0) return {};
        const n = {}, r = [], s = t?.minCreatedAt === void 0 && t?.maxCreatedAt === void 0;
        if (s) for (const i of e){
            const a = this.hashCache.get(i);
            a !== void 0 ? a !== null && (n[i] = a) : r.push(i);
        }
        else for (const i of e)r.push(i);
        if (r.length > 0) {
            const i = this.db, a = new Set, o = t?.minCreatedAt !== void 0, l = t?.maxCreatedAt !== void 0, d = (o ? 1 : 0) + (l ? 1 : 0), u = Ss - d;
            for(let m = 0; m < r.length; m += u){
                const f = r.slice(m, m + u);
                let T = `SELECT * FROM ai_code_hashes WHERE hash IN (${f.map(()=>"?").join(",")})`;
                const S = [
                    ...f
                ];
                o && (T += " AND createdAt >= ?", S.push(t.minCreatedAt)), l && (T += " AND createdAt <= ?", S.push(t.maxCreatedAt)), T += " ORDER BY source != 'human' DESC, source = 'composer' DESC, model IS NULL, createdAt DESC";
                const k = await i.all(T, S), y = new Set, b = new Map;
                for (const I of k){
                    if (b.has(I.hash) && b.get(I.hash) !== I.source && console.warn(`[AiCodeTracking] Hash collision detected for hash ${I.hash}: found both ${b.get(I.hash)} and ${I.source} sources. Preferring AI sources over HUMAN, then COMPOSER over TAB.`), y.has(I.hash)) continue;
                    b.set(I.hash, I.source);
                    let G = I.conversationId ?? void 0;
                    I.source === "tab" && G && (console.warn(`[AiCodeTracking] Found TAB source with conversationId for hash ${I.hash}. This may indicate a hash collision or data corruption. Clearing conversationId.`), G = void 0);
                    const U = {
                        source: I.source,
                        fileExtension: I.fileExtension ?? void 0,
                        fileName: I.fileName ?? void 0,
                        requestId: I.requestId ?? void 0,
                        conversationId: G,
                        timestamp: I.timestamp ?? void 0,
                        model: I.model ?? void 0
                    };
                    n[I.hash] = U, a.add(I.hash), y.add(I.hash), this.hashCache.set(I.hash, U);
                }
            }
            if (s) for (const m of r)a.has(m) || this.hashCache.set(m, null);
        }
        return n;
    }
    async getHash(e) {
        return (await this.getHashes([
            e
        ]))[e];
    }
    async hasHashes(e) {
        if (this.db || await this.initialize(), e.length === 0) return [];
        const t = this.db, n = [];
        for(let r = 0; r < e.length; r += Ss){
            const s = e.slice(r, r + Ss), i = s.map(()=>"?").join(","), a = await t.all(`SELECT hash FROM ai_code_hashes WHERE hash IN (${i})`, s);
            n.push(...a.map((o)=>o.hash));
        }
        return n;
    }
    async hasHash(e) {
        return (await this.hasHashes([
            e
        ])).includes(e);
    }
    async markCommitsScored(e) {
        if (this.db || await this.initialize(), e.length === 0) return;
        const t = Date.now(), n = `
      INSERT OR REPLACE INTO scored_commits (
        commitHash, branchName, scoredAt,
        linesAdded, linesDeleted,
        tabLinesAdded, tabLinesDeleted,
        composerLinesAdded, composerLinesDeleted,
        humanLinesAdded, humanLinesDeleted,
        blankLinesAdded, blankLinesDeleted,
        commitMessage, commitDate,
        v1AiPercentage, v2AiPercentage
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
        await this.withTransaction(async (r)=>{
            for (const { commitHash: s, branchName: i, scoreData: a } of e)await r.run(n, [
                s,
                i,
                t,
                a?.linesAdded ?? null,
                a?.linesDeleted ?? null,
                a?.tabLinesAdded ?? null,
                a?.tabLinesDeleted ?? null,
                a?.composerLinesAdded ?? null,
                a?.composerLinesDeleted ?? null,
                a?.humanLinesAdded ?? null,
                a?.humanLinesDeleted ?? null,
                a?.blankLinesAdded ?? null,
                a?.blankLinesDeleted ?? null,
                a?.commitMessage ?? null,
                a?.commitDate ?? null,
                a?.v1AiPercentage ?? null,
                a?.v2AiPercentage ?? null
            ]);
        });
        for (const { commitHash: r, branchName: s } of e)this.scoredCommitsCache.set(`${r}:${s}`, !0);
    }
    async markCommitScored(e, t, n) {
        return this.markCommitsScored([
            {
                commitHash: e,
                branchName: t,
                scoreData: n
            }
        ]);
    }
    async areCommitsScored(e) {
        if (this.db || await this.initialize(), e.length === 0) return [];
        const t = [], n = [];
        for (const { commitHash: r, branchName: s } of e){
            const i = `${r}:${s}`;
            this.scoredCommitsCache.has(i) ? this.scoredCommitsCache.get(i) && t.push(i) : n.push({
                commitHash: r,
                branchName: s
            });
        }
        if (n.length > 0) {
            const r = this.db, s = new Set, i = Math.floor(Ss / 2);
            for(let a = 0; a < n.length; a += i){
                const o = n.slice(a, a + i), l = o.map(()=>"(commitHash = ? AND branchName = ?)").join(" OR "), d = o.flatMap((m)=>[
                        m.commitHash,
                        m.branchName
                    ]), u = await r.all(`SELECT commitHash, branchName FROM scored_commits WHERE ${l}`, d);
                for (const m of u){
                    const f = `${m.commitHash}:${m.branchName}`;
                    t.push(f), s.add(f), this.scoredCommitsCache.set(f, !0);
                }
            }
            for (const { commitHash: a, branchName: o } of n){
                const l = `${a}:${o}`;
                s.has(l) || this.scoredCommitsCache.set(l, !1);
            }
        }
        return t;
    }
    async isCommitScored(e, t) {
        return (await this.areCommitsScored([
            {
                commitHash: e,
                branchName: t
            }
        ])).includes(`${e}:${t}`);
    }
    async getTrackingStartTime() {
        if (this.trackingStartTimeCache !== void 0) return this.trackingStartTimeCache;
        this.db || await this.initialize();
        const t = await this.db.get("SELECT value FROM tracking_state WHERE key = ?", [
            "trackingStartTime"
        ]);
        if (t) try {
            const n = JSON.parse(t.value);
            return typeof n.timestamp == "number" ? (this.trackingStartTimeCache = n.timestamp, n.timestamp) : void 0;
        } catch  {
            return;
        }
    }
    async setTrackingStartTime(e) {
        this.db || await this.initialize(), await this.db.run("INSERT OR REPLACE INTO tracking_state (key, value) VALUES (?, ?)", [
            "trackingStartTime",
            JSON.stringify({
                timestamp: e
            })
        ]), this.trackingStartTimeCache = e;
    }
    async getOrCreateAllAiTrackingStartTime(e) {
        if (this.allAiTrackingStartTimeCache !== void 0) return this.allAiTrackingStartTimeCache;
        this.db || await this.initialize(), await this.db.run("INSERT OR IGNORE INTO tracking_state (key, value) VALUES (?, ?)", [
            "allAiTrackingStartTime",
            JSON.stringify({
                timestamp: e
            })
        ]);
        const t = await this.db.get("SELECT value FROM tracking_state WHERE key = ?", [
            "allAiTrackingStartTime"
        ]);
        if (!t) throw new Error("Failed to initialize all-AI tracking start time");
        try {
            const n = JSON.parse(t.value);
            if (typeof n == "object" && n !== null && "timestamp" in n && typeof n.timestamp == "number") return this.allAiTrackingStartTimeCache = n.timestamp, n.timestamp;
        } catch  {}
        throw new Error("Invalid all-AI tracking start time");
    }
    async deleteHashesBefore(e) {
        this.db || await this.initialize();
        const t = this.db, r = (await t.get("SELECT COUNT(*) as count FROM ai_code_hashes WHERE createdAt < ?", [
            e
        ]))?.count ?? 0;
        return r > 0 && (await t.run("DELETE FROM ai_code_hashes WHERE createdAt < ?", [
            e
        ]), this.hashCache.clear()), r;
    }
    async getLastScoredCommitTime() {
        return this.db || await this.initialize(), (await this.db.get("SELECT MAX(scoredAt) as maxScoredAt FROM scored_commits"))?.maxScoredAt ?? void 0;
    }
    async getStats() {
        this.db || await this.initialize();
        const e = this.db, t = await e.get("SELECT COUNT(*) as count, MIN(createdAt) as oldest, MAX(createdAt) as newest FROM ai_code_hashes"), n = await e.get("SELECT COUNT(*) as count FROM scored_commits");
        return {
            hashCount: t?.count ?? 0,
            scoredCommitCount: n?.count ?? 0,
            oldestHashCreatedAt: t?.oldest ?? void 0,
            newestHashCreatedAt: t?.newest ?? void 0
        };
    }
    clearCaches() {
        this.hashCache.clear(), this.scoredCommitsCache.clear(), this.trackingStartTimeCache = void 0, this.allAiTrackingStartTimeCache = void 0;
    }
    getCacheStats() {
        return {
            hashCacheSize: this.hashCache.size,
            scoredCommitsCacheSize: this.scoredCommitsCache.size,
            trackingStartTimeCached: this.trackingStartTimeCache !== void 0
        };
    }
    async storeConversationSummary(e) {
        this.db || await this.initialize();
        const t = e.updatedAt ?? Date.now();
        await this.db.run(`INSERT OR REPLACE INTO conversation_summaries
       (conversationId, title, tldr, overview, summaryBullets, model, mode, updatedAt)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [
            e.conversationId,
            e.title ?? null,
            e.tldr ?? null,
            e.overview ?? null,
            JSON.stringify(e.summaryBullets ?? []),
            e.model ?? null,
            e.mode ?? null,
            t
        ]);
    }
    async storeConversationSummaries(e) {
        if (this.db || await this.initialize(), e.length === 0) return;
        const t = Date.now();
        await this.withTransaction(async (n)=>{
            for (const r of e){
                const s = r.updatedAt ?? t;
                await n.run(`INSERT OR REPLACE INTO conversation_summaries
           (conversationId, title, tldr, overview, summaryBullets, model, mode, updatedAt)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [
                    r.conversationId,
                    r.title ?? null,
                    r.tldr ?? null,
                    r.overview ?? null,
                    JSON.stringify(r.summaryBullets ?? []),
                    r.model ?? null,
                    r.mode ?? null,
                    s
                ]);
            }
        });
    }
    async getConversationSummaryTimestamps(e) {
        if (this.db || await this.initialize(), e.length === 0) return {};
        const t = this.db, n = {};
        for(let r = 0; r < e.length; r += Ss){
            const s = e.slice(r, r + Ss), i = s.map(()=>"?").join(","), a = await t.all(`SELECT conversationId, updatedAt FROM conversation_summaries WHERE conversationId IN (${i})`, s);
            for (const o of a)n[o.conversationId] = o.updatedAt;
        }
        return n;
    }
    async getConversationSummaries(e) {
        if (this.db || await this.initialize(), e.length === 0) return {};
        const t = this.db, n = {};
        for(let r = 0; r < e.length; r += Ss){
            const s = e.slice(r, r + Ss), i = s.map(()=>"?").join(","), a = await t.all(`SELECT * FROM conversation_summaries WHERE conversationId IN (${i})`, s);
            for (const o of a){
                let l = [];
                if (o.summaryBullets) try {
                    const d = JSON.parse(o.summaryBullets);
                    l = Array.isArray(d) ? d : [];
                } catch  {
                    l = [];
                }
                n[o.conversationId] = {
                    conversationId: o.conversationId,
                    title: o.title,
                    tldr: o.tldr,
                    overview: o.overview,
                    summaryBullets: l,
                    model: o.model,
                    mode: o.mode,
                    updatedAt: o.updatedAt
                };
            }
        }
        return n;
    }
    async getConversationSummary(e) {
        return (await this.getConversationSummaries([
            e
        ]))[e];
    }
    async storeTrackedFileContent(e, t, n) {
        if (this.db || await this.initialize(), t.length > n9) return;
        const r = this.db, s = Date.now();
        await r.run(`INSERT OR REPLACE INTO tracked_file_content
       (gitPath, content, conversationId, model, fileExtension, createdAt)
       VALUES (?, ?, ?, ?, ?, ?)`, [
            e,
            t,
            n.conversationId ?? null,
            n.model ?? null,
            n.fileExtension ?? null,
            s
        ]);
    }
    async storeTrackedFileContents(e) {
        this.db || await this.initialize();
        const t = e.filter((r)=>r.content.length <= n9);
        if (t.length === 0) return;
        const n = Date.now();
        await this.withTransaction(async (r)=>{
            for (const { gitPath: s, content: i, metadata: a } of t)await r.run(`INSERT OR REPLACE INTO tracked_file_content
           (gitPath, content, conversationId, model, fileExtension, createdAt)
           VALUES (?, ?, ?, ?, ?, ?)`, [
                s,
                i,
                a.conversationId ?? null,
                a.model ?? null,
                a.fileExtension ?? null,
                n
            ]);
        });
    }
    async getTrackedFileContents(e) {
        if (this.db || await this.initialize(), e.length === 0) return {};
        const t = this.db, n = {};
        for(let r = 0; r < e.length; r += Ss){
            const s = e.slice(r, r + Ss), i = s.map(()=>"?").join(","), a = await t.all(`SELECT * FROM tracked_file_content WHERE gitPath IN (${i})`, s);
            for (const o of a)n[o.gitPath] = {
                gitPath: o.gitPath,
                content: o.content,
                conversationId: o.conversationId,
                model: o.model,
                fileExtension: o.fileExtension,
                createdAt: o.createdAt
            };
        }
        return n;
    }
    async getTrackedFileContent(e) {
        return (await this.getTrackedFileContents([
            e
        ]))[e];
    }
    async deleteTrackedFileContents(e) {
        if (this.db || await this.initialize(), e.length === 0) return;
        const t = this.db;
        for(let n = 0; n < e.length; n += Ss){
            const r = e.slice(n, n + Ss), s = r.map(()=>"?").join(",");
            await t.run(`DELETE FROM tracked_file_content WHERE gitPath IN (${s})`, r);
        }
    }
    async deleteTrackedFileContentBefore(e) {
        this.db || await this.initialize();
        const t = this.db, r = (await t.get("SELECT COUNT(*) as count FROM tracked_file_content WHERE createdAt < ?", [
            e
        ]))?.count ?? 0;
        return r > 0 && await t.run("DELETE FROM tracked_file_content WHERE createdAt < ?", [
            e
        ]), r;
    }
    async getTrackedFilePathsForConversation(e) {
        return this.db || await this.initialize(), (await this.db.all("SELECT gitPath FROM tracked_file_content WHERE conversationId = ?", [
            e
        ])).map((r)=>r.gitPath);
    }
    async close() {
        this.isClosing = !0, await Promise.race([
            this.transactionQueue.catch(()=>{}),
            new Promise((e)=>setTimeout(e, $ve))
        ]), this.clearCaches(), this.db && (await this.db.close(), this.db = void 0);
    }
};

}
