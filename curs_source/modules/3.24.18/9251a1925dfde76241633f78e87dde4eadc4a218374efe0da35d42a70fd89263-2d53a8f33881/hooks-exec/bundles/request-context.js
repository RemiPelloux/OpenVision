import { HooksConfigInfo, RequestContext, RequestContextResult, RequestContextSuccess, init_request_context_exec_pb } from "../../proto/dist/generated/agent/v1/request_context_exec_pb.js";
var RequestContextExecutorWithHooksContext;
export { RequestContextExecutorWithHooksContext };
var __wakaru_init_request_context3_initialized = false;
export function init_request_context3() {
if (__wakaru_init_request_context3_initialized) return;
__wakaru_init_request_context3_initialized = true;
"use strict";
init_request_context_exec_pb();
RequestContextExecutorWithHooksContext = class {
    constructor(innerExecutor, hooksAdditionalContextPromise, teamHooksReadyPromise, hooksConfigLease){
        this.innerExecutor = innerExecutor;
        this.hooksAdditionalContextPromise = hooksAdditionalContextPromise;
        this.teamHooksReadyPromise = teamHooksReadyPromise;
        this.hooksConfigLease = hooksConfigLease;
    }
    async execute(ctx, args, options2) {
        if (this.teamHooksReadyPromise) {
            await this.teamHooksReadyPromise;
        }
        const result = await this.innerExecutor.execute(ctx, args, options2);
        const hooksAdditionalContext = await this.hooksAdditionalContextPromise;
        const hooksConfig = this.hooksConfigLease ? new HooksConfigInfo({
            configuredSteps: Array.from(this.hooksConfigLease.getConfiguredSteps())
        }) : void 0;
        if (result.result.case === "success" && (hooksAdditionalContext || hooksConfig)) {
            const requestContext = result.result.value.requestContext;
            const updatedRequestContext = new RequestContext({
                ...requestContext,
                ...hooksAdditionalContext && {
                    hooksAdditionalContext
                },
                ...hooksConfig && {
                    hooksConfig
                }
            });
            return new RequestContextResult({
                result: {
                    case: "success",
                    value: new RequestContextSuccess({
                        requestContext: updatedRequestContext,
                        servedFromDiskCache: result.result.value.servedFromDiskCache
                    })
                }
            });
        }
        return result;
    }
};

}
