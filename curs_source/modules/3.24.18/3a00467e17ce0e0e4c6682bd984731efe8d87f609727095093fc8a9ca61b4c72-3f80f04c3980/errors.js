import { w } from "./tslib.es6.js";
function jo() {
    const e = Date.now();
    return e < Er ? !1 : (Er = e + ls, !0);
}
var ns, os, jt, ht, Cr, as, ls, Er, cs;
export { Cr, Er, as, cs, ht, jo, jt, ls, ns, os };
var __wakaru_Ue_initialized = false;
export function Ue() {
if (__wakaru_Ue_initialized) return;
__wakaru_Ue_initialized = true;
"use strict";
w(), ns = class {
    constructor(){
        this.listeners = [], this.unexpectedErrorHandler = function(e) {
            setTimeout(()=>{
                throw e.stack ? Cr.isErrorNoTelemetry(e) ? new Cr(e.message + `

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
}, os = new ns, jt = "Canceled", ht = class extends Error {
    constructor(){
        if (super(jt), this.name = this.message, cs && typeof console < "u" && jo()) {
            const e = new Error().stack ?? "";
            as.some((t)=>e.includes(t)) && console.trace("[DebugCancellation] CancellationError created");
        }
    }
}, Cr = class K1 extends Error {
    constructor(t){
        super(t), this.name = "CodeExpectedError";
    }
    static fromError(t) {
        if (t instanceof K1) return t;
        const r = new K1;
        return r.message = t.message, r.stack = t.stack, r;
    }
    static isErrorNoTelemetry(t) {
        return t.name === "CodeExpectedError";
    }
}, as = [
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
], ls = 5e3, Er = 0, cs = !1;

}
