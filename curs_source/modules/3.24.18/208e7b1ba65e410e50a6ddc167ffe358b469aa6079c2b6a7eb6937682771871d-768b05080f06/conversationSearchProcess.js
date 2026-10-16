import { it } from "./buffer.js";
import { h } from "./tslib.es6.js";
var Xg, jw, gYe, fYe, uO, Mpe, Ppe, Npe;
export { Mpe, Npe, Ppe, Xg, fYe, gYe, jw, uO };
var __wakaru__Ye_initialized = false;
export function _Ye() {
if (__wakaru__Ye_initialized) return;
__wakaru__Ye_initialized = true;
"use strict";
h(), it(), Xg = {
    exit: "vscode:electron-main->conversation-search=exit",
    ipcReady: "vscode:conversation-search->electron-main=ipc-ready",
    initDone: "vscode:conversation-search->electron-main=init-done",
    initFailed: "vscode:conversation-search->electron-main=init-failed"
}, jw = {
    request: "vscode:createConversationSearchProcessConnection",
    response: "vscode:createConversationSearchProcessConnectionResult"
}, gYe = 256 * 1024, fYe = 512 * 1024, uO = 600 * 1e3, Mpe = 5, Ppe = 6e4, Npe = 3e4;

}
