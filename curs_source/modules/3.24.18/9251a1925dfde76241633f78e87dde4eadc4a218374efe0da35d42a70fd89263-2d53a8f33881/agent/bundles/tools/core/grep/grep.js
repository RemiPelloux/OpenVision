import { grepExecutorResource } from "../../../../../agent-exec/dist/grep.js";
import { init_dist8 } from "../../../../../agent-exec/dist/index.js";
import { createSpan } from "../../../../../agent-kv/dist/controlled.js";
import { createLogger } from "../../../../../agent-kv/dist/subagent-states.js";
import { init_common9, withSafeParsedArgs } from "../../common.js";
import { init_core5 } from "../../core.js";
import { GrepResultCache, init_cache2 } from "./cache.js";
import { GREP_CHAR_BUDGET, init_formatters3, resultToString5 } from "./formatters.js";
import { init_pagination } from "./pagination.js";
import { init_ripgrep_error_classification } from "../ripgrep-error-classification.js";
import { init_lenient_boolean } from "../../lenient-boolean.js";
import { init_lenient_number } from "../../lenient-number.js";
import { init_mcp_metrics } from "../../../utils/mcp-metrics.js";
import { getConversationId, init_request_id } from "../../../utils/request-id.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { isAgentTranscriptPath } from "../../../../../dist_exports.js";
import { external_exports } from "../../../../../external_exports.js";
import { appendSystemReminder, applyGrepPagination, classifyRipgrepError, coerceBooleanLike, createBroadGrepGlobError, createGrepToolCall, createStringResult, createZodAgentTool, generateSeededUuid, getLastPathComponent, getSafeConversationId3, isDisallowedBroadGrepGlob, isMcpDirectoryPath2, lenientNumber, stripKnownTranscriptExtension, trackMcpDirectoryAccessIfApplicable, trackMcpDirectoryResponseBytes, truncateOutput } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { GrepArgs, GrepError, GrepResult, init_grep_exec_pb } from "../../../../../proto/dist/generated/agent/v1/grep_exec_pb.js";
import { GrepToolCall, init_grep_tool_pb } from "../../../../../proto/dist/generated/agent/v1/grep_tool_pb.js";
import { init_dist3 } from "../../../../../utils/dist/index.js";
var __addDisposableResource89, __disposeResources89, logger96, MAX_CONVERSATION_ID_LENGTH2, DISALLOWED_BROAD_GREP_GLOBS, parametersSchema18, parametersSchema08193, createGrepTool;
export { DISALLOWED_BROAD_GREP_GLOBS, MAX_CONVERSATION_ID_LENGTH2, __addDisposableResource89, __disposeResources89, createGrepTool, logger96, parametersSchema08193, parametersSchema18 };
var __wakaru_init_grep5_initialized = false;
export function init_grep5() {
if (__wakaru_init_grep5_initialized) return;
__wakaru_init_grep5_initialized = true;
"use strict";
init_dist8();
init_dist26();
init_dist();
init_agent_pb();
init_grep_exec_pb();
init_grep_tool_pb();
init_dist3();
init_zod();
init_mcp_metrics();
init_request_id();
init_common9();
init_core5();
init_lenient_boolean();
init_lenient_number();
init_ripgrep_error_classification();
init_cache2();
init_formatters3();
init_pagination();
__addDisposableResource89 = function(env, value, async) {
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
__disposeResources89 = (function(SuppressedError2) {
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
logger96 = createLogger("tools/grep");
MAX_CONVERSATION_ID_LENGTH2 = 200;
DISALLOWED_BROAD_GREP_GLOBS = new Set([
    "**/*",
    "**/**"
]);
parametersSchema18 = external_exports.object({
    pattern: external_exports.string().describe("The regular expression pattern to search for in file contents"),
    path: external_exports.string().optional().describe("File or directory to search in (rg pattern -- PATH). Defaults to Cursor workspace root."),
    glob: external_exports.string().optional().describe('Glob pattern to filter files (e.g. "*.js", "*.{ts,tsx}") - maps to rg --glob'),
    output_mode: external_exports.enum([
        "content",
        "files_with_matches",
        "count"
    ]).describe('Output mode: "content" shows matching lines (supports -A/-B/-C context, -n line numbers, head_limit), "files_with_matches" shows file paths (supports head_limit), "count" shows match counts (supports head_limit). Defaults to "content".').default("content").optional(),
    "-B": lenientNumber().optional().describe('Number of lines to show before each match (rg -B). Requires output_mode: "content", ignored otherwise.'),
    "-A": lenientNumber().optional().describe('Number of lines to show after each match (rg -A). Requires output_mode: "content", ignored otherwise.'),
    "-C": lenientNumber().optional().describe('Number of lines to show before and after each match (rg -C). Requires output_mode: "content", ignored otherwise.'),
    "-i": external_exports.preprocess(coerceBooleanLike, external_exports.boolean().optional().describe("Case insensitive search (rg -i) Defaults to false").default(false)),
    type: external_exports.string().optional().describe("File type to search (rg --type). Common types: js, py, rust, go, java, etc. More efficient than include for standard file types."),
    head_limit: lenientNumber(external_exports.number().min(0)).optional().describe('Limit output size. For "content" mode: limits total matches shown. For "files_with_matches" and "count" modes: limits number of files.'),
    offset: lenientNumber(external_exports.number().min(0)).optional().describe('Skip first N entries. For "content" mode: skips first N matches. For "files_with_matches" and "count" modes: skips first N files. Use with head_limit for pagination.'),
    multiline: external_exports.preprocess(coerceBooleanLike, external_exports.boolean().optional().describe("Enable multiline mode where . matches newlines and patterns can span lines (rg -U --multiline-dotall). Default: false.").default(false))
});
parametersSchema08193 = external_exports.object({
    pattern: external_exports.string().describe("The regular expression pattern to search for in file contents (rg --regexp)"),
    path: external_exports.string().optional().describe("File or directory to search in (rg pattern -- PATH). Defaults to Cursor workspace roots."),
    glob: external_exports.string().optional().describe('Glob pattern (rg --glob GLOB -- PATH) to filter files (e.g. "*.js", "*.{ts,tsx}").'),
    output_mode: external_exports.enum([
        "content",
        "files_with_matches",
        "count"
    ]).describe('Output mode: "content" shows matching lines (supports -A/-B/-C context, -n line numbers, head_limit), "files_with_matches" shows file paths (supports head_limit), "count" shows match counts (supports head_limit). Defaults to "content".').default("content").optional(),
    "-B": lenientNumber().optional().describe('Number of lines to show before each match (rg -B). Requires output_mode: "content", ignored otherwise.'),
    "-A": lenientNumber().optional().describe('Number of lines to show after each match (rg -A). Requires output_mode: "content", ignored otherwise.'),
    "-C": lenientNumber().optional().describe('Number of lines to show before and after each match (rg -C). Requires output_mode: "content", ignored otherwise.'),
    "-i": external_exports.preprocess(coerceBooleanLike, external_exports.boolean().optional().describe("Case insensitive search (rg -i) Defaults to false").default(false)),
    type: external_exports.string().optional().describe("File type to search (rg --type). Common types: js, py, rust, go, java, etc. More efficient than glob for standard file types."),
    head_limit: lenientNumber(external_exports.number().min(0)).optional().describe('Limit output size. For "content" mode: limits total matches shown. For "files_with_matches" and "count" modes: limits number of files.'),
    offset: lenientNumber(external_exports.number().min(0)).optional().describe('Skip first N entries. For "content" mode: skips first N matches. For "files_with_matches" and "count" modes: skips first N files. Use with head_limit for pagination.'),
    multiline: external_exports.preprocess(coerceBooleanLike, external_exports.boolean().optional().describe("Enable multiline mode where . matches newlines and patterns can span lines (rg -U --multiline-dotall). Default: false.").default(false))
});
createGrepTool = (resourceAccessor, promptVersion, options2)=>{
    const grepExecutor = resourceAccessor.get(grepExecutorResource);
    promptVersion = promptVersion ?? "latest";
    const enableBroadGlobGuard = options2?.enableBroadGlobGuard === true;
    const resultCache = new GrepResultCache();
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource89(env_1, createSpan(parentCtx.withName("grepExecute")), false);
            if (enableBroadGlobGuard && isDisallowedBroadGrepGlob(rawArgs.glob)) {
                throw createBroadGrepGlobError(rawArgs.glob.trim());
            }
            const targetPath = rawArgs.path;
            trackMcpDirectoryAccessIfApplicable(spanCtxt.ctx, targetPath, "grep");
            if (targetPath !== void 0 && isAgentTranscriptPath(targetPath)) {
                const conversationId = getConversationId(spanCtxt.ctx);
                const safeConversationId = conversationId !== void 0 ? getSafeConversationId3(conversationId) : void 0;
                const targetLeaf = stripKnownTranscriptExtension(getLastPathComponent(targetPath));
                const wasOwnTranscript = conversationId !== void 0 ? targetLeaf === conversationId || targetLeaf === safeConversationId : void 0;
                logger96.info(spanCtxt.ctx, "Model accessed agent transcript path", {
                    tool: "grep",
                    toolCallId: meta.toolCallId,
                    targetPath,
                    pattern: rawArgs.pattern,
                    wasOwnTranscript
                });
            }
            const requestedOffset = rawArgs.offset ?? 0;
            const requestedHeadLimit = rawArgs.head_limit;
            const argsForCache = new GrepArgs({
                pattern: rawArgs.pattern,
                path: rawArgs.path,
                glob: rawArgs.glob,
                type: rawArgs.type,
                outputMode: rawArgs.output_mode,
                multiline: rawArgs.multiline,
                caseInsensitive: rawArgs["-i"],
                contextBefore: rawArgs["-B"],
                contextAfter: rawArgs["-A"],
                context: rawArgs["-C"],
                toolCallId: meta.toolCallId
            });
            const argsWithPagination = new GrepArgs({
                ...argsForCache,
                headLimit: requestedHeadLimit,
                offset: requestedOffset
            });
            const baseToolCall = new GrepToolCall({
                args: argsWithPagination,
                result: void 0
            });
            const cachedResult = resultCache.get(argsForCache);
            let paginatedResult;
            const fullResult = await interactionHandler.executeToolCall(spanCtxt.ctx, createGrepToolCall(baseToolCall), meta.toolCallId, async (ctx)=>{
                if (cachedResult !== void 0) {
                    return cachedResult;
                }
                const execId = generateSeededUuid(meta.toolCallId);
                const execResult = await grepExecutor.execute(ctx, argsForCache, {
                    execId,
                    hookContextCollector: meta.hookContextCollector
                });
                switch(execResult.result.case){
                    case "success":
                        return execResult;
                    case "error":
                        throw classifyRipgrepError(execResult.result.value.error);
                    default:
                        throw new Error(`Unexpected result case: ${execResult.result.case}`);
                }
            }, (result)=>{
                paginatedResult = applyGrepPagination(result, requestedOffset, requestedHeadLimit);
                return createGrepToolCall(new GrepToolCall({
                    ...baseToolCall,
                    result: paginatedResult
                }));
            }, meta.hookContextCollector);
            if (cachedResult === void 0) {
                resultCache.set(argsForCache, fullResult);
            }
            if (isMcpDirectoryPath2(targetPath) && paginatedResult !== void 0) {
                trackMcpDirectoryResponseBytes(spanCtxt.ctx, Buffer.byteLength(resultToString5(paginatedResult), "utf8"), "grep");
            }
            return paginatedResult;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources89(env_1);
        }
    };
    const semanticSearchReminderMinPatterns = options2?.semanticSearchReminderMinPatterns ?? 5;
    let hasShownSemanticSearchReminder = false;
    const render2 = async (_ctx, result, props)=>{
        const rendered = createStringResult(resultToString5(result));
        if (options2?.boostSemanticSearch === true && !hasShownSemanticSearchReminder && result.result.case === "success") {
            const pattern = result.result.value.pattern;
            const pipeAlternatives = pattern.split("|").length;
            if (pipeAlternatives >= semanticSearchReminderMinPatterns) {
                const semanticSearchTool = props.allTools["SEMANTIC_SEARCH"];
                const grepTool = props.allTools["GREP"];
                if (semanticSearchTool && grepTool) {
                    hasShownSemanticSearchReminder = true;
                    logger96.info(_ctx, "Showing semantic search reminder for Grep result", {
                        pipeAlternatives,
                        semanticSearchReminderMinPatterns
                    });
                    return appendSystemReminder(rendered, `For how/where/what questions or searches that involve multiple possible terms, prefer \`${semanticSearchTool.name}\` or use in parallel with \`${grepTool.name}\`. It searches by meaning, so it can find relevant code that exact-text search misses. This can be faster than using many \`${grepTool.name}\` calls.`);
                }
            }
        }
        return rendered;
    };
    function getToolName10(version4) {
        switch(version4){
            case "dsv3-1018":
                return "grep";
            case "cursor-0226":
            case "dsv3-1205":
            case "latest":
            case "haiku":
                return "Grep";
            case "gpt5-codex":
            case "codex-cloud":
                return "rg";
            default:
                {
                    const _exhaustive = version4;
                    throw new Error(`Unhandled version: ${_exhaustive}`);
                }
        }
    }
    function getDescription6(version4) {
        switch(version4){
            case "cursor-0226":
                return `A search tool built on ripgrep. Results are capped to several thousand output lines for responsiveness; when truncation occurs, the results report "at least" counts, but are otherwise accurate.`;
            case "gpt5-codex":
            case "codex-cloud":
                return `Search the workspace with ripgrep.

- Use this tool instead of shell rg; respects .gitignore and .cursorignore
- Default scope is the workspace root; set path (absolute path) to narrow it
- Supply a regex pattern; escape metacharacters, e.g. "functionCall\\(", "\\{", "\\}"
- Prefer type over broad glob; wildcard globs like * bypass ignore rules and slow searches
- Enable multiline only when a match spans lines\u2014it can degrade performance
- Context flags (-A, -B, -C) only affect content output
- If results show "at least \u2026", the output was truncated; tighten the query or raise head_limit`;
            case "dsv3-1018":
                return `A powerful search tool built on ripgrep

Usage:
- Prefer grep for exact symbol/string searches. Whenever possible, use this instead of terminal grep/rg. This tool is faster and respects .gitignore/.cursorignore.
- Supports full regex syntax, e.g. "log.*Error", "function\\s+\\w+". Ensure you escape special chars to get exact matches, e.g. "functionCall\\("
- Avoid overly broad glob patterns (e.g., '--glob *') as they bypass .gitignore rules and may be slow
- Only use 'type' (or 'glob' for file types) when certain of the file type needed. Note: import paths may not match source file types (.js vs .ts)
- Output modes: "content" shows matching lines (default), "files_with_matches" shows only file paths, "count" shows match counts per file
- Pattern syntax: Uses ripgrep (not grep) - literal braces need escaping (e.g. use interface\\{\\} to find interface{} in Go code)
- Multiline matching: By default patterns match within single lines only. For cross-line patterns like struct \\{[\\s\\S]*?field, use multiline: true
- Results are capped for responsiveness; truncated results show "at least" counts.
- Content output follows ripgrep format: '-' for context lines, ':' for match lines, and all lines grouped by file.
- Unsaved or out of workspace active editors are also searched and show "(unsaved)" or "(out of workspace)". Use absolute paths to read/edit these files.`;
            case "dsv3-1205":
            case "latest":
            case "haiku":
                return `A powerful search tool built on ripgrep
Usage:
- Prefer using Grep for search tasks when you know the exact symbols or strings to search for. Whenever possible, use this tool instead of invoking grep or rg as a terminal command. The Grep tool has been optimized for speed and file restrictions inside Cursor.
- Supports full regex syntax (e.g., "log.*Error", "function\\s+\\w+")
- Filter files with glob parameter (e.g., ".js", "**/.tsx") or type parameter (e.g., "js", "py", "rust")
- Output modes: "content" shows matching lines (default), "files_with_matches" shows only file paths, "count" shows match counts
- Pattern syntax: Uses ripgrep (not grep) - literal braces need escaping (use interface\\{\\} to find interface{} in Go code)
- Multiline matching: By default patterns match within single lines only. For cross-line patterns like struct \\{[\\s\\S]*?field, use multiline: true
- Results are capped to several thousand output lines for responsiveness; when truncation occurs, the results report "at least" counts, but are otherwise accurate.
- Content output formatting closely follows ripgrep output format: '-' for context lines, ':' for match lines, and all context/match lines below each file group.`;
            default:
                {
                    const _exhaustive = version4;
                    throw new Error(`Unhandled version: ${_exhaustive}`);
                }
        }
    }
    const name17 = getToolName10(promptVersion);
    const description3 = getDescription6(promptVersion);
    const schema2 = promptVersion === "dsv3-1018" ? parametersSchema08193 : parametersSchema18;
    return createZodAgentTool("GREP", {
        name: name17,
        descriptionGenerator: (_props)=>description3,
        parameters: schema2,
        execute: withSafeParsedArgs(schema2, execute, createGrepToolCall(new GrepToolCall())),
        render: render2,
        serializeError: (error3)=>{
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            const modelVisibleError = truncateOutput(errorMessage4, GREP_CHAR_BUDGET, true).output;
            return createGrepToolCall(new GrepToolCall({
                result: new GrepResult({
                    result: {
                        case: "error",
                        value: new GrepError({
                            error: modelVisibleError
                        })
                    }
                })
            }));
        }
    });
};

}
