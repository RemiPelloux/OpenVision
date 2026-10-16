import { __toESM } from "../../../agent-host/dist/storage/sqlite-store.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../context/dist/index.js";
import { delay } from "../../../dist_exports.js";
import { redactMacComputerUseError } from "../../../dist_exports2.js";
import { MacRPCProtocol, MacRPCProtocolError, init_mac_rpc_protocol } from "./mac-rpc-protocol.js";
import { init_dist3 } from "../../../utils/dist/index.js";
var import_node_child_process11, import_node_crypto11, import_node_fs23, import_promises20, import_node_net, os9, path18, MacComputerUseRPCError, MacComputerUseRPCClient;
export { MacComputerUseRPCClient, MacComputerUseRPCError, import_node_child_process11, import_node_crypto11, import_node_fs23, import_node_net, import_promises20, os9, path18 };
var __wakaru_init_mac_rpc_client_initialized = false;
export function init_mac_rpc_client() {
if (__wakaru_init_mac_rpc_client_initialized) return;
__wakaru_init_mac_rpc_client_initialized = true;
"use strict";
import_node_child_process11 = require("node:child_process");
import_node_crypto11 = require("node:crypto");
import_node_fs23 = require("node:fs");
import_promises20 = require("node:fs/promises");
import_node_net = require("node:net");
os9 = __toESM(require("node:os"), 1);
path18 = __toESM(require("node:path"), 1);
init_dist();
init_dist3();
init_mac_rpc_protocol();
MacComputerUseRPCError = class extends Error {
    constructor(message, options2){
        super(message);
        this.name = "MacComputerUseRPCError";
        this.code = options2?.code;
        this.userFacing = options2?.userFacing === true;
        this.tool = options2?.tool;
    }
};
MacComputerUseRPCClient = class _MacComputerUseRPCClient {
    constructor(mode){
        this.mode = mode;
    }
    static isInstalled() {
        if ((0, import_node_fs23.existsSync)(_MacComputerUseRPCClient.serviceExecutablePath())) {
            return true;
        }
        return (0, import_node_fs23.existsSync)(_MacComputerUseRPCClient.serviceStatePath());
    }
    screenshot(ctx) {
        return this.callTool(ctx, "computer_use_screenshot", {});
    }
    click(ctx, click) {
        return this.callTool(ctx, "computer_use_click", {
            method: "coordinate",
            ...click.coordinate !== void 0 && {
                x: click.coordinate.x,
                y: click.coordinate.y
            },
            button: click.button,
            count: click.count,
            modifier_keys: click.modifierKeys
        });
    }
    scroll(ctx, scroll) {
        return this.callTool(ctx, "computer_use_scroll", {
            x: scroll.coordinate?.x,
            y: scroll.coordinate?.y,
            direction: scroll.direction,
            amount: scroll.amount,
            modifier_keys: scroll.modifierKeys
        });
    }
    move(ctx, coordinate) {
        return this.callTool(ctx, "computer_use_mouse_move", {
            x: coordinate.x,
            y: coordinate.y
        });
    }
    mouseButton(ctx, action) {
        return this.callTool(ctx, "computer_use_mouse_button", {
            button: action.button,
            action: action.action
        });
    }
    drag(ctx, drag) {
        return this.callTool(ctx, "computer_use_drag", {
            button: drag.button,
            path: drag.path,
            modifier_keys: drag.modifierKeys
        });
    }
    typeText(ctx, text4) {
        return this.callTool(ctx, "computer_use_typing", {
            value: text4
        });
    }
    pressKey(ctx, key) {
        return this.callTool(ctx, "computer_use_press_key", {
            key: key.key,
            hold_duration_ms: key.holdDurationMs
        });
    }
    checkPermissions(ctx) {
        return this.callTool(ctx, "computer_use_check_permissions", {});
    }
    async startControl(ctx) {
        if (this.mode !== "remote" || this.activeSessionId !== void 0) {
            return;
        }
        _MacComputerUseRPCClient.throwIfAborted(ctx.signal);
        const requestID = (0, import_node_crypto11.randomUUID)();
        const response = await this.sendWithRelaunchRetry(ctx, ()=>({
                id: _MacComputerUseRPCClient.requestID,
                method: "control/start",
                requestID,
                mode: this.mode
            }), "control/start");
        if (response.error !== void 0) {
            throw _MacComputerUseRPCClient.rpcError(response);
        }
        if (response.sessionId === void 0) {
            throw new MacComputerUseRPCError("local-cua control/start returned no session");
        }
        this.activeSessionId = response.sessionId;
    }
    async releaseControl(ctx) {
        const sessionId = this.activeSessionId;
        if (sessionId === void 0) {
            return;
        }
        this.activeSessionId = void 0;
        try {
            const state = await _MacComputerUseRPCClient.readServiceState();
            if (state === void 0) {
                return;
            }
            const response = await _MacComputerUseRPCClient.sendOnce(_MacComputerUseRPCClient.socketPathFrom(state), {
                id: _MacComputerUseRPCClient.requestID,
                method: "control/release",
                requestID: (0, import_node_crypto11.randomUUID)(),
                mode: this.mode,
                sessionId
            }, _MacComputerUseRPCClient.defaultCallTimeoutMs);
            if (response.error !== void 0) {
                throw _MacComputerUseRPCClient.rpcError(response);
            }
        } catch (error3) {
            _MacComputerUseRPCClient.logger.warn(ctx, "local-cua control release failed", {
                error: redactMacComputerUseError(error3)
            });
        }
    }
    async callTool(ctx, name17, args) {
        _MacComputerUseRPCClient.throwIfAborted(ctx.signal);
        const timeoutMs = _MacComputerUseRPCClient.defaultCallTimeoutMs;
        const response = await this.sendWithRelaunchRetry(ctx, ()=>{
            const startedAtEpochSeconds = Date.now() / 1e3;
            const sessionId = this.activeSessionId;
            return {
                id: _MacComputerUseRPCClient.requestID,
                method: "tools/call",
                requestID: (0, import_node_crypto11.randomUUID)(),
                name: name17,
                arguments: args,
                timeoutSeconds: timeoutMs / 1e3,
                startedAtEpochSeconds,
                deadlineEpochSeconds: startedAtEpochSeconds + timeoutMs / 1e3,
                mode: this.mode,
                ...sessionId !== void 0 && {
                    sessionId
                }
            };
        }, name17);
        if (response.error !== void 0) {
            throw _MacComputerUseRPCClient.rpcError(response, name17);
        }
        const result = response.result;
        if (result === void 0) {
            throw new MacComputerUseRPCError(`local-cua tool ${name17} returned no result`, {
                tool: name17
            });
        }
        if (result.isError) {
            const text4 = result.message.trim();
            throw new MacComputerUseRPCError(text4.length > 0 ? text4 : `local-cua tool ${name17} reported an error`, {
                tool: name17,
                userFacing: text4.length > 0
            });
        }
        return result;
    }
    async sendWithRelaunchRetry(ctx, buildRequest, label) {
        const timeoutMs = _MacComputerUseRPCClient.defaultCallTimeoutMs;
        const socketPath = await this.ensureSocketPath(ctx);
        _MacComputerUseRPCClient.throwIfAborted(ctx.signal);
        try {
            return await _MacComputerUseRPCClient.sendOnce(socketPath, buildRequest(), timeoutMs, ctx.signal);
        } catch (error3) {
            if (!_MacComputerUseRPCClient.isPreDeliveryConnectionError(error3)) {
                throw error3;
            }
            _MacComputerUseRPCClient.logger.warn(ctx, "local-cua callTool failed; relaunching and retrying", {
                tool: label,
                error: _MacComputerUseRPCClient.spawnErrorCode(error3)
            });
            const retryPath = await this.ensureSocketPath(ctx, true);
            _MacComputerUseRPCClient.throwIfAborted(ctx.signal);
            if (this.activeSessionId !== void 0) {
                this.activeSessionId = void 0;
                await this.startControl(ctx);
            }
            return await _MacComputerUseRPCClient.sendOnce(retryPath, buildRequest(), timeoutMs, ctx.signal);
        }
    }
    static rpcError(response, tool) {
        return new MacComputerUseRPCError(response.error, {
            code: response.errorCode,
            userFacing: true,
            tool
        });
    }
    async ensureSocketPath(ctx, forceLaunch = false) {
        _MacComputerUseRPCClient.throwIfAborted(ctx.signal);
        if (!forceLaunch) {
            const state2 = await _MacComputerUseRPCClient.readServiceState();
            if (state2) {
                return _MacComputerUseRPCClient.socketPathFrom(state2);
            }
        }
        await this.launchAndWait(ctx);
        const state = await _MacComputerUseRPCClient.readServiceState();
        if (!state) {
            throw new MacComputerUseRPCError("local-cua sidecar did not publish service.json after launch");
        }
        return _MacComputerUseRPCClient.socketPathFrom(state);
    }
    async launchAndWait(ctx) {
        const appPath = _MacComputerUseRPCClient.serviceAppPath();
        _MacComputerUseRPCClient.logger.info(ctx, "launching local-cua sidecar", _MacComputerUseRPCClient.sidecarLaunchLogFields(appPath));
        if (process.env[_MacComputerUseRPCClient.directLaunchEnv] === "1") {
            await _MacComputerUseRPCClient.spawnSidecarProcess(ctx, _MacComputerUseRPCClient.serviceExecutablePath(), [], {
                detached: true
            });
        } else {
            await _MacComputerUseRPCClient.spawnSidecarProcess(ctx, "/usr/bin/open", [
                "-g",
                appPath
            ]);
        }
        const deadline = Date.now() + _MacComputerUseRPCClient.launchReadyTimeoutMs;
        while(Date.now() < deadline){
            _MacComputerUseRPCClient.throwIfAborted(ctx.signal);
            const state = await _MacComputerUseRPCClient.readServiceState();
            if (state) {
                try {
                    const response = await _MacComputerUseRPCClient.sendOnce(_MacComputerUseRPCClient.socketPathFrom(state), {
                        id: _MacComputerUseRPCClient.requestID,
                        method: "ping"
                    }, 2e3, ctx.signal);
                    if ("ok" in response) {
                        return;
                    }
                } catch  {}
            }
            await delay(_MacComputerUseRPCClient.launchPollIntervalMs);
        }
        throw new MacComputerUseRPCError("local-cua sidecar did not become ready in time");
    }
    static isPreDeliveryConnectionError(error3) {
        const code = redactMacComputerUseError(error3);
        return code === "ENOENT" || code === "ECONNREFUSED";
    }
    static appSupportDirectory() {
        const override = process.env[_MacComputerUseRPCClient.appSupportOverrideEnv];
        if (override && override.length > 0) {
            return override;
        }
        return path18.join(os9.homedir(), "Library", "Application Support", _MacComputerUseRPCClient.appSupportFolder);
    }
    static serviceStatePath() {
        return path18.join(_MacComputerUseRPCClient.appSupportDirectory(), "service.json");
    }
    static serviceAppPath() {
        const override = process.env[_MacComputerUseRPCClient.serviceAppOverrideEnv];
        if (override && override.length > 0) {
            return override;
        }
        return path18.join(os9.homedir(), ".cursor", "cursor-computer-use", `${_MacComputerUseRPCClient.serviceAppBundleName}.app`);
    }
    static sidecarLaunchLogFields(appPath) {
        const expectedName = `${_MacComputerUseRPCClient.serviceAppBundleName}.app`;
        return {
            appName: path18.basename(appPath) === expectedName ? expectedName : "custom",
            appPathHash: (0, import_node_crypto11.createHash)("sha256").update(appPath).digest("hex"),
            usingOverride: Boolean(process.env[_MacComputerUseRPCClient.serviceAppOverrideEnv])
        };
    }
    static spawnErrorCode(error3) {
        return redactMacComputerUseError(error3);
    }
    static socketError(error3) {
        const code = redactMacComputerUseError(error3);
        return new MacComputerUseRPCError(`local-cua RPC connection failed: ${code}`, {
            code
        });
    }
    static serviceExecutablePath() {
        return path18.join(_MacComputerUseRPCClient.serviceAppPath(), "Contents", "MacOS", "CUCursorService");
    }
    static spawnSidecarProcess(ctx, command, args, options2) {
        return new Promise((resolve36, reject2)=>{
            const child = (0, import_node_child_process11.spawn)(command, [
                ...args
            ], {
                detached: options2?.detached === true,
                stdio: "ignore"
            });
            const fail3 = (error3)=>{
                reject2(new MacComputerUseRPCError(`local-cua sidecar launch failed: ${_MacComputerUseRPCClient.spawnErrorCode(error3)}`));
            };
            child.once("error", fail3);
            child.once("spawn", ()=>{
                child.removeListener("error", fail3);
                child.on("error", (error3)=>{
                    _MacComputerUseRPCClient.logger.warn(ctx, "local-cua sidecar process error after launch", {
                        error: _MacComputerUseRPCClient.spawnErrorCode(error3)
                    });
                });
                child.unref();
                resolve36();
            });
        });
    }
    static async readServiceState() {
        try {
            const raw = await (0, import_promises20.readFile)(_MacComputerUseRPCClient.serviceStatePath(), "utf8");
            return MacRPCProtocol.parseServiceState(raw);
        } catch (error3) {
            if (error3 instanceof Error && "code" in error3 && error3.code === "ENOENT") {
                return void 0;
            }
            if (error3 instanceof MacRPCProtocolError) {
                return void 0;
            }
            throw new MacComputerUseRPCError("local-cua service state could not be read");
        }
    }
    static socketPathFrom(state) {
        return state.rpcSocketPath;
    }
    static abortError(signal) {
        return signal.reason instanceof Error ? signal.reason : new MacComputerUseRPCError("local-cua RPC aborted");
    }
    static throwIfAborted(signal) {
        if (signal.aborted) {
            throw _MacComputerUseRPCClient.abortError(signal);
        }
    }
    static sendOnce(socketPath, request3, timeoutMs, signal) {
        if (signal?.aborted) {
            return Promise.reject(_MacComputerUseRPCClient.abortError(signal));
        }
        return new Promise((resolve36, reject2)=>{
            let settled = false;
            let bufferedChunks = [];
            let bufferedBytes = 0;
            let requestDelivered = false;
            const socket = (0, import_node_net.createConnection)({
                path: socketPath
            });
            const finish = (fn)=>{
                if (settled) {
                    return;
                }
                settled = true;
                clearTimeout(timer2);
                signal?.removeEventListener("abort", onAbort);
                socket.destroy();
                fn();
            };
            const onAbort = ()=>{
                finish(()=>reject2(signal === void 0 ? new MacComputerUseRPCError("local-cua RPC aborted") : _MacComputerUseRPCClient.abortError(signal)));
            };
            const timer2 = setTimeout(()=>{
                finish(()=>reject2(new MacComputerUseRPCError(`local-cua RPC timed out after ${timeoutMs}ms`)));
            }, timeoutMs);
            signal?.addEventListener("abort", onAbort, {
                once: true
            });
            if (signal?.aborted) {
                onAbort();
                return;
            }
            socket.on("connect", ()=>{
                socket.write(`${JSON.stringify(request3)}
`, (error3)=>{
                    if (error3 != null) {
                        finish(()=>reject2(_MacComputerUseRPCClient.socketError(error3)));
                        return;
                    }
                    requestDelivered = true;
                });
            });
            socket.on("data", (chunk)=>{
                const newlineIndex = chunk.indexOf(10);
                const frameBytes = bufferedBytes + (newlineIndex < 0 ? chunk.length : newlineIndex);
                if (frameBytes > MacRPCProtocol.responseMaxBytes) {
                    finish(()=>reject2(new MacComputerUseRPCError("local-cua RPC response exceeded the size limit")));
                    return;
                }
                if (newlineIndex < 0) {
                    bufferedChunks.push(chunk);
                    bufferedBytes += chunk.length;
                    return;
                }
                bufferedChunks.push(chunk.subarray(0, newlineIndex));
                const line = Buffer.concat(bufferedChunks, frameBytes);
                bufferedChunks = [];
                bufferedBytes = 0;
                try {
                    const parsed = MacRPCProtocol.parseResponse({
                        line,
                        expectedID: _MacComputerUseRPCClient.requestID
                    });
                    finish(()=>resolve36(parsed));
                } catch (error3) {
                    finish(()=>reject2(error3));
                }
            });
            socket.on("error", (error3)=>{
                if (requestDelivered) {
                    finish(()=>reject2(new MacComputerUseRPCError("local-cua RPC connection failed after request delivery")));
                    return;
                }
                finish(()=>reject2(_MacComputerUseRPCClient.socketError(error3)));
            });
            socket.on("close", ()=>{
                const message = bufferedBytes > 0 ? "local-cua RPC response ended without a newline" : requestDelivered ? "local-cua RPC connection closed after request delivery" : "local-cua RPC connection closed";
                finish(()=>reject2(new MacComputerUseRPCError(message)));
            });
        });
    }
};
MacComputerUseRPCClient.logger = createLogger("local-cua:rpc");
MacComputerUseRPCClient.serviceAppBundleName = "Cursor Computer Use";
MacComputerUseRPCClient.appSupportFolder = "cursor-computer-use";
MacComputerUseRPCClient.appSupportOverrideEnv = "CUA_APP_SUPPORT_DIR";
MacComputerUseRPCClient.serviceAppOverrideEnv = "CUA_SERVICE_APP";
MacComputerUseRPCClient.directLaunchEnv = "CUA_DIRECT_LAUNCH";
MacComputerUseRPCClient.defaultCallTimeoutMs = 45e3;
MacComputerUseRPCClient.launchReadyTimeoutMs = 8e3;
MacComputerUseRPCClient.launchPollIntervalMs = 200;
MacComputerUseRPCClient.requestID = 1;

}
