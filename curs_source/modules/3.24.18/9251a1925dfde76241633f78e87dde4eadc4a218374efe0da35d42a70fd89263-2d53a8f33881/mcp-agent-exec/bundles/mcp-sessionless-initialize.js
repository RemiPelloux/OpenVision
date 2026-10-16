import { init_types8, isInitializeRequest, isInitializedNotification, isJSONRPCRequest } from "../../node_modules/.pnpm/_f57967f111cc31bce3ae8564d9ceaa93/node_modules/@modelcontextprotocol/sdk/dist/esm/types.js";
var import_node_crypto14, ReplayedInitializeTransport;
export { ReplayedInitializeTransport, import_node_crypto14 };
var __wakaru_init_mcp_sessionless_initialize_initialized = false;
export function init_mcp_sessionless_initialize() {
if (__wakaru_init_mcp_sessionless_initialize_initialized) return;
__wakaru_init_mcp_sessionless_initialize_initialized = true;
"use strict";
import_node_crypto14 = require("node:crypto");
init_types8();
ReplayedInitializeTransport = class {
    constructor(inner, initializeResult){
        this.inner = inner;
        this.initializeResult = initializeResult;
        inner.onclose = ()=>this.onclose?.();
        inner.onerror = (error3)=>this.onerror?.(error3);
        inner.onmessage = (message)=>this.onmessage?.(message);
    }
    get sessionId() {
        return this.inner.sessionId;
    }
    setProtocolVersion(version4) {
        this.inner.setProtocolVersion(version4);
    }
    start() {
        return this.inner.start();
    }
    close() {
        return this.inner.close();
    }
    async send(message, options2) {
        if (isJSONRPCRequest(message) && isInitializeRequest(message)) {
            const response = {
                jsonrpc: "2.0",
                id: message.id,
                result: this.initializeResult
            };
            queueMicrotask(()=>this.onmessage?.(response));
            return;
        }
        if (isInitializedNotification(message)) {
            return;
        }
        await this.inner.send(message, options2);
    }
};

}
