import { init_dist8 } from "../../../../../agent-exec/dist/index.js";
import { readExecutorResource, redactedReadExecutorResource } from "../../../../../agent-exec/dist/read.js";
import { createSpan } from "../../../../../agent-kv/dist/controlled.js";
import { init_dist5 } from "../../../../../agent-kv/dist/index.js";
import { utf8Serde } from "../../../../../agent-kv/dist/serde.js";
import { createLogger } from "../../../../../agent-kv/dist/subagent-states.js";
import { init_shim } from "../../../shims/shim.js";
import { init_tool_step } from "../../../shims/tool-step.js";
import { ToolCallError, ToolCallRejectedError, ToolCallUnexpectedEnvironmentError, init_common9, withSafeParsedArgs } from "../../common.js";
import { init_formatting } from "../formatting.js";
import { init_inline_image } from "../inline-image.js";
import { LARGE_TEXT_BLOB_THRESHOLD, READ_CHAR_HARD_LIMIT, init_common17 } from "./common.js";
import { init_image_utils } from "./image-utils.js";
import { init_notebook_format, isJupyterNotebook2 } from "./notebook-format.js";
import { init_pdf_utils } from "./pdf-utils.js";
import { init_worktree_paths } from "../worktree-paths.js";
import { init_lenient_number } from "../../lenient-number.js";
import { init_common8 } from "../../../utils/common.js";
import { init_cursor_rule_matching } from "../../../utils/cursor-rule-matching.js";
import { init_environment_filtering } from "../../../utils/environment-filtering.js";
import { getAgentEventTracker, init_event_tracking } from "../../../utils/event-tracking.js";
import { init_mcp_metrics } from "../../../utils/mcp-metrics.js";
import { getConversationId, init_request_id } from "../../../utils/request-id.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { createCounter, createHistogram, getBlobId, isAgentTranscriptPath, toHex } from "../../../../../dist_exports.js";
import { external_exports } from "../../../../../external_exports.js";
import { boundInlineImageForModel, createStringResult, createZodAgentTool, defineShim, detectImageMimeType, extendMachineIdParameter, filterByAgentEnvironment, formatCodeBlock, formatNotebookForLLM, generateSeededUuid, getSkillSourceFromPath, isMcpDirectoryPath2, matchFileScopedRulesToReadPaths, matchFileScopedSkillsToReadPaths, maybeRedirectWorktriesPath, recordSkillApplied, resolveCurrentTurnUserMessageText, resolveMachineIdArgument, safeString, trackMcpDirectoryAccessIfApplicable, trackMcpDirectoryResponseBytes } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../../../../metrics/dist/index.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { appliesExplicitOffsetLimitDescription, computeReadSlice, createReadToolCall, createSuccessResult3, extractPdfText, findMatchingAgentSkill, findMatchingCursorRule, getLastPathComponent2, getParametersSchema4, getReadScope, getSafeConversationId4, getSkillIdFromPath2, isPdfBinary, normalizeLineEndings2, recordReadSuccessMetrics, retryAfterSameStepCalls, stripKnownTranscriptExtension2, toSkillReminderReadPath } from "../../../../../pdf_worker_exports.js";
import { init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { ReadArgs, init_read_exec_pb } from "../../../../../proto/dist/generated/agent/v1/read_exec_pb.js";
import { ReadRange, ReadToolArgs, ReadToolCall, ReadToolError, ReadToolResult, ReadToolSuccess, init_read_tool_pb } from "../../../../../proto/dist/generated/agent/v1/read_tool_pb.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
import { init_dist3 } from "../../../../../utils/dist/index.js";
var __addDisposableResource93, __disposeResources93, logger97, pdfTextCache, sameStepReadRace, SAME_STEP_FILE_WRITER_TOOLS, SAME_STEP_READ_RACE_MAX_WAIT_MS, MAX_CONVERSATION_ID_LENGTH3, READ_LINE_NUMBER_INTERVAL, readErrorsDistribution, readTotalCounter, readSuccessCounter, readReturnedLinesHistogram, readTotalFileLinesHistogram, readFileSizeBytesHistogram, readReturnedBytesHistogram, readCoveragePercentHistogram, EXPLICIT_OFFSET_OMIT_BULLET, EXPLICIT_OFFSET_PROVIDE_BULLET, createReadTool;
export { EXPLICIT_OFFSET_OMIT_BULLET, EXPLICIT_OFFSET_PROVIDE_BULLET, MAX_CONVERSATION_ID_LENGTH3, READ_LINE_NUMBER_INTERVAL, SAME_STEP_FILE_WRITER_TOOLS, SAME_STEP_READ_RACE_MAX_WAIT_MS, __addDisposableResource93, __disposeResources93, createReadTool, logger97, pdfTextCache, readCoveragePercentHistogram, readErrorsDistribution, readFileSizeBytesHistogram, readReturnedBytesHistogram, readReturnedLinesHistogram, readSuccessCounter, readTotalCounter, readTotalFileLinesHistogram, sameStepReadRace };
var __wakaru_init_read5_initialized = false;
export function init_read5() {
if (__wakaru_init_read5_initialized) return;
__wakaru_init_read5_initialized = true;
"use strict";
init_dist8();
init_dist5();
init_dist26();
init_dist();
init_dist4();
init_agent_pb();
init_read_exec_pb();
init_read_tool_pb();
init_dist27();
init_dist3();
init_zod();
init_common8();
init_cursor_rule_matching();
init_environment_filtering();
init_event_tracking();
init_mcp_metrics();
init_shim();
init_tool_step();
init_request_id();
init_common9();
init_lenient_number();
init_formatting();
init_inline_image();
init_worktree_paths();
init_common17();
init_image_utils();
init_notebook_format();
init_pdf_utils();
__addDisposableResource93 = function(env, value, async) {
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
__disposeResources93 = (function(SuppressedError2) {
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
logger97 = createLogger("tools/read");
pdfTextCache = new Map();
sameStepReadRace = defineShim({
    name: "same_step_read_race"
});
SAME_STEP_FILE_WRITER_TOOLS = new Set([
    "ApplyPatch",
    "AwaitShell",
    "CopyToBox",
    "EditNotebook",
    "MultiEdit",
    "MultiStrReplace",
    "Shell",
    "StrReplace",
    "Write",
    "edit_notebook",
    "run_terminal_cmd",
    "search_replace",
    "write"
]);
SAME_STEP_READ_RACE_MAX_WAIT_MS = 12e4;
MAX_CONVERSATION_ID_LENGTH3 = 200;
READ_LINE_NUMBER_INTERVAL = 10;
readErrorsDistribution = createHistogram("agent.tools.read.errors", {
    description: "Number of errors per read operation",
    labelNames: []
});
readTotalCounter = createCounter("agent.tools.read.total", {
    description: "Total file read operations",
    labelNames: []
});
readSuccessCounter = createCounter("agent.tools.read.success", {
    description: "Successful file read operations by requested scope",
    labelNames: [
        "read_scope",
        "repeat_status",
        "exceeded_limit",
        "explicit_desc"
    ]
});
readReturnedLinesHistogram = createHistogram("agent.tools.read.returned_lines", {
    description: "Number of lines returned by successful file reads",
    labelNames: [
        "read_scope",
        "repeat_status",
        "explicit_desc"
    ]
});
readTotalFileLinesHistogram = createHistogram("agent.tools.read.total_file_lines", {
    description: "Total number of lines in successfully read files",
    labelNames: [
        "read_scope",
        "repeat_status",
        "explicit_desc"
    ]
});
readFileSizeBytesHistogram = createHistogram("agent.tools.read.file_size_bytes", {
    description: "Size in bytes of successfully read files",
    labelNames: [
        "read_scope",
        "repeat_status",
        "explicit_desc"
    ]
});
readReturnedBytesHistogram = createHistogram("agent.tools.read.returned_bytes", {
    description: "Number of bytes returned by successful file reads",
    labelNames: [
        "read_scope",
        "repeat_status",
        "explicit_desc"
    ]
});
readCoveragePercentHistogram = createHistogram("agent.tools.read.coverage_percent", {
    description: "Percentage of file lines returned by successful file reads",
    labelNames: [
        "read_scope",
        "repeat_status",
        "explicit_desc"
    ]
});
EXPLICIT_OFFSET_OMIT_BULLET = "Omit offset and limit to read the entire file.";
EXPLICIT_OFFSET_PROVIDE_BULLET = "Provide offset and limit to read a specific line range (especially for long files).";
createReadTool = (resourceAccessor, formattingOptions, promptVersion, options2)=>{
    const readExecutor = options2?.preferRedactedRead ? resourceAccessor.get(redactedReadExecutorResource) : resourceAccessor.get(readExecutorResource);
    promptVersion = promptVersion ?? "latest";
    const enableLineNumbersArg = options2?.enableLineNumbersArg ?? false;
    const enableNegativeOffset = options2?.enableNegativeOffset ?? false;
    const useMinimalHarness = options2?.useMinimalHarness ?? false;
    const useExplicitOffsetLimitDescription = options2?.useExplicitOffsetLimitDescription === true;
    const useSparseReadLineNumbers = formattingOptions.useSparseReadLineNumbers === true;
    const appliedExplicitDescLabel = appliesExplicitOffsetLimitDescription({
        promptVersion,
        useExplicitOffsetLimitDescription,
        useMinimalHarness,
        hasToolDescriptionOverride: options2?.toolDescription !== void 0
    }) ? "true" : "false";
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource93(env_1, createSpan(parentCtx.withName("readExecute")), false);
            const machineId = resolveMachineIdArgument(options2?.machineIds, rawArgs);
            const originalPath = "target_file" in rawArgs ? rawArgs.target_file : rawArgs.path;
            let lockHandle = await options2?.fileOperationLockManager?.waitForLock(spanCtxt.ctx, originalPath);
            const _lockCleanup = __addDisposableResource93(env_1, {
                [Symbol.dispose]: ()=>lockHandle?.[Symbol.dispose]()
            }, false);
            const path64 = maybeRedirectWorktriesPath(originalPath);
            trackMcpDirectoryAccessIfApplicable(spanCtxt.ctx, path64, "read");
            if (isAgentTranscriptPath(path64)) {
                const conversationId = getConversationId(spanCtxt.ctx);
                const safeConversationId = conversationId !== void 0 ? getSafeConversationId4(conversationId) : void 0;
                const targetLeaf = stripKnownTranscriptExtension2(getLastPathComponent2(path64));
                const wasOwnTranscript = conversationId !== void 0 ? targetLeaf === conversationId || targetLeaf === safeConversationId : void 0;
                logger97.info(spanCtxt.ctx, "Model accessed agent transcript path", {
                    tool: "read",
                    toolCallId: meta.toolCallId,
                    wasOwnTranscript
                });
            }
            const UNSUPPORTED_BINARY_EXTENSIONS = /\.(zip|tar|gz|exe|dll|so|dylib|bin|mp4|webm|mov|avi|mkv|wmv|flv|m4v)$/i;
            if (UNSUPPORTED_BINARY_EXTENSIONS.test(path64)) {
                const ext2 = path64.toLowerCase().match(/\.([^.]+)$/)?.[1] ?? "unknown";
                return new ReadToolResult({
                    result: {
                        case: "error",
                        value: new ReadToolError({
                            errorMessage: `Cannot read binary files of type ${ext2}`
                        })
                    }
                });
            }
            let offset;
            let limit;
            if ("line_range" in rawArgs && rawArgs.line_range !== void 0) {
                const [startLine, endLine] = rawArgs.line_range;
                offset = startLine;
                limit = endLine - startLine + 1;
            } else if ("offset" in rawArgs || "limit" in rawArgs) {
                offset = "offset" in rawArgs ? rawArgs.offset : void 0;
                limit = "limit" in rawArgs ? rawArgs.limit : void 0;
            }
            const includeLineNumbers = rawArgs.include_line_numbers;
            if (enableLineNumbersArg) {
                logger97.info(spanCtxt.ctx, "nal.read.include_line_numbers_arg", {
                    modelPassedArg: includeLineNumbers !== void 0,
                    includeLineNumbersValue: includeLineNumbers ?? false,
                    path: path64,
                    toolCallId: meta.toolCallId
                });
            }
            if (offset !== void 0 || limit !== void 0) {
                logger97.info(spanCtxt.ctx, "Read called with offset or limit", {
                    offset,
                    limit,
                    path: path64,
                    toolCallId: meta.toolCallId
                });
            }
            const toolArgs = new ReadToolArgs({
                path: path64,
                offset,
                limit,
                includeLineNumbers
            });
            const baseToolCall = new ReadToolCall({
                args: toolArgs,
                result: void 0
            });
            let errorCount = 0;
            let blobBackedReturnedByteCount;
            const readToolResult = await interactionHandler.executeToolCall(spanCtxt.ctx, createReadToolCall(baseToolCall), meta.toolCallId, async (ctx)=>{
                const execArgs = new ReadArgs({
                    path: path64,
                    toolCallId: meta.toolCallId,
                    offset,
                    limit
                });
                const readOnce = (execId)=>readExecutor.execute(ctx, execArgs, {
                        execId,
                        hookContextCollector: meta.hookContextCollector,
                        ...machineId !== void 0 ? {
                            machineId
                        } : {}
                    });
                let execResult = await readOnce(generateSeededUuid(meta.toolCallId));
                if (execResult.result.case === "fileNotFound") {
                    lockHandle?.[Symbol.dispose]();
                    lockHandle = void 0;
                    execResult = await retryAfterSameStepCalls(ctx, meta.toolCallId, execResult, async ()=>{
                        lockHandle = await options2?.fileOperationLockManager?.waitForLock(spanCtxt.ctx, originalPath);
                        return readOnce(generateSeededUuid(`${meta.toolCallId}:${sameStepReadRace.name}`));
                    });
                }
                if (execResult.result.case === "success") {
                    const execSuccess = execResult.result.value;
                    const resolvedPath = execSuccess.path;
                    const fileSizeBigInt = execSuccess.fileSize;
                    const fileSize = Number(fileSizeBigInt);
                    const executorAppliedRange = execSuccess.rangeApplied === true;
                    const executorTotalLines = execSuccess.totalLines;
                    const execOutput = execSuccess.output;
                    let pdfContentOverride;
                    if (execOutput.case === "data") {
                        let binaryData = execOutput.value;
                        if (isPdfBinary(binaryData, resolvedPath)) {
                            const cachedPdfText = pdfTextCache.get(resolvedPath);
                            if (cachedPdfText !== void 0) {
                                pdfContentOverride = cachedPdfText;
                                logger97.info(ctx, "Using cached PDF text content", {
                                    path: resolvedPath,
                                    toolCallId: meta.toolCallId
                                });
                            } else {
                                const extractedPdfText = await extractPdfText(binaryData);
                                pdfContentOverride = normalizeLineEndings2(extractedPdfText);
                                pdfTextCache.set(resolvedPath, pdfContentOverride);
                                logger97.info(ctx, "Converted PDF binary to text content", {
                                    path: resolvedPath,
                                    toolCallId: meta.toolCallId
                                });
                            }
                        }
                        if (pdfContentOverride === void 0) {
                            const imageMimeType = detectImageMimeType(binaryData, resolvedPath);
                            if (imageMimeType !== void 0) {
                                const bounded2 = await boundInlineImageForModel(ctx, binaryData, {
                                    mimeType: imageMimeType,
                                    source: "read"
                                });
                                if (bounded2.data !== binaryData) {
                                    binaryData = bounded2.data;
                                    execSuccess.outputBlobId = void 0;
                                }
                            }
                            let blobId = execSuccess.outputBlobId;
                            const blobStore2 = meta.stateHandler?.getBlobStore();
                            if (blobStore2) {
                                blobBackedReturnedByteCount = binaryData.byteLength;
                                if (!blobId || blobId.length === 0) {
                                    blobId = await getBlobId(binaryData);
                                    await blobStore2.setBlob(ctx, blobId, binaryData);
                                } else {
                                    await blobStore2.setBlobLocallyOnly(ctx, blobId, binaryData);
                                }
                                return new ReadToolResult({
                                    result: {
                                        case: "success",
                                        value: new ReadToolSuccess({
                                            output: {
                                                case: "dataBlobId",
                                                value: blobId
                                            },
                                            isEmpty: false,
                                            exceededLimit: false,
                                            totalLines: 0,
                                            fileSize,
                                            path: resolvedPath,
                                            readRange: void 0
                                        })
                                    }
                                });
                            }
                            return new ReadToolResult({
                                result: {
                                    case: "success",
                                    value: new ReadToolSuccess({
                                        output: {
                                            case: "data",
                                            value: binaryData
                                        },
                                        isEmpty: false,
                                        exceededLimit: false,
                                        totalLines: 0,
                                        fileSize,
                                        path: resolvedPath,
                                        readRange: void 0
                                    })
                                }
                            });
                        }
                    }
                    let content;
                    if (pdfContentOverride !== void 0) {
                        content = pdfContentOverride;
                    } else if (execOutput.case === "content") {
                        content = execOutput.value;
                    } else {
                        errorCount++;
                        throw new ToolCallUnexpectedEnvironmentError("Unknown output type");
                    }
                    if (content === "" && !executorAppliedRange) {
                        return createSuccessResult3("", 0, fileSize, resolvedPath, void 0, includeLineNumbers);
                    }
                    if (executorAppliedRange) {
                        const readSlice2 = computeReadSlice(executorTotalLines, offset, limit);
                        const readRange2 = readSlice2?.readRange ?? new ReadRange({
                            startLine: 1,
                            endLine: executorTotalLines
                        });
                        return createSuccessResult3(content, executorTotalLines, fileSize, resolvedPath, readRange2, includeLineNumbers);
                    }
                    const lines2 = content.split("\n");
                    const totalLines = lines2.length;
                    const readSlice = computeReadSlice(totalLines, offset, limit);
                    if (readSlice !== void 0) {
                        const selectedLines = lines2.slice(readSlice.startIndex, readSlice.endIndex);
                        const selectedContent = selectedLines.join("\n");
                        return createSuccessResult3(selectedContent, totalLines, fileSize, resolvedPath, readSlice.readRange, includeLineNumbers);
                    }
                    const readRange = new ReadRange({
                        startLine: 1,
                        endLine: totalLines
                    });
                    const blobStore = meta.stateHandler?.getBlobStore();
                    if (blobStore && content.length > LARGE_TEXT_BLOB_THRESHOLD && content.length <= READ_CHAR_HARD_LIMIT) {
                        const contentBytes = new TextEncoder().encode(content);
                        blobBackedReturnedByteCount = contentBytes.byteLength;
                        let blobId = execSuccess.outputBlobId;
                        if (!blobId || blobId.length === 0) {
                            blobId = await getBlobId(contentBytes);
                            await blobStore.setBlob(ctx, blobId, contentBytes);
                        } else {
                            await blobStore.setBlobLocallyOnly(ctx, blobId, contentBytes);
                        }
                        return new ReadToolResult({
                            result: {
                                case: "success",
                                value: new ReadToolSuccess({
                                    output: {
                                        case: "contentBlobId",
                                        value: blobId
                                    },
                                    isEmpty: false,
                                    exceededLimit: false,
                                    totalLines,
                                    fileSize,
                                    path: resolvedPath,
                                    readRange,
                                    includeLineNumbers
                                })
                            }
                        });
                    }
                    return createSuccessResult3(content, totalLines, fileSize, resolvedPath, readRange, includeLineNumbers);
                } else {
                    errorCount++;
                    switch(execResult.result.case){
                        case "error":
                            throw new ToolCallError({
                                clientVisibleErrorMessage: execResult.result.value.error,
                                modelVisibleErrorMessage: execResult.result.value.error,
                                error: execResult.result.value.error
                            });
                        case "rejected":
                            throw new ToolCallRejectedError(execResult.result.value.reason || "Read operation rejected");
                        case "fileNotFound":
                            throw new ToolCallUnexpectedEnvironmentError("File not found");
                        case "permissionDenied":
                            throw new ToolCallUnexpectedEnvironmentError("Permission denied");
                        case "invalidFile":
                            throw new ToolCallUnexpectedEnvironmentError(execResult.result.value.reason || "Path is not a valid file to read");
                        default:
                            throw new Error("Unknown error");
                    }
                }
            }, (result)=>createReadToolCall(new ReadToolCall({
                    ...baseToolCall,
                    result
                })), meta.hookContextCollector);
            if (readToolResult.result.case === "success") {
                const { path: resolvedPath } = readToolResult.result.value;
                const hasSeenReadPath = (path65)=>(meta.stateHandler?.readPaths?.has(path65) ?? false) || (meta.stepReadPathDedup?.has(path65) ?? false);
                const rememberReadPath = (path65)=>{
                    meta.stateHandler?.recordReadPath(safeString(path65));
                    meta.stepReadPathDedup?.add(path65);
                };
                const isNewPath = !hasSeenReadPath(resolvedPath);
                recordReadSuccessMetrics(spanCtxt.ctx, readToolResult.result.value, getReadScope(offset, limit), isNewPath ? "first" : "repeat", blobBackedReturnedByteCount, appliedExplicitDescLabel);
                if (isNewPath && meta.cursorRules && meta.cursorRules.length > 0) {
                    const matches = matchFileScopedRulesToReadPaths({
                        readPaths: [
                            resolvedPath
                        ],
                        rules: meta.cursorRules,
                        workspacePaths: meta.workspacePaths ?? []
                    });
                    if (matches.size > 0) {
                        const ruleByPath = new Map(meta.cursorRules.filter((rule)=>rule.fullPath).map((rule)=>[
                                rule.fullPath,
                                rule
                            ]));
                        const relatedCursorRules = [];
                        for (const rulePath of Array.from(matches.keys()).sort()){
                            if (hasSeenReadPath(rulePath)) {
                                continue;
                            }
                            const rule = ruleByPath.get(rulePath);
                            if (!rule) {
                                continue;
                            }
                            relatedCursorRules.push(rule);
                            rememberReadPath(rulePath);
                        }
                        if (relatedCursorRules.length > 0) {
                            readToolResult.result.value.relatedCursorRules = relatedCursorRules;
                        }
                    }
                }
                if (isNewPath && meta.agentSkills && meta.agentSkills.length > 0) {
                    const eligibleAgentSkills = filterByAgentEnvironment(meta.agentSkills, meta.stateHandler?.agentType);
                    const skillMatches = matchFileScopedSkillsToReadPaths({
                        readPaths: [
                            resolvedPath
                        ],
                        skills: eligibleAgentSkills,
                        workspacePaths: meta.workspacePaths ?? []
                    });
                    const newSkills = [];
                    for (const [skillPath, skill] of Array.from(skillMatches.entries()).sort((a, b2)=>a[0].localeCompare(b2[0]))){
                        const skillReminderReadPath = toSkillReminderReadPath(skillPath);
                        if (hasSeenReadPath(skillReminderReadPath)) {
                            continue;
                        }
                        newSkills.push(skill);
                        rememberReadPath(skillReminderReadPath);
                    }
                    if (newSkills.length > 0) {
                        relatedSkillsBySuccess.set(readToolResult.result.value, newSkills);
                    } else {
                        relatedSkillsBySuccess.delete(readToolResult.result.value);
                    }
                } else {
                    relatedSkillsBySuccess.delete(readToolResult.result.value);
                }
                rememberReadPath(resolvedPath);
                if (resolvedPath.endsWith("SKILL.md")) {
                    const tracker = getAgentEventTracker(spanCtxt.ctx);
                    const matchedSkill = findMatchingAgentSkill(resolvedPath, meta.agentSkills) ?? findMatchingCursorRule(resolvedPath, meta.cursorRules);
                    const plugin = matchedSkill?.plugin;
                    const marketplace = matchedSkill?.marketplace;
                    const pluginId = matchedSkill?.pluginId;
                    const marketplaceId = matchedSkill?.marketplaceId;
                    tracker.trackSkillUsed(spanCtxt.ctx, {
                        plugin,
                        marketplace,
                        pluginId,
                        marketplaceId
                    });
                    recordSkillApplied(spanCtxt.ctx, {
                        entrypoint: "agent_read",
                        stateHandler: meta.stateHandler,
                        userMessageText: await resolveCurrentTurnUserMessageText(spanCtxt.ctx, meta.stateHandler).catch(()=>void 0),
                        skillId: getSkillIdFromPath2(resolvedPath),
                        skillSource: getSkillSourceFromPath(resolvedPath),
                        plugin,
                        marketplace,
                        pluginId,
                        marketplaceId,
                        toolCallId: meta.toolCallId,
                        skillPath: resolvedPath
                    });
                }
            }
            readTotalCounter.increment(spanCtxt.ctx, 1);
            readErrorsDistribution.histogram(spanCtxt.ctx, errorCount);
            if (isMcpDirectoryPath2(path64) && readToolResult.result.case === "success" && readToolResult.result.value.output?.case === "content") {
                trackMcpDirectoryResponseBytes(spanCtxt.ctx, Buffer.byteLength(readToolResult.result.value.output.value, "utf8"), "read");
            }
            return readToolResult;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources93(env_1);
        }
    };
    const renderCursorRuleReminder = (relatedCursorRules)=>{
        if (relatedCursorRules.length === 0) {
            return void 0;
        }
        const ruleBlocks = relatedCursorRules.map((rule)=>{
            const content = rule.content.trimEnd();
            const body = content.length > 0 ? content : "(Rule file is empty.)";
            const rulePath = rule.fullPath || "(unknown rule path)";
            return `- ${rulePath}
${body}`;
        });
        const lines2 = [
            "The following cursor rule files are relevant to the files you just read:",
            ...ruleBlocks
        ];
        lines2.push("Consider these rules if they affect your changes.");
        return lines2.join("\n\n");
    };
    const getRelatedCursorRules = (success)=>success.relatedCursorRules ?? [];
    const relatedSkillsBySuccess = new WeakMap();
    const getRelatedSkills = (success)=>relatedSkillsBySuccess.get(success) ?? [];
    const renderSkillReminder = (skills)=>{
        if (skills.length === 0) {
            return void 0;
        }
        const skillBlocks = skills.map((skill)=>{
            const description4 = skill.description || "(No description)";
            return `- ${skill.fullPath}
${description4}`;
        });
        const lines2 = [
            "The following skills may be relevant to the files you just read:",
            ...skillBlocks
        ];
        return lines2.join("\n\n");
    };
    const render2 = async (ctx, { result }, props)=>{
        const hydratedBlobs = new Map();
        if (result?.case === "success") {
            const outputCase = result.value.output?.case;
            if (outputCase === "dataBlobId" || outputCase === "contentBlobId") {
                const blobId = result.value.output.value;
                if (props.blobStore) {
                    const blobIdHex = toHex(blobId);
                    const blobData = await props.blobStore.getBlob(ctx, blobId);
                    if (!blobData) {
                        throw new Error(`Failed to hydrate blob ${blobIdHex} for tool Read`);
                    }
                    hydratedBlobs.set(blobIdHex, blobData);
                } else {
                    throw new Error(`Cannot hydrate blobs for tool Read: no blob store available`);
                }
            }
        }
        if (!result) {
            return createStringResult("Unknown error", true);
        }
        const renderImageBinary = (imgData, filePath)=>{
            const mimeType = detectImageMimeType(imgData, filePath);
            const base64Data = Buffer.from(imgData).toString("base64");
            return {
                content: [
                    {
                        type: "text",
                        text: `Read image file: ${filePath}`
                    },
                    {
                        type: "image",
                        data: base64Data,
                        mimeType
                    }
                ],
                isError: false
            };
        };
        switch(result.case){
            case "success":
                if (result.value.isEmpty) {
                    return createStringResult("File is empty.");
                } else if (result.value.exceededLimit) {
                    return createStringResult(`File content (${result.value.fileSize} characters) exceeds maximum allowed characters (${READ_CHAR_HARD_LIMIT} characters).
Please use offset and limit parameters to read specific portions of the file, or use the 'grep' tool to search for specific content.`);
                } else {
                    const output = result.value.output;
                    if (!output) {
                        return createStringResult("Unknown error: no output", true);
                    }
                    switch(output.case){
                        case "content":
                        case "contentBlobId":
                            {
                                let rawContent;
                                if (output.case === "content") {
                                    rawContent = output.value;
                                } else {
                                    const blobIdHex = toHex(output.value);
                                    const contentBytes = hydratedBlobs.get(blobIdHex);
                                    if (!contentBytes) {
                                        throw new Error(`Content blob not hydrated for render: ${blobIdHex} (path: ${result.value.path})`);
                                    }
                                    rawContent = utf8Serde.deserialize(contentBytes);
                                }
                                const filePath = result.value.path;
                                const totalLines = result.value.totalLines;
                                const startLineNumber = result.value.readRange?.startLine ?? 1;
                                const isNotebook = isJupyterNotebook2(filePath);
                                if (isNotebook) {
                                    const notebookFormatted = formatNotebookForLLM(rawContent);
                                    const cursorRuleReminder2 = renderCursorRuleReminder(getRelatedCursorRules(result.value));
                                    const skillReminder2 = renderSkillReminder(getRelatedSkills(result.value));
                                    let finalContent2 = notebookFormatted;
                                    if (cursorRuleReminder2) {
                                        finalContent2 = `${finalContent2}

${cursorRuleReminder2}`;
                                    }
                                    if (skillReminder2) {
                                        finalContent2 = `${finalContent2}

${skillReminder2}`;
                                    }
                                    return createStringResult(finalContent2);
                                }
                                const shouldIncludeLineNumbers = result.value.includeLineNumbers ?? (enableLineNumbersArg ? false : formattingOptions.enableLineNumbers ?? false);
                                const formattedContent = formatCodeBlock({
                                    content: rawContent,
                                    filePath,
                                    startLineNumber,
                                    totalLineNumbersInFile: totalLines,
                                    formattingOptions: {
                                        ...formattingOptions,
                                        gpt5StyleLineNumbers: useSparseReadLineNumbers ? false : formattingOptions.gpt5StyleLineNumbers,
                                        gpt5CodexCatN: useSparseReadLineNumbers ? false : formattingOptions.gpt5CodexCatN,
                                        enableLineNumbers: shouldIncludeLineNumbers,
                                        sparseLineNumbers: useSparseReadLineNumbers ? READ_LINE_NUMBER_INTERVAL : formattingOptions.sparseLineNumbers
                                    }
                                }, {
                                    addAmountOfOmittedLines: result.value.readRange !== void 0 && (result.value.readRange.startLine > 1 || result.value.readRange.endLine < totalLines)
                                });
                                const cursorRuleReminder = renderCursorRuleReminder(getRelatedCursorRules(result.value));
                                const skillReminder = renderSkillReminder(getRelatedSkills(result.value));
                                let finalContent = formattedContent;
                                if (cursorRuleReminder) {
                                    finalContent = `${finalContent}

${cursorRuleReminder}`;
                                }
                                if (skillReminder) {
                                    finalContent = `${finalContent}

${skillReminder}`;
                                }
                                return createStringResult(finalContent);
                            }
                        case "data":
                            {
                                return renderImageBinary(output.value, result.value.path);
                            }
                        case "dataBlobId":
                            {
                                const blobId = output.value;
                                const { path: path64 } = result.value;
                                const blobIdHex = toHex(blobId);
                                const blobData = hydratedBlobs.get(blobIdHex);
                                if (!blobData) {
                                    throw new Error(`Image blob not hydrated for render: ${blobIdHex} (path: ${path64})`);
                                }
                                return renderImageBinary(blobData, path64);
                            }
                        case void 0:
                            return createStringResult("Unknown error: no output case", true);
                        default:
                            {
                                const _exhaustiveOutputCheck = output;
                                throw new Error(`Unhandled output case: ${_exhaustiveOutputCheck}`);
                            }
                    }
                }
            case "error":
                return createStringResult(`Error: ${result.value.errorMessage}`, true);
            case void 0:
                return createStringResult("Unknown error", true);
            default:
                {
                    const _exhaustiveCheck = result;
                    throw new Error(`Unhandled result case: ${_exhaustiveCheck}`);
                }
        }
    };
    function getToolName10(version4) {
        switch(version4){
            case "dsv3-1018":
                return "read_file";
            case "gpt5-codex":
            case "codex-cloud":
                return "ReadFile";
            case "cursor-0226":
            case "dsv3-1205":
            case "latest":
            case "haiku":
                return "Read";
            default:
                {
                    const _exhaustive = version4;
                    throw new Error(`Unhandled version: ${_exhaustive}`);
                }
        }
    }
    function getOffsetLimitUsageLines({ useExplicitOffsetLimitDescription: useExplicit }) {
        if (useExplicit) {
            return `- ${EXPLICIT_OFFSET_OMIT_BULLET}
- ${EXPLICIT_OFFSET_PROVIDE_BULLET}`;
        }
        return "- You can optionally specify a line offset and limit (especially handy for long files), but it's recommended to read the whole file by not providing these parameters.";
    }
    function getDescription6({ version: version4, includeLineNumbersInDescription, useMinimalHarnessDescription, useSparseReadLineNumbersDescription, useExplicitOffsetLimitDescription: useExplicitOffsetLimit }) {
        if (useMinimalHarnessDescription) {
            return "View an image on the local filesystem. This tool can only view IMAGE files. For normal file reads use the Shell tool.";
        }
        const lineNumbersLine = "- Lines in the output are numbered starting at 1, using following format: LINE_NUMBER|LINE_CONTENT";
        const shouldDescribeLineNumbers = includeLineNumbersInDescription && !useSparseReadLineNumbersDescription;
        const offsetLimitUsageLines = getOffsetLimitUsageLines({
            useExplicitOffsetLimitDescription: useExplicitOffsetLimit
        });
        switch(version4){
            case "cursor-0226":
                return "Reads a file from the local filesystem. This tool can also read image files when called with the appropriate path. Formats supported: jpeg/jpg, png, gif, webp.";
            case "dsv3-1018":
                return `
Reads a file from the local filesystem. You can access any file directly by using this tool.
If the User provides a path to a file assume that path is valid. It is okay to read a file that does not exist; an error will be returned.

Usage:
${offsetLimitUsageLines}
${shouldDescribeLineNumbers ? `${lineNumbersLine}.
` : ""}- You have the capability to call multiple tools in a single response. It is always better to speculatively read multiple files as a batch that are potentially useful.
- If you read a file that exists but has empty contents you will receive 'File is empty.'.`;
            case "dsv3-1205":
                return `Reads a file from the local filesystem. You can access any file directly by using this tool.
If the User provides a path to a file assume that path is valid. It is okay to read a file that does not exist; an error will be returned.

Usage:
${offsetLimitUsageLines}
${shouldDescribeLineNumbers ? `${lineNumbersLine}
` : ""}- You have the capability to call multiple tools in a single response. It is always better to speculatively read multiple files as a batch that are potentially useful.
- If you read a file that exists but has empty contents you will receive 'File is empty.'

Image Support:
- This tool can also read image files when called with the appropriate path.
- Supported image formats: jpeg/jpg, png, gif, webp.`;
            case "gpt5-codex":
            case "codex-cloud":
            case "latest":
                return `Reads a file from the local filesystem. You can access any file directly by using this tool.
If the User provides a path to a file assume that path is valid. It is okay to read a file that does not exist; an error will be returned.

Usage:
${offsetLimitUsageLines}
${shouldDescribeLineNumbers ? `${lineNumbersLine}
` : ""}- You have the capability to call multiple tools in a single response. It is always better to speculatively read multiple files as a batch that are potentially useful.
- If you read a file that exists but has empty contents you will receive 'File is empty.'

Image Support:
- This tool can also read image files when called with the appropriate path.
- Supported image formats: jpeg/jpg, png, gif, webp.

PDF Support:
- PDF files are converted into text content automatically (subject to the same character limits as other files).`;
            case "haiku":
                return `Reads a file from the local filesystem. You can access any file directly by using this tool.
If the User provides a path to a file assume that path is valid. It is okay to read a file that does not exist; an error will be returned.

Usage:
- For partial file reads, use the line_range parameter with [start_line, end_line] format (1-indexed, inclusive). Example: [100, 150] reads lines 100 through 150.
- It's recommended to read the whole file by not providing line_range, unless the file is too large.
${shouldDescribeLineNumbers ? `${lineNumbersLine}
` : ""}- You have the capability to call multiple tools in a single response. It is always better to speculatively read multiple files as a batch that are potentially useful.
- If you read a file that exists but has empty contents you will receive 'File is empty.'

Image Support:
- This tool can also read image files when called with the appropriate path.
- Supported image formats: jpeg/jpg, png, gif, webp.

PDF Support:
- PDF files are converted into text content automatically (subject to the same character limits as other files).`;
            default:
                {
                    const _exhaustive = version4;
                    throw new Error(`Unhandled version: ${_exhaustive}`);
                }
        }
    }
    const name17 = useMinimalHarness ? "ViewImage" : getToolName10(promptVersion);
    const description3 = options2?.toolDescription ?? getDescription6({
        version: promptVersion,
        includeLineNumbersInDescription: !enableLineNumbersArg,
        useMinimalHarnessDescription: useMinimalHarness,
        useSparseReadLineNumbersDescription: useSparseReadLineNumbers,
        useExplicitOffsetLimitDescription
    });
    const baseParametersSchema3 = useMinimalHarness ? external_exports.object({
        path: external_exports.string().describe("The absolute path of the image to view.")
    }) : getParametersSchema4({
        version: promptVersion,
        includeEnableLineNumbers: enableLineNumbersArg,
        includeNegativeOffset: enableNegativeOffset,
        useSparseReadLineNumbers
    });
    const parametersSchema29 = extendMachineIdParameter(baseParametersSchema3, options2?.machineIds, options2?.machineIdParameterSchema);
    return createZodAgentTool("READ", {
        name: name17,
        descriptionGenerator: (_props)=>description3,
        parameters: parametersSchema29,
        execute: withSafeParsedArgs(parametersSchema29, execute, createReadToolCall(new ReadToolCall()), {
            emitInitialPartialToolCall: options2?.fileOperationLockManager === void 0
        }),
        render: render2,
        serializeError: (error3)=>{
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            return createReadToolCall(new ReadToolCall({
                result: new ReadToolResult({
                    result: {
                        case: "error",
                        value: new ReadToolError({
                            errorMessage: errorMessage4
                        })
                    }
                })
            }));
        }
    });
};

}
