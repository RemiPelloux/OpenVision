import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { ownedConcat, readProcSelfMountinfo } from "../../dist_exports.js";
var import_node_crypto, import_node_fs4, import_node_os2, import_node_path5, import_node_stream, AGENT_STORE_FUSE_MOUNT_ROOT, PROC_SELF_MOUNTINFO, SPAWN_CWD_HOP_ENV_VAR2, SPAWN_CWD_HOP_ARGV0, SPAWN_CWD_HOP_CD_FAILED_EXIT, SPAWN_CWD_HOP_CD_FAILED_MARKER, HOP_CD_MARKER_BUF, STDOUT_PREFIX_LIMIT, SpawnCwdHopStdoutHold, SPAWN_CWD_HOP_SCRIPT, defaultReadMountinfo, SPAWN_CWD_HOP_USED_EVENT, SPAWN_CWD_HOP_CD_FAILED_EVENT;
export { AGENT_STORE_FUSE_MOUNT_ROOT, HOP_CD_MARKER_BUF, PROC_SELF_MOUNTINFO, SPAWN_CWD_HOP_ARGV0, SPAWN_CWD_HOP_CD_FAILED_EVENT, SPAWN_CWD_HOP_CD_FAILED_EXIT, SPAWN_CWD_HOP_CD_FAILED_MARKER, SPAWN_CWD_HOP_ENV_VAR2, SPAWN_CWD_HOP_SCRIPT, SPAWN_CWD_HOP_USED_EVENT, STDOUT_PREFIX_LIMIT, SpawnCwdHopStdoutHold, defaultReadMountinfo, import_node_crypto, import_node_fs4, import_node_os2, import_node_path5, import_node_stream };
var __wakaru_init_safe_spawn_cwd_initialized = false;
export function init_safe_spawn_cwd() {
if (__wakaru_init_safe_spawn_cwd_initialized) return;
__wakaru_init_safe_spawn_cwd_initialized = true;
"use strict";
import_node_crypto = require("node:crypto");
import_node_fs4 = require("node:fs");
import_node_os2 = require("node:os");
import_node_path5 = __toESM(require("node:path"), 1);
import_node_stream = require("node:stream");
AGENT_STORE_FUSE_MOUNT_ROOT = "/cursor/stores";
PROC_SELF_MOUNTINFO = "/proc/self/mountinfo";
SPAWN_CWD_HOP_ENV_VAR2 = "CURSOR_SPAWN_CWD_HOP";
SPAWN_CWD_HOP_ARGV0 = "cursor-fuse-cwd";
SPAWN_CWD_HOP_CD_FAILED_EXIT = 79;
SPAWN_CWD_HOP_CD_FAILED_MARKER = "cursor-fuse-cwd:cd";
HOP_CD_MARKER_BUF = Buffer.from(SPAWN_CWD_HOP_CD_FAILED_MARKER);
STDOUT_PREFIX_LIMIT = 32;
SpawnCwdHopStdoutHold = class {
    constructor(){
        this.held = Buffer.alloc(0);
        this.released = false;
        this.seen = 0;
        this.prefix = Buffer.alloc(0);
    }
    get bytes() {
        return this.seen;
    }
    get stdoutPrefix() {
        return this.prefix;
    }
    get diverged() {
        return this.released;
    }
    note(chunk) {
        const data = Buffer.from(chunk);
        this.seen += data.length;
        if (this.prefix.length < STDOUT_PREFIX_LIMIT) {
            const take = Math.min(data.length, STDOUT_PREFIX_LIMIT - this.prefix.length);
            this.prefix = ownedConcat([
                this.prefix,
                data.subarray(0, take)
            ]);
        }
        if (this.released) {
            return data;
        }
        const combined = ownedConcat([
            this.held,
            data
        ]);
        if (combined.length <= HOP_CD_MARKER_BUF.length && HOP_CD_MARKER_BUF.subarray(0, combined.length).equals(combined)) {
            this.held = combined;
            return void 0;
        }
        this.released = true;
        this.held = Buffer.alloc(0);
        return combined;
    }
    takeHeld() {
        if (this.held.length === 0) {
            this.released = true;
            return void 0;
        }
        const out = this.held;
        this.held = Buffer.alloc(0);
        this.released = true;
        return out;
    }
};
SPAWN_CWD_HOP_SCRIPT = `cd "$1" || { printf %s '${SPAWN_CWD_HOP_CD_FAILED_MARKER}'; exit ${SPAWN_CWD_HOP_CD_FAILED_EXIT}; }; shift; exec "$@"`;
defaultReadMountinfo = readProcSelfMountinfo;
SPAWN_CWD_HOP_USED_EVENT = "exec_daemon.spawn.cwd_hop";
SPAWN_CWD_HOP_CD_FAILED_EVENT = "exec_daemon.spawn.cwd_hop_cd_failed";

}
