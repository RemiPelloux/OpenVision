import { init_dist8 } from "../../../../agent-exec/dist/index.js";
import { readExecutorResource } from "../../../../agent-exec/dist/read.js";
import { writeExecutorResource } from "../../../../agent-exec/dist/write.js";
import { __toESM } from "../../../../agent-host/dist/storage/sqlite-store.js";
import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { ASK_MODE_MODEL_ERROR, CustomToolCallError, ToolCallAbortedError, ToolCallError, ToolCallUnexpectedEnvironmentError, init_common9, withSafeParsedArgs } from "../common.js";
import { init_core5 } from "../core.js";
import { init_inline_image } from "./inline-image.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { createCounter, createHistogram } from "../../../../dist_exports.js";
import { external_exports } from "../../../../external_exports.js";
import { classifyAbortFinish, classifyErrorFinishReason, classifyProviderStatus, createContentSafetyBlockedError, createGenerateImageToolCall, createImageResult, createStringResult, createZodAgentTool, getDescription3, getGenerateImageBaseErrorMessage, getGenerateImageDetailedErrorMessage, getGenerateImageUserFacingErrorMessage, getProviderResponseDetails, getProviderResponseStatusCode, getToolName4, isContentSafetyBlockedError, isResizeImageError, readReferenceImages, recordGenerateImageExecuteError, recordGenerateImageExecuteFinish, recordGenerateImageRenderFinish, resultToString3, writeGeneratedImage } from "../../../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../../../metrics/dist/index.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { GenerateImageArgs, GenerateImageError, GenerateImageResult, GenerateImageToolCall, init_generate_image_tool_pb } from "../../../../proto/dist/generated/agent/v1/generate_image_tool_pb.js";
import { init_read_exec_pb } from "../../../../proto/dist/generated/agent/v1/read_exec_pb.js";
import { init_write_exec_pb } from "../../../../proto/dist/generated/agent/v1/write_exec_pb.js";
import { PrivacyMode, init_privacy_mode_pb } from "../../../../proto/dist/generated/aiserver/v1/privacy_mode_pb.js";
import { init_dist27 } from "../../../../redaction/dist/index.js";
import { init_image_resize, resizeImageBufferIfNeeded } from "../../../../utils/dist/image-resize.js";
import { init_dist3 } from "../../../../utils/dist/index.js";
var import_node_path87, __addDisposableResource86, __disposeResources86, logger94, generateImageWriteResultCounter, generateImageAbortCounter, generateImageExecuteFinishCounter, generateImageExecuteErrorCounter, generateImageExecuteDurationMs, generateImageRenderFinishCounter, generateImageShortPromptCounter, SHORT_PROMPT_WORD_THRESHOLD, VERY_SHORT_PROMPT_WORD_THRESHOLD, MAX_CONCURRENT_IMAGE_GENERATIONS, supportedAspectRatios, parametersSchema16, INFERENCE_PROXY_MODERATION_BLOCKED_REASON, CONTENT_SAFETY_BLOCKED_ERROR, DEFAULT_SUSPICIOUS_KEYWORDS, MODEL_RESTRICTED_ERROR, NO_PROJECT_FOLDER_ERROR, createGenerateImageTool;
export { CONTENT_SAFETY_BLOCKED_ERROR, DEFAULT_SUSPICIOUS_KEYWORDS, INFERENCE_PROXY_MODERATION_BLOCKED_REASON, MAX_CONCURRENT_IMAGE_GENERATIONS, MODEL_RESTRICTED_ERROR, NO_PROJECT_FOLDER_ERROR, SHORT_PROMPT_WORD_THRESHOLD, VERY_SHORT_PROMPT_WORD_THRESHOLD, __addDisposableResource86, __disposeResources86, createGenerateImageTool, generateImageAbortCounter, generateImageExecuteDurationMs, generateImageExecuteErrorCounter, generateImageExecuteFinishCounter, generateImageRenderFinishCounter, generateImageShortPromptCounter, generateImageWriteResultCounter, import_node_path87, logger94, parametersSchema16, supportedAspectRatios };
var __wakaru_init_generate_image_initialized = false;
export function init_generate_image() {
if (__wakaru_init_generate_image_initialized) return;
__wakaru_init_generate_image_initialized = true;
"use strict";
import_node_path87 = __toESM(require("node:path"), 1);
init_dist8();
init_dist26();
init_dist();
init_dist4();
init_agent_pb();
init_generate_image_tool_pb();
init_read_exec_pb();
init_write_exec_pb();
init_privacy_mode_pb();
init_dist27();
init_dist3();
init_image_resize();
init_zod();
init_common9();
init_core5();
init_inline_image();
__addDisposableResource86 = function(env, value, async) {
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
__disposeResources86 = (function(SuppressedError2) {
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
logger94 = createLogger("agent/tools/generate-image");
generateImageWriteResultCounter = createCounter("agent.tools.generate_image.write_result", {
    description: "Generate image write results by case and location",
    labelNames: [
        "result",
        "location",
        "operation",
        "is_readonly"
    ]
});
generateImageAbortCounter = createCounter("agent.tools.generate_image.abort", {
    description: "Generate image aborts by phase and normalized reason",
    labelNames: [
        "phase",
        "abort_reason_type"
    ]
});
generateImageExecuteFinishCounter = createCounter("agent.tools.generate_image.execute.finished", {
    description: "Generate image tool execute outcomes",
    labelNames: [
        "outcome"
    ]
});
generateImageExecuteErrorCounter = createCounter("agent.tools.generate_image.execute.error", {
    description: "Generate image tool execute failures by stage",
    labelNames: [
        "stage"
    ]
});
generateImageExecuteDurationMs = createHistogram("agent.tools.generate_image.execute.duration_ms", {
    description: "End-to-end generate image execute latency in milliseconds",
    labelNames: [
        "outcome"
    ]
});
generateImageRenderFinishCounter = createCounter("agent.tools.generate_image.render.finished", {
    description: "Generate image tool render outcomes",
    labelNames: [
        "outcome"
    ]
});
generateImageShortPromptCounter = createCounter("agent.tools.generate_image.short_prompt", {
    description: "Generate image invocations where the description was rejected as too short or suspicious",
    labelNames: [
        "word_count"
    ]
});
SHORT_PROMPT_WORD_THRESHOLD = 5;
VERY_SHORT_PROMPT_WORD_THRESHOLD = 3;
MAX_CONCURRENT_IMAGE_GENERATIONS = 2;
supportedAspectRatios = [
    "1:1",
    "4:3",
    "3:4",
    "16:9",
    "9:16"
];
parametersSchema16 = external_exports.object({
    description: external_exports.string().describe("A detailed description of the image."),
    filename: external_exports.string().optional().describe("Optional filename for the generated image (e.g., 'diagram.png'). Do not include a directory path - the tool automatically handles where to save and how to display the image. If not provided, a timestamped filename will be generated."),
    reference_image_paths: external_exports.array(external_exports.string()).optional().describe("Optional array of file paths to reference images as additional inputs."),
    aspect_ratio: external_exports.enum(supportedAspectRatios).optional().describe('Optional aspect ratio for the generated image. Supported values are "1:1", "4:3", "3:4", "16:9", and "9:16".')
});
INFERENCE_PROXY_MODERATION_BLOCKED_REASON = "moderation_blocked";
CONTENT_SAFETY_BLOCKED_ERROR = "The image provider blocked this request under its content policy. This often happens when the description names trademarked characters, brands, or real people. Try describing the subject in your own words instead.";
DEFAULT_SUSPICIOUS_KEYWORDS = [
    "ignore",
    "skip",
    "stop",
    "noop"
];
MODEL_RESTRICTED_ERROR = "GenerateImage is not available for the current selected model. If important to generate an image (e.g. the user asked for it), then ask the user to switch models.";
NO_PROJECT_FOLDER_ERROR = "generate_image needs a workspace/project folder so it has somewhere to save the PNG. Open a folder or run from a workspace, then try again.";
createGenerateImageTool = (resourceAccessor, generateImageService, promptVersion, requestContext, imageGenerationConcurrencyLimiter, isReadonly, suspiciousKeywords = DEFAULT_SUSPICIOUS_KEYWORDS, isModelRestricted)=>{
    promptVersion = promptVersion ?? "latest";
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource86(env_1, createSpan(parentCtx.withName("generateImageExecute")), false);
            const executeStartTimeMs = Date.now();
            let finishRecorded = false;
            let errorStage;
            let executeOutcome = "internal_error";
            const trimmedDescription = rawArgs.description.trim();
            const promptWords = trimmedDescription.length > 0 ? trimmedDescription.split(/\s+/) : [];
            const promptWordCount = promptWords.length;
            const lowerDescription = rawArgs.description.toLowerCase();
            const isSuspicious = promptWordCount <= VERY_SHORT_PROMPT_WORD_THRESHOLD || promptWordCount <= SHORT_PROMPT_WORD_THRESHOLD && suspiciousKeywords.some((kw)=>lowerDescription.includes(kw));
            if (isModelRestricted) {
                executeOutcome = "model_restricted";
                recordGenerateImageExecuteFinish(parentCtx, executeOutcome);
                finishRecorded = true;
                generateImageExecuteDurationMs.histogram(parentCtx, Date.now() - executeStartTimeMs, {
                    outcome: executeOutcome
                });
                return new GenerateImageResult({
                    result: {
                        case: "error",
                        value: new GenerateImageError({
                            error: MODEL_RESTRICTED_ERROR
                        })
                    }
                });
            }
            if (isSuspicious) {
                generateImageShortPromptCounter.increment(parentCtx, 1, {
                    word_count: String(promptWordCount)
                });
                logger94.warn(parentCtx, "[generate-image] short/suspicious prompt rejected", {
                    wordCount: promptWordCount
                });
                executeOutcome = "short_prompt_rejected";
                recordGenerateImageExecuteFinish(parentCtx, executeOutcome);
                finishRecorded = true;
                generateImageExecuteDurationMs.histogram(parentCtx, Date.now() - executeStartTimeMs, {
                    outcome: executeOutcome
                });
                return new GenerateImageResult({
                    result: {
                        case: "error",
                        value: new GenerateImageError({
                            error: "Image generation was not performed \u2014 the tool call appears to be unintended. Do not retry or call GenerateImage again unless the user explicitly asks for an image."
                        })
                    }
                });
            }
            if (isReadonly) {
                executeOutcome = "readonly_rejected";
                recordGenerateImageExecuteFinish(parentCtx, executeOutcome);
                finishRecorded = true;
                generateImageExecuteDurationMs.histogram(parentCtx, Date.now() - executeStartTimeMs, {
                    outcome: executeOutcome
                });
                return new GenerateImageResult({
                    result: {
                        case: "error",
                        value: new GenerateImageError({
                            error: ASK_MODE_MODEL_ERROR
                        })
                    }
                });
            }
            const args = new GenerateImageArgs({
                description: rawArgs.description,
                filePath: rawArgs.filename,
                referenceImagePaths: rawArgs.reference_image_paths ?? [],
                aspectRatio: rawArgs.aspect_ratio
            });
            const baseToolCall = new GenerateImageToolCall({
                args,
                result: void 0
            });
            try {
                const result = await interactionHandler.executeToolCall(spanCtxt.ctx, createGenerateImageToolCall(baseToolCall), meta.toolCallId, async (ctx)=>{
                    const projectFolder = requestContext?.env?.projectFolder || requestContext?.env?.artifactsFolder || requestContext?.env?.workspacePaths?.[0];
                    if (!projectFolder || projectFolder.trim().length === 0) {
                        errorStage = "project_folder";
                        recordGenerateImageExecuteError(ctx, "project_folder");
                        logger94.error(ctx, "[generate-image] no project folder available to save the generated image", {
                            generate_image: {
                                projectFolder: requestContext?.env?.projectFolder,
                                artifactsFolder: requestContext?.env?.artifactsFolder,
                                workspacePaths: requestContext?.env?.workspacePaths
                            }
                        });
                        throw new ToolCallUnexpectedEnvironmentError(NO_PROJECT_FOLDER_ERROR);
                    }
                    const readExecutor = resourceAccessor.get(readExecutorResource);
                    const writeExecutor = resourceAccessor.get(writeExecutorResource);
                    const privacyMode = meta.stateHandler?.getPrivacyMode() ?? PrivacyMode.UNSPECIFIED;
                    let referenceImages;
                    try {
                        referenceImages = await readReferenceImages(ctx, readExecutor, rawArgs.reference_image_paths ?? [], meta.toolCallId, privacyMode);
                    } catch (error3) {
                        errorStage = "read_reference_images";
                        recordGenerateImageExecuteError(ctx, "read_reference_images");
                        throw error3;
                    }
                    if (imageGenerationConcurrencyLimiter) {
                        await imageGenerationConcurrencyLimiter.acquire();
                    }
                    try {
                        let filePath;
                        let imageData;
                        let mimeType;
                        try {
                            const serviceResult = await generateImageService(spanCtxt.ctx, args.description, rawArgs.filename, referenceImages.length > 0 ? referenceImages : void 0, rawArgs.aspect_ratio);
                            filePath = serviceResult.filePath;
                            imageData = serviceResult.imageData;
                            mimeType = serviceResult.mimeType;
                            if (serviceResult.usage && meta.stateHandler) {
                                meta.stateHandler.addTurnUsage(serviceResult.usage);
                            }
                        } catch (error3) {
                            errorStage = "provider_inference";
                            recordGenerateImageExecuteError(ctx, "provider_inference");
                            throw error3;
                        }
                        try {
                            return await writeGeneratedImage(ctx, writeExecutor, {
                                projectFolder,
                                filePath,
                                imageData,
                                mimeType,
                                artifactsFolder: requestContext?.env?.artifactsFolder,
                                privacyMode
                            });
                        } catch (error3) {
                            errorStage = "write_output";
                            recordGenerateImageExecuteError(ctx, "write_output");
                            throw error3;
                        }
                    } finally{
                        if (imageGenerationConcurrencyLimiter) {
                            imageGenerationConcurrencyLimiter.release();
                        }
                    }
                }, (result2)=>createGenerateImageToolCall(new GenerateImageToolCall({
                        ...baseToolCall,
                        result: result2
                    })));
                executeOutcome = "success";
                recordGenerateImageExecuteFinish(parentCtx, executeOutcome);
                finishRecorded = true;
                return result;
            } catch (error3) {
                const isAborted3 = parentCtx.signal.aborted || error3 instanceof ToolCallAbortedError || error3 instanceof Error && error3.name === "AbortError";
                if (isAborted3) {
                    const { reasonInfo, finishOutcome } = classifyAbortFinish(parentCtx.reason);
                    if (!finishRecorded) {
                        executeOutcome = finishOutcome;
                        recordGenerateImageExecuteFinish(parentCtx, executeOutcome);
                        finishRecorded = true;
                    }
                    generateImageAbortCounter.increment(parentCtx, 1, {
                        phase: "execute",
                        abort_reason_type: finishOutcome
                    });
                    logger94.warn(parentCtx, "[generate-image] aborted", {
                        ...reasonInfo,
                        abortReason: finishOutcome
                    });
                } else if (!finishRecorded) {
                    const finishOutcome = errorStage ? classifyErrorFinishReason(errorStage) : "internal_error";
                    executeOutcome = finishOutcome;
                    recordGenerateImageExecuteFinish(parentCtx, executeOutcome);
                    finishRecorded = true;
                }
                const contentSafetyBlocked = isContentSafetyBlockedError(error3);
                if (!isAborted3 && contentSafetyBlocked) {
                    throw createContentSafetyBlockedError();
                }
                const providerDetails = getProviderResponseDetails(error3);
                if (!isAborted3 && providerDetails !== void 0) {
                    const userFacingMessage = getGenerateImageUserFacingErrorMessage(error3);
                    const classification = classifyProviderStatus(getProviderResponseStatusCode(error3));
                    throw new CustomToolCallError(classification, {
                        clientVisibleErrorMessage: userFacingMessage,
                        modelVisibleErrorMessage: userFacingMessage,
                        error: getGenerateImageDetailedErrorMessage(error3)
                    });
                }
                throw error3;
            } finally{
                const durationMs2 = Date.now() - executeStartTimeMs;
                generateImageExecuteDurationMs.histogram(parentCtx, durationMs2, {
                    outcome: executeOutcome
                });
            }
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources86(env_1);
        }
    };
    const render2 = async (ctx, result, _props)=>{
        let renderOutcome = "internal_error";
        try {
            if (result.result.case === "success") {
                const { filePath, imageData } = result.result.value;
                const artifactsFolder = requestContext?.env?.artifactsFolder;
                if (artifactsFolder && filePath.startsWith(artifactsFolder)) {
                    renderOutcome = "success";
                    return createStringResult(`Successfully generated image. Display it in your response using:
<img src="${filePath}" alt="Generated image" />`);
                }
                const isDsv3Model = promptVersion === "dsv3-1018" || promptVersion === "dsv3-1205" || promptVersion === "cursor-0226";
                if (isDsv3Model) {
                    renderOutcome = "success";
                    return createStringResult(`Successfully generated image at: ${filePath}
Always use this absolute path when referring to the image. Do not repeat this image as a Markdown reference; it is already displayed to the user.`);
                }
                if (!imageData) {
                    renderOutcome = "missing_image_data";
                    return createStringResult(`Failed to generate image: no image data returned`);
                }
                const base64Data = imageData.includes(",") ? imageData.split(",")[1] : imageData;
                const imageBuffer = Buffer.from(base64Data, "base64");
                try {
                    const resizedImage = await resizeImageBufferIfNeeded(imageBuffer);
                    const resizedBase64 = Buffer.from(resizedImage.data).toString("base64");
                    renderOutcome = "success";
                    return createImageResult(resizedBase64, resizedImage.mimeType, `Successfully generated image at: ${filePath}
Always use this absolute path when referring to the image. Do not repeat this image as a Markdown reference; it is already displayed to the user.`);
                } catch (error3) {
                    renderOutcome = isResizeImageError(error3) ? "resize_error" : "internal_error";
                    throw error3;
                }
            }
            if (result.result.case === "error" && result.result.value.error === ASK_MODE_MODEL_ERROR) {
                renderOutcome = "success";
                return createStringResult(ASK_MODE_MODEL_ERROR);
            }
            renderOutcome = "success";
            return createStringResult(resultToString3(result));
        } finally{
            recordGenerateImageRenderFinish(ctx, renderOutcome);
        }
    };
    const name17 = getToolName4(promptVersion);
    const description3 = getDescription3(promptVersion);
    return createZodAgentTool("GENERATE_IMAGE", {
        name: name17,
        contextType: {
            type: "dynamic"
        },
        descriptionGenerator: (_props)=>description3,
        parameters: parametersSchema16,
        execute: withSafeParsedArgs(parametersSchema16, execute, createGenerateImageToolCall(new GenerateImageToolCall())),
        render: render2,
        serializeError: (error3)=>{
            const errorMessage4 = error3 instanceof ToolCallError ? error3.clientVisibleErrorMessage : getGenerateImageBaseErrorMessage(error3);
            return createGenerateImageToolCall(new GenerateImageToolCall({
                result: new GenerateImageResult({
                    result: {
                        case: "error",
                        value: new GenerateImageError({
                            error: errorMessage4
                        })
                    }
                })
            }));
        }
    });
};

}
