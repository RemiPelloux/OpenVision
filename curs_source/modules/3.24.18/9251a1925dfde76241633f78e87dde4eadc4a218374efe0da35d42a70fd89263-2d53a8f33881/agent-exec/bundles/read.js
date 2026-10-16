import { SimpleControlledExecHandler, init_controlled2 } from "./controlled.js";
import { ExecutorResource, init_remote } from "./remote.js";
import { RESOURCE_NAMES, init_resource_names } from "./resource-names.js";
import { init_resource_provider } from "./resource-provider.js";
import { init_serialization } from "./serialization.js";
import { createClientDeserializer, createClientSerializer, createResource, createServerDeserializer, createServerSerializer, toDigestOnlyReadResult } from "../../dist_exports.js";
import { ReadArgs, init_read_exec_pb } from "../../proto/dist/generated/agent/v1/read_exec_pb.js";
var utf8, DigestOnlyReadExecutor, readExecutorResource, redactedReadExecutorResource;
export { DigestOnlyReadExecutor, readExecutorResource, redactedReadExecutorResource, utf8 };
var __wakaru_init_read_initialized = false;
export function init_read() {
if (__wakaru_init_read_initialized) return;
__wakaru_init_read_initialized = true;
"use strict";
init_read_exec_pb();
init_controlled2();
init_remote();
init_resource_names();
init_resource_provider();
init_serialization();
utf8 = new TextEncoder();
DigestOnlyReadExecutor = class {
    constructor(inner){
        this.inner = inner;
    }
    async execute(ctx, args, options2) {
        if (args.digestOnly !== true) {
            return this.inner.execute(ctx, args, options2);
        }
        const fullRead = new ReadArgs({
            ...args,
            digestOnly: void 0
        });
        return toDigestOnlyReadResult(await this.inner.execute(ctx, fullRead, options2));
    }
};
readExecutorResource = createResource(RESOURCE_NAMES.readExecutor, (execManager)=>new ExecutorResource(execManager, createServerSerializer("readArgs"), createClientDeserializer("readResult")), (implementation, controlledExecManager)=>{
    controlledExecManager.register(new SimpleControlledExecHandler(implementation, createServerDeserializer("readArgs"), createClientSerializer("readResult")));
});
redactedReadExecutorResource = createResource(RESOURCE_NAMES.redactedReadExecutor, (execManager)=>new ExecutorResource(execManager, createServerSerializer("redactedReadArgs"), createClientDeserializer("redactedReadResult")), (implementation, controlledExecManager)=>{
    controlledExecManager.register(new SimpleControlledExecHandler(implementation, createServerDeserializer("redactedReadArgs"), createClientSerializer("redactedReadResult")));
});

}
