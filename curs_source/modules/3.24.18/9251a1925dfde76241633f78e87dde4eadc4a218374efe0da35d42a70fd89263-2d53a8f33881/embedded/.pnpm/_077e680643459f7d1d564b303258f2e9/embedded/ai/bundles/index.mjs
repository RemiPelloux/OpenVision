import { external_exports } from "../../../../../../external_exports.js";
import { _retryWithExponentialBackoff, addLanguageModelUsage, asReasoningText, asSchema, assembleOperationName, consumeStream, convertBase64ToUint8Array, convertToLanguageModelPrompt, convertUint8ArrayToBase64, createAsyncIterableStream, createOutputTransformStream, createStitchableStream, formatDataStreamPart, getBaseTelemetryAttributes, getErrorMessage2, getTracer2, injectJsonInstruction, mergeIntoDataStream, mergeIntoDataStream2, mergeStreams, parsePartialJson, prepareCallSettings, prepareOutgoingHttpHeaders, prepareResponseHeaders, prepareRetries, prepareToolsAndToolChoice, recordSpan, runToolsTransformation, safeParseJSON, safeValidateTypes, selectTelemetryAttributes, splitOnLastWhitespace, standardizePrompt, stringifyForTelemetry, toDataStream, toDataStream2, toDataStreamResponse, toDataStreamResponse2, toResponseMessages, writeToServerResponse } from "../../../../../../mcp_sandbox_policy_exports.js";
import { AISDKError, init_dist22 } from "../../../../@ai-sdk+provider@1.1.3/node_modules/@ai-sdk/provider/dist/index.mjs";
import { init_esm } from "../../../../@opentelemetry+api@1.9.0/node_modules/@opentelemetry/api/build/esm/index.js";
import { init_dist24 } from "../../../../_b4e8874b91b48495c9b116ea44b9e8f1/node_modules/@ai-sdk/ui-utils/dist/index.mjs";
import { createIdGenerator, init_dist23 } from "../../../../_bc69990fa6a678cff6ea7a3f9b94be78/node_modules/@ai-sdk/provider-utils/dist/index.mjs";
import { init_zod } from "../../../../zod@3.25.76/node_modules/zod/index.js";
var __defProp2, __export2, name14, marker15, symbol15, _a15, InvalidArgumentError2, name22, marker22, symbol22, _a23, RetryError, retryWithExponentialBackoff, noopTracer, noopSpan, noopSpanContext, name32, marker32, symbol32, _a33, DefaultGeneratedFile, DefaultGeneratedFileWithType, imageMimeTypeSignatures, stripID3, name42, marker42, symbol42, _a42, NoObjectGeneratedError, name52, marker52, symbol52, _a52, DownloadError, name62, marker62, symbol62, _a62, InvalidDataContentError, dataContentSchema, name72, marker72, symbol72, _a72, InvalidMessageRoleError, name82, marker82, symbol82, _a82, MessageConversionError, jsonValueSchema, providerMetadataSchema, toolResultContentSchema, textPartSchema, imagePartSchema, filePartSchema, reasoningPartSchema, redactedReasoningPartSchema, toolCallPartSchema, toolResultPartSchema, coreSystemMessageSchema, coreUserMessageSchema, coreAssistantMessageSchema, coreToolMessageSchema, coreMessageSchema, DEFAULT_SCHEMA_PREFIX, DEFAULT_SCHEMA_SUFFIX, DEFAULT_GENERIC_SUFFIX, originalGenerateId, DelayedPromise, originalGenerateId2, name92, marker92, symbol92, _a92, NoOutputSpecifiedError, name102, marker102, symbol102, _a102, ToolExecutionError, lastWhitespaceRegexp, name112, marker112, symbol112, _a112, InvalidToolArgumentsError, name122, marker122, symbol122, _a122, NoSuchToolError, name132, marker132, symbol132, _a132, ToolCallRepairError, originalGenerateId3, originalGenerateMessageId, output_exports, name142, marker142, symbol142, _a142, InvalidStreamPartError, name15, marker152, symbol152, _a152, text, object3, originalGenerateId4, originalGenerateMessageId2, DefaultStreamTextResult, name16, marker16, symbol16, _a16, ClientOrServerImplementationSchema, BaseParamsSchema, ResultSchema2, RequestSchema2, ServerCapabilitiesSchema2, InitializeResultSchema2, PaginatedResultSchema2, ToolSchema2, ListToolsResultSchema2, TextContentSchema2, ImageContentSchema2, ResourceContentsSchema2, TextResourceContentsSchema2, BlobResourceContentsSchema2, EmbeddedResourceSchema2, CallToolResultSchema2, JSONRPC_VERSION2, JSONRPCRequestSchema2, JSONRPCResponseSchema2, JSONRPCErrorSchema, JSONRPCNotificationSchema2, JSONRPCMessageSchema2, langchain_adapter_exports, llamaindex_adapter_exports, HANGING_STREAM_WARNING_TIME_MS;
export { BaseParamsSchema, BlobResourceContentsSchema2, CallToolResultSchema2, ClientOrServerImplementationSchema, DEFAULT_GENERIC_SUFFIX, DEFAULT_SCHEMA_PREFIX, DEFAULT_SCHEMA_SUFFIX, DefaultGeneratedFile, DefaultGeneratedFileWithType, DefaultStreamTextResult, DelayedPromise, DownloadError, EmbeddedResourceSchema2, HANGING_STREAM_WARNING_TIME_MS, ImageContentSchema2, InitializeResultSchema2, InvalidArgumentError2, InvalidDataContentError, InvalidMessageRoleError, InvalidStreamPartError, InvalidToolArgumentsError, JSONRPCErrorSchema, JSONRPCMessageSchema2, JSONRPCNotificationSchema2, JSONRPCRequestSchema2, JSONRPCResponseSchema2, JSONRPC_VERSION2, ListToolsResultSchema2, MessageConversionError, NoObjectGeneratedError, NoOutputSpecifiedError, NoSuchToolError, PaginatedResultSchema2, RequestSchema2, ResourceContentsSchema2, ResultSchema2, RetryError, ServerCapabilitiesSchema2, TextContentSchema2, TextResourceContentsSchema2, ToolCallRepairError, ToolExecutionError, ToolSchema2, __defProp2, __export2, _a102, _a112, _a122, _a132, _a142, _a15, _a152, _a16, _a23, _a33, _a42, _a52, _a62, _a72, _a82, _a92, coreAssistantMessageSchema, coreMessageSchema, coreSystemMessageSchema, coreToolMessageSchema, coreUserMessageSchema, dataContentSchema, filePartSchema, imageMimeTypeSignatures, imagePartSchema, jsonValueSchema, langchain_adapter_exports, lastWhitespaceRegexp, llamaindex_adapter_exports, marker102, marker112, marker122, marker132, marker142, marker15, marker152, marker16, marker22, marker32, marker42, marker52, marker62, marker72, marker82, marker92, name102, name112, name122, name132, name14, name142, name15, name16, name22, name32, name42, name52, name62, name72, name82, name92, noopSpan, noopSpanContext, noopTracer, object3, originalGenerateId, originalGenerateId2, originalGenerateId3, originalGenerateId4, originalGenerateMessageId, originalGenerateMessageId2, output_exports, providerMetadataSchema, reasoningPartSchema, redactedReasoningPartSchema, retryWithExponentialBackoff, stripID3, symbol102, symbol112, symbol122, symbol132, symbol142, symbol15, symbol152, symbol16, symbol22, symbol32, symbol42, symbol52, symbol62, symbol72, symbol82, symbol92, text, textPartSchema, toolCallPartSchema, toolResultContentSchema, toolResultPartSchema };
var __wakaru_init_dist25_initialized = false;
export function init_dist25() {
if (__wakaru_init_dist25_initialized) return;
__wakaru_init_dist25_initialized = true;
init_dist24();
init_dist22();
init_dist22();
init_dist23();
init_dist22();
init_esm();
init_esm();
init_dist23();
init_dist23();
init_dist23();
init_dist22();
init_dist22();
init_dist23();
init_dist22();
init_zod();
init_dist22();
init_dist22();
init_dist23();
init_zod();
init_dist22();
init_zod();
init_zod();
init_zod();
init_zod();
init_zod();
init_dist23();
init_dist23();
init_dist22();
init_dist22();
init_dist24();
init_dist23();
init_dist24();
init_dist22();
init_dist22();
init_dist22();
init_dist23();
init_dist24();
init_dist22();
init_dist22();
init_dist22();
init_dist23();
init_dist24();
init_dist24();
init_zod();
init_zod();
init_dist24();
init_dist23();
init_dist24();
__defProp2 = Object.defineProperty;
__export2 = (target, all)=>{
    for(var name17 in all)__defProp2(target, name17, {
        get: all[name17],
        enumerable: true
    });
};
name14 = "AI_InvalidArgumentError";
marker15 = `vercel.ai.error.${name14}`;
symbol15 = Symbol.for(marker15);
InvalidArgumentError2 = class extends AISDKError {
    constructor({ parameter, value, message }){
        super({
            name: name14,
            message: `Invalid argument for parameter ${parameter}: ${message}`
        });
        this[_a15] = true;
        this.parameter = parameter;
        this.value = value;
    }
    static isInstance(error3) {
        return AISDKError.hasMarker(error3, marker15);
    }
};
_a15 = symbol15;
name22 = "AI_RetryError";
marker22 = `vercel.ai.error.${name22}`;
symbol22 = Symbol.for(marker22);
RetryError = class extends AISDKError {
    constructor({ message, reason, errors }){
        super({
            name: name22,
            message
        });
        this[_a23] = true;
        this.reason = reason;
        this.errors = errors;
        this.lastError = errors[errors.length - 1];
    }
    static isInstance(error3) {
        return AISDKError.hasMarker(error3, marker22);
    }
};
_a23 = symbol22;
retryWithExponentialBackoff = ({ maxRetries = 2, initialDelayInMs = 2e3, backoffFactor = 2 } = {})=>async (f2)=>_retryWithExponentialBackoff(f2, {
            maxRetries,
            delayInMs: initialDelayInMs,
            backoffFactor
        });
noopTracer = {
    startSpan () {
        return noopSpan;
    },
    startActiveSpan (name17, arg1, arg2, arg3) {
        if (typeof arg1 === "function") {
            return arg1(noopSpan);
        }
        if (typeof arg2 === "function") {
            return arg2(noopSpan);
        }
        if (typeof arg3 === "function") {
            return arg3(noopSpan);
        }
    }
};
noopSpan = {
    spanContext () {
        return noopSpanContext;
    },
    setAttribute () {
        return this;
    },
    setAttributes () {
        return this;
    },
    addEvent () {
        return this;
    },
    addLink () {
        return this;
    },
    addLinks () {
        return this;
    },
    setStatus () {
        return this;
    },
    updateName () {
        return this;
    },
    end () {
        return this;
    },
    isRecording () {
        return false;
    },
    recordException () {
        return this;
    }
};
noopSpanContext = {
    traceId: "",
    spanId: "",
    traceFlags: 0
};
name32 = "AI_NoImageGeneratedError";
marker32 = `vercel.ai.error.${name32}`;
symbol32 = Symbol.for(marker32);
_a33 = symbol32;
DefaultGeneratedFile = class {
    constructor({ data, mimeType }){
        const isUint8Array = data instanceof Uint8Array;
        this.base64Data = isUint8Array ? void 0 : data;
        this.uint8ArrayData = isUint8Array ? data : void 0;
        this.mimeType = mimeType;
    }
    get base64() {
        if (this.base64Data == null) {
            this.base64Data = convertUint8ArrayToBase64(this.uint8ArrayData);
        }
        return this.base64Data;
    }
    get uint8Array() {
        if (this.uint8ArrayData == null) {
            this.uint8ArrayData = convertBase64ToUint8Array(this.base64Data);
        }
        return this.uint8ArrayData;
    }
};
DefaultGeneratedFileWithType = class extends DefaultGeneratedFile {
    constructor(options2){
        super(options2);
        this.type = "file";
    }
};
imageMimeTypeSignatures = [
    {
        mimeType: "image/gif",
        bytesPrefix: [
            71,
            73,
            70
        ],
        base64Prefix: "R0lG"
    },
    {
        mimeType: "image/png",
        bytesPrefix: [
            137,
            80,
            78,
            71
        ],
        base64Prefix: "iVBORw"
    },
    {
        mimeType: "image/jpeg",
        bytesPrefix: [
            255,
            216
        ],
        base64Prefix: "/9j/"
    },
    {
        mimeType: "image/webp",
        bytesPrefix: [
            82,
            73,
            70,
            70
        ],
        base64Prefix: "UklGRg"
    },
    {
        mimeType: "image/bmp",
        bytesPrefix: [
            66,
            77
        ],
        base64Prefix: "Qk"
    },
    {
        mimeType: "image/tiff",
        bytesPrefix: [
            73,
            73,
            42,
            0
        ],
        base64Prefix: "SUkqAA"
    },
    {
        mimeType: "image/tiff",
        bytesPrefix: [
            77,
            77,
            0,
            42
        ],
        base64Prefix: "TU0AKg"
    },
    {
        mimeType: "image/avif",
        bytesPrefix: [
            0,
            0,
            0,
            32,
            102,
            116,
            121,
            112,
            97,
            118,
            105,
            102
        ],
        base64Prefix: "AAAAIGZ0eXBhdmlm"
    },
    {
        mimeType: "image/heic",
        bytesPrefix: [
            0,
            0,
            0,
            32,
            102,
            116,
            121,
            112,
            104,
            101,
            105,
            99
        ],
        base64Prefix: "AAAAIGZ0eXBoZWlj"
    }
];
stripID3 = (data)=>{
    const bytes = typeof data === "string" ? convertBase64ToUint8Array(data) : data;
    const id3Size = (bytes[6] & 127) << 21 | (bytes[7] & 127) << 14 | (bytes[8] & 127) << 7 | bytes[9] & 127;
    return bytes.slice(id3Size + 10);
};
name42 = "AI_NoObjectGeneratedError";
marker42 = `vercel.ai.error.${name42}`;
symbol42 = Symbol.for(marker42);
NoObjectGeneratedError = class extends AISDKError {
    constructor({ message = "No object generated.", cause, text: text22, response, usage, finishReason }){
        super({
            name: name42,
            message,
            cause
        });
        this[_a42] = true;
        this.text = text22;
        this.response = response;
        this.usage = usage;
        this.finishReason = finishReason;
    }
    static isInstance(error3) {
        return AISDKError.hasMarker(error3, marker42);
    }
};
_a42 = symbol42;
name52 = "AI_DownloadError";
marker52 = `vercel.ai.error.${name52}`;
symbol52 = Symbol.for(marker52);
DownloadError = class extends AISDKError {
    constructor({ url: url2, statusCode, statusText, cause, message = cause == null ? `Failed to download ${url2}: ${statusCode} ${statusText}` : `Failed to download ${url2}: ${cause}` }){
        super({
            name: name52,
            message,
            cause
        });
        this[_a52] = true;
        this.url = url2;
        this.statusCode = statusCode;
        this.statusText = statusText;
    }
    static isInstance(error3) {
        return AISDKError.hasMarker(error3, marker52);
    }
};
_a52 = symbol52;
name62 = "AI_InvalidDataContentError";
marker62 = `vercel.ai.error.${name62}`;
symbol62 = Symbol.for(marker62);
InvalidDataContentError = class extends AISDKError {
    constructor({ content, cause, message = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof content}.` }){
        super({
            name: name62,
            message,
            cause
        });
        this[_a62] = true;
        this.content = content;
    }
    static isInstance(error3) {
        return AISDKError.hasMarker(error3, marker62);
    }
};
_a62 = symbol62;
dataContentSchema = external_exports.union([
    external_exports.string(),
    external_exports.instanceof(Uint8Array),
    external_exports.instanceof(ArrayBuffer),
    external_exports.custom((value)=>{
        var _a172, _b2;
        return (_b2 = (_a172 = globalThis.Buffer) == null ? void 0 : _a172.isBuffer(value)) != null ? _b2 : false;
    }, {
        message: "Must be a Buffer"
    })
]);
name72 = "AI_InvalidMessageRoleError";
marker72 = `vercel.ai.error.${name72}`;
symbol72 = Symbol.for(marker72);
InvalidMessageRoleError = class extends AISDKError {
    constructor({ role, message = `Invalid message role: '${role}'. Must be one of: "system", "user", "assistant", "tool".` }){
        super({
            name: name72,
            message
        });
        this[_a72] = true;
        this.role = role;
    }
    static isInstance(error3) {
        return AISDKError.hasMarker(error3, marker72);
    }
};
_a72 = symbol72;
name82 = "AI_MessageConversionError";
marker82 = `vercel.ai.error.${name82}`;
symbol82 = Symbol.for(marker82);
MessageConversionError = class extends AISDKError {
    constructor({ originalMessage, message }){
        super({
            name: name82,
            message
        });
        this[_a82] = true;
        this.originalMessage = originalMessage;
    }
    static isInstance(error3) {
        return AISDKError.hasMarker(error3, marker82);
    }
};
_a82 = symbol82;
jsonValueSchema = external_exports.lazy(()=>external_exports.union([
        external_exports.null(),
        external_exports.string(),
        external_exports.number(),
        external_exports.boolean(),
        external_exports.record(external_exports.string(), jsonValueSchema),
        external_exports.array(jsonValueSchema)
    ]));
providerMetadataSchema = external_exports.record(external_exports.string(), external_exports.record(external_exports.string(), jsonValueSchema));
toolResultContentSchema = external_exports.array(external_exports.union([
    external_exports.object({
        type: external_exports.literal("text"),
        text: external_exports.string()
    }),
    external_exports.object({
        type: external_exports.literal("image"),
        data: external_exports.string(),
        mimeType: external_exports.string().optional()
    })
]));
textPartSchema = external_exports.object({
    type: external_exports.literal("text"),
    text: external_exports.string(),
    providerOptions: providerMetadataSchema.optional(),
    experimental_providerMetadata: providerMetadataSchema.optional()
});
imagePartSchema = external_exports.object({
    type: external_exports.literal("image"),
    image: external_exports.union([
        dataContentSchema,
        external_exports.instanceof(URL)
    ]),
    mimeType: external_exports.string().optional(),
    providerOptions: providerMetadataSchema.optional(),
    experimental_providerMetadata: providerMetadataSchema.optional()
});
filePartSchema = external_exports.object({
    type: external_exports.literal("file"),
    data: external_exports.union([
        dataContentSchema,
        external_exports.instanceof(URL)
    ]),
    filename: external_exports.string().optional(),
    mimeType: external_exports.string(),
    providerOptions: providerMetadataSchema.optional(),
    experimental_providerMetadata: providerMetadataSchema.optional()
});
reasoningPartSchema = external_exports.object({
    type: external_exports.literal("reasoning"),
    text: external_exports.string(),
    providerOptions: providerMetadataSchema.optional(),
    experimental_providerMetadata: providerMetadataSchema.optional()
});
redactedReasoningPartSchema = external_exports.object({
    type: external_exports.literal("redacted-reasoning"),
    data: external_exports.string(),
    providerOptions: providerMetadataSchema.optional(),
    experimental_providerMetadata: providerMetadataSchema.optional()
});
toolCallPartSchema = external_exports.object({
    type: external_exports.literal("tool-call"),
    toolCallId: external_exports.string(),
    toolName: external_exports.string(),
    args: external_exports.unknown(),
    providerOptions: providerMetadataSchema.optional(),
    experimental_providerMetadata: providerMetadataSchema.optional()
});
toolResultPartSchema = external_exports.object({
    type: external_exports.literal("tool-result"),
    toolCallId: external_exports.string(),
    toolName: external_exports.string(),
    result: external_exports.unknown(),
    content: toolResultContentSchema.optional(),
    isError: external_exports.boolean().optional(),
    providerOptions: providerMetadataSchema.optional(),
    experimental_providerMetadata: providerMetadataSchema.optional()
});
coreSystemMessageSchema = external_exports.object({
    role: external_exports.literal("system"),
    content: external_exports.string(),
    providerOptions: providerMetadataSchema.optional(),
    experimental_providerMetadata: providerMetadataSchema.optional()
});
coreUserMessageSchema = external_exports.object({
    role: external_exports.literal("user"),
    content: external_exports.union([
        external_exports.string(),
        external_exports.array(external_exports.union([
            textPartSchema,
            imagePartSchema,
            filePartSchema
        ]))
    ]),
    providerOptions: providerMetadataSchema.optional(),
    experimental_providerMetadata: providerMetadataSchema.optional()
});
coreAssistantMessageSchema = external_exports.object({
    role: external_exports.literal("assistant"),
    content: external_exports.union([
        external_exports.string(),
        external_exports.array(external_exports.union([
            textPartSchema,
            filePartSchema,
            reasoningPartSchema,
            redactedReasoningPartSchema,
            toolCallPartSchema
        ]))
    ]),
    providerOptions: providerMetadataSchema.optional(),
    experimental_providerMetadata: providerMetadataSchema.optional()
});
coreToolMessageSchema = external_exports.object({
    role: external_exports.literal("tool"),
    content: external_exports.array(toolResultPartSchema),
    providerOptions: providerMetadataSchema.optional(),
    experimental_providerMetadata: providerMetadataSchema.optional()
});
coreMessageSchema = external_exports.union([
    coreSystemMessageSchema,
    coreUserMessageSchema,
    coreAssistantMessageSchema,
    coreToolMessageSchema
]);
DEFAULT_SCHEMA_PREFIX = "JSON schema:";
DEFAULT_SCHEMA_SUFFIX = "You MUST answer with a JSON object that matches the JSON schema above.";
DEFAULT_GENERIC_SUFFIX = "You MUST answer with JSON.";
originalGenerateId = createIdGenerator({
    prefix: "aiobj",
    size: 24
});
DelayedPromise = class {
    constructor(){
        this.status = {
            type: "pending"
        };
        this._resolve = void 0;
        this._reject = void 0;
    }
    get value() {
        if (this.promise) {
            return this.promise;
        }
        this.promise = new Promise((resolve36, reject2)=>{
            if (this.status.type === "resolved") {
                resolve36(this.status.value);
            } else if (this.status.type === "rejected") {
                reject2(this.status.error);
            }
            this._resolve = resolve36;
            this._reject = reject2;
        });
        return this.promise;
    }
    resolve(value) {
        var _a172;
        this.status = {
            type: "resolved",
            value
        };
        if (this.promise) {
            (_a172 = this._resolve) == null ? void 0 : _a172.call(this, value);
        }
    }
    reject(error3) {
        var _a172;
        this.status = {
            type: "rejected",
            error: error3
        };
        if (this.promise) {
            (_a172 = this._reject) == null ? void 0 : _a172.call(this, error3);
        }
    }
};
originalGenerateId2 = createIdGenerator({
    prefix: "aiobj",
    size: 24
});
name92 = "AI_NoOutputSpecifiedError";
marker92 = `vercel.ai.error.${name92}`;
symbol92 = Symbol.for(marker92);
NoOutputSpecifiedError = class extends AISDKError {
    constructor({ message = "No output specified." } = {}){
        super({
            name: name92,
            message
        });
        this[_a92] = true;
    }
    static isInstance(error3) {
        return AISDKError.hasMarker(error3, marker92);
    }
};
_a92 = symbol92;
name102 = "AI_ToolExecutionError";
marker102 = `vercel.ai.error.${name102}`;
symbol102 = Symbol.for(marker102);
ToolExecutionError = class extends AISDKError {
    constructor({ toolArgs, toolName, toolCallId, cause, message = `Error executing tool ${toolName}: ${getErrorMessage2(cause)}` }){
        super({
            name: name102,
            message,
            cause
        });
        this[_a102] = true;
        this.toolArgs = toolArgs;
        this.toolName = toolName;
        this.toolCallId = toolCallId;
    }
    static isInstance(error3) {
        return AISDKError.hasMarker(error3, marker102);
    }
};
_a102 = symbol102;
lastWhitespaceRegexp = /^([\s\S]*?)(\s+)(\S*)$/;
name112 = "AI_InvalidToolArgumentsError";
marker112 = `vercel.ai.error.${name112}`;
symbol112 = Symbol.for(marker112);
InvalidToolArgumentsError = class extends AISDKError {
    constructor({ toolArgs, toolName, cause, message = `Invalid arguments for tool ${toolName}: ${getErrorMessage2(cause)}` }){
        super({
            name: name112,
            message,
            cause
        });
        this[_a112] = true;
        this.toolArgs = toolArgs;
        this.toolName = toolName;
    }
    static isInstance(error3) {
        return AISDKError.hasMarker(error3, marker112);
    }
};
_a112 = symbol112;
name122 = "AI_NoSuchToolError";
marker122 = `vercel.ai.error.${name122}`;
symbol122 = Symbol.for(marker122);
NoSuchToolError = class extends AISDKError {
    constructor({ toolName, availableTools = void 0, message = `Model tried to call unavailable tool '${toolName}'. ${availableTools === void 0 ? "No tools are available." : `Available tools: ${availableTools.join(", ")}.`}` }){
        super({
            name: name122,
            message
        });
        this[_a122] = true;
        this.toolName = toolName;
        this.availableTools = availableTools;
    }
    static isInstance(error3) {
        return AISDKError.hasMarker(error3, marker122);
    }
};
_a122 = symbol122;
name132 = "AI_ToolCallRepairError";
marker132 = `vercel.ai.error.${name132}`;
symbol132 = Symbol.for(marker132);
ToolCallRepairError = class extends AISDKError {
    constructor({ cause, originalError, message = `Error repairing tool call: ${getErrorMessage2(cause)}` }){
        super({
            name: name132,
            message,
            cause
        });
        this[_a132] = true;
        this.originalError = originalError;
    }
    static isInstance(error3) {
        return AISDKError.hasMarker(error3, marker132);
    }
};
_a132 = symbol132;
originalGenerateId3 = createIdGenerator({
    prefix: "aitxt",
    size: 24
});
originalGenerateMessageId = createIdGenerator({
    prefix: "msg",
    size: 24
});
output_exports = {};
__export2(output_exports, {
    object: ()=>object3,
    text: ()=>text
});
name142 = "AI_InvalidStreamPartError";
marker142 = `vercel.ai.error.${name142}`;
symbol142 = Symbol.for(marker142);
InvalidStreamPartError = class extends AISDKError {
    constructor({ chunk, message }){
        super({
            name: name142,
            message
        });
        this[_a142] = true;
        this.chunk = chunk;
    }
    static isInstance(error3) {
        return AISDKError.hasMarker(error3, marker142);
    }
};
_a142 = symbol142;
name15 = "AI_MCPClientError";
marker152 = `vercel.ai.error.${name15}`;
symbol152 = Symbol.for(marker152);
_a152 = symbol152;
text = ()=>({
        type: "text",
        responseFormat: ()=>({
                type: "text"
            }),
        injectIntoSystemPrompt ({ system }) {
            return system;
        },
        parsePartial ({ text: text22 }) {
            return {
                partial: text22
            };
        },
        parseOutput ({ text: text22 }) {
            return text22;
        }
    });
object3 = ({ schema: inputSchema })=>{
    const schema2 = asSchema(inputSchema);
    return {
        type: "object",
        responseFormat: ({ model })=>({
                type: "json",
                schema: model.supportsStructuredOutputs ? schema2.jsonSchema : void 0
            }),
        injectIntoSystemPrompt ({ system, model }) {
            return model.supportsStructuredOutputs ? system : injectJsonInstruction({
                prompt: system,
                schema: schema2.jsonSchema
            });
        },
        parsePartial ({ text: text22 }) {
            const result = parsePartialJson(text22);
            switch(result.state){
                case "failed-parse":
                case "undefined-input":
                    return void 0;
                case "repaired-parse":
                case "successful-parse":
                    return {
                        partial: result.value
                    };
                default:
                    {
                        const _exhaustiveCheck = result.state;
                        throw new Error(`Unsupported parse state: ${_exhaustiveCheck}`);
                    }
            }
        },
        parseOutput ({ text: text22 }, context2) {
            const parseResult = safeParseJSON({
                text: text22
            });
            if (!parseResult.success) {
                throw new NoObjectGeneratedError({
                    message: "No object generated: could not parse the response.",
                    cause: parseResult.error,
                    text: text22,
                    response: context2.response,
                    usage: context2.usage,
                    finishReason: context2.finishReason
                });
            }
            const validationResult = safeValidateTypes({
                value: parseResult.value,
                schema: schema2
            });
            if (!validationResult.success) {
                throw new NoObjectGeneratedError({
                    message: "No object generated: response did not match schema.",
                    cause: validationResult.error,
                    text: text22,
                    response: context2.response,
                    usage: context2.usage,
                    finishReason: context2.finishReason
                });
            }
            return validationResult.value;
        }
    };
};
originalGenerateId4 = createIdGenerator({
    prefix: "aitxt",
    size: 24
});
originalGenerateMessageId2 = createIdGenerator({
    prefix: "msg",
    size: 24
});
DefaultStreamTextResult = class {
    constructor({ model, telemetry, headers, settings, maxRetries: maxRetriesArg, abortSignal, system, prompt, messages, tools, toolChoice, toolCallStreaming, transforms, activeTools, repairToolCall, maxSteps, output, continueSteps, providerOptions, now: now2, currentDate, generateId: generateId3, generateMessageId, onChunk, onError, onFinish, onStepFinish }){
        this.warningsPromise = new DelayedPromise();
        this.usagePromise = new DelayedPromise();
        this.finishReasonPromise = new DelayedPromise();
        this.providerMetadataPromise = new DelayedPromise();
        this.textPromise = new DelayedPromise();
        this.reasoningPromise = new DelayedPromise();
        this.reasoningDetailsPromise = new DelayedPromise();
        this.sourcesPromise = new DelayedPromise();
        this.filesPromise = new DelayedPromise();
        this.toolCallsPromise = new DelayedPromise();
        this.toolResultsPromise = new DelayedPromise();
        this.requestPromise = new DelayedPromise();
        this.responsePromise = new DelayedPromise();
        this.stepsPromise = new DelayedPromise();
        var _a172;
        if (maxSteps < 1) {
            throw new InvalidArgumentError2({
                parameter: "maxSteps",
                value: maxSteps,
                message: "maxSteps must be at least 1"
            });
        }
        this.output = output;
        let recordedStepText = "";
        let recordedContinuationText = "";
        let recordedFullText = "";
        let stepReasoning = [];
        let stepFiles = [];
        let activeReasoningText = void 0;
        let recordedStepSources = [];
        const recordedSources = [];
        const recordedResponse = {
            id: generateId3(),
            timestamp: currentDate(),
            modelId: model.modelId,
            messages: []
        };
        let recordedToolCalls = [];
        let recordedToolResults = [];
        let recordedFinishReason = void 0;
        let recordedUsage = void 0;
        let stepType = "initial";
        const recordedSteps = [];
        let rootSpan;
        const eventProcessor = new TransformStream({
            async transform (chunk, controller) {
                controller.enqueue(chunk);
                const { part } = chunk;
                if (part.type === "text-delta" || part.type === "reasoning" || part.type === "source" || part.type === "tool-call" || part.type === "tool-result" || part.type === "tool-call-streaming-start" || part.type === "tool-call-delta") {
                    await (onChunk == null ? void 0 : onChunk({
                        chunk: part
                    }));
                }
                if (part.type === "error") {
                    await (onError == null ? void 0 : onError({
                        error: part.error
                    }));
                }
                if (part.type === "text-delta") {
                    recordedStepText += part.textDelta;
                    recordedContinuationText += part.textDelta;
                    recordedFullText += part.textDelta;
                }
                if (part.type === "reasoning") {
                    if (activeReasoningText == null) {
                        activeReasoningText = {
                            type: "text",
                            text: part.textDelta
                        };
                        stepReasoning.push(activeReasoningText);
                    } else {
                        activeReasoningText.text += part.textDelta;
                    }
                }
                if (part.type === "reasoning-signature") {
                    if (activeReasoningText == null) {
                        throw new AISDKError({
                            name: "InvalidStreamPart",
                            message: "reasoning-signature without reasoning"
                        });
                    }
                    activeReasoningText.signature = part.signature;
                    activeReasoningText = void 0;
                }
                if (part.type === "redacted-reasoning") {
                    stepReasoning.push({
                        type: "redacted",
                        data: part.data
                    });
                }
                if (part.type === "file") {
                    stepFiles.push(part);
                }
                if (part.type === "source") {
                    recordedSources.push(part.source);
                    recordedStepSources.push(part.source);
                }
                if (part.type === "tool-call") {
                    recordedToolCalls.push(part);
                }
                if (part.type === "tool-result") {
                    recordedToolResults.push(part);
                }
                if (part.type === "step-finish") {
                    const stepMessages = toResponseMessages({
                        text: recordedContinuationText,
                        files: stepFiles,
                        reasoning: stepReasoning,
                        tools: tools != null ? tools : {},
                        toolCalls: recordedToolCalls,
                        toolResults: recordedToolResults,
                        messageId: part.messageId,
                        generateMessageId
                    });
                    const currentStep = recordedSteps.length;
                    let nextStepType = "done";
                    if (currentStep + 1 < maxSteps) {
                        if (continueSteps && part.finishReason === "length" && recordedToolCalls.length === 0) {
                            nextStepType = "continue";
                        } else if (recordedToolCalls.length > 0 && recordedToolResults.length === recordedToolCalls.length) {
                            nextStepType = "tool-result";
                        }
                    }
                    const currentStepResult = {
                        stepType,
                        text: recordedStepText,
                        reasoning: asReasoningText(stepReasoning),
                        reasoningDetails: stepReasoning,
                        files: stepFiles,
                        sources: recordedStepSources,
                        toolCalls: recordedToolCalls,
                        toolResults: recordedToolResults,
                        finishReason: part.finishReason,
                        usage: part.usage,
                        warnings: part.warnings,
                        logprobs: part.logprobs,
                        request: part.request,
                        response: {
                            ...part.response,
                            messages: [
                                ...recordedResponse.messages,
                                ...stepMessages
                            ]
                        },
                        providerMetadata: part.experimental_providerMetadata,
                        experimental_providerMetadata: part.experimental_providerMetadata,
                        isContinued: part.isContinued
                    };
                    await (onStepFinish == null ? void 0 : onStepFinish(currentStepResult));
                    recordedSteps.push(currentStepResult);
                    recordedToolCalls = [];
                    recordedToolResults = [];
                    recordedStepText = "";
                    recordedStepSources = [];
                    stepReasoning = [];
                    stepFiles = [];
                    activeReasoningText = void 0;
                    if (nextStepType !== "done") {
                        stepType = nextStepType;
                    }
                    if (nextStepType !== "continue") {
                        recordedResponse.messages.push(...stepMessages);
                        recordedContinuationText = "";
                    }
                }
                if (part.type === "finish") {
                    recordedResponse.id = part.response.id;
                    recordedResponse.timestamp = part.response.timestamp;
                    recordedResponse.modelId = part.response.modelId;
                    recordedResponse.headers = part.response.headers;
                    recordedUsage = part.usage;
                    recordedFinishReason = part.finishReason;
                }
            },
            async flush (controller) {
                var _a18;
                try {
                    if (recordedSteps.length === 0) {
                        return;
                    }
                    const lastStep = recordedSteps[recordedSteps.length - 1];
                    self2.warningsPromise.resolve(lastStep.warnings);
                    self2.requestPromise.resolve(lastStep.request);
                    self2.responsePromise.resolve(lastStep.response);
                    self2.toolCallsPromise.resolve(lastStep.toolCalls);
                    self2.toolResultsPromise.resolve(lastStep.toolResults);
                    self2.providerMetadataPromise.resolve(lastStep.experimental_providerMetadata);
                    self2.reasoningPromise.resolve(lastStep.reasoning);
                    self2.reasoningDetailsPromise.resolve(lastStep.reasoningDetails);
                    const finishReason = recordedFinishReason != null ? recordedFinishReason : "unknown";
                    const usage = recordedUsage != null ? recordedUsage : {
                        completionTokens: NaN,
                        promptTokens: NaN,
                        totalTokens: NaN
                    };
                    self2.finishReasonPromise.resolve(finishReason);
                    self2.usagePromise.resolve(usage);
                    self2.textPromise.resolve(recordedFullText);
                    self2.sourcesPromise.resolve(recordedSources);
                    self2.filesPromise.resolve(lastStep.files);
                    self2.stepsPromise.resolve(recordedSteps);
                    await (onFinish == null ? void 0 : onFinish({
                        finishReason,
                        logprobs: void 0,
                        usage,
                        text: recordedFullText,
                        reasoning: lastStep.reasoning,
                        reasoningDetails: lastStep.reasoningDetails,
                        files: lastStep.files,
                        sources: lastStep.sources,
                        toolCalls: lastStep.toolCalls,
                        toolResults: lastStep.toolResults,
                        request: (_a18 = lastStep.request) != null ? _a18 : {},
                        response: lastStep.response,
                        warnings: lastStep.warnings,
                        providerMetadata: lastStep.providerMetadata,
                        experimental_providerMetadata: lastStep.experimental_providerMetadata,
                        steps: recordedSteps
                    }));
                    rootSpan.setAttributes(selectTelemetryAttributes({
                        telemetry,
                        attributes: {
                            "ai.response.finishReason": finishReason,
                            "ai.response.text": {
                                output: ()=>recordedFullText
                            },
                            "ai.response.toolCalls": {
                                output: ()=>{
                                    var _a19;
                                    return ((_a19 = lastStep.toolCalls) == null ? void 0 : _a19.length) ? JSON.stringify(lastStep.toolCalls) : void 0;
                                }
                            },
                            "ai.usage.promptTokens": usage.promptTokens,
                            "ai.usage.completionTokens": usage.completionTokens,
                            "ai.response.providerMetadata": JSON.stringify(lastStep.providerMetadata)
                        }
                    }));
                } catch (error3) {
                    controller.error(error3);
                } finally{
                    rootSpan.end();
                }
            }
        });
        const stitchableStream = createStitchableStream();
        this.addStream = stitchableStream.addStream;
        this.closeStream = stitchableStream.close;
        let stream3 = stitchableStream.stream;
        for (const transform2 of transforms){
            stream3 = stream3.pipeThrough(transform2({
                tools,
                stopStream () {
                    stitchableStream.terminate();
                }
            }));
        }
        this.baseStream = stream3.pipeThrough(createOutputTransformStream(output)).pipeThrough(eventProcessor);
        const { maxRetries, retry: retry2 } = prepareRetries({
            maxRetries: maxRetriesArg
        });
        const tracer = getTracer2(telemetry);
        const baseTelemetryAttributes = getBaseTelemetryAttributes({
            model,
            telemetry,
            headers,
            settings: {
                ...settings,
                maxRetries
            }
        });
        const initialPrompt = standardizePrompt({
            prompt: {
                system: (_a172 = output == null ? void 0 : output.injectIntoSystemPrompt({
                    system,
                    model
                })) != null ? _a172 : system,
                prompt,
                messages
            },
            tools
        });
        const self2 = this;
        recordSpan({
            name: "ai.streamText",
            attributes: selectTelemetryAttributes({
                telemetry,
                attributes: {
                    ...assembleOperationName({
                        operationId: "ai.streamText",
                        telemetry
                    }),
                    ...baseTelemetryAttributes,
                    "ai.prompt": {
                        input: ()=>JSON.stringify({
                                system,
                                prompt,
                                messages
                            })
                    },
                    "ai.settings.maxSteps": maxSteps
                }
            }),
            tracer,
            endWhenDone: false,
            fn: async (rootSpanArg)=>{
                rootSpan = rootSpanArg;
                async function streamStep({ currentStep, responseMessages, usage, stepType: stepType2, previousStepText, hasLeadingWhitespace, messageId }) {
                    var _a18;
                    const promptFormat = responseMessages.length === 0 ? initialPrompt.type : "messages";
                    const stepInputMessages = [
                        ...initialPrompt.messages,
                        ...responseMessages
                    ];
                    const promptMessages = await convertToLanguageModelPrompt({
                        prompt: {
                            type: promptFormat,
                            system: initialPrompt.system,
                            messages: stepInputMessages
                        },
                        modelSupportsImageUrls: model.supportsImageUrls,
                        modelSupportsUrl: (_a18 = model.supportsUrl) == null ? void 0 : _a18.bind(model)
                    });
                    const mode = {
                        type: "regular",
                        ...prepareToolsAndToolChoice({
                            tools,
                            toolChoice,
                            activeTools
                        })
                    };
                    const { result: { stream: stream22, warnings, rawResponse, request: request3 }, doStreamSpan, startTimestampMs } = await retry2(()=>recordSpan({
                            name: "ai.streamText.doStream",
                            attributes: selectTelemetryAttributes({
                                telemetry,
                                attributes: {
                                    ...assembleOperationName({
                                        operationId: "ai.streamText.doStream",
                                        telemetry
                                    }),
                                    ...baseTelemetryAttributes,
                                    "ai.prompt.format": {
                                        input: ()=>promptFormat
                                    },
                                    "ai.prompt.messages": {
                                        input: ()=>stringifyForTelemetry(promptMessages)
                                    },
                                    "ai.prompt.tools": {
                                        input: ()=>{
                                            var _a19;
                                            return (_a19 = mode.tools) == null ? void 0 : _a19.map((tool2)=>JSON.stringify(tool2));
                                        }
                                    },
                                    "ai.prompt.toolChoice": {
                                        input: ()=>mode.toolChoice != null ? JSON.stringify(mode.toolChoice) : void 0
                                    },
                                    "gen_ai.system": model.provider,
                                    "gen_ai.request.model": model.modelId,
                                    "gen_ai.request.frequency_penalty": settings.frequencyPenalty,
                                    "gen_ai.request.max_tokens": settings.maxTokens,
                                    "gen_ai.request.presence_penalty": settings.presencePenalty,
                                    "gen_ai.request.stop_sequences": settings.stopSequences,
                                    "gen_ai.request.temperature": settings.temperature,
                                    "gen_ai.request.top_k": settings.topK,
                                    "gen_ai.request.top_p": settings.topP
                                }
                            }),
                            tracer,
                            endWhenDone: false,
                            fn: async (doStreamSpan2)=>({
                                    startTimestampMs: now2(),
                                    doStreamSpan: doStreamSpan2,
                                    result: await model.doStream({
                                        mode,
                                        ...prepareCallSettings(settings),
                                        inputFormat: promptFormat,
                                        responseFormat: output == null ? void 0 : output.responseFormat({
                                            model
                                        }),
                                        prompt: promptMessages,
                                        providerMetadata: providerOptions,
                                        abortSignal,
                                        headers
                                    })
                                })
                        }));
                    const transformedStream = runToolsTransformation({
                        tools,
                        generatorStream: stream22,
                        toolCallStreaming,
                        tracer,
                        telemetry,
                        system,
                        messages: stepInputMessages,
                        repairToolCall,
                        abortSignal
                    });
                    const stepRequest = request3 != null ? request3 : {};
                    const stepToolCalls = [];
                    const stepToolResults = [];
                    const stepReasoning2 = [];
                    const stepFiles2 = [];
                    let activeReasoningText2 = void 0;
                    let stepFinishReason = "unknown";
                    let stepUsage = {
                        promptTokens: 0,
                        completionTokens: 0,
                        totalTokens: 0
                    };
                    let stepProviderMetadata;
                    let stepFirstChunk = true;
                    let stepText = "";
                    let fullStepText = stepType2 === "continue" ? previousStepText : "";
                    let stepLogProbs;
                    let stepResponse = {
                        id: generateId3(),
                        timestamp: currentDate(),
                        modelId: model.modelId
                    };
                    let chunkBuffer = "";
                    let chunkTextPublished = false;
                    let inWhitespacePrefix = true;
                    let hasWhitespaceSuffix = false;
                    async function publishTextChunk({ controller, chunk }) {
                        controller.enqueue(chunk);
                        stepText += chunk.textDelta;
                        fullStepText += chunk.textDelta;
                        chunkTextPublished = true;
                        hasWhitespaceSuffix = chunk.textDelta.trimEnd() !== chunk.textDelta;
                    }
                    self2.addStream(transformedStream.pipeThrough(new TransformStream({
                        async transform (chunk, controller) {
                            var _a19, _b2, _c;
                            if (stepFirstChunk) {
                                const msToFirstChunk = now2() - startTimestampMs;
                                stepFirstChunk = false;
                                doStreamSpan.addEvent("ai.stream.firstChunk", {
                                    "ai.response.msToFirstChunk": msToFirstChunk
                                });
                                doStreamSpan.setAttributes({
                                    "ai.response.msToFirstChunk": msToFirstChunk
                                });
                                controller.enqueue({
                                    type: "step-start",
                                    messageId,
                                    request: stepRequest,
                                    warnings: warnings != null ? warnings : []
                                });
                            }
                            if (chunk.type === "text-delta" && chunk.textDelta.length === 0) {
                                return;
                            }
                            const chunkType = chunk.type;
                            switch(chunkType){
                                case "text-delta":
                                    {
                                        if (continueSteps) {
                                            const trimmedChunkText = inWhitespacePrefix && hasLeadingWhitespace ? chunk.textDelta.trimStart() : chunk.textDelta;
                                            if (trimmedChunkText.length === 0) {
                                                break;
                                            }
                                            inWhitespacePrefix = false;
                                            chunkBuffer += trimmedChunkText;
                                            const split = splitOnLastWhitespace(chunkBuffer);
                                            if (split != null) {
                                                chunkBuffer = split.suffix;
                                                await publishTextChunk({
                                                    controller,
                                                    chunk: {
                                                        type: "text-delta",
                                                        textDelta: split.prefix + split.whitespace
                                                    }
                                                });
                                            }
                                        } else {
                                            await publishTextChunk({
                                                controller,
                                                chunk
                                            });
                                        }
                                        break;
                                    }
                                case "reasoning":
                                    {
                                        controller.enqueue(chunk);
                                        if (activeReasoningText2 == null) {
                                            activeReasoningText2 = {
                                                type: "text",
                                                text: chunk.textDelta
                                            };
                                            stepReasoning2.push(activeReasoningText2);
                                        } else {
                                            activeReasoningText2.text += chunk.textDelta;
                                        }
                                        break;
                                    }
                                case "reasoning-signature":
                                    {
                                        controller.enqueue(chunk);
                                        if (activeReasoningText2 == null) {
                                            throw new InvalidStreamPartError({
                                                chunk,
                                                message: "reasoning-signature without reasoning"
                                            });
                                        }
                                        activeReasoningText2.signature = chunk.signature;
                                        activeReasoningText2 = void 0;
                                        break;
                                    }
                                case "redacted-reasoning":
                                    {
                                        controller.enqueue(chunk);
                                        stepReasoning2.push({
                                            type: "redacted",
                                            data: chunk.data
                                        });
                                        break;
                                    }
                                case "tool-call":
                                    {
                                        controller.enqueue(chunk);
                                        stepToolCalls.push(chunk);
                                        break;
                                    }
                                case "tool-result":
                                    {
                                        controller.enqueue(chunk);
                                        stepToolResults.push(chunk);
                                        break;
                                    }
                                case "response-metadata":
                                    {
                                        stepResponse = {
                                            id: (_a19 = chunk.id) != null ? _a19 : stepResponse.id,
                                            timestamp: (_b2 = chunk.timestamp) != null ? _b2 : stepResponse.timestamp,
                                            modelId: (_c = chunk.modelId) != null ? _c : stepResponse.modelId
                                        };
                                        break;
                                    }
                                case "finish":
                                    {
                                        stepUsage = chunk.usage;
                                        stepFinishReason = chunk.finishReason;
                                        stepProviderMetadata = chunk.experimental_providerMetadata;
                                        stepLogProbs = chunk.logprobs;
                                        const msToFinish = now2() - startTimestampMs;
                                        doStreamSpan.addEvent("ai.stream.finish");
                                        doStreamSpan.setAttributes({
                                            "ai.response.msToFinish": msToFinish,
                                            "ai.response.avgCompletionTokensPerSecond": 1e3 * stepUsage.completionTokens / msToFinish
                                        });
                                        break;
                                    }
                                case "file":
                                    {
                                        stepFiles2.push(chunk);
                                        controller.enqueue(chunk);
                                        break;
                                    }
                                case "source":
                                case "tool-call-streaming-start":
                                case "tool-call-delta":
                                    {
                                        controller.enqueue(chunk);
                                        break;
                                    }
                                case "error":
                                    {
                                        controller.enqueue(chunk);
                                        stepFinishReason = "error";
                                        break;
                                    }
                                default:
                                    {
                                        const exhaustiveCheck = chunkType;
                                        throw new Error(`Unknown chunk type: ${exhaustiveCheck}`);
                                    }
                            }
                        },
                        async flush (controller) {
                            const stepToolCallsJson = stepToolCalls.length > 0 ? JSON.stringify(stepToolCalls) : void 0;
                            let nextStepType = "done";
                            if (currentStep + 1 < maxSteps) {
                                if (continueSteps && stepFinishReason === "length" && stepToolCalls.length === 0) {
                                    nextStepType = "continue";
                                } else if (stepToolCalls.length > 0 && stepToolResults.length === stepToolCalls.length) {
                                    nextStepType = "tool-result";
                                }
                            }
                            if (continueSteps && chunkBuffer.length > 0 && (nextStepType !== "continue" || stepType2 === "continue" && !chunkTextPublished)) {
                                await publishTextChunk({
                                    controller,
                                    chunk: {
                                        type: "text-delta",
                                        textDelta: chunkBuffer
                                    }
                                });
                                chunkBuffer = "";
                            }
                            try {
                                doStreamSpan.setAttributes(selectTelemetryAttributes({
                                    telemetry,
                                    attributes: {
                                        "ai.response.finishReason": stepFinishReason,
                                        "ai.response.text": {
                                            output: ()=>stepText
                                        },
                                        "ai.response.toolCalls": {
                                            output: ()=>stepToolCallsJson
                                        },
                                        "ai.response.id": stepResponse.id,
                                        "ai.response.model": stepResponse.modelId,
                                        "ai.response.timestamp": stepResponse.timestamp.toISOString(),
                                        "ai.response.providerMetadata": JSON.stringify(stepProviderMetadata),
                                        "ai.usage.promptTokens": stepUsage.promptTokens,
                                        "ai.usage.completionTokens": stepUsage.completionTokens,
                                        "gen_ai.response.finish_reasons": [
                                            stepFinishReason
                                        ],
                                        "gen_ai.response.id": stepResponse.id,
                                        "gen_ai.response.model": stepResponse.modelId,
                                        "gen_ai.usage.input_tokens": stepUsage.promptTokens,
                                        "gen_ai.usage.output_tokens": stepUsage.completionTokens
                                    }
                                }));
                            } catch (error3) {} finally{
                                doStreamSpan.end();
                            }
                            controller.enqueue({
                                type: "step-finish",
                                finishReason: stepFinishReason,
                                usage: stepUsage,
                                providerMetadata: stepProviderMetadata,
                                experimental_providerMetadata: stepProviderMetadata,
                                logprobs: stepLogProbs,
                                request: stepRequest,
                                response: {
                                    ...stepResponse,
                                    headers: rawResponse == null ? void 0 : rawResponse.headers
                                },
                                warnings,
                                isContinued: nextStepType === "continue",
                                messageId
                            });
                            const combinedUsage = addLanguageModelUsage(usage, stepUsage);
                            if (nextStepType === "done") {
                                controller.enqueue({
                                    type: "finish",
                                    finishReason: stepFinishReason,
                                    usage: combinedUsage,
                                    providerMetadata: stepProviderMetadata,
                                    experimental_providerMetadata: stepProviderMetadata,
                                    logprobs: stepLogProbs,
                                    response: {
                                        ...stepResponse,
                                        headers: rawResponse == null ? void 0 : rawResponse.headers
                                    }
                                });
                                self2.closeStream();
                            } else {
                                if (stepType2 === "continue") {
                                    const lastMessage = responseMessages[responseMessages.length - 1];
                                    if (typeof lastMessage.content === "string") {
                                        lastMessage.content += stepText;
                                    } else {
                                        lastMessage.content.push({
                                            text: stepText,
                                            type: "text"
                                        });
                                    }
                                } else {
                                    responseMessages.push(...toResponseMessages({
                                        text: stepText,
                                        files: stepFiles2,
                                        reasoning: stepReasoning2,
                                        tools: tools != null ? tools : {},
                                        toolCalls: stepToolCalls,
                                        toolResults: stepToolResults,
                                        messageId,
                                        generateMessageId
                                    }));
                                }
                                await streamStep({
                                    currentStep: currentStep + 1,
                                    responseMessages,
                                    usage: combinedUsage,
                                    stepType: nextStepType,
                                    previousStepText: fullStepText,
                                    hasLeadingWhitespace: hasWhitespaceSuffix,
                                    messageId: (nextStepType === "continue" ? messageId : generateMessageId())
                                });
                            }
                        }
                    })));
                }
                await streamStep({
                    currentStep: 0,
                    responseMessages: [],
                    usage: {
                        promptTokens: 0,
                        completionTokens: 0,
                        totalTokens: 0
                    },
                    previousStepText: "",
                    stepType: "initial",
                    hasLeadingWhitespace: false,
                    messageId: generateMessageId()
                });
            }
        }).catch((error3)=>{
            self2.addStream(new ReadableStream({
                start (controller) {
                    controller.enqueue({
                        type: "error",
                        error: error3
                    });
                    controller.close();
                }
            }));
            self2.closeStream();
        });
    }
    get warnings() {
        return this.warningsPromise.value;
    }
    get usage() {
        return this.usagePromise.value;
    }
    get finishReason() {
        return this.finishReasonPromise.value;
    }
    get experimental_providerMetadata() {
        return this.providerMetadataPromise.value;
    }
    get providerMetadata() {
        return this.providerMetadataPromise.value;
    }
    get text() {
        return this.textPromise.value;
    }
    get reasoning() {
        return this.reasoningPromise.value;
    }
    get reasoningDetails() {
        return this.reasoningDetailsPromise.value;
    }
    get sources() {
        return this.sourcesPromise.value;
    }
    get files() {
        return this.filesPromise.value;
    }
    get toolCalls() {
        return this.toolCallsPromise.value;
    }
    get toolResults() {
        return this.toolResultsPromise.value;
    }
    get request() {
        return this.requestPromise.value;
    }
    get response() {
        return this.responsePromise.value;
    }
    get steps() {
        return this.stepsPromise.value;
    }
    teeStream() {
        const [stream1, stream22] = this.baseStream.tee();
        this.baseStream = stream22;
        return stream1;
    }
    get textStream() {
        return createAsyncIterableStream(this.teeStream().pipeThrough(new TransformStream({
            transform ({ part }, controller) {
                if (part.type === "text-delta") {
                    controller.enqueue(part.textDelta);
                }
            }
        })));
    }
    get fullStream() {
        return createAsyncIterableStream(this.teeStream().pipeThrough(new TransformStream({
            transform ({ part }, controller) {
                controller.enqueue(part);
            }
        })));
    }
    async consumeStream(options2) {
        var _a172;
        try {
            await consumeStream({
                stream: this.fullStream,
                onError: options2 == null ? void 0 : options2.onError
            });
        } catch (error3) {
            (_a172 = options2 == null ? void 0 : options2.onError) == null ? void 0 : _a172.call(options2, error3);
        }
    }
    get experimental_partialOutputStream() {
        if (this.output == null) {
            throw new NoOutputSpecifiedError();
        }
        return createAsyncIterableStream(this.teeStream().pipeThrough(new TransformStream({
            transform ({ partialOutput }, controller) {
                if (partialOutput != null) {
                    controller.enqueue(partialOutput);
                }
            }
        })));
    }
    toDataStreamInternal({ getErrorMessage: getErrorMessage5 = ()=>"An error occurred.", sendUsage = true, sendReasoning = false, sendSources = false, experimental_sendFinish = true }) {
        return this.fullStream.pipeThrough(new TransformStream({
            transform: async (chunk, controller)=>{
                const chunkType = chunk.type;
                switch(chunkType){
                    case "text-delta":
                        {
                            controller.enqueue(formatDataStreamPart("text", chunk.textDelta));
                            break;
                        }
                    case "reasoning":
                        {
                            if (sendReasoning) {
                                controller.enqueue(formatDataStreamPart("reasoning", chunk.textDelta));
                            }
                            break;
                        }
                    case "redacted-reasoning":
                        {
                            if (sendReasoning) {
                                controller.enqueue(formatDataStreamPart("redacted_reasoning", {
                                    data: chunk.data
                                }));
                            }
                            break;
                        }
                    case "reasoning-signature":
                        {
                            if (sendReasoning) {
                                controller.enqueue(formatDataStreamPart("reasoning_signature", {
                                    signature: chunk.signature
                                }));
                            }
                            break;
                        }
                    case "file":
                        {
                            controller.enqueue(formatDataStreamPart("file", {
                                mimeType: chunk.mimeType,
                                data: chunk.base64
                            }));
                            break;
                        }
                    case "source":
                        {
                            if (sendSources) {
                                controller.enqueue(formatDataStreamPart("source", chunk.source));
                            }
                            break;
                        }
                    case "tool-call-streaming-start":
                        {
                            controller.enqueue(formatDataStreamPart("tool_call_streaming_start", {
                                toolCallId: chunk.toolCallId,
                                toolName: chunk.toolName
                            }));
                            break;
                        }
                    case "tool-call-delta":
                        {
                            controller.enqueue(formatDataStreamPart("tool_call_delta", {
                                toolCallId: chunk.toolCallId,
                                argsTextDelta: chunk.argsTextDelta
                            }));
                            break;
                        }
                    case "tool-call":
                        {
                            controller.enqueue(formatDataStreamPart("tool_call", {
                                toolCallId: chunk.toolCallId,
                                toolName: chunk.toolName,
                                args: chunk.args
                            }));
                            break;
                        }
                    case "tool-result":
                        {
                            controller.enqueue(formatDataStreamPart("tool_result", {
                                toolCallId: chunk.toolCallId,
                                result: chunk.result
                            }));
                            break;
                        }
                    case "error":
                        {
                            controller.enqueue(formatDataStreamPart("error", getErrorMessage5(chunk.error)));
                            break;
                        }
                    case "step-start":
                        {
                            controller.enqueue(formatDataStreamPart("start_step", {
                                messageId: chunk.messageId
                            }));
                            break;
                        }
                    case "step-finish":
                        {
                            controller.enqueue(formatDataStreamPart("finish_step", {
                                finishReason: chunk.finishReason,
                                usage: sendUsage ? {
                                    promptTokens: chunk.usage.promptTokens,
                                    completionTokens: chunk.usage.completionTokens
                                } : void 0,
                                isContinued: chunk.isContinued
                            }));
                            break;
                        }
                    case "finish":
                        {
                            if (experimental_sendFinish) {
                                controller.enqueue(formatDataStreamPart("finish_message", {
                                    finishReason: chunk.finishReason,
                                    usage: sendUsage ? {
                                        promptTokens: chunk.usage.promptTokens,
                                        completionTokens: chunk.usage.completionTokens
                                    } : void 0
                                }));
                            }
                            break;
                        }
                    default:
                        {
                            const exhaustiveCheck = chunkType;
                            throw new Error(`Unknown chunk type: ${exhaustiveCheck}`);
                        }
                }
            }
        }));
    }
    pipeDataStreamToResponse(response, { status, statusText, headers, data, getErrorMessage: getErrorMessage5, sendUsage, sendReasoning, sendSources, experimental_sendFinish } = {}) {
        writeToServerResponse({
            response,
            status,
            statusText,
            headers: prepareOutgoingHttpHeaders(headers, {
                contentType: "text/plain; charset=utf-8",
                dataStreamVersion: "v1"
            }),
            stream: this.toDataStream({
                data,
                getErrorMessage: getErrorMessage5,
                sendUsage,
                sendReasoning,
                sendSources,
                experimental_sendFinish
            })
        });
    }
    pipeTextStreamToResponse(response, init) {
        writeToServerResponse({
            response,
            status: init == null ? void 0 : init.status,
            statusText: init == null ? void 0 : init.statusText,
            headers: prepareOutgoingHttpHeaders(init == null ? void 0 : init.headers, {
                contentType: "text/plain; charset=utf-8"
            }),
            stream: this.textStream.pipeThrough(new TextEncoderStream())
        });
    }
    toDataStream(options2) {
        const stream3 = this.toDataStreamInternal({
            getErrorMessage: options2 == null ? void 0 : options2.getErrorMessage,
            sendUsage: options2 == null ? void 0 : options2.sendUsage,
            sendReasoning: options2 == null ? void 0 : options2.sendReasoning,
            sendSources: options2 == null ? void 0 : options2.sendSources,
            experimental_sendFinish: options2 == null ? void 0 : options2.experimental_sendFinish
        }).pipeThrough(new TextEncoderStream());
        return (options2 == null ? void 0 : options2.data) ? mergeStreams(options2 == null ? void 0 : options2.data.stream, stream3) : stream3;
    }
    mergeIntoDataStream(writer, options2) {
        writer.merge(this.toDataStreamInternal({
            getErrorMessage: writer.onError,
            sendUsage: options2 == null ? void 0 : options2.sendUsage,
            sendReasoning: options2 == null ? void 0 : options2.sendReasoning,
            sendSources: options2 == null ? void 0 : options2.sendSources,
            experimental_sendFinish: options2 == null ? void 0 : options2.experimental_sendFinish
        }));
    }
    toDataStreamResponse({ headers, status, statusText, data, getErrorMessage: getErrorMessage5, sendUsage, sendReasoning, sendSources, experimental_sendFinish } = {}) {
        return new Response(this.toDataStream({
            data,
            getErrorMessage: getErrorMessage5,
            sendUsage,
            sendReasoning,
            sendSources,
            experimental_sendFinish
        }), {
            status,
            statusText,
            headers: prepareResponseHeaders(headers, {
                contentType: "text/plain; charset=utf-8",
                dataStreamVersion: "v1"
            })
        });
    }
    toTextStreamResponse(init) {
        var _a172;
        return new Response(this.textStream.pipeThrough(new TextEncoderStream()), {
            status: (_a172 = init == null ? void 0 : init.status) != null ? _a172 : 200,
            headers: prepareResponseHeaders(init == null ? void 0 : init.headers, {
                contentType: "text/plain; charset=utf-8"
            })
        });
    }
};
name16 = "AI_NoSuchProviderError";
marker16 = `vercel.ai.error.${name16}`;
symbol16 = Symbol.for(marker16);
_a16 = symbol16;
ClientOrServerImplementationSchema = external_exports.object({
    name: external_exports.string(),
    version: external_exports.string()
}).passthrough();
BaseParamsSchema = external_exports.object({
    _meta: external_exports.optional(external_exports.object({}).passthrough())
}).passthrough();
ResultSchema2 = BaseParamsSchema;
RequestSchema2 = external_exports.object({
    method: external_exports.string(),
    params: external_exports.optional(BaseParamsSchema)
});
ServerCapabilitiesSchema2 = external_exports.object({
    experimental: external_exports.optional(external_exports.object({}).passthrough()),
    logging: external_exports.optional(external_exports.object({}).passthrough()),
    prompts: external_exports.optional(external_exports.object({
        listChanged: external_exports.optional(external_exports.boolean())
    }).passthrough()),
    resources: external_exports.optional(external_exports.object({
        subscribe: external_exports.optional(external_exports.boolean()),
        listChanged: external_exports.optional(external_exports.boolean())
    }).passthrough()),
    tools: external_exports.optional(external_exports.object({
        listChanged: external_exports.optional(external_exports.boolean())
    }).passthrough())
}).passthrough();
InitializeResultSchema2 = ResultSchema2.extend({
    protocolVersion: external_exports.string(),
    capabilities: ServerCapabilitiesSchema2,
    serverInfo: ClientOrServerImplementationSchema,
    instructions: external_exports.optional(external_exports.string())
});
PaginatedResultSchema2 = ResultSchema2.extend({
    nextCursor: external_exports.optional(external_exports.string())
});
ToolSchema2 = external_exports.object({
    name: external_exports.string(),
    description: external_exports.optional(external_exports.string()),
    inputSchema: external_exports.object({
        type: external_exports.literal("object"),
        properties: external_exports.optional(external_exports.object({}).passthrough())
    }).passthrough()
}).passthrough();
ListToolsResultSchema2 = PaginatedResultSchema2.extend({
    tools: external_exports.array(ToolSchema2)
});
TextContentSchema2 = external_exports.object({
    type: external_exports.literal("text"),
    text: external_exports.string()
}).passthrough();
ImageContentSchema2 = external_exports.object({
    type: external_exports.literal("image"),
    data: external_exports.string().base64(),
    mimeType: external_exports.string()
}).passthrough();
ResourceContentsSchema2 = external_exports.object({
    uri: external_exports.string(),
    mimeType: external_exports.optional(external_exports.string())
}).passthrough();
TextResourceContentsSchema2 = ResourceContentsSchema2.extend({
    text: external_exports.string()
});
BlobResourceContentsSchema2 = ResourceContentsSchema2.extend({
    blob: external_exports.string().base64()
});
EmbeddedResourceSchema2 = external_exports.object({
    type: external_exports.literal("resource"),
    resource: external_exports.union([
        TextResourceContentsSchema2,
        BlobResourceContentsSchema2
    ])
}).passthrough();
CallToolResultSchema2 = ResultSchema2.extend({
    content: external_exports.array(external_exports.union([
        TextContentSchema2,
        ImageContentSchema2,
        EmbeddedResourceSchema2
    ])),
    isError: external_exports.boolean().default(false).optional()
}).or(ResultSchema2.extend({
    toolResult: external_exports.unknown()
}));
JSONRPC_VERSION2 = "2.0";
JSONRPCRequestSchema2 = external_exports.object({
    jsonrpc: external_exports.literal(JSONRPC_VERSION2),
    id: external_exports.union([
        external_exports.string(),
        external_exports.number().int()
    ])
}).merge(RequestSchema2).strict();
JSONRPCResponseSchema2 = external_exports.object({
    jsonrpc: external_exports.literal(JSONRPC_VERSION2),
    id: external_exports.union([
        external_exports.string(),
        external_exports.number().int()
    ]),
    result: ResultSchema2
}).strict();
JSONRPCErrorSchema = external_exports.object({
    jsonrpc: external_exports.literal(JSONRPC_VERSION2),
    id: external_exports.union([
        external_exports.string(),
        external_exports.number().int()
    ]),
    error: external_exports.object({
        code: external_exports.number().int(),
        message: external_exports.string(),
        data: external_exports.optional(external_exports.unknown())
    })
}).strict();
JSONRPCNotificationSchema2 = external_exports.object({
    jsonrpc: external_exports.literal(JSONRPC_VERSION2)
}).merge(external_exports.object({
    method: external_exports.string(),
    params: external_exports.optional(BaseParamsSchema)
})).strict();
JSONRPCMessageSchema2 = external_exports.union([
    JSONRPCRequestSchema2,
    JSONRPCNotificationSchema2,
    JSONRPCResponseSchema2,
    JSONRPCErrorSchema
]);
langchain_adapter_exports = {};
__export2(langchain_adapter_exports, {
    mergeIntoDataStream: ()=>mergeIntoDataStream,
    toDataStream: ()=>toDataStream,
    toDataStreamResponse: ()=>toDataStreamResponse
});
llamaindex_adapter_exports = {};
__export2(llamaindex_adapter_exports, {
    mergeIntoDataStream: ()=>mergeIntoDataStream2,
    toDataStream: ()=>toDataStream2,
    toDataStreamResponse: ()=>toDataStreamResponse2
});
HANGING_STREAM_WARNING_TIME_MS = 15 * 1e3;

}
