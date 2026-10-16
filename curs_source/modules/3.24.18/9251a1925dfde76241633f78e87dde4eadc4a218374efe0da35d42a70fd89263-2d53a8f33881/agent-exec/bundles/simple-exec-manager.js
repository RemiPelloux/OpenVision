import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { createWritableIterable } from "../../dist_exports.js";
import { fromRedactedExecClientMessage, isRedactedExecClientMessage, toRedactedExecServerControlMessage } from "../../mcp_sandbox_policy_exports.js";
import { ExecServerAbort, ExecServerControlMessage, init_exec_pb } from "../../proto/dist/generated/agent/v1/exec_pb.js";
import { PrivacyMode, init_privacy_mode_pb } from "../../proto/dist/generated/aiserver/v1/privacy_mode_pb.js";
import { init_agent_v1 } from "../../redacted-protos/dist/agent-v1.js";
import { PrivacyCapability } from "../../redaction/dist/classification.js";
import { init_dist27 } from "../../redaction/dist/index.js";
import { init_dist3 } from "../../utils/dist/index.js";
import { WriteIterableClosedError } from "../../utils/dist/writable-iterable.js";
var EXEC_HEARTBEAT_TIMEOUT_MS, logger144, SimpleExecManager;
export { EXEC_HEARTBEAT_TIMEOUT_MS, SimpleExecManager, logger144 };
var __wakaru_init_simple_exec_manager_initialized = false;
export function init_simple_exec_manager() {
if (__wakaru_init_simple_exec_manager_initialized) return;
__wakaru_init_simple_exec_manager_initialized = true;
"use strict";
init_dist();
init_exec_pb();
init_privacy_mode_pb();
init_agent_v1();
init_dist27();
init_dist3();
EXEC_HEARTBEAT_TIMEOUT_MS = 1e4;
logger144 = createLogger("SimpleExecManager");
SimpleExecManager = class {
    constructor(ctx, client, server, nextId = 0, streamMap = new Map()){
        this.ctx = ctx;
        this.client = client;
        this.server = server;
        this.nextId = nextId;
        this.streamMap = streamMap;
        this.heartbeatTimers = new Map();
        void this.run();
        this.ctx.signal.addEventListener("abort", ()=>{
            const idsToAbort = Array.from(this.streamMap.keys());
            for (const id of idsToAbort){
                this.clearHeartbeatTimer(id);
                void this.writeAbort(id);
            }
        }, {
            once: true
        });
    }
    async writeAbort(id) {
        try {
            await this.client.write(toRedactedExecServerControlMessage(new ExecServerControlMessage({
                message: {
                    case: "abort",
                    value: new ExecServerAbort({
                        id
                    })
                }
            }), PrivacyMode.UNSPECIFIED));
        } catch (error3) {
            logger144.debug(this.ctx, "exec abort not delivered; client stream closed", {
                id,
                error: error3
            });
        }
    }
    startHeartbeatTimer(id) {
        this.clearHeartbeatTimer(id);
        this.heartbeatTimers.set(id, setTimeout(()=>{
            this.heartbeatTimers.delete(id);
            const streamResolver = this.streamMap.get(id);
        }, EXEC_HEARTBEAT_TIMEOUT_MS));
    }
    clearHeartbeatTimer(id) {
        const timer2 = this.heartbeatTimers.get(id);
        if (timer2) {
            clearTimeout(timer2);
            this.heartbeatTimers.delete(id);
        }
    }
    async run() {
        for await (const message of this.server){
            if (isRedactedExecClientMessage(message)) {
                this.startHeartbeatTimer(message.id);
                const streamResolver = this.streamMap.get(message.id);
                if (streamResolver) {
                    try {
                        await streamResolver.write(message);
                    } catch (error3) {
                        if (!(error3 instanceof WriteIterableClosedError)) {
                            throw error3;
                        }
                    }
                } else {
                    logger144.error(this.ctx, "no resolver found for message", {
                        message: fromRedactedExecClientMessage(message, PrivacyCapability.STORAGE_FOR_LOGGING, {
                            enforcing: true,
                            redactUnallowedFieldsInsteadOfThrowing: true
                        })
                    });
                }
            } else {
                if (message.message.case === "heartbeat") {
                    this.startHeartbeatTimer(message.message.value.id);
                } else if (message.message.case === "streamClose") {
                    this.clearHeartbeatTimer(message.message.value.id);
                    const id = message.message.value.id;
                    const streamResolver = this.streamMap.get(id);
                    if (streamResolver) {
                        streamResolver.close();
                        this.streamMap.delete(id);
                    }
                } else if (message.message.case === "throw") {
                    this.clearHeartbeatTimer(message.message.value.id);
                    const throwId = message.message.value.id;
                    const streamResolver = this.streamMap.get(throwId);
                    if (streamResolver) {
                        const err = new Error(message.message.value.error.unwrap(PrivacyCapability.UNSAFE_ALWAYS_ALLOWED));
                        if (message.message.value.stackTrace) {
                            err.stack = message.message.value.stackTrace.unwrap(PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
                        }
                        if (message.message.value.errorCode === "EXEC_BACKEND_UNAVAILABLE") {
                            err.name = "ExecBackendUnavailableError";
                        } else if (message.message.value.errorCode === "AGENT_EXEC_STREAM_START_TIMEOUT") {
                            err.name = "AgentExecStreamStartTimeoutError";
                        }
                        streamResolver.throw(err);
                        this.streamMap.delete(throwId);
                    }
                }
            }
        }
    }
    async *createExecInstance(ctx, argsSerializer) {
        const id = this.nextId++;
        const redactedReq = argsSerializer(id);
        const streamResolver = createWritableIterable();
        this.streamMap.set(id, streamResolver);
        if (ctx.signal) {
            if (ctx.signal.aborted) {
                streamResolver.close();
                this.streamMap.delete(id);
            } else {
                ctx.signal.addEventListener("abort", ()=>{
                    this.clearHeartbeatTimer(id);
                    void this.writeAbort(id);
                }, {
                    once: true
                });
            }
        }
        await this.client.write(redactedReq);
        this.startHeartbeatTimer(id);
        try {
            for await (const redactedMessage of streamResolver){
                yield redactedMessage;
            }
        } finally{
            this.clearHeartbeatTimer(id);
            this.streamMap.delete(id);
        }
    }
};

}
