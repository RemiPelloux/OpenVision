import { init_esm20 } from "../../../../../_a0bfa0c1d160da5255f5725e22e2e76b/node_modules/zod-to-json-schema/dist/esm/index.js";
import { init_dist23 } from "../../../../../_bc69990fa6a678cff6ea7a3f9b94be78/node_modules/@ai-sdk/provider-utils/dist/index.mjs";
var textStreamPart, errorStreamPart, assistantMessageStreamPart, assistantControlDataStreamPart, dataMessageStreamPart, assistantStreamParts, assistantStreamPartsByCode, StreamStringPrefixes, validCodes, textStreamPart2, dataStreamPart, errorStreamPart2, messageAnnotationsStreamPart, toolCallStreamPart, toolResultStreamPart, toolCallStreamingStartStreamPart, toolCallDeltaStreamPart, finishMessageStreamPart, finishStepStreamPart, startStepStreamPart, reasoningStreamPart, sourcePart, redactedReasoningStreamPart, reasoningSignatureStreamPart, fileStreamPart, dataStreamParts, dataStreamPartsByCode, DataStreamStringPrefixes, validCodes2, NEWLINE, NEWLINE2, schemaSymbol;
export { DataStreamStringPrefixes, NEWLINE, NEWLINE2, StreamStringPrefixes, assistantControlDataStreamPart, assistantMessageStreamPart, assistantStreamParts, assistantStreamPartsByCode, dataMessageStreamPart, dataStreamPart, dataStreamParts, dataStreamPartsByCode, errorStreamPart, errorStreamPart2, fileStreamPart, finishMessageStreamPart, finishStepStreamPart, messageAnnotationsStreamPart, reasoningSignatureStreamPart, reasoningStreamPart, redactedReasoningStreamPart, schemaSymbol, sourcePart, startStepStreamPart, textStreamPart, textStreamPart2, toolCallDeltaStreamPart, toolCallStreamPart, toolCallStreamingStartStreamPart, toolResultStreamPart, validCodes, validCodes2 };
var __wakaru_init_dist24_initialized = false;
export function init_dist24() {
if (__wakaru_init_dist24_initialized) return;
__wakaru_init_dist24_initialized = true;
init_dist23();
init_dist23();
init_dist23();
init_esm20();
textStreamPart = {
    code: "0",
    name: "text",
    parse: (value)=>{
        if (typeof value !== "string") {
            throw new Error('"text" parts expect a string value.');
        }
        return {
            type: "text",
            value
        };
    }
};
errorStreamPart = {
    code: "3",
    name: "error",
    parse: (value)=>{
        if (typeof value !== "string") {
            throw new Error('"error" parts expect a string value.');
        }
        return {
            type: "error",
            value
        };
    }
};
assistantMessageStreamPart = {
    code: "4",
    name: "assistant_message",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("id" in value) || !("role" in value) || !("content" in value) || typeof value.id !== "string" || typeof value.role !== "string" || value.role !== "assistant" || !Array.isArray(value.content) || !value.content.every((item)=>item != null && typeof item === "object" && "type" in item && item.type === "text" && "text" in item && item.text != null && typeof item.text === "object" && "value" in item.text && typeof item.text.value === "string")) {
            throw new Error('"assistant_message" parts expect an object with an "id", "role", and "content" property.');
        }
        return {
            type: "assistant_message",
            value
        };
    }
};
assistantControlDataStreamPart = {
    code: "5",
    name: "assistant_control_data",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("threadId" in value) || !("messageId" in value) || typeof value.threadId !== "string" || typeof value.messageId !== "string") {
            throw new Error('"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.');
        }
        return {
            type: "assistant_control_data",
            value: {
                threadId: value.threadId,
                messageId: value.messageId
            }
        };
    }
};
dataMessageStreamPart = {
    code: "6",
    name: "data_message",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("role" in value) || !("data" in value) || typeof value.role !== "string" || value.role !== "data") {
            throw new Error('"data_message" parts expect an object with a "role" and "data" property.');
        }
        return {
            type: "data_message",
            value
        };
    }
};
assistantStreamParts = [
    textStreamPart,
    errorStreamPart,
    assistantMessageStreamPart,
    assistantControlDataStreamPart,
    dataMessageStreamPart
];
assistantStreamPartsByCode = {
    [textStreamPart.code]: textStreamPart,
    [errorStreamPart.code]: errorStreamPart,
    [assistantMessageStreamPart.code]: assistantMessageStreamPart,
    [assistantControlDataStreamPart.code]: assistantControlDataStreamPart,
    [dataMessageStreamPart.code]: dataMessageStreamPart
};
StreamStringPrefixes = {
    [textStreamPart.name]: textStreamPart.code,
    [errorStreamPart.name]: errorStreamPart.code,
    [assistantMessageStreamPart.name]: assistantMessageStreamPart.code,
    [assistantControlDataStreamPart.name]: assistantControlDataStreamPart.code,
    [dataMessageStreamPart.name]: dataMessageStreamPart.code
};
validCodes = assistantStreamParts.map((part)=>part.code);
textStreamPart2 = {
    code: "0",
    name: "text",
    parse: (value)=>{
        if (typeof value !== "string") {
            throw new Error('"text" parts expect a string value.');
        }
        return {
            type: "text",
            value
        };
    }
};
dataStreamPart = {
    code: "2",
    name: "data",
    parse: (value)=>{
        if (!Array.isArray(value)) {
            throw new Error('"data" parts expect an array value.');
        }
        return {
            type: "data",
            value
        };
    }
};
errorStreamPart2 = {
    code: "3",
    name: "error",
    parse: (value)=>{
        if (typeof value !== "string") {
            throw new Error('"error" parts expect a string value.');
        }
        return {
            type: "error",
            value
        };
    }
};
messageAnnotationsStreamPart = {
    code: "8",
    name: "message_annotations",
    parse: (value)=>{
        if (!Array.isArray(value)) {
            throw new Error('"message_annotations" parts expect an array value.');
        }
        return {
            type: "message_annotations",
            value
        };
    }
};
toolCallStreamPart = {
    code: "9",
    name: "tool_call",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("toolCallId" in value) || typeof value.toolCallId !== "string" || !("toolName" in value) || typeof value.toolName !== "string" || !("args" in value) || typeof value.args !== "object") {
            throw new Error('"tool_call" parts expect an object with a "toolCallId", "toolName", and "args" property.');
        }
        return {
            type: "tool_call",
            value
        };
    }
};
toolResultStreamPart = {
    code: "a",
    name: "tool_result",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("toolCallId" in value) || typeof value.toolCallId !== "string" || !("result" in value)) {
            throw new Error('"tool_result" parts expect an object with a "toolCallId" and a "result" property.');
        }
        return {
            type: "tool_result",
            value
        };
    }
};
toolCallStreamingStartStreamPart = {
    code: "b",
    name: "tool_call_streaming_start",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("toolCallId" in value) || typeof value.toolCallId !== "string" || !("toolName" in value) || typeof value.toolName !== "string") {
            throw new Error('"tool_call_streaming_start" parts expect an object with a "toolCallId" and "toolName" property.');
        }
        return {
            type: "tool_call_streaming_start",
            value
        };
    }
};
toolCallDeltaStreamPart = {
    code: "c",
    name: "tool_call_delta",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("toolCallId" in value) || typeof value.toolCallId !== "string" || !("argsTextDelta" in value) || typeof value.argsTextDelta !== "string") {
            throw new Error('"tool_call_delta" parts expect an object with a "toolCallId" and "argsTextDelta" property.');
        }
        return {
            type: "tool_call_delta",
            value
        };
    }
};
finishMessageStreamPart = {
    code: "d",
    name: "finish_message",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("finishReason" in value) || typeof value.finishReason !== "string") {
            throw new Error('"finish_message" parts expect an object with a "finishReason" property.');
        }
        const result = {
            finishReason: value.finishReason
        };
        if ("usage" in value && value.usage != null && typeof value.usage === "object" && "promptTokens" in value.usage && "completionTokens" in value.usage) {
            result.usage = {
                promptTokens: typeof value.usage.promptTokens === "number" ? value.usage.promptTokens : Number.NaN,
                completionTokens: typeof value.usage.completionTokens === "number" ? value.usage.completionTokens : Number.NaN
            };
        }
        return {
            type: "finish_message",
            value: result
        };
    }
};
finishStepStreamPart = {
    code: "e",
    name: "finish_step",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("finishReason" in value) || typeof value.finishReason !== "string") {
            throw new Error('"finish_step" parts expect an object with a "finishReason" property.');
        }
        const result = {
            finishReason: value.finishReason,
            isContinued: false
        };
        if ("usage" in value && value.usage != null && typeof value.usage === "object" && "promptTokens" in value.usage && "completionTokens" in value.usage) {
            result.usage = {
                promptTokens: typeof value.usage.promptTokens === "number" ? value.usage.promptTokens : Number.NaN,
                completionTokens: typeof value.usage.completionTokens === "number" ? value.usage.completionTokens : Number.NaN
            };
        }
        if ("isContinued" in value && typeof value.isContinued === "boolean") {
            result.isContinued = value.isContinued;
        }
        return {
            type: "finish_step",
            value: result
        };
    }
};
startStepStreamPart = {
    code: "f",
    name: "start_step",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("messageId" in value) || typeof value.messageId !== "string") {
            throw new Error('"start_step" parts expect an object with an "id" property.');
        }
        return {
            type: "start_step",
            value: {
                messageId: value.messageId
            }
        };
    }
};
reasoningStreamPart = {
    code: "g",
    name: "reasoning",
    parse: (value)=>{
        if (typeof value !== "string") {
            throw new Error('"reasoning" parts expect a string value.');
        }
        return {
            type: "reasoning",
            value
        };
    }
};
sourcePart = {
    code: "h",
    name: "source",
    parse: (value)=>{
        if (value == null || typeof value !== "object") {
            throw new Error('"source" parts expect a Source object.');
        }
        return {
            type: "source",
            value
        };
    }
};
redactedReasoningStreamPart = {
    code: "i",
    name: "redacted_reasoning",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("data" in value) || typeof value.data !== "string") {
            throw new Error('"redacted_reasoning" parts expect an object with a "data" property.');
        }
        return {
            type: "redacted_reasoning",
            value: {
                data: value.data
            }
        };
    }
};
reasoningSignatureStreamPart = {
    code: "j",
    name: "reasoning_signature",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("signature" in value) || typeof value.signature !== "string") {
            throw new Error('"reasoning_signature" parts expect an object with a "signature" property.');
        }
        return {
            type: "reasoning_signature",
            value: {
                signature: value.signature
            }
        };
    }
};
fileStreamPart = {
    code: "k",
    name: "file",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("data" in value) || typeof value.data !== "string" || !("mimeType" in value) || typeof value.mimeType !== "string") {
            throw new Error('"file" parts expect an object with a "data" and "mimeType" property.');
        }
        return {
            type: "file",
            value
        };
    }
};
dataStreamParts = [
    textStreamPart2,
    dataStreamPart,
    errorStreamPart2,
    messageAnnotationsStreamPart,
    toolCallStreamPart,
    toolResultStreamPart,
    toolCallStreamingStartStreamPart,
    toolCallDeltaStreamPart,
    finishMessageStreamPart,
    finishStepStreamPart,
    startStepStreamPart,
    reasoningStreamPart,
    sourcePart,
    redactedReasoningStreamPart,
    reasoningSignatureStreamPart,
    fileStreamPart
];
dataStreamPartsByCode = Object.fromEntries(dataStreamParts.map((part)=>[
        part.code,
        part
    ]));
DataStreamStringPrefixes = Object.fromEntries(dataStreamParts.map((part)=>[
        part.name,
        part.code
    ]));
validCodes2 = dataStreamParts.map((part)=>part.code);
NEWLINE = "\n".charCodeAt(0);
NEWLINE2 = "\n".charCodeAt(0);
schemaSymbol = Symbol.for("vercel.ai.schema");

}
