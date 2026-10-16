import { init_common9 } from "../common.js";
import { init_core5 } from "../core.js";
import { Code } from "../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/code.js";
import { init_esm3 } from "../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { init_utils_pb2 } from "../../../../proto/dist/generated/aiserver/v1/utils_pb.js";
var AGENT_STREAM_START_TIMEOUT_TITLE, AGENT_STREAM_START_TIMEOUT_DETAIL, AGENT_STREAM_START_TIMEOUT_ERROR_NAME, CONNECT_CODE_BY_NAME;
export { AGENT_STREAM_START_TIMEOUT_DETAIL, AGENT_STREAM_START_TIMEOUT_ERROR_NAME, AGENT_STREAM_START_TIMEOUT_TITLE, CONNECT_CODE_BY_NAME };
var __wakaru_init_connect_error2_initialized = false;
export function init_connect_error2() {
if (__wakaru_init_connect_error2_initialized) return;
__wakaru_init_connect_error2_initialized = true;
"use strict";
init_utils_pb2();
init_esm3();
init_common9();
init_core5();
AGENT_STREAM_START_TIMEOUT_TITLE = "Workspace Disconnected";
AGENT_STREAM_START_TIMEOUT_DETAIL = "Cursor lost connection to the workspace while starting tool execution. Reload the window and try again.";
AGENT_STREAM_START_TIMEOUT_ERROR_NAME = "AgentExecStreamStartTimeoutError";
CONNECT_CODE_BY_NAME = new Map(Array.from(Object.values(Code).filter((value)=>typeof value === "number")).map((code)=>{
    const name17 = Code[code];
    const snake = typeof name17 === "string" ? name17[0].toLowerCase() + name17.substring(1).replace(/[A-Z]/g, (c)=>`_${c.toLowerCase()}`) : String(code);
    return [
        snake,
        code
    ];
}));

}
