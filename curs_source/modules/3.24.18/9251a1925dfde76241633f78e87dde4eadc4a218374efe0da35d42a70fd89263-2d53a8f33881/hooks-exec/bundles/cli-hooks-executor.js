import { createContext } from "../../agent-host/dist/storage/instruments.js";
import { init_dist28 } from "../../agent-transcript/dist/index.js";
import { init_dist } from "../../context/dist/index.js";
import { buildWindowsHookPipelineCommand, createAllowResponse, createBlockResponse, ensureCallOperatorForQuotedPath, extractToolName, filterScriptsByMatcher, getBlockReason, getInvalidHookOutputBlockDecision, getProjectPath, isCommandHook, isPromptHook, isWorkspaceLifecycleStep, mergeHookResponses, parseHookStdoutJson, resolveWindowsHookCommandExecutable } from "../../dist_exports.js";
import { init_hook_error_handling } from "./hook-error-handling.js";
import { HookStep } from "../../hooks/dist/hook-step.js";
import { init_dist6 } from "../../hooks/dist/index.js";
import { DEFAULT_HOOK_TIMEOUT_SECONDS, DEFAULT_STOP_HOOK_LOOP_LIMIT, HOOK_BLOCK_EXIT_CODE, validateAndParseHookResponse } from "../../hooks/dist/types.js";
import { formatFailClosedBlockReason, getTranscriptProbeRelativePaths, isExistingFileSync } from "../../mcp_sandbox_policy_exports.js";
import { init_dist3 } from "../../utils/dist/index.js";
var import_node_fs33, import_promises46, import_node_os24, import_node_path72, import_promises47, CliHooksExecutor;
export { CliHooksExecutor, import_node_fs33, import_node_os24, import_node_path72, import_promises46, import_promises47 };
var __wakaru_init_cli_hooks_executor_initialized = false;
export function init_cli_hooks_executor() {
if (__wakaru_init_cli_hooks_executor_initialized) return;
__wakaru_init_cli_hooks_executor_initialized = true;
"use strict";
import_node_fs33 = require("node:fs");
import_promises46 = require("node:fs/promises");
import_node_os24 = require("node:os");
import_node_path72 = require("node:path");
import_promises47 = require("node:stream/promises");
init_dist28();
init_dist();
init_dist6();
init_dist3();
init_hook_error_handling();
CliHooksExecutor = class {
    constructor(config2, workspacePath, globalContext, shellExecutor, promptHookClient, teamHooksReadyPromise, onHookExecution, options2){
        this.workspacePath = workspacePath;
        this.globalContext = globalContext;
        this.shellExecutor = shellExecutor;
        this.promptHookClient = promptHookClient;
        this.onHookExecution = onHookExecution;
        this.options = options2;
        this.sessionEnvById = new Map();
        this.sessionUserEmailById = new Map();
        this.activeSessionIdsByConversationId = new Map();
        this.configReadyPromises = [];
        this.config = config2;
        if (teamHooksReadyPromise) {
            this.addConfigReadyPromise(teamHooksReadyPromise);
        }
    }
    addConfigReadyPromise(promise) {
        this.configReadyPromises.push(promise.catch(()=>void 0));
    }
    emitHookExecution(event) {
        const eventWithTransportMode = {
            ...event,
            transportMode: event.transportMode ?? (event.hookType === "prompt" ? "prompt" : this.getCommandHookPayloadTransportMode())
        };
        try {
            this.onHookExecution?.(eventWithTransportMode);
        } catch  {}
    }
    getCommandHookPayloadTransportMode() {
        if (this.options?.commandHookPayloadTransport === "stdin") {
            return process.platform === "win32" ? "windows_temp_file" : "stdin";
        }
        return "argv_heredoc";
    }
    shouldUseCommandHookDirectStdinTransport() {
        return this.getCommandHookPayloadTransportMode() === "stdin";
    }
    async writeCommandHookStdinPayload(stdin, payload) {
        if (!stdin) {
            throw new Error("Hook stdin transport was requested, but the executor did not provide stdin");
        }
        try {
            stdin.end(Buffer.from(payload, "utf8"));
        } catch (error3) {
            const errorCode3 = error3 instanceof Error && "code" in error3 ? error3.code : void 0;
            if (errorCode3 === "EPIPE" || errorCode3 === "ERR_STREAM_DESTROYED" || errorCode3 === "ERR_STREAM_PREMATURE_CLOSE") {
                return;
            }
            throw error3;
        }
        try {
            await (0, import_promises47.finished)(stdin);
        } catch (error3) {
            const errorCode3 = error3 instanceof Error && "code" in error3 ? error3.code : void 0;
            if (errorCode3 === "EPIPE" || errorCode3 === "ERR_STREAM_DESTROYED" || errorCode3 === "ERR_STREAM_PREMATURE_CLOSE") {
                return;
            }
            throw error3;
        }
    }
    updateConfig(config2) {
        this.config = config2;
    }
    beginSessionEnvironment(scope, options2) {
        this.sessionEnvById.delete(scope.sessionId);
        this.sessionUserEmailById.delete(scope.sessionId);
        const activeSessionIds = this.activeSessionIdsByConversationId.get(scope.conversationId) ?? [];
        this.activeSessionIdsByConversationId.set(scope.conversationId, activeSessionIds.filter((sessionId)=>sessionId !== scope.sessionId).concat(scope.sessionId));
        const trimmedEmail = options2?.userEmail?.trim() ?? "";
        if (trimmedEmail.length > 0) {
            this.sessionUserEmailById.set(scope.sessionId, trimmedEmail);
        }
    }
    setSessionUserEmail(scope, userEmail) {
        const trimmedEmail = userEmail?.trim() ?? "";
        if (trimmedEmail.length === 0) {
            return;
        }
        this.sessionUserEmailById.set(scope.sessionId, trimmedEmail);
    }
    setSessionEnvironment(env, scope) {
        if (scope !== void 0) {
            this.sessionEnvById.set(scope.sessionId, {
                ...this.sessionEnvById.get(scope.sessionId),
                ...env
            });
            return;
        }
        this.sessionEnv = {
            ...this.sessionEnv,
            ...env
        };
    }
    clearSessionEnvironment(scope) {
        if (scope !== void 0) {
            this.sessionEnvById.delete(scope.sessionId);
            this.sessionUserEmailById.delete(scope.sessionId);
            const remainingSessionIds = (this.activeSessionIdsByConversationId.get(scope.conversationId) ?? []).filter((sessionId)=>sessionId !== scope.sessionId);
            if (remainingSessionIds.length === 0) {
                this.activeSessionIdsByConversationId.delete(scope.conversationId);
            } else {
                this.activeSessionIdsByConversationId.set(scope.conversationId, remainingSessionIds);
            }
            return;
        }
        this.sessionEnv = void 0;
    }
    resolveUserEmail(request3) {
        const { conversation_id: conversationId, session_id: requestSessionId } = request3;
        if (requestSessionId !== void 0 && this.sessionUserEmailById.has(requestSessionId)) {
            return this.sessionUserEmailById.get(requestSessionId) ?? null;
        }
        if (conversationId !== void 0) {
            const latestSessionId = this.activeSessionIdsByConversationId.get(conversationId)?.at(-1);
            if (latestSessionId !== void 0) {
                const scoped = this.sessionUserEmailById.get(latestSessionId);
                if (scoped !== void 0) {
                    return scoped;
                }
            }
        }
        return this.globalContext.user_email;
    }
    async getTranscriptPathIfExists(conversationId) {
        try {
            const projectDir = getProjectPath((0, import_node_os24.homedir)(), this.workspacePath);
            const candidates = getTranscriptProbeRelativePaths({
                conversationId,
                kind: "primary"
            }).map((relPath)=>(0, import_node_path72.join)(projectDir, relPath));
            for (const candidatePath of candidates){
                try {
                    await (0, import_promises46.access)(candidatePath);
                    return candidatePath;
                } catch  {}
            }
            return null;
        } catch  {
            return null;
        }
    }
    async getSubagentTranscriptPathIfExists(args) {
        const { subagentId, parentConversationId } = args;
        try {
            const projectDir = getProjectPath((0, import_node_os24.homedir)(), this.workspacePath);
            const candidates = getTranscriptProbeRelativePaths({
                conversationId: subagentId,
                kind: "subagent",
                parentConversationId
            }).map((relPath)=>(0, import_node_path72.join)(projectDir, relPath));
            for (const candidatePath of candidates){
                try {
                    await (0, import_promises46.access)(candidatePath);
                    return candidatePath;
                } catch  {}
            }
            return null;
        } catch  {
            return null;
        }
    }
    hasHooksForStep(step) {
        const allConfigs = [
            this.config.enterpriseHooks,
            this.config.teamHooks,
            this.config.userHooks,
            this.config.projectHooks,
            this.options?.runtimeHooks,
            this.config.claudeUserHooks,
            this.config.claudeProjectHooks,
            this.config.claudeProjectLocalHooks,
            ...(this.config.pluginHooks ?? []).map((entry)=>entry.config)
        ];
        return allConfigs.some((cfg)=>{
            const scripts = cfg?.hooks[step];
            return scripts !== void 0 && scripts.length > 0;
        });
    }
    hasFailClosedHooksForStep(step, toolName) {
        const configs = [
            this.config.enterpriseHooks,
            this.config.teamHooks,
            this.config.projectHooks,
            this.config.userHooks,
            this.options?.runtimeHooks
        ];
        for (const config2 of configs){
            const scripts = config2?.hooks[step];
            if (!scripts) continue;
            const matchingScripts = toolName ? filterScriptsByMatcher(scripts, toolName) : scripts;
            if (matchingScripts.some((script)=>script.failClosed === true)) {
                return true;
            }
        }
        for (const entry of this.config.pluginHooks ?? []){
            const scripts = entry.config.hooks[step];
            if (!scripts) continue;
            const matchingScripts = toolName ? filterScriptsByMatcher(scripts, toolName) : scripts;
            if (matchingScripts.some((script)=>isCommandHook(script) && script.failClosed === true)) {
                return true;
            }
        }
        return false;
    }
    getCwdForSource(source) {
        const dirs = this.config.configDirs;
        switch(source){
            case "enterprise":
                return dirs?.enterprise ?? this.workspacePath;
            case "team":
                return dirs?.team ?? this.workspacePath;
            case "project":
            case "claude-project":
            case "claude-project-local":
            case "claude-plugin":
                return this.workspacePath;
            case "user":
                return dirs?.user ?? this.workspacePath;
            case "runtime":
                return this.workspacePath;
            case "claude-user":
                return dirs?.claudeUser ?? this.workspacePath;
            default:
                {
                    const _2 = source;
                    return this.workspacePath;
                }
        }
    }
    buildHookEnvironment(args) {
        const { transcriptPath, sessionId, conversationId, executionEnv } = args;
        const userEmail = this.resolveUserEmail({
            conversation_id: conversationId,
            session_id: sessionId
        });
        const env = {
            CURSOR_PROJECT_DIR: this.workspacePath,
            CURSOR_VERSION: this.globalContext.cursor_version,
            ...userEmail && {
                CURSOR_USER_EMAIL: userEmail
            },
            ...transcriptPath && {
                CURSOR_TRANSCRIPT_PATH: transcriptPath
            },
            CLAUDE_PROJECT_DIR: this.workspacePath,
            ...this.sessionEnv,
            ...sessionId !== void 0 ? this.sessionEnvById.get(sessionId) : void 0,
            ...executionEnv
        };
        return env;
    }
    shouldSkipHookDueToLoopLimit(step, script, fullRequest) {
        if (step !== "stop" && step !== "subagentStop") {
            return false;
        }
        const request3 = step === "stop" ? fullRequest : fullRequest;
        const loopCount = request3.loop_count;
        const limit = script.loop_limit;
        if (limit === null) {
            return false;
        }
        if (limit === void 0) {
            return loopCount >= DEFAULT_STOP_HOOK_LOOP_LIMIT;
        }
        return loopCount >= limit;
    }
    async executeHookForStep(step, request3, executionOptions) {
        if (this.configReadyPromises.length > 0) {
            await Promise.all(this.configReadyPromises);
        }
        const isLifecycleStep = isWorkspaceLifecycleStep(step);
        const requestWithSessionContext = request3;
        const transcriptPath = isLifecycleStep ? null : requestWithSessionContext.conversation_id ? await this.getTranscriptPathIfExists(requestWithSessionContext.conversation_id) : null;
        let agentTranscriptPath;
        if (step === HookStep.subagentStop) {
            const subagentRequest = request3;
            agentTranscriptPath = subagentRequest.subagent_id ? await this.getSubagentTranscriptPathIfExists({
                subagentId: subagentRequest.subagent_id,
                parentConversationId: subagentRequest.parent_conversation_id
            }) : null;
        }
        const sessionIdForRequest = isLifecycleStep ? void 0 : requestWithSessionContext.session_id ?? requestWithSessionContext.conversation_id;
        const fullRequest = {
            ...request3,
            ...sessionIdForRequest !== void 0 && {
                session_id: sessionIdForRequest
            },
            hook_event_name: step,
            cursor_version: this.globalContext.cursor_version,
            workspace_roots: [
                this.workspacePath
            ],
            user_email: this.resolveUserEmail(requestWithSessionContext),
            ...!isLifecycleStep && {
                transcript_path: transcriptPath
            },
            ...step === HookStep.subagentStop && {
                agent_transcript_path: agentTranscriptPath ?? null
            }
        };
        const toolName = extractToolName(step, fullRequest);
        const scriptsToExecute = [];
        const addScriptsFromSource = (scripts, source)=>{
            if (!scripts) return;
            const filtered = filterScriptsByMatcher(scripts, toolName);
            const cwd = executionOptions?.cwd ?? this.getCwdForSource(source);
            for (const script of filtered){
                if (isPromptHook(script)) {
                    if (this.promptHookClient) {
                        scriptsToExecute.push({
                            type: "prompt",
                            script,
                            source
                        });
                    }
                } else if (isCommandHook(script)) {
                    scriptsToExecute.push({
                        type: "command",
                        script,
                        cwd,
                        env: executionOptions?.env,
                        source
                    });
                }
            }
        };
        addScriptsFromSource(this.config.enterpriseHooks?.hooks[step], "enterprise");
        addScriptsFromSource(this.config.teamHooks?.hooks[step], "team");
        addScriptsFromSource(this.config.projectHooks?.hooks[step], "project");
        addScriptsFromSource(this.config.userHooks?.hooks[step], "user");
        addScriptsFromSource(this.options?.runtimeHooks?.hooks[step], "runtime");
        addScriptsFromSource(this.config.claudeProjectLocalHooks?.hooks[step], "claude-project-local");
        addScriptsFromSource(this.config.claudeProjectHooks?.hooks[step], "claude-project");
        addScriptsFromSource(this.config.claudeUserHooks?.hooks[step], "claude-user");
        for (const entry of this.config.pluginHooks ?? []){
            const scripts = entry.config.hooks[step];
            if (!scripts?.length) continue;
            const cwd = executionOptions?.cwd ?? (step === HookStep.stop || step === HookStep.subagentStop ? this.workspacePath : entry.installPath);
            const attribution = {
                ...entry.plugin !== void 0 && {
                    plugin: entry.plugin
                },
                ...entry.marketplace !== void 0 && {
                    marketplace: entry.marketplace
                },
                ...entry.pluginId !== void 0 && {
                    pluginId: entry.pluginId
                },
                ...entry.marketplaceId !== void 0 && {
                    marketplaceId: entry.marketplaceId
                }
            };
            for (const script of filterScriptsByMatcher(scripts, toolName)){
                if (!isCommandHook(script)) continue;
                scriptsToExecute.push({
                    type: "command",
                    script,
                    cwd,
                    env: executionOptions?.env,
                    source: "claude-plugin",
                    attribution,
                    pluginInstallPath: entry.installPath
                });
            }
        }
        if (scriptsToExecute.length === 0) {
            return void 0;
        }
        return this.executeAllAndMerge(step, scriptsToExecute, fullRequest);
    }
    async executeAllAndMerge(step, scriptsToExecute, fullRequest) {
        const executionPromises = scriptsToExecute.map(async (scriptInfo, index)=>{
            const { source, attribution } = scriptInfo;
            try {
                if (scriptInfo.type === "prompt") {
                    return this.executePromptHook(step, scriptInfo.script, fullRequest, source, index, attribution);
                } else {
                    return this.executeCommandHook(step, scriptInfo.script, scriptInfo.cwd, scriptInfo.env, fullRequest, source, index, attribution, scriptInfo.pluginInstallPath);
                }
            } catch (error3) {
                if (scriptInfo.script.failClosed === true) {
                    const errorMsg = error3 instanceof Error ? error3.message : String(error3);
                    const reason = formatFailClosedBlockReason(`Hook execution failed: ${errorMsg}`);
                    const blockResponse = createBlockResponse(step, reason);
                    if (blockResponse) {
                        return {
                            success: true,
                            data: blockResponse,
                            source,
                            index
                        };
                    }
                }
                return {
                    success: false,
                    source,
                    index
                };
            }
        });
        const results = await Promise.all(executionPromises);
        const validResponses = [];
        for (const result of results){
            if (result.success && result.data !== void 0) {
                validResponses.push(result.data);
            }
        }
        return mergeHookResponses(step, validResponses);
    }
    async executeCommandHook(step, script, cwd, env, fullRequest, source, index, attribution, pluginInstallPath) {
        if (this.shouldSkipHookDueToLoopLimit(step, script, fullRequest)) {
            return {
                success: false,
                source,
                index
            };
        }
        const hookStartTime = Date.now();
        const payloadSizeBytes = Buffer.byteLength(JSON.stringify(fullRequest), "utf8");
        let result;
        try {
            result = await this.executeCommandScript({
                script,
                cwd,
                request: fullRequest,
                env,
                ...pluginInstallPath !== void 0 && {
                    pluginInstallPath
                }
            });
        } catch (error3) {
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            const timedOut = errorMessage4.toLowerCase().includes("timed out");
            const latencyMs = Date.now() - hookStartTime;
            const errorClass = timedOut ? "timeout" : "spawn_error";
            if (script.failClosed === true) {
                const reason = formatFailClosedBlockReason(`Hook "${script.command}" execution failed: ${errorMessage4}`);
                const blockResponse = createBlockResponse(step, reason);
                if (blockResponse) {
                    this.emitHookExecution({
                        hookStep: step,
                        hookSource: source,
                        hookType: "command",
                        status: timedOut ? "timeout" : "blocked",
                        latencyMs,
                        payloadSizeBytes,
                        errorClass,
                        failClosed: true,
                        timedOut,
                        ...attribution
                    });
                    return {
                        success: true,
                        data: blockResponse,
                        source,
                        index
                    };
                }
            }
            this.emitHookExecution({
                hookStep: step,
                hookSource: source,
                hookType: "command",
                status: timedOut ? "timeout" : "failed",
                latencyMs,
                payloadSizeBytes,
                errorClass,
                failClosed: script.failClosed === true,
                timedOut,
                ...attribution
            });
            return {
                success: false,
                source,
                index
            };
        }
        if (result.exitCode === HOOK_BLOCK_EXIT_CODE) {
            const reason = getBlockReason(result.stdout, result.stderr, script.command);
            const blockResponse = createBlockResponse(step, reason);
            if (blockResponse) {
                this.emitHookExecution({
                    hookStep: step,
                    hookSource: source,
                    hookType: "command",
                    status: "blocked",
                    latencyMs: result.duration,
                    payloadSizeBytes,
                    failClosed: script.failClosed === true,
                    exitCode: result.exitCode,
                    ...attribution
                });
                return {
                    success: true,
                    data: blockResponse,
                    source,
                    index
                };
            }
            this.emitHookExecution({
                hookStep: step,
                hookSource: source,
                hookType: "command",
                status: "blocked",
                latencyMs: result.duration,
                payloadSizeBytes,
                failClosed: script.failClosed === true,
                exitCode: result.exitCode,
                ...attribution
            });
            return {
                success: false,
                source,
                index
            };
        }
        if (result.exitCode !== 0 && result.exitCode !== null) {
            if (script.failClosed === true) {
                const reason = formatFailClosedBlockReason(`Hook "${script.command}" failed with exit code ${result.exitCode}${result.stderr ? `: ${result.stderr.trim()}` : ""}`);
                const blockResponse = createBlockResponse(step, reason);
                if (blockResponse) {
                    this.emitHookExecution({
                        hookStep: step,
                        hookSource: source,
                        hookType: "command",
                        status: "blocked",
                        latencyMs: result.duration,
                        payloadSizeBytes,
                        errorClass: "exit_nonzero",
                        failClosed: true,
                        exitCode: result.exitCode,
                        ...attribution
                    });
                    return {
                        success: true,
                        data: blockResponse,
                        source,
                        index
                    };
                }
            }
            this.emitHookExecution({
                hookStep: step,
                hookSource: source,
                hookType: "command",
                status: "failed",
                latencyMs: result.duration,
                payloadSizeBytes,
                errorClass: "exit_nonzero",
                failClosed: script.failClosed === true,
                exitCode: result.exitCode,
                ...attribution
            });
            return {
                success: false,
                source,
                index
            };
        }
        const trimmedStdout = result.stdout.trim();
        if (!trimmedStdout) {
            if (script.failClosed === true) {
                const reason = formatFailClosedBlockReason(`Hook "${script.command}" returned no output.`);
                const blockResponse = createBlockResponse(step, reason);
                if (blockResponse) {
                    this.emitHookExecution({
                        hookStep: step,
                        hookSource: source,
                        hookType: "command",
                        status: "blocked",
                        latencyMs: result.duration,
                        payloadSizeBytes,
                        errorClass: "empty_stdout",
                        failClosed: true,
                        exitCode: result.exitCode ?? void 0,
                        ...attribution
                    });
                    return {
                        success: true,
                        data: blockResponse,
                        source,
                        index
                    };
                }
            }
            this.emitHookExecution({
                hookStep: step,
                hookSource: source,
                hookType: "command",
                status: "failed",
                latencyMs: result.duration,
                payloadSizeBytes,
                errorClass: "empty_stdout",
                failClosed: script.failClosed === true,
                exitCode: result.exitCode ?? void 0,
                ...attribution
            });
            return {
                success: false,
                source,
                index
            };
        }
        const rawResponse = parseHookStdoutJson(trimmedStdout);
        if (rawResponse === void 0) {
            const invalidJsonDecision = getInvalidHookOutputBlockDecision({
                step,
                command: script.command,
                failClosed: script.failClosed === true,
                kind: "invalid_json"
            });
            if (invalidJsonDecision.blockResponse) {
                this.emitHookExecution({
                    hookStep: step,
                    hookSource: source,
                    hookType: "command",
                    status: "blocked",
                    latencyMs: result.duration,
                    payloadSizeBytes,
                    errorClass: "invalid_json",
                    failClosed: script.failClosed === true,
                    exitCode: result.exitCode ?? void 0,
                    ...attribution
                });
                return {
                    success: true,
                    data: invalidJsonDecision.blockResponse,
                    source,
                    index
                };
            }
            this.emitHookExecution({
                hookStep: step,
                hookSource: source,
                hookType: "command",
                status: "failed",
                latencyMs: result.duration,
                payloadSizeBytes,
                errorClass: "invalid_json",
                failClosed: script.failClosed === true,
                exitCode: result.exitCode ?? void 0,
                ...attribution
            });
            return {
                success: false,
                source,
                index
            };
        }
        const validationResult = validateAndParseHookResponse(step, rawResponse, {
            enableClaudeNestedHookSpecificOutputCompatibility: this.options?.enableClaudeNestedHookSpecificOutputCompatibility
        });
        if (validationResult.success) {
            const parsed = validationResult.data;
            const isBlocked = parsed.permission === "deny" || parsed.permission === "ask";
            this.emitHookExecution({
                hookStep: step,
                hookSource: source,
                hookType: "command",
                status: isBlocked ? "blocked" : "success",
                latencyMs: result.duration,
                payloadSizeBytes,
                failClosed: script.failClosed === true,
                exitCode: result.exitCode ?? void 0,
                ...attribution
            });
            return {
                success: true,
                data: validationResult.data,
                source,
                index
            };
        }
        const invalidResponseDecision = getInvalidHookOutputBlockDecision({
            step,
            command: script.command,
            failClosed: script.failClosed === true,
            kind: "invalid_response"
        });
        if (invalidResponseDecision.blockResponse) {
            this.emitHookExecution({
                hookStep: step,
                hookSource: source,
                hookType: "command",
                status: "blocked",
                latencyMs: result.duration,
                payloadSizeBytes,
                errorClass: "invalid_response",
                failClosed: script.failClosed === true,
                exitCode: result.exitCode ?? void 0,
                ...attribution
            });
            return {
                success: true,
                data: invalidResponseDecision.blockResponse,
                source,
                index
            };
        }
        this.emitHookExecution({
            hookStep: step,
            hookSource: source,
            hookType: "command",
            status: "failed",
            latencyMs: result.duration,
            payloadSizeBytes,
            errorClass: "invalid_response",
            failClosed: script.failClosed === true,
            exitCode: result.exitCode ?? void 0,
            ...attribution
        });
        return {
            success: false,
            source,
            index
        };
    }
    async executePromptHook(step, script, fullRequest, source, index, attribution) {
        if (this.shouldSkipHookDueToLoopLimit(step, script, fullRequest)) {
            return {
                success: false,
                source,
                index
            };
        }
        if (!this.promptHookClient) {
            return {
                success: false,
                source,
                index
            };
        }
        const timeoutMs = (script.timeout ?? DEFAULT_HOOK_TIMEOUT_SECONDS) * 1e3;
        const hookStartTime = Date.now();
        const payloadSizeBytes = Buffer.byteLength(JSON.stringify(fullRequest), "utf8");
        const baseCtx = createContext();
        const [ctx, cancel] = baseCtx.withTimeoutAndCancel(timeoutMs);
        try {
            const sanitizedRequest = JSON.parse(JSON.stringify(fullRequest));
            const response = await this.promptHookClient.evaluatePromptHook(ctx, {
                prompt: script.prompt,
                hookInputJson: sanitizedRequest,
                modelName: script.model
            });
            if (response.ok) {
                const allowResponse = createAllowResponse(step);
                this.emitHookExecution({
                    hookStep: step,
                    hookSource: source,
                    hookType: "prompt",
                    status: "success",
                    latencyMs: Date.now() - hookStartTime,
                    payloadSizeBytes,
                    failClosed: script.failClosed === true,
                    ...attribution
                });
                if (allowResponse) {
                    return {
                        success: true,
                        data: allowResponse,
                        source,
                        index
                    };
                }
                return {
                    success: false,
                    source,
                    index
                };
            } else {
                const reason = response.reason ?? "Prompt hook blocked this action";
                const blockResponse = createBlockResponse(step, reason);
                this.emitHookExecution({
                    hookStep: step,
                    hookSource: source,
                    hookType: "prompt",
                    status: "blocked",
                    latencyMs: Date.now() - hookStartTime,
                    payloadSizeBytes,
                    failClosed: script.failClosed === true,
                    ...attribution
                });
                if (blockResponse) {
                    return {
                        success: true,
                        data: blockResponse,
                        source,
                        index
                    };
                }
                return {
                    success: false,
                    source,
                    index
                };
            }
        } catch (error3) {
            const errorMsg = error3 instanceof Error ? error3.message : String(error3);
            const timedOut = errorMsg.toLowerCase().includes("abort") || errorMsg.toLowerCase().includes("timed out");
            const errorClass = timedOut ? "timeout" : "prompt_error";
            if (script.failClosed === true) {
                const reason = formatFailClosedBlockReason(`Prompt hook failed: ${errorMsg}`);
                const blockResponse = createBlockResponse(step, reason);
                if (blockResponse) {
                    this.emitHookExecution({
                        hookStep: step,
                        hookSource: source,
                        hookType: "prompt",
                        status: timedOut ? "timeout" : "blocked",
                        latencyMs: Date.now() - hookStartTime,
                        payloadSizeBytes,
                        errorClass,
                        failClosed: true,
                        timedOut,
                        ...attribution
                    });
                    return {
                        success: true,
                        data: blockResponse,
                        source,
                        index
                    };
                }
            }
            this.emitHookExecution({
                hookStep: step,
                hookSource: source,
                hookType: "prompt",
                status: timedOut ? "timeout" : "failed",
                latencyMs: Date.now() - hookStartTime,
                payloadSizeBytes,
                errorClass,
                failClosed: script.failClosed === true,
                timedOut,
                ...attribution
            });
            return {
                success: false,
                source,
                index
            };
        } finally{
            cancel();
        }
    }
    async executeCommandScript(options2) {
        const { script, cwd, request: request3, env, pluginInstallPath } = options2;
        const timeoutMs = (script.timeout ?? DEFAULT_HOOK_TIMEOUT_SECONDS) * 1e3;
        const startTime = Date.now();
        const jsonPayload = JSON.stringify(request3);
        let tempPayloadDir;
        const abortController = new AbortController();
        const timeoutHandle = setTimeout(()=>{
            abortController.abort();
        }, timeoutMs);
        try {
            const isWindows5 = process.platform === "win32";
            const transportMode = this.getCommandHookPayloadTransportMode();
            const useStdinTransport = this.shouldUseCommandHookDirectStdinTransport();
            const hookCommand = isWindows5 ? resolveWindowsHookCommandExecutable(script.command, {
                cwd,
                isFile: isExistingFileSync
            }) : script.command;
            let command;
            if (useStdinTransport) {
                command = isWindows5 ? ensureCallOperatorForQuotedPath(hookCommand) : hookCommand;
            } else if (transportMode === "windows_temp_file") {
                tempPayloadDir = await (0, import_promises46.mkdtemp)((0, import_node_path72.join)((0, import_node_os24.tmpdir)(), "cursor-hooks-"));
                const tempPayloadPath = (0, import_node_path72.join)(tempPayloadDir, "payload.json");
                await (0, import_promises46.writeFile)(tempPayloadPath, jsonPayload, {
                    encoding: "utf8",
                    flag: "wx"
                });
                command = buildWindowsHookPipelineCommand(tempPayloadPath, hookCommand);
            } else if (isWindows5) {
                const escapedJson = jsonPayload.replace(/'/g, "''");
                command = `@'
${escapedJson}
'@ | & ${hookCommand}`;
            } else {
                command = `${script.command} <<'CURSOR_HOOK_EOF'
${jsonPayload}
CURSOR_HOOK_EOF`;
            }
            const requestWithTranscriptPath = request3;
            const { conversation_id: conversationId, session_id: requestSessionId } = requestWithTranscriptPath;
            const activeSessionIds = conversationId === void 0 ? void 0 : this.activeSessionIdsByConversationId.get(conversationId);
            const sessionIdForEnv = requestSessionId !== void 0 && (requestSessionId !== conversationId || this.sessionEnvById.has(requestSessionId)) ? requestSessionId : conversationId === void 0 ? void 0 : activeSessionIds?.at(-1) ?? conversationId;
            const hookEnv = this.buildHookEnvironment({
                transcriptPath: requestWithTranscriptPath.transcript_path,
                sessionId: sessionIdForEnv,
                conversationId,
                executionEnv: env
            });
            const envRecord = {};
            for (const [key, value] of Object.entries(hookEnv)){
                if (value !== void 0) {
                    envRecord[key] = value;
                }
            }
            if (pluginInstallPath !== void 0) {
                envRecord.CURSOR_PLUGIN_ROOT = pluginInstallPath;
                envRecord.CLAUDE_PLUGIN_ROOT = pluginInstallPath;
            }
            const ctx = createContext();
            let stdout = "";
            let stderr = "";
            let exitCode = null;
            let wroteStdinPayload = false;
            for await (const event of this.shellExecutor.execute(ctx, command, {
                workingDirectory: cwd,
                signal: abortController.signal,
                sandboxPolicy: {
                    perUser: {
                        type: "insecure_none"
                    }
                },
                env: envRecord,
                pipeStdin: useStdinTransport
            })){
                switch(event.type){
                    case "stdin_ready":
                        if (useStdinTransport) {
                            await this.writeCommandHookStdinPayload(event.stdin, jsonPayload);
                            wroteStdinPayload = true;
                        }
                        break;
                    case "stdout":
                        stdout += event.data.toString("utf8");
                        break;
                    case "stderr":
                        stderr += event.data.toString("utf8");
                        break;
                    case "exit":
                        exitCode = event.code;
                        break;
                }
            }
            if (useStdinTransport && !wroteStdinPayload) {
                throw new Error("Hook stdin transport was requested, but the executor did not signal stdin readiness");
            }
            clearTimeout(timeoutHandle);
            const duration3 = Date.now() - startTime;
            if (abortController.signal.aborted) {
                throw new Error(`Hook script timed out after ${timeoutMs}ms`);
            }
            return {
                stdout,
                stderr,
                exitCode,
                duration: duration3
            };
        } catch (error3) {
            clearTimeout(timeoutHandle);
            const _duration = Date.now() - startTime;
            if (abortController.signal.aborted) {
                throw new Error(`Hook script timed out after ${timeoutMs}ms`);
            }
            throw error3;
        } finally{
            if (tempPayloadDir) {
                try {
                    await (0, import_promises46.rm)(tempPayloadDir, {
                        recursive: true,
                        force: true
                    });
                } catch  {}
            }
        }
    }
};

}
