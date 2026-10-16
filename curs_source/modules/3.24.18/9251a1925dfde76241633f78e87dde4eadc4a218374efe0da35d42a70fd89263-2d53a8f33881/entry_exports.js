import { createClient, createConnectRouter, createUniversalHandlerClient } from "./dist_exports.js";
import { describeHarness, destroyWorkerPools, lendHostServices, moduleTags, parseAgentHostPrivacyMode } from "./tree_chunk_napi_exports.js";
import { createManagedLocalAgentClient, hostModuleChannel, runInferenceAgentModule, serveRun, wrapBackendTransport } from "./dist_exports4.js";
import { HARNESS_INTERFACE_REVISION } from "./agent-host/dist/harness/api-constants.js";
import { realHarnessClock } from "./agent-host/dist/harness/clock.js";
import { CAPABILITIES, MAX_SEAM_FRAME_BYTES2 } from "./agent-host/dist/harness/generation/entry.js";
import { MODULE_FAULT_METRIC, MODULE_HEAP_METRIC, MODULE_HOST_LOST_METRIC, MODULE_LOAD_METRIC, MODULE_REVERT_METRIC, MODULE_SERVE_METRIC, MODULE_SWAP_METRIC, MODULE_WRITE_FAILED_METRIC } from "./agent-host/dist/harness/host/routing-adapter.js";
import { VALIDATE_ONLY_FIRST_POLL_DELAY_MS, VALIDATE_ONLY_POLL_INTERVAL_BOUNDS_MS, VALIDATE_ONLY_POLL_INTERVAL_MS, import_node_v82, noTransport } from "./agent-host/dist/harness/host/validate-only.js";
import { createContext } from "./agent-host/dist/storage/instruments.js";
import { INHERITABLE_SPAN_ATTRIBUTES_KEY } from "./context/dist/otel.js";
import { metricsKey } from "./metrics/dist/index.js";
import { ConnectError } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/connect-error.js";
import { AgentService } from "./proto/dist/generated/agent/v1/agent_service_connect.js";
import { AiService } from "./proto/dist/generated/aiserver/v1/aiserver_connect.js";
import { InferenceService } from "./proto/dist/generated/aiserver/v1/inference_connect.js";
import { PrivacyMode } from "./proto/dist/generated/aiserver/v1/privacy_mode_pb.js";
import { RepositoryService } from "./proto/dist/generated/aiserver/v1/repository_connect.js";
function setDefaultLoggerBackend(backend) {
    defaultLoggerBackendImpl = backend;
}
export function hostLoggerBackend(log5) {
    return {
        log: (_ctx, entry)=>{
            const metadata = renderMetadata(entry.metadata);
            log5({
                level: entry.level,
                message: entry.message,
                ...entry.logger === void 0 ? {} : {
                    logger: entry.logger
                },
                ...metadata === void 0 ? {} : {
                    metadata
                },
                ...seamError(entry.error)
            });
        }
    };
}
export function hostMetricsBackend(metrics) {
    const sample = (metric, value, labels)=>({
            stat: metric.name,
            value,
            ...labels === void 0 ? {} : {
                tags: labels
            }
        });
    return {
        increment: (_ctx, metric, value, labels)=>metrics.increment(sample(metric, value ?? 1, labels)),
        histogram: (_ctx, metric, value, labels)=>metrics.distribution(sample(metric, value, labels)),
        gauge: (_ctx, metric, value, labels)=>metrics.gauge(sample(metric, value, labels)),
        record: (_ctx, metric, value, labels)=>metrics.gauge(sample(metric, value, labels))
    };
}
export function generationContext(logger146, hostServices) {
    const { metrics, spanAttributes } = hostServices;
    let context2 = createContext().with(loggerKey, logger146);
    if (metrics !== void 0) {
        context2 = context2.with(metricsKey, hostMetricsBackend(metrics));
    }
    if (spanAttributes !== void 0) {
        context2 = context2.with(INHERITABLE_SPAN_ATTRIBUTES_KEY, {
            ...spanAttributes
        });
    }
    return context2;
}
function seamError(error3) {
    if (error3 === void 0) {
        return {};
    }
    return error3 instanceof Error ? {
        error: renderError(error3),
        errorName: error3.name,
        errorMessage: error3.message
    } : {
        error: renderError(error3)
    };
}
function renderError(error3) {
    if (error3 instanceof Error) {
        return error3.stack ?? error3.message;
    }
    return String(error3);
}
function renderMetadata(metadata) {
    if (metadata === void 0 || Object.keys(metadata).length === 0) {
        return void 0;
    }
    try {
        return JSON.stringify(metadata, (_key, value)=>typeof value === "bigint" ? value.toString() : value);
    } catch (error3) {
        return `<unrenderable metadata: ${renderError(error3)}>`;
    }
}
export function createManagedToolClient(transport) {
    const aiToolsClient = createClient(AiService, transport);
    return {
        runWebSearch: aiToolsClient.runWebSearch,
        runWebFetch: aiToolsClient.runWebFetch,
        runGenerateImage: aiToolsClient.runGenerateImage,
        runGenerateVideo: aiToolsClient.runGenerateVideo,
        runXSearch: aiToolsClient.runXSearch,
        codebaseSearch: createClient(RepositoryService, transport),
        smartModeClassifier: aiToolsClient
    };
}
export function activate(context2) {
    const { module: build2, telemetry } = context2;
    const log5 = (message)=>telemetry.log({
            level: "info",
            message: `gen ${build2.generation.slice(0, 12)} (${build2.label}): ${message}`
        });
    const logger146 = hostLoggerBackend(telemetry.log);
    if (build2.source !== "static") {
        setDefaultLoggerBackend(logger146);
    }
    const backendTransport = wrapBackendTransport(context2.backendTransport, log5, ConnectError);
    const agentClient = createManagedLocalAgentClient({
        inferenceClient: createClient(InferenceService, backendTransport),
        agentToolsClient: createManagedToolClient(backendTransport),
        conversationBlobClient: createClient(AgentService, backendTransport),
        getPrivacyModeEnum: ()=>context2.privacyMode,
        retryLogging: "delegated",
        metricTags: {},
        agentModule: runInferenceAgentModule(build2, hostModuleChannel({
            spanAttributes: telemetry.tags
        }))
    });
    const services = {
        agentClient,
        getPrivacyMode: ()=>parseAgentHostPrivacyMode(context2.privacyMode) ?? PrivacyMode.NO_STORAGE,
        log: log5,
        context: generationContext(logger146, {
            metrics: telemetry,
            spanAttributes: telemetry.tags
        })
    };
    const router = createConnectRouter({
        connect: true,
        grpc: false,
        grpcWeb: false,
        readMaxBytes: MAX_SEAM_FRAME_BYTES2,
        writeMaxBytes: MAX_SEAM_FRAME_BYTES2
    });
    router.service(AgentService, {
        run: (requests, context3)=>serveRun(services, requests, context3)
    });
    const handle = createUniversalHandlerClient(router.handlers);
    let transportDisposed = false;
    const call = (request3)=>{
        if (transportDisposed) {
            return Promise.reject(new Error("agent harness: transport is disposed"));
        }
        return handle(request3);
    };
    log5(`transport created (${CAPABILITIES.join(", ")})`);
    return {
        transport: {
            call,
            dispose () {
                transportDisposed = true;
            }
        }
    };
}
function boundValidateOnlyPollInterval(value) {
    if (typeof value !== "number" || !Number.isFinite(value) || value <= 0) {
        return VALIDATE_ONLY_POLL_INTERVAL_MS;
    }
    const { min, max } = VALIDATE_ONLY_POLL_INTERVAL_BOUNDS_MS;
    return Math.min(max, Math.max(min, Math.floor(value)));
}
export function startHarnessValidationSidecar(options2) {
    const { loader: loader2, log: log5 } = options2;
    const clock = options2.clock ?? realHarnessClock;
    const now2 = ()=>performance.now();
    const interval = boundValidateOnlyPollInterval(options2.pollIntervalMs);
    const increment = (stat24, tags)=>{
        try {
            options2.metrics?.increment?.({
                stat: stat24,
                value: 1,
                tags
            });
        } catch (error3) {
            log5(`${stat24} counter not emitted: ${error3 instanceof Error ? error3.message : String(error3)}`);
        }
    };
    const distribution = (stat24, value, tags)=>{
        try {
            options2.metrics?.distribution({
                stat: stat24,
                value,
                tags
            });
        } catch (error3) {
            log5(`${stat24} distribution not emitted: ${error3 instanceof Error ? error3.message : String(error3)}`);
        }
    };
    const polled = (when)=>when === "turn" ? "poll" : when;
    const stopCounting = [
        loader2.onDidLoad(({ module: module2, channel, sequence, verdict, reason, when })=>increment(MODULE_LOAD_METRIC, {
                verdict,
                reason,
                when: polled(when),
                ...moduleTags(module2, channel, sequence, "validate_only")
            })),
        loader2.onDidServe(({ module: module2, channel, sequence, cause, when, refused })=>increment(MODULE_SERVE_METRIC, {
                cause,
                when: polled(when),
                ...refused === void 0 ? {} : {
                    verdict: refused.verdict,
                    reason: refused.reason
                },
                ...moduleTags(module2, channel, sequence, "validate_only")
            })),
        loader2.onDidLoseHost(({ generation, phase, channel, sequence })=>increment(MODULE_HOST_LOST_METRIC, {
                phase,
                ...moduleTags({
                    generation,
                    source: "installed"
                }, channel, sequence)
            })),
        loader2.onDidRevert(({ module: module2, channel, sequence, trigger, fallback: fallback3 })=>{
            log5(`${module2.label} (${module2.generation.slice(0, 12)}) ${trigger === "crash_loop" ? "kept killing extension hosts" : "was reverted by another window"}; the loader holds ${describeHarness(fallback3)}`);
            increment(MODULE_REVERT_METRIC, {
                error_class: trigger === "crash_loop" ? "host_lost" : "none",
                trigger,
                late_faults: "0",
                ...moduleTags(module2, channel, sequence)
            });
        }),
        loader2.onDidFailToWrite(({ file, code, channel })=>increment(MODULE_WRITE_FAILED_METRIC, {
                file,
                code,
                module_channel: channel ?? "unknown",
                module_mode: "validate_only"
            }))
    ];
    let held;
    let timer2;
    let disposed = false;
    const letGo = (previous)=>{
        try {
            previous.transport?.dispose();
        } catch (error3) {
            log5(`transport dispose failed: ${error3 instanceof Error ? error3.message : String(error3)}`);
        }
        if (loader2.current().harness !== previous.active.harness) {
            loader2.release(previous.active);
        }
    };
    const poll = ()=>{
        const started = now2();
        const result = loader2.poll();
        const { active } = result;
        if (result.rejected !== void 0) {
            log5(`pinned generation ${result.rejected.generation.slice(0, 12)} rejected (${result.rejected.reason}); the loader holds ${describeHarness(active.info)}`);
        }
        if (held?.active.harness === active.harness) {
            return;
        }
        const previous = held;
        if (previous !== void 0) {
            letGo(previous);
        }
        const tags = moduleTags(active.info, active.channel, active.sequence, "validate_only");
        let transport;
        let composed = "ok";
        if (active.info.source === "installed") {
            loader2.turnStarted(active.info);
            try {
                transport = active.harness.createTransport(lendHostServices(active, {
                    backendTransport: noTransport,
                    getPrivacyModeEnum: ()=>void 0,
                    log: log5,
                    metrics: options2.metrics,
                    loopLogContext: options2.loopLogContext
                }));
                log5(`validated ${describeHarness(active.info)}: loaded and activated, no turn runs here`);
            } catch (error3) {
                composed = "compose_failed";
                const reason = error3 instanceof Error ? error3.message : String(error3);
                log5(`activate failed on ${describeHarness(active.info)}: ${reason}`);
                increment(MODULE_FAULT_METRIC, {
                    timing: "early",
                    error_class: "compose",
                    ...tags
                });
            } finally{
                loader2.turnSettled(active.info);
            }
        } else {
            log5(`the loader holds ${describeHarness(active.info)}; nothing installed to validate`);
        }
        held = {
            active,
            transport
        };
        const when = previous === void 0 ? "start" : "poll";
        let from2 = "none";
        if (previous !== void 0) {
            from2 = previous.active.info.source === "installed" ? "module" : "static";
        }
        distribution(MODULE_SWAP_METRIC, Math.round(now2() - started), {
            when,
            result: composed,
            from: from2,
            ...tags
        });
        const live = loader2.serving().length;
        distribution(MODULE_HEAP_METRIC, Math.round((0, import_node_v82.getHeapStatistics)().used_heap_size / 1024 / 1024), {
            live: live >= 3 ? "3+" : String(live),
            when,
            module_channel: tags.module_channel ?? "unknown",
            serving: tags.serving ?? "static",
            module_mode: "validate_only"
        });
    };
    const tick = ()=>{
        timer2 = void 0;
        try {
            poll();
        } catch (error3) {
            log5(`poll failed: ${error3 instanceof Error ? error3.message : String(error3)}`);
        }
        if (!disposed) {
            timer2 = clock.schedule(interval, tick);
        }
    };
    loader2.announce();
    timer2 = clock.schedule(VALIDATE_ONLY_FIRST_POLL_DELAY_MS, tick);
    return {
        poll: ()=>{
            if (disposed) {
                return;
            }
            timer2?.dispose();
            tick();
        },
        dispose: ()=>{
            if (disposed) {
                return;
            }
            disposed = true;
            timer2?.dispose();
            timer2 = void 0;
            for (const stop of stopCounting){
                stop();
            }
            const previous = held;
            held = void 0;
            if (previous !== void 0) {
                letGo(previous);
            }
            loader2.retire("this host is going away");
        }
    };
}
export { CAPABILITIES, HARNESS_INTERFACE_REVISION, destroyWorkerPools };

export var entry_exports = {};
Object.defineProperty(entry_exports, "CAPABILITIES", {
    enumerable: true,
    get: ()=>CAPABILITIES
});
Object.defineProperty(entry_exports, "HARNESS_INTERFACE_REVISION", {
    enumerable: true,
    get: ()=>HARNESS_INTERFACE_REVISION
});
Object.defineProperty(entry_exports, "activate", {
    enumerable: true,
    get: ()=>activate
});
Object.defineProperty(entry_exports, "createManagedToolClient", {
    enumerable: true,
    get: ()=>createManagedToolClient
});
Object.defineProperty(entry_exports, "deactivate", {
    enumerable: true,
    get: ()=>destroyWorkerPools
});
Object.defineProperty(entry_exports, "generationContext", {
    enumerable: true,
    get: ()=>generationContext
});
Object.defineProperty(entry_exports, "hostLoggerBackend", {
    enumerable: true,
    get: ()=>hostLoggerBackend
});
Object.defineProperty(entry_exports, "hostMetricsBackend", {
    enumerable: true,
    get: ()=>hostMetricsBackend
});

import { init_dist } from "./context/dist/index.js";
function createKey(name17, defaultValue) {
    return {
        symbol: name17,
        defaultValue
    };
}
function shouldUseColors(useColors) {
    if (typeof useColors === "boolean") {
        return useColors;
    }
    if (typeof process === "undefined") {
        return false;
    }
    const env = process.env ?? {};
    if ("NO_COLOR" in env) {
        return false;
    }
    if (env.TERM === "dumb") {
        return false;
    }
    const forceColor = env.FORCE_COLOR;
    if (forceColor === "1" || forceColor === "true") {
        return true;
    }
    if (forceColor === "0") {
        return false;
    }
    return Boolean(process.stdout?.isTTY);
}
function createColorPalette(enabled) {
    const reset = "\x1B[0m";
    const withCodes = (codes)=>(value)=>enabled ? `\x1B[${codes.join(";")}m${value}${reset}` : value;
    const dim = withCodes([
        2
    ]);
    const gray = withCodes([
        90
    ]);
    const red = withCodes([
        31
    ]);
    const green = withCodes([
        32
    ]);
    const yellow = withCodes([
        33
    ]);
    const blue = withCodes([
        34
    ]);
    const magenta = withCodes([
        35
    ]);
    const cyan = withCodes([
        36
    ]);
    const bold = withCodes([
        1
    ]);
    const boldRed = withCodes([
        1,
        31
    ]);
    return {
        dim,
        gray,
        red,
        green,
        yellow,
        blue,
        magenta,
        cyan,
        bold,
        level: (level, value)=>{
            switch(level){
                case "debug":
                    return magenta(value);
                case "info":
                    return blue(value);
                case "warn":
                    return yellow(value);
                case "error":
                    return boldRed(value);
                default:
                    {
                        const _exhaustiveCheck = level;
                        return _exhaustiveCheck;
                    }
            }
        }
    };
}
function resolveRenderOptions(options2) {
    return {
        indent: " ".repeat(options2.indent ?? DEFAULT_INDENT),
        maxDepth: options2.maxDepth ?? DEFAULT_MAX_DEPTH,
        maxEntries: options2.maxEntries ?? DEFAULT_MAX_ENTRIES,
        maxArrayLength: options2.maxArrayLength ?? DEFAULT_MAX_ARRAY_LENGTH,
        maxStringLength: options2.maxStringLength ?? DEFAULT_MAX_STRING_LENGTH,
        includeTimestamp: options2.includeTimestamp ?? true,
        includeContextPath: options2.includeContextPath ?? true,
        inlineSerializer: options2.inlineSerializer
    };
}
function formatTimestamp(timestamp2) {
    return timestamp2.toISOString().slice(11, 23);
}
function isContext(value) {
    return typeof value === "object" && value !== null && "getPath" in value && typeof value.getPath === "function";
}
function isErrorLike(value) {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    return "message" in value || "stack" in value || "name" in value || "cause" in value;
}
function isInlineSummary(value) {
    return typeof value === "object" && value !== null && value.kind === "summary" && typeof value.summary === "string";
}
function truncateString(value, maxLength) {
    if (value.length <= maxLength) {
        return value;
    }
    return `${value.slice(0, maxLength)}...`;
}
function applyInlineSerializer(value, options2, path64, depth) {
    if (!options2.inlineSerializer) {
        return value;
    }
    try {
        const serialized = options2.inlineSerializer(value, {
            path: path64,
            depth
        });
        return serialized === void 0 ? value : serialized;
    } catch  {
        return value;
    }
}
function formatInlineValue(value, options2, colors, depth, seen, path64) {
    const serialized = applyInlineSerializer(value, options2, path64, depth);
    if (isInlineSummary(serialized)) {
        return colors.dim(`<${serialized.summary}>`);
    }
    value = serialized;
    if (value === null) {
        return colors.gray("null");
    }
    if (value === void 0) {
        return colors.gray("undefined");
    }
    if (typeof value === "string") {
        const truncated = truncateString(value, options2.maxStringLength);
        return colors.green(JSON.stringify(truncated));
    }
    if (typeof value === "number") {
        return colors.yellow(String(value));
    }
    if (typeof value === "boolean") {
        return colors.magenta(String(value));
    }
    if (typeof value === "bigint") {
        return colors.yellow(`${value}n`);
    }
    if (typeof value === "symbol") {
        return colors.cyan(value.toString());
    }
    if (typeof value === "function") {
        const name17 = value.name ? ` ${value.name}` : "";
        return colors.dim(`[Function${name17}]`);
    }
    if (value instanceof Date) {
        const iso = Number.isNaN(value.getTime()) ? "Invalid Date" : value.toISOString();
        return colors.green(iso);
    }
    if (value instanceof RegExp) {
        return colors.cyan(value.toString());
    }
    if (isErrorLike(value)) {
        return formatErrorSummary(value, options2, colors, depth, seen, path64);
    }
    if (Array.isArray(value)) {
        return formatInlineArray(value, options2, colors, depth, seen, path64);
    }
    if (typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
        return colors.dim(`ArrayBuffer(${value.byteLength})`);
    }
    if (typeof ArrayBuffer !== "undefined" && typeof ArrayBuffer.isView === "function" && ArrayBuffer.isView(value)) {
        const typedArray = value;
        const label = typedArray.constructor?.name ?? "TypedArray";
        return colors.dim(`${label}(${typedArray.byteLength})`);
    }
    if (value instanceof Map) {
        return formatInlineMap(value, options2, colors, depth, seen, path64);
    }
    if (value instanceof Set) {
        return formatInlineArray(Array.from(value.values()), options2, colors, depth, seen, path64);
    }
    return formatInlineObject(value, options2, colors, depth, seen, path64);
}
function formatErrorSummary(error3, options2, colors, depth, seen, path64) {
    const errorObj = error3;
    if (seen.has(errorObj)) {
        return colors.dim("[Circular]");
    }
    seen.add(errorObj);
    const name17 = typeof error3.name === "string" ? error3.name : "Error";
    const message = typeof error3.message === "string" ? error3.message : "";
    const summary = message ? `${name17}: ${message}` : name17;
    let result = colors.red(summary);
    if ("cause" in error3 && error3.cause !== void 0) {
        const causeValue = formatInlineValue(error3.cause, options2, colors, depth + 1, seen, path64.concat("cause"));
        result = `${result} ${colors.dim("cause=")}${causeValue}`;
    }
    seen.delete(errorObj);
    return result;
}
function formatInlineArray(value, options2, colors, depth, seen, path64) {
    if (depth >= options2.maxDepth) {
        return colors.dim(`[Array(${value.length})]`);
    }
    if (seen.has(value)) {
        return colors.dim("[Circular]");
    }
    seen.add(value);
    if (value.length === 0) {
        const empty = colors.dim("[]");
        seen.delete(value);
        return empty;
    }
    const limit = Math.min(value.length, options2.maxArrayLength);
    const items = value.slice(0, limit).map((entry, index)=>formatInlineValue(entry, options2, colors, depth + 1, seen, path64.concat(index)));
    if (value.length > limit) {
        items.push(colors.dim(`... ${value.length - limit} more`));
    }
    const separator = colors.dim(", ");
    const result = `${colors.dim("[")}${items.join(separator)}${colors.dim("]")}`;
    seen.delete(value);
    return result;
}
function formatInlineMap(value, options2, colors, depth, seen, path64) {
    if (depth >= options2.maxDepth) {
        return colors.dim(`Map(${value.size})`);
    }
    if (seen.has(value)) {
        return colors.dim("[Circular]");
    }
    seen.add(value);
    const entries = Array.from(value.entries());
    const limit = Math.min(entries.length, options2.maxEntries);
    const items = entries.slice(0, limit).map(([key, entryValue])=>{
        const keyValue = formatInlineValue(key, options2, colors, depth + 1, seen, path64.concat("<key>"));
        const renderedValue = formatInlineValue(entryValue, options2, colors, depth + 1, seen, path64.concat(String(key)));
        return `${keyValue} ${colors.dim("=>")} ${renderedValue}`;
    });
    if (entries.length > limit) {
        items.push(colors.dim(`... ${entries.length - limit} more`));
    }
    const separator = colors.dim(", ");
    const result = `${colors.dim("Map{")}${items.join(separator)}${colors.dim("}")}`;
    seen.delete(value);
    return result;
}
function formatInlineObject(value, options2, colors, depth, seen, path64) {
    if (depth >= options2.maxDepth) {
        const label = value?.constructor?.name ?? "Object";
        return colors.dim(`[${label}]`);
    }
    if (seen.has(value)) {
        return colors.dim("[Circular]");
    }
    seen.add(value);
    const entries = Object.entries(value);
    if (entries.length === 0) {
        const empty = colors.dim("{}");
        seen.delete(value);
        return empty;
    }
    const limit = Math.min(entries.length, options2.maxEntries);
    const items = entries.slice(0, limit).map(([key, entryValue])=>{
        const renderedValue = formatInlineValue(entryValue, options2, colors, depth + 1, seen, path64.concat(key));
        return `${colors.cyan(key)}: ${renderedValue}`;
    });
    if (entries.length > limit) {
        items.push(colors.dim(`... ${entries.length - limit} more`));
    }
    const separator = colors.dim(", ");
    const result = `${colors.dim("{")}${items.join(separator)}${colors.dim("}")}`;
    seen.delete(value);
    return result;
}
function createPrettyTerminalLoggerBackend(options2 = {}) {
    const renderOptions = resolveRenderOptions(options2);
    const colors = createColorPalette(shouldUseColors(options2.useColors));
    const outputConsole = options2.console ?? console;
    return {
        log: (_ctx, entry)=>{
            const parts = [];
            if (renderOptions.includeTimestamp) {
                parts.push(colors.dim(formatTimestamp(entry.timestamp)));
            }
            const levelLabel = entry.level.toUpperCase().padEnd(5);
            parts.push(colors.level(entry.level, levelLabel));
            const message = entry.level === "error" ? colors.bold(entry.message) : entry.message;
            parts.push(message);
            if (renderOptions.includeContextPath && isContext(entry.context)) {
                const path64 = entry.context.getPath();
                if (path64.length > 0) {
                    parts.push(colors.dim(`ctx=${path64.join("/")}`));
                }
            }
            const seen = new WeakSet();
            if (!isContext(entry.context) && entry.context && Object.keys(entry.context).length > 0) {
                const contextValue = formatInlineValue(entry.context, renderOptions, colors, 0, seen, [
                    "context"
                ]);
                parts.push(`${colors.dim("context=")}${contextValue}`);
            }
            if (entry.metadata && Object.keys(entry.metadata).length > 0) {
                const metaValue = formatInlineValue(entry.metadata, renderOptions, colors, 0, seen, [
                    "metadata"
                ]);
                parts.push(`${colors.dim("meta=")}${metaValue}`);
            }
            const outputLines = [
                parts.join(" ")
            ];
            if (entry.error !== void 0) {
                const errorValue = isErrorLike(entry.error) ? formatErrorSummary(entry.error, renderOptions, colors, 0, seen, [
                    "error"
                ]) : formatInlineValue(entry.error, renderOptions, colors, 0, seen, [
                    "error"
                ]);
                outputLines[0] = `${outputLines[0]} ${colors.dim("error=")}${errorValue}`;
                if (isErrorLike(entry.error) && typeof entry.error.stack === "string") {
                    const stackLines = entry.error.stack.split("\n").slice(1);
                    for (const line of stackLines){
                        const trimmed = line.trim();
                        if (trimmed) {
                            outputLines.push(`${renderOptions.indent}${colors.dim(trimmed)}`);
                        }
                    }
                }
            }
            const output = outputLines.join("\n");
            switch(entry.level){
                case "debug":
                case "info":
                    outputConsole.log(output);
                    break;
                case "warn":
                    outputConsole.warn(output);
                    break;
                case "error":
                    outputConsole.error(output);
                    break;
                default:
                    {
                        const _exhaustiveCheck = entry.level;
                        throw new Error(`Unhandled log level: ${_exhaustiveCheck}`);
                    }
            }
        }
    };
}
var DEFAULT_INDENT, DEFAULT_MAX_DEPTH, DEFAULT_MAX_ENTRIES, DEFAULT_MAX_ARRAY_LENGTH, DEFAULT_MAX_STRING_LENGTH, defaultLoggerBackendImpl, defaultLoggerBackend, loggerKey;
export { DEFAULT_INDENT, DEFAULT_MAX_ARRAY_LENGTH, DEFAULT_MAX_DEPTH, DEFAULT_MAX_ENTRIES, DEFAULT_MAX_STRING_LENGTH, applyInlineSerializer, createColorPalette, createKey, createPrettyTerminalLoggerBackend, defaultLoggerBackend, defaultLoggerBackendImpl, formatErrorSummary, formatInlineArray, formatInlineMap, formatInlineObject, formatInlineValue, formatTimestamp, isContext, isErrorLike, isInlineSummary, loggerKey, resolveRenderOptions, shouldUseColors, truncateString };
var __wakaru_init_logger_initialized = false;
export function init_logger() {
if (__wakaru_init_logger_initialized) return;
__wakaru_init_logger_initialized = true;
"use strict";
init_dist();
DEFAULT_INDENT = 2;
DEFAULT_MAX_DEPTH = 6;
DEFAULT_MAX_ENTRIES = 50;
DEFAULT_MAX_ARRAY_LENGTH = 40;
DEFAULT_MAX_STRING_LENGTH = 200;
defaultLoggerBackendImpl = createPrettyTerminalLoggerBackend();
defaultLoggerBackend = {
    log: (ctx, entry)=>defaultLoggerBackendImpl.log(ctx, entry)
};
loggerKey = createKey(Symbol("loggerBackend"), defaultLoggerBackend);

}
