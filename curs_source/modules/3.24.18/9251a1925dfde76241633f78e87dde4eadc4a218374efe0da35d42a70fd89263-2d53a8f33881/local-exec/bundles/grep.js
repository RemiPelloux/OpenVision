import { createSpan } from "../../agent-kv/dist/controlled.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { getRipgrepBinaryPath, spawnInSandbox } from "../../bidi_connect_exports.js";
import { init_dist } from "../../context/dist/index.js";
import { isPathInsideWorkspaceRoot, resolvePath, shouldBlockWorktreePath, withTimeout } from "../../dist_exports.js";
import { convertProtoToInternalPolicy, isRipgrepInvocationRecordingEnabled, recordRipgrepInvocation, resolvePathForIgnoreService } from "../../dist_exports2.js";
import { clampInt32 } from "../../esm_exports8.js";
import { init_common3 } from "./common.js";
import { init_grep_output_parse } from "./grep-output-parse.js";
import { init_int32 } from "./int32.js";
import { init_mcp_disk_freshness_on_access } from "./mcp-disk-freshness-on-access.js";
import { init_ripgrep_invocation_recorder } from "./ripgrep-invocation-recorder.js";
import { init_sandbox_conversion } from "./sandbox-conversion.js";
import { init_ignore_service } from "./services/ignore-service.js";
import { buildRipgrepEnoentMetadata, createPathDoesNotExistError, deduplicateCrossWorkspaceResults, isEnoentSpawnError, parseContentOutput, parseCountOutput, parseFilesOutput, safeExists, scheduleDiskMcpDiscoveryFreshnessOnMcpsPathAccess, unresolvedTargetPathError } from "../../mcp_sandbox_policy_exports.js";
import { GrepContentMatch, GrepContentResult, GrepCountResult, GrepError, GrepFileCount, GrepFileMatch, GrepFilesResult, GrepResult, GrepSuccess, GrepUnionResult, init_grep_exec_pb } from "../../proto/dist/generated/agent/v1/grep_exec_pb.js";
import { init_dist13 } from "../../shell-exec/dist/index.js";
import { init_dist3 } from "../../utils/dist/index.js";
import { WORKTREE_GUARD_ERROR } from "../../utils/dist/path-utils.js";
import { TimeoutError } from "../../utils/dist/promise-extras.js";
var import_node_fs25, import_promises29, import_node_path50, __addDisposableResource27, __disposeResources27, logger24, GREP_CLIENT_LIMIT_LINES, LocalGrepExecutor;
export { GREP_CLIENT_LIMIT_LINES, LocalGrepExecutor, __addDisposableResource27, __disposeResources27, import_node_fs25, import_node_path50, import_promises29, logger24 };
var __wakaru_init_grep2_initialized = false;
export function init_grep2() {
if (__wakaru_init_grep2_initialized) return;
__wakaru_init_grep2_initialized = true;
"use strict";
import_node_fs25 = require("node:fs");
import_promises29 = require("node:fs/promises");
import_node_path50 = require("node:path");
init_dist();
init_grep_exec_pb();
init_dist13();
init_dist3();
init_common3();
init_grep_output_parse();
init_int32();
init_mcp_disk_freshness_on_access();
init_ripgrep_invocation_recorder();
init_sandbox_conversion();
init_ignore_service();
__addDisposableResource27 = function(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose2, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose2 = value[Symbol.asyncDispose];
        }
        if (dispose2 === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose2 = value[Symbol.dispose];
            if (async) inner = dispose2;
        }
        if (typeof dispose2 !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose2 = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value,
            dispose: dispose2,
            async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
};
__disposeResources27 = (function(SuppressedError2) {
    return function(env) {
        function fail3(e) {
            env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s3 = 0;
        function next() {
            while(r = env.stack.pop()){
                try {
                    if (!r.async && s3 === 1) return s3 = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s3 |= 2, Promise.resolve(result).then(next, function(e) {
                            fail3(e);
                            return next();
                        });
                    } else s3 |= 1;
                } catch (e) {
                    fail3(e);
                }
            }
            if (s3 === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
logger24 = createLogger("local-exec/grep");
GREP_CLIENT_LIMIT_LINES = 2e3;
LocalGrepExecutor = class _LocalGrepExecutor {
    constructor(ignoreService, grepProvider, workspacePath, options2){
        this.ignoreService = ignoreService;
        this.grepProvider = grepProvider;
        this.workspacePath = workspacePath;
        const firstWorkspacePath = Array.isArray(this.workspacePath) ? this.workspacePath[0] : this.workspacePath;
        this.singleWorkspacePath = Array.isArray(this.workspacePath) && this.workspacePath.length > 1 ? void 0 : firstWorkspacePath;
        this.mcpStateAccessor = options2?.mcpStateAccessor;
        this.permissionsService = options2?.permissionsService;
    }
    computeRelativeTarget(path64, root) {
        const resolvedPath = resolvePath(path64, this.singleWorkspacePath ?? root);
        if (resolvedPath === root) {
            return ".";
        }
        return (0, import_node_path50.relative)(root, resolvedPath);
    }
    isRootIndependentSearchPath(path64) {
        return (0, import_node_path50.isAbsolute)(path64) || /^~(?=$|[/\\])/.test(path64) || path64.startsWith("file://");
    }
    resolveSearchTargets(path64, workspacePaths) {
        const rootIndependent = this.isRootIndependentSearchPath(path64);
        return workspacePaths.map((root)=>{
            const resolvedRoot = (0, import_node_path50.resolve)(root);
            return {
                root,
                resolvedRoot,
                target: resolvePath(path64, rootIndependent ? void 0 : resolvedRoot)
            };
        });
    }
    clampGrepArgsToWorkspace(args, workspacePaths) {
        if (args.path === void 0 || args.path === "") {
            return args;
        }
        const resolvedTargets = this.resolveSearchTargets(args.path, workspacePaths);
        const isInsideWorkspace = this.isRootIndependentSearchPath(args.path) ? resolvedTargets.some(({ resolvedRoot, target })=>isPathInsideWorkspaceRoot(target, resolvedRoot)) : resolvedTargets.every(({ resolvedRoot, target })=>isPathInsideWorkspaceRoot(target, resolvedRoot));
        if (isInsideWorkspace) {
            return args;
        }
        const clamped = args.clone();
        clamped.path = void 0;
        return clamped;
    }
    async buildArgs(root, params, mode) {
        const args = [];
        const ignoreFiles = await this.ignoreService.listCursorIgnoreFilesByRoot(root);
        for (const ignoreFile of ignoreFiles){
            args.push("--cursor-ignore", ignoreFile);
        }
        if (mode === "content") {
            args.push("--line-number", "--with-filename", "--no-heading", "-0");
            if (params.contextBefore !== void 0) {
                args.push("--before-context", String(params.contextBefore));
            }
            if (params.contextAfter !== void 0) {
                args.push("--after-context", String(params.contextAfter));
            }
            args.push("--max-columns", String(1e3), "--max-columns-preview");
            if (params.context !== void 0 && params.contextBefore === void 0 && params.contextAfter === void 0) {
                args.push("--before-context", String(params.context), "--after-context", String(params.context));
            }
        } else if (mode === "files_with_matches") {
            args.push("-l");
        } else if (mode === "count") {
            args.push("-c", "--with-filename");
        } else {
            const _exhaustive = mode;
            throw new Error(`Unknown output mode: ${mode}`);
        }
        if (params.caseInsensitive === true) {
            args.push("--ignore-case");
        } else {
            args.push("--case-sensitive");
        }
        if (params.type) {
            args.push("--type", params.type);
        }
        if (params.glob) {
            args.push("--iglob", params.glob);
        }
        if (params.multiline) {
            args.push("--multiline", "--multiline-dotall");
        }
        const sortMode = params.sort ?? "modified";
        if (sortMode !== "none") {
            const flag = params.sortAscending === true ? "--sort" : "--sortr";
            args.push(flag, sortMode);
        }
        args.push("--no-config", "--color=never");
        args.push("--hidden");
        args.push("--follow");
        args.push("--regexp", params.pattern);
        args.push("--");
        args.push(params.path ? this.computeRelativeTarget(params.path, root) : ".");
        return args;
    }
    async filterBlockedFiles(items, root) {
        const boundaryBlocker = await this.permissionsService?.getFileReadBoundaryBlocker?.();
        const filtered = [];
        for (const item of items){
            const requestedPath = resolvePath(item.file, root);
            const resolved = await resolvePathForIgnoreService(requestedPath);
            if (resolved === null || await this.isPostRipgrepBlocked(resolved) || boundaryBlocker !== void 0 && await boundaryBlocker(requestedPath, resolved)) {
                continue;
            }
            filtered.push(item);
        }
        return filtered;
    }
    async isPostRipgrepBlocked(filePath) {
        const [cursorIgnored, repoBlocked] = await Promise.all([
            this.ignoreService.isCursorIgnored(filePath),
            this.ignoreService.isRepoBlocked(filePath)
        ]);
        return cursorIgnored || repoBlocked;
    }
    async runFilesMode(ctx, root, params, sandboxPolicy, logContext) {
        const env_2 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource27(env_2, createSpan(ctx.withName("LocalGrepExecutor.runFilesMode")), false);
            const args = await this.buildArgs(root, params, "files_with_matches");
            const res = await this.executeRg(_span.ctx, root, args, void 0, sandboxPolicy, logContext);
            if ((res.stderr !== "" || res.exitCode === 2) && res.stdout.trim() === "") {
                throw new Error(res.stderr || `ripgrep exited with code ${res.exitCode}`);
            }
            const { files, totalFiles, clientTruncated, ripgrepTruncated } = parseFilesOutput(res.stdout, _LocalGrepExecutor.CLIENT_LIMIT_LINES, _LocalGrepExecutor.HARD_MAX_OUTPUT_LINES);
            const filteredFiles = (await this.filterBlockedFiles(files.map((file)=>({
                    file
                })), root)).map(({ file })=>file);
            const blockedFileCount = files.length - filteredFiles.length;
            const filesResult = new GrepFilesResult({
                files: filteredFiles,
                totalFiles: clampInt32(totalFiles - blockedFileCount),
                clientTruncated,
                ripgrepTruncated
            });
            return new GrepUnionResult({
                result: {
                    case: "files",
                    value: filesResult
                }
            });
        } catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        } finally{
            __disposeResources27(env_2);
        }
    }
    async runCountMode(ctx, root, params, sandboxPolicy, logContext) {
        const env_3 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource27(env_3, createSpan(ctx.withName("LocalGrepExecutor.runCountMode")), false);
            const args = await this.buildArgs(root, params, "count");
            const res = await this.executeRg(_span.ctx, root, args, void 0, sandboxPolicy, logContext);
            if ((res.stderr !== "" || res.exitCode === 2) && res.stdout.trim() === "") {
                throw new Error(res.stderr || `ripgrep exited with code ${res.exitCode}`);
            }
            const { counts, totalFiles, totalMatches, clientTruncated, ripgrepTruncated } = parseCountOutput(res.stdout, _LocalGrepExecutor.CLIENT_LIMIT_LINES, _LocalGrepExecutor.HARD_MAX_OUTPUT_LINES);
            const filteredCounts = await this.filterBlockedFiles(counts, root);
            const filteredTotalMatches = filteredCounts.reduce((sum, c)=>sum + c.count, 0);
            const blockedFileCount = counts.length - filteredCounts.length;
            const pageMatchTotal = counts.reduce((sum, c)=>sum + c.count, 0);
            const blockedMatchTotal = pageMatchTotal - filteredTotalMatches;
            const countResult = new GrepCountResult({
                counts: filteredCounts.map((c)=>new GrepFileCount({
                        file: c.file,
                        count: clampInt32(c.count)
                    })),
                totalFiles: clampInt32(totalFiles - blockedFileCount),
                totalMatches: clampInt32(totalMatches - blockedMatchTotal),
                clientTruncated,
                ripgrepTruncated
            });
            return new GrepUnionResult({
                result: {
                    case: "count",
                    value: countResult
                }
            });
        } catch (e_3) {
            env_3.error = e_3;
            env_3.hasError = true;
        } finally{
            __disposeResources27(env_3);
        }
    }
    async runContentMode(ctx, root, params, sandboxPolicy, logContext) {
        const env_4 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource27(env_4, createSpan(ctx.withName("LocalGrepExecutor.runContentMode")), false);
            const args = await this.buildArgs(root, params, "content");
            const res = await this.executeRg(_span.ctx, root, args, void 0, sandboxPolicy, logContext);
            if ((res.stderr !== "" || res.exitCode === 2) && res.stdout.trim() === "") {
                throw new Error(res.stderr || `ripgrep exited with code ${res.exitCode}`);
            }
            const { byFile, totalLines, totalMatchedLines, clientTruncated, ripgrepTruncated } = parseContentOutput(res.stdout, _LocalGrepExecutor.CLIENT_LIMIT_LINES, _LocalGrepExecutor.HARD_MAX_OUTPUT_LINES, _span.ctx);
            const entries = Array.from(byFile.values());
            const filteredEntries = await this.filterBlockedFiles(entries, root);
            const blockedEntries = entries.filter((e)=>!filteredEntries.includes(e));
            const blockedLineCount = blockedEntries.reduce((sum, e)=>sum + e.matches.length, 0);
            const blockedMatchedLineCount = blockedEntries.reduce((sum, e)=>sum + e.matches.filter((m2)=>!m2.isContextLine).length, 0);
            const contentRes = new GrepContentResult({
                matches: filteredEntries.map((f2)=>new GrepFileMatch({
                        file: f2.file,
                        matches: f2.matches.map((m2)=>new GrepContentMatch({
                                lineNumber: m2.lineNumber,
                                content: m2.content,
                                isContextLine: m2.isContextLine
                            }))
                    })),
                totalLines: clampInt32(totalLines - blockedLineCount),
                totalMatchedLines: clampInt32(totalMatchedLines - blockedMatchedLineCount),
                clientTruncated,
                ripgrepTruncated
            });
            return new GrepUnionResult({
                result: {
                    case: "content",
                    value: contentRes
                }
            });
        } catch (e_4) {
            env_4.error = e_4;
            env_4.hasError = true;
        } finally{
            __disposeResources27(env_4);
        }
    }
    async executeIndexedGrepWithTimeout(ctx, workspacePaths, args, logContext) {
        if (this.grepProvider.executeIndexedGrep === void 0) {
            return void 0;
        }
        const [indexedCtx, cancelIndexedCtx] = ctx.withTimeoutAndCancel(_LocalGrepExecutor.INDEXED_GREP_CONTEXT_TIMEOUT_MS);
        const diagnostics = {
            phase: "provider"
        };
        const startedAt = performance.now();
        try {
            return await withTimeout(this.grepProvider.executeIndexedGrep(indexedCtx, workspacePaths, args, diagnostics), _LocalGrepExecutor.INDEXED_GREP_TIMEOUT_MS, `Indexed grep timed out after ${_LocalGrepExecutor.INDEXED_GREP_TIMEOUT_MS / 1e3}s`);
        } catch (error3) {
            if (error3 instanceof TimeoutError) {
                logger24.debug(ctx, "indexed_grep.timeout_fallback", {
                    ...logContext,
                    totalMs: Math.round(performance.now() - startedAt),
                    ...diagnostics
                });
                return void 0;
            }
            throw error3;
        } finally{
            cancelIndexedCtx();
        }
    }
    async executeRg(ctx, cwd, args, lineBudget, sandboxPolicy, logContext) {
        const span = createSpan(ctx.withName("LocalGrepExecutor.executeRg"));
        const enc = "utf8";
        const maxBytes = 8 * 1024 * 1024;
        lineBudget = lineBudget ?? _LocalGrepExecutor.HARD_MAX_OUTPUT_LINES;
        return new Promise((resolve36, reject2)=>{
            let exited = false;
            let spanEnded = false;
            const endSpan = ()=>{
                if (!spanEnded) {
                    spanEnded = true;
                    span.span.end();
                }
            };
            let proc;
            let timeoutId;
            try {
                const p2 = sandboxPolicy;
                proc = spawnInSandbox(getRipgrepBinaryPath(), args, {
                    cwd
                }, p2);
                if (isRipgrepInvocationRecordingEnabled()) {
                    const regexpIdx = args.indexOf("--regexp");
                    const patternLength = regexpIdx >= 0 && regexpIdx + 1 < args.length ? args[regexpIdx + 1].length : 0;
                    let includeGlobCount = 0;
                    for (const a of args){
                        if (a === "--iglob") {
                            includeGlobCount++;
                        }
                    }
                    recordRipgrepInvocation({
                        timestamp: Date.now(),
                        source: "agent_grep_tool",
                        mode: logContext.outputMode,
                        patternLength,
                        hasPath: logContext.targetPath !== void 0,
                        includeGlobCount,
                        excludeGlobCount: 0,
                        sandboxPolicyType: p2.type,
                        toolCallId: logContext.toolCallId,
                        execId: logContext.execId
                    });
                }
            } catch (e) {
                endSpan();
                if (isEnoentSpawnError(e)) {
                    const errnoErr = e;
                    const rgPath = getRipgrepBinaryPath();
                    logger24.error(ctx, "rg_diagnostics.spawn_throw", void 0, buildRipgrepEnoentMetadata(rgPath, cwd, errnoErr, logContext));
                    if (safeExists(cwd) === false) {
                        return reject2(createPathDoesNotExistError(cwd));
                    }
                }
                return reject2(e);
            }
            const chunksStdout = [];
            const chunksStderr = [];
            let totalStdout = 0;
            let totalStderr = 0;
            let seenLines = 0;
            let lineBudgetExceeded = false;
            timeoutId = setTimeout(()=>{
                if (!exited) {
                    try {
                        endSpan();
                        reject2(new Error(`Timed out after ${_LocalGrepExecutor.MAIN_TIMEOUT_MS / 1e3}s`));
                        proc.kill();
                    } catch  {}
                }
            }, _LocalGrepExecutor.MAIN_TIMEOUT_MS);
            proc.stdout?.on("data", (d)=>{
                totalStdout += d.length;
                if (lineBudget !== void 0 && lineBudgetExceeded !== true) {
                    let truncateIndex = -1;
                    let linesInChunk = 0;
                    for(let i = 0; i < d.length; i++){
                        if (d[i] === 10) {
                            linesInChunk++;
                            if (seenLines + linesInChunk >= lineBudget) {
                                truncateIndex = i + 1;
                                lineBudgetExceeded = true;
                                try {
                                    proc.kill();
                                } catch  {}
                                break;
                            }
                        }
                    }
                    seenLines += linesInChunk;
                    const bufferToAdd = truncateIndex >= 0 ? d.subarray(0, truncateIndex) : d;
                    if (totalStdout <= maxBytes) {
                        chunksStdout.push(bufferToAdd);
                    }
                } else if (lineBudgetExceeded !== true && totalStdout <= maxBytes) {
                    chunksStdout.push(d);
                }
            });
            proc.stderr?.on("data", (d)=>{
                totalStderr += d.length;
                if (totalStderr <= maxBytes) {
                    chunksStderr.push(d);
                }
            });
            proc.on("error", (err)=>{
                clearTimeout(timeoutId);
                endSpan();
                if (isEnoentSpawnError(err)) {
                    const rgPath = getRipgrepBinaryPath();
                    const errnoErr = err;
                    logger24.error(ctx, "rg_diagnostics.spawn_enoent", void 0, buildRipgrepEnoentMetadata(rgPath, cwd, errnoErr, logContext));
                    if (safeExists(cwd) === false) {
                        reject2(createPathDoesNotExistError(cwd));
                        return;
                    }
                }
                reject2(err);
            });
            proc.on("close", (code)=>{
                exited = true;
                clearTimeout(timeoutId);
                const stdout = Buffer.concat(chunksStdout).toString(enc);
                const stderr = Buffer.concat(chunksStderr).toString(enc);
                endSpan();
                resolve36({
                    stdout,
                    stderr,
                    exitCode: code ?? 0
                });
            });
        });
    }
    async execute(ctx, args, options2) {
        const env_5 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource27(env_5, createSpan(ctx.withName("LocalGrepExecutor.execute")), false);
            const workspacePaths = Array.isArray(this.workspacePath) ? this.workspacePath : [
                this.workspacePath ?? process.cwd()
            ];
            const mode = args.outputMode ?? "content";
            const logContext = {
                toolCallId: args.toolCallId,
                execId: options2?.execId,
                outputMode: mode,
                targetPath: args.path,
                workspacePaths
            };
            const sandboxPolicy = convertProtoToInternalPolicy(args.sandboxPolicy);
            const guardInfo = this.grepProvider.getWorktreeGuardInfo?.(workspacePaths);
            const shouldBlock = shouldBlockWorktreePath({
                targetPath: args.path,
                workspacePaths,
                mainWorktreePath: guardInfo?.mainWorktreePath
            });
            if (shouldBlock) {
                return new GrepResult({
                    result: {
                        case: "error",
                        value: new GrepError({
                            error: WORKTREE_GUARD_ERROR
                        })
                    }
                });
            }
            const searchArgs = this.clampGrepArgsToWorkspace(args, workspacePaths);
            let searchWorkspacePaths = workspacePaths;
            try {
                if (searchArgs.path) {
                    const allowedWorkspacePaths = [];
                    let hasIgnoredTarget = false;
                    let hasUnresolvedTarget = false;
                    for (const { root, resolvedRoot, target } of this.resolveSearchTargets(searchArgs.path, workspacePaths)){
                        if (!isPathInsideWorkspaceRoot(target, resolvedRoot)) {
                            continue;
                        }
                        const resolvedTargetPath = await resolvePathForIgnoreService(target);
                        if (resolvedTargetPath === null) {
                            hasUnresolvedTarget = true;
                            continue;
                        }
                        if (await this.ignoreService.isCursorIgnored(resolvedTargetPath)) {
                            hasIgnoredTarget = true;
                            continue;
                        }
                        allowedWorkspacePaths.push(root);
                        if (this.mcpStateAccessor !== void 0) {
                            scheduleDiskMcpDiscoveryFreshnessOnMcpsPathAccess(ctx, this.mcpStateAccessor, resolvedTargetPath);
                        }
                    }
                    if (allowedWorkspacePaths.length === 0) {
                        const error3 = hasIgnoredTarget ? `Path '${searchArgs.path}' is filtered out by .cursorignore` : hasUnresolvedTarget ? unresolvedTargetPathError(searchArgs.path) : `Path '${searchArgs.path}' is outside the workspace`;
                        return new GrepResult({
                            result: {
                                case: "error",
                                value: new GrepError({
                                    error: error3
                                })
                            }
                        });
                    }
                    searchWorkspacePaths = allowedWorkspacePaths;
                }
                let workspaceResults = {};
                const indexedResults = await this.executeIndexedGrepWithTimeout(_span.ctx, searchWorkspacePaths, searchArgs, logContext);
                if (indexedResults !== void 0) {
                    workspaceResults = indexedResults;
                    for (const [root, unionResult] of Object.entries(workspaceResults)){
                        const result = unionResult.result;
                        switch(result.case){
                            case "content":
                                result.value.matches = await this.filterBlockedFiles(result.value.matches, root);
                                break;
                            case "files":
                                result.value.files = (await this.filterBlockedFiles(result.value.files.map((file)=>({
                                        file
                                    })), root)).map(({ file })=>file);
                                break;
                            case "count":
                                result.value.counts = await this.filterBlockedFiles(result.value.counts, root);
                                break;
                        }
                    }
                } else {
                    for (const root of searchWorkspacePaths){
                        if (safeExists(root) === false) {
                            return new GrepResult({
                                result: {
                                    case: "error",
                                    value: new GrepError({
                                        error: `Path does not exist: ${root}`
                                    })
                                }
                            });
                        }
                        let results;
                        if (mode === "content") {
                            results = await this.runContentMode(_span.ctx, root, searchArgs, sandboxPolicy, logContext);
                        } else if (mode === "files_with_matches") {
                            results = await this.runFilesMode(_span.ctx, root, searchArgs, sandboxPolicy, logContext);
                        } else if (mode === "count") {
                            results = await this.runCountMode(_span.ctx, root, searchArgs, sandboxPolicy, logContext);
                        } else {
                            const _exhaustive = mode;
                            throw new Error(`Unknown output mode: ${mode}`);
                        }
                        workspaceResults[root] = results;
                    }
                }
                const dedupedResults = deduplicateCrossWorkspaceResults(workspaceResults, searchWorkspacePaths);
                const success = new GrepSuccess({
                    pattern: searchArgs.pattern,
                    path: searchArgs.path,
                    outputMode: mode,
                    workspaceResults: dedupedResults
                });
                return new GrepResult({
                    result: {
                        case: "success",
                        value: success
                    }
                });
            } catch (e) {
                if (searchArgs.path) {
                    const resolvedPath = resolvePath(searchArgs.path, this.singleWorkspacePath);
                    try {
                        await (0, import_promises29.stat)(resolvedPath);
                    } catch (_e2) {
                        return new GrepResult({
                            result: {
                                case: "error",
                                value: new GrepError({
                                    error: `Path does not exist: ${resolvedPath}`
                                })
                            }
                        });
                    }
                }
                return new GrepResult({
                    result: {
                        case: "error",
                        value: new GrepError({
                            error: e instanceof Error ? e.message : String(e)
                        })
                    }
                });
            }
        } catch (e_5) {
            env_5.error = e_5;
            env_5.hasError = true;
        } finally{
            __disposeResources27(env_5);
        }
    }
};
LocalGrepExecutor.MAIN_TIMEOUT_MS = 25e3;
LocalGrepExecutor.INDEXED_GREP_TIMEOUT_MS = 25e3;
LocalGrepExecutor.INDEXED_GREP_CONTEXT_TIMEOUT_MS = LocalGrepExecutor.INDEXED_GREP_TIMEOUT_MS + 100;
LocalGrepExecutor.HARD_MAX_OUTPUT_LINES = 1e4;
LocalGrepExecutor.CLIENT_LIMIT_LINES = GREP_CLIENT_LIMIT_LINES;

}
