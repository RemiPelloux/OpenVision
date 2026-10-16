import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../context/dist/index.js";
var import_node_fs38, import_promises51, import_node_path93, logger114, FILE_READ_CHUNK_BYTES, MAX_UNBOUNDED_FILE_READ_BYTES, ZERO, AgentHostFileNotFoundError, AgentHostFileChangedError, AgentHostFileOutOfRangeError;
export { AgentHostFileChangedError, AgentHostFileNotFoundError, AgentHostFileOutOfRangeError, FILE_READ_CHUNK_BYTES, MAX_UNBOUNDED_FILE_READ_BYTES, ZERO, import_node_fs38, import_node_path93, import_promises51, logger114 };
var __wakaru_init_file_read_initialized = false;
export function init_file_read() {
if (__wakaru_init_file_read_initialized) return;
__wakaru_init_file_read_initialized = true;
"use strict";
import_node_fs38 = require("node:fs");
import_promises51 = require("node:fs/promises");
import_node_path93 = require("node:path");
init_dist();
logger114 = createLogger("agent-host");
FILE_READ_CHUNK_BYTES = 256 * 1024;
MAX_UNBOUNDED_FILE_READ_BYTES = 50 * 1024 * 1024;
ZERO = BigInt(0);
AgentHostFileNotFoundError = class extends Error {
    constructor(reason){
        super(`Agent host file not found (${reason})`);
        this.code = "FILE_NOT_FOUND";
        this.name = "AgentHostFileNotFoundError";
        this.reason = reason;
    }
};
AgentHostFileChangedError = class extends Error {
    constructor(detail){
        super(`Agent host file changed during read: ${detail}`);
        this.code = "FILE_CHANGED";
        this.name = "AgentHostFileChangedError";
    }
};
AgentHostFileOutOfRangeError = class extends Error {
    constructor(args){
        super(`Agent host file read_offset ${args.readOffset} is past the end of the file (${args.totalBytes} bytes)`);
        this.code = "FILE_OUT_OF_RANGE";
        this.name = "AgentHostFileOutOfRangeError";
        this.readOffset = args.readOffset;
        this.totalBytes = args.totalBytes;
    }
};

}
