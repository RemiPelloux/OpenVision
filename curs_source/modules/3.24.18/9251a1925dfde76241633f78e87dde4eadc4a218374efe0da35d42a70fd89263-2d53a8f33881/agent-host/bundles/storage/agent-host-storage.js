import { SAFE_SESSION_ID, init_session_id } from "./session-id.js";
import { AgentHostSqliteStore, __toESM, errorCode, import_node_fs, init_sqlite_store } from "./sqlite-store.js";
function isPathSafeSessionId(sessionId) {
    return SAFE_SESSION_ID.test(sessionId) && !sessionId.includes("..");
}
function assertPathSafeSessionId(sessionId) {
    if (!isPathSafeSessionId(sessionId)) {
        throw new Error(`Invalid sessionId ${JSON.stringify(sessionId)}: must be one path segment, start with a letter or digit, use only [A-Za-z0-9._-], and be at most 128 chars`);
    }
}
function withoutAbsolutePath(error3, relPath) {
    const { code } = errorCode(error3);
    return code === void 0 ? error3 : Object.assign(new Error(`${code} on ${relPath}`), {
        code
    });
}
function isRegularFile(filePath) {
    try {
        return import_node_fs.default.lstatSync(filePath).isFile();
    } catch  {
        return false;
    }
}
function pathIsOccupied(filePath) {
    try {
        import_node_fs.default.lstatSync(filePath);
        return true;
    } catch (error3) {
        const { code } = errorCode(error3);
        return code !== "ENOENT" && code !== "ENOTDIR";
    }
}
var import_node_fs2, import_node_path2, AGENT_HOST_SESSIONS_DIR_NAME, AGENT_HOST_GLOBAL_DB_FILE_NAME, AGENT_HOST_SESSION_DB_FILE_NAME, AgentHostStorage;
export { AGENT_HOST_GLOBAL_DB_FILE_NAME, AGENT_HOST_SESSIONS_DIR_NAME, AGENT_HOST_SESSION_DB_FILE_NAME, AgentHostStorage, assertPathSafeSessionId, import_node_fs2, import_node_path2, isPathSafeSessionId, isRegularFile, pathIsOccupied, withoutAbsolutePath };
var __wakaru_init_agent_host_storage_initialized = false;
export function init_agent_host_storage() {
if (__wakaru_init_agent_host_storage_initialized) return;
__wakaru_init_agent_host_storage_initialized = true;
"use strict";
import_node_fs2 = __toESM(require("node:fs"), 1);
import_node_path2 = __toESM(require("node:path"), 1);
init_session_id();
init_sqlite_store();
AGENT_HOST_SESSIONS_DIR_NAME = "sessions";
AGENT_HOST_GLOBAL_DB_FILE_NAME = "data.sqlite";
AGENT_HOST_SESSION_DB_FILE_NAME = "session.sqlite";
AgentHostStorage = class {
    constructor(storageDir, observer){
        this.storageDir = storageDir;
        this.observer = observer;
        if (storageDir.length === 0) {
            throw new Error("Agent host storage needs a non-empty storageDir");
        }
        this.sessionsDir = import_node_path2.default.join(storageDir, AGENT_HOST_SESSIONS_DIR_NAME);
        this.globalDbPath = import_node_path2.default.join(storageDir, AGENT_HOST_GLOBAL_DB_FILE_NAME);
    }
    openGlobalStore() {
        return this.open("global", this.globalDbPath);
    }
    sessionDir(sessionId) {
        assertPathSafeSessionId(sessionId);
        return import_node_path2.default.join(this.sessionsDir, sessionId);
    }
    sessionDbPath(sessionId) {
        return import_node_path2.default.join(this.sessionDir(sessionId), AGENT_HOST_SESSION_DB_FILE_NAME);
    }
    sessionDbRelPath(sessionId) {
        return this.relPath(this.sessionDbPath(sessionId));
    }
    hasSessionStore(sessionId) {
        return pathIsOccupied(this.sessionDbPath(sessionId));
    }
    openSessionStore(sessionId) {
        return this.open("session", this.sessionDbPath(sessionId));
    }
    readSessionStore(sessionId) {
        const filePath = this.sessionDbPath(sessionId);
        return AgentHostSqliteStore.openReadOnly(filePath, {
            store: "session",
            relPath: this.relPath(filePath),
            observer: this.observer
        });
    }
    open(store, filePath) {
        return AgentHostSqliteStore.open(filePath, {
            store,
            relPath: this.relPath(filePath),
            observer: this.observer
        });
    }
    deleteSessionDir(sessionId) {
        const dir = this.sessionDir(sessionId);
        try {
            import_node_fs2.default.rmSync(dir, {
                recursive: true,
                force: true
            });
        } catch (error3) {
            throw withoutAbsolutePath(error3, this.relPath(dir));
        }
    }
    relPath(filePath) {
        return import_node_path2.default.relative(this.storageDir, filePath).split(import_node_path2.default.sep).join("/");
    }
    listSessionIds() {
        let entries;
        try {
            entries = import_node_fs2.default.readdirSync(this.sessionsDir, {
                withFileTypes: true
            });
        } catch (error3) {
            if (errorCode(error3).code === "ENOENT") {
                return [];
            }
            throw withoutAbsolutePath(error3, this.relPath(this.sessionsDir));
        }
        return entries.filter((entry)=>entry.isDirectory() && isPathSafeSessionId(entry.name) && isRegularFile(import_node_path2.default.join(this.sessionsDir, entry.name, AGENT_HOST_SESSION_DB_FILE_NAME))).map((entry)=>entry.name).sort();
    }
};

}
