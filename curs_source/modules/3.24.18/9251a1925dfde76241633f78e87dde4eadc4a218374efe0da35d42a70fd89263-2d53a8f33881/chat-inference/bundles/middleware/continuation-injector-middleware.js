import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { BaseMiddleware, init_base3 } from "../base.js";
import { init_dist } from "../../../context/dist/index.js";
import { needsContinuationMessage } from "../../../mcp_sandbox_policy_exports.js";
var logger38, CONTINUATION_MESSAGE, ContinuationInjectorMiddleware, createContinuationInjectorMiddleware, continuationInjectorMiddleware;
export { CONTINUATION_MESSAGE, ContinuationInjectorMiddleware, continuationInjectorMiddleware, createContinuationInjectorMiddleware, logger38 };
var __wakaru_init_continuation_injector_middleware_initialized = false;
export function init_continuation_injector_middleware() {
if (__wakaru_init_continuation_injector_middleware_initialized) return;
__wakaru_init_continuation_injector_middleware_initialized = true;
"use strict";
init_dist();
init_base3();
logger38 = createLogger("@anysphere/chat-inference/continuation-injector-middleware");
CONTINUATION_MESSAGE = "Your previous response was interrupted. Continue from where you left off.";
ContinuationInjectorMiddleware = class extends BaseMiddleware {
    stream(ctx, invocationId, tools, options2) {
        const messages = this.innerExecutor.getMessages();
        if (needsContinuationMessage(messages)) {
            logger38.info(ctx, "[continuation-injector] last message is assistant; injecting continuation prompt", {
                messageCount: messages.length
            });
            this.innerExecutor.appendMessages({
                role: "user",
                content: CONTINUATION_MESSAGE
            });
        }
        return this.innerExecutor.stream(ctx, invocationId, tools, options2);
    }
};
createContinuationInjectorMiddleware = ()=>{
    return (executor)=>new ContinuationInjectorMiddleware(executor);
};
continuationInjectorMiddleware = createContinuationInjectorMiddleware();

}
