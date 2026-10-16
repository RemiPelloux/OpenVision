import { init_dist8 } from "../../../../agent-exec/dist/index.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_common9 } from "../common.js";
import { init_core5 } from "../core.js";
import { init_generate_image } from "./generate-image.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { init_dist2 } from "../../../../constants/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { createCounter, createHistogram } from "../../../../dist_exports.js";
import { external_exports } from "../../../../external_exports.js";
import { classifyMode } from "../../../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../../../metrics/dist/index.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_generate_video_tool_pb } from "../../../../proto/dist/generated/agent/v1/generate_video_tool_pb.js";
import { init_read_exec_pb } from "../../../../proto/dist/generated/agent/v1/read_exec_pb.js";
import { init_write_exec_pb } from "../../../../proto/dist/generated/agent/v1/write_exec_pb.js";
import { init_privacy_mode_pb } from "../../../../proto/dist/generated/aiserver/v1/privacy_mode_pb.js";
var import_node_crypto38, __addDisposableResource87, __disposeResources87, logger95, generateVideoExecuteFinishCounter, generateVideoExecuteDurationMs, supportedAspectRatios2, supportedResolutions, MIN_DURATION_SECONDS, MAX_DURATION_SECONDS, MAX_REFERENCE_IMAGES, INPUT_IMAGE_EXTENSION, VIDEO_CONTENT_SAFETY_BLOCKED_ERROR, inputImagePath, parametersSchema17, DESCRIPTION, NO_PROJECT_FOLDER_ERROR2;
export { DESCRIPTION, INPUT_IMAGE_EXTENSION, MAX_DURATION_SECONDS, MAX_REFERENCE_IMAGES, MIN_DURATION_SECONDS, NO_PROJECT_FOLDER_ERROR2, VIDEO_CONTENT_SAFETY_BLOCKED_ERROR, __addDisposableResource87, __disposeResources87, generateVideoExecuteDurationMs, generateVideoExecuteFinishCounter, import_node_crypto38, inputImagePath, logger95, parametersSchema17, supportedAspectRatios2, supportedResolutions };
var __wakaru_init_generate_video_initialized = false;
export function init_generate_video() {
if (__wakaru_init_generate_video_initialized) return;
__wakaru_init_generate_video_initialized = true;
"use strict";
import_node_crypto38 = require("node:crypto");
init_dist8();
init_dist26();
init_dist2();
init_dist();
init_dist4();
init_agent_pb();
init_generate_video_tool_pb();
init_read_exec_pb();
init_write_exec_pb();
init_privacy_mode_pb();
init_zod();
init_common9();
init_core5();
init_generate_image();
__addDisposableResource87 = function(env, value, async) {
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
__disposeResources87 = (function(SuppressedError2) {
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
logger95 = createLogger("agent/tools/generate-video");
generateVideoExecuteFinishCounter = createCounter("agent.tools.generate_video.execute.finished", {
    description: "Generate video tool execute outcomes",
    labelNames: [
        "outcome",
        "mode"
    ]
});
generateVideoExecuteDurationMs = createHistogram("agent.tools.generate_video.execute.duration_ms", {
    description: "End-to-end generate video execute latency in milliseconds",
    labelNames: [
        "outcome"
    ]
});
supportedAspectRatios2 = [
    "1:1",
    "16:9",
    "9:16",
    "4:3",
    "3:4",
    "3:2",
    "2:3"
];
supportedResolutions = [
    "480p",
    "720p"
];
MIN_DURATION_SECONDS = 1;
MAX_DURATION_SECONDS = 15;
MAX_REFERENCE_IMAGES = 14;
INPUT_IMAGE_EXTENSION = /\.(jpe?g|png|webp)$/i;
VIDEO_CONTENT_SAFETY_BLOCKED_ERROR = "The video generation was blocked due to content safety policies.";
inputImagePath = external_exports.string().trim().min(1, "must not be empty").refine((imagePath)=>INPUT_IMAGE_EXTENSION.test(imagePath), "must be a JPEG, PNG, or WebP image (.jpg, .jpeg, .png, or .webp)");
parametersSchema17 = external_exports.object({
    prompt: external_exports.string().optional().describe("Subject, motion, camera, and mood. Optional only for image-to-video."),
    filename: external_exports.string().optional().describe("Optional file name such as 'hero.mp4', without a directory."),
    image_path: inputImagePath.optional().describe("Still image to animate; becomes the first frame."),
    reference_image_paths: external_exports.array(inputImagePath).max(MAX_REFERENCE_IMAGES).optional().describe(`Up to ${MAX_REFERENCE_IMAGES} images guiding people, objects, clothing, or settings; re-rendered, not used as frames.`),
    duration: external_exports.number().int().min(MIN_DURATION_SECONDS).max(MAX_DURATION_SECONDS).optional().describe(`Seconds, ${MIN_DURATION_SECONDS}-${MAX_DURATION_SECONDS}. Default 6.`),
    aspect_ratio: external_exports.enum(supportedAspectRatios2).optional().describe("Image-to-video defaults to the source image's ratio."),
    resolution: external_exports.enum(supportedResolutions).optional().describe('"480p" (default) or "720p".')
}).superRefine((args, ctx)=>{
    if (classifyMode(args) !== "image_to_video" && (args.prompt?.trim() ?? "") === "") {
        ctx.addIssue({
            code: external_exports.ZodIssueCode.custom,
            path: [
                "prompt"
            ],
            message: "prompt is required for text-to-video and reference-to-video"
        });
    }
});
DESCRIPTION = `Generate a short MP4 video clip with Grok Imagine and save it as a project asset.

STRICT INVOCATION RULES (must follow):
- Only use this tool when the user explicitly asks for a video, animation, or clip. Do not generate videos "just to be helpful".
- Generation can take minutes; call it once per request.

The inputs select the mode:
- Image-to-video: \`image_path\`. The image becomes the first frame; the prompt may be brief.
- Reference-to-video: \`reference_image_paths\`. Cite them in the prompt as <IMAGE_0>, <IMAGE_1>, ... If \`image_path\` is also set, it is <IMAGE_0> and the references start at <IMAGE_1>.
- Text-to-video: prompt only.

Describe subject, motion, camera movement, lighting, and mood concretely. Set \`duration\` and \`resolution\` only when the user asks.
`;
NO_PROJECT_FOLDER_ERROR2 = "generate_video needs a workspace/project folder so it has somewhere to save the MP4. Open a folder or run from a workspace, then try again.";

}
