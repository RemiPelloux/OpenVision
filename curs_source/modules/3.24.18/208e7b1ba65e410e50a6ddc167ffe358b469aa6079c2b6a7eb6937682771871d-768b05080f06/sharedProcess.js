import { h } from "./tslib.es6.js";
var Vw, lO, dO;
export { Vw, dO, lO };
var __wakaru_dYe_initialized = false;
export function dYe() {
if (__wakaru_dYe_initialized) return;
__wakaru_dYe_initialized = true;
"use strict";
h(), Vw = {
    exit: "vscode:electron-main->shared-process=exit",
    ipcReady: "vscode:shared-process->electron-main=ipc-ready",
    initDone: "vscode:shared-process->electron-main=init-done"
}, lO = {
    request: "vscode:createSharedProcessChannelConnection",
    response: "vscode:createSharedProcessChannelConnectionResult"
}, dO = {
    request: "vscode:createSharedProcessRawConnection",
    response: "vscode:createSharedProcessRawConnectionResult"
};

}
