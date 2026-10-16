import { __toESM } from "../../../../../../../../../agent-host/dist/storage/sqlite-store.js";
import { getDefaultEnvironment, isElectron, serializeMessage } from "../../../../../../../../../coerce_exports.js";
import { ReadBuffer, init_stdio } from "../shared/stdio.js";
import { require_cross_spawn } from "../../../../../../../cross-spawn@7.0.6/node_modules/cross-spawn/index.js";
var import_cross_spawn, import_node_process, import_node_stream4, DEFAULT_INHERITED_ENV_VARS, StdioClientTransport;
export { DEFAULT_INHERITED_ENV_VARS, StdioClientTransport, import_cross_spawn, import_node_process, import_node_stream4 };
var __wakaru_init_stdio2_initialized = false;
export function init_stdio2() {
if (__wakaru_init_stdio2_initialized) return;
__wakaru_init_stdio2_initialized = true;
import_cross_spawn = __toESM(require_cross_spawn(), 1);
import_node_process = __toESM(require("node:process"), 1);
import_node_stream4 = require("node:stream");
init_stdio();
DEFAULT_INHERITED_ENV_VARS = import_node_process.default.platform === "win32" ? [
    "APPDATA",
    "HOMEDRIVE",
    "HOMEPATH",
    "LOCALAPPDATA",
    "PATH",
    "PROCESSOR_ARCHITECTURE",
    "SYSTEMDRIVE",
    "SYSTEMROOT",
    "TEMP",
    "USERNAME",
    "USERPROFILE",
    "PROGRAMFILES"
] : ([
    "HOME",
    "LOGNAME",
    "PATH",
    "SHELL",
    "TERM",
    "USER"
]);
StdioClientTransport = class {
    constructor(server){
        this._readBuffer = new ReadBuffer();
        this._stderrStream = null;
        this._serverParams = server;
        if (server.stderr === "pipe" || server.stderr === "overlapped") {
            this._stderrStream = new import_node_stream4.PassThrough();
        }
    }
    async start() {
        if (this._process) {
            throw new Error("StdioClientTransport already started! If using Client class, note that connect() calls start() automatically.");
        }
        return new Promise((resolve36, reject2)=>{
            const spawnFn = this._serverParams.spawn ?? import_cross_spawn.default;
            this._process = spawnFn(this._serverParams.command, this._serverParams.args ?? [], {
                env: {
                    ...getDefaultEnvironment(),
                    ...this._serverParams.env
                },
                stdio: [
                    "pipe",
                    "pipe",
                    this._serverParams.stderr ?? "inherit"
                ],
                shell: false,
                windowsHide: import_node_process.default.platform === "win32" && isElectron(),
                cwd: this._serverParams.cwd
            });
            this._process.on("error", (error3)=>{
                reject2(error3);
                this.onerror?.(error3);
            });
            this._process.on("spawn", ()=>{
                resolve36();
            });
            this._process.on("close", (_code)=>{
                this._process = void 0;
                this.onclose?.();
            });
            this._process.stdin?.on("error", (error3)=>{
                this.onerror?.(error3);
            });
            this._process.stdout?.on("data", (chunk)=>{
                this._readBuffer.append(chunk);
                this.processReadBuffer();
            });
            this._process.stdout?.on("error", (error3)=>{
                this.onerror?.(error3);
            });
            if (this._stderrStream && this._process.stderr) {
                this._process.stderr.pipe(this._stderrStream);
            }
        });
    }
    get stderr() {
        if (this._stderrStream) {
            return this._stderrStream;
        }
        return this._process?.stderr ?? null;
    }
    get pid() {
        return this._process?.pid ?? null;
    }
    processReadBuffer() {
        while(true){
            try {
                const message = this._readBuffer.readMessage();
                if (message === null) {
                    break;
                }
                this.onmessage?.(message);
            } catch (error3) {
                this.onerror?.(error3);
            }
        }
    }
    async close() {
        if (this._process) {
            const processToClose = this._process;
            this._process = void 0;
            const closePromise = new Promise((resolve36)=>{
                processToClose.once("close", ()=>{
                    resolve36();
                });
            });
            try {
                processToClose.stdin?.end();
            } catch  {}
            await Promise.race([
                closePromise,
                new Promise((resolve36)=>setTimeout(resolve36, 2e3).unref())
            ]);
            if (processToClose.exitCode === null) {
                try {
                    processToClose.kill("SIGTERM");
                } catch  {}
                await Promise.race([
                    closePromise,
                    new Promise((resolve36)=>setTimeout(resolve36, 2e3).unref())
                ]);
            }
            if (processToClose.exitCode === null) {
                try {
                    processToClose.kill("SIGKILL");
                } catch  {}
            }
        }
        this._readBuffer.clear();
    }
    send(message) {
        return new Promise((resolve36)=>{
            if (!this._process?.stdin) {
                throw new Error("Not connected");
            }
            const json2 = serializeMessage(message);
            if (this._process.stdin.write(json2)) {
                resolve36();
            } else {
                this._process.stdin.once("drain", resolve36);
            }
        });
    }
};

}
