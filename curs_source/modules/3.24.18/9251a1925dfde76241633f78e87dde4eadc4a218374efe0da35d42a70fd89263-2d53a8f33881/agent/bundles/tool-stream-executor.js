import { init_dist7 } from "../../agent-core/dist/index.js";
import { init_dist8 } from "../../agent-exec/dist/index.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_outbound_message_loop } from "./loop-detection/outbound-message-loop.js";
import { init_shim } from "./shims/shim.js";
import { init_tool_step } from "./shims/tool-step.js";
import { init_steer_idle_sample_preemption } from "./steer-idle-sample-preemption.js";
import { init_tool_call_events } from "./telemetry/tool-call-events.js";
import { init_all_tools } from "./tools/all-tools.js";
import { init_common9 } from "./tools/common.js";
import { init_core5 } from "./tools/core.js";
import { init_connect_error2 } from "./tools/core/connect-error.js";
import { init_dynamic_tool_argument_repair } from "./tools/mcp/dynamic-tool-argument-repair.js";
import { init_symbolic_tool_args } from "./tools/mcp/symbolic-tool-args.js";
import { init_tool_call_name } from "./tools/tool-call-name.js";
import { init_tool_result_system_reminders } from "./tools/tool-result-system-reminders.js";
import { init_event_tracking } from "./utils/event-tracking.js";
import { init_request_id } from "./utils/request-id.js";
import { init_dist26 } from "../../chat-inference/dist/index.js";
import { init_dist } from "../../context/dist/index.js";
import { createCounter, createHistogram } from "../../dist_exports.js";
import { createKey } from "../../entry_exports.js";
import { init_dist30 } from "../../hooks-carriers/dist/index.js";
import { init_dist19 } from "../../mcp-agent-exec/dist/index.js";
import { executeModelStreamOnly, executeToolStream, fromRedactedCoreMessages, toRedactedCoreMessages } from "../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
import { PrivacyCapability } from "../../redaction/dist/classification.js";
import { init_dist27 } from "../../redaction/dist/index.js";
import { init_dist3 } from "../../utils/dist/index.js";
import { WriteIterableClosedError } from "../../utils/dist/writable-iterable.js";
var completedToolResultsByDeferredError, streamErrorsBeforeToolExecution, RAW_ERROR_MESSAGE_CHARACTER_BUDGET, logger65, TOOL_CALL_ID_CONTEXT_KEY, SEMANTIC_SEARCH_TOOL_NAME, AGENT_STORE_CONFLICT_HOOK_EVENT_NAME4, toolCallDuration, toolCallResult, rawToolCallInputTokens, duplicateInboundToolCallId, ToolCallStream, SimplePromptToolExecutor, RedactedPromptToolExecutor;
export { AGENT_STORE_CONFLICT_HOOK_EVENT_NAME4, RAW_ERROR_MESSAGE_CHARACTER_BUDGET, RedactedPromptToolExecutor, SEMANTIC_SEARCH_TOOL_NAME, SimplePromptToolExecutor, TOOL_CALL_ID_CONTEXT_KEY, ToolCallStream, completedToolResultsByDeferredError, duplicateInboundToolCallId, logger65, rawToolCallInputTokens, streamErrorsBeforeToolExecution, toolCallDuration, toolCallResult };
var __wakaru_init_tool_stream_executor_initialized = false;
export function init_tool_stream_executor() {
if (__wakaru_init_tool_stream_executor_initialized) return;
__wakaru_init_tool_stream_executor_initialized = true;
"use strict";
init_dist7();
init_dist8();
init_dist26();
init_dist();
init_dist30();
init_dist19();
init_dist4();
init_dist27();
init_dist3();
init_outbound_message_loop();
init_shim();
init_tool_step();
init_steer_idle_sample_preemption();
init_tool_call_events();
init_all_tools();
init_common9();
init_connect_error2();
init_core5();
init_dynamic_tool_argument_repair();
init_tool_call_name();
init_symbolic_tool_args();
init_tool_result_system_reminders();
init_event_tracking();
init_request_id();
completedToolResultsByDeferredError = new WeakMap();
streamErrorsBeforeToolExecution = new WeakSet();
RAW_ERROR_MESSAGE_CHARACTER_BUDGET = 2e4;
logger65 = createLogger("chat-inference/tool-call");
TOOL_CALL_ID_CONTEXT_KEY = createKey(Symbol("agent.toolCallId"), void 0);
SEMANTIC_SEARCH_TOOL_NAME = "semantic_search";
AGENT_STORE_CONFLICT_HOOK_EVENT_NAME4 = "agentStoreConflict";
toolCallDuration = createHistogram("tool_call.duration_ms", {
    description: "Duration of tool call execution in milliseconds",
    labelNames: [
        "toolName",
        "outcome",
        "team",
        "mcp_version",
        "clientversion",
        "clienttype",
        "remoteType",
        "isdynamic",
        "user.is_dev"
    ]
});
toolCallResult = createCounter("tool_call.result", {
    description: "Result status of tool call execution",
    labelNames: [
        "toolName",
        "outcome",
        "team",
        "mcp_version",
        "clientversion",
        "clienttype",
        "remoteType",
        "os",
        "issubagent",
        "isuserapikey",
        "isdynamic",
        "user.is_dev"
    ]
});
rawToolCallInputTokens = createHistogram("agent.tool_call.input_tokens", {
    description: "Approximate number of tokens in raw model-produced tool call arguments (argsText.length / 4)",
    labelNames: [
        "tool_name"
    ]
});
duplicateInboundToolCallId = createCounter("agent.duplicate_inbound_tool_call_id", {
    description: "Tool-call stream chunks whose id collided with an already-handled or in-flight tool call in the same model response",
    labelNames: [
        "chunkType",
        "disposition"
    ]
});
ToolCallStream = class {
    constructor(toolCallId, toolName, inner){
        this.lastInnerWrite = Promise.resolve();
        this.toolCallId = toolCallId;
        this.toolName = toolName;
        this.inner = inner;
        this.written = "";
        this.resolveCompletedArgs = ()=>{};
        this.resolveCompletedArgsText = ()=>{};
        this.completedArgs = new Promise((resolve36)=>{
            this.resolveCompletedArgs = resolve36;
        });
        this.completedArgsText = new Promise((resolve36)=>{
            this.resolveCompletedArgsText = resolve36;
        });
    }
    async write(ctx, chunk) {
        this.written += chunk;
        this.writePreview(chunk);
        this.forwardToInner(ctx, chunk);
    }
    async complete(ctx, fullValue) {
        const rest = fullValue.slice(this.written.length);
        if (rest.length > 0) {
            this.written += rest;
            this.writePreview(rest);
            this.forwardToInner(ctx, rest);
        }
    }
    resolveArgs(args) {
        this.resolveCompletedArgs(args);
    }
    resolveArgsText(argsText) {
        this.resolveCompletedArgsText(argsText);
    }
    async close() {
        const inner = this.inner;
        if (inner === void 0) {
            return;
        }
        void this.lastInnerWrite.then(()=>inner.close());
    }
    forwardToInner(ctx, chunk) {
        if (this.inner === void 0) {
            return;
        }
        this.lastInnerWrite = this.inner.write(chunk).catch((e)=>{
            if (e instanceof WriteIterableClosedError) {
                return;
            }
            logger65.error(ctx, "Error writing to tool call stream", e);
        });
    }
    writePreview(chunk) {
        try {
            this.previewArgsDelta?.(chunk);
        } catch  {
            this.previewArgsDelta = void 0;
        }
    }
};
SimplePromptToolExecutor = class {
    constructor(innerExecutor){
        this.innerExecutor = innerExecutor;
    }
    appendMessages(messages) {
        this.innerExecutor.appendMessages(messages);
        return this;
    }
    getState() {
        return this.innerExecutor.getState();
    }
    getMessages() {
        return this.innerExecutor.getMessages();
    }
    clearMessages() {
        this.innerExecutor.clearMessages();
    }
    executeToolStream(ctx, _state, interactionHandler, tools, extraT, recordToolCallResult, descriptionProps, firstToolCallHook) {
        return executeToolStream(ctx, this.innerExecutor, interactionHandler, tools, extraT, recordToolCallResult, descriptionProps, firstToolCallHook);
    }
    executeModelStreamOnly(ctx, _state, interactionHandler, tools, descriptionProps, firstToolCallHook) {
        return executeModelStreamOnly(ctx, this.innerExecutor, interactionHandler, tools, descriptionProps, firstToolCallHook);
    }
    stream(ctx, invocationId, tools, options2) {
        return this.innerExecutor.stream(ctx, invocationId, tools, options2);
    }
};
RedactedPromptToolExecutor = class {
    constructor(innerToolExecutor, privacyMode){
        this.innerToolExecutor = innerToolExecutor;
        this.privacyMode = privacyMode;
        this.redactedWrapperMemo = new WeakMap();
    }
    wrapStablePlainMessages(plainMessages) {
        return plainMessages.map((plainMessage)=>{
            const memoized = this.redactedWrapperMemo.get(plainMessage);
            if (memoized !== void 0) {
                return memoized;
            }
            const [wrapped] = toRedactedCoreMessages([
                plainMessage
            ], this.privacyMode);
            this.redactedWrapperMemo.set(plainMessage, wrapped);
            return wrapped;
        });
    }
    appendMessages(messages) {
        const arr = Array.isArray(messages) ? messages : [
            messages
        ];
        const plain = fromRedactedCoreMessages(arr, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
        for(let i = 0; i < plain.length; i++){
            const wrapper = arr[i];
            const plainMessage = plain[i];
            if (wrapper !== void 0 && plainMessage !== void 0) {
                this.redactedWrapperMemo.set(plainMessage, wrapper);
            }
        }
        this.innerToolExecutor.appendMessages(plain);
        return this;
    }
    getState() {
        return this.wrapStablePlainMessages(this.innerToolExecutor.getState());
    }
    getMessages() {
        return this.wrapStablePlainMessages(this.innerToolExecutor.getMessages());
    }
    clearMessages() {
        this.innerToolExecutor.clearMessages();
        this.redactedWrapperMemo = new WeakMap();
    }
    runWithToolCallEventRecorder(ctx, fn) {
        return this.innerToolExecutor.runWithToolCallEventRecorder === void 0 ? fn(ctx) : this.innerToolExecutor.runWithToolCallEventRecorder(ctx, fn);
    }
    executeToolStream(ctx, state, interactionHandler, tools, extraT, recordToolCallResult, descriptionProps, firstToolCallHook) {
        return this.innerToolExecutor.executeToolStream(ctx, state, interactionHandler, tools, extraT, recordToolCallResult, descriptionProps, firstToolCallHook);
    }
    executeModelStreamOnly(ctx, state, interactionHandler, tools, descriptionProps, firstToolCallHook) {
        return this.innerToolExecutor.executeModelStreamOnly(ctx, state, interactionHandler, tools, descriptionProps, firstToolCallHook);
    }
    stream(ctx, invocationId, tools, options2) {
        return this.innerToolExecutor.stream(ctx, invocationId, tools, options2);
    }
};

}
