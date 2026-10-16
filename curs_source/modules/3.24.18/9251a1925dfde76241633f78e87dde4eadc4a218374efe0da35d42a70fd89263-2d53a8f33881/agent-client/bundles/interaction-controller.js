import { init_dist7 } from "../../agent-core/dist/index.js";
import { createSpan } from "../../agent-kv/dist/controlled.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { createFailClosedInteractionResponse } from "../../dist_exports.js";
import { InteractionResponse, init_agent_pb } from "../../proto/dist/generated/agent/v1/agent_pb.js";
var __addDisposableResource6, __disposeResources6, logger11, HUMAN_BLOCKING_QUERY_CASES, INTERACTION_SURFACE_FAILED_REASON, ClientInteractionController;
export { ClientInteractionController, HUMAN_BLOCKING_QUERY_CASES, INTERACTION_SURFACE_FAILED_REASON, __addDisposableResource6, __disposeResources6, logger11 };
var __wakaru_init_interaction_controller_initialized = false;
export function init_interaction_controller() {
if (__wakaru_init_interaction_controller_initialized) return;
__wakaru_init_interaction_controller_initialized = true;
"use strict";
init_dist7();
init_dist();
init_agent_pb();
__addDisposableResource6 = function(env, value, async) {
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
__disposeResources6 = (function(SuppressedError2) {
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
logger11 = createLogger("ClientInteractionController");
HUMAN_BLOCKING_QUERY_CASES = new Set([
    "askQuestionInteractionQuery",
    "switchModeRequestQuery",
    "mcpAuthRequestQuery",
    "connectScmRequestQuery"
]);
INTERACTION_SURFACE_FAILED_REASON = "The client could not show this request to the user";
ClientInteractionController = class {
    constructor(interactionStream, interactionListener, queryResponseStream, stallSuspender){
        this.interactionStream = interactionStream;
        this.interactionListener = interactionListener;
        this.queryResponseStream = queryResponseStream;
        this.stallSuspender = stallSuspender;
        this.pendingHumanQueries = 0;
    }
    async run(ctx) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const runSpan = __addDisposableResource6(env_1, createSpan(ctx.withName("ClientInteractionController.run")), false);
            ctx = runSpan.ctx;
            let promise = Promise.resolve();
            let firstError;
            for await (const message of this.interactionStream){
                const apply = ()=>message.case === "interactionQuery" ? this.handleInteractionQuery(ctx, message.value) : this.handleInteractionUpdate(ctx, message.value);
                promise = promise.then(apply).catch((error3)=>{
                    logger11.error(ctx, "Error handling interaction message", error3, {
                        messageCase: message.case
                    });
                    firstError ??= error3;
                });
            }
            await promise;
            if (firstError !== void 0) {
                throw firstError;
            }
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources6(env_1);
        }
    }
    async handleInteractionUpdate(ctx, update) {
        await this.interactionListener.sendUpdate(ctx, update);
    }
    handleInteractionQuery(ctx, query) {
        const awaitsHuman = query.query.case !== void 0 && HUMAN_BLOCKING_QUERY_CASES.has(query.query.case);
        let unpaused = false;
        const unpause = ()=>{
            if (!awaitsHuman || unpaused) {
                return;
            }
            unpaused = true;
            this.pendingHumanQueries--;
            if (this.pendingHumanQueries === 0) {
                this.stallSuspender?.setPaused(false);
            }
        };
        if (awaitsHuman) {
            this.pendingHumanQueries++;
            if (this.pendingHumanQueries === 1) {
                this.stallSuspender?.setPaused(true);
            }
        }
        void (async ()=>this.interactionListener.query(ctx, query))().catch((error3)=>{
            const fallback3 = createFailClosedInteractionResponse(query, INTERACTION_SURFACE_FAILED_REASON);
            if (!(fallback3 instanceof InteractionResponse)) {
                throw error3;
            }
            logger11.error(ctx, "Error handling interaction query; answering with a fail-closed response", {
                queryCase: query.query.case,
                error: error3
            });
            return fallback3;
        }).then((response)=>{
            unpause();
            return this.queryResponseStream.write(response);
        }).catch((error3)=>{
            logger11.error(ctx, "Error handling interaction query", error3);
        }).finally(unpause);
    }
};

}
