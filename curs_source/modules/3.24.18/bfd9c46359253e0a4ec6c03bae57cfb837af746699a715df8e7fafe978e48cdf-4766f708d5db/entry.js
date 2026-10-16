var __webpack_exports__ = {};
(()=>{
    "use strict";
    require.r(__webpack_exports__), require.d(__webpack_exports__, {
        activate: ()=>Vu,
        activateCursorAgentRuntime: ()=>Gu,
        deactivate: ()=>Yu,
        deactivateCursorAgentRuntime: ()=>zu,
        registerAgentExecProviderDuringActivation: ()=>wu
    });
    var e = require("./module-27998.js");
    const t = "cursor-agent-exec.mountAgentStore", r = "cursor-agent-exec.resolveAgentStoreReferences", n = "cursor-agent-exec.resolveAgentStoreScopePaths", s = "cursor-agent-exec.syncAgentStorePath", o = "cursor-agent-exec.refreshAgentStorePeerPaths", i = "cursor-agent-exec.getMountedAgentStores", a = "cursor-agent-exec.getAgentStoreSkillRoots", c = "cursor-agent-exec.getAgentStoreSkillTargetDirs", l = "cursor-agent-exec.refreshUserAgentStoreSkillsSyncSetting", u = "cursor.skillStore.agentStoreSkillTargetDirsChanged", d = "cursor-agent-exec.applySubagentAgentStoreMounts", p = "cursor-agent-exec.clearSubagentAgentStoreMounts", m = "cursor-agent-exec.flushAgentStoreForSubagent";
    var h = require("./module-98875.js"), f = require("./module-33002.js"), g = require("./module-37949.js"), y = require("./module-76849.js"), w = require("./module-31421.js"), v = require("./module-76760.js"), _ = require("./module-10493.js"), b = require("./module-95339.js");
    const S = {
        BadConfigFile: "BadConfigFile",
        AuthenticationFailed: "AuthenticationFailed",
        NoUserNameConfigured: "NoUserNameConfigured",
        NoUserEmailConfigured: "NoUserEmailConfigured",
        NoRemoteRepositorySpecified: "NoRemoteRepositorySpecified",
        NotAGitRepository: "NotAGitRepository",
        NotAtRepositoryRoot: "NotAtRepositoryRoot",
        Conflict: "Conflict",
        StashConflict: "StashConflict",
        UnmergedChanges: "UnmergedChanges",
        PushRejected: "PushRejected",
        ForcePushWithLeaseRejected: "ForcePushWithLeaseRejected",
        ForcePushWithLeaseIfIncludesRejected: "ForcePushWithLeaseIfIncludesRejected",
        RemoteConnectionError: "RemoteConnectionError",
        DirtyWorkTree: "DirtyWorkTree",
        CantOpenResource: "CantOpenResource",
        GitNotFound: "GitNotFound",
        CantCreatePipe: "CantCreatePipe",
        PermissionDenied: "PermissionDenied",
        CantAccessRemote: "CantAccessRemote",
        RepositoryNotFound: "RepositoryNotFound",
        RepositoryIsLocked: "RepositoryIsLocked",
        BranchNotFullyMerged: "BranchNotFullyMerged",
        NoRemoteReference: "NoRemoteReference",
        InvalidBranchName: "InvalidBranchName",
        BranchAlreadyExists: "BranchAlreadyExists",
        NoLocalChanges: "NoLocalChanges",
        NoStashFound: "NoStashFound",
        LocalChangesOverwritten: "LocalChangesOverwritten",
        NoUpstreamBranch: "NoUpstreamBranch",
        IsInSubmodule: "IsInSubmodule",
        WrongCase: "WrongCase",
        CantLockRef: "CantLockRef",
        CantRebaseMultipleBranches: "CantRebaseMultipleBranches",
        PatchDoesNotApply: "PatchDoesNotApply",
        NoPathFound: "NoPathFound",
        UnknownPath: "UnknownPath",
        EmptyCommitMessage: "EmptyCommitMessage",
        BranchFastForwardRejected: "BranchFastForwardRejected",
        BranchNotYetBorn: "BranchNotYetBorn",
        TagConflict: "TagConflict",
        CherryPickEmpty: "CherryPickEmpty",
        CherryPickConflict: "CherryPickConflict",
        WorktreeContainsChanges: "WorktreeContainsChanges",
        WorktreeAlreadyExists: "WorktreeAlreadyExists",
        WorktreeBranchAlreadyUsed: "WorktreeBranchAlreadyUsed"
    };
    class k extends Error {
        constructor(e){
            super(e.error?.message || e.message || "Git error"), this.error = e.error, this.stdout = e.stdout, this.stderr = e.stderr, this.exitCode = e.exitCode, this.gitErrorCode = e.gitErrorCode, this.gitCommand = e.gitCommand, this.gitArgs = e.gitArgs;
        }
        toString() {
            let e = this.message + " " + JSON.stringify({
                exitCode: this.exitCode,
                gitErrorCode: this.gitErrorCode,
                gitCommand: this.gitCommand,
                stdout: this.stdout,
                stderr: this.stderr
            }, null, 2);
            return this.error && (e += this.error.stack), (0, b.ix)(e);
        }
    }
    function x(e) {
        return (t)=>{
            /ENOENT/.test(t.message) && (t = new k({
                error: t,
                message: "Failed to execute git (ENOENT)",
                gitErrorCode: S.NotAGitRepository
            })), e(t);
        };
    }
    var E = require("./module-44016.js");
    const I = -86, T = [
        "/usr/bin/git",
        "/opt/homebrew/bin/git"
    ];
    function C(e) {
        return new Promise((t, r)=>{
            let n;
            try {
                n = w.spawn(e, [
                    "--version"
                ]);
            } catch (t) {
                return void r(new Error(function(e, t) {
                    const r = t?.errno;
                    return "darwin" === process.platform && r === I ? `"${e}" cannot run on this CPU architecture (EBADARCH). It is likely an Intel-only binary and Rosetta is not installed.` : `Executing "${e} --version" failed: ${t instanceof Error ? t.message : String(t)}`;
                }(e, t)));
            }
            const s = [];
            n.stdout.on("data", (e)=>s.push(e)), n.on("error", x(r)), n.on("close", (n, o)=>0 !== n ? r(new Error(`Executing "${e} --version" failed with code ${n}, signal ${o}`)) : t({
                    path: e,
                    version: (0, E.ot)(Buffer.concat(s).toString("utf8").trim())
                }));
        });
    }
    function P(e, t) {
        return t(e) ? C(e) : Promise.reject(new Error(`Path "${e}" is invalid.`));
    }
    async function A(e, t) {
        if ("/usr/bin/git" === e) {
            const { error: e } = await new Promise((e)=>{
                w.exec("xcode-select -p", (t, r)=>e({
                        error: t,
                        stdout: r.toString()
                    }));
            });
            if (e && 2 === e.code) throw new Error('Executing "xcode-select -p" failed with error code 2.');
        }
        return P(e, t);
    }
    async function R(e, t) {
        const { error: r, stdout: n } = await new Promise((e)=>{
            w.exec("which git", (t, r)=>e({
                    error: t,
                    stdout: r.toString()
                }));
        });
        if (r) throw new Error(`Executing "which git" failed: ${r.message}`);
        const s = n.trim();
        try {
            return await A(s, e);
        } catch (r) {
            t?.warn(`Unable to use git from the PATH: "${s}". Error: ${r.message}. Trying well-known native git installs.`);
            for (const r of T)if (r !== s) try {
                const n = await A(r, e);
                return t?.info(`Using git from "${n.path}" instead of "${s}".`), n;
            } catch (e) {
                t?.info(`Unable to use git from "${r}". Error: ${e.message}`);
            }
            throw r;
        }
    }
    function M(e, t) {
        return e ? P(v.join(e, "Git", "cmd", "git.exe"), t) : Promise.reject("Not found");
    }
    async function J(e) {
        return M(process.env.ProgramW6432, e).then(void 0, ()=>M(process.env["ProgramFiles(x86)"], e)).then(void 0, ()=>M(process.env.ProgramFiles, e)).then(void 0, ()=>M(v.join(process.env.LocalAppData, "Programs"), e)).then(void 0, ()=>(async function(e) {
                return P(await _("git.exe"), e);
            })(e));
    }
    async function O(e) {
        return async function(e, t, r) {
            for (const n of e)try {
                return await P(n, t);
            } catch (e) {
                r?.info(`Unable to find git on the PATH: "${n}". Error: ${e.message}`);
            }
            let n;
            try {
                switch(process.platform){
                    case "darwin":
                        return await R(t, r);
                    case "win32":
                        return await J(t);
                    default:
                        return await P(await _("git"), t);
                }
            } catch (e) {
                n = e?.message ?? String(e), r?.warn(`Unable to find git. Error: ${n}`);
            }
            throw new Error(n ? `Git installation not found. ${n}` : "Git installation not found.");
        }([], ()=>!0, e);
    }
    var B = require("./module-78474.js"), D = require("./module-73136.js"), q = require("./module-66058.js"), N = require("./module-30913.js");
    class F extends Error {
        constructor(){
            super("Operation cancelled"), this.name = "CancelledError";
        }
    }
    class U {
        get onOutput() {
            return this._onOutput;
        }
        constructor(e){
            this._onOutput = new B.EventEmitter, this.path = e.gitPath, this.env = e.env || {}, this.repoConfigExecution = e.repoConfigExecution ?? "block", e.onLog && this._onOutput.on("log", e.onLog);
        }
        async exec(e, t, r = {}) {
            const n = {
                cwd: e,
                ...r
            };
            return await this._exec(t, n);
        }
        async exec2(e, t = {}) {
            return await this._exec(e, t);
        }
        stream(e, t, r = {}) {
            const n = {
                cwd: e,
                ...r
            }, s = this.spawn(t, n);
            if (!1 !== r.log) {
                const e = Date.now();
                s.on("exit", ()=>{
                    this.log(`> ${(0, b.Fh)(t)} [${Date.now() - e}ms]${s.killed ? " (cancelled)" : ""}${this.policyLogSuffix()}\n`);
                });
            }
            return s;
        }
        policyLogSuffix() {
            return "allow-hooks" === this.repoConfigExecution ? " (hooks)" : "";
        }
        async _exec(e, t = {}) {
            const r = this.spawn(e, t);
            t.onSpawn?.(r), t.input && r.stdin.end(t.input, "utf8");
            const n = Date.now();
            let s;
            try {
                s = await async function(e, t) {
                    if (!e.stdout || !e.stderr) throw new k({
                        message: "Failed to get stdout or stderr from git process."
                    });
                    if (t?.aborted) throw new F;
                    const r = [], n = (e, t, n)=>{
                        e.once(t, n), r.push((0, E.s)(()=>e.removeListener(t, n)));
                    }, s = (e, t, n)=>{
                        e.on(t, n), r.push((0, E.s)(()=>e.removeListener(t, n)));
                    };
                    let o = Promise.all([
                        new Promise((t, r)=>{
                            n(e, "error", x(r)), n(e, "exit", t);
                        }),
                        new Promise((t)=>{
                            const r = [];
                            s(e.stdout, "data", (e)=>r.push(e)), n(e.stdout, "close", ()=>t(Buffer.concat(r)));
                        }),
                        new Promise((t)=>{
                            const r = [];
                            s(e.stderr, "data", (e)=>r.push(e)), n(e.stderr, "close", ()=>t(Buffer.concat(r).toString("utf8")));
                        })
                    ]);
                    if (t) {
                        const n = new Promise((n, s)=>{
                            const o = ()=>{
                                try {
                                    e.kill();
                                } catch  {}
                                s(new F);
                            };
                            t.aborted ? o() : (t.addEventListener("abort", o, {
                                once: !0
                            }), r.push((0, E.s)(()=>t.removeEventListener("abort", o))));
                        });
                        o = Promise.race([
                            o,
                            n
                        ]);
                    }
                    try {
                        const [e, t, r] = await o;
                        return {
                            exitCode: e,
                            stdout: t,
                            stderr: r
                        };
                    } finally{
                        (0, E.AS)(r);
                    }
                }(r, t.signal);
            } catch (t) {
                throw t instanceof F && this.log(`> ${(0, b.Fh)(e)} [${Date.now() - n}ms] (cancelled)\n`), t;
            }
            !1 !== t.log && (this.log(`> ${(0, b.Fh)(e)} [${Date.now() - n}ms] ${t.caller ? `(${t.caller})` : ""}${this.policyLogSuffix()}\n`), s.stderr.length > 0 && this.log(`${(0, b.ix)(s.stderr)}\n`));
            const o = {
                exitCode: s.exitCode,
                stdout: s.stdout.toString("utf8"),
                stderr: s.stderr
            };
            return s.exitCode ? Promise.reject(new k({
                message: "Failed to execute git",
                stdout: o.stdout,
                stderr: o.stderr,
                exitCode: o.exitCode,
                gitErrorCode: (i = o.stderr, /Another git process seems to be running in this repository|If no other git process is currently running/.test(i) ? S.RepositoryIsLocked : /Authentication failed/i.test(i) ? S.AuthenticationFailed : /Not a git repository/i.test(i) ? S.NotAGitRepository : /bad config file/.test(i) ? S.BadConfigFile : /cannot make pipe for command substitution|cannot create standard input pipe/.test(i) ? S.CantCreatePipe : /Repository not found/.test(i) ? S.RepositoryNotFound : /unable to access/.test(i) ? S.CantAccessRemote : /branch '.+' is not fully merged/.test(i) ? S.BranchNotFullyMerged : /Couldn't find remote ref/.test(i) ? S.NoRemoteReference : /A branch named '.+' already exists/.test(i) ? S.BranchAlreadyExists : /'.+' is not a valid branch name/.test(i) ? S.InvalidBranchName : /Please,? commit your changes or stash them/.test(i) ? S.DirtyWorkTree : /contains modified or untracked files|use --force to delete it/.test(i) ? S.WorktreeContainsChanges : /fatal: '[^']+' already exists/.test(i) ? S.WorktreeAlreadyExists : /is already used by worktree at/.test(i) ? S.WorktreeBranchAlreadyUsed : void 0),
                gitCommand: (0, q.s7)(e) ?? e[0],
                gitArgs: e
            })) : o;
            var i;
        }
        spawn(e, t = {}) {
            if (!this.path) throw new Error("git could not be found in the system.");
            const r = {
                ...t
            };
            r.stdio || t.input || (r.stdio = [
                "ignore",
                null,
                null
            ]), r.env = (0, N.J)({
                command: (0, q.s7)(e),
                spawnerEnv: this.env,
                optionsEnv: t.env,
                repoConfigExecution: this.repoConfigExecution
            });
            const n = this.getCwd(t);
            return n && (r.cwd = (0, E.vn)(n)), w.spawn(this.path, e, r);
        }
        getCwd(e) {
            const t = e.cwd;
            return void 0 === t || "string" == typeof t ? t : t instanceof URL && "file:" === t.protocol ? (0, D.fileURLToPath)(t) : void 0;
        }
        log(e) {
            this._onOutput.emit("log", e);
        }
    }
    var L = require("./module-62249.js"), $ = require("./module-13807.js"), j = require("./module-28242.js"), G = require("./module-25925.js"), z = require("./module-68388.js"), W = require("./module-51455.js");
    const H = require("vscode"), K = "canvas", V = [
        "EEXIST",
        "ENOTEMPTY",
        "ENOENT"
    ];
    const Y = new Map;
    async function Q(e) {
        const t = e.skillsDir ?? (0, L.T2h)(), r = function(e = (0, L.T2h)()) {
            return (0, v.join)(e, K, "sdk");
        }(t), n = Y.get(r);
        if (void 0 !== n) return n;
        const s = async function(e, t, r) {
            const n = function(e) {
                return (0, v.join)(e, "dist", "agent-sdk", "cursor", "canvas");
            }(e), s = (0, v.join)(t, K);
            try {
                await (0, W.access)(n);
            } catch (e) {
                if ("ENOENT" === e.code) return !1;
                throw e;
            }
            try {
                await (0, W.access)(s);
            } catch (e) {
                if ("ENOENT" === e.code) return !1;
                throw e;
            }
            return await (0, W.mkdir)(s, {
                recursive: !0
            }), await (0, W.rm)(r, {
                recursive: !0,
                force: !0
            }), await (0, W.cp)(n, r, {
                force: !0,
                recursive: !0
            }), !0;
        }(e.extensionPath, t, r);
        Y.set(r, s);
        try {
            return await s;
        } finally{
            Y.delete(r);
        }
    }
    const X = {
        symbol: Symbol.for("cursor.agentStreamMetadata"),
        defaultValue: void 0
    };
    var Z = ((e)=>(e.FREE = "free", e.PRO = "pro", e.PRO_PLUS = "pro_plus", e.ENTERPRISE = "enterprise", e.FREE_TRIAL = "free_trial", e.ULTRA = "ultra", e.PRO_STUDENT = "pro_student", e.EXPRESS = "express", e.PREMIUM = "premium", e.PLUS = "plus", e.SUPER = "super", e.UNIFIED_ULTRA = "unified_ultra", e))(Z || {});
    new Set(Object.values(Z));
    const ee = (0, g.h)("cursor-agent-exec"), te = X;
    var re;
    function ne(e) {
        const t = re[e];
        return "string" != typeof t ? e.toString() : t[0].toLowerCase() + t.substring(1).replace(/[A-Z]/g, (e)=>"_" + e.toLowerCase());
    }
    !function(e) {
        e[e.Canceled = 1] = "Canceled", e[e.Unknown = 2] = "Unknown", e[e.InvalidArgument = 3] = "InvalidArgument", e[e.DeadlineExceeded = 4] = "DeadlineExceeded", e[e.NotFound = 5] = "NotFound", e[e.AlreadyExists = 6] = "AlreadyExists", e[e.PermissionDenied = 7] = "PermissionDenied", e[e.ResourceExhausted = 8] = "ResourceExhausted", e[e.FailedPrecondition = 9] = "FailedPrecondition", e[e.Aborted = 10] = "Aborted", e[e.OutOfRange = 11] = "OutOfRange", e[e.Unimplemented = 12] = "Unimplemented", e[e.Internal = 13] = "Internal", e[e.Unavailable = 14] = "Unavailable", e[e.DataLoss = 15] = "DataLoss", e[e.Unauthenticated = 16] = "Unauthenticated";
    }(re || (re = {}));
    class se extends Error {
        constructor(e, t = re.Unknown, r, n, s){
            super(function(e, t) {
                return e.length ? `[${ne(t)}] ${e}` : `[${ne(t)}]`;
            }(e, t)), this.name = "ConnectError", Object.setPrototypeOf(this, new.target.prototype), this.rawMessage = e, this.code = t, this.metadata = new Headers(null != r ? r : {}), this.details = null != n ? n : [], this.cause = s;
        }
        static from(e, t = re.Unknown) {
            return e instanceof se ? e : e instanceof Error ? "AbortError" == e.name ? new se(e.message, re.Canceled) : new se(e.message, t, void 0, void 0, e) : new se(String(e), t, void 0, void 0, e);
        }
        static [Symbol.hasInstance](e) {
            return e instanceof Error && (Object.getPrototypeOf(e) === se.prototype || "ConnectError" === e.name && "code" in e && "number" == typeof e.code && "metadata" in e && "details" in e && Array.isArray(e.details) && "rawMessage" in e && "string" == typeof e.rawMessage && "cause" in e);
        }
        findDetails(e) {
            const t = "typeName" in e ? {
                findMessage: (t)=>t === e.typeName ? e : void 0
            } : e, r = [];
            for (const e of this.details){
                if ("getType" in e) {
                    t.findMessage(e.getType().typeName) && r.push(e);
                    continue;
                }
                const n = t.findMessage(e.type);
                if (n) try {
                    r.push(n.fromBinary(e.value));
                } catch (e) {}
            }
            return r;
        }
    }
    function oe(e) {
        if (e instanceof se) return e.code === re.Canceled;
        if (!(e instanceof Error)) return !1;
        if ("Canceled" === e.name && "Canceled" === e.message) return !0;
        if ("ConnectError" !== e.name) return !1;
        const t = e.code;
        return t === re.Canceled || "Canceled" === t || "Canceled" === e.message || e.message.startsWith("Canceled:");
    }
    const ie = (0, $.v5)("vscode.agent_exec.canvas_sdk_mirror_duration_ms", {
        description: "Time to sync the canvas SDK mirror to the builtin skills directory"
    }), ae = (0, $.Pu)("vscode.agent_exec.canvas_sdk_mirror_failures", {
        description: "Number of canvas SDK mirror sync failures"
    }), ce = 18e5, le = 4e3, ue = "anysphere.cursor-agent-exec", de = "agent_skills_batch_update";
    function pe(e) {
        return {
            scopedTo: e.scopedTo,
            disabledEnvironments: e.disabledEnvironments,
            disableModelInvocation: e.disableModelInvocation,
            description: e.description,
            environments: e.environments,
            fullPath: e.fullPath,
            gitRemoteOrigin: e.gitRemoteOrigin,
            globs: e.globs,
            marketplace: e.marketplace,
            marketplaceId: e.marketplaceId,
            parseError: e.parseError,
            plugin: e.plugin,
            pluginId: e.pluginId,
            argumentHint: e.argumentHint,
            disableUserInvocation: e.disableUserInvocation
        };
    }
    function me(e, t) {
        const r = (e, t, r)=>{
            var n;
            oe(r) || (n = r) instanceof Error && n.message.includes("No Connect transport provider registered") ? ee.debug(e, t, {
                error: String(r)
            }) : ee.warn(e, t, {
                error: String(r)
            });
        }, n = async (e)=>{
            const t = H.extensions.getExtension(ue)?.extensionPath;
            if (!t) return void ee.warn(e, "Skipping canvas SDK mirror: extension path unavailable");
            const r = Date.now();
            try {
                await Q({
                    extensionPath: t
                });
            } catch (t) {
                !function(e) {
                    const t = e?.code;
                    if ("string" == typeof t && V.includes(t)) return !0;
                    const r = e instanceof Error ? e.message : "string" == typeof e ? e : "";
                    return V.some((e)=>r.includes(e));
                }(t) ? (ae.increment(e), ee.warn(e, "Canvas SDK mirror failed", {
                    error: String(t)
                })) : ee.debug(e, "Canvas SDK mirror skipped: raced a concurrent sync", {
                    error: String(t)
                });
            } finally{
                ie.record(e, Date.now() - r);
            }
        }, s = function(e) {
            const t = e.setTimeoutFn ?? setTimeout, r = e.clearTimeoutFn ?? clearTimeout;
            let n, s = !1;
            const o = ()=>{
                void 0 !== n && (r(n), n = void 0);
            };
            return {
                schedule () {
                    s || (o(), n = t(()=>{
                        n = void 0, e.run().catch(()=>{});
                    }, e.intervalMs));
                },
                dispose () {
                    s = !0, o();
                }
            };
        }({
            intervalMs: ce,
            run: async ()=>{
                try {
                    await o();
                } catch (t) {
                    r(e, "Failed to refresh Cursor-managed skills on schedule", t);
                }
            }
        });
        t.push(()=>s.dispose());
        const o = async ()=>{
            try {
                if (!H.cursor.getCursorAuthToken()) return void await n(e);
                const t = await H.cursor.getManagedSkills();
                await (async (e, t)=>{
                    await (0, L.Rhp)(e, t), await n(e);
                })(e, {
                    managedSkills: t.skills ?? []
                });
            } catch (t) {
                r(e, "Failed to sync managed skills from dashboard", t), await n(e);
            } finally{
                s.schedule();
            }
        }, i = o().catch((t)=>{
            r(e, "Failed to sync Cursor-managed skills", t);
        }), a = H.cursor.onDidChangeCursorAuthToken(()=>{
            o().catch((t)=>{
                r(e, "Failed to refresh Cursor-managed skills after auth change", t);
            });
        });
        return t.push(()=>a.dispose()), {
            initialBuiltinSkillsSyncPromise: i
        };
    }
    function he(e) {
        const { mergedAgentSkillsService: t, serviceCtx: r, deactivateTasks: n } = e;
        let s, o = Promise.resolve();
        const i = (e)=>{
            const t = o.then(async ()=>{
                const t = function(e) {
                    return e.map((e)=>JSON.stringify(pe(e))).sort().join("\n");
                }(e);
                if (t === s) return;
                const r = e.map(pe);
                s = void 0;
                await Promise.resolve(H.cursor.checkFeatureGate(de)).catch(()=>!1) ? await H.cursor.updateAgentSkillsInBatches(r) : await H.cursor.updateAgentSkills(r), s = t;
            });
            return o = t.catch(()=>{}), t;
        };
        let a;
        t.getAllAgentSkills(r).then((e)=>{
            i(e);
        });
        const c = t.onDidChangeSkills(()=>{
            void 0 !== a && clearTimeout(a), a = setTimeout(()=>{
                a = void 0, (async ()=>{
                    const e = await t.getAllAgentSkills(r);
                    await i(e);
                })().catch((e)=>{
                    ee.warn(r, "mergedAgentSkillsService.onDidChangeSkills failed", {
                        error: String(e)
                    });
                });
            }, le);
        });
        n.push(c), n.push(()=>{
            void 0 !== a && clearTimeout(a);
        });
    }
    var fe = require("./module-48161.js"), ge = require("./module-4008.js");
    async function ye(e) {
        const t = H.Uri.file(e).fsPath, r = t.endsWith(v.sep) ? t : `${t}${v.sep}`, n = (await Promise.all(H.workspace.textDocuments.filter((e)=>e.isDirty && "file" === e.uri.scheme && e.uri.fsPath.startsWith(r)).map(async (e)=>({
                path: e.uri.fsPath,
                saved: await e.save()
            })))).filter(({ saved: e })=>!e).map(({ path: e })=>e);
        if (n.length > 0) throw new Error(`Unsaved edits could not be written to disk (${n.join(", ")}).`);
    }
    const we = 5, ve = 500;
    function _e(e) {
        return "cursor-first-party" === e.identifier.source || "cursor-third-party" === e.identifier.source ? e.identifier.sourceInfo : void 0;
    }
    async function be(e, t) {
        return (await e.getAllEnabledPlugins()).find((e)=>_e(e)?.pluginDbId === t);
    }
    function Se(e) {
        return new Promise((t)=>setTimeout(t, e));
    }
    async function ke(e, t, r, n) {
        for(let s = 0; s < we; s++){
            let o;
            try {
                o = await e.reloadPlugin({
                    name: t.pluginName,
                    pluginDbId: t.pluginId
                });
            } catch (e) {
                return void n(e);
            }
            if (r(o)) return o;
            s < we - 1 && await Se(ve);
        }
    }
    function xe(e, t) {
        return void 0 !== e && void 0 === e.loadError && _e(e)?.version === t;
    }
    class Ee extends Error {
        constructor(e){
            super(`Refusing to remove "${e}": it is not a skill folder under the user's .cursor/skills`), this.skillDir = e, this.name = "PublishSkillGuardViolationError";
        }
    }
    function Ie(e) {
        return e.replace(/\\/g, "/");
    }
    function Te(e) {
        const t = (0, v.resolve)((0, v.join)(e.userHomeDirectory, ".cursor", "skills")), r = (0, v.relative)(t, (0, v.resolve)(e.skillDir));
        if ("" !== r && !(0, v.isAbsolute)(r) && ".." !== r.split(v.sep)[0]) return Ie(r);
    }
    async function Ce(e, t) {
        const { pluginsService: r } = e, n = (0, v.dirname)(t.skillFilePath), s = Te({
            skillDir: n,
            userHomeDirectory: e.userHomeDirectory
        });
        if (void 0 === s) throw new Ee(n);
        const o = await ke(r, {
            pluginName: t.pluginName,
            pluginId: t.pluginId
        }, (e)=>(function(e, t) {
                if (void 0 === e || !xe(e, t.commitSha)) return !1;
                const r = `skills/${t.skillPath}/SKILL.md`;
                return e.skills.some((e)=>{
                    const t = Ie(e.path);
                    return t === r || t.endsWith(`/${r}`);
                });
            })(e, {
                commitSha: t.commitSha,
                skillPath: s
            }), (e)=>ee.warn((0, f.q6)(), "Publish skill: plugin reload failed", {
                error: String(e)
            }));
        if (void 0 === o) return {
            confirmed: !1,
            deleted: !1
        };
        if (!await async function(e) {
            try {
                return await (0, W.stat)(e), !0;
            } catch  {
                return !1;
            }
        }(t.skillFilePath)) return ee.warn((0, f.q6)(), "Publish skill: local skill vanished before cleanup", {
            skillDir: n
        }), {
            confirmed: !0,
            deleted: !1
        };
        try {
            return await e.deleteDirectoryToTrash(n), {
                confirmed: !0,
                deleted: !0,
                filesMove: {
                    previousDir: n,
                    nextDir: (0, v.join)(o.installPath, "skills", s)
                }
            };
        } catch (e) {
            return ee.warn((0, f.q6)(), "Publish skill: confirmed plugin loaded but failed to trash local skill", {
                skillDir: n,
                error: String(e)
            }), {
                confirmed: !0,
                deleted: !1
            };
        }
    }
    const Pe = "cursor.publishSkill.packSkillPlugin", Ae = "cursor.publishSkill.reloadConfirmAndDeleteLocalSkill";
    async function Re(e) {
        await H.workspace.fs.delete(H.Uri.file(e), {
            recursive: !0,
            useTrash: !0
        });
    }
    function Me(e, t) {
        e.subscriptions.push(H.commands.registerCommand(Pe, (e)=>{
            if (void 0 === e || "string" != typeof e.skillFilePath || "" === e.skillFilePath.trim() || "string" != typeof e.pluginName || "" === e.pluginName.trim()) throw new Error("packSkillPlugin requires a non-empty skillFilePath and pluginName");
            return async function(e) {
                const t = (0, v.dirname)(e.skillFilePath), r = Te({
                    skillDir: t,
                    userHomeDirectory: (0, fe.homedir)()
                });
                if (void 0 === r) throw new Error(`Only skills under ~/.cursor/skills can be published; "${t}" is not one.`);
                await ye(t);
                const n = await (0, W.mkdtemp)((0, v.join)((0, fe.tmpdir)(), "publish-skill-"));
                try {
                    const s = await (0, ge.ALO)({
                        skills: [
                            {
                                dir: t,
                                relativePath: r
                            }
                        ],
                        targetDir: n,
                        pluginName: e.pluginName
                    }), o = await (0, W.readFile)((0, v.join)(s, "plugin.json"), "utf-8"), i = JSON.parse(o), a = "string" == typeof i.name && "" !== i.name.trim() ? i.name : e.pluginName;
                    return {
                        tarGzBase64: (await (0, ge.Jwk)(s)).toString("base64"),
                        pluginName: a
                    };
                } finally{
                    await (0, W.rm)(n, {
                        recursive: !0,
                        force: !0
                    }).catch(()=>{});
                }
            }(e);
        }), H.commands.registerCommand(Ae, async (e)=>{
            if (void 0 === e || "string" != typeof e.skillFilePath || "" === e.skillFilePath.trim() || "string" != typeof e.pluginName || "" === e.pluginName.trim() || "string" != typeof e.pluginId || "" === e.pluginId.trim() || "string" != typeof e.commitSha || "" === e.commitSha.trim()) throw new Error("reloadConfirmAndDeleteLocalSkill requires skillFilePath, pluginName, pluginId, and commitSha");
            let r;
            try {
                r = await t;
            } catch  {
                return {
                    confirmed: !1,
                    deleted: !1
                };
            }
            try {
                return await Ce(r, e);
            } catch (e) {
                if (e instanceof Ee) return {
                    confirmed: !1,
                    deleted: !1,
                    guardViolation: !0
                };
                throw e;
            }
        }));
    }
    async function Je(e, t) {
        let r;
        try {
            r = await be(e.pluginsService, t.pluginId);
        } catch (e) {
            return Oe(`Could not read the installed plugins: ${De(e)}`, t);
        }
        if (void 0 === r) return Oe("The published plugin is not installed locally, so its skill files cannot be restored.", t);
        const n = function(e) {
            const t = e.skills.map((e)=>(0, v.dirname)(e.path)).filter((e)=>"" !== e && "." !== e && ".." !== e).map((t)=>(0, v.join)(e.installPath, t));
            return [
                ...new Set(t)
            ];
        }(r);
        if (0 === n.length) return Oe("The published plugin has no skill folder to restore.", t);
        const s = (0, v.join)(r.installPath, "skills"), o = (0, v.join)(e.userHomeDirectory, ".cursor", "skills");
        try {
            return {
                restored: !0,
                skillPaths: await (0, ge.V3H)({
                    skillDirs: n,
                    pluginSkillsRoot: s,
                    skillsRoot: o
                }),
                filesMove: {
                    previousDir: s,
                    nextDir: o
                }
            };
        } catch (e) {
            return Oe(De(e), t);
        }
    }
    function Oe(e, t) {
        return ee.warn((0, f.q6)(), "Unpublish skill: restore failed", {
            pluginId: t.pluginId,
            error: e
        }), {
            restored: !1,
            skillPaths: [],
            error: e
        };
    }
    function Be(e, t) {
        return ee.warn((0, f.q6)(), "Unpublish skill: cache removal skipped", {
            pluginId: t.pluginId,
            error: e
        }), {
            removed: !1
        };
    }
    function De(e) {
        return e instanceof Error ? e.message : String(e);
    }
    const qe = "cursor.unpublishSkill.restoreLocalSkill", Ne = "cursor.unpublishSkill.removePluginCache";
    function Fe(e) {
        const t = e;
        if (void 0 === t || "string" != typeof t.pluginId || "" === t.pluginId.trim()) throw new Error("unpublishSkill commands require a non-empty pluginId");
        return {
            pluginId: t.pluginId
        };
    }
    function Ue(e, t) {
        e.subscriptions.push(H.commands.registerCommand(qe, async (e)=>{
            const r = Fe(e);
            let n;
            try {
                n = await t;
            } catch  {
                return {
                    restored: !1,
                    skillPaths: [],
                    error: "The plugin subsystem is unavailable, so the skill files cannot be restored."
                };
            }
            return Je(n, r);
        }), H.commands.registerCommand(Ne, async (e)=>{
            const r = Fe(e);
            let n;
            try {
                n = await t;
            } catch  {
                return {
                    removed: !1
                };
            }
            return async function(e, t) {
                let r;
                try {
                    const n = await be(e.pluginsService, t.pluginId);
                    r = void 0 === n ? void 0 : _e(n);
                } catch (e) {
                    return Be(De(e), t);
                }
                const n = r?.marketplace;
                if (void 0 === r || void 0 === n) return Be("plugin is no longer loaded from a marketplace", t);
                try {
                    return await e.cacheManager.removeAllVersions({
                        marketplaceSlug: n,
                        pluginId: r.name
                    }), await e.pluginsService.reload(), {
                        removed: !0
                    };
                } catch (e) {
                    return Be(De(e), t);
                }
            }(n, r);
        }));
    }
    async function Le(e, t) {
        const r = await be(e.pluginsService, t.pluginId);
        if (void 0 === r) throw new Error("The published plugin is not installed locally, so its edits cannot be synced.");
        const n = _e(r)?.name;
        if (void 0 === n || "" === n) throw new Error("The installed plugin has no marketplace name to sync to.");
        if ((0, ge.UDB)(n) !== n) throw new Error(`Cannot sync "${n}": its published name is not in the form a plugin manifest can carry.`);
        const s = function(e) {
            const t = (0, v.join)(e.installPath, "skills"), r = new Map;
            for (const n of e.skills){
                const s = (0, v.join)(e.installPath, (0, v.dirname)(n.path)), o = (0, v.relative)(t, s);
                "" === o || o.startsWith("..") || (0, v.join)(t, o) !== s || r.set(s, {
                    dir: s,
                    relativePath: o
                });
            }
            return [
                ...r.values()
            ];
        }(r);
        if (0 === s.length) throw new Error("The published plugin has no skill folder to sync.");
        await e.saveDirtyDocumentsUnder(r.installPath);
        const o = await (0, W.mkdtemp)((0, v.join)((0, fe.tmpdir)(), "resync-skill-"));
        try {
            const e = await (0, ge.ALO)({
                skills: s,
                targetDir: o,
                pluginName: n,
                displayName: t.displayName
            });
            return {
                tarGzBase64: (await (0, ge.Jwk)(e)).toString("base64"),
                pluginName: n,
                installPath: r.installPath
            };
        } finally{
            await (0, W.rm)(o, {
                recursive: !0,
                force: !0
            }).catch(()=>{});
        }
    }
    const $e = "cursor.resyncSkill.packInstalledSkillPlugin", je = "cursor.resyncSkill.reloadAndConfirmResync";
    function Ge(e, t) {
        e.subscriptions.push(H.commands.registerCommand($e, async (e)=>{
            const r = function(e) {
                const t = e;
                if (void 0 === t || "string" != typeof t.pluginId || "" === t.pluginId.trim() || "string" != typeof t.displayName || "" === t.displayName.trim()) throw new Error("packInstalledSkillPlugin requires a non-empty pluginId and displayName");
                return {
                    pluginId: t.pluginId,
                    displayName: t.displayName
                };
            }(e);
            return Le(await t, r);
        }), H.commands.registerCommand(je, async (e)=>{
            const r = function(e) {
                const t = e;
                if (void 0 === t || "string" != typeof t.pluginName || "" === t.pluginName.trim() || "string" != typeof t.pluginId || "" === t.pluginId.trim() || "string" != typeof t.commitSha || "" === t.commitSha.trim()) throw new Error("reloadAndConfirmResync requires pluginName, pluginId, and commitSha");
                return {
                    pluginName: t.pluginName,
                    pluginId: t.pluginId,
                    commitSha: t.commitSha
                };
            }(e);
            let n;
            try {
                n = await t;
            } catch  {
                return {
                    confirmed: !1
                };
            }
            return async function(e, t) {
                const r = await ke(e.pluginsService, {
                    pluginName: t.pluginName,
                    pluginId: t.pluginId
                }, (e)=>xe(e, t.commitSha), (e)=>ee.warn((0, f.q6)(), "Resync skill: plugin reload failed", {
                        pluginId: t.pluginId,
                        error: String(e)
                    }));
                return void 0 === r ? {
                    confirmed: !1
                } : {
                    confirmed: !0,
                    installPath: r.installPath
                };
            }(n, r);
        }));
    }
    const ze = "cursor.installSkills.runSkillsCliAdd", We = /^[A-Za-z0-9@._~:/?=+\\][A-Za-z0-9@._~:/#?=+\\-]*$/, He = /^[A-Za-z0-9._][A-Za-z0-9._-]*$/, Ke = /^[A-Za-z0-9._][A-Za-z0-9._-]*$/, Ve = "skills@1.5.23", Ye = new Set([
        "PATH",
        "HOME",
        "USER",
        "LOGNAME",
        "SHELL",
        "TMPDIR",
        "LANG",
        "LC_ALL",
        "LC_CTYPE",
        "SSH_AUTH_SOCK",
        "XDG_CACHE_HOME",
        "XDG_CONFIG_HOME",
        "XDG_DATA_HOME",
        "HTTP_PROXY",
        "HTTPS_PROXY",
        "NO_PROXY",
        "http_proxy",
        "https_proxy",
        "no_proxy"
    ]), Qe = 3e5, Xe = 65536, Ze = 320, et = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]|(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)|\x1b(?:[ #%()*+\-./]?[a-zA-Z0-9|}~@])/g, tt = /[\r\n│┃└┌├─╭╮╯╰→◇◆■□●○◒◐◓◑▲▼]+/;
    function rt(e) {
        return /^[A-Za-z0-9-][A-Za-z0-9@.=-]*$/.test(e) ? e : `"${e.replace(/\\+$/, (e)=>e + e)}"`;
    }
    function nt(e) {
        return [
            "npx",
            ...e.map(rt)
        ].join(" ");
    }
    function st(e) {
        const t = {
            NO_COLOR: "1"
        };
        for (const [r, n] of Object.entries(e))void 0 !== n && (Ye.has(r) || r.startsWith("GIT_")) && (t[r] = n);
        return t;
    }
    async function ot(e) {
        try {
            const t = await (0, W.readdir)(e, {
                withFileTypes: !0
            });
            return new Set(t.filter((e)=>!e.isFile()).map((e)=>e.name));
        } catch  {
            return new Set;
        }
    }
    function it(e) {
        return new Promise((t)=>{
            const r = (0, w.spawn)("npx", e, {
                cwd: (0, fe.homedir)(),
                env: st(process.env),
                stdio: [
                    "ignore",
                    "pipe",
                    "pipe"
                ],
                detached: !0
            });
            let n = "";
            const s = (e)=>{
                n = (n + e.toString()).slice(-Xe);
            };
            r.stdout.on("data", s), r.stderr.on("data", s);
            let o = !1;
            const i = (e)=>{
                o || (o = !0, clearTimeout(a), t({
                    ...e,
                    output: n.replace(et, "")
                }));
            }, a = setTimeout(()=>{
                !function(e) {
                    if (void 0 !== e.pid) try {
                        return void process.kill(-e.pid, "SIGKILL");
                    } catch  {}
                    e.kill("SIGKILL");
                }(r), i({
                    exitCode: void 0,
                    reason: "Timed out after 5 minutes"
                });
            }, Qe);
            r.on("error", (t)=>{
                const r = "ENOENT" === t.code;
                i({
                    exitCode: void 0,
                    reason: r ? `npx was not found. Install Node.js (https://nodejs.org), then run: ${nt(e)}` : `Could not run npx: ${t.message}`
                });
            }), r.on("close", (e, t)=>{
                i(null === e ? {
                    exitCode: void 0,
                    reason: `The skills CLI was stopped by ${t ?? "a signal"}`
                } : {
                    exitCode: e
                });
            });
        });
    }
    function at(e) {
        const t = [];
        for (const r of e.split(tt)){
            const e = r.replace(/\s+/g, " ").trim();
            e.length > 0 && e !== t[t.length - 1] && t.push(e);
        }
        const r = t.join(" ");
        return r.length <= Ze ? r : r.slice(-Ze).replace(/^\S+\s+/, "");
    }
    async function ct(e) {
        const t = function(e) {
            return [
                "-y",
                void 0 === e.version ? Ve : `skills@${e.version}`,
                "add",
                e.source,
                ...e.skills.flatMap((e)=>[
                        "--skill",
                        e
                    ]),
                "-g",
                "-a",
                "cursor",
                "-y"
            ];
        }(e);
        if ("win32" === process.platform) return {
            ok: !1,
            exitCode: void 0,
            output: "",
            errorMessage: `Automatic install isn't supported on Windows yet. Run this in a terminal: ${nt(t)}`,
            unsupportedPlatform: !0
        };
        const r = function() {
            const e = (0, fe.homedir)();
            return [
                (0, v.join)(e, ".agents", "skills"),
                (0, v.join)(e, ".cursor", "skills")
            ];
        }(), n = await Promise.all(r.map(ot)), s = await it(t);
        if (0 !== s.exitCode) return {
            ok: !1,
            exitCode: s.exitCode,
            output: s.output,
            errorMessage: void 0 === s.exitCode ? s.reason : at(s.output) || `The skills CLI exited with code ${s.exitCode}`
        };
        const o = await Promise.all(r.map(ot)), i = new Set;
        return o.forEach((e, t)=>{
            for (const r of e)n[t].has(r) || i.add(r);
        }), {
            ok: !0,
            installedSkills: [
                ...i
            ].sort(),
            output: s.output
        };
    }
    function lt(e) {
        e.subscriptions.push(H.commands.registerCommand(ze, async (e)=>((function(e) {
                if (void 0 === e || "string" != typeof e.source || !We.test(e.source) || !Array.isArray(e.skills) || e.skills.some((e)=>"string" != typeof e || !He.test(e)) || void 0 !== e.version && ("string" != typeof e.version || !Ke.test(e.version))) throw new Error("runSkillsCliAdd requires a source, skill filters, and version made of URL-safe characters");
            })(e), await ct(e))));
    }
    var ut = require("./module-83737.js");
    const dt = Symbol.for("anysphere.agent-store-sync.local-subagent-store-mounters.v1");
    function pt() {
        const e = Reflect.get(globalThis, dt);
        if (e instanceof Set) return e;
        const t = new Set;
        return Reflect.set(globalThis, dt, t), t;
    }
    var mt = require("./module-76687.js");
    const ht = "agentStore.skillRoots.v1", ft = 6048e5;
    let gt = Promise.resolve();
    function yt(e) {
        return Array.isArray(e) && 2 === e.length && ("user" === e[0] || "team" === e[0]) && "string" == typeof e[1] && e[1].length > 0;
    }
    function wt(e, t, r = Date.now()) {
        if (void 0 === t.authId) return;
        const n = e.get(ht);
        return !function(e) {
            if ("object" != typeof e || null === e) return !1;
            const t = e;
            return "string" == typeof t.authId && ("number" == typeof t.teamId || null === t.teamId) && "boolean" == typeof t.enabled && Array.isArray(t.mountKeys) && t.mountKeys.every(yt) && "number" == typeof t.writtenAt && Number.isFinite(t.writtenAt);
        }(n) || n.authId !== t.authId || n.teamId !== (t.teamId ?? null) || Math.abs(r - n.writtenAt) > ft ? void 0 : {
            enabled: n.enabled,
            mountKeys: n.mountKeys
        };
    }
    var vt = require("./module-61933.js"), _t = require("./module-36038.js"), bt = require("./module-8592.js");
    const St = "aiserver.v1.";
    class kt extends bt.HL {
        static get runtime() {
            return (0, bt.kU)(this, "runtime", _t.proto3);
        }
        static $p() {
            return St;
        }
    }
    var xt = (0, bt.QT)(_t.proto3, St, "UnifyEligibilityReason", [
        [
            0,
            "UNSPECIFIED"
        ],
        [
            1,
            "BLOCKLISTED"
        ],
        [
            2,
            "ENTERPRISE"
        ],
        [
            3,
            "REQUEST_BASED_PRICING"
        ],
        [
            4,
            "OUTSTANDING_INVOICE"
        ],
        [
            5,
            "STRIPE_CREDIT_BALANCE"
        ],
        [
            6,
            "CURSOR_CREDIT_GRANTS"
        ],
        [
            7,
            "UNSAFE_SUBSCRIPTION_STATUS"
        ],
        [
            8,
            "ALIPAY_PAYMENT_METHOD"
        ]
    ], 1);
    class Et extends kt {
        constructor(e){
            super(), _t.proto3.util.initPartial(e, this);
        }
        static fromBinary(e, t) {
            return (new Et).fromBinary(e, t);
        }
        static fromJson(e, t) {
            return (new Et).fromJson(e, t);
        }
        static fromJsonString(e, t) {
            return (new Et).fromJsonString(e, t);
        }
        static equals(e, t) {
            return _t.proto3.util.equals(Et, e, t);
        }
        static $() {
            return [
                "IndividualUnifyEligibilitySubject"
            ];
        }
    }
    class It extends kt {
        constructor(e){
            super(), this.subject = {
                case: void 0
            }, _t.proto3.util.initPartial(e, this);
        }
        static fromBinary(e, t) {
            return (new It).fromBinary(e, t);
        }
        static fromJson(e, t) {
            return (new It).fromJson(e, t);
        }
        static fromJsonString(e, t) {
            return (new It).fromJsonString(e, t);
        }
        static equals(e, t) {
            return _t.proto3.util.equals(It, e, t);
        }
        static $() {
            return [
                "GetUnifyEligibilityRequest|1 individual #0 subject|2 cursor_team_id 5 subject",
                Et
            ];
        }
    }
    class Tt extends kt {
        constructor(e){
            super(), this.eligible = !1, this.reason = xt.UNSPECIFIED, this.userFacingMessage = "", this.reasons = [], this.canOptInToNewPricing = !1, _t.proto3.util.initPartial(e, this);
        }
        static fromBinary(e, t) {
            return (new Tt).fromBinary(e, t);
        }
        static fromJson(e, t) {
            return (new Tt).fromJson(e, t);
        }
        static fromJsonString(e, t) {
            return (new Tt).fromJsonString(e, t);
        }
        static equals(e, t) {
            return _t.proto3.util.equals(Tt, e, t);
        }
        static $() {
            return [
                "GetUnifyEligibilityResponse|1 eligible 8|2 reason #0|3 user_facing_message 9|4 reasons #0*|5 can_opt_in_to_new_pricing 8",
                xt
            ];
        }
    }
    class Ct extends bt.HL {
        static get runtime() {
            return (0, bt.kU)(this, "runtime", _t.proto3);
        }
        static $p() {
            return "aiserver.v1.";
        }
    }
    class Pt extends Ct {
        constructor(e){
            super(), this.subjectKey = "", this.score = 0, this.sampleCount = 0, _t.proto3.util.initPartial(e, this);
        }
        static fromBinary(e, t) {
            return (new Pt).fromBinary(e, t);
        }
        static fromJson(e, t) {
            return (new Pt).fromJson(e, t);
        }
        static fromJsonString(e, t) {
            return (new Pt).fromJsonString(e, t);
        }
        static equals(e, t) {
            return _t.proto3.util.equals(Pt, e, t);
        }
        static $() {
            return [
                "SubjectScore|1 subject_key 9|2 score 1|3 sample_count 1"
            ];
        }
    }
    class At extends Ct {
        constructor(e){
            super(), this.sourceWatermarkMs = _t.protoInt64.zero, this.generatedAtMs = _t.protoInt64.zero, this.expiresAtMs = _t.protoInt64.zero, this.scores = [], _t.proto3.util.initPartial(e, this);
        }
        static fromBinary(e, t) {
            return (new At).fromBinary(e, t);
        }
        static fromJson(e, t) {
            return (new At).fromJson(e, t);
        }
        static fromJsonString(e, t) {
            return (new At).fromJsonString(e, t);
        }
        static equals(e, t) {
            return _t.proto3.util.equals(At, e, t);
        }
        static $() {
            return [
                "ProjectionScoreSet|1 source_watermark_ms 3|2 generated_at_ms 3|3 expires_at_ms 3|4 scores #0*",
                Pt
            ];
        }
    }
    class Rt extends Ct {
        constructor(e){
            super(), this.policyId = "", this.knownSnapshotVersion = _t.protoInt64.zero, _t.proto3.util.initPartial(e, this);
        }
        static fromBinary(e, t) {
            return (new Rt).fromBinary(e, t);
        }
        static fromJson(e, t) {
            return (new Rt).fromJson(e, t);
        }
        static fromJsonString(e, t) {
            return (new Rt).fromJsonString(e, t);
        }
        static equals(e, t) {
            return _t.proto3.util.equals(Rt, e, t);
        }
        static $() {
            return [
                "GetProjectionSnapshotRequest|1 policy_id 9|2 known_snapshot_version 4"
            ];
        }
    }
    class Mt extends Ct {
        constructor(e){
            super(), this.policyId = "", this.policyVersion = 0, this.snapshotVersion = _t.protoInt64.zero, this.notModified = !1, _t.proto3.util.initPartial(e, this);
        }
        static fromBinary(e, t) {
            return (new Mt).fromBinary(e, t);
        }
        static fromJson(e, t) {
            return (new Mt).fromJson(e, t);
        }
        static fromJsonString(e, t) {
            return (new Mt).fromJsonString(e, t);
        }
        static equals(e, t) {
            return _t.proto3.util.equals(Mt, e, t);
        }
        static $() {
            return [
                "GetProjectionSnapshotResponse|1 policy_id 9|2 policy_version 13|3 snapshot_version 4|4 team #0|5 not_modified 8",
                At
            ];
        }
    }
    class Jt extends bt.HL {
        static get runtime() {
            return (0, bt.kU)(this, "runtime", _t.proto3);
        }
        static $p() {
            return "aiserver.v1.";
        }
    }
    class Ot extends Jt {
        constructor(e){
            super(), this.teamId = 0, _t.proto3.util.initPartial(e, this);
        }
        static fromBinary(e, t) {
            return (new Ot).fromBinary(e, t);
        }
        static fromJson(e, t) {
            return (new Ot).fromJson(e, t);
        }
        static fromJsonString(e, t) {
            return (new Ot).fromJsonString(e, t);
        }
        static equals(e, t) {
            return _t.proto3.util.equals(Ot, e, t);
        }
        static $() {
            return [
                "ListRepoLearnedRulesRequest|1 team_id 5"
            ];
        }
    }
    class Bt extends Jt {
        constructor(e){
            super(), this.enabled = !1, this.items = [], this.truncated = !1, this.hiddenCount = 0, this.live = !1, this.canEdit = !1, _t.proto3.util.initPartial(e, this);
        }
        static fromBinary(e, t) {
            return (new Bt).fromBinary(e, t);
        }
        static fromJson(e, t) {
            return (new Bt).fromJson(e, t);
        }
        static fromJsonString(e, t) {
            return (new Bt).fromJsonString(e, t);
        }
        static equals(e, t) {
            return _t.proto3.util.equals(Bt, e, t);
        }
        static $() {
            return [
                "ListRepoLearnedRulesResponse|1 enabled 8|2 items #0*|3 truncated 8|4 hidden_count 5|5 live 8|6 can_edit 8",
                Dt
            ];
        }
    }
    class Dt extends Jt {
        constructor(e){
            super(), this.id = "", this.repoId = "", this.gitRemoteOrigin = "", this.title = "", this.appliesWhen = "", this.content = "", this.kind = "", this.scopedPaths = [], this.status = "", this.importance = 0, _t.proto3.util.initPartial(e, this);
        }
        static fromBinary(e, t) {
            return (new Dt).fromBinary(e, t);
        }
        static fromJson(e, t) {
            return (new Dt).fromJson(e, t);
        }
        static fromJsonString(e, t) {
            return (new Dt).fromJsonString(e, t);
        }
        static equals(e, t) {
            return _t.proto3.util.equals(Dt, e, t);
        }
        static $() {
            return [
                "RepoLearnedRule|1 id 9|2 repo_id 9|3 git_remote_origin 9|4 title 9|5 applies_when 9|6 content 9|7 kind 9|8 item_class 9?|9 scoped_paths 9*|10 status 9|11 importance 5|12 would_promote_at #0|13 archived_at #0|14 archived_reason 9?|15 created_at #0|16 updated_at #0|17 source 9?",
                _t.Timestamp
            ];
        }
    }
    class qt extends Jt {
        constructor(e){
            super(), this.teamId = 0, this.id = "", _t.proto3.util.initPartial(e, this);
        }
        static fromBinary(e, t) {
            return (new qt).fromBinary(e, t);
        }
        static fromJson(e, t) {
            return (new qt).fromJson(e, t);
        }
        static fromJsonString(e, t) {
            return (new qt).fromJsonString(e, t);
        }
        static equals(e, t) {
            return _t.proto3.util.equals(qt, e, t);
        }
        static $() {
            return [
                "RemoveRepoLearnedRuleRequest|1 team_id 5|2 id 9"
            ];
        }
    }
    class Nt extends Jt {
        constructor(e){
            super(), _t.proto3.util.initPartial(e, this);
        }
        static fromBinary(e, t) {
            return (new Nt).fromBinary(e, t);
        }
        static fromJson(e, t) {
            return (new Nt).fromJson(e, t);
        }
        static fromJsonString(e, t) {
            return (new Nt).fromJsonString(e, t);
        }
        static equals(e, t) {
            return _t.proto3.util.equals(Nt, e, t);
        }
        static $() {
            return [
                "RemoveRepoLearnedRuleResponse"
            ];
        }
    }
    class Ft extends bt.HL {
        static get runtime() {
            return (0, bt.kU)(this, "runtime", _t.proto3);
        }
        static $p() {
            return "aiserver.v1.";
        }
    }
    class Ut extends Ft {
        constructor(e){
            super(), this.teamId = 0, this.serviceAccountId = "", _t.proto3.util.initPartial(e, this);
        }
        static fromBinary(e, t) {
            return (new Ut).fromBinary(e, t);
        }
        static fromJson(e, t) {
            return (new Ut).fromJson(e, t);
        }
        static fromJsonString(e, t) {
            return (new Ut).fromJsonString(e, t);
        }
        static equals(e, t) {
            return _t.proto3.util.equals(Ut, e, t);
        }
        static $() {
            return [
                "SuspendTeamServiceAccountRequest|1 team_id 5|2 service_account_id 9"
            ];
        }
    }
    class Lt extends Ft {
        constructor(e){
            super(), _t.proto3.util.initPartial(e, this);
        }
        static fromBinary(e, t) {
            return (new Lt).fromBinary(e, t);
        }
        static fromJson(e, t) {
            return (new Lt).fromJson(e, t);
        }
        static fromJsonString(e, t) {
            return (new Lt).fromJsonString(e, t);
        }
        static equals(e, t) {
            return _t.proto3.util.equals(Lt, e, t);
        }
        static $() {
            return [
                "SuspendTeamServiceAccountResponse"
            ];
        }
    }
    class $t extends Ft {
        constructor(e){
            super(), this.teamId = 0, this.serviceAccountId = "", _t.proto3.util.initPartial(e, this);
        }
        static fromBinary(e, t) {
            return (new $t).fromBinary(e, t);
        }
        static fromJson(e, t) {
            return (new $t).fromJson(e, t);
        }
        static fromJsonString(e, t) {
            return (new $t).fromJsonString(e, t);
        }
        static equals(e, t) {
            return _t.proto3.util.equals($t, e, t);
        }
        static $() {
            return [
                "ResumeTeamServiceAccountRequest|1 team_id 5|2 service_account_id 9"
            ];
        }
    }
    class jt extends Ft {
        constructor(e){
            super(), _t.proto3.util.initPartial(e, this);
        }
        static fromBinary(e, t) {
            return (new jt).fromBinary(e, t);
        }
        static fromJson(e, t) {
            return (new jt).fromJson(e, t);
        }
        static fromJsonString(e, t) {
            return (new jt).fromJsonString(e, t);
        }
        static equals(e, t) {
            return _t.proto3.util.equals(jt, e, t);
        }
        static $() {
            return [
                "ResumeTeamServiceAccountResponse"
            ];
        }
    }
    const Gt = {
        typeName: "aiserver.v1.DashboardService",
        methods: {
            getTeams: {
                name: "GetTeams",
                I: j.EZo,
                O: j.m0q,
                kind: _t.MethodKind.Unary
            },
            getMe: {
                name: "GetMe",
                I: j.Ewt,
                O: j.S7I,
                kind: _t.MethodKind.Unary
            },
            getUnificationLegacySuperGrokPlan: {
                name: "GetUnificationLegacySuperGrokPlan",
                I: j.BLW,
                O: j.jpO,
                kind: _t.MethodKind.Unary
            },
            getUnifyEligibility: {
                name: "GetUnifyEligibility",
                I: It,
                O: Tt,
                kind: _t.MethodKind.Unary
            },
            listCollapseCandidates: {
                name: "ListCollapseCandidates",
                I: j.jlg,
                O: j.xL7,
                kind: _t.MethodKind.Unary
            },
            getUnificationIntent: {
                name: "GetUnificationIntent",
                I: j.jiH,
                O: j.fTn,
                kind: _t.MethodKind.Unary
            },
            getStoreSubscriptionsToCancel: {
                name: "GetStoreSubscriptionsToCancel",
                I: j.I2q,
                O: j.YeL,
                kind: _t.MethodKind.Unary
            },
            getIndividualUnificationPrepaidPreview: {
                name: "GetIndividualUnificationPrepaidPreview",
                I: j.XB2,
                O: j.FTr,
                kind: _t.MethodKind.Unary
            },
            upsertUnificationIntent: {
                name: "UpsertUnificationIntent",
                I: j.M4l,
                O: j.M_7,
                kind: _t.MethodKind.Unary
            },
            startUnifyGrokOAuth: {
                name: "StartUnifyGrokOAuth",
                I: j.VMe,
                O: j.BRO,
                kind: _t.MethodKind.Unary
            },
            completeUnifyGrokOAuth: {
                name: "CompleteUnifyGrokOAuth",
                I: j.O78,
                O: j.azJ,
                kind: _t.MethodKind.Unary
            },
            parkUnifyGrokOAuthForAppSheet: {
                name: "ParkUnifyGrokOAuthForAppSheet",
                I: j.oZm,
                O: j.CKQ,
                kind: _t.MethodKind.Unary
            },
            completeUnifyGrokOAuthFromAppSheet: {
                name: "CompleteUnifyGrokOAuthFromAppSheet",
                I: j.obd,
                O: j.azJ,
                kind: _t.MethodKind.Unary
            },
            startUnifyXLogin: {
                name: "StartUnifyXLogin",
                I: j.GMY,
                O: j.eQV,
                kind: _t.MethodKind.Unary
            },
            completeUnifyXLogin: {
                name: "CompleteUnifyXLogin",
                I: j.VE0,
                O: j.hbz,
                kind: _t.MethodKind.Unary
            },
            parkUnifyXLoginForAppSheet: {
                name: "ParkUnifyXLoginForAppSheet",
                I: j.ziZ,
                O: j.TjJ,
                kind: _t.MethodKind.Unary
            },
            completeUnifyXLoginFromAppSheet: {
                name: "CompleteUnifyXLoginFromAppSheet",
                I: j.ZP$,
                O: j.hbz,
                kind: _t.MethodKind.Unary
            },
            startCollapseSourceProof: {
                name: "StartCollapseSourceProof",
                I: j.kQE,
                O: j.G$Z,
                kind: _t.MethodKind.Unary
            },
            completeCollapseSourceProof: {
                name: "CompleteCollapseSourceProof",
                I: j.x$b,
                O: j.N_h,
                kind: _t.MethodKind.Unary
            },
            provisionUnifyGrokAccount: {
                name: "ProvisionUnifyGrokAccount",
                I: j.I7k,
                O: j.O8p,
                kind: _t.MethodKind.Unary
            },
            finalizeIndividualUnification: {
                name: "FinalizeIndividualUnification",
                I: j.mpn,
                O: j.UsM,
                kind: _t.MethodKind.Unary
            },
            getUnifyCta: {
                name: "GetUnifyCta",
                I: j.bfP,
                O: j.Jvy,
                kind: _t.MethodKind.Unary
            },
            startUnifiedCheckout: {
                name: "StartUnifiedCheckout",
                I: j.gR6,
                O: j.aIw,
                kind: _t.MethodKind.Unary
            },
            resolveUnifiedTeamStart: {
                name: "ResolveUnifiedTeamStart",
                I: j.nQN,
                O: j.tWf,
                kind: _t.MethodKind.Unary
            },
            startUnifiedTeamCheckout: {
                name: "StartUnifiedTeamCheckout",
                I: j.ToG,
                O: j.Hx0,
                kind: _t.MethodKind.Unary
            },
            createGrokSignInLink: {
                name: "CreateGrokSignInLink",
                I: j.lqG,
                O: j.Ps6,
                kind: _t.MethodKind.Unary
            },
            getOrCreateXaiUnificationIntent: {
                name: "GetOrCreateXaiUnificationIntent",
                I: j.GCT,
                O: j.CG1,
                kind: _t.MethodKind.Unary
            },
            getXaiUnificationIntent: {
                name: "GetXaiUnificationIntent",
                I: j.djX,
                O: j.pww,
                kind: _t.MethodKind.Unary
            },
            selectXaiUnificationCursorAccount: {
                name: "SelectXaiUnificationCursorAccount",
                I: j.gpr,
                O: j.QV4,
                kind: _t.MethodKind.Unary
            },
            deselectXaiUnificationCursorAccount: {
                name: "DeselectXaiUnificationCursorAccount",
                I: j.dv2,
                O: j.dSk,
                kind: _t.MethodKind.Unary
            },
            listXaiUnificationCollapseCandidates: {
                name: "ListXaiUnificationCollapseCandidates",
                I: j.K28,
                O: j.xL7,
                kind: _t.MethodKind.Unary
            },
            startXaiUnificationCursorAccountProof: {
                name: "StartXaiUnificationCursorAccountProof",
                I: j.wQY,
                O: j.M8c,
                kind: _t.MethodKind.Unary
            },
            completeXaiUnificationCursorAccountProof: {
                name: "CompleteXaiUnificationCursorAccountProof",
                I: j.lWf,
                O: j.Tm1,
                kind: _t.MethodKind.Unary
            },
            advanceXaiUnificationIntent: {
                name: "AdvanceXaiUnificationIntent",
                I: j.Tnz,
                O: j.lVO,
                kind: _t.MethodKind.Unary
            },
            startXaiCursorAccountLink: {
                name: "StartXaiCursorAccountLink",
                I: j.vRE,
                O: j.N7y,
                kind: _t.MethodKind.Unary
            },
            completeXaiCursorAccountLink: {
                name: "CompleteXaiCursorAccountLink",
                I: j.UmB,
                O: j.Ie5,
                kind: _t.MethodKind.Unary
            },
            getAgenticOnboardingConfig: {
                name: "GetAgenticOnboardingConfig",
                I: j.CQB,
                O: j.WQf,
                kind: _t.MethodKind.Unary
            },
            getUserOrganizations: {
                name: "GetUserOrganizations",
                I: j.V2d,
                O: j.NjL,
                kind: _t.MethodKind.Unary
            },
            getTeamLinkedOrganization: {
                name: "GetTeamLinkedOrganization",
                I: j.Pxo,
                O: j.RR2,
                kind: _t.MethodKind.Unary
            },
            setUserDefaultTeam: {
                name: "SetUserDefaultTeam",
                I: j.tol,
                O: j.b0C,
                kind: _t.MethodKind.Unary
            },
            getOrganizationMembers: {
                name: "GetOrganizationMembers",
                I: j.cF_,
                O: j.SY0,
                kind: _t.MethodKind.Unary
            },
            getOrganizationMember: {
                name: "GetOrganizationMember",
                I: j.lN3,
                O: j.vBH,
                kind: _t.MethodKind.Unary
            },
            listOrganizationIdentityProviders: {
                name: "ListOrganizationIdentityProviders",
                I: j.rq6,
                O: j.dSe,
                kind: _t.MethodKind.Unary
            },
            updateOrganizationIdentityProviderSsoSettings: {
                name: "UpdateOrganizationIdentityProviderSsoSettings",
                I: j.XwO,
                O: j.BDH,
                kind: _t.MethodKind.Unary
            },
            setOrganizationIdentityProviderAllowDomainJoin: {
                name: "SetOrganizationIdentityProviderAllowDomainJoin",
                I: j.bpP,
                O: j.BDH,
                kind: _t.MethodKind.Unary
            },
            addOrganizationIdentityProviderDomainJoin: {
                name: "AddOrganizationIdentityProviderDomainJoin",
                I: j.$n5,
                O: j.BDH,
                kind: _t.MethodKind.Unary
            },
            removeOrganizationIdentityProviderDomainJoin: {
                name: "RemoveOrganizationIdentityProviderDomainJoin",
                I: j.SFI,
                O: j.BDH,
                kind: _t.MethodKind.Unary
            },
            mergeOrganizationIdentityProvider: {
                name: "MergeOrganizationIdentityProvider",
                I: j.SAH,
                O: j.mOD,
                kind: _t.MethodKind.Unary
            },
            preflightMergeOrganizationIdentityProvider: {
                name: "PreflightMergeOrganizationIdentityProvider",
                I: j.FMO,
                O: j.PUH,
                kind: _t.MethodKind.Unary
            },
            getOrganizationMergeIdpRequest: {
                name: "GetOrganizationMergeIdpRequest",
                I: j.bXT,
                O: j.TQ7,
                kind: _t.MethodKind.Unary
            },
            listOrganizationMergeIdpRequests: {
                name: "ListOrganizationMergeIdpRequests",
                I: j.Y1Y,
                O: j.G2s,
                kind: _t.MethodKind.Unary
            },
            moveOrganizationMemberToTeam: {
                name: "MoveOrganizationMemberToTeam",
                I: j.kiI,
                O: j.gqE,
                kind: _t.MethodKind.Unary
            },
            setOrganizationMemberTeams: {
                name: "SetOrganizationMemberTeams",
                I: j.NW8,
                O: j.tP0,
                kind: _t.MethodKind.Unary
            },
            removeOrganizationMember: {
                name: "RemoveOrganizationMember",
                I: j.rLu,
                O: j.Puo,
                kind: _t.MethodKind.Unary
            },
            bulkMoveOrganizationMembers: {
                name: "BulkMoveOrganizationMembers",
                I: j.VN4,
                O: j.nPy,
                kind: _t.MethodKind.Unary
            },
            startBulkMoveOrganizationMembers: {
                name: "StartBulkMoveOrganizationMembers",
                I: j.piC,
                O: j.T_o,
                kind: _t.MethodKind.Unary
            },
            getBackgroundJob: {
                name: "GetBackgroundJob",
                I: j.Nbg,
                O: j.xel,
                kind: _t.MethodKind.Unary
            },
            setOrganizationMemberRole: {
                name: "SetOrganizationMemberRole",
                I: j.xBJ,
                O: j.jFq,
                kind: _t.MethodKind.Unary
            },
            updateOrganization: {
                name: "UpdateOrganization",
                I: j.SC0,
                O: j.kz1,
                kind: _t.MethodKind.Unary
            },
            updateOrganizationTeam: {
                name: "UpdateOrganizationTeam",
                I: j.Dmk,
                O: j.RAD,
                kind: _t.MethodKind.Unary
            },
            createOrganizationTeam: {
                name: "CreateOrganizationTeam",
                I: j.iQx,
                O: j.uYE,
                kind: _t.MethodKind.Unary
            },
            startEnterpriseGrokMigration: {
                name: "StartEnterpriseGrokMigration",
                I: j.uRp,
                O: j.Cf7,
                kind: _t.MethodKind.Unary
            },
            getEnterpriseGrokMigrationStatus: {
                name: "GetEnterpriseGrokMigrationStatus",
                I: j.OyF,
                O: j.igd,
                kind: _t.MethodKind.Unary
            },
            previewOrganizationTeamSettingsCopy: {
                name: "PreviewOrganizationTeamSettingsCopy",
                I: j.CrG,
                O: j.YQr,
                kind: _t.MethodKind.Unary
            },
            copyOrganizationTeamSettingsToTeam: {
                name: "CopyOrganizationTeamSettingsToTeam",
                I: j.ign,
                O: j.WSJ,
                kind: _t.MethodKind.Unary
            },
            listOrganizationTeamSettingsCopySources: {
                name: "ListOrganizationTeamSettingsCopySources",
                I: j.YNI,
                O: j.yaP,
                kind: _t.MethodKind.Unary
            },
            getOrganizationTeamAdminCandidates: {
                name: "GetOrganizationTeamAdminCandidates",
                I: j.rgp,
                O: j.xa_,
                kind: _t.MethodKind.Unary
            },
            getDirectoryGroups: {
                name: "GetDirectoryGroups",
                I: j.LYo,
                O: j.PJy,
                kind: _t.MethodKind.Unary
            },
            updateDirectoryGroupSettings: {
                name: "UpdateDirectoryGroupSettings",
                I: j.kFu,
                O: j.Mpk,
                kind: _t.MethodKind.Unary
            },
            getOrganizationGroups: {
                name: "GetOrganizationGroups",
                I: j.f5k,
                O: j.ZJV,
                kind: _t.MethodKind.Unary
            },
            getOrganizationGroup: {
                name: "GetOrganizationGroup",
                I: j.wH4,
                O: j.uwp,
                kind: _t.MethodKind.Unary
            },
            getOrganizationGroupMembers: {
                name: "GetOrganizationGroupMembers",
                I: j.nQH,
                O: j.rd8,
                kind: _t.MethodKind.Unary
            },
            createOrganizationGroup: {
                name: "CreateOrganizationGroup",
                I: j.ed4,
                O: j.urU,
                kind: _t.MethodKind.Unary
            },
            updateOrganizationGroup: {
                name: "UpdateOrganizationGroup",
                I: j.Bhj,
                O: j.LBR,
                kind: _t.MethodKind.Unary
            },
            deleteOrganizationGroup: {
                name: "DeleteOrganizationGroup",
                I: j.pe4,
                O: j.Huq,
                kind: _t.MethodKind.Unary
            },
            addOrganizationGroupMembers: {
                name: "AddOrganizationGroupMembers",
                I: j.U8V,
                O: j.mf3,
                kind: _t.MethodKind.Unary
            },
            removeOrganizationGroupMembers: {
                name: "RemoveOrganizationGroupMembers",
                I: j.xQP,
                O: j.TGX,
                kind: _t.MethodKind.Unary
            },
            updateOrganizationGroupMember: {
                name: "UpdateOrganizationGroupMember",
                I: j.rj1,
                O: j.jWT,
                kind: _t.MethodKind.Unary
            },
            getOrganizationGroupServiceAccountMembers: {
                name: "GetOrganizationGroupServiceAccountMembers",
                I: j.bPz,
                O: j.H0j,
                kind: _t.MethodKind.Unary
            },
            getOrganizationServiceAccounts: {
                name: "GetOrganizationServiceAccounts",
                I: j.Exr,
                O: j.aYg,
                kind: _t.MethodKind.Unary
            },
            addOrganizationGroupServiceAccounts: {
                name: "AddOrganizationGroupServiceAccounts",
                I: j.ggo,
                O: j.aHm,
                kind: _t.MethodKind.Unary
            },
            removeOrganizationGroupServiceAccounts: {
                name: "RemoveOrganizationGroupServiceAccounts",
                I: j.dSX,
                O: j.nS1,
                kind: _t.MethodKind.Unary
            },
            getOrganizationGroupAutorunSettings: {
                name: "GetOrganizationGroupAutorunSettings",
                I: j.ZKL,
                O: j.f43,
                kind: _t.MethodKind.Unary
            },
            updateOrganizationGroupAutorunSettings: {
                name: "UpdateOrganizationGroupAutorunSettings",
                I: j.Cwp,
                O: j._i8,
                kind: _t.MethodKind.Unary
            },
            getOrganizationGroupMcpSettings: {
                name: "GetOrganizationGroupMcpSettings",
                I: j.z1R,
                O: j.Jrb,
                kind: _t.MethodKind.Unary
            },
            updateOrganizationGroupMcpSettings: {
                name: "UpdateOrganizationGroupMcpSettings",
                I: j.qMG,
                O: j.AbB,
                kind: _t.MethodKind.Unary
            },
            exportOrganizationGroupMcpAllowlist: {
                name: "ExportOrganizationGroupMcpAllowlist",
                I: j.DI3,
                O: j.zhf,
                kind: _t.MethodKind.Unary
            },
            importOrganizationGroupMcpAllowlist: {
                name: "ImportOrganizationGroupMcpAllowlist",
                I: j.YJq,
                O: j.WWg,
                kind: _t.MethodKind.Unary
            },
            exportTeamMcpAllowlist: {
                name: "ExportTeamMcpAllowlist",
                I: j.m0D,
                O: j.wpF,
                kind: _t.MethodKind.Unary
            },
            importTeamMcpAllowlist: {
                name: "ImportTeamMcpAllowlist",
                I: j.fVs,
                O: j.xxr,
                kind: _t.MethodKind.Unary
            },
            resetOrganizationGroupAgentRunModeToAutoReview: {
                name: "ResetOrganizationGroupAgentRunModeToAutoReview",
                I: j.ePV,
                O: j.EuD,
                kind: _t.MethodKind.Unary
            },
            getOrganizationGroupModelAllowlist: {
                name: "GetOrganizationGroupModelAllowlist",
                I: j.M89,
                O: j.qlA,
                kind: _t.MethodKind.Unary
            },
            updateOrganizationGroupModelAllowlist: {
                name: "UpdateOrganizationGroupModelAllowlist",
                I: j.$bH,
                O: j.nCl,
                kind: _t.MethodKind.Unary
            },
            getOrganizationGroupAutoReviewSettings: {
                name: "GetOrganizationGroupAutoReviewSettings",
                I: j.QOh,
                O: j.qbQ,
                kind: _t.MethodKind.Unary
            },
            updateOrganizationGroupAutoReviewSettings: {
                name: "UpdateOrganizationGroupAutoReviewSettings",
                I: j.DtR,
                O: j.dDc,
                kind: _t.MethodKind.Unary
            },
            getOrganizationGroupSmartAutoSettings: {
                name: "GetOrganizationGroupSmartAutoSettings",
                I: j.H8G,
                O: j.rt0,
                kind: _t.MethodKind.Unary
            },
            updateOrganizationGroupSmartAutoSettings: {
                name: "UpdateOrganizationGroupSmartAutoSettings",
                I: j.Yir,
                O: j.GDG,
                kind: _t.MethodKind.Unary
            },
            createOrganizationGroupAnthropicCyberEnrollmentUrl: {
                name: "CreateOrganizationGroupAnthropicCyberEnrollmentUrl",
                I: j.C1F,
                O: j.wqi,
                kind: _t.MethodKind.Unary
            },
            requestOrganizationGroupAnthropicEfs: {
                name: "RequestOrganizationGroupAnthropicEfs",
                I: j.rF_,
                O: j.DmQ,
                kind: _t.MethodKind.Unary
            },
            requestOrganizationAnthropicEfs: {
                name: "RequestOrganizationAnthropicEfs",
                I: j.Y6P,
                O: j.QeE,
                kind: _t.MethodKind.Unary
            },
            getOrganizationAnthropicEfsStatus: {
                name: "GetOrganizationAnthropicEfsStatus",
                I: j.BHf,
                O: j.lqZ,
                kind: _t.MethodKind.Unary
            },
            reviewAnthropicEfsRequestInternal: {
                name: "ReviewAnthropicEfsRequestInternal",
                I: j.ovZ,
                O: j.gdR,
                kind: _t.MethodKind.Unary
            },
            getTeamGroups: {
                name: "GetTeamGroups",
                I: j.JbB,
                O: j.nrv,
                kind: _t.MethodKind.Unary
            },
            getTeamGroup: {
                name: "GetTeamGroup",
                I: j.UQh,
                O: j.cUB,
                kind: _t.MethodKind.Unary
            },
            getTeamGroupMembers: {
                name: "GetTeamGroupMembers",
                I: j.J67,
                O: j.VBR,
                kind: _t.MethodKind.Unary
            },
            createTeamGroup: {
                name: "CreateTeamGroup",
                I: j.cbD,
                O: j.CiW,
                kind: _t.MethodKind.Unary
            },
            updateTeamGroup: {
                name: "UpdateTeamGroup",
                I: j.NS0,
                O: j.JL8,
                kind: _t.MethodKind.Unary
            },
            deleteTeamGroup: {
                name: "DeleteTeamGroup",
                I: j.p9b,
                O: j.VyS,
                kind: _t.MethodKind.Unary
            },
            addTeamGroupMembers: {
                name: "AddTeamGroupMembers",
                I: j.yqO,
                O: j.Gc8,
                kind: _t.MethodKind.Unary
            },
            removeTeamGroupMembers: {
                name: "RemoveTeamGroupMembers",
                I: j.rA4,
                O: j.lER,
                kind: _t.MethodKind.Unary
            },
            updateTeamGroupMember: {
                name: "UpdateTeamGroupMember",
                I: j.jG,
                O: j.jFj,
                kind: _t.MethodKind.Unary
            },
            getTeamGroupAutorunSettings: {
                name: "GetTeamGroupAutorunSettings",
                I: j.bK1,
                O: j.bJ,
                kind: _t.MethodKind.Unary
            },
            updateTeamGroupAutorunSettings: {
                name: "UpdateTeamGroupAutorunSettings",
                I: j.KTu,
                O: j._$O,
                kind: _t.MethodKind.Unary
            },
            getTeamGroupMcpSettings: {
                name: "GetTeamGroupMcpSettings",
                I: j.P6l,
                O: j.zL5,
                kind: _t.MethodKind.Unary
            },
            updateTeamGroupMcpSettings: {
                name: "UpdateTeamGroupMcpSettings",
                I: j.uFn,
                O: j.mjT,
                kind: _t.MethodKind.Unary
            },
            listBuiltinMcpServerTools: {
                name: "ListBuiltinMcpServerTools",
                I: j.FXL,
                O: j.hiE,
                kind: _t.MethodKind.Unary
            },
            exportTeamGroupMcpAllowlist: {
                name: "ExportTeamGroupMcpAllowlist",
                I: j.dMQ,
                O: j.$gS,
                kind: _t.MethodKind.Unary
            },
            importTeamGroupMcpAllowlist: {
                name: "ImportTeamGroupMcpAllowlist",
                I: j.sMu,
                O: j.osZ,
                kind: _t.MethodKind.Unary
            },
            resetTeamGroupAgentRunModeToAutoReview: {
                name: "ResetTeamGroupAgentRunModeToAutoReview",
                I: j.I3c,
                O: j.Qnc,
                kind: _t.MethodKind.Unary
            },
            getTeamGroupModelAllowlist: {
                name: "GetTeamGroupModelAllowlist",
                I: j.s$M,
                O: j.MJ,
                kind: _t.MethodKind.Unary
            },
            updateTeamGroupModelAllowlist: {
                name: "UpdateTeamGroupModelAllowlist",
                I: j.pbs,
                O: j.PD$,
                kind: _t.MethodKind.Unary
            },
            getTeamGroupAutoReviewSettings: {
                name: "GetTeamGroupAutoReviewSettings",
                I: j.Mx4,
                O: j.gDX,
                kind: _t.MethodKind.Unary
            },
            updateTeamGroupAutoReviewSettings: {
                name: "UpdateTeamGroupAutoReviewSettings",
                I: j.dXc,
                O: j.zF8,
                kind: _t.MethodKind.Unary
            },
            getTeamSandNetworkSettings: {
                name: "GetTeamSandNetworkSettings",
                I: j.oTS,
                O: j.eU6,
                kind: _t.MethodKind.Unary
            },
            getTeamGrokBotTrial: {
                name: "GetTeamGrokBotTrial",
                I: j.ve,
                O: j.HDB,
                kind: _t.MethodKind.Unary
            },
            listTeamGrokBotAgentsAdmin: {
                name: "ListTeamGrokBotAgentsAdmin",
                I: j.Kbt,
                O: j.kAL,
                kind: _t.MethodKind.Unary
            },
            updateTeamSandNetworkSettings: {
                name: "UpdateTeamSandNetworkSettings",
                I: j.NNm,
                O: j.pII,
                kind: _t.MethodKind.Unary
            },
            getTeamGroupSandNetworkSettings: {
                name: "GetTeamGroupSandNetworkSettings",
                I: j.pfR,
                O: j.rDR,
                kind: _t.MethodKind.Unary
            },
            updateTeamGroupSandNetworkSettings: {
                name: "UpdateTeamGroupSandNetworkSettings",
                I: j.owH,
                O: j.KVq,
                kind: _t.MethodKind.Unary
            },
            getTeamGroupGrokBotCapabilities: {
                name: "GetTeamGroupGrokBotCapabilities",
                I: j.gsc,
                O: j.Eyr,
                kind: _t.MethodKind.Unary
            },
            updateTeamGroupGrokBotCapabilities: {
                name: "UpdateTeamGroupGrokBotCapabilities",
                I: j.Nl7,
                O: j.lu1,
                kind: _t.MethodKind.Unary
            },
            getTeamGroupSmartAutoSettings: {
                name: "GetTeamGroupSmartAutoSettings",
                I: j.hu7,
                O: j.BPt,
                kind: _t.MethodKind.Unary
            },
            updateTeamGroupSmartAutoSettings: {
                name: "UpdateTeamGroupSmartAutoSettings",
                I: j.Gor,
                O: j.WWO,
                kind: _t.MethodKind.Unary
            },
            createTeamGroupAnthropicCyberEnrollmentUrl: {
                name: "CreateTeamGroupAnthropicCyberEnrollmentUrl",
                I: j.oJv,
                O: j.UPX,
                kind: _t.MethodKind.Unary
            },
            requestTeamGroupAnthropicEfs: {
                name: "RequestTeamGroupAnthropicEfs",
                I: j.be7,
                O: j.THz,
                kind: _t.MethodKind.Unary
            },
            getTeamAnthropicEfsStatus: {
                name: "GetTeamAnthropicEfsStatus",
                I: j.TdK,
                O: j.v6H,
                kind: _t.MethodKind.Unary
            },
            listTeamGroupScimDirectories: {
                name: "ListTeamGroupScimDirectories",
                I: j.DEE,
                O: j.xUt,
                kind: _t.MethodKind.Unary
            },
            listTeamGroupScimGroupsFromUpstream: {
                name: "ListTeamGroupScimGroupsFromUpstream",
                I: j.nsd,
                O: j.xYI,
                kind: _t.MethodKind.Unary
            },
            listTeamGroupScimTargetMappings: {
                name: "ListTeamGroupScimTargetMappings",
                I: j.QE,
                O: j.gsU,
                kind: _t.MethodKind.Unary
            },
            createTeamGroupScimTargetMapping: {
                name: "CreateTeamGroupScimTargetMapping",
                I: j.lW,
                O: j.$a1,
                kind: _t.MethodKind.Unary
            },
            deleteTeamGroupScimTargetMapping: {
                name: "DeleteTeamGroupScimTargetMapping",
                I: j.mA,
                O: j.U1k,
                kind: _t.MethodKind.Unary
            },
            getGroups: {
                name: "GetGroups",
                I: j.CY$,
                O: j.WsC,
                kind: _t.MethodKind.Unary
            },
            getGroupMembers: {
                name: "GetGroupMembers",
                I: j.i$e,
                O: j.StO,
                kind: _t.MethodKind.Unary
            },
            createGroup: {
                name: "CreateGroup",
                I: j.p8r,
                O: j.Dsz,
                kind: _t.MethodKind.Unary
            },
            updateGroup: {
                name: "UpdateGroup",
                I: j.Eh9,
                O: j.wrT,
                kind: _t.MethodKind.Unary
            },
            deleteGroup: {
                name: "DeleteGroup",
                I: j.SBx,
                O: j.uDb,
                kind: _t.MethodKind.Unary
            },
            addGroupMembers: {
                name: "AddGroupMembers",
                I: j.Hcr,
                O: j.he9,
                kind: _t.MethodKind.Unary
            },
            removeGroupMembers: {
                name: "RemoveGroupMembers",
                I: j.im6,
                O: j.SSe,
                kind: _t.MethodKind.Unary
            },
            bulkAssignGroupMembers: {
                name: "BulkAssignGroupMembers",
                I: j.t3S,
                O: j.PXK,
                kind: _t.MethodKind.Unary
            },
            previewAttachGroupToDirectory: {
                name: "PreviewAttachGroupToDirectory",
                I: j.OeX,
                O: j.Wow,
                kind: _t.MethodKind.Unary
            },
            detachGroupFromDirectory: {
                name: "DetachGroupFromDirectory",
                I: j.tm2,
                O: j.prK,
                kind: _t.MethodKind.Unary
            },
            getScimConflicts: {
                name: "GetScimConflicts",
                I: j.l9M,
                O: j.nPZ,
                kind: _t.MethodKind.Unary
            },
            listScimDirectories: {
                name: "ListScimDirectories",
                I: j.Dxu,
                O: j.LM8,
                kind: _t.MethodKind.Unary
            },
            getOrganizationScimConfigurationLinks: {
                name: "GetOrganizationScimConfigurationLinks",
                I: j.Dxu,
                O: j.C61,
                kind: _t.MethodKind.Unary
            },
            createScimDirectory: {
                name: "CreateScimDirectory",
                I: j.BwS,
                O: j.dnd,
                kind: _t.MethodKind.Unary
            },
            updateScimDirectorySyncSettings: {
                name: "UpdateScimDirectorySyncSettings",
                I: j.Spq,
                O: j.YCH,
                kind: _t.MethodKind.Unary
            },
            deleteScimDirectory: {
                name: "DeleteScimDirectory",
                I: j.gwk,
                O: j.CN_,
                kind: _t.MethodKind.Unary
            },
            listScimGroupsFromUpstream: {
                name: "ListScimGroupsFromUpstream",
                I: j.lmw,
                O: j.na4,
                kind: _t.MethodKind.Unary
            },
            listScimTargetMappings: {
                name: "ListScimTargetMappings",
                I: j.OWn,
                O: j.c3u,
                kind: _t.MethodKind.Unary
            },
            listOrganizationGroupTargetMappings: {
                name: "ListOrganizationGroupTargetMappings",
                I: j.UTl,
                O: j.i4X,
                kind: _t.MethodKind.Unary
            },
            createScimTargetMapping: {
                name: "CreateScimTargetMapping",
                I: j.PwZ,
                O: j.vFW,
                kind: _t.MethodKind.Unary
            },
            deleteScimTargetMapping: {
                name: "DeleteScimTargetMapping",
                I: j.gFI,
                O: j.c7s,
                kind: _t.MethodKind.Unary
            },
            getActivationCheckoutUrl: {
                name: "GetActivationCheckoutUrl",
                I: j.hWx,
                O: j.dr7,
                kind: _t.MethodKind.Unary
            },
            checkPromotionEligibility: {
                name: "CheckPromotionEligibility",
                I: j.yD0,
                O: j.MEI,
                kind: _t.MethodKind.Unary
            },
            activatePromotion: {
                name: "ActivatePromotion",
                I: j.uHx,
                O: j.yDS,
                kind: _t.MethodKind.Unary
            },
            getTeamCustomerPortalUrl: {
                name: "GetTeamCustomerPortalUrl",
                I: j.qjo,
                O: j.M_,
                kind: _t.MethodKind.Unary
            },
            cancelPendingTeamSubscriptionNow: {
                name: "CancelPendingTeamSubscriptionNow",
                I: j.v_r,
                O: j.$n,
                kind: _t.MethodKind.Unary
            },
            createPendingTeamProCheckout: {
                name: "CreatePendingTeamProCheckout",
                I: j.PTe,
                O: j.pF3,
                kind: _t.MethodKind.Unary
            },
            getTeamPrepaidBilling: {
                name: "GetTeamPrepaidBilling",
                I: j.FcH,
                O: j.$qn,
                kind: _t.MethodKind.Unary
            },
            setTeamPrepaidAutoTopUp: {
                name: "SetTeamPrepaidAutoTopUp",
                I: j.$ty,
                O: j.VN6,
                kind: _t.MethodKind.Unary
            },
            createPrepaidTopUp: {
                name: "CreatePrepaidTopUp",
                I: j.XAW,
                O: j.bTQ,
                kind: _t.MethodKind.Unary
            },
            getUserPrepaidBilling: {
                name: "GetUserPrepaidBilling",
                I: j.b4u,
                O: j.$H_,
                kind: _t.MethodKind.Unary
            },
            setUserPrepaidAutoTopUp: {
                name: "SetUserPrepaidAutoTopUp",
                I: j.h3x,
                O: j.D9s,
                kind: _t.MethodKind.Unary
            },
            createUserPrepaidTopUp: {
                name: "CreateUserPrepaidTopUp",
                I: j.uDD,
                O: j.EO4,
                kind: _t.MethodKind.Unary
            },
            getTeamMembers: {
                name: "GetTeamMembers",
                I: j.Imd,
                O: j.QI7,
                kind: _t.MethodKind.Unary
            },
            sendTeamInvite: {
                name: "SendTeamInvite",
                I: j.cn,
                O: j.YBJ,
                kind: _t.MethodKind.Unary
            },
            getTeamInviteLink: {
                name: "GetTeamInviteLink",
                I: j.C4p,
                O: j.gRj,
                kind: _t.MethodKind.Unary
            },
            acceptInvite: {
                name: "AcceptInvite",
                I: j.LRJ,
                O: j.bCe,
                kind: _t.MethodKind.Unary
            },
            getTeamInviteMetadata: {
                name: "GetTeamInviteMetadata",
                I: j.h1G,
                O: j.doQ,
                kind: _t.MethodKind.Unary
            },
            listContactImportConnections: {
                name: "ListContactImportConnections",
                I: j.Ezc,
                O: j.cDB,
                kind: _t.MethodKind.Unary
            },
            getGoogleContactImportAuthUrl: {
                name: "GetGoogleContactImportAuthUrl",
                I: j.$7Y,
                O: j.LoC,
                kind: _t.MethodKind.Unary
            },
            connectGoogleContactImportCallback: {
                name: "ConnectGoogleContactImportCallback",
                I: j.X38,
                O: j.tZA,
                kind: _t.MethodKind.Unary
            },
            listContactImportContacts: {
                name: "ListContactImportContacts",
                I: j.gNW,
                O: j.SuV,
                kind: _t.MethodKind.Unary
            },
            getContactImportAvatar: {
                name: "GetContactImportAvatar",
                I: j.mPq,
                O: j.i5j,
                kind: _t.MethodKind.Unary
            },
            disconnectContactImportConnection: {
                name: "DisconnectContactImportConnection",
                I: j.jzf,
                O: j.zu1,
                kind: _t.MethodKind.Unary
            },
            createTeam: {
                name: "CreateTeam",
                I: j.nxO,
                O: j.vgA,
                kind: _t.MethodKind.Unary
            },
            getJoinableTeamsByDomain: {
                name: "GetJoinableTeamsByDomain",
                I: j.ND4,
                O: j.Rkv,
                kind: _t.MethodKind.Unary
            },
            joinTeamByDomain: {
                name: "JoinTeamByDomain",
                I: j.E2N,
                O: j.iX6,
                kind: _t.MethodKind.Unary
            },
            updateTeamDomainJoinSetting: {
                name: "UpdateTeamDomainJoinSetting",
                I: j.yog,
                O: j.K_o,
                kind: _t.MethodKind.Unary
            },
            getTeamMemberDomains: {
                name: "GetTeamMemberDomains",
                I: j.Obu,
                O: j.S5H,
                kind: _t.MethodKind.Unary
            },
            getTeamIdForReactivation: {
                name: "GetTeamIdForReactivation",
                I: j._CN,
                O: j.Kww,
                kind: _t.MethodKind.Unary
            },
            changeSeat: {
                name: "ChangeSeat",
                I: j.HZm,
                O: j.lRG,
                kind: _t.MethodKind.Unary
            },
            changeTeamSubscription: {
                name: "ChangeTeamSubscription",
                I: j.oOo,
                O: j.MIx,
                kind: _t.MethodKind.Unary
            },
            connectGithubCallback: {
                name: "ConnectGithubCallback",
                I: j.SH9,
                O: j._$M,
                kind: _t.MethodKind.Unary
            },
            registerGithubCursorCode: {
                name: "RegisterGithubCursorCode",
                I: j.H1p,
                O: j.DUo,
                kind: _t.MethodKind.Unary
            },
            prepareGithubConnectFlow: {
                name: "PrepareGithubConnectFlow",
                I: j.uif,
                O: j.EJq,
                kind: _t.MethodKind.Unary
            },
            completeGithubConnectFlow: {
                name: "CompleteGithubConnectFlow",
                I: j.OjU,
                O: j.Ohd,
                kind: _t.MethodKind.Unary
            },
            disconnectGithub: {
                name: "DisconnectGithub",
                I: j.D57,
                O: j.llV,
                kind: _t.MethodKind.Unary
            },
            prepareSetupGithubEnterpriseApp: {
                name: "PrepareSetupGithubEnterpriseApp",
                I: j.jPV,
                O: j.lP,
                kind: _t.MethodKind.Unary
            },
            finishSetupGithubEnterpriseApp: {
                name: "FinishSetupGithubEnterpriseApp",
                I: j.jiB,
                O: j.Z48,
                kind: _t.MethodKind.Unary
            },
            listGithubEnterpriseApps: {
                name: "ListGithubEnterpriseApps",
                I: j.k6E,
                O: j.a$2,
                kind: _t.MethodKind.Unary
            },
            deleteGithubEnterpriseApp: {
                name: "DeleteGithubEnterpriseApp",
                I: j.mZ$,
                O: j.WBx,
                kind: _t.MethodKind.Unary
            },
            setupGitlabEnterpriseInstance: {
                name: "SetupGitlabEnterpriseInstance",
                I: j.MS0,
                O: j.k09,
                kind: _t.MethodKind.Unary
            },
            listGitlabEnterpriseInstances: {
                name: "ListGitlabEnterpriseInstances",
                I: j.gvC,
                O: j.WaG,
                kind: _t.MethodKind.Unary
            },
            setGitlabEnterpriseHostControlledServiceAccountToken: {
                name: "SetGitlabEnterpriseHostControlledServiceAccountToken",
                I: j.Rns,
                O: j.PFp,
                kind: _t.MethodKind.Unary
            },
            rotateGitlabEnterpriseWebhookSecret: {
                name: "RotateGitlabEnterpriseWebhookSecret",
                I: j.eor,
                O: j.oTi,
                kind: _t.MethodKind.Unary
            },
            deleteGitlabEnterpriseInstance: {
                name: "DeleteGitlabEnterpriseInstance",
                I: j.iVu,
                O: j.wuD,
                kind: _t.MethodKind.Unary
            },
            setupBitbucketServerInstance: {
                name: "SetupBitbucketServerInstance",
                I: j.w9j,
                O: j.c1o,
                kind: _t.MethodKind.Unary
            },
            listBitbucketServerInstances: {
                name: "ListBitbucketServerInstances",
                I: j.Q3t,
                O: j.Oef,
                kind: _t.MethodKind.Unary
            },
            updateBitbucketServerInstanceToken: {
                name: "UpdateBitbucketServerInstanceToken",
                I: j.fKS,
                O: j.tkR,
                kind: _t.MethodKind.Unary
            },
            deleteBitbucketServerInstance: {
                name: "DeleteBitbucketServerInstance",
                I: j.opt,
                O: j.ABq,
                kind: _t.MethodKind.Unary
            },
            syncGitlabRepos: {
                name: "SyncGitlabRepos",
                I: j.ZrD,
                O: j.ffl,
                kind: _t.MethodKind.Unary
            },
            getGitlabReposSyncStatus: {
                name: "GetGitlabReposSyncStatus",
                I: j.jp5,
                O: j.dpH,
                kind: _t.MethodKind.Unary
            },
            updateRole: {
                name: "UpdateRole",
                I: j.$ht,
                O: j.BrS,
                kind: _t.MethodKind.Unary
            },
            removeMember: {
                name: "RemoveMember",
                I: j.mig,
                O: j.sX9,
                kind: _t.MethodKind.Unary
            },
            getMemberRemovalInsights: {
                name: "GetMemberRemovalInsights",
                I: j.BF8,
                O: j.t__,
                kind: _t.MethodKind.Unary
            },
            getSignUpType: {
                name: "GetSignUpType",
                I: j.u_Q,
                O: j.WsA,
                kind: _t.MethodKind.Unary
            },
            getHardLimit: {
                name: "GetHardLimit",
                I: j.g6R,
                O: j.oyU,
                kind: _t.MethodKind.Unary
            },
            setHardLimit: {
                name: "SetHardLimit",
                I: j.yL5,
                O: j.se9,
                kind: _t.MethodKind.Unary
            },
            getSpendLimitPolicy: {
                name: "GetSpendLimitPolicy",
                I: j.zEV,
                O: j.pig,
                kind: _t.MethodKind.Unary
            },
            setSpendLimitPolicy: {
                name: "SetSpendLimitPolicy",
                I: j.LMY,
                O: j.LLB,
                kind: _t.MethodKind.Unary
            },
            getOrgTeamBudgets: {
                name: "GetOrgTeamBudgets",
                I: j.DXb,
                O: j.D42,
                kind: _t.MethodKind.Unary
            },
            setOrgTeamBudget: {
                name: "SetOrgTeamBudget",
                I: j.yWy,
                O: j.as5,
                kind: _t.MethodKind.Unary
            },
            getOrgDailySpendByCategory: {
                name: "GetOrgDailySpendByCategory",
                I: j.ubJ,
                O: j.GlZ,
                kind: _t.MethodKind.Unary
            },
            enableOnDemandSpend: {
                name: "EnableOnDemandSpend",
                I: j.toG,
                O: j.V$m,
                kind: _t.MethodKind.Unary
            },
            deleteAccount: {
                name: "DeleteAccount",
                I: j.gqj,
                O: j.wER,
                kind: _t.MethodKind.Unary
            },
            getAccountSettings: {
                name: "GetAccountSettings",
                I: j.oNu,
                O: j.Hdf,
                kind: _t.MethodKind.Unary
            },
            createAccountHandoff: {
                name: "CreateAccountHandoff",
                I: j.vaB,
                O: j.rzz,
                kind: _t.MethodKind.Unary
            },
            startAccountCollapseRun: {
                name: "StartAccountCollapseRun",
                I: j.Dyp,
                O: j.V4V,
                kind: _t.MethodKind.Unary
            },
            getAccountCollapseRun: {
                name: "GetAccountCollapseRun",
                I: j.DSj,
                O: j.LZR,
                kind: _t.MethodKind.Unary
            },
            startAccountCollapseRunInternal: {
                name: "StartAccountCollapseRunInternal",
                I: j.Dyp,
                O: j.V4V,
                kind: _t.MethodKind.Unary
            },
            getAccountCollapseRunInternal: {
                name: "GetAccountCollapseRunInternal",
                I: j.DSj,
                O: j.LZR,
                kind: _t.MethodKind.Unary
            },
            startCursorAccountCollapse: {
                name: "StartCursorAccountCollapse",
                I: j.o9R,
                O: j.Kot,
                kind: _t.MethodKind.Unary
            },
            getCursorAccountCollapseByTarget: {
                name: "GetCursorAccountCollapseByTarget",
                I: j.EBP,
                O: j.m85,
                kind: _t.MethodKind.Unary
            },
            startCursorSessionAccountCollapse: {
                name: "StartCursorSessionAccountCollapse",
                I: j.kgd,
                O: j.Kot,
                kind: _t.MethodKind.Unary
            },
            getCursorSessionAccountCollapse: {
                name: "GetCursorSessionAccountCollapse",
                I: j.kYK,
                O: j.m85,
                kind: _t.MethodKind.Unary
            },
            listCursorSessionAccountCollapseCandidates: {
                name: "ListCursorSessionAccountCollapseCandidates",
                I: j.SFZ,
                O: j.xL7,
                kind: _t.MethodKind.Unary
            },
            startCursorSessionAccountCollapseProof: {
                name: "StartCursorSessionAccountCollapseProof",
                I: j.CHM,
                O: j.G$Z,
                kind: _t.MethodKind.Unary
            },
            completeCursorSessionAccountCollapseProof: {
                name: "CompleteCursorSessionAccountCollapseProof",
                I: j.baZ,
                O: j.N_h,
                kind: _t.MethodKind.Unary
            },
            sendDownloadEmail: {
                name: "SendDownloadEmail",
                I: j.e5r,
                O: j.C3d,
                kind: _t.MethodKind.Unary
            },
            getMonthlyInvoice: {
                name: "GetMonthlyInvoice",
                I: j.yO3,
                O: j.Si_,
                kind: _t.MethodKind.Unary
            },
            listInvoiceCycles: {
                name: "ListInvoiceCycles",
                I: j.yMo,
                O: j.G8V,
                kind: _t.MethodKind.Unary
            },
            getDailySpendByCategory: {
                name: "GetDailySpendByCategory",
                I: j.irI,
                O: j.GlZ,
                kind: _t.MethodKind.Unary
            },
            getPricingHistory: {
                name: "GetPricingHistory",
                I: j.Akd,
                O: j.i7t,
                kind: _t.MethodKind.Unary
            },
            listBackgroundComposerSecrets: {
                name: "ListBackgroundComposerSecrets",
                I: j.$F$,
                O: j.dnq,
                kind: _t.MethodKind.Unary
            },
            createBackgroundComposerSecret: {
                name: "CreateBackgroundComposerSecret",
                I: j.sJl,
                O: j.ukh,
                kind: _t.MethodKind.Unary
            },
            createBackgroundComposerSecretBatch: {
                name: "CreateBackgroundComposerSecretBatch",
                I: j.S3E,
                O: j.o6Z,
                kind: _t.MethodKind.Unary
            },
            revokeBackgroundComposerSecret: {
                name: "RevokeBackgroundComposerSecret",
                I: j.AU3,
                O: j.keR,
                kind: _t.MethodKind.Unary
            },
            updateBackgroundComposerSecret: {
                name: "UpdateBackgroundComposerSecret",
                I: j.zYv,
                O: j.FmW,
                kind: _t.MethodKind.Unary
            },
            getMcpConfig: {
                name: "GetMcpConfig",
                I: j.glW,
                O: j.o9t,
                kind: _t.MethodKind.Unary
            },
            getEffectiveMcpConfigForUser: {
                name: "GetEffectiveMcpConfigForUser",
                I: j.trz,
                O: j.J43,
                kind: _t.MethodKind.Unary
            },
            getAvailableMcpServers: {
                name: "GetAvailableMcpServers",
                I: j.J$f,
                O: j.Bw0,
                kind: _t.MethodKind.Unary
            },
            getMcpServerUsageSummary: {
                name: "GetMcpServerUsageSummary",
                I: j.YVG,
                O: j.czg,
                kind: _t.MethodKind.Unary
            },
            setMcpConfig: {
                name: "SetMcpConfig",
                I: j.mK6,
                O: j.EZs,
                kind: _t.MethodKind.Unary
            },
            updateUserDefaultMcpSettings: {
                name: "UpdateUserDefaultMcpSettings",
                I: j.osn,
                O: j.Acq,
                kind: _t.MethodKind.Unary
            },
            markMcpServersSeen: {
                name: "MarkMcpServersSeen",
                I: j.umz,
                O: j.Mdf,
                kind: _t.MethodKind.Unary
            },
            storeMcpOAuthToken: {
                name: "StoreMcpOAuthToken",
                I: j.vg1,
                O: j.dWE,
                kind: _t.MethodKind.Unary
            },
            getMcpOAuthTokens: {
                name: "GetMcpOAuthTokens",
                I: j.h3R,
                O: j.bhd,
                kind: _t.MethodKind.Unary
            },
            listSandMcpTools: {
                name: "ListSandMcpTools",
                I: j.Hrg,
                O: j.ZbR,
                kind: _t.MethodKind.Unary
            },
            previewTeamMcpTools: {
                name: "PreviewTeamMcpTools",
                I: j.wCe,
                O: j.Q87,
                kind: _t.MethodKind.Unary
            },
            executeSandMcpTool: {
                name: "ExecuteSandMcpTool",
                I: j.BCh,
                O: j.xPw,
                kind: _t.MethodKind.Unary
            },
            readSandMcpResource: {
                name: "ReadSandMcpResource",
                I: j.cOC,
                O: j.wu6,
                kind: _t.MethodKind.Unary
            },
            classifySandAutoReview: {
                name: "ClassifySandAutoReview",
                I: j.jaI,
                O: j.lSE,
                kind: _t.MethodKind.Unary
            },
            recordSandAuditEvents: {
                name: "RecordSandAuditEvents",
                I: j.b7M,
                O: j.J$G,
                kind: _t.MethodKind.Unary
            },
            mcpOAuthRefreshLockBegin: {
                name: "McpOAuthRefreshLockBegin",
                I: j.yoJ,
                O: j.mIz,
                kind: _t.MethodKind.Unary
            },
            mcpOAuthRefreshLockRelease: {
                name: "McpOAuthRefreshLockRelease",
                I: j.iCJ,
                O: j.sZ0,
                kind: _t.MethodKind.Unary
            },
            deleteMcpOAuthToken: {
                name: "DeleteMcpOAuthToken",
                I: j.f8d,
                O: j.pO3,
                kind: _t.MethodKind.Unary
            },
            validateMcpOAuthTokens: {
                name: "ValidateMcpOAuthTokens",
                I: j.jQX,
                O: j.ANG,
                kind: _t.MethodKind.Unary
            },
            checkHttpMcpStatus: {
                name: "CheckHttpMcpStatus",
                I: j.esH,
                O: j.A3J,
                kind: _t.MethodKind.Unary
            },
            storeMcpOAuthPendingState: {
                name: "StoreMcpOAuthPendingState",
                I: j._tH,
                O: j.IeM,
                kind: _t.MethodKind.Unary
            },
            getMcpOAuthPendingState: {
                name: "GetMcpOAuthPendingState",
                I: j.RSA,
                O: j.veH,
                kind: _t.MethodKind.Unary
            },
            renameMcpOAuthAccount: {
                name: "RenameMcpOAuthAccount",
                I: j.kX,
                O: j.qon,
                kind: _t.MethodKind.Unary
            },
            deleteMcpOAuthAccount: {
                name: "DeleteMcpOAuthAccount",
                I: j.Bg_,
                O: j.nEl,
                kind: _t.MethodKind.Unary
            },
            completeMcpOAuth: {
                name: "CompleteMcpOAuth",
                I: j.Ag,
                O: j.qdS,
                kind: _t.MethodKind.Unary
            },
            getPluginMcpConfig: {
                name: "GetPluginMcpConfig",
                I: j.RTM,
                O: j.v90,
                kind: _t.MethodKind.Unary
            },
            batchGetPluginMcpConfig: {
                name: "BatchGetPluginMcpConfig",
                I: j.XRL,
                O: j.Jxy,
                kind: _t.MethodKind.Unary
            },
            addMcpServersFromPlugin: {
                name: "AddMcpServersFromPlugin",
                I: j.awl,
                O: j.GG3,
                kind: _t.MethodKind.Unary
            },
            moveUserMcpServerToTeam: {
                name: "MoveUserMcpServerToTeam",
                I: j.Jfv,
                O: j.FcC,
                kind: _t.MethodKind.Unary
            },
            getTeamMcpPlacementDefault: {
                name: "GetTeamMcpPlacementDefault",
                I: j.dXJ,
                O: j.D5E,
                kind: _t.MethodKind.Unary
            },
            updateTeamMcpPlacementDefault: {
                name: "UpdateTeamMcpPlacementDefault",
                I: j.eEB,
                O: j.yEd,
                kind: _t.MethodKind.Unary
            },
            migrateTeamMcpServersToDefaultMarketplace: {
                name: "MigrateTeamMcpServersToDefaultMarketplace",
                I: j.dLd,
                O: j.lWb,
                kind: _t.MethodKind.Unary
            },
            probeMcpUrl: {
                name: "ProbeMcpUrl",
                I: j.due,
                O: j.BpA,
                kind: _t.MethodKind.Unary
            },
            createTeamWithFreeTrial: {
                name: "CreateTeamWithFreeTrial",
                I: j.LAq,
                O: j.x2A,
                kind: _t.MethodKind.Unary
            },
            createTeamWithOrg: {
                name: "CreateTeamWithOrg",
                I: j.BlC,
                O: j.Dd7,
                kind: _t.MethodKind.Unary
            },
            getTeamHasValidPaymentMethod: {
                name: "GetTeamHasValidPaymentMethod",
                I: j.MrA,
                O: j.gJp,
                kind: _t.MethodKind.Unary
            },
            getTeamPrivacyModeForced: {
                name: "GetTeamPrivacyModeForced",
                I: j.lKh,
                O: j.rsP,
                kind: _t.MethodKind.Unary
            },
            switchTeamPrivacyMode: {
                name: "SwitchTeamPrivacyMode",
                I: j.SmK,
                O: j.kjp,
                kind: _t.MethodKind.Unary
            },
            updateFastRequests: {
                name: "UpdateFastRequests",
                I: j.rjZ,
                O: j.FFm,
                kind: _t.MethodKind.Unary
            },
            getFastRequests: {
                name: "GetFastRequests",
                I: j.iSm,
                O: j.aUJ,
                kind: _t.MethodKind.Unary
            },
            getDownloadLink: {
                name: "GetDownloadLink",
                I: j.Upy,
                O: j.AlS,
                kind: _t.MethodKind.Unary
            },
            getCliDownloadUrl: {
                name: "GetCliDownloadUrl",
                I: j.Xhp,
                O: j.JRd,
                kind: _t.MethodKind.Unary
            },
            getSsoConfigurationLinks: {
                name: "GetSsoConfigurationLinks",
                I: j._$o,
                O: j.Opj,
                kind: _t.MethodKind.Unary
            },
            getScimConfigurationLinks: {
                name: "GetScimConfigurationLinks",
                I: j.n$I,
                O: j.fMg,
                kind: _t.MethodKind.Unary
            },
            setAdminOnlyUsagePricing: {
                name: "SetAdminOnlyUsagePricing",
                I: j.SAF,
                O: j.Ix8,
                kind: _t.MethodKind.Unary
            },
            getYearlyUpgradeEligibility: {
                name: "GetYearlyUpgradeEligibility",
                I: j.DLp,
                O: j.R$$,
                kind: _t.MethodKind.Unary
            },
            upgradeToYearly: {
                name: "UpgradeToYearly",
                I: j.bBp,
                O: j.rk2,
                kind: _t.MethodKind.Unary
            },
            getEnterpriseCTAEligibility: {
                name: "GetEnterpriseCTAEligibility",
                I: j.i6G,
                O: j.i0P,
                kind: _t.MethodKind.Unary
            },
            getUsageBasedPremiumRequests: {
                name: "GetUsageBasedPremiumRequests",
                I: j.nDb,
                O: j.n8L,
                kind: _t.MethodKind.Unary
            },
            setUsageBasedPremiumRequests: {
                name: "SetUsageBasedPremiumRequests",
                I: j.ZU_,
                O: j.X8H,
                kind: _t.MethodKind.Unary
            },
            getReferrals: {
                name: "GetReferrals",
                I: j.Gch,
                O: j.gBX,
                kind: _t.MethodKind.Unary
            },
            getReferralCodes: {
                name: "GetReferralCodes",
                I: j.bT6,
                O: j.D2n,
                kind: _t.MethodKind.Unary
            },
            createP2PReferralLink: {
                name: "CreateP2PReferralLink",
                I: j.bhY,
                O: j.XEQ,
                kind: _t.MethodKind.Unary
            },
            getP2PReferralStatus: {
                name: "GetP2PReferralStatus",
                I: j.pGh,
                O: j.XWY,
                kind: _t.MethodKind.Unary
            },
            sendP2PReferralInvites: {
                name: "SendP2PReferralInvites",
                I: j.ZKX,
                O: j.tZb,
                kind: _t.MethodKind.Unary
            },
            getP2PReferralHistory: {
                name: "GetP2PReferralHistory",
                I: j.EcQ,
                O: j.nd7,
                kind: _t.MethodKind.Unary
            },
            checkReferralAllowlist: {
                name: "CheckReferralAllowlist",
                I: j.ukN,
                O: j.cRU,
                kind: _t.MethodKind.Unary
            },
            checkReferralCode: {
                name: "CheckReferralCode",
                I: j.MRM,
                O: j.wb2,
                kind: _t.MethodKind.Unary
            },
            redeemGiftCode: {
                name: "RedeemGiftCode",
                I: j.ziV,
                O: j.lme,
                kind: _t.MethodKind.Unary
            },
            getEventCodeInfo: {
                name: "GetEventCodeInfo",
                I: j.RiQ,
                O: j.XUY,
                kind: _t.MethodKind.Unary
            },
            redeemEventCode: {
                name: "RedeemEventCode",
                I: j.VF8,
                O: j.Djf,
                kind: _t.MethodKind.Unary
            },
            getTeamRepos: {
                name: "GetTeamRepos",
                I: j.aYW,
                O: j.k1F,
                kind: _t.MethodKind.Unary
            },
            getTeamReposOrEmptyIfNotInTeam: {
                name: "GetTeamReposOrEmptyIfNotInTeam",
                I: j.aYW,
                O: j.k1F,
                kind: _t.MethodKind.Unary
            },
            getTeamRules: {
                name: "GetTeamRules",
                I: j.yds,
                O: j.KZ$,
                kind: _t.MethodKind.Unary
            },
            createTeamRule: {
                name: "CreateTeamRule",
                I: j.J7F,
                O: j.vZv,
                kind: _t.MethodKind.Unary
            },
            updateTeamRule: {
                name: "UpdateTeamRule",
                I: j.qEG,
                O: j.CMB,
                kind: _t.MethodKind.Unary
            },
            deleteTeamRule: {
                name: "DeleteTeamRule",
                I: j.Ch8,
                O: j.uzD,
                kind: _t.MethodKind.Unary
            },
            getTeamGroupRules: {
                name: "GetTeamGroupRules",
                I: j.vdM,
                O: j.Xu9,
                kind: _t.MethodKind.Unary
            },
            createTeamGroupRule: {
                name: "CreateTeamGroupRule",
                I: j.WxI,
                O: j.AkX,
                kind: _t.MethodKind.Unary
            },
            updateTeamGroupRule: {
                name: "UpdateTeamGroupRule",
                I: j.dpZ,
                O: j.Lxb,
                kind: _t.MethodKind.Unary
            },
            deleteTeamGroupRule: {
                name: "DeleteTeamGroupRule",
                I: j.lIO,
                O: j.jqE,
                kind: _t.MethodKind.Unary
            },
            getTeamHooks: {
                name: "GetTeamHooks",
                I: j.$kg,
                O: j.PtB,
                kind: _t.MethodKind.Unary
            },
            createTeamHook: {
                name: "CreateTeamHook",
                I: j.wT7,
                O: j.a4I,
                kind: _t.MethodKind.Unary
            },
            updateTeamHook: {
                name: "UpdateTeamHook",
                I: j.TeW,
                O: j.$lk,
                kind: _t.MethodKind.Unary
            },
            deleteTeamHook: {
                name: "DeleteTeamHook",
                I: j.x4u,
                O: j.FNs,
                kind: _t.MethodKind.Unary
            },
            getTeamCommands: {
                name: "GetTeamCommands",
                I: j.XDt,
                O: j.lzR,
                kind: _t.MethodKind.Unary
            },
            createTeamCommand: {
                name: "CreateTeamCommand",
                I: j.Ctq,
                O: j.CXw,
                kind: _t.MethodKind.Unary
            },
            updateTeamCommand: {
                name: "UpdateTeamCommand",
                I: j.XQ_,
                O: j.DZr,
                kind: _t.MethodKind.Unary
            },
            deleteTeamCommand: {
                name: "DeleteTeamCommand",
                I: j.xo6,
                O: j.atP,
                kind: _t.MethodKind.Unary
            },
            getGlobalCommands: {
                name: "GetGlobalCommands",
                I: j.YSR,
                O: j.rL_,
                kind: _t.MethodKind.Unary
            },
            getRepoSlashCommands: {
                name: "GetRepoSlashCommands",
                I: j.LM4,
                O: j.hcQ,
                kind: _t.MethodKind.Unary
            },
            getBackgroundComposerSlashCommands: {
                name: "GetBackgroundComposerSlashCommands",
                I: j.T1q,
                O: j.RNi,
                kind: _t.MethodKind.Unary
            },
            getCloudAgentPluginsSnapshot: {
                name: "GetCloudAgentPluginsSnapshot",
                I: j.G24,
                O: j.gNl,
                kind: _t.MethodKind.Unary
            },
            getBugbotTeamRules: {
                name: "GetBugbotTeamRules",
                I: j.N8K,
                O: j.RP_,
                kind: _t.MethodKind.Unary
            },
            createBugbotTeamRule: {
                name: "CreateBugbotTeamRule",
                I: j.CHh,
                O: j.GL9,
                kind: _t.MethodKind.Unary
            },
            updateBugbotTeamRule: {
                name: "UpdateBugbotTeamRule",
                I: j.rtb,
                O: j.v0c,
                kind: _t.MethodKind.Unary
            },
            deleteBugbotTeamRule: {
                name: "DeleteBugbotTeamRule",
                I: j.pj7,
                O: j.rP9,
                kind: _t.MethodKind.Unary
            },
            getBugbotLearnedRules: {
                name: "GetBugbotLearnedRules",
                I: j.hp9,
                O: j.z7W,
                kind: _t.MethodKind.Unary
            },
            updateBugbotLearnedRule: {
                name: "UpdateBugbotLearnedRule",
                I: j.BIT,
                O: j.Xmf,
                kind: _t.MethodKind.Unary
            },
            deleteBugbotLearnedRule: {
                name: "DeleteBugbotLearnedRule",
                I: j.hnR,
                O: j.Ld4,
                kind: _t.MethodKind.Unary
            },
            createBugbotManualRepositoryRule: {
                name: "CreateBugbotManualRepositoryRule",
                I: j.Bdx,
                O: j.Zk6,
                kind: _t.MethodKind.Unary
            },
            getBugbotManualRepositoryRules: {
                name: "GetBugbotManualRepositoryRules",
                I: j.qF$,
                O: j.azW,
                kind: _t.MethodKind.Unary
            },
            updateBugbotManualRepositoryRule: {
                name: "UpdateBugbotManualRepositoryRule",
                I: j.UBx,
                O: j.ead,
                kind: _t.MethodKind.Unary
            },
            deleteBugbotManualRepositoryRule: {
                name: "DeleteBugbotManualRepositoryRule",
                I: j.ONG,
                O: j.YYN,
                kind: _t.MethodKind.Unary
            },
            runDiamondToBugbotMigration: {
                name: "RunDiamondToBugbotMigration",
                I: j.rb7,
                O: j.DkK,
                kind: _t.MethodKind.Unary
            },
            getBugbotRuleAnalytics: {
                name: "GetBugbotRuleAnalytics",
                I: j.lvI,
                O: j.RK5,
                kind: _t.MethodKind.Unary
            },
            getBugbotRuleById: {
                name: "GetBugbotRuleById",
                I: j.TOm,
                O: j.tkD,
                kind: _t.MethodKind.Unary
            },
            createTeamRepo: {
                name: "CreateTeamRepo",
                I: j.J4c,
                O: j.fCO,
                kind: _t.MethodKind.Unary
            },
            deleteTeamRepo: {
                name: "DeleteTeamRepo",
                I: j.m0x,
                O: j.Cw0,
                kind: _t.MethodKind.Unary
            },
            addRepoPattern: {
                name: "AddRepoPattern",
                I: j.pji,
                O: j.D3c,
                kind: _t.MethodKind.Unary
            },
            removeRepoPattern: {
                name: "RemoveRepoPattern",
                I: j.MEU,
                O: j.U0s,
                kind: _t.MethodKind.Unary
            },
            setTeamRepoType: {
                name: "SetTeamRepoType",
                I: j.HeY,
                O: j.V_5,
                kind: _t.MethodKind.Unary
            },
            getTeamAdminSettings: {
                name: "GetTeamAdminSettings",
                I: j.Byz,
                O: j.V5U,
                kind: _t.MethodKind.Unary
            },
            getTeamAdminSettingsOrEmptyIfNotInTeam: {
                name: "GetTeamAdminSettingsOrEmptyIfNotInTeam",
                I: j.Byz,
                O: j.V5U,
                kind: _t.MethodKind.Unary
            },
            getBaseTeamAdminSettings: {
                name: "GetBaseTeamAdminSettings",
                I: j.Qrr,
                O: j.V5U,
                kind: _t.MethodKind.Unary
            },
            getTeamOriginDisabled: {
                name: "GetTeamOriginDisabled",
                I: j.NES,
                O: j.Fj9,
                kind: _t.MethodKind.Unary
            },
            updateTeamAdminSettings: {
                name: "UpdateTeamAdminSettings",
                I: j.sCz,
                O: j.aP5,
                kind: _t.MethodKind.Unary
            },
            getTeamCustomerTelemetryDestinations: {
                name: "GetTeamCustomerTelemetryDestinations",
                I: j.n$w,
                O: j.R9K,
                kind: _t.MethodKind.Unary
            },
            createTeamCustomerTelemetryDestination: {
                name: "CreateTeamCustomerTelemetryDestination",
                I: j.qxp,
                O: j.uts,
                kind: _t.MethodKind.Unary
            },
            updateTeamCustomerTelemetryDestination: {
                name: "UpdateTeamCustomerTelemetryDestination",
                I: j.LJ3,
                O: j.Hen,
                kind: _t.MethodKind.Unary
            },
            deleteTeamCustomerTelemetryDestination: {
                name: "DeleteTeamCustomerTelemetryDestination",
                I: j.t1u,
                O: j.rFi,
                kind: _t.MethodKind.Unary
            },
            testTeamCustomerTelemetryDestinationConnection: {
                name: "TestTeamCustomerTelemetryDestinationConnection",
                I: j.ybE,
                O: j.YiF,
                kind: _t.MethodKind.Unary
            },
            getTeamCustomerTelemetryDestinationHealth: {
                name: "GetTeamCustomerTelemetryDestinationHealth",
                I: j.mD_,
                O: j.wGo,
                kind: _t.MethodKind.Unary
            },
            getTeamCustomerTelemetryContentExportOptIn: {
                name: "GetTeamCustomerTelemetryContentExportOptIn",
                I: j.LWe,
                O: j.F8Y,
                kind: _t.MethodKind.Unary
            },
            updateTeamCustomerTelemetryContentExportOptIn: {
                name: "UpdateTeamCustomerTelemetryContentExportOptIn",
                I: j.UvX,
                O: j.G8P,
                kind: _t.MethodKind.Unary
            },
            getTeamInferenceHookConfig: {
                name: "GetTeamInferenceHookConfig",
                I: j.TB_,
                O: j.nE8,
                kind: _t.MethodKind.Unary
            },
            updateTeamInferenceHookConfig: {
                name: "UpdateTeamInferenceHookConfig",
                I: j.qJd,
                O: j.IIB,
                kind: _t.MethodKind.Unary
            },
            rotateTeamInferenceHookSigningSecret: {
                name: "RotateTeamInferenceHookSigningSecret",
                I: j.B8P,
                O: j.HQR,
                kind: _t.MethodKind.Unary
            },
            getTeamInferenceHookHealth: {
                name: "GetTeamInferenceHookHealth",
                I: j.lax,
                O: j.rM7,
                kind: _t.MethodKind.Unary
            },
            resetTeamInferenceHookBreaker: {
                name: "ResetTeamInferenceHookBreaker",
                I: j._dj,
                O: j.Mob,
                kind: _t.MethodKind.Unary
            },
            getTeamLlmGatewayCredentialStatus: {
                name: "GetTeamLlmGatewayCredentialStatus",
                I: j.v8R,
                O: j.dsv,
                kind: _t.MethodKind.Unary
            },
            setTeamLlmGatewayCredential: {
                name: "SetTeamLlmGatewayCredential",
                I: j.JQv,
                O: j.LQe,
                kind: _t.MethodKind.Unary
            },
            replaceTeamLlmGatewayCredential: {
                name: "ReplaceTeamLlmGatewayCredential",
                I: j.Bwq,
                O: j.nUL,
                kind: _t.MethodKind.Unary
            },
            clearTeamLlmGatewayCredential: {
                name: "ClearTeamLlmGatewayCredential",
                I: j.uBx,
                O: j._rf,
                kind: _t.MethodKind.Unary
            },
            updateTeamLlmGatewayModelDiscovery: {
                name: "UpdateTeamLlmGatewayModelDiscovery",
                I: j.i_X,
                O: j.wBS,
                kind: _t.MethodKind.Unary
            },
            setTeamNoZdrModelConsent: {
                name: "SetTeamNoZdrModelConsent",
                I: j.HOq,
                O: j.xEn,
                kind: _t.MethodKind.Unary
            },
            setOrganizationNoZdrModelConsent: {
                name: "SetOrganizationNoZdrModelConsent",
                I: j.xO$,
                O: j.b07,
                kind: _t.MethodKind.Unary
            },
            getOrganizationOnDemandSpendDisabled: {
                name: "GetOrganizationOnDemandSpendDisabled",
                I: j.Twg,
                O: j.$H2,
                kind: _t.MethodKind.Unary
            },
            setOrganizationOnDemandSpendDisabled: {
                name: "SetOrganizationOnDemandSpendDisabled",
                I: j.zYy,
                O: j.dwD,
                kind: _t.MethodKind.Unary
            },
            getOrganizationCreditRequestButtonHidden: {
                name: "GetOrganizationCreditRequestButtonHidden",
                I: j.jIe,
                O: j.JEj,
                kind: _t.MethodKind.Unary
            },
            setOrganizationCreditRequestButtonHidden: {
                name: "SetOrganizationCreditRequestButtonHidden",
                I: j.v_8,
                O: j.VgQ,
                kind: _t.MethodKind.Unary
            },
            getOrganizationSsoJitAutoEnrollment: {
                name: "GetOrganizationSsoJitAutoEnrollment",
                I: j._v$,
                O: j.yj0,
                kind: _t.MethodKind.Unary
            },
            setOrganizationSsoJitAutoEnrollment: {
                name: "SetOrganizationSsoJitAutoEnrollment",
                I: j.yjV,
                O: j.c4k,
                kind: _t.MethodKind.Unary
            },
            getTeamSsoJitAutoEnrollment: {
                name: "GetTeamSsoJitAutoEnrollment",
                I: j.WsN,
                O: j.Afl,
                kind: _t.MethodKind.Unary
            },
            setTeamSsoJitAutoEnrollment: {
                name: "SetTeamSsoJitAutoEnrollment",
                I: j.O8H,
                O: j.wDw,
                kind: _t.MethodKind.Unary
            },
            getOrganizationRemoteControlSettings: {
                name: "GetOrganizationRemoteControlSettings",
                I: j.ZPB,
                O: j.vfT,
                kind: _t.MethodKind.Unary
            },
            updateOrganizationRemoteControlSettings: {
                name: "UpdateOrganizationRemoteControlSettings",
                I: j.AL,
                O: j.EDv,
                kind: _t.MethodKind.Unary
            },
            setUserNoZdrModelConsent: {
                name: "SetUserNoZdrModelConsent",
                I: j.hk4,
                O: j.ZpC,
                kind: _t.MethodKind.Unary
            },
            setTeamMemberNoZdrModelConsent: {
                name: "SetTeamMemberNoZdrModelConsent",
                I: j.npU,
                O: j.PGd,
                kind: _t.MethodKind.Unary
            },
            getNoZdrModelConsentStatus: {
                name: "GetNoZdrModelConsentStatus",
                I: j.Udp,
                O: j._am,
                kind: _t.MethodKind.Unary
            },
            updateTeamInviteLinkTTLSetting: {
                name: "UpdateTeamInviteLinkTTLSetting",
                I: j.Lr1,
                O: j.Bpu,
                kind: _t.MethodKind.Unary
            },
            updateTeamMemberInviteSetting: {
                name: "UpdateTeamMemberInviteSetting",
                I: j.tdz,
                O: j.N4Y,
                kind: _t.MethodKind.Unary
            },
            updateTeamDefaultMemberBillingTier: {
                name: "UpdateTeamDefaultMemberBillingTier",
                I: j.gPk,
                O: j.wZY,
                kind: _t.MethodKind.Unary
            },
            updateTeamSandOnboardingCompleted: {
                name: "UpdateTeamSandOnboardingCompleted",
                I: j.s9W,
                O: j.sZP,
                kind: _t.MethodKind.Unary
            },
            updateTeamSandSetupChecklistItem: {
                name: "UpdateTeamSandSetupChecklistItem",
                I: j.aQI,
                O: j.sHw,
                kind: _t.MethodKind.Unary
            },
            markTeamSandOnboardingSeen: {
                name: "MarkTeamSandOnboardingSeen",
                I: j.mNt,
                O: j.mnS,
                kind: _t.MethodKind.Unary
            },
            getTeamGrokBotEligibleUserIds: {
                name: "GetTeamGrokBotEligibleUserIds",
                I: j.R$Q,
                O: j.LRw,
                kind: _t.MethodKind.Unary
            },
            sendTeamSandOnboardingInvites: {
                name: "SendTeamSandOnboardingInvites",
                I: j.u$0,
                O: j.CrU,
                kind: _t.MethodKind.Unary
            },
            getProtectedGitScopes: {
                name: "GetProtectedGitScopes",
                I: j.TXH,
                O: j.P_k,
                kind: _t.MethodKind.Unary
            },
            createProtectedGitScope: {
                name: "CreateProtectedGitScope",
                I: j.IW3,
                O: j.wmn,
                kind: _t.MethodKind.Unary
            },
            deleteProtectedGitScope: {
                name: "DeleteProtectedGitScope",
                I: j.tE7,
                O: j.R1c,
                kind: _t.MethodKind.Unary
            },
            createTeamFreeTrialCode: {
                name: "CreateTeamFreeTrialCode",
                I: j.Qx5,
                O: j.M3e,
                kind: _t.MethodKind.Unary
            },
            createTeamFreeTrialCodeInternal: {
                name: "CreateTeamFreeTrialCodeInternal",
                I: j.Qx5,
                O: j.M3e,
                kind: _t.MethodKind.Unary
            },
            setTrialSpendLimitOverrideInternal: {
                name: "SetTrialSpendLimitOverrideInternal",
                I: j.IHq,
                O: j.qks,
                kind: _t.MethodKind.Unary
            },
            getTrialSpendLimitInternal: {
                name: "GetTrialSpendLimitInternal",
                I: j.yIy,
                O: j.C2K,
                kind: _t.MethodKind.Unary
            },
            getOrganizationEnterpriseTrialExtendContextInternal: {
                name: "GetOrganizationEnterpriseTrialExtendContextInternal",
                I: j.Yeg,
                O: j.eBq,
                kind: _t.MethodKind.Unary
            },
            applyOrganizationEnterpriseTrialEndInternal: {
                name: "ApplyOrganizationEnterpriseTrialEndInternal",
                I: j.mi9,
                O: j.Izq,
                kind: _t.MethodKind.Unary
            },
            getXaiUserUsageSnapshot: {
                name: "GetXaiUserUsageSnapshot",
                I: j.WAE,
                O: j.qSX,
                kind: _t.MethodKind.Unary
            },
            getXaiUserPrepaidBilling: {
                name: "GetXaiUserPrepaidBilling",
                I: j.b4u,
                O: j.$H_,
                kind: _t.MethodKind.Unary
            },
            setXaiUserPrepaidAutoTopUp: {
                name: "SetXaiUserPrepaidAutoTopUp",
                I: j.h3x,
                O: j.D9s,
                kind: _t.MethodKind.Unary
            },
            getXaiCommerceBearerToken: {
                name: "GetXaiCommerceBearerToken",
                I: j.hD2,
                O: j.ZoF,
                kind: _t.MethodKind.Unary
            },
            getTeamOffboardingConfigInternal: {
                name: "GetTeamOffboardingConfigInternal",
                I: j.XRZ,
                O: j.pv1,
                kind: _t.MethodKind.Unary
            },
            updateTeamOffboardingConfigInternal: {
                name: "UpdateTeamOffboardingConfigInternal",
                I: j.AKO,
                O: j.C7S,
                kind: _t.MethodKind.Unary
            },
            createTeamCreditGrantInternal: {
                name: "CreateTeamCreditGrantInternal",
                I: j.BEg,
                O: j.Rz7,
                kind: _t.MethodKind.Unary
            },
            listTeamCreditGrantsInternal: {
                name: "ListTeamCreditGrantsInternal",
                I: j.CAc,
                O: j.GYk,
                kind: _t.MethodKind.Unary
            },
            createTeamsTrialV2ReferralCode: {
                name: "CreateTeamsTrialV2ReferralCode",
                I: j.cj_,
                O: j.SyP,
                kind: _t.MethodKind.Unary
            },
            getTeamAnalytics: {
                name: "GetTeamAnalytics",
                I: j.FFq,
                O: j.LLA,
                kind: _t.MethodKind.Unary
            },
            getUserAnalytics: {
                name: "GetUserAnalytics",
                I: j.dcL,
                O: j.n24,
                kind: _t.MethodKind.Unary
            },
            getTeamRawData: {
                name: "GetTeamRawData",
                I: j.hUh,
                O: j.dZ5,
                kind: _t.MethodKind.Unary
            },
            getClientUsageData: {
                name: "GetClientUsageData",
                I: j.u_0,
                O: j.gHM,
                kind: _t.MethodKind.Unary
            },
            getCurrentPeriodUsage: {
                name: "GetCurrentPeriodUsage",
                I: j.Dl4,
                O: j.bO3,
                kind: _t.MethodKind.Unary
            },
            useSandBankedReset: {
                name: "UseSandBankedReset",
                I: j.RMZ,
                O: j.rWQ,
                kind: _t.MethodKind.Unary
            },
            listSandBankedResets: {
                name: "ListSandBankedResets",
                I: j.pE6,
                O: j.pfj,
                kind: _t.MethodKind.Unary
            },
            getSandUsageStatus: {
                name: "GetSandUsageStatus",
                I: j.rAv,
                O: j.Pb2,
                kind: _t.MethodKind.Unary
            },
            startSandTrial: {
                name: "StartSandTrial",
                I: j.Go7,
                O: j.yuQ,
                kind: _t.MethodKind.Unary
            },
            claimSandTrialWithDeviceAttestation: {
                name: "ClaimSandTrialWithDeviceAttestation",
                I: j.yLo,
                O: j.KzH,
                kind: _t.MethodKind.Unary
            },
            resetSandTrialDeviceAttestation: {
                name: "ResetSandTrialDeviceAttestation",
                I: j.BXh,
                O: j.nnW,
                kind: _t.MethodKind.Unary
            },
            isEligibleForSandTrial: {
                name: "IsEligibleForSandTrial",
                I: j.wfW,
                O: j.q4z,
                kind: _t.MethodKind.Unary
            },
            getSandTrialClaimStatus: {
                name: "GetSandTrialClaimStatus",
                I: j.i0h,
                O: j._OB,
                kind: _t.MethodKind.Unary
            },
            cancelSandTrial: {
                name: "CancelSandTrial",
                I: j.qu8,
                O: j.of0,
                kind: _t.MethodKind.Unary
            },
            getSandAccessStatus: {
                name: "GetSandAccessStatus",
                I: j.o0l,
                O: j.Wxf,
                kind: _t.MethodKind.Unary
            },
            getSandMarketingIdentity: {
                name: "GetSandMarketingIdentity",
                I: j.M2r,
                O: j.Grk,
                kind: _t.MethodKind.Unary
            },
            registerSandMachine: {
                name: "RegisterSandMachine",
                I: j.aQT,
                O: j.sHN,
                kind: _t.MethodKind.Unary
            },
            listSandMachines: {
                name: "ListSandMachines",
                I: j.yXx,
                O: j.k0O,
                kind: _t.MethodKind.Unary
            },
            updateSandMachineLabel: {
                name: "UpdateSandMachineLabel",
                I: j.wJL,
                O: j.IVI,
                kind: _t.MethodKind.Unary
            },
            updateSandMachineLocalToolPermission: {
                name: "UpdateSandMachineLocalToolPermission",
                I: j.s1d,
                O: j.eq0,
                kind: _t.MethodKind.Unary
            },
            getSandMachineMessagesEnabled: {
                name: "GetSandMachineMessagesEnabled",
                I: j.cnC,
                O: j.cJ_,
                kind: _t.MethodKind.Unary
            },
            updateSandMachineMessagesEnabled: {
                name: "UpdateSandMachineMessagesEnabled",
                I: j.dAp,
                O: j.nox,
                kind: _t.MethodKind.Unary
            },
            removeSandMachine: {
                name: "RemoveSandMachine",
                I: j.hEd,
                O: j.VbN,
                kind: _t.MethodKind.Unary
            },
            requestSandTeamAccess: {
                name: "RequestSandTeamAccess",
                I: j.y_T,
                O: j.yGu,
                kind: _t.MethodKind.Unary
            },
            listPendingUserAccessRequests: {
                name: "ListPendingUserAccessRequests",
                I: j._YH,
                O: j._i_,
                kind: _t.MethodKind.Unary
            },
            getUsageSignalsProjectionSnapshot: {
                name: "GetUsageSignalsProjectionSnapshot",
                I: Rt,
                O: Mt,
                kind: _t.MethodKind.Unary
            },
            getPlanInfo: {
                name: "GetPlanInfo",
                I: j.V4G,
                O: j.noV,
                kind: _t.MethodKind.Unary
            },
            verifyAppleTransaction: {
                name: "VerifyAppleTransaction",
                I: j.Ll_,
                O: j.rKG,
                kind: _t.MethodKind.Unary
            },
            verifyGooglePlayPurchase: {
                name: "VerifyGooglePlayPurchase",
                I: j.rG0,
                O: j.lWs,
                kind: _t.MethodKind.Unary
            },
            getGooglePlayBillingAccountId: {
                name: "GetGooglePlayBillingAccountId",
                I: j.wcH,
                O: j.cQ7,
                kind: _t.MethodKind.Unary
            },
            inventoryGooglePlayPurchaseTokens: {
                name: "InventoryGooglePlayPurchaseTokens",
                I: j.WCl,
                O: j.GYE,
                kind: _t.MethodKind.Unary
            },
            restoreCommerceStorePurchases: {
                name: "RestoreCommerceStorePurchases",
                I: j.Eg0,
                O: j.c6S,
                kind: _t.MethodKind.Unary
            },
            inspectGooglePlaySubscriptionInternal: {
                name: "InspectGooglePlaySubscriptionInternal",
                I: j.NNb,
                O: j.Zm8,
                kind: _t.MethodKind.Unary
            },
            inspectGooglePlayTransactionsInternal: {
                name: "InspectGooglePlayTransactionsInternal",
                I: j.B5B,
                O: j.bh8,
                kind: _t.MethodKind.Unary
            },
            getCursorReviewEntitlement: {
                name: "GetCursorReviewEntitlement",
                I: j.pmk,
                O: j.LwP,
                kind: _t.MethodKind.Unary
            },
            searchOriginReviewPeople: {
                name: "SearchOriginReviewPeople",
                I: j.PBS,
                O: j.JZ6,
                kind: _t.MethodKind.Unary
            },
            getOriginReviewPreferences: {
                name: "GetOriginReviewPreferences",
                I: j.q9G,
                O: j.MQS,
                kind: _t.MethodKind.Unary
            },
            setOriginReviewPreferences: {
                name: "SetOriginReviewPreferences",
                I: j.CLT,
                O: j.q5s,
                kind: _t.MethodKind.Unary
            },
            listRepoLearnedRules: {
                name: "ListRepoLearnedRules",
                I: Ot,
                O: Bt,
                kind: _t.MethodKind.Unary
            },
            removeRepoLearnedRule: {
                name: "RemoveRepoLearnedRule",
                I: qt,
                O: Nt,
                kind: _t.MethodKind.Unary
            },
            getUsageLimitPolicyStatus: {
                name: "GetUsageLimitPolicyStatus",
                I: j.qhH,
                O: j.I_D,
                kind: _t.MethodKind.Unary
            },
            getUsageLimitStatusAndActiveGrants: {
                name: "GetUsageLimitStatusAndActiveGrants",
                I: j.S9t,
                O: j._ty,
                kind: _t.MethodKind.Unary
            },
            getCreditGrantsBalance: {
                name: "GetCreditGrantsBalance",
                I: j.MjR,
                O: j.CkD,
                kind: _t.MethodKind.Unary
            },
            getClientVisibleCreditGrants: {
                name: "GetClientVisibleCreditGrants",
                I: j.V8e,
                O: j.Pqo,
                kind: _t.MethodKind.Unary
            },
            getAdvancedAnalyticsEnabled: {
                name: "GetAdvancedAnalyticsEnabled",
                I: j.P1T,
                O: j.VxL,
                kind: _t.MethodKind.Unary
            },
            getTokenUsage: {
                name: "GetTokenUsage",
                I: j.SK5,
                O: j.I9h,
                kind: _t.MethodKind.Unary
            },
            validateBedrockIamRole: {
                name: "ValidateBedrockIamRole",
                I: j.Z8m,
                O: j.mzW,
                kind: _t.MethodKind.Unary
            },
            getTeamSpend: {
                name: "GetTeamSpend",
                I: j.$Sc,
                O: j.R2E,
                kind: _t.MethodKind.Unary
            },
            getTeamSeatUpgradeRecommendations: {
                name: "GetTeamSeatUpgradeRecommendations",
                I: j.Y$T,
                O: j.o35,
                kind: _t.MethodKind.Unary
            },
            getPendingSeatTierUpgradeRequests: {
                name: "GetPendingSeatTierUpgradeRequests",
                I: j.qWG,
                O: j.YJY,
                kind: _t.MethodKind.Unary
            },
            getTeamSeatCapacity: {
                name: "GetTeamSeatCapacity",
                I: j.e6P,
                O: j.SuY,
                kind: _t.MethodKind.Unary
            },
            startMergedTeamSeatChange: {
                name: "StartMergedTeamSeatChange",
                I: j.IFS,
                O: j.UpX,
                kind: _t.MethodKind.Unary
            },
            changeMergedTeamSeat: {
                name: "ChangeMergedTeamSeat",
                I: j._1N,
                O: j.yPU,
                kind: _t.MethodKind.Unary
            },
            getMergedTeamSeatChanges: {
                name: "GetMergedTeamSeatChanges",
                I: j.JOC,
                O: j.DOt,
                kind: _t.MethodKind.Unary
            },
            getXaiTeamPlanManagement: {
                name: "GetXaiTeamPlanManagement",
                I: j.jq0,
                O: j.f1t,
                kind: _t.MethodKind.Unary
            },
            changeXaiTeamPlan: {
                name: "ChangeXaiTeamPlan",
                I: j.IV$,
                O: j.yW5,
                kind: _t.MethodKind.Unary
            },
            getCurrentBillingCycle: {
                name: "GetCurrentBillingCycle",
                I: j.yI7,
                O: j.cTj,
                kind: _t.MethodKind.Unary
            },
            getMonthlyBillingCycle: {
                name: "GetMonthlyBillingCycle",
                I: j.iaP,
                O: j.KuC,
                kind: _t.MethodKind.Unary
            },
            getBugbotSettings: {
                name: "GetBugbotSettings",
                I: j.Ioc,
                O: j.GNy,
                kind: _t.MethodKind.Unary
            },
            getBugbotAnalyticsV2: {
                name: "GetBugbotAnalyticsV2",
                I: j.JWI,
                O: j.NXG,
                kind: _t.MethodKind.Unary
            },
            getBugBotPRAnalytics: {
                name: "GetBugBotPRAnalytics",
                I: j.Jns,
                O: j.Fkp,
                kind: _t.MethodKind.Unary
            },
            getGithubInstallations: {
                name: "GetGithubInstallations",
                I: j.kcC,
                O: j.UYU,
                kind: _t.MethodKind.Unary
            },
            getGithubInstallationTenantGrants: {
                name: "GetGithubInstallationTenantGrants",
                I: j.Owv,
                O: j.yq_,
                kind: _t.MethodKind.Unary
            },
            grantGithubInstallationTenant: {
                name: "GrantGithubInstallationTenant",
                I: j.hvD,
                O: j.p84,
                kind: _t.MethodKind.Unary
            },
            revokeGithubInstallationTenant: {
                name: "RevokeGithubInstallationTenant",
                I: j.Rig,
                O: j.neC,
                kind: _t.MethodKind.Unary
            },
            getBugbotSuggestedRepos: {
                name: "GetBugbotSuggestedRepos",
                I: j.nTs,
                O: j.ZJ6,
                kind: _t.MethodKind.Unary
            },
            getScmConnectionStatus: {
                name: "GetScmConnectionStatus",
                I: j.Lys,
                O: j.VS9,
                kind: _t.MethodKind.Unary
            },
            getGithubRepoAccessStatus: {
                name: "GetGithubRepoAccessStatus",
                I: j.XT3,
                O: j.HyV,
                kind: _t.MethodKind.Unary
            },
            getScmConnectionStatuses: {
                name: "GetScmConnectionStatuses",
                I: j.tJ9,
                O: j.lIF,
                kind: _t.MethodKind.Unary
            },
            getInstallationRepos: {
                name: "GetInstallationRepos",
                I: j.L$Y,
                O: j.ljc,
                kind: _t.MethodKind.Unary
            },
            fetchAllInstallationRepos: {
                name: "FetchAllInstallationRepos",
                I: j.UfC,
                O: j.gJO,
                kind: _t.MethodKind.Unary
            },
            getInstallationGithubUsers: {
                name: "GetInstallationGithubUsers",
                I: j.toQ,
                O: j.P4d,
                kind: _t.MethodKind.Unary
            },
            getUserAdminOrganizations: {
                name: "GetUserAdminOrganizations",
                I: j._V,
                O: j.KLX,
                kind: _t.MethodKind.Unary
            },
            getTeamGithubUsers: {
                name: "GetTeamGithubUsers",
                I: j.yk8,
                O: j.ecN,
                kind: _t.MethodKind.Unary
            },
            addGithubUsersToTeam: {
                name: "AddGithubUsersToTeam",
                I: j.gMg,
                O: j.yD7,
                kind: _t.MethodKind.Unary
            },
            resolveGithubIdentities: {
                name: "ResolveGithubIdentities",
                I: j.lpG,
                O: j.LlT,
                kind: _t.MethodKind.Unary
            },
            getUserPullRequests: {
                name: "GetUserPullRequests",
                I: j.Mq,
                O: j.M2w,
                kind: _t.MethodKind.Unary
            },
            getUserReviewRequests: {
                name: "GetUserReviewRequests",
                I: j.Jjk,
                O: j.$DS,
                kind: _t.MethodKind.Unary
            },
            getPullRequestForBranch: {
                name: "GetPullRequestForBranch",
                I: j.xGV,
                O: j.$EH,
                kind: _t.MethodKind.Unary
            },
            updateGithubRepoSettings: {
                name: "UpdateGithubRepoSettings",
                I: j.NZ_,
                O: j.l8$,
                kind: _t.MethodKind.Unary
            },
            updateGithubInstallationSettings: {
                name: "UpdateGithubInstallationSettings",
                I: j.J9i,
                O: j.T1W,
                kind: _t.MethodKind.Unary
            },
            updateAllGithubRepoSettings: {
                name: "UpdateAllGithubRepoSettings",
                I: j.CNn,
                O: j.QOJ,
                kind: _t.MethodKind.Unary
            },
            updateGithubInstallationTeamScope: {
                name: "UpdateGithubInstallationTeamScope",
                I: j.hxG,
                O: j.Lre,
                kind: _t.MethodKind.Unary
            },
            updateSelfGithubAllowlist: {
                name: "UpdateSelfGithubAllowlist",
                I: j.pNh,
                O: j.vTx,
                kind: _t.MethodKind.Unary
            },
            getTeamBugbotSettings: {
                name: "GetTeamBugbotSettings",
                I: j.LRN,
                O: j.Lg7,
                kind: _t.MethodKind.Unary
            },
            updateTeamBugbotSettings: {
                name: "UpdateTeamBugbotSettings",
                I: j.sNl,
                O: j.Mlf,
                kind: _t.MethodKind.Unary
            },
            migrateTeamBugbotToUsageBasedBilling: {
                name: "MigrateTeamBugbotToUsageBasedBilling",
                I: j.LIs,
                O: j.lW1,
                kind: _t.MethodKind.Unary
            },
            getBugbotMergedPrScanSummary: {
                name: "GetBugbotMergedPrScanSummary",
                I: j.wS2,
                O: j.sWv,
                kind: _t.MethodKind.Unary
            },
            getBugbotMode: {
                name: "GetBugbotMode",
                I: j.sVJ,
                O: j.YHh,
                kind: _t.MethodKind.Unary
            },
            updateBugbotMode: {
                name: "UpdateBugbotMode",
                I: j.NQP,
                O: j.LK4,
                kind: _t.MethodKind.Unary
            },
            getBugBotProUserMode: {
                name: "GetBugBotProUserMode",
                I: j.meH,
                O: j.ym8,
                kind: _t.MethodKind.Unary
            },
            updateBugBotProUserMode: {
                name: "UpdateBugBotProUserMode",
                I: j.dj5,
                O: j.PFI,
                kind: _t.MethodKind.Unary
            },
            getBugbotUserSettings: {
                name: "GetBugbotUserSettings",
                I: j.BHX,
                O: j.DLm,
                kind: _t.MethodKind.Unary
            },
            updateBugbotUserSettings: {
                name: "UpdateBugbotUserSettings",
                I: j.QWx,
                O: j.Qsl,
                kind: _t.MethodKind.Unary
            },
            getFullSelfDrivingUserSettings: {
                name: "GetFullSelfDrivingUserSettings",
                I: j.y$W,
                O: j.Ik0,
                kind: _t.MethodKind.Unary
            },
            updateFullSelfDrivingUserSettings: {
                name: "UpdateFullSelfDrivingUserSettings",
                I: j.DrI,
                O: j.BRX,
                kind: _t.MethodKind.Unary
            },
            listFullSelfDrivingRepoSettings: {
                name: "ListFullSelfDrivingRepoSettings",
                I: j.LdP,
                O: j.l1H,
                kind: _t.MethodKind.Unary
            },
            setFullSelfDrivingRepoEnabled: {
                name: "SetFullSelfDrivingRepoEnabled",
                I: j.V6X,
                O: j.tJA,
                kind: _t.MethodKind.Unary
            },
            getFullSelfDrivingTeamSettings: {
                name: "GetFullSelfDrivingTeamSettings",
                I: j.i20,
                O: j.M7A,
                kind: _t.MethodKind.Unary
            },
            updateFullSelfDrivingTeamSettings: {
                name: "UpdateFullSelfDrivingTeamSettings",
                I: j.zuZ,
                O: j.Dfi,
                kind: _t.MethodKind.Unary
            },
            listFullSelfDrivingTeamRepoSettings: {
                name: "ListFullSelfDrivingTeamRepoSettings",
                I: j.CXL,
                O: j.ybH,
                kind: _t.MethodKind.Unary
            },
            setFullSelfDrivingTeamRepoEnabled: {
                name: "SetFullSelfDrivingTeamRepoEnabled",
                I: j.YBO,
                O: j.Soi,
                kind: _t.MethodKind.Unary
            },
            listFullSelfDrivingActiveAgents: {
                name: "ListFullSelfDrivingActiveAgents",
                I: j.KHx,
                O: j.GPC,
                kind: _t.MethodKind.Unary
            },
            listFullSelfDrivingTeamActiveAgents: {
                name: "ListFullSelfDrivingTeamActiveAgents",
                I: j.Hrn,
                O: j.pxf,
                kind: _t.MethodKind.Unary
            },
            updateFullSelfDrivingPrConfig: {
                name: "UpdateFullSelfDrivingPrConfig",
                I: j.DWR,
                O: j.pGw,
                kind: _t.MethodKind.Unary
            },
            getBugBotProUserSettings: {
                name: "GetBugBotProUserSettings",
                I: j.I6A,
                O: j.aBI,
                kind: _t.MethodKind.Unary
            },
            updateBugBotProUserSettings: {
                name: "UpdateBugBotProUserSettings",
                I: j.hSh,
                O: j.P8G,
                kind: _t.MethodKind.Unary
            },
            migrateBugBotProUserToUsageBasedBilling: {
                name: "MigrateBugBotProUserToUsageBasedBilling",
                I: j.E3$,
                O: j.MPB,
                kind: _t.MethodKind.Unary
            },
            getGlassEarlyPreviewEnrollment: {
                name: "GetGlassEarlyPreviewEnrollment",
                I: j.Ryr,
                O: j.FPs,
                kind: _t.MethodKind.Unary
            },
            enrollInGlassEarlyPreview: {
                name: "EnrollInGlassEarlyPreview",
                I: j.Cul,
                O: j.Y9v,
                kind: _t.MethodKind.Unary
            },
            unenrollFromGlassEarlyPreview: {
                name: "UnenrollFromGlassEarlyPreview",
                I: j.UHP,
                O: j.UBK,
                kind: _t.MethodKind.Unary
            },
            recordBugbotDeeplinkEvent: {
                name: "RecordBugbotDeeplinkEvent",
                I: j.sDp,
                O: j.Uj4,
                kind: _t.MethodKind.Unary
            },
            recordBugbotDeeplinkEventUnauthenticated: {
                name: "RecordBugbotDeeplinkEventUnauthenticated",
                I: j.sDp,
                O: j.Uj4,
                kind: _t.MethodKind.Unary
            },
            revokeBugBotLicenses: {
                name: "RevokeBugBotLicenses",
                I: j.H5R,
                O: j.Tcn,
                kind: _t.MethodKind.Unary
            },
            revokeUserBugbotLicense: {
                name: "RevokeUserBugbotLicense",
                I: j.Z$K,
                O: j.FOE,
                kind: _t.MethodKind.Unary
            },
            startBugbotBackfillLearning: {
                name: "StartBugbotBackfillLearning",
                I: j.NS4,
                O: j.xx6,
                kind: _t.MethodKind.Unary
            },
            getBugbotBackfillStatus: {
                name: "GetBugbotBackfillStatus",
                I: j.Nux,
                O: j.hxv,
                kind: _t.MethodKind.Unary
            },
            setSlackAuth: {
                name: "SetSlackAuth",
                I: j.WKP,
                O: j.mys,
                kind: _t.MethodKind.Unary
            },
            getSlackTeamSettings: {
                name: "GetSlackTeamSettings",
                I: j.YAE,
                O: j.YyD,
                kind: _t.MethodKind.Unary
            },
            updateSlackTeamSettings: {
                name: "UpdateSlackTeamSettings",
                I: j.HFD,
                O: j.Fr4,
                kind: _t.MethodKind.Unary
            },
            getSlackSettings: {
                name: "GetSlackSettings",
                I: j.tcG,
                O: j.no,
                kind: _t.MethodKind.Unary
            },
            getSlackModelOptions: {
                name: "GetSlackModelOptions",
                I: j.lym,
                O: j.ddf,
                kind: _t.MethodKind.Unary
            },
            getSlackInstallUrl: {
                name: "GetSlackInstallUrl",
                I: j.St,
                O: j.QKj,
                kind: _t.MethodKind.Unary
            },
            getSlackInstallUrlPublic: {
                name: "GetSlackInstallUrlPublic",
                I: j.Xoe,
                O: j.ZoZ,
                kind: _t.MethodKind.Unary
            },
            getSlackInstallUrlPublicWithUserScopes: {
                name: "GetSlackInstallUrlPublicWithUserScopes",
                I: j.Vqj,
                O: j.pty,
                kind: _t.MethodKind.Unary
            },
            getFilteredUsageEvents: {
                name: "GetFilteredUsageEvents",
                I: j.FHO,
                O: j.TpA,
                kind: _t.MethodKind.Unary
            },
            getAggregatedUsageEvents: {
                name: "GetAggregatedUsageEvents",
                I: j.l4W,
                O: j.JZY,
                kind: _t.MethodKind.Unary
            },
            getAuditLogs: {
                name: "GetAuditLogs",
                I: j.Mq$,
                O: j.mTp,
                kind: _t.MethodKind.Unary
            },
            getOrganizationAuditLogs: {
                name: "GetOrganizationAuditLogs",
                I: j.dIX,
                O: j.fIK,
                kind: _t.MethodKind.Unary
            },
            listTeamDataExports: {
                name: "ListTeamDataExports",
                I: j.qC3,
                O: j.wHV,
                kind: _t.MethodKind.Unary
            },
            createTeamDataExportDownloadUrl: {
                name: "CreateTeamDataExportDownloadUrl",
                I: j.eW$,
                O: j.eQk,
                kind: _t.MethodKind.Unary
            },
            getUserPrivacyMode: {
                name: "GetUserPrivacyMode",
                I: j.KoG,
                O: j.mWk,
                kind: _t.MethodKind.Unary
            },
            setUserPrivacyMode: {
                name: "SetUserPrivacyMode",
                I: j.eWf,
                O: j.Wig,
                kind: _t.MethodKind.Unary
            },
            webAcknowledgeGracePeriodDisclaimer: {
                name: "WebAcknowledgeGracePeriodDisclaimer",
                I: j.sRz,
                O: j.mEf,
                kind: _t.MethodKind.Unary
            },
            skipPrivacyModeGracePeriod: {
                name: "SkipPrivacyModeGracePeriod",
                I: j.jOB,
                O: j.dGI,
                kind: _t.MethodKind.Unary
            },
            needsPrivacyModeMigration: {
                name: "NeedsPrivacyModeMigration",
                I: j.WWi,
                O: j.U5k,
                kind: _t.MethodKind.Unary
            },
            updateTeamPrivacyModeMigrationOptOut: {
                name: "UpdateTeamPrivacyModeMigrationOptOut",
                I: j.es2,
                O: j.CKk,
                kind: _t.MethodKind.Unary
            },
            shareConversation: {
                name: "ShareConversation",
                I: j.kHo,
                O: j.QhI,
                kind: _t.MethodKind.Unary
            },
            getSharedConversation: {
                name: "GetSharedConversation",
                I: j.MyJ,
                O: j.mvz,
                kind: _t.MethodKind.Unary
            },
            getPublicSharedConversation: {
                name: "GetPublicSharedConversation",
                I: j.ROu,
                O: j.xfP,
                kind: _t.MethodKind.Unary
            },
            listSharedConversations: {
                name: "ListSharedConversations",
                I: j.R28,
                O: j.nMz,
                kind: _t.MethodKind.Unary
            },
            deleteSharedConversation: {
                name: "DeleteSharedConversation",
                I: j.FUz,
                O: j.Z36,
                kind: _t.MethodKind.Unary
            },
            updateSharedConversationVisibility: {
                name: "UpdateSharedConversationVisibility",
                I: j.NPW,
                O: j.JAL,
                kind: _t.MethodKind.Unary
            },
            shareCanvas: {
                name: "ShareCanvas",
                I: j.tE3,
                O: j.lL7,
                kind: _t.MethodKind.Unary
            },
            getSharedCanvas: {
                name: "GetSharedCanvas",
                I: j.JF,
                O: j.B2G,
                kind: _t.MethodKind.Unary
            },
            getPublicSharedCanvas: {
                name: "GetPublicSharedCanvas",
                I: j.aE$,
                O: j.OCF,
                kind: _t.MethodKind.Unary
            },
            listSharedCanvases: {
                name: "ListSharedCanvases",
                I: j.xos,
                O: j.xTz,
                kind: _t.MethodKind.Unary
            },
            deleteSharedCanvas: {
                name: "DeleteSharedCanvas",
                I: j.shm,
                O: j._Md,
                kind: _t.MethodKind.Unary
            },
            lookupSharedCanvasByKey: {
                name: "LookupSharedCanvasByKey",
                I: j.ptC,
                O: j.$bK,
                kind: _t.MethodKind.Unary
            },
            listUserCanvases: {
                name: "ListUserCanvases",
                I: j.P_7,
                O: j.H1r,
                kind: _t.MethodKind.Unary
            },
            getCanvasMetadata: {
                name: "GetCanvasMetadata",
                I: j.zyT,
                O: j.hcJ,
                kind: _t.MethodKind.Unary
            },
            getCanvasPayload: {
                name: "GetCanvasPayload",
                I: j.gDx,
                O: j.K6f,
                kind: _t.MethodKind.Unary
            },
            getDocumentPayload: {
                name: "GetDocumentPayload",
                I: j.r$m,
                O: j.ZB$,
                kind: _t.MethodKind.Unary
            },
            setCanvasVisibility: {
                name: "SetCanvasVisibility",
                I: j.uKx,
                O: j._w7,
                kind: _t.MethodKind.Unary
            },
            deleteCanvas: {
                name: "DeleteCanvas",
                I: j.J5_,
                O: j.xQH,
                kind: _t.MethodKind.Unary
            },
            getTeamSharedConversationSettings: {
                name: "GetTeamSharedConversationSettings",
                I: j._b6,
                O: j.yTb,
                kind: _t.MethodKind.Unary
            },
            updateTeamSharedConversationSettings: {
                name: "UpdateTeamSharedConversationSettings",
                I: j.TIw,
                O: j.rRJ,
                kind: _t.MethodKind.Unary
            },
            getTeamSharedCanvasSettings: {
                name: "GetTeamSharedCanvasSettings",
                I: j.LWu,
                O: j.fZU,
                kind: _t.MethodKind.Unary
            },
            updateTeamSharedCanvasSettings: {
                name: "UpdateTeamSharedCanvasSettings",
                I: j.iXm,
                O: j.k8Q,
                kind: _t.MethodKind.Unary
            },
            getTeamProjectsSettings: {
                name: "GetTeamProjectsSettings",
                I: j.aJE,
                O: j.SRO,
                kind: _t.MethodKind.Unary
            },
            updateTeamProjectsSettings: {
                name: "UpdateTeamProjectsSettings",
                I: j.xvP,
                O: j.nhk,
                kind: _t.MethodKind.Unary
            },
            getTeamPublicProfileSettings: {
                name: "GetTeamPublicProfileSettings",
                I: j.K$9,
                O: j.yVw,
                kind: _t.MethodKind.Unary
            },
            updateTeamPublicProfileSettings: {
                name: "UpdateTeamPublicProfileSettings",
                I: j.VIg,
                O: j.lxh,
                kind: _t.MethodKind.Unary
            },
            getTeamSandShareBotExportSettings: {
                name: "GetTeamSandShareBotExportSettings",
                I: j.Goo,
                O: j.yut,
                kind: _t.MethodKind.Unary
            },
            updateTeamSandShareBotExportSettings: {
                name: "UpdateTeamSandShareBotExportSettings",
                I: j.D$M,
                O: j.zGC,
                kind: _t.MethodKind.Unary
            },
            updateTeamGrokBotCapabilities: {
                name: "UpdateTeamGrokBotCapabilities",
                I: j.ybT,
                O: j.y$h,
                kind: _t.MethodKind.Unary
            },
            getTeamSandHibernatedOwnerVmTerminationSettings: {
                name: "GetTeamSandHibernatedOwnerVmTerminationSettings",
                I: j.W2U,
                O: j.iSU,
                kind: _t.MethodKind.Unary
            },
            updateTeamSandHibernatedOwnerVmTerminationSettings: {
                name: "UpdateTeamSandHibernatedOwnerVmTerminationSettings",
                I: j.BMC,
                O: j.jK0,
                kind: _t.MethodKind.Unary
            },
            listTeamGrokBotDefaultAgents: {
                name: "ListTeamGrokBotDefaultAgents",
                I: j.S8L,
                O: j.ayS,
                kind: _t.MethodKind.Unary
            },
            setTeamGrokBotDefaultAudience: {
                name: "SetTeamGrokBotDefaultAudience",
                I: j.GP0,
                O: j.qN3,
                kind: _t.MethodKind.Unary
            },
            getTeamSmartAutoSettings: {
                name: "GetTeamSmartAutoSettings",
                I: j.WjG,
                O: j.OBF,
                kind: _t.MethodKind.Unary
            },
            updateTeamSmartAutoSettings: {
                name: "UpdateTeamSmartAutoSettings",
                I: j.Xtc,
                O: j.bIg,
                kind: _t.MethodKind.Unary
            },
            getTeamPromptCachingSettings: {
                name: "GetTeamPromptCachingSettings",
                I: j.H1L,
                O: j.P8_,
                kind: _t.MethodKind.Unary
            },
            updateTeamPromptCachingSettings: {
                name: "UpdateTeamPromptCachingSettings",
                I: j.omy,
                O: j.wgB,
                kind: _t.MethodKind.Unary
            },
            resetTeamAgentRunModeToAutoReview: {
                name: "ResetTeamAgentRunModeToAutoReview",
                I: j.L2q,
                O: j.Jiu,
                kind: _t.MethodKind.Unary
            },
            getUserSmartAutoSettings: {
                name: "GetUserSmartAutoSettings",
                I: j.c$y,
                O: j.cHR,
                kind: _t.MethodKind.Unary
            },
            updateUserSmartAutoSettings: {
                name: "UpdateUserSmartAutoSettings",
                I: j.ZVF,
                O: j.zri,
                kind: _t.MethodKind.Unary
            },
            getTeamBackgroundAgentSettings: {
                name: "GetTeamBackgroundAgentSettings",
                I: j.fQ,
                O: j.bNb,
                kind: _t.MethodKind.Unary
            },
            updateTeamBackgroundAgentSettings: {
                name: "UpdateTeamBackgroundAgentSettings",
                I: j.QRZ,
                O: j.Iz5,
                kind: _t.MethodKind.Unary
            },
            getRepoSourcePreference: {
                name: "GetRepoSourcePreference",
                I: j.qc8,
                O: j.Mtj,
                kind: _t.MethodKind.Unary
            },
            updateUserRepoSourcePreference: {
                name: "UpdateUserRepoSourcePreference",
                I: j.G6u,
                O: j._E_,
                kind: _t.MethodKind.Unary
            },
            updateTeamRepoSourcePreference: {
                name: "UpdateTeamRepoSourcePreference",
                I: j.gez,
                O: j.MYI,
                kind: _t.MethodKind.Unary
            },
            resolvePrCreationForge: {
                name: "ResolvePrCreationForge",
                I: j.OaX,
                O: j.MX_,
                kind: _t.MethodKind.Unary
            },
            revokeTeamInviteLink: {
                name: "RevokeTeamInviteLink",
                I: j.yKm,
                O: j.mmN,
                kind: _t.MethodKind.Unary
            },
            listTeamInviteLinks: {
                name: "ListTeamInviteLinks",
                I: j.$WS,
                O: j.Rc0,
                kind: _t.MethodKind.Unary
            },
            listTeamPendingInvites: {
                name: "ListTeamPendingInvites",
                I: j.E7o,
                O: j.MLT,
                kind: _t.MethodKind.Unary
            },
            revokeTeamPendingInvite: {
                name: "RevokeTeamPendingInvite",
                I: j.BaU,
                O: j.tRU,
                kind: _t.MethodKind.Unary
            },
            resendTeamPendingInvite: {
                name: "ResendTeamPendingInvite",
                I: j.Y53,
                O: j.Ip9,
                kind: _t.MethodKind.Unary
            },
            updateUserName: {
                name: "UpdateUserName",
                I: j.bjc,
                O: j.lLB,
                kind: _t.MethodKind.Unary
            },
            uploadUserProfilePicture: {
                name: "UploadUserProfilePicture",
                I: j.J3_,
                O: j.jzZ,
                kind: _t.MethodKind.Unary
            },
            updateUserProfilePicture: {
                name: "UpdateUserProfilePicture",
                I: j.hLX,
                O: j.lYk,
                kind: _t.MethodKind.Unary
            },
            listInvoices: {
                name: "ListInvoices",
                I: j.WXZ,
                O: j.YeS,
                kind: _t.MethodKind.Unary
            },
            listUnifiedInvoices: {
                name: "ListUnifiedInvoices",
                I: j.sAj,
                O: j.eD4,
                kind: _t.MethodKind.Unary
            },
            listBlockingCheckoutInvoices: {
                name: "ListBlockingCheckoutInvoices",
                I: j.hHX,
                O: j.D7O,
                kind: _t.MethodKind.Unary
            },
            listPayableTeamInvoices: {
                name: "ListPayableTeamInvoices",
                I: j.Z_i,
                O: j.jiy,
                kind: _t.MethodKind.Unary
            },
            listUnpaidUsageInvoices: {
                name: "ListUnpaidUsageInvoices",
                I: j.QBt,
                O: j.SQ3,
                kind: _t.MethodKind.Unary
            },
            getRemainingRefunds: {
                name: "GetRemainingRefunds",
                I: j.Xdv,
                O: j.hzd,
                kind: _t.MethodKind.Unary
            },
            getServiceAccountSpendLimit: {
                name: "GetServiceAccountSpendLimit",
                I: j.f_r,
                O: j.bJx,
                kind: _t.MethodKind.Unary
            },
            setServiceAccountSpendLimit: {
                name: "SetServiceAccountSpendLimit",
                I: j.bkm,
                O: j.Vau,
                kind: _t.MethodKind.Unary
            },
            setUserHardLimit: {
                name: "SetUserHardLimit",
                I: j.H16,
                O: j.Tw9,
                kind: _t.MethodKind.Unary
            },
            setUserMonthlyLimit: {
                name: "SetUserMonthlyLimit",
                I: j.lEN,
                O: j.Z1Y,
                kind: _t.MethodKind.Unary
            },
            toggleMarketingEmailOpt: {
                name: "ToggleMarketingEmailOpt",
                I: j.bQB,
                O: j.Z6E,
                kind: _t.MethodKind.Unary
            },
            getMarketingEmailOpt: {
                name: "GetMarketingEmailOpt",
                I: j.fZH,
                O: j.hBo,
                kind: _t.MethodKind.Unary
            },
            getGlobalLeaderboardOptIn: {
                name: "GetGlobalLeaderboardOptIn",
                I: j.A9x,
                O: j.u01,
                kind: _t.MethodKind.Unary
            },
            setGlobalLeaderboardOptIn: {
                name: "SetGlobalLeaderboardOptIn",
                I: j.AB3,
                O: j.IXm,
                kind: _t.MethodKind.Unary
            },
            createTeamApiKey: {
                name: "CreateTeamApiKey",
                I: j._C2,
                O: j.Mdl,
                kind: _t.MethodKind.Unary
            },
            revokeTeamApiKey: {
                name: "RevokeTeamApiKey",
                I: j._Rg,
                O: j.ubM,
                kind: _t.MethodKind.Unary
            },
            listTeamApiKeys: {
                name: "ListTeamApiKeys",
                I: j.dMs,
                O: j.Tsf,
                kind: _t.MethodKind.Unary
            },
            listGrokApiKeys: {
                name: "ListGrokApiKeys",
                I: j.V5S,
                O: j.lc$,
                kind: _t.MethodKind.Unary
            },
            getPersonalGrokApiKeyTeam: {
                name: "GetPersonalGrokApiKeyTeam",
                I: j.jWS,
                O: j.J41,
                kind: _t.MethodKind.Unary
            },
            listGrokApiKeyAclOptions: {
                name: "ListGrokApiKeyAclOptions",
                I: j.yeW,
                O: j.ANW,
                kind: _t.MethodKind.Unary
            },
            getGrokApiKeyAccess: {
                name: "GetGrokApiKeyAccess",
                I: j.Muw,
                O: j.OFG,
                kind: _t.MethodKind.Unary
            },
            getGrokApiKeyPropagation: {
                name: "GetGrokApiKeyPropagation",
                I: j.yED,
                O: j._2X,
                kind: _t.MethodKind.Unary
            },
            createGrokApiKey: {
                name: "CreateGrokApiKey",
                I: j.m5V,
                O: j.MSw,
                kind: _t.MethodKind.Unary
            },
            deleteGrokApiKey: {
                name: "DeleteGrokApiKey",
                I: j.nG3,
                O: j.T78,
                kind: _t.MethodKind.Unary
            },
            updateGrokApiKey: {
                name: "UpdateGrokApiKey",
                I: j.laE,
                O: j.TCm,
                kind: _t.MethodKind.Unary
            },
            setGrokApiKeyAcls: {
                name: "SetGrokApiKeyAcls",
                I: j.RDD,
                O: j.lmF,
                kind: _t.MethodKind.Unary
            },
            rotateGrokApiKey: {
                name: "RotateGrokApiKey",
                I: j.pTw,
                O: j.DZc,
                kind: _t.MethodKind.Unary
            },
            getGrokAdminFeatureControls: {
                name: "GetGrokAdminFeatureControls",
                I: j._NS,
                O: j.eTm,
                kind: _t.MethodKind.Unary
            },
            updateGrokAdminFeatureControls: {
                name: "UpdateGrokAdminFeatureControls",
                I: j.XKz,
                O: j.H7s,
                kind: _t.MethodKind.Unary
            },
            getGrokUserDataControls: {
                name: "GetGrokUserDataControls",
                I: j.eNQ,
                O: j.efP,
                kind: _t.MethodKind.Unary
            },
            updateGrokUserDataControls: {
                name: "UpdateGrokUserDataControls",
                I: j.$yS,
                O: j.XrM,
                kind: _t.MethodKind.Unary
            },
            getGrokAdminTeamSettings: {
                name: "GetGrokAdminTeamSettings",
                I: j.SuU,
                O: j.yms,
                kind: _t.MethodKind.Unary
            },
            updateGrokAdminTeamSettings: {
                name: "UpdateGrokAdminTeamSettings",
                I: j.rCL,
                O: j.nbk,
                kind: _t.MethodKind.Unary
            },
            getGrokAdminOrganizationControls: {
                name: "GetGrokAdminOrganizationControls",
                I: j.lxC,
                O: j.nxh,
                kind: _t.MethodKind.Unary
            },
            updateGrokAdminOrganizationControls: {
                name: "UpdateGrokAdminOrganizationControls",
                I: j.GKl,
                O: j.GIW,
                kind: _t.MethodKind.Unary
            },
            listGrokAdminGuardrails: {
                name: "ListGrokAdminGuardrails",
                I: j.OOr,
                O: j.iwb,
                kind: _t.MethodKind.Unary
            },
            getGrokAdminGuardrail: {
                name: "GetGrokAdminGuardrail",
                I: j.nxD,
                O: j.Hux,
                kind: _t.MethodKind.Unary
            },
            createGrokAdminGuardrail: {
                name: "CreateGrokAdminGuardrail",
                I: j.ZN0,
                O: j.DdV,
                kind: _t.MethodKind.Unary
            },
            updateGrokAdminGuardrail: {
                name: "UpdateGrokAdminGuardrail",
                I: j.uuc,
                O: j.eo$,
                kind: _t.MethodKind.Unary
            },
            removeGrokAdminGuardrail: {
                name: "RemoveGrokAdminGuardrail",
                I: j.RJA,
                O: j.$ph,
                kind: _t.MethodKind.Unary
            },
            setGrokAdminGuardrailActive: {
                name: "SetGrokAdminGuardrailActive",
                I: j.dhe,
                O: j.PjD,
                kind: _t.MethodKind.Unary
            },
            deactivateGrokAdminGuardrail: {
                name: "DeactivateGrokAdminGuardrail",
                I: j.rhR,
                O: j.RVM,
                kind: _t.MethodKind.Unary
            },
            getGrokAdminBlockedUrls: {
                name: "GetGrokAdminBlockedUrls",
                I: j.ovf,
                O: j._oI,
                kind: _t.MethodKind.Unary
            },
            uploadGrokAdminBlockedUrls: {
                name: "UploadGrokAdminBlockedUrls",
                I: j.fRF,
                O: j.TkS,
                kind: _t.MethodKind.Unary
            },
            deleteGrokAdminBlockedUrls: {
                name: "DeleteGrokAdminBlockedUrls",
                I: j.nc6,
                O: j.Hdd,
                kind: _t.MethodKind.Unary
            },
            listGrokAdminOnboardingPrompts: {
                name: "ListGrokAdminOnboardingPrompts",
                I: j.cl3,
                O: j.cf9,
                kind: _t.MethodKind.Unary
            },
            createGrokAdminOnboardingPrompt: {
                name: "CreateGrokAdminOnboardingPrompt",
                I: j.byf,
                O: j.vXf,
                kind: _t.MethodKind.Unary
            },
            updateGrokAdminOnboardingPrompt: {
                name: "UpdateGrokAdminOnboardingPrompt",
                I: j.wOq,
                O: j.M2G,
                kind: _t.MethodKind.Unary
            },
            deleteGrokAdminOnboardingPrompt: {
                name: "DeleteGrokAdminOnboardingPrompt",
                I: j.aW7,
                O: j._yh,
                kind: _t.MethodKind.Unary
            },
            listXaiManagementApiKeys: {
                name: "ListXaiManagementApiKeys",
                I: j.ruw,
                O: j.xAe,
                kind: _t.MethodKind.Unary
            },
            createXaiManagementApiKey: {
                name: "CreateXaiManagementApiKey",
                I: j.azC,
                O: j.cSQ,
                kind: _t.MethodKind.Unary
            },
            updateXaiManagementApiKey: {
                name: "UpdateXaiManagementApiKey",
                I: j.dR6,
                O: j.P1K,
                kind: _t.MethodKind.Unary
            },
            deleteXaiManagementApiKey: {
                name: "DeleteXaiManagementApiKey",
                I: j.hSg,
                O: j.rGX,
                kind: _t.MethodKind.Unary
            },
            listXaiManagementApiKeyEndpointAcls: {
                name: "ListXaiManagementApiKeyEndpointAcls",
                I: j._Br,
                O: j.ylO,
                kind: _t.MethodKind.Unary
            },
            createOrganizationApiKey: {
                name: "CreateOrganizationApiKey",
                I: j.KFb,
                O: j.WRW,
                kind: _t.MethodKind.Unary
            },
            revokeOrganizationApiKey: {
                name: "RevokeOrganizationApiKey",
                I: j.W6d,
                O: j.G0c,
                kind: _t.MethodKind.Unary
            },
            listOrganizationApiKeys: {
                name: "ListOrganizationApiKeys",
                I: j.bC9,
                O: j.Xtv,
                kind: _t.MethodKind.Unary
            },
            createAutomationWebhookApiKey: {
                name: "CreateAutomationWebhookApiKey",
                I: j.nL6,
                O: j.rEt,
                kind: _t.MethodKind.Unary
            },
            createTeamServiceAccount: {
                name: "CreateTeamServiceAccount",
                I: j.HYO,
                O: j.loJ,
                kind: _t.MethodKind.Unary
            },
            listTeamServiceAccounts: {
                name: "ListTeamServiceAccounts",
                I: j.SMM,
                O: j.AhK,
                kind: _t.MethodKind.Unary
            },
            deleteTeamServiceAccount: {
                name: "DeleteTeamServiceAccount",
                I: j.IaO,
                O: j.WLQ,
                kind: _t.MethodKind.Unary
            },
            archiveTeamServiceAccount: {
                name: "ArchiveTeamServiceAccount",
                I: j.X2v,
                O: j.B6m,
                kind: _t.MethodKind.Unary
            },
            updateTeamServiceAccount: {
                name: "UpdateTeamServiceAccount",
                I: j.Ca8,
                O: j.m6C,
                kind: _t.MethodKind.Unary
            },
            suspendTeamServiceAccount: {
                name: "SuspendTeamServiceAccount",
                I: Ut,
                O: Lt,
                kind: _t.MethodKind.Unary
            },
            resumeTeamServiceAccount: {
                name: "ResumeTeamServiceAccount",
                I: $t,
                O: jt,
                kind: _t.MethodKind.Unary
            },
            rotateServiceAccountApiKey: {
                name: "RotateServiceAccountApiKey",
                I: j.OCy,
                O: j.sJP,
                kind: _t.MethodKind.Unary
            },
            getTeamRepositoriesForServiceAccountScope: {
                name: "GetTeamRepositoriesForServiceAccountScope",
                I: j.EwB,
                O: j.Eav,
                kind: _t.MethodKind.Unary
            },
            updateServiceAccountRepoScope: {
                name: "UpdateServiceAccountRepoScope",
                I: j.RZf,
                O: j.d6k,
                kind: _t.MethodKind.Unary
            },
            createUserApiKey: {
                name: "CreateUserApiKey",
                I: j.cEg,
                O: j.Aa9,
                kind: _t.MethodKind.Unary
            },
            revokeUserApiKey: {
                name: "RevokeUserApiKey",
                I: j.GOY,
                O: j.yQR,
                kind: _t.MethodKind.Unary
            },
            listUserApiKeys: {
                name: "ListUserApiKeys",
                I: j.juR,
                O: j.ZCs,
                kind: _t.MethodKind.Unary
            },
            createServiceToken: {
                name: "CreateServiceToken",
                I: j.C10,
                O: j.e7b,
                kind: _t.MethodKind.Unary
            },
            listServiceTokens: {
                name: "ListServiceTokens",
                I: j.v0n,
                O: j.X1$,
                kind: _t.MethodKind.Unary
            },
            updateServiceTokenPermissions: {
                name: "UpdateServiceTokenPermissions",
                I: j.Fo6,
                O: j.rA8,
                kind: _t.MethodKind.Unary
            },
            revokeServiceToken: {
                name: "RevokeServiceToken",
                I: j.yYY,
                O: j.w$r,
                kind: _t.MethodKind.Unary
            },
            rotateServiceToken: {
                name: "RotateServiceToken",
                I: j.Rbl,
                O: j.t8U,
                kind: _t.MethodKind.Unary
            },
            confirmGithubInstallation: {
                name: "ConfirmGithubInstallation",
                I: j.tI8,
                O: j.xpT,
                kind: _t.MethodKind.Unary
            },
            updateTeamName: {
                name: "UpdateTeamName",
                I: j.l5I,
                O: j.FsH,
                kind: _t.MethodKind.Unary
            },
            updateTeamDashboardAnalyticsSetting: {
                name: "UpdateTeamDashboardAnalyticsSetting",
                I: j.CoZ,
                O: j.YZV,
                kind: _t.MethodKind.Unary
            },
            updateTeamOriginSetting: {
                name: "UpdateTeamOriginSetting",
                I: j.YgU,
                O: j.G3W,
                kind: _t.MethodKind.Unary
            },
            updateTeamScimRequireUserDirectorySetting: {
                name: "UpdateTeamScimRequireUserDirectorySetting",
                I: j.zul,
                O: j.L5U,
                kind: _t.MethodKind.Unary
            },
            getTeamScimRequireUserDirectoryPreview: {
                name: "GetTeamScimRequireUserDirectoryPreview",
                I: j.Uto,
                O: j.EHd,
                kind: _t.MethodKind.Unary
            },
            getEffectiveUserAgentStoreSkillsSettings: {
                name: "GetEffectiveUserAgentStoreSkillsSettings",
                I: j.hVj,
                O: j.b$E,
                kind: _t.MethodKind.Unary
            },
            updateUserAgentStoreSkillsSettings: {
                name: "UpdateUserAgentStoreSkillsSettings",
                I: j.Vry,
                O: j.nNe,
                kind: _t.MethodKind.Unary
            },
            getSlackUserSettings: {
                name: "GetSlackUserSettings",
                I: j.e0r,
                O: j.ewI,
                kind: _t.MethodKind.Unary
            },
            updateSlackUserSettings: {
                name: "UpdateSlackUserSettings",
                I: j.F5_,
                O: j.Lt9,
                kind: _t.MethodKind.Unary
            },
            getSlackRepoRoutingRules: {
                name: "GetSlackRepoRoutingRules",
                I: j.hE5,
                O: j.LGY,
                kind: _t.MethodKind.Unary
            },
            createSlackRepoRoutingRule: {
                name: "CreateSlackRepoRoutingRule",
                I: j.EMn,
                O: j.QEY,
                kind: _t.MethodKind.Unary
            },
            updateSlackRepoRoutingRule: {
                name: "UpdateSlackRepoRoutingRule",
                I: j.xcI,
                O: j.hbx,
                kind: _t.MethodKind.Unary
            },
            deleteSlackRepoRoutingRule: {
                name: "DeleteSlackRepoRoutingRule",
                I: j.Bz7,
                O: j.Tfn,
                kind: _t.MethodKind.Unary
            },
            getSlackDefaultWorkerRules: {
                name: "GetSlackDefaultWorkerRules",
                I: j.eOv,
                O: j.gpX,
                kind: _t.MethodKind.Unary
            },
            setSlackDefaultWorkerRule: {
                name: "SetSlackDefaultWorkerRule",
                I: j.dn0,
                O: j.P7l,
                kind: _t.MethodKind.Unary
            },
            deleteSlackDefaultWorkerRule: {
                name: "DeleteSlackDefaultWorkerRule",
                I: j.CGB,
                O: j.sHT,
                kind: _t.MethodKind.Unary
            },
            isOnNewPricing: {
                name: "IsOnNewPricing",
                I: j.HxK,
                O: j.jAL,
                kind: _t.MethodKind.Unary
            },
            getLinearAuthUrl: {
                name: "GetLinearAuthUrl",
                I: j._9N,
                O: j.wet,
                kind: _t.MethodKind.Unary
            },
            connectLinearCallback: {
                name: "ConnectLinearCallback",
                I: j.wlK,
                O: j.Adp,
                kind: _t.MethodKind.Unary
            },
            getMicrosoftTeamsLinkContext: {
                name: "GetMicrosoftTeamsLinkContext",
                I: j.vDB,
                O: j.bIf,
                kind: _t.MethodKind.Unary
            },
            setMicrosoftTeamsAuth: {
                name: "SetMicrosoftTeamsAuth",
                I: j.ak0,
                O: j.YrR,
                kind: _t.MethodKind.Unary
            },
            getLinearStatus: {
                name: "GetLinearStatus",
                I: j.xGO,
                O: j.zOq,
                kind: _t.MethodKind.Unary
            },
            disconnectLinear: {
                name: "DisconnectLinear",
                I: j.Xqi,
                O: j.vXd,
                kind: _t.MethodKind.Unary
            },
            getLinearTeams: {
                name: "GetLinearTeams",
                I: j.v5z,
                O: j.HMD,
                kind: _t.MethodKind.Unary
            },
            getLinearSettings: {
                name: "GetLinearSettings",
                I: j.MFi,
                O: j.C0g,
                kind: _t.MethodKind.Unary
            },
            updateLinearTeamSetting: {
                name: "UpdateLinearTeamSetting",
                I: j.$H8,
                O: j.XMd,
                kind: _t.MethodKind.Unary
            },
            updateLinearProjectSetting: {
                name: "UpdateLinearProjectSetting",
                I: j.tJW,
                O: j.RYJ,
                kind: _t.MethodKind.Unary
            },
            getLinearLabels: {
                name: "GetLinearLabels",
                I: j.a3w,
                O: j.eZU,
                kind: _t.MethodKind.Unary
            },
            getLinearIssues: {
                name: "GetLinearIssues",
                I: j.PG$,
                O: j.bBu,
                kind: _t.MethodKind.Unary
            },
            batchGetLinearIssueSummaries: {
                name: "BatchGetLinearIssueSummaries",
                I: j.aFD,
                O: j.W5r,
                kind: _t.MethodKind.Unary
            },
            getXaiTeamLinkStatus: {
                name: "GetXaiTeamLinkStatus",
                I: j.$TS,
                O: j.$0p,
                kind: _t.MethodKind.Unary
            },
            startXaiTeamLink: {
                name: "StartXaiTeamLink",
                I: j.ptw,
                O: j.zlM,
                kind: _t.MethodKind.Unary
            },
            confirmXaiTeamLink: {
                name: "ConfirmXaiTeamLink",
                I: j.bWR,
                O: j.FQR,
                kind: _t.MethodKind.Unary
            },
            cancelXaiTeamLinkProposal: {
                name: "CancelXaiTeamLinkProposal",
                I: j.pAq,
                O: j.LOM,
                kind: _t.MethodKind.Unary
            },
            unlinkXaiTeam: {
                name: "UnlinkXaiTeam",
                I: j.GTA,
                O: j.ev7,
                kind: _t.MethodKind.Unary
            },
            getXaiCursorTeamMergeStatus: {
                name: "GetXaiCursorTeamMergeStatus",
                I: j.GhV,
                O: j.XLd,
                kind: _t.MethodKind.Unary
            },
            getXaiCursorTeamMembershipPreview: {
                name: "GetXaiCursorTeamMembershipPreview",
                I: j.R0Z,
                O: j.JNH,
                kind: _t.MethodKind.Unary
            },
            updateXaiCursorTeamMemberRoles: {
                name: "UpdateXaiCursorTeamMemberRoles",
                I: j.XJ2,
                O: j.HcF,
                kind: _t.MethodKind.Unary
            },
            startXaiCursorTeamMerge: {
                name: "StartXaiCursorTeamMerge",
                I: j.hoi,
                O: j.lhf,
                kind: _t.MethodKind.Unary
            },
            getXaiCursorTeamMergeGrokTeams: {
                name: "GetXaiCursorTeamMergeGrokTeams",
                I: j.IPQ,
                O: j.Ood,
                kind: _t.MethodKind.Unary
            },
            selectXaiCursorTeamMergeGrokTeam: {
                name: "SelectXaiCursorTeamMergeGrokTeam",
                I: j.TTI,
                O: j.pPp,
                kind: _t.MethodKind.Unary
            },
            confirmXaiCursorTeamMerge: {
                name: "ConfirmXaiCursorTeamMerge",
                I: j.RqP,
                O: j.X2R,
                kind: _t.MethodKind.Unary
            },
            prepareXaiCursorTeamMergeCheckout: {
                name: "PrepareXaiCursorTeamMergeCheckout",
                I: j.Ybi,
                O: j.kBz,
                kind: _t.MethodKind.Unary
            },
            unprepareXaiCursorTeamMergeCheckout: {
                name: "UnprepareXaiCursorTeamMergeCheckout",
                I: j.xbn,
                O: j.jrF,
                kind: _t.MethodKind.Unary
            },
            finalizeXaiCursorTeamMergeCheckout: {
                name: "FinalizeXaiCursorTeamMergeCheckout",
                I: j.hih,
                O: j.bCj,
                kind: _t.MethodKind.Unary
            },
            ensureXaiCursorTeamForMerge: {
                name: "EnsureXaiCursorTeamForMerge",
                I: j._nC,
                O: j.kgP,
                kind: _t.MethodKind.Unary
            },
            getXaiCursorTeamMergePrepaidPreview: {
                name: "GetXaiCursorTeamMergePrepaidPreview",
                I: j.AQb,
                O: j.aNf,
                kind: _t.MethodKind.Unary
            },
            cancelXaiCursorTeamMergeProposal: {
                name: "CancelXaiCursorTeamMergeProposal",
                I: j.pX4,
                O: j.j9U,
                kind: _t.MethodKind.Unary
            },
            transferXaiCredits: {
                name: "TransferXaiCredits",
                I: j.hDl,
                O: j.hWK,
                kind: _t.MethodKind.Unary
            },
            getXaiCreditTransferStatus: {
                name: "GetXaiCreditTransferStatus",
                I: j.yq2,
                O: j.hWK,
                kind: _t.MethodKind.Unary
            },
            listXaiCreditTransfers: {
                name: "ListXaiCreditTransfers",
                I: j.R_i,
                O: j.hN$,
                kind: _t.MethodKind.Unary
            },
            getPagerDutyAuthUrl: {
                name: "GetPagerDutyAuthUrl",
                I: j.Ig_,
                O: j.Esv,
                kind: _t.MethodKind.Unary
            },
            connectPagerDutyCallback: {
                name: "ConnectPagerDutyCallback",
                I: j.ecT,
                O: j.YdR,
                kind: _t.MethodKind.Unary
            },
            getPagerDutyStatus: {
                name: "GetPagerDutyStatus",
                I: j.JmO,
                O: j.bUD,
                kind: _t.MethodKind.Unary
            },
            getPagerDutyServices: {
                name: "GetPagerDutyServices",
                I: j.bo4,
                O: j.twU,
                kind: _t.MethodKind.Unary
            },
            disconnectPagerDuty: {
                name: "DisconnectPagerDuty",
                I: j.dBq,
                O: j.VS,
                kind: _t.MethodKind.Unary
            },
            getJiraInstallUrl: {
                name: "GetJiraInstallUrl",
                I: j.m8H,
                O: j.G4o,
                kind: _t.MethodKind.Unary
            },
            linkJiraInstallation: {
                name: "LinkJiraInstallation",
                I: j.Uao,
                O: j.Gdv,
                kind: _t.MethodKind.Unary
            },
            getJiraStatus: {
                name: "GetJiraStatus",
                I: j.CJ0,
                O: j.qZs,
                kind: _t.MethodKind.Unary
            },
            listJiraInstallations: {
                name: "ListJiraInstallations",
                I: j.LuE,
                O: j.VG3,
                kind: _t.MethodKind.Unary
            },
            getBitbucketForgeStatus: {
                name: "GetBitbucketForgeStatus",
                I: j.y90,
                O: j.YmN,
                kind: _t.MethodKind.Unary
            },
            disconnectJira: {
                name: "DisconnectJira",
                I: j.KQv,
                O: j.S0I,
                kind: _t.MethodKind.Unary
            },
            disconnectBitbucketForge: {
                name: "DisconnectBitbucketForge",
                I: j.I5D,
                O: j.e0h,
                kind: _t.MethodKind.Unary
            },
            getJiraProjects: {
                name: "GetJiraProjects",
                I: j.k0s,
                O: j.EGh,
                kind: _t.MethodKind.Unary
            },
            getJiraTeamSettings: {
                name: "GetJiraTeamSettings",
                I: j.WCk,
                O: j.CyC,
                kind: _t.MethodKind.Unary
            },
            updateJiraTeamSettings: {
                name: "UpdateJiraTeamSettings",
                I: j.Fuf,
                O: j.HCj,
                kind: _t.MethodKind.Unary
            },
            getJiraRoutingRules: {
                name: "GetJiraRoutingRules",
                I: j.XUt,
                O: j.ZU4,
                kind: _t.MethodKind.Unary
            },
            createJiraRoutingRule: {
                name: "CreateJiraRoutingRule",
                I: j.OoP,
                O: j.gZI,
                kind: _t.MethodKind.Unary
            },
            updateJiraRoutingRule: {
                name: "UpdateJiraRoutingRule",
                I: j.zFs,
                O: j.bQQ,
                kind: _t.MethodKind.Unary
            },
            deleteJiraRoutingRule: {
                name: "DeleteJiraRoutingRule",
                I: j.XeB,
                O: j.zNr,
                kind: _t.MethodKind.Unary
            },
            linkJiraUser: {
                name: "LinkJiraUser",
                I: j.DWb,
                O: j.Fi2,
                kind: _t.MethodKind.Unary
            },
            listJiraUserLinks: {
                name: "ListJiraUserLinks",
                I: j.KaV,
                O: j.ySt,
                kind: _t.MethodKind.Unary
            },
            unlinkJiraUser: {
                name: "UnlinkJiraUser",
                I: j.ceB,
                O: j.WXO,
                kind: _t.MethodKind.Unary
            },
            deleteBedrockIamRole: {
                name: "DeleteBedrockIamRole",
                I: j.o0f,
                O: j.mTO,
                kind: _t.MethodKind.Unary
            },
            unlinkSlackAccess: {
                name: "UnlinkSlackAccess",
                I: j.h0F,
                O: j.dTt,
                kind: _t.MethodKind.Unary
            },
            listSlackConversations: {
                name: "ListSlackConversations",
                I: j.iHk,
                O: j.gsv,
                kind: _t.MethodKind.Unary
            },
            listMicrosoftTeamsChannels: {
                name: "ListMicrosoftTeamsChannels",
                I: j.wLf,
                O: j.Sot,
                kind: _t.MethodKind.Unary
            },
            getSlackConversationsByIds: {
                name: "GetSlackConversationsByIds",
                I: j.BaG,
                O: j.zYR,
                kind: _t.MethodKind.Unary
            },
            logSlackbotAuthConversionFunnel: {
                name: "LogSlackbotAuthConversionFunnel",
                I: j.HOD,
                O: j.pQL,
                kind: _t.MethodKind.Unary
            },
            logClickedConnectSlack: {
                name: "LogClickedConnectSlack",
                I: j.Not,
                O: j.T0x,
                kind: _t.MethodKind.Unary
            },
            checkUserApiKeyAccess: {
                name: "CheckUserApiKeyAccess",
                I: j.QKN,
                O: j.wmq,
                kind: _t.MethodKind.Unary
            },
            isAllowedFreeTrialUsage: {
                name: "IsAllowedFreeTrialUsage",
                I: j.p$r,
                O: j.Jag,
                kind: _t.MethodKind.Unary
            },
            isNextSetupRunFree: {
                name: "IsNextSetupRunFree",
                I: j.vfb,
                O: j.$8m,
                kind: _t.MethodKind.Unary
            },
            completedLinkSlackAccount: {
                name: "CompletedLinkSlackAccount",
                I: j.wm7,
                O: j.O$A,
                kind: _t.MethodKind.Unary
            },
            notifyBugbotTeamAdmins: {
                name: "NotifyBugbotTeamAdmins",
                I: j.anf,
                O: j.WJW,
                kind: _t.MethodKind.Unary
            },
            getAdminNotificationStatus: {
                name: "GetAdminNotificationStatus",
                I: j.gJU,
                O: j.mib,
                kind: _t.MethodKind.Unary
            },
            optOutNewPricing: {
                name: "OptOutNewPricing",
                I: j.P4,
                O: j.HdK,
                kind: _t.MethodKind.Unary
            },
            submitFeedback: {
                name: "SubmitFeedback",
                I: j.h5c,
                O: j.b9h,
                kind: _t.MethodKind.Unary
            },
            submitFeedbackAnon: {
                name: "SubmitFeedbackAnon",
                I: j.h5c,
                O: j.b9h,
                kind: _t.MethodKind.Unary
            },
            submitRepositoryProtectionClaim: {
                name: "SubmitRepositoryProtectionClaim",
                I: j.zuj,
                O: j.NMG,
                kind: _t.MethodKind.Unary
            },
            activateRepositoryProtectionInvite: {
                name: "ActivateRepositoryProtectionInvite",
                I: j.bo5,
                O: j.xWW,
                kind: _t.MethodKind.Unary
            },
            getActiveOffboardingBanner: {
                name: "GetActiveOffboardingBanner",
                I: j.pg$,
                O: j.fSY,
                kind: _t.MethodKind.Unary
            },
            clientAction: {
                name: "ClientAction",
                I: j.H5i,
                O: j.zah,
                kind: _t.MethodKind.Unary
            },
            listUsageAlerts: {
                name: "ListUsageAlerts",
                I: j.dUM,
                O: j.UB9,
                kind: _t.MethodKind.Unary
            },
            createUsageAlerts: {
                name: "CreateUsageAlerts",
                I: j.Q1P,
                O: j.kJb,
                kind: _t.MethodKind.Unary
            },
            deleteUsageAlerts: {
                name: "DeleteUsageAlerts",
                I: j.LME,
                O: j.rJY,
                kind: _t.MethodKind.Unary
            },
            updateUsageAlerts: {
                name: "UpdateUsageAlerts",
                I: j.D3G,
                O: j.rew,
                kind: _t.MethodKind.Unary
            },
            requestIndividualLimitsOptOut: {
                name: "RequestIndividualLimitsOptOut",
                I: j.JrS,
                O: j.HJo,
                kind: _t.MethodKind.Unary
            },
            listMarketplacePlugins: {
                name: "ListMarketplacePlugins",
                I: j.ZMX,
                O: j.vEP,
                kind: _t.MethodKind.Unary
            },
            listPublisherPublicPlugins: {
                name: "ListPublisherPublicPlugins",
                I: j.nMU,
                O: j.lqq,
                kind: _t.MethodKind.Unary
            },
            getUserProfile: {
                name: "GetUserProfile",
                I: j.mH6,
                O: j.CZF,
                kind: _t.MethodKind.Unary
            },
            updateUserProfile: {
                name: "UpdateUserProfile",
                I: j.LjR,
                O: j.Hoz,
                kind: _t.MethodKind.Unary
            },
            claimUserProfileHandle: {
                name: "ClaimUserProfileHandle",
                I: j.iOH,
                O: j.g5C,
                kind: _t.MethodKind.Unary
            },
            getPublicProfileByHandle: {
                name: "GetPublicProfileByHandle",
                I: j.dwF,
                O: j.t5n,
                kind: _t.MethodKind.Unary
            },
            getViewableProfileByHandle: {
                name: "GetViewableProfileByHandle",
                I: j.hsE,
                O: j.vuk,
                kind: _t.MethodKind.Unary
            },
            getTeamMemberProfileByHandle: {
                name: "GetTeamMemberProfileByHandle",
                I: j.jcw,
                O: j.X5_,
                kind: _t.MethodKind.Unary
            },
            getPlugin: {
                name: "GetPlugin",
                I: j.vVx,
                O: j.fAb,
                kind: _t.MethodKind.Unary
            },
            createPlugin: {
                name: "CreatePlugin",
                I: j.hzU,
                O: j.rfl,
                kind: _t.MethodKind.Unary
            },
            updatePluginMcpConfig: {
                name: "UpdatePluginMcpConfig",
                I: j.oVF,
                O: j.GcM,
                kind: _t.MethodKind.Unary
            },
            publishPlugin: {
                name: "PublishPlugin",
                I: j.qkO,
                O: j.YPJ,
                kind: _t.MethodKind.Unary
            },
            unpublishPlugin: {
                name: "UnpublishPlugin",
                I: j.VJo,
                O: j.ZuH,
                kind: _t.MethodKind.Unary
            },
            parseGitHubRepoForPlugins: {
                name: "ParseGitHubRepoForPlugins",
                I: j.ggh,
                O: j.nXe,
                kind: _t.MethodKind.Unary
            },
            parsePluginPublisherRepoInternal: {
                name: "ParsePluginPublisherRepoInternal",
                I: j.VWM,
                O: j.HiH,
                kind: _t.MethodKind.Unary
            },
            previewReindexPluginRepoInternal: {
                name: "PreviewReindexPluginRepoInternal",
                I: j.dOz,
                O: j.smL,
                kind: _t.MethodKind.Unary
            },
            applyReindexPluginRepoInternal: {
                name: "ApplyReindexPluginRepoInternal",
                I: j.flJ,
                O: j.SZm,
                kind: _t.MethodKind.Unary
            },
            previewMigrateReindexPluginRepoInternal: {
                name: "PreviewMigrateReindexPluginRepoInternal",
                I: j.Q66,
                O: j.b48,
                kind: _t.MethodKind.Unary
            },
            applyMigrateReindexPluginRepoInternal: {
                name: "ApplyMigrateReindexPluginRepoInternal",
                I: j.GJd,
                O: j.LmS,
                kind: _t.MethodKind.Unary
            },
            updateTeamMarketplaceOriginDistributionInternal: {
                name: "UpdateTeamMarketplaceOriginDistributionInternal",
                I: j.WFw,
                O: j.gqu,
                kind: _t.MethodKind.Unary
            },
            getXaiEmailEligibilityInternal: {
                name: "GetXaiEmailEligibilityInternal",
                I: j.SCd,
                O: j.YDS,
                kind: _t.MethodKind.Unary
            },
            createSupportImpersonationSessionInternal: {
                name: "CreateSupportImpersonationSessionInternal",
                I: j.Cbz,
                O: j.Gf$,
                kind: _t.MethodKind.Unary
            },
            removeOrganizationMemberInternal: {
                name: "RemoveOrganizationMemberInternal",
                I: j.sw6,
                O: j.qVu,
                kind: _t.MethodKind.Unary
            },
            submitPluginForApproval: {
                name: "SubmitPluginForApproval",
                I: j.vCC,
                O: j.D7h,
                kind: _t.MethodKind.Unary
            },
            approvePlugin: {
                name: "ApprovePlugin",
                I: j.c2n,
                O: j.ISv,
                kind: _t.MethodKind.Unary
            },
            rejectPlugin: {
                name: "RejectPlugin",
                I: j.WZo,
                O: j.oGE,
                kind: _t.MethodKind.Unary
            },
            listUserPluginInstalls: {
                name: "ListUserPluginInstalls",
                I: j.OHt,
                O: j.UgB,
                kind: _t.MethodKind.Unary
            },
            installUserPlugin: {
                name: "InstallUserPlugin",
                I: j.Bi3,
                O: j.jsr,
                kind: _t.MethodKind.Unary
            },
            updateUserPluginInstall: {
                name: "UpdateUserPluginInstall",
                I: j.__V,
                O: j.c3q,
                kind: _t.MethodKind.Unary
            },
            uninstallUserPlugin: {
                name: "UninstallUserPlugin",
                I: j.w66,
                O: j.Mmr,
                kind: _t.MethodKind.Unary
            },
            getTeamPluginPopularity: {
                name: "GetTeamPluginPopularity",
                I: j.LGu,
                O: j.PnF,
                kind: _t.MethodKind.Unary
            },
            getTeamPluginPrimitiveUsage: {
                name: "GetTeamPluginPrimitiveUsage",
                I: j.i9d,
                O: j.sev,
                kind: _t.MethodKind.Unary
            },
            listTeamAvailableMarketplacePlugins: {
                name: "ListTeamAvailableMarketplacePlugins",
                I: j.$_i,
                O: j.B0l,
                kind: _t.MethodKind.Unary
            },
            getTeamPinnedMarketplacePlugins: {
                name: "GetTeamPinnedMarketplacePlugins",
                I: j.ax8,
                O: j._lt,
                kind: _t.MethodKind.Unary
            },
            updateTeamPinnedMarketplacePlugins: {
                name: "UpdateTeamPinnedMarketplacePlugins",
                I: j.hLv,
                O: j.VCH,
                kind: _t.MethodKind.Unary
            },
            installTeamPlugin: {
                name: "InstallTeamPlugin",
                I: j.Jjf,
                O: j.hsS,
                kind: _t.MethodKind.Unary
            },
            updateTeamPluginInstall: {
                name: "UpdateTeamPluginInstall",
                I: j.iRP,
                O: j.y13,
                kind: _t.MethodKind.Unary
            },
            uninstallTeamPlugin: {
                name: "UninstallTeamPlugin",
                I: j.m,
                O: j.E3F,
                kind: _t.MethodKind.Unary
            },
            getEffectiveUserPlugins: {
                name: "GetEffectiveUserPlugins",
                I: j.EwF,
                O: j.KhO,
                kind: _t.MethodKind.Unary
            },
            resolvePluginsByRef: {
                name: "ResolvePluginsByRef",
                I: j.WvV,
                O: j.UgI,
                kind: _t.MethodKind.Unary
            },
            listMarketplaces: {
                name: "ListMarketplaces",
                I: j.iPX,
                O: j.A8F,
                kind: _t.MethodKind.Unary
            },
            addMarketplace: {
                name: "AddMarketplace",
                I: j.Y9_,
                O: j.CeW,
                kind: _t.MethodKind.Unary
            },
            getOrCreateDefaultTeamMarketplace: {
                name: "GetOrCreateDefaultTeamMarketplace",
                I: j.q$3,
                O: j.mht,
                kind: _t.MethodKind.Unary
            },
            updateMarketplace: {
                name: "UpdateMarketplace",
                I: j.UJO,
                O: j.Cel,
                kind: _t.MethodKind.Unary
            },
            removeMarketplace: {
                name: "RemoveMarketplace",
                I: j.Bqo,
                O: j.PQd,
                kind: _t.MethodKind.Unary
            },
            refreshMarketplace: {
                name: "RefreshMarketplace",
                I: j.YDo,
                O: j.cBR,
                kind: _t.MethodKind.Unary
            },
            reindexAndApplyTeamMarketplaceChanges: {
                name: "ReindexAndApplyTeamMarketplaceChanges",
                I: j.BRM,
                O: j.loc,
                kind: _t.MethodKind.Unary
            },
            registerMarketplaceAndPlugins: {
                name: "RegisterMarketplaceAndPlugins",
                I: j.Dxc,
                O: j.ZHm,
                kind: _t.MethodKind.Unary
            },
            updateTeamMarketplaceConfig: {
                name: "UpdateTeamMarketplaceConfig",
                I: j.Vpq,
                O: j.vfz,
                kind: _t.MethodKind.Unary
            },
            setTeamMarketplaceRepository: {
                name: "SetTeamMarketplaceRepository",
                I: j.kMn,
                O: j.YOY,
                kind: _t.MethodKind.Unary
            },
            setMarketplaceOriginDistribution: {
                name: "SetMarketplaceOriginDistribution",
                I: j.xHb,
                O: j.fxk,
                kind: _t.MethodKind.Unary
            },
            getMarketplaceOriginDistributionStatus: {
                name: "GetMarketplaceOriginDistributionStatus",
                I: j.pUz,
                O: j.hHr,
                kind: _t.MethodKind.Unary
            },
            setTeamMarketplacePluginPolicies: {
                name: "SetTeamMarketplacePluginPolicies",
                I: j.rJW,
                O: j.RZJ,
                kind: _t.MethodKind.Unary
            },
            completeSharepointOauth: {
                name: "CompleteSharepointOauth",
                I: j.vJq,
                O: j.PaT,
                kind: _t.MethodKind.Unary
            },
            getTeamSharepointConnector: {
                name: "GetTeamSharepointConnector",
                I: j.FO$,
                O: j.hFv,
                kind: _t.MethodKind.Unary
            },
            disconnectTeamSharepoint: {
                name: "DisconnectTeamSharepoint",
                I: j.sg4,
                O: j.a3K,
                kind: _t.MethodKind.Unary
            },
            setTeamSharepointAllowedSites: {
                name: "SetTeamSharepointAllowedSites",
                I: j.kau,
                O: j.YMP,
                kind: _t.MethodKind.Unary
            },
            setTeamMarketplacePluginPolicyVariables: {
                name: "SetTeamMarketplacePluginPolicyVariables",
                I: j.sst,
                O: j.Kfp,
                kind: _t.MethodKind.Unary
            },
            linkPluginsToTeamMarketplace: {
                name: "LinkPluginsToTeamMarketplace",
                I: j.PuH,
                O: j.n1r,
                kind: _t.MethodKind.Unary
            },
            unlinkPluginsFromTeamMarketplace: {
                name: "UnlinkPluginsFromTeamMarketplace",
                I: j.nun,
                O: j.bzo,
                kind: _t.MethodKind.Unary
            },
            previewTeamMarketplaceMcpImpact: {
                name: "PreviewTeamMarketplaceMcpImpact",
                I: j.ObP,
                O: j.qdL,
                kind: _t.MethodKind.Unary
            },
            getManagedSkills: {
                name: "GetManagedSkills",
                I: j.X8g,
                O: j.p_E,
                kind: _t.MethodKind.Unary
            },
            getCursorUserState: {
                name: "GetCursorUserState",
                I: j.y4P,
                O: j.WY9,
                kind: _t.MethodKind.Unary
            },
            setJobData: {
                name: "SetJobData",
                I: j.B$8,
                O: j.JgL,
                kind: _t.MethodKind.Unary
            },
            listFinancialConnections: {
                name: "ListFinancialConnections",
                I: j.mbE,
                O: j.y5v,
                kind: _t.MethodKind.Unary
            },
            listFinancialAccounts: {
                name: "ListFinancialAccounts",
                I: j.bHh,
                O: j.jWD,
                kind: _t.MethodKind.Unary
            },
            deleteFinancialConnection: {
                name: "DeleteFinancialConnection",
                I: j.Yiy,
                O: j.YY6,
                kind: _t.MethodKind.Unary
            },
            startFinancialLink: {
                name: "StartFinancialLink",
                I: j.tVV,
                O: j.zHj,
                kind: _t.MethodKind.Unary
            },
            updateBitbucketServerInstanceOauthApp: {
                name: "UpdateBitbucketServerInstanceOauthApp",
                I: j.KEO,
                O: j.qA0,
                kind: _t.MethodKind.Unary
            }
        }
    };
    var zt = function(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
            return this;
        }, t);
        function n(r) {
            t[r] = e[r] && function(t) {
                return new Promise(function(n, s) {
                    (function(e, t, r, n) {
                        Promise.resolve(n).then(function(t) {
                            e({
                                value: t,
                                done: r
                            });
                        }, t);
                    })(n, s, (t = e[r](t)).done, t.value);
                });
            };
        }
    }, Wt = function(e) {
        return this instanceof Wt ? (this.v = e, this) : new Wt(e);
    }, Ht = function(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, s = r.apply(e, t || []), o = [];
        return n = {}, i("next"), i("throw"), i("return", function(e) {
            return function(t) {
                return Promise.resolve(t).then(e, l);
            };
        }), n[Symbol.asyncIterator] = function() {
            return this;
        }, n;
        function i(e, t) {
            s[e] && (n[e] = function(t) {
                return new Promise(function(r, n) {
                    o.push([
                        e,
                        t,
                        r,
                        n
                    ]) > 1 || a(e, t);
                });
            }, t && (n[e] = t(n[e])));
        }
        function a(e, t) {
            try {
                (r = s[e](t)).value instanceof Wt ? Promise.resolve(r.value.v).then(c, l) : u(o[0][2], r);
            } catch (e) {
                u(o[0][3], e);
            }
            var r;
        }
        function c(e) {
            a("next", e);
        }
        function l(e) {
            a("throw", e);
        }
        function u(e, t) {
            e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
        }
    }, Kt = function(e) {
        var t, r;
        return t = {}, n("next"), n("throw", function(e) {
            throw e;
        }), n("return"), t[Symbol.iterator] = function() {
            return this;
        }, t;
        function n(n, s) {
            t[n] = e[n] ? function(t) {
                return (r = !r) ? {
                    value: Wt(e[n](t)),
                    done: !1
                } : s ? s(t) : t;
            } : s;
        }
    };
    var Vt = function(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
            return this;
        }, t);
        function n(r) {
            t[r] = e[r] && function(t) {
                return new Promise(function(n, s) {
                    (function(e, t, r, n) {
                        Promise.resolve(n).then(function(t) {
                            e({
                                value: t,
                                done: r
                            });
                        }, t);
                    })(n, s, (t = e[r](t)).done, t.value);
                });
            };
        }
    }, Yt = function(e) {
        return this instanceof Yt ? (this.v = e, this) : new Yt(e);
    }, Qt = function(e) {
        var t, r;
        return t = {}, n("next"), n("throw", function(e) {
            throw e;
        }), n("return"), t[Symbol.iterator] = function() {
            return this;
        }, t;
        function n(n, s) {
            t[n] = e[n] ? function(t) {
                return (r = !r) ? {
                    value: Yt(e[n](t)),
                    done: !1
                } : s ? s(t) : t;
            } : s;
        }
    }, Xt = function(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, s = r.apply(e, t || []), o = [];
        return n = {}, i("next"), i("throw"), i("return", function(e) {
            return function(t) {
                return Promise.resolve(t).then(e, l);
            };
        }), n[Symbol.asyncIterator] = function() {
            return this;
        }, n;
        function i(e, t) {
            s[e] && (n[e] = function(t) {
                return new Promise(function(r, n) {
                    o.push([
                        e,
                        t,
                        r,
                        n
                    ]) > 1 || a(e, t);
                });
            }, t && (n[e] = t(n[e])));
        }
        function a(e, t) {
            try {
                (r = s[e](t)).value instanceof Yt ? Promise.resolve(r.value.v).then(c, l) : u(o[0][2], r);
            } catch (e) {
                u(o[0][3], e);
            }
            var r;
        }
        function c(e) {
            a("next", e);
        }
        function l(e) {
            a("throw", e);
        }
        function u(e, t) {
            e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
        }
    };
    function Zt(e, t) {
        return function(e, t) {
            const r = {};
            for (const [n, s] of Object.entries(e.methods)){
                const o = t(Object.assign(Object.assign({}, s), {
                    localName: n,
                    service: e
                }));
                null != o && (r[n] = o);
            }
            return r;
        }(e, (r)=>{
            switch(r.kind){
                case _t.MethodKind.Unary:
                    return function(e, t, r) {
                        return async function(n, s) {
                            var o, i;
                            const a = await e.unary(t, r, null == s ? void 0 : s.signal, null == s ? void 0 : s.timeoutMs, null == s ? void 0 : s.headers, n, null == s ? void 0 : s.contextValues);
                            return null === (o = null == s ? void 0 : s.onHeader) || void 0 === o || o.call(s, a.header), null === (i = null == s ? void 0 : s.onTrailer) || void 0 === i || i.call(s, a.trailer), a.message;
                        };
                    }(t, e, r);
                case _t.MethodKind.ServerStreaming:
                    return function(e, t, r) {
                        return function(n, s) {
                            return er(e.stream(t, r, null == s ? void 0 : s.signal, null == s ? void 0 : s.timeoutMs, null == s ? void 0 : s.headers, function(e) {
                                return Ht(this, arguments, function*() {
                                    yield Wt((yield* Kt(zt(e))));
                                });
                            }([
                                n
                            ]), null == s ? void 0 : s.contextValues), s);
                        };
                    }(t, e, r);
                case _t.MethodKind.ClientStreaming:
                    return function(e, t, r) {
                        return async function(n, s) {
                            var o, i, a, c, l, u;
                            const d = await e.stream(t, r, null == s ? void 0 : s.signal, null == s ? void 0 : s.timeoutMs, null == s ? void 0 : s.headers, n, null == s ? void 0 : s.contextValues);
                            let p;
                            null === (l = null == s ? void 0 : s.onHeader) || void 0 === l || l.call(s, d.header);
                            let m = 0;
                            try {
                                for(var h, f = !0, g = Vt(d.message); !(o = (h = await g.next()).done); f = !0){
                                    c = h.value, f = !1;
                                    p = c, m++;
                                }
                            } catch (e) {
                                i = {
                                    error: e
                                };
                            } finally{
                                try {
                                    f || o || !(a = g.return) || await a.call(g);
                                } finally{
                                    if (i) throw i.error;
                                }
                            }
                            if (!p) throw new se("protocol error: missing response message", re.Unimplemented);
                            if (m > 1) throw new se("protocol error: received extra messages for client streaming method", re.Unimplemented);
                            return null === (u = null == s ? void 0 : s.onTrailer) || void 0 === u || u.call(s, d.trailer), p;
                        };
                    }(t, e, r);
                case _t.MethodKind.BiDiStreaming:
                    return function(e, t, r) {
                        return function(n, s) {
                            return er(e.stream(t, r, null == s ? void 0 : s.signal, null == s ? void 0 : s.timeoutMs, null == s ? void 0 : s.headers, n, null == s ? void 0 : s.contextValues), s);
                        };
                    }(t, e, r);
                default:
                    return null;
            }
        });
    }
    function er(e, t) {
        const r = (function() {
            return Xt(this, arguments, function*() {
                var r, n;
                const s = yield Yt(e);
                null === (r = null == t ? void 0 : t.onHeader) || void 0 === r || r.call(t, s.header), yield Yt((yield* Qt(Vt(s.message)))), null === (n = null == t ? void 0 : t.onTrailer) || void 0 === n || n.call(t, s.trailer);
            });
        })()[Symbol.asyncIterator]();
        return {
            [Symbol.asyncIterator]: ()=>({
                    next: ()=>r.next()
                })
        };
    }
    var tr = require("./module-77598.js"), rr = require("./module-73024.js");
    const nr = /https?:\/\/[^\s'")]+/g;
    function sr(e) {
        return (e instanceof Error ? e.message : String(e)).replace(nr, (e)=>{
            try {
                const t = new URL(e);
                return `${t.protocol}//${t.host}${t.pathname}`;
            } catch  {
                return "<unparseable-presigned-url>";
            }
        });
    }
    let or;
    function ir() {
        return or ??= (async ()=>{
            try {
                return (0, mt.agentStoreRpcServiceFromDedicatedGate)(await H.cursor.checkFeatureGate(vt.QT, {
                    disableExposureLog: !0
                }));
            } catch  {
                return mt.DEFAULT_AGENT_STORE_RPC_SERVICE;
            }
        })(), or;
    }
    const ar = v.join(__dirname, "node_modules", "better-sqlite3", "build", "Release", "better_sqlite3.node");
    const cr = {
        getConnectTransport: ()=>H.cursor.connectTransport,
        getCursorCreds: ()=>H.cursor.getCursorCreds(),
        getDynamicConfigValue: (e)=>H.cursor.getDynamicConfigValue(e),
        showWarningMessage: (e)=>H.window.showWarningMessage(e),
        loadSqlite: async function() {
            return function(e) {
                if (!rr.existsSync(ar)) return e;
                const t = function(t, r) {
                    return new e(t, {
                        ...r,
                        nativeBinding: r?.nativeBinding ?? ar
                    });
                };
                return Object.setPrototypeOf(t, e), t.prototype = e.prototype, t;
            }((await Promise.resolve().then(require.t.bind(require, 87550, 23))).default);
        },
        sanitizeLogMessage: sr,
        loadSyncModule: async ()=>await Promise.resolve().then(require.bind(require, "./module-76687.js")),
        getAgentStoreRpcService: ()=>ir()
    };
    class lr extends mt.AgentStoreSyncRuntimeController {
        constructor(e, t, r, n, s, o = mt.AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS, i){
            super(e, t, r, cr, n, s, o, i);
        }
    }
    const ur = "agentStoreSync.pathHashSalt";
    async function dr(e) {
        const t = e.globalState.get(ur);
        if ("string" == typeof t && t.length > 0) return t;
        const r = (0, tr.randomUUID)();
        await e.globalState.update(ur, r);
        const n = e.globalState.get(ur);
        return "string" == typeof n && n.length > 0 ? n : r;
    }
    const pr = "agent_store_principal_local_mounts", mr = "agent_store_local_user_mount", hr = "agent_store_sync_client", fr = "agent_store_citation_index_tier";
    function gr(e) {
        if (void 0 === e.storeBase) return [];
        const t = e.principalMountKeys.get("user");
        if (void 0 === t) return [];
        try {
            return [
                (0, ut.yA)((0, ut.WX)(e.storeBase, t))
            ];
        } catch (t) {
            return e.onError(t), [];
        }
    }
    const yr = [
        5e3,
        15e3,
        3e4,
        6e4
    ];
    function wr(e, t) {
        return e.length === t.length && e.every((e, r)=>e === t[r]);
    }
    function vr(e, t) {
        const r = [];
        for (const n of e)t(n) && r.push(n);
        return r;
    }
    function _r(e) {
        if (0 === e.conversationId.trim().length) return [];
        const t = [], r = new Set;
        if (void 0 !== e.selfFilesDir && e.selfFilesDir.length > 0 && t.push({
            path: e.selfFilesDir,
            kind: "self"
        }), void 0 !== e.inherited) for (const n of e.inherited)r.has(n.alias) || (r.add(n.alias), t.push({
            path: n.filesDir,
            kind: "peer",
            alias: n.alias,
            readOnly: n.readOnly
        }));
        for (const n of e.registry){
            if (r.has(n.alias)) continue;
            let e;
            switch(r.add(n.alias), n.kind){
                case "peer":
                    e = "peer";
                    break;
                case "share":
                    e = "share";
                    break;
                case "principal":
                    e = "principal";
                    break;
                default:
                    return n.kind;
            }
            t.push({
                path: n.filesDir,
                kind: e,
                alias: n.alias,
                readOnly: "share" === n.kind
            });
        }
        return t;
    }
    function br(e, t) {
        return e.ensureFilesDir(t);
    }
    function Sr(e, t, r) {
        e.requestMount(t, r);
    }
    function kr(e, t, r) {
        return {
            scope: e,
            path: t,
            rootLinkPolicy: r
        };
    }
    const xr = [
        "team",
        "user",
        "agent"
    ];
    function Er(e, t) {
        const r = function(e, t) {
            const r = e.getHarness();
            if (void 0 !== r) try {
                (0, ut._b)(t);
                const e = (0, ut.f$)((0, ut.WX)(r, t));
                return (0, ut.rs)(e), e;
            } catch  {
                return;
            }
        }(e, t);
        if (void 0 === r) return {
            kind: "unavailable"
        };
        const n = function(e, t) {
            const r = e.handoutPins, n = e.windowId;
            if (void 0 === r || void 0 === n) return "skipped";
            if (r.has(t)) return "reused";
            const s = e.getHarness();
            if (void 0 === s) return "skipped";
            const o = (0, mt.acquireStorePinSync)({
                store: s,
                mountKey: t,
                windowId: n,
                purpose: "foreground"
            });
            if ("evicting" === o.kind) return "evicting";
            if (!o.handle.acquired) {
                const r = void 0 !== o.handle.error ? `: ${String(o.handle.error)}` : "";
                e.warn?.(`agent store pin not acquired for ${t}${r}`);
            }
            return r.set(t, o.handle), "new";
        }(e, t);
        if ("evicting" === n) return {
            kind: "evicting"
        };
        try {
            rr.mkdirSync(r, {
                recursive: !0,
                mode: ut.qH
            });
            try {
                rr.chmodSync(r, ut.qH);
            } catch  {}
            return {
                kind: "ready",
                filesDir: r
            };
        } catch  {
            if ("new" === n) {
                const r = e.handoutPins?.get(t);
                e.handoutPins?.delete(t), r?.release();
            }
            return {
                kind: "unavailable"
            };
        }
    }
    function Ir(e, t) {
        const r = Er(e, t);
        return "ready" === r.kind ? r.filesDir : void 0;
    }
    async function Tr(e) {
        const t = e.handoutPins;
        if (void 0 === t) return;
        const r = [
            ...t.values()
        ];
        t.clear(), await Promise.all(r.map((e)=>e.release()));
    }
    function Cr(e, t) {
        const r = {
            scope: "agent",
            reason: t
        };
        return {
            scopes: e.scopes.filter((e)=>"agent" !== e.scope),
            unavailableScopes: [
                ...e.unavailableScopes ?? [],
                r
            ]
        };
    }
    function Pr(e, t) {
        return async (r)=>{
            let n;
            if (void 0 !== r?.syncAgentPath) try {
                n = (0, mt.normalizeRelPath)(r.syncAgentPath);
            } catch  {
                return;
            }
            if (void 0 === r || "string" != typeof r.agentId || void 0 !== r.mount && "self" !== r.mount && "peer" !== r.mount || void 0 !== r.syncAgentPath && "string" != typeof r.syncAgentPath || void 0 !== n && "peer" !== r.mount) return;
            const s = r.mount ?? "self", o = e.getHarness();
            if (void 0 === o) return i = !0 === e.isHarnessSettling?.() ? "sync-starting" : "sync-unavailable", {
                scopes: [],
                unavailableScopes: xr.map((e)=>({
                        scope: e,
                        reason: i
                    }))
            };
            var i;
            const a = e.getPrincipalMountKeys(), c = e.getController(), l = function(e, t, r) {
                return {
                    ...e,
                    scopes: e.scopes.map((e)=>{
                        const n = "agent" === e.scope ? void 0 : t.get(e.scope);
                        return void 0 === n ? e : {
                            ...e,
                            syncState: r?.getMountSyncState(n) ?? "opening"
                        };
                    })
                };
            }(function(e) {
                const t = e.agentId.trim(), { localStoreBase: r, localStoreTmpDirName: n } = e, s = (e)=>(0, ut.f$)({
                        base: r,
                        agentId: e,
                        tmpDirName: n
                    }), o = e.localPrincipalSourceIds?.user, i = e.localPrincipalSourceIds?.team;
                return {
                    scopes: [
                        ...void 0 === i ? [] : [
                            kr("team", s(i), "reject")
                        ],
                        ...void 0 === o ? [] : [
                            kr("user", s(o), "reject")
                        ],
                        ...(0, vt.v8)(t) ? [
                            kr("agent", s(t), "reject")
                        ] : []
                    ]
                };
            }({
                agentId: r.agentId,
                localStoreBase: o.base,
                localStoreTmpDirName: o.tmpDirName,
                localPrincipalSourceIds: {
                    user: a.get("user"),
                    team: a.get("team")
                }
            }), a, c);
            if (void 0 === l.scopes.find((e)=>"agent" === e.scope)) return l;
            const u = Er(e, r.agentId);
            if ("evicting" === u.kind) return Cr(l, "sync-starting");
            if ("ready" !== u.kind) return Cr(l, "mount-failed");
            let d;
            if ("peer" === s) {
                if (void 0 === c) return Cr(l, "sync-unavailable");
                if (void 0 === n) {
                    const e = await c.ensureMountedPeer({
                        peerAgentId: r.agentId,
                        isProjectStore: !0 === r.isProjectStore,
                        awaitInitialRound: !1 !== r.awaitInitialRound
                    }).catch(()=>{});
                    if (void 0 === e || "mounted" !== e.outcome && "already-present" !== e.outcome) return Cr(l, "mount-failed");
                    d = e.syncState;
                } else if ("served" !== await c.resolveCitedPath({
                    mountKey: r.agentId,
                    relPath: n,
                    indexTierEnabled: e.isCitationIndexTierEnabled(),
                    isProjectStore: !0 === r.isProjectStore,
                    ...void 0 !== t?.citedFileWait ? {
                        waitBudget: t.citedFileWait
                    } : {}
                })) return Cr(l, "mount-failed");
            } else if (void 0 !== c && "lazy" === c.mountPolicy()) if (c.hasSelfMount(r.agentId)) e.releaseLazySelfWatch?.(r.agentId);
            else {
                const t = (0, mt.admitLocalAgentStore)({
                    agentId: r.agentId,
                    policy: "lazy",
                    reason: "prompt_inventory",
                    indexPopulated: c.localStoreIndexIsPopulated(r.agentId),
                    resumeRequested: !0 === r.resume || c.hasAdmittedResume(r.agentId)
                });
                if ("mount" === t.action) {
                    const n = ()=>{
                        c.hasSelfMount(r.agentId) || c.hasNonSelfMount(r.agentId) ? e.releaseLazySelfWatch?.(r.agentId) : e.noteLazySelfStore?.(r.agentId, u.filesDir);
                    };
                    Promise.resolve(c.openAdmittedLazySelf(r.agentId, t.reason)).then(n, n);
                } else e.noteLazySelfStore?.(r.agentId, u.filesDir);
            }
            else c?.ensureMounted(r.agentId);
            return {
                ...l,
                scopes: l.scopes.map((e)=>"agent" === e.scope ? {
                        ...e,
                        path: u.filesDir,
                        ...void 0 === d ? {} : {
                            syncState: d
                        }
                    } : e)
            };
        };
    }
    const Ar = {
        outcome: "unavailable",
        pushed: 0,
        pulled: 0
    };
    const Rr = "user", Mr = "team", Jr = 5e3, Or = 6e4, Br = "Agent store sync is currently disabled; it resumes automatically when re-enabled.";
    let Dr, qr, Nr, Fr, Ur, Lr = mt.NEVER_STARTED_HARNESS_PHASE, $r = 0, jr = [];
    const Gr = new Map;
    let zr, Wr, Hr, Kr, Vr, Yr, Qr, Xr, Zr, en, tn, rn, nn = !1, sn = 0, on = [], an = !0, cn = mt.DEFAULT_HARNESS_RECOVERY_CONFIG, ln = Promise.resolve();
    function un(e) {
        Promise.resolve(ln).then(()=>{
            (0, mt.isHarnessInactive)(Lr) || e();
        });
    }
    const dn = new Map, pn = new Map;
    const mn = new class {
        constructor(e){
            this.current = e;
        }
        ready() {
            const e = this.current();
            if (e.length > 0) return Promise.resolve(e);
            if (void 0 === this.pending) {
                let e;
                const t = new Promise((t)=>{
                    e = t;
                });
                this.pending = {
                    promise: t,
                    resolve: e
                };
            }
            return this.pending.promise;
        }
        settle(e) {
            const t = this.pending;
            this.pending = void 0, t?.resolve([
                e
            ]);
        }
    }(function() {
        if (void 0 === Dr) return [];
        const e = yn.mountKeys.get("user");
        if (void 0 === e) return [];
        try {
            const t = (0, ut.f$)((0, ut.WX)(Dr, e));
            return (0, ut.rs)(t), [
                t
            ];
        } catch  {
            return [];
        }
    });
    function hn() {
        return mn.ready();
    }
    function fn() {
        return [
            ...new Set([
                ...[
                    ...dn.values()
                ].filter((e)=>"peer" === e.kind).map((e)=>e.filesDir),
                ...pn.values()
            ])
        ];
    }
    function gn(e) {
        Yr?.appendLine(`[cursor-agent-exec] ${e}`);
    }
    const yn = new class {
        constructor(e){
            this.deps = e, this.mountKeysByAlias = new Map, this.listeners = new Set, this.targetDirsListeners = new Set, this.enabled = !1, this.enabledResolved = !1, this.refreshGeneration = 0, this.retryPending = !1, this.retryAttempts = 0, this.published = [], this.publishedTargetDirs = [];
        }
        get mountKeys() {
            return this.mountKeysByAlias;
        }
        get() {
            return (e = {
                enabled: this.enabled,
                storeBase: this.deps.getStoreBase(),
                principalMountKeys: this.mountKeysByAlias,
                onError: (e)=>{
                    this.deps.log(`Agent store skills root unavailable: ${sr(e)}`);
                }
            }).enabled ? gr(e) : [];
            var e;
        }
        targetDirs() {
            return gr({
                storeBase: this.deps.getStoreBase(),
                principalMountKeys: this.mountKeysByAlias,
                onError: (e)=>{
                    this.deps.log(`Agent store skills target unavailable: ${sr(e)}`);
                }
            });
        }
        onDidChange(e) {
            return this.listeners.add(e), ()=>{
                this.listeners.delete(e);
            };
        }
        onDidChangeTargetDirs(e) {
            return this.targetDirsListeners.add(e), ()=>{
                this.targetDirsListeners.delete(e);
            };
        }
        setMountKey(e, t) {
            this.mountKeysByAlias.set(e, t), this.publishIfChanged();
        }
        deleteMountKey(e) {
            this.mountKeysByAlias.delete(e), this.publishIfChanged();
        }
        clearMountKeys() {
            this.mountKeysByAlias.clear(), this.publishIfChanged();
        }
        deleteMountKeyByValue(e) {
            for (const [t, r] of this.mountKeysByAlias)if (r === e) return this.deleteMountKey(t), t;
        }
        restore(e) {
            this.enabled = e.enabled, this.enabledResolved = !1, this.mountKeysByAlias.clear();
            for (const [t, r] of e.mountKeys)this.mountKeysByAlias.set(t, r);
            this.publishTargetDirsIfChanged(), this.publishRootsIfChanged();
        }
        forgetResolution() {
            this.refreshGeneration += 1, this.enabledResolved = !1, this.enabled = !1, this.publishRootsIfChanged();
        }
        async refreshGate() {
            const e = ++this.refreshGeneration;
            let t;
            try {
                t = await this.deps.resolveEnabled();
            } catch (e) {
                t = void 0, this.deps.log(`skills sync setting resolve failed: ${sr(e)}`);
            }
            e === this.refreshGeneration && (void 0 !== t ? (this.retryAttempts = 0, this.enabled = t, this.enabledResolved = !0, this.publishIfChanged()) : this.scheduleIndeterminateRetry());
        }
        scheduleIndeterminateRetry() {
            if (this.retryPending) return;
            if (void 0 === this.deps.getStoreBase()) return void (this.retryAttempts = 0);
            const e = yr[Math.min(this.retryAttempts, yr.length - 1)];
            this.retryAttempts += 1, this.retryPending = !0, this.deps.scheduleRetry(()=>(this.retryPending = !1, this.refreshGate()), e);
        }
        publishIfChanged() {
            this.publishTargetDirsIfChanged(), this.publishRootsIfChanged(), this.enabledResolved && this.deps.persist?.({
                enabled: this.enabled,
                mountKeys: [
                    ...this.mountKeysByAlias
                ]
            });
        }
        publishTargetDirsIfChanged() {
            const e = this.targetDirs();
            if (!wr(e, this.publishedTargetDirs)) {
                this.publishedTargetDirs = e;
                for (const e of this.targetDirsListeners)try {
                    e();
                } catch (e) {
                    this.deps.log(`Agent store skills target listener failed: ${sr(e)}`);
                }
            }
        }
        publishRootsIfChanged() {
            const e = this.get();
            if (!wr(e, this.published)) {
                this.published = e;
                for (const t of e)this.ensureSkillsDirExists(t);
                this.deps.log(`Agent store skills roots: count=${e.length} enabled=${this.enabled ? "on" : "off"} user=${this.mountKeysByAlias.get("user") ?? "<none>"}`);
                for (const e of this.listeners)try {
                    e();
                } catch (e) {
                    this.deps.log(`Agent store skills root listener failed: ${sr(e)}`);
                }
            }
        }
        ensureSkillsDirExists(e) {
            try {
                this.deps.ensureDirectory(e);
            } catch (e) {
                this.deps.log(`Agent store skills dir could not be created: ${sr(e)}`);
            }
        }
    }({
        resolveEnabled: function() {
            return async function(e) {
                try {
                    return "object" == typeof (t = await e.getEffectiveSettings()) && null !== t && !0 === t.enabled;
                } catch (t) {
                    return void e.log(`skills sync setting read failed: ${sr(t)}`);
                }
                var t;
            }({
                getEffectiveSettings: ()=>Zt(Gt, H.cursor.connectTransport).getEffectiveUserAgentStoreSkillsSettings({}),
                log: gn
            });
        },
        getStoreBase: ()=>Dr,
        ensureDirectory: ut.Ew,
        scheduleRetry: function(e, t) {
            setTimeout(()=>{
                e();
            }, t).unref();
        },
        log: gn,
        persist: (e)=>{
            void 0 !== tn && void 0 !== rn && (function(e, t, r, n = Date.now()) {
                if (void 0 === t.authId) return Promise.resolve();
                const s = {
                    authId: t.authId,
                    teamId: t.teamId ?? null,
                    enabled: r.enabled,
                    mountKeys: r.mountKeys,
                    writtenAt: n
                };
                return gt = gt.catch(()=>{}).then(()=>e.update(ht, s)), gt;
            })(tn, rn, e).then(void 0, (e)=>{
                gn(`Agent store skills roots cache write failed: ${sr(e)}`);
            });
        }
    });
    let wn, vn, _n = !1, bn = !0, Sn = 0, kn = 0, xn = Promise.resolve();
    const En = new Map;
    function In(e, t, r) {
        dn.set(t, r), "user" === r.alias && mn.settle(r.filesDir), e.appendLine(`[cursor-agent-exec] mount alias add kind=${r.kind} mountKey=${t} alias=${r.alias}`);
    }
    function Tn() {
        return void 0 !== Dr && void 0 !== qr;
    }
    function Cn() {
        void 0 !== Wr && (clearTimeout(Wr), Wr = void 0);
        const e = Hr;
        Hr = void 0, e?.();
    }
    function Pn(e, t, r) {
        const n = Lr;
        "stopping" === t.kind && Cn(), "starting" === t.kind ? (an = !1, "down" === n.kind && "server_disabled" === n.reason && (Zr = n.attempts)) : "up" === t.kind ? an = 0 === on.length : "down" === t.kind && "server_disabled" !== t.reason && (Zr = void 0), Lr = t, e.appendLine(`[cursor-agent-exec] agent store harness ${(0, mt.formatHarnessTransition)({
            from: n,
            to: t,
            reason: r
        })}`), Rn(e);
    }
    function An() {
        void 0 !== en && (clearTimeout(en), en = void 0);
    }
    function Rn(e) {
        An();
        const t = (0, mt.harnessProbeDelayMs)({
            phase: Lr,
            now: Date.now(),
            config: cn
        });
        if (void 0 === t || t <= 0 || void 0 === Qr) return;
        en = setTimeout(()=>{
            en = void 0, Mn(e);
        }, Math.min(t, 2147483647));
    }
    async function Mn(e) {
        "down" === Lr.kind && (Date.now() < Lr.nextProbeAtMs ? Rn(e) : void 0 !== Qr && await ps(Qr, e, "probe_timer"));
    }
    function Jn(e) {
        "down" === Lr.kind && ("touch" === e && (0, mt.harnessTouchIsCoolingDown)({
            phase: Lr,
            now: Date.now(),
            config: cn
        }) || void 0 !== Qr && void 0 !== Xr && ps(Qr, Xr, e));
    }
    function On() {
        const e = jr;
        jr = [];
        for (const t of e)t.dispose();
    }
    function Bn(e) {
        return "starting" !== Lr.kind || $r !== e;
    }
    function Dn() {
        return "stopping" === Lr.kind || "down" === Lr.kind && "extension_deactivate" === Lr.reason;
    }
    function qn() {
        H.window.showInformationMessage(Br);
    }
    async function Nn(e) {
        try {
            const e = await H.cursor.getDynamicConfigValue(mt.AGENT_STORE_SYNC_CLIENT_CONFIG_NAME);
            return (0, mt.resolveAgentStoreSyncClientConfig)(e ?? void 0, "ide");
        } catch (t) {
            return e.appendLine(`[cursor-agent-exec] Agent store sync config read failed, using defaults: ${sr(t)}`), (0, mt.agentStoreSyncClientCodeDefaults)("ide");
        }
    }
    async function Fn(e) {
        const t = qr, r = yn.mountKeys.get("user");
        return void 0 === t || void 0 === r ? "absent" : await t.forceSyncPathsForConflictNotices({
            mountKey: r,
            absPaths: e
        });
    }
    function Un(e) {
        const t = qr, r = [
            ...yn.mountKeys
        ];
        yn.clearMountKeys();
        for (const [, e] of r)dn.delete(e);
        const n = xn.then(async ()=>{
            await Promise.allSettled(r.map(async ([r, n])=>{
                void 0 !== t && await t.unmountPrincipal(n), e.appendLine(`[cursor-agent-exec] principal mount removed alias=${r}`);
            }));
        });
        return xn = n.catch(()=>{}), n;
    }
    function Ln(e) {
        Sn += 1, bn = !0, function() {
            for (const e of yn.mountKeys.values())dn.delete(e);
        }(), void 0 !== vn && (clearTimeout(vn), vn = void 0), kn = 0;
        const t = Un(e);
        un(()=>{
            t.finally(()=>{
                Hn(e);
            });
        });
    }
    function $n(e, t) {
        var r, n;
        (r = t, n = rn, r?.authId !== n?.authId || r?.teamId !== n?.teamId) && (rn = t, yn.forgetResolution(), Ln(e), jn(t), un(()=>{
            yn.refreshGate();
        }));
    }
    function jn(e) {
        if (void 0 === tn || void 0 === Dr) return;
        const t = wt(tn, e);
        void 0 !== t && function(e, t) {
            const r = new Map(t.mountKeys).get("user");
            if (void 0 === r) return !0;
            try {
                return !0 === rr.statSync((0, ut.yA)((0, ut.WX)(e, r)), {
                    throwIfNoEntry: !1
                })?.isDirectory();
            } catch  {
                return !1;
            }
        }(Dr, t) && yn.restore(t);
    }
    function Gn(e, t) {
        const r = new Set([
            Rr,
            Mr
        ]);
        for (const [n, s] of dn)if (n !== t) {
            if (s.alias === e) {
                const t = Xn(`${e}_mounted`, r);
                dn.set(n, {
                    ...s,
                    alias: t
                });
                continue;
            }
            r.add(s.alias);
        }
    }
    async function zn(e) {
        const t = Sn;
        if (!Tn() || void 0 === Dr || void 0 === qr) return !1;
        if (await xn, t !== Sn) return !1;
        const r = await async function(e) {
            try {
                return await H.cursor.checkFeatureGate(pr) ? [
                    "user",
                    "team"
                ] : await H.cursor.checkFeatureGate(mr) ? [
                    "user"
                ] : [];
            } catch (t) {
                return e.appendLine(`[cursor-agent-exec] Principal agent-store mount gate check failed, defaulting to disabled: ${String(t)}`), [];
            }
        }(e);
        if (0 === r.length) return t !== Sn || await Un(e), !1;
        const n = await H.cursor.getUserId();
        if (t !== Sn) return !1;
        if (void 0 === n) return void 0 === H.cursor.getCursorAuthToken() || bn ? await Un(e) : e.appendLine("[cursor-agent-exec] principal mount refresh kept existing mounts because user lookup was unavailable"), void 0 !== H.cursor.getCursorAuthToken();
        const s = rn?.teamId ?? H.cursor.getTeamId(), o = new Map((function(e) {
            const t = [];
            return e.mountAliases.includes("user") && t.push({
                alias: "user",
                sourceId: (0, vt._N)({
                    userId: e.userId,
                    teamId: e.teamId
                })
            }), void 0 !== e.teamId && e.mountAliases.includes("team") && t.push({
                alias: "team",
                sourceId: (0, vt.Ko)(e.teamId)
            }), t;
        })({
            userId: n,
            teamId: s,
            mountAliases: r
        }).map((e)=>[
                e.alias,
                e.sourceId
            ])), i = [
            ...yn.mountKeys
        ].filter(([e, t])=>o.get(e) !== t);
        for (const [e, t] of i)yn.deleteMountKey(e), dn.delete(t);
        if (await Promise.allSettled(i.map(async ([, e])=>{
            await qr?.unmountPrincipal(e);
        })), t !== Sn) return !1;
        bn = !1;
        let a = !1;
        for (const [r, n] of o){
            const { outcome: s, reason: o } = await qr.ensureMountedPrincipal({
                sourceId: n,
                alias: r
            });
            if (t !== Sn) return await qr.unmountPrincipal(n), !1;
            "mounted" === s || "already-present" === s ? (Gn(r, n), yn.setMountKey(r, n), In(e, n, {
                alias: r,
                filesDir: (0, ut.f$)((0, ut.WX)(Dr, n)),
                kind: "principal"
            })) : (e.appendLine(`[cursor-agent-exec] principal mount skipped alias=${r} outcome=${s} reason=${o}`), a = !0);
        }
        return a;
    }
    function Wn(e) {
        if (void 0 !== vn || (0, mt.isHarnessInactive)(Lr)) return;
        kn += 1;
        const t = Math.min(Or, Jr * 2 ** Math.min(kn - 1, 4));
        vn = setTimeout(()=>{
            vn = void 0, Hn(e);
        }, t);
    }
    function Hn(e) {
        (0, mt.isHarnessInactive)(Lr) || (_n = !0, void 0 === wn && (wn = (async ()=>{
            for(; _n;){
                _n = !1;
                let t = !1;
                try {
                    t = await zn(e);
                } catch (r) {
                    e.appendLine(`[cursor-agent-exec] principal mount refresh failed: ${sr(r)}`), bn && await Un(e), t = !0;
                }
                t ? Wn(e) : (kn = 0, void 0 !== vn && (clearTimeout(vn), vn = void 0));
            }
        })().finally(()=>{
            wn = void 0, _n && Hn(e);
        })));
    }
    async function Kn(e) {
        return async function(e) {
            const t = await Zn(e);
            return "enabled" === t;
        }(e);
    }
    async function Vn(e) {
        try {
            return await H.cursor.checkFeatureGate(hr);
        } catch (t) {
            return e.appendLine(`[cursor-agent-exec] Agent store subagent inherit gate check failed, defaulting to disabled: ${String(t)}`), !1;
        }
    }
    async function Yn(e, t) {
        if (Jn("touch"), !await Vn(e) || !Tn() || void 0 === Dr) return {
            applied: !1,
            inheritedSourceIds: []
        };
        const r = t.parentConversationId.trim(), n = t.childConversationId.trim();
        if (0 === r.length || 0 === n.length || !(0, ut.v8)(r)) return {
            applied: !1,
            inheritedSourceIds: []
        };
        const s = new Map;
        qr?.ensureMounted(r);
        const o = (0, ut.f$)((0, ut.WX)(Dr, r));
        try {
            (0, ut.rs)(o), s.set(vt._u, {
                alias: vt._u,
                filesDir: o,
                readOnly: !1
            });
        } catch (t) {
            e.appendLine(`[cursor-agent-exec] subagent inherit skip parent store: ${sr(t)}`);
        }
        if (0 === s.size) return {
            applied: !1,
            inheritedSourceIds: []
        };
        const i = !1 !== t.registerLocalShellMounts;
        return i && En.set(n, s), qr?.noteInheritedConflictNoticeMounts(n, [
            r
        ]), e.appendLine(`[cursor-agent-exec] subagent inherit applied child=${n} parent=${r} mounts=${s.size} registerLocalShellMounts=${i}`), {
            applied: !0,
            inheritedSourceIds: [
                r
            ]
        };
    }
    function Qn(e, t) {
        const r = t.childConversationId.trim();
        if (0 === r.length) return;
        const n = En.delete(r);
        qr?.clearInheritedConflictNoticeMounts(r), n && e.appendLine(`[cursor-agent-exec] subagent inherit cleared child=${r}`);
    }
    function Xn(e, t) {
        return (0, mt.allocateUniqueAgentStoreMountAlias)({
            preferred: e,
            usedAliases: t
        });
    }
    async function Zn(e) {
        try {
            return await H.cursor.checkFeatureGate(hr) ? "enabled" : void 0 === await H.cursor.getAuthId() ? "unknown" : "disabled";
        } catch (t) {
            return e.appendLine(`[cursor-agent-exec] Agent store sync gate check failed: ${String(t)}`), "unknown";
        }
    }
    async function es(e, t) {
        if (!await Kn(e) || !Tn()) return t.silent || qn(), {
            mounted: !1,
            reason: "disabled"
        };
        if (!function(e) {
            if ("object" != typeof e || null === e || Array.isArray(e)) return !1;
            const t = e;
            return !(void 0 !== t.input && "string" != typeof t.input || void 0 !== t.storeId && "string" != typeof t.storeId || void 0 !== t.shareId && "string" != typeof t.shareId || void 0 !== t.alias && "string" != typeof t.alias || void 0 !== t.silent && "boolean" != typeof t.silent);
        }(t)) return {
            mounted: !1,
            reason: "invalid-mount"
        };
        const r = (0, ut.j6)(t);
        if (void 0 === r) return {
            mounted: !1,
            reason: "invalid-mount"
        };
        const n = "share" === r.kind ? r.shareId : r.agentId, s = dn.get(n);
        if (void 0 !== s) return {
            mounted: !0,
            kind: s.kind,
            mountKey: n,
            storeId: "peer" === r.kind ? r.agentId : void 0,
            shareId: "share" === r.kind ? r.shareId : void 0,
            alias: s.alias,
            filesDir: s.filesDir,
            reason: "already-mounted"
        };
        const o = t.alias?.trim(), i = (a = o && (0, mt.isValidAgentStoreMountAlias)(o) ? o : (0, mt.defaultAgentStoreMountAlias)(r.kind, n), (0, mt.allocateUniqueAgentStoreMountAlias)({
            preferred: a,
            usedAliases: new Set([
                Rr,
                Mr,
                ...[
                    ...dn.values()
                ].map((e)=>e.alias)
            ])
        }));
        var a;
        if (void 0 === qr || void 0 === Dr) return t.silent || qn(), {
            mounted: !1,
            kind: r.kind,
            mountKey: n,
            alias: i,
            reason: "disabled"
        };
        const { outcome: c } = "share" === r.kind ? await qr.ensureMountedShare({
            shareId: r.shareId,
            alias: i
        }) : await qr.ensureMountedPeer({
            peerAgentId: r.agentId,
            alias: i
        });
        if ("mounted" !== c && "already-present" !== c) return {
            mounted: !1,
            kind: r.kind,
            mountKey: n,
            storeId: "peer" === r.kind ? r.agentId : void 0,
            shareId: "share" === r.kind ? r.shareId : void 0,
            alias: i,
            reason: "mount-not-started"
        };
        const l = (0, ut.f$)((0, ut.WX)(Dr, n));
        return In(e, n, {
            alias: i,
            filesDir: l,
            kind: r.kind
        }), t.silent || H.window.showInformationMessage(`Mounted ${r.kind} ${n} as ${i}`), {
            mounted: !0,
            kind: r.kind,
            mountKey: n,
            storeId: "peer" === r.kind ? r.agentId : void 0,
            shareId: "share" === r.kind ? r.shareId : void 0,
            alias: i,
            filesDir: l
        };
    }
    let ts = `${process.pid}-${(0, tr.randomUUID)()}`;
    const rs = new Map, ns = {
        getHarness: ()=>Dr,
        getController: ()=>qr,
        getPrincipalMountKeys: ()=>yn.mountKeys,
        isCitationIndexTierEnabled: ()=>nn,
        isHarnessSettling: function() {
            return !Dn() && (void 0 !== zr || !(0, mt.isHarnessInactive)(Lr) && sn > 0);
        },
        get windowId () {
            return ts;
        },
        handoutPins: rs,
        warn: (e)=>gn(e),
        noteLazySelfStore: (e, t)=>{
            qr?.noteDeferredLocalStore(e, "prompt_inventory"), ys(e, t);
        },
        releaseLazySelfWatch: (e)=>{
            gs(e);
        }
    }, ss = Pr(ns), os = function(e) {
        const t = Pr(e);
        return async (r)=>{
            if (void 0 === r || "string" != typeof r.agentId || "string" != typeof r.relPath) return {
                outcome: "invalid"
            };
            let n;
            try {
                n = (0, mt.normalizeRelPath)(r.relPath);
            } catch  {
                return {
                    outcome: "invalid"
                };
            }
            const s = await t({
                agentId: r.agentId,
                mount: "self"
            }), o = s?.scopes.find((e)=>"agent" === e.scope)?.path, i = e.getController();
            if (void 0 === o || void 0 === i) return {
                outcome: "absent"
            };
            if ("lazy" === i.mountPolicy?.()) {
                if ("absent" === await i.prepareExplicitSelfSync(r.agentId, "explicit_sync", {
                    openEmpty: !0
                })) return {
                    outcome: "absent"
                };
            } else {
                const { outcome: e } = await i.ensureMountedSelfAwaited(r.agentId);
                if ("mounted" !== e && "already-present" !== e) return {
                    outcome: "absent"
                };
            }
            return {
                outcome: await i.forceSyncPathForConflictNotices({
                    mountKey: r.agentId,
                    absPath: v.join(o, n)
                })
            };
        };
    }(ns), is = (as = ns, async (e)=>{
        if (void 0 === e || "string" != typeof e.agentId || !0 !== e.isProjectStore || !Array.isArray(e.relPaths) || 0 === e.relPaths.length || e.relPaths.length > 8) return {
            outcome: "invalid",
            pushed: 0,
            pulled: 0
        };
        const t = [];
        for (const r of e.relPaths){
            if ("string" != typeof r) return {
                outcome: "invalid",
                pushed: 0,
                pulled: 0
            };
            try {
                t.push((0, mt.normalizeRelPath)(r));
            } catch  {
                return {
                    outcome: "invalid",
                    pushed: 0,
                    pulled: 0
                };
            }
        }
        if (void 0 === as.getHarness()) return Ar;
        if (void 0 === Ir(as, e.agentId)) return Ar;
        const r = as.getController();
        if (void 0 === r) return Ar;
        let n;
        try {
            n = await r.refreshPeerPaths({
                peerAgentId: e.agentId,
                relPaths: t,
                isProjectStore: !0
            });
        } catch  {
            return {
                outcome: "error",
                pushed: 0,
                pulled: 0
            };
        }
        switch(n.kind){
            case "ran":
                return {
                    outcome: n.errors > 0 ? "error" : "refreshed",
                    pushed: n.pushed,
                    pulled: n.pulled
                };
            case "holder-owns-fetch":
                return {
                    outcome: "passive",
                    pushed: 0,
                    pulled: 0
                };
            case "throttled":
                return {
                    outcome: "throttled",
                    pushed: 0,
                    pulled: 0
                };
            case "unavailable":
                return Ar;
            case "failed":
                return {
                    outcome: "error",
                    pushed: 0,
                    pulled: 0
                };
        }
    });
    var as;
    async function cs(e, u, h, f) {
        Qr = e, Xr = u, void 0 !== f?.whenProviderRegistered && (ln = f.whenProviderRegistered), tn = e.globalState, e.subscriptions.push(H.commands.registerCommand(t, (e)=>void 0 === e ? Promise.resolve({
                mounted: !1,
                reason: "invalid-mount"
            }) : es(u, e)), H.commands.registerCommand(r, (e)=>(function(e) {
                if (void 0 === Dr) return [];
                const t = new Set([
                    ...dn.values()
                ].map((e)=>e.alias)), r = [], n = new Set;
                for (const s of e?.storeIds ?? []){
                    const e = s.trim();
                    if (!(0, ut.Y6)(e) && !(0, ut.v8)(e) || n.has(e)) continue;
                    n.add(e);
                    const o = dn.get(e), i = o?.alias ?? Xn((0, mt.defaultAgentStoreMountAlias)("peer", e), t), a = o?.filesDir ?? (0, ut.f$)((0, ut.WX)(Dr, e));
                    r.push({
                        kind: "mine",
                        storeId: e,
                        alias: i,
                        filesDir: a
                    });
                }
                const s = new Set;
                for (const n of e?.shareIds ?? []){
                    const e = n.trim();
                    if (!(0, ut.A8)(e) || s.has(e)) continue;
                    s.add(e);
                    const o = dn.get(e), i = o?.alias ?? Xn((0, mt.defaultAgentStoreMountAlias)("share", e), t), a = o?.filesDir ?? (0, ut.f$)((0, ut.WX)(Dr, e));
                    r.push({
                        kind: "shared",
                        shareId: e,
                        alias: i,
                        filesDir: a
                    });
                }
                return r;
            })(e)), H.commands.registerCommand(a, ()=>yn.get()), H.commands.registerCommand(c, ()=>yn.targetDirs()), H.commands.registerCommand(l, ()=>yn.refreshGate()), H.commands.registerCommand(n, async (e)=>{
            Jn("touch");
            const t = await ss(e);
            if ("peer" === e?.mount) {
                const r = t?.scopes.find((e)=>"agent" === e.scope)?.path;
                void 0 === r ? pn.delete(e.agentId) : pn.set(e.agentId, r);
            }
            return t;
        }), H.commands.registerCommand(s, (e)=>os(e)), H.commands.registerCommand(o, (e)=>is(e)), H.commands.registerCommand(i, (e)=>void 0 === e || 0 === e.conversationId.trim().length ? {
                stores: []
            } : function(e, t) {
                if (!Dr) return {
                    stores: []
                };
                const r = e.trim();
                try {
                    (0, ut._b)(r);
                } catch  {
                    return {
                        stores: []
                    };
                }
                const n = (e, t)=>{
                    try {
                        return (0, ut.rs)(e), !0;
                    } catch (e) {
                        return Yr?.appendLine(`[cursor-agent-exec] omitting ${t} from prompt inventory: ${sr(e)}`), !1;
                    }
                };
                let s = ws(r, "prompt_inventory", !0 === t?.resume);
                void 0 === s || n(s, `self mount ${r}`) || (s = void 0);
                const o = vr(En.get(r)?.values() ?? [], (e)=>n(e.filesDir, `inherited mount alias ${e.alias}`));
                return {
                    stores: _r({
                        conversationId: r,
                        selfFilesDir: s,
                        registry: vr(dn.values(), (e)=>n(e.filesDir, `mount alias ${e.alias}`)),
                        inherited: o
                    })
                };
            }(e.conversationId, {
                resume: !0 === e.resume
            })), H.commands.registerCommand(d, (e)=>Yn(u, e)), H.commands.registerCommand(p, (e)=>Qn(u, e)), H.commands.registerCommand(m, (e)=>(async function(e, t) {
                if (!await Vn(e) || !Tn()) return;
                const r = new Set;
                for (const n of t.agentIds){
                    const t = n.trim();
                    if (0 === t.length || r.has(t) || !(0, ut.v8)(t)) continue;
                    r.add(t);
                    const s = await qr?.forceSyncMountedIfPresent(t);
                    if ("synced" === s?.kind) {
                        const { summary: t } = s;
                        e.appendLine(`[cursor-agent-exec] subagent-pre-cloud-sync mounted done: pushed=${t.filesPushed} pulled=${t.filesPulled} skipped=${t.filesSkipped} refusals=${t.refusals} errors=${t.errors.length} (${t.durationMs}ms)`);
                        for (const r of t.errors)e.appendLine(`[cursor-agent-exec]   error ${r.code} on ${r.relPath ?? "<unknown>"}: ${sr(r.message)}`);
                        continue;
                    }
                    "mounted-no-summary" !== s?.kind ? e.appendLine(`[cursor-agent-exec] subagent-pre-cloud-sync skipped unmounted store ${t}`) : e.appendLine(`[cursor-agent-exec] subagent-pre-cloud-sync mounted failed without summary for ${t}`);
                }
            })(u, e)));
        const g = {
            applySubagentStoreMounts: async (e)=>{
                try {
                    await Yn(u, {
                        parentConversationId: e.parentStoreId,
                        childConversationId: e.childStoreId
                    });
                } catch (e) {
                    u.appendLine(`[cursor-agent-exec] local subagent store mount apply failed: ${sr(e)}`);
                }
            },
            clearSubagentStoreMounts: async (e)=>{
                try {
                    Qn(u, {
                        childConversationId: e.childStoreId
                    });
                } catch (e) {
                    u.appendLine(`[cursor-agent-exec] local subagent store mount clear failed: ${sr(e)}`);
                }
            }
        };
        var y;
        y = g, pt().add(y), h.push(async ()=>{
            !function(e) {
                pt().delete(e);
            }(g), await hs(u, {
                reason: "extension_deactivate"
            }), An(), Qr = void 0, Xr = void 0;
        }), "down" === Lr.kind && "extension_deactivate" === Lr.reason || (e.subscriptions.push(H.cursor.onDidChangeGates((t)=>{
            var r;
            (void 0 === (r = t.changedGates) || r.includes(hr)) && ps(e, u), function(e) {
                return void 0 === e || e.includes(fr);
            }(t.changedGates) && ls(u);
        })), await ls(u), await ps(e, u));
    }
    async function ls(e) {
        try {
            nn = await H.cursor.checkFeatureGate(fr);
        } catch (t) {
            nn = !1, e.appendLine(`[cursor-agent-exec] Agent store citation index tier gate check failed, defaulting to disabled: ${String(t)}`);
        }
    }
    const us = {
        enabled: "Agent store harness enabled by agent_store_sync_client",
        disabled: "Agent store harness disabled by agent_store_sync_client",
        unknown: "Agent store sync gate unknown; leaving the harness as it is"
    };
    function ds(e, t) {
        Vr !== t && (Vr = t, e.appendLine(`[cursor-agent-exec] ${us[t]}`));
    }
    async function ps(e, t, r = "gate_change") {
        if ("starting" === Lr.kind && void 0 !== zr) {
            if (await zr, !(0, mt.shouldReconcileAfterParkedHarnessStart)({
                coreReady: Tn(),
                phase: Lr
            })) return;
            return ps(e, t, r);
        }
        if ("stopping" === Lr.kind && void 0 !== Kr) return await Kr, ps(e, t, r);
        if ("starting" === Lr.kind || "stopping" === Lr.kind) return;
        let n;
        sn++;
        try {
            n = await Zn(t);
        } finally{
            sn--;
        }
        const s = Vr;
        if (ds(t, n), "disabled" === n && "down" === Lr.kind && void 0 !== Wr && (Cn(), $r += 1), void 0 !== zr && (await zr, !(0, mt.shouldReconcileAfterParkedHarnessStart)({
            coreReady: Tn(),
            phase: Lr,
            gateState: n
        }))) return;
        cn = (0, mt.harnessRecoveryConfigFromClient)(await Nn(t));
        switch((0, mt.planHarnessAction)({
            phase: Lr,
            gateState: n,
            trigger: r,
            now: Date.now(),
            config: cn,
            previousGateState: s
        })){
            case "start":
                return void await async function(e, t, r = "gate_change", n) {
                    if (void 0 !== zr) {
                        if (await zr, !(0, mt.shouldReconcileAfterParkedHarnessStart)({
                            coreReady: Tn(),
                            phase: Lr
                        })) return;
                        return ps(e, t, r);
                    }
                    if (Tn() || Dn()) return;
                    const s = async function(e, t, r, n) {
                        const s = Lr, o = $r;
                        "down" === s.kind && "gate_change" !== r && t.appendLine(`[cursor-agent-exec] agent store harness probe attempt=${s.attempts + 1} (${r})`);
                        const i = "gate_change" === r ? (0, mt.harnessRecoveryStartDelayMs)({
                            fromPhase: s,
                            jitterMs: cn.startJitterMs
                        }) : 0;
                        if (i > 0) {
                            if (await function(e) {
                                return new Promise((t)=>{
                                    Hr = t, Wr = setTimeout(()=>{
                                        Wr = void 0, Hr = void 0, t();
                                    }, e);
                                });
                            }(i), Tn() || Dn()) return;
                            if ($r !== o) return void queueMicrotask(()=>{
                                void 0 !== Qr && ("down" !== Lr.kind || "server_disabled" !== Lr.reason || hs(t, {
                                    reason: "gate_off"
                                }));
                            });
                            cn = (0, mt.harnessRecoveryConfigFromClient)(await Nn(t));
                            const e = Date.now(), a = (0, mt.settleHarnessTriggerAfterJitter)({
                                trigger: r,
                                phase: Lr,
                                now: e,
                                config: cn
                            }), c = await Zn(t);
                            ds(t, c);
                            const l = (0, mt.planHarnessAction)({
                                phase: Lr,
                                gateState: c,
                                trigger: a,
                                now: e,
                                config: cn,
                                previousGateState: n
                            });
                            if (!(0, mt.shouldContinueHarnessStartAfterJitter)({
                                action: l,
                                gateState: c,
                                trigger: a,
                                policy: cn.policy,
                                phase: Lr,
                                fromPhase: s
                            })) return void queueMicrotask(()=>{
                                void 0 !== Qr && ("stand-down" !== l ? ps(Qr, t, a) : hs(t, {
                                    reason: "gate_off"
                                }));
                            });
                        }
                        if (Dn() || $r !== o) return;
                        $r += 1;
                        const a = $r;
                        Pn(t, {
                            kind: "starting"
                        }, (0, mt.harnessStartTransitionReason)(s)), bn = !0, kn = 0, Sn += 1;
                        try {
                            const r = Promise.all([
                                Promise.resolve(H.cursor.getAuthId()).catch(()=>{}),
                                Promise.resolve(H.cursor.getActiveTeamId()).catch(()=>{})
                            ]).then(([e, t])=>({
                                    authId: e,
                                    teamId: t
                                })), n = (0, ut.v5)({
                                urlProtocol: H.env.uriScheme
                            });
                            if (await async function({ base: e, tmpDirName: t }) {
                                const r = v.join(e, t);
                                await rr.promises.mkdir(r, {
                                    recursive: !0,
                                    mode: ut.qH
                                });
                                try {
                                    await rr.promises.chmod(r, ut.qH);
                                } catch  {}
                            }({
                                base: n.base,
                                tmpDirName: n.tmpDirName
                            }), Bn(a)) return;
                            const o = await async function(e) {
                                return (0, mt.createAgentStoreSyncMetrics)({
                                    sink: {
                                        increment (e, t, r) {
                                            H.cursor.metricsIncrement({
                                                stat: e,
                                                value: t,
                                                tags: {
                                                    ...r
                                                }
                                            });
                                        },
                                        distribution (e, t, r) {
                                            H.cursor.metricsDistribution({
                                                stat: e,
                                                value: t,
                                                tags: {
                                                    ...r
                                                }
                                            });
                                        },
                                        gauge (e, t, r) {
                                            H.cursor.metricsGauge({
                                                stat: e,
                                                value: t,
                                                tags: {
                                                    ...r
                                                }
                                            });
                                        }
                                    },
                                    surface: "ide",
                                    extraTags: {
                                        os: process.platform
                                    },
                                    pathHashSalt: await dr(e),
                                    service: await ir(),
                                    breadcrumbs: {
                                        addBreadcrumb (e) {
                                            H.tracing.addBreadcrumb({
                                                category: e.category,
                                                level: e.level,
                                                message: e.message,
                                                data: e.data
                                            });
                                        }
                                    }
                                });
                            }(e);
                            if (Bn(a)) return;
                            const i = await Nn(t);
                            if (Bn(a)) return;
                            const c = await r;
                            if (Bn(a)) return;
                            const l = `${process.pid}-${(0, tr.randomUUID)()}`, u = new lr(n, l, t, ({ mountKey: e, mountKind: r })=>{
                                if (dn.delete(e), "principal" !== r) return;
                                const n = yn.deleteMountKeyByValue(e);
                                t.appendLine(`[cursor-agent-exec] principal mount invalidated alias=${n ?? "<unknown>"}`), Wn(t);
                            }, o, i, (e, r)=>{
                                qr === u && hs(t, {
                                    reason: `server_disabled:${e}`,
                                    retryAfterMs: r?.retryAfterMs
                                });
                            });
                            if (Bn(a)) return void u.dispose();
                            if (ts = l, Dr = n, Yr = t, qr = u, function() {
                                ms();
                                const e = new mt.AgentStoreConversationActivityTracker({
                                    idleQuiesceMs: ()=>qr?.idleQuiesceMs() ?? 0,
                                    setActivity: (e, t)=>{
                                        qr?.setConversationActivity(e, t);
                                    },
                                    quiesceSelfSessions: ()=>{
                                        qr?.quiesceIdleSelfSessions();
                                    },
                                    schedule: (e, t)=>{
                                        const r = setTimeout(e, t);
                                        return {
                                            dispose () {
                                                clearTimeout(r);
                                            }
                                        };
                                    }
                                });
                                Nr = e, qr?.setIdleQuiesceEnabledListener(()=>{
                                    const t = !1 !== H.window.state?.focused;
                                    t && qr?.releaseNewSelfSessionHold(), e.noteWindowFocused(t);
                                }), Fr = (0, mt.setAgentStoreConversationTurnListener)((t, r)=>{
                                    e.noteTurn(t, r);
                                }), Ur = H.window.onDidChangeWindowState((t)=>{
                                    t.focused && qr?.releaseNewSelfSessionHold(), e.noteWindowFocused(t.focused);
                                }), !1 === H.window.state?.focused && e.noteWindowFocused(!1);
                            }(), t.appendLine(`[cursor-agent-exec] Agent store sync ready at ${v.join(n.base, n.tmpDirName)} (source=${n.source}, ephemeral=${n.ephemeralOnLogout}, uriScheme=${H.env.uriScheme})`), (0, mt.isNonDefaultAgentStoreSyncClientConfig)(i) && t.appendLine(`[cursor-agent-exec] Agent store sync client config (non-default): ${JSON.stringify(i)}`), Bn(a)) return;
                            if (rn = c, jn(c), jr.push(H.cursor.onDidChangeCursorAuthToken((e)=>{
                                const r = function(e) {
                                    const t = e?.split(".")[1];
                                    if (void 0 !== t) try {
                                        const e = JSON.parse(Buffer.from(t, "base64url").toString("utf8")), r = "object" == typeof e && null !== e ? e.sub : void 0;
                                        return "string" == typeof r && r.length > 0 ? r : void 0;
                                    } catch  {
                                        return;
                                    }
                                }(e);
                                void 0 === r && void 0 === rn?.authId || $n(t, {
                                    authId: r,
                                    teamId: rn?.teamId ?? H.cursor.getTeamId()
                                });
                            }), H.cursor.onDidChangeActiveTeamId((e)=>{
                                $n(t, {
                                    authId: rn?.authId,
                                    teamId: e
                                });
                            }), H.cursor.onDidChangeGates((e)=>{
                                var r;
                                (void 0 === (r = e.changedGates) || r.includes(pr) || r.includes(mr)) && un(()=>{
                                    Hn(t);
                                });
                            })), Bn(a)) return;
                            Pn(t, {
                                kind: "up"
                            }, "down" === s.kind ? (0, mt.harnessStartTransitionReason)(s) : "started"), un(()=>{
                                "up" === Lr.kind && $r === a && (yn.refreshGate(), Hn(t), async function(e, t) {
                                    const r = on;
                                    if (0 === r.length) return void ($r === t && (an = !0));
                                    e.appendLine(`[cursor-agent-exec] agent store harness replaying ${r.length} remembered mount(s)`);
                                    const n = (0, mt.rememberedMountsOldestFirst)(r);
                                    let s = !0;
                                    for(let e = 0; e < n.length; e++){
                                        const r = n[e];
                                        if (void 0 === r) continue;
                                        if ("up" !== Lr.kind || void 0 === qr || $r !== t) return;
                                        const o = (0, mt.rememberedMountReplay)(r);
                                        if (void 0 === o) continue;
                                        const i = (0, mt.harnessRecoveryStartDelayMs)({
                                            fromPhase: (0, mt.createDownPhase)({
                                                reason: "gate_off",
                                                since: 0
                                            }),
                                            jitterMs: cn.startJitterMs
                                        });
                                        if (i > 0 && await new Promise((e)=>setTimeout(e, i)), "up" !== Lr.kind || void 0 === qr || $r !== t) return;
                                        const a = "self" === o.kind ? await qr.ensureMountedSelfAwaited(o.agentId) : "peer" === o.kind ? await qr.ensureMountedPeer({
                                            peerAgentId: o.agentId,
                                            ...void 0 !== o.alias ? {
                                                alias: o.alias
                                            } : {},
                                            ...!0 === o.isProjectStore ? {
                                                isProjectStore: !0
                                            } : {}
                                        }) : await qr.ensureMountedShare({
                                            shareId: o.shareId,
                                            ...void 0 !== o.alias ? {
                                                alias: o.alias
                                            } : {}
                                        });
                                        if ("mounted" === a.outcome || "already-present" === a.outcome) {
                                            if ("up" !== Lr.kind || void 0 === qr || $r !== t) return;
                                        } else s = !1;
                                    }
                                    $r === t && s && (on = [], an = !0);
                                }(t, a));
                            });
                        } catch (e) {
                            if (t.appendLine(`[cursor-agent-exec] Failed to resolve agent store base: ${String(e)}`), "starting" === Lr.kind && $r === a) {
                                const e = qr;
                                qr = void 0, Dr = void 0, Yr = void 0, On(), void 0 !== e && e.dispose(), Pn(t, (0, mt.startFailedHarnessPhase)({
                                    previous: s,
                                    now: Date.now(),
                                    config: cn
                                }), "start_failed");
                            }
                        }
                    }(e, t, r, n);
                    zr = s;
                    try {
                        await s;
                    } finally{
                        zr = void 0;
                    }
                }(e, t, r, s);
            case "stand-down":
                return void await hs(t, {
                    reason: "gate_off"
                });
            case "none":
                return (0, mt.shouldPromoteDueNoneToProbe)({
                    trigger: r,
                    phase: Lr,
                    now: Date.now(),
                    config: cn
                }) ? void queueMicrotask(()=>{
                    Mn(t);
                }) : void Rn(t);
        }
    }
    function ms() {
        qr?.setIdleQuiesceEnabledListener(void 0), Ur?.dispose(), Ur = void 0, Fr?.(), Fr = void 0, Nr?.dispose(), Nr = void 0;
    }
    async function hs(e, t) {
        const r = (0, mt.classifyHarnessDownReason)(t.reason), n = "extension_deactivate" !== r;
        if (void 0 !== Kr && await Kr, n && (0, mt.isHarnessLatchedDown)(Lr) && void 0 === qr && void 0 === Dr) {
            const n = (0, mt.remintAlreadyDownPhase)({
                phase: Lr,
                downReason: r,
                now: Date.now(),
                config: cn,
                retryAfterMs: t.retryAfterMs,
                previousDownAttempts: Zr
            });
            return Cn(), $r += 1, void 0 !== n && (Cn(), $r += 1, Pn(e, n, t.reason)), void await Tr(ns);
        }
        if (void 0 !== Kr) return;
        const s = async function(e, t, r, n) {
            try {
                $r += 1, Pn(e, {
                    kind: "stopping",
                    next: r
                }, t), On(), _n = !1, void 0 !== vn && (clearTimeout(vn), vn = void 0), await wn?.catch(()=>{}), await xn, cn = (0, mt.harnessRecoveryConfigFromClient)(await Nn(e)), ms();
                const s = qr;
                "extension_deactivate" === r || "latch" === cn.policy ? (on = [], an = !0) : on = (0, mt.snapshotRememberedHarnessMounts)({
                    live: s?.listMounts() ?? [],
                    pending: on,
                    replayComplete: an,
                    max: cn.rememberedMountsMax
                }), qr = void 0, Dr = void 0, Yr = void 0, pn.clear(), En.clear(), function() {
                    for (const e of [
                        ...Gr.keys()
                    ])gs(e);
                }(), yn.forgetResolution(), yn.clearMountKeys();
                for (const [e, t] of dn)"principal" === t.kind && dn.delete(e);
                if (e.appendLine(`[cursor-agent-exec] Agent store harness stood down (${t})`), void 0 !== s) try {
                    await s.dispose();
                } catch (t) {
                    e.appendLine(`[cursor-agent-exec] controller dispose failed: ${String(t)}`);
                }
                Pn(e, (0, mt.createDownPhase)({
                    reason: r,
                    since: Date.now(),
                    attempts: (0, mt.nextDownAttempts)({
                        reason: r,
                        previousDownAttempts: Zr
                    }),
                    retryAfterMs: n,
                    config: cn
                }), t);
            } finally{
                await Tr(ns);
            }
        }(e, t.reason, r, t.retryAfterMs);
        Kr = s;
        try {
            await s;
        } finally{
            Kr = void 0;
        }
    }
    function fs() {
        return {
            ensureFilesDir: (e)=>Ir(ns, e),
            requestMount: (e, t)=>{
                const r = ()=>{
                    !0 !== qr?.hasSelfMount(e) && !0 !== qr?.hasNonSelfMount(e) || gs(e);
                };
                let n;
                "write_detected" === t ? n = qr?.requestDeferredSelfMount(e, t) : "resume" === t ? n = qr?.openAdmittedLazySelf(e, t) : (qr?.recordMountRequested(e, t), qr?.ensureMounted(e)), r(), void 0 !== n && n.then(r, r);
            }
        };
    }
    function gs(e) {
        const t = Gr.get(e);
        if (void 0 !== t) {
            Gr.delete(e);
            try {
                t.close();
            } catch  {}
        }
    }
    function ys(e, t) {
        if (Gr.has(e) || !0 === qr?.hasSelfMount(e) || !0 === qr?.hasNonSelfMount(e)) return;
        const r = function(e, t, r = rr.watch) {
            try {
                return r(e, {
                    recursive: !0
                }, t);
            } catch  {
                try {
                    return r(e, t);
                } catch  {
                    return;
                }
            }
        }(t, ()=>{
            !function(e, t) {
                Jn("touch"), Sr(fs(), e, t);
            }(e, "write_detected");
        });
        void 0 !== r && (Gr.set(e, r), r.on("error", ()=>{
            gs(e);
        }));
    }
    function ws(e, t, r) {
        if (void 0 === qr) return vs(e);
        const n = (0, mt.admitLocalAgentStore)({
            agentId: e,
            policy: qr.mountPolicy(),
            reason: t,
            indexPopulated: qr.localStoreIndexIsPopulated(e),
            resumeRequested: r
        });
        if ("mount" === n.action) {
            "resume" !== n.reason && gs(e);
            const t = function(e, t) {
                return Jn("touch"), function(e, t, r) {
                    const n = br(e, t);
                    if (void 0 !== n) return Sr(e, t, r), n;
                }(fs(), e, t);
            }(e, n.reason);
            return "resume" === n.reason && void 0 !== t && !0 !== qr.hasSelfMount(e) && !0 !== qr.hasNonSelfMount(e) && ys(e, t), t;
        }
        const s = vs(e);
        return void 0 !== s ? (qr?.noteDeferredLocalStore(e, t), ys(e, s), s) : void 0;
    }
    function vs(e) {
        return Jn("touch"), br(fs(), e);
    }
    function _s(e = ()=>!0, t) {
        return {
            listJournalRefs: ()=>{
                if (!e()) return [];
                const r = "function" == typeof t ? t() : t, n = r?.trim();
                return void 0 === n || 0 === n.length ? [] : qr?.listConflictJournalRefs(n) ?? [];
            }
        };
    }
    function bs(e = ()=>!0, t) {
        return async (r)=>{
            const n = qr;
            if (void 0 === n || !e()) return "not_store_path";
            const s = t?.(), o = n.resolveConflictNoticeMountKeyForPath({
                absPath: r,
                basePaths: s
            });
            if (void 0 === o) return "not_store_path";
            const i = await n.forceSyncPathForConflictNotices({
                mountKey: o,
                absPath: r,
                basePaths: s
            });
            return "synced-path" === i ? "synced_path" : i;
        };
    }
    function Ss() {
        return ()=>qr?.writeBarrierTimeoutMs() ?? mt.AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.writeBarrierTimeoutMs;
    }
    function ks() {
        return (e)=>{
            qr?.recordWriteBarrier(e);
        };
    }
    function xs(e = ()=>!0, t) {
        return {
            listMounts: (t)=>e() ? qr?.listConflictNoticeMounts(t) ?? [] : [],
            resolveMountKeyForPath: (e)=>qr?.resolveConflictNoticeMountKeyForPath({
                    absPath: e,
                    basePaths: t?.()
                }),
            resolveWrittenPathAbs: (e)=>qr?.resolveConflictNoticeWrittenPath({
                    absPath: e,
                    basePaths: t?.()
                }),
            isMountDirty: (e)=>qr?.isConflictNoticeMountDirty(e) ?? !1,
            forceSyncMount: async (e)=>await qr?.forceSyncForConflictNotices(e) ?? "absent",
            forceSyncMountPath: async ({ mountKey: e, absPath: r, timeoutMs: n })=>await qr?.forceSyncPathForConflictNotices({
                    mountKey: e,
                    absPath: r,
                    basePaths: t?.(),
                    timeoutMs: n
                }) ?? "absent"
        };
    }
    function Es(e) {
        const t = new Map;
        return (r)=>{
            if (!Dr) return {};
            const n = r.get(te), s = n?.conversationId, o = s ?? e.sessionId;
            try {
                (0, ut._b)(o);
            } catch  {
                return {};
            }
            let i = t.get(o);
            if (void 0 === i || !rs.has(o)) {
                t.delete(o);
                const e = void 0 !== qr;
                if (i = ws(o, "env_provider", !0 === n?.resumeAgentStore), void 0 === i) return {};
                e && t.set(o, i);
            }
            const a = {
                [vt.jO]: i
            }, c = En.has(o);
            return (dn.size > 0 || c) && void 0 !== Yr && (a[vt.eX] = function(e, t) {
                const r = Object.create(null), n = void 0 !== t ? En.get(t) : void 0;
                if (void 0 !== n) for (const t of n.values()){
                    try {
                        (0, ut.rs)(t.filesDir);
                    } catch (r) {
                        e.appendLine(`[cursor-agent-exec] omitting inherited mount alias ${t.alias} from env: ${sr(r)}`);
                        continue;
                    }
                    r[t.alias] = {
                        path: t.filesDir,
                        readOnly: t.readOnly
                    };
                }
                for (const [t, n] of dn)if (void 0 === r[n.alias]) {
                    try {
                        (0, ut.rs)(n.filesDir);
                    } catch (r) {
                        e.appendLine(`[cursor-agent-exec] omitting mount alias ${n.alias} (${t}) from env: ${sr(r)}`);
                        continue;
                    }
                    r[n.alias] = {
                        path: n.filesDir,
                        readOnly: "share" === n.kind
                    };
                }
                return JSON.stringify(r);
            }(Yr, o)), a;
        };
    }
    var Is = require("./module-65716.js");
    class Ts extends Error {
        constructor(e, t){
            super(`Refusing to move "${e}": it is not a skill folder under "${t}"`), this.skillDir = e, this.expectedRoot = t, this.name = "StoreSkillGuardViolationError";
        }
    }
    function Cs(e) {
        const t = e?.code;
        return "string" == typeof t ? t : e instanceof Error ? e.name : "unknown";
    }
    function Ps(e, t) {
        if (!(0, v.isAbsolute)(t) || !(0, v.isAbsolute)(e)) return;
        const r = (0, v.relative)((0, v.resolve)(t), (0, v.resolve)(e));
        return "" === r || (0, v.isAbsolute)(r) || ".." === r.split(v.sep)[0] ? void 0 : function(e) {
            return e.replace(/\\/g, "/");
        }(r);
    }
    function As(e) {
        return (0, v.join)(e, ".cursor", "skills");
    }
    async function Rs(e) {
        try {
            return await (0, W.stat)(e), !0;
        } catch  {
            return !1;
        }
    }
    async function Ms(e) {
        const t = [];
        let r;
        try {
            r = await (0, W.readdir)(e, {
                withFileTypes: !0
            });
        } catch  {
            return t;
        }
        for (const n of r){
            const r = (0, v.join)(e, n.name);
            n.isDirectory() ? t.push(...await Ms(r)) : n.isFile() && t.push(r);
        }
        return t;
    }
    async function Js(e) {
        let t = 0;
        for (const r of (await Ms(e)))try {
            t = Math.max(t, (await (0, W.stat)(r)).mtimeMs);
        } catch  {}
        return t;
    }
    function Os(e) {
        return {
            confirmed: !1,
            deleted: !1,
            reason: e
        };
    }
    async function Bs(e, t, r) {
        if (!await Rs(r.sourceSkillFilePath)) return {
            confirmed: !1,
            reason: t.sourceMissingReason
        };
        await e.saveDirtyDocumentsUnder(t.sourceDir);
        const n = void 0 === r.clearExistingDestination ? void 0 : {
            clear: r.clearExistingDestination,
            stagingDir: (s = t.destinationDir, (0, v.join)((0, v.dirname)(s), `.${(0, v.basename)(s)}.copy-${(0, tr.randomUUID)().slice(0, 8)}`))
        };
        var s;
        const o = void 0 !== n;
        if (void 0 === n && await async function(e) {
            try {
                return await (0, W.lstat)(e), !0;
            } catch  {
                return !1;
            }
        }(t.destinationDir)) return {
            confirmed: !1,
            reason: "destination-exists"
        };
        const i = n?.stagingDir ?? t.destinationDir;
        try {
            await (0, W.mkdir)((0, v.dirname)(i), {
                recursive: !0
            }), await (0, W.cp)(t.sourceDir, i, {
                recursive: !0,
                dereference: !0,
                force: !1,
                errorOnExist: !0
            });
        } catch (r) {
            return function(e) {
                const t = e?.code;
                return "ERR_FS_CP_EEXIST" === t || "ERR_FS_CP_DIR_TO_NON_DIR" === t;
            }(r) ? {
                confirmed: !1,
                reason: "destination-exists"
            } : (e.logWarning(`${t.label}: copy failed`, {
                code: Cs(r)
            }), await Fs({
                deps: e,
                copyTarget: i,
                label: t.label
            }), {
                confirmed: !1,
                reason: "copy-failed"
            });
        }
        if (!await Rs((0, v.join)(i, "SKILL.md"))) return await Fs({
            deps: e,
            copyTarget: i,
            label: t.label
        }), {
            confirmed: !1,
            reason: "destination-missing"
        };
        if (void 0 !== n) {
            const r = await n.clear();
            if (void 0 !== r) return await Fs({
                deps: e,
                copyTarget: n.stagingDir,
                label: t.label
            }), {
                confirmed: !1,
                reason: r
            };
            try {
                await (0, W.rename)(n.stagingDir, t.destinationDir);
            } catch (r) {
                return e.logWarning(`${t.label}: could not move the staged copy in`, {
                    code: Cs(r)
                }), {
                    confirmed: !1,
                    reason: "copy-failed"
                };
            }
        }
        const a = await Ms(t.destinationDir);
        if (0 === a.length) return await Fs({
            deps: e,
            copyTarget: t.destinationDir,
            label: t.label
        }), {
            confirmed: !1,
            reason: "destination-missing"
        };
        let c;
        try {
            c = await t.confirmDurable(a);
        } catch (r) {
            e.logWarning(`${t.label}: durability check failed`, {
                code: Cs(r)
            }), c = "not-synced";
        }
        if (void 0 !== c) return e.logWarning(`${t.label}: destination not durable, keeping source`, {
            code: c
        }), o || await Fs({
            deps: e,
            copyTarget: t.destinationDir,
            label: t.label
        }), {
            confirmed: !1,
            reason: c
        };
        for (const r of a)if (!await Rs(r)) return e.logWarning(`${t.label}: destination vanished during the round`, {
            code: "destination-missing"
        }), {
            confirmed: !1,
            reason: "destination-missing"
        };
        return {
            confirmed: !0,
            copiedFiles: a
        };
    }
    async function Ds(e, t, r) {
        if (!await Rs(r)) return {
            confirmed: !0,
            deleted: !1,
            reason: t.sourceMissingReason
        };
        try {
            await e.deleteDirectoryToTrash(t.sourceDir);
        } catch (r) {
            return e.logWarning(`${t.label}: confirmed but failed to trash the source`, {
                code: Cs(r)
            }), {
                confirmed: !0,
                deleted: !1,
                reason: "delete-failed"
            };
        }
        return {
            confirmed: !0,
            deleted: !0,
            filesMove: {
                previousDir: t.sourceDir,
                nextDir: t.destinationDir
            }
        };
    }
    async function qs(e, t, r) {
        if (!await Rs(r.skillFilePath)) return Os(t.sourceMissingReason);
        const n = await Rs(t.destinationDir);
        if (n && !0 !== r.overwriteAlreadyApproved) {
            const r = await async function(e) {
                const [t, r] = await Promise.all([
                    Js(e.destinationDir),
                    Js(e.sourceDir)
                ]);
                return {
                    relativePath: e.relativePath,
                    destinationModifiedMs: t,
                    sourceModifiedMs: r,
                    newerCopy: t === r ? "same" : t > r ? "destination" : "source"
                };
            }({
                relativePath: t.relativePath,
                destinationDir: t.destinationDir,
                sourceDir: t.sourceDir
            });
            if (!await e.confirmStoreOverwrite(r)) return Os("destination-declined");
        }
        const s = await Bs(e, t, {
            sourceSkillFilePath: r.skillFilePath,
            clearExistingDestination: n ? Ns({
                deps: e,
                destinationDir: t.destinationDir,
                label: t.label
            }) : void 0
        });
        return s.confirmed ? await Ds(e, t, r.skillFilePath) : Os(s.reason);
    }
    function Ns(e) {
        return async ()=>{
            try {
                return void await e.deps.deleteDirectoryToTrash(e.destinationDir);
            } catch (t) {
                return e.deps.logWarning(`${e.label}: failed to trash the copy being replaced`, {
                    code: Cs(t)
                }), "delete-failed";
            }
        };
    }
    async function Fs(e) {
        const t = await (0, W.lstat)(e.copyTarget).catch(()=>{});
        if (void 0 !== t && t.isDirectory()) try {
            await (0, W.rm)(e.copyTarget, {
                recursive: !0,
                force: !0
            });
        } catch (t) {
            e.deps.logWarning(`${e.label}: failed to clean up a partial copy`, {
                code: Cs(t)
            });
        }
    }
    async function Us(e, t) {
        const r = (0, v.dirname)(t.skillFilePath), n = function(e) {
            if ((0, v.isAbsolute)(e.userHomeDirectory)) return Ps(e.skillDir, As(e.userHomeDirectory));
        }({
            skillDir: r,
            userHomeDirectory: e.userHomeDirectory
        });
        if (void 0 === n) throw new Ts(r, As(e.userHomeDirectory));
        if (!(0, v.isAbsolute)(e.agentStoreSkillsDir)) throw new Ts(r, e.agentStoreSkillsDir);
        return await qs(e, {
            sourceDir: r,
            destinationDir: (0, v.join)(e.agentStoreSkillsDir, ...n.split("/")),
            relativePath: n,
            sourceMissingReason: "source-missing",
            confirmDurable: async (t)=>(function(e) {
                    return "synced-path" === e;
                })(await e.requestScopedSync(t)) ? void 0 : "not-synced",
            label: "Move skill to store"
        }, t);
    }
    async function Ls(e, t) {
        const r = (0, v.dirname)(t.skillFilePath), n = function(e) {
            return Ps(e.skillDir, e.agentStoreSkillsDir);
        }({
            skillDir: r,
            agentStoreSkillsDir: e.agentStoreSkillsDir
        });
        if (void 0 === n) throw new Ts(r, e.agentStoreSkillsDir);
        if (!(0, v.isAbsolute)(e.userHomeDirectory)) throw new Ts(r, e.userHomeDirectory);
        return await qs(e, {
            sourceDir: r,
            destinationDir: (0, v.join)(As(e.userHomeDirectory), ...n.split("/")),
            relativePath: n,
            sourceMissingReason: "nothing-to-move",
            confirmDurable: async ()=>{},
            label: "Move skill out of store"
        }, t);
    }
    const $s = 4;
    async function js(e) {
        const t = [];
        return await Gs(e, e, t), t;
    }
    async function Gs(e, t, r) {
        let n;
        try {
            n = await (0, W.readdir)(t, {
                withFileTypes: !0
            });
        } catch (e) {
            if ("ENOENT" === Cs(e)) return;
            throw e;
        }
        n.sort((e, t)=>e.name < t.name ? -1 : e.name > t.name ? 1 : 0);
        for (const s of n){
            if (!s.isDirectory() || s.name.startsWith(".")) continue;
            const n = (0, v.join)(t, s.name), o = Ps(n, e);
            void 0 !== o && (await Rs((0, v.join)(n, "SKILL.md")) ? r.push(o) : await Gs(e, n, r));
        }
    }
    async function zs(e, t, r) {
        for (const e of [
            t.sourceRoot,
            t.destinationRoot
        ])if (!(0, v.isAbsolute)(e)) throw new Ts(t.sourceRoot, e);
        const n = await js(t.sourceRoot), s = n.length, o = [], i = [];
        return await (0, Is.up)(n, async (n)=>{
            if (!0 === r.isCancelled?.()) return;
            const a = await async function(e, t, r) {
                const n = r.split("/"), s = (0, v.join)(t.destinationRoot, ...n);
                for(let r = 1; r < n.length; r++){
                    const s = (0, v.join)(t.destinationRoot, ...n.slice(0, r));
                    if (await Rs((0, v.join)(s, "SKILL.md"))) return e.logWarning(`${t.label}: destination path is inside an existing skill`, {
                        code: "destination-exists"
                    }), {
                        status: "failed",
                        reason: "destination-exists"
                    };
                }
                const o = await Rs((0, v.join)(s, "SKILL.md")), i = (0, v.join)(t.sourceRoot, ...n);
                try {
                    const n = await Bs(e, {
                        sourceDir: i,
                        destinationDir: s,
                        relativePath: r,
                        sourceMissingReason: t.sourceMissingReason,
                        confirmDurable: t.confirmDurable,
                        label: t.label
                    }, {
                        sourceSkillFilePath: (0, v.join)(i, "SKILL.md"),
                        clearExistingDestination: o ? Ns({
                            deps: e,
                            destinationDir: s,
                            label: t.label
                        }) : void 0
                    });
                    return n.confirmed ? {
                        status: "copied"
                    } : {
                        status: "failed",
                        reason: n.reason
                    };
                } catch (r) {
                    return e.logWarning(`${t.label}: copy threw`, {
                        code: Cs(r)
                    }), {
                        status: "failed",
                        reason: "copy-failed"
                    };
                }
            }(e, t, n);
            switch(a.status){
                case "copied":
                    o.push(n);
                    break;
                case "failed":
                    i.push({
                        relativePath: n,
                        reason: a.reason
                    });
            }
            r.onProgress?.({
                total: s,
                done: o.length
            });
        }, {
            max: $s
        }), {
            complete: o.length === s,
            copied: o,
            failed: i
        };
    }
    async function Ws(e, t) {
        for (const e of [
            t.sourceRoot,
            t.destinationRoot
        ])if (!(0, v.isAbsolute)(e)) throw new Ts(t.sourceRoot, e);
        const r = t.relativePaths.map((e)=>{
            const r = e.split("/"), n = (0, v.join)(t.sourceRoot, ...r);
            if (void 0 === Ps(n, t.sourceRoot)) throw new Ts(n, t.sourceRoot);
            return r;
        }), n = await (0, Is.up)(r, async (r)=>await Ds(e, {
                sourceDir: (0, v.join)(t.sourceRoot, ...r),
                destinationDir: (0, v.join)(t.destinationRoot, ...r),
                sourceMissingReason: t.sourceMissingReason,
                label: t.label
            }, (0, v.join)(t.sourceRoot, ...r, "SKILL.md")), {
            max: $s
        }), s = [];
        let o = 0;
        for (const e of n){
            const t = "fulfilled" === e.status ? e.value.filesMove : void 0;
            void 0 !== t ? s.push(t) : o++;
        }
        return {
            moves: s,
            failedCount: o
        };
    }
    const Hs = "cursor.skillStore.copySkillsToStore", Ks = "cursor.skillStore.copySkillsFromStore", Vs = "cursor.skillStore.confirmStoreSkillsSynced", Ys = "cursor.skillStore.trashMigratedHomeSkills", Qs = "cursor.skillStore.trashMigratedStoreSkills", Xs = "cursor.skillStore.reportMigrationProgress", Zs = "cursor.skillStore.isMigrationCancelled", eo = Object.freeze({
        complete: !1,
        doneCount: 0,
        total: 0,
        failed: Object.freeze([
            Object.freeze({
                reason: "store-unavailable"
            })
        ])
    }), to = "Move skill to store", ro = "Move skill out of store";
    function no() {
        const [e] = yn.targetDirs();
        return e;
    }
    function so() {
        const e = no();
        if (void 0 !== e) return {
            deleteDirectoryToTrash: Re,
            requestScopedSync: Fn,
            saveDirtyDocumentsUnder: ye,
            confirmStoreOverwrite: async ()=>!1,
            userHomeDirectory: (0, fe.homedir)(),
            agentStoreSkillsDir: e,
            logWarning: (e, t)=>{
                ee.warn((0, f.q6)(), e, {
                    code: t.code
                });
            }
        };
    }
    let oo;
    async function io(e) {
        const t = oo;
        if (void 0 !== t) return await t;
        const r = async function(e) {
            const t = so();
            if (void 0 === t) return eo;
            const r = e(t);
            let n = !1;
            const s = ()=>{
                (async ()=>{
                    try {
                        n = !0 === await H.commands.executeCommand(Zs);
                    } catch  {}
                })();
            };
            s();
            let o = 0;
            const i = await zs(t, r, {
                isCancelled: ()=>n,
                onProgress: (e)=>{
                    o = e.total, s(), H.commands.executeCommand(Xs, {
                        done: e.done,
                        total: e.total
                    }).then(void 0, ()=>{});
                }
            }), a = i.copied.length;
            if (!i.complete) return {
                complete: !1,
                doneCount: a,
                total: Math.max(o, a + i.failed.length),
                failed: i.failed.map((e)=>({
                        reason: e.reason
                    }))
            };
            return {
                complete: !0,
                doneCount: a,
                total: Math.max(o, a),
                migratedRelativePaths: [
                    ...i.copied
                ].sort()
            };
        }(e);
        oo = r;
        try {
            return await r;
        } finally{
            oo === r && (oo = void 0);
        }
    }
    function ao(e) {
        return {
            sourceRoot: As(e.userHomeDirectory),
            destinationRoot: e.agentStoreSkillsDir,
            confirmDurable: async (t)=>"synced-path" === await e.requestScopedSync(t) ? void 0 : "not-synced",
            sourceMissingReason: "source-missing",
            label: to
        };
    }
    function co(e) {
        return {
            sourceRoot: e.agentStoreSkillsDir,
            destinationRoot: As(e.userHomeDirectory),
            confirmDurable: async ()=>{},
            sourceMissingReason: "nothing-to-move",
            label: ro
        };
    }
    function lo(e, t) {
        if (void 0 === t || !Array.isArray(t.relativePaths) || t.relativePaths.some((e)=>"string" != typeof e || "" === e.trim())) throw new Error(`${e} requires relativePaths, a list of non-empty strings`);
    }
    function uo(e) {
        e.subscriptions.push(H.commands.registerCommand(Hs, async ()=>await io(ao)), H.commands.registerCommand(Ks, async ()=>await io(co)), H.commands.registerCommand(Vs, async ()=>await async function() {
                const e = no();
                if (void 0 === e) return {
                    confirmed: !1,
                    reason: "store-unavailable"
                };
                const t = await Ms(e), r = await Fn(t);
                return "synced-path" === r || 0 === t.length && "synced" === r ? {
                    confirmed: !0
                } : {
                    confirmed: !1,
                    reason: r
                };
            }()), H.commands.registerCommand(Ys, async (e)=>(lo("trashMigratedHomeSkills", e), await async function(e) {
                const t = so();
                return void 0 === t ? {
                    moves: [],
                    failedCount: e.relativePaths.length
                } : await Ws(t, {
                    sourceRoot: As(t.userHomeDirectory),
                    destinationRoot: t.agentStoreSkillsDir,
                    relativePaths: e.relativePaths,
                    sourceMissingReason: "source-missing",
                    label: to
                });
            }(e))), H.commands.registerCommand(Qs, async (e)=>(lo("trashMigratedStoreSkills", e), await async function(e) {
                const t = so();
                return void 0 === t ? {
                    moves: [],
                    failedCount: e.relativePaths.length
                } : await Ws(t, {
                    sourceRoot: t.agentStoreSkillsDir,
                    destinationRoot: As(t.userHomeDirectory),
                    relativePaths: e.relativePaths,
                    sourceMissingReason: "nothing-to-move",
                    label: ro
                });
            }(e))));
    }
    const po = "cursor.skillStore.moveSkillToStore", mo = "cursor.skillStore.moveSkillOutOfStore", ho = "cursor.skillStore.confirmOverwrite", fo = {
        confirmed: !1,
        deleted: !1,
        storeUnavailable: !0
    };
    function go(e) {
        const [t] = yn.get();
        if (void 0 !== t) return {
            deleteDirectoryToTrash: Re,
            requestScopedSync: Fn,
            saveDirtyDocumentsUnder: ye,
            confirmStoreOverwrite: async (t)=>await async function(e, t) {
                    try {
                        return !0 === await H.commands.executeCommand(ho, {
                            kind: e,
                            collision: t
                        });
                    } catch (e) {
                        return ee.warn((0, f.q6)(), "Skill store move: overwrite prompt failed", {
                            error: String(e)
                        }), !1;
                    }
                }(e, t),
            userHomeDirectory: (0, fe.homedir)(),
            agentStoreSkillsDir: t,
            logWarning: (e, t)=>{
                ee.warn((0, f.q6)(), e, {
                    code: t.code
                });
            }
        };
    }
    async function yo(e, t) {
        const r = go(e);
        if (void 0 === r) return fo;
        const n = "moveToStore" === e ? Us : Ls;
        try {
            return await n(r, {
                skillFilePath: t.skillFilePath
            });
        } catch (e) {
            if (e instanceof Ts) return {
                confirmed: !1,
                deleted: !1,
                guardViolation: !0
            };
            throw e;
        }
    }
    function wo(e, t) {
        if (void 0 === t || "string" != typeof t.skillFilePath || "" === t.skillFilePath.trim()) throw new Error(`${e} requires a non-empty skillFilePath`);
    }
    var vo = require("./module-43955.js");
    const _o = "You are in the user's home directory—the starting point, not a project workspace. Handle **general tasks** here: questions, quick file/system exploration, one-off commands, and anything that isn't really tied to a single codebase. Use your judgment.\n\nWhen the work belongs in a **project workspace**, infer or confirm the folder (recent paths, ~/Projects/, ~/Developer/, ~/repos/, and what the user said). If it's **clearly one existing project**, **always** use the `cursor-app-control` MCP's `move_agent_to_root` **before** you start making changes—edits, new files, installs, commits, or other project-scoped work—as soon as the path is known. Do that work only **after** the move; don't begin from home and relocate later. Working inside the project beats staying on home. If **which project or path is unclear**, use the ask question tool first. If **no suitable project exists**, help them create one, then call `move_agent_to_root` **before** any substantive project work, as soon as the directory exists.\n\n## Questions About Cursor\n\nWhen users ask how to use Cursor, configure settings, or have questions about Cursor features, use the cursor-guide skill to provide accurate, up-to-date answers.\n\n## Creating New Projects\n\nWhen a user wants to build something, help them get set up in a new project:\n\n1. Use the ask question tool to confirm the project name. Suggest a sensible default based on what they described. Include a brief \"any preferences for setup?\" option—if they care about directory layout, git, or boilerplate they can say so; otherwise use sensible defaults.\n2. Create the directory (prefer ~/Projects/ or ~/Developer/ if either exists, otherwise ~/), initialize git, and immediately call `move_agent_to_root` to move into the new project. Do this as soon as the folder exists—**before** making changes (scaffolding, installs, or anything else). Do not start project work from home and move afterward. Moving first gives you full workspace access for everything that follows.\n3. Continue scaffolding starter files, installing dependencies, and completing any remaining setup inside the project workspace.\n\nKeep setup frictionless by default—handle git, structure, and boilerplate without forcing decisions on things they may not care about. If they state preferences, respect them and go as deep as they want.";
    function bo() {
        return new vo.DX({
            fullPath: "Home workspace guidance",
            content: _o,
            type: new vo.f5({
                type: {
                    case: "global",
                    value: new vo.i9
                }
            }),
            source: vo.gv.TEAM
        });
    }
    var So = require("./module-70857.js"), ko = require("./module-16928.js");
    const xo = "sandbox_read_control_portal";
    function Eo(e) {
        let t = !1, r = 0;
        const n = ()=>{
            const n = ++r;
            Promise.resolve(e.checkFeatureGate()).then((e)=>{
                n === r && (t = e);
            }, ()=>{
                n === r && (t = !1);
            });
        };
        n();
        const s = e.onDidChangeGates((e)=>{
            var t;
            (void 0 === (t = e.changedGates) || t.includes(xo)) && n();
        });
        return {
            getEnabled: ()=>t,
            dispose: ()=>s.dispose()
        };
    }
    const Io = "agent_exec", To = "mcp", Co = {
        disableConsoleFallback: !0
    }, Po = (async ()=>{
        try {
            return await H.cursor.checkFeatureGate("mcp_structured_logging");
        } catch  {
            return !1;
        }
    })();
    function Ao(e) {
        Po.then((t)=>{
            t && e();
        });
    }
    function Ro(e) {
        Ao(()=>{
            H.cursor.logStructuredInfo(To, e.message, {
                mcpMeta: {
                    ...e.metadata,
                    subkey: e.subkey,
                    mcp_version: "snapshots"
                }
            }, Co);
        });
    }
    class Mo {
        log(e, t) {
            const { level: r, message: n, metadata: s, error: o } = t, i = o instanceof Error ? o : void 0;
            switch(r){
                case "debug":
                    H.cursor.logStructuredDebug(Io, n, s);
                    break;
                case "info":
                    H.cursor.logStructuredInfo(Io, n, s);
                    break;
                case "warn":
                    H.cursor.logStructuredWarn(Io, n, s);
                    break;
                case "error":
                    H.cursor.logStructuredError(Io, n, i, s);
                    break;
                default:
                    throw new Error(`Unhandled log level: ${r}`);
            }
        }
    }
    class Jo {
        constructor(e){
            this.options = e;
        }
        log(e, t) {
            Ao(()=>{
                const e = this.buildMcpMetadata(t.metadata), r = t.error instanceof Error ? t.error : void 0;
                switch(t.level){
                    case "debug":
                        H.cursor.logStructuredDebug(To, t.message, e, Co);
                        break;
                    case "info":
                        H.cursor.logStructuredInfo(To, t.message, e, Co);
                        break;
                    case "warn":
                        H.cursor.logStructuredWarn(To, t.message, e, Co);
                        break;
                    case "error":
                        H.cursor.logStructuredError(To, t.message, r, e, Co);
                        break;
                    default:
                        {
                            const e = t.level;
                            throw new Error(`Unhandled log level: ${e}`);
                        }
                }
            });
        }
        buildMcpMetadata(e) {
            const t = {
                subkey: this.options.subkey,
                mcp_version: this.options.mcpVersion
            };
            if (void 0 !== this.options.identifier && (t.identifier = this.options.identifier), e) for (const [r, n] of Object.entries(e))t[r] = n;
            return {
                mcpMeta: t
            };
        }
    }
    class Oo {
        constructor(e, t = L.utt){
            this.backend = e, this.metadataKey = t;
        }
        log(e, t) {
            if (!0 !== t.metadata?.[this.metadataKey]) return;
            const r = {
                ...t.metadata ?? {}
            };
            delete r[this.metadataKey], this.backend.log(e, {
                ...t,
                metadata: r
            });
        }
    }
    class Bo {
        constructor(e){
            this.outputChannel = e;
        }
        log(e, t) {
            const { level: r, message: n, metadata: s, error: o } = t;
            let i = n;
            switch(s && Object.keys(s).length > 0 && (i += ` ${JSON.stringify(s)}`), r){
                case "debug":
                    this.outputChannel.debug(i), o && this.outputChannel.debug(this.formatError(o));
                    break;
                case "info":
                    this.outputChannel.info(i), o && this.outputChannel.info(this.formatError(o));
                    break;
                case "warn":
                    this.outputChannel.warn(i), o && this.outputChannel.warn(this.formatError(o));
                    break;
                case "error":
                    this.outputChannel.error(i), o && this.outputChannel.error(this.formatError(o));
                    break;
                default:
                    throw new Error(`Unhandled log level: ${r}`);
            }
        }
        formatError(e) {
            return e instanceof Error ? `${e.message}\n${e.stack ?? ""}` : String(e);
        }
    }
    class Do {
        constructor(e){
            this.backends = e;
        }
        log(e, t) {
            for (const r of this.backends)r.log(e, t);
        }
    }
    class qo {
        record(e, t, r, n) {
            H.cursor.metricsGauge({
                stat: t.name,
                value: r,
                tags: n
            });
        }
        increment(e, t, r, n) {
            H.cursor.metricsIncrement({
                stat: t.name,
                value: r ?? 1,
                tags: n
            });
        }
        gauge(e, t, r, n) {
            H.cursor.metricsGauge({
                stat: t.name,
                value: r,
                tags: n
            });
        }
        histogram(e, t, r, n) {
            H.cursor.metricsDistribution({
                stat: t.name,
                value: r,
                tags: n
            });
        }
    }
    var No = require("./module-91022.js");
    function Fo(e) {
        const t = (0, h.mJ)(e), r = e.get(te);
        return {
            spanContext: t ? {
                traceId: t.traceId,
                spanId: t.spanId,
                traceFlags: t.traceFlags
            } : void 0,
            name: e.name,
            conversationId: r?.conversationId,
            composerId: r?.composerId
        };
    }
    function Uo(e) {
        const t = Fo(e), r = new H.CancellationTokenSource, n = ()=>{
            r.cancel();
        };
        return e.signal.aborted ? r.cancel() : e.signal.addEventListener("abort", n), {
            serializableContext: t,
            cancellationTokenSource: r,
            dispose: ()=>{
                e.signal.removeEventListener("abort", n), r.dispose();
            }
        };
    }
    var Lo = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), $o = (e)=>{
        throw TypeError(e);
    }, jo = (e, t, r)=>{
        var n, s;
        null != t ? ("object" != typeof t && "function" != typeof t && $o("Object expected"), r && (n = t[Lo("asyncDispose")]), void 0 === n && (n = t[Lo("dispose")], r && (s = n)), "function" != typeof n && $o("Object not disposable"), s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.push([
            r,
            n,
            t
        ])) : r && e.push([
            r
        ]);
        return t;
    }, Go = (e, t, r)=>{
        var n = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r, n) {
            return (n = Error(r)).name = "SuppressedError", n.error = e, n.suppressed = t, n;
        }, s = (e)=>t = r ? new n(e, t, "An error was suppressed during disposal") : (r = !0, e), o = (n)=>{
            for(; n = e.pop();)try {
                var i = n[1] && n[1].call(n[2]);
                if (n[0]) return Promise.resolve(i).then(o, (e)=>(s(e), o()));
            } catch (e) {
                s(e);
            }
            if (r) throw t;
        };
        return o();
    };
    class zo {
        constructor(e){
            this.configuredHooks = [], this.configuredSteps = new Set, this.subscription = H.cursor.onDidChangeHooks((e)=>{
                this.configuredHooks = e, this.configuredSteps = new Set(e.map((e)=>e.step));
            }), this.initPromise = (async ()=>{
                var t = [];
                try {
                    const r = e ? e.withName("HooksConfigTracker.constructorInit") : (0, f.q6)().withName("HooksConfigTracker.constructorInit"), n = Fo(jo(t, (0, h.VI)(r)).ctx), s = await H.cursor.getConfiguredHooks(n);
                    this.configuredHooks = s, this.configuredSteps = new Set(s.map((e)=>e.step));
                } catch (e) {
                    var r = e, n = !0;
                } finally{
                    Go(t, r, n);
                }
            })();
        }
        async initialize(e) {
            var t = [];
            try {
                jo(t, (0, h.VI)(e.withName("HooksConfigTracker.initialize")));
                await this.initPromise;
            } catch (e) {
                var r = e, n = !0;
            } finally{
                Go(t, r, n);
            }
        }
        hasHookForStep(e) {
            return this.configuredSteps.has(e);
        }
        hasHookForRequest(e, t) {
            const r = (0, No.bi)(e, t);
            return this.configuredHooks.some((t)=>t.step === e && (0, No.Qk)(t.scripts, r).length > 0);
        }
        getConfiguredHooks() {
            return [
                ...this.configuredHooks
            ];
        }
        getConfiguredSteps() {
            return new Set(this.configuredSteps);
        }
        dispose() {
            this.subscription.dispose();
        }
    }
    const Wo = require("perf_hooks"), Ho = (0, $.v5)("vscode.agent_exec.event_loop_delay_ms", {
        description: "Event loop delay in milliseconds"
    }), Ko = (0, $.wt)("vscode.agent_exec.event_loop_delay_min_ms", {
        description: "Minimum event loop delay in milliseconds"
    }), Vo = (0, $.wt)("vscode.agent_exec.event_loop_delay_max_ms", {
        description: "Maximum event loop delay in milliseconds"
    }), Yo = (0, $.wt)("vscode.agent_exec.event_loop_delay_mean_ms", {
        description: "Mean event loop delay in milliseconds"
    }), Qo = (0, $.wt)("vscode.agent_exec.memory_heap_used_mb", {
        description: "V8 heap used memory in megabytes"
    }), Xo = (0, $.wt)("vscode.agent_exec.memory_heap_total_mb", {
        description: "V8 heap total memory in megabytes"
    }), Zo = (0, $.wt)("vscode.agent_exec.memory_rss_mb", {
        description: "Resident set size memory in megabytes"
    }), ei = (0, $.wt)("vscode.agent_exec.memory_external_mb", {
        description: "External memory usage in megabytes"
    }), ti = (0, $.wt)("vscode.agent_exec.memory_array_buffers_mb", {
        description: "ArrayBuffers memory usage in megabytes"
    }), ri = (0, $.wt)("vscode.agent_exec.cpu_user_percent", {
        description: "CPU user time percentage"
    }), ni = (0, $.wt)("vscode.agent_exec.cpu_system_percent", {
        description: "CPU system time percentage"
    }), si = 1048576;
    function oi(e) {
        return Number.isFinite(e) ? e / 1e6 : 0;
    }
    class ii {
        constructor(e = ()=>Wo.monitorEventLoopDelay({
                resolution: 20
            })){
            this.createMonitor = e;
        }
        start() {
            if (void 0 !== this.monitor) throw new Error("Event-loop delay measurement is already running");
            this.monitor = this.createMonitor(), this.monitor.enable();
        }
        finish() {
            const e = this.monitor;
            if (void 0 === e) throw new Error("Event-loop delay measurement is not running");
            return this.monitor = void 0, e.disable(), {
                maxMs: oi(e.max),
                meanMs: oi(e.mean),
                p95Ms: oi(e.percentile(95))
            };
        }
        dispose() {
            this.monitor?.disable(), this.monitor = void 0;
        }
    }
    class ai {
        constructor(e, t = 1e4){
            this.intervalId = null, this.lastCpuUsage = null, this.lastCpuTime = 0, this.getContext = e, this.intervalMs = t, this.eventLoopMonitor = Wo.monitorEventLoopDelay({
                resolution: 20
            });
        }
        start() {
            null === this.intervalId && (this.eventLoopMonitor.enable(), this.lastCpuUsage = process.cpuUsage(), this.lastCpuTime = Date.now(), this.collectMetrics(), this.intervalId = setInterval(()=>{
                this.collectMetrics();
            }, this.intervalMs));
        }
        stop() {
            null !== this.intervalId && (clearInterval(this.intervalId), this.intervalId = null), this.eventLoopMonitor.disable();
        }
        collectMetrics() {
            const e = this.getContext();
            this.collectEventLoopMetrics(e), this.collectMemoryMetrics(e), this.collectCpuMetrics(e);
        }
        collectEventLoopMetrics(e) {
            Ho.histogram(e, oi(this.eventLoopMonitor.mean)), Ko.gauge(e, oi(this.eventLoopMonitor.min)), Vo.gauge(e, oi(this.eventLoopMonitor.max)), Yo.gauge(e, oi(this.eventLoopMonitor.mean)), this.eventLoopMonitor.reset();
        }
        collectMemoryMetrics(e) {
            const t = process.memoryUsage();
            Qo.gauge(e, t.heapUsed / si), Xo.gauge(e, t.heapTotal / si), Zo.gauge(e, t.rss / si), ei.gauge(e, t.external / si), ti.gauge(e, t.arrayBuffers / si);
        }
        collectCpuMetrics(e) {
            const t = process.cpuUsage(), r = Date.now();
            if (null !== this.lastCpuUsage) {
                const n = 1e3 * (r - this.lastCpuTime), s = (t.user - this.lastCpuUsage.user) / n * 100, o = (t.system - this.lastCpuUsage.system) / n * 100;
                ri.gauge(e, s), ni.gauge(e, o);
            }
            this.lastCpuUsage = t, this.lastCpuTime = r;
        }
    }
    var ci = require("./module-79896.js");
    const li = "ripgrep_invocation_monitor", ui = "ripgrep_invocation_monitor_config", di = {
        windowMs: 1e4,
        threshold: 50,
        maxRecords: 100,
        cooldownMs: 3e5,
        reportToSentry: !0
    };
    async function pi(e, t) {
        let r = !1;
        try {
            r = await H.cursor.checkFeatureGate(li);
        } catch  {
            r = !1;
        }
        if (!r) return;
        let n = di;
        try {
            const e = await H.cursor.getDynamicConfigValue(ui);
            e && (n = {
                windowMs: e.window_ms ?? di.windowMs,
                threshold: e.threshold ?? di.threshold,
                maxRecords: e.max_records ?? di.maxRecords,
                cooldownMs: e.cooldown_ms ?? di.cooldownMs,
                reportToSentry: e.report_to_sentry ?? di.reportToSentry
            });
        } catch  {
            n = di;
        }
        const s = [];
        let o = 0;
        (0, L.o9_)((e)=>{
            try {
                s.push(e);
                const r = Math.max(1, n.maxRecords, n.threshold);
                s.length > r && s.splice(0, s.length - r);
                const i = e.timestamp, a = i - n.windowMs;
                let c = 0;
                for(let e = s.length - 1; e >= 0 && s[e].timestamp >= a; e--)c++;
                if (c < n.threshold) return;
                if (!n.reportToSentry) return;
                if (i - o < n.cooldownMs) return;
                o = i, ((e, r)=>{
                    const o = r - n.windowMs, i = s.filter((e)=>e.timestamp >= o), a = {}, c = {};
                    for (const e of i)a[e.source] = (a[e.source] ?? 0) + 1, c[e.mode] = (c[e.mode] ?? 0) + 1;
                    const l = Object.entries(a).sort((e, t)=>t[1] - e[1])[0]?.[0] ?? "unknown", u = i.length > 0 ? i[0].timestamp : r, d = n.windowMs > 0 ? e / n.windowMs * 1e3 : 0;
                    try {
                        H.cursor.captureException(new Error(`Excessive ripgrep invocations (agent-exec): ${e} spawns in ${n.windowMs}ms`), {
                            client_error_type: "ripgrep_invocation_storm",
                            force_upload: "forced",
                            top_source: l,
                            "event.process": "extension-host"
                        }, {
                            level: "warning",
                            fingerprint: [
                                "ripgrep-invocation-storm",
                                "agent-exec",
                                l
                            ],
                            extra: {
                                windowCount: e,
                                windowMs: n.windowMs,
                                threshold: n.threshold,
                                maxRecords: n.maxRecords,
                                bufferSize: s.length,
                                distinctSources: Object.keys(a).length,
                                windowSpanMs: r - u,
                                ratePerSec: d.toFixed(1),
                                sourceCounts: JSON.stringify(a),
                                modeCounts: JSON.stringify(c)
                            },
                            jsonAttachments: [
                                {
                                    filename: "ripgrep-invocations.json",
                                    json: JSON.stringify({
                                        schemaVersion: 1,
                                        description: "Most recent ripgrep spawns from the agent-exec paths (agent grep/glob tool + ripwalk) before the storm threshold was crossed. No raw query text or paths are included.",
                                        windowMs: n.windowMs,
                                        threshold: n.threshold,
                                        windowCount: e,
                                        sourceCounts: a,
                                        modeCounts: c,
                                        records: s
                                    }, null, 2)
                                }
                            ]
                        }), t?.(`[ripgrep-monitor] reported storm: ${e} spawns in ${n.windowMs}ms (top=${l})`);
                    } catch (e) {
                        t?.(`[ripgrep-monitor] report failed: ${String(e)}`);
                    }
                })(c, i);
            } catch  {}
        }), e.push(()=>(0, L.o9_)(void 0)), t?.(`[ripgrep-monitor] enabled (window=${n.windowMs}ms threshold=${n.threshold} maxRecords=${n.maxRecords} report=${n.reportToSentry})`);
    }
    var mi = require("./module-47859.js"), hi = require("./module-91943.js"), fi = require("./module-87016.js");
    const gi = 1, yi = 2, wi = 3;
    function vi(e) {
        switch(e.installMode){
            case gi:
            case "EFFECTIVE_PLUGIN_INSTALL_MODE_USER":
                return "user";
            case yi:
            case "EFFECTIVE_PLUGIN_INSTALL_MODE_TEAM_DEFAULT":
                return "team-default";
            case wi:
            case "EFFECTIVE_PLUGIN_INSTALL_MODE_TEAM_REQUIRED":
                return "team-required";
            default:
                return !0 === e.isTeamRequired ? "team-required" : "user";
        }
    }
    const _i = "plugin_mcp_census", bi = "mcp_plugin_census", Si = "MCP plugin census", ki = "local";
    class xi {
        constructor(e){
            this.emit = e;
        }
        report(e) {
            const t = function(e) {
                return [
                    e.execHostRemoteName,
                    e.pluginHomeDirHash,
                    e.pluginsLoaded,
                    e.retainedFromPreviousLoad,
                    e.wasFirstLoad,
                    e.sourceUnavailable,
                    e.mcpDescriptorsProduced
                ].join("|");
            }(e);
            t !== this.lastSignature && (this.lastSignature = t, this.emit(e));
        }
    }
    async function Ei(e) {
        return {
            plugins: await e.getAllEnabledPlugins(),
            loadFailures: e.getLoadFailures(),
            pluginSetIncomplete: e.isPluginSetIncomplete()
        };
    }
    function Ii(e) {
        return void 0 !== e && "config" in e ? Object.keys(e.config.hooks) : [];
    }
    async function Ti(e) {
        try {
            const t = await (0, hi.readFile)(e, "utf-8");
            return JSON.parse(t);
        } catch  {
            return null;
        }
    }
    function Ci(e) {
        const { pluginsService: t, pluginMcpService: r, pluginHooksService: n, pluginCommandsService: s, githubPluginsStore: o, refreshPlugins: i, pluginMetricsLogger: a, backendMarketplaceClient: c, workspacePaths: l, requestRefreshSchedule: u, secretStorage: d, primitiveAuthorshipResolver: p, sparsePluginClones: m } = e, h = "localPluginVariables:", f = new xi((e)=>{
            a.log("info", Si, {
                ...e
            }), Ro({
                subkey: _i,
                message: Si,
                metadata: {
                    event: bi,
                    ...e
                }
            });
        }), g = async (e)=>Promise.all(e.map(async (e)=>{
                const t = e.identifier.sourceInfo.name, r = e.identifier.source, n = (0, ge.xJd)(e.identifier) ?? (0, ge.s4m)(e.identifier), s = "cursor-first-party" === e.identifier.source || "cursor-third-party" === e.identifier.source || "claude-plugin" === e.identifier.source ? e.identifier.sourceInfo.version : void 0, o = "extension" === e.identifier.source ? e.identifier.sourceInfo.localPath : void 0, i = "extension" === e.identifier.source ? e.identifier.sourceInfo.extensionId : void 0;
                let a;
                if ("user-local" === r) try {
                    const e = await d.get(`${h}${t}`);
                    e && (a = JSON.parse(e));
                } catch  {}
                const c = (0, ge.R3Q)(e.identifier), l = void 0 !== e.hooks && "config" in e.hooks, u = Ii(e.hooks);
                return {
                    id: n,
                    name: t,
                    source: r,
                    version: s,
                    manifestVersion: e.version,
                    homepageUrl: e.homepage,
                    repositoryUrl: e.repository,
                    ...void 0 !== c && {
                        marketplace: c
                    },
                    installPath: e.installPath,
                    localPath: o,
                    extensionId: i,
                    loadError: e.loadError,
                    logoUrl: e.logoUrl,
                    skillsCount: e.skills.length,
                    agentsCount: e.agents.length,
                    commandsCount: e.commands.length,
                    hasHooks: l,
                    hooksCount: u.length,
                    mcpServersCount: e.mcpConfig?.mcpServers ? Object.keys(e.mcpConfig.mcpServers).length : 0,
                    skillNames: e.skills.map((e)=>e.name ?? e.path),
                    agentNames: e.agents.map((e)=>e.name),
                    ruleNames: e.rules.map((e)=>e.name),
                    commandNames: e.commands.map((e)=>e.name),
                    hookNames: u,
                    mcpServerNames: e.mcpConfig?.mcpServers ? Object.keys(e.mcpConfig.mcpServers) : [],
                    capabilities: e.capabilities,
                    variablesSchema: e.variablesSchema,
                    configuredVariables: a
                };
            })), y = (e, t, r)=>{
            const n = e.identifier.sourceInfo, s = e.hooks && "config" in e.hooks ? e.hooks.sourcePath : void 0;
            return {
                rawIdentifier: t,
                name: n.name,
                displayName: e.displayName ?? n.name,
                description: e.description ?? "",
                sources: r,
                projectInstallKey: r.includes("project") ? t : void 0,
                publisherName: e.authorName,
                skills: e.skills.map((e)=>({
                        name: e.name || e.path,
                        description: e.description,
                        sourcePath: e.path
                    })),
                subagents: e.agents.map((e)=>({
                        name: e.name,
                        description: e.description,
                        sourcePath: e.path
                    })),
                rules: e.rules.map((e)=>({
                        name: e.name,
                        description: e.description,
                        sourcePath: e.path
                    })),
                commands: e.commands.map((e)=>({
                        name: e.name,
                        description: e.description,
                        sourcePath: e.path
                    })),
                hooks: Ii(e.hooks).map((e)=>({
                        name: e,
                        sourcePath: s
                    })),
                mcpServers: e.mcpConfig?.mcpServers ? Object.keys(e.mcpConfig.mcpServers).map((t)=>({
                        name: t,
                        sourcePath: e.mcpConfig?.mcpServerSourcePaths?.[t]
                    })) : []
            };
        }, w = (e, t = 0)=>(e.sort((e, t)=>e.rawIdentifier.localeCompare(t.rawIdentifier)), e.map((e, r)=>({
                    plugin: {
                        id: -(t + r + 1),
                        name: e.name,
                        displayName: e.displayName,
                        description: e.description,
                        ...void 0 !== e.publisherName && e.publisherName.trim().length > 0 && {
                            publisher: {
                                name: e.publisherName,
                                displayName: e.publisherName
                            }
                        },
                        skills: e.skills,
                        subagents: e.subagents,
                        rules: e.rules,
                        commands: e.commands,
                        hooks: e.hooks,
                        mcpServers: e.mcpServers
                    },
                    scopes: e.sources,
                    projectInstallKey: e.projectInstallKey
                }))), v = async ()=>{
            const e = [], r = new Set;
            try {
                const { userEnabledPluginIds: n, projectEnabledPluginIds: s } = await async function(e, t) {
                    const r = (0, ko.join)(e, ".claude", "settings.json"), [n, s] = await Promise.all([
                        Ti(r),
                        Promise.all(t.map(async (e)=>{
                            const [t, r] = await Promise.all([
                                Ti((0, ko.join)(e, ".claude", "settings.json")),
                                Ti((0, ko.join)(e, ".claude", "settings.local.json"))
                            ]);
                            return {
                                ...t?.enabledPlugins ?? {},
                                ...r?.enabledPlugins ?? {}
                            };
                        }))
                    ]), o = new Set(Object.entries(n?.enabledPlugins ?? {}).filter(([, e])=>!0 === e).map(([e])=>e)), i = new Set;
                    for (const e of s)for (const [t, r] of Object.entries(e))!0 === r && i.add(t);
                    return {
                        userEnabledPluginIds: o,
                        projectEnabledPluginIds: i
                    };
                }(So.homedir(), l), o = await t.getAllEnabledPlugins();
                for (const t of o){
                    if ("claude-plugin" !== t.identifier.source) continue;
                    const o = t.identifier.sourceInfo, i = "raw" in o && "string" == typeof o.raw ? o.raw : o.name;
                    if (r.has(i)) continue;
                    r.add(i);
                    const a = [];
                    n.has(i) && a.push("user"), s.has(i) && a.push("project"), 0 === a.length && a.push("user"), e.push(y(t, i, a));
                }
            } catch (e) {
                console.error("[cursor-agent-exec] Failed to get imported external plugins:", e);
            }
            return w(e, 0);
        }, _ = async ()=>{
            const e = [], r = new Set;
            try {
                const n = await (0, ge.JJ1)(l), s = await t.getAllEnabledPlugins();
                for (const t of s){
                    if ("cursor-third-party" !== t.identifier.source) continue;
                    const s = t.identifier.sourceInfo, o = s.name;
                    if (r.has(o)) continue;
                    r.add(o);
                    const i = n.find(({ key: e })=>{
                        const t = (0, ge.kXx)(e);
                        return t.name === s.name && t.marketplaceName === s.marketplace;
                    });
                    if (!i) continue;
                    const a = y(t, i.key, [
                        "project"
                    ]);
                    a.projectInstallKey = i.key, e.push(a);
                }
            } catch (e) {
                console.error("[cursor-agent-exec] Failed to get cursor third-party plugins:", e);
            }
            return w(e, 1e6);
        }, b = async (e)=>{
            const t = [];
            try {
                const r = await H.cursor.getEffectiveUserPlugins(e);
                for (const e of r?.plugins ?? [])e.plugin && e.isEnabled && t.push({
                    plugin: e.plugin,
                    source: e.isTeamRequired ? "team" : "user",
                    isTeamRequired: e.isTeamRequired,
                    installMode: vi(e),
                    pinnedGitRef: e.pinnedGitRef,
                    configuredVariables: e.configuredVariables,
                    hasTeamConfiguredVariables: e.hasTeamConfiguredVariables
                });
            } catch (e) {
                throw oe(e) || console.error("[cursor-agent-exec] Failed to get effective user plugins for installed list:", e), e;
            }
            try {
                const e = (await (0, ge.JJ1)(l)).filter((e)=>!e.entry.gitUrl);
                if (e.length > 0) {
                    const r = e.map((e)=>(0, ge.kXx)(e.key)), n = await H.cursor.resolveProjectPlugins(r.map((e)=>({
                            name: e.name,
                            marketplaceName: e.marketplaceName
                        })));
                    for (const r of n?.plugins ?? []){
                        const n = e.find((e)=>{
                            const t = (0, ge.kXx)(e.key);
                            return t.name === r.name && t.marketplaceName === r.marketplace?.name;
                        });
                        t.push({
                            plugin: r,
                            source: "project",
                            projectInstallKey: n?.key
                        });
                    }
                }
            } catch (e) {
                console.error("[cursor-agent-exec] Failed to resolve project plugins for installed list:", e);
            }
            const r = {
                project: 0,
                team: 1,
                user: 2
            }, n = new Map;
            for (const e of t){
                const t = void 0 !== e.plugin.id ? String(e.plugin.id) : void 0;
                if (!t) continue;
                const s = n.get(t);
                if (!s) {
                    n.set(t, {
                        plugin: e.plugin,
                        scopes: [
                            e.source
                        ],
                        projectInstallKey: e.projectInstallKey,
                        isTeamRequired: e.isTeamRequired,
                        installMode: e.installMode,
                        pinnedGitRef: e.pinnedGitRef,
                        configuredVariables: e.configuredVariables,
                        hasTeamConfiguredVariables: e.hasTeamConfiguredVariables
                    });
                    continue;
                }
                s.scopes.includes(e.source) || s.scopes.push(e.source);
                const o = s.scopes[0];
                (void 0 === o || r[e.source] < r[o]) && (s.isTeamRequired = e.isTeamRequired, s.pinnedGitRef = e.pinnedGitRef), void 0 !== e.installMode && (s.installMode = e.installMode), void 0 !== e.hasTeamConfiguredVariables && (s.hasTeamConfiguredVariables = e.hasTeamConfiguredVariables), void 0 !== e.projectInstallKey && (s.projectInstallKey = e.projectInstallKey), n.set(t, s);
            }
            return Array.from(n.values()).map((e)=>({
                    ...e,
                    scopes: [
                        ...e.scopes
                    ].sort((e, t)=>r[e] - r[t])
                }));
        };
        return {
            getPluginMcpServers: async ()=>{
                const e = await r.getPluginMcpServers();
                var n, s;
                return f.report({
                    execHostRemoteName: (n = {
                        diagnostics: t.getLoadDiagnostics(),
                        mcpDescriptorsProduced: e.length,
                        execHostRemoteName: H.env.remoteName
                    }).execHostRemoteName ?? ki,
                    pluginHomeDirHash: (s = n.diagnostics.userHomeDirectory, (0, tr.createHash)("sha256").update(s).digest("hex")),
                    pluginsLoaded: n.diagnostics.pluginsLoaded,
                    retainedFromPreviousLoad: n.diagnostics.retainedFromPreviousLoad,
                    wasFirstLoad: n.diagnostics.wasFirstLoad,
                    sourceUnavailable: n.diagnostics.sourceUnavailable,
                    mcpDescriptorsProduced: n.mcpDescriptorsProduced
                }), e.map((e)=>({
                        ...e,
                        plugin: e.pluginName,
                        pluginSource: "cursor-third-party" === e.pluginSource ? "cursor-first-party" : e.pluginSource
                    }));
            },
            getPluginHooks: async ()=>n.getPluginHooks(),
            getPluginCommands: async ()=>s.getPluginCommands(),
            getLoadedPluginsSummary: async ()=>g((await Ei(t)).plugins),
            getPluginLoadFailures: async ()=>(await Ei(t)).loadFailures,
            getPluginSetIncomplete: async ()=>(await Ei(t)).pluginSetIncomplete,
            getInstalledGitHubPlugins: async ()=>o.listPlugins(),
            addGitHubPlugin: async (e)=>{
                throw new Error("Direct GitHub plugin installs are no longer supported. Use a marketplace instead.");
            },
            removeGitHubPlugin: async (e)=>{
                await o.removePlugin(e), await i();
            },
            removeLocalPlugin: async (e)=>{
                await (0, ge._fm)(e, {
                    userHomeDir: So.homedir(),
                    log: a
                }), await i();
            },
            saveLocalPluginVariables: async (e, t)=>{
                if ((r = e).includes("/") || r.includes("\\") || ".." === r || "." === r) throw new Error(`Invalid local plugin variables key: ${e}`);
                var r;
                await d.store(`${h}${e}`, JSON.stringify(t)), u();
            },
            discoverMarketplacePlugins: async (e, t, r)=>c.discoverMarketplacePlugins(e, t, r),
            parseGitHubRepoForPluginsLocally: async (e, t)=>{
                try {
                    const r = (0, ge.z4A)(e) ? (0, fi.fileURLToPath)(e.trim()) : void 0, n = (0, ko.join)(So.homedir(), ".cursor", "plugins", "marketplaces"), s = void 0 !== r ? await (0, ge.e1t)({
                        localPath: r,
                        pluginMetricsLogger: a
                    }) : await (0, ge.U27)({
                        gitUrl: e,
                        gitRef: t,
                        marketplaceCacheRoot: n,
                        allowNonGitHubHosts: !0,
                        pluginMetricsLogger: a,
                        sparsePluginClones: m
                    }), o = (e)=>new j.ngG({
                            name: e.name,
                            description: e.description
                        }), i = (e)=>new j.Vdt({
                            name: e.name,
                            description: e.description
                        }), c = (e)=>new j.$el({
                            name: e.name,
                            description: e.description
                        }), l = (e)=>new j.Q63({
                            name: e.name,
                            description: e.description
                        }), u = (e)=>new j.UCU({
                            name: e.name,
                            description: e.description
                        }), d = (e)=>new j.tlS({
                            name: e.name,
                            description: e.description
                        });
                    return (0, _t.toPlainMessage)(new j.nXe({
                        marketplaceName: s.marketplaceName,
                        marketplaceDescription: s.marketplaceDescription,
                        defaultBranch: s.defaultBranch,
                        repositoryUrl: s.repositoryUrl,
                        commitSha: s.commitSha,
                        plugins: s.plugins.map((e)=>new j.HvA({
                                name: e.name,
                                displayName: e.displayName,
                                description: e.description,
                                gitPath: e.gitPath,
                                logoUrl: e.logoUrl,
                                variables: e.variables ? _t.Struct.fromJson(e.variables) : void 0,
                                sourceGitUrl: e.externalUrl,
                                sourceGitRef: e.externalRef,
                                skills: e.skills.map(o),
                                subagents: e.subagents.map(i),
                                hooks: e.hooks.map(c),
                                rules: e.rules.map(l),
                                mcpServers: e.mcpServers.map(u),
                                commands: e.commands.map(d),
                                parseError: e.parseError
                            }))
                    }));
                } catch (e) {
                    throw a.captureException(e, {
                        error_type: "parse_github_repo_for_plugins_locally"
                    }), e;
                }
            },
            discoverClaudeMarketplacePayloads: async (e)=>{
                const t = {
                    log: (e, t)=>{
                        a.log("info", `[cc-marketplace-import] ${e}`, t ?? {});
                    }
                };
                try {
                    const { payloads: r } = await (0, ge.kxb)({
                        existingUserMarketplaceNames: e,
                        logger: t
                    });
                    return r.map((e)=>({
                            gitUrl: e.gitUrl,
                            gitRef: e.gitRef,
                            marketplaceName: e.marketplaceName,
                            commitSha: e.commitSha,
                            plugins: e.plugins.map((e)=>({
                                    name: e.name,
                                    displayName: e.displayName,
                                    description: e.description,
                                    gitPath: e.gitPath,
                                    gitUrl: e.gitUrl,
                                    gitRef: e.gitRef,
                                    skills: e.skills,
                                    subagents: e.subagents,
                                    hooks: e.hooks,
                                    rules: e.rules,
                                    mcpServers: e.mcpServers,
                                    commands: e.commands,
                                    logoUrl: e.logoUrl,
                                    variables: e.variables
                                }))
                        }));
                } catch (e) {
                    throw a.captureException(e, {
                        error_type: "discover_claude_marketplace_payloads"
                    }), e;
                }
            },
            installProjectPlugin: async (e)=>{
                const t = l[0];
                if (!t) throw new Error("No workspace path available for project plugin installation");
                "third-party" === e.type ? await (0, ge.YUn)(t, e.key, e.gitInfo) : await (0, ge.QOY)(t, e.key), await i();
            },
            removeProjectPlugin: async (e)=>{
                if (0 === l.length) throw new Error("No workspace path available for project plugin removal");
                await (0, ge.Lsv)(l, e), await i();
            },
            getEffectiveInstalledPlugins: b,
            getPluginsSnapshot: async (e)=>(async function(e) {
                    const [t, r, n, s, o] = await Promise.all([
                        e.getEffectiveInstalledPlugins(),
                        e.getImportedExternalPlugins(),
                        e.getCursorThirdPartyPlugins(),
                        e.getInstalledGitHubPlugins(),
                        e.readLoadedPlugins()
                    ]);
                    return {
                        effectiveInstalledPlugins: t,
                        importedExternalPlugins: r,
                        installedCursorThirdPartyPlugins: n,
                        installedGitHubPlugins: s,
                        ...o
                    };
                })({
                    getEffectiveInstalledPlugins: ()=>b(e),
                    getImportedExternalPlugins: v,
                    getCursorThirdPartyPlugins: _,
                    getInstalledGitHubPlugins: ()=>o.listPlugins(),
                    readLoadedPlugins: async ()=>{
                        const { plugins: e, loadFailures: r, pluginSetIncomplete: n } = await Ei(t);
                        return {
                            loadedPluginsSummary: await g(e),
                            loadFailures: r,
                            pluginSetIncomplete: n
                        };
                    }
                }),
            getPluginComponentFiles: async ()=>{
                const e = await t.getAllEnabledPlugins();
                let r = [];
                try {
                    r = await b(!1);
                } catch (e) {
                    oe(e) || a.log("error", "Failed to resolve installed plugins for component metadata", {
                        error: String(e)
                    });
                }
                const n = new Map;
                for (const e of r){
                    const t = e.plugin;
                    if (void 0 === t.name) continue;
                    n.set(t.name, t);
                    const r = t.marketplace?.name;
                    void 0 !== r && "cursor-public" !== r && n.set(`${t.name}@${r}`, t);
                }
                return Promise.all(e.map(async (e)=>{
                    const t = e.identifier.sourceInfo.name, r = e.identifier.source, s = e.identifier.sourceInfo;
                    let o = t;
                    if ("claude-plugin" === e.identifier.source) {
                        const r = e.identifier.sourceInfo.marketplace;
                        r && "cursor-public" !== r && (o = `${t}@${r}`);
                    } else "cursor-first-party" !== e.identifier.source && "cursor-third-party" !== e.identifier.source || !("marketplace" in s) || "string" != typeof s.marketplace || "cursor-public" === s.marketplace || (o = `${t}@${s.marketplace}`);
                    const i = n.get(o) ?? n.get(t), a = [], c = (e)=>{
                        const t = e.split("/");
                        return t.length >= 2 ? t[t.length - 2] : t[0] ?? e;
                    };
                    for (const t of e.skills)a.push({
                        type: "Skills",
                        name: c(t.path),
                        filePath: (0, ko.join)(e.installPath, t.path),
                        description: t.description
                    });
                    for (const t of e.rules)a.push({
                        type: "Rules",
                        name: t.name,
                        filePath: (0, ko.join)(e.installPath, t.path),
                        description: t.description
                    });
                    for (const t of e.agents)a.push({
                        type: "Subagents",
                        name: t.name,
                        filePath: (0, ko.join)(e.installPath, t.path),
                        description: t.description
                    });
                    for (const t of e.commands)a.push({
                        type: "Commands",
                        name: t.name,
                        filePath: (0, ko.join)(e.installPath, t.path),
                        description: t.description
                    });
                    if (e.hooks && "config" in e.hooks && a.push({
                        type: "Hooks",
                        name: "hooks.json",
                        filePath: e.hooks.sourcePath ?? (0, ko.join)(e.installPath, "hooks", "hooks.json")
                    }), e.mcpConfig?.mcpServers) {
                        const t = (0, ko.join)(e.installPath, ".mcp.json");
                        let r = (0, ko.join)(e.installPath, "mcp.json");
                        try {
                            await (0, hi.access)(t), r = t;
                        } catch  {}
                        for (const t of Object.keys(e.mcpConfig.mcpServers))a.push({
                            type: "MCPs",
                            name: t,
                            filePath: e.mcpConfig.mcpServerSourcePaths?.[t] ?? r
                        });
                    }
                    return {
                        pluginName: t,
                        pluginId: i?.id?.toString(),
                        marketplaceId: i?.marketplace?.id?.toString(),
                        pluginKey: o,
                        pluginSource: r,
                        publisherName: e.authorName,
                        components: a
                    };
                }));
            },
            getPrimitiveAuthorship: async (e)=>p.getPrimitiveAuthorship(e),
            requestRefresh: async ()=>{
                u();
            },
            addExtensionPlugin: async ({ path: e, extensionId: r })=>{
                await t.registerExtensionPlugin({
                    path: e,
                    extensionId: r
                }), await i();
            },
            removeExtensionPlugin: async ({ path: e, extensionId: r })=>{
                await t.unregisterExtensionPlugin({
                    path: e,
                    extensionId: r
                }) && await i();
            }
        };
    }
    const Pi = 5e3;
    async function Ai(e, t, r) {
        const n = [];
        let s = 0;
        const o = Array.from({
            length: Math.min(t, e.length)
        }, ()=>(async function() {
                for(; s < e.length;){
                    const t = s;
                    s += 1;
                    const o = e[t];
                    void 0 !== o && (n[t] = await r(o));
                }
            })());
        return await Promise.all(o), n;
    }
    class Ri {
        constructor(e){
            this.options = e;
        }
        async getPrimitiveAuthorship(e) {
            return Ai(e, 4, async (e)=>{
                const t = function(e) {
                    if (void 0 === e.pluginSource) return;
                    const t = e.publisherName?.trim();
                    return t ? {
                        label: t,
                        kind: "publisher",
                        authorName: t
                    } : void 0;
                }(e) ?? await this.resolveGitAuthorship(e);
                return {
                    sourceId: e.sourceId,
                    authorship: t
                };
            });
        }
        async resolveGitAuthorship(e) {
            if (void 0 === e.pluginSource) try {
                const t = await this.options.gitExecutorPromise, r = (0, f.q6)(), n = (0, ko.dirname)(e.filePath), s = await (0, L.ky5)(r, t, n);
                if (null === s) return;
                const o = (0, ko.relative)(s, e.filePath);
                if (".." === o || o.startsWith(`..${ko.sep}`)) return;
                return function(e) {
                    const t = [
                        ...e.split("\n")
                    ].reverse().find((e)=>e.trim().length > 0);
                    if (void 0 === t) return;
                    const [r, n, s, o] = t.trim().split("\0");
                    return r && n ? {
                        label: n,
                        kind: "git",
                        authorName: n,
                        ...void 0 !== s && s.length > 0 && {
                            authorEmail: s
                        },
                        commitSha: r,
                        ...void 0 !== o && o.length > 0 && {
                            committedAt: o
                        }
                    } : void 0;
                }((await t.exec(r, s, [
                    "log",
                    "--follow",
                    "--diff-filter=AR",
                    "--format=%H%x00%an%x00%ae%x00%aI",
                    "--",
                    o
                ], {
                    timeout: 3e4,
                    caller: "primitiveAuthorship"
                })).stdout);
            } catch (e) {
                return void this.options.logDebug?.(`[primitive-authorship] git authorship failed: ${String(e)}`);
            }
        }
    }
    async function Mi(e) {
        try {
            await e.reload(), e.notifyPluginsChanged();
        } catch (t) {
            throw e.onFailure?.(t), t;
        }
    }
    async function Ji(e) {
        try {
            await Mi(e);
        } catch  {}
    }
    function Oi(e, t) {
        let r;
        return {
            schedule: ()=>{
                r && clearTimeout(r), r = setTimeout(async ()=>{
                    r = void 0, await t();
                }, e);
            },
            dispose: ()=>{
                r && (clearTimeout(r), r = void 0);
            }
        };
    }
    async function Bi() {
        delete process.env.CURSOR_PLUGIN_ROOT, delete process.env.CLAUDE_PLUGIN_ROOT;
    }
    async function Di(e) {
        const { workspacePaths: t, getThirdPartyExtensibilityEnabled: r, getAllowUserLocalPluginImports: n, deactivateTasks: s, context: o, gitExecutorPromise: i } = e, a = new ge.KYw(So.homedir()), c = await H.cursor.getAuthId() ?? "anonymous", l = await H.cursor.checkFeatureGate("enable_marketplace_plugin_logging"), u = H.window.createOutputChannel("Cursor Plugins", {
            log: !0
        }), d = {
            log: (e, t, r)=>{
                const n = `[pluginsSubsystem] ${t}`, s = (new Date).toISOString();
                if (u?.appendLine(`[${s}] [${e}] ${t}`), l) try {
                    switch(e){
                        case "debug":
                            H.cursor.logStructuredDebug("agent_exec", n, r, {
                                disableConsoleFallback: !0
                            });
                            break;
                        case "info":
                            H.cursor.logStructuredInfo("agent_exec", n, r, {
                                disableConsoleFallback: !0
                            });
                            break;
                        case "warn":
                            H.cursor.logStructuredWarn("agent_exec", n, r, {
                                disableConsoleFallback: !0
                            });
                            break;
                        case "error":
                            H.cursor.logStructuredError("agent_exec", n, void 0, r, {
                                disableConsoleFallback: !0
                            });
                            break;
                        default:
                            throw new Error(`Unhandled plugin metrics log level: ${e}`);
                    }
                } catch (e) {
                    console.error("[cursor-agent-exec] Failed to log plugin metrics:", e);
                }
            },
            increment: (e, t, r)=>{
                l && H.cursor.metricsIncrement({
                    stat: e,
                    value: t,
                    tags: r
                });
            },
            distribution: (e, t, r)=>{
                l && H.cursor.metricsDistribution({
                    stat: e,
                    value: t,
                    tags: r
                });
            },
            captureException: (e, t)=>{
                l && H.cursor.captureException(e, t);
            }
        }, p = (0, ko.join)(So.homedir(), ".cursor", "plugins", "marketplaces"), m = await H.cursor.checkFeatureGate("team_marketplace_mcps"), h = await H.cursor.checkFeatureGate("enable_sparse_plugin_clones"), g = await H.cursor.checkFeatureGate("marketplace_origin_distribution");
        let y;
        const w = g ? ()=>(y ??= (async ()=>{
                const e = Date.now();
                await function(e) {
                    if (void 0 !== e.getToken()) return Promise.resolve();
                    const t = e.timeoutMs ?? Pi;
                    return new Promise((r)=>{
                        let n = !1;
                        const s = ()=>{
                            n || (n = !0, clearTimeout(o), i.dispose(), r());
                        }, o = setTimeout(s, t), i = e.onDidChangeToken((e)=>{
                            void 0 !== e && s();
                        });
                        void 0 !== e.getToken() && s();
                    });
                }({
                    getToken: ()=>H.cursor.getCursorAuthToken(),
                    onDidChangeToken: (e)=>H.cursor.onDidChangeCursorAuthToken(e)
                }), (async (e)=>{
                    try {
                        if (d.distribution("marketplace.origin_distribution.auth_wait", Math.min(e, Pi)), void 0 !== H.cursor.getCursorAuthToken()) return;
                        const t = await H.cursor.getAuthId();
                        d.increment("marketplace.origin_distribution.auth_wait.error", 1, {
                            reason: void 0 === t ? "logged_out" : "exthost_lag"
                        });
                    } catch  {}
                })(Date.now() - e);
            })(), y) : void 0, v = (0, ge.NwZ)(async ()=>{
            d.increment("backend_marketplace_client.get_effective_user_plugins.count", 1);
            try {
                return await H.cursor.getEffectiveUserPlugins(!0) ?? {
                    plugins: []
                };
            } catch (e) {
                throw oe(e) || (d.log("error", "Failed to get effective user plugins", {
                    error: String(e)
                }), d.increment("backend_marketplace_client.get_effective_user_plugins.error", 1)), e;
            }
        }, {
            marketplaceCacheRoot: p,
            pluginLogger: d,
            extraGitConfig: ()=>{
                const e = (0, mi.w)(H.cursor.getCursorCreds()?.originBackendUrl);
                return (0, ge.kdU)(H.cursor.getCursorAuthToken(), void 0 !== e ? [
                    e
                ] : []);
            },
            awaitAuthReady: w,
            listOptions: {
                enableInlinePlugins: m
            },
            sparsePluginClones: h
        }), _ = [
            {
                client: v,
                userId: c,
                cacheManager: new ge.WCg(So.homedir())
            },
            {
                client: (0, ge.NwZ)(async ()=>{
                    try {
                        const e = await (0, ge.JJ1)(t);
                        if (0 === e.length) return {
                            plugins: []
                        };
                        const r = e.filter((e)=>e.entry.gitUrl), n = e.filter((e)=>!e.entry.gitUrl), s = r.filter(({ key: e, entry: t })=>{
                            const r = t.gitUrl;
                            return !(r && !(0, ge.QY1)(r)) || (console.warn(`[cursor-agent-exec] Ignoring project plugin with invalid gitUrl in .cursor/settings.json: key=${JSON.stringify(e)} gitUrl=${JSON.stringify(r)}`), !1);
                        }).map(({ key: e, entry: t })=>{
                            const r = (0, ge.kXx)(e);
                            return {
                                plugin: {
                                    name: r.name,
                                    gitUrl: t.gitUrl,
                                    gitRef: t.gitRef,
                                    gitPath: t.gitPath,
                                    marketplace: {
                                        name: r.marketplaceName,
                                        gitUrl: t.gitUrl,
                                        gitRef: t.gitRef
                                    }
                                },
                                isEnabled: !0
                            };
                        }), o = n.length > 0 ? (await H.cursor.resolveProjectPlugins(n.map((e)=>(0, ge.kXx)(e.key)).map((e)=>({
                                name: e.name,
                                marketplaceName: e.marketplaceName
                            }))))?.plugins?.map((e)=>({
                                plugin: e,
                                isEnabled: !0
                            })) ?? [] : [];
                        return {
                            plugins: [
                                ...s,
                                ...o
                            ]
                        };
                    } catch (e) {
                        throw console.error("[cursor-agent-exec] Failed to resolve project plugins:", e), e;
                    }
                }, {
                    marketplaceCacheRoot: p,
                    pluginLogger: d,
                    extraGitConfig: ()=>{
                        const e = (0, mi.w)(H.cursor.getCursorCreds()?.originBackendUrl);
                        return (0, ge.kdU)(H.cursor.getCursorAuthToken(), void 0 !== e ? [
                            e
                        ] : []);
                    },
                    awaitAuthReady: w,
                    listOptions: {
                        enableInlinePlugins: m
                    },
                    sparsePluginClones: h
                }),
                userId: c,
                cacheManager: new ge.WCg(So.homedir()),
                pruneOldVersions: !0
            }
        ], b = new L.Npg(t, So.homedir(), ()=>({
                importThirdPartyPlugins: r(),
                loadUserLocalPlugins: n(),
                loadCursorFirstParty: !0
            }), _, d, async (e)=>{
            try {
                const t = await o.secrets.get(`localPluginVariables:${e}`);
                if (t) return JSON.parse(t);
            } catch  {}
        }), S = new L.gRo(b), k = new L.aAA(b), x = new L.O0K(b), E = {
            reload: async ()=>{
                await b.reload();
            },
            notifyPluginsChanged: ()=>{
                H.cursor.notifyPluginsChanged();
            },
            onFailure: (e)=>{
                ee.warn((0, f.q6)(), "Failed to refresh plugins", {
                    error: String(e)
                });
            }
        }, I = function(e) {
            let t;
            const r = (e, r)=>{
                void 0 !== r && t === e && (t = r);
            };
            return {
                initializeLastSeenUserTeamPluginSignature: async ()=>{
                    const n = t, s = await e.getUserTeamPluginSignatureFromBackend();
                    r(n, s);
                },
                refreshPlugins: async ()=>{
                    const n = t, s = await e.getUserTeamPluginSignatureFromBackend();
                    await e.refreshPluginsStrict(), r(n, s);
                },
                refreshPluginsOnWindowFocus: async ()=>{
                    const n = await e.getUserTeamPluginSignatureFromBackend();
                    if (void 0 === n) return void await e.refreshPluginsBestEffort();
                    const s = t;
                    s !== n && (await e.refreshPluginsStrict(), r(s, n));
                },
                getLastSeenUserTeamPluginSignature: ()=>t
            };
        }({
            getUserTeamPluginSignatureFromBackend: async ()=>{
                try {
                    return function(e, t = {}) {
                        const { enableInlinePlugins: r = !1 } = t, n = [], s = e?.marketplaces ?? [];
                        for (const t of e?.plugins ?? []){
                            if (!t.isEnabled) continue;
                            const e = t.plugin;
                            if (e?.name) if (e.gitUrl) n.push(JSON.stringify([
                                t.isTeamRequired ? "team" : "user",
                                e.name,
                                e.gitUrl,
                                (0, ge.gFi)(t, s),
                                e.gitPath ?? "",
                                e.releaseRepo ?? "",
                                e.releaseAsset ?? "",
                                e.releaseTag ?? ""
                            ]));
                            else {
                                if (!r) continue;
                                n.push(JSON.stringify([
                                    t.isTeamRequired ? "team" : "user",
                                    e.name,
                                    `inline:${e.id ?? ""}`,
                                    String(e.updatedAt ?? "")
                                ]));
                            }
                        }
                        return n.sort(), JSON.stringify(n);
                    }(await H.cursor.getEffectiveUserPlugins(!0) ?? {
                        plugins: []
                    }, {
                        enableInlinePlugins: m
                    });
                } catch (e) {
                    return void (oe(e) || ee.warn((0, f.q6)(), "Failed to fetch effective user/team plugins for focus refresh", {
                        error: String(e)
                    }));
                }
            },
            refreshPluginsStrict: async ()=>{
                await Mi(E);
            },
            refreshPluginsBestEffort: async ()=>{
                await Ji(E);
            }
        });
        I.initializeLastSeenUserTeamPluginSignature();
        const T = async ()=>{
            await I.refreshPlugins();
        }, C = function(e, t) {
            let r, n = 0, s = !1, o = !1, i = !1;
            const a = async ()=>{
                if (!i && !s) {
                    s = !0, n = Date.now();
                    try {
                        await t();
                    } finally{
                        s = !1, o && !i && (o = !1, c());
                    }
                }
            }, c = ()=>{
                if (i) return;
                const t = Date.now(), c = e - (t - n);
                if (c <= 0) return s ? void (o = !0) : void a();
                r || (r = setTimeout(()=>{
                    r = void 0, i || (s ? o = !0 : a());
                }, c));
            };
            return {
                schedule: c,
                dispose: ()=>{
                    i = !0, o = !1, r && (clearTimeout(r), r = void 0);
                }
            };
        }(5e3, async ()=>{
            try {
                await I.refreshPluginsOnWindowFocus();
            } catch  {}
        }), P = Oi(2e3, async ()=>{
            try {
                await T();
            } catch  {}
        });
        let A, R = !1;
        const M = ()=>{
            A ? R = !0 : A = (async ()=>{
                do {
                    R = !1, await T();
                }while (R)
            })().catch((e)=>{
                console.error("[cursor-agent-exec] Failed to refresh plugins after project settings change:", e);
            }).finally(()=>{
                A = void 0;
            });
        }, J = H.workspace.createFileSystemWatcher("**/.cursor/settings.json");
        J.onDidCreate(()=>{
            M();
        }), J.onDidChange(()=>{
            M();
        }), J.onDidDelete(()=>{
            M();
        }), s.push(()=>{
            J.dispose();
        });
        const O = (0, ko.join)(So.homedir(), ".cursor", "plugins", ge.DDg), B = Oi(1e3, async ()=>{
            n() && await Ji(E);
        });
        (async ()=>{
            if (n()) try {
                await (0, hi.mkdir)(O, {
                    recursive: !0
                });
                const e = (0, ci.watch)(O, {
                    recursive: !0
                }, ()=>{
                    B.schedule();
                });
                s.push(()=>{
                    e.close(), B.dispose();
                });
            } catch (e) {
                ee.warn((0, f.q6)(), "Failed to watch user-local plugins directory", {
                    error: String(e)
                });
            }
        })();
        const D = new Map, q = Oi(1e3, async ()=>{
            await Ji(E);
        }), N = Ci({
            pluginsService: b,
            pluginMcpService: S,
            pluginHooksService: k,
            pluginCommandsService: x,
            githubPluginsStore: a,
            refreshPlugins: T,
            pluginMetricsLogger: d,
            backendMarketplaceClient: v,
            workspacePaths: t,
            requestRefreshSchedule: ()=>P.schedule(),
            secretStorage: o.secrets,
            primitiveAuthorshipResolver: new Ri({
                gitExecutorPromise: i,
                logDebug: (e)=>ee.debug((0, f.q6)(), e)
            }),
            sparsePluginClones: h
        }), F = H.cursor.registerPluginsProvider({
            ...N,
            addExtensionPlugin: async (e)=>{
                let t;
                await N.addExtensionPlugin(e);
                try {
                    t = await (0, hi.realpath)(e.path);
                } catch  {
                    t = e.path;
                }
                if (!D.has(t)) try {
                    const e = (0, ci.watch)(t, {
                        recursive: !0
                    }, ()=>{
                        q.schedule();
                    });
                    D.set(t, e);
                } catch (e) {
                    ee.warn((0, f.q6)(), "Failed to watch extension plugin directory", {
                        path: t,
                        error: String(e)
                    });
                }
            },
            removeExtensionPlugin: async (e)=>{
                let t;
                await N.removeExtensionPlugin(e);
                try {
                    t = await (0, hi.realpath)(e.path);
                } catch  {
                    t = e.path;
                }
                const r = D.get(t);
                r && (r.close(), D.delete(t));
            }
        });
        o.subscriptions.push(F), s.push(()=>{
            for (const e of D.values())e.close();
            D.clear(), q.dispose();
        });
        const U = H.window.onDidChangeWindowState((e)=>{
            e.focused && C.schedule();
        }), $ = H.cursor.onDidChangeAllowUserLocalPluginImports(()=>{
            Ji(E);
        });
        return o.subscriptions.push({
            dispose: ()=>{
                U.dispose(), $.dispose(), C.dispose(), P.dispose();
            }
        }), {
            pluginsService: b,
            refreshPluginHooks: Bi
        };
    }
    var qi = require("./module-47462.js");
    class Ni {
        constructor(e){
            this.onChange = e;
        }
        async trackChange(e, t, r, n) {
            const s = {
                path: e,
                before: t,
                after: r,
                metadata: n
            };
            this.onChange && await this.onChange(s);
        }
    }
    function Fi(e) {
        if ("insecure_none" === e.type) return e;
        const { networkAccess: t, skipStatsigDefaults: r, ...n } = e;
        return {
            ...n,
            networkPolicy: t ? (0, G.T6)() : (0, G.Po)(),
            skipStatsigDefaults: r
        };
    }
    function Ui(e) {
        return {
            ...e,
            userConfiguredPolicy: Fi(e.userConfiguredPolicy)
        };
    }
    class Li {
        constructor(e, t){
            this.fetchPermissions = e, this.onDidChangePermissions = t, this.cachedPermissions = e().then(Ui), this.cachedPermissions.then((e)=>{
                this.latestPermissions ??= e;
            }, ()=>{}), this.permissionsSubscription = this.onDidChangePermissions((e)=>{
                const t = Ui(e);
                this.latestPermissions = t, this.cachedPermissions = Promise.resolve(t);
            });
        }
        async getPermissions() {
            return this.cachedPermissions;
        }
        getPermissionsSnapshot() {
            return this.latestPermissions;
        }
        async updatePermissions(e) {}
        dispose() {
            this.permissionsSubscription.dispose();
        }
    }
    class $i {
        constructor(){
            this._isDisposed = !1, this._disposables = [];
        }
        dispose() {
            this._isDisposed || (this._isDisposed = !0, function(e) {
                for(; e.length;){
                    const t = e.pop();
                    t?.dispose();
                }
            }(this._disposables));
        }
        _register(e) {
            return this._isDisposed ? e.dispose() : this._disposables.push(e), e;
        }
        get isDisposed() {
            return this._isDisposed;
        }
    }
    class ji extends $i {
        constructor(){
            super(...arguments), this.writeEmitter = this._register(new H.EventEmitter), this.onDidWrite = this.writeEmitter.event, this.writeBufferEmitter = this._register(new H.EventEmitter), this.onDidWriteBuffer = this.writeBufferEmitter.event, this.closeEmitter = this._register(new H.EventEmitter), this.onDidClose = this.closeEmitter.event, this.isStarted = !1, this.isFirstCommand = !0, this.outputQueue = [], this.isOutputPaused = !1, this.pauseWaiters = [];
        }
        open(e) {
            this.isStarted || (this.isStarted = !0, this.writeBufferEmitter.fire(Buffer.from(this.osc633("P", "HasRichCommandDetection=True"))), this.ensureOutputDrained());
        }
        pause() {
            this.isOutputPaused = !0;
        }
        resume() {
            if (this.isOutputPaused) {
                this.isOutputPaused = !1;
                const e = this.pauseWaiters;
                this.pauseWaiters = [];
                for (const t of e)t();
            }
            this.outputQueue.length > 0 && this.ensureOutputDrained();
        }
        async awaitUnpaused() {
            for(; this.isOutputPaused;)await new Promise((e)=>this.pauseWaiters.push(e));
        }
        close() {
            this.resume(), this.closeEmitter.fire();
        }
        dispose() {
            this.resume(), super.dispose();
        }
        async showCommand(e, t) {
            const r = [];
            this.isFirstCommand || r.push("\r\n"), this.isFirstCommand = !1, r.push(this.osc633("A"));
            const n = t ? "🔒 " : "";
            r.push(`${n}$ `), r.push(this.osc633("B"));
            const s = e.split("\n")[0];
            r.push(this.osc633("E", this.escapeOscValue(s))), r.push(`${s}\r\n`), r.push(this.osc633("C")), await this.emitBufferedData(Buffer.from(r.join("")));
        }
        async handleEvent(e) {
            switch(e.type){
                case "stdout":
                case "stderr":
                    await this.handleShellOutput(e.data);
                    break;
                case "exit":
                    await this.handleExit(e.code ?? 0);
                    break;
                case "stdin_ready":
                case "sandbox_denies":
                    break;
                case "suppressed_output":
                    await this.handleShellOutput(Buffer.from(G.Ls));
                    break;
                default:
                    throw new Error(`Unhandled event type: ${e.type}`);
            }
        }
        async handleShellOutput(e) {
            await this.emitBufferedData(e);
        }
        async handleExit(e) {
            await this.showCommandCompleted(e);
        }
        async showCommandCompleted(e) {
            await this.emitBufferedData(Buffer.from(this.osc633("D", e.toString())));
        }
        async emitBufferedData(e) {
            this.outputQueue.push(e), this.isStarted && await this.ensureOutputDrained();
        }
        async ensureOutputDrained() {
            if (this.isStarted) for(;;){
                if (this.outputDrainPromise) {
                    await this.outputDrainPromise;
                    continue;
                }
                if (0 === this.outputQueue.length || this.isOutputPaused) return;
                const e = this.runOutputDrain();
                this.outputDrainPromise = e;
                try {
                    await e;
                } finally{
                    this.outputDrainPromise === e && (this.outputDrainPromise = void 0);
                }
            }
        }
        async runOutputDrain() {
            for(; !this.isOutputPaused && this.outputQueue.length > 0;){
                const e = this.outputQueue.shift();
                this.writeBufferEmitter.fire(e), await new Promise((e)=>setImmediate(e));
            }
        }
        escapeOscValue(e) {
            return e.replace(/\\/g, "\\\\").replace(/;/g, "\\x3b").replace(/[\x00-\x1f]/g, (e)=>`\\x${e.charCodeAt(0).toString(16).padStart(2, "0")}`);
        }
        osc633(e, ...t) {
            return `]633;${[
                e,
                ...t
            ].filter((e)=>void 0 !== e).join(";")}`;
        }
    }
    class Gi extends $i {
        constructor(e, t = {}){
            super(), this.inner = e, this.shouldSuppressTerminalUiStreaming = t.shouldSuppressTerminalUiStreaming ?? (async ()=>!1), this.shellExecOutputBackpressureEnabled = t.shellExecOutputBackpressureEnabled ?? !1, this.shellExecOutputSuppressionOptions = t.shellExecOutputSuppressionOptions, this.pty = this._register(new ji);
        }
        ensureTerminal(e) {
            this.terminal || this.isDisposed || (this.terminal = H.window.createTerminal({
                name: "Agent Terminal",
                pty: this.pty,
                convertEol: !0,
                iconPath: new H.ThemeIcon("infinity"),
                hideFromUser: !0,
                metadata: {
                    conversationId: e,
                    agentOwned: !0
                }
            }));
        }
        getTerminal() {
            return this.terminal;
        }
        async *execute(e, t, r) {
            if (this.isDisposed) return;
            if (await this.shouldSuppressTerminalUiStreaming()) {
                for await (const n of this.inner.execute(e, t, r))yield n;
                return;
            }
            const n = e.get(te), s = n?.conversationId;
            if (void 0 === s) {
                for await (const n of this.inner.execute(e, t, r))yield n;
                return;
            }
            const o = r?.sandboxPolicy?.perRepo?.type ?? r?.sandboxPolicy?.perUser?.type ?? r?.sandboxPolicy?.teamAdmin?.type, i = "workspace_readonly" === o || "workspace_readwrite" === o;
            this.ensureTerminal(s), await this.pty.showCommand(t, i);
            const a = this.shellExecOutputBackpressureEnabled ? new G.vu({
                ...this.shellExecOutputSuppressionOptions
            }) : void 0;
            try {
                for await (const n of this.inner.execute(e, t, r)){
                    if (void 0 !== a && ("stdout" === n.type || "stderr" === n.type)) {
                        const e = a.record(n.data.length);
                        if (e.noticeJustTriggered) {
                            const e = {
                                type: "stdout",
                                data: Buffer.from(G.Ls)
                            };
                            await this.pty.awaitUnpaused(), await this.pty.handleEvent(e), yield {
                                type: "suppressed_output"
                            };
                        }
                        if (!e.shouldForward) {
                            yield n;
                            continue;
                        }
                    }
                    await this.pty.awaitUnpaused(), await this.pty.handleEvent(n), yield n;
                }
            } finally{
                a?.dispose();
            }
        }
        async getCwd() {
            return this.inner.getCwd();
        }
        clone(e) {
            return this.inner.clone(e);
        }
        dispose() {
            this.isDisposed || (this.terminal && (this.terminal.dispose(), this.terminal = void 0), super.dispose());
        }
    }
    class zi {
        constructor(e, t){
            this.vscodeHookExecutor = e, this.configTracker = t;
        }
        async executeHookForStep(e, t) {
            if (!this.configTracker.hasHookForRequest(e, t)) return;
            return await this.vscodeHookExecutor.executeHookForStep(e, t);
        }
    }
    class Wi {
        constructor(e){
            this.approvalHandler = e;
        }
        async requestApproval(e) {
            if (e.toolCallId) {
                const t = {
                    toolCallId: e.toolCallId,
                    operation: {
                        type: e.type,
                        details: e.details
                    }
                };
                return this.approvalHandler(t);
            }
            return {
                approved: !0
            };
        }
        async requestReadApproval(e) {
            if (e.toolCallId) {
                const t = {
                    toolCallId: e.toolCallId,
                    operation: {
                        type: e.type,
                        details: e.details
                    }
                };
                return this.approvalHandler(t);
            }
            return {
                approved: !0
            };
        }
    }
    const Hi = new WeakSet;
    function Ki(t) {
        if (t instanceof e.R10) return t.getWakeupRevision();
    }
    class Vi {
        constructor(e){
            this.elicitationHandler = e;
        }
        createProvider(e, t, r) {
            return new Yi(this.elicitationHandler, e, t, r);
        }
    }
    class Yi {
        constructor(e, t, r, n){
            this.elicitationHandler = e, this.serverName = t, this.toolName = r, this.toolCallId = n;
        }
        async elicit(e) {
            return this.elicitationHandler(this.serverName, this.toolName, this.toolCallId, e);
        }
    }
    const Qi = ko.join(So.homedir(), ".cursor", "sandbox.json");
    class Xi {
        constructor(e){
            this.conflictNoticeSessions = new Map, this.retainedConflictNoticeKeys = new Set, this.conflictNoticeKeyOwners = new Map, this.conflictNoticeSessionStarts = new Map, this.sharedConflictClaimState = (0, mt.createConflictNoticeClaimState)(), this.ignoreService = e.ignoreService, this.teamSettingsService = e.teamSettingsService, this.terminalProvider = e.terminalProvider, this.createTerminalExecutor = e.createTerminalExecutor, this.projectDir = e.projectDir, this.workspacePaths = e.workspacePaths, this.gitExecutor = e.gitExecutor, this.grepProvider = e.grepProvider, this.diagnosticsProvider = e.diagnosticsProvider, this.getCanvasDiagnostics = e.getCanvasDiagnostics, this.mcpLease = e.mcpLease, this.getOrCreateMcpStateAccessor = e.getOrCreateMcpStateAccessor, this.cursorRulesService = e.cursorRulesService, this.subagentsService = e.subagentsService, this.codebaseReferenceProvider = e.codebaseReferenceProvider, this.getOrCreateSharedRequestContextExecutor = e.getOrCreateSharedRequestContextExecutor, this.terminalPathHint = e.terminalPathHint, this.hooksConfigTracker = e.hooksConfigTracker, this.adminNetworkControlsEnabled = e.adminNetworkControlsEnabled, this.configuredMcpMetaToolEnabled = e.mcpMetaToolEnabled, this.mcpMetaToolSlimDescriptors = e.mcpMetaToolSlimDescriptors, this.alwaysExposeVirtualMcpAuthTool = e.alwaysExposeVirtualMcpAuthTool, this.mcpAllowlistLog = e.mcpAllowlistLog, this.getMcpFileSystemOptions = e.getMcpFileSystemOptions, this.shellOutputBackpressureOptions = e.shellOutputBackpressureOptions, this.shellExecOutputSuppressionOptions = e.shellExecOutputSuppressionOptions, this.powershellUtf8Console = e.powershellUtf8Console, this.createSessionExecManager = this.createSessionExecManager.bind(this), this.perUserSandboxPolicy = function(e, t) {
                try {
                    const r = ci.readFileSync(e, "utf-8"), n = JSON.parse(r), s = (0, G.$6)(n);
                    return (0, G.l7)(s, t);
                } catch  {
                    return;
                }
            }(Qi, So.homedir());
        }
        createSessionExecManager(t, r, n, s, o, i, a, c, l, u) {
            const d = u?.mcpMetaToolEnabled ?? this.configuredMcpMetaToolEnabled, p = u?.mcpLease ?? this.mcpLease, m = function(t, r) {
                const n = r.filter((t)=>t.providerIdentifier !== e.iKs);
                if (0 === n.length) return t;
                const s = {
                    getState: async (e)=>{
                        const r = await t.getState(e), s = r.servers.map((e)=>({
                                ...e,
                                tools: [
                                    ...e.tools
                                ]
                            }));
                        let o = !1;
                        for (const e of n){
                            let t = s.find((t)=>t.serverIdentifier === e.clientKey);
                            void 0 === t && (t = {
                                serverName: e.providerIdentifier,
                                serverIdentifier: e.clientKey,
                                tools: [],
                                instructions: []
                            }, s.push(t), o = !0), t.tools.some((t)=>t.toolName === e.toolName) || (t.tools.push(e), o = !0);
                        }
                        return o ? {
                            servers: s
                        } : r;
                    }
                }, o = t.onDidChange?.bind(t);
                return void 0 !== o && (s.onDidChange = o), s;
            }(this.getOrCreateMcpStateAccessor(), u?.mcpTools ?? []), h = 0 === o.length ? [
                So.homedir()
            ] : o, g = i ? {
                mainWorktreePath: i
            } : void 0;
            this.grepProvider.setWorktreeGuardInfo?.(h, g);
            const y = new Wi(r), w = new Li(a, c), v = new L.khl(this.ignoreService, y, w, this.teamSettingsService, h, this.adminNetworkControlsEnabled, this.mcpAllowlistLog ? {
                mcpAllowlistLog: this.mcpAllowlistLog
            } : void 0), _ = new Ni(async (e)=>{
                e.metadata?.toolCallId && await s({
                    path: e.path,
                    before: e.before,
                    after: e.after,
                    metadata: {
                        toolCallId: e.metadata.toolCallId
                    }
                });
            }), b = new Vi(n), S = function() {
                let e, t;
                const r = ()=>(void 0 === e && (e = (async ()=>{
                        try {
                            return await H.cursor.checkFeatureGate("disable_terminal_output_ui_streaming");
                        } catch  {
                            return !1;
                        }
                    })().then((e)=>(t = e, e))), e);
                return r.getResolvedValue = ()=>t, r;
            }();
            S();
            const k = function() {
                if (H.cursor.isGlass && void 0 === H.env.remoteName) return (e)=>{
                    H.commands.executeCommand("glass.headlessShellEvent", e).then(void 0, (e)=>{
                        ee.warn((0, f.q6)(), "Failed to report a headless shell event to Glass", {
                            error: String(e)
                        });
                    });
                };
            }(), x = {
                onShellCreated: ({ shellId: e, command: t, cwd: r, registerEventHandler: n, conversationId: s, abortShell: o, description: i, toolCallId: a })=>!0 === S.getResolvedValue() ? (k && n((0, L.BQk)(e, k)), this.terminalProvider.trackHeadlessShell({
                        shellId: e,
                        command: t,
                        conversationId: s,
                        abortShell: o,
                        description: i,
                        toolCallId: a,
                        onCleanup: k && (()=>k({
                                kind: "exit",
                                shellId: e
                            }))
                    })) : this.terminalProvider.createTerminal({
                        shellId: e,
                        command: t,
                        cwd: r,
                        registerEventHandler: n,
                        conversationId: s,
                        abortShell: o,
                        description: i,
                        isShellExecOutputBackpressureEnabled: ()=>void 0 !== this.shellOutputBackpressureOptions,
                        getShellExecOutputSuppressionOptions: ()=>this.shellExecOutputSuppressionOptions,
                        toolCallId: a
                    })
            }, E = (0, L.hQM)(this.projectDir, x, (e)=>e.get(te)?.conversationId), I = function(e, t) {
                if (Hi.has(e)) return e;
                Hi.add(e);
                const r = e.enqueue.bind(e);
                return e.enqueue = (n)=>{
                    const s = Ki(e);
                    r(n);
                    const o = Ki(e), i = void 0 === s || void 0 === o || o > s, a = n.payload;
                    i && "shell" === a.kind && t.shouldForwardShellOutputCompletion(a) && ("task_progress" === a.reason && e.suppress(n.conversationId, a.taskId), t.enqueueShellOutputCompletion(a));
                }, e;
            }(u?.backgroundWorkRegistry ?? new e.R10, this.terminalProvider), T = this.createTerminalExecutor().clone(h[0]), C = Es({
                sessionId: t
            }), P = new Gi(T, {
                shouldSuppressTerminalUiStreaming: S,
                shellExecOutputBackpressureEnabled: void 0 !== this.shellOutputBackpressureOptions,
                shellExecOutputSuppressionOptions: this.shellExecOutputSuppressionOptions
            }), A = l ? [
                So.homedir()
            ] : this.workspacePaths, R = h.length === A.length && h.every((e, t)=>e === A[t]), M = this.perUserSandboxPolicy ? {
                perUser: this.perUserSandboxPolicy
            } : void 0, J = l ? [
                bo()
            ] : [], O = R ? this.getOrCreateSharedRequestContextExecutor(l ?? !1) : void 0, B = new L.DvK({
                pendingDecisionStore: y,
                fileChangeTracker: _,
                gitExecutor: u?.gitExecutor ?? this.gitExecutor,
                ignoreService: this.ignoreService,
                grepProvider: this.grepProvider,
                permissionsService: v,
                workspacePaths: h,
                worktreeMainPath: i,
                diagnosticsProvider: this.diagnosticsProvider,
                getCanvasDiagnostics: this.getCanvasDiagnostics,
                mcpLease: p,
                mcpStateAccessor: m,
                mcpMetaToolEnabled: d,
                mcpMetaToolSlimDescriptors: this.mcpMetaToolSlimDescriptors,
                alwaysExposeVirtualMcpAuthTool: this.alwaysExposeVirtualMcpAuthTool,
                cursorRulesService: this.cursorRulesService,
                subagentsService: this.subagentsService,
                repositoryProvider: this.codebaseReferenceProvider,
                projectDir: this.projectDir,
                shellManager: void 0,
                _sandboxPolicyResolver: void 0,
                _defaultSandboxPolicy: {
                    type: "insecure_none"
                },
                _defaultSandboxPolicySources: M,
                mcpFileOutputThresholdBytes: void 0,
                backgroundShellFactory: E,
                backgroundWorkRegistry: I,
                mcpElicitationFactory: b,
                createFileWatcher: void 0,
                sharedRequestContextExecutor: O,
                getSandboxEnabled: ()=>{
                    const e = w.getPermissionsSnapshot()?.userConfiguredPolicy;
                    return void 0 !== e && "insecure_none" !== e.type;
                },
                terminalExecutor: P,
                shellExtraEnvProvider: C,
                userTerminalHint: this.terminalPathHint,
                additionalRules: 0 === J.length ? void 0 : J,
                getMcpFileSystemOptions: this.getMcpFileSystemOptions,
                shellOutputBackpressureOptions: this.shellOutputBackpressureOptions,
                powershellUtf8Console: this.powershellUtf8Console
            }), D = new zi(H.cursor.getHookExecutor(), this.hooksConfigTracker), q = new qi.ae(B, D, (e)=>{
                const t = e.get(te);
                return {
                    conversation_id: t?.conversationId ?? "",
                    generation_id: t?.requestId ?? "",
                    model: t?.modelName ?? "",
                    ...t?.parentToolCallId ? {
                        parent_tool_call_id: t.parentToolCallId
                    } : {}
                };
            }, p);
            let N = q;
            const F = ()=>!0, U = u?.conflictNoticeSessionKey?.trim() || void 0, $ = U || t, j = new Set, G = !0 === u?.acquireResolvedConflictNoticeKeys, z = h.length > 0 ? h : [
                this.projectDir
            ], W = ()=>{
                const e = H.workspace.workspaceFolders?.map((e)=>e.uri.fsPath) ?? [], t = new Set, r = [];
                for (const n of [
                    ...z,
                    ...e
                ])0 === n.length || t.has(n) || (t.add(n), r.push(n));
                return r.length > 0 ? r : z;
            };
            this.getOrCreateConflictNoticeSession({
                sessionKey: $,
                isEnabled: F,
                initialConversationId: U,
                getBasePaths: W
            });
            const K = (e)=>{
                if ("object" == typeof e && null !== e && "get" in e && "function" == typeof e.get) return e.get(te)?.conversationId?.trim();
            }, V = (e)=>{
                const t = K(e);
                return void 0 !== t && t.length > 0 ? t : $;
            }, Y = void 0 !== U, Q = new qi.OJ(q, (e)=>{
                const t = V(e);
                return G && !j.has(t) && (j.add(t), this.acquireConflictNoticeKey(t)), this.getOrCreateConflictNoticeSession({
                    sessionKey: t,
                    isEnabled: F,
                    initialConversationId: K(e) ?? U,
                    getBasePaths: W
                }).drain;
            }, function(e = ()=>!0, t) {
                return {
                    wakeForWrittenPath: (r)=>{
                        e() && qr?.wakeForWrittenPath({
                            writtenPath: r,
                            basePaths: t?.()
                        });
                    },
                    wakeExposedMounts: ()=>{
                        e() && qr?.wakeAllRunningSessions();
                    }
                };
            }(F, W), {
                skipPathWriteDrain: ()=>Y && void 0 !== this.conflictNoticeSessions.get($)?.host,
                forceWrittenPathBeforeDrain: bs(F, W),
                resolveWriteBarrierTimeoutMs: Ss(),
                onWriteBarrier: ks(),
                onWakeWrittenPath: (e, t)=>{
                    try {
                        const r = V(t);
                        this.getOrCreateConflictNoticeSession({
                            sessionKey: r,
                            isEnabled: F,
                            initialConversationId: K(t) ?? U,
                            getBasePaths: W
                        }).host.noteDeferredWrittenPaths([
                            e
                        ]);
                    } catch  {}
                }
            }), X = {
                execute: (e, t, r)=>{
                    const n = ("conversationId" in t && "string" == typeof t.conversationId && t.conversationId.trim().length > 0 ? t.conversationId.trim() : void 0) ?? $, { host: s } = this.getOrCreateConflictNoticeSession({
                        sessionKey: n,
                        isEnabled: F,
                        initialConversationId: n === $ ? U : n,
                        getBasePaths: W
                    });
                    return s.execute(e, t, r);
                }
            };
            N = new e.dwX(Q, [
                (0, e.VNS)(e.YhQ, X)
            ]);
            return {
                manager: e.n6O.fromResources(N),
                baseResources: B,
                resources: N,
                unsubscribe: ()=>{
                    w.dispose();
                },
                terminalExecutor: P,
                acquiredConflictNoticeKeys: j
            };
        }
        clearConflictDrain(e) {
            const t = e.trim();
            0 !== t.length && (this.releaseConflictNoticeSessionLeases(t), this.conflictNoticeSessions.delete(t), this.retainedConflictNoticeKeys.delete(t), this.conflictNoticeKeyOwners.delete(t), this.conflictNoticeSessionStarts.delete(t));
        }
        releaseConflictNoticeSessionLeases(e) {
            const t = this.conflictNoticeSessions.get(e);
            void 0 !== t && (t.drain.releaseAllLeased(), t.host.releaseAllLeased());
        }
        noteConflictNoticeSessionStart(e) {
            this.conflictNoticeSessionStarts.has(e) || this.conflictNoticeSessionStarts.set(e, Date.now());
        }
        stampConflictNoticeFloor(e) {
            const t = e.trim();
            0 !== t.length && this.noteConflictNoticeSessionStart(t);
        }
        inheritConflictNoticeFloor(e) {
            const t = e.fromKey.trim(), r = e.toKey.trim();
            if (0 === t.length || 0 === r.length) return;
            const n = this.conflictNoticeSessionStarts.get(t);
            void 0 === n || this.conflictNoticeSessionStarts.has(r) ? this.noteConflictNoticeSessionStart(r) : this.conflictNoticeSessionStarts.set(r, n);
        }
        retainConflictNoticeKey(e) {
            const t = e.trim();
            0 !== t.length && (this.noteConflictNoticeSessionStart(t), this.retainedConflictNoticeKeys.add(t));
        }
        claimConflictNoticeKey(e) {
            const t = e.trim();
            0 !== t.length && (this.noteConflictNoticeSessionStart(t), this.retainedConflictNoticeKeys.delete(t));
        }
        acquireConflictNoticeKey(e) {
            const t = e.trim();
            0 !== t.length && (this.noteConflictNoticeSessionStart(t), this.conflictNoticeKeyOwners.set(t, (this.conflictNoticeKeyOwners.get(t) ?? 0) + 1), this.retainedConflictNoticeKeys.delete(t));
        }
        releaseConflictNoticeKey(e) {
            const t = e.trim();
            if (0 === t.length) return;
            const r = this.conflictNoticeKeyOwners.get(t) ?? 0;
            if (r <= 0) return void this.conflictNoticeKeyOwners.delete(t);
            const n = r - 1;
            n > 0 ? this.conflictNoticeKeyOwners.set(t, n) : (this.conflictNoticeKeyOwners.delete(t), this.retainedConflictNoticeKeys.add(t));
        }
        bindConflictNoticeConversation(e) {
            const t = e.sessionKey.trim(), r = e.conversationId.trim();
            0 !== t.length && 0 !== r.length && (this.inheritConflictNoticeFloor({
                fromKey: t,
                toKey: r
            }), this.conflictNoticeSessions.get(t)?.bindConversationId(r));
        }
        clearRetainedConflictNoticeKeys() {
            for (const e of this.retainedConflictNoticeKeys)this.releaseConflictNoticeSessionLeases(e), this.conflictNoticeSessions.delete(e), this.conflictNoticeKeyOwners.delete(e), this.conflictNoticeSessionStarts.delete(e);
            this.retainedConflictNoticeKeys.clear();
        }
        getOrCreateConflictNoticeSession({ sessionKey: e, isEnabled: t, initialConversationId: r, getBasePaths: n }) {
            const s = this.conflictNoticeSessions.get(e);
            if (void 0 !== s) return void 0 !== r && r.length > 0 && s.bindConversationId(r), s;
            let o = this.conflictNoticeSessionStarts.get(e);
            void 0 === o && (o = Date.now(), this.conflictNoticeSessionStarts.set(e, o));
            const i = {
                current: r
            }, a = {
                drain: new mt.AgentStoreConflictDrain({
                    sources: [
                        _s(t, ()=>i.current)
                    ],
                    sessionStartedAtMs: o,
                    claimState: this.sharedConflictClaimState,
                    quotaNoticesEnabled: !0
                }),
                host: new qi.ng({
                    driver: xs(t, n),
                    sessionStartedAtMs: o,
                    claimState: this.sharedConflictClaimState,
                    quotaNoticesEnabled: !0,
                    resolveForceGraceTimeoutMs: Ss()
                }),
                bindConversationId: (e)=>{
                    const t = e.trim();
                    t.length > 0 && (i.current = t);
                }
            };
            return this.conflictNoticeSessions.set(e, a), a;
        }
    }
    var Zi = require("./module-98995.js");
    function ea(e) {
        const t = function(e) {
            return e.includes("PillTone") || function(e, t, r) {
                return e.includes(r) && e.includes(t);
            }(e, "tone", "PillProps") ? 'Pill.tone is ignored (pills always render neutral) and has no "danger" member. Use Stat, Callout, Chart, or Table rowTone for semantic color.' : e.includes("CardVariant") ? 'Card.variant is only "default" | "borderless". There is no accent variant — use Callout for emphasis.' : e.includes("TableProps") && (e.includes("does not exist") || e.includes("is not assignable") || e.includes("rowHeaderColumn")) ? "Table has no rowHeaderColumn. Props are headers, rows, columnAlign, rowTone, framed, striped, stickyHeader, emptyMessage, and style." : e.includes("CanvasHostTheme") && (e.includes("'colors'") || e.includes('"colors"')) ? "useHostTheme() has no colors group. Use theme.bg.editor, theme.fill.primary, theme.text.primary, theme.stroke.secondary, or theme.accent.primary." : function(e) {
                return !(!e.includes("ChartSeries") && !e.includes("ChartDataPoint")) && (e.includes("data: string") || e.includes("value: string") || e.includes("string[]") || /Type ['"]string['"] is not assignable to type ['"]number['"]/.test(e));
            }(e) ? "Chart series data and ChartDataPoint.value must be numbers, not strings." : void 0;
        }(e);
        return void 0 === t ? e : `${e} ${t}`;
    }
    const ta = "node_modules", ra = ".node_modules.staging-", na = ".node_modules.old-";
    const sa = "tsconfig.json", oa = {
        target: "ES2021",
        module: "ESNext",
        moduleResolution: "bundler",
        jsx: "react-jsx",
        strict: !0,
        noEmit: !0,
        skipLibCheck: !0,
        lib: [
            "ESNext",
            "DOM"
        ]
    }, ia = JSON.stringify({
        compilerOptions: oa,
        include: [
            "*.canvas.tsx"
        ]
    }, null, 2);
    JSON.stringify({
        compilerOptions: {
            ...oa,
            types: []
        },
        include: [
            "*.canvas.tsx"
        ]
    }, null, 2);
    async function aa(e) {
        const t = await ca(e.sdkSourceDir);
        if (void 0 === t) return;
        await async function(e) {
            await (0, W.mkdir)(e, {
                recursive: !0
            });
            if ((await (0, W.lstat)(e)).isSymbolicLink()) throw new Error(`Refusing to bootstrap canvas SDK into symlinked directory: ${e}`);
        }(e.canvasesDir);
        const r = (0, v.join)(e.canvasesDir, ta), n = (0, v.join)(e.canvasesDir, sa), s = e.tsconfigContent ?? ia, o = await ca(r) === t, i = await async function(e, t) {
            try {
                return await (0, W.readFile)(e, "utf-8") === t;
            } catch  {
                return !1;
            }
        }(n, s);
        return o || await async function(e, t, r) {
            const n = (0, v.join)(t, ta), s = `${process.pid}.${++ua}`, o = (0, v.join)(t, `${ra}${s}`), i = (0, v.join)(t, `${na}${s}`);
            await (0, W.cp)(e, o, {
                recursive: !0
            });
            try {
                let e = !1;
                try {
                    await (0, W.rename)(n, i), e = !0;
                } catch (e) {
                    if ("ENOENT" !== e.code) throw e;
                }
                try {
                    await (0, W.rename)(o, n);
                } catch (t) {
                    e && await (0, W.rename)(i, n).catch(da);
                    for(let e = 0; e < 20; e++){
                        if (await ca(n) === r) return;
                        await new Promise((e)=>setTimeout(e, 5));
                    }
                    throw t;
                }
                e && await (0, W.rm)(i, {
                    recursive: !0,
                    force: !0
                }).catch(da);
            } finally{
                await (0, W.rm)(o, {
                    recursive: !0,
                    force: !0
                }).catch(da);
            }
        }(e.sdkSourceDir, e.canvasesDir, t), i || await async function(e, t) {
            const r = `${e}.tmp.${process.pid}.${++la}`;
            await (0, W.writeFile)(r, t, "utf-8"), await (0, W.rename)(r, e);
        }(n, s), {
            canvasesDir: e.canvasesDir,
            tsconfigPath: n
        };
    }
    async function ca(e) {
        try {
            return (await (0, W.readFile)((0, v.join)(e, "canvas-sdk-version"), "utf-8")).trim();
        } catch  {
            return;
        }
    }
    let la = 0;
    let ua = 0;
    function da() {}
    function pa(e) {
        return e.replace(/\\/g, "/");
    }
    class ma {
        constructor(e){
            this.canvasesDir = (0, v.normalize)(e.canvasesDir), this.canvasesDirPrefix = this.canvasesDir.endsWith(v.sep) ? this.canvasesDir : `${this.canvasesDir}${v.sep}`;
            const t = void 0 === e.extraMatchRoot ? [] : "string" == typeof e.extraMatchRoot ? [
                e.extraMatchRoot
            ] : e.extraMatchRoot;
            this.extraMatchRootPrefixes = t.map((e)=>{
                const t = (0, v.normalize)(e);
                return t.endsWith(v.sep) ? t : `${t}${v.sep}`;
            }), this.getExtraMatchRoots = e.getExtraMatchRoots, this.tsResolveAnchor = e.tsResolveAnchor;
            const r = function(e) {
                const t = (0, v.join)(e, "cursor"), r = (0, v.join)(e, "@types", "react");
                return {
                    cursorPackageJson: (0, v.join)(t, "package.json"),
                    cursorCanvasIndex: (0, v.join)(t, "canvas", "index.d.ts"),
                    reactRoot: r,
                    reactIndex: (0, v.join)(r, "index.d.ts"),
                    reactJsxRuntime: (0, v.join)(r, "jsx-runtime.d.ts")
                };
            }((0, v.join)(this.canvasesDir, ta));
            this.resolutionTable = new Map([
                [
                    "cursor/canvas",
                    r.cursorCanvasIndex
                ],
                [
                    "react",
                    r.reactIndex
                ],
                [
                    "react/jsx-runtime",
                    r.reactJsxRuntime
                ],
                [
                    "react/jsx-dev-runtime",
                    r.reactJsxRuntime
                ]
            ]), this.bootstrapReady = aa({
                canvasesDir: this.canvasesDir,
                sdkSourceDir: e.sdkSourceDir
            });
        }
        async getDiagnostics(e) {
            return (await this.getDiagnosticsSnapshot(e))?.diagnostics;
        }
        async getDiagnosticsSnapshot(e) {
            const t = (0, v.normalize)(e);
            if (!t.endsWith(".canvas.tsx") || !this.matchesRoot(t)) return;
            let r;
            try {
                r = await this.bootstrapReady;
            } catch  {
                return;
            }
            if (void 0 === r) return;
            const n = this.loadTypeScript();
            if (!n) return;
            const s = await this.getOrInitCompilerSetup(n);
            if (!s) return;
            let o;
            try {
                o = await (0, W.readFile)(t);
            } catch  {
                return;
            }
            if (!this.matchesRoot(t)) return;
            const i = o.toString("utf8"), a = this.buildProgram(n, s, t, i), c = a.getSourceFile(t) ?? a.getSourceFile(pa(t));
            if (!c) return;
            return {
                diagnostics: [
                    ...a.getSyntacticDiagnostics(c),
                    ...a.getSemanticDiagnostics(c)
                ].map((e)=>this.mapDiagnostic(n, e, c)),
                sourceSha256: (0, tr.createHash)("sha256").update(o).digest("hex")
            };
        }
        matchesRoot(e) {
            if (e.startsWith(this.canvasesDirPrefix)) return !0;
            if (this.extraMatchRootPrefixes.some((t)=>e.startsWith(t))) return !0;
            let t;
            try {
                t = this.getExtraMatchRoots?.();
            } catch  {
                return !1;
            }
            if (void 0 === t) return !1;
            return ("string" == typeof t ? [
                t
            ] : t).some((t)=>{
                const r = (0, v.normalize)(t), n = r.endsWith(v.sep) ? r : `${r}${v.sep}`;
                return e.startsWith(n);
            });
        }
        loadTypeScript() {
            return this.tsModule || (this.tsModule = function(e) {
                try {
                    return (0, Zi.createRequire)((0, v.join)(e, "package.json"))("typescript");
                } catch  {}
                try {
                    if ("function" == typeof require) return require("typescript");
                } catch  {}
            }(this.tsResolveAnchor)), this.tsModule;
        }
        getOrInitCompilerSetup(e) {
            if (this.compilerSetup) return this.compilerSetup;
            const t = (async ()=>{
                const t = (0, v.join)(this.canvasesDir, sa);
                let r;
                try {
                    r = await (0, W.readFile)(t, "utf-8");
                } catch  {
                    return;
                }
                const n = e.readConfigFile(t, ()=>r);
                if (n.error) return;
                const s = e.parseJsonConfigFileContent(n.config, e.sys, this.canvasesDir);
                return {
                    options: s.options,
                    sdkSourceFileCache: new Map,
                    moduleResolutionCache: e.createModuleResolutionCache(this.canvasesDir, (e)=>e, s.options)
                };
            })();
            return this.compilerSetup = t, t.then((e)=>{
                void 0 === e && this.compilerSetup === t && (this.compilerSetup = void 0);
            }, ()=>{
                this.compilerSetup === t && (this.compilerSetup = void 0);
            }), t;
        }
        buildProgram(e, t, r, n) {
            const s = e.createCompilerHost(t.options), o = s.getSourceFile.bind(s), i = t.sdkSourceFileCache, a = t.moduleResolutionCache, c = this.resolutionTable, l = pa(r);
            return s.getSourceFile = (t, s, a, c)=>{
                if (t === r || pa(t) === l) return e.createSourceFile(t, n, s, !0, e.ScriptKind.TSX);
                if (i.has(t)) return i.get(t);
                const u = o(t, s, a, c);
                return i.set(t, u), u;
            }, s.resolveModuleNameLiterals = (t, r, n, o)=>t.map((t)=>{
                    const i = c.get(t.text);
                    return void 0 !== i ? {
                        resolvedModule: {
                            resolvedFileName: i,
                            extension: e.Extension.Dts,
                            isExternalLibraryImport: !0
                        }
                    } : e.resolveModuleName(t.text, r, o, s, a, n);
                }), e.createProgram({
                rootNames: [
                    r
                ],
                options: t.options,
                host: s
            });
        }
        mapDiagnostic(e, t, r) {
            const n = e.flattenDiagnosticMessageText(t.messageText, "\n"), s = void 0 !== t.code ? `TS${t.code}` : void 0;
            let o = {
                line: 0,
                character: 0
            }, i = {
                line: 0,
                character: 0
            };
            if (void 0 !== t.start) {
                const e = r.getLineAndCharacterOfPosition(t.start);
                o = {
                    line: e.line,
                    character: e.character
                };
                const n = t.start + (t.length ?? 0), s = r.getLineAndCharacterOfPosition(n);
                i = {
                    line: s.line,
                    character: s.character
                };
            }
            let a = 1;
            switch(t.category){
                case e.DiagnosticCategory.Error:
                    a = 1;
                    break;
                case e.DiagnosticCategory.Warning:
                    a = 2;
                    break;
                case e.DiagnosticCategory.Message:
                case e.DiagnosticCategory.Suggestion:
                    a = 3;
            }
            return {
                range: {
                    start: o,
                    end: i
                },
                severity: a,
                code: s,
                message: ea(n)
            };
        }
    }
    var ha = require("./module-37067.js"), fa = require("./module-38522.js");
    const ga = String.fromCodePoint(39), ya = (e)=>`${ga}${e}${ga}`, wa = ya("none"), va = ya("unsafe-inline");
    [
        [
            "default-src",
            wa
        ],
        [
            "script-src",
            va,
            "blob:"
        ],
        [
            "sandbox",
            "allow-scripts"
        ],
        [
            "style-src",
            va
        ],
        [
            "img-src",
            "data:",
            "blob:"
        ],
        [
            "font-src",
            "data:"
        ],
        [
            "connect-src",
            wa
        ],
        [
            "worker-src",
            wa
        ],
        [
            "child-src",
            wa
        ],
        [
            "frame-src",
            wa
        ],
        [
            "object-src",
            wa
        ],
        [
            "base-uri",
            wa
        ],
        [
            "form-action",
            wa
        ]
    ].map((e)=>e.join(" ")).join("; "), [
        "accelerometer",
        "camera",
        "geolocation",
        "gyroscope",
        "magnetometer",
        "microphone",
        "payment",
        "usb",
        "clipboard-read",
        "clipboard-write"
    ].map((e)=>`${e}=()`).join(", "), String.raw`\u003c`, String.raw`\u003e`, String.raw`\u0026`, String.raw`\u2028`, String.raw`\u2029`;
    const _a = '-apple-system, BlinkMacSystemFont, "Segoe WPC", "Segoe UI", system-ui, "Ubuntu", "Droid Sans", sans-serif';
    require("./module-13405.js"), require("./module-67592.js"), require("./module-31293.js"), require("./module-87492.js"), require("./module-35100.js"), require("./module-41403.js");
    var ba = require("./module-49038.js"), Sa = require("./module-81208.js");
    function ka(e) {
        return "number" == typeof e && Number.isInteger(e) && e > 0 ? e : void 0;
    }
    function xa(e) {
        if ("object" != typeof e || null === e) return;
        const t = e;
        switch(t.type){
            case "openAgent":
                return "string" == typeof t.agentId && t.agentId.length > 0 ? {
                    type: "openAgent",
                    agentId: t.agentId
                } : void 0;
            case "newComposerChat":
                {
                    if (void 0 === t.userPrompt) return {
                        type: "newComposerChat"
                    };
                    if ("string" != typeof t.userPrompt) return;
                    const e = t.userPrompt.trim();
                    return e.length > 0 ? {
                        type: "newComposerChat",
                        userPrompt: e
                    } : {
                        type: "newComposerChat"
                    };
                }
            case "openFile":
                {
                    if ("string" != typeof t.path) return;
                    const e = t.path.trim();
                    if (0 === e.length) return;
                    const r = function(e) {
                        if (void 0 === e) return;
                        if ("object" != typeof e || null === e) return;
                        const t = e, r = ka(t.startLineNumber);
                        if (void 0 === r) return;
                        const n = ka(t.startColumn), s = ka(t.endLineNumber), o = ka(t.endColumn);
                        return void 0 !== t.startColumn && void 0 === n || void 0 !== t.endLineNumber && void 0 === s || void 0 !== t.endColumn && void 0 === o ? void 0 : {
                            startLineNumber: r,
                            ...void 0 !== n ? {
                                startColumn: n
                            } : {},
                            ...void 0 !== s ? {
                                endLineNumber: s
                            } : {},
                            ...void 0 !== o ? {
                                endColumn: o
                            } : {}
                        };
                    }(t.selection);
                    if (void 0 !== t.selection && void 0 === r) return;
                    return {
                        type: "openFile",
                        path: e,
                        ...void 0 !== r ? {
                            selection: r
                        } : {}
                    };
                }
            default:
                return;
        }
    }
    var Ea = require("./module-76576.js");
    const Ia = "canvases", Ta = ".canvas.bundle.gz", Ca = 5e6, Pa = 1;
    function Aa(e) {
        return {
            version: Pa,
            runtimeEsm: e.runtimeEsm,
            userModule: e.userModule
        };
    }
    function Ra(e) {
        const t = e.trimStart();
        if (!t.startsWith("{")) return {
            kind: "legacy-esm",
            source: e
        };
        try {
            const e = JSON.parse(t);
            if (function(e) {
                if (!e || "object" != typeof e) return !1;
                const t = e;
                return t.version === Pa && "string" == typeof t.runtimeEsm && "string" == typeof t.userModule;
            }(e)) return {
                kind: "bundle-v1",
                bundle: e
            };
        } catch  {}
        return {
            kind: "legacy-esm",
            source: e
        };
    }
    function Ma(e) {
        return e.toLowerCase().endsWith(Ta);
    }
    function Ja(e, t, r = Ca) {
        return function(e, t) {
            const r = Buffer.byteLength(JSON.stringify(t), "utf-8");
            return e.length + r + 64;
        }(e, t) <= r;
    }
    (0, require("./module-57975.js").promisify)(fa.gzip);
    const Oa = {
        level: 9
    };
    function Ba(e) {
        return Buffer.from(JSON.stringify(e), "utf-8");
    }
    function Da(e) {
        return t = Ba(e), (0, fa.gzipSync)(t, Oa);
        var t;
    }
    const qa = "--cursor-canvas-viewport-height";
    function Na() {
        const e = "calc(100vh - 48px)", t = function({ viewportHeight: e, legacyPreviewViewportHeight: t }) {
            return `#root{${qa}:${e}}${void 0 === t ? "" : `#root:is([style*="min-height:0"],[style*="min-height: 0"]){${qa}:${t}}`}#root>:only-child:is([style^="height:100%;"],[style^="height: 100%;"],[style*=";height:100%;"],[style*="; height: 100%;"]){min-height:var(${qa})!important}`;
        }({
            viewportHeight: e,
            legacyPreviewViewportHeight: "100vh"
        });
        return `html,body{min-height:100vh}body{padding:24px 32px}#root{min-height:${e};width:100%;margin:0 auto;overflow-x:auto;position:relative;contain:paint}${t}${function({ inlinePadding: e, extraRules: t = "" } = {}) {
            const r = "calc(100vh - 32px)";
            return `@media (max-width: 479.98px){body{padding:${void 0 === e ? "16px" : `16px ${e}`}}#root{min-height:${r};${qa}:${r}}${t}}`;
        }()}:root{--cursor-canvas-focus-ring-width:1px;--cursor-canvas-focus-ring-offset:2px;--cursor-canvas-focus-ring-radius:4px}*:focus,*:focus-visible{outline:none}*:focus-visible{outline:var(--cursor-canvas-focus-ring-width) solid var(--cursor-canvas-focus-ring-color,currentColor);outline-offset:var(--cursor-canvas-focus-ring-offset)}:where(a[href],[role="link"]):focus-visible{border-radius:var(--cursor-canvas-focus-ring-radius)}`;
    }
    function Fa(e) {
        return e.replace(/^\s*import\b[\s\S]*?;\s*$/gm, "");
    }
    const Ua = (0, g.h)("canvas-server:http-server");
    let La;
    async function $a() {
        return La ??= await Promise.resolve().then(require.t.bind(require, 41503, 19)), La;
    }
    const ja = /spawn\s+\S+\s+(ENOENT|EACCES|EPERM|ENOEXEC|ENOTDIR)\b/;
    let Ga, za = 0, Wa = !1;
    function Ha(e, t) {
        if (Wa) return;
        Wa = !0;
        const r = function() {
            const e = function() {
                const e = process.env.PATH;
                if (!e) return;
                const t = "win32" === process.platform ? [
                    "node.exe",
                    "node.cmd"
                ] : [
                    "node"
                ];
                for (const r of e.split(v.delimiter))if (r) for (const e of t){
                    const t = v.join(r, e);
                    try {
                        if (rr.existsSync(t)) return t;
                    } catch  {}
                }
                return;
            }();
            if (!e) return "absent";
            const t = function(e) {
                try {
                    const t = (0, w.execFileSync)(e, [
                        "--version"
                    ], {
                        cwd: fe.tmpdir(),
                        encoding: "utf8",
                        timeout: 2e3,
                        stdio: [
                            "ignore",
                            "pipe",
                            "ignore"
                        ]
                    }).trim(), r = /^v?(\d+)\./.exec(t);
                    return r ? Number.parseInt(r[1], 10) : void 0;
                } catch  {
                    return;
                }
            }(e);
            return void 0 === t ? "unusable" : t >= 18 ? "satisfies" : "unusable";
        }();
        if ("satisfies" === r) return;
        if (!e) return;
        const n = v.dirname(e), s = process.env.PATH ?? "";
        if ("absent" === r) {
            if (s.split(v.delimiter).includes(n)) return;
            return process.env.PATH = s ? `${s}${v.delimiter}${n}` : n, void Ua.info(t, "Appended bundled node to PATH for esbuild-wasm (no node found on PATH)");
        }
        const o = s.split(v.delimiter).filter((e)=>e && e !== n);
        process.env.PATH = [
            n,
            ...o
        ].join(v.delimiter), Ua.info(t, "Prepended bundled node to PATH for esbuild-wasm (resolved node is too old or unusable from an arbitrary directory)", {
            requiredMajor: 18
        });
    }
    const Ka = "canvas-runtime.esm.js", Va = `/runtime/${Ka}`, Ya = 1048576, Qa = 5e6, Xa = 2e7;
    function Za(e, t, r) {
        return `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>Canvas</title>\n  <style>*{margin:0;padding:0;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:rgba(121,121,121,0.4) transparent}${Na()}::-webkit-scrollbar{width:8px;height:8px;background:transparent}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:rgba(121,121,121,0.4);border-radius:4px}::-webkit-scrollbar-thumb:hover{background:rgba(121,121,121,0.7)}::-webkit-scrollbar-corner{background:transparent}</style>\n</head>\n<body>\n  <div id="root"></div>\n  ${function(e, t) {
            const r = t ? `?token=${t}` : "";
            return `\n<script>\n(function() {\n  var canvasId = ${JSON.stringify(e)};\n  var tokenParam = ${JSON.stringify(r)};\n  var isPreview = false;\n  try {\n    isPreview = new URLSearchParams(window.location.search).has('preview');\n  } catch (_) {}\n  var isReloading = false;\n  var isDisposed = false;\n  var ws = null;\n\n  // Preview-mode iframes auto-mount in chat without a user gesture, so we\n  // close the canvas-action API surface by not exposing canvasId / tokenParam\n  // on window.__cursorCanvas. dispatchCanvasAction() in canvas-components\n  // early-returns when canvasId is missing, neutering the SDK end-to-end.\n  // The closure-local canvasId / tokenParam stay available to the runtime's\n  // own WebSocket connection (read-only: only forwards reload events).\n  window.__cursorCanvas = {\n    canvasId: isPreview ? undefined : canvasId,\n    tokenParam: isPreview ? '' : tokenParam,\n    state: new Map(),\n    data: new Map(),\n    reportError: function(message) {\n      if (isPreview) return;\n      fetch('/canvas/' + canvasId + '/report-error' + tokenParam, {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify({ message: String(message) })\n      }).catch(function() {});\n    }\n  };\n\n  function connectHostState() {\n    if (isDisposed || ws) return;\n    var loc = window.location;\n    var proto = loc.protocol === 'https:' ? 'wss:' : 'ws:';\n    ws = new WebSocket(proto + '//' + loc.host + '/canvas/' + canvasId + '/ws' + tokenParam);\n    ws.onmessage = function(e) {\n      try {\n        var msg = JSON.parse(e.data);\n        if (msg.type === 'reload') { triggerReload(); return; }\n        if (msg.type === 'state') {\n          window.__cursorCanvas.state.set(msg.channel, msg.payload);\n          document.dispatchEvent(\n            new CustomEvent('cursor-canvas-state-change', { detail: { channel: msg.channel } })\n          );\n          return;\n        }\n        // Preview iframes are read-only; canvas-data round-trips through a\n        // missing canvasId, so drop rather than partially apply.\n        if (isPreview) return;\n        if (msg.type === 'canvas-data') {\n          if (msg.value === undefined) {\n            window.__cursorCanvas.data.delete(msg.key);\n          } else {\n            window.__cursorCanvas.data.set(msg.key, msg.value);\n          }\n          document.dispatchEvent(\n            new CustomEvent('cursor-canvas-data-change', { detail: { key: msg.key } })\n          );\n        }\n      } catch (_) {}\n    };\n    ws.onclose = function() {\n      ws = null;\n      if (!isDisposed) setTimeout(connectHostState, 1000);\n    };\n  }\n\n  function disconnectHostState() {\n    if (!ws) return;\n    ws.close();\n    ws = null;\n  }\n\n  function cleanup() {\n    if (isDisposed) return;\n    isDisposed = true;\n    disconnectHostState();\n    window.removeEventListener('beforeunload', cleanup);\n    window.removeEventListener('pagehide', cleanup);\n  }\n\n  function triggerReload() {\n    if (isDisposed || isReloading) return;\n    isReloading = true;\n    window.location.reload();\n  }\n\n  window.addEventListener('beforeunload', cleanup);\n  window.addEventListener('pagehide', cleanup);\n  connectHostState();\n})();\n<\/script>\n`;
        }(e, t)}\n  <script type="module">\n    import { mountCanvas } from "${r}?token=${t}";\n    mountCanvas("/canvas/${e}/app.js?token=${t}");\n  <\/script>\n</body>\n</html>`;
    }
    function ec(e) {
        return tr.createHash("sha256").update(`canvas:${e}`).digest("hex").slice(0, 12);
    }
    function tc(e) {
        const t = v.dirname(e), r = v.basename(e, v.extname(e));
        return v.join(t, `${r}.status.json`);
    }
    function rc(e) {
        const t = v.dirname(e), r = v.basename(e, v.extname(e));
        return v.join(t, `${r}.data.json`);
    }
    class nc extends Error {
        constructor(){
            super("Request body too large");
        }
    }
    class sc extends Error {
        constructor(){
            super(`Canvas bundle exceeds the ${Qa}-byte compressed size limit.`);
        }
    }
    class oc extends Error {
        constructor(){
            super("Canvas bundle exceeds the 20000000-byte decompressed size limit.");
        }
    }
    function ic(e) {
        let t;
        try {
            t = JSON.parse(e);
        } catch  {
            throw new Error("Canvas bundle must contain a valid strict v1 JSON payload; legacy ESM is not supported.");
        }
        if (!function(e) {
            if ("object" != typeof e || null === e || Array.isArray(e)) return !1;
            const t = Object.keys(e).sort();
            return 3 === t.length && "runtimeEsm" === t[0] && "userModule" === t[1] && "version" === t[2] && "version" in e && 1 === e.version && "runtimeEsm" in e && "string" == typeof e.runtimeEsm && "userModule" in e && "string" == typeof e.userModule;
        }(t)) throw new Error('Canvas bundle must have exactly { "version": 1, "runtimeEsm": string, "userModule": string }; legacy ESM is not supported.');
        return t;
    }
    class ac {
        constructor(e){
            this._registrations = new Map, this._dataWriteTimers = new Map, this.logContext = e.logContext ?? (0, f.q6)(), this._runtimeDir = e.runtimeDir, this._nodeExecPath = e.nodeExecPath;
        }
        onAction(e) {
            this._actionCallback = e;
        }
        onError(e) {
            this._errorCallback = e;
        }
        onErrorCleared(e) {
            this._errorClearedCallback = e;
        }
        _readBody(e, t) {
            return new Promise((r, n)=>{
                let s = "", o = 0, i = !1;
                e.on("data", (e)=>{
                    o += e.length, o > t ? i = !0 : i || (s += e.toString());
                }), e.on("end", ()=>{
                    i ? n(new nc) : r(s);
                }), e.on("error", n);
            });
        }
        get registeredCanvasCount() {
            return this._registrations.size;
        }
        get sessionToken() {
            return this._sessionToken;
        }
        async start() {
            if (this._server) return {
                port: this._port,
                sessionToken: this._sessionToken
            };
            Ha(this._nodeExecPath, this.logContext);
            const e = Date.now();
            this._sessionToken = tr.randomBytes(32).toString("hex"), this._runtimeModule ??= await fc(this._runtimeDir);
            const t = ha.createServer((e, t)=>{
                this._handleRequest(e, t);
            }), r = new Sa({
                noServer: !0
            });
            t.on("upgrade", (e, t, n)=>{
                const s = new URL(e.url ?? "/", "http://127.0.0.1"), o = s.pathname;
                if (!this._isValidOrigin(e.headers.origin)) return void t.destroy();
                if (s.searchParams.get("token") !== this._sessionToken) return void t.destroy();
                const i = o.match(/^\/canvas\/([a-f0-9]{12})\/ws$/);
                if (!i) return void t.destroy();
                const a = this._registrations.get(i[1]);
                a ? r.handleUpgrade(e, t, n, (e)=>{
                    a.eventClients.add(e);
                    for (const [t, r] of a.hostState)e.send(`{"type":"state","channel":${JSON.stringify(t)},"payload":${r}}`);
                    for (const [t, r] of Object.entries(a.canvasData))e.send(JSON.stringify({
                        type: "canvas-data",
                        key: t,
                        value: r
                    }));
                    e.on("close", ()=>{
                        a.eventClients.delete(e);
                    }), e.on("error", ()=>{
                        a.eventClients.delete(e);
                    });
                }) : t.destroy();
            });
            try {
                this._port = await this._listen(t);
            } catch (e) {
                throw t.close(), e;
            }
            return this._server = t, this._wss = r, Ua.info(this.logContext, "Canvas server started", {
                port: this._port,
                startDurationMs: Date.now() - e
            }), {
                port: this._port,
                sessionToken: this._sessionToken
            };
        }
        async stop() {
            await this._flushPendingDataWrites();
            for (const e of this._registrations.values())this._stopFileWatcher(e), this._stopDataFileWatcher(e), this._closeEventClients(e), "source" === e.kind && this._deleteStatusFile(e);
            this._registrations.clear(), this._wss?.close(), this._wss = void 0, this._server?.close(), this._server = void 0, this._port = void 0, this._sessionToken = void 0, Ua.info(this.logContext, "Canvas server stopped");
        }
        _validateId(e) {
            return /^[a-f0-9]{12}$/.test(e);
        }
        getUrl(e, t) {
            if (!this._validateId(e)) return;
            if (!this._port || !this._sessionToken) return;
            if (!this._registrations.has(e)) return;
            const r = `http://localhost:${this._port}/canvas/${e}/`, n = new URL(r);
            return n.searchParams.set("token", this._sessionToken), t && n.searchParams.set("preview", "1"), n.toString();
        }
        async _registerCanvas(e) {
            if (void 0 === this._port) throw new Error("CanvasServer.start() must be called before registerCanvas()");
            const t = function(e) {
                return "bundle" === e.kind ? e : {
                    kind: "source",
                    path: e.path
                };
            }(e);
            if ("bundle" === t.kind && !Ma(r = v.basename(t.path)) && r !== Ea.Rj) throw new Error(`Canvas bundle path must end with ".canvas.bundle.gz" or be a user-store "canvas.bundle.gz": ${t.path}`);
            var r;
            const n = ec(t.path);
            if (!this._validateId(n)) throw new Error(`Invalid canvas ID: ${n}`);
            const s = this._registrations.get(n);
            if (s && (this._stopFileWatcher(s), this._stopDataFileWatcher(s), this._closeEventClients(s)), "bundle" === t.kind) {
                const e = this._dataWriteTimers.get(n);
                void 0 !== e && (clearTimeout(e), this._dataWriteTimers.delete(n));
            }
            const o = {
                kind: t.kind,
                canvasId: n,
                path: t.path,
                eventClients: new Set,
                hostState: new Map,
                canvasData: "source" === t.kind ? await this._readDataFile(t.path) : {},
                pendingBuild: !1,
                notifyClientsOnBuild: !1
            };
            return this._startFileWatcher(o), "source" === o.kind && this._startDataFileWatcher(o), this._registrations.set(n, o), n;
        }
        async registerCanvas(e) {
            return {
                canvasId: await this._registerCanvas(e),
                path: e.path
            };
        }
        getRegisteredCanvasPath(e) {
            if (this._validateId(e)) return this._registrations.get(e)?.path;
        }
        async getShareArtifact(e) {
            const t = ec(e.path), r = this._registrations.get(t);
            if (!r) return {
                appJs: "",
                dataJson: {},
                status: {
                    status: "canvas-missing"
                }
            };
            const n = await this._ensureBuildState(r), s = lc(n);
            if ("rendered" !== s.status) return {
                appJs: "",
                dataJson: {},
                status: s
            };
            const o = {
                ...r.canvasData
            };
            let i = n.runtimeModule;
            void 0 === i && (this._runtimeModule ??= await fc(this._runtimeDir), i = this._runtimeModule);
            const a = Da(Aa({
                runtimeEsm: i,
                userModule: n.appModule
            }));
            return Ja(a, o) ? {
                appJs: a.toString("base64"),
                dataJson: o,
                status: s
            } : {
                appJs: "",
                dataJson: {},
                status: {
                    status: "content-too-large"
                }
            };
        }
        pushState(e) {
            if (!this._validateId(e.canvasId)) return !1;
            const t = this._registrations.get(e.canvasId);
            return !!t && (t.hostState.set(e.channel, e.jsonPayload), this._sendStateEvent(t, e.channel, e.jsonPayload), !0);
        }
        pushStateAll(e) {
            for (const t of this._registrations.values())t.hostState.set(e.channel, e.jsonPayload), this._sendStateEvent(t, e.channel, e.jsonPayload);
        }
        _sendStateEvent(e, t, r) {
            const n = `{"type":"state","channel":${JSON.stringify(t)},"payload":${r}}`;
            for (const t of e.eventClients)try {
                t.readyState === ba.OPEN && t.send(n);
            } catch  {
                e.eventClients.delete(t);
            }
        }
        _sendCanvasDataEvent(e, t, r) {
            const n = JSON.stringify({
                type: "canvas-data",
                key: t,
                value: r
            });
            for (const t of e.eventClients)try {
                t.readyState === ba.OPEN && t.send(n);
            } catch  {
                e.eventClients.delete(t);
            }
        }
        async destroyCanvas(e) {
            if (!this._validateId(e.canvasId)) return;
            const t = this._registrations.get(e.canvasId);
            t && ("source" === t.kind && await this._flushDataWriteForCanvas(e.canvasId, t), this._registrations.delete(e.canvasId), this._stopFileWatcher(t), this._stopDataFileWatcher(t), this._closeEventClients(t), "source" === t.kind && this._deleteStatusFile(t));
        }
        _startFileWatcher(e) {
            const t = e.fileWatcherSnapshot;
            this._stopFileWatcher(e);
            try {
                const r = this._captureFileWatcherSnapshot(e.path);
                e.fileWatcherSnapshot = r;
                const n = rr.watch(e.path, {
                    persistent: !1
                }, (t)=>{
                    this._registrations.get(e.canvasId) === e && (e.fileWatcherSnapshot = this._captureFileWatcherSnapshot(e.path), this._requestBuild(e, {
                        notifyClients: !0
                    }), "rename" === t && (this._startParentDirectoryFileWatcher(e), this._scheduleFileWatcherReattach(e)));
                });
                e.fileWatcher = n;
                const s = this._captureFileWatcherSnapshot(e.path);
                e.fileWatcherSnapshot = s, (r !== s || void 0 !== t && t !== s) && this._registrations.get(e.canvasId) === e && this._requestBuild(e, {
                    notifyClients: !0
                }), n.on("error", ()=>{
                    e.fileWatcher === n && this._startParentDirectoryFileWatcher(e);
                });
            } catch  {
                this._startParentDirectoryFileWatcher(e);
            }
        }
        _startParentDirectoryFileWatcher(e) {
            const t = e.fileWatcherSnapshot;
            this._stopFileWatcher(e);
            const r = v.basename(e.path);
            try {
                const n = this._captureFileWatcherSnapshot(e.path);
                e.fileWatcherSnapshot = n;
                const s = rr.watch(v.dirname(e.path), {
                    persistent: !1
                }, (t, n)=>{
                    if (this._registrations.get(e.canvasId) === e) {
                        if (null !== n) {
                            if (n.toString() !== r) return;
                            e.fileWatcherSnapshot = this._captureFileWatcherSnapshot(e.path);
                        } else {
                            const t = this._captureFileWatcherSnapshot(e.path);
                            if (t === e.fileWatcherSnapshot) return;
                            e.fileWatcherSnapshot = t;
                        }
                        this._requestBuild(e, {
                            notifyClients: !0
                        }), this._scheduleFileWatcherReattach(e);
                    }
                });
                e.fileWatcher = s;
                const o = this._captureFileWatcherSnapshot(e.path);
                e.fileWatcherSnapshot = o, (n !== o || void 0 !== t && t !== o) && this._registrations.get(e.canvasId) === e && this._requestBuild(e, {
                    notifyClients: !0
                }), s.on("error", ()=>{
                    e.fileWatcher === s && this._stopFileWatcher(e);
                });
            } catch  {}
        }
        _captureFileWatcherSnapshot(e) {
            try {
                const t = rr.statSync(e, {
                    bigint: !0
                });
                return [
                    t.dev,
                    t.ino,
                    t.size,
                    t.mtimeNs
                ].join(":");
            } catch  {
                return "missing";
            }
        }
        _scheduleFileWatcherReattach(e) {
            void 0 !== e.fileWatcherReattachTimer && clearTimeout(e.fileWatcherReattachTimer), e.fileWatcherReattachTimer = setTimeout(()=>{
                e.fileWatcherReattachTimer = void 0, this._registrations.get(e.canvasId) === e && this._startFileWatcher(e);
            }, 100);
        }
        _stopFileWatcher(e) {
            void 0 !== e.fileWatcherReattachTimer && (clearTimeout(e.fileWatcherReattachTimer), e.fileWatcherReattachTimer = void 0), e.fileWatcher && (e.fileWatcher.close(), e.fileWatcher = void 0);
        }
        _startDataFileWatcher(e) {
            this._stopDataFileWatcher(e);
            const t = rc(e.path);
            try {
                e.dataFileWatcher = rr.watch(t, {
                    persistent: !1
                }, (t)=>{
                    this._dataWriteTimers.has(e.canvasId) || this._reloadDataFile(e), "rename" === t && setTimeout(()=>{
                        this._registrations.get(e.canvasId) === e && this._startDataFileWatcher(e);
                    }, 100);
                }), e.dataFileWatcher.on("error", ()=>{
                    this._stopDataFileWatcher(e);
                });
            } catch  {}
        }
        _stopDataFileWatcher(e) {
            e.dataFileWatcher && (e.dataFileWatcher.close(), e.dataFileWatcher = void 0);
        }
        async _reloadDataFile(e) {
            const t = await this._readDataFile(e.path);
            if (JSON.stringify(e.canvasData) === JSON.stringify(t)) return;
            const r = e.canvasData;
            e.canvasData = t;
            const n = new Set([
                ...Object.keys(r),
                ...Object.keys(t)
            ]);
            for (const s of n)JSON.stringify(r[s]) !== JSON.stringify(t[s]) && this._sendCanvasDataEvent(e, s, t[s]);
        }
        _notifyReload(e) {
            for (const t of e.eventClients)try {
                t.readyState === ba.OPEN && t.send('{"type":"reload"}');
            } catch  {
                e.eventClients.delete(t);
            }
        }
        _closeEventClients(e) {
            for (const t of e.eventClients)try {
                t.close();
            } catch  {}
            e.eventClients.clear();
        }
        async _requestBuild(e, t) {
            return e.pendingBuild = !0, e.notifyClientsOnBuild = e.notifyClientsOnBuild || t.notifyClients, e.buildPromise || (e.buildPromise = (async ()=>{
                for(; e.pendingBuild;){
                    const t = e.notifyClientsOnBuild;
                    e.pendingBuild = !1, e.notifyClientsOnBuild = !1;
                    const r = e.buildState?.status, n = Date.now();
                    e.buildState = await this._buildCanvas(e);
                    const s = Date.now() - n;
                    this._logBuildOutcome(e.path, r, e.buildState, s), "source" === e.kind && this._writeStatusFile(e, lc(e.buildState)), "compile-error" === e.buildState.status ? this._errorCallback?.({
                        canvasId: e.canvasId,
                        canvasPath: e.path,
                        error: e.buildState.diagnosticsText ?? "Unknown compile error",
                        errorKind: "compile-error"
                    }) : "canvas-missing" === e.buildState.status ? this._errorCallback?.({
                        canvasId: e.canvasId,
                        canvasPath: e.path,
                        error: "",
                        errorKind: "canvas-missing"
                    }) : "ready" === e.buildState.status && this._errorClearedCallback?.(e.canvasId, e.path), t && this._notifyReload(e);
                }
            })().finally(()=>{
                e.buildPromise = void 0, e.pendingBuild && this._requestBuild(e, {
                    notifyClients: !1
                });
            })), e.buildPromise;
        }
        async _ensureBuildState(e) {
            return e.buildState || e.buildPromise ? e.buildPromise && await e.buildPromise : await this._requestBuild(e, {
                notifyClients: !1
            }), e.buildState ?? uc("Canvas build did not produce any output.");
        }
        _serve404(e, t) {
            const r = `<!DOCTYPE html>\n<html><head><meta charset="utf-8"><title>Canvas not found</title>\n<style>\n*{margin:0;padding:0;box-sizing:border-box}\nbody{font-family:${_a};background:#1e1e1e;color:#ccc;display:flex;align-items:center;justify-content:center;min-height:100vh}\n.c{text-align:center;padding:40px}\nh1{font-size:18px;color:#888;margin-bottom:8px}\np{font-size:13px;color:#666}\ncode{background:#2a2a2a;padding:2px 6px;border-radius:4px;font-size:12px}\n</style></head><body><div class="c">\n<h1>Canvas not found</h1>\n<p>${t ? `<code>${t}</code> may have been deleted or expired.` : "Invalid canvas URL."}</p>\n</div></body></html>`;
            e.writeHead(404, {
                "Content-Type": "text/html; charset=utf-8"
            }), e.end(r);
        }
        _isValidOrigin(e) {
            if (!e) return !0;
            try {
                const t = new URL(e).hostname;
                return "localhost" === t || "127.0.0.1" === t;
            } catch  {
                return !1;
            }
        }
        _rejectForbidden(e) {
            e.writeHead(403, {
                "Content-Type": "application/json"
            }), e.end('{"error":"forbidden"}');
        }
        _rejectReadOnly(e) {
            e.writeHead(403, {
                "Content-Type": "application/json"
            }), e.end('{"error":"canvas bundle is read only"}');
        }
        async _handleRequest(e, t) {
            const r = new URL(e.url ?? "/", "http://127.0.0.1"), n = r.pathname;
            if (!this._isValidOrigin(e.headers.origin)) return void this._rejectForbidden(t);
            if (r.searchParams.get("token") !== this._sessionToken) return void this._rejectForbidden(t);
            if (n === Va) return void this._serveRuntimeModule(t);
            const s = n.match(/^\/canvas\/([a-z0-9]+)\/runtime\.js$/);
            if (s) return void await this._serveBundleRuntimeModule(t, s[1]);
            if (/^\/canvas\/([a-z0-9]+)\/(data|version)\.json$/.test(n)) return t.writeHead(404, {
                "Content-Type": "application/json"
            }), void t.end('{"error":"not found"}');
            const o = n.match(/^\/canvas\/([a-z0-9]+)\/state$/);
            if (o) return "GET" === e.method ? void this._handleStateGet(t, o[1]) : "POST" === e.method ? void await this._handleStatePost(t, o[1], e) : (t.writeHead(405, {
                "Content-Type": "application/json"
            }), void t.end('{"error":"method not allowed"}'));
            const i = n.match(/^\/canvas\/([a-z0-9]+)\/report-error$/);
            if (i && "POST" === e.method) return void await this._handleErrorReport(t, i[1], e);
            const a = n.match(/^\/canvas\/([a-z0-9]+)\/action$/);
            if (a && "POST" === e.method) return void await this._handleAction(t, a[1], e);
            const c = n.match(/^\/canvas\/([a-z0-9]+)\/app\.js$/);
            if (c) return void await this._serveCanvasApp(t, c[1]);
            const l = n.match(/^\/canvas\/([a-z0-9]+)\/?$/);
            if (!l) return void this._serve404(t);
            const u = l[1], d = this._registrations.get(u);
            if (!d) return void this._serve404(t, u);
            const p = [
                "default-src 'self'",
                "script-src 'self' 'unsafe-inline'",
                "style-src 'self' 'unsafe-inline'",
                "font-src 'self'",
                "img-src 'self' data: blob:",
                "connect-src 'self'"
            ].join("; ");
            t.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8",
                "Content-Security-Policy": p,
                "Cache-Control": "no-store"
            });
            const m = "bundle" === d.kind ? `/canvas/${u}/runtime.js` : Va;
            t.end(Za(u, this._sessionToken, m));
        }
        _serveRuntimeModule(e) {
            if (!this._runtimeModule) return e.writeHead(503, {
                "Content-Type": "application/json"
            }), void e.end('{"error":"server not started"}');
            e.writeHead(200, {
                "Content-Type": "text/javascript; charset=utf-8",
                "Cache-Control": "public, max-age=31536000, immutable"
            }), e.end(this._runtimeModule);
        }
        async _serveBundleRuntimeModule(e, t) {
            const r = this._registrations.get(t);
            if (!r || "bundle" !== r.kind) return e.writeHead(404, {
                "Content-Type": "application/json"
            }), void e.end('{"error":"not found"}');
            const n = await this._ensureBuildState(r);
            if ("ready" !== n.status || void 0 === n.runtimeModule) return e.writeHead(422, {
                "Content-Type": "application/json"
            }), void e.end(JSON.stringify({
                error: n.diagnosticsText ?? "Canvas bundle is not available."
            }));
            e.writeHead(200, {
                "Content-Type": "text/javascript; charset=utf-8",
                "Cache-Control": "no-store"
            }), e.end(n.runtimeModule);
        }
        async _handleErrorReport(e, t, r) {
            const n = this._registrations.get(t);
            if (!n) return e.writeHead(404, {
                "Content-Type": "application/json"
            }), void e.end('{"error":"not found"}');
            let s;
            try {
                s = await this._readBody(r, Ya);
            } catch (t) {
                if (t instanceof nc) return e.writeHead(413, {
                    "Content-Type": "application/json"
                }), void e.end('{"error":"request body too large"}');
                throw t;
            }
            let o = "Unknown runtime error";
            try {
                const e = JSON.parse(s);
                null != e.message && (o = String(e.message));
            } catch  {
                const e = s.trim();
                e && (o = e.slice(0, 500));
            }
            "source" === n.kind && this._writeStatusFile(n, {
                status: "runtime-error",
                error: o
            }), this._errorCallback?.({
                canvasId: t,
                canvasPath: n.path,
                error: o,
                errorKind: "runtime-error"
            }), Ua.warn(this.logContext, "Canvas runtime error reported", {
                canvasId: t,
                path: n.path,
                errorSummary: o.split("\n")[0]?.slice(0, 200)
            }), e.writeHead(200, {
                "Content-Type": "application/json"
            }), e.end('{"ok":true}');
        }
        async _handleAction(e, t, r) {
            const n = this._registrations.get(t);
            if (!n) return e.writeHead(404, {
                "Content-Type": "application/json"
            }), void e.end('{"error":"not found"}');
            if ("bundle" === n.kind) return void this._rejectReadOnly(e);
            let s, o;
            try {
                s = await this._readBody(r, Ya);
            } catch (t) {
                if (t instanceof nc) return e.writeHead(413, {
                    "Content-Type": "application/json"
                }), void e.end('{"error":"request body too large"}');
                throw t;
            }
            try {
                o = JSON.parse(s);
            } catch  {
                return e.writeHead(400, {
                    "Content-Type": "application/json"
                }), void e.end('{"error":"invalid JSON body"}');
            }
            const i = xa(o);
            if (!i) return e.writeHead(400, {
                "Content-Type": "application/json"
            }), void e.end('{"error":"invalid action"}');
            if (this._actionCallback) try {
                this._actionCallback(t, i);
            } catch (e) {
                Ua.warn(this.logContext, "Canvas action callback error", {
                    canvasId: t,
                    actionType: i.type,
                    error: e instanceof Error ? e.message : String(e)
                });
            }
            e.writeHead(200, {
                "Content-Type": "application/json"
            }), e.end('{"ok":true}');
        }
        _handleStateGet(e, t) {
            const r = this._registrations.get(t);
            if (!r) return e.writeHead(404, {
                "Content-Type": "application/json"
            }), void e.end('{"error":"not found"}');
            e.writeHead(200, {
                "Content-Type": "application/json",
                "Cache-Control": "no-store"
            }), e.end(JSON.stringify(r.canvasData));
        }
        async _handleStatePost(e, t, r) {
            const n = this._registrations.get(t);
            if (!n) return e.writeHead(404, {
                "Content-Type": "application/json"
            }), void e.end('{"error":"not found"}');
            if ("bundle" === n.kind) return void this._rejectReadOnly(e);
            let s, o;
            try {
                s = await this._readBody(r, Ya);
            } catch (t) {
                if (t instanceof nc) return e.writeHead(413, {
                    "Content-Type": "application/json"
                }), void e.end('{"error":"request body too large"}');
                throw t;
            }
            try {
                o = JSON.parse(s);
            } catch  {
                return e.writeHead(400, {
                    "Content-Type": "application/json"
                }), void e.end('{"error":"invalid JSON body"}');
            }
            if ("string" != typeof o.key) return e.writeHead(400, {
                "Content-Type": "application/json"
            }), void e.end('{"error":"key must be a string"}');
            const i = o.key, a = o.value;
            if (void 0 === a) delete n.canvasData[i];
            else {
                const t = n.canvasData[i];
                n.canvasData[i] = a;
                const r = JSON.stringify(n.canvasData);
                if (Buffer.byteLength(r, "utf-8") > 1048576) return n.canvasData[i] = t, void 0 === t && delete n.canvasData[i], e.writeHead(413, {
                    "Content-Type": "application/json"
                }), void e.end('{"error":"canvas state size limit exceeded"}');
            }
            this._scheduleDataFileWrite(n.canvasId, n.path, n.canvasData), this._sendCanvasDataEvent(n, i, a), e.writeHead(200, {
                "Content-Type": "application/json"
            }), e.end('{"ok":true}');
        }
        async _serveCanvasApp(e, t) {
            const r = this._registrations.get(t);
            if (!r) return e.writeHead(404, {
                "Content-Type": "application/json"
            }), void e.end('{"error":"not found"}');
            const n = await this._ensureBuildState(r);
            e.writeHead(200, {
                "Content-Type": "text/javascript; charset=utf-8",
                "Cache-Control": "no-store"
            }), e.end(n.appModule);
        }
        _listen(e) {
            return new Promise((t, r)=>{
                e.listen(0, "127.0.0.1", ()=>{
                    const n = e.address();
                    n && "object" == typeof n ? t(n.port) : r(new Error("Failed to bind canvas server"));
                }), e.on("error", r);
            });
        }
        async _buildCanvas(e) {
            switch(e.kind){
                case "source":
                    return this._buildCanvasSource(e.path);
                case "bundle":
                    return this._buildCanvasBundle(e.path);
                default:
                    return e.kind;
            }
        }
        async _buildCanvasSource(e) {
            try {
                const t = await rr.promises.readFile(e, "utf-8"), r = await this._transformCanvasSource(t, e);
                if (!r.code) return uc("Canvas build completed without producing output.");
                return {
                    appModule: Fa(r.code),
                    status: "ready"
                };
            } catch (e) {
                if (pc(e)) return {
                    appModule: "export default function CanvasMissing() { return null; }\n",
                    status: "canvas-missing"
                };
                return uc(await mc(e));
            }
        }
        async _buildCanvasBundle(e) {
            try {
                const t = await async function(e, t) {
                    const r = "number" == typeof rr.constants.O_NOFOLLOW ? rr.constants.O_NOFOLLOW : 0, n = await rr.promises.open(e, rr.constants.O_RDONLY | r), s = [];
                    let o = 0;
                    try {
                        if (!(await n.stat()).isFile()) throw new Error("Canvas bundle must be a regular file.");
                        for(;;){
                            const e = Buffer.allocUnsafe(Math.min(65536, t + 1 - o)), { bytesRead: r } = await n.read(e, 0, e.length, null);
                            if (0 === r) return Buffer.concat(s, o);
                            if (o += r, o > t) throw new sc;
                            s.push(e.subarray(0, r));
                        }
                    } finally{
                        await n.close();
                    }
                }(e, Qa), r = await function(e, t) {
                    return new Promise((r, n)=>{
                        const s = fa.createGunzip(), o = [];
                        let i = 0, a = !1;
                        s.on("data", (e)=>{
                            if (!a) {
                                if (i += e.length, i > t) return a = !0, o.length = 0, void s.destroy(new oc);
                                o.push(e);
                            }
                        }), s.once("error", n), s.once("end", ()=>{
                            r(Buffer.concat(o, i));
                        }), s.end(e);
                    });
                }(t, Xa), n = ic(r.toString("utf-8"));
                return {
                    appModule: n.userModule,
                    runtimeModule: n.runtimeEsm,
                    status: "ready"
                };
            } catch (e) {
                if (pc(e)) return {
                    appModule: "export default function CanvasMissing() { return null; }\n",
                    status: "canvas-missing"
                };
                return uc(await mc(e));
            }
        }
        async _transformCanvasSource(e, t) {
            const r = za;
            try {
                return await this._runCanvasTransform(e, t);
            } catch (n) {
                const s = function(e) {
                    const t = e instanceof Error ? e.message : String(e);
                    if (ja.test(t)) return "nonretryable-startup";
                    return t.includes("The service is no longer running") || "The service was stopped" === t || t.includes("write EPIPE") || t.includes("ECONNRESET") ? "retryable-disconnect" : void 0;
                }(n);
                if ("retryable-disconnect" !== s) throw n;
                const o = await async function(e) {
                    if (e !== za) return "restart-already-complete";
                    if (Ga) return await Ga, "reused-inflight-restart";
                    let t = !1;
                    return Ga = (async ()=>{
                        if (e !== za) return;
                        const r = await $a();
                        await r.stop(), za += 1, t = !0;
                    })().finally(()=>{
                        Ga = void 0;
                    }), await Ga, t ? "performed-restart" : "restart-already-complete";
                }(r);
                "performed-restart" === o && Ua.warn(this.logContext, "Canvas build service disconnected; restarting esbuild and retrying", {
                    path: t,
                    error: n instanceof Error ? n.message : String(n)
                });
                try {
                    const r = await this._runCanvasTransform(e, t);
                    return "performed-restart" === o && Ua.info(this.logContext, "Canvas build recovered after restarting esbuild", {
                        path: t
                    }), r;
                } catch (e) {
                    throw Ua.warn(this.logContext, "Canvas build retry failed after recovery", {
                        path: t,
                        recoveryResult: o,
                        error: e instanceof Error ? e.message : String(e)
                    }), e;
                }
            }
        }
        async _runCanvasTransform(e, t) {
            return (await $a()).transform(e, {
                loader: cc(t),
                jsx: "transform",
                jsxFactory: "React.createElement",
                jsxFragment: "React.Fragment",
                format: "esm",
                target: "es2022",
                sourcefile: v.basename(t),
                logLevel: "silent"
            });
        }
        _logBuildOutcome(e, t, r, n) {
            "compile-error" !== r.status ? "canvas-missing" !== r.status ? "compile-error" !== t && "canvas-missing" !== t || Ua.info(this.logContext, "Canvas build recovered", {
                path: e,
                buildDurationMs: n
            }) : Ua.info(this.logContext, "Canvas source file missing", {
                path: e,
                buildDurationMs: n
            }) : Ua.warn(this.logContext, "Canvas build failed", {
                path: e,
                diagnosticsSummary: hc(r.diagnosticsText),
                buildDurationMs: n
            });
        }
        _writeStatusFile(e, t) {
            const r = tc(e.path);
            try {
                const n = JSON.stringify(t);
                if (e.lastStatusJson === n && rr.existsSync(r)) return;
                rr.writeFileSync(r, n, "utf-8"), e.lastStatusJson = n;
            } catch  {
                Ua.warn(this.logContext, "Failed to write canvas status file", {
                    path: r
                });
            }
        }
        _deleteStatusFile(e) {
            e.lastStatusJson = void 0;
            const t = tc(e.path);
            try {
                rr.unlinkSync(t);
            } catch  {}
        }
        async _readDataFile(e) {
            const t = rc(e);
            try {
                const e = await rr.promises.readFile(t, "utf-8"), r = JSON.parse(e);
                if (r && "object" == typeof r && !Array.isArray(r)) return r;
            } catch  {}
            return {};
        }
        _scheduleDataFileWrite(e, t, r) {
            const n = this._dataWriteTimers.get(e);
            void 0 !== n && clearTimeout(n);
            const s = JSON.stringify(r, null, 2);
            this._dataWriteTimers.set(e, setTimeout(()=>{
                this._dataWriteTimers.delete(e);
                const r = rc(t);
                rr.promises.writeFile(r, s, "utf-8").catch(()=>{
                    Ua.warn(this.logContext, "Failed to write canvas data file", {
                        path: r
                    });
                });
            }, 300));
        }
        async _flushDataWriteForCanvas(e, t) {
            const r = this._dataWriteTimers.get(e);
            if (void 0 === r) return;
            clearTimeout(r), this._dataWriteTimers.delete(e);
            const n = rc(t.path);
            try {
                await rr.promises.writeFile(n, JSON.stringify(t.canvasData, null, 2), "utf-8");
            } catch  {
                Ua.warn(this.logContext, "Failed to flush canvas data file", {
                    path: n
                });
            }
        }
        async _flushPendingDataWrites() {
            const e = [];
            for (const [t, r] of this._dataWriteTimers){
                clearTimeout(r);
                const n = this._registrations.get(t);
                if (!n || "source" !== n.kind) continue;
                const s = rc(n.path);
                e.push(rr.promises.writeFile(s, JSON.stringify(n.canvasData, null, 2), "utf-8").catch(()=>{
                    Ua.warn(this.logContext, "Failed to flush canvas data file", {
                        path: s
                    });
                }));
            }
            this._dataWriteTimers.clear(), await Promise.all(e);
        }
    }
    function cc(e) {
        switch(v.extname(e).toLowerCase()){
            case ".tsx":
            default:
                return "tsx";
            case ".ts":
                return "ts";
            case ".jsx":
                return "jsx";
            case ".js":
                return "js";
        }
    }
    function lc(e) {
        switch(e.status){
            case "compile-error":
                return {
                    status: "compile-error",
                    diagnostics: e.diagnosticsText ?? ""
                };
            case "canvas-missing":
                return {
                    status: "canvas-missing"
                };
            case "ready":
                return {
                    status: "rendered"
                };
            default:
                return e.status;
        }
    }
    function uc(e) {
        return {
            appModule: dc(e),
            status: "compile-error",
            diagnosticsText: e
        };
    }
    function dc(e) {
        return `\nvar diagnostics = ${JSON.stringify(e)};\n\nexport default function CanvasCompileError() {\n  return React.createElement("div", {\n    style: {\n      minHeight: "100vh",\n      padding: "24px 32px",\n      boxSizing: "border-box",\n      background: ${JSON.stringify("#181818")},\n      color: ${JSON.stringify("#E4E4E4EB")},\n      fontFamily: ${JSON.stringify(_a)},\n    },\n  },\n    React.createElement("h1", {\n      style: { margin: "0 0 12px 0", fontSize: "20px", fontWeight: "700" },\n    }, "Canvas Compile Error"),\n    React.createElement("p", {\n      style: {\n        margin: "0 0 16px 0",\n        color: ${JSON.stringify("#E4E4E48D")},\n        lineHeight: "1.5",\n      },\n    }, "Cursor could not compile this canvas. Fix the errors below and save again."),\n    React.createElement("pre", {\n      style: {\n        margin: "0",\n        padding: "16px",\n        whiteSpace: "pre-wrap",\n        wordBreak: "break-word",\n        overflowX: "auto",\n        borderRadius: "12px",\n        border: "1px solid #E4E4E426",\n        background: ${JSON.stringify("#1e1e1e")},\n        color: ${JSON.stringify("#f5c2c7")},\n        fontFamily: ${JSON.stringify('ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace')},\n        fontSize: "13px",\n        lineHeight: "1.6",\n      },\n    }, diagnostics)\n  );\n}\n`;
    }
    function pc(e) {
        return "object" == typeof e && null !== e && "ENOENT" === e.code;
    }
    async function mc(e) {
        if (function(e) {
            return "object" == typeof e && null !== e && "errors" in e && Array.isArray(e.errors);
        }(e)) {
            const t = await $a(), r = await t.formatMessages(e.errors, {
                color: !1,
                kind: "error",
                terminalWidth: 100
            });
            if (r.length > 0) return r.join("\n\n");
        }
        return e instanceof Error ? e.message : String(e);
    }
    function hc(e) {
        const t = e?.trim();
        if (t) return t.split("\n")[0];
    }
    async function fc(e) {
        const t = v.join(e, Ka);
        try {
            return await rr.promises.readFile(t, "utf-8");
        } catch  {
            throw new Error(`Missing canvas runtime module "${Ka}" in ${e}.`);
        }
    }
    const gc = /(?:^|[\\/])\.cursor[\\/]projects[\\/][^\\/]+[\\/]canvases[\\/][^\\/]+\.canvas\.tsx$/i, yc = /^[A-Za-z]:[\\/]/, wc = /^[a-f0-9]{64}\.canvas\.tsx$/i, vc = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    function _c(e) {
        return v.isAbsolute(e) || yc.test(e);
    }
    function bc(e) {
        return gc.test(e);
    }
    function Sc(e) {
        return wc.test(e);
    }
    function kc(e, t) {
        return "" !== e && !e.startsWith(`..${v.sep}`) && ".." !== e && !v.isAbsolute(e) && !e.includes(v.sep) && t(e);
    }
    async function xc(e) {
        let t, r;
        try {
            t = await (0, W.lstat)(e), r = await (0, W.realpath)(e);
        } catch (e) {
            return {
                status: "invalid",
                reason: e instanceof Error && "code" in e ? `stat-${String(e.code)}` : "stat-failed"
            };
        }
        return !t.isFile() || t.isSymbolicLink() ? {
            status: "invalid",
            reason: "path-not-regular-file"
        } : {
            stats: t,
            realPath: r
        };
    }
    async function Ec(e, t) {
        try {
            for (const t of e){
                const e = await (0, W.lstat)(t);
                if (!e.isDirectory() || e.isSymbolicLink()) return;
            }
            return await (0, W.realpath)(t);
        } catch  {
            return;
        }
    }
    function Ic(e) {
        const t = v.resolve(e.path);
        if (v.basename(t) === Ea.Rj) for (const r of e.replicaFilesDirs){
            const e = v.resolve(r, vt.sz), n = v.relative(e, t).split(v.sep);
            if (2 !== n.length || void 0 === n[0] || !vc.test(n[0]) || n[1] !== Ea.Rj) continue;
            const s = n[0].toLowerCase(), o = v.join(e, s);
            return {
                filesDir: v.resolve(r),
                canvasId: s,
                canvasDir: o,
                sourcePath: v.join(o, vt.EN),
                bundlePath: t
            };
        }
    }
    function Tc(e) {
        const t = v.dirname(e.canvasDir);
        return Ec([
            e.filesDir,
            t,
            e.canvasDir
        ], t);
    }
    async function Cc(e) {
        if (!_c(e) || !bc(e)) return {
            status: "invalid",
            reason: "path-not-managed-canvas"
        };
        const t = await xc(e);
        return "status" in t ? t : _c(t.realPath) && bc(t.realPath) ? {
            status: "valid",
            stats: t.stats,
            realPath: t.realPath
        } : {
            status: "invalid",
            reason: "realpath-not-managed-canvas"
        };
    }
    const Pc = (0, g.h)("canvas-server");
    class Ac {
        constructor(e){
            this._started = !1, this.logContext = e.logContext ?? (0, f.q6)(), this.canvasServer = new ac({
                logContext: this.logContext,
                runtimeDir: e.runtimeDir,
                nodeExecPath: e.nodeExecPath
            });
        }
        onAction(e) {
            this.canvasServer.onAction(e);
        }
        onError(e) {
            this.canvasServer.onError(e);
        }
        onErrorCleared(e) {
            this.canvasServer.onErrorCleared(e);
        }
        async _ensureStarted() {
            this._started || (this._startPromise || (this._startPromise = this.canvasServer.start().then(()=>{
                this._started = !0;
            }).catch((e)=>{
                throw this._startPromise = void 0, e;
            })), await this._startPromise);
        }
        get sessionToken() {
            return this.canvasServer.sessionToken;
        }
        async stop() {
            this._startPromise && !this._started && await this._startPromise.catch(()=>{}), this._started && (await this.canvasServer.stop(), this._started = !1, this._startPromise = void 0, Pc.info(this.logContext, "Canvas server stopped"));
        }
        async registerCanvas(e) {
            await this._ensureStarted();
            const t = await this.canvasServer.registerCanvas(e);
            return Pc.info(this.logContext, "Registered canvas", {
                path: e.path,
                kind: e.kind ?? "source",
                canvasId: t.canvasId
            }), t;
        }
        getCanvasUrl(e) {
            return this.canvasServer.getUrl(e.canvasId, e.preview);
        }
        async destroyCanvas(e) {
            await this.canvasServer.destroyCanvas({
                canvasId: e.canvasId
            });
        }
        getRegisteredCanvasPath(e) {
            return this.canvasServer.getRegisteredCanvasPath(e);
        }
        async getShareArtifact(e) {
            return await this._ensureStarted(), this.canvasServer.getShareArtifact({
                path: e.path
            });
        }
        pushState(e) {
            return this.canvasServer.pushState({
                canvasId: e.canvasId,
                channel: e.channel,
                jsonPayload: e.payload
            });
        }
        pushStateAll(e) {
            this.canvasServer.pushStateAll({
                channel: e.channel,
                jsonPayload: e.payload
            });
        }
        get isRunning() {
            return this._started;
        }
    }
    const Rc = "cursor/canvas", Mc = "grok/canvas", Jc = new Map([
        [
            Rc,
            "cursor"
        ],
        [
            Mc,
            "grok"
        ]
    ]), Oc = /^\s*(?:import|export)(\s+type)?\s+(?!default\b)((?:[\w\s*,{}]+)\s+from\s+|(?=["']))["']([^"']+)["']/gm;
    function Bc(e) {
        const t = [];
        Oc.lastIndex = 0;
        for (const r of e.matchAll(Oc)){
            const e = r[1], n = r[2] ?? "", s = r[3];
            void 0 !== s && t.push({
                specifier: s,
                isTypeOnly: void 0 !== e || qc(n)
            });
        }
        return t;
    }
    function Dc(e) {
        const t = new Set;
        for (const { specifier: r } of e){
            const e = Jc.get(r);
            void 0 !== e && t.add(e);
        }
        return t;
    }
    function qc(e) {
        const t = e.replace(/\s+from\s+$/u, "").trim();
        if (!t.startsWith("{") || !t.endsWith("}")) return !1;
        const r = t.slice(1, -1).split(",").map((e)=>e.trim()).filter((e)=>e.length > 0);
        return r.length > 0 && r.every((e)=>/^type\s+\S/u.test(e));
    }
    function Nc(e) {
        let t = "", r = 0;
        for(; r < e.length;){
            const n = e[r], s = e[r + 1];
            if ("/" !== n || "/" !== s) if ("/" !== n || "*" !== s) t += n ?? "", r += 1;
            else {
                for(r += 2; r < e.length && ("*" !== e[r] || "/" !== e[r + 1]);)"\n" === e[r] && (t += "\n"), r += 1;
                r += 2;
            }
            else for(r += 2; r < e.length && "\n" !== e[r];)r += 1;
        }
        return t;
    }
    async function Fc(e) {
        const t = await Promise.resolve().then(require.t.bind(require, 41503, 19)), r = Fa((await t.transform(e.source, {
            loader: Uc(e.canvasPath),
            jsx: "transform",
            jsxFactory: "React.createElement",
            jsxFragment: "React.Fragment",
            format: "esm",
            target: "es2022",
            sourcefile: v.basename(e.canvasPath),
            logLevel: "silent"
        })).code);
        var n;
        const s = Da(Aa({
            runtimeEsm: await async function(e, t) {
                const r = function(e) {
                    return "grok" === e ? "canvas-runtime-grok.esm.js" : "canvas-runtime.esm.js";
                }(t), n = v.join(e ?? v.join(v.dirname((0, D.fileURLToPath)(require("url").pathToFileURL(__filename).href)), "runtime"), r);
                try {
                    const e = await Promise.resolve().then(require.t.bind(require, 51455, 19));
                    return await e.readFile(n, "utf-8");
                } catch (e) {
                    throw new Error(`Missing canvas runtime module "${r}" in ${v.dirname(n)}.`, {
                        cause: e
                    });
                }
            }(e.runtimeDir, e.kit ?? (n = e.source, Dc(Bc(Nc(n))).has("grok") ? "grok" : "cursor")),
            userModule: r
        }));
        if (!Ja(s, {})) throw new Error("Canvas share exceeds content limits.");
        return {
            appJs: new Uint8Array(s),
            userModule: r
        };
    }
    function Uc(e) {
        switch(v.extname(e).toLowerCase()){
            case ".tsx":
            default:
                return "tsx";
            case ".ts":
                return "ts";
            case ".jsx":
                return "jsx";
            case ".js":
                return "js";
        }
    }
    (0, v.resolve)((0, D.fileURLToPath)(new URL(require("./module-35669.js"), require.b)), "..");
    const Lc = 2e7, $c = [
        30,
        120,
        300
    ];
    function jc(e) {
        const t = e?.code;
        return "EPERM" === t || "EACCES" === t || "EBUSY" === t;
    }
    const Gc = (e)=>new Promise((t)=>setTimeout(t, e));
    async function zc(e) {
        const { filePath: t, contents: r, mode: n } = e, s = `${t}.tmp-${(0, tr.randomBytes)(6).toString("hex")}`;
        try {
            await (0, W.writeFile)(s, r, {
                mode: n
            });
            try {
                return void await (0, W.rename)(s, t);
            } catch (e) {
                if (!jc(e)) throw e;
                for (const e of $c){
                    await Gc(e);
                    try {
                        return void await (0, W.rename)(s, t);
                    } catch (e) {
                        if (!jc(e)) throw e;
                    }
                }
                await (0, W.writeFile)(t, r, {
                    mode: n
                }), await (0, W.unlink)(s).catch(()=>{});
            }
        } catch (e) {
            throw await (0, W.unlink)(s).catch(()=>{}), e;
        }
    }
    async function Wc(e) {
        const t = await async function(e, t) {
            try {
                const r = Ra((0, fa.gunzipSync)(e, {
                    maxOutputLength: Lc
                }).toString("utf8")), n = "bundle-v1" === r.kind ? r.bundle.userModule : r.source;
                return await zc({
                    filePath: t,
                    contents: n
                }), t;
            } catch  {
                return;
            }
        }(e.bundleGzip, e.sourcePath);
        return void 0 === t ? {
            bundlePath: e.bundlePath
        } : {
            bundlePath: e.bundlePath,
            sourcePath: t
        };
    }
    const Hc = 12096e5, Kc = 268435456;
    (0, $.Pu)("canvas.compile.result", {
        description: "compileCanvasSource outcomes by result",
        labelNames: [
            "result"
        ]
    }), (0, $.v5)("canvas.compile.phase_ms", {
        description: "Wall time for each compileCanvasSource phase (bootstrap, queue_wait, typecheck, bundle, total)",
        labelNames: [
            "phase"
        ]
    }), (0, $.v5)("canvas.compile.source_bytes", {
        description: "UTF-8 byte length of canvas source at compile start"
    }), (0, $.v5)("canvas.compile.bundle_bytes", {
        description: "UTF-8 byte length of the uncompressed canvas share bundle before gzip"
    }), (0, $.v5)("canvas.compile.gzip_bytes", {
        description: "Byte length of the gzipped canvas share bundle (appJs)"
    });
    new Map;
    (0, v.resolve)((0, D.fileURLToPath)(new URL(require("./module-35669.js"), require.b)), ".."), new Map;
    const Vc = /^\s*\/\/\s*cursor-canvas-title:[ \t]*(.*)$/m, Yc = 120;
    const Qc = 200;
    function Xc(e) {
        return (0, tr.createHash)("sha256").update(e, "utf8").digest("hex");
    }
    class Zc extends Error {
        constructor(){
            super("Canvas source changed after diagnostics; save again to type-check the new source"), this.name = "CanvasDiagnosticsSourceMismatchError";
        }
    }
    async function el(e) {
        try {
            const t = JSON.parse(await (0, W.readFile)(v.join(e, Ea._g), "utf8"));
            if (null === t || "object" != typeof t || Array.isArray(t)) return;
            const r = t, n = (e)=>"string" == typeof e ? e : void 0;
            return {
                createdAt: n(r.createdAt),
                title: n(r.title),
                sourceSha256: n(r.sourceSha256)
            };
        } catch  {
            return;
        }
    }
    async function tl(e) {
        const t = v.join(e.layout.canvasDir, Ea._g);
        for (const r of [
            e.layout.bundlePath,
            t
        ]){
            const e = await (0, W.lstat)(r).catch(()=>{});
            if (e?.isSymbolicLink()) throw new Error(`Refusing to write replica canvas artifact through a symlink: ${v.basename(r)}`);
        }
        const r = await (0, W.readFile)(e.layout.sourcePath);
        if (void 0 !== e.expectedSourceSha256 && function(e) {
            return (0, tr.createHash)("sha256").update(e).digest("hex");
        }(r) !== e.expectedSourceSha256) throw new Zc;
        const n = r.toString("utf8"), s = await Fc({
            source: n,
            canvasPath: e.layout.sourcePath,
            runtimeDir: e.runtimeDir
        }), o = await (0, W.readFile)(e.layout.sourcePath);
        if (!r.equals(o)) throw new Zc;
        await zc({
            filePath: e.layout.bundlePath,
            contents: Buffer.from(s.appJs),
            mode: 438
        });
        const i = (new Date).toISOString(), a = await el(e.layout.canvasDir), c = function(e) {
            const t = Vc.exec(e)?.[1]?.trim();
            if (void 0 !== t && 0 !== t.length) return t.slice(0, Yc);
        }(n) ?? a?.title, l = {
            version: 1,
            canvasId: e.layout.canvasId,
            ...void 0 !== c ? {
                title: c
            } : {},
            createdAt: a?.createdAt ?? i,
            updatedAt: i,
            sourceSha256: Xc(n),
            compiledAt: i
        };
        await zc({
            filePath: t,
            contents: JSON.stringify(l),
            mode: 438
        });
    }
    function rl(e, t) {
        const r = e.split(/\r?\n/).find((e)=>new RegExp(`^\\s*${t}\\s*:`).test(e)), n = r?.replace(new RegExp(`^\\s*${t}\\s*:\\s*`), "");
        if (!n) return;
        const s = (function(e) {
            let t;
            for(let r = 0; r < e.length; r++){
                const n = e[r];
                if ('"' !== n && "'" !== n || 0 !== r && "\\" === e[r - 1]) {
                    if ("#" === n && void 0 === t) return e.slice(0, r);
                } else t = t === n ? void 0 : t ?? n;
            }
            return e;
        })(n).trim(), o = s.match(/^(['"])(.*)\1$/);
        return o ? o[2]?.trim() : s;
    }
    function nl(e) {
        return e.map((e)=>{
            if ("agentFetched" !== e.type?.type.case || !e.content) return e;
            if (function(e) {
                const t = e.match(/^\s*---\r?\n([\s\S]*?)\r?\n---/);
                if (!t) return !1;
                const r = t[1] ?? "";
                return "true" === rl(r, "mode")?.toLowerCase() && [
                    "icon",
                    "color",
                    "reminder"
                ].every((e)=>{
                    const t = rl(r, e);
                    return void 0 !== t && t.length > 0;
                });
            }(e.content)) return e;
            const t = e.clone();
            return t.content = "", t;
        });
    }
    function sl(e, t) {
        const r = [
            [
                t.canvasesDir,
                "<canvasesDir>"
            ],
            [
                t.sdkSourceDir,
                "<sdkSourceDir>"
            ],
            [
                (0, fe.homedir)(),
                "~"
            ]
        ];
        r.sort((e, t)=>t[0].length - e[0].length);
        let n = e;
        for (const [e, t] of r)0 !== e.length && n.includes(e) && (n = n.split(e).join(t));
        return n;
    }
    function ol(e, t) {
        return e ? (0, v.join)(e, "terminals", `${t}.txt`) : void 0;
    }
    class il {
        constructor(){
            this.tail = Promise.resolve();
        }
        queue(e) {
            const t = this.tail.then(async ()=>{
                await e();
            });
            this.tail = t.catch(()=>{});
        }
    }
    class al extends $i {
        constructor(e, t, r, n, s = ()=>!1, o = ()=>{}){
            super(), this.command = e, this.cwd = t, this.abortShell = r, this.onExit = n, this.isShellExecOutputBackpressureEnabled = s, this.getShellExecOutputSuppressionOptions = o, this.writeEmitter = this._register(new H.EventEmitter), this.onDidWrite = this.writeEmitter.event, this.writeBufferEmitter = this._register(new H.EventEmitter), this.onDidWriteBuffer = this.writeBufferEmitter.event, this.closeEmitter = this._register(new H.EventEmitter), this.onDidClose = this.closeEmitter.event, this.isStarted = !1, this.hasExited = !1, this.hasClosed = !1, this.abortRequestedByUser = !1, this.pendingOutput = [], this.isOutputPaused = !1, this.pauseWaiters = [];
        }
        handleInput(e) {
            "" !== e || this.hasExited || (this.abortRequestedByUser = !0, this.abortShell());
        }
        getEventHandler() {
            return {
                onStdout: (e)=>this.handleShellOutput(e),
                onStderr: (e)=>this.handleShellOutput(e),
                onExit: (e)=>this.handleExit(e),
                onStart: ()=>this.handleStart()
            };
        }
        open(e) {
            if (!(this.isStarted || this.hasExited || this.isDisposed)) {
                this.isStarted = !0, this.emitImmediate(this.osc633("P", `Cwd=${this.escapeOscValue(this.cwd)}`)), this.emitImmediate(this.osc633("P", "HasRichCommandDetection=True")), this.showPrompt(), this.showCommand(this.command);
                for (const e of this.pendingOutput)this.writeBufferEmitter.fire(e);
                this.pendingOutput = [];
            }
        }
        pause() {
            this.isOutputPaused = !0;
        }
        resume(e) {
            if (!this.isOutputPaused && !e?.force) return;
            this.isOutputPaused = !1;
            const t = this.pauseWaiters;
            this.pauseWaiters = [];
            for (const e of t)e();
        }
        async awaitUnpaused() {
            for(; this.isOutputPaused;)await new Promise((e)=>this.pauseWaiters.push(e));
        }
        close() {
            this.resume(), this.hasClosed || (this.hasClosed = !0, this.hasExited || this.emitImmediate("\r\n[Terminal closing]\r\n"), this.closeEmitter.fire());
        }
        dispose() {
            this.resume(), super.dispose();
        }
        handleStart() {}
        async handleShellOutput(e) {
            this.isTerminalClosed() || this.isDisposed || (await this.awaitUnpaused(), this.isTerminalClosed() || this.isDisposed || this.writeShellStreamOutput(e));
        }
        writeShellStreamOutput(e) {
            if (!this.isShellExecOutputBackpressureEnabled()) return void this.emitShellOutput(e);
            if (this.isDisposed) return;
            void 0 === this.outputSuppressor && (this.outputSuppressor = this._register(new G.vu(this.getShellExecOutputSuppressionOptions())));
            const t = this.outputSuppressor.record(Buffer.byteLength(e, "utf8"));
            t.noticeJustTriggered && this.emitShellOutput(G.Ls), t.shouldForward && this.emitShellOutput(e);
        }
        emitShellOutput(e) {
            const t = Buffer.from(e);
            this.isStarted ? this.writeBufferEmitter.fire(t) : this.pendingOutput.push(t);
        }
        emitImmediate(e) {
            this.emitShellOutput(e);
        }
        handleExit(e) {
            if (!this.hasExited && !this.isDisposed) {
                if (this.resume({
                    force: !0
                }), !this.isStarted) return this.hasExited = !0, void this.onExit({
                    code: e,
                    aborted: this.abortRequestedByUser || null === e
                });
                this._completeExit(e);
            }
        }
        _completeExit(e) {
            this.hasExited = !0, this.showCommandCompleted(e ?? 0), this.emitImmediate("\r\n"), this.hasClosed || (this.hasClosed = !0, this.closeEmitter.fire(e ?? 0)), this.onExit({
                code: e,
                aborted: this.abortRequestedByUser || null === e
            });
        }
        hasExitOccurred() {
            return this.hasExited;
        }
        acknowledgeExternalTeardown() {
            this.hasExited = !0, this.resume({
                force: !0
            });
        }
        isTerminalClosed() {
            return this.hasExited || this.hasClosed;
        }
        showPrompt() {
            this.emitImmediate(this.osc633("A")), this.emitImmediate("$ "), this.emitImmediate(this.osc633("B"));
        }
        showCommand(e) {
            this.emitImmediate(this.osc633("E", this.escapeOscValue(e))), this.emitImmediate(`${e}\r\n`), this.emitImmediate(this.osc633("C"));
        }
        showCommandCompleted(e) {
            this.emitImmediate(this.osc633("D", e.toString()));
        }
        escapeOscValue(e) {
            return e.replace(/\\/g, "\\\\").replace(/;/g, "\\x3b").replace(/[\x00-\x1f]/g, (e)=>`\\x${e.charCodeAt(0).toString(16).padStart(2, "0")}`);
        }
        osc633(e, ...t) {
            return `]633;${[
                e,
                ...t
            ].filter((e)=>void 0 !== e).join(";")}`;
        }
    }
    class cl extends $i {
        constructor(e){
            super(), this.projectDir = e, this.terminals = new Map, this.pseudoTerminals = new Map, this.abortFunctions = new Map, this.closeListeners = new Map, this.trackedWork = new Map, this.headlessShells = new Map, this.completionPublishedShellIds = new Set, this.shellWorkNotificationQueue = new il;
        }
        async createTerminal(e) {
            const { shellId: t, command: r, cwd: n, registerEventHandler: s, conversationId: o, abortShell: i, description: a, toolCallId: c, isShellExecOutputBackpressureEnabled: l = ()=>!1, getShellExecOutputSuppressionOptions: u = ()=>{} } = e, d = `Cursor (${this.extractCommandDescription(r)})`;
            let p;
            const m = new al(r, n, i, (e)=>{
                const r = e.aborted ? "aborted" : 0 === e.code ? "success" : "error", n = e.aborted || 0 === e.code || null === e.code ? void 0 : `exit_code=${e.code}`;
                this.enqueueShellCompletion(t, r, n), this.disposeShellTerminal(t);
            }, l, u);
            this.pseudoTerminals.set(t, m), p = H.window.createTerminal({
                name: d,
                pty: m,
                convertEol: !0,
                iconPath: new H.ThemeIcon("infinity"),
                hideFromUser: !1,
                metadata: {
                    backgroundShellId: t,
                    conversationId: o,
                    agentOwned: !0
                }
            }), this.terminals.set(t, p), this.abortFunctions.set(t, i);
            const h = this.createShellWorkItem({
                shellId: t,
                command: r,
                conversationId: o,
                description: a,
                toolCallId: c
            });
            this.trackedWork.set(t, h), this.shellWorkNotificationQueue.queue(()=>this.notifyShellUpserted(h)), s(m.getEventHandler());
            const f = H.window.onDidCloseTerminal((e)=>{
                if (e === p) {
                    m.hasExitOccurred() || this.enqueueShellCompletion(t, "aborted", "terminated_by_user");
                    const e = this.abortFunctions.get(t);
                    e && e(), this.cleanupShell(t);
                }
            });
            this.closeListeners.set(t, f);
        }
        async trackHeadlessShell(e) {
            const { shellId: t, command: r, conversationId: n, abortShell: s, description: o, toolCallId: i, onCleanup: a } = e;
            this.abortFunctions.set(t, s), this.headlessShells.set(t, a);
            const c = this.createShellWorkItem({
                shellId: t,
                command: r,
                conversationId: n,
                description: o,
                toolCallId: i
            });
            this.trackedWork.set(t, c), this.shellWorkNotificationQueue.queue(()=>this.notifyShellUpserted(c));
        }
        shouldForwardShellOutputCompletion(e) {
            if ("task_progress" === e.reason) return !0;
            if ("task_finished" !== e.reason) return !1;
            const t = this.getShellIdFromCompletionTaskId(e.taskId);
            return void 0 !== t && (this.headlessShells.has(t) || this.terminals.has(t));
        }
        enqueueShellOutputCompletion(e) {
            if ("shell" !== e.kind) return;
            const t = this.getShellIdFromCompletionTaskId(e.taskId);
            if (void 0 === t) return;
            const r = this.trackedWork.get(t);
            if ("task_finished" === e.reason) return this.completionPublishedShellIds.has(t) || !r?.composerId || (this.completionPublishedShellIds.add(t), this.forwardShellOutputCompletion(t, r.composerId, e.toolCallId ?? r.toolCallId, e)), void this.backupDisposeShellTerminal(t);
            r?.composerId && this.forwardShellOutputCompletion(t, r.composerId, e.toolCallId ?? r.toolCallId, e);
        }
        backupDisposeShellTerminal(e) {
            if (this.headlessShells.has(e)) return void this.cleanupShell(e);
            const t = this.pseudoTerminals.get(e);
            t?.hasExitOccurred() || (t?.acknowledgeExternalTeardown(), this.disposeShellTerminal(e));
        }
        disposeShellTerminal(e) {
            const t = this.terminals.get(e), r = this.pseudoTerminals.get(e);
            this.cleanupShell(e, {
                disposePty: !1
            }), (t || r) && queueMicrotask(()=>{
                r?.dispose(), this.pseudoTerminals.delete(e), t?.dispose();
            });
        }
        createShellWorkItem(e) {
            return {
                id: String(e.shellId),
                kind: "shell",
                composerId: e.conversationId ?? "",
                title: e.description || e.command,
                startTimeMs: Date.now(),
                ...void 0 !== e.toolCallId ? {
                    toolCallId: e.toolCallId
                } : {}
            };
        }
        async notifyShellUpserted(e) {
            try {
                await H.cursor.upsertBackgroundShellWork(e);
            } catch  {}
        }
        async notifyShellCleared(e) {
            try {
                await H.cursor.clearBackgroundShellWork(String(e));
            } catch  {}
        }
        async notifyBackgroundTaskCompletion(e) {
            try {
                await H.cursor.enqueueBackgroundWakeup({
                    conversationId: e.composerId,
                    id: e.taskId,
                    source: "shell",
                    payload: e
                });
            } catch  {}
        }
        async getLongRunningJobsEnabled() {
            return void 0 !== this.longRunningJobsEnabled ? this.longRunningJobsEnabled : (this.longRunningJobsEnabledPromise || (this.longRunningJobsEnabledPromise = Promise.resolve(H.cursor.checkFeatureGate("long_running_jobs")).then((e)=>(this.longRunningJobsEnabled = e, e), ()=>(this.longRunningJobsEnabled = !1, !1))), this.longRunningJobsEnabledPromise);
        }
        enqueueShellCompletion(e, t, r) {
            if (this.completionPublishedShellIds.has(e)) return;
            const n = this.trackedWork.get(e);
            n && n.composerId && (this.completionPublishedShellIds.add(e), this.shellWorkNotificationQueue.queue(()=>this.getLongRunningJobsEnabled().then((s)=>{
                    if (s) return this.notifyBackgroundTaskCompletion(function(e) {
                        const t = ol(e.projectDir, e.shellId);
                        return {
                            composerId: e.composerId,
                            taskId: String(e.shellId),
                            ...void 0 !== e.toolCallId ? {
                                toolCallId: e.toolCallId
                            } : {},
                            kind: "shell",
                            status: e.status,
                            title: e.title,
                            ...e.detail ? {
                                detail: e.detail
                            } : {},
                            ...t ? {
                                outputPath: t
                            } : {},
                            reason: "task_finished"
                        };
                    }({
                        projectDir: this.projectDir,
                        shellId: e,
                        composerId: n.composerId,
                        toolCallId: n.toolCallId,
                        title: n.title,
                        status: t,
                        ...r ? {
                            detail: r
                        } : {}
                    }));
                })));
        }
        forwardShellOutputCompletion(e, t, r, n) {
            this.shellWorkNotificationQueue.queue(()=>this.getLongRunningJobsEnabled().then((s)=>{
                    if (!s) return;
                    const o = n.outputPath ?? ol(this.projectDir, e);
                    return this.notifyBackgroundTaskCompletion({
                        composerId: t,
                        taskId: n.taskId,
                        ...void 0 !== r ? {
                            toolCallId: r
                        } : {},
                        kind: n.kind,
                        status: n.status,
                        title: n.title,
                        ...n.detail ? {
                            detail: n.detail
                        } : {},
                        ...o ? {
                            outputPath: o
                        } : {},
                        ...n.reason ? {
                            reason: n.reason
                        } : {}
                    });
                }));
        }
        getShellIdFromCompletionTaskId(e) {
            const t = e.trim().split(":", 1)[0];
            if (!t) return;
            const r = Number(t);
            return Number.isInteger(r) ? r : void 0;
        }
        cleanupShell(e, t) {
            const r = t?.disposePty ?? !0;
            this.terminals.delete(e), r && (this.pseudoTerminals.get(e)?.dispose(), this.pseudoTerminals.delete(e)), this.abortFunctions.delete(e), this.headlessShells.get(e)?.(), this.headlessShells.delete(e), this.disposeCloseListener(e), this.trackedWork.has(e) && (this.trackedWork.delete(e), this.shellWorkNotificationQueue.queue(()=>this.notifyShellCleared(e)));
        }
        disposeCloseListener(e) {
            const t = this.closeListeners.get(e);
            t && (t.dispose(), this.closeListeners.delete(e));
        }
        async listBackgroundShellWork(e) {
            const t = [
                ...this.trackedWork.values()
            ];
            return e ? t.filter((t)=>t.composerId === e) : t;
        }
        async killBackgroundShell(e) {
            const t = Number(e);
            if (!Number.isInteger(t)) return !1;
            const r = this.abortFunctions.get(t);
            return !!r && (this.disposeCloseListener(t), this.terminals.get(t)?.dispose(), this.enqueueShellCompletion(t, "aborted", "terminated_by_user"), r(), this.cleanupShell(t), !0);
        }
        async showBackgroundShell(e) {
            const t = Number(e);
            if (!Number.isInteger(t)) return !1;
            const r = this.terminals.get(t);
            if (r) return r.show(!1), !0;
            if (this.headlessShells.has(t) && this.projectDir) {
                const e = ol(this.projectDir, t);
                if (void 0 === e) return !1;
                const r = H.Uri.file(e);
                return H.cursor.isGlass ? (await H.commands.executeCommand("glass.openFileInStableTab", {
                    uri: {
                        scheme: r.scheme,
                        path: r.path
                    }
                }), !0) : (await H.commands.executeCommand("vscode.open", r, {
                    preview: !1
                }), !0);
            }
            return !1;
        }
        extractCommandDescription(e) {
            const t = e.split("\n")[0];
            return (t.length > 50 ? t.substring(0, 47) + "..." : t) || "Shell";
        }
        getTerminal(e) {
            return this.terminals.get(e);
        }
        dispose() {
            if (!this.isDisposed) {
                for (const e of this.abortFunctions.values())e();
                for (const e of this.terminals.values())e.dispose();
                for (const e of [
                    ...this.trackedWork.keys()
                ])this.cleanupShell(e);
                for (const e of this.pseudoTerminals.values())e.dispose();
                this.terminals.clear(), this.pseudoTerminals.clear(), this.abortFunctions.clear(), this.closeListeners.clear(), this.trackedWork.clear(), super.dispose();
            }
        }
    }
    var ll = require("./module-59903.js");
    class ul {
        constructor(e, t){
            this.ignoreService = e, this.provider = t, this.worktreeGuardByRootsKey = new Map;
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
            const n = await this.provider();
            if (void 0 === n) return;
            const s = this.getWorktreeGuardInfo(t);
            if ((0, z.fl)({
                targetPath: r.path,
                workspacePaths: t,
                mainWorktreePath: s?.mainWorktreePath
            })) throw new Error(z.PS);
            const o = r.outputMode ?? "content", i = {
                path: r.path,
                context: r.context,
                contextBefore: r.contextBefore,
                contextAfter: r.contextAfter,
                literal: !1,
                caseInsensitive: r.caseInsensitive,
                multiline: r.multiline,
                sort: r.sort,
                includes: void 0 !== r.glob ? [
                    r.glob
                ] : void 0,
                excludes: void 0
            };
            try {
                return "content" === o ? await this.executeContentMode(n, t, r.pattern, i) : "files_with_matches" === o ? await this.executeFilesMode(n, t, r.pattern, i) : "count" === o ? await this.executeCountMode(n, t, r.pattern, i) : void 0;
            } catch (e) {
                return;
            }
        }
        async executeContentMode(e, t, r, n) {
            const s = await e.queryContent(t, r, n);
            if (null === s) return;
            const o = {};
            for (const [e, t] of Object.entries(s)){
                const r = [];
                let n = t.totalLines, s = t.totalMatchedLines;
                for (const o of t.byFile){
                    const t = o.matches ?? [], i = await (0, L.yeE)((0, z.o1)(o.file, e));
                    if (null === i || await this.ignoreService.isIgnoredByAny(i)) {
                        n -= t.length, s -= t.filter((e)=>!e.isContextLine).length;
                        continue;
                    }
                    const a = new ll.uI({
                        file: o.file,
                        matches: t.map((e)=>new ll.dx({
                                lineNumber: e.lineNumber,
                                content: e.content,
                                isContextLine: e.isContextLine
                            }))
                    });
                    r.push(a);
                }
                const i = new ll.Zp({
                    matches: r,
                    totalLines: n,
                    totalMatchedLines: s,
                    clientTruncated: t.truncated
                });
                o[e] = new ll.vD({
                    result: {
                        case: "content",
                        value: i
                    }
                });
            }
            return o;
        }
        async executeFilesMode(e, t, r, n) {
            const s = await e.queryContent(t, r, {
                ...n,
                mode: "files_only"
            });
            if (null === s) return;
            const o = {};
            for (const [e, t] of Object.entries(s)){
                const r = [];
                let n = 0;
                for (const s of t.byFile){
                    const t = await (0, L.yeE)((0, z.o1)(s.file, e));
                    null === t || await this.ignoreService.isIgnoredByAny(t) ? n++ : r.push(s.file);
                }
                const s = new ll.T7({
                    files: r,
                    totalFiles: t.totalFiles - n,
                    clientTruncated: t.truncated
                });
                o[e] = new ll.vD({
                    result: {
                        case: "files",
                        value: s
                    }
                });
            }
            return o;
        }
        async executeCountMode(e, t, r, n) {
            const s = await e.queryContent(t, r, {
                ...n,
                mode: "count"
            });
            if (null === s) return;
            const o = {};
            for (const [e, t] of Object.entries(s)){
                const r = [];
                let n = 0, s = 0;
                for (const o of t.byFile){
                    const t = o.count ?? 0, i = await (0, L.yeE)((0, z.o1)(o.file, e));
                    null === i || await this.ignoreService.isIgnoredByAny(i) ? s++ : (r.push(new ll.sS({
                        file: o.file,
                        count: t
                    })), n += t);
                }
                const i = new ll.xA({
                    counts: r,
                    totalFiles: t.totalFiles - s,
                    totalMatches: n,
                    clientTruncated: t.truncated
                });
                o[e] = new ll.vD({
                    result: {
                        case: "count",
                        value: i
                    }
                });
            }
            return o;
        }
        async getTrackedState(e) {
            const t = this.provider();
            if (void 0 !== t) try {
                const r = await t.getTrackedState(e);
                if (null === r) return;
                const n = {};
                for (const [e, t] of Object.entries(r))n[e] = {
                    gitStatus: t.gitStatus,
                    gitBranchName: t.gitBranchName
                };
                return n;
            } catch  {
                return;
            }
        }
    }
    var dl = require("./module-71801.js"), pl = require("./module-34175.js");
    function ml(e, t) {
        const r = [], n = new Set;
        for (const s of t){
            n.add(s.serverIdentifier);
            const t = e.get(s.serverIdentifier);
            void 0 !== t && t === s.snapshotGeneration || r.push(s), e.set(s.serverIdentifier, s.snapshotGeneration);
        }
        for (const t of Array.from(e.keys()))n.has(t) || e.delete(t);
        return r;
    }
    var hl = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), fl = (e)=>{
        throw TypeError(e);
    }, gl = (e, t, r)=>{
        var n, s;
        null != t ? ("object" != typeof t && "function" != typeof t && fl("Object expected"), r && (n = t[hl("asyncDispose")]), void 0 === n && (n = t[hl("dispose")], r && (s = n)), "function" != typeof n && fl("Object not disposable"), s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.push([
            r,
            n,
            t
        ])) : r && e.push([
            r
        ]);
        return t;
    }, yl = (e, t, r)=>{
        var n = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r, n) {
            return (n = Error(r)).name = "SuppressedError", n.error = e, n.suppressed = t, n;
        }, s = (e)=>t = r ? new n(e, t, "An error was suppressed during disposal") : (r = !0, e), o = (n)=>{
            for(; n = e.pop();)try {
                var i = n[1] && n[1].call(n[2]);
                if (n[0]) return Promise.resolve(i).then(o, (e)=>(s(e), o()));
            } catch (e) {
                s(e);
            }
            if (r) throw t;
        };
        return o();
    };
    const wl = H.env.remoteName ? `lease_connection:${H.env.remoteName}` : "lease_connection:local";
    let vl = "unknown";
    function _l(e, t, r = "distribution", n) {
        try {
            const s = n?.some((e)=>e.startsWith("mcp_version:")), o = [
                wl,
                ...s ? [] : [
                    "mcp_version:snapshots"
                ],
                ...n ?? []
            ];
            "distribution" === r ? H.cursor.metricsDistribution({
                stat: e,
                value: t,
                tags: o
            }) : H.cursor.metricsIncrement({
                stat: e,
                value: t,
                tags: o
            });
        } catch  {}
    }
    function bl(e, t, r, n) {
        return (0, h.uj)((r ?? (0, f.q6)()).withName(e), async (r, s)=>{
            const o = Date.now();
            s.setAttribute("mcp.op.name", e), s.setAttribute("mcp.lease.type", vl), s.setAttribute("mcp.lease.connection", wl);
            try {
                const r = await Promise.resolve(t()), i = Date.now() - o;
                return s.setAttribute("mcp.op.duration_ms", String(i)), s.setAttribute("mcp.op.outcome", "success"), _l("mcp.ipc.duration_ms", i, "distribution", [
                    `name:${e}`,
                    "outcome:success",
                    ...n ?? []
                ]), _l("mcp.ipc.count", 1, "increment", [
                    `name:${e}`,
                    "outcome:success",
                    ...n ?? []
                ]), r;
            } catch (t) {
                const r = Date.now() - o;
                throw s.setAttribute("mcp.op.duration_ms", String(r)), s.setAttribute("mcp.op.outcome", "error"), _l("mcp.ipc.duration_ms", r, "distribution", [
                    `name:${e}`,
                    "outcome:error",
                    ...n ?? []
                ]), _l("mcp.ipc.count", 1, "increment", [
                    `name:${e}`,
                    "outcome:error",
                    ...n ?? []
                ]), t;
            }
        });
    }
    const Sl = [
        "mcp_version:vscode_lease"
    ];
    function kl(e) {
        return void 0 === e ? {
            serverIdentifiers: void 0,
            reason: H.cursor.McpLeaseChangeReason.Unknown
        } : {
            serverIdentifiers: e.serverIdentifiers ? [
                ...e.serverIdentifiers
            ] : void 0,
            reason: e.reason
        };
    }
    class xl {
        constructor(){
            this.changeListeners = new Set, this.mainThreadLeaseRegistration = H.cursor.registerMcpLeaseChangeListener(), this.mcpLeasePromise = (async ()=>{
                const e = H.extensions.getExtension("anysphere.cursor-mcp");
                if (!e) throw new Error("cursor-mcp extension is not installed or not available");
                e.isActive || await e.activate();
                const t = e.exports;
                if (!t) throw new Error("cursor-mcp extension API is not available");
                const r = t.getMcpLease();
                return this.leaseChangeDisposable = r.onDidChange((e)=>{
                    this.fireDidChange(e);
                }), r;
            })();
        }
        onDidChange(e) {
            return this.changeListeners.add(e), {
                dispose: ()=>{
                    this.changeListeners.delete(e);
                }
            };
        }
        fireDidChange(e) {
            for (const t of this.changeListeners)try {
                t(e);
            } catch (e) {
                console.error("Error in MCP change listener:", e);
            }
        }
        async getMcpLease() {
            return this.mcpLeasePromise;
        }
        async getClients(e) {
            return bl("vscode_lease.get_clients", async ()=>(await this.getMcpLease()).getClients(e), e, Sl);
        }
        async getClient(e, t) {
            return bl("vscode_lease.get_client", async ()=>(await this.getMcpLease()).getClient(e, t), e, Sl);
        }
        async getInstructions(e) {
            return bl("vscode_lease.get_instructions", async ()=>(await this.getMcpLease()).getInstructions(e), e, Sl);
        }
        async getTools(e) {
            return bl("vscode_lease.get_tools", async ()=>(await this.getMcpLease()).getTools(e), e, Sl);
        }
        async getToolsForServers(e, t) {
            return bl("vscode_lease.get_tools_for_servers", async ()=>{
                const r = await this.getMcpLease();
                if ("getToolsForServers" in r && "function" == typeof r.getToolsForServers) return r.getToolsForServers(e, t);
                const n = new Set(t);
                return (await r.getTools(e)).filter((e)=>n.has(e.clientKey));
            }, e, Sl);
        }
        async getToolSet(e) {
            return bl("vscode_lease.get_tool_set", async ()=>(await this.getMcpLease()).getToolSet(e), e, Sl);
        }
        dispose() {
            this.leaseChangeDisposable && (this.leaseChangeDisposable.dispose(), this.leaseChangeDisposable = void 0), this.mainThreadLeaseRegistration.dispose(), this.changeListeners.clear();
        }
    }
    function El(e) {
        if (e) return e.command ? {
            command: e.command,
            args: e.args
        } : e.url ? {
            url: e.url
        } : void 0;
    }
    class Il {
        constructor(e, t, r){
            this.tools = e, this.ctx = t, this.extraMetricTags = r ?? [];
        }
        async execute(e, t, r, n) {
            const s = this.tools.find((t)=>t.name === e);
            if (!s) throw new dl.U$(e, this.tools.map((e)=>e.name));
            return bl("workbench_toolset.execute", async ()=>{
                const e = n?.createProvider(s.providerIdentifier, s.toolName, r), o = e ? async (t)=>await e.elicit({
                        message: t.message,
                        requestedSchema: t.requestedSchema
                    }) : void 0, { serializableContext: i, cancellationTokenSource: a, dispose: c } = Uo(this.ctx);
                try {
                    const e = await H.cursor.callMcpLeaseTool(s.clientKey, s.toolName, t, r, i, a.token, o, i.composerId);
                    return {
                        content: e.content,
                        isError: e.isError,
                        structuredContent: e.structuredContent
                    };
                } finally{
                    c();
                }
            }, this.ctx, this.extraMetricTags);
        }
        getTools() {
            return this.tools;
        }
    }
    class Tl {
        constructor(e, t){
            this.serverIdentifier = e.serverIdentifier, this.serverName = e.serverName, this.snapshot = e, this.config = El(t);
        }
        async getTools(e) {
            return this.snapshot.tools.map((e)=>({
                    name: e.name,
                    description: e.description,
                    inputSchema: e.inputSchema,
                    outputSchema: e.outputSchema,
                    annotations: e.annotations
                }));
        }
        async callTool(e, t, r, n, s) {
            return bl("snapshot_client.call_tool", async ()=>{
                const { serializableContext: o, cancellationTokenSource: i, dispose: a } = Uo(e);
                try {
                    const e = s ? async (e)=>await s.elicit({
                            message: e.message,
                            requestedSchema: e.requestedSchema
                        }) : void 0, a = await H.cursor.callMcpLeaseTool(this.serverIdentifier, t, r, n, o, i.token, e, o.composerId);
                    return {
                        content: a.content,
                        isError: a.isError,
                        structuredContent: a.structuredContent
                    };
                } finally{
                    a();
                }
            }, e, [
                "mcp_version:snapshots"
            ]);
        }
        async getInstructions(e) {
            return this.snapshot.instructions ?? void 0;
        }
        async getState(e) {
            switch(this.snapshot.status){
                case "connected":
                case "degraded":
                    return {
                        kind: "ready"
                    };
                case "needsAuth":
                    return {
                        kind: "requires_authentication",
                        url: this.snapshot.statusDetail ?? "",
                        callback: async ()=>{}
                    };
                case "error":
                    return {
                        kind: "error",
                        message: this.snapshot.statusDetail
                    };
                default:
                    return {
                        kind: "loading"
                    };
            }
        }
        async listResources(e) {
            return {
                resources: this.snapshot.resources
            };
        }
        async readResource(e, t) {
            return bl("snapshot_client.read_resource", async ()=>{
                const { serializableContext: r, cancellationTokenSource: n, dispose: s } = Uo(e);
                try {
                    return await H.cursor.readMcpLeaseResource(this.serverIdentifier, t.uri, r, n.token);
                } finally{
                    s();
                }
            }, e, [
                "mcp_version:snapshots"
            ]);
        }
        async listPrompts(e) {
            return this.snapshot.prompts;
        }
        async getPrompt(e, t, r) {
            return bl("snapshot_client.get_prompt", async ()=>{
                const { serializableContext: n, cancellationTokenSource: s, dispose: o } = Uo(e);
                try {
                    return await H.cursor.getMcpLeasePrompt(this.serverIdentifier, t, r, n, s.token);
                } finally{
                    o();
                }
            }, e, [
                "mcp_version:snapshots"
            ]);
        }
    }
    class Cl {
        constructor(){
            this.changeListeners = new Set, this._mergedNotifyFlush = !1, this._disposed = !1, this._snapshotProvider = new Pl, this.leaseChangeDisposable = H.cursor.registerMcpLeaseChangeListener();
            const e = H.cursor.onDidChangeMcpLease((e)=>{
                this.serverConfigsPromise = void 0, this.scheduleMergedNotify(kl(e));
            }), t = H.cursor.onDidChangeMcpSnapshots((e)=>{
                this.serverConfigsPromise = void 0, this.scheduleMergedNotify({
                    serverIdentifiers: e ? [
                        ...e
                    ] : void 0,
                    reason: H.cursor.McpLeaseChangeReason.Snapshots
                });
            }), r = this.leaseChangeDisposable.dispose.bind(this.leaseChangeDisposable);
            this.leaseChangeDisposable = {
                dispose: ()=>{
                    r(), e.dispose(), t.dispose();
                }
            };
        }
        get snapshotProvider() {
            return this._snapshotProvider;
        }
        scheduleMergedNotify(t) {
            this._disposed || (this._mergedNotifyPending = (0, e.sfj)(this._mergedNotifyPending, t), this._mergedNotifyFlush || (this._mergedNotifyFlush = !0, queueMicrotask(()=>{
                if (this._mergedNotifyFlush = !1, this._disposed) return;
                const e = this._mergedNotifyPending;
                this._mergedNotifyPending = void 0, void 0 !== e && this.fireDidChange(e);
            })));
        }
        onDidChange(e) {
            return this.changeListeners.add(e), {
                dispose: ()=>{
                    this.changeListeners.delete(e);
                }
            };
        }
        fireDidChange(e) {
            for (const t of this.changeListeners)try {
                t(e);
            } catch (e) {
                console.error("Error in MCP snapshot change listener:", e);
            }
        }
        getServerConfigs(e) {
            if (!this.serverConfigsPromise) {
                let t;
                t = (async ()=>{
                    const r = new Map;
                    try {
                        const t = await H.cursor.getMcpLeaseServers(e);
                        for (const e of t)e.config && r.set(e.identifier, e.config);
                    } catch (e) {
                        _l("mcp.snapshot.server_config_resolve_error", 1, "increment"), Ro({
                            subkey: "agent_exec",
                            message: "Failed to resolve MCP server configs for hook payloads",
                            metadata: {
                                event: "mcp_snapshot_server_config_resolve_error",
                                error: e instanceof Error ? e.message : String(e)
                            }
                        }), this.serverConfigsPromise === t && (this.serverConfigsPromise = void 0);
                    }
                    return r;
                })(), this.serverConfigsPromise = t;
            }
            return this.serverConfigsPromise;
        }
        async getClients(e) {
            return bl("snapshot_lease.get_clients", async ()=>{
                const t = Uo(e);
                try {
                    const [e, r] = await Promise.all([
                        H.cursor.getMcpSnapshots(t.serializableContext),
                        this.getServerConfigs(t.serializableContext)
                    ]), n = {};
                    for (const t of e)n[t.serverIdentifier] = new Tl(t, r.get(t.serverIdentifier));
                    return n;
                } finally{
                    t.dispose();
                }
            }, e, [
                "mcp_version:snapshots"
            ]);
        }
        async getClient(e, t) {
            return bl("snapshot_lease.get_client", async ()=>{
                const r = Uo(e);
                try {
                    const [e, n] = await Promise.all([
                        H.cursor.getMcpSnapshot(t, r.serializableContext),
                        this.getServerConfigs(r.serializableContext)
                    ]);
                    let s = e;
                    if (!s) {
                        s = (await H.cursor.getMcpSnapshots(r.serializableContext)).find((e)=>e.serverName === t);
                    }
                    return s ? new Tl(s, n.get(s.serverIdentifier)) : void 0;
                } finally{
                    r.dispose();
                }
            }, e, [
                "mcp_version:snapshots"
            ]);
        }
        async getInstructions(e) {
            return bl("snapshot_lease.get_instructions", async ()=>{
                const { serializableContext: t, dispose: r } = Uo(e);
                try {
                    return (await H.cursor.getMcpSnapshots(t)).filter((e)=>void 0 !== e.instructions && e.instructions.trim().length > 0).map((e)=>new pl.I0({
                            serverName: e.serverName,
                            instructions: e.instructions.trim(),
                            serverIdentifier: e.serverIdentifier
                        }));
                } finally{
                    r();
                }
            }, e, [
                "mcp_version:snapshots"
            ]);
        }
        async getTools(e) {
            return bl("snapshot_lease.get_tools", async ()=>{
                const { serializableContext: t, dispose: r } = Uo(e);
                try {
                    const e = await H.cursor.getMcpSnapshotTools(t), r = [];
                    for (const t of e)for (const e of t.tools)r.push({
                        name: `${t.serverIdentifier}-${e.name}`,
                        description: e.description,
                        inputSchema: e.inputSchema,
                        outputSchema: e.outputSchema,
                        clientKey: t.serverIdentifier,
                        providerIdentifier: t.serverName,
                        plugin: t.plugin,
                        marketplace: t.marketplace,
                        pluginId: t.pluginId,
                        marketplaceId: t.marketplaceId,
                        toolName: e.name,
                        ..."internal" === t.source ? {
                            source: "internal"
                        } : {}
                    });
                    return r;
                } finally{
                    r();
                }
            }, e, [
                "mcp_version:snapshots"
            ]);
        }
        async getToolsForServers(e, t) {
            const r = new Set(t);
            return (await this.getTools(e)).filter((e)=>r.has(e.clientKey));
        }
        async getToolSet(e) {
            const t = await this.getTools(e);
            return new Il(t, e, [
                "mcp_version:snapshots"
            ]);
        }
        dispose() {
            this._disposed || (this._disposed = !0, this.serverConfigsPromise = void 0, this.leaseChangeDisposable && (this.leaseChangeDisposable.dispose(), this.leaseChangeDisposable = void 0), this.changeListeners.clear());
        }
    }
    class Pl {
        constructor(){
            this._knownGenerations = new Map;
        }
        async getSnapshot(e, t) {
            return bl("snapshot_provider.get_snapshot", async ()=>{
                const r = Uo(e);
                try {
                    const e = await H.cursor.getMcpSnapshot(t, r.serializableContext);
                    return e ? this._knownGenerations.set(e.serverIdentifier, e.snapshotGeneration) : this._knownGenerations.delete(t), e ? Al(e) : void 0;
                } finally{
                    r.dispose();
                }
            }, e, [
                "mcp_version:snapshots"
            ]);
        }
        async getAllSnapshots(e) {
            return bl("snapshot_provider.get_all_snapshots", async ()=>{
                const t = Uo(e);
                try {
                    const e = await H.cursor.getMcpSnapshots(t.serializableContext);
                    return ml(this._knownGenerations, e), e.map(Al);
                } finally{
                    t.dispose();
                }
            }, e, [
                "mcp_version:snapshots"
            ]);
        }
        onDidChange(e) {
            return H.cursor.onDidChangeMcpSnapshots(async (t)=>{
                const r = Date.now(), n = await H.cursor.getMcpSnapshots(), s = Date.now() - r, o = ml(this._knownGenerations, n);
                _l("mcp.ipc.duration_ms", s, "distribution", [
                    "name:snapshot_provider.notify_pull",
                    "outcome:success",
                    "mcp_version:snapshots"
                ]), _l("mcp.ipc.count", 1, "increment", [
                    "name:snapshot_provider.notify_pull",
                    "outcome:success",
                    "mcp_version:snapshots"
                ]), _l("mcp.snapshot.notify_pull_changed_count", o.length, "distribution", [
                    "mcp_version:snapshots"
                ]);
                for (const t of o)e(Al(t));
            });
        }
    }
    function Al(e) {
        return {
            serverIdentifier: e.serverIdentifier,
            serverName: e.serverName,
            plugin: e.plugin,
            marketplace: e.marketplace,
            pluginId: e.pluginId,
            marketplaceId: e.marketplaceId,
            status: e.status,
            statusDetail: e.statusDetail,
            tools: e.tools.map((e)=>({
                    name: e.name,
                    description: e.description,
                    inputSchema: e.inputSchema,
                    outputSchema: e.outputSchema,
                    annotations: e.annotations
                })),
            resources: e.resources,
            prompts: e.prompts,
            instructions: e.instructions,
            snapshotGeneration: e.snapshotGeneration
        };
    }
    function Rl(e, t, r) {
        Ro({
            subkey: "agent_exec",
            message: "MCP agent-exec lease selected",
            metadata: {
                event: "mcp_agent_exec_lease_selected",
                lease_type: e,
                lease_reason: t,
                lease_connection: wl,
                ...r
            }
        });
    }
    function Ml(e, t) {
        return vl = "snapshot", _l("mcp.agent_exec.lease_selected", 1, "increment", [
            "lease_type:snapshot",
            `reason:${e}`
        ]), Rl("snapshot", e, t), new Cl;
    }
    async function Jl(e) {
        var t = [];
        try {
            const r = gl(t, (0, h.VI)(e.withName("getVscodeMcpLease"))).span;
            if (void 0 === H.env.remoteName) return r.setAttribute("mcp.lease.type", "snapshot"), r.setAttribute("mcp.lease.reason", "local"), Ml("local");
            try {
                const e = await async function() {
                    const e = H.extensions.getExtension("anysphere.cursor-mcp");
                    if (!e) return;
                    return e.isActive || await e.activate(), e.exports ? new xl : void 0;
                }();
                if (e) return vl = "vscode", r.setAttribute("mcp.lease.type", "vscode"), _l("mcp.agent_exec.lease_selected", 1, "increment", [
                    "lease_type:vscode"
                ]), Rl("vscode", "vscode_lease_available", {
                    shared_process_gate_enabled: !1
                }), e;
            } catch  {}
            return r.setAttribute("mcp.lease.type", "snapshot"), r.setAttribute("mcp.lease.reason", "vscode_lease_unavailable"), Ml("vscode_lease_unavailable");
        } catch (e) {
            var r = e, n = !0;
        } finally{
            yl(t, r, n);
        }
    }
    const Ol = Symbol.for("anysphere.cursor.canvasPeerAgentStoreFilesDirs");
    function Bl() {
        return globalThis[Ol];
    }
    const Dl = "canvas.getHostThemeState";
    class ql {
        constructor(){
            this._providers = new Map, this._providerListeners = new Map, this._changeListeners = [], this._disposed = !1;
        }
        onDidChangeState(e) {
            return this._changeListeners.push(e), {
                dispose: ()=>{
                    const t = this._changeListeners.indexOf(e);
                    t >= 0 && this._changeListeners.splice(t, 1);
                }
            };
        }
        registerStateProvider(e) {
            if (this._disposed) return e.dispose(), {
                dispose () {}
            };
            const t = this._providers.get(e.channel);
            t && (this._providerListeners.get(e.channel)?.dispose(), t.dispose()), this._providers.set(e.channel, e);
            const r = e.onDidChange(()=>{
                this._emitProvider(e);
            });
            return this._providerListeners.set(e.channel, r), this._emitProvider(e), {
                dispose: ()=>{
                    this._providers.get(e.channel) === e && (this._providerListeners.get(e.channel)?.dispose(), this._providerListeners.delete(e.channel), this._providers.delete(e.channel), e.dispose());
                }
            };
        }
        getAllState() {
            const e = [];
            for (const t of this._providers.values()){
                const r = Nl(t.getState());
                void 0 !== r && e.push({
                    channel: t.channel,
                    payload: r
                });
            }
            return e;
        }
        dispose() {
            if (!this._disposed) {
                this._disposed = !0;
                for (const e of this._providerListeners.values())e.dispose();
                this._providerListeners.clear();
                for (const e of this._providers.values())e.dispose();
                this._providers.clear(), this._changeListeners.length = 0;
            }
        }
        _emitProvider(e) {
            const t = Nl(e.getState());
            if (void 0 !== t) for (const r of this._changeListeners)r(e.channel, t);
        }
    }
    function Nl(e) {
        try {
            return JSON.stringify(e);
        } catch  {
            return;
        }
    }
    const Fl = (0, g.h)("canvas-server-provider");
    function Ul(e) {
        H.commands.executeCommand("canvas.handleCanvasError", e.canvasId, e.error, e.errorKind);
    }
    function Ll(e) {
        H.commands.executeCommand("canvas.handleCanvasErrorCleared", e);
    }
    const $l = 1e4, jl = 100;
    function Gl(e) {
        return "function" == typeof e?.then;
    }
    function zl(e, t) {
        let r;
        const n = new Promise((e)=>{
            r = setTimeout(()=>e(void 0), Math.max(0, t));
        });
        return Promise.race([
            Promise.resolve(e),
            n
        ]).finally(()=>{
            void 0 !== r && clearTimeout(r);
        });
    }
    function Wl(e, t) {
        const r = "string" == typeof e ? {
            runtimeDir: e,
            logContext: t
        } : e, { runtimeDir: n } = r, s = new Ac({
            runtimeDir: n,
            logContext: r.logContext,
            nodeExecPath: r.nodeExecPath
        }), o = new ql, i = o.registerStateProvider(function() {
            const e = (0, f.q6)(), t = [];
            let r = Hl();
            const n = ()=>{
                for (const r of t)try {
                    r();
                } catch (t) {
                    Fl.warn(e, "Canvas theme listener threw during broadcast", {
                        errorType: t instanceof Error ? t.name : typeof t
                    });
                }
            };
            let s = 0;
            const o = async ()=>{
                const e = ++s;
                let t;
                try {
                    const e = await H.commands.executeCommand(Dl);
                    e && "string" == typeof e.kind && (t = {
                        kind: e.kind,
                        ...e.primary ? {
                            primary: e.primary
                        } : {},
                        ...e.editorBackground ? {
                            editorBackground: e.editorBackground
                        } : {},
                        ...e.editorForeground ? {
                            editorForeground: e.editorForeground
                        } : {}
                    });
                } catch  {
                    t = void 0;
                }
                if (e === s) {
                    if (void 0 === t) {
                        const e = Hl().kind;
                        return void (e !== r.kind && (r = {
                            ...r,
                            kind: e
                        }, n()));
                    }
                    r = t, n();
                }
            }, i = H.window.onDidChangeActiveColorTheme(()=>{
                o();
            });
            return o(), {
                channel: "theme",
                getState: ()=>r,
                onDidChange: (e)=>(t.push(e), {
                        dispose () {
                            const r = t.indexOf(e);
                            r >= 0 && t.splice(r, 1);
                        }
                    }),
                dispose () {
                    i.dispose(), t.length = 0;
                }
            };
        }());
        s.onAction((e, t)=>(function(e, t, r, n) {
                switch(Fl.info(n, "Canvas action dispatched", {
                    canvasId: t,
                    actionType: r.type
                }), r.type){
                    case "openAgent":
                        H.commands.executeCommand("canvas.openAgentByConversationId", r.agentId);
                        break;
                    case "newComposerChat":
                        {
                            const s = e.getRegisteredCanvasPath(t);
                            if (!s) {
                                Fl.warn(n, "newComposerChat: unknown canvasId", {
                                    canvasId: t
                                });
                                break;
                            }
                            H.commands.executeCommand("canvas.newComposerChat", s, r.userPrompt);
                            break;
                        }
                    case "openFile":
                        {
                            const e = [
                                r.path
                            ];
                            void 0 !== r.selection && e.push(r.selection), H.commands.executeCommand("canvas.openFileInWorkbench", ...e);
                            break;
                        }
                }
            })(s, e, t, a)), s.onError(Ul), s.onErrorCleared(Ll);
        const a = r.logContext ?? (0, f.q6)(), c = new Map, l = (e)=>{
            const t = c.get(e);
            void 0 !== t && (c.delete(e), t.close());
        }, u = o.onDidChangeState((e, t)=>{
            s.pushStateAll({
                channel: e,
                payload: t
            });
        });
        return void 0 !== r.cloudCanvasCacheDir && async function(e) {
            let t;
            try {
                t = await (0, W.readdir)(e);
            } catch  {
                return;
            }
            const r = async (e, t)=>{
                try {
                    const r = await (0, W.lstat)(e);
                    return r.mtimeMs > t ? 0 : (await (0, W.unlink)(e), r.size);
                } catch  {
                    return 0;
                }
            }, n = [];
            for (const r of t){
                const t = v.join(e, r);
                try {
                    const e = await (0, W.lstat)(t);
                    e.isFile() && !e.isSymbolicLink() && n.push({
                        path: t,
                        mtimeMs: e.mtimeMs,
                        size: e.size
                    });
                } catch  {}
            }
            const s = Date.now(), o = [];
            for (const e of n)s - e.mtimeMs > Hc ? await r(e.path, e.mtimeMs) : o.push(e);
            o.sort((e, t)=>e.mtimeMs - t.mtimeMs);
            let i = o.reduce((e, t)=>e + t.size, 0);
            for (const e of o){
                if (i <= Kc) break;
                i -= await r(e.path, e.mtimeMs);
            }
        }(r.cloudCanvasCacheDir), {
            async registerCanvas (e) {
                const t = (t)=>{
                    throw Fl.warn(a, "Rejected canvas registration for invalid path", {
                        kind: e.kind,
                        reason: t
                    }), new Error(`Invalid Canvas registration path: ${t}`);
                }, i = "bundle" === e.kind && function(e) {
                    const t = v.resolve(e);
                    return void 0 !== Ic({
                        path: t,
                        replicaFilesDirs: [
                            v.dirname(v.dirname(v.dirname(t)))
                        ]
                    });
                }(e.path) ? await async function(e) {
                    if (void 0 === e) return [];
                    const t = Date.now() + $l;
                    for(;;){
                        const r = t - Date.now(), n = Math.min(jl, r), s = e(), o = Gl(s) ? await zl(s, n) : s;
                        if (void 0 !== o && o.length > 0) return o;
                        if (Date.now() >= t) return o ?? [];
                        void 0 !== o && await new Promise((e)=>setTimeout(e, n));
                    }
                }(r.getReplicaAgentStoreFilesDirs) : [];
                let u;
                if ("bundle" === e.kind && (u = Ic({
                    path: e.path,
                    replicaFilesDirs: i
                }), void 0 !== u)) {
                    void 0 === await Tc(u) && t("realpath-not-replica-canvas-store");
                    await async function(e) {
                        const t = await (0, W.lstat)(e.layout.bundlePath).catch(()=>{}), r = !0 === t?.isFile() && !t.isSymbolicLink();
                        let n;
                        try {
                            const t = await (0, W.lstat)(e.layout.sourcePath);
                            if (!t.isFile() || t.isSymbolicLink()) return r;
                            n = await (0, W.readFile)(e.layout.sourcePath, "utf8");
                        } catch  {
                            return r;
                        }
                        if (r) {
                            const t = await el(e.layout.canvasDir);
                            if (t?.sourceSha256 === Xc(n)) return !0;
                        }
                        try {
                            return await tl(e), !0;
                        } catch  {
                            return r;
                        }
                    }({
                        layout: u,
                        runtimeDir: n
                    }) || t("replica-source-missing");
                }
                const d = "bundle" === e.kind ? await async function(e) {
                    const { path: t, peerAgentStoreFilesDirs: r, replicaAgentStoreFilesDirs: n, cloudCanvasCacheDir: s } = e, o = v.basename(t);
                    if (!_c(t) || !Ma(o) && o !== Ea.Rj) return {
                        status: "invalid",
                        reason: "path-not-canvas-bundle"
                    };
                    const i = await xc(t);
                    if ("status" in i) return i;
                    const a = {
                        status: "valid",
                        stats: i.stats,
                        realPath: i.realPath
                    };
                    if (void 0 !== s) {
                        const e = await Ec([
                            s
                        ], s);
                        if (void 0 !== e && kc(v.relative(e, i.realPath), Ma)) return a;
                    }
                    const c = Ic({
                        path: t,
                        replicaFilesDirs: n
                    });
                    if (void 0 !== c) {
                        const e = await Tc(c), t = void 0 === e ? void 0 : v.relative(e, i.realPath).split(v.sep);
                        return void 0 === t || 2 !== t.length || t[0]?.toLowerCase() !== c.canvasId || t[1] !== o ? {
                            status: "invalid",
                            reason: "realpath-not-replica-canvas-store"
                        } : a;
                    }
                    for (const e of r){
                        const t = v.join(e, "artifacts"), r = v.join(t, ...Ia.split("/")), n = await Ec([
                            e,
                            t,
                            r
                        ], r);
                        if (void 0 !== n && kc(v.relative(n, i.realPath), Ma)) return a;
                    }
                    return {
                        status: "invalid",
                        reason: "realpath-not-peer-canvas-store"
                    };
                }({
                    path: e.path,
                    peerAgentStoreFilesDirs: r.getPeerAgentStoreFilesDirs?.() ?? [],
                    replicaAgentStoreFilesDirs: i,
                    cloudCanvasCacheDir: r.cloudCanvasCacheDir
                }) : await (async ()=>{
                    const t = await Cc(e.path);
                    return "valid" === t.status ? t : async function(e) {
                        const { path: t, cloudCanvasCacheDir: r } = e;
                        if (void 0 === r || !_c(t) || !Sc(v.basename(t))) return {
                            status: "invalid",
                            reason: "path-not-managed-canvas"
                        };
                        const n = await xc(t);
                        if ("status" in n) return n;
                        const s = await Ec([
                            r
                        ], r);
                        return void 0 !== s && kc(v.relative(s, n.realPath), Sc) ? {
                            status: "valid",
                            stats: n.stats,
                            realPath: n.realPath
                        } : {
                            status: "invalid",
                            reason: "path-not-managed-canvas"
                        };
                    }({
                        path: e.path,
                        cloudCanvasCacheDir: r.cloudCanvasCacheDir
                    });
                })();
                "invalid" === d.status && t(d.reason);
                const p = {
                    kind: e.kind,
                    path: d.realPath
                }, m = await s.registerCanvas(p).catch((e)=>{
                    throw Fl.error(a, "Failed to start canvas server", {
                        errorType: e instanceof Error ? e.name : typeof e
                    }), e;
                });
                for (const e of o.getAllState())s.pushState({
                    canvasId: m.canvasId,
                    channel: e.channel,
                    payload: e.payload
                });
                if (l(m.canvasId), void 0 !== u) try {
                    c.set(m.canvasId, function(e) {
                        let t;
                        const r = v.basename(e.layout.sourcePath), n = (0, rr.watch)(e.layout.canvasDir, {
                            persistent: !1
                        }, (n, s)=>{
                            s === r && (clearTimeout(t), t = setTimeout(()=>{
                                tl({
                                    layout: e.layout,
                                    runtimeDir: e.runtimeDir
                                }).catch((t)=>{
                                    e.onError?.(t);
                                });
                            }, Qc));
                        });
                        return n.on("error", (t)=>{
                            e.onError?.(t);
                        }), {
                            close () {
                                clearTimeout(t), t = void 0, n.close();
                            }
                        };
                    }({
                        layout: u,
                        runtimeDir: n,
                        onError: (e)=>{
                            Fl.warn(a, "Replica canvas persist failed", {
                                errorType: e instanceof Error ? e.name : typeof e
                            });
                        }
                    }));
                } catch (e) {
                    Fl.warn(a, "Replica canvas watch unavailable", {
                        errorType: e instanceof Error ? e.name : typeof e
                    });
                }
                return m;
            },
            getCanvasUrl: async (e, t)=>s.getCanvasUrl({
                    canvasId: e,
                    preview: t
                }),
            async destroyCanvas (e) {
                l(e), await s.destroyCanvas({
                    canvasId: e
                });
            },
            async stageCloudCanvasBundle (e) {
                const t = r.cloudCanvasCacheDir;
                if (void 0 === t) throw new Error("Cloud canvas cache is not configured");
                return async function(e) {
                    const { bundleGzip: t, cacheDir: r } = e;
                    if (t.byteLength > Qa) throw new Error("Cloud canvas bundle exceeds the compressed size limit");
                    if (!(0, Ea.IR)(t)) throw new Error("Cloud canvas bundle is not gzip data");
                    const n = (0, tr.createHash)("sha256").update(t).digest("hex"), s = v.join(r, `${n}.canvas.bundle.gz`), o = v.join(r, `${n}.canvas.tsx`);
                    try {
                        const e = new Date;
                        await (0, W.utimes)(s, e, e);
                        try {
                            return await (0, W.utimes)(o, e, e), {
                                bundlePath: s,
                                sourcePath: o
                            };
                        } catch (e) {
                            if ("ENOENT" !== e.code) throw e;
                            return Wc({
                                bundleGzip: t,
                                bundlePath: s,
                                sourcePath: o
                            });
                        }
                    } catch (e) {
                        if ("ENOENT" !== e.code) throw e;
                    }
                    return await (0, W.mkdir)(r, {
                        recursive: !0
                    }), await zc({
                        filePath: s,
                        contents: t
                    }), Wc({
                        bundleGzip: t,
                        bundlePath: s,
                        sourcePath: o
                    });
                }({
                    bundleGzip: e,
                    cacheDir: t
                });
            },
            async shareCanvas (e, t, r) {
                const n = ()=>{
                    if (r?.isCancellationRequested) throw new H.CancellationError;
                };
                n();
                const o = await Cc(e);
                if ("invalid" === o.status) return Fl.warn(a, "Rejected canvas share for invalid source path", {
                    reason: o.reason
                }), {
                    status: "canvas-missing"
                };
                let i;
                try {
                    i = await s.getShareArtifact({
                        path: o.realPath
                    }), n();
                } catch (e) {
                    if (e instanceof H.CancellationError) throw e;
                    throw Fl.error(a, "Failed to build canvas share artifact for upload", {
                        errorType: e instanceof Error ? e.name : typeof e
                    }), e;
                }
                switch(i.status.status){
                    case "rendered":
                        {
                            const r = await Cc(e);
                            if ("invalid" === r.status) return Fl.warn(a, "Rejected canvas share after source path changed", {
                                reason: r.reason
                            }), {
                                status: "canvas-missing"
                            };
                            if (o.realPath !== r.realPath || function({ before: e, after: t }) {
                                return e.dev !== t.dev || e.ino !== t.ino || e.size !== t.size || e.mtimeMs !== t.mtimeMs;
                            }({
                                before: o.stats,
                                after: r.stats
                            })) return Fl.warn(a, "Rejected canvas share after source file changed during artifact build"), {
                                status: "canvas-missing"
                            };
                            n();
                            try {
                                return {
                                    status: "shared",
                                    shareUrl: (await H.cursor.shareCanvasArtifact({
                                        title: t.title,
                                        visibility: t.visibility,
                                        appJs: i.appJs,
                                        dataJson: i.dataJson,
                                        canvasPath: e
                                    })).shareUrl
                                };
                            } catch (e) {
                                throw Fl.error(a, "Failed to upload canvas share artifact", {
                                    errorType: e instanceof Error ? e.name : typeof e
                                }), e;
                            }
                        }
                    case "compile-error":
                    case "runtime-error":
                    case "canvas-missing":
                    case "content-too-large":
                        return i.status;
                    default:
                        return i.status;
                }
            },
            dispose () {
                for (const e of [
                    ...c.keys()
                ])l(e);
                u.dispose(), i.dispose(), o.dispose(), s.stop();
            }
        };
    }
    function Hl() {
        const { kind: e } = H.window.activeColorTheme;
        switch(e){
            case H.ColorThemeKind.Light:
                return {
                    kind: "light"
                };
            case H.ColorThemeKind.Dark:
                return {
                    kind: "dark"
                };
            case H.ColorThemeKind.HighContrast:
                return {
                    kind: "hc-dark"
                };
            case H.ColorThemeKind.HighContrastLight:
                return {
                    kind: "hc-light"
                };
            default:
                return {
                    kind: "dark"
                };
        }
    }
    function Kl(e) {
        const t = H.env.bundledNodePath?.() ?? (process.versions.electron ? void 0 : process.execPath), r = Wl({
            runtimeDir: (0, ko.join)(e.runtimeExtensionPath, "dist", "canvas-runtime"),
            logContext: e.serviceCtx,
            nodeExecPath: t,
            getPeerAgentStoreFilesDirs: ()=>(function(e) {
                    const t = Bl();
                    return "function" == typeof t?.getPeerAgentStoreFilesDirs ? t.getPeerAgentStoreFilesDirs() : e();
                })(fn),
            getReplicaAgentStoreFilesDirs: ()=>(function(e) {
                    const t = Bl();
                    return "function" == typeof t?.getReplicaAgentStoreFilesDirs ? t.getReplicaAgentStoreFilesDirs() : e();
                })(hn),
            cloudCanvasCacheDir: (0, ko.join)(e.context.globalStorageUri.fsPath, "cloud-canvas-cache")
        }), n = H.cursor.registerCanvasServerProvider(r);
        return e.context.subscriptions.push(n), {
            disposeProvider: ()=>{
                r.dispose();
            }
        };
    }
    var Vl = require("./module-69584.js"), Yl = require("./module-91434.js");
    const Ql = (0, g.h)("ControlledConversationActionManager");
    class Xl {
        get signal() {
            return this.abortController.signal;
        }
        get abortRequested() {
            return this.abortCalled;
        }
        constructor(){
            this.abortCallbacks = [], this.abortController = new AbortController, this.acceptsActions = !0, this.disposed = !1, this.abortStarted = !1, this.abortCalled = !1, this.runActive = !1, this.unprocessedUserMessages = [], this.clientStream = (0, Yl.Jt)();
        }
        addAbortCallback(e) {
            this.abortCallbacks.push(e);
        }
        abort(e, t) {
            this.abortCalled = !0;
            if (this.abortController.signal.aborted || this.abortStarted) return;
            const r = t?.interruptedPendingToolCallResolutions;
            if (this.abortStarted = !0, !this.runActive) {
                this.abortController.abort(e);
                for (const e of this.abortCallbacks)e();
                return void (this.abortCallbacks.length = 0);
            }
            const n = this.abortController, s = [
                ...this.abortCallbacks
            ];
            this.abortCallbacks.length = 0, this.submitConversationAction(new Vl.QFf({
                action: {
                    case: "cancelAction",
                    value: new Vl.TTG({
                        reason: e,
                        interruptedPendingToolCallResolutions: r
                    })
                }
            })).catch(()=>{}).finally(()=>{
                n.abort(e);
                for (const e of s)e();
                if (this.abortController === n) {
                    const e = [
                        ...this.abortCallbacks
                    ];
                    this.abortCallbacks.length = 0;
                    for (const t of e)t();
                }
            });
        }
        async submitConversationAction(e) {
            if (!this.acceptsActions) throw new Yl.W2("ControlledConversationActionManager is not accepting actions");
            if ("userMessageAction" === e.action.case) {
                const t = e.action.value.userMessage;
                t && this.unprocessedUserMessages.push(t);
            }
            await this.clientStream.write(e);
        }
        queueFollowUpUserMessage(e) {
            if (this.disposed || this.abortStarted) throw new Yl.W2("ControlledConversationActionManager run was aborted or disposed");
            this.unprocessedUserMessages.push(e);
        }
        async enqueueReplayableConversationAction(e) {
            if ("asyncAskQuestionCompletionAction" !== e.action.case) throw new TypeError("Only asyncAskQuestionCompletionAction can use enqueue acknowledgement");
            if (!this.acceptsActions) throw new Yl.W2("ControlledConversationActionManager is not accepting actions");
            this.clientStream.write(e).catch(()=>{});
        }
        markMessageAsProcessed(e) {
            this.unprocessedUserMessages = this.unprocessedUserMessages.filter((t)=>t.messageId !== e.messageId);
        }
        requeueMessage(e) {
            this.unprocessedUserMessages.some((t)=>t.messageId === e.messageId) || this.unprocessedUserMessages.unshift(e);
        }
        getUnprocessedUserMessages() {
            return [
                ...this.unprocessedUserMessages
            ];
        }
        hasUnprocessedMessages() {
            return this.unprocessedUserMessages.length > 0;
        }
        close() {
            this.acceptsActions = !1, this.clientStream.close();
        }
        reopen() {
            this.disposed || this.acceptsActions || this.resetStream();
        }
        resetStream() {
            if (this.disposed) throw new Yl.W2("ControlledConversationActionManager disposed");
            this.acceptsActions = !1, this.clientStream.close(), this.clientStream = (0, Yl.Jt)(), this.acceptsActions = !0, this.abortController = new AbortController, this.abortStarted = !1;
            for (const e of this.unprocessedUserMessages)this.clientStream.write(new Vl.QFf({
                action: {
                    case: "userMessageAction",
                    value: new Vl.Vtf({
                        userMessage: e
                    })
                }
            })).catch(()=>{});
        }
        async run(e, t) {
            const r = this.clientStream;
            this.runActive = !0;
            try {
                for await (const n of r)try {
                    await t.write(n);
                } catch (t) {
                    Ql.error(e, "Error writing conversation action", t);
                }
            } catch (e) {
                if (!(e instanceof Yl.W2)) throw e;
            } finally{
                this.clientStream === r && (this.runActive = !1);
            }
        }
        dispose() {
            this.disposed || (this.disposed = !0, this.abortCallbacks.length = 0, this.acceptsActions = !1, this.clientStream.throw(new Yl.W2("ControlledConversationActionManager disposed")));
        }
    }
    var Zl = require("./module-55094.js"), eu = require("./module-86209.js"), tu = require("./module-12544.js"), ru = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), nu = (e)=>{
        throw TypeError(e);
    }, su = (e, t, r)=>{
        var n, s;
        null != t ? ("object" != typeof t && "function" != typeof t && nu("Object expected"), r && (n = t[ru("asyncDispose")]), void 0 === n && (n = t[ru("dispose")], r && (s = n)), "function" != typeof n && nu("Object not disposable"), s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.push([
            r,
            n,
            t
        ])) : r && e.push([
            r
        ]);
        return t;
    };
    let ou;
    const iu = (0, g.h)("cursor-agent-exec-provider"), au = (0, g.h)("cursor-agent-exec-subagent-proxy"), cu = (0, g.h)("cursor-agent-exec-prompt-quality-upload"), lu = (0, g.h)("cursor-agent-exec-gateway-request");
    function uu() {
        return ou ??= Promise.resolve().then(require.bind(require, "./module-74150.js")), ou;
    }
    const du = 1e6;
    function pu(e, t) {
        return t <= du ? e : e.slice(0, du) + `\n[truncated: showing the first 1000000 of ${t} characters]`;
    }
    class mu {
        constructor(e){
            this.callbacks = e;
        }
        getBlob(e, t) {
            return this.callbacks.getBlob(t);
        }
        setBlob(e, t, r) {
            return this.callbacks.setBlob(t, r, !1);
        }
        setBlobLocallyOnly(e, t, r) {
            return this.callbacks.setBlob(t, r, !0);
        }
        flush(e) {
            return Promise.resolve();
        }
    }
    class hu {
        constructor(e){
            this.callbacks = e, this.postTurnEndedWorkQueue = [];
        }
        async sendUpdate(e, t) {
            await this.callbacks.sendInteractionUpdate(t.toBinary());
        }
        async query(e, t) {
            const r = await this.callbacks.queryInteraction(t.toBinary());
            return Vl.Y5.fromBinary(r);
        }
        enqueuePostTurnEndedWork(e) {
            this.postTurnEndedWorkQueue.push(e);
        }
        async flushPostTurnEndedWork(e) {
            const t = this.postTurnEndedWorkQueue.splice(0);
            for (const e of t)await e();
        }
    }
    class fu {
        constructor(e, t, r, n, s, o){
            this.factory = e, this.teamSettingsService = t, this.createTerminalExecutor = r, this.workspacePaths = n, this.loggerBackend = s, this.metricsBackend = o, this.sessions = new Map, this.sessionConflictNoticeKeys = new Map;
        }
        invalidateTeamSettingsCache() {
            this.teamSettingsService.invalidateCache();
        }
        async spawn(e, t) {
            const r = t.cwd ?? this.workspacePaths[0] ?? So.homedir(), n = this.createTerminalExecutor().clone(r);
            try {
                const t = (0, f.q6)().with(g._O, this.loggerBackend).with($.Fm, this.metricsBackend), s = await n.execute(t, e, {
                    workingDirectory: r,
                    env: {
                        CURSOR_AGENT: "1"
                    }
                });
                let o = "", i = "", a = 0, c = 0, l = 0;
                for await (const e of s)if ("stdout" === e.type) {
                    const t = e.data.toString("utf8");
                    a += t.length, o.length < du && (o += t.slice(0, du - o.length));
                } else if ("stderr" === e.type) {
                    const t = e.data.toString("utf8");
                    c += t.length, i.length < du && (i += t.slice(0, du - i.length));
                } else "exit" === e.type && (l = e.code ?? 0);
                return {
                    stdout: pu(o, a),
                    stderr: pu(i, c),
                    code: l
                };
            } catch (e) {
                const t = e.message ?? String(e);
                return {
                    stdout: "",
                    stderr: pu(t, t.length),
                    code: e.exitCode ?? 1
                };
            }
        }
        createSession(e, t, r, n, s, o) {
            const i = crypto.randomUUID(), { manager: a, baseResources: c, unsubscribe: l, terminalExecutor: u } = this.factory.createSessionExecManager(i, e, t, r, n.workspacePaths, n.worktreeMainPath, s, o, n.isGlassRoot), d = this.loggerBackend, p = this.metricsBackend, m = this.factory, y = this.sessions, w = new Set;
            this.sessionConflictNoticeKeys.set(i, w), m.stampConflictNoticeFloor(i);
            const v = {
                createStream (e, t, r) {
                    const n = e.conversationId?.trim();
                    void 0 !== n && n.length > 0 && (m.inheritConflictNoticeFloor({
                        fromKey: i,
                        toKey: n
                    }), w.has(n) || (w.add(n), m.acquireConflictNoticeKey(n)), m.bindConflictNoticeConversation({
                        sessionKey: i,
                        conversationId: n
                    }), m.claimConflictNoticeKey(n));
                    return async function*() {
                        var n, s, o, i, c, l, u = [];
                        try {
                            const n = Zl.Ye.fromBinary(t);
                            let s, o;
                            if (n.spanContext) {
                                const e = n.spanContext;
                                s = (0, h.V5)({
                                    traceId: e.traceId,
                                    spanId: e.spanId,
                                    traceFlags: e.traceFlags ?? 1
                                }, "exec.handle").with(g._O, d).with($.Fm, p), o = (0, h.fU)(s);
                            } else s = (0, f.q6)().with(g._O, d).with($.Fm, p);
                            s = s.with(te, e), e.requestId && (s = (0, h.Mf)(s, "requestId", e.requestId)), e.composerId && (s = (0, h.Mf)(s, "composerId", e.composerId));
                            const [i, c] = s.withCancel();
                            r.aborted ? c() : r.addEventListener("abort", ()=>{
                                c();
                            }, {
                                once: !0
                            });
                            su(u, o ? new h.r2(i, o) : void 0);
                            const l = su(u, (0, h.VI)(i.withName("controlledExecManager.handle"))), m = a.handle(l.ctx, n);
                            for await (const e of m){
                                const t = (()=>{
                                    if (e instanceof Zl.yT) return "M";
                                    if (e instanceof Zl.$Y) return "C";
                                    throw new Error("Invalid message type");
                                })(), r = e.toBinary(), n = new Uint8Array(r.length + 1);
                                n[0] = t.charCodeAt(0), n.set(r, 1), yield n;
                            }
                        } catch (e) {
                            var m = e, y = !0;
                        } finally{
                            n = u, s = m, o = y, i = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r, n) {
                                return (n = Error(r)).name = "SuppressedError", n.error = e, n.suppressed = t, n;
                            }, c = (e)=>s = o ? new i(e, s, "An error was suppressed during disposal") : (o = !0, e), (l = (e)=>{
                                for(; e = n.pop();)try {
                                    var t = e[1] && e[1].call(e[2]);
                                    if (e[0]) return Promise.resolve(t).then(l, (e)=>(c(e), l()));
                                } catch (e) {
                                    c(e);
                                }
                                if (o) throw s;
                            })();
                        }
                    }();
                },
                dispose: ()=>{
                    try {
                        l(), c.dispose(), u.dispose();
                    } finally{
                        m.clearConflictDrain(i);
                        for (const e of w)m.releaseConflictNoticeKey(e);
                        this.sessionConflictNoticeKeys.delete(i), y.delete(i);
                    }
                }
            };
            return this.sessions.set(i, v), v;
        }
        async runLocalAgent(t, r, n) {
            const s = crypto.randomUUID(), o = new H.EventEmitter;
            let i, a, c, l;
            void 0 !== r.getPermissions || iu.warn((0, f.q6)().with(g._O, this.loggerBackend), "runLocalAgent: no bridged exec session for local run; failing closed (tools require approval and are denied)", {
                conversationId: t.runOptions.conversationId,
                conversationGroupId: t.runOptions.conversationGroupId
            });
            const u = r.requestApproval ?? (async ()=>({
                    approved: !1,
                    reason: "No exec session is available for this local agent run, so the tool call was denied."
                })), d = r.requestElicitation ?? (async ()=>({
                    action: "cancel"
                })), p = r.notifyFileChange ?? (async ()=>{}), m = r.getPermissions ?? (async ()=>({
                    allow: [],
                    deny: [],
                    approvalMode: "ask-every-time",
                    userConfiguredPolicy: {
                        type: "insecure_none"
                    }
                })), h = r.onDidChangePermissions ?? o.event;
            try {
                ({ resources: i, baseResources: a, unsubscribe: c, terminalExecutor: l } = this.factory.createSessionExecManager(s, u, d, p, t.agentExecOptions.workspacePaths, t.agentExecOptions.worktreeMainPath, m, h, t.agentExecOptions.isGlassRoot, {
                    mcpMetaToolEnabled: !0,
                    mcpTools: t.mcpTools,
                    conflictNoticeSessionKey: t.runOptions.conversationId
                }));
            } catch (e) {
                throw o.dispose(), e;
            }
            const y = t.runOptions.conversationId?.trim();
            if (void 0 !== y && y.length > 0) {
                for (const e of this.sessionConflictNoticeKeys.keys())this.factory.inheritConflictNoticeFloor({
                    fromKey: e,
                    toKey: y
                });
                let e = !1;
                for (const t of this.sessionConflictNoticeKeys.values())if (t.has(y)) {
                    e = !0;
                    break;
                }
                e ? this.factory.claimConflictNoticeKey(y) : this.factory.retainConflictNoticeKey(y);
            }
            if (void 0 !== r.executeSubagent) {
                const t = r.executeSubagent, n = {
                    execute: async (e, r)=>{
                        au.info(e, "subagent proxy: delegating to renderer", {
                            subagentType: r.subagentType,
                            toolCallId: r.toolCallId,
                            runInBackground: !0 === r.runInBackground
                        });
                        try {
                            const n = await t(r.toBinary(), e.signal), s = tu.vS.fromBinary(n);
                            return au.info(e, "subagent proxy: renderer settled", {
                                toolCallId: r.toolCallId,
                                resultCase: s.result.case
                            }), s;
                        } catch (t) {
                            const n = t instanceof Error ? t.message : String(t);
                            return au.error(e, "subagent proxy: RPC failed", void 0, {
                                toolCallId: r.toolCallId,
                                errorType: t instanceof Error ? t.name : "unknown"
                            }), new tu.vS({
                                result: {
                                    case: "error",
                                    value: new tu.od({
                                        error: n
                                    })
                                }
                            });
                        }
                    }
                };
                a.register(e.ZnQ, n);
            }
            if (void 0 !== r.forceBackgroundSubagent) {
                const t = r.forceBackgroundSubagent, n = {
                    execute: async (e, r)=>{
                        au.info(e, "forceBackground subagent proxy: delegating to renderer", {
                            toolCallId: r.toolCallId
                        });
                        try {
                            const e = await t(r.toBinary());
                            return tu.a3.fromBinary(e);
                        } catch (t) {
                            return au.error(e, "forceBackground subagent proxy: RPC failed", void 0, {
                                toolCallId: r.toolCallId,
                                errorType: t instanceof Error ? t.name : "unknown"
                            }), new tu.a3({
                                status: tu.jh.NOT_FOUND
                            });
                        }
                    }
                };
                a.register(e.I2x, n);
            }
            if (void 0 !== r.awaitSubagent) {
                const t = r.awaitSubagent, n = {
                    execute: async (e, r)=>{
                        au.info(e, "subagent await proxy: delegating to renderer", {
                            agentId: r.agentId,
                            timeoutMs: r.timeoutMs
                        });
                        try {
                            const n = await t(r.toBinary(), e.signal), s = tu.zJ.fromBinary(n);
                            return au.info(e, "subagent await proxy: renderer settled", {
                                agentId: r.agentId,
                                resultCase: s.result.case
                            }), s;
                        } catch (t) {
                            const n = t instanceof Error ? t.message : String(t);
                            return au.error(e, "subagent await proxy: RPC failed", void 0, {
                                agentId: r.agentId,
                                errorType: t instanceof Error ? t.name : "unknown"
                            }), new tu.zJ({
                                result: {
                                    case: "error",
                                    value: new tu.Y({
                                        agentId: r.agentId,
                                        error: n
                                    })
                                }
                            });
                        }
                    }
                };
                a.register(e.rz0, n);
            }
            let w, v, _;
            try {
                w = t.modelDetails ? Vl.Gmx.fromBinary(t.modelDetails) : void 0, v = Vl.Gmx.fromBinary(t.defaultModel), _ = {
                    ...t.runOptions,
                    requestedModel: t.runOptions.requestedModel ? eu.G4.fromBinary(t.runOptions.requestedModel) : void 0,
                    subagentModelOverrides: t.runOptions.subagentModelOverrides?.map((e)=>Vl.Bjv.fromBinary(e))
                };
            } catch (e) {
                throw o.dispose(), c(), a.dispose(), l.dispose(), e;
            }
            const b = {
                conversationId: t.runOptions.conversationId,
                composerId: t.runOptions.conversationGroupId ?? t.runOptions.conversationId,
                requestId: t.runOptions.generationUUID ?? crypto.randomUUID(),
                modelName: w?.modelId ?? v.modelId ?? ""
            }, S = (0, f.q6)().with(g._O, this.loggerBackend).with($.Fm, this.metricsBackend).with(te, b), [k, x] = S.withCancel();
            void 0 !== n && (n.aborted ? x() : n.addEventListener("abort", ()=>{
                au.info(k, "runLocalAgent: abort signal fired -> cancelling local run ctx"), x();
            }, {
                once: !0
            }));
            try {
                const { LocalAgentClient: n } = await uu(), s = "cursor-dev" === t.urlProtocol ? r.uploadPromptQualitySnapshot : void 0, o = new n({
                    localProvider: {
                        kind: "http",
                        endpoints: [
                            {
                                baseUrl: t.baseUrl,
                                ...void 0 !== t.apiKey ? {
                                    apiKey: t.apiKey
                                } : {}
                            }
                        ]
                    },
                    userAgent: t.userAgent,
                    customHeaders: t.customHeaders,
                    urlProtocol: t.urlProtocol,
                    onPromptQualitySnapshot: void 0 === s ? void 0 : (e)=>{
                        s(e.generationUUID, e.capabilityNonce).catch((e)=>{
                            cu.error(k, "Automatic Prompt Quality upload failed", e);
                        });
                    },
                    defaultModel: v,
                    availableModels: ()=>t.availableModelIds.map((e)=>new Vl.Gmx({
                                modelId: e
                            })),
                    privacyMode: t.privacyMode,
                    maxRetries: 10,
                    enableSmartModeClassifier: !0,
                    enableAgentStoreConflictNotices: !0,
                    getWriteBarrierTimeoutMs: Ss(),
                    recordAgentStoreWriteBarrier: ks()
                }), a = (e)=>{
                    lu.info(k, "Gateway request settled", {
                        ...e
                    });
                }, c = Vl.QFf.fromBinary(t.action), l = Vl.Y9z.fromBinary(t.conversationState), u = "userMessageAction" === c.action.case ? c.action.value.userMessage?.mode : void 0, d = void 0 !== u && u !== Vl.xyI.UNSPECIFIED ? u : l.mode, p = d === Vl.xyI.ASK ? (0, e.uaw)(i) : i;
                (0, mt.notifyAgentStoreConversationTurn)(t.runOptions.conversationId, "start");
                try {
                    await o.run(k, l, c, w, new hu(r), p, new mu(r), new Xl, {
                        async handleCheckpoint (e, t) {
                            await r.handleCheckpoint(t.toBinary());
                        },
                        getLatestCheckpoint () {}
                    }, t.mcpTools, {
                        ..._,
                        onGatewayRequest: a
                    });
                } finally{
                    (0, mt.notifyAgentStoreConversationTurn)(t.runOptions.conversationId, "end");
                }
            } finally{
                o.dispose(), c(), a.dispose(), l.dispose();
            }
        }
        async runLocalInference(e) {
            const t = await uu();
            switch(e.kind){
                case "agentName":
                    return t.generateLocalAgentName({
                        modelId: e.modelId,
                        baseUrl: e.baseUrl,
                        apiKey: e.apiKey,
                        userAgent: e.userAgent,
                        customHeaders: e.customHeaders,
                        userMessage: e.userMessage ?? ""
                    });
                case "commitMessage":
                    return t.generateLocalCommitMessage({
                        modelId: e.modelId,
                        baseUrl: e.baseUrl,
                        apiKey: e.apiKey,
                        userAgent: e.userAgent,
                        customHeaders: e.customHeaders,
                        diffs: e.diffs ?? [],
                        previousCommitMessages: e.previousCommitMessages,
                        explicitContext: e.explicitContext
                    });
                case "branchName":
                    return t.generateLocalBranchName({
                        modelId: e.modelId,
                        baseUrl: e.baseUrl,
                        apiKey: e.apiKey,
                        userAgent: e.userAgent,
                        customHeaders: e.customHeaders,
                        diffs: e.diff ?? e.diffs?.join("\n\n") ?? "",
                        context: e.context
                    });
                default:
                    {
                        const t = e.kind;
                        throw new Error(`Unknown local inference kind: ${t}`);
                    }
            }
        }
        async fetchLocalProviderModels(e) {
            const t = await uu(), r = await t.fetchLocalProviderModels({
                baseUrl: e.baseUrl,
                apiKey: e.apiKey,
                userAgent: e.userAgent,
                customHeaders: e.customHeaders
            }), n = t.buildBottlerocketPickerModels(r.models, {
                defaultEffortTier: "curated"
            }).map((e)=>e.toJson()), s = t.findUnsupportedReasoningModelIds(r.models);
            return {
                allProviderModelIds: r.allModelIds,
                pickerModels: n,
                unsupportedReasoningModelIds: s
            };
        }
        dispose() {
            for (const e of this.sessions.values())e.dispose();
            this.sessions.clear(), this.sessionConflictNoticeKeys.clear(), this.factory.clearRetainedConflictNoticeKeys();
        }
    }
    var gu = require("./module-43081.js");
    function yu(e = {}) {
        return !1 !== e.registerAgentExecProvider;
    }
    function wu(e, t, r) {
        const n = function(e = {}) {
            return yu(e) ? "agent-exec-provider" : "noop";
        }(t);
        let s;
        const o = r.registerAgentExecProvider ?? ((e)=>H.cursor.registerAgentExecProvider(e));
        var i;
        return {
            registered: !!yu((i = {
                options: t,
                register: ()=>{
                    s = new fu(r.factory, r.teamSettingsService, r.createTerminalExecutor, r.workspacePaths, r.loggerBackend, r.metricsBackend), e.subscriptions.push(s);
                    const t = o(s);
                    e.subscriptions.push(t);
                }
            }).options) && (i.register(), !0),
            invalidateChannel: n,
            provider: s
        };
    }
    var vu = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), _u = (e)=>{
        throw TypeError(e);
    }, bu = (e, t, r)=>{
        var n, s;
        null != t ? ("object" != typeof t && "function" != typeof t && _u("Object expected"), r && (n = t[vu("asyncDispose")]), void 0 === n && (n = t[vu("dispose")], r && (s = n)), "function" != typeof n && _u("Object not disposable"), s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.push([
            r,
            n,
            t
        ])) : r && e.push([
            r
        ]);
        return t;
    }, Su = (e, t, r)=>{
        var n = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r, n) {
            return (n = Error(r)).name = "SuppressedError", n.error = e, n.suppressed = t, n;
        }, s = (e)=>t = r ? new n(e, t, "An error was suppressed during disposal") : (r = !0, e), o = (n)=>{
            for(; n = e.pop();)try {
                var i = n[1] && n[1].call(n[2]);
                if (n[0]) return Promise.resolve(i).then(o, (e)=>(s(e), o()));
            } catch (e) {
                s(e);
            }
            if (r) throw t;
        };
        return o();
    };
    const ku = "mcp_always_expose_auth_tool";
    let xu, Eu;
    const Iu = "mcp_access_network_allowlist", Tu = "mcp_settings_overhaul", Cu = "mcp_user_extension_stdio_unsandboxed_win32", Pu = "admin_command_denylist_enforcement_killswitch", Au = "cursor_rules_batch_update", Ru = "cursor_agent_host_move_exec", Mu = "agent_host_local_loop", Ju = "reduce_context_hot_path", Ou = "skill_catalog_ide_cache";
    function Bu(e) {
        if ("string" != typeof e) return;
        const t = e.trim();
        return t.length > 0 ? t : void 0;
    }
    const Du = (0, $.Pu)("vscode.agent_exec.activate_calls", {}), qu = {
        sessionExecManagerFactory: void 0,
        activeGitExecutor: void 0,
        activeMcpProvider: void 0
    };
    class Nu {
        constructor(e){
            this.vscodeGitExtension = e;
        }
        async exec(t, r, n, s) {
            var o = [];
            try {
                if (!this.vscodeGitExtension) throw new e.YH2("Failed to execute git command because there is no available Git API. Ensure there is a reachable git installation on the workspace system.");
                bu(o, (0, h.VI)(t.withName("VscodeGitExecutor.exec"), {
                    attributes: {
                        "git.cwd": r,
                        "git.args": n,
                        "git.caller": s?.caller
                    }
                }));
                return await this.vscodeGitExtension.rawGit.exec(r, n, s);
            } catch (e) {
                var i = e, a = !0;
            } finally{
                Su(o, i, a);
            }
        }
    }
    class Fu {
        constructor(e){
            this.spawnerPromise = e;
        }
        async exec(t, r, n, s) {
            var o = [];
            try {
                let l;
                var i = [];
                try {
                    bu(i, (0, h.VI)(t.withName("GitCoreVscodeGitExecutor await git spawner")));
                    l = await this.spawnerPromise;
                } catch (e) {
                    var a = e, c = !0;
                } finally{
                    Su(i, a, c);
                }
                if (void 0 === l) throw new e.YH2("Failed to execute git command because there is no available GitSpawner. Ensure there is a reachable git installation on the workspace system.");
                bu(o, (0, h.VI)(t.withName("VscodeGitExecutor.exec"), {
                    attributes: {
                        "git.cwd": r,
                        "git.args": n,
                        "git.caller": s?.caller
                    }
                }));
                return await l.exec(r, n, s);
            } catch (e) {
                var l = e, u = !0;
            } finally{
                Su(o, l, u);
            }
        }
    }
    const Uu = [];
    class Lu {
        async open(e, t) {}
        async getDiagnostics(e, t) {
            return [];
        }
    }
    class $u {
        constructor(e){
            this.disposables = [], this.watcher = H.workspace.createFileSystemWatcher(e ?? "**");
        }
        onDidChange(e) {
            const t = this.watcher.onDidChange((t)=>{
                e(t.fsPath);
            });
            this.disposables.push(t);
        }
        onDidCreate(e) {
            const t = this.watcher.onDidCreate((t)=>{
                e(t.fsPath);
            });
            this.disposables.push(t);
        }
        onDidDelete(e) {
            const t = this.watcher.onDidDelete((t)=>{
                e(t.fsPath);
            });
            this.disposables.push(t);
        }
        dispose() {
            this.disposables.forEach((e)=>e.dispose()), this.watcher.dispose();
        }
    }
    class ju {
        async getCodebaseReference(e, t) {
            const [r, n] = await Promise.all([
                H.cursor.getRepoInfo(),
                H.cursor.getPathEncryptionKey()
            ]);
            if (r && n) return {
                relativeWorkspacePath: r.relativeWorkspacePath,
                repoName: r.repoName,
                repoOwner: r.repoOwner,
                isTracked: !1,
                isLocal: !0,
                numFiles: 0,
                orthogonalTransformSeed: r.orthogonalTransformSeed ?? 0,
                pathEncryptionKey: n
            };
        }
    }
    async function Gu(t, r = {}) {
        var n = [];
        try {
            const d = Date.now(), p = r.runtimeExtensionPath ?? t.extensionPath, m = H.window.createOutputChannel("Cursor Agent Exec", {
                log: !0
            });
            let w;
            t.subscriptions.push(m);
            const _ = new Promise((e)=>{
                w = e;
            });
            let b = !1;
            _.then(()=>{
                b = !0;
            });
            const S = cs(t, m, Uu, {
                whenProviderRegistered: _
            }).catch((e)=>{
                m.appendLine(`[cursor-agent-exec] Agent store harness activation failed: ${String(e)}`);
            }), k = new Do([
                new Mo,
                new Bo(m)
            ]), x = new qo, E = (0, f.q6)().with(g._O, k).with($.Fm, x);
            Du.increment(E);
            const I = bu(n, (0, h.VI)(E.withName("CursorAgentExec.activate"))).ctx, { initialBuiltinSkillsSyncPromise: T } = me(E, Uu);
            let C;
            let P;
            Me(t, new Promise((e)=>{
                C = e;
            }));
            let A;
            Ue(t, new Promise((e)=>{
                P = e;
            }));
            Ge(t, new Promise((e)=>{
                A = e;
            })), function(e) {
                e.subscriptions.push(H.commands.registerCommand(po, async (e)=>(wo("moveSkillToStore", e), await yo("moveToStore", e))), H.commands.registerCommand(mo, async (e)=>(wo("moveSkillOutOfStore", e), await yo("moveOutOfStore", e))));
            }(t), uo(t), lt(t);
            const R = new ai(()=>(0, f.q6)().with(g._O, k).with($.Fm, x));
            R.start(), Uu.push(()=>R.stop());
            const M = new ii, J = H.commands.registerCommand("cursorAgentExec.startEventLoopDelayMeasurementForTesting", ()=>M.start()), B = H.commands.registerCommand("cursorAgentExec.finishEventLoopDelayMeasurementForTesting", ()=>M.finish());
            Uu.push(()=>J.dispose(), ()=>B.dispose(), ()=>M.dispose()), function(e, t) {
                const r = H.cursor.rgPath;
                if (r) {
                    const n = (0, ci.existsSync)(r), s = (0, ko.dirname)(r), o = (0, ci.existsSync)(s);
                    (0, G.J)(r);
                    const i = {
                        rgPath: r,
                        rgPathExists: n,
                        rgParentDirExists: o,
                        platform: process.platform,
                        arch: process.arch,
                        nodeVersion: process.version,
                        extensionPath: t.extensionPath,
                        execPath: process.execPath,
                        remoteName: H.env.remoteName,
                        uiKind: H.env.uiKind === H.UIKind.Desktop ? "desktop" : "web"
                    };
                    if (n) try {
                        const e = (0, ci.statSync)(r);
                        i.rgFileSize = e.size, i.rgFileMode = e.mode.toString(8), i.rgIsFile = e.isFile();
                    } catch (e) {
                        i.rgStatError = e instanceof Error ? e.message : String(e);
                    }
                    const a = 50;
                    if (o) try {
                        i.parentDirContents = (0, ci.readdirSync)(s).slice(0, a);
                    } catch (e) {
                        i.parentDirListError = e instanceof Error ? e.message : String(e);
                    }
                    const c = (0, ko.dirname)(s);
                    try {
                        i.grandparentDirExists = (0, ci.existsSync)(c), i.grandparentDirExists && (i.grandparentDirContents = (0, ci.readdirSync)(c).slice(0, a));
                    } catch (e) {
                        i.grandparentDirError = e instanceof Error ? e.message : String(e);
                    }
                    const l = "node_modules.asar.unpacked";
                    if (r.includes(l)) {
                        const e = r.split(l)[0];
                        if (e) {
                            try {
                                i.asarExists = (0, ci.existsSync)(e.concat("node_modules.asar"));
                            } catch  {
                                i.asarExists = "check_failed";
                            }
                            const t = e.concat(l);
                            try {
                                if (i.asarUnpackedDirExists = (0, ci.existsSync)(t), i.asarUnpackedDirExists) {
                                    const e = (0, ko.join)(t, "@vscode", "ripgrep");
                                    i.ripgrepPkgDirExists = (0, ci.existsSync)(e);
                                }
                            } catch  {
                                i.asarUnpackedDirExists = "check_failed";
                            }
                        }
                    }
                    ee.info(e, "rg_diagnostics.startup", i), n || ee.warn(e, "rg_diagnostics.startup.missing_binary", i);
                } else ee.error(e, "rg_diagnostics.startup.no_path", {
                    platform: process.platform,
                    arch: process.arch,
                    nodeVersion: process.version,
                    extensionPath: t.extensionPath,
                    execPath: process.execPath,
                    remoteName: H.env.remoteName,
                    uiKind: H.env.uiKind === H.UIKind.Desktop ? "desktop" : "web"
                });
            }(E, t), pi(Uu, (e)=>m.appendLine(e)).catch((e)=>m.appendLine(`[cursor-agent-exec] ripgrep invocation monitor failed: ${String(e)}`));
            const D = function(e) {
                if ("linux" !== process.platform && "win32" !== process.platform && "darwin" !== process.platform) return void console.log(`[cursor-agent-exec] Sandbox helper: unsupported platform ${process.platform}`);
                const t = "win32" === process.platform ? "cursorsandbox.exe" : "cursorsandbox", r = process.resourcesPath, n = ko.dirname(process.execPath);
                console.log("[cursor-agent-exec] Sandbox helper resolution:"), console.log(`[cursor-agent-exec]   platform=${process.platform}`), console.log(`[cursor-agent-exec]   resourcesPath=${r}`), console.log(`[cursor-agent-exec]   execPath=${process.execPath}`), console.log(`[cursor-agent-exec]   execDir=${n}`), console.log(`[cursor-agent-exec]   extensionRoot=${e}`), console.log(`[cursor-agent-exec]   VSCODE_DEV=${process.env.VSCODE_DEV}`);
                const s = [];
                s.push({
                    name: "extensionRoot relative (../../resources/helpers)",
                    path: ko.join(e, "../../resources/helpers", t)
                }), r && (s.push({
                    name: "resourcesPath/app/resources/helpers",
                    path: ko.join(r, "app", "resources", "helpers", t)
                }), s.push({
                    name: "resourcesPath/resources/helpers",
                    path: ko.join(r, "resources", "helpers", t)
                })), s.push({
                    name: "execDir/resources/helpers",
                    path: ko.join(n, "resources", "helpers", t)
                }), s.push({
                    name: "execDir/resources/app/resources/helpers",
                    path: ko.join(n, "resources", "app", "resources", "helpers", t)
                }), "1" === process.env.VSCODE_DEV && s.push({
                    name: "dev node_modules",
                    path: ko.join(e, "../../node_modules/@anysphere/sandbox-helper/bin", t)
                });
                for (const e of s)try {
                    const t = ci.existsSync(e.path);
                    if (console.log(`[cursor-agent-exec]   candidate (${e.name}): ${e.path}, exists=${t}`), !t) {
                        const t = ko.dirname(e.path);
                        try {
                            if (ci.existsSync(t)) {
                                const e = ci.readdirSync(t);
                                console.log(`[cursor-agent-exec]     parent dir ${t} contents: ${JSON.stringify(e)}`);
                            } else console.log(`[cursor-agent-exec]     parent dir ${t} does not exist`);
                        } catch (e) {
                            console.log(`[cursor-agent-exec]     failed to list parent dir: ${e}`);
                        }
                    }
                    if (t) return console.log(`[cursor-agent-exec]   FOUND sandbox helper at: ${e.path}`), e.path;
                } catch (t) {
                    console.log(`[cursor-agent-exec]   candidate (${e.name}): error checking ${e.path}: ${t}`);
                }
                console.log(`[cursor-agent-exec] Sandbox helper: no candidate found after checking ${s.length} paths`);
            }(p);
            if (D) try {
                const e = Eo({
                    checkFeatureGate: ()=>H.cursor.checkFeatureGate("sandbox_read_control_portal"),
                    onDidChangeGates: (e)=>H.cursor.onDidChangeGates(e)
                });
                Uu.push(()=>e.dispose()), (0, G.St)({
                    sandboxBinaryPath: D,
                    workspaceReadEnabled: ()=>e.getEnabled()
                }), console.log(`[cursor-agent-exec] Sandbox configured: binary=${D}`);
            } catch (e) {
                console.error("[cursor-agent-exec] Failed to configure sandbox:", e);
            }
            else console.warn("[cursor-agent-exec] Sandbox helper path not found, sandboxing will be unavailable");
            const q = (H.workspace.workspaceFolders ?? []).map((e)=>e.uri.fsPath);
            ee.info(E, "cursor_agent_exec.startup.workspace_paths", {
                workspacePathCount: q.length,
                workspacePaths: q
            });
            const N = q.at(0), F = (0, z.yn)(N, So.homedir()), K = function() {
                let e = H.env.shell ?? "";
                try {
                    const t = H.workspace.getConfiguration("terminal.integrated"), r = "win32" === process.platform ? "windows" : "darwin" === process.platform ? "osx" : "linux", n = t.get(`defaultProfile.${r}`);
                    if (n) {
                        const s = t.get(`profiles.${r}`), o = s?.[n]?.path;
                        o && (e = o);
                    }
                } catch (e) {
                    console.warn("[cursor-agent-exec] Failed to read terminal config", e);
                }
                return e;
            }();
            let V = !1;
            H.cursor.getUseLegacyTerminalTool().then((e)=>{
                V = e;
            });
            const Y = H.cursor.onDidChangeUseLegacyTerminalTool((e)=>{
                V = e;
            });
            Uu.push(()=>Y.dispose());
            const Q = {
                env: {
                    CURSOR_AGENT: "1"
                }
            }, X = (0, G.Fn)({
                ...Q,
                userTerminalHint: K
            }), Z = (0, G.fi)({
                ...Q,
                shell: (0, G.WE)((0, G.G6)(K))
            }), te = ()=>V ? Z : X, re = (0, y.m4)(), ne = async ()=>{
                try {
                    const e = Date.now(), t = await async function(e) {
                        await (0, W.mkdir)(e.projectsDir, {
                            recursive: !0
                        });
                        const t = await (0, W.realpath)(e.projectsDir), r = Date.now(), n = new Date(r).toISOString().slice(0, 10), s = (0, v.join)(t, `.agent-data-cleanup-${n}`);
                        try {
                            const e = await (0, W.open)(s, "wx", 384);
                            await e.close();
                        } catch (e) {
                            if (e instanceof Error && "code" in e && "EEXIST" === e.code) return;
                            throw e;
                        }
                        return await (0, L.r5P)({
                            projectsDir: t,
                            nowMs: r
                        });
                    }({
                        projectsDir: re
                    });
                    if (void 0 === t) return;
                    ee.debug(E, "Agent data cleanup completed", {
                        ...t,
                        projectsDir: re,
                        durationMs: Date.now() - e
                    });
                } catch (e) {
                    ee.warn(E, "Agent data cleanup failed", {
                        projectsDir: re,
                        error: String(e)
                    });
                }
            }, se = setTimeout(()=>{
                ne();
            }, 3e4), oe = setInterval(()=>{
                ne();
            }, L.BNF);
            Uu.push(()=>{
                clearTimeout(se), clearInterval(oe);
            });
            const ie = {
                getTeamAdminSettings: async ()=>{
                    const e = await H.cursor.getTeamAdminSettings();
                    return e ? j.V5U.fromJson(e, {
                        ignoreUnknownFields: !0
                    }) : void 0;
                },
                getTeamRepos: async ()=>{
                    try {
                        const e = await H.cursor.getTeamRepos();
                        return e ? new j.k1F(e) : void 0;
                    } catch  {
                        return;
                    }
                }
            }, ae = {
                getDefaultNetworkAllowlist: async ()=>{
                    try {
                        const e = await H.cursor.getDynamicConfigValue("sandbox_default_network_allowlist");
                        return e?.allowlist ?? [];
                    } catch  {
                        return [];
                    }
                }
            }, ce = new L.waD(ie, ae, {
                isMcpAccessNetworkAllowlistEnabled: ()=>H.cursor.checkFeatureGate(Iu),
                isMcpSettingsOverhaulEnabled: (e)=>H.cursor.checkFeatureGate(Tu, e),
                isWin32UserExtensionStdioUnsandboxEnabled: (e)=>H.cursor.checkFeatureGate(Cu, e),
                isAdminCommandDenylistEnforcementKilled: ()=>H.cursor.checkFeatureGate(Pu),
                isReadControlEnabled: ()=>H.cursor.checkFeatureGate(xo)
            });
            let le, ue;
            const de = new Promise((e)=>{
                ue = e;
            }), pe = ()=>H.cursor.getThirdPartyExtensibilityEnabled(), fe = ()=>H.cursor.getAllowUserLocalPluginImports(), we = {
                subscribe: (e, t, r)=>{
                    const n = [], s = (e)=>{
                        "git" !== e.scheme && r(e.fsPath);
                    };
                    for (const r of t){
                        const t = new H.RelativePattern(e, r), o = H.workspace.createFileSystemWatcher(t);
                        o.onDidCreate(s), o.onDidChange(s), o.onDidDelete(s), n.push(o);
                    }
                    return ()=>{
                        for (const e of n)e.dispose();
                    };
                }
            }, ve = "rootWorkspace" === H.cursor.glassWorkspaceRole ? H.cursor.workspaceId() : (0, ko.join)(So.tmpdir(), crypto.randomUUID()), _e = (0, y.Xq)(N ?? ve), be = (void 0 === Eu && (Eu = Promise.resolve(H.cursor.getPushRequestContextEnabled()).catch(()=>!1)), Eu);
            H.cursor.pushMcpWorkspaceProjectDir(_e), H.cursor.pushEnvStaticData({
                osVersion: `${So.platform()} ${So.release()}`,
                shell: (0, G.G6)(K),
                projectDir: _e,
                isWorkingDirHomeDir: F
            });
            const Se = new zo(I);
            Uu.push(()=>{
                Se.dispose();
            });
            const ke = Di({
                workspacePaths: q,
                getThirdPartyExtensibilityEnabled: pe,
                getAllowUserLocalPluginImports: fe,
                deactivateTasks: Uu,
                context: t,
                gitExecutorPromise: de
            });
            if (void 0 !== r.mcpProvider && !function(t) {
                if (!(0, e.anv)(t)) return !1;
                const r = t;
                return "function" == typeof r.dispose && (void 0 === r.snapshotProvider || (0, e.Yg2)(r.snapshotProvider));
            }(r.mcpProvider)) throw new Error("cursor-agent-host injected an MCP provider that does not satisfy the DisposableMcpLease contract");
            const [xe, Ee, Ie, Te, Ce, Pe, Ae, Je, Oe, Be, De, qe] = await Promise.all([
                (void 0 === xu && (xu = Promise.resolve(H.cursor.getCursorExtensionsIsolationEnabled()).catch(()=>!1)), xu),
                r.mcpProvider ?? Jl(I),
                ke,
                H.cursor.checkFeatureGate("meta_mcp_tool"),
                H.cursor.checkFeatureGate("mcp_meta_tool_slim_descriptors"),
                H.cursor.checkFeatureGate(ku),
                Promise.resolve(H.cursor.getDynamicConfigValue("mcp_auth_status_copy_config")).catch(()=>{}),
                Se.initialize(I),
                be,
                Promise.resolve(H.cursor.checkFeatureGate("rules_discovery_respect_cursorignore")).catch(()=>!1),
                Promise.resolve(H.cursor.checkFeatureGate("subagents_discovery_allow_external_symlinks")).catch(()=>!1),
                Promise.resolve(H.cursor.checkFeatureGate(Ju)).catch(()=>!1),
                S
            ]);
            qu.activeMcpProvider = Ee, (0, L.ba_)(Be), void 0 === r.mcpProvider && Uu.push(()=>{
                Ee.dispose();
            });
            const { pluginsService: Ne, refreshPluginHooks: Fe } = Ie;
            if (C?.({
                pluginsService: Ne,
                deleteDirectoryToTrash: Re,
                userHomeDirectory: So.homedir()
            }), P?.({
                pluginsService: Ne,
                cacheManager: new ge.WCg(So.homedir()),
                userHomeDirectory: So.homedir()
            }), A?.({
                pluginsService: Ne,
                saveDirtyDocumentsUnder: ye
            }), void 0 !== r.gitExecutor) le = r.gitExecutor;
            else if (xe) {
                var s = [];
                try {
                    bu(s, (0, h.VI)(I.withName("fetch git (isolation)")));
                    const e = (async ()=>{
                        try {
                            const e = await O(m);
                            return new U({
                                gitPath: e.path,
                                onLog: (e)=>m.debug(`[git] ${e.trimEnd()}`)
                            });
                        } catch (e) {
                            return void m.error(e);
                        }
                    })();
                    le = new Fu(e);
                } catch (e) {
                    var o = e, i = !0;
                } finally{
                    Su(s, o, i);
                }
            } else {
                var a = [];
                try {
                    bu(a, (0, h.VI)(I.withName("fetch git (no isolation)")));
                    const e = await async function() {
                        const e = H.extensions.getExtension("vscode.git");
                        if (!e) return;
                        const t = e.isActive ? e.exports : await e.activate();
                        return t && t.enabled ? t.getAPI(1) : void 0;
                    }();
                    void 0 === e && m.error("Failed to find a Git API."), le = new Nu(e);
                } catch (e) {
                    var c = e, l = !0;
                } finally{
                    Su(a, c, l);
                }
            }
            ue(le), qu.activeGitExecutor = le;
            const Le = new L.E1e(le, ce, q);
            !function(e, t) {
                const r = H.workspace.createFileSystemWatcher("**/.cursorignore");
                r.onDidCreate(async (t)=>{
                    const r = await (0, L.yeE)(t.fsPath);
                    null !== r && e.handleCursorIgnoreCreated(r).catch(()=>{});
                }), r.onDidChange(async (t)=>{
                    const r = await (0, L.yeE)(t.fsPath);
                    null !== r && e.handleCursorIgnoreChanged(r).catch(()=>{});
                }), r.onDidDelete(async (t)=>{
                    const r = await (0, L.yeE)(t.fsPath) ?? (0, L.gMI)(t.fsPath);
                    e.handleCursorIgnoreDeleted(r).catch(()=>{});
                }), t.push(()=>{
                    r.dispose();
                });
            }(Le, Uu);
            const $e = new Lu, je = new ju, ze = q.map((e)=>new L.KOV(E, le, e, !0, pe, we, Le)), We = ()=>({
                    agentStoreSkillsDirs: yn.get(),
                    userHomeDirectory: So.homedir()
                }), He = ()=>({
                    ...We(),
                    workspacePaths: q
                }), Ke = await Promise.resolve(H.cursor.checkFeatureGate(Ou)).catch(()=>!1), Ve = new L.EVC(E, q, So.homedir(), le, !0, we, pe, T, "ide", void 0, ()=>yn.get(), Ke ? (0, L.V2h)(t.globalStorageUri.fsPath) : void 0), Ye = new L.Rxj(E, ()=>({
                    importThirdPartyPlugins: pe()
                }), we, Ne), Qe = new L.Px0([
                ...ze,
                Ve,
                Ye
            ], We), Xe = new L.NB([
                Ve,
                Ye
            ], ()=>[], He);
            Uu.push(yn.onDidChange(()=>{
                b ? Ve.reloadSkillRoots() : _.then(()=>{
                    Ve.reloadSkillRoots();
                });
            })), Uu.push(yn.onDidChangeTargetDirs(()=>{
                H.commands.executeCommand(u).then(void 0, ()=>{});
            }));
            const Ze = q.map((e)=>new L.VzO(e, pe, "workspace", De)), et = new L.VzO(So.homedir(), pe, "user", De), tt = new L._Ji(()=>({
                    importThirdPartyPlugins: pe()
                }), Ne), rt = new L.o_K([
                ...Ze,
                et,
                tt
            ]);
            Uu.push(()=>{
                Qe.dispose();
            });
            const nt = Oe && "rootWorkspace" === H.cursor.glassWorkspaceRole && 0 === q.length, st = (e)=>{
                if (!nt) return e;
                const t = bo();
                return e.some((e)=>e.fullPath === t.fullPath) ? e : [
                    t,
                    ...e
                ];
            };
            let ot, it = Promise.resolve();
            const at = (e, t = !1)=>{
                const r = it.then(async ()=>{
                    const r = nl(st(e));
                    if (!t && void 0 !== ot && (s = r, (n = ot).length === s.length && n.every((e, t)=>e.equals(s[t])))) return;
                    var n, s;
                    ot = void 0;
                    await Promise.resolve(H.cursor.checkFeatureGate(Au)).catch(()=>!1) ? await H.cursor.updateCursorRulesInBatches(r) : await H.cursor.updateCursorRules(r), ot = r;
                });
                return it = r.catch(()=>{}), r;
            }, ct = Qe.getAllCursorRules(E).then(async (e)=>{
                m.appendLine("cursorRulesService.getAllCursorRules"), await at(e);
            });
            ct.catch((e)=>{
                m.appendLine(`Failed to load or push initial cursor rules: ${String(e)}`);
            });
            const ut = H.commands.registerCommand("cursorAgentExec.waitForInitialRulesReadyForTesting", async ()=>{
                await ct;
            });
            Uu.push(()=>ut.dispose()), he({
                mergedAgentSkillsService: Xe,
                serviceCtx: E,
                deactivateTasks: Uu,
                pushRequestContextEnabled: Oe
            }), Fe();
            const dt = 4e3;
            let pt;
            const mt = Qe.onDidChangeRules(()=>{
                void 0 !== pt && clearTimeout(pt), pt = setTimeout(()=>{
                    pt = void 0, (async ()=>{
                        const e = await Qe.getAllCursorRules(E);
                        await at(e);
                    })().catch((e)=>{
                        m.appendLine(`cursorRulesService.onDidChangeRules failed: ${String(e)}`);
                    });
                }, dt);
            });
            Uu.push(mt), Uu.push(()=>{
                void 0 !== pt && clearTimeout(pt);
            });
            const ht = H.cursor.registerCursorRulesProvider({
                reloadRules: async ()=>{
                    var e = [];
                    try {
                        const t = (0, f.q6)().with(g._O, k).with($.Fm, x), r = bu(e, (0, h.VI)(t.withName("cursorRulesProvider.reloadRules")));
                        Qe.reload(r.ctx);
                        const n = await Qe.getAllCursorRules(r.ctx);
                        void 0 !== pt && (clearTimeout(pt), pt = void 0), await at(n, !0);
                    } catch (e) {
                        var t = e, r = !0;
                    } finally{
                        Su(e, t, r);
                    }
                }
            });
            Uu.push(()=>ht.dispose());
            const ft = H.cursor.registerSubagentsProvider({
                getAllSubagents: async ()=>rt.getAllSubagents(),
                reload: async ()=>{
                    await rt.reload();
                },
                reloadAndGetAllSubagents: async ()=>await rt.reload()
            });
            Uu.push(()=>ft.dispose());
            const gt = "snapshots", yt = H.window.createOutputChannel("Mcp FileSystem Writer", {
                log: !0
            });
            Uu.push(()=>{
                yt.dispose();
            });
            const wt = new Bo(yt), vt = new Oo(new Jo({
                subkey: "agent_exec_mcp_file_writer",
                mcpVersion: gt
            })), _t = new Do([
                wt,
                vt
            ]);
            let bt;
            try {
                bt = function(e) {
                    if (null === e || "object" != typeof e || Array.isArray(e)) return;
                    const t = e, r = {
                        authToolDescription: Bu(t.authToolDescription),
                        errorStatusMessage: Bu(t.errorStatusMessage),
                        needsAuthStatusMessageWithAuthTool: Bu(t.needsAuthStatusMessageWithAuthTool)
                    };
                    return Object.values(r).every((e)=>void 0 === e) ? void 0 : r;
                }(Ae);
            } catch  {
                bt = void 0;
            }
            const St = new L.x7h(Ee, _e, {
                loggerBackend: _t,
                mcpAuthCopyOverrides: bt,
                alwaysExposeVirtualMcpAuthTool: Pe,
                snapshotProvider: Ee.snapshotProvider,
                mcpVersion: gt,
                onDidWrite: Oe ? (e)=>{
                    H.cursor.pushMcpFileSystemDescriptors(e);
                } : void 0
            });
            Uu.push(()=>{
                St.dispose();
            });
            const kt = new cl(_e);
            Uu.push(()=>{
                kt.dispose();
            });
            const xt = H.cursor.registerBackgroundShellProvider({
                listBackgroundShellWork: async (e)=>kt.listBackgroundShellWork(e),
                killBackgroundShell: async (e)=>kt.killBackgroundShell(e),
                showBackgroundShell: async (e)=>kt.showBackgroundShell(e)
            });
            Uu.push(()=>xt.dispose());
            const Et = new ul(Le, ()=>H.cursor.getGrepProvider());
            let It, Tt, Ct;
            const Pt = ()=>Ct || (Ct = new L.aZ7(Ee), Ct), At = (e, t)=>{
                const r = new L.d2r(Qe, void 0, rt, je, Et, Pt(), le, e, {
                    projectDir: _e,
                    isWorkingDirHomeDir: (0, z.yn)(e.at(0), So.homedir()),
                    createFileWatcher: Oe ? void 0 : (e)=>new $u(e),
                    getSandboxEnabled: void 0,
                    getNetworkAllowlistInfo: ()=>(0, L.mAh)(ce, So.homedir(), e[0]),
                    userTerminalHint: K,
                    getMcpFileSystemOptions: (e, t)=>St.getMcpFileSystemOptions(e, t),
                    mcpMetaToolEnabled: Te,
                    mcpMetaToolSlimDescriptors: Ce,
                    alwaysExposeVirtualMcpAuthTool: Pe,
                    getAgentSkills: (e)=>Xe.getAllAgentSkills(e),
                    additionalRules: t,
                    reduceContextHotPath: qe
                }), n = Qe.onDidChangeRules(()=>{
                    r.rebuildAllCaches();
                });
                return Uu.push(n), r;
            }, Rt = (e)=>e ? (Tt ??= At([
                    So.homedir()
                ], [
                    bo()
                ]), Tt) : (It ??= At(q, void 0), It);
            if (Uu.push(()=>{
                It?.dispose(), Tt?.dispose(), Ct?.dispose();
            }), Oe) {
                const e = (0, f.q6)().with(g._O, k);
                Promise.all(q.map(async (t)=>{
                    let r;
                    try {
                        r = (await le.exec(e, t, [
                            "rev-parse",
                            "--show-toplevel"
                        ], {
                            caller: "pushGitWorkspaceCaches"
                        })).stdout.trim();
                    } catch  {
                        r = void 0;
                    }
                    const n = r ? await (0, L.gTO)(e, le, r) : void 0;
                    return {
                        workspacePath: t,
                        repoPath: r,
                        remoteUrl: n,
                        isOriginBacked: (0, L.a82)(n)
                    };
                })).then((e)=>H.cursor.pushGitWorkspaceCaches(e)).catch((e)=>{
                    console.warn("[cursor-agent-exec] Failed to push git workspace caches", e);
                });
            }
            const Mt = H.cursor.onDidChangeThirdPartyExtensibilityEnabled(()=>{
                var e = [];
                try {
                    const t = (0, f.q6)().with(g._O, k).with($.Fm, x), r = bu(e, (0, h.VI)(t.withName("thirdPartyExtensibilityEnabledChanged")));
                    Qe.reload(r.ctx), rt.reload();
                } catch (e) {
                    var t = e, r = !0;
                } finally{
                    Su(e, t, r);
                }
            });
            Uu.push(()=>Mt.dispose());
            const Jt = function(e, t) {
                const r = [];
                let n;
                const s = async ()=>{
                    try {
                        const r = await (0, L.myO)(e, t);
                        H.cursor.pushSandboxNetworkFileEntries(r);
                    } catch (e) {
                        console.warn("[cursor-agent-exec] Failed to read sandbox network file entries", e);
                    }
                }, o = ()=>{
                    void 0 !== n && clearTimeout(n), n = setTimeout(()=>{
                        n = void 0, s();
                    }, 500);
                }, i = (e)=>{
                    const t = H.workspace.createFileSystemWatcher(new H.RelativePattern(H.Uri.file((0, ko.join)(e, ".cursor")), "sandbox.json"));
                    t.onDidChange(o), t.onDidCreate(o), t.onDidDelete(o), r.push(t);
                };
                return i(e), t && i(t), s(), {
                    dispose () {
                        void 0 !== n && clearTimeout(n);
                        for (const e of r)e.dispose();
                    }
                };
            }(So.homedir(), q[0]);
            let Ot, Bt;
            Uu.push(()=>Jt.dispose());
            try {
                if (await H.cursor.checkFeatureGate("shell_exec_output_backpressure")) {
                    const e = await H.cursor.getDynamicConfigValue("shell_exec_output_backpressure_config");
                    e && (Ot = {
                        bufferOutputEvents: !0,
                        outputLimiterOptions: {
                            flushIntervalMs: e.outputLimiterFlushIntervalMs,
                            maxBufferedBytes: e.outputLimiterMaxBufferedBytes
                        }
                    }, Bt = {
                        windowMs: e.outputSuppressionWindowMs,
                        minimumThresholdCharsPerSecond: e.outputSuppressionThresholdCharsPerSecond,
                        minChars: e.outputSuppressionMinChars
                    });
                }
            } catch  {
                Ot = void 0, Bt = void 0;
            }
            let Dt = !1;
            try {
                Dt = await H.cursor.checkFeatureGate("shell_exec_powershell_utf8_console");
            } catch  {}
            const qt = (0, ko.join)(_e, "canvases"), Nt = (0, ko.join)(p, "dist", "agent-sdk"), Ft = new ma({
                canvasesDir: qt,
                sdkSourceDir: Nt,
                tsResolveAnchor: p
            });
            Ft.bootstrapReady.then((e)=>{
                void 0 === e && ee.error(E, "Canvas SDK source missing from extension bundle");
            }, (e)=>{
                const t = function(e, t) {
                    return {
                        errorName: e instanceof Error && e.name.length > 0 ? e.name : "UnknownError",
                        errorMessage: sl(e instanceof Error ? e.message : String(e), t)
                    };
                }(e, {
                    canvasesDir: qt,
                    sdkSourceDir: Nt
                });
                ee.warn(E, "Canvas dir bootstrap failed", {
                    errorName: t.errorName,
                    errorMessage: t.errorMessage
                });
            });
            const Ut = new Xi({
                ignoreService: Le,
                teamSettingsService: ce,
                terminalProvider: kt,
                createTerminalExecutor: te,
                projectDir: _e,
                workspacePaths: q,
                gitExecutor: le,
                grepProvider: Et,
                diagnosticsProvider: $e,
                getCanvasDiagnostics: (e)=>Ft.getDiagnostics(e),
                mcpLease: Ee,
                getOrCreateMcpStateAccessor: Pt,
                cursorRulesService: Qe,
                subagentsService: rt,
                codebaseReferenceProvider: je,
                getOrCreateSharedRequestContextExecutor: Rt,
                terminalPathHint: K,
                hooksConfigTracker: Se,
                adminNetworkControlsEnabled: !0,
                mcpMetaToolEnabled: Te,
                mcpMetaToolSlimDescriptors: Ce,
                alwaysExposeVirtualMcpAuthTool: Pe,
                mcpAllowlistLog: (e)=>H.cursor.logMcpAllowlist(e),
                getMcpFileSystemOptions: (e, t)=>St.getMcpFileSystemOptions(e, t),
                shellOutputBackpressureOptions: Ot,
                shellExecOutputSuppressionOptions: Bt,
                powershellUtf8Console: Dt
            });
            !function(e) {
                qu.sessionExecManagerFactory = e;
            }(Ut), wu(t, r, {
                factory: Ut,
                teamSettingsService: ce,
                createTerminalExecutor: te,
                workspacePaths: q,
                loggerBackend: k,
                metricsBackend: x
            }), w();
            const { disposeProvider: Lt } = Kl({
                context: t,
                runtimeExtensionPath: p,
                serviceCtx: E
            });
            Uu.push(Lt), ee.info(E, "cursor_agent_exec.startup.activation_latency", {
                durationMs: Date.now() - d
            });
        } catch (e) {
            var d = e, p = !0;
        } finally{
            Su(n, d, p);
        }
    }
    async function zu() {
        const e = Uu.splice(0);
        for (const t of e){
            const e = t();
            if (e instanceof Promise) try {
                await e;
            } catch  {}
        }
        var t;
        (t = qu).sessionExecManagerFactory = void 0, t.activeGitExecutor = void 0, t.activeMcpProvider = void 0;
    }
    const Wu = {
        activate: (Hu = {
            state: qu,
            activate: Gu,
            deactivate: zu
        }).activate,
        deactivate: Hu.deactivate,
        getGitExecutor: ()=>Hu.state.activeGitExecutor,
        getMcpProvider: ()=>Hu.state.activeMcpProvider,
        createAgentHostResourceProvider: (t)=>(function(t, r) {
                if (void 0 === t) throw new Error("Cursor agent runtime is not active");
                if (void 0 !== r.mcpLease && !(0, e.boZ)(r.mcpLease)) throw new Error("createAgentHostResourceProvider received an mcpLease that does not satisfy the McpLease contract");
                const n = t;
                n.stampConflictNoticeFloor(r.sessionId);
                const s = n.createSessionExecManager(r.sessionId, r.approvalHandler, r.elicitationHandler, r.notifyFileChange, r.sessionWorkspacePaths, r.worktreeMainPath, r.getPermissions, r.onDidChangePermissions, r.isGlassRoot, {
                    acquireResolvedConflictNoticeKeys: !0,
                    backgroundWorkRegistry: r.backgroundWorkRegistry,
                    ...void 0 === r.gitExecutor ? {} : {
                        gitExecutor: r.gitExecutor
                    },
                    ...void 0 === r.mcpLease ? {} : {
                        mcpLease: r.mcpLease
                    }
                });
                return s.baseResources.register(e.ryB, {
                    execute: async (e, t)=>gu.pT.fromBinary(await r.conversationSearchHandler(t.toBinary()))
                }), {
                    register: (e, t)=>s.baseResources.register(e, t),
                    get: (e)=>s.resources.get(e),
                    entries: ()=>s.resources.entries(),
                    dispose: async ()=>{
                        try {
                            s.unsubscribe(), s.baseResources.dispose(), s.terminalExecutor.dispose();
                        } finally{
                            n.clearConflictDrain(r.sessionId);
                            for (const e of s.acquiredConflictNoticeKeys)n.releaseConflictNoticeKey(e);
                        }
                    }
                };
            })(Hu.state.sessionExecManagerFactory, t)
    };
    var Hu;
    let Ku = !1;
    async function Vu(e) {
        if (H.cursor.cursorAgentHostEnabled) {
            const n = (t = Wu, r = e.extensionPath, {
                ...t,
                extensionPath: r
            });
            e.subscriptions.push(H.cursor.registerAgentHostRuntime(n));
            if (function(e) {
                return e.localLoopEnabled && !e.moveExecEnabled;
            }({
                moveExecEnabled: await Promise.resolve(H.cursor.checkFeatureGate(Ru)).catch(()=>!1),
                localLoopEnabled: await Promise.resolve(H.cursor.checkFeatureGate(Mu)).catch(()=>!1)
            })) {
                const { disposeProvider: t } = Kl({
                    context: e,
                    runtimeExtensionPath: e.extensionPath,
                    serviceCtx: (0, f.q6)()
                });
                e.subscriptions.push({
                    dispose: t
                });
            }
            return;
        }
        var t, r;
        H.cursor.cursorAgentHostEnabled || (await Gu(e), Ku = !0);
    }
    async function Yu() {
        Ku && (Ku = !1, await zu());
    }
})();
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__)__webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
__webpack_exports__.__esModule && Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: !0
});
