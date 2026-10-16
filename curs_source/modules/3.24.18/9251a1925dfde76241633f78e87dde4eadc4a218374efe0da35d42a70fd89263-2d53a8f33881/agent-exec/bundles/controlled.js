import { init_exec_error } from "./exec-error.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { appendGitDiagnostics, createCounter, createHistogram, createWritableIterable, getExecClientErrorCode } from "../../dist_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
import { ExecClientControlMessage, ExecClientHeartbeat, ExecClientMessage, ExecClientStreamClose, ExecClientThrow, init_exec_pb } from "../../proto/dist/generated/agent/v1/exec_pb.js";
import { init_dist3 } from "../../utils/dist/index.js";
import { WriteIterableClosedError } from "../../utils/dist/writable-iterable.js";
var logger7, AGENT_STORE_CONFLICT_HOOK_EVENT_NAME, controlledExecDuration, controlledExecSuccess, controlledExecError, EXEC_HEARTBEAT_INTERVAL_MS, CAPABILITY_GATED_EXEC_CASE_ERRORS, ControlledExecDisposedError, SimpleControlledExecHandler, SimpleControlledStreamExecHandler, SimpleControlledExecManager;
export { AGENT_STORE_CONFLICT_HOOK_EVENT_NAME, CAPABILITY_GATED_EXEC_CASE_ERRORS, ControlledExecDisposedError, EXEC_HEARTBEAT_INTERVAL_MS, SimpleControlledExecHandler, SimpleControlledExecManager, SimpleControlledStreamExecHandler, controlledExecDuration, controlledExecError, controlledExecSuccess, logger7 };
var __wakaru_init_controlled2_initialized = false;
export function init_controlled2() {
if (__wakaru_init_controlled2_initialized) return;
__wakaru_init_controlled2_initialized = true;
"use strict";
init_dist();
init_dist4();
init_exec_pb();
init_dist3();
init_exec_error();
logger7 = createLogger("SimpleControlledExecManager");
AGENT_STORE_CONFLICT_HOOK_EVENT_NAME = "agentStoreConflict";
controlledExecDuration = createHistogram("agent_exec.controlled.exec.duration_ms", {
    description: "Duration of controlled exec operations in milliseconds",
    labelNames: [
        "exec_case"
    ]
});
controlledExecSuccess = createCounter("agent_exec.controlled.exec.success", {
    description: "Count of successful controlled exec operations",
    labelNames: [
        "exec_case"
    ]
});
controlledExecError = createCounter("agent_exec.controlled.exec.error", {
    description: "Count of failed controlled exec operations",
    labelNames: [
        "exec_case"
    ]
});
EXEC_HEARTBEAT_INTERVAL_MS = 3e3;
CAPABILITY_GATED_EXEC_CASE_ERRORS = {
    computerUseArgs: "Computer use is not enabled for this environment, so the Computer tool and the computerUse subagent cannot run here. Do not retry computer actions; verify with non-GUI methods (automated tests, shell commands) instead. (No computer-use handler is registered on this exec daemon.)",
    recordScreenArgs: "Screen recording is not enabled for this environment, so recordings cannot be captured here. Do not retry; skip the recording and present other evidence instead. (No record-screen handler is registered on this exec daemon.)"
};
ControlledExecDisposedError = class extends Error {
    constructor(message){
        super(message);
        this.name = "ControlledExecDisposedError";
    }
};
SimpleControlledExecHandler = class {
    constructor(exec2, deserializeArgs, serializeResult){
        this.exec = exec2;
        this.deserializeArgs = deserializeArgs;
        this.serializeResult = serializeResult;
    }
    handle(ctx, serverMessage) {
        const r = this.deserializeArgs(serverMessage);
        if (r === void 0) {
            return void 0;
        }
        const { id, args } = r;
        async function* generator(self2) {
            const startTime = performance.now();
            const hookContextCollector = [];
            const result = await self2.exec.execute(ctx, args, {
                execId: serverMessage.execId,
                hookContextCollector,
                deliverAgentStoreConflictNotices: serverMessage.acceptHookAdditionalContexts === true
            });
            const message = self2.serializeResult(id, result);
            message.localExecutionTimeMs = Math.round(Math.max(0, performance.now() - startTime));
            if (hookContextCollector.length > 0) {
                message.hookAdditionalContexts = hookContextCollector;
            }
            yield message;
        }
        return generator(this);
    }
};
SimpleControlledStreamExecHandler = class {
    constructor(exec2, deserializeArgs, serializeStream){
        this.exec = exec2;
        this.deserializeArgs = deserializeArgs;
        this.serializeStream = serializeStream;
    }
    handle(ctx, serverMessage) {
        const r = this.deserializeArgs(serverMessage);
        if (r === void 0) {
            return void 0;
        }
        const { id, args } = r;
        async function* generator(self2) {
            const startTime = performance.now();
            const hookContextCollector = [];
            const stream3 = self2.exec.execute(ctx, args, {
                execId: serverMessage.execId,
                hookContextCollector,
                deliverAgentStoreConflictNotices: serverMessage.acceptHookAdditionalContexts === true
            });
            try {
                for await (const event of stream3){
                    const message = self2.serializeStream(id, event);
                    message.localExecutionTimeMs = Math.round(Math.max(0, performance.now() - startTime));
                    yield message;
                }
            } finally{
                const conflictCarriers = hookContextCollector.filter((c)=>c.hookEventName === AGENT_STORE_CONFLICT_HOOK_EVENT_NAME);
                if (conflictCarriers.length > 0) {
                    yield new ExecClientMessage({
                        id,
                        hookAdditionalContexts: conflictCarriers
                    });
                }
            }
        }
        return generator(this);
    }
};
SimpleControlledExecManager = class _SimpleControlledExecManager {
    constructor(options2){
        this.handlers = [];
        this.runningExecs = new Map();
        const includeStderr = options2?.includeGitStderrInThrows ?? false;
        this.includeGitStderrInThrows = typeof includeStderr === "function" ? includeStderr : ()=>includeStderr;
    }
    register(handler) {
        this.handlers.push(handler);
    }
    handleControlMessage(serverMessage) {
        if (serverMessage.message.case === "abort") {
            const id = serverMessage.message.value.id;
            const execCtxCancel = this.runningExecs.get(id);
            if (execCtxCancel) {
                execCtxCancel();
            }
        }
    }
    handle(ctx, serverMessage) {
        const [execCtx, execCtxCancel] = ctx.withCancel();
        this.runningExecs.set(serverMessage.id, execCtxCancel);
        const execCase = serverMessage.message.case ?? "unknown";
        for (const handler of this.handlers){
            const result = handler.handle(execCtx, serverMessage);
            if (result === void 0) {
                continue;
            }
            const resultStream = result;
            const outputStream = createWritableIterable();
            let heartbeatTimer;
            const scheduleHeartbeat = ()=>{
                heartbeatTimer = setTimeout(()=>{
                    outputStream.write(new ExecClientControlMessage({
                        message: {
                            case: "heartbeat",
                            value: new ExecClientHeartbeat({
                                id: serverMessage.id
                            })
                        }
                    })).then(scheduleHeartbeat).catch(()=>{});
                }, EXEC_HEARTBEAT_INTERVAL_MS);
            };
            scheduleHeartbeat();
            const startTime = performance.now();
            const run = async ()=>{
                try {
                    for await (const message of resultStream){
                        await outputStream.write(message);
                    }
                    await outputStream.write(new ExecClientControlMessage({
                        message: {
                            case: "streamClose",
                            value: new ExecClientStreamClose({
                                id: serverMessage.id
                            })
                        }
                    }));
                    controlledExecSuccess.increment(execCtx, 1, {
                        exec_case: execCase
                    });
                } catch (error3) {
                    if (error3 instanceof WriteIterableClosedError) {
                        return;
                    }
                    controlledExecError.increment(execCtx, 1, {
                        exec_case: execCase
                    });
                    await outputStream.write(new ExecClientControlMessage({
                        message: {
                            case: "throw",
                            value: new ExecClientThrow({
                                id: serverMessage.id,
                                error: error3 instanceof Error ? appendGitDiagnostics(error3.message, error3, {
                                    includeStderr: this.includeGitStderrInThrows()
                                }) : "Unknown error",
                                stackTrace: error3 instanceof Error ? error3.stack : void 0,
                                errorCode: getExecClientErrorCode(error3)
                            })
                        }
                    }));
                } finally{
                    const duration3 = performance.now() - startTime;
                    controlledExecDuration.histogram(execCtx, duration3, {
                        exec_case: execCase
                    });
                    clearTimeout(heartbeatTimer);
                    outputStream.close();
                    this.runningExecs.delete(serverMessage.id);
                    execCtxCancel();
                }
            };
            void run();
            return outputStream;
        }
        this.runningExecs.delete(serverMessage.id);
        execCtxCancel();
        const messageCase = serverMessage.message.case;
        const errorMessage4 = (messageCase === void 0 ? void 0 : CAPABILITY_GATED_EXEC_CASE_ERRORS[messageCase]) ?? `No handler found for server message of type ${messageCase}`;
        logger7.error(ctx, errorMessage4, {
            messageCase
        });
        controlledExecError.increment(ctx, 1, {
            exec_case: execCase
        });
        async function* errorStream() {
            yield new ExecClientControlMessage({
                message: {
                    case: "throw",
                    value: new ExecClientThrow({
                        id: serverMessage.id,
                        error: errorMessage4
                    })
                }
            });
            yield new ExecClientControlMessage({
                message: {
                    case: "streamClose",
                    value: new ExecClientStreamClose({
                        id: serverMessage.id
                    })
                }
            });
        }
        return errorStream();
    }
    static fromResources(resources, options2) {
        const execManager = new _SimpleControlledExecManager(options2);
        for (const [resource, implementation] of resources.entries()){
            resource.registerControlledImplementation(implementation, execManager);
        }
        return execManager;
    }
};

}
