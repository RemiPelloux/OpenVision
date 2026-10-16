import { h } from "./tslib.es6.js";
function rUe() {
    const e = Date.now();
    return e < Xb ? !1 : (Xb = e + y4, !0);
}
var k4, wm, Em, kt, Nv, wi, bm, S4, y4, Xb, w4;
export { Em, Nv, S4, Xb, bm, k4, kt, rUe, w4, wi, wm, y4 };
var __wakaru_Ve_initialized = false;
export function Ve() {
if (__wakaru_Ve_initialized) return;
__wakaru_Ve_initialized = true;
"use strict";
h(), k4 = class {
    constructor(){
        this.listeners = [], this.unexpectedErrorHandler = function(e) {
            setTimeout(()=>{
                throw e.stack ? wi.isErrorNoTelemetry(e) ? new wi(e.message + `

` + e.stack) : new Error(e.message + `

` + e.stack) : e;
            }, 0);
        };
    }
    addListener(e) {
        return this.listeners.push(e), ()=>{
            this._removeListener(e);
        };
    }
    emit(e) {
        this.listeners.forEach((t)=>{
            t(e);
        });
    }
    _removeListener(e) {
        this.listeners.splice(this.listeners.indexOf(e), 1);
    }
    setUnexpectedErrorHandler(e) {
        this.unexpectedErrorHandler = e;
    }
    getUnexpectedErrorHandler() {
        return this.unexpectedErrorHandler;
    }
    onUnexpectedError(e) {
        this.unexpectedErrorHandler(e), this.emit(e);
    }
    onUnexpectedExternalError(e) {
        this.unexpectedErrorHandler(e);
    }
}, wm = new k4, Em = "Canceled", kt = class extends Error {
    constructor(){
        if (super(Em), this.name = this.message, w4 && typeof console < "u" && rUe()) {
            const e = new Error().stack ?? "";
            S4.some((t)=>e.includes(t)) && console.trace("[DebugCancellation] CancellationError created");
        }
    }
}, Nv = class extends Error {
    constructor(){
        super(...arguments), this.isExpected = !0;
    }
}, wi = class fx extends Error {
    constructor(t){
        super(t), this.name = "CodeExpectedError";
    }
    static fromError(t) {
        if (t instanceof fx) return t;
        const n = new fx;
        return n.message = t.message, n.stack = t.stack, n;
    }
    static isErrorNoTelemetry(t) {
        return t.name === "CodeExpectedError";
    }
}, bm = class $9e extends Error {
    constructor(t){
        super(t || "An unexpected bug occurred."), Object.setPrototypeOf(this, $9e.prototype);
    }
}, S4 = [
    "composerChatService",
    "composerService",
    "composerUtilsService",
    "composerAgentService",
    "composerCapabilities",
    "composerDecisionsService",
    "aiServiceImpl",
    "toolsV2Service",
    "toolsV2HandlerRegistryService",
    "agentCompatService",
    "mockAgentStreamController",
    "mockComposerStreamController",
    "toolFormer",
    "ToolFormer",
    "tool",
    "agent",
    "Agent",
    "stream",
    "Stream",
    "ComposerFullInputBox",
    "composerActions",
    "cancelAll",
    "abortChatAndWaitForFinish",
    "abortGenerationUUID"
], y4 = 5e3, Xb = 0, w4 = !1;

}
