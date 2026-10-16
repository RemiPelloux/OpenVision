import { LEGACY_LOCAL_WAKEUP_CONVERSATION_ID } from "../../agent-exec/dist/background-work-registry.js";
import { init_dist8 } from "../../agent-exec/dist/index.js";
import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { createSpan } from "../../agent-kv/dist/controlled.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { encodeBackgroundWorkMetadata, getShellHookApprovalRequirement, resolvePath } from "../../dist_exports.js";
import { analyzeShellCommand, backgroundShellSpawnBlockResult, buildFrontmatter, consumeShellEvents, convertProtoToInternalPolicy, createBackgroundShellFactory, escapeYamlString, forcedShellSandboxPolicy, formatMatchedTextDetail, getConfiguredOutputNotificationDebounceMs, getModelShellAdminCommandDenylistBlockReason, isForcedShellEgressEnabled, randomInitialShellId, resolveShellSandboxIgnoreMapping, runInBackground, truncateNotificationText, writeStdinBytes } from "../../dist_exports2.js";
import { init_common3 } from "./common.js";
import { init_forced_egress } from "./forced-egress.js";
import { init_sandbox_conversion } from "./sandbox-conversion.js";
import { init_admin_command_denylist2 } from "./services/admin-command-denylist.js";
import { init_ignore_service } from "./services/ignore-service.js";
import { init_edit_block_handler } from "./utils/edit-block-handler.js";
import { RE2JS, init_index_esm } from "../../node_modules/.pnpm/re2js@1.2.2/node_modules/re2js/build/index.esm.js";
import { BackgroundShellSpawnError, BackgroundShellSpawnResult, BackgroundShellSpawnSuccess, init_background_shell_exec_pb } from "../../proto/dist/generated/agent/v1/background_shell_exec_pb.js";
import { ShellCommandParsingResult, ShellRejected, ShellSandboxUnsupported, init_shell_exec_pb } from "../../proto/dist/generated/agent/v1/shell_exec_pb.js";
import { init_dist13 } from "../../shell-exec/dist/index.js";
import { SandboxUnsupportedError } from "../../shell-exec/dist/sandbox/sandbox.js";
import { init_shell_parser } from "../../shell-exec/dist/shell-parser.js";
var import_node_buffer2, fs10, import_promises11, path16, __addDisposableResource16, __disposeResources16, logger17, CoreBackgroundShell, MIN_SHELL_ID, MAX_SHELL_ID, OUTPUT_NOTIFICATION_LIMIT, OUTPUT_NOTIFICATION_MIN_DEBOUNCE_MS, OUTPUT_NOTIFICATION_DEBOUNCE_MS, OUTPUT_NOTIFICATION_CARRYOVER_CHARS, MAX_NOTIFICATION_TEXT_CHARS, MAX_OUTPUT_NOTIFICATION_MATCHED_TEXT_CHARS, MAX_OUTPUT_NOTIFICATION_PATTERN_CHARS, MAX_OUTPUT_NOTIFICATION_SCAN_CHARS, ShellOutputNotificationObserver, NotifyingBackgroundShellFactory, CoreShellFactory, RUNNING_TIME_UPDATE_INTERVAL_MS, RUNNING_MS_WIDTH, TERMINAL_TASK_STATUS_WIDTH, FileLoggingShellFactory, BackgroundShellManager, BackgroundShellEventHandlerFanout, EventStreamingShellFactory, ConversationOwnerOverrideRegistry, LocalBackgroundShellExecutor;
export { BackgroundShellEventHandlerFanout, BackgroundShellManager, ConversationOwnerOverrideRegistry, CoreBackgroundShell, CoreShellFactory, EventStreamingShellFactory, FileLoggingShellFactory, LocalBackgroundShellExecutor, MAX_NOTIFICATION_TEXT_CHARS, MAX_OUTPUT_NOTIFICATION_MATCHED_TEXT_CHARS, MAX_OUTPUT_NOTIFICATION_PATTERN_CHARS, MAX_OUTPUT_NOTIFICATION_SCAN_CHARS, MAX_SHELL_ID, MIN_SHELL_ID, NotifyingBackgroundShellFactory, OUTPUT_NOTIFICATION_CARRYOVER_CHARS, OUTPUT_NOTIFICATION_DEBOUNCE_MS, OUTPUT_NOTIFICATION_LIMIT, OUTPUT_NOTIFICATION_MIN_DEBOUNCE_MS, RUNNING_MS_WIDTH, RUNNING_TIME_UPDATE_INTERVAL_MS, ShellOutputNotificationObserver, TERMINAL_TASK_STATUS_WIDTH, __addDisposableResource16, __disposeResources16, fs10, import_node_buffer2, import_promises11, logger17, path16 };
var __wakaru_init_background_shell2_initialized = false;
export function init_background_shell2() {
if (__wakaru_init_background_shell2_initialized) return;
__wakaru_init_background_shell2_initialized = true;
"use strict";
import_node_buffer2 = require("node:buffer");
fs10 = __toESM(require("node:fs"), 1);
import_promises11 = require("node:fs/promises");
path16 = __toESM(require("node:path"), 1);
init_dist8();
init_dist();
init_background_shell_exec_pb();
init_shell_exec_pb();
init_dist13();
init_shell_parser();
init_index_esm();
init_common3();
init_forced_egress();
init_sandbox_conversion();
init_admin_command_denylist2();
init_ignore_service();
init_edit_block_handler();
__addDisposableResource16 = function(env, value, async) {
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
__disposeResources16 = (function(SuppressedError2) {
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
logger17 = createLogger("local-exec:background-shell");
CoreBackgroundShell = class {
    constructor(id, abortController){
        this.id = id;
        this.abortController = abortController;
        this.disposed = false;
        this.completed = false;
        this.completionListeners = [];
    }
    abort() {
        this.abortController.abort();
    }
    dispose() {
        if (this.disposed) {
            return;
        }
        this.disposed = true;
        if (!this.abortController.signal.aborted) {
            this.abortController.abort();
        }
    }
    get signal() {
        return this.abortController.signal;
    }
    isDisposed() {
        return this.disposed;
    }
    onComplete(listener) {
        if (this.completed && this.completion) {
            listener(this.completion);
            return;
        }
        this.completionListeners.push(listener);
    }
    markCompleted(completion) {
        if (this.completed) {
            return;
        }
        this.completed = true;
        this.completion = completion;
        const listeners = [
            ...this.completionListeners
        ];
        this.completionListeners = [];
        for (const listener of listeners){
            listener(completion);
        }
    }
};
MIN_SHELL_ID = 1e3;
MAX_SHELL_ID = 999999;
OUTPUT_NOTIFICATION_LIMIT = 100;
OUTPUT_NOTIFICATION_MIN_DEBOUNCE_MS = 5e3;
OUTPUT_NOTIFICATION_DEBOUNCE_MS = OUTPUT_NOTIFICATION_MIN_DEBOUNCE_MS;
OUTPUT_NOTIFICATION_CARRYOVER_CHARS = 1024;
MAX_NOTIFICATION_TEXT_CHARS = 500;
MAX_OUTPUT_NOTIFICATION_MATCHED_TEXT_CHARS = 5e3;
MAX_OUTPUT_NOTIFICATION_PATTERN_CHARS = 500;
MAX_OUTPUT_NOTIFICATION_SCAN_CHARS = 64 * 1024;
ShellOutputNotificationObserver = class {
    constructor(args){
        this.args = args;
        this.carryover = "";
        this.matchedOccurrences = 0;
        this.emittedNotifications = 0;
        this.finished = false;
        this.startedAtMs = Date.now();
        this.limit = args.config.notificationLimit ?? OUTPUT_NOTIFICATION_LIMIT;
        if (args.config.pattern.length > MAX_OUTPUT_NOTIFICATION_PATTERN_CHARS) {
            throw new Error(`Output notification pattern exceeds ${MAX_OUTPUT_NOTIFICATION_PATTERN_CHARS} characters`);
        }
        this.regex = RE2JS.compile(args.config.pattern, RE2JS.MULTILINE);
    }
    observe(data) {
        if (this.finished || this.matchedOccurrences >= this.limit || data.length === 0) {
            return;
        }
        if (data.length > MAX_OUTPUT_NOTIFICATION_SCAN_CHARS) {
            for(let offset = 0; offset < data.length && this.matchedOccurrences < this.limit; offset += MAX_OUTPUT_NOTIFICATION_SCAN_CHARS){
                this.observe(data.slice(offset, offset + MAX_OUTPUT_NOTIFICATION_SCAN_CHARS));
            }
            return;
        }
        const previousLength = this.carryover.length;
        const searchable = `${this.carryover}${data}`;
        const matcher = this.regex.matcher(searchable);
        while(this.matchedOccurrences < this.limit && matcher.find()){
            const matchedText = matcher.group() ?? "";
            const matchEnd = matcher.end();
            if (matchEnd > previousLength) {
                this.queueMatch(matchedText);
            }
        }
        this.carryover = searchable.slice(-OUTPUT_NOTIFICATION_CARRYOVER_CHARS);
    }
    finish() {
        if (this.finished) {
            return;
        }
        this.finished = true;
        this.flushPendingBatch("finish");
        this.clearFlushTimer();
        if (this.matchedOccurrences === 0) {
            this.recordWatchOutcome("silent", {
                silent_ms: Date.now() - this.startedAtMs
            });
        }
    }
    queueMatch(matchedText) {
        if (this.matchedOccurrences >= this.limit) {
            return;
        }
        this.matchedOccurrences += 1;
        const occurrence = this.matchedOccurrences;
        const matchedTextDetail = formatMatchedTextDetail(matchedText, occurrence === 1 ? "Matched text" : "Latest match");
        if (occurrence === 1) {
            this.emitNotification({
                startOccurrence: occurrence,
                endOccurrence: occurrence,
                count: 1,
                matchedTextDetail
            });
            this.recordWatchOutcome("matched", {
                first_match_ms: Date.now() - this.startedAtMs
            });
            if (occurrence === this.limit) {
                this.emitLimitReachedNotification();
            }
            return;
        }
        if (!this.pendingBatch) {
            this.pendingBatch = {
                startOccurrence: occurrence,
                endOccurrence: occurrence,
                count: 1,
                matchedTextDetail
            };
        } else {
            this.pendingBatch.endOccurrence = occurrence;
            this.pendingBatch.count += 1;
            this.pendingBatch.matchedTextDetail = matchedTextDetail;
        }
        if (occurrence === this.limit) {
            this.flushPendingBatch("limit");
            this.emitLimitReachedNotification();
            return;
        }
        this.scheduleFlush();
    }
    scheduleFlush() {
        if (this.flushTimer !== void 0) {
            return;
        }
        const debounceMs = this.getDebounceMs();
        this.flushTimer = setTimeout(()=>{
            this.flushPendingBatch("debounce");
        }, debounceMs);
    }
    getDebounceMs() {
        const debounceMs = this.args.debounceMs ?? getConfiguredOutputNotificationDebounceMs(this.args.config) ?? OUTPUT_NOTIFICATION_DEBOUNCE_MS;
        return Math.max(debounceMs, OUTPUT_NOTIFICATION_MIN_DEBOUNCE_MS);
    }
    clearFlushTimer() {
        if (this.flushTimer !== void 0) {
            clearTimeout(this.flushTimer);
            this.flushTimer = void 0;
        }
    }
    flushPendingBatch(_reason) {
        const batch = this.pendingBatch;
        if (!batch) {
            return;
        }
        this.pendingBatch = void 0;
        this.clearFlushTimer();
        this.emitNotification(batch);
    }
    emitNotification(batch) {
        this.emittedNotifications += 1;
        const title = this.args.config.reason.trim() || `Shell output contains /${this.args.config.pattern}/`;
        const pattern = this.args.config.pattern;
        const matchedTextSentence = batch.matchedTextDetail !== void 0 ? ` ${batch.matchedTextDetail}.` : "";
        const detail = batch.count === 1 ? `Shell output has pattern /${pattern}/. This is occurrence number ${batch.startOccurrence}.${matchedTextSentence} The title message is being displayed to the user.` : `Shell output matched /${pattern}/ ${batch.count} more times since the previous notification. The title message is being displayed to the user.${matchedTextSentence}`;
        const taskId = `${this.args.shellId}:task_progress:${this.emittedNotifications}`;
        this.args.registry.enqueue({
            conversationId: this.args.conversationId,
            id: taskId,
            source: "shell",
            payload: {
                taskId,
                ...this.args.toolCallId !== void 0 ? {
                    toolCallId: this.args.toolCallId
                } : {},
                kind: "shell",
                status: "success",
                title: truncateNotificationText(title),
                detail,
                outputPath: this.args.outputPath,
                reason: "task_progress"
            }
        });
    }
    emitLimitReachedNotification() {
        this.emittedNotifications += 1;
        const pattern = this.args.config.pattern;
        const taskId = `${this.args.shellId}:task_progress:${this.emittedNotifications}`;
        this.args.registry.enqueue({
            conversationId: this.args.conversationId,
            id: taskId,
            source: "shell",
            payload: {
                taskId,
                ...this.args.toolCallId !== void 0 ? {
                    toolCallId: this.args.toolCallId
                } : {},
                kind: "shell",
                status: "success",
                title: `Notification limit reached (${this.limit})`,
                detail: `Shell output matched /${pattern}/ ${this.limit} times and has reached the notification limit. No further notifications will be sent for this pattern. To continue monitoring, read the output file directly at the output path.`,
                outputPath: this.args.outputPath,
                reason: "task_progress"
            }
        });
        this.recordWatchOutcome("limit_reached");
    }
    recordWatchOutcome(outcome, fields) {
        if (this.args.ctx === void 0) {
            return;
        }
        logger17.info(this.args.ctx, "agent.shell_output_notification_match", {
            event: "agent.shell_output_notification_match",
            outcome,
            shell_id: this.args.shellId,
            conversation_id: this.args.conversationId,
            tool_call_id: this.args.toolCallId,
            limit: this.limit,
            ...fields
        });
    }
};
NotifyingBackgroundShellFactory = class {
    constructor(innerFactory, projectDir, backgroundWorkRegistry){
        this.innerFactory = innerFactory;
        this.projectDir = projectDir;
        this.backgroundWorkRegistry = backgroundWorkRegistry;
    }
    async spawn(executionContext, coreExecutor) {
        const observer = this.createObserver(executionContext.ctx, executionContext.shellId, executionContext.conversationId, executionContext.toolCallId, executionContext.outputNotification);
        if (!observer) {
            return this.innerFactory.spawn(executionContext, coreExecutor);
        }
        try {
            return await this.innerFactory.spawn(executionContext, this.createObservingExecutor(coreExecutor, observer));
        } catch (error3) {
            observer.finish();
            throw error3;
        }
    }
    async adopt(state) {
        const observer = this.createObserver(state.ctx, state.shellId, void 0, state.toolCallId, state.outputNotification);
        if (!observer) {
            return this.innerFactory.adopt(state);
        }
        if (state.initialOutput.length > 0) {
            observer.observe(state.initialOutput);
        }
        try {
            return await this.innerFactory.adopt({
                ...state,
                eventIterator: this.createObservingIterator(state.eventIterator, observer)
            });
        } catch (error3) {
            observer.finish();
            throw error3;
        }
    }
    createObserver(ctx, shellId, conversationId, toolCallId, config2) {
        if (!this.backgroundWorkRegistry || !config2) {
            return void 0;
        }
        if (config2.pattern.trim().length === 0) {
            return void 0;
        }
        const outputPath = path16.join(this.projectDir, "terminals", `${shellId}.txt`);
        try {
            return new ShellOutputNotificationObserver({
                shellId,
                outputPath,
                config: config2,
                conversationId: conversationId ?? LEGACY_LOCAL_WAKEUP_CONVERSATION_ID,
                toolCallId,
                registry: this.backgroundWorkRegistry,
                ctx
            });
        } catch (error3) {
            if (ctx !== void 0) {
                logger17.warn(ctx, "Invalid shell output notification pattern", {
                    shellId,
                    error: error3 instanceof Error ? error3.message : String(error3)
                });
            }
            return void 0;
        }
    }
    createObservingExecutor(coreExecutor, observer) {
        const originalExecute = coreExecutor.execute.bind(coreExecutor);
        return {
            ...coreExecutor,
            execute: async function*(ctx, args) {
                try {
                    for await (const event of originalExecute(ctx, args)){
                        if (event.type === "stdout" || event.type === "stderr") {
                            observer.observe(event.data);
                        } else if (event.type === "exit") {
                            observer.finish();
                        }
                        yield event;
                    }
                } finally{
                    observer.finish();
                }
            }
        };
    }
    createObservingIterator(iterator, observer) {
        const returnIterator = iterator.return?.bind(iterator);
        return {
            next: async ()=>{
                try {
                    const result = await iterator.next();
                    if (!result.done) {
                        const event = result.value;
                        if (event.type === "stdout" || event.type === "stderr") {
                            observer.observe(event.data);
                        } else if (event.type === "exit") {
                            observer.finish();
                        }
                    } else {
                        observer.finish();
                    }
                    return result;
                } catch (error3) {
                    observer.finish();
                    throw error3;
                }
            },
            return: async (value)=>{
                observer.finish();
                return returnIterator ? returnIterator(value) : {
                    done: true,
                    value: void 0
                };
            }
        };
    }
};
CoreShellFactory = class {
    async spawn(executionContext, coreExecutor) {
        const abortController = new AbortController();
        const shell = new CoreBackgroundShell(executionContext.shellId, abortController);
        const eventIterator = coreExecutor.execute(executionContext.ctx, {
            command: executionContext.command,
            workingDirectory: executionContext.workingDirectory,
            signal: abortController.signal,
            toolCallId: executionContext.toolCallId,
            conversationId: executionContext.conversationId,
            requestId: executionContext.requestId,
            secretScopeId: executionContext.secretScopeId,
            sandboxPolicy: executionContext.sandboxPolicy,
            pipeStdin: executionContext.enableWriteShellStdinTool,
            showElapsedTime: true
        })[Symbol.asyncIterator]();
        try {
            for(let result = await eventIterator.next(); !result.done; result = await eventIterator.next()){
                if (result.value.type === "stdin_ready") {
                    shell.stdin = result.value.stdin;
                    shell.pid = result.value.pid;
                    break;
                }
            }
        } catch (error3) {
            if (error3 instanceof SandboxUnsupportedError) {
                throw error3;
            }
        }
        runInBackground(()=>consumeShellEvents(shell, eventIterator));
        return shell;
    }
    async adopt(state) {
        const shell = new CoreBackgroundShell(state.shellId, state.abortController);
        shell.stdin = state.stdin;
        shell.pid = state.pid;
        runInBackground(()=>consumeShellEvents(shell, state.eventIterator));
        return shell;
    }
};
RUNNING_TIME_UPDATE_INTERVAL_MS = 5e3;
RUNNING_MS_WIDTH = 9;
TERMINAL_TASK_STATUS_WIDTH = 9;
FileLoggingShellFactory = class {
    constructor(innerFactory, projectDir){
        this.innerFactory = innerFactory;
        this.projectDir = projectDir;
    }
    async spawn(executionContext, coreExecutor) {
        const terminalsDir = path16.join(this.projectDir, "terminals");
        await (0, import_promises11.mkdir)(terminalsDir, {
            recursive: true
        });
        const loggingExecutor = this.createLoggingExecutor(coreExecutor, executionContext, terminalsDir);
        return this.innerFactory.spawn(executionContext, loggingExecutor);
    }
    createLoggingExecutor(coreExecutor, executionContext, terminalsDir) {
        const originalExecute = coreExecutor.execute.bind(coreExecutor);
        return {
            ...coreExecutor,
            execute: async function*(ctx, args) {
                let frontmatterHandle;
                let appendHandle;
                let stdinPatched = false;
                let headerWritten = false;
                let updateInterval;
                const startTime = Date.now();
                const startedAt = new Date(startTime).toISOString();
                let currentPid;
                let taskStatus = "running";
                let terminalFinalized = false;
                let pendingFrontmatterUpdate = Promise.resolve();
                const safeWrite = async (data)=>{
                    if (!appendHandle) {
                        return;
                    }
                    try {
                        await appendHandle.write(data);
                    } catch (_error) {}
                };
                const shellId = executionContext.shellId;
                const terminalPath = path16.join(terminalsDir, `${shellId}.txt`);
                const updateFrontmatter = async ()=>{
                    if (!frontmatterHandle) {
                        return;
                    }
                    const runningForMs = Date.now() - startTime;
                    const frontmatter = buildFrontmatter({
                        pid: currentPid,
                        cwd: executionContext.workingDirectory,
                        command: executionContext.command,
                        title: executionContext.description,
                        status: taskStatus,
                        startedAt,
                        runningForMs
                    });
                    try {
                        await frontmatterHandle.write(frontmatter, 0, "utf8");
                    } catch (_error) {}
                };
                const queueFrontmatterUpdate = ()=>{
                    pendingFrontmatterUpdate = pendingFrontmatterUpdate.then(updateFrontmatter).catch(()=>{});
                    return pendingFrontmatterUpdate;
                };
                const clearUpdateInterval = ()=>{
                    if (updateInterval !== void 0) {
                        clearInterval(updateInterval);
                        updateInterval = void 0;
                    }
                };
                const writeHeader = async (pid)=>{
                    if (headerWritten) {
                        return;
                    }
                    headerWritten = true;
                    currentPid = pid;
                    const runningForMs = Date.now() - startTime;
                    const frontmatter = buildFrontmatter({
                        pid,
                        cwd: executionContext.workingDirectory,
                        command: executionContext.command,
                        title: executionContext.description,
                        status: taskStatus,
                        startedAt,
                        runningForMs
                    });
                    await (0, import_promises11.writeFile)(terminalPath, frontmatter, "utf8");
                    updateInterval = setInterval(()=>{
                        void queueFrontmatterUpdate();
                    }, RUNNING_TIME_UPDATE_INTERVAL_MS);
                };
                const ensureHandlesOpen = async ()=>{
                    if (!frontmatterHandle) {
                        frontmatterHandle = await fs10.promises.open(terminalPath, "r+");
                    }
                    if (!appendHandle) {
                        appendHandle = await fs10.promises.open(terminalPath, "a");
                    }
                };
                const finalizeTerminal = async (status, firstFooterLine)=>{
                    if (terminalFinalized) {
                        return;
                    }
                    terminalFinalized = true;
                    clearUpdateInterval();
                    if (!headerWritten) {
                        await writeHeader();
                    }
                    await ensureHandlesOpen();
                    if (firstFooterLine !== void 0) {
                        const elapsedMs2 = Date.now() - startTime;
                        const footer = `
---
${firstFooterLine}
` + (args.showElapsedTime ? `elapsed_ms: ${elapsedMs2}
` : "") + `ended_at: ${(new Date()).toISOString()}
---
`;
                        await safeWrite(footer);
                    }
                    taskStatus = status;
                    await queueFrontmatterUpdate();
                };
                try {
                    for await (const event of originalExecute(ctx, args)){
                        if (event.type === "stdout") {
                            if (!headerWritten) {
                                await writeHeader();
                                await ensureHandlesOpen();
                            }
                            await safeWrite(event.data);
                        } else if (event.type === "stderr") {
                            if (!headerWritten) {
                                await writeHeader();
                                await ensureHandlesOpen();
                            }
                            await safeWrite(event.data);
                        } else if (event.type === "stdin_ready" && !stdinPatched) {
                            stdinPatched = true;
                            if (!headerWritten) {
                                await writeHeader(event.pid);
                                await ensureHandlesOpen();
                            }
                            const stdin = event.stdin;
                            if (stdin && executionContext.suppressStdinLogging !== true) {
                                const logInputChunk = (chunk)=>{
                                    if (chunk === void 0 || chunk === null) {
                                        return;
                                    }
                                    const chunkStr = typeof chunk === "string" ? chunk : import_node_buffer2.Buffer.isBuffer(chunk) ? chunk.toString() : String(chunk);
                                    if (!chunkStr) {
                                        return;
                                    }
                                    const normalizedChunk = chunkStr.endsWith("\n") ? chunkStr : `${chunkStr}
`;
                                    void safeWrite(`[stdin] ${normalizedChunk}`);
                                };
                                const originalWrite = stdin.write.bind(stdin);
                                stdin.write = ((chunk, encoding, callback)=>{
                                    logInputChunk(chunk);
                                    return originalWrite(chunk, encoding, callback);
                                });
                                if (typeof stdin.end === "function") {
                                    const originalEnd = stdin.end.bind(stdin);
                                    stdin.end = ((chunk, encoding, callback)=>{
                                        if (chunk !== void 0) {
                                            logInputChunk(chunk);
                                        }
                                        return originalEnd(chunk, encoding, callback);
                                    });
                                }
                            }
                        } else if (event.type === "exit") {
                            await finalizeTerminal(event.aborted ? "aborted" : event.code === 0 ? "succeeded" : "failed", `exit_code: ${event.code ?? "unknown"}`);
                        }
                        yield event;
                    }
                    if (!terminalFinalized) {
                        const isAborted3 = args.signal?.aborted ?? false;
                        await finalizeTerminal(isAborted3 ? "aborted" : "failed");
                    }
                } catch (error3) {
                    const isAborted3 = args.signal?.aborted ?? false;
                    const escapedError = escapeYamlString(error3 instanceof Error ? error3.message : "Unknown error");
                    await finalizeTerminal(isAborted3 ? "aborted" : "failed", isAborted3 ? void 0 : `error: ${escapedError}`);
                    if (!isAborted3) {
                        throw error3;
                    }
                } finally{
                    clearUpdateInterval();
                    await pendingFrontmatterUpdate;
                    if (frontmatterHandle) {
                        try {
                            await frontmatterHandle.close();
                        } catch  {}
                    }
                    if (appendHandle) {
                        try {
                            await appendHandle.close();
                        } catch  {}
                    }
                }
            }
        };
    }
    async adopt(state) {
        const terminalsDir = path16.join(this.projectDir, "terminals");
        await (0, import_promises11.mkdir)(terminalsDir, {
            recursive: true
        });
        const terminalPath = path16.join(terminalsDir, `${state.shellId}.txt`);
        const startTime = state.startTime;
        const startedAt = new Date(startTime).toISOString();
        let taskStatus = "running";
        const runningForMs = Date.now() - startTime;
        const frontmatter = buildFrontmatter({
            pid: state.pid,
            cwd: state.workingDirectory,
            command: state.command,
            title: state.description,
            status: taskStatus,
            startedAt,
            runningForMs
        });
        const initialContent = frontmatter + (state.initialOutput ?? "");
        await (0, import_promises11.writeFile)(terminalPath, initialContent, "utf8");
        const frontmatterHandle = await fs10.promises.open(terminalPath, "r+");
        let appendHandle;
        try {
            appendHandle = await fs10.promises.open(terminalPath, "a");
        } catch (error3) {
            await frontmatterHandle.close();
            throw error3;
        }
        let cleanedUp = false;
        let terminalFinalized = false;
        let pendingFrontmatterUpdate = Promise.resolve();
        const updateFrontmatter = async ()=>{
            const currentRunningForMs = Date.now() - startTime;
            const updatedFrontmatter = buildFrontmatter({
                pid: state.pid,
                cwd: state.workingDirectory,
                command: state.command,
                title: state.description,
                status: taskStatus,
                startedAt,
                runningForMs: currentRunningForMs
            });
            try {
                await frontmatterHandle.write(updatedFrontmatter, 0, "utf8");
            } catch  {}
        };
        const queueFrontmatterUpdate = ()=>{
            pendingFrontmatterUpdate = pendingFrontmatterUpdate.then(updateFrontmatter).catch(()=>{});
            return pendingFrontmatterUpdate;
        };
        let updateInterval = setInterval(()=>{
            void queueFrontmatterUpdate();
        }, RUNNING_TIME_UPDATE_INTERVAL_MS);
        const clearUpdateInterval = ()=>{
            if (updateInterval !== void 0) {
                clearInterval(updateInterval);
                updateInterval = void 0;
            }
        };
        const cleanup = async ()=>{
            if (cleanedUp) {
                return;
            }
            cleanedUp = true;
            clearUpdateInterval();
            await pendingFrontmatterUpdate;
            try {
                await frontmatterHandle.close();
            } catch  {}
            try {
                await appendHandle.close();
            } catch  {}
        };
        const safeWrite = async (data)=>{
            try {
                await appendHandle.write(data);
            } catch (_error) {}
        };
        const finalizeTerminal = async (status, firstFooterLine)=>{
            if (terminalFinalized) {
                return;
            }
            terminalFinalized = true;
            clearUpdateInterval();
            if (firstFooterLine !== void 0) {
                const elapsedMs2 = Date.now() - startTime;
                const footer = `
---
${firstFooterLine}
` + (state.showElapsedTime ? `elapsed_ms: ${elapsedMs2}
` : "") + `ended_at: ${(new Date()).toISOString()}
---
`;
                await safeWrite(footer);
            }
            taskStatus = status;
            await queueFrontmatterUpdate();
        };
        const loggingIterator = {
            next: async ()=>{
                try {
                    const result = await state.eventIterator.next();
                    if (!result.done) {
                        const event = result.value;
                        if (event.type === "stdout") {
                            await safeWrite(event.data);
                        } else if (event.type === "stderr") {
                            await safeWrite(event.data);
                        } else if (event.type === "exit") {
                            await finalizeTerminal(event.aborted ? "aborted" : event.code === 0 ? "succeeded" : "failed", `exit_code: ${event.code ?? "unknown"}`);
                            await cleanup();
                        }
                    } else if (!terminalFinalized) {
                        const isAborted3 = state.abortController.signal.aborted;
                        await finalizeTerminal(isAborted3 ? "aborted" : "failed");
                    }
                    if (result.done) {
                        await cleanup();
                    }
                    return result;
                } catch (error3) {
                    const isAborted3 = state.abortController.signal.aborted;
                    await finalizeTerminal(isAborted3 ? "aborted" : "failed");
                    await cleanup();
                    throw error3;
                }
            },
            return: async ()=>{
                if (!terminalFinalized) {
                    const isAborted3 = state.abortController.signal.aborted;
                    await finalizeTerminal(isAborted3 ? "aborted" : "failed");
                }
                await cleanup();
                if (state.eventIterator.return) {
                    return state.eventIterator.return();
                }
                return {
                    done: true,
                    value: void 0
                };
            }
        };
        return this.innerFactory.adopt({
            ...state,
            eventIterator: loggingIterator
        });
    }
};
BackgroundShellManager = class {
    constructor(factory, backgroundWorkRegistry){
        this.factory = factory;
        this.backgroundWorkRegistry = backgroundWorkRegistry;
        this.runningShells = new Map();
        this.nextShellId = randomInitialShellId();
    }
    registerShellWork(shell, metadata) {
        const shellId = String(shell.id);
        this.backgroundWorkRegistry?.upsertWork({
            id: shellId,
            kind: "shell",
            state: "running",
            metadata: encodeBackgroundWorkMetadata(metadata),
            abort: ()=>{
                this.abort(shell.id);
            }
        });
    }
    clearShellWork(shellId) {
        this.backgroundWorkRegistry?.clearWork(String(shellId));
    }
    cleanupShell(shellId) {
        if (!this.runningShells.has(shellId)) {
            return;
        }
        this.runningShells.delete(shellId);
        this.clearShellWork(shellId);
    }
    enqueueShellCompletion(shellId, toolCallId, conversationId, commandTitle, completion) {
        if (!this.backgroundWorkRegistry) {
            return;
        }
        const status = completion.aborted ? "aborted" : completion.code === 0 ? "success" : "error";
        const detail = !completion.aborted && completion.code !== null && completion.code !== 0 ? `exit_code=${completion.code}` : void 0;
        const taskId = String(shellId);
        this.backgroundWorkRegistry.enqueue({
            conversationId: conversationId ?? LEGACY_LOCAL_WAKEUP_CONVERSATION_ID,
            id: taskId,
            source: "shell",
            payload: {
                taskId,
                ...toolCallId !== void 0 ? {
                    toolCallId
                } : {},
                kind: "shell",
                status,
                title: commandTitle,
                ...detail ? {
                    detail
                } : {},
                ...completion.outputPath ? {
                    outputPath: completion.outputPath
                } : {},
                reason: "task_finished"
            }
        });
    }
    async spawn(executionContext, coreExecutor) {
        const shell = await this.factory.spawn(executionContext, coreExecutor);
        this.runningShells.set(shell.id, shell);
        this.registerShellWork(shell, {
            title: executionContext.description || executionContext.command,
            cwd: executionContext.workingDirectory,
            startTimeMs: Date.now()
        });
        shell.signal.addEventListener("abort", ()=>{
            this.cleanupShell(shell.id);
        });
        shell.onComplete?.((completion)=>{
            this.enqueueShellCompletion(shell.id, executionContext.toolCallId, executionContext.conversationId, executionContext.description || executionContext.command, completion);
            this.cleanupShell(shell.id);
        });
        return {
            shellId: shell.id,
            pid: shell.pid
        };
    }
    async adopt(state) {
        const shell = await this.factory.adopt(state);
        this.runningShells.set(shell.id, shell);
        this.registerShellWork(shell, {
            title: state.description || state.command,
            cwd: state.workingDirectory,
            startTimeMs: state.startTime
        });
        shell.signal.addEventListener("abort", ()=>{
            this.cleanupShell(shell.id);
        });
        shell.onComplete?.((completion)=>{
            this.enqueueShellCompletion(shell.id, state.toolCallId, void 0, state.description || state.command, completion);
            this.cleanupShell(shell.id);
        });
        return {
            shellId: shell.id,
            pid: state.pid
        };
    }
    generateShellId() {
        for(let attempts = 0; attempts <= MAX_SHELL_ID - MIN_SHELL_ID; attempts++){
            if (this.nextShellId > MAX_SHELL_ID) {
                this.nextShellId = MIN_SHELL_ID;
            }
            const candidate = this.nextShellId;
            this.nextShellId += 1;
            if (!this.runningShells.has(candidate)) {
                return candidate;
            }
        }
        throw new Error("No available background shell id in range");
    }
    abort(shellId) {
        const shell = this.runningShells.get(shellId);
        if (shell) {
            shell.abort();
            this.runningShells.delete(shellId);
            this.clearShellWork(shellId);
            return true;
        }
        return false;
    }
    isRunning(shellId) {
        return this.runningShells.has(shellId);
    }
    dispose() {
        for (const [shellId, shell] of this.runningShells){
            shell.dispose();
            this.clearShellWork(shellId);
        }
        this.runningShells.clear();
    }
    async writeStdin(shellId, data) {
        const shell = this.runningShells.get(shellId);
        if (!shell) {
            throw new Error("Shell not found");
        }
        if (!shell.stdin) {
            throw new Error("Shell stdin not available");
        }
        const EOT = "";
        const ESCAPED_EOT = "\\u0004";
        const eotIndex = data.indexOf(EOT);
        const effectiveEofIndex = eotIndex !== -1 ? eotIndex : data.indexOf(ESCAPED_EOT);
        if (effectiveEofIndex !== -1) {
            const beforeEof = data.substring(0, effectiveEofIndex);
            if (beforeEof.length > 0) {
                await new Promise((resolve36, reject2)=>{
                    shell.stdin.write(beforeEof, (error3)=>{
                        if (error3) {
                            reject2(error3);
                        } else {
                            resolve36(void 0);
                        }
                    });
                });
            }
            shell.stdin.end();
        } else {
            await new Promise((resolve36, reject2)=>{
                shell.stdin.write(data, (error3)=>{
                    if (error3) {
                        reject2(error3);
                    } else {
                        resolve36(void 0);
                    }
                });
            });
        }
    }
};
BackgroundShellEventHandlerFanout = class {
    constructor(){
        this.handlers = [];
        this.buffer = [];
        this.open = false;
        this.chain = Promise.resolve();
    }
    register(handler) {
        this.handlers.push(handler);
    }
    emit(event) {
        return this.enqueue(async ()=>{
            if (!this.open) {
                this.buffer.push(event);
                return;
            }
            await this.dispatch(event);
        });
    }
    openAndFlush(options2) {
        return this.enqueue(async ()=>{
            this.open = true;
            const pending = [
                ...options2?.leading ?? [],
                ...this.buffer.splice(0)
            ];
            for (const event of pending){
                await this.dispatch(event);
            }
        });
    }
    enqueue(work) {
        this.chain = this.chain.then(work, work);
        return this.chain;
    }
    async dispatch(event) {
        for (const handler of this.handlers){
            switch(event.type){
                case "start":
                    await handler.onStart?.();
                    break;
                case "stdout":
                    await handler.onStdout(event.data);
                    break;
                case "stderr":
                    await handler.onStderr(event.data);
                    break;
                case "exit":
                    await handler.onExit(event.code);
                    break;
                default:
                    {
                        const _exhaustive = event;
                        void _exhaustive;
                    }
            }
        }
    }
};
EventStreamingShellFactory = class {
    constructor(innerFactory, creationCallback, conversationIdExtractor){
        this.innerFactory = innerFactory;
        this.creationCallback = creationCallback;
        this.conversationIdExtractor = conversationIdExtractor;
    }
    async spawn(executionContext, coreExecutor) {
        const fanout = new BackgroundShellEventHandlerFanout();
        const streamingExecutor = this.createStreamingExecutor(coreExecutor, fanout);
        const shell = await this.innerFactory.spawn(executionContext, streamingExecutor);
        const conversationId = this.conversationIdExtractor?.(executionContext.ctx);
        try {
            await this.creationCallback.onShellCreated({
                shellId: executionContext.shellId,
                command: executionContext.command,
                cwd: executionContext.workingDirectory,
                registerEventHandler: (handler)=>{
                    fanout.register(handler);
                },
                conversationId,
                abortShell: ()=>shell.abort(),
                description: executionContext.description,
                toolCallId: executionContext.toolCallId,
                writeStdin: (data)=>writeStdinBytes(shell.stdin, data)
            });
            await fanout.openAndFlush();
        } catch (error3) {
            try {
                shell.dispose();
            } catch (disposeError) {
                logger17.warn(executionContext.ctx, "Failed to dispose background shell after onShellCreated failed", {
                    shellId: executionContext.shellId,
                    disposeError
                });
            }
            throw error3;
        }
        return shell;
    }
    createStreamingExecutor(coreExecutor, fanout) {
        const originalExecute = coreExecutor.execute.bind(coreExecutor);
        return {
            ...coreExecutor,
            execute: async function*(ctx, args) {
                await fanout.emit({
                    type: "start"
                });
                try {
                    for await (const event of originalExecute(ctx, args)){
                        yield event;
                        if (event.type === "stdout") {
                            await fanout.emit({
                                type: "stdout",
                                data: event.data
                            });
                        } else if (event.type === "stderr") {
                            await fanout.emit({
                                type: "stderr",
                                data: event.data
                            });
                        } else if (event.type === "exit") {
                            await fanout.emit({
                                type: "exit",
                                code: event.code
                            });
                        }
                    }
                } catch (error3) {
                    const isAborted3 = args.signal?.aborted ?? false;
                    if (!isAborted3) {
                        await fanout.emit({
                            type: "exit",
                            code: -1
                        });
                        throw error3;
                    }
                }
            }
        };
    }
    async adopt(state) {
        const fanout = new BackgroundShellEventHandlerFanout();
        const streamingIterator = {
            next: async ()=>{
                const result = await state.eventIterator.next();
                if (!result.done) {
                    const event = result.value;
                    if (event.type === "stdout") {
                        await fanout.emit({
                            type: "stdout",
                            data: event.data
                        });
                    } else if (event.type === "stderr") {
                        await fanout.emit({
                            type: "stderr",
                            data: event.data
                        });
                    } else if (event.type === "exit") {
                        await fanout.emit({
                            type: "exit",
                            code: event.code
                        });
                    }
                }
                return result;
            }
        };
        const shell = await this.innerFactory.adopt({
            ...state,
            eventIterator: streamingIterator
        });
        const conversationId = state.ctx ? this.conversationIdExtractor?.(state.ctx) : void 0;
        try {
            await this.creationCallback.onShellCreated({
                shellId: state.shellId,
                command: state.command,
                cwd: state.workingDirectory,
                registerEventHandler: (handler)=>{
                    fanout.register(handler);
                },
                conversationId,
                abortShell: ()=>shell.abort(),
                description: state.description,
                toolCallId: state.toolCallId,
                writeStdin: (data)=>writeStdinBytes(shell.stdin, data)
            });
            await fanout.openAndFlush({
                leading: state.initialOutput !== void 0 && state.initialOutput.length > 0 ? [
                    {
                        type: "stdout",
                        data: state.initialOutput
                    }
                ] : []
            });
        } catch (error3) {
            try {
                shell.dispose();
            } catch (disposeError) {
                if (state.ctx) {
                    logger17.warn(state.ctx, "Failed to dispose background shell after onShellCreated failed", {
                        shellId: state.shellId,
                        disposeError
                    });
                }
            }
            throw error3;
        }
        return shell;
    }
};
ConversationOwnerOverrideRegistry = class {
    constructor(inner, ownerConversationId){
        this.inner = inner;
        this.ownerConversationId = ownerConversationId;
    }
    enqueue(wakeup) {
        this.inner.enqueue({
            ...wakeup,
            conversationId: this.ownerConversationId
        });
    }
    enqueueCompletion(item) {
        this.enqueue({
            conversationId: this.ownerConversationId,
            id: item.taskId,
            source: item.kind,
            payload: item
        });
    }
    pull(conversationId) {
        return this.inner.pull(conversationId);
    }
    ack(ids) {
        return this.inner.ack(ids);
    }
    nack(ids, opts) {
        this.inner.nack(ids, opts);
    }
    suppress(conversationId, id) {
        this.inner.suppress(conversationId, id);
    }
    upsertWork(record3) {
        this.inner.upsertWork(record3);
    }
    clearWork(id) {
        return this.inner.clearWork(id);
    }
    abortWork(id) {
        return this.inner.abortWork(id);
    }
    hasRunningWork(filter3) {
        return this.inner.hasRunningWork(filter3);
    }
    abortAllWork(filter3) {
        return this.inner.abortAllWork(filter3);
    }
    listWork(filter3) {
        return this.inner.listWork(filter3);
    }
    drainCompletions() {
        return this.inner.drainCompletions();
    }
    hasPendingCompletions(conversationId) {
        return this.inner.hasPendingCompletions(conversationId);
    }
    markAwaitedCompletion(taskId) {
        this.inner.suppress(this.ownerConversationId, taskId);
    }
};
LocalBackgroundShellExecutor = class {
    constructor(permissionsService, coreExecutor, ignoreService, projectDir, factory, backgroundWorkRegistry, wakeupOwnerConversationId){
        this.permissionsService = permissionsService;
        this.coreExecutor = coreExecutor;
        this.ignoreService = ignoreService;
        const ownedRegistry = backgroundWorkRegistry && wakeupOwnerConversationId !== void 0 ? new ConversationOwnerOverrideRegistry(backgroundWorkRegistry, wakeupOwnerConversationId) : backgroundWorkRegistry;
        const baseShellFactory = factory ?? createBackgroundShellFactory(projectDir);
        const shellFactory = new NotifyingBackgroundShellFactory(baseShellFactory, projectDir, ownedRegistry);
        this.backgroundShellManager = new BackgroundShellManager(shellFactory, ownedRegistry);
    }
    getManager() {
        return this.backgroundShellManager;
    }
    dispose() {
        this.backgroundShellManager.dispose();
    }
    async execute(ctx, args) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource16(env_1, createSpan(ctx.withName("LocalBackgroundShellExecutor.execute")), false);
            const command = args.command;
            const policy = args.sandboxPolicy ? convertProtoToInternalPolicy(args.sandboxPolicy) : void 0;
            const workingDirectory = args.workingDirectory || await this.coreExecutor.getCwd(args.conversationId);
            const resolvedWorkingDir = resolvePath(workingDirectory);
            const parsingResult = new ShellCommandParsingResult(analyzeShellCommand(command).structured);
            const modelShellBlockReason = getModelShellAdminCommandDenylistBlockReason({
                command,
                parsingResult,
                blockedCommands: args.adminCommandDenylist
            });
            if (modelShellBlockReason !== void 0) {
                return new BackgroundShellSpawnResult({
                    result: {
                        case: "rejected",
                        value: new ShellRejected({
                            command,
                            workingDirectory: resolvedWorkingDir,
                            reason: modelShellBlockReason
                        })
                    }
                });
            }
            let effectivePolicy = policy;
            logger17.info(ctx, "Background shell: approval gate reached", {
                toolCallId: args.toolCallId,
                skipApproval: args.skipApproval,
                hasSmartModeApproval: args.smartModeApproval !== void 0,
                hasSmartModeApprovalReason: args.smartModeApproval?.reason !== void 0,
                hasSmartModeApprovalRequestId: args.smartModeApproval?.requestId !== void 0,
                requestedPolicyType: policy?.type ?? "undefined",
                parserCommandCount: parsingResult.executableCommands.length,
                classifierCommandCount: args.classifierResult?.commands.length ?? 0,
                commandLength: command.length
            });
            if (args.skipApproval) {
                const invariantBlock = await this.permissionsService.shouldEnforceShellInvariantBlocks(ctx, {
                    workingDirectory: resolvedWorkingDir,
                    skipUnsafeWorkingDirectoryBlock: true,
                    command,
                    parsingResult,
                    toolCallId: args.toolCallId
                }, policy);
                if (invariantBlock.kind === "block") {
                    logger17.info(ctx, "Background shell: invariant blocked command", {
                        toolCallId: args.toolCallId,
                        blockReasonType: invariantBlock.reason.type,
                        skipApproval: args.skipApproval
                    });
                    return backgroundShellSpawnBlockResult(command, resolvedWorkingDir, invariantBlock.reason);
                }
                logger17.info(ctx, "Background shell: skipped local approval", {
                    toolCallId: args.toolCallId,
                    requestedPolicyType: policy?.type ?? "undefined"
                });
            } else {
                const blockResult = await this.permissionsService.shouldBlockShellCommand(ctx, command, {
                    workingDirectory: resolvedWorkingDir,
                    timeout: 0,
                    parsingResult,
                    toolCallId: args.toolCallId,
                    classifierResult: args.classifierResult,
                    smartModeApprovalReason: args.smartModeApproval?.reason,
                    smartModeApprovalRequestId: args.smartModeApproval?.requestId,
                    hookApprovalRequirement: getShellHookApprovalRequirement(args)
                }, policy);
                if (blockResult.kind === "block") {
                    logger17.info(ctx, "Background shell: approval gate blocked command", {
                        toolCallId: args.toolCallId,
                        blockReasonType: blockResult.reason.type,
                        hasSmartModeApproval: args.smartModeApproval !== void 0,
                        skipApproval: args.skipApproval
                    });
                    return backgroundShellSpawnBlockResult(command, resolvedWorkingDir, blockResult.reason);
                }
                effectivePolicy = blockResult.policy;
                logger17.info(ctx, "Background shell: approval gate allowed command", {
                    toolCallId: args.toolCallId,
                    skipApproval: args.skipApproval,
                    effectivePolicyType: effectivePolicy.type
                });
            }
            if (isForcedShellEgressEnabled()) {
                effectivePolicy = forcedShellSandboxPolicy(command, parsingResult);
                if (effectivePolicy.type !== "insecure_none") {
                    const ignoreMapping = await resolveShellSandboxIgnoreMapping(this.ignoreService);
                    effectivePolicy = {
                        ...effectivePolicy,
                        ignoreMapping
                    };
                }
            }
            try {
                const shellId = this.backgroundShellManager.generateShellId();
                const sandboxPolicyMergeSources = effectivePolicy ? {
                    perRepo: effectivePolicy
                } : void 0;
                const executionContext = {
                    ctx,
                    command,
                    workingDirectory: resolvedWorkingDir,
                    toolCallId: args.toolCallId,
                    conversationId: args.conversationId,
                    requestId: args.requestId,
                    secretScopeId: args.secretScopeId,
                    sandboxPolicy: sandboxPolicyMergeSources,
                    shellId,
                    enableWriteShellStdinTool: args.enableWriteShellStdinTool,
                    suppressStdinLogging: args.suppressStdinLogging,
                    description: args.description,
                    outputNotification: args.outputNotification
                };
                const spawnResult = await this.backgroundShellManager.spawn(executionContext, this.coreExecutor);
                return new BackgroundShellSpawnResult({
                    result: {
                        case: "success",
                        value: new BackgroundShellSpawnSuccess({
                            shellId,
                            command,
                            workingDirectory: resolvedWorkingDir,
                            pid: spawnResult.pid
                        })
                    }
                });
            } catch (error3) {
                if (error3 instanceof SandboxUnsupportedError) {
                    const policyType = effectivePolicy?.type ?? "unknown";
                    logger17.debug(ctx, "Background shell: sandbox policy unsupported on this host", {
                        toolCallId: args.toolCallId,
                        policyType,
                        reason: error3.reason
                    });
                    return new BackgroundShellSpawnResult({
                        result: {
                            case: "sandboxUnsupported",
                            value: new ShellSandboxUnsupported({
                                command,
                                workingDirectory: resolvedWorkingDir,
                                sandboxPolicyType: policyType,
                                reason: error3.reason ?? error3.message,
                                isReadonly: policyType === "workspace_readonly"
                            })
                        }
                    });
                }
                return new BackgroundShellSpawnResult({
                    result: {
                        case: "error",
                        value: new BackgroundShellSpawnError({
                            command,
                            workingDirectory: resolvedWorkingDir,
                            error: error3 instanceof Error ? error3.message : "Unknown error"
                        })
                    }
                });
            }
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources16(env_1);
        }
    }
    writeStdin(shellId, data) {
        return this.backgroundShellManager.writeStdin(shellId, data);
    }
};

}
