import { external_exports } from "./external_exports.js";
import { lenientNumber, logShimFiring } from "./mcp_sandbox_policy_exports.js";
import { toolStepKey } from "./agent/dist/shims/tool-step.js";
import { ToolCallUnexpectedEnvironmentError } from "./agent/dist/tools/common.js";
import { READ_CHAR_HARD_LIMIT } from "./agent/dist/tools/core/read/common.js";
import { PDF_EXTENSION_REGEX, PDF_HEADER, extension2, import_node_os26, import_node_path89, sanitizedEnvForWorkers2, workerDir2 } from "./agent/dist/tools/core/read/pdf-utils.js";
import { init_pdf_worker } from "./agent/dist/tools/core/read/pdf-worker.js";
import { MAX_CONVERSATION_ID_LENGTH3, SAME_STEP_FILE_WRITER_TOOLS, SAME_STEP_READ_RACE_MAX_WAIT_MS, readCoveragePercentHistogram, readFileSizeBytesHistogram, readReturnedBytesHistogram, readReturnedLinesHistogram, readSuccessCounter, readTotalFileLinesHistogram, sameStepReadRace } from "./agent/dist/tools/core/read/read.js";
import { CONVERSATION_SEARCH_SOURCE_LABELS } from "./agent/dist/tools/core/search-conversations/search-conversations.js";
import { PDFParse } from "./node_modules/.pnpm/pdf-parse@2.4.5/node_modules/pdf-parse/dist/pdf-parse/esm/PDFParse.js";
import { Piscina } from "./node_modules/.pnpm/piscina@4.9.3/node_modules/piscina/dist/esm-wrapper.mjs";
import { ToolCall } from "./proto/dist/generated/agent/v1/agent_pb.js";
import { ReadLintsToolError, ReadLintsToolResult, ReadLintsToolSuccess } from "./proto/dist/generated/agent/v1/read_lints_tool_pb.js";
import { ReadRange, ReadToolResult, ReadToolSuccess } from "./proto/dist/generated/agent/v1/read_tool_pb.js";
import { RecordCiInvestigationFinding, RecordCiInvestigationOverall } from "./proto/dist/generated/agent/v1/record_ci_investigation_findings_tool_pb.js";
export async function extractPdfTextWorker(params) {
    const buffer = Buffer.isBuffer(params.bytes) ? params.bytes : Buffer.from(params.bytes);
    const parser = new PDFParse({
        data: buffer
    });
    try {
        const result = await parser.getText();
        return {
            text: typeof result.text === "string" ? result.text : ""
        };
    } finally{
        await parser.destroy();
    }
}
function hasPdfMagicBytes(bytes) {
    if (bytes.length < PDF_HEADER.length) {
        return false;
    }
    return PDF_HEADER.every((value, index)=>bytes[index] === value);
}
export function isPdfBinary(bytes, filePath) {
    if (hasPdfMagicBytes(bytes)) {
        return true;
    }
    if (filePath && PDF_EXTENSION_REGEX.test(filePath)) {
        return true;
    }
    return false;
}
function isSeaProcess2() {
    return "sea" in process.versions;
}
function getPdfWorkerPool() {
    if (isSeaProcess2()) {
        throw new Error("Piscina worker pool is not available in the self-contained worker SEA");
    }
    if (_pdfWorkerPool === void 0) {
        _pdfWorkerPool = new Piscina({
            minThreads: 1,
            maxThreads: Math.max(1, Math.floor(import_node_os26.default.availableParallelism() / 4)),
            execArgv: extension2 === "ts" ? [
                "--experimental-strip-types"
            ] : void 0,
            env: sanitizedEnvForWorkers2
        });
    }
    return _pdfWorkerPool;
}
export async function destroyPdfWorkerPool() {
    const pool = _pdfWorkerPool;
    _pdfWorkerPool = void 0;
    await pool?.destroy();
}
export async function extractPdfText(bytes) {
    const params = {
        bytes
    };
    if (isSeaProcess2()) {
        const { default: extractPdfTextWorker2 } = await Promise.resolve().then(()=>(init_pdf_worker(), pdf_worker_exports));
        const result2 = await extractPdfTextWorker2(params);
        return result2.text;
    }
    const result = await getPdfWorkerPool().run(params, {
        filename: import_node_path89.default.join(workerDir2, `./pdf-worker.${extension2}`)
    });
    return result.text;
}
var _pdfWorkerPool;
export async function retryAfterSameStepCalls(ctx, toolCallId, missed, retry2) {
    const wait2 = await ctx.get(toolStepKey)?.waitForEarlierCalls(toolCallId, SAME_STEP_READ_RACE_MAX_WAIT_MS, {
        includeSettled: true,
        toolNames: SAME_STEP_FILE_WRITER_TOOLS
    });
    if (wait2 === void 0) return missed;
    if (!wait2.settled) return missed;
    const retried = await retry2();
    if (retried.result.case === "success") {
        logShimFiring(ctx, sameStepReadRace.applied(void 0, {
            log: {
                waited_on: wait2.waitedOn.join(","),
                wait_ms: wait2.waitMs,
                settled: wait2.settled
            }
        }));
    }
    return retried;
}
export function getSafeConversationId4(conversationId) {
    let safe = encodeURIComponent(conversationId);
    safe = safe.replace(/%/g, "_");
    if (safe.length > MAX_CONVERSATION_ID_LENGTH3) {
        safe = safe.slice(0, MAX_CONVERSATION_ID_LENGTH3);
    }
    return safe;
}
export function getLastPathComponent2(filePath) {
    const parts = filePath.split(/[/\\]+/).filter(Boolean);
    return parts.length > 0 ? parts[parts.length - 1] : filePath;
}
export function stripKnownTranscriptExtension2(fileName) {
    if (fileName.endsWith(".txt")) {
        return fileName.slice(0, -4);
    }
    if (fileName.endsWith(".json")) {
        return fileName.slice(0, -5);
    }
    return fileName;
}
export function getSkillIdFromPath2(filePath) {
    const normalized = filePath.replace(/\\/g, "/").replace(/\/+$/, "");
    const withoutSkillSuffix = normalized.replace(/\/SKILL\.md$/i, "");
    const parts = withoutSkillSuffix.split("/").filter(Boolean);
    if (parts.length > 0) {
        return parts[parts.length - 1] ?? withoutSkillSuffix;
    }
    return getLastPathComponent2(withoutSkillSuffix);
}
function normalizeComparablePath(filePath) {
    return filePath.replace(/\\/g, "/").replace(/\/+$/, "");
}
export function findMatchingAgentSkill(filePath, agentSkills) {
    if (!agentSkills || agentSkills.length === 0) {
        return void 0;
    }
    const normalized = normalizeComparablePath(filePath);
    return agentSkills.find((skill)=>{
        const fullPath = skill.fullPath;
        if (!fullPath) {
            return false;
        }
        return normalizeComparablePath(fullPath) === normalized;
    });
}
export function findMatchingCursorRule(filePath, cursorRules) {
    if (!cursorRules || cursorRules.length === 0) {
        return void 0;
    }
    const normalized = normalizeComparablePath(filePath);
    return cursorRules.find((rule)=>{
        const fullPath = rule.fullPath;
        if (!fullPath) {
            return false;
        }
        return normalizeComparablePath(fullPath) === normalized;
    });
}
export function normalizeLineEndings2(content) {
    return content.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}
export function toSkillReminderReadPath(skillPath) {
    return `__skill_reminder__:${skillPath}`;
}
export function appliesExplicitOffsetLimitDescription(args) {
    if (!args.useExplicitOffsetLimitDescription || args.useMinimalHarness || args.hasToolDescriptionOverride) {
        return false;
    }
    switch(args.promptVersion){
        case "cursor-0226":
        case "haiku":
            return false;
        case "dsv3-1018":
        case "dsv3-1205":
        case "gpt5-codex":
        case "codex-cloud":
        case "latest":
            return true;
        default:
            {
                const _exhaustive = args.promptVersion;
                throw new Error(`Unhandled version: ${_exhaustive}`);
            }
    }
}
export function getReadScope(offset, limit) {
    if (limit !== void 0) {
        return "limited";
    }
    if (offset !== void 0) {
        return "offset_to_end";
    }
    return "full_file";
}
function getReturnedLineCount(success) {
    if (success.exceededLimit) {
        return void 0;
    }
    const readRange = success.readRange;
    if (!readRange) {
        return void 0;
    }
    return Math.max(0, readRange.endLine - readRange.startLine + 1);
}
function getReturnedByteCount(success, blobBackedReturnedByteCount) {
    const output = success.output;
    if (!output || success.exceededLimit) {
        return void 0;
    }
    switch(output.case){
        case "content":
            return Buffer.byteLength(output.value, "utf8");
        case "data":
            return output.value.byteLength;
        case "contentBlobId":
        case "dataBlobId":
            return blobBackedReturnedByteCount;
        case void 0:
            return void 0;
    }
}
export function recordReadSuccessMetrics(ctx, success, readScope, repeatStatus, blobBackedReturnedByteCount, explicitDesc) {
    const labels = {
        read_scope: readScope,
        repeat_status: repeatStatus,
        explicit_desc: explicitDesc
    };
    readSuccessCounter.increment(ctx, 1, {
        ...labels,
        exceeded_limit: success.exceededLimit ? "true" : "false"
    });
    readTotalFileLinesHistogram.histogram(ctx, success.totalLines, labels);
    readFileSizeBytesHistogram.histogram(ctx, success.fileSize, labels);
    const returnedLines = getReturnedLineCount(success);
    if (returnedLines !== void 0) {
        readReturnedLinesHistogram.histogram(ctx, returnedLines, labels);
        if (success.totalLines > 0) {
            readCoveragePercentHistogram.histogram(ctx, returnedLines / success.totalLines * 100, labels);
        }
    }
    const returnedBytes = getReturnedByteCount(success, blobBackedReturnedByteCount);
    if (returnedBytes !== void 0) {
        readReturnedBytesHistogram.histogram(ctx, returnedBytes, labels);
    }
}
export function createReadToolCall(readTool) {
    return new ToolCall({
        tool: {
            case: "readToolCall",
            value: readTool
        }
    });
}
export function createSuccessResult3(content, totalLines, fileSize, filePath, readRange, includeLineNumbers) {
    if (content.length > READ_CHAR_HARD_LIMIT) {
        return new ReadToolResult({
            result: {
                case: "success",
                value: new ReadToolSuccess({
                    output: {
                        case: "content",
                        value: ""
                    },
                    isEmpty: false,
                    exceededLimit: true,
                    totalLines,
                    fileSize,
                    path: filePath,
                    readRange,
                    includeLineNumbers
                })
            }
        });
    }
    return new ReadToolResult({
        result: {
            case: "success",
            value: new ReadToolSuccess({
                output: {
                    case: "content",
                    value: content
                },
                isEmpty: totalLines === 0 && content === "",
                exceededLimit: false,
                totalLines,
                fileSize,
                path: filePath,
                readRange,
                includeLineNumbers
            })
        }
    });
}
export function computeReadSlice(totalLines, offset, limit) {
    if (offset === void 0 && limit === void 0) {
        return void 0;
    }
    const effectiveOffset = offset ?? 1;
    const effectiveLimit = limit ?? (effectiveOffset < 0 ? Math.abs(effectiveOffset) : totalLines);
    const startIndex = effectiveOffset < 0 ? Math.max(0, totalLines + effectiveOffset) : Math.max(0, effectiveOffset - 1);
    const endIndex = Math.min(totalLines, startIndex + effectiveLimit);
    if (startIndex >= totalLines) {
        throw new ToolCallUnexpectedEnvironmentError(`Offset ${offset} is beyond file length (${totalLines} lines)`);
    }
    return {
        startIndex,
        endIndex,
        readRange: new ReadRange({
            startLine: startIndex + 1,
            endLine: endIndex
        })
    };
}
function createOffsetSchema(options2 = {}) {
    const baseNumberSchema = options2.requireInt ? external_exports.number().int() : external_exports.number();
    const allowNegative = options2.includeNegativeOffset ?? false;
    const description3 = allowNegative ? "The line number to start reading from. Positive values are 1-indexed from the start of the file. Negative values count backwards from the end (e.g. -1 is the last line). Only provide if the file is too large to read at once." : "The line number to start reading from. Only provide if the file is too large to read at once.";
    const errorMessage4 = allowNegative ? "Offset must be >= 1 or <= -1." : "Offset must be >= 1.";
    return lenientNumber(baseNumberSchema).optional().refine((val)=>{
        if (val === void 0 || val === 0 || val >= 1) return true;
        if (allowNegative && val <= -1) return true;
        return false;
    }, errorMessage4).transform((val)=>{
        if (val === void 0) return void 0;
        if (val === 0) return 1;
        return val;
    }).describe(description3);
}
function createLimitSchema(options2 = {}) {
    const baseNumberSchema = options2.requireInt ? external_exports.number().int() : external_exports.number();
    return lenientNumber(baseNumberSchema).optional().refine((val)=>val === void 0 || val >= 1, "Limit must be >= 1.").describe("The number of lines to read. Only provide if the file is too large to read at once.");
}
function createIncludeLineNumbersSchema(useSparseReadLineNumbers) {
    const denseFormatDescription = useSparseReadLineNumbers ? "" : " Lines are numbered starting at 1, using the format LINE_NUMBER|LINE_CONTENT.";
    return external_exports.boolean().optional().describe(`Whether to include line numbers in the output.${denseFormatDescription} Prefer using this only when needed, e.g. for citing codeblocks to the user. Defaults to false.`);
}
function createParametersSchemaLatest({ includeEnableLineNumbers, includeNegativeOffset, useSparseReadLineNumbers }) {
    const baseSchema = external_exports.object({
        path: external_exports.string().describe("The absolute path of the file to read."),
        offset: createOffsetSchema({
            requireInt: true,
            includeNegativeOffset
        }),
        limit: createLimitSchema({
            requireInt: true
        })
    });
    if (includeEnableLineNumbers) {
        return baseSchema.extend({
            include_line_numbers: createIncludeLineNumbersSchema(useSparseReadLineNumbers)
        });
    }
    return baseSchema;
}
function createParametersSchemaDsv3({ includeEnableLineNumbers, useSparseReadLineNumbers }) {
    const baseSchema = external_exports.object({
        target_file: external_exports.string().describe("The path of the file to read. You can use either a relative path in the workspace or an absolute path. If an absolute path is provided, it will be preserved as is."),
        offset: createOffsetSchema({
            requireInt: true
        }),
        limit: createLimitSchema({
            requireInt: true
        })
    });
    if (includeEnableLineNumbers) {
        return baseSchema.extend({
            include_line_numbers: createIncludeLineNumbersSchema(useSparseReadLineNumbers)
        });
    }
    return baseSchema;
}
function createParametersSchemaHaiku({ includeEnableLineNumbers, useSparseReadLineNumbers }) {
    const baseSchema = external_exports.object({
        path: external_exports.string().describe("The absolute path of the file to read."),
        line_range: external_exports.array(external_exports.number().int()).min(2).max(2).optional().describe("Optional. A two-element array [start_line, end_line] specifying the range of lines to read (1-indexed, inclusive). Example: [100, 150] reads lines 100 through 150.")
    });
    if (includeEnableLineNumbers) {
        return baseSchema.extend({
            include_line_numbers: createIncludeLineNumbersSchema(useSparseReadLineNumbers)
        });
    }
    return baseSchema;
}
export function getParametersSchema4({ version: version4, includeEnableLineNumbers, includeNegativeOffset, useSparseReadLineNumbers }) {
    switch(version4){
        case "dsv3-1018":
            return createParametersSchemaDsv3({
                includeEnableLineNumbers,
                useSparseReadLineNumbers
            });
        case "cursor-0226":
            return createParametersSchemaLatest({
                includeEnableLineNumbers,
                includeNegativeOffset: true,
                useSparseReadLineNumbers
            });
        case "dsv3-1205":
        case "latest":
        case "gpt5-codex":
        case "codex-cloud":
            return createParametersSchemaLatest({
                includeEnableLineNumbers,
                includeNegativeOffset,
                useSparseReadLineNumbers
            });
        case "haiku":
            return createParametersSchemaHaiku({
                includeEnableLineNumbers,
                useSparseReadLineNumbers
            });
        default:
            {
                const _exhaustive = version4;
                throw new Error(`Unhandled version: ${_exhaustive}`);
            }
    }
}
export function createReadLintsToolCall2(readLintsTool) {
    return new ToolCall({
        tool: {
            case: "readLintsToolCall",
            value: readLintsTool
        }
    });
}
export function createSuccessResult4(fileDiagnostics, totalDiagnostics) {
    return new ReadLintsToolResult({
        result: {
            case: "success",
            value: new ReadLintsToolSuccess({
                fileDiagnostics,
                totalFiles: fileDiagnostics.length,
                totalDiagnostics
            })
        }
    });
}
export function createErrorResult2(error3) {
    return new ReadLintsToolResult({
        result: {
            case: "error",
            value: new ReadLintsToolError({
                errorMessage: error3
            })
        }
    });
}
export function toProtoFinding(f2) {
    return new RecordCiInvestigationFinding({
        checkName: f2.checkName,
        detailsUrl: f2.detailsUrl,
        tldr: f2.tldr,
        rootCause: f2.rootCause,
        failingSignal: f2.failingSignal,
        suggestedNextStep: f2.suggestedNextStep,
        diffRelation: f2.diffRelation,
        diffRelationEvidence: f2.diffRelationEvidence,
        flakeAssessment: f2.flakeAssessment,
        flakeEvidence: f2.flakeEvidence,
        rerunAvailable: f2.rerunAvailable,
        rerunEvidence: f2.rerunEvidence,
        recommendedAction: f2.recommendedAction,
        recommendedActionEvidence: f2.recommendedActionEvidence,
        confidence: f2.confidence
    });
}
export function toProtoOverall(o) {
    return new RecordCiInvestigationOverall({
        summary: o.summary,
        themes: o.themes ?? [],
        recommendedAction: o.recommendedAction,
        recommendedActionEvidence: o.recommendedActionEvidence,
        checkKeys: o.checkKeys ?? []
    });
}
export function createRecordCiInvestigationFindingsToolCall(toolCall) {
    return new ToolCall({
        tool: {
            case: "recordCiInvestigationFindingsToolCall",
            value: toolCall
        }
    });
}
export function resultToString6(result) {
    switch(result.result.case){
        case "success":
            return result.result.value.message;
        case "error":
            return `Error recording CI findings: ${result.result.value.error}`;
        case void 0:
            return "Unknown CI investigation findings result";
        default:
            {
                const _exhaustive = result.result;
                throw new Error(`Unhandled result case: ${String(_exhaustive)}`);
            }
    }
}
export function createSearchConversationsToolCall(searchConversationsTool) {
    return new ToolCall({
        tool: {
            case: "searchConversationsToolCall",
            value: searchConversationsTool
        }
    });
}
function formatConversationSearchHit(hit, index) {
    const updatedAt = hit.updatedAtMs === BigInt(0) ? "unknown" : new Date(Number(hit.updatedAtMs)).toISOString();
    const source = CONVERSATION_SEARCH_SOURCE_LABELS[hit.source] ?? "unknown";
    const lines2 = [
        `${index + 1}. [${source}] "${hit.title}" (id: ${hit.conversationId}, updated: ${updatedAt})`
    ];
    if (hit.snippet !== void 0 && hit.snippet.length > 0) {
        lines2.push(`   snippet: ${hit.snippet}`);
    }
    return lines2.join("\n");
}
function formatConversationSearchSuccess(success) {
    const lines2 = success.hits.length === 0 ? [
        "No matching conversations found."
    ] : [
        `Found ${success.hits.length} conversation${success.hits.length === 1 ? "" : "s"}:`,
        ...success.hits.map((hit, index)=>formatConversationSearchHit(hit, index))
    ];
    if (success.truncated) {
        lines2.push("Additional matches were omitted because the result limit was reached.");
    }
    if (success.rebuilding) {
        lines2.push("The conversation search index is rebuilding; results may be incomplete.");
    }
    if (success.partial) {
        lines2.push("Search stopped early; partial results were returned.");
    }
    return lines2.join("\n");
}
export function formatConversationSearchResult(result) {
    switch(result.result.case){
        case "success":
            return formatConversationSearchSuccess(result.result.value);
        case "error":
            return `Conversation search failed: ${result.result.value.error}`;
        case void 0:
            return "Conversation search returned no result.";
        default:
            {
                const _exhaustiveCheck = result.result;
                throw new Error(`Unhandled result case: ${_exhaustiveCheck}`);
            }
    }
}

export var pdf_worker_exports = {};
Object.defineProperty(pdf_worker_exports, "default", {
    enumerable: true,
    get: ()=>extractPdfTextWorker
});
