import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { createSpan } from "../../agent-kv/dist/controlled.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { MAX_TEXT_SIZE } from "../../constants/dist/composer.js";
import { init_dist2 } from "../../constants/dist/index.js";
import { init_dist } from "../../context/dist/index.js";
import { countLines, getFormatForFile, isAgentToolOutputFile, isTerminalFilePath, isVideoFilePath, readText, resolvePath } from "../../dist_exports.js";
import { init_common3 } from "./common.js";
import { init_mcp_disk_freshness_on_access } from "./mcp-disk-freshness-on-access.js";
import { init_pending_decision_provider } from "./pending-decision-provider.js";
import { init_permissions_service } from "./services/permissions-service.js";
import { init_read_block_handler } from "./utils/read-block-handler.js";
import { buildBinaryFileRejection, decodeTerminalFile, isPdfFilePath, looksLikeKnownBinaryFormat, readTextStreaming, resolveFileReadBlock, scheduleDiskMcpDiscoveryFreshnessOnMcpsPathAccess, shouldBlockFileRead, tryApplyRequestedReadRange } from "../../mcp_sandbox_policy_exports.js";
import { require_lib } from "../../node_modules/.pnpm/iconv-lite@0.7.0/node_modules/iconv-lite/lib/index.js";
import { ReadError, ReadFileNotFound, ReadInvalidFile, ReadPermissionDenied, ReadRejected, ReadResult, ReadSuccess, init_read_exec_pb } from "../../proto/dist/generated/agent/v1/read_exec_pb.js";
import { init_image_resize, resizeImageBufferIfNeeded } from "../../utils/dist/image-resize.js";
import { init_dist3 } from "../../utils/dist/index.js";
var import_node_fs27, import_promises40, import_node_path62, import_node_util9, import_iconv_lite2, __addDisposableResource39, __disposeResources39, PDF_EXTENSION, STREAMING_READ_CHUNK_BYTES, MAX_FILE_ENCODINGS2, logger28, watchdog, TERMINAL_DETECT_MIN_PAIRED_MATCHES, TERMINAL_BLOCK_DELIMITER, TERMINAL_FOOTER_MAX_BYTES, KNOWN_BINARY_MAGIC_PREFIXES, InvalidUtf8Error, LocalReadExecutor;
export { InvalidUtf8Error, KNOWN_BINARY_MAGIC_PREFIXES, LocalReadExecutor, MAX_FILE_ENCODINGS2, PDF_EXTENSION, STREAMING_READ_CHUNK_BYTES, TERMINAL_BLOCK_DELIMITER, TERMINAL_DETECT_MIN_PAIRED_MATCHES, TERMINAL_FOOTER_MAX_BYTES, __addDisposableResource39, __disposeResources39, import_iconv_lite2, import_node_fs27, import_node_path62, import_node_util9, import_promises40, logger28, watchdog };
var __wakaru_init_read3_initialized = false;
export function init_read3() {
if (__wakaru_init_read3_initialized) return;
__wakaru_init_read3_initialized = true;
"use strict";
import_node_fs27 = require("node:fs");
import_promises40 = require("node:fs/promises");
import_node_path62 = require("node:path");
import_node_util9 = require("node:util");
init_dist2();
init_dist();
init_read_exec_pb();
init_dist3();
init_image_resize();
import_iconv_lite2 = __toESM(require_lib(), 1);
init_common3();
init_mcp_disk_freshness_on_access();
init_pending_decision_provider();
init_permissions_service();
init_read_block_handler();
__addDisposableResource39 = function(env, value, async) {
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
__disposeResources39 = (function(SuppressedError2) {
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
PDF_EXTENSION = ".pdf";
STREAMING_READ_CHUNK_BYTES = 64 * 1024;
MAX_FILE_ENCODINGS2 = 100;
logger28 = createLogger("LocalReadExecutor");
watchdog = async (ctx, msg, ms2, f2)=>{
    const timeout2 = setTimeout(()=>{
        logger28.warn(ctx, `[watchdog, LocalReadExecutor] ${msg} still not completed after ${ms2}ms`);
    }, ms2);
    try {
        return await f2();
    } finally{
        clearTimeout(timeout2);
    }
};
TERMINAL_DETECT_MIN_PAIRED_MATCHES = 8;
TERMINAL_BLOCK_DELIMITER = Buffer.from("\n---\n");
TERMINAL_FOOTER_MAX_BYTES = 4096;
KNOWN_BINARY_MAGIC_PREFIXES = [
    Buffer.from("%PDF-", "ascii"),
    Buffer.from([
        208,
        207,
        17,
        224,
        161,
        177,
        26,
        225
    ]),
    Buffer.from([
        80,
        75,
        3,
        4
    ]),
    Buffer.from([
        80,
        75,
        5,
        6
    ]),
    Buffer.from([
        80,
        75,
        7,
        8
    ]),
    Buffer.from([
        127,
        69,
        76,
        70
    ]),
    Buffer.from([
        254,
        237,
        250,
        206
    ]),
    Buffer.from([
        254,
        237,
        250,
        207
    ]),
    Buffer.from([
        206,
        250,
        237,
        254
    ]),
    Buffer.from([
        207,
        250,
        237,
        254
    ]),
    Buffer.from([
        77,
        90,
        144
    ]),
    Buffer.from([
        0,
        97,
        115,
        109
    ]),
    Buffer.from([
        137,
        80,
        78,
        71,
        13,
        10,
        26,
        10
    ]),
    Buffer.from([
        255,
        216,
        255
    ]),
    Buffer.from("GIF87a", "ascii"),
    Buffer.from("GIF89a", "ascii"),
    Buffer.from("SQLite format 3\0", "ascii"),
    Buffer.from([
        31,
        139
    ]),
    Buffer.from("BZh", "ascii"),
    Buffer.from([
        253,
        55,
        122,
        88,
        90,
        0
    ]),
    Buffer.from([
        40,
        181,
        47,
        253
    ]),
    Buffer.from([
        55,
        122,
        188,
        175,
        39,
        28
    ]),
    Buffer.from([
        82,
        97,
        114,
        33,
        26,
        7,
        0
    ]),
    Buffer.from([
        82,
        97,
        114,
        33,
        26,
        7,
        1,
        0
    ])
];
InvalidUtf8Error = class extends Error {
    constructor(){
        super("Invalid UTF-8 while streaming read");
        this.name = "InvalidUtf8Error";
    }
};
LocalReadExecutor = class {
    constructor(permissionsService, workspacePath, _options){
        this.permissionsService = permissionsService;
        this.workspacePath = workspacePath;
        this.mcpStateAccessor = _options?.mcpStateAccessor;
        this.useStreamingRead = _options?.useStreamingRead;
        this.pendingDecisionProvider = _options?.pendingDecisionProvider;
    }
    async execute(ctx, args) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource39(env_1, createSpan(ctx.withName("LocalReadExecutor.execute")), false);
            const filePath = args.path;
            const resolvedPath = resolvePath(filePath, this.workspacePath);
            const shouldBlock = await watchdog(ctx, "permissionsService.shouldBlockFileRead", 3e3, ()=>shouldBlockFileRead(this.permissionsService, resolvedPath));
            if (shouldBlock) {
                const resolution = await watchdog(ctx, "resolveFileReadBlock", 3e3, ()=>resolveFileReadBlock(shouldBlock, {
                        pendingDecisionProvider: this.pendingDecisionProvider,
                        toolCallId: args.toolCallId
                    }));
                if (resolution.kind === "rejected") {
                    return new ReadResult({
                        result: {
                            case: "rejected",
                            value: new ReadRejected({
                                path: resolvedPath,
                                reason: resolution.reason ?? ""
                            })
                        }
                    });
                }
                if (resolution.kind === "denied") {
                    return new ReadResult({
                        result: {
                            case: "permissionDenied",
                            value: new ReadPermissionDenied({
                                path: resolvedPath
                            })
                        }
                    });
                }
            }
            if (this.mcpStateAccessor !== void 0) {
                scheduleDiskMcpDiscoveryFreshnessOnMcpsPathAccess(ctx, this.mcpStateAccessor, resolvedPath);
            }
            try {
                const stats = await watchdog(ctx, "stat", 3e3, ()=>(0, import_promises40.stat)(resolvedPath));
                if (stats.isDirectory()) {
                    return new ReadResult({
                        result: {
                            case: "invalidFile",
                            value: new ReadInvalidFile({
                                path: resolvedPath,
                                reason: "Path is a directory, not a file"
                            })
                        }
                    });
                }
                if (!stats.isFile()) {
                    return new ReadResult({
                        result: {
                            case: "invalidFile",
                            value: new ReadInvalidFile({
                                path: resolvedPath,
                                reason: "Path is neither a file nor a directory"
                            })
                        }
                    });
                }
                const isTerminalPath = isTerminalFilePath(resolvedPath);
                const isAgentToolPath = isAgentToolOutputFile(resolvedPath);
                if (isTerminalPath || isAgentToolPath) {
                    return await this.readTerminalFile(ctx, resolvedPath, stats, args, isAgentToolPath && !isTerminalPath);
                }
                const contentInfo = await watchdog(ctx, "getFormatForFile", 3e3, ()=>getFormatForFile(resolvedPath));
                const isImage = contentInfo.isImageFile;
                const isPdf = isPdfFilePath(resolvedPath);
                const isVideo = isVideoFilePath(resolvedPath);
                if (isImage) {
                    const resizedImage = await watchdog(ctx, "resizeImageIfNeeded", 3e3, async ()=>{
                        const imageData = await (0, import_promises40.readFile)(resolvedPath);
                        return resizeImageBufferIfNeeded(imageData);
                    });
                    return new ReadResult({
                        result: {
                            case: "success",
                            value: new ReadSuccess({
                                path: resolvedPath,
                                output: {
                                    case: "data",
                                    value: resizedImage.data
                                },
                                totalLines: 0,
                                fileSize: BigInt(stats.size),
                                truncated: false
                            })
                        }
                    });
                } else if (isPdf) {
                    const pdfData = await watchdog(ctx, "readPdfBinary", 3e3, ()=>(0, import_promises40.readFile)(resolvedPath));
                    return new ReadResult({
                        result: {
                            case: "success",
                            value: new ReadSuccess({
                                path: resolvedPath,
                                output: {
                                    case: "data",
                                    value: pdfData
                                },
                                totalLines: 0,
                                fileSize: BigInt(stats.size),
                                truncated: false
                            })
                        }
                    });
                } else if (contentInfo.isBinaryFile && isVideo) {
                    const binaryData = await watchdog(ctx, "readBinaryFile", 3e3, ()=>(0, import_promises40.readFile)(resolvedPath));
                    return new ReadResult({
                        result: {
                            case: "success",
                            value: new ReadSuccess({
                                path: resolvedPath,
                                output: {
                                    case: "data",
                                    value: binaryData
                                },
                                totalLines: 0,
                                fileSize: BigInt(stats.size),
                                truncated: false
                            })
                        }
                    });
                } else if (contentInfo.isBinaryFile) {
                    return buildBinaryFileRejection(resolvedPath);
                } else {
                    const useStreamingRead = this.useStreamingRead;
                    const streamingReadEnabled = useStreamingRead ? await watchdog(ctx, "useStreamingRead", 3e3, ()=>useStreamingRead()) : true;
                    if (streamingReadEnabled) {
                        const streamedRead = await watchdog(ctx, "readTextStreaming", 7e3, ()=>readTextStreaming(ctx, resolvedPath, contentInfo, args));
                        return new ReadResult({
                            result: {
                                case: "success",
                                value: new ReadSuccess({
                                    path: resolvedPath,
                                    output: {
                                        case: "content",
                                        value: streamedRead.content
                                    },
                                    totalLines: streamedRead.totalLines,
                                    fileSize: BigInt(stats.size),
                                    truncated: streamedRead.truncated,
                                    rangeApplied: streamedRead.rangeApplied
                                })
                            }
                        });
                    }
                    const fullContent = await watchdog(ctx, "readText", 3e3, ()=>readText(resolvedPath, args.encodingHint));
                    const totalLines = await watchdog(ctx, "countLines", 3e3, ()=>countLines(fullContent));
                    const rangedRead = tryApplyRequestedReadRange(fullContent, totalLines, args);
                    let content = rangedRead.content;
                    let truncated = false;
                    if (content.length > MAX_TEXT_SIZE) {
                        content = content.substring(0, MAX_TEXT_SIZE);
                        truncated = true;
                    }
                    return new ReadResult({
                        result: {
                            case: "success",
                            value: new ReadSuccess({
                                path: resolvedPath,
                                output: {
                                    case: "content",
                                    value: content
                                },
                                totalLines,
                                fileSize: BigInt(stats.size),
                                truncated,
                                rangeApplied: rangedRead.rangeApplied
                            })
                        }
                    });
                }
            } catch (error3) {
                const err = error3;
                if (err.code === "ENOENT") {
                    return new ReadResult({
                        result: {
                            case: "fileNotFound",
                            value: new ReadFileNotFound({
                                path: resolvedPath
                            })
                        }
                    });
                }
                if (err.code === "EACCES" || err.code === "EPERM") {
                    return new ReadResult({
                        result: {
                            case: "permissionDenied",
                            value: new ReadPermissionDenied({
                                path: resolvedPath
                            })
                        }
                    });
                }
                return new ReadResult({
                    result: {
                        case: "error",
                        value: new ReadError({
                            path: resolvedPath,
                            error: err instanceof Error ? err.message : "Unknown error occurred"
                        })
                    }
                });
            }
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources39(env_1);
        }
    }
    async readTerminalFile(ctx, resolvedPath, stats, args, checkForBinaryMagicBytes) {
        const rawBuf = await watchdog(ctx, "readTerminalFile", 3e3, ()=>(0, import_promises40.readFile)(resolvedPath));
        if (checkForBinaryMagicBytes && looksLikeKnownBinaryFormat(rawBuf)) {
            return buildBinaryFileRejection(resolvedPath);
        }
        let content = decodeTerminalFile(rawBuf).replaceAll("\r\n", "\n");
        const totalLines = countLines(content);
        const rangedRead = tryApplyRequestedReadRange(content, totalLines, args);
        content = rangedRead.content;
        let truncated = false;
        if (content.length > MAX_TEXT_SIZE) {
            content = content.substring(0, MAX_TEXT_SIZE);
            truncated = true;
        }
        return new ReadResult({
            result: {
                case: "success",
                value: new ReadSuccess({
                    path: resolvedPath,
                    output: {
                        case: "content",
                        value: content
                    },
                    totalLines,
                    fileSize: BigInt(stats.size),
                    truncated,
                    rangeApplied: rangedRead.rangeApplied
                })
            }
        });
    }
};

}
