var import_node_fs30, import_promises43, SymlinkRefusedError;
export { SymlinkRefusedError, import_node_fs30, import_promises43 };
var __wakaru_init_symlink_safe_write_initialized = false;
export function init_symlink_safe_write() {
if (__wakaru_init_symlink_safe_write_initialized) return;
__wakaru_init_symlink_safe_write_initialized = true;
"use strict";
import_node_fs30 = require("node:fs");
import_promises43 = require("node:fs/promises");
SymlinkRefusedError = class extends Error {
    constructor(path64, message){
        super(message);
        this.name = "SymlinkRefusedError";
        this.path = path64;
    }
};

}
