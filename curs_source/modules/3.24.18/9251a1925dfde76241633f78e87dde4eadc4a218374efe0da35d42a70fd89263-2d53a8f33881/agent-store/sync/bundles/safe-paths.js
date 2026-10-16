import { __toESM } from "../../../agent-host/dist/storage/sqlite-store.js";
var fs20, path46, UnsafeAgentStorePathError, MAX_SEGMENT_LENGTH_BYTES, WINDOWS_RESERVED, WINDOWS_FORBIDDEN_FILENAME_CHARS;
export { MAX_SEGMENT_LENGTH_BYTES, UnsafeAgentStorePathError, WINDOWS_FORBIDDEN_FILENAME_CHARS, WINDOWS_RESERVED, fs20, path46 };
var __wakaru_init_safe_paths_initialized = false;
export function init_safe_paths() {
if (__wakaru_init_safe_paths_initialized) return;
__wakaru_init_safe_paths_initialized = true;
"use strict";
fs20 = __toESM(require("node:fs"), 1);
path46 = __toESM(require("node:path"), 1);
UnsafeAgentStorePathError = class extends Error {
    constructor(options2){
        super(options2.message);
        this.name = "UnsafeAgentStorePathError";
        this.code = options2.code;
        this.relPath = options2.relPath;
        this.failedPath = options2.failedPath;
    }
};
MAX_SEGMENT_LENGTH_BYTES = 255;
WINDOWS_RESERVED = new Set([
    "con",
    "prn",
    "aux",
    "nul",
    "com1",
    "com2",
    "com3",
    "com4",
    "com5",
    "com6",
    "com7",
    "com8",
    "com9",
    "lpt1",
    "lpt2",
    "lpt3",
    "lpt4",
    "lpt5",
    "lpt6",
    "lpt7",
    "lpt8",
    "lpt9"
]);
WINDOWS_FORBIDDEN_FILENAME_CHARS = /[<>:"|?*]/;

}
