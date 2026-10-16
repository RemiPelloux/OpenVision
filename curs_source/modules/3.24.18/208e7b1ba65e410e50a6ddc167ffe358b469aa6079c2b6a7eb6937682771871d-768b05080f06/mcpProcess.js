import { le, wr } from "./async.js";
import { h } from "./tslib.es6.js";
function TYe(e) {
    if (e === Qg.ipcReady) return "ipcReady";
    if (e === Qg.initDone) return "initDone";
}
var Qg, Ope, Lpe, Upe, xpe, mO, pO, bu, Zg, ef;
export { Lpe, Ope, Qg, TYe, Upe, Zg, bu, ef, mO, pO, xpe };
var __wakaru_Fpe_initialized = false;
export function Fpe() {
if (__wakaru_Fpe_initialized) return;
__wakaru_Fpe_initialized = true;
"use strict";
h(), le(), Qg = {
    exit: "vscode:electron-main->mcp-process=exit",
    ipcReady: "vscode:mcp-process->electron-main=ipc-ready",
    initDone: "vscode:mcp-process->electron-main=init-done",
    initFailed: "vscode:mcp-process->electron-main=init-failed"
}, Ope = class {
    constructor(){
        this.seenSignals = new Set, this.waiters = new Map;
    }
    reset() {
        this.seenSignals.clear(), this.cancelAll();
    }
    hasSeen(e) {
        return this.seenSignals.has(e);
    }
    waitFor(e) {
        if (this.hasSeen(e)) {
            const r = new wr;
            return r.complete(), r;
        }
        const t = this.waiters.get(e);
        if (t) return t;
        const n = new wr;
        return this.waiters.set(e, n), n;
    }
    mark(e) {
        this.seenSignals.add(e);
        const t = this.waiters.get(e);
        t && (this.waiters.delete(e), t.complete());
    }
    markMessage(e) {
        const t = TYe(e);
        return t && this.mark(t), t;
    }
    errorAll(e) {
        for (const t of this.waiters.values())t.error(e);
        this.waiters.clear();
    }
    cancelAll() {
        for (const e of this.waiters.values())e.cancel();
        this.waiters.clear();
    }
}, Lpe = "vscode:mcp-process->electron-main=startup-diagnostic", Upe = {
    entrypointLoaded: "entrypoint_loaded",
    configWaitStarted: "config_wait_started",
    configReceived: "config_received",
    mainEntered: "main_entered",
    beforeIpcReady: "before_ipc_ready",
    afterIpcReady: "after_ipc_ready",
    initServicesStart: "init_services_start",
    initServicesEnd: "init_services_end",
    initChannelsStart: "init_channels_start",
    initChannelsEnd: "init_channels_end",
    beforeInitDone: "before_init_done",
    afterInitDone: "after_init_done",
    initFailed: "init_failed"
}, xpe = new Set(Object.values(Upe)), mO = {
    request: "vscode:createMcpProcessChannelConnection",
    response: "vscode:createMcpProcessChannelConnectionResult"
}, pO = {
    request: "vscode:createMcpProcessRawConnection",
    response: "vscode:createMcpProcessRawConnectionResult"
}, bu = {
    diagnostics: "mcp.diagnostics",
    servers: "mcp.servers",
    lifecycle: "mcp.lifecycle",
    tools: "mcp.tools",
    snapshots: "mcp.snapshots",
    auth: "mcp.auth",
    elicitation: "mcp.elicitation",
    commandBridge: "mcpProcessCommandBridge",
    structuredLogs: "mcp.structuredLogs",
    experiments: "mcp.experiments",
    networkControls: "mcp.networkControls",
    networkResume: "mcp.networkResume",
    proxy: "mcp.proxy"
}, Zg = {
    restartMaxPer10Min: 5,
    restartBackoffCapMs: 6e4,
    coldStartTimeoutMs: 6e4
}, ef = 600 * 1e3;

}
