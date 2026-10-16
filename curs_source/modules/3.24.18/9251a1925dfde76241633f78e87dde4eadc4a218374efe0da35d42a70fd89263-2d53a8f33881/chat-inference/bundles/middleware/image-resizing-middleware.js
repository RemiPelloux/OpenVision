import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { BaseMiddleware, init_base3 } from "../base.js";
import { init_dist } from "../../../context/dist/index.js";
import { createImageResizingMiddleware, resizeImagesInMessages } from "../../../mcp_sandbox_policy_exports.js";
import { init_image_resize } from "../../../utils/dist/image-resize.js";
import { init_dist3 } from "../../../utils/dist/index.js";
var logger40, IMAGE_RESIZE_CONCURRENCY, modelImageResizeOptions, wasImagePartChecked, ImageResizingPromptExecutor, imageResizingMiddleware, imageResizingWithContentHashMiddleware;
export { IMAGE_RESIZE_CONCURRENCY, ImageResizingPromptExecutor, imageResizingMiddleware, imageResizingWithContentHashMiddleware, logger40, modelImageResizeOptions, wasImagePartChecked };
var __wakaru_init_image_resizing_middleware_initialized = false;
export function init_image_resizing_middleware() {
if (__wakaru_init_image_resizing_middleware_initialized) return;
__wakaru_init_image_resizing_middleware_initialized = true;
"use strict";
init_dist();
init_dist3();
init_image_resize();
init_base3();
logger40 = createLogger("@anysphere/chat-inference/image-resizing-middleware");
IMAGE_RESIZE_CONCURRENCY = 4;
modelImageResizeOptions = (options2)=>({
        ...options2,
        convertUnsupportedModelFormatsToPng: true
    });
wasImagePartChecked = ({ checkedImageParts, part, payload })=>checkedImageParts.has(part) && checkedImageParts.get(part) === payload;
ImageResizingPromptExecutor = class extends BaseMiddleware {
    constructor({ innerExecutor, resizeOptions, checkedImageParts }){
        super(innerExecutor);
        this.resizeOptions = resizeOptions;
        this.checkedImageParts = checkedImageParts;
    }
    stream(ctx, invocationId, tools, options2) {
        const messages = this.innerExecutor.getMessages();
        const processAndStream = async ()=>{
            const processedMessages = await resizeImagesInMessages({
                ctx,
                messages,
                resizeOptions: this.resizeOptions,
                checkedImageParts: this.checkedImageParts
            });
            this.innerExecutor.clearMessages();
            this.innerExecutor.appendMessages(processedMessages);
            return this.innerExecutor.stream(ctx, invocationId, tools, options2);
        };
        const processingPromise = processAndStream();
        const forward = (read)=>{
            const promise = processingPromise.then(read);
            void promise.catch(()=>{});
            return promise;
        };
        return {
            fullStream: (async function*() {
                const result = await processingPromise;
                yield* result.fullStream;
            })(),
            response: forward((result)=>result.response),
            usage: forward((result)=>result.usage),
            providerMetadata: forward((result)=>result.providerMetadata),
            extendedUsage: forward((result)=>result.extendedUsage),
            invocationId: forward((result)=>result.invocationId)
        };
    }
};
imageResizingMiddleware = createImageResizingMiddleware();
imageResizingWithContentHashMiddleware = createImageResizingMiddleware({
    stampUserImageContentSha256: true
});

}
